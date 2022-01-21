export class Demon {
    name:     string;
    devName:  string;
    aliases:  string[];
    inherit:  Affinity;
    arcana:   string;
    race:     string;
    level:    number;
    st:       number;
    ma:       number;
    en:       number;
    ag:       number;
    lu:       number;
    learnset: Learnset[];
    evoMove:  string | null;
    weak:     Affinity[];
    resist:   Affinity[];
    null:     Affinity[];
    drain:    Affinity[];
    repel:    Affinity[];
    party:    string | null;
    evo:      number | null;
    ultimate: boolean;
    special:  boolean;
    game:     Game;
    evolution:Demon | null;
    image:    Buffer;
}

export class BaseSkill {
    name: string;
    devName: string;
    affinity: Affinity;
    type: SkillType;
    unique: boolean;
    description: string;
}

export class AilBoostSkill extends BaseSkill {
    type: 'AILBOOST';
    ailment: string;
    amount: number;
    weather: boolean;
    unique: false;
}

export class AilDefensiveSkill extends BaseSkill {
    type: 'AILDEFENSIVE';
    ailment: string;
    resistance: string;
    unique: false;
}

export class AilmentSkill extends BaseSkill {
    type: 'AILMENT';
    range: number;
    cost: number;
    ailment: string;
    chance: string;
}

export class AttackSkill extends BaseSkill {
    type: 'ATTACK';
    range: number;
    cost: number;
    power: number;
    display: string;
    min: number;
    max: number;
    ailment: Ailment[];
    crit: string | null;
    downBoost: boolean;
    baton: boolean;
    accurate: boolean;
    surround: boolean;
    weather: boolean;
}

export class AutoBuffSkill extends BaseSkill {
    type: 'AUTOBUFF';
    buff: string;
    unique: false;
}

export class BarrierSkill extends BaseSkill {
    type: 'BARRIER';
    range: number;
    cost: number;
    barriers: string[];
    unique: false;
}

export class BarrierBreakSkill extends BaseSkill {
    type: 'BARRIERBREAK';
    cost: number;
    barrier: string;
    unique: false;
}

export class BoostSkill extends BaseSkill {
    type: 'BOOST';
    element: Affinity | 'ALL';
    amount: number;
}

export class BreakSkill extends BaseSkill {
    type: 'BREAK';
    cost: number;
    element: Affinity;
    unique: false;
}

export class ChargeSkill extends BaseSkill {
    type: 'CHARGE';
    cost: number;
    range: number;
    charge: string;
    unique: false;
}

export class CounterSkill extends BaseSkill {
    type: 'COUNTER';
    chance: number;
}

export class CritSkill extends BaseSkill {
    type: 'CRIT';
    range: string;
    cost: number;
}

export class CritBoostSkill extends BaseSkill {
    type: 'CRITBOOST';
    amount: number;
    surround: boolean;
    unique: false;
}

export class DefensiveSkill extends BaseSkill {
    type: 'DEFENSIVE';
    element: Affinity;
    newAffinity: NewAffinity;
    unique: false;
}

export class DrainSkill extends BaseSkill {
    type: 'DRAIN';
    hpsp: string;
    cost: number;
    amount: number;
    unique: false;
}

export class EndureSkill extends BaseSkill {
    type: 'ENDURE';
    priority: number;
    instakill: boolean;
    unique: false;
}

export class EvasionSkill extends BaseSkill {
    type: 'EVASION';
    elements: string[];
    amount: number;
    surround: boolean;
    weather: boolean;
    unique: false;
}

export class HalveSkill extends BaseSkill {
    type: 'HALVE';
    cost: number;
    unique: false;
}

export class InstaKillSkill extends BaseSkill {
    type: 'INSTAKILL';
    range: number;
    cost: number;
    amount: number;
    display: string;
}

export class InstaKillBoostSkill extends BaseSkill {
    type: 'INSTAKILLBOOST';
    element: Affinity;
    unique: false;
}

export class MasterSkill extends BaseSkill {
    type: 'MASTER';
    skill: string;
    unique: false;
}

export class MiscSkill extends BaseSkill {
    type: 'MISC';
    cost: number;
}

export class NaviSkill extends BaseSkill {
    type: 'NAVI';
}

export class PostBattleSkill extends BaseSkill {
    type: 'POSTBATTLE';
    range: number;
    xp: number;
    yen: number;
    hp: number;
    sp: number;
}

export class RecoverySkill extends BaseSkill {
    type: 'RECOVERY';
    range: number;
    cost: number;
    amount: number;
    ailment: string[];
    buffs: Buff[];
    revive: boolean;
    negate: boolean;
}

export class RegenSkill extends BaseSkill {
    type: 'REGEN';
    hpspail: string;
    amount: number;
    percent: boolean;
    ambush: boolean;
    baton: boolean;
}

export class SupportSkill extends BaseSkill {
    type: 'SUPPORT';
    range: number;
    cost: number;
    buffs: Buff[];
    debuffs: Buff[];
    negate: boolean;
    auto: string[];
    surround: boolean;
}

export class SusceptibilitySkill extends BaseSkill {
    type: 'SUSCEPTIBILITY';
    range: number;
    cost: number;
    unique: false;
}

export class WallSkill extends BaseSkill {
    type: 'WALL';
    cost: number;
    element: Affinity;
    unique: false;
}

export type Skill = AilBoostSkill | AilDefensiveSkill | AilmentSkill | AttackSkill | AutoBuffSkill | BarrierSkill | BarrierBreakSkill | BoostSkill | BreakSkill
    | ChargeSkill | CounterSkill | CritSkill | CritBoostSkill | DefensiveSkill | DrainSkill | EndureSkill | EvasionSkill | HalveSkill | InstaKillSkill
    | InstaKillBoostSkill | MasterSkill | MiscSkill | NaviSkill | PostBattleSkill | RecoverySkill | RegenSkill | SupportSkill | SusceptibilitySkill | WallSkill;

export class TreasureDemon {
    name:    string;
    devName: string;
    inherit: Affinity;
    arcana:  string;
    race:    'Treasure';
    level:   number;
    hp:      number;
    sp:      number;
    st:      number;
    ma:      number;
    en:      number;
    ag:      number;
    lu:      number;
    skills:  string[];
    weak:    Affinity[];
    resist:  Affinity[];
    null:    Affinity[];
    drain:   Affinity[];
    repel:   Affinity[];
    image:   Buffer;
}

export declare const demons: Demon[];
export declare const skills: Skill[];
export declare const treasureDemons: TreasureDemon[];

export function getDemon(input: string): Demon | null;
export function getSkill(input: string): Skill | null;
export function getTreasureDemon(input: string): TreasureDemon | null;

export declare const version: string;

export type Affinity = 'Phys' | 'Gun' | 'Fire' | 'Ice' | 'Elec' | 'Wind' | 'Nuke' | 'Psy' | 'Bless' | 'Curse' | 'Almighty' | 'Ailment' | 'Recovery' | 'Support' | 'Passive';

export type Game = 'p3' | 'p4' | 'p5';

export interface Learnset {
    name:  string;
    level: number;
}

export interface Ailment {
    ailment: string;
    chance:  Display;
}

export type Buff = 'Attack' | 'Defense' | 'Agility';

export type Display = 'Miniscule' | 'Light' | 'Medium' | 'Heavy' | 'Severe' | 'Colossal' | 'Low' | 'High';

export type NewAffinity = 'Resist' | 'Null' | 'Drain' | 'Repel';

export type SkillType = 'AILBOOST' | 'AILDEFENSIVE' | 'AILMENT' | 'ATTACK' | 'AUTOBUFF' | 'BARRIER' | 'BARRIERBREAK' | 'BOOST' | 'BREAK'
    | 'BREAK' | 'CHARGE' | 'COUNTER' | 'CRIT' |'CRITBOOST' | 'DEFENSIVE' | 'DRAIN' | 'ENDURE' | 'EVASION' | 'HALVE' | 'INSTAKILL' 
    | 'INSTAKILLBOOST' | 'MASTER' | 'MISC' | 'NAVI' | 'POSTBATTLE' | 'RECOVERY' | 'REGEN' | 'SUPPORT' | 'SUSCEPTIBILITY' | 'WALL';