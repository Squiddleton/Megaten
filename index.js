const { Demon, BaseSkill, AilBoostSkill, AilDefensiveSkill, AilmentSkill, AttackSkill, AutoBuffSkill, BarrierSkill, BarrierBreakSkill, BoostSkill, BreakSkill, ChargeSkill, CounterSkill, CritSkill, CritBoostSkill, DefensiveSkill, DrainSkill, EndureSkill, EvasionSkill, HalveSkill, InstaKillSkill, InstaKillBoostSkill, MasterSkill, MiscSkill, NaviSkill, PostBattleSkill, RecoverySkill, RegenSkill, SupportSkill, SusceptibilitySkill, WallSkill, skillToClass, TreasureDemon } = require('./constructors');
const { demons: baseDemons, skills: baseSkills, treasureDemons: baseTreasureDemons } = require('./lists.json');

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

/** @type {import('./index').Demon[]} */
const demons = baseDemons.map(demon => new Demon(demon));
/** @type {import('./index').Skill[]} */
const skills = baseSkills.map(skill => skillToClass(skill));
/** @type {import('./index').TreasureDemon[]} */
const treasureDemons = baseTreasureDemons.map(treasureDemon => new TreasureDemon(treasureDemon));

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
	demons,
	skills,
	treasureDemons,
	version: require('./package.json').version,
	/**
	 * Finds a demon using its name.
	 * @param {string} input - The name of a demon to find
	 * @returns {?import('./index').Demon} A matching demon, or null if none exists
	 */
	getDemon: input => {
		input = noPunc(input);
		return demons.find(demon => demon.devName === input || demon.aliases.includes(input)) ?? null;
	},
	/**
	 * Finds a skill using its name.
	 * @param {string} input - The name of a skill to find
	 * @returns {?import('./index').Skill} A matching skill, or null if none exists
	 */
	getSkill: input => skills.find(skill => skill.devName === noPunc(input)) ?? null,
	/**
	 * Finds a treasure demon using its name.
	 * @param {string} input - The name of a treasure demon to find
	 * @returns {?import('./index').TreasureDemon} A matching treasure demon, or null if none exists
	 */
	getTreasureDemon: input => treasureDemons.find(treasureDemon => treasureDemon.devName === noPunc(input)) ?? null,
};