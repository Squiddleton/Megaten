import type { BattleThemes } from './music.js';
import type { AilBoostCriteria, AilResistance, AilmentFlag, AilmentName, AilmentTarget, AnyAffinity, AnyGame, Arcana, AttackAilments, AttackCost, AttackFlag, AttackPower, AttackTarget, AutoBuffTarget, Barrier, BarrierTarget, BasePower, BoostAffinity, BoostStack, BreakAffinity, Buff, BuffRecord, BuffValue, Charge, ChargeTarget, CritBoostCriteria, CritTarget, DamagingAffinity, DefensiveAffinity, DefensiveSKillResistance, DemonAffinities, DemonAlignment, DemonOrigin, DemonResistances, DemonSkill, DemonStats, EndureCriteria, EvasionAffinity, EvasionBoostCriteria, HPMP, If, LightDark, MiscAffinity, NumberOrPercent, PersonaGame, PersonaRace, PostBattleStat, RecoveryAmount, RecoveryFlag, RecoveryTarget, RegenCriteria, RegenStat, SMTCounterAffinity, SMTRace, Series, SetAffinity, SetTarget, SiphonCriteria, SkillPotential, SkillType, Stage, SupportAutoEffect, SupportFlag, SupportTarget, SusceptibilityTarget, Target, WallAffinity } from './types.js';

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
	resistances: DemonResistances;
	game: If<PersonaBased, PersonaGame, AnyGame>;
	alignment: DemonAlignment | null;
	lore: string | null;
	origin: DemonOrigin | null;
}

/** Data used for constructing a Persona instance */
export interface PersonaData extends DemonData<true> {
	race: 'Persona';
	user: string;
	stage: Stage;
	evoSkillName: string | null;
}

/** A standard enemy in Shin Megami Tensei V */
export interface SMT5StandardEnemyData {
	/** The enemy's name */
	name: string;
	/** The enemy's skill potential */
	skillPotential: SkillPotential;
	/** The enemy's race */
	race: SMTRace;
	/** The enemy's level */
	level: number;
	/** The enemy's HP */
	hp: number;
	/** The enemy's stats */
	stats: DemonStats;
	/** The names of the enemy's skills */
	skills: string[];
	/** The enemy's ailment and affinity resistances */
	resistances: DemonResistances;
	/** The enemy's major and minor alignment */
	alignment: DemonAlignment;
	/** The enemy's backstory */
	lore: string;
	/** The names of the item drops rewarded upon defeating the enemy */
	itemDrops: string[];
}

/** A boss in Shin Megami Tensei V */
export interface SMT5BossData extends SMT5StandardEnemyData {
	/** The song that plays during the boss battle, or null during non-Nahobino Empyrean forced encounters */
	theme: BattleThemes.ShinMegamiTensei5 | null;
	/** The distinguishing form of the demon for this boss battle, or undefined if the standard form */
	variant?: string;
}

/** Data used for constructing a Skill instance */
export interface SkillData {
	name: string;
	aliases?: string[];
	affinity: AnyAffinity;
	type: SkillType;
	target?: Target;
	unique?: boolean | null;
}

export interface AilBoostSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AILBOOST';
	ailment: AilmentName | null;
	amount: number;
	criteria: AilBoostCriteria | null;
}

export interface AilDefensiveSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AILDEFENSIVE';
	ailments: AilmentName[] | null;
	resistance: AilResistance;
}

export interface AilmentSkillData extends SkillData {
	affinity: 'Ailment';
	type: 'AILMENT';
	target: AilmentTarget;
	ailments: AilmentName[];
	chance: number;
	cost: number;
	debuffs?: BuffRecord;
	flags?: AilmentFlag[];
}

export interface AttackSkillData extends SkillData {
	affinity: DamagingAffinity;
	type: 'ATTACK';
	target: AttackTarget;
	accuracy: number;
	ailments?: AttackAilments | null;
	cost: AttackCost;
	debuffs?: BuffRecord;
	flags?: AttackFlag[];
	max?: number;
	min?: number;
	power: AttackPower;
	series: Series;
}

export interface AutoBuffSkillData extends SkillData {
	affinity: 'Passive';
	type: 'AUTOBUFF';
	target: AutoBuffTarget;
	buff: Buff;
}

export interface BarrierSkillData extends SkillData {
	affinity: 'Support';
	type: 'BARRIER';
	target: BarrierTarget;
	barriers: Barrier[];
	cost: number;
	revertDebuffs?: boolean;
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
	target: ChargeTarget;
	charge: Charge;
	cost: number;
}

export interface CritSkillData extends SkillData {
	affinity: 'Support';
	type: 'CRIT';
	target: CritTarget;
	cost: number;
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
	newResistance: DefensiveSKillResistance;
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

export interface InstakillBoostSkillData extends SkillData {
	affinity: 'Passive';
	type: 'INSTAKILLBOOST';
	element: LightDark;
}

export interface MasterSkillData extends SkillData {
	affinity: 'Passive';
	type: 'MASTER';
	amount: number;
	stat: HPMP;
}

export interface MiscSkillData extends SkillData {
	affinity: MiscAffinity;
	type: 'MISC';
	target: Target;
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
	target: RecoveryTarget;
	ailments?: AilmentName[] | 'All';
	amount: RecoveryAmount | null;
	buffs?: BuffRecord;
	cost: number;
	flags?: RecoveryFlag[];
}

export interface RegenSkillData extends SkillData {
	affinity: 'Passive';
	type: 'REGEN';
	amount: NumberOrPercent;
	criteria: RegenCriteria | null;
	stat: RegenStat;
}

export interface SetSkillData extends SkillData {
	affinity: SetAffinity;
	target: SetTarget;
	amount: NumberOrPercent;
	type: 'SET';
	cost: number | null;
	sickDependent?: boolean;
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
	chance: number;
	element: SMTCounterAffinity;
	power: BasePower;
	ally?: boolean;
	attackDown?: boolean;
	shroud?: boolean;
	pierce?: boolean;
	evasionBased?: boolean;
}

export interface SpringSkillData extends SkillData {
	affinity: 'Passive';
	type: 'SPRING';
	amount: NumberOrPercent;
	stat: HPMP;
}

export interface SummonSkillData extends SkillData {
	unique: null;
	affinity: 'Special';
	type: 'SUMMON';
	demon: string | null;
}

export interface SupportSkillData extends SkillData {
	affinity: 'Support';
	type: 'SUPPORT';
	target: SupportTarget;
	auto: SupportAutoEffect[];
	buffs: Partial<Record<Buff, BuffValue>>;
	cost: number;
	flags?: SupportFlag[];
	negate: boolean;
}

export interface SusceptibilitySkillData extends SkillData {
	affinity: 'Almighty';
	type: 'SUSCEPTIBILITY';
	target: SusceptibilityTarget;
	cost: number;
}

export interface TauntSkillData extends SkillData {
	affinity: 'Support';
	type: 'TAUNT';
	buffs?: BuffRecord;
	cost: number;
}

export interface WallSkillData extends SkillData {
	affinity: 'Support';
	type: 'WALL';
	cost: number;
	element: WallAffinity;
}