const { Demon, Skill, TreasureDemon } = require('./util/classes');
const { demons, skills, treasureDemons } = require('./lists.json');
const { noPunc } = require('./util/functions');

module.exports.demons = demons.map(demon => new Demon(demon));
module.exports.skills = skills.map(skill => new Skill(skill));
module.exports.treasureDemons = treasureDemons.map(treasureDemon => new TreasureDemon(treasureDemon));

/**
 * Finds a demon using its name.
 * @param {string} input - The name of a demon to find
 * @returns {import('./types/lists').Demon | null} A matching demon, or null if none exists
 */
module.exports.getDemon = input => {
	input = noPunc(input);
	return this.demons.find(demon => demon.devName === input || demon.aliases.includes(input)) ?? null;
};

/**
 * Finds a skill using its name.
 * @param {string} input - The name of a skill to find
 * @returns {import('./types/skills').Skill | null} A matching skill, or null if none exists
 */
module.exports.getSkill = input => this.skills.find(skill => skill.devName === noPunc(input)) ?? null;

/**
 * Finds a treasure demon using its name.
 * @param {string} input - The name of a treasure demon to find
 * @returns {import('./types/skills').TreasureDemon | null} A matching treasure demon, or null if none exists
 */
module.exports.getTreasureDemon = input => this.treasureDemons.find(treasureDemon => treasureDemon.devName === noPunc(input)) ?? null;