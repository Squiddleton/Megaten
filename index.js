const { Demon, Persona, BaseSkill, AilBoostSkill, AilDefensiveSkill, AilmentSkill, AttackSkill, AutoBuffSkill, BarrierSkill, BarrierBreakSkill, BlockSkill, BoostSkill, BreakSkill, ChargeSkill, CritSkill, CritBoostSkill, DefensiveSkill, EndureSkill, EvasionSkill, HalveSkill, InstaKillBoostSkill, MasterSkill, MiscSkill, NaviSkill, PersonaCounterSkill, PostBattleSkill, RecoverySkill, RegenSkill, SiphonSkill, SMTCounterSkill, SpringSkill, SupportSkill, SusceptibilitySkill, TauntSkill, WallSkill, dataToClass } = require('./constructors');
/** @type {Lists} */
// @ts-ignore
const lists = require('./lists.json');
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

module.exports.Demon = Demon;
module.exports.Persona = Persona;

module.exports.BaseSkill = BaseSkill;

module.exports.AilBoostSkill = AilBoostSkill;
module.exports.AilDefensiveSkill = AilDefensiveSkill;
module.exports.AilmentSkill = AilmentSkill;
module.exports.AttackSkill = AttackSkill;
module.exports.AutoBuffSkill = AutoBuffSkill;
module.exports.BarrierSkill = BarrierSkill;
module.exports.BarrierBreakSkill = BarrierBreakSkill;
module.exports.BlockSkill = BlockSkill;
module.exports.BoostSkill = BoostSkill;
module.exports.BreakSkill = BreakSkill;
module.exports.ChargeSkill = ChargeSkill;
module.exports.PersonaCounterSkill = PersonaCounterSkill;
module.exports.CritSkill = CritSkill;
module.exports.CritBoostSkill = CritBoostSkill;
module.exports.DefensiveSkill = DefensiveSkill;
module.exports.EndureSkill = EndureSkill;
module.exports.EvasionSkill = EvasionSkill;
module.exports.HalveSkill = HalveSkill;
module.exports.InstaKillBoostSkill = InstaKillBoostSkill;
module.exports.MasterSkill = MasterSkill;
module.exports.MiscSkill = MiscSkill;
module.exports.NaviSkill = NaviSkill;
module.exports.PostBattleSkill = PostBattleSkill;
module.exports.RecoverySkill = RecoverySkill;
module.exports.RegenSkill = RegenSkill;
module.exports.SiphonSkill = SiphonSkill;
module.exports.SMTCounterSkill = SMTCounterSkill;
module.exports.SpringSkill = SpringSkill;
module.exports.SupportSkill = SupportSkill;
module.exports.SusceptibilitySkill = SusceptibilitySkill;
module.exports.TauntSkill = TauntSkill;
module.exports.WallSkill = WallSkill;

module.exports.demons = lists.demons.map(demon => new (demon.race === 'Persona' ? Persona : Demon)(demon));
module.exports.skills = lists.skills.map(skill => dataToClass(skill));

const demons = new Collection(this.demons.map(demon => [demon.devName, demon]));
const skills = new Collection(this.skills.map(skill => [skill.devName, skill]));

/**
 *
 * @param {string} name
 */
module.exports.getDemon = name => {
	name = noPunc(name);
	return demons.get(name) ?? demons.find(demon => demon.aliases.includes(name)) ?? null;
};
/**
 *
 * @param {string} name
 */
module.exports.getSkill = name => skills.get(noPunc(name)) ?? null;

module.exports.version = require('./package.json').version;

module.exports.noPunc = noPunc;

/**
 * @typedef Lists
 * @property {import('.').DemonData[]} demons
 * @property {import('.').SkillData[]} skills
 */