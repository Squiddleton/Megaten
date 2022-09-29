const { Demon, Persona, BaseSkill, AilBoostSkill, AilDefensiveSkill, AilmentSkill, AttackSkill, AutoBuffSkill, BarrierSkill, BarrierBreakSkill, BlockSkill, BoostSkill, BreakSkill, ChargeSkill, CritSkill, CritBoostSkill, DefensiveSkill, EndureSkill, EvasionSkill, HalveSkill, InstaKillBoostSkill, MasterSkill, MiscSkill, NaviSkill, PersonaCounterSkill, PostBattleSkill, RecoverySkill, RegenSkill, SiphonSkill, SMTCounterSkill, SpringSkill, SupportSkill, SusceptibilitySkill, TauntSkill, WallSkill, dataToClass } = require('./constructors');
/**
 * @type {import('../dist').DemonData[]}
 */
// @ts-ignore
const demonList = require('./demons');
/**
 * @type {import('../dist').SkillData[]}
 */
// @ts-ignore
const skillList = require('./skills');
const { Collection } = require('@discordjs/collection');

/**
 *
 * @param {string} str
 */
const noPunc = str => str
	?.toLowerCase()
	.normalize('NFD')
	.replace(/\p{Diacritic}/gu, '')
	.replaceAll('&', 'and')
	.replace(/[^0-9a-z]/gi, '');

exports.Demon = Demon;
exports.Persona = Persona;

exports.BaseSkill = BaseSkill;

exports.AilBoostSkill = AilBoostSkill;
exports.AilDefensiveSkill = AilDefensiveSkill;
exports.AilmentSkill = AilmentSkill;
exports.AttackSkill = AttackSkill;
exports.AutoBuffSkill = AutoBuffSkill;
exports.BarrierSkill = BarrierSkill;
exports.BarrierBreakSkill = BarrierBreakSkill;
exports.BlockSkill = BlockSkill;
exports.BoostSkill = BoostSkill;
exports.BreakSkill = BreakSkill;
exports.ChargeSkill = ChargeSkill;
exports.PersonaCounterSkill = PersonaCounterSkill;
exports.CritSkill = CritSkill;
exports.CritBoostSkill = CritBoostSkill;
exports.DefensiveSkill = DefensiveSkill;
exports.EndureSkill = EndureSkill;
exports.EvasionSkill = EvasionSkill;
exports.HalveSkill = HalveSkill;
exports.InstaKillBoostSkill = InstaKillBoostSkill;
exports.MasterSkill = MasterSkill;
exports.MiscSkill = MiscSkill;
exports.NaviSkill = NaviSkill;
exports.PostBattleSkill = PostBattleSkill;
exports.RecoverySkill = RecoverySkill;
exports.RegenSkill = RegenSkill;
exports.SiphonSkill = SiphonSkill;
exports.SMTCounterSkill = SMTCounterSkill;
exports.SpringSkill = SpringSkill;
exports.SupportSkill = SupportSkill;
exports.SusceptibilitySkill = SusceptibilitySkill;
exports.TauntSkill = TauntSkill;
exports.WallSkill = WallSkill;

const demons = demonList.map(demon => new (demon.race === 'Persona' ? Persona : Demon)(demon));
const skills = skillList.map(skill => dataToClass(skill));

exports.demons = demons;
exports.skills = skills;

const demonColl = new Collection(demons.map(demon => [demon.devName, demon]));
const skillColl = new Collection(skills.map(skill => [skill.devName, skill]));

/**
 *
 * @param {string} name
 */
exports.getDemon = name => {
	name = noPunc(name);
	return demonColl.get(name) ?? demonColl.find(demon => demon.aliases.includes(name)) ?? null;
};
/**
 *
 * @param {string} name
 */
exports.getSkill = name => skillColl.get(noPunc(name)) ?? null;

exports.version = require('../package.json').version;

exports.noPunc = noPunc;