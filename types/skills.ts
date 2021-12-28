import { AilmentClass, Affinity, NewAffinity } from "./lists";

export enum SkillTypes {
    AILBOOST = 'AILBOOST',
    AILDEFENSIVE = 'AILDEFENSIVE',
    AILMENT = 'AILMENT',
    ATTACK = 'ATTACK',
    AUTOBUFF = 'AUTOBUFF',
    BARRIER = 'BARRIER',
    BARRIERBREAK = 'BARRIERBREAK',
    BOOST = 'BOOST',
    BREAK = 'BREAK',
    CHARGE = 'CHARGE',
    COUNTER = 'COUNTER',
    CRIT = 'CRIT',
    CRITBOOST = 'CRITBOOST',
    DEFENSIVE = 'DEFENSIVE',
    DRAIN = 'DRAIN',
    ENDURE = 'ENDURE',
    EVASION = 'EVASION',
    HALVE = 'HALVE',
    INSTAKILL = 'INSTAKILL',
    INSTAKILLBOOST = 'INSTAKILLBOOST',
    MASTER = 'MASTER',
    MISC = 'MISC',
    NAVI = 'NAVI',
    POSTBATTLE = 'POSTBATTLE',
    RECOVERY = 'RECOVERY',
    REGEN = 'REGEN',
    SUPPORT = 'SUPPORT',
    SUSCEPTIBILITY = 'SUSCEPTIBILITY',
    WALL = 'WALL',
}

export type SkillType = keyof typeof SkillTypes;

export interface BaseSkill {
    name: string;
    devName: string;
    affinity: Affinity;
    type: SkillType;
    unique: boolean;
    description: string;
}

export interface AilBoostSkill extends BaseSkill {
    type: 'AILBOOST';
    ailment: string;
    amount: number;
    weather: boolean;
    unique: false;
}

export interface AilDefensiveSkill extends BaseSkill {
    type: 'AILDEFENSIVE';
    ailment: string;
    resistance: string;
    unique: false;
}

export interface AilmentSkill extends BaseSkill {
    type: 'AILMENT';
    range: number;
    cost: number;
    ailment: string;
    chance: string;
}

export interface AttackSkill extends BaseSkill {
    type: 'ATTACK';
    range: number;
    cost: number;
    power: number;
    display: string;
    min: number;
    max: number;
    ailment: AilmentClass[];
    crit: string | null;
    downBoost: boolean;
    baton: boolean;
    accurate: boolean;
    surround: boolean;
    weather: boolean;
}

export interface AutoBuffSkill extends BaseSkill {
    type: 'AUTOBUFF';
    buff: string;
    unique: false;
}

export interface BarrierBreakSkill extends BaseSkill {
    type: 'BARRIERBREAK';
    cost: number;
    barrier: string;
    unique: false;
}

export interface BoostSkill extends BaseSkill {
    type: 'BOOST';
    element: Affinity;
    amount: number;
}

export interface BreakSkill extends BaseSkill {
    type: 'BREAK';
    cost: number;
    element: Affinity;
    unique: false;
}

export interface ChargeSkill extends BaseSkill {
    type: 'CHARGE';
    cost: number;
    range: number;
    charge: string;
    unique: false;
}

export interface CounterSkill extends BaseSkill {
    type: 'COUNTER';
    chance: number;
}

export interface CritSkill extends BaseSkill {
    type: 'CRIT';
    range: string;
    cost: number;
}

export interface CritBoostSkill extends BaseSkill {
    type: 'CRITBOOST';
    amount: number;
    surround: boolean;
    unique: false;
}

export interface DefensiveSkill extends BaseSkill {
    type: 'DEFENSIVE';
    element: Affinity;
    newAffinity: NewAffinity;
    unique: false;
}

export interface DrainSkill extends BaseSkill {
    type: 'DRAIN';
    hpsp: string;
    cost: number;
    amount: number;
    unique: false;
}

export interface EndureSkill extends BaseSkill {
    type: 'ENDURE';
    priority: number;
    instakill: boolean;
    unique: false;
}

export interface EvasionSkill extends BaseSkill {
    type: 'EVASION';
    elements: string[];
    amount: number;
    surround: boolean;
    weather: boolean;
    unique: false;
}

export interface HalveSkill extends BaseSkill {
    type: 'HALVE';
    cost: number;
    unique: false;
}

export interface InstaKillSkill extends BaseSkill {
    type: 'INSTAKILL';
    range: number;
    cost: number;
    amount: number;
    display: string;
}

export interface InstaKillBoostSkill extends BaseSkill {
    type: 'INSTAKILLBOOST';
    element: Affinity;
    unique: false;
}

export interface MasterSkill extends BaseSkill {
    type: 'MASTER';
    skill: string;
    unique: false;
}

export interface MiscSkill extends BaseSkill {
    type: 'MISC';
    cost: number;
}

export interface PostBattleSkill extends BaseSkill {
    type: 'POSTBATTLE';
    range: number;
    xp: number;
    yen: number;
    hp: number;
    sp: number;
}

export interface RegenSkill extends BaseSkill {
    type: 'REGEN';
    hpspail: string;
    amount: number;
    percent: boolean;
    ambush: boolean;
    baton: boolean;
}

export interface SupportSkill extends BaseSkill {
    type: 'SUPPORT';
    range: number;
    cost: number;
    buffs: string[];
    debuffs: string[];
    negate: boolean;
    auto: string[];
    surround: boolean;
}

export interface SusceptibilitySkill extends BaseSkill {
    type: 'SUSCEPTIBILITY';
    range: number;
    cost: number;
    unique: false;
}

export interface WallSkill extends BaseSkill {
    type: 'WALL';
    cost: number;
    element: Affinity;
    unique: false;
}

export type Skill = AilBoostSkill | AilDefensiveSkill | AilmentSkill | AttackSkill | AutoBuffSkill | BarrierBreakSkill | BoostSkill | BreakSkill | ChargeSkill | CounterSkill | CritSkill | CritBoostSkill | DrainSkill | EndureSkill | EvasionSkill | HalveSkill | InstaKillSkill | InstaKillBoostSkill | MasterSkill | MiscSkill | PostBattleSkill | RegenSkill | SupportSkill | SusceptibilitySkill | WallSkill