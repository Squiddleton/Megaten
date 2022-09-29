export * from './demons';
export * from './listTypes';
export * from './skills';
export * from './types';

import demonList from './demonList';
import skillList from './skillList';
import { dataToClass } from './skills';
import { Demon, isPersonaData, Persona } from './demons';
import { Collection } from '@discordjs/collection';

export const demons = demonList.map(demon => new (isPersonaData(demon) ? Persona : Demon)(demon));
export const skills = skillList.map(skill => dataToClass(skill));

export const normalize = (str: string) => str
	.toLowerCase()
	.normalize('NFD')
	.replace(/\p{Diacritic}/gu, '')
	.replaceAll('&', 'and')
	.replace(/[^0-9a-z]/gi, '');

const demonColl = new Collection(demons.map(demon => [demon.devName, demon]));
const skillColl = new Collection(skills.map(skill => [skill.devName, skill]));

export const getDemon = (name: string) => {
	name = normalize(name);
	return demonColl.get(name) ?? demonColl.find(demon => demon.aliases.includes(name)) ?? null;
};

export const getSkill = (name: string) => skillColl.get(normalize(name)) ?? null;