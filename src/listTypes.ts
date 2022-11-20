import type { Affinity, AilResistance, Ailment, Arcana, AttackDisplay, Barrier, Buff, Charge, ChargeRange, CounterAffinity, CounterDisplay, Element, Game, HPMP, HPMPAil, Inherit, LightDark, PostBattleStat, Race, Range, RecoveryAmount, Resistance, RestoreCriteria, SMTElement, Series, SkillType } from './types';

export interface DemonData {
	name: string;
	aliases: string[];
	inherit: Inherit;
	arcana: Arcana;
	race: Race;
	level: number;
	hp: number | null;
	mp: number | null;
	st: number;
	vi: number;
	ma: number;
	ag: number;
	lu: number;
	learnset: {
		name: string;
		level: number;
	}[];
	weak: Element[];
	resist: Element[];
	null: Element[];
	drain: Element[];
	repel: Element[];
	game: Game;
}

export interface PersonaData extends DemonData {
	user: string;
	stage: 1 | 2 | 3;
	evoSkill: string | null;
}

export interface BaseSkillData {
	name: string;
	affinity: Affinity;
	type: SkillType;
	unique: boolean;
}

export interface AilBoostSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'AILBOOST';
	ailment: Ailment | 'ALL';
	amount: number;
	weather: boolean;
}

export interface AilDefensiveSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'AILDEFENSIVE';
	ailment: Ailment | 'ALL' | 'Confuse/Fear/Rage/Despair';
	resistance: AilResistance;
}

export interface AilmentSkillData extends BaseSkillData {
	affinity: 'Ailment';
	type: 'AILMENT';
	range: Range;
	cost: number;
	ailments: Ailment[];
	chance: number;
	flags: string[];
}

export interface AttackSkillData extends BaseSkillData {
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
}

export interface AutoBuffSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'AUTOBUFF';
	buff: Exclude<Buff, 'Double Accuracy/Evasion' | 'Double Defense'>;
	range: Range;
}

export interface BarrierSkillData extends BaseSkillData {
	affinity: 'Support';
	type: 'BARRIER';
	range: Range;
	cost: number;
	barriers: Barrier[];
}

export interface BarrierBreakSkillData extends BaseSkillData {
	affinity: 'Support';
	type: 'BARRIERBREAK';
	cost: number;
	barrier: Barrier;
}

export interface BlockSkillData extends BaseSkillData {
	affinity: 'Support';
	type: 'BLOCK';
	cost: number;
	element: Exclude<SMTElement, 'Almighty'>;
}

export interface BoostSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'BOOST';
	element: Element | 'Recovery' | 'ALL';
	amount: number;
	stacks: '+' | 'x';
}

export interface BreakSkillData extends BaseSkillData {
	affinity: 'Support';
	type: 'BREAK';
	cost: number;
	element: Element;
}

export interface ChargeSkillData extends BaseSkillData {
	affinity: 'Support';
	type: 'CHARGE';
	range: ChargeRange;
	cost: number;
	charge: Charge;
}

export interface PersonaCounterSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'PERSONACOUNTER';
	chance: number;
}

export interface CritSkillData extends BaseSkillData {
	affinity: 'Support';
	type: 'CRIT';
	range: 'Ally' | 'Party' | 'All';
	cost: number;
}

export interface CritBoostSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'CRITBOOST';
	amount: number;
	criteria: 'Ambush' | 'Surround' | null;
}

export interface DefensiveSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'DEFENSIVE';
	element: Element;
	newAffinity: Resistance;
}

export interface EndureSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'ENDURE';
	priority: number;
	instakill: boolean;
}

export interface EvasionSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'EVASION';
	elements: (Element | 'ALL')[];
	amount: number;
	surround: boolean;
	weather: boolean;
}

export interface HalveSkillData extends BaseSkillData {
	affinity: LightDark;
	type: 'HALVE';
	cost: number;
}

export interface InstaKillBoostSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'INSTAKILLBOOST';
	element: LightDark;
}

export interface MasterSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'MASTER';
	skill: HPMP;
}

export interface MiscSkillData extends BaseSkillData {
	type: 'MISC';
	cost: number | null;
	effect: string;
}

export interface NaviSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'NAVI';
	effect: string;
}

export interface PostBattleSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'POSTBATTLE';
	amount: number;
	inactive: boolean;
	stat: PostBattleStat;
}

export interface RecoverySkillData extends BaseSkillData {
	affinity: 'Recovery';
	type: 'RECOVERY';
	range: Range;
	cost: number;
	amount: RecoveryAmount;
	ailments: (Ailment | 'ALL')[];
	buffs: Buff[];
	flags: string[];
}

export interface RegenSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'REGEN';
	hpmpail: HPMPAil;
	amount: number;
	percent: boolean;
	ambush: boolean;
	baton: boolean;
}

export interface SiphonSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'SIPHON';
	amount: number;
	criteria: RestoreCriteria;
}

export interface SMTCounterSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'SMTCOUNTER';
	attackDown: boolean;
	chance: number;
	element: CounterAffinity;
	power: {
		amount: number;
		display: CounterDisplay;
	};
}

export interface SpringSkillData extends BaseSkillData {
	affinity: 'Passive';
	type: 'SPRING';
	amount: number;
	hpmp: HPMP;
}

export interface SupportSkillData extends BaseSkillData {
	affinity: 'Support';
	type: 'SUPPORT';
	range: Range;
	cost: number;
	buffs: Buff[];
	debuffs: Buff[];
	negate: boolean;
	auto: (Barrier | Charge)[];
	surround: boolean;
}

export interface SusceptibilitySkillData extends BaseSkillData {
	affinity: 'Almighty';
	type: 'SUSCEPTIBILITY';
	range: Range;
	cost: number;
}

export interface TauntSkillData extends BaseSkillData {
	affinity: 'Support';
	type: 'TAUNT';
	buff: Buff | null;
	cost: number;
}

export interface WallSkillData extends BaseSkillData {
	affinity: 'Support';
	type: 'WALL';
	cost: number;
	element: Element;
}