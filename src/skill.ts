import { normalize } from '@squiddleton/util';
import type { AilBoostSkillData, AilDefensiveSkillData, AilmentSkillData, AttackSkillData, AutoBuffSkillData, BarrierBreakSkillData, BarrierSkillData, BoostSkillData, BreakSkillData, ChargeSkillData, CritBoostSkillData, CritSkillData, DefensiveSkillData, EndureSkillData, EvasionSkillData, InstaKillBoostSkillData, MasterSkillData, MiscSkillData, NaviSkillData, PersonaCounterSkillData, PostBattleSkillData, RecoverySkillData, RegenSkillData, SMTCounterSkillData, SetSkillData, SiphonSkillData, SkillData, SpringSkillData, SummonSkillData, SupportSkillData, SusceptibilitySkillData, TauntSkillData, WallSkillData } from './dataTypes';
import { MegatenError } from './error';
import skillData from './skillData';
import type { AilBoostCriteria, AilDefensiveAilment, AilResistance, Ailment, AilmentName, AilmentRange, AllyRange, AnyAffinity, AttackCost, AttackFlag, AttackPower, AutoBuffRange, Barrier, BarrierRange, BoostAffinity, BoostStack, BreakAffinity, Buff, Charge, CritBoostCriteria, CritRange, DamagingAffinity, Debuff, DefensiveAffinity, EndureCriteria, EnemyRange, EvasionAffinity, EvasionBoostCriteria, HPMP, HPMPAil, LightDark, MasterStat, NumberOrPercent, OneOrAllAilments, PostBattleStat, RecoveryAmount, RecoveryFlag, RecoveryRange, RegenCriteria, Resistance, SMTCounterAffinity, SMTCounterPower, Series, SetAffinity, SingleOrDoubleBuff, SiphonCriteria, SkillType, SupportAutoEffect, SupportFlag, SupportRange, SusceptibilityRange, WallAffinity } from './types';

export abstract class Skill implements SkillData {
	/** The skill's name (adjusted for consistency with SMT5) */
	name: string;
	/** The skill's alternative names */
	aliases: string[];
	/** The skill's normalized name used for matching queries */
	devName: string;
	/** Whether the skill is unique to any specific demon(s), or null if the demon cannot be fused */
	unique: boolean | null;
	/** The skill's affinity (adjusted for consistency with SMT5) */
	affinity: AnyAffinity;
	/** The skill's type */
	type: SkillType;
	/** The skill's description (adjusted for consistency with SMT5) */
	abstract description: string;
	constructor(data: AnySkillData) {
		this.name = data.name;
		this.aliases = data.aliases ?? [];
		this.devName = normalize(data.name);
		this.unique = data.unique === undefined ? false : data.unique;
		this.affinity = data.affinity;
		this.type = data.type;
	}
	/** Returns a string in "(Name): (Description)" format */
	toString() {
		return `${this.name}: ${this.description}`;
	}
	/** An array of every Skill instance */
	static array: readonly AnySkill[] = [];
	/** A map of every Skill instance, keyed by their devName properties */
	static map: Map<string, AnySkill> = new Map();
	/**
	 *
	 * Gets a Skill instance by its name.
	 * @example
	 * ```ts
	 * const skill1 = Skill.get('Agi', true); // Type: AnySkill
	 * console.log(skill1); // AttackSkill { ... }
	 *
	 * const skill2 = Skill.get('Fire Blast'); // Type: AnySkill | null
	 * console.log(skill2); // null
	 *
	 * const skill3 = Skill.get('Kafrizz', true); // Type: AnySkill; Throws a MegatenError
	 * ```
	 *
	 * @param name - The skill's name
	 * @param error - Whether to throw an exception instead of returning null if no skill is found; defaults to false
	 */
	static get(name: string, error: true): AnySkill;
	static get(name: string, error?: boolean): AnySkill | null;
	static get(name: string, error = false) {
		const normalized = normalize(name);
		const found = this.map.get(normalized) ?? this.array.find(skill => skill.aliases.some(alias => normalize(alias) === normalized)) ?? null;
		if (error && found === null) throw new MegatenError(name, 'Skill');
		return found;
	}
}

/** A skill that boosts the chance of inflicting ailments */
export class AilBoostSkill extends Skill implements AilBoostSkillData {
	declare affinity: 'Passive';
	declare type: 'AILBOOST';
	description: string;
	/** The ailment that the skill increases the chance of inflicting */
	ailment: OneOrAllAilments;
	/** The additional chance of inflicting the ailment */
	amount: number;
	/** The conditions that the skill triggers under, or null if always in effect */
	criteria: AilBoostCriteria | null;
	constructor(data: AilBoostSkillData) {
		const { ailment, criteria } = data;
		super(data);
		this.description = `Increases chance of inflicting ${ailment === 'All' ? 'ailments' : ailment}${criteria === null ? '' : ` during ${criteria}`}.`;
		this.ailment = ailment;
		this.amount = data.amount;
		this.criteria = criteria;
	}
}

/** A skill that decreases the chance of afflicting the user with an ailment */
export class AilDefensiveSkill extends Skill implements AilDefensiveSkillData {
	declare affinity: 'Passive';
	declare type: 'AILDEFENSIVE';
	description: string;
	/** The ailment resisted by this skill */
	ailment: AilDefensiveAilment;
	/** The level of resistance to the ailment */
	resistance: AilResistance;
	constructor(data: AilDefensiveSkillData) {
		const { ailment, resistance } = data;
		super(data);
		this.description = resistance === 'Resist'
			? `Decreases chance of being inflicted with ${ailment}.`
			: `Prevents infliction of ${ailment}.`;
		this.ailment = ailment;
		this.resistance = resistance;
	}
}

/** A skill that inflicts an ailment */
export class AilmentSkill extends Skill implements AilmentSkillData {
	declare affinity: 'Ailment';
	declare type: 'AILMENT';
	description: string;
	/** The ailments that the skill inflicts */
	ailments: AilmentName[];
	/** The chance of inflicting the ailments (adjusted for consistency with SMT5) */
	chance: number;
	/** The skill's MP cost */
	cost: number;
	/** The skill's special or notable features */
	flags: Debuff[];
	/** The range that the skill targets */
	range: AilmentRange;
	constructor(data: AilmentSkillData) {
		const { ailments, flags = [], range } = data;
		super(data);
		this.description = `Chance of inflicting ${ailments.join(' and ')} to ${range === 'One' ? '1 foe' : 'all foes'}${flags.length === 0 ? '' : `and lowers ${flags.map(flag => flag.split(' ')[0]).join('')} by ${flags.every(flag => flag.includes('Greatly')) ? '2 ranks' : '1 rank'} for 3 turns`}.`;
		this.ailments = ailments;
		this.chance = data.chance;
		this.cost = data.cost;
		this.flags = flags;
		this.range = range;
	}
}

/** A skill that deals damage, potentially having other effects */
export class AttackSkill extends Skill implements AttackSkillData {
	declare affinity: DamagingAffinity;
	declare type: 'ATTACK';
	description: string;
	/** The skill's accuracy */
	accuracy: number;
	/** The names and chances of ailments that the skill inflicts */
	ailments: Ailment[];
	/** The skill cost's type and amount */
	cost: AttackCost;
	/** The skill's special or notable features */
	flags: AttackFlag[];
	/** The maximum times that the skill can land */
	max: number;
	/** The minimum times that the skill can land, excluding misses */
	min: number;
	/** The numerical and displayed amount of damage that the skill deals */
	power: AttackPower;
	/** The range that the skill targets */
	range: EnemyRange;
	/** The game series that the skill data originates from */
	series: Series;
	constructor(data: AttackSkillData) {
		const { accuracy, affinity, ailments = [], flags = [], max = 1, min = 1, power, range, series } = data;
		super(data);

		const times = max === 1
			? ''
			: max === min
				? max.toString()
				: `${min}~${max}`;
		const displayAffinity = `${times !== '' ? `${times} ${power.display.toLowerCase()}` : power.display} ${(flags.includes('Pierce') && ailments.length > 0) ? 'Piercing ' : ''}${(power.type === 'Physical' && !['Phys', 'Gun'].includes(affinity)) ? 'Strength-based ' : ''}${affinity}`;
		const displayRange = {
			One: '1 foe',
			All: 'all foes',
			Random: 'random foes'
		}[range];
		if (flags.includes('Drain HP/MP')) {
			this.description = `${displayAffinity} HP/MP drain attack to ${displayRange}.`;
		}
		else if (flags.includes('Drain HP')) {
			this.description = flags.includes('Static Damage')
				? `Drains ${power.amount} HP from ${displayRange}.`
				: `${displayAffinity} ${power.display === 'Weak' ? 'HP drain' : 'HP-draining'} attack to ${displayRange}.`;
		}
		else if (flags.includes('Drain MP')) {
			this.description = flags.includes('Static Damage')
				? `Drains ${power.amount} MP from ${displayRange}.`
				: `${displayAffinity} MP drain attack to ${displayRange}.`;
		}
		else {
			this.description = `${displayAffinity} attack${max > 1 ? 's' : ''} to ${displayRange}.`;
		}

		const sentences: string[] = [];

		if (ailments.length > 0) sentences.push(`Chance of inflicting ${ailments.map(ailment => ailment.name).join('/')}.`);

		if (flags.length > 0) {
			if (flags.includes('+20% Crit Rate') || flags.includes('+30% Crit Rate')) {
				sentences.push('High chance of Critical.');
			}
			if (flags.includes('+200% Crit Rate') && accuracy !== 50) {
				if (flags.includes('Pierce')) sentences.push('Ignores resistance, pierces, and always Critical.');
				else if (accuracy === 50) sentences.push('Low accuracy, but hits are always Critical.');
				else sentences.push('Always lands Critical hits.');
			}
			if (flags.includes('Accuracy/Evasion Down')) {
				sentences.push('Lowers target\'s Accuracy/Evasion by 1 rank for 3 turns.');
			}
			if (flags.includes('Afflicted Boost')) {
				sentences.push('Greater effect if target has an ailment.');
			}
			if (flags.includes('Asleep Boost')) {
				sentences.push('Greater effect when target is asleep.');
			}
			if (flags.includes('Attack Down')) {
				if (flags.includes('Defense Down')) sentences.push('Lowers target\'s Attack/Defense by 1 rank for 3 turns.');
				else sentences.push('Lowers target\'s Attack by 1 rank for 3 turns.');
			}
			if (flags.includes('Attack Reduced')) {
				sentences.push('Decreases Attack after use.');
			}
			if (flags.includes('Baton Boost')) {
				sentences.push('Powers up after a Baton Pass.');
			}
			if (flags.includes('Charmed Boost')) {
				sentences.push('Greater effect if target is Charmed.');
			}
			if (flags.includes('Confused Boost')) {
				sentences.push('Greater effect when target is Confused.');
			}
			if (flags.includes('Crit Damage Boost')) {
				sentences.push('Greater effect when landing a Critical.');
			}
			if (flags.includes('Defense Down')) {
				if (!flags.includes('Attack Down')) sentences.push('Lowers target\'s Defense by 1 rank for 3 turns.');
			}
			if (flags.includes('Defense Greatly Down')) {
				sentences.push('Lowers Defense by 2 ranks for 3 turns.');
			}
			if (flags.includes('Down Boost')) {
				sentences.push('Highly effective if foe is Downed.');
			}
			if (flags.includes('HP Dependent')) {
				sentences.push('The more remaining HP you have, the stronger the attack.');
			}
			if (flags.includes('Instakill')) {
				sentences.push('Chance of instakill.');
			}
			if (flags.includes('Minimize Defense')) {
				sentences.push('Lowers target\'s Defense to the minimum for 3 turns.');
			}
			if (flags.includes('Negate Buffs')) {
				sentences.push('Negates target\'s status buff effects.');
			}
			if (flags.includes('Pierce') && ailments.length === 0 && !flags.includes('+200% Crit Rate')) {
				sentences.push('Ignores affinity resistance and pierces through.');
			}
			if (flags.includes('Poisoned Boost')) {
				sentences.push('Greater effect if target is Poisoned.');
			}
			if (flags.includes('Surround Boost')) {
				sentences.push('Powers up when surrounded.');
			}
			if (flags.includes('Weakness Instakill')) {
				sentences.push('Chance of instakill when striking weakness.');
			}
			if (flags.includes('Weather Boost')) {
				sentences.push('Increased Critical rate in rainy or snowy weather.');
			}
		}

		if (accuracy >= 95 && affinity === 'Phys' && series === 'persona') sentences.push('High accuracy.');
		else if (accuracy === 50 && !flags.includes('+200% Crit Rate')) sentences.push('Low accuracy.');

		if (sentences.length > 0) this.description += ` ${sentences.join(' ')}`;

		this.accuracy = accuracy;
		this.ailments = ailments;
		this.cost = data.cost;
		this.flags = flags;
		this.max = max;
		this.min = min;
		this.power = power;
		this.range = range;
		this.series = series;
	}
}

/** A skill that automatically casts a buff at the start of battle */
export class AutoBuffSkill extends Skill implements AutoBuffSkillData {
	declare affinity: 'Passive';
	declare type: 'AUTOBUFF';
	description: string;
	/** The buff automatically applied by the skill */
	buff: Buff;
	/** The range that the skill targets */
	range: AutoBuffRange;
	constructor(data: AutoBuffSkillData) {
		const { buff, range } = data;
		super(data);

		let buffSkillName = { Attack: 'Tarukaja', Defense: 'Rakukaja', 'Accuracy/Evasion': 'Sukukaja' }[buff];
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
	declare affinity: 'Support';
	declare type: 'BARRIER';
	description: string;
	/** The barriers that the skill forms */
	barriers: Barrier[];
	/** The skill's MP cost */
	cost: number;
	/** The range that the skill targets */
	range: BarrierRange;
	constructor(data: BarrierSkillData) {
		super(data);

		if (data.barriers.length > 1) {
			this.description = 'Forms a barrier that reflects all attacks for all allies.';
		}
		else {
			const [barrier] = data.barriers;
			switch (barrier) {
				case 'Tetraja': {
					this.description = 'A barrier that nullifies an instakill for all allies one time.';
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
				default: {
					this.description = `Nullifies a${['Ice', 'Elec'].some(affinity => this.name.includes(affinity)) ? 'n' : ''} ${this.name.replace(' Wall', '')} attack against all allies once for 1 turn.`;
				}
			}
		}

		this.barriers = data.barriers;
		this.cost = data.cost;
		this.range = data.range;
	}
}

/** A skill that removes a barrier */
export class BarrierBreakSkill extends Skill implements BarrierBreakSkillData {
	declare affinity: 'Support';
	declare type: 'BARRIERBREAK';
	description: string;
	/** The barrier that the skill removes */
	barrier: Barrier;
	/** The skill's MP cost */
	cost: number;
	constructor(data: BarrierBreakSkillData) {
		const { barrier } = data;
		super(data);
		this.description = `Negates ${barrier} on all foes.`;
		this.barrier = barrier;
		this.cost = data.cost;
	}
}

/** A skill that boosts the damage/recovery amount of skills with a specific affinity */
export class BoostSkill extends Skill implements BoostSkillData {
	declare affinity: 'Passive';
	declare type: 'BOOST';
	description: string;
	/** The amount that the element's damage is boosted by */
	amount: number;
	/** The affinity of the skills that the skill boosts */
	element: BoostAffinity;
	/** Whether the skill stacks additively or multiplicatively */
	stacks: BoostStack;
	constructor(data: BoostSkillData) {
		const { amount, element, stacks } = data;
		super(data);

		if (element === 'All') this.description = 'Strengtens all attacks. Can stack.';
		else if (stacks === 'x') this.description = `Strengthens ${element} skills by ${amount}%.`;
		else this.description = `${amount === 35 ? 'Greatly i' : 'I'}ncreases ${element} attack damage.`;

		this.amount = amount;
		this.element = element;
		this.stacks = stacks;
	}
}

/** A skill that negates resistance to an affinity */
export class BreakSkill extends Skill implements BreakSkillData {
	declare affinity: 'Support';
	declare type: 'BREAK';
	description: string;
	/** The skill's MP cost */
	cost: number;
	/** The affinity whose resistance is negated by the skill */
	element: BreakAffinity;
	constructor(data: BreakSkillData) {
		const { element } = data;
		super(data);
		this.description = `Negates ${element} resistance of all foes. Cannot negate ${element} Wall.`;
		this.cost = data.cost;
		this.element = element;
	}
}

/** A skill that casts a charge */
export class ChargeSkill extends Skill implements ChargeSkillData {
	declare affinity: 'Support';
	declare type: 'CHARGE';
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

/** A skill that is cast to increase the chance of landing critical hits */
export class CritSkill extends Skill implements CritSkillData {
	declare affinity: 'Support';
	declare type: 'CRIT';
	description: string;
	/** The skill's MP cost */
	cost: number;
	/** The range that the skill targets */
	range: CritRange;
	constructor(data: CritSkillData) {
		const { range } = data;
		super(data);
		this.description = `Increases chance of Critical for ${{ All: 'all', Ally: 'one ally', Party: 'all allies' }[range]} for 3 turns.`;
		this.cost = data.cost;
		this.range = range;
	}
}

/** A skill that passively increases the chance of landing critical hits */
export class CritBoostSkill extends Skill implements CritBoostSkillData {
	declare affinity: 'Passive';
	declare type: 'CRITBOOST';
	description: string;
	/** The additional chance of landing a critical hit */
	amount: number;
	/** The conditions that the skill triggers under, or null if always in effect */
	criteria: CritBoostCriteria | null;
	constructor(data: CritBoostSkillData) {
		const { criteria } = data;
		super(data);

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

/** A skill that increases resistance to damage from a specific affinity */
export class DefensiveSkill extends Skill implements DefensiveSkillData {
	declare affinity: 'Passive';
	declare type: 'DEFENSIVE';
	description: string;
	/** The affinity that the skill increases resistance from */
	element: DefensiveAffinity;
	/** The skill user's new resistance to the element */
	newResistance: Resistance;
	constructor(data: DefensiveSkillData) {
		const { element, newResistance } = data;
		super(data);
		this.description = {
			Drain: `Absorbs damage from ${element} skills.`,
			Repel: `Reflects ${element} skills.`,
			Resist: `Strengthens resistance to ${element} skills.`,
			Null: `Nullifies ${element} skills.`
		}[newResistance];
		this.element = element;
		this.newResistance = newResistance;
	}
}

/** A skill that saves the user from a lethal attack */
export class EndureSkill extends Skill implements EndureSkillData {
	declare affinity: 'Passive';
	declare type: 'ENDURE';
	description: string;
	/** The priority that the skill triggers compared to other EndureSkill instances (a higher priority will trigger earlier in battle), or the chance that the skill triggers */
	amount: number;
	/** The conditions that the skill triggers under, or null if always in effect */
	criteria: EndureCriteria | null;
	constructor(data: EndureSkillData) {
		const { amount, criteria } = data;
		super(data);

		if (criteria === 'Light/Dark') this.description = 'Survive instakill skills with 1 HP.';
		else if (criteria !== null) this.description = `${amount}% chance to survive ${criteria} skills with 1 HP.`;
		else if (amount === 1) this.description = 'Revives with 1 HP when KO\'d. Usable once per battle.';
		else this.description = 'Endures lethal attack and fully heals HP once in battle.';

		this.amount = amount;
		this.criteria = criteria;
	}
}

/** A skill that increases evasion from skills with specific affinities */
export class EvasionSkill extends Skill implements EvasionSkillData {
	declare affinity: 'Passive';
	declare type: 'EVASION';
	description: string;
	/** The amount that the skill increases the chance of evading the elements by, or 0 if unknown */
	amount: number;
	/** The conditions that the skill triggers under, or null if always in effect */
	criteria: EvasionBoostCriteria | null;
	/** The affinity that the skill increases evasion from */
	element: EvasionAffinity;
	constructor(data: EvasionSkillData) {
		const { amount, criteria, element } = data;
		super(data);

		if (criteria === 'Rain/Snow') this.description = 'Greatly increases Evasion from all affinities during Rain/Snow.';
		else if (criteria === 'Surrounded') this.description = 'Greatly decreases Accuracy of all foes\' attacks except Almighty when surrounded.';
		else if (element === 'Crit/Magic') this.description = 'Increases Evasion from Critical and magical attacks.';
		else if (element === 'Magic') this.description = 'Increases Evasion from all magical attacks except Almighty.';
		else this.description = `${amount === 3 ? 'Greatly i' : 'I'}ncreases Evasion from ${element} skills.${amount === 3 ? ' Does not stack.' : ''}`;

		this.amount = amount;
		this.criteria = criteria;
		this.element = element;
	}
}

/** A skill that increases the chance of landing an instakill */
export class InstaKillBoostSkill extends Skill implements InstaKillBoostSkillData {
	declare affinity: 'Passive';
	declare type: 'INSTAKILLBOOST';
	description: string;
	/** The affinity of the instakill skill that the skill boosts (adjusted for consistency with SMT5) */
	element: LightDark;
	constructor(data: InstaKillBoostSkillData) {
		const { element } = data;
		super(data);
		this.description = `Increases success rate of ${element === 'Light' ? 'Hama' : 'Mudo'} skills.`;
		this.element = element;
	}
}

/** A skill that decreases the cost of skills */
export class MasterSkill extends Skill implements MasterSkillData {
	declare affinity: 'Passive';
	declare type: 'MASTER';
	description: string;
	/** The amount of the stat that skills' costs are reduced by */
	amount: number;
	/** The stat cost that the skill lowers */
	stat: MasterStat;
	constructor(data: MasterSkillData) {
		const { amount, stat } = data;
		super(data);
		const displayStat = {
			HP: 'HP',
			MP: 'MP',
			HPMP: 'HP and MP'
		}[stat];
		this.description = `Decreases ${displayStat} cost of skills by ${amount}%.`;
		this.amount = amount;
		this.stat = stat;
	}
}

/** A skill with miscellaneous (likely unique) effects */
export class MiscSkill extends Skill implements MiscSkillData {
	declare affinity: AnyAffinity;
	declare type: 'MISC';
	description: string;
	/** The skill's MP cost, or null if the skill has a Passive affinity */
	cost: number | null;
	constructor(data: MiscSkillData) {
		super(data);
		this.description = data.description;
		this.cost = data.cost;
	}
}

/** A skill learned by a navigator in the Persona serise */
export class NaviSkill extends Skill implements NaviSkillData {
	declare unique: null;
	declare affinity: 'Passive';
	declare type: 'NAVI';
	description: string;
	constructor(data: NaviSkillData) {
		super(data);
		this.description = data.description;
	}
}

/** A skill that may reflect physical damage */
export class PersonaCounterSkill extends Skill implements PersonaCounterSkillData {
	declare affinity: 'Passive';
	declare type: 'PERSONACOUNTER';
	description: string;
	/** The chance of countering attacks */
	chance: number;
	constructor(data: PersonaCounterSkillData) {
		const { chance } = data;
		super(data);
		this.description = `${chance}% chance of reflecting physical attacks.`;
		this.chance = chance;
	}
}

/** A skill that restores a stat when a battle ends */
export class PostBattleSkill extends Skill implements PostBattleSkillData {
	declare affinity: 'Passive';
	declare type: 'POSTBATTLE';
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

		switch (stat) {
			case 'HP':
			case 'MP': {
				this.description = `Recover ${amount === 25 ? 'a little ' : ''}${stat} after a battle.`;
				break;
			}
			case 'HPMP': {
				this.description = amount === 100
					? 'Fully restores HP/MP after battle.'
					: `Restores ${amount}% HP and MP after battle.`;
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
	declare affinity: 'Recovery';
	declare type: 'RECOVERY';
	description: string;
	/** The ailments that the skill recovers from */
	ailments: AilmentName[] | 'All';
	/** The displayed amount that the skill heals, or null if it does not heal */
	amount: RecoveryAmount | null;
	/** The buffs that the skill casts */
	buffs: SingleOrDoubleBuff[];
	/** The skill's MP cost */
	cost: number;
	/** Special flags for the skill */
	flags: RecoveryFlag[];
	/** The range that the skill targets */
	range: RecoveryRange;
	constructor(data: RecoverySkillData) {
		const { ailments = [], amount, buffs = [], flags = [], range } = data;
		super(data);

		const isParty = range === 'Party';
		if (ailments === 'All') {
			this.description = amount === null
				? `Cure status ailments on ${isParty ? 'all allies' : '1 ally'}.`
				: `${amount} HP recovery and cures status ailments${flags.includes('Revert Debuffs') ? '/debuffs' : ''} for ${isParty ? 'all allies' : '1 ally'}.`;
		}
		else if (ailments.length > 0) {
			this.description = `Cures ${ailments.join('/')} for ${isParty ? 'all allies' : 'one ally'}.`;
		}
		else if (flags.includes('Negate')) {
			this.description = `${amount} HP recovery for all allies. Cancels debuffs and raises all stats 1 tier for 3 turns.`;
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
			this.description = `${amount} HP recovery to ${isParty ? 'all allies' : '1 ally'}${buffs.length > 0 ? ` and raises ${buffs.length === 3 ? 'all stats' : buffs.join('/')} by ${buffs[0].includes('Double') ? '2 ranks' : '1 rank'} for 3 turns` : ''}.`;
		}

		this.ailments = ailments;
		this.amount = amount;
		this.buffs = buffs;
		this.cost = data.cost;
		this.flags = flags;
		this.range = range;
	}
}

/** A skill that regenerates a stat each turn */
export class RegenSkill extends Skill implements RegenSkillData {
	declare affinity: 'Passive';
	declare type: 'REGEN';
	description: string;
	/** The amount of the stat that the skill recovers */
	amount: NumberOrPercent;
	/** The conditions that the skill triggers under, or null if always in effect */
	criteria: RegenCriteria | null;
	/** The stat that the skill recovers */
	stat: HPMPAil;
	constructor(data: RegenSkillData) {
		const { amount, criteria, stat } = data;
		super(data);
		this.description = {
			HP: `Restores ${amount} of max HP each turn in battle.`,
			MP: criteria === 'Baton Pass' ? `Restores ${amount} MP after a Baton Pass.` : `Restores ${amount} MP each turn in battle.`,
			HPMP: criteria === 'Ambush' && typeof amount === 'number' ? `Restores ${amount / 2}% max HP and ${amount} MP each turn during an Ambush.` : `Restores ${amount}% HP and ${amount} MP each turn in battle.`,
			AIL: amount === 1 ? 'Decreases recovery time from ailments by half.' : 'Decreases recovery time from ailments to 1 turn.'
		}[stat];
		this.amount = amount;
		this.criteria = criteria;
		this.stat = stat;
	}
}

/** A skill that sets an enemy's HP to a specific amount */
export class SetSkill extends Skill implements SetSkillData {
	declare affinity: SetAffinity;
	declare type: 'SET';
	description: string;
	/** The amount of the enemy's current HP that it will be set to */
	amount: NumberOrPercent;
	/** The skill's MP cost, or null if enemy-exclusive */
	cost: number | null;
	constructor(data: SetSkillData) {
		const { amount } = data;
		super(data);
		this.description = typeof amount === 'string'
			? `${this.affinity} attack that reduces HP of one foe by ${amount}.`
			: `Reduces enemy to ${amount} HP.`;
		this.amount = amount;
		this.cost = data.cost;
	}
}

/** A skill that restores MP under certain criteria */
export class SiphonSkill extends Skill implements SiphonSkillData {
	declare affinity: 'Passive';
	declare type: 'SIPHON';
	description: string;
	/** The amount of MP that the skill recovers */
	amount: number;
	/** The conditions that the skill triggers under, or null if always in effect */
	criteria: SiphonCriteria;
	constructor(data: SiphonSkillData) {
		const { amount, criteria } = data;
		super(data);
		this.description = `${amount === 10 ? 'Low ' : ' '}MP recovery when ${criteria === 'Ailment' ? 'inflicting status ailments' : 'you strike a foe\'s weakness or land a Critical'}.`;
		this.amount = amount;
		this.criteria = criteria;
	}
}

/** A skill that automatically triggers when hit by a physical attack */
export class SMTCounterSkill extends Skill implements SMTCounterSkillData {
	declare affinity: 'Passive';
	declare type: 'SMTCOUNTER';
	description: string;
	/** Whether the skill lowers the attack of the attacker */
	attackDown: boolean;
	/** The chance for the skill to take effect */
	chance: number;
	/** The affinity of the attack dealt from the counter */
	element: SMTCounterAffinity;
	/** The numerical and displayed amount of damage that the skill deals */
	power: SMTCounterPower;
	/** Whether the skill inflicts Shroud on the attacker */
	shroud: boolean;
	constructor(data: SMTCounterSkillData) {
		const { attackDown, chance, element, power, shroud = false } = data;
		super(data);
		this.description = shroud
			? `Counters all attacks with a ${power.display.toLowerCase()} ${element} attack for one turn. Counterattack also inflicts Shroud.`
			: chance === 100
				? `Counterattacks with ${power.display.toLowerCase()} ${element} attack when a Thunder Bit is defeated.`
				: `Chance to counter Strength-based attacks with a ${power.display.toLowerCase()} ${element} attack.${this.name === 'Retaliate' ? ' Does not stack with Counter.' : ''}${attackDown ? ' Lowers target\'s Attack 1 rank for 3 turns.' : ''}`;
		this.attackDown = attackDown;
		this.chance = chance;
		this.element = element;
		this.power = power;
		this.shroud = shroud;
	}
}

/** A skill that increases the user's maximum HP or MP */
export class SpringSkill extends Skill implements SpringSkillData {
	declare affinity: 'Passive';
	declare type: 'SPRING';
	description: string;
	/** The amount that the stat is increased by */
	amount: NumberOrPercent;
	/** The stat that the skill increases */
	stat: HPMP;
	constructor(data: SpringSkillData) {
		const { amount, stat } = data;
		super(data);
		this.description = typeof amount === 'string'
			? `Increases max ${stat} by ${amount}.`
			: `${amount === 30 ? 'Greatly i' : 'I'}ncreases MAX ${stat}.`;
		this.amount = amount;
		this.stat = stat;
	}
}

/** A skill that summons one or more demons as allies */
export class SummonSkill extends Skill implements SummonSkillData {
	declare unique: null;
	declare affinity: 'Misc';
	declare type: 'SUMMON';
	description: string;
	/** The summoned demon's name, or null if unknown */
	demon: string | null;
	constructor(data: SummonSkillData) {
		super(data);
		this.description = 'Summons allies.';
		this.demon = data.demon;
	}
}

/** A skill that casts buffs, debuffs, or negates those on either allies or enemies */
export class SupportSkill extends Skill implements SupportSkillData {
	declare affinity: 'Support';
	declare type: 'SUPPORT';
	description: string;
	/** The barriers or charges automatically cast by having the skill */
	auto: SupportAutoEffect[];
	/** The buffs cast by the skill */
	buffs: SingleOrDoubleBuff[];
	/** The skill's MP cost */
	cost: number;
	/** The debuffs cast by the skill */
	debuffs: Buff[];
	/** The skill's special or notable features */
	flags: SupportFlag[];
	/** Whether the skill negates its buffs or debuffs from enemies or allies, respectively */
	negate: boolean;
	/** The range that the skill targets */
	range: SupportRange;
	constructor(data: SupportSkillData) {
		const { buffs, debuffs, flags = [], negate, range } = data;
		super(data);

		const isAllyRangeFunc = (allyRange: SupportRange): allyRange is AllyRange => ['Ally', 'Party'].includes(range);
		const isAllyRange = isAllyRangeFunc(range);
		if (flags.includes('Cure Non-Special Ailments')) {
			this.description = 'Cures all non-special ailments for all allies.';
		}
		else if (flags.includes('Maximize Buff')) {
			this.description = `Maximizes ${buffs[0]} for 3 turns.`;
		}
		else if (flags.includes('Minimize Debuffs')) {
			this.description = `Minimizes ${debuffs.join('/')} of 1 foe for 3 turns.`;
		}
		else {
			this.description = negate
				? `Negates status ${isAllyRange ? 'de' : ''}buff effects on all ${isAllyRange ? 'allies' : 'foes'}.`
				: isAllyRange
					? `Raises ${buffs.length === 3 ? 'all stats' : buffs.join('/').replace('Double ', '')} of ${range === 'Party' ? 'all allies' : '1 ally'} by ${buffs[0].includes('Double') ? '2 ranks' : '1 rank'} for 3 turns${flags.includes('Surrounded Only') ? ' when surrounded' : ''}.`
					: `Lowers ${debuffs.length === 3 ? 'all stats' : debuffs.join('/')} of ${range === 'All' ? 'all foes' : '1 foe'} by ${debuffs[0].includes('Double') ? '2 ranks' : '1 rank'} for 3 turns.`;
		}

		this.auto = data.auto;
		this.buffs = buffs;
		this.cost = data.cost;
		this.debuffs = debuffs;
		this.flags = flags;
		this.negate = negate;
		this.range = range;
	}
}

/** A skill that increases the target's susceptibility to ailments */
export class SusceptibilitySkill extends Skill implements SusceptibilitySkillData {
	declare affinity: 'Almighty';
	declare type: 'SUSCEPTIBILITY';
	description: string;
	/** The skill's MP cost */
	cost: number;
	/** The range that the skill targets */
	range: SusceptibilityRange;
	constructor(data: SusceptibilitySkillData) {
		const { range } = data;
		super(data);
		this.description = `Increases chance of inflicting ailments to ${range === 'All' ? 'all' : 'one foe'}.`;
		this.cost = data.cost;
		this.range = range;
	}
}

/** A skill that increases the chance of enemies targeting the user */
export class TauntSkill extends Skill implements TauntSkillData {
	declare affinity: 'Support';
	declare type: 'TAUNT';
	description: string;
	/** The buff cast by the skill, or null if none */
	buff: SingleOrDoubleBuff | null;
	/** The skill's MP cost */
	cost: number;
	constructor(data: TauntSkillData) {
		const { buff, cost } = data;
		super(data);
		this.description = buff === null
			? cost === 4
				? 'Raises own chances of being targeted by foes.'
				: 'Raises chances of being targeted by foes for 3 turns.'
			: `Draws enemy hostility, but increases your ${buff} ${buff.includes('Double') ? '2 tiers' : 'by 1 rank'} for 3 turns.`;
		this.buff = buff;
		this.cost = cost;
	}
}

/** A skill that temporarily increases an ally's resistance to damage from skills with a specific affinity */
export class WallSkill extends Skill implements WallSkillData {
	declare affinity: 'Support';
	declare type: 'WALL';
	description: string;
	/** The skill's MP cost */
	cost: number;
	/** The affinity that the skill temporarily increases resistance from */
	element: WallAffinity;
	constructor(data: WallSkillData) {
		const { element } = data;
		super(data);
		this.description = `Adds ${element} resistance to one ally for 3 turns.`;
		this.cost = data.cost;
		this.element = element;
	}
}

Skill.array = Object.freeze(skillData.map(data => {
	switch (data.type) {
		case 'AILBOOST': return new AilBoostSkill(data);
		case 'AILDEFENSIVE': return new AilDefensiveSkill(data);
		case 'AILMENT': return new AilmentSkill(data);
		case 'ATTACK': return new AttackSkill(data);
		case 'AUTOBUFF': return new AutoBuffSkill(data);
		case 'BARRIER': return new BarrierSkill(data);
		case 'BARRIERBREAK': return new BarrierBreakSkill(data);
		case 'BOOST': return new BoostSkill(data);
		case 'BREAK': return new BreakSkill(data);
		case 'CHARGE': return new ChargeSkill(data);
		case 'CRIT': return new CritSkill(data);
		case 'CRITBOOST': return new CritBoostSkill(data);
		case 'DEFENSIVE': return new DefensiveSkill(data);
		case 'ENDURE': return new EndureSkill(data);
		case 'EVASION': return new EvasionSkill(data);
		case 'INSTAKILLBOOST': return new InstaKillBoostSkill(data);
		case 'MASTER': return new MasterSkill(data);
		case 'MISC': return new MiscSkill(data);
		case 'NAVI': return new NaviSkill(data);
		case 'PERSONACOUNTER': return new PersonaCounterSkill(data);
		case 'POSTBATTLE': return new PostBattleSkill(data);
		case 'RECOVERY': return new RecoverySkill(data);
		case 'REGEN': return new RegenSkill(data);
		case 'SET': return new SetSkill(data);
		case 'SIPHON': return new SiphonSkill(data);
		case 'SMTCOUNTER': return new SMTCounterSkill(data);
		case 'SPRING': return new SpringSkill(data);
		case 'SUMMON': return new SummonSkill(data);
		case 'SUPPORT': return new SupportSkill(data);
		case 'SUSCEPTIBILITY': return new SusceptibilitySkill(data);
		case 'TAUNT': return new TauntSkill(data);
		case 'WALL': return new WallSkill(data);
	}
}));
Skill.map = new Map(Skill.array.map(skill => [skill.devName, skill]));

export type AnySkillData = AilBoostSkillData | AilDefensiveSkillData | AilmentSkillData | AttackSkillData | AutoBuffSkillData | BarrierSkillData | BarrierBreakSkillData | BoostSkillData | BreakSkillData | ChargeSkillData | CritSkillData | CritBoostSkillData | DefensiveSkillData | EndureSkillData | EvasionSkillData | InstaKillBoostSkillData | MasterSkillData | MiscSkillData | NaviSkillData | PersonaCounterSkillData | PostBattleSkillData | RecoverySkillData | RegenSkillData | SetSkillData | SiphonSkillData | SMTCounterSkillData | SpringSkillData | SummonSkillData | SupportSkillData | SusceptibilitySkillData | TauntSkillData | WallSkillData;

export type AnySkill = AilBoostSkill | AilDefensiveSkill | AilmentSkill | AttackSkill | AutoBuffSkill | BarrierSkill | BarrierBreakSkill | BoostSkill | BreakSkill | ChargeSkill | CritSkill | CritBoostSkill | DefensiveSkill | EndureSkill | EvasionSkill | SetSkill | InstaKillBoostSkill | MasterSkill | MiscSkill | NaviSkill | PersonaCounterSkill | PostBattleSkill | RecoverySkill | RegenSkill | SetSkill | SiphonSkill | SMTCounterSkill | SpringSkill | SummonSkill | SupportSkill | SusceptibilitySkill | TauntSkill | WallSkill;