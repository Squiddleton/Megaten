import type { BattleThemes } from './music.js';
import type { AilBoostCriteria, AilDefensiveAilment, AilResistance, AilmentName, AilmentRange, AilmentSkillFlag, AllyRange, AnyAffinity, AnyGame, Arcana, AttackAilments, AttackCost, AttackFlag, AttackPower, AutoBuffRange, Barrier, BasePower, BoostAffinity, BoostStack, BreakAffinity, Buff, Charge, CritBoostCriteria, CritRange, DamagingAffinity, DefensiveAffinity, DefensiveSKillResistance, DemonAffinities, DemonAlignment, DemonOrigin, DemonResistances, DemonSkill, DemonStats, EndureCriteria, EnemyRange, EvasionAffinity, EvasionBoostCriteria, HPMP, If, LightDark, NumberOrPercent, OneOrAllAilments, PersonaGame, PersonaRace, PostBattleStat, RecoveryAmount, RecoveryFlag, RegenCriteria, RegenStat, SMTCounterAffinity, SMTRace, Series, SetAffinity, SingleOrDoubleBuff, SiphonCriteria, SkillPotential, SkillType, Stage, SupportAutoEffect, SupportFlag, SupportRange, SusceptibilityRange, TauntBuff, WallAffinity } from './types.js';

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
	alignment: If<PersonaBased, null, DemonAlignment>;
	lore: If<PersonaBased, string | null, string>;
	origin: DemonOrigin;
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
	flags?: AilmentSkillFlag[];
	range: AilmentRange;
}

export interface AttackSkillData extends SkillData {
	affinity: DamagingAffinity;
	type: 'ATTACK';
	accuracy: number;
	ailments?: AttackAilments | null;
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
	range: AllyRange;
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
	range: AllyRange;
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
	chance: number;
	element: SMTCounterAffinity;
	power: BasePower;
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
	buff: TauntBuff | null;
	cost: number;
}

export interface WallSkillData extends SkillData {
	affinity: 'Support';
	type: 'WALL';
	cost: number;
	element: WallAffinity;
}