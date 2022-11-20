import { readFileSync } from 'node:fs';
import { DemonData, PersonaData } from './listTypes';
import { Arcana, Element, Game, Inherit, Race } from './types';
import demonList from './demonList';
import { normalize } from '@squiddleton/util';

export const isPersonaData = (data: DemonData): data is PersonaData => data.race === 'Persona';

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
	get image() {
		return readFileSync(`${__dirname}/images/demons/${this.devName}.png`);
	}
	isPersona(): this is Persona {
		return this.race === 'Persona';
	}
	toString() {
		return `${this.race} ${this.name}`;
	}
}

export class Persona extends Demon {
	user: string;
	stage: 1 | 2 | 3;
	evoSkill: string | null;
	constructor(data: PersonaData) {
		super(data);
		this.user = data.user;
		this.stage = data.stage;
		this.evoSkill = data.evoSkill;
	}
	get evolution(): Persona | null {
		const evoPersona = demonList.filter(isPersonaData).find(demon => demon.user === this.user && demon.stage === (this.stage + 1));
		return evoPersona === undefined ? null : new Persona(evoPersona);
	}
	toString() {
		return `${this.user}'${['s', 'z'].some(l => this.user.endsWith(l)) ? '' : 's'} ${this.name}`;
	}
}