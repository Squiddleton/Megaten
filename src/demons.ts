import { readFileSync } from 'node:fs';
import { Collection } from '@discordjs/collection';
import { formatPossessive, normalize } from '@squiddleton/util';
import demonData from './demonList';
import type { DemonData, PersonaData } from './listTypes';
import type { Arcana, Element, Game, Inherit, Race, Stage } from './types';

function isPersona(demon: Demon): demon is Persona;
function isPersona(demon: DemonData): demon is PersonaData;
function isPersona(demon: Demon | DemonData) {
	return demon.race === 'Persona';
}

export class Demon implements DemonData {
	name: string;
	devName: string;
	aliases: string[];
	inherit: Inherit;
	arcana: Arcana;
	race: Race;
	level: number;
	hp: number | null;
	mp: number | null;
	st: number;
	vi: number;
	ma: number;
	ag: number;
	lu: number;
	learnset: {
		name: string;
		level: number;
	}[];
	weak: Element[];
	resist: Element[];
	null: Element[];
	drain: Element[];
	repel: Element[];
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
	isPersona(): this is Persona {
		return isPersona(this);
	}
	toString() {
		return `${this.race} ${this.name}`;
	}
	get image() {
		return readFileSync(`${__dirname}/images/demons/${this.devName}.png`);
	}
	static array: Demon[] = [];
	static collection: Collection<string, Demon> = new Collection();
	static get(name: string, error: true): Demon;
	static get(name: string, error?: boolean): Demon | null;
	static get(name: string, error = false) {
		name = normalize(name);
		const found = Demon.collection.get(name) ?? Demon.collection.find(demon => demon.aliases.includes(name)) ?? null;
		if (error && found === null) throw new Error(`No Demon was found with the name "${name}"`);
		return found;
	}
}

export class Persona extends Demon implements PersonaData {
	user: string;
	stage: Stage;
	evoSkill: string | null;
	constructor(data: PersonaData) {
		super(data);
		this.user = data.user;
		this.stage = data.stage;
		this.evoSkill = data.evoSkill;
	}
	get evolution(): Persona | null {
		const found = Demon.collection.find((demon): demon is Persona => demon.isPersona() && demon.user === this.user && demon.stage === (this.stage + 1));
		return found === undefined ? null : new Persona(found);
	}
	static array: Persona[] = [];
	static collection: Collection<string, Persona> = new Collection();
	toString() {
		return `${formatPossessive(this.user)} ${this.name}`;
	}
}

Demon.array = demonData.map(data => new (isPersona(data) ? Persona : Demon)(data));
Demon.collection = new Collection(Demon.array.map(demon => [demon.devName, demon]));

const personaFilter = (demon: Demon): demon is Persona => demon.isPersona();

Persona.array = Demon.array.filter(personaFilter);
Persona.collection = Demon.collection.filter(personaFilter);