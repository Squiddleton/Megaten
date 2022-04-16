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
		this.vi = data.vi;
		this.ma = data.ma;
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
		case 'AILBOOST': {
			if (this.weather) return 'Increases chance of inflicting ailments during Rain/Snow.';
			return `Increases chance of inflicting ${this.ailment === 'ALL' ? 'ailments' : this.ailment}.`;
		}
		case 'AILDEFENSIVE': {
			switch (this.resistance) {
			case 'Resist': {
				return `Decreases chance of being inflicted with ${this.ailment}.`;
			}
			case 'Null': {
				return `Prevents infliction of ${this.ailment}.`;
			}
			default: throw new Error(`An AILDEFENSIVE skill has an unexpected resistance: ${this.resistance}`);
			}
		}
		case 'AILMENT': return `Chance of inflicting ${this.ailments.join(' and ')} to ${this.range ? '1 foe' : 'all foes'}${this.flags.length === 0 ? '' : `and lowers ${this.flags.map(flag => flag.split(' ')[0]).join('')} by ${this.flags.every(flags => flags.includes('Greatly')) ? '2 ranks' : '1 rank'} for 3 turns.`}`;
		case 'ATTACK': {
			const { ailments, flags } = this;
			const range = ['all foes', '1 foe', 'random foes'][this.range];
			const displayAffinity = `${this.power.display} ${this.affinity}`;

			let description = `${displayAffinity} damage to ${range}.`;

			if (ailments.length > 0) {
				description += ` Chance of inflicting ${ailments.map(a => a.name).join('/')}.`;
			}

			if (flags.length > 0) {
				description += ' ';

				if (flags.includes('Accuracy Boost')) {
					description += 'High Accuracy.';
				}
				if (flags.includes('Accuracy/Evasion Down')) {
					description += 'Lowers target\'s Accuracy/Evasion by 1 rank for 3 turns.';
				}
				if (flags.includes('Afflicted Boost')) {
					description += 'Greater effect if target has an ailment.';
				}
				if (flags.includes('Asleep Boost')) {
					description += 'Greater effect when target is asleep.';
				}
				if (flags.includes('Attack Down')) {
					description += 'Lowers target\'s Attack by 1 rank for 3 turns.';
				}
				if (flags.includes('Baton Boost')) {
					description += 'Powers up after a Baton Pass.';
				}
				if (flags.includes('Charmed Boost')) {
					description += 'Greater effect if target is Charmed.';
				}
				if (flags.includes('Confused Boost')) {
					description += 'Greater effect when target is Confused.';
				}
				if (flags.includes('Crit Damage Boost')) {
					description += 'Greater effect if a Critical hit.';
				}
				if (flags.includes('Defense Down')) {
					description += 'Lowers target\'s Defense by 1 rank for 3 turns.';
				}
				if (flags.includes('Defense Greatly Down')) {
					description += 'Lowers Defense by 2 ranks for 3 turns.';
				}
				if (flags.includes('Down Boost')) {
					description += 'Highly effective if foe is Downed.';
				}
				if (flags.includes('Drain HP/MP')) {
					return `${displayAffinity} HP/MP drain attack to ${range}.`;
				}
				if (flags.includes('Drain HP')) {
					return `${displayAffinity} ${this.power.display === 'Weak' ? 'HP drain' : 'HP-draining'} attack to ${range}.`;
				}
				if (flags.includes('Drain MP')) {
					return `${displayAffinity} MP drain attack to ${range}.`;
				}
				if (flags.includes('HP Dependent')) {
					description += 'The more remaining HP you have, the stronger the attack.';
				}
				if (flags.includes('Half Accuracy')) {
					description += 'Low Accuracy.';
				}
				if (flags.includes('Instakill')) {
					description += 'Medium chance of insta-kill.';
				}
				if (flags.includes('Minimize Defense')) {
					description += 'Lowers target\'s Defense to the minimum for 3 turns.';
				}
				if (flags.includes('Pierce')) {
					description += 'Ignores affinity resistance and pierces through.';
				}
				if (flags.includes('Poisoned Boost')) {
					description += 'Greater effect if target is Poisoned.';
				}
				if (flags.includes('Revert Buffs')) {
					description += 'Negates target\'s status buff effects';
				}
				if (flags.includes('Surround Boost')) {
					description += 'Powers up when surrounded.';
				}
				if (flags.includes('Weakness Instakill')) {
					description += 'Chance of instakill when striking weakness.';
				}
				if (flags.includes('Weather Boost')) {
					description += 'Increased Critical rate in rainy or snowy weather.';
				}
			}
			return description;
		}
		case 'AUTOBUFF': {
			/** @type {string} */
			let buffSkillName = { Attack: 'Tarukaja', Defense: 'Rakukaja', 'Accuracy/Evasion' : 'Sukukaja' }[this.buff];
			const isParty = this.range === 0;
			if (isParty) {
				buffSkillName = buffSkillName.toLowerCase();
			}
			return `Automatic ${isParty ? 'Ma' : ''}${buffSkillName} at the start of battle.`;
		}
		case 'BARRIER': return this.name;
		case 'BARRIERBREAK': return this.name;
		case 'BLOCK': return `Nullifies a${['Ice', 'Elec'].includes(this.element) ? 'n' : ''} ${this.element} attack against all allies once for 1 turn.`;
		// update
		case 'BOOST': {
			if (this.element === 'ALL') return 'Strengtens all attacks. Can stack.';
			return this.name;
		}
		case 'BREAK': return this.name;
		case 'CHARGE': {
			if (['Ally', 'Self'].includes(this.range)) {
				return `Greatly increases damage of the next ${this.charge === 'Charge' ? 'Strength' : 'Magic'}-based attack ${this.range === 'Self' ? 'from self' : 'on 1 ally'}.`;
			}
			// Checkmate and ryuji one
			return '';
		}
		// add other cases
		case 'CRIT': {
			if (this.range === 'Party') return 'Increases chance of Critical for one ally for 3 turns.';
			return this.name;
		}
		case 'CRITBOOST': {
			switch (this.criteria) {
			case 'Ambush': {
				return 'Increases Critical rate during an Ambush.';
			}
			case 'Surround': {
				return 'Increases Critical Rate when surrounded.';
			}
			default: return 'Increases chance of Critical.';
			}
		}
		case 'DEFENSIVE': {
			const { element } = this;
			return {
				Drain: `Absorbs damage from ${element} skills.`,
				Repel: `Reflects ${element} skills.`,
				Resist: `Strengthens resistance to ${element} skills.`,
				Null: `Nullifies ${element} skills.`,
			}[this.newAffinity];
		}
		case 'ENDURE': {
			if (this.instakill) return 'Survive insta-kill skills with 1 HP.';
			if (this.priority === 1) return 'Revives with 1 HP when KO\'d. Usable once per battle.';
			return 'Endures lethal attack and fully heals HP once in battle.';
		}
		case 'EVASION': return this.name;
		case 'HALVE': return `${this.affinity} attack that reduces HP of one foe by 50%.`;
		case 'INSTAKILLBOOST': return `Increases success rate of ${this.element === 'Light' ? 'Hama' : 'Mudo'} skills.`;
		case 'MASTER': return `Decreases ${this.skill} cost of skills by half.`;
		case 'MISC': return this.effect;
		case 'NAVI': return this.name;
		case 'PERSONACOUNTER': return `${this.chance}% chance of reflecting physical attacks.`;
		case 'POSTBATTLE': {
			switch (this.stat) {
			case 'HP':
			case 'MP': {
				return `Recover ${this.amount === 25 ? 'a little ' : ''}${this.stat} after a battle.`;
			}
			case 'HPMP': {
				return 'Fully restores HP/MP after battle.';
			}
			case 'EXP': {
				if (this.inactive) return `Earn ${this.amount}% EXP even when not participating in battle.`;
				return `EXP gained in battle increased by ${this.amount}%.`;
			}
			case 'Money': {
				return `Increases money gained by ${this.amount}%.`;
			}
			default: throw new Error(`A POSTBATTLE skill has an unexpected stat: ${this.stat}`);
			}
		}
		case 'RECOVERY': return this.name;
		case 'REGEN': {
			switch (this.hpmpail) {
			case 'HP': {
				return `Restores ${this.amount}% of max HP each turn in battle.`;
			}
			case 'MP': {
				// Network fusion exclusive skills
				if (this.baton) return this.name;
				return `Restores ${this.amount} MP each turn in battle.`;
			}
			case 'HPMP': {
				if (this.ambush) return `Restores 5% max HP and ${this.amount} SP each turn during an Ambush.`;
				return `Restores ${this.amount}% HP and ${this.amount} SP each turn in battle.`;
			}
			case 'AIL': {
				if (this.amount === 1) return 'Decreases recovery time from ailments by half.';
				return 'Decreases recovery time from ailments to 1 turn.';
			}
			default: throw new Error(`A REGEN skkill has an unexpected hpmpail: ${this.hpmpail}`);
			}
		}
		case 'SIPHON': return `${this.amount === 10 ? 'Low ' : ''} MP recovery when ${this.criteria === 'Ailment' ? 'inflicting status ailments' : 'you strike a foe\'s weakness or land a Critical'}.`;
		case 'SMTCOUNTER': return `Chance to counter Strength-based attacks with a ${this.power.display.toLowerCase()} ${this.element} attack.${this.name === 'Retaliate' ? ' Does not stack with Counter.' : ''}${this.attackDown ? ' Lowers target\'s Attack 1 rank for 3 turns.' : ''}`;
		case 'SPRING': return `${this.amount === 30 ? 'Greatly i' : 'I'}ncreases MAX ${this.hpmp}.`;
		case 'SUPPORT': return this.name;
		case 'SUSCEPTIBILITY': return this.name;
		case 'TAUNT': {
			if (this.buff === null) return 'Raises chances of being targed by foes for 3 turns.';
			return `Draws enemy hostility, but increases your ${this.buff} ${this.buff.includes('Double') ? '2 tiers' : 'by 1 rank'} for 3 turns.`;
		}
		case 'WALL': return this.name;
		default: throw new Error(`The following skill has an unexpected type: ${JSON.stringify(this, null, 2)}`);
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
		this.ailments = data.ailments;
		this.chance = data.chance;
		this.flags = data.flags;
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
		this.range = data.range;
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
		this.stacks = data.stacks;
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
		this.criteria = data.criteria;
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
		this.effect = data.effect;
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
module.exports.PersonaCounterSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').PersonaCounterSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.chance = data.chance;
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
		this.amount = data.amount;
		this.inactive = data.inactive;
		this.stat = data.stat;
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
		this.ailments = data.ailments;
		this.buffs = data.buffs;
		this.flags = data.flags;
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
		this.hpmpail = data.hpmpail;
		this.amount = data.amount;
		this.percent = data.percent;
		this.ambush = data.ambush;
		this.baton = data.baton;
	}
};
module.exports.SiphonSkill = class extends BaseSkill {
	/**
	 *
	 * @param {import('./index').SiphonSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.amount = data.amount;
		this.criteria = data.criteria;
	}
};
module.exports.SMTCounterSkill = class extends BaseSkill {
	/**
	 *
	 * @param {import('./index').SMTCounterSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.attackDown = data.attackDown;
		this.chance = data.chance;
		this.element = data.element;
		this.power = data.power;
	}
};
module.exports.SpringSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').SpringSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.amount = data.amount;
		this.hpmp = data.hpmp;
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
module.exports.TauntSkill = class extends BaseSkill {
	/**
	 * @param {import('./index').TauntSkillData} data
	 */
	constructor(data) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.buff = data.buff;
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
	case 'CRIT': return new this.CritSkill(data);
	case 'CRITBOOST': return new this.CritBoostSkill(data);
	case 'DEFENSIVE': return new this.DefensiveSkill(data);
	case 'ENDURE': return new this.EndureSkill(data);
	case 'EVASION': return new this.EvasionSkill(data);
	case 'HALVE': return new this.HalveSkill(data);
	case 'INSTAKILLBOOST': return new this.InstaKillBoostSkill(data);
	case 'MASTER': return new this.MasterSkill(data);
	case 'MISC': return new this.MiscSkill(data);
	case 'NAVI': return new this.NaviSkill(data);
	case 'PERSONACOUNTER': return new this.PersonaCounterSkill(data);
	case 'POSTBATTLE': return new this.PostBattleSkill(data);
	case 'RECOVERY': return new this.RecoverySkill(data);
	case 'REGEN': return new this.RegenSkill(data);
	case 'SIPHON': return new this.SiphonSkill(data);
	case 'SMTCOUNTER': return new this.SMTCounterSkill(data);
	case 'SPRING': return new this.SpringSkill(data);
	case 'SUPPORT': return new this.SupportSkill(data);
	case 'SUSCEPTIBILITY': return new this.SusceptibilitySkill(data);
	case 'TAUNT': return new this.TauntSkill(data);
	case 'WALL': return new this.WallSkill(data);
	}
};

/**
 * @typedef Lists
 * @property {import('.').DemonData[]} demons
 * @property {import('.').SkillData[]} skills
 */