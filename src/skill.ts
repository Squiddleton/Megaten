import { Collection } from '@discordjs/collection';
import { normalize } from '@squiddleton/util';
import type { AilBoostSkillData, AilDefensiveSkillData, AilmentSkillData, AttackSkillData, AutoBuffSkillData, BarrierBreakSkillData, BarrierSkillData, BlockSkillData, BoostSkillData, BreakSkillData, ChargeSkillData, CritBoostSkillData, CritSkillData, DefensiveSkillData, EndureSkillData, EvasionSkillData, HalveSkillData, InstaKillBoostSkillData, MasterSkillData, MiscSkillData, NaviSkillData, PersonaCounterSkillData, PostBattleSkillData, RecoverySkillData, RegenSkillData, SMTCounterSkillData, SiphonSkillData, SkillData, SpringSkillData, SupportSkillData, SusceptibilitySkillData, TauntSkillData, WallSkillData } from './dataTypes';
import MegatenError from './error';
import skillData from './skillData';
import type { AilResistance, Ailment, AllyRange, AnyAffinity, AnyRange, AttackDisplay, Barrier, Buff, Charge, CounterAffinity, CounterDisplay, DamagingAffinity, EnemyRange, EvasionBoostCriteria, HPMP, HPMPAil, LightDark, PersonaAffinity, PostBattleStat, RecoveryAmount, RegenCriteria, Resistance, RestoreCriteria, SMTAffinity, Series, SkillType } from './types';

export abstract class Skill implements SkillData {
	/** The skill's name */
	name: string;
	/** The skill's unique, normalized name */
	devName: string;
	/** Whether the skill is unique to any specific demon(s) */
	unique: boolean;
	/** The skill's affinity */
	abstract affinity: AnyAffinity;
	/** The skill's type */
	abstract type: SkillType;
	/** The skill's description */
	abstract description: string;
	constructor(data: SkillData) {
		this.name = data.name;
		this.devName = normalize(data.name);
		this.unique = data.unique;
	}
	/** Returns a string in "(Name): (Description)" format */
	toString() {
		return `${this.name}: ${this.description}`;
	}
	/** An array of every Skill instance */
	static array: AnySkill[] = [];
	/** A Collection of every Skill instance, mapped by their devName properties */
	static collection: Collection<string, AnySkill> = new Collection();
	/**
	 *
	 * Gets a Skill instance by its name.
	 *
	 * @param name - The skill's name
	 * @param error - Whether to throw an exception instead of returning null if no skill is found; defaults to false
	 */
	static get(name: string, error: true): AnySkill;
	static get(name: string, error?: boolean): AnySkill | null;
	static get(name: string, error = false) {
		const found = this.collection.get(normalize(name)) ?? null;
		if (error && found === null) throw new MegatenError(name, 'Skill');
		return found;
	}
}

/** A skill that boosts the chance of afflicting ailments */
export class AilBoostSkill extends Skill implements AilBoostSkillData {
	affinity: 'Passive';
	type: 'AILBOOST';
	description: string;
	/** The ailment that the skill increases the odds of afflicting */
	ailment: Ailment | 'ALL';
	/** The amount that the odds of afflicting the ailment are increased by */
	amount: number;
	/** Whether the skill only takes effect under certain weather conditions */
	weather: boolean;
	constructor(data: AilBoostSkillData) {
		const { ailment } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = data.weather
			? 'Increases chance of inflicting ailments during Rain/Snow.'
			: `Increases chance of inflicting ${ailment === 'ALL' ? 'ailments' : ailment}.`;
		this.ailment = ailment;
		this.amount = data.amount;
		this.weather = data.weather;
	}
}

/** A skill that decreases the chance of being afflicted by an ailment */
export class AilDefensiveSkill extends Skill implements AilDefensiveSkillData {
	affinity: 'Passive';
	type: 'AILDEFENSIVE';
	description: string;
	/** The ailment whose odds of affliction are reduced by the skill */
	ailment: Ailment | 'ALL' | 'Confuse/Fear/Rage/Despair';
	/** The level of resistance to the ailment */
	resistance: AilResistance;
	constructor(data: AilDefensiveSkillData) {
		const { ailment, resistance } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = resistance === 'Resist'
			? `Decreases chance of being inflicted with ${ailment}.`
			: `Prevents infliction of ${ailment}.`;
		this.ailment = ailment;
		this.resistance = resistance;
	}
}

/** A skill that afflicts an ailment */
export class AilmentSkill extends Skill implements AilmentSkillData {
	affinity: 'Ailment';
	type: 'AILMENT';
	description: string;
	/** The ailments that the skill can afflict */
	ailments: Ailment[];
	/** The chance of afflicting the ailments */
	chance: number;
	/** The skill's MP cost */
	cost: number;
	/** The skill's special or notable features */
	flags: string[];
	/** The range that the skill targets */
	range: Exclude<EnemyRange, 'Random'>;
	constructor(data: AilmentSkillData) {
		const { ailments, flags, range } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `Chance of inflicting ${ailments.join(' and ')} to ${range === 'One' ? '1 foe' : 'all foes'}${flags.length === 0 ? '' : `and lowers ${flags.map(flag => flag.split(' ')[0]).join('')} by ${data.flags.every(flag => flag.includes('Greatly')) ? '2 ranks' : '1 rank'} for 3 turns.`}`;
		this.ailments = ailments;
		this.chance = data.chance;
		this.cost = data.cost;
		this.flags = flags;
		this.range = range;
	}
}

/** A skill that deals damage, potentially having other effects */
export class AttackSkill extends Skill implements AttackSkillData {
	affinity: DamagingAffinity;
	type: 'ATTACK';
	description: string;
	/** The ailment names and chances that the skill can afflict */
	ailments: {
		name: Ailment;
		chance: number;
	}[];
	/** The skill cost's type and amount */
	cost: {
		type: HPMP;
		amount: number;
	};
	/** The skill's special or notable features */
	flags: string[];
	/** The maximum times that the skill can land */
	max: number;
	/** The minimum times that the skill can land, excluding misses */
	min: number;
	/** The numerical and displayed amount of damage that the skill deals */
	power: {
		amount: number;
		display: AttackDisplay;
	};
	/** The range that the skill targets */
	range: EnemyRange;
	/** The series that the skill data originates from */
	series: Series;
	constructor(data: AttackSkillData) {
		const { affinity, ailments, flags, max, min, power, range } = data;
		super(data);
		this.affinity = affinity;
		this.type = data.type;

		const displayAffinity = `${power.display} ${this.affinity}`;
		const displayRange = {
			One: '1 foe',
			All: 'all foes',
			Random: 'random foes'
		}[range];
		if (flags.includes('Drain HP/MP')) {
			this.description = `${displayAffinity} HP/MP drain attack to ${displayRange}.`;
		}
		else if (flags.includes('Drain HP')) {
			this.description = `${displayAffinity} ${power.display === 'Weak' ? 'HP drain' : 'HP-draining'} attack to ${displayRange}.`;
		}
		else if (flags.includes('Drain MP')) {
			this.description = `${displayAffinity} MP drain attack to ${displayRange}.`;
		}
		else {
			this.description = `${displayAffinity} damage to ${displayRange}${max === 1 ? '' : ` ${max === min ? max : `${min}-${max}`} times`}.`;
		}
		if (ailments.length > 0) {
			this.description += ` Chance of inflicting ${ailments.map(a => a.name).join('/')}.`;
		}
		if (flags.length > 0) {
			this.description += ' ';

			if (flags.includes('Accuracy Boost')) {
				this.description += 'High Accuracy.';
			}
			if (flags.includes('Accuracy/Evasion Down')) {
				this.description += 'Lowers target\'s Accuracy/Evasion by 1 rank for 3 turns.';
			}
			if (flags.includes('Afflicted Boost')) {
				this.description += 'Greater effect if target has an ailment.';
			}
			if (flags.includes('Asleep Boost')) {
				this.description += 'Greater effect when target is asleep.';
			}
			if (flags.includes('Attack Down')) {
				this.description += 'Lowers target\'s Attack by 1 rank for 3 turns.';
			}
			if (flags.includes('Attack Reduced')) {
				this.description += 'Decreases Attack after use.';
			}
			if (flags.includes('Baton Boost')) {
				this.description += 'Powers up after a Baton Pass.';
			}
			if (flags.includes('Charmed Boost')) {
				this.description += 'Greater effect if target is Charmed.';
			}
			if (flags.includes('Confused Boost')) {
				this.description += 'Greater effect when target is Confused.';
			}
			if (flags.includes('Crit Damage Boost')) {
				this.description += 'Greater effect if a Critical hit.';
			}
			if (flags.includes('Defense Down')) {
				this.description += 'Lowers target\'s Defense by 1 rank for 3 turns.';
			}
			if (flags.includes('Defense Greatly Down')) {
				this.description += 'Lowers Defense by 2 ranks for 3 turns.';
			}
			if (flags.includes('Down Boost')) {
				this.description += 'Highly effective if foe is Downed.';
			}
			if (flags.includes('HP Dependent')) {
				this.description += 'The more remaining HP you have, the stronger the attack.';
			}
			if (flags.includes('Half Accuracy')) {
				this.description += 'Low Accuracy.';
			}
			if (flags.includes('Instakill')) {
				this.description += 'Medium chance of insta-kill.';
			}
			if (flags.includes('Minimize Defense')) {
				this.description += 'Lowers target\'s Defense to the minimum for 3 turns.';
			}
			if (flags.includes('Pierce')) {
				this.description += 'Ignores affinity resistance and pierces through.';
			}
			if (flags.includes('Poisoned Boost')) {
				this.description += 'Greater effect if target is Poisoned.';
			}
			if (flags.includes('Revert Buffs')) {
				this.description += 'Negates target\'s status buff effects';
			}
			if (flags.includes('Surround Boost')) {
				this.description += 'Powers up when surrounded.';
			}
			if (flags.includes('Weakness Instakill')) {
				this.description += 'Chance of instakill when striking weakness.';
			}
			if (flags.includes('Weather Boost')) {
				this.description += 'Increased Critical rate in rainy or snowy weather.';
			}
		}

		this.ailments = ailments;
		this.cost = data.cost;
		this.flags = flags;
		this.max = data.max;
		this.min = data.min;
		this.power = power;
		this.range = range;
		this.series = data.series;
	}
}

/** A skill that automatically casts a buff at the start of battle */
export class AutoBuffSkill extends Skill implements AutoBuffSkillData {
	affinity: 'Passive';
	type: 'AUTOBUFF';
	description: string;
	/** The buff automatically applied by the skill */
	buff: Exclude<Buff, 'Double Accuracy/Evasion' | 'Double Defense'>;
	/** The range that the skill targets */
	range: Exclude<AllyRange, 'Ally'>;
	constructor(data: AutoBuffSkillData) {
		const { buff, range } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;

		let buffSkillName = { Attack: 'Tarukaja', Defense: 'Rakukaja', 'Accuracy/Evasion' : 'Sukukaja' }[buff];
		const isParty = range === 'Party';
		if (isParty) {
			buffSkillName = buffSkillName.toLowerCase();
		}
		this.description = `Automatic ${isParty ? 'Ma' : ''}${buffSkillName} at the start of battle.`;

		this.buff = buff;
		this.range = range;
	}
}

/** A skill that forms a barrier */
export class BarrierSkill extends Skill implements BarrierSkillData {
	affinity: 'Support';
	type: 'BARRIER';
	description: string;
	/** The barriers that the skill creates */
	barriers: Barrier[];
	/** The skill's MP cost */
	cost: number;
	/** The range that the skill targets */
	range: Exclude<AllyRange, 'Self'>;
	constructor(data: BarrierSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;

		if (data.barriers.length > 1) {
			this.description = 'Forms a barrier that reflects all attacks for all allies.';
		}
		else {
			const [barrier] = data.barriers;
			switch (barrier) {
				case 'Tetraja': {
					this.description = 'A barrier that nullifies an insta-kill for all allies one time.';
					break;
				}
				case 'Painting': {
					this.description = 'Forms a barrier that can absorb one attack (except Almighty).';
					break;
				}
				case 'Shield of Justice': {
					this.description = 'Shields the party from all damage once.';
					break;
				}
				case 'Kannabi Veil': {
					this.description = 'Decreases damage to all allies until the next turn.';
					break;
				}
				case 'Tetrakarn':
				case 'Makarakarn': {
					this.description = `Reflects a ${barrier === 'Tetrakarn' ? 'Phys' : 'Magic'} attack once for 1 ally for 1 turn.`;
					break;
				}
			}
		}

		this.barriers = data.barriers;
		this.cost = data.cost;
		this.range = data.range;
	}
}

/** A skill that negates a barrier */
export class BarrierBreakSkill extends Skill implements BarrierBreakSkillData {
	affinity: 'Support';
	type: 'BARRIERBREAK';
	description: string;
	/** The barrier that the skill removes */
	barrier: Barrier;
	/** The skill's MP cost */
	cost: number;
	constructor(data: BarrierBreakSkillData) {
		const { barrier } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `Negates ${barrier} on all foes.`;
		this.barrier = barrier;
		this.cost = data.cost;
	}
}

/** A skill that temporarily blocks attacks of a certain affinity */
export class BlockSkill extends Skill implements BlockSkillData {
	affinity: 'Support';
	type: 'BLOCK';
	description: string;
	/** The skill's MP cost */
	cost: number;
	/** The affinity that the skill blocks */
	element: Exclude<DamagingAffinity, PersonaAffinity | 'Almighty'>;
	constructor(data: BlockSkillData) {
		const { element } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `Nullifies a${['Ice', 'Elec'].includes(element) ? 'n' : ''} ${element} attack against all allies once for 1 turn.`;
		this.cost = data.cost;
		this.element = element;
	}
}

/** A skill that boosts the amount of damage/recovery of an affinity */
export class BoostSkill extends Skill implements BoostSkillData {
	affinity: 'Passive';
	type: 'BOOST';
	description: string;
	/** The amount that the element's damage is boosted by */
	amount: number;
	/** The affinity of the skills that the skill boosts */
	element: DamagingAffinity | 'Recovery' | 'ALL';
	/** Whether the skill stacks additively or multiplicatively */
	stacks: '+' | 'x';
	constructor(data: BoostSkillData) {
		const { amount, element, stacks } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;

		if (element === 'ALL') this.description = 'Strengtens all attacks. Can stack.';
		else if (stacks === 'x') this.description = `Strengthens ${element} skills by ${amount}%.`;
		else this.description = `${amount === 35 ? 'Greatly i' : 'I'}ncreases ${element} attack damage.`;

		this.amount = amount;
		this.element = element;
		this.stacks = stacks;
	}
}

/** A skill that negates an affinity resistance */
export class BreakSkill extends Skill implements BreakSkillData {
	affinity: 'Support';
	type: 'BREAK';
	description: string;
	/** The skill's MP cost */
	cost: number;
	/** The affinity whose resistance is negated by the skill */
	element: Exclude<DamagingAffinity, SMTAffinity | 'Almighty'>;
	constructor(data: BreakSkillData) {
		const { element } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `Negates ${element} resistance of all foes. Cannot negate ${element} Wall.`;
		this.cost = data.cost;
		this.element = element;
	}
}

/** A skill that casts a charge */
export class ChargeSkill extends Skill implements ChargeSkillData {
	affinity: 'Support';
	type: 'CHARGE';
	description: string;
	/** The charge that the skill casts */
	charge: Charge;
	/** The skill's MP cost */
	cost: number;
	/** The range that the skill targets */
	range: AllyRange;
	constructor(data: ChargeSkillData) {
		const { charge, range } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;

		switch (charge) {
			case 'Critical': {
				this.description = 'Next Strength-based attack of self will be 100% accurate and guaranteed Critical.';
				break;
			}
			case 'Pierce': {
				this.description = 'Increases the damage of the next attack and adds Pierce effect for self.';
				break;
			}
			case 'Recovery': {
				this.description = 'Greatly increases the effect of the next HP healing skill of self and allows it to heal above MAX HP.';
				break;
			}
			default: this.description = range === 'Party'
				? `Next ${charge === 'Charge' ? 'physical' : 'magical'} attack deals over double the damage for all allies.`
				: `Greatly increases damage of the next ${charge === 'Charge' ? 'Strength' : 'Magic'}-based attack ${range === 'Self' ? 'from self' : 'on 1 ally'}.`;
		}

		this.charge = charge;
		this.cost = data.cost;
		this.range = range;
	}
}

/** A skill that, when cast, increases the chance of landing critical hits */
export class CritSkill extends Skill implements CritSkillData {
	affinity: 'Support';
	type: 'CRIT';
	description: string;
	/** The skill's MP cost */
	cost: number;
	/** The range that the skill targets */
	range: Exclude<AllyRange, 'Self'> | 'All';
	constructor(data: CritSkillData) {
		const { range } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `Increases chance of Critical for ${{ All: 'all', Ally: 'one ally', Party: 'all allies' }[range]} for 3 turns.`;
		this.cost = data.cost;
		this.range = range;
	}
}

/** A skill that passively increaes the chance of landing critical hits */
export class CritBoostSkill extends Skill implements CritBoostSkillData {
	affinity: 'Passive';
	type: 'CRITBOOST';
	description: string;
	/** The amount that the skill boosts the chance of a critical hit */
	amount: number;
	/** The criteria triggering the skill, or null if always in effect */
	criteria: 'Ambush' | 'Surround' | null;
	constructor(data: CritBoostSkillData) {
		const { criteria } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;

		switch (criteria) {
			case 'Ambush': {
				this.description = 'Increases Critical rate during an Ambush.';
				break;
			}
			case 'Surround': {
				this.description = 'Increases Critical Rate when surrounded.';
				break;
			}
			case null: this.description = 'Increases chance of Critical.';
		}

		this.amount = data.amount;
		this.criteria = criteria;
	}
}

/** A skill that increases resistance to damage from an affinity */
export class DefensiveSkill extends Skill implements DefensiveSkillData {
	affinity: 'Passive';
	type: 'DEFENSIVE';
	description: string;
	/** The affinity that the skill increases resistance from */
	element: Exclude<DamagingAffinity, 'Almighty'>;
	/** The skill user's new affinity to the element */
	newAffinity: Resistance;
	constructor(data: DefensiveSkillData) {
		const { element, newAffinity } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = {
			Drain: `Absorbs damage from ${element} skills.`,
			Repel: `Reflects ${element} skills.`,
			Resist: `Strengthens resistance to ${element} skills.`,
			Null: `Nullifies ${element} skills.`
		}[newAffinity];
		this.element = element;
		this.newAffinity = newAffinity;
	}
}

/** A skill that prevents the user from dying */
export class EndureSkill extends Skill implements EndureSkillData {
	affinity: 'Passive';
	type: 'ENDURE';
	description: string;
	/** Whether the skill only triggers from insta-kill skills */
	instakill: boolean;
	/** The priority that the skill triggers compared to other EndureSkill instances; a higher priority will trigger earlier in battle */
	priority: number;
	constructor(data: EndureSkillData) {
		const { instakill, priority } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;

		if (instakill) this.description = 'Survive insta-kill skills with 1 HP.';
		else if (priority === 1) this.description = 'Revives with 1 HP when KO\'d. Usable once per battle.';
		else this.description = 'Endures lethal attack and fully heals HP once in battle.';

		this.instakill = instakill;
		this.priority = priority;
	}
}

/** A skill that increases evasion from affinities */
export class EvasionSkill extends Skill implements EvasionSkillData {
	affinity: 'Passive';
	type: 'EVASION';
	description: string;
	/** The amount that the skill increases the chance of evading the elements by */
	amount: number;
	/** The conditions that the skill triggers under, or null if always in effect */
	criteria: EvasionBoostCriteria | null;
	/** The affinities that the skill increases the chance of evading */
	elements: (DamagingAffinity | 'ALL')[];
	constructor(data: EvasionSkillData) {
		const { amount, criteria, elements } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;

		if (amount === 3) this.description = `Greatly increases Evasion from ${elements[0]} skills. Does not stack.`;
		else if (criteria === 'Rain/Snow') this.description = 'Greatly increases Evasion from all affinities during Rain/Snow.';
		else if (criteria === 'Surrounded') this.description = 'Greatly decreases Accuracy of all foes\' attacks except Almighty when surrounded.';
		else if (elements.length !== 1) this.description = 'Increases Evasion from all magical attacks except Almighty.';
		else this.description = `${amount === 3 ? 'Greatly i' : 'I'}ncreases Evasion from ${elements[0]} skills.${amount === 3 ? ' Does not stack.' : ''}`;

		this.amount = amount;
		this.criteria = criteria;
		this.elements = elements;
	}
}

/** A skill that halves an enemy's HP */
export class HalveSkill extends Skill implements HalveSkillData {
	affinity: LightDark;
	type: 'HALVE';
	description: string;
	/** The skill's MP cost */
	cost: number;
	constructor(data: HalveSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `${this.affinity} attack that reduces HP of one foe by 50%.`;
		this.cost = data.cost;
	}
}

/** A skill that increases the chance of landing an insta-kill */
export class InstaKillBoostSkill extends Skill implements InstaKillBoostSkillData {
	affinity: 'Passive';
	type: 'INSTAKILLBOOST';
	description: string;
	/** The affinity of the insta-kill skill that the skill boosts */
	element: LightDark;
	constructor(data: InstaKillBoostSkillData) {
		const { element } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `Increases success rate of ${element === 'Light' ? 'Hama' : 'Mudo'} skills.`;
		this.element = element;
	}
}

/** A skill that decreases the cost of skills */
export class MasterSkill extends Skill implements MasterSkillData {
	affinity: 'Passive';
	type: 'MASTER';
	description: string;
	/** The stat cost that the skill lowers */
	stat: HPMP;
	constructor(data: MasterSkillData) {
		const { stat } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `Decreases ${stat} cost of skills by half.`;
		this.stat = stat;
	}
}

/** A skill with miscellaneous (likely unique) effects */
export class MiscSkill extends Skill implements MiscSkillData {
	affinity: AnyAffinity;
	type: 'MISC';
	description: string;
	/** The skill's MP cost, or null if the skill has a Passive affinity */
	cost: number | null;
	constructor(data: MiscSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = data.description;
		this.cost = data.cost;
	}
}

/** A skill learned by a navigator in the Persona serise */
export class NaviSkill extends Skill implements NaviSkillData {
	affinity: 'Passive';
	type: 'NAVI';
	description: string;
	constructor(data: NaviSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = data.description;
	}
}

/** A skill that may reflect physical damage */
export class PersonaCounterSkill extends Skill implements PersonaCounterSkillData {
	affinity: 'Passive';
	type: 'PERSONACOUNTER';
	description: string;
	/** The chance of countering attacks */
	chance: number;
	constructor(data: PersonaCounterSkillData) {
		const { chance } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `${chance}% chance of reflecting physical attacks.`;
		this.chance = chance;
	}
}

/** A skill that restores a stat when a battle ends */
export class PostBattleSkill extends Skill implements PostBattleSkillData {
	affinity: 'Passive';
	type: 'POSTBATTLE';
	description: string;
	/** The amount of the stat that the skill increases */
	amount: number;
	/** Whether the skill triggers for nonparticipating party members */
	inactive: boolean;
	/** The stat that the skill increases */
	stat: PostBattleStat;
	constructor(data: PostBattleSkillData) {
		const { amount, inactive, stat } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;

		switch (stat) {
			case 'HP':
			case 'MP': {
				this.description = `Recover ${amount === 25 ? 'a little ' : ''}${stat} after a battle.`;
				break;
			}
			case 'HPMP': {
				this.description = 'Fully restores HP/MP after battle.';
				break;
			}
			case 'EXP': {
				this.description = inactive
					? `Earn ${amount}% EXP even when not participating in battle.`
					: `EXP gained in battle increased by ${amount}%.`;
				break;
			}
			case 'Money': {
				this.description = `Increases money gained by ${amount}%.`;
				break;
			}
		}

		this.amount = amount;
		this.inactive = inactive;
		this.stat = stat;
	}
}

/** A skill that recovers HP, ailments, and/or casts buffs */
export class RecoverySkill extends Skill implements RecoverySkillData {
	affinity: 'Recovery';
	type: 'RECOVERY';
	description: string;
	/** The ailments that the skill recovers from */
	ailments: (Ailment | 'ALL')[];
	/** The displayed amount that the skill recovers by */
	amount: RecoveryAmount | null;
	/** The buffs that the skill casts */
	buffs: Buff[];
	/** The skill's MP cost */
	cost: number;
	/** Special flags for the skill */
	flags: string[];
	/** The range that the skill targets */
	range: Exclude<AllyRange, 'Self'>;
	constructor(data: RecoverySkillData) {
		const { ailments, amount, buffs, flags, range } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;

		const isParty = range === 'Party';
		if (ailments.length > 0) {
			this.description = ailments.includes('ALL')
				? amount === null
					? `Cure status ailments on ${isParty ? 'all allies' : '1 ally'}.`
					: `${amount} HP recovery and cures status ailments${flags.includes('Revert Debuffs') ? '/debuffs' : ''} for ${isParty ? 'all allies' : '1 ally'}.`
				: `Cures ${ailments.join('/')} for ${isParty ? 'all allies' : 'one ally'}.`;
		}
		else if (flags.includes('Revive') && amount !== null) {
			this.description = flags.includes('Summon')
				? 'Summons 1 demon at full HP. Effective on dead members as well.'
				: `Revive ${isParty ? 'all allies' : 'one ally'} with ${amount.toLowerCase()} HP.`;
		}
		else if (amount === '130%') {
			this.description = 'Full HP recovery to all allies and heals above MAX HP.';
		}
		else {
			this.description = `${amount} HP recovery to $isParty ? 'all allies' : '1 ally'}${buffs.length > 0 ? ` and raises ${buffs.length === 3 ? 'all stats' : buffs.join('/')} by ${buffs[0].includes('Double') ? '2 ranks' : '1 rank'} for 3 turns` : ''}.`;
		}

		this.amount = amount;
		this.ailments = ailments;
		this.buffs = buffs;
		this.cost = data.cost;
		this.flags = flags;
		this.range = range;
	}
}

/** A skill that regenerates a stat each turn */
export class RegenSkill extends Skill implements RegenSkillData {
	affinity: 'Passive';
	type: 'REGEN';
	description: string;
	/** The amount of the stat that the skill recovers */
	amount: number;
	/** The criteria for the skill taking effect, or null if always in effect */
	criteria: RegenCriteria | null;
	/** Whether the amount is a percentage of its max instead of a fixed amount */
	percent: boolean;
	/** The stat that the skill recovers */
	stat: HPMPAil;
	constructor(data: RegenSkillData) {
		const { amount, criteria, stat } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = {
			HP: `Restores ${amount}% of max HP each turn in battle.`,
			MP: criteria === 'Baton Pass' ? `Restores ${amount} SP after a Baton Pass.` : `Restores ${amount} MP each turn in battle.`,
			HPMP: criteria === 'Ambush' ? `Restores 5% max HP and ${amount} SP each turn during an Ambush.` : `Restores ${amount}% HP and ${amount} SP each turn in battle.`,
			AIL: amount === 1 ? 'Decreases recovery time from ailments by half.' : 'Decreases recovery time from ailments to 1 turn.'
		}[stat];
		this.amount = amount;
		this.criteria = criteria;
		this.percent = data.percent;
		this.stat = stat;
	}
}

/** A skill that restores MP under certain criteria */
export class SiphonSkill extends Skill implements SiphonSkillData {
	affinity: 'Passive';
	type: 'SIPHON';
	description: string;
	/** The amount of MP that the skill recovers */
	amount: number;
	/** The criteria for the skill to take effect */
	criteria: RestoreCriteria;
	constructor(data: SiphonSkillData) {
		const { amount, criteria } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `${amount === 10 ? 'Low ' : ' '}MP recovery when ${criteria === 'Ailment' ? 'inflicting status ailments' : 'you strike a foe\'s weakness or land a Critical'}.`;
		this.amount = amount;
		this.criteria = criteria;
	}
}

/** A skill that automatically triggers when hit by a physical attack */
export class SMTCounterSkill extends Skill implements SMTCounterSkillData {
	affinity: 'Passive';
	type: 'SMTCOUNTER';
	description: string;
	/** Whether the skill lowers the attack of the attacker */
	attackDown: boolean;
	/** The chance for the skill to take effect */
	chance: number;
	/** The affinity of the attack dealt from the counter */
	element: CounterAffinity;
	/** The numerical and displayed amount of damage that the skill deals */
	power: {
		amount: number;
		display: CounterDisplay;
	};
	constructor(data: SMTCounterSkillData) {
		const { attackDown, element, power } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `Chance to counter Strength-based attacks with a ${power.display.toLowerCase()} ${element} attack.${this.name === 'Retaliate' ? ' Does not stack with Counter.' : ''}${attackDown ? ' Lowers target\'s Attack 1 rank for 3 turns.' : ''}`;
		this.attackDown = attackDown;
		this.chance = data.chance;
		this.element = element;
		this.power = power;
	}
}

/** A skill that increases the user's maximum HP or MP */
export class SpringSkill extends Skill implements SpringSkillData {
	affinity: 'Passive';
	type: 'SPRING';
	description: string;
	/** The amount that the stat is increased by */
	amount: number;
	/** The stat whose maximum the skill increases */
	stat: HPMP;
	constructor(data: SpringSkillData) {
		const { amount, stat } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `${amount === 30 ? 'Greatly i' : 'I'}ncreases MAX ${stat}.`;
		this.amount = amount;
		this.stat = stat;
	}
}

/** A skill that casts buffs, debuffs, or negates those on either allies or enemies */
export class SupportSkill extends Skill implements SupportSkillData {
	affinity: 'Support';
	type: 'SUPPORT';
	description: string;
	/** The barriers or charges automatically cast by having the skill */
	auto: (Barrier | Charge)[];
	/** The buffs cast by the skill */
	buffs: Buff[];
	/** The skill's MP cost */
	cost: number;
	/** The debuffs cast by the skill */
	debuffs: Buff[];
	/** Whether the skill negates its buffs or debuffs from enemies or allies, respectively */
	negate: boolean;
	/** The range that the skill targets */
	range: Exclude<AnyRange, 'Random'>;
	/** Whether the skill only takes effect when surrounded */
	surround: boolean;
	constructor(data: SupportSkillData) {
		const { buffs, debuffs, negate, range, surround } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;

		const isAllyRangeFunc = (r: Exclude<AnyRange, 'Random'>): r is AllyRange => ['Ally', 'Party'].includes(range);
		const isAllyRange = isAllyRangeFunc(range);
		this.description = negate
			? `Negates status ${isAllyRange ? 'de' : ''}buff effects on all ${isAllyRange ? 'allies' : 'foes'}.`
			: isAllyRange
				? `Raises ${buffs.length === 3 ? 'all stats' : buffs.join('/')} of ${range === 'Party' ? 'all allies' : '1 ally'} by ${buffs[0].includes('Double') ? '2 ranks' : '1 rank'} for 3 turns${surround ? ' when surrounded' : ''}.`
				: `Lowers ${debuffs.length === 3 ? 'all stats' : debuffs.join('/')} of ${range === 'All' ? 'all foes' : '1 foe'} by ${debuffs[0].includes('Double') ? '2 ranks' : '1 rank'} for 3 turns.`;

		this.auto = data.auto;
		this.buffs = buffs;
		this.cost = data.cost;
		this.debuffs = debuffs;
		this.negate = negate;
		this.range = range;
		this.surround = surround;
	}
}

/** A skill that increases the target's susceptibility to ailments */
export class SusceptibilitySkill extends Skill implements SusceptibilitySkillData {
	affinity: 'Almighty';
	type: 'SUSCEPTIBILITY';
	description: string;
	/** The skill's MP cost */
	cost: number;
	/** The range that the skill targets */
	range: 'Foe' | 'All';
	constructor(data: SusceptibilitySkillData) {
		const { range } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `Increases chance of inflicting ailments to ${range === 'All' ? 'all' : 'one foe'}.`;
		this.cost = data.cost;
		this.range = range;
	}
}

/** A skill that increases the chance of enemies targeting the user */
export class TauntSkill extends Skill implements TauntSkillData {
	affinity: 'Support';
	type: 'TAUNT';
	description: string;
	/** The buff cast by the skill */
	buff: Buff | null;
	/** The skill's MP cost */
	cost: number;
	constructor(data: TauntSkillData) {
		const { buff } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = buff === null
			? 'Raises chances of being targed by foes for 3 turns.'
			: `Draws enemy hostility, but increases your ${buff} ${buff.includes('Double') ? '2 tiers' : 'by 1 rank'} for 3 turns.`;
		this.buff = buff;
		this.cost = data.cost;
	}
}

/** A skill that temporarily increases an ally's resistance to damage from an affinity */
export class WallSkill extends Skill implements WallSkillData {
	affinity: 'Support';
	type: 'WALL';
	description: string;
	/** The skill's MP cost */
	cost: number;
	/** The affinity that the skill temporarily increases resistance from */
	element: Exclude<DamagingAffinity, SMTAffinity | 'Almighty'>;
	constructor(data: WallSkillData) {
		const { element } = data;
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.description = `Adds ${element} resistance to one ally for 3 turns.`;
		this.cost = data.cost;
		this.element = element;
	}
}

Skill.array = skillData.map(data => {
	switch (data.type) {
		case 'AILBOOST': return new AilBoostSkill(data);
		case 'AILDEFENSIVE': return new AilDefensiveSkill(data);
		case 'AILMENT': return new AilmentSkill(data);
		case 'ATTACK': return new AttackSkill(data);
		case 'AUTOBUFF': return new AutoBuffSkill(data);
		case 'BARRIER': return new BarrierSkill(data);
		case 'BARRIERBREAK': return new BarrierBreakSkill(data);
		case 'BLOCK': return new BlockSkill(data);
		case 'BOOST': return new BoostSkill(data);
		case 'BREAK': return new BreakSkill(data);
		case 'CHARGE': return new ChargeSkill(data);
		case 'CRIT': return new CritSkill(data);
		case 'CRITBOOST': return new CritBoostSkill(data);
		case 'DEFENSIVE': return new DefensiveSkill(data);
		case 'ENDURE': return new EndureSkill(data);
		case 'EVASION': return new EvasionSkill(data);
		case 'HALVE': return new HalveSkill(data);
		case 'INSTAKILLBOOST': return new InstaKillBoostSkill(data);
		case 'MASTER': return new MasterSkill(data);
		case 'MISC': return new MiscSkill(data);
		case 'NAVI': return new NaviSkill(data);
		case 'PERSONACOUNTER': return new PersonaCounterSkill(data);
		case 'POSTBATTLE': return new PostBattleSkill(data);
		case 'RECOVERY': return new RecoverySkill(data);
		case 'REGEN': return new RegenSkill(data);
		case 'SIPHON': return new SiphonSkill(data);
		case 'SMTCOUNTER': return new SMTCounterSkill(data);
		case 'SPRING': return new SpringSkill(data);
		case 'SUPPORT': return new SupportSkill(data);
		case 'SUSCEPTIBILITY': return new SusceptibilitySkill(data);
		case 'TAUNT': return new TauntSkill(data);
		case 'WALL': return new WallSkill(data);
	}
});
Skill.collection = new Collection(Skill.array.map(skill => [skill.devName, skill]));

export type AnySkillData = AilBoostSkillData | AilDefensiveSkillData | AilmentSkillData | AttackSkillData | AutoBuffSkillData | BarrierSkillData | BarrierBreakSkillData | BlockSkillData | BoostSkillData | BreakSkillData
| ChargeSkillData | CritSkillData | CritBoostSkillData | DefensiveSkillData | EndureSkillData | EvasionSkillData | HalveSkillData | InstaKillBoostSkillData | MasterSkillData | MiscSkillData | NaviSkillData
| PersonaCounterSkillData | PostBattleSkillData | RecoverySkillData | RegenSkillData | SiphonSkillData | SMTCounterSkillData | SpringSkillData | SupportSkillData | SusceptibilitySkillData | TauntSkillData | WallSkillData;

export type AnySkill = AilBoostSkill | AilDefensiveSkill | AilmentSkill | AttackSkill | AutoBuffSkill | BarrierSkill | BarrierBreakSkill | BlockSkill | BoostSkill | BreakSkill
| ChargeSkill | CritSkill | CritBoostSkill | DefensiveSkill | EndureSkill | EvasionSkill | HalveSkill | InstaKillBoostSkill | MasterSkill | MiscSkill | NaviSkill
| PersonaCounterSkill | PostBattleSkill | RecoverySkill | RegenSkill | SiphonSkill | SMTCounterSkill | SpringSkill | SupportSkill | SusceptibilitySkill | TauntSkill | WallSkill;