import { readFileSync } from 'node:fs';
import path from 'node:path';
import { Collection } from '@discordjs/collection';
import { formatPossessive, normalize } from '@squiddleton/util';
import type { DemonData, PersonaData } from './dataTypes';
import demonData from './demonData';
import MegatenError from './error';
import type { AnyAffinity, Arcana, DamagingAffinity, Game, Race, Stage } from './types';

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
	/** The demon's initial strength stat */
	st: number;
	/** The demon's initial vitality/endurance stat */
	vi: number;
	/** The demon's initial magic stat */
	ma: number;
	/** The demon's initial agility stat */
	ag: number;
	/** The demon's initial luck stat */
	lu: number;
	/** The skills that the demon learns by leveling up */
	learnset: {
		name: string;
		level: number;
	}[];
	/** The affinities that the demon is weak to */
	weak: DamagingAffinity[];
	/** The affinities that the demon resists */
	resist: DamagingAffinity[];
	/** The affinities that the demon nullifies */
	null: DamagingAffinity[];
	/** The affinities that the demon drains */
	drain: DamagingAffinity[];
	/** The affinities that the demon repels */
	repel: DamagingAffinity[];
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
		this.st = data.st;
		this.vi = data.vi;
		this.ma = data.ma;
		this.ag = data.ag;
		this.lu = data.lu;
		this.learnset = data.learnset;
		this.weak = data.weak;
		this.resist = data.resist;
		this.null = data.null;
		this.drain = data.drain;
		this.repel = data.repel;
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
	/** A Collection of every Demon and Persona instance, mapped by their devName properties */
	static collection: Collection<string, Demon> = new Collection();
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
		const found = this.collection.get(name) ?? Demon.collection.find(demon => demon.aliases.some(alias => normalize(alias) === name)) ?? null;
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
		const found = Demon.collection.find((demon): demon is Persona => demon.isPersona() && demon.user === this.user && demon.stage === (this.stage + 1));
		return found === undefined ? null : new Persona(found);
	}
	/**
	 * Returns a string in "(User) (Name)" format
	 */
	toString() {
		return `${formatPossessive(this.user)} ${this.name}`;
	}
	/** An array of every Persona instance */
	static array: Persona[] = [];
	/** A Collection of every Persona instance, mapped by their devName properties */
	static collection: Collection<string, Persona> = new Collection();
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
			if (e instanceof MegatenError) {
				throw new MegatenError(name, 'Persona');
			}
		}
	}
}

Demon.array = demonData.map(data => new (isPersona(data) ? Persona : Demon)(data));
Demon.collection = new Collection(Demon.array.map(demon => [demon.devName, demon]));

const personaFilter = (demon: Demon): demon is Persona => demon.isPersona();

Persona.array = Demon.array.filter(personaFilter);
Persona.collection = Demon.collection.filter(personaFilter);