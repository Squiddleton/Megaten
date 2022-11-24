import type { AilResistance, Ailment, AllyRange, AnyAffinity, AnyRange, Arcana, AttackDisplay, Barrier, Buff, Charge, CounterAffinity, CounterDisplay, DamagingAffinity, EnemyRange, EvasionBoostCriteria, Game, HPMP, HPMPAil, LightDark, PersonaAffinity, PostBattleStat, Race, RecoveryAmount, RegenCriteria, Resistance, RestoreCriteria, SMTAffinity, Series, SkillType, Stage } from './types';

/** Data used for constructing a Demon instance */
export interface DemonData {
	name: string;
	aliases: string[];
	inherit: Exclude<AnyAffinity, 'Gun' | 'Passive'>;
	arcana: Arcana | null;
	race: Race | null;
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
	weak: DamagingAffinity[];
	resist: DamagingAffinity[];
	null: DamagingAffinity[];
	drain: DamagingAffinity[];
	repel: DamagingAffinity[];
	game: Game;
}

/** Data used for constructing a Persona instance */
export interface PersonaData extends DemonData {
	user: string;
	stage: Stage;
	evoSkill: string | null;
}

/** Data used for constructing a Skill instance */
export interface SkillData {
	name: string;
	affinity: AnyAffinity;
	type: SkillType;
	unique: boolean;
}

export interface AilBoostSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AILBOOST';
	ailment: Ailment | 'ALL';
	amount: number;
	weather: boolean;
}

export interface AilDefensiveSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AILDEFENSIVE';
	ailment: Ailment | 'ALL' | 'Confuse/Fear/Rage/Despair';
	resistance: AilResistance;
}

export interface AilmentSkillData extends SkillData {
	affinity: 'Ailment';
	type: 'AILMENT';
	ailments: Ailment[];
	chance: number;
	cost: number;
	flags: string[];
	range: Exclude<EnemyRange, 'Random'>;
}

export interface AttackSkillData extends SkillData {
	affinity: DamagingAffinity;
	type: 'ATTACK';
	ailments: {
		name: Ailment;
		chance: number;
	}[];
	cost: {
		type: HPMP;
		amount: number;
	};
	flags: string[];
	max: number;
	min: number;
	power: {
		amount: number;
		display: AttackDisplay;
	};
	range: EnemyRange;
	series: Series;
}

export interface AutoBuffSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AUTOBUFF';
	buff: Exclude<Buff, 'Double Accuracy/Evasion' | 'Double Defense'>;
	range: 'Self' | 'Party';
}

export interface BarrierSkillData extends SkillData {
	affinity: 'Support';
	type: 'BARRIER';
	barriers: Barrier[];
	cost: number;
	range: Exclude<AllyRange, 'Self'>;
}

export interface BarrierBreakSkillData extends SkillData {
	affinity: 'Support';
	type: 'BARRIERBREAK';
	barrier: Barrier;
	cost: number;
}

export interface BlockSkillData extends SkillData {
	affinity: 'Support';
	type: 'BLOCK';
	cost: number;
	element: Exclude<DamagingAffinity, PersonaAffinity | 'Almighty'>;
}

export interface BoostSkillData extends SkillData {
	affinity: 'Passive';
	type: 'BOOST';
	amount: number;
	element: DamagingAffinity | 'Recovery' | 'ALL';
	stacks: '+' | 'x';
}

export interface BreakSkillData extends SkillData {
	affinity: 'Support';
	type: 'BREAK';
	cost: number;
	element: Exclude<DamagingAffinity, SMTAffinity | 'Almighty'>;
}

export interface ChargeSkillData extends SkillData {
	affinity: 'Support';
	type: 'CHARGE';
	charge: Charge;
	cost: number;
	range: AllyRange;
}

export interface PersonaCounterSkillData extends SkillData {
	affinity: 'Passive';
	type: 'PERSONACOUNTER';
	chance: number;
}

export interface CritSkillData extends SkillData {
	affinity: 'Support';
	type: 'CRIT';
	cost: number;
	range: Exclude<AllyRange, 'Self'> | 'All';
}

export interface CritBoostSkillData extends SkillData {
	affinity: 'Passive';
	type: 'CRITBOOST';
	amount: number;
	criteria: 'Ambush' | 'Surround' | null;
}

export interface DefensiveSkillData extends SkillData {
	affinity: 'Passive';
	type: 'DEFENSIVE';
	element: Exclude<DamagingAffinity, 'Almighty'>;
	newAffinity: Resistance;
}

export interface EndureSkillData extends SkillData {
	affinity: 'Passive';
	type: 'ENDURE';
	instakill: boolean;
	priority: number;
}

export interface EvasionSkillData extends SkillData {
	affinity: 'Passive';
	type: 'EVASION';
	amount: number;
	criteria: EvasionBoostCriteria | null;
	elements: (DamagingAffinity | 'ALL')[];
}

export interface HalveSkillData extends SkillData {
	affinity: LightDark;
	type: 'HALVE';
	cost: number;
}

export interface InstaKillBoostSkillData extends SkillData {
	affinity: 'Passive';
	type: 'INSTAKILLBOOST';
	element: LightDark;
}

export interface MasterSkillData extends SkillData {
	affinity: 'Passive';
	type: 'MASTER';
	skill: HPMP;
}

export interface MiscSkillData extends SkillData {
	type: 'MISC';
	cost: number | null;
	description: string;
}

export interface NaviSkillData extends SkillData {
	affinity: 'Passive';
	type: 'NAVI';
	description: string;
}

export interface PostBattleSkillData extends SkillData {
	affinity: 'Passive';
	type: 'POSTBATTLE';
	amount: number;
	inactive: boolean;
	stat: PostBattleStat;
}

export interface RecoverySkillData extends SkillData {
	affinity: 'Recovery';
	type: 'RECOVERY';
	ailments: (Ailment | 'ALL')[];
	amount: RecoveryAmount | null;
	buffs: Buff[];
	cost: number;
	flags: string[];
	range: Exclude<AllyRange, 'Self'>;
}

export interface RegenSkillData extends SkillData {
	affinity: 'Passive';
	type: 'REGEN';
	amount: number;
	criteria: RegenCriteria | null;
	percent: boolean;
	stat: HPMPAil;
}

export interface SiphonSkillData extends SkillData {
	affinity: 'Passive';
	type: 'SIPHON';
	amount: number;
	criteria: RestoreCriteria;
}

export interface SMTCounterSkillData extends SkillData {
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

export interface SpringSkillData extends SkillData {
	affinity: 'Passive';
	type: 'SPRING';
	amount: number;
	stat: HPMP;
}

export interface SupportSkillData extends SkillData {
	affinity: 'Support';
	type: 'SUPPORT';
	auto: (Barrier | Charge)[];
	buffs: Buff[];
	cost: number;
	debuffs: Buff[];
	negate: boolean;
	range: Exclude<AnyRange, 'Random'>;
	surround: boolean;
}

export interface SusceptibilitySkillData extends SkillData {
	affinity: 'Almighty';
	type: 'SUSCEPTIBILITY';
	cost: number;
	range: 'Foe' | 'All';
}

export interface TauntSkillData extends SkillData {
	affinity: 'Support';
	type: 'TAUNT';
	buff: Buff | null;
	cost: number;
}

export interface WallSkillData extends SkillData {
	affinity: 'Support';
	type: 'WALL';
	cost: number;
	element: Exclude<DamagingAffinity, SMTAffinity | 'Almighty'>;
}