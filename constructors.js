const { readFileSync } = require('fs');
const lists = require('./lists.json');

module.exports.Demon = class Demon {
	/**
	 *
	 * @param {import('./index').Demon}
	 */
	constructor(demon) {
		Object.assign(this, demon);
	}
	/**
     * @type {?import('./index').Demon} The Persona's evolution, or null if none
	 * @this import('./index').Demon
     */
	get evolution() {
		const evoPersona = lists.demons.find(demon => demon.party === this.party && demon.evo === (this.evo + 1));
		return evoPersona === undefined ? null : new Demon(evoPersona);
	}
	/**
	 * @type {Buffer} A buffer of the Treasure Demon's image
	 * @this {import('./index').Demon}
	 */
	get image() {
		return readFileSync(`${__dirname}/images/demons/${this.devName}.png`);
	}
};

class BaseSkill {
	/**
	 *
	 * @param {import('./index').Skill} skill
	 */
	constructor(skill) {
		Object.assign(this, skill);
	}
	/**
     * @type {string} A description of the skill's effects (or the skill's name if none exists yet)
	 * @this import('./index').Skill
     */
	get description() {
		switch (this.type) {
		case 'AILMENT': {
			return `${this.chance} chance to inflict ${this.ailment} on ${this.range ? 'one foe' : 'all foes'}.`;
		}
		case 'ATTACK': {
			return `${this.display} ${this.affinity} damage to ${this.range ? 'one foe' : 'all foes'}${(this.max > 1) ? (this.max !== this.min ? ` ${this.min} to ${this.max}x` : ` ${this.max}x`) : ''}${this.ailment.length ? ` with ${this.ailment[0].chance.toLowerCase()} chance of ${this.ailment.map(a => a.ailment).join(' and ')}` : ''}.${this.crit ? `  ${this.crit} critical rate.` : ''}${this.downBoost ? '  Damage increases if foe is downed.' : ''}${this.baton ? '  Stronger under Baton Pass.' : ''}${this.accurate ? '  High accuracy.' : ''}${this.surround ? '  More powerful when being ambushed.' : ''}${this.weather ? '  Increased Critical rate in rainy or snowy weather.' : ''}`;
		}
		case 'AILBOOST': {
			return `Increases chance of inflicting ${this.ailment === 'ALL' ? 'all ailments' : this.ailment}.`;
		}
		case 'AILDEFENSIVE': {
			return this.resistance === 'Null' ? `Impart immunity against ${this.ailment.replace('MENTAL', 'mental ailments').replace('ALL', 'all ailments')}.` : `Reduce susceptibility to ${this.ailment.replace('MENTAL', 'mental ailments').replace('ALL', 'all ailments')}.`;
		}
		case 'AUTOBUFF': {
			return `Automatic ${this.buff} at the start of battle.`;
		}
		case 'CHARGE': {
			return `Next ${this.charge === 'Charge' ? 'physical' : 'magical'} attack deals over double the damage${this.range === 1 ? '' : ' for all allies'}.`;
		}
		case 'DRAIN': {
			return `Drains ${this.amount} ${this.hpsp} from one foe.`;
		}
		case 'HALVE': {
			return 'Half remaining HP of one foe.';
		}
		case 'INSTAKILL': {
			return `${this.display} chance of instantly killing ${this.range ? 'one foe' : 'all foes'}.`;
		}
		case 'INSTAKILLBOOST': {
			return `Increases success rate of instant death by ${this.element} skills.`;
		}
		case 'MASTER': {
			return `Half ${this.skill} cost for ${this.skill === 'HP' ? 'physical' : 'magic'} skills.`;
		}
		case 'REGEN': {
			switch (this.hpspail) {
			case 'AIL': {
				return `Recover from an ailment in ${this.amount} less turn${this.amount > 1 ? 's' : ''}.`;
			}
			default: return this.name;
			}
		}
		default: return this.name;
		}
	}
}

module.exports.BaseSkill = BaseSkill;
module.exports.AilBoostSkill = class extends BaseSkill {};
module.exports.AilDefensiveSkill = class extends BaseSkill {};
module.exports.AilmentSkill = class extends BaseSkill {};
module.exports.AttackSkill = class extends BaseSkill {};
module.exports.AutoBuffSkill = class extends BaseSkill {};
module.exports.BarrierSkill = class extends BaseSkill {};
module.exports.BarrierBreakSkill = class extends BaseSkill {};
module.exports.BoostSkill = class extends BaseSkill {};
module.exports.BreakSkill = class extends BaseSkill {};
module.exports.ChargeSkill = class extends BaseSkill {};
module.exports.CounterSkill = class extends BaseSkill {};
module.exports.CritSkill = class extends BaseSkill {};
module.exports.CritBoostSkill = class extends BaseSkill {};
module.exports.DefensiveSkill = class extends BaseSkill {};
module.exports.DrainSkill = class extends BaseSkill {};
module.exports.EndureSkill = class extends BaseSkill {};
module.exports.EvasionSkill = class extends BaseSkill {};
module.exports.HalveSkill = class extends BaseSkill {};
module.exports.InstaKillSkill = class extends BaseSkill {};
module.exports.InstaKillBoostSkill = class extends BaseSkill {};
module.exports.MasterSkill = class extends BaseSkill {};
module.exports.MiscSkill = class extends BaseSkill {};
module.exports.NaviSkill = class extends BaseSkill {};
module.exports.PostBattleSkill = class extends BaseSkill {};
module.exports.RecoverySkill = class extends BaseSkill {};
module.exports.RegenSkill = class extends BaseSkill {};
module.exports.SupportSkill = class extends BaseSkill {};
module.exports.SusceptibilitySkill = class extends BaseSkill {};
module.exports.WallSkill = class extends BaseSkill {};

module.exports.TreasureDemon = class TreasureDemon {
	/**
	 *
	 * @param {import('./index').TreasureDemon}
	 */
	constructor(treasureDemon) {
		Object.assign(this, treasureDemon);
	}
	/**
	 * @type {Buffer} A buffer of the Treasure Demon's image
	 * @this {import('./index').TreasureDemon}
	 */
	get image() {
		return readFileSync(`${__dirname}/images/treasuredemons/${this.devName}.png`);
	}
};

/**
 *
 * @param {BaseSkill} baseSkill
 * @returns {import('./index').Skill}
 */
module.exports.skillToClass = baseSkill => {
	const skillClass = {
		AILBOOST: this.AilBoostSkill,
		AILDEFENSIVE: this.AilDefensiveSkill,
		AILMENT: this.AilmentSkill,
		ATTACK: this.AttackSkill,
		AUTOBUFF: this.AutoBuffSkill,
		BARRIER: this.BarrierSkill,
		BARRIERBREAK: this.BarrierBreakSkill,
		BOOST: this.BoostSkill,
		BREAK: this.BreakSkill,
		CHARGE: this.ChargeSkill,
		COUNTER: this.CounterSkill,
		CRIT: this.CritSkill,
		CRITBOOST: this.CritBoostSkill,
		DEFENSIVE: this.DefensiveSkill,
		DRAIN: this.DrainSkill,
		ENDURE: this.EndureSkill,
		EVASION: this.EvasionSkill,
		HALVE: this.HalveSkill,
		INSTAKILL: this.InstaKillSkill,
		INSTAKILLBOOST: this.InstaKillBoostSkill,
		MASTER: this.MasterSkill,
		MISC: this.MiscSkill,
		NAVI: this.NaviSkill,
		POSTBATTLE: this.PostBattleSkill,
		RECOVERY: this.RecoverySkill,
		REGEN: this.RegenSkill,
		SUPPORT: this.SupportSkill,
		SUSCEPTIBILITY: this.SusceptibilitySkill,
		WALL: this.WallSkill,
	}[baseSkill.type];
	return new skillClass(baseSkill);
};