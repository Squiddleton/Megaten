const { readFileSync } = require('fs');
/** @type {import('./index').Lists} */
// @ts-ignore
const lists = require('./lists.json');

module.exports.Demon = class Demon {
	/**
	 *
	 * @param {import('./index').DemonData} data
	 */
	constructor(data) {
		this.name = data.name;
		this.devName = data.devName;
		this.aliases = data.aliases;
		this.inherit = data.inherit;
		this.arcana = data.arcana;
		this.race = data.race;
		this.level = data.level;
		this.st = data.st;
		this.ma = data.ma;
		this.vi = data.vi;
		this.ag = data.ag;
		this.lu = data.lu;
		this.learnset = data.learnset;
		this.evoMove = data.evoMove;
		this.weak = data.weak;
		this.resist = data.resist;
		this.null = data.null;
		this.drain = data.drain;
		this.repel = data.repel;
		this.party = data.party;
		this.evo = data.evo;
		this.ultimate = data.ultimate;
		this.special = data.special;
		this.game = data.game;
	}
	/**
     * @type {import('./index').Demon | null} The Persona's evolution, or null if none
     */
	get evolution() {
		const evoPersona = lists.demons.find(demon => demon.party === this.party && demon.evo === (this.evo + 1));
		return evoPersona === undefined ? null : new Demon(evoPersona);
	}
	/**
	 * @type {Buffer} A buffer of the Treasure Demon's image
	 */
	get image() {
		return readFileSync(`${__dirname}/images/demons/${this.devName}.png`);
	}
};

class BaseSkill {
	/**
	 *
	 * @param {import('./index').BaseSkillData} data
	 */
	constructor(data) {
		this.name = data.name;
		this.affinity = data.affinity;
		this.type = data.type;
		this.devName = data.devName;
		this.unique = data.unique;
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
module.exports.AilBoostSkill = class extends BaseSkill {
	/**
	 *
	 * @param {import('./index').AilBoostSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.ailment = data.ailment;
		this.amount = data.amount;
		this.weather = data.weather;
	}
};
module.exports.AilDefensiveSkill = class extends BaseSkill {
	/**
	 *
	 * @param {import('./index').AilDefensiveSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.ailment = data.ailment;
		this.resistance = data.resistance;
	}
};
module.exports.AilmentSkill = class extends BaseSkill {
	/**
	 *
	 * @param {import('./index').AilmentSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
		this.ailment = data.ailment;
		this.chance = data.chance;
	}
};
module.exports.AttackSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').AttackSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
		this.power = data.power;
		this.display = data.display;
		this.min = data.min;
		this.max = data.max;
		this.ailment = data.ailment;
		this.crit = data.crit;
		this.downBoost = data.downBoost;
		this.baton = data.baton;
		this.accurate = data.accurate;
		this.surround = data.surround;
		this.weather = data.weather;
	}
};
module.exports.AutoBuffSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').AutoBuffSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.buff = data.buff;
	}
};
module.exports.BarrierSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').BarrierSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
		this.barriers = data.barriers;
	}
};
module.exports.BarrierBreakSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').BarrierBreakSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
		this.barrier = data.barrier;
	}
};
module.exports.BoostSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').BoostSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.element = data.element;
		this.amount = data.amount;
	}
};
module.exports.BreakSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').BreakSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
		this.element = data.element;
	}
};
module.exports.ChargeSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').ChargeSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
		this.range = data.range;
		this.charge = data.charge;
	}
};
module.exports.CounterSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').CounterSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.chance = data.chance;
	}
};
module.exports.CritSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').CritSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
	}
};
module.exports.CritBoostSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').CritBoostSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.amount = data.amount;
		this.surround = data.surround;
	}
};
module.exports.DefensiveSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').DefensiveSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.element = data.element;
		this.newAffinity = data.newAffinity;
	}
};
module.exports.DrainSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').DrainSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.hpsp = data.hpsp;
		this.cost = data.cost;
		this.amount = data.amount;
	}
};
module.exports.EndureSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').EndureSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.priority = data.priority;
		this.instakill = data.instakill;
	}
};
module.exports.EvasionSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').EvasionSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.elements = data.elements;
		this.amount = data.amount;
		this.surround = data.surround;
		this.weather = data.weather;
	}
};
module.exports.HalveSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').HalveSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
	}
};
module.exports.InstaKillSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').InstaKillSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
		this.amount = data.amount;
		this.display = data.display;
	}
};
module.exports.InstaKillBoostSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').InstaKillBoostSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.element = data.element;
	}
};
module.exports.MasterSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').MasterSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.skill = data.skill;
	}
};
module.exports.MiscSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').MiscSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
	}
};
module.exports.NaviSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').NaviSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
	}
};
module.exports.PostBattleSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').PostBattleSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.xp = data.xp;
		this.yen = data.yen;
		this.hp = data.hp;
		this.sp = data.sp;
	}
};
module.exports.RecoverySkill = class extends BaseSkill {
	/**
	 * @param {import('./index').RecoverySkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
		this.amount = data.amount;
		this.ailment = data.ailment;
		this.buffs = data.buffs;
		this.revive = data.revive;
		this.negate = data.negate;
	}
};
module.exports.RegenSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').RegenSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.hpspail = data.hpspail;
		this.amount = data.amount;
		this.percent = data.percent;
		this.ambush = data.ambush;
		this.baton = data.baton;
	}
};
module.exports.SupportSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').SupportSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
		this.buffs = data.buffs;
		this.debuffs = data.debuffs;
		this.negate = data.negate;
		this.auto = data.auto;
		this.surround = data.surround;
	}
};
module.exports.SusceptibilitySkill = class extends BaseSkill {
	/**
	 * @param {import('./index').SusceptibilitySkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
	}
};
module.exports.WallSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').WallSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
		this.element = data.element;
	}
};

module.exports.TreasureDemon = class TreasureDemon {
	/**
	 *
	 * @param {import('./index').TreasureDemonData} data
	 */
	constructor(data) {
		this.name = data.name;
		this.devName = data.devName;
		this.inherit = data.inherit;
		this.arcana = data.arcana;
		this.race = data.race;
		this.level = data.level;
		this.hp = data.hp;
		this.sp = data.sp;
		this.st = data.st;
		this.ma = data.ma;
		this.vi = data.vi;
		this.ag = data.ag;
		this.lu = data.lu;
		this.skills = data.skills;
		this.weak = data.weak;
		this.resist = data.resist;
		this.null = data.null;
		this.drain = data.drain;
		this.repel = data.repel;
	}
	/**
	 * @type {Buffer} A buffer of the Treasure Demon's image
	 */
	get image() {
		return readFileSync(`${__dirname}/images/treasuredemons/${this.devName}.png`);
	}
};

/**
 *
 * @param {import('./index').SkillData} skillData
 * @returns {import('./index').Skill}
 */
module.exports.dataToClass = skillData => {
	/*
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
	}[skillData.type];
	*/
	switch (skillData.type) {
	case 'AILBOOST': return new this.AilBoostSkill(skillData);
	case 'AILDEFENSIVE': return new this.AilDefensiveSkill(skillData);
	case 'AILMENT': return new this.AilmentSkill(skillData);
	case 'ATTACK': return new this.AttackSkill(skillData);
	case 'AUTOBUFF': return new this.AutoBuffSkill(skillData);
	case 'BARRIER': return new this.BarrierSkill(skillData);
	case 'BARRIERBREAK': return new this.BarrierBreakSkill(skillData);
	case 'BOOST': return new this.BoostSkill(skillData);
	case 'BREAK': return new this.BreakSkill(skillData);
	case 'CHARGE': return new this.ChargeSkill(skillData);
	case 'COUNTER': return new this.CounterSkill(skillData);
	case 'CRIT': return new this.CritSkill(skillData);
	case 'CRITBOOST': return new this.CritBoostSkill(skillData);
	case 'DEFENSIVE': return new this.DefensiveSkill(skillData);
	case 'DRAIN': return new this.DrainSkill(skillData);
	case 'ENDURE': return new this.EndureSkill(skillData);
	case 'EVASION': return new this.EvasionSkill(skillData);
	case 'HALVE': return new this.HalveSkill(skillData);
	case 'INSTAKILL': return new this.InstaKillSkill(skillData);
	case 'INSTAKILLBOOST': return new this.InstaKillBoostSkill(skillData);
	case 'MASTER': return new this.MasterSkill(skillData);
	case 'MISC': return new this.MiscSkill(skillData);
	case 'NAVI': return new this.NaviSkill(skillData);
	case 'POSTBATTLE': return new this.PostBattleSkill(skillData);
	case 'RECOVERY': return new this.RecoverySkill(skillData);
	case 'REGEN': return new this.RegenSkill(skillData);
	case 'SUPPORT': return new this.SupportSkill(skillData);
	case 'SUSCEPTIBILITY': return new this.SusceptibilitySkill(skillData);
	case 'WALL': return new this.WallSkill(skillData);
	default: throw new TypeError(`Expected SkillData, received ${skillData}`);
	}
};