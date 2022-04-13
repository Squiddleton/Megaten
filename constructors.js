const { readFileSync } = require('fs');
/** @type {Lists} */
// @ts-ignore
const lists = require('./lists.json');

class Demon {
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
		this.hp = data.hp;
		this.mp = data.mp;
		this.st = data.st;
		this.ma = data.ma;
		this.en = data.en;
		this.ag = data.ag;
		this.lu = data.lu;
		this.learnset = data.learnset;
		this.weak = data.weak;
		this.resist = data.resist;
		this.null = data.null;
		this.drain = data.drain;
		this.repel = data.repel;
		this.game = data.game;
	}
	/**
	 * @type {Buffer} A buffer png of the demon
	 */
	get image() {
		return readFileSync(`${__dirname}/images/demons/${this.devName}.png`);
	}
	isPersona() {
		return this.race === 'Persona';
	}
}

class Persona extends Demon {
	/**
	 *
	 * @param {import('./index').DemonData} data
	 */
	constructor(data) {
		super(data);
		this.user = data.user;
		this.stage = data.stage;
		this.evoSkill = data.evoSkill;
	}
	/**
     * @type {import('./index').Persona | null} The Persona's evolution, or null if none
     */
	get evolution() {
		const evoPersona = lists.demons.find(demon => demon.user === this.user && demon.stage === (this.stage + 1));
		return evoPersona === undefined ? null : new Persona(evoPersona);
	}
}

module.exports.Demon = Demon;
module.exports.Persona = Persona;

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
			return `${this.chance.display} chance to inflict ${this.ailment} on ${this.range ? 'one foe' : 'all foes'}.`;
		}
		case 'ATTACK': {
			const { ailments } = this;
			return `${this.power.display} ${this.affinity} damage to ${this.range ? 'one foe' : 'all foes'}${(this.max > 1) ? (this.max !== this.min ? ` ${this.min} to ${this.max}x` : ` ${this.max}x`) : ''}${ailments.length ? ` with ${ailments[0].chance.toLowerCase()} chance of ${ailments.map(a => a.ailment).join(' and ')}` : ''}.${this.flags.includes('Crit Boost') ? '  High critical rate.' : ''}${this.flags.includes('Down Boost') ? '  Damage increases if foe is downed.' : ''}${this.flags.includes('Baton Boost') ? '  Stronger under Baton Pass.' : ''}${this.flags.includes('Accuracy Boost') ? '  High accuracy.' : ''}${this.flags.includes('Surround Boost') ? '  More powerful when being ambushed.' : ''}${this.flags.includes('Weather Boost') ? '  Increased Critical rate in rainy or snowy weather.' : ''}`;
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
		this.min = data.min;
		this.max = data.max;
		this.flags = data.flags;
		this.ailments = data.ailments;
		this.series = data.series;
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
module.exports.BlockSkill = class extends BaseSkill {
	/**
	 *
	 * @param {import('./index').BlockSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
		this.element = data.element;
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

/**
 *
 * @param {import('./index').SkillData} data
 * @returns {import('./index').Skill}
 */
module.exports.dataToClass = data => {
	switch (data.type) {
	case 'AILBOOST': return new this.AilBoostSkill(data);
	case 'AILDEFENSIVE': return new this.AilDefensiveSkill(data);
	case 'AILMENT': return new this.AilmentSkill(data);
	case 'ATTACK': return new this.AttackSkill(data);
	case 'AUTOBUFF': return new this.AutoBuffSkill(data);
	case 'BARRIER': return new this.BarrierSkill(data);
	case 'BARRIERBREAK': return new this.BarrierBreakSkill(data);
	case 'BLOCK': return new this.BlockSkill(data);
	case 'BOOST': return new this.BoostSkill(data);
	case 'BREAK': return new this.BreakSkill(data);
	case 'CHARGE': return new this.ChargeSkill(data);
	case 'COUNTER': return new this.CounterSkill(data);
	case 'CRIT': return new this.CritSkill(data);
	case 'CRITBOOST': return new this.CritBoostSkill(data);
	case 'DEFENSIVE': return new this.DefensiveSkill(data);
	case 'DRAIN': return new this.DrainSkill(data);
	case 'ENDURE': return new this.EndureSkill(data);
	case 'EVASION': return new this.EvasionSkill(data);
	case 'HALVE': return new this.HalveSkill(data);
	case 'INSTAKILL': return new this.InstaKillSkill(data);
	case 'INSTAKILLBOOST': return new this.InstaKillBoostSkill(data);
	case 'MASTER': return new this.MasterSkill(data);
	case 'MISC': return new this.MiscSkill(data);
	case 'NAVI': return new this.NaviSkill(data);
	case 'POSTBATTLE': return new this.PostBattleSkill(data);
	case 'RECOVERY': return new this.RecoverySkill(data);
	case 'REGEN': return new this.RegenSkill(data);
	case 'SUPPORT': return new this.SupportSkill(data);
	case 'SUSCEPTIBILITY': return new this.SusceptibilitySkill(data);
	case 'WALL': return new this.WallSkill(data);
	}
};

/**
 * @typedef Lists
 * @property {import('.').DemonData[]} demons
 * @property {import('.').SkillData[]} skills
 */