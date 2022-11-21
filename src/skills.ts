import { Collection } from '@discordjs/collection';
import { normalize } from '@squiddleton/util';
import MegatenError from './error';
import type { AilBoostSkillData, AilDefensiveSkillData, AilmentSkillData, AttackSkillData, AutoBuffSkillData, BarrierBreakSkillData, BarrierSkillData, BlockSkillData, BoostSkillData, BreakSkillData, ChargeSkillData, CritBoostSkillData, CritSkillData, DefensiveSkillData, EndureSkillData, EvasionSkillData, HalveSkillData, InstaKillBoostSkillData, MasterSkillData, MiscSkillData, NaviSkillData, PersonaCounterSkillData, PostBattleSkillData, RecoverySkillData, RegenSkillData, SMTCounterSkillData, SiphonSkillData, SkillData, SpringSkillData, SupportSkillData, SusceptibilitySkillData, TauntSkillData, WallSkillData } from './listTypes';
import skillData from './skillList';
import type { Affinity, AilResistance, Ailment, AttackDisplay, Barrier, Buff, Charge, ChargeRange, CounterAffinity, CounterDisplay, Element, HPMP, HPMPAil, LightDark, PostBattleStat, Range, RecoveryAmount, Resistance, RestoreCriteria, SMTElement, Series, SkillType } from './types';

export class Skill implements SkillData {
	name: string;
	devName: string;
	affinity: Affinity;
	type: SkillType;
	unique: boolean;
	constructor(data: SkillData) {
		this.name = data.name;
		this.devName = normalize(data.name);
		this.affinity = data.affinity;
		this.type = data.type;
		this.unique = data.unique;
	}
	static array: AnySkill[] = [];
	static collection: Collection<string, AnySkill> = new Collection();
	static get(name: string, error: true): AnySkill;
	static get(name: string, error?: boolean): AnySkill | null;
	static get(name: string, error = false) {
		const found = this.collection.get(normalize(name)) ?? null;
		if (error && found === null) throw new MegatenError(name, 'Skill');
		return found;
	}
}

export class AilBoostSkill extends Skill implements AilBoostSkillData {
	affinity: 'Passive';
	type: 'AILBOOST';
	ailment: Ailment | 'ALL';
	amount: number;
	weather: boolean;
	constructor(data: AilBoostSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.ailment = data.ailment;
		this.amount = data.amount;
		this.weather = data.weather;
	}
	get description() {
		if (this.weather) return 'Increases chance of inflicting ailments during Rain/Snow.';
		return `Increases chance of inflicting ${this.ailment === 'ALL' ? 'ailments' : this.ailment}.`;
	}
}

export class AilDefensiveSkill extends Skill implements AilDefensiveSkillData {
	affinity: 'Passive';
	type: 'AILDEFENSIVE';
	ailment: Ailment | 'ALL' | 'Confuse/Fear/Rage/Despair';
	resistance: AilResistance;
	constructor(data: AilDefensiveSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.ailment = data.ailment;
		this.resistance = data.resistance;
	}
	get description() {
		switch (this.resistance) {
			case 'Resist': {
				return `Decreases chance of being inflicted with ${this.ailment}.`;
			}
			case 'Null': {
				return `Prevents infliction of ${this.ailment}.`;
			}
		}
	}
}

export class AilmentSkill extends Skill implements AilmentSkillData {
	affinity: 'Ailment';
	type: 'AILMENT';
	range: Range;
	cost: number;
	ailments: Ailment[];
	chance: number;
	flags: string[];
	constructor(data: AilmentSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
		this.ailments = data.ailments;
		this.chance = data.chance;
		this.flags = data.flags;
	}
	get description() {
		return `Chance of inflicting ${this.ailments.join(' and ')} to ${this.range ? '1 foe' : 'all foes'}${this.flags.length === 0 ? '' : `and lowers ${this.flags.map(flag => flag.split(' ')[0]).join('')} by ${this.flags.every(flags => flags.includes('Greatly')) ? '2 ranks' : '1 rank'} for 3 turns.`}`;
	}
}

export class AttackSkill extends Skill {
	affinity: Element;
	type: 'ATTACK';
	range: Range | 2;
	cost: {
		type: HPMP;
		amount: number;
	};
	power: {
		amount: number;
		display: AttackDisplay;
	};
	min: number;
	max: number;
	flags: string[];
	ailments: {
		name: Ailment;
		chance: number;

	}[];
	series: Series;
	constructor(data: AttackSkillData) {
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
	get description() {
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
			if (flags.includes('Attack Reduced')) {
				description += 'Decreases Attack after use.';
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
}

export class AutoBuffSkill extends Skill {
	affinity: 'Passive';
	type: 'AUTOBUFF';
	buff: Exclude<Buff, 'Double Accuracy/Evasion' | 'Double Defense'>;
	range: Range;
	constructor(data: AutoBuffSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.buff = data.buff;
		this.range = data.range;
	}
	get description() {
		let buffSkillName = { Attack: 'Tarukaja', Defense: 'Rakukaja', 'Accuracy/Evasion' : 'Sukukaja' }[this.buff];
		const isParty = this.range === 0;
		if (isParty) {
			buffSkillName = buffSkillName.toLowerCase();
		}
		return `Automatic ${isParty ? 'Ma' : ''}${buffSkillName} at the start of battle.`;
	}
}

export class BarrierSkill extends Skill {
	affinity: 'Support';
	type: 'BARRIER';
	range: Range;
	cost: number;
	barriers: Barrier[];
	constructor(data: BarrierSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
		this.barriers = data.barriers;
	}
	get description() {
		if (this.barriers.length > 1) return 'Forms a barrier that reflects all attacks for all allies.';
		const [barrier] = this.barriers;
		if (barrier === 'Tetraja') return 'A barrier that nullifies an insta-kill for all allies one time.';
		else if (barrier === 'Painting') return 'Forms a barrier taht can absorb one attack (except Almighty).';
		else if (barrier === 'Shield of Justice') return 'Shields the party from all damage once.';
		else if (barrier === 'Kannabi Veil') return 'Decreases damage to all allies until the next turn.';
		return `Reflects a ${barrier === 'Tetrakarn' ? 'Phys' : 'Magic'} attack once for 1 ally for 1 turn.`;
	}
}

export class BarrierBreakSkill extends Skill {
	constructor(data: BarrierBreakSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
		this.barrier = data.barrier;
	}
	affinity: 'Support';
	type: 'BARRIERBREAK';
	cost: number;
	barrier: Barrier;
	get description() {
		return `Negates ${this.barrier} on all foes.`;
	}
}

export class BlockSkill extends Skill {
	affinity: 'Support';
	type: 'BLOCK';
	cost: number;
	element: Exclude<SMTElement, 'Almighty'>;
	constructor(data: BlockSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
		this.element = data.element;
	}
	get description() {
		return `Nullifies a${['Ice', 'Elec'].includes(this.element) ? 'n' : ''} ${this.element} attack against all allies once for 1 turn.`;
	}
}

export class BoostSkill extends Skill {
	affinity: 'Passive';
	type: 'BOOST';
	element: Element | 'Recovery' | 'ALL';
	amount: number;
	stacks: '+' | 'x';
	constructor(data: BoostSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.element = data.element;
		this.amount = data.amount;
		this.stacks = data.stacks;
	}
	get description() {
		if (this.element === 'ALL') return 'Strengtens all attacks. Can stack.';
		if (this.stacks === 'x') return `Strengthens ${this.element} skills by ${this.amount}%.`;
		return `${this.amount === 35 ? 'Greatly i' : 'I'}ncreases ${this.element} attack damage.`;
	}
}

export class BreakSkill extends Skill {
	affinity: 'Support';
	type: 'BREAK';
	cost: number;
	element: Element;
	constructor(data: BreakSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
		this.element = data.element;
	}
	get description() {
		return `Negates ${this.element} resistance of all foes. Cannot negate ${this.element} Wall.`;
	}
}

export class ChargeSkill extends Skill {
	affinity: 'Support';
	type: 'CHARGE';
	range: ChargeRange;
	cost: number;
	charge: Charge;
	constructor(data: ChargeSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
		this.range = data.range;
		this.charge = data.charge;
	}
	get description() {
		switch (this.charge) {
			case 'Critical': return 'Next Strength-based attack of self will be 100% accurate and guaranteed Critical.';
			case 'Pierce': return 'Increases the damage of the next attack and adds Pierce effect for self.';
			case 'Recovery': return 'Greatly increases the effect of the next HP healing skill of self and allows it to heal above MAX HP.';
			default: {
				if (this.range === 'Party') return `Next ${this.charge === 'Charge' ? 'physical' : 'magical'} attack deals over double the damage for all allies.`;
				return `Greatly increases damage of the next ${this.charge === 'Charge' ? 'Strength' : 'Magic'}-based attack ${this.range === 'Self' ? 'from self' : 'on 1 ally'}.`;
			}
		}
	}
}

export class CritSkill extends Skill {
	affinity: 'Support';
	type: 'CRIT';
	range: 'Ally' | 'Party' | 'All';
	cost: number;
	constructor(data: CritSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
	}
	get description() {
		return `Increases chance of Critical for ${{ All: 'all', Ally: 'one ally', Party: 'all allies' }[this.range]} for 3 turns.`;
	}
}

export class CritBoostSkill extends Skill {
	affinity: 'Passive';
	type: 'CRITBOOST';
	amount: number;
	criteria: 'Ambush' | 'Surround' | null;
	constructor(data: CritBoostSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.amount = data.amount;
		this.criteria = data.criteria;
	}
	get description() {
		switch (this.criteria) {
			case 'Ambush': {
				return 'Increases Critical rate during an Ambush.';
			}
			case 'Surround': {
				return 'Increases Critical Rate when surrounded.';
			}
			case null: return 'Increases chance of Critical.';
		}
	}
}

export class DefensiveSkill extends Skill {
	affinity: 'Passive';
	type: 'DEFENSIVE';
	element: Element;
	newAffinity: Resistance;
	constructor(data: DefensiveSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.element = data.element;
		this.newAffinity = data.newAffinity;
	}
	get description() {
		const { element } = this;
		return {
			Drain: `Absorbs damage from ${element} skills.`,
			Repel: `Reflects ${element} skills.`,
			Resist: `Strengthens resistance to ${element} skills.`,
			Null: `Nullifies ${element} skills.`
		}[this.newAffinity];
	}
}

export class EndureSkill extends Skill {
	affinity: 'Passive';
	type: 'ENDURE';
	priority: number;
	instakill: boolean;
	constructor(data: EndureSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.priority = data.priority;
		this.instakill = data.instakill;
	}
	get description() {
		if (this.instakill) return 'Survive insta-kill skills with 1 HP.';
		if (this.priority === 1) return 'Revives with 1 HP when KO\'d. Usable once per battle.';
		return 'Endures lethal attack and fully heals HP once in battle.';
	}
}

export class EvasionSkill extends Skill {
	affinity: 'Passive';
	type: 'EVASION';
	elements: (Element | 'ALL')[];
	amount: number;
	surround: boolean;
	weather: boolean;
	constructor(data: EvasionSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.elements = data.elements;
		this.amount = data.amount;
		this.surround = data.surround;
		this.weather = data.weather;
	}
	get description() {
		if (this.amount === 3) return `Greatly increases Evasion from ${this.elements[0]} skills. Does not stack.`;
		if (this.weather) return 'Greatly increases Evasion from all affinities during Rain/Snow.';
		if (this.surround) return 'Greatly decreases Accuracy of all foes\' attacks except Almighty when surrounded.';
		if (this.elements.length !== 1) return 'Increases Evasion from all magical attacks except Almighty.';
		return `${this.amount === 3 ? 'Greatly i' : 'I'}ncreases Evasion from ${this.elements[0]} skills.${this.amount === 3 ? ' Does not stack.' : ''}`;
	}
}

export class HalveSkill extends Skill {
	affinity: LightDark;
	type: 'HALVE';
	cost: number;
	constructor(data: HalveSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
	}
	get description() {
		return `${this.affinity} attack that reduces HP of one foe by 50%.`;
	}
}

export class InstaKillBoostSkill extends Skill {
	affinity: 'Passive';
	type: 'INSTAKILLBOOST';
	element: LightDark;
	constructor(data: InstaKillBoostSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.element = data.element;
	}
	get description() {
		return `Increases success rate of ${this.element === 'Light' ? 'Hama' : 'Mudo'} skills.`;
	}
}

export class MasterSkill extends Skill {
	affinity: 'Passive';
	type: 'MASTER';
	skill: HPMP;
	constructor(data: MasterSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.skill = data.skill;
	}
	get description() {
		return `Decreases ${this.skill} cost of skills by half.`;
	}
}

export class MiscSkill extends Skill {
	type: 'MISC';
	cost: number | null;
	effect: string;
	constructor(data: MiscSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
		this.effect = data.effect;
	}
	get description() {
		return this.effect;
	}
}

export class NaviSkill extends Skill {
	affinity: 'Passive';
	type: 'NAVI';
	effect: string;
	constructor(data: NaviSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.effect = data.effect;
	}
	get description() {
		return this.effect;
	}
}

export class PersonaCounterSkill extends Skill {
	affinity: 'Passive';
	type: 'PERSONACOUNTER';
	chance: number;
	constructor(data: PersonaCounterSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.chance = data.chance;
	}
	get description() {
		return `${this.chance}% chance of reflecting physical attacks.`;
	}
}

export class PostBattleSkill extends Skill {
	affinity: 'Passive';
	type: 'POSTBATTLE';
	amount: number;
	inactive: boolean;
	stat: PostBattleStat;
	constructor(data: PostBattleSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.amount = data.amount;
		this.inactive = data.inactive;
		this.stat = data.stat;
	}
	get description() {
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
		}
	}
}

export class RecoverySkill extends Skill {
	affinity: 'Recovery';
	type: 'RECOVERY';
	range: Range;
	cost: number;
	amount: RecoveryAmount;
	ailments: (Ailment | 'ALL')[];
	buffs: Buff[];
	flags: string[];
	constructor(data: RecoverySkillData) {
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
	get description() {
		if (this.ailments.length > 0) {
			if (this.ailments.includes('ALL')) {
				if (this.amount === null) return `Cure status ailments on ${this.range === 0 ? 'all allies' : '1 ally'}.`;
				return `${this.amount} HP recovery and cures status ailments${this.flags.includes('Revert Debuffs') ? '/debuffs' : ''} for ${this.range === 0 ? 'all allies' : '1 ally'}.`;
			}
			return `Cures ${this.ailments.join('/')} for ${this.range === 0 ? 'all allies' : 'one ally'}.`;
		}
		else if (this.flags.includes('Revive') && this.amount !== null) {
			if (this.flags.includes('Summon')) return 'Summons 1 demon at full HP. Effective on dead members as well.';
			return `Revive ${this.range === 0 ? 'all allies' : 'one ally'} with ${this.amount.toLowerCase()} HP.`;
		}
		else if (this.amount === '130%') {
			return 'Full HP recovery to all allies and heals above MAX HP.';
		}
		return `${this.amount} HP recovery to ${this.range === 0 ? 'all allies' : '1 ally'}${this.buffs.length > 0 ? ` and raises ${this.buffs.length === 3 ? 'all stats' : this.buffs.join('/')} by ${this.buffs[0].includes('Double') ? '2 ranks' : '1 rank'} for 3 turns` : ''}.`;
	}
}

export class RegenSkill extends Skill {
	affinity: 'Passive';
	type: 'REGEN';
	hpmpail: HPMPAil;
	amount: number;
	percent: boolean;
	ambush: boolean;
	baton: boolean;
	constructor(data: RegenSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.hpmpail = data.hpmpail;
		this.amount = data.amount;
		this.percent = data.percent;
		this.ambush = data.ambush;
		this.baton = data.baton;
	}
	get description() {
		switch (this.hpmpail) {
			case 'HP': {
				return `Restores ${this.amount}% of max HP each turn in battle.`;
			}
			case 'MP': {
				if (this.baton) return `Restores ${this.amount} SP after a Baton Pass.`;
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
		}
	}
}

export class SiphonSkill extends Skill {
	affinity: 'Passive';
	type: 'SIPHON';
	amount: number;
	criteria: RestoreCriteria;
	constructor(data: SiphonSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.amount = data.amount;
		this.criteria = data.criteria;
	}
	get description() {
		return `${this.amount === 10 ? 'Low ' : ''} MP recovery when ${this.criteria === 'Ailment' ? 'inflicting status ailments' : 'you strike a foe\'s weakness or land a Critical'}.`;
	}
}

export class SMTCounterSkill extends Skill {
	affinity: 'Passive';
	type: 'SMTCOUNTER';
	attackDown: boolean;
	chance: number;
	element: CounterAffinity;
	power: {
		amount: number;
		display: CounterDisplay;
	};
	constructor(data: SMTCounterSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.attackDown = data.attackDown;
		this.chance = data.chance;
		this.element = data.element;
		this.power = data.power;
	}
	get description() {
		return `Chance to counter Strength-based attacks with a ${this.power.display.toLowerCase()} ${this.element} attack.${this.name === 'Retaliate' ? ' Does not stack with Counter.' : ''}${this.attackDown ? ' Lowers target\'s Attack 1 rank for 3 turns.' : ''}`;
	}
}

export class SpringSkill extends Skill {
	affinity: 'Passive';
	type: 'SPRING';
	amount: number;
	hpmp: HPMP;
	constructor(data: SpringSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.amount = data.amount;
		this.hpmp = data.hpmp;
	}
	get description() {
		return `${this.amount === 30 ? 'Greatly i' : 'I'}ncreases MAX ${this.hpmp}.`;
	}
}

export class SupportSkill extends Skill {
	affinity: 'Support';
	type: 'SUPPORT';
	range: Range;
	cost: number;
	buffs: Buff[];
	debuffs: Buff[];
	negate: boolean;
	auto: (Barrier | Charge)[];
	surround: boolean;
	constructor(data: SupportSkillData) {
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
	get description() {
		{
			if (this.negate) {
				const isDekaja = this.buffs.length > 0;
				return `Negates status ${isDekaja ? '' : 'de'}buff effects on all ${isDekaja ? 'foes' : 'allies'}.`;
			}
			if (this.buffs.length > 0) return `Raises ${this.buffs.length === 3 ? 'all stats' : this.buffs.join('/')} of ${this.range === 0 ? 'all allies' : '1 ally'} by ${this.buffs[0].includes('Double') ? '2 ranks' : '1 rank'} for 3 turns${this.surround ? ' when surrounded' : ''}.`;
			else if (this.debuffs.length > 0) return `Lowers ${this.debuffs.length === 3 ? 'all stats' : this.debuffs.join('/')} of ${this.range === 0 ? 'all foes' : '1 foe'} by ${this.debuffs[0].includes('Double') ? '2 ranks' : '1 rank'} for 3 turns.`;
			else throw new Error(`A SUPPORT skill does not fall into a category for description: ${JSON.stringify(this, null, 2)}`);
		}
	}
}

export class SusceptibilitySkill extends Skill {
	affinity: 'Almighty';
	type: 'SUSCEPTIBILITY';
	range: Range;
	cost: number;
	constructor(data: SusceptibilitySkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.range = data.range;
		this.cost = data.cost;
	}
	get description() {
		return `Increases chance of inflicting ailments to ${this.range === 0 ? 'all' : 'one foe'}.`;
	}
}

export class TauntSkill extends Skill {
	affinity: 'Support';
	type: 'TAUNT';
	buff: Buff | null;
	cost: number;
	constructor(data: TauntSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.buff = data.buff;
		this.cost = data.cost;
	}
	get description() {
		if (this.buff === null) return 'Raises chances of being targed by foes for 3 turns.';
		return `Draws enemy hostility, but increases your ${this.buff} ${this.buff.includes('Double') ? '2 tiers' : 'by 1 rank'} for 3 turns.`;
	}
}

export class WallSkill extends Skill {
	affinity: 'Support';
	type: 'WALL';
	cost: number;
	element: Element;
	constructor(data: WallSkillData) {
		super(data);
		this.affinity = data.affinity;
		this.type = data.type;
		this.cost = data.cost;
		this.element = data.element;
	}
	get description() {
		return `Adds ${this.element} resistance to one ally for 3 turns.`;
	}
}

const dataToClass = (data: AnySkillData): AnySkill => {
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
};

Skill.array = skillData.map(skill => dataToClass(skill));
Skill.collection = new Collection(Skill.array.map(skill => [skill.devName, skill]));

export type AnySkillData = AilBoostSkillData | AilDefensiveSkillData | AilmentSkillData | AttackSkillData | AutoBuffSkillData | BarrierSkillData | BarrierBreakSkillData | BlockSkillData | BoostSkillData | BreakSkillData
| ChargeSkillData | CritSkillData | CritBoostSkillData | DefensiveSkillData | EndureSkillData | EvasionSkillData | HalveSkillData | InstaKillBoostSkillData | MasterSkillData | MiscSkillData | NaviSkillData
| PersonaCounterSkillData | PostBattleSkillData | RecoverySkillData | RegenSkillData | SiphonSkillData | SMTCounterSkillData | SpringSkillData | SupportSkillData | SusceptibilitySkillData | TauntSkillData | WallSkillData;

export type AnySkill = AilBoostSkill | AilDefensiveSkill | AilmentSkill | AttackSkill | AutoBuffSkill | BarrierSkill | BarrierBreakSkill | BlockSkill | BoostSkill | BreakSkill
| ChargeSkill | CritSkill | CritBoostSkill | DefensiveSkill | EndureSkill | EvasionSkill | HalveSkill | InstaKillBoostSkill | MasterSkill | MiscSkill | NaviSkill
| PersonaCounterSkill | PostBattleSkill | RecoverySkill | RegenSkill | SiphonSkill | SMTCounterSkill | SpringSkill | SupportSkill | SusceptibilitySkill | TauntSkill | WallSkill;