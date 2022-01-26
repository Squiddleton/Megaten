const { Demon, BaseSkill, AilBoostSkill, AilDefensiveSkill, AilmentSkill, AttackSkill, AutoBuffSkill, BarrierSkill, BarrierBreakSkill, BoostSkill, BreakSkill, ChargeSkill, CounterSkill, CritSkill, CritBoostSkill, DefensiveSkill, DrainSkill, EndureSkill, EvasionSkill, HalveSkill, InstaKillSkill, InstaKillBoostSkill, MasterSkill, MiscSkill, NaviSkill, PostBattleSkill, RecoverySkill, RegenSkill, SupportSkill, SusceptibilitySkill, WallSkill, skillToClass, TreasureDemon } = require('./constructors');
const { demons, skills, treasureDemons } = require('./lists.json');

const noPunc = str => {
	return str
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/è/g, 'e')
		.replace(/é/g, 'e')
		.replace(/[^0-9a-z]/gi, '');
};

module.exports.Demon = Demon;

module.exports.BaseSkill = BaseSkill;

module.exports.AilBoostSkill = AilBoostSkill;
module.exports.AilDefensiveSkill = AilDefensiveSkill;
module.exports.AilmentSkill = AilmentSkill;
module.exports.AttackSkill = AttackSkill;
module.exports.AutoBuffSkill = AutoBuffSkill;
module.exports.BarrierSkill = BarrierSkill;
module.exports.BarrierBreakSkill = BarrierBreakSkill;
module.exports.BoostSkill = BoostSkill;
module.exports.BreakSkill = BreakSkill;
module.exports.ChargeSkill = ChargeSkill;
module.exports.CounterSkill = CounterSkill;
module.exports.CritSkill = CritSkill;
module.exports.CritBoostSkill = CritBoostSkill;
module.exports.DefensiveSkill = DefensiveSkill;
module.exports.DrainSkill = DrainSkill;
module.exports.EndureSkill = EndureSkill;
module.exports.EvasionSkill = EvasionSkill;
module.exports.HalveSkill = HalveSkill;
module.exports.InstaKillSkill = InstaKillSkill;
module.exports.InstaKillBoostSkill = InstaKillBoostSkill;
module.exports.MasterSkill = MasterSkill;
module.exports.MiscSkill = MiscSkill;
module.exports.NaviSkill = NaviSkill;
module.exports.PostBattleSkill = PostBattleSkill;
module.exports.RecoverySkill = RecoverySkill;
module.exports.RegenSkill = RegenSkill;
module.exports.SupportSkill = SupportSkill;
module.exports.SusceptibilitySkill = SusceptibilitySkill;
module.exports.WallSkill = WallSkill;

module.exports.TreasureDemon = TreasureDemon;

module.exports.demons = demons.map(demon => new Demon(demon));
module.exports.skills = skills.map(skill => skillToClass(skill));
module.exports.treasureDemons = treasureDemons.map(treasureDemon => new TreasureDemon(treasureDemon));

module.exports.getDemon = input => {
	input = noPunc(input);
	return this.demons.find(demon => demon.devName === input || demon.aliases.includes(input)) ?? null;
};
module.exports.getSkill = input => this.skills.find(skill => skill.devName === noPunc(input)) ?? null;
module.exports.getTreasureDemon = input => this.treasureDemons.find(treasureDemon => treasureDemon.devName === noPunc(input)) ?? null;

module.exports.version = require('./package.json').version;