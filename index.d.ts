export class Demon {
    name:     string;
    devName:  string;
    aliases:  string[];
    inherit:  Inherit;
    arcana:   Arcana;
    race:     string;
    level:    number;
    st:       number;
    ma:       number;
    vi:       number;
    ag:       number;
    lu:       number;
    learnset: Learnset[];
    evoMove:  string | null;
    weak:     Element[];
    resist:   Element[];
    null:     Element[];
    drain:    Element[];
    repel:    Element[];
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
    affinity: 'Passive';
    type: 'AILBOOST';
    ailment: string;
    amount: number;
    weather: boolean;
}

export class AilDefensiveSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'AILDEFENSIVE';
    ailment: string;
    resistance: 'Resist' | 'Null';
}

export class AilmentSkill extends BaseSkill {
    affinity: 'Ailment';
    type: 'AILMENT';
    range: Range;
    cost: number;
    ailment: string;
    chance: 'Medium' | 'High';
}

export class AttackSkill extends BaseSkill {
    affinity: Element;
    type: 'ATTACK';
    range: Range;
    cost: number;
    power: number;
    display: 'Miniscule' | 'Light' | 'Medium' | 'Heavy' | 'Severe' | 'Colossal';
    min: number;
    max: number;
    ailment: Ailment[];
    crit: 'High' | null;
    downBoost: boolean;
    baton: boolean;
    accurate: boolean;
    surround: boolean;
    weather: boolean;
}

export class AutoBuffSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'AUTOBUFF';
    buff: string;
}

export class BarrierSkill extends BaseSkill {
    affinity: 'Support';
    type: 'BARRIER';
    range: Range;
    cost: number;
    barriers: string[];
}

export class BarrierBreakSkill extends BaseSkill {
    affinity: 'Support';
    type: 'BARRIERBREAK';
    cost: number;
    barrier: string;
}

export class BoostSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'BOOST';
    element: Element | 'ALL';
    amount: number;
}

export class BreakSkill extends BaseSkill {
    affinity: 'Support';
    type: 'BREAK';
    cost: number;
    element: Element;
}

export class ChargeSkill extends BaseSkill {
    affinity: 'Support';
    type: 'CHARGE';
    cost: number;
    range: Range;
    charge: string;
}

export class CounterSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'COUNTER';
    chance: number;
}

export class CritSkill extends BaseSkill {
    affinity: 'Support';
    type: 'CRIT';
    range: 'ALL' | 'ALLY' | 'PARTY';
    cost: number;
}

export class CritBoostSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'CRITBOOST';
    amount: number;
    surround: boolean;
}

export class DefensiveSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'DEFENSIVE';
    element: Element;
    newAffinity: 'Resist' | 'Null' | 'Drain' | 'Repel';
}

export class DrainSkill extends BaseSkill {
    affinity: 'Almighty';
    type: 'DRAIN';
    hpsp: HPSP;
    cost: number;
    amount: number;
}

export class EndureSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'ENDURE';
    priority: number;
    instakill: boolean;
}

export class EvasionSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'EVASION';
    elements: string[];
    amount: number;
    surround: boolean;
    weather: boolean;
}

export class HalveSkill extends BaseSkill {
    affinity: BlessCurse;
    type: 'HALVE';
    cost: number;
}

export class InstaKillSkill extends BaseSkill {
    affinity: BlessCurse;
    type: 'INSTAKILL';
    range: Range;
    cost: number;
    amount: number;
    display: Display;
}

export class InstaKillBoostSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'INSTAKILLBOOST';
    element: BlessCurse;
}

export class MasterSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'MASTER';
    skill: HPSP;
}

export class MiscSkill extends BaseSkill {
    type: 'MISC';
    cost: number;
}

export class NaviSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'NAVI';
}

export class PostBattleSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'POSTBATTLE';
    range: Range;
    xp: number;
    yen: number;
    hp: number;
    sp: number;
}

export class RecoverySkill extends BaseSkill {
    affinity: 'Recovery';
    type: 'RECOVERY';
    range: Range;
    cost: number;
    amount: number;
    ailment: string[];
    buffs: Buff[];
    revive: boolean;
    negate: boolean;
}

export class RegenSkill extends BaseSkill {
    affinity: 'Passive';
    type: 'REGEN';
    hpspail: HPSP | 'HPSP' | 'AIL';
    amount: number;
    percent: boolean;
    ambush: boolean;
    baton: boolean;
}

export class SupportSkill extends BaseSkill {
    affinity: 'Support';
    type: 'SUPPORT';
    range: Range;
    cost: number;
    buffs: Buff[];
    debuffs: Buff[];
    negate: boolean;
    auto: string[];
    surround: boolean;
}

export class SusceptibilitySkill extends BaseSkill {
    affinity: 'Almighty';
    type: 'SUSCEPTIBILITY';
    range: Range;
    cost: number;
}

export class WallSkill extends BaseSkill {
    affinity: 'Support';
    type: 'WALL';
    cost: number;
    element: Element;
}

export class TreasureDemon {
    name:    string;
    devName: string;
    inherit: Inherit;
    arcana:  Arcana;
    race:    'Treasure';
    level:   number;
    hp:      number;
    sp:      number;
    st:      number;
    ma:      number;
    vi:      number;
    ag:      number;
    lu:      number;
    skills:  string[];
    weak:    Element[];
    resist:  Element[];
    null:    Element[];
    drain:   Element[];
    repel:   Element[];
    image:   Buffer;
}

export declare const demons: Demon[];
export declare const skills: Skill[];
export declare const treasureDemons: TreasureDemon[];

export function getDemon(input: string): Demon | null;
export function getSkill(input: string): Skill | null;
export function getTreasureDemon(input: string): TreasureDemon | null;

export declare const version: string;

export type Element = 'Phys' | 'Gun' | 'Fire' | 'Ice' | 'Elec' | 'Wind' | 'Nuke' | 'Psy' | 'Bless' | 'Curse' | 'Almighty';
export type Inherit = Exclude<Element, 'Gun'> | 'Ailment' | 'Recovery' | 'Support';
export type Affinity = Inherit | 'Gun' | 'Passive';

export type Arcana = 'Fool' | 'Magician' | 'Priestess' | 'Empress' | 'Emperor' | 'Hierophant' | 'Lovers' | 'Chariot'
    | 'Justice' | 'Hermit'| 'Fortune' | 'Strength' | 'Hanged' | 'Death' | 'Temperance' | 'Devil' | 'Tower'
    | 'Star' | 'Moon' | 'Sun' | 'Judgement' | 'Faith' | 'Councillor' | 'World' | 'Apostle' | 'Hope';

export type BlessCurse = 'Bless' | 'Curse';

export type Buff = 'Attack' | 'Defense' | 'Agility';

export type Display = 'Low' | 'Medium' | 'High';

export type Game = 'p3' | 'p4' | 'p5';

export type HPSP = 'HP' | 'SP';

export type Range = 0 | 1;

export type Skill = AilBoostSkill | AilDefensiveSkill | AilmentSkill | AttackSkill | AutoBuffSkill | BarrierSkill | BarrierBreakSkill | BoostSkill | BreakSkill
    | ChargeSkill | CounterSkill | CritSkill | CritBoostSkill | DefensiveSkill | DrainSkill | EndureSkill | EvasionSkill | HalveSkill | InstaKillSkill
    | InstaKillBoostSkill | MasterSkill | MiscSkill | NaviSkill | PostBattleSkill | RecoverySkill | RegenSkill | SupportSkill | SusceptibilitySkill | WallSkill;

export type SkillType = 'AILBOOST' | 'AILDEFENSIVE' | 'AILMENT' | 'ATTACK' | 'AUTOBUFF' | 'BARRIER' | 'BARRIERBREAK' | 'BOOST' | 'BREAK'
    | 'CHARGE' | 'COUNTER' | 'CRIT' |'CRITBOOST' | 'DEFENSIVE' | 'DRAIN' | 'ENDURE' | 'EVASION' | 'HALVE' | 'INSTAKILL' 
    | 'INSTAKILLBOOST' | 'MASTER' | 'MISC' | 'NAVI' | 'POSTBATTLE' | 'RECOVERY' | 'REGEN' | 'SUPPORT' | 'SUSCEPTIBILITY' | 'WALL';
    
export interface Ailment {
    ailment: string;
    chance:  Display;
}

export interface Learnset {
    name:  string;
    level: number;
}