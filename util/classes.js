/** @type {import('../types/lists').Lists} */
const lists = require('../lists');

module.exports.Demon = class Demon {
	/**
	 *
	 * @param {import('../types/lists').Demon}
	 */
	constructor(demon) {
		for (const key in demon) {
			this[key] = demon[key];
		}
	}
	/**
     * @type {string|null} The Persona's evolution, or null if none
	 * @this import('../types/lists').Demon
     */
	get evolution() {
		const evoPersona = lists.demons.find(demon => demon.party === this.party && demon.evo === (this.evo + 1));
		return evoPersona === undefined ? null : new Demon(evoPersona);
	}
};

module.exports.Skill = class Skill {
	/**
	 *
	 * @param {import('../types/skills').Skill} skill
	 */
	constructor(skill) {
		for (const key in skill) {
			this[key] = skill[key];
		}
	}
	/**
     * @type {string} A description of the skill's effects (or the skill's name if none exists yet)
	 * @this import('../types/skills').Skill
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
};

module.exports.TreasureDemon = class TreasureDemon {
	/**
	 *
	 * @param {import('../types/lists').TreasureDemon}
	 */
	constructor(treasureDemon) {
		for (const key in treasureDemon) {
			this[key] = treasureDemon[key];
		}
	}
};