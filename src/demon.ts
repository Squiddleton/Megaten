import { readFileSync } from 'node:fs';
import path from 'node:path';
import { formatPossessive, normalize } from '@squiddleton/util';
import type { DemonData, PersonaData } from './dataTypes';
import demonData from './demonData';
import { MegatenError } from './error';
import { AnySkill, Skill } from './skill';
import type { Alignment, AnyGame, Arcana, DemonAffinities, DemonResistances, DemonSkill, DemonStats, If, PersonaGame, PersonaRace, SMTRace, Stage } from './types';

function isPersona(demon: Demon | DemonData): demon is Persona {
	return demon.race === 'Persona';
}

export type AnyDemon = Demon<true> | Demon<false>;

export class Demon<PersonaBased extends boolean = boolean> implements DemonData<PersonaBased> {
	/** The demon's name */
	name: string;
	/** The demon's normalized, unique name */
	devName: string;
	/** Other names for the demon */
	aliases: string[];
	/** The demon's skill potential and inherit affinity */
	affinities: DemonAffinities<PersonaBased>;
	/** The demon's Arcana in Persona titles, or null if none */
	arcana: If<PersonaBased, Arcana, Arcana | null>;
	/** The demon's race in Shin Megami Tensei titles, or null if none */
	race: If<PersonaBased, PersonaRace, SMTRace | null>;
	/** The demon's initial level */
	level: number;
	/** The demon's initial HP */
	hp: If<PersonaBased, null, number | null>;
	/** The demon's initial MP/SP */
	mp: If<PersonaBased, null, number | null>;
	/** The demon's initial stats */
	stats: DemonStats;
	/** The skills that the demon learns by leveling up */
	learnset: DemonSkill[];
	/** The demon's resistances */
	resistances: DemonResistances<PersonaBased>;
	/** The game that the demon's data originates from */
	game: If<PersonaBased, PersonaGame, AnyGame>;
	/** The demon's moral and ethical alignment */
	alignment: Alignment<PersonaBased>;
	/** The demon's backstory, or null for older Personas */
	lore: If<PersonaBased, string | null, string>;
	constructor(data: DemonData<PersonaBased>) {
		this.name = data.name;
		this.devName = normalize(data.name);
		this.aliases = data.aliases ?? [];
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
	/** Whether the demon is a Persona instance */
	isPersona(): this is Persona {
		return isPersona(this);
	}
	/** Whether the demon is a Persona series-exclusive */
	isPersonaBased(): this is Demon<true> {
		return this.race !== null && ['Persona', 'Picaro', 'Treasure'].includes(this.race);
	}
	/** Returns a string in "(Race) (Name)" format, or just the name if the race is null */
	toString(): string {
		return this.race !== null && !this.isPersonaBased() ? `${this.race} ${this.name}` : this.name;
	}
	/** An image of the demon */
	get image() {
		return readFileSync(path.join(__dirname, '..', `images/demons/${this.devName}.png`));
	}
	/** An array of every Demon and Persona instance */
	static array: AnyDemon[] = [];
	/** A map of every Demon and Persona instance, keyed by their devName properties */
	static map: Map<string, AnyDemon> = new Map();
	/**
	 *
	 * Gets a Demon instance by its name.
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
	/** The name of the skill that the Persona will learn upon reaching this stage */
	evoSkillName: string | null;
	/** The instance of the skill that the Persona will learn upon reaching this stage */
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
	 * Returns a string in "(User) (Name)" format
	 */
	toString() {
		return `${formatPossessive(this.user)} ${this.name}`;
	}
	/** An array of every Persona instance */
	static array: Persona[] = [];
	/** A map of every Persona instance, keyed by their devName properties */
	static map: Map<string, Persona> = new Map();
	/**
	 *
	 * Gets a Persona instance by its name.
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

Demon.array = demonData.map(data => isPersona(data) ? new Persona(data) : new Demon(data));
Demon.map = new Map(Demon.array.map(demon => [demon.devName, demon]));

Persona.array = Demon.array.filter(isPersona);
Persona.map = new Map(Persona.array.map(persona => [persona.devName, persona]));