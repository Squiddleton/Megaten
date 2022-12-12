import type { AilResistance, Ailment, AilmentName, AllyRange, AnyAffinity, AnyGame, AnyRange, Arcana, AttackCost, AttackPower, Barrier, Buff, Charge, CounterAffinity, CounterPower, DamagingAffinity, DemonAffinities, DemonResistances, DemonSkill, DemonStats, EnemyRange, EvasionBoostCriteria, HPMP, HPMPAil, LightDark, PersonaGame, PostBattleStat, Race, RecoveryAmount, RegenCriteria, Resistance, SMTAffinity, Series, SiphonCriteria, SkillType, Stage } from './types';

/** Data used for constructing a Demon instance */
export interface DemonData {
	name: string;
	aliases: string[];
	affinities: DemonAffinities;
	arcana: Arcana | null;
	race: Race | null;
	level: number;
	hp: number | null;
	mp: number | null;
	stats: DemonStats;
	learnset: DemonSkill[];
	resistances: DemonResistances;
	game: AnyGame;
}

/** Data used for constructing a Persona instance */
export interface PersonaData extends DemonData {
	affinities: DemonAffinities<true>;
	arcana: Arcana;
	race: 'Persona';
	hp: null;
	mp: null;
	resistances: DemonResistances<true>;
	game: PersonaGame;
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
	ailment: AilmentName | 'ALL';
	amount: number;
	weather: boolean;
}

export interface AilDefensiveSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AILDEFENSIVE';
	ailment: AilmentName | 'ALL' | 'Confuse/Fear/Rage/Despair';
	resistance: AilResistance;
}

export interface AilmentSkillData extends SkillData {
	affinity: 'Ailment';
	type: 'AILMENT';
	ailments: AilmentName[];
	chance: number;
	cost: number;
	flags: string[];
	range: Exclude<EnemyRange, 'Random'>;
}

export interface AttackSkillData extends SkillData {
	affinity: DamagingAffinity;
	type: 'ATTACK';
	accuracy: number;
	ailments: Ailment[];
	cost: AttackCost;
	flags: string[];
	max: number;
	min: number;
	power: AttackPower;
	range: EnemyRange;
	series: Series;
}

export interface AutoBuffSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AUTOBUFF';
	buff: Exclude<Buff, 'Double Accuracy/Evasion' | 'Double Defense'>;
	range: Exclude<AllyRange, 'Ally'>;
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
	stat: HPMP;
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

export interface PersonaCounterSkillData extends SkillData {
	affinity: 'Passive';
	type: 'PERSONACOUNTER';
	chance: number;
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
	ailments: (AilmentName | 'ALL')[];
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
	criteria: SiphonCriteria;
}

export interface SMTCounterSkillData extends SkillData {
	affinity: 'Passive';
	type: 'SMTCOUNTER';
	attackDown: boolean;
	chance: number;
	element: CounterAffinity;
	power: CounterPower;
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