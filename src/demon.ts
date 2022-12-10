import { readFileSync } from 'node:fs';
import path from 'node:path';
import { formatPossessive, normalize } from '@squiddleton/util';
import type { DemonData, PersonaData } from './dataTypes';
import demonData from './demonData';
import { MegatenError } from './error';
import type { AnyAffinity, Arcana, DemonAffinities, DemonStats, Game, Race, Stage } from './types';

function isPersona(demon: Demon): demon is Persona;
function isPersona(demon: DemonData): demon is PersonaData;
function isPersona(demon: Demon | DemonData) {
	return demon.race === 'Persona';
}

export class Demon implements DemonData {
	/** The demon's name */
	name: string;
	/** The demon's normalized, unique name */
	devName: string;
	/** Other names for the demon */
	aliases: string[];
	/** The affinity that this demon can inherit skills of */
	inherit: Exclude<AnyAffinity, 'Gun' | 'Passive'>;
	/** The demon's Arcana in Persona titles, or null if none */
	arcana: Arcana | null;
	/** The demon's race in Shin Megami Tensei titles, or null if none */
	race: Race | null;
	/** The demon's initial level */
	level: number;
	/** The demon's initial HP */
	hp: number | null;
	/** The demon's initial MP/SP */
	mp: number | null;
	/** The demon's initial stats */
	stats: DemonStats;
	/** The skills that the demon learns by leveling up */
	learnset: {
		name: string;
		level: number;
	}[];
	/** The demon's affinities */
	affinities: DemonAffinities;
	/** The game that this demon's data originates from */
	game: Game;
	constructor(data: DemonData) {
		this.name = data.name;
		this.devName = normalize(data.name);
		this.aliases = data.aliases;
		this.inherit = data.inherit;
		this.arcana = data.arcana;
		this.race = data.race;
		this.level = data.level;
		this.hp = data.hp;
		this.mp = data.mp;
		this.stats = data.stats;
		this.learnset = data.learnset;
		this.affinities = data.affinities;
		this.game = data.game;
	}
	/** Whether the demon is a Persona instance */
	isPersona(): this is Persona {
		return isPersona(this);
	}
	/** Returns a string in "(Race) (Name)" format, or just the name if the race is null */
	toString() {
		return this.race === null ? this.name : `${this.race} ${this.name}`;
	}
	/** An image of the demon */
	get image() {
		return readFileSync(path.join(__dirname, '..', `images/demons/${this.devName}.png`));
	}
	/** An array of every Demon and Persona instance */
	static array: Demon[] = [];
	/** A map of every Demon and Persona instance, keyed by their devName properties */
	static map: Map<string, Demon> = new Map();
	/**
	 *
	 * Gets a Demon instance by its name.
	 *
	 * @param name - The demon's name
	 * @param error - Whether to throw an exception instead of returning null if no demon is found; defaults to false
	 */
	static get(name: string, error: true): Demon;
	static get(name: string, error?: boolean): Demon | null;
	static get(name: string, error = false) {
		name = normalize(name);
		const found = this.map.get(name) ?? Demon.array.find(demon => demon.aliases.some(alias => normalize(alias) === name)) ?? null;
		if (error && found === null) throw new MegatenError(name, 'Demon');
		return found;
	}
}

export class Persona extends Demon implements PersonaData {
	/** The Persona's user */
	user: string;
	/** The Persona's stage of evolution */
	stage: Stage;
	/** The skill that the Persona will learn upon reaching this stage */
	evoSkill: string | null;
	constructor(data: PersonaData) {
		super(data);
		this.user = data.user;
		this.stage = data.stage;
		this.evoSkill = data.evoSkill;
	}
	/** The Persona that this Persona can evolve into, or null if none */
	get evolution(): Persona | null {
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

function mapToCollection(demon: Persona): [string, Persona];
function mapToCollection(demon: Demon) {
	return [demon.devName, demon];
}

Demon.array = demonData.map(data => new (isPersona(data) ? Persona : Demon)(data));
Demon.map = new Map(Demon.array.map(demon => [demon.devName, demon]));

Persona.array = Demon.array.filter((demon): demon is Persona => demon.isPersona());
Persona.map = new Map(Persona.array.map(mapToCollection));