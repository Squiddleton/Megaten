import type { AilBoostCriteria, AilDefensiveAilment, AilResistance, Ailment, AilmentName, AilmentRange, AllyRange, AnyAffinity, AnyGame, Arcana, AttackCost, AttackFlag, AttackPower, AutoBuffRange, Barrier, BarrierRange, BoostAffinity, BoostStack, BreakAffinity, Buff, Charge, CritBoostCriteria, CritRange, DamagingAffinity, Debuff, DefensiveAffinity, DemonAffinities, DemonAlignment, DemonResistances, DemonSkill, DemonStats, EndureCriteria, EnemyRange, EvasionAffinity, EvasionBoostCriteria, HPMP, HPMPAil, If, LightDark, MasterStat, NumberOrPercent, OneOrAllAilments, PersonaGame, PersonaRace, PostBattleStat, RecoveryAmount, RecoveryFlag, RecoveryRange, RegenCriteria, Resistance, SMTCounterAffinity, SMTCounterPower, SMTRace, Series, SetAffinity, SingleOrDoubleBuff, SiphonCriteria, SkillType, Stage, SupportAutoEffect, SupportFlag, SupportRange, SusceptibilityRange, WallAffinity } from './types';

/** Data used for constructing a Demon instance */
export interface DemonData<PersonaBased extends boolean = boolean> {
	name: string;
	aliases?: string[];
	affinities: DemonAffinities<PersonaBased>;
	arcana: If<PersonaBased, Arcana, Arcana | null>;
	race: If<PersonaBased, PersonaRace, SMTRace | null>;
	level: number;
	hp: If<PersonaBased, null, number | null>;
	mp: If<PersonaBased, null, number | null>;
	stats: DemonStats;
	learnset: DemonSkill[];
	resistances: DemonResistances<PersonaBased>;
	game: If<PersonaBased, PersonaGame, AnyGame>;
	alignment: If<PersonaBased, null, DemonAlignment>;
	lore: If<PersonaBased, string | null, string>;
}

/** Data used for constructing a Persona instance */
export interface PersonaData extends DemonData<true> {
	race: 'Persona';
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
	criteria: AilBoostCriteria | null;
}

export interface AilDefensiveSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AILDEFENSIVE';
	ailment: AilDefensiveAilment;
	resistance: AilResistance;
}

export interface AilmentSkillData extends SkillData {
	affinity: 'Ailment';
	type: 'AILMENT';
	ailments: AilmentName[];
	chance: number;
	cost: number;
	flags?: Debuff[];
	range: AilmentRange;
}

export interface AttackSkillData extends SkillData {
	affinity: DamagingAffinity;
	type: 'ATTACK';
	accuracy: number;
	ailments?: Ailment[];
	cost: AttackCost;
	flags?: AttackFlag[];
	max?: number;
	min?: number;
	power: AttackPower;
	range: EnemyRange;
	series: Series;
}

export interface AutoBuffSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AUTOBUFF';
	buff: Buff;
	range: AutoBuffRange;
}

export interface BarrierSkillData extends SkillData {
	affinity: 'Support';
	type: 'BARRIER';
	barriers: Barrier[];
	cost: number;
	range: BarrierRange;
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
	element: BoostAffinity;
	stacks: BoostStack;
}

export interface BreakSkillData extends SkillData {
	affinity: 'Support';
	type: 'BREAK';
	cost: number;
	element: BreakAffinity;
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
	range: CritRange;
}

export interface CritBoostSkillData extends SkillData {
	affinity: 'Passive';
	type: 'CRITBOOST';
	amount: number;
	criteria: CritBoostCriteria | null;
}

export interface DefensiveSkillData extends SkillData {
	affinity: 'Passive';
	type: 'DEFENSIVE';
	element: DefensiveAffinity;
	newResistance: Resistance;
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
	element: EvasionAffinity;
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
	stat: MasterStat;
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
	ailments?: AilmentName[] | 'All';
	amount: RecoveryAmount | null;
	buffs?: SingleOrDoubleBuff[];
	cost: number;
	flags?: RecoveryFlag[];
	range: RecoveryRange;
}

export interface RegenSkillData extends SkillData {
	affinity: 'Passive';
	type: 'REGEN';
	amount: NumberOrPercent;
	criteria: RegenCriteria | null;
	stat: HPMPAil;
}

export interface SetSkillData extends SkillData {
	affinity: SetAffinity;
	amount: NumberOrPercent;
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
	element: SMTCounterAffinity;
	power: SMTCounterPower;
}

export interface SpringSkillData extends SkillData {
	affinity: 'Passive';
	type: 'SPRING';
	amount: NumberOrPercent;
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
	auto: SupportAutoEffect[];
	buffs: SingleOrDoubleBuff[];
	cost: number;
	debuffs: Buff[];
	flags?: SupportFlag[];
	negate: boolean;
	range: SupportRange;
}

export interface SusceptibilitySkillData extends SkillData {
	affinity: 'Almighty';
	type: 'SUSCEPTIBILITY';
	cost: number;
	range: SusceptibilityRange;
}

export interface TauntSkillData extends SkillData {
	affinity: 'Support';
	type: 'TAUNT';
	buff: SingleOrDoubleBuff | null;
	cost: number;
}

export interface WallSkillData extends SkillData {
	affinity: 'Support';
	type: 'WALL';
	cost: number;
	element: WallAffinity;
}