import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { formatPossessive, normalize } from '@squiddleton/util';
import type { DemonData, PersonaData } from './dataTypes.js';
import demonData from './demonData.js';
import { MegatenError } from './error.js';
import { AnySkill, Skill } from './skill.js';
import type { AnyGame, Arcana, DemonAffinities, DemonAlignment, DemonResistances, DemonSkill, DemonStats, If, PersonaGame, PersonaRace, SMTRace, Stage } from './types.js';

function isPersona(demon: Demon | DemonData): demon is Persona {
	return demon.race === 'Persona';
}
function mapByDevName<T extends Demon>(obj: T): [string, T] {
	return [obj.devName, obj];
}

export type AnyDemon = Demon<true> | Demon<false>;

export class Demon<PersonaBased extends boolean = boolean> implements DemonData<PersonaBased> {
	/** The demon's name */
	name: string;
	/** The demon's alternative names */
	aliases: string[];
	/** The demon's normalized name used for matching queries */
	devName: string;
	/** The demon's skill potential and inherit affinity */
	affinities: DemonAffinities<PersonaBased>;
	/** The demon's Arcana in Persona titles, or null if unknown */
	arcana: If<PersonaBased, Arcana, Arcana | null>;
	/** The demon's race in mainline Shin Megami Tensei titles, or null if unknown */
	race: If<PersonaBased, PersonaRace, SMTRace | null>;
	/** The demon's initial level */
	level: number;
	/** The demon's initial HP */
	hp: If<PersonaBased, null, number | null>;
	/** The demon's initial MP/SP */
	mp: If<PersonaBased, null, number | null>;
	/** The demon's initial stats */
	stats: DemonStats;
	/** The skills that the demon learns via leveling up */
	learnset: DemonSkill[];
	/** The demon's ailment and affinity resistances */
	resistances: DemonResistances<PersonaBased>;
	/** The game that the demon's data originates from */
	game: If<PersonaBased, PersonaGame, AnyGame>;
	/** The demon's moral and ethical alignment */
	alignment: If<PersonaBased, null, DemonAlignment>;
	/** The demon's backstory, or null for older Personas */
	lore: If<PersonaBased, string | null, string>;
	constructor(data: DemonData<PersonaBased>) {
		this.name = data.name;
		this.aliases = data.aliases ?? [];
		this.devName = normalize(data.name);
		this.affinities = data.affinities;
		this.arcana = data.arcana;
		this.race = data.race;
		this.level = data.level;
		this.hp = data.hp;
		this.mp = data.mp;
		this.stats = data.stats;
		this.learnset = data.learnset;
		this.resistances = data.resistances;
		this.game = data.game;
		this.alignment = data.alignment;
		this.lore = data.lore;
	}
	/** Asynchronously gets an image of the demon */
	getImage() {
		return readFile(path.join(__dirname, '..', `images/demons/${this.devName}.png`));
	}
	/** Whether the demon is a Persona instance */
	isPersona(): this is Persona {
		return isPersona(this);
	}
	/** Whether the demon is exclusive to Persona games */
	isPersonaBased(): this is Demon<true> {
		return this.race !== null && ['Persona', 'Picaro', 'Treasure'].includes(this.race);
	}
	/** Returns a string in "(Race) (Name)" format, or the name if the race is unknown */
	toString(): string {
		return this.race !== null && !this.isPersonaBased() ? `${this.race} ${this.name}` : this.name;
	}
	/** An image of the demon */
	get image() {
		return readFileSync(path.join(__dirname, '..', `images/demons/${this.devName}.png`));
	}
	/** An array of every Demon and Persona instance */
	static array: readonly AnyDemon[] = [];
	/** A map of every Demon and Persona instance, keyed by their devName properties */
	static map: Map<string, AnyDemon> = new Map();
	/**
	 *
	 * Gets a Demon instance by its name.
	 * @example
	 * ```ts
	 * const demon1 = Demon.get('Jack Frost', true); // Type: Demon
	 * console.log(demon1); // Demon { ... }
	 *
	 * const demon2 = Demon.get('Kazuma Kaneko'); // Type: Demon | null
	 * console.log(demon2); // null
	 *
	 * const demon3 = Demon.get('Masayuki Doi', true); // Type: Demon; Throws a MegatenError
	 * ```
	 *
	 * @param name - The demon's name
	 * @param error - Whether to throw an exception instead of returning null if no demon is found; defaults to false
	 */
	static get(name: string, error: true): AnyDemon;
	static get(name: string, error?: boolean): AnyDemon | null;
	static get(name: string, error = false) {
		const normalized = normalize(name);
		const found = this.map.get(normalized) ?? this.array.find(demon => demon.aliases.some(alias => normalize(alias) === normalized)) ?? null;
		if (error && found === null) throw new MegatenError(name, 'Demon');
		return found;
	}
}

export class Persona extends Demon<true> implements PersonaData {
	declare affinities: DemonAffinities<true>;
	declare arcana: Arcana;
	declare race: 'Persona';
	declare hp: null;
	declare mp: null;
	declare resistances: DemonResistances<true>;
	declare game: PersonaGame;
	declare moral: null;
	declare ethical: null;
	/** The Persona's user */
	user: string;
	/** The Persona's stage of evolution */
	stage: Stage;
	/** The name of the skill that the Persona will learn upon reaching this stage, or null if none */
	evoSkillName: string | null;
	/** The Skill instance that the Persona will learn upon reaching this stage, or null if none */
	evoSkill: AnySkill | null;
	constructor(data: PersonaData) {
		super(data);
		this.user = data.user;
		this.stage = data.stage;
		this.evoSkillName = data.evoSkillName;
		this.evoSkill = this.evoSkillName === null ? null : Skill.get(this.evoSkillName, true);
	}
	/** The Persona that this Persona can evolve into, or null if none */
	get evolution() {
		return Persona.array.find(persona => persona.user === this.user && persona.stage === (this.stage + 1)) ?? null;
	}
	/**
	 * Returns a string in "(User)'s (Name)" format
	 */
	toString() {
		return `${formatPossessive(this.user)} ${this.name}`;
	}
	/** An array of every Persona instance */
	static array: readonly Persona[] = [];
	/** A map of every Persona instance, keyed by their devName properties */
	static map: Map<string, Persona> = new Map();
	/**
	 *
	 * Gets a Persona instance by its name.
	 * @example
	 * ```ts
	 * const persona1 = Persona.get('Arsene', true); // Type: Persona
	 * console.log(persona1); // Persona { ... }
	 *
	 * const persona2 = Persona.get('Jack Frost'); // Type: Persona | null
	 * console.log(persona2); // null
	 *
	 * const persona3 = Persona.get('Shigenori Soejima', true); // Type: Persona; Throws a MegatenError
	 * ```
	 *
	 * @param name - The Persona's name
	 * @param error - Whether to throw an exception instead of returning null if no Persona is found; defaults to false
	 */
	static get(name: string, error: true): Persona;
	static get(name: string, error?: boolean): Persona | null;
	static get(name: string, error = false) {
		try {
			return super.get(name, error);
		}
		catch (e) {
			if (e instanceof MegatenError) throw new MegatenError(name, 'Persona');
			else throw e;
		}
	}
}

Demon.array = Object.freeze(demonData.map(data => isPersona(data) ? new Persona(data) : new Demon(data)));
Demon.map = new Map(Demon.array.map(mapByDevName));

Persona.array = Object.freeze(Demon.array.filter(isPersona));
Persona.map = new Map(Persona.array.map(mapByDevName));