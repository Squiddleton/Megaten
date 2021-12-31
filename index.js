const { Demon, Skill, TreasureDemon } = require('./constructors');
const { demons, skills, treasureDemons } = require('./lists.json');

/**
 *
 * @param {string} str - The string to remove the punctuation from
 * @returns {string} The input string without its punctuation
 */
const noPunc = str => {
	if (typeof str !== 'string') throw new TypeError('The noPunc function only accepts string inputs.');

	return str
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/è/g, 'e')
		.replace(/é/g, 'e')
		.replace(/[^0-9a-z]/gi, '');
};

module.exports.Demon = Demon;
module.exports.Skill = Skill;
module.exports.TreasureDemon = TreasureDemon;

/** @type {import('./index').Demon[]} */
module.exports.demons = demons.map(demon => new Demon(demon));
/** @type {import('./index').Skill[]} */
module.exports.skills = skills.map(skill => new Skill(skill));
/** @type {import('./index').TreasureDemon[]} */
module.exports.treasureDemons = treasureDemons.map(treasureDemon => new TreasureDemon(treasureDemon));

/**
 * Finds a demon using its name.
 * @param {string} input - The name of a demon to find
 * @returns {import('./index').Demon | null} A matching demon, or null if none exists
 */
module.exports.getDemon = input => {
	input = noPunc(input);
	return this.demons.find(demon => demon.devName === input || demon.aliases.includes(input)) ?? null;
};

/**
 * Finds a skill using its name.
 * @param {string} input - The name of a skill to find
 * @returns {import('./index').Skill | null} A matching skill, or null if none exists
 */
module.exports.getSkill = input => this.skills.find(skill => skill.devName === noPunc(input)) ?? null;

/**
 * Finds a treasure demon using its name.
 * @param {string} input - The name of a treasure demon to find
 * @returns {import('./index').TreasureDemon | null} A matching treasure demon, or null if none exists
 */
module.exports.getTreasureDemon = input => this.treasureDemons.find(treasureDemon => treasureDemon.devName === noPunc(input)) ?? null;