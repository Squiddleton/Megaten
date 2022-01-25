const { Demon, BaseSkill, AilBoostSkill, AilDefensiveSkill, AilmentSkill, AttackSkill, AutoBuffSkill, BarrierSkill, BarrierBreakSkill, BoostSkill, BreakSkill, ChargeSkill, CounterSkill, CritSkill, CritBoostSkill, DefensiveSkill, DrainSkill, EndureSkill, EvasionSkill, HalveSkill, InstaKillSkill, InstaKillBoostSkill, MasterSkill, MiscSkill, NaviSkill, PostBattleSkill, RecoverySkill, RegenSkill, SupportSkill, SusceptibilitySkill, WallSkill, skillToClass, TreasureDemon } = require('./constructors');
const { demons, skills, treasureDemons } = require('./lists.json');

/**
 *
 * @param {string} str - The string to remove the punctuation from
 * @returns {string} The input string without its punctuation
 */
const noPunc = str => {
	return str
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/è/g, 'e')
		.replace(/é/g, 'e')
		.replace(/[^0-9a-z]/gi, '');
};

module.exports = {
	Demon,
	BaseSkill,
	AilBoostSkill,
	AilDefensiveSkill,
	AilmentSkill,
	AttackSkill,
	AutoBuffSkill,
	BarrierSkill,
	BarrierBreakSkill,
	BoostSkill,
	BreakSkill,
	ChargeSkill,
	CounterSkill,
	CritSkill,
	CritBoostSkill,
	DefensiveSkill,
	DrainSkill,
	EndureSkill,
	EvasionSkill,
	HalveSkill,
	InstaKillSkill,
	InstaKillBoostSkill,
	MasterSkill,
	MiscSkill,
	NaviSkill,
	PostBattleSkill,
	RecoverySkill,
	RegenSkill,
	SupportSkill,
	SusceptibilitySkill,
	WallSkill,
	TreasureDemon,
};

/** @type {import('./index').Demon[]} */
module.exports.demons = demons.map(demon => new Demon(demon));
/** @type {import('./index').Skill[]} */
module.exports.skills = skills.map(skill => skillToClass(skill));
/** @type {import('./index').TreasureDemon[]} */
module.exports.treasureDemons = treasureDemons.map(treasureDemon => new TreasureDemon(treasureDemon));

/**
 * Finds a demon using its name.
 * @param {string} input - The name of a demon to find
 * @returns {?import('./index').Demon} A matching demon, or null if none exists
 */
module.exports.getDemon = input => {
	input = noPunc(input);
	return this.demons.find(demon => demon.devName === input || demon.aliases.includes(input)) ?? null;
};

/**
 * Finds a skill using its name.
 * @param {string} input - The name of a skill to find
 * @returns {?import('./index').Skill} A matching skill, or null if none exists
 */
module.exports.getSkill = input => this.skills.find(skill => skill.devName === noPunc(input)) ?? null;

/**
 * Finds a treasure demon using its name.
 * @param {string} input - The name of a treasure demon to find
 * @returns {?import('./index').TreasureDemon} A matching treasure demon, or null if none exists
 */
module.exports.getTreasureDemon = input => this.treasureDemons.find(treasureDemon => treasureDemon.devName === noPunc(input)) ?? null;

module.exports.version = require('./package.json').version;