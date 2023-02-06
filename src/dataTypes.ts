import type { AilResistance, Ailment, AilmentName, AllyRange, AnyAffinity, AnyGame, AnyRange, Arcana, AttackCost, AttackPower, Barrier, Buff, Charge, CounterAffinity, CounterPower, DamagingAffinity, DemonAffinities, DemonResistances, DemonSkill, DemonStats, EndureCriteria, EnemyRange, EvasionBoostCriteria, HPMP, HPMPAil, LightDark, OneOrAllAilments, OneOrAllDamagingAffinities, PersonaGame, PostBattleStat, Race, RecoveryAmount, RegenCriteria, Resistance, SMTAffinity, Series, SetAmount, SiphonCriteria, SkillType, Stage } from './types';

/** Data used for constructing a Demon instance */
export interface DemonData {
	name: string;
	aliases?: string[];
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
	evoSkillName: string | null;
}

/** Data used for constructing a Skill instance */
export interface SkillData {
	name: string;
	aliases?: string[];
	affinity: AnyAffinity;
	type: SkillType;
	unique?: boolean | null;
}

export interface AilBoostSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AILBOOST';
	ailment: OneOrAllAilments;
	amount: number;
	weather: boolean;
}

export interface AilDefensiveSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AILDEFENSIVE';
	ailment: OneOrAllAilments | 'Confuse/Fear/Rage/Despair';
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
	max?: number;
	min?: number;
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
	element: OneOrAllDamagingAffinities | 'Magic' | 'Recovery';
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
	element: Exclude<DamagingAffinity, 'Almighty'> | 'Light/Dark';
	newAffinity: Resistance;
}

export interface EndureSkillData extends SkillData {
	affinity: 'Passive';
	type: 'ENDURE';
	amount: number;
	criteria: EndureCriteria | null;
}

export interface EvasionSkillData extends SkillData {
	affinity: 'Passive';
	type: 'EVASION';
	amount: number;
	criteria: EvasionBoostCriteria | null;
	element: OneOrAllDamagingAffinities | 'Crit/Magic' | 'Magic';
}

export interface InstaKillBoostSkillData extends SkillData {
	affinity: 'Passive';
	type: 'INSTAKILLBOOST';
	element: LightDark;
}

export interface MasterSkillData extends SkillData {
	affinity: 'Passive';
	type: 'MASTER';
	amount: number;
	stat: HPMP | 'HPMP';
}

export interface MiscSkillData extends SkillData {
	type: 'MISC';
	cost: number | null;
	description: string;
}

export interface NaviSkillData extends SkillData {
	affinity: 'Passive';
	type: 'NAVI';
	unique: null;
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
	ailments: AilmentName[] | 'All' | null;
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

export interface SetSkillData extends SkillData {
	affinity: LightDark | 'Almighty';
	amount: SetAmount;
	type: 'SET';
	cost: number | null;
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
	percent: boolean;
	stat: HPMP;
}

export interface SummonSkillData extends SkillData {
	unique: null;
	affinity: 'Misc';
	type: 'SUMMON';
	demon: string | null;
}

export interface SupportSkillData extends SkillData {
	affinity: 'Support';
	type: 'SUPPORT';
	auto: (Barrier | Buff | Charge)[];
	buffs: Buff[];
	cost: number;
	debuffs: Buff[];
	flags: string[];
	negate: boolean;
	range: Exclude<AnyRange, 'Random'>;
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