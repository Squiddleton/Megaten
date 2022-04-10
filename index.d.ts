export interface DemonData {
    name: string;
    devName: string;
    aliases: string[];
    inherit: Inherit;
    arcana: Arcana;
    race: string;
    level: number;
    st: number;
    ma: number;
    en: number;
    ag: number;
    lu: number;
    learnset: Learnset[];
    evoMove: string | null;
    weak: Element[];
    resist: Element[];
    null: Element[];
    drain: Element[];
    repel: Element[];
    game: Game;
    user: string | undefined;
    stage: 1 | 2 | 3 | undefined;
}

export class Demon {
    constructor(data: DemonData);
    name: string;
    devName: string;
    aliases: string[];
    inherit: Inherit;
    arcana: Arcana;
    race: string;
    level: number;
    st: number;
    ma: number;
    en: number;
    ag: number;
    lu: number;
    learnset: Learnset[];
    evoMove: string | null;
    weak: Element[];
    resist: Element[];
    null: Element[];
    drain: Element[];
    repel: Element[];
    game: Game;
    evolution:Demon | null;
    image: Buffer;
    isPersona(): this is Persona;
}

export class Persona extends Demon {
    constructor(data: PersonaData)
    user: string;
    stage: 1 | 2 | 3;
}

export class BaseSkill {
    constructor(data: BaseSkillData)
    name: string;
    devName: string;
    affinity: Affinity;
    type: SkillType;
    unique: boolean;
    description: string;
}

export interface BaseSkillData {
    name: string;
    devName: string;
    affinity: Affinity;
    type: SkillType;
    unique: boolean;
}

export class AilBoostSkill extends BaseSkill {
    constructor(data: AilBoostSkillData)
    affinity: 'Passive';
    type: 'AILBOOST';
    ailment: string;
    amount: number;
    weather: boolean;
}

export interface AilBoostSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'AILBOOST';
    ailment: string;
    amount: number;
    weather: boolean;
}

export class AilDefensiveSkill extends BaseSkill {
    constructor(data: AilDefensiveSkillData)
    affinity: 'Passive';
    type: 'AILDEFENSIVE';
    ailment: string;
    resistance: AilResistance;
}

export interface AilDefensiveSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'AILDEFENSIVE';
    ailment: string;
    resistance: AilResistance;
}

export class AilmentSkill extends BaseSkill {
    constructor(data: AilmentSkillData)
    affinity: 'Ailment';
    type: 'AILMENT';
    range: Range;
    cost: number;
    ailment: string;
    chance: {
        amount: number;
        display: Exclude<ChanceDisplay, 'Low'>
    };
}

export interface AilmentSkillData extends BaseSkillData {
    affinity: 'Ailment';
    type: 'AILMENT';
    range: Range;
    cost: number;
    ailment: string;
    chance: {
        amount: number;
        display: Exclude<ChanceDisplay, 'Low'>
    };
}

export class AttackSkill extends BaseSkill {
    constructor(data: AttackSkillData)
    affinity: Element;
    type: 'ATTACK';
    range: Range;
    cost: {
        type: HPSP;
        amount: number;
    };
    power: {
        amount: number;
        display: AttackDisplay;
    };
    min: number;
    max: number;
    flags: string[];
    ailments: Ailment[];
}

export interface AttackSkillData extends BaseSkillData {
    affinity: Element;
    type: 'ATTACK';
    range: Range;
    cost: {
        type: HPSP;
        amount: number;
    };
    power: {
        amount: number;
        display: AttackDisplay;
    };
    min: number;
    max: number;
    flags: string[];
    ailments: Ailment[];
}

export class AutoBuffSkill extends BaseSkill {
    constructor(data: AutoBuffSkillData)
    affinity: 'Passive';
    type: 'AUTOBUFF';
    buff: string;
}

export interface AutoBuffSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'AUTOBUFF';
    buff: string;
}

export class BarrierSkill extends BaseSkill {
    constructor(data: BarrierSkillData)
    affinity: 'Support';
    type: 'BARRIER';
    range: Range;
    cost: number;
    barriers: string[];
}

export interface BarrierSkillData extends BaseSkillData {
    affinity: 'Support';
    type: 'BARRIER';
    range: Range;
    cost: number;
    barriers: string[];
}

export class BarrierBreakSkill extends BaseSkill {
    constructor(data: BarrierBreakSkillData)
    affinity: 'Support';
    type: 'BARRIERBREAK';
    cost: number;
    barrier: string;
}

export interface BarrierBreakSkillData extends BaseSkillData {
    affinity: 'Support';
    type: 'BARRIERBREAK';
    cost: number;
    barrier: string;
}

export class BoostSkill extends BaseSkill {
    constructor(data: BoostSkillData)
    affinity: 'Passive';
    type: 'BOOST';
    element: Element | 'ALL';
    amount: number;
}

export interface BoostSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'BOOST';
    element: Element | 'ALL';
    amount: number;
}

export class BreakSkill extends BaseSkill {
    constructor(data: BreakSkillData)
    affinity: 'Support';
    type: 'BREAK';
    cost: number;
    element: Element;
}

export interface BreakSkillData extends BaseSkillData {
    affinity: 'Support';
    type: 'BREAK';
    cost: number;
    element: Element;
}

export class ChargeSkill extends BaseSkill {
    constructor(data: ChargeSkillData)
    affinity: 'Support';
    type: 'CHARGE';
    cost: number;
    range: Range;
    charge: string;
}

export interface ChargeSkillData extends BaseSkillData {
    affinity: 'Support';
    type: 'CHARGE';
    cost: number;
    range: Range;
    charge: string;
}

export class CounterSkill extends BaseSkill {
    constructor(data: CounterSkillData)
    affinity: 'Passive';
    type: 'COUNTER';
    chance: number;
}

export interface CounterSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'COUNTER';
    chance: number;
}

export class CritSkill extends BaseSkill {
    constructor(data: CritSkillData)
    affinity: 'Support';
    type: 'CRIT';
    range: 'ALL' | 'ALLY' | 'PARTY';
    cost: number;
}

export interface CritSkillData extends BaseSkillData {
    affinity: 'Support';
    type: 'CRIT';
    range: 'ALL' | 'ALLY' | 'PARTY';
    cost: number;
}

export class CritBoostSkill extends BaseSkill {
    constructor(data: CritBoostSkillData)
    affinity: 'Passive';
    type: 'CRITBOOST';
    amount: number;
    surround: boolean;
}

export interface CritBoostSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'CRITBOOST';
    amount: number;
    surround: boolean;
}

export class DefensiveSkill extends BaseSkill {
    constructor(data: DefensiveSkillData)
    affinity: 'Passive';
    type: 'DEFENSIVE';
    element: Element;
    newAffinity: Resistance;
}

export interface DefensiveSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'DEFENSIVE';
    element: Element;
    newAffinity: Resistance;
}

export class DrainSkill extends BaseSkill {
    constructor(data: DrainSkillData)
    affinity: 'Almighty';
    type: 'DRAIN';
    hpsp: HPSP;
    cost: number;
    amount: number;
}

export interface DrainSkillData extends BaseSkillData {
    affinity: 'Almighty';
    type: 'DRAIN';
    hpsp: HPSP;
    cost: number;
    amount: number;
}

export class EndureSkill extends BaseSkill {
    constructor(data: EndureSkillData)
    affinity: 'Passive';
    type: 'ENDURE';
    priority: number;
    instakill: boolean;
}

export interface EndureSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'ENDURE';
    priority: number;
    instakill: boolean;
}

export class EvasionSkill extends BaseSkill {
    constructor(data: EvasionSkillData)
    affinity: 'Passive';
    type: 'EVASION';
    elements: string[];
    amount: number;
    surround: boolean;
    weather: boolean;
}

export interface EvasionSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'EVASION';
    elements: string[];
    amount: number;
    surround: boolean;
    weather: boolean;
}

export class HalveSkill extends BaseSkill {
    constructor(data: HalveSkillData)
    affinity: BlessCurse;
    type: 'HALVE';
    cost: number;
}

export interface HalveSkillData extends BaseSkillData {
    affinity: BlessCurse;
    type: 'HALVE';
    cost: number;
}

export class InstaKillSkill extends BaseSkill {
    constructor(data: InstaKillSkillData)
    affinity: BlessCurse;
    type: 'INSTAKILL';
    range: Range;
    cost: number;
    amount: number;
    display: ChanceDisplay;
}

export interface InstaKillSkillData extends BaseSkillData {
    affinity: BlessCurse;
    type: 'INSTAKILL';
    range: Range;
    cost: number;
    amount: number;
    display: ChanceDisplay;
}

export class InstaKillBoostSkill extends BaseSkill {
    constructor(data: InstaKillBoostSkillData)
    affinity: 'Passive';
    type: 'INSTAKILLBOOST';
    element: BlessCurse;
}

export interface InstaKillBoostSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'INSTAKILLBOOST';
    element: BlessCurse;
}

export class MasterSkill extends BaseSkill {
    constructor(data: MasterSkillData)
    affinity: 'Passive';
    type: 'MASTER';
    skill: HPSP;
}

export interface MasterSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'MASTER';
    skill: HPSP;
}

export class MiscSkill extends BaseSkill {
    constructor(data: MiscSkillData)
    type: 'MISC';
    cost: number;
}

export interface MiscSkillData extends BaseSkillData {
    type: 'MISC';
    cost: number;
}

export class NaviSkill extends BaseSkill {
    constructor(data: NaviSkillData)
    affinity: 'Passive';
    type: 'NAVI';
}

export interface NaviSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'NAVI';
}

export class PostBattleSkill extends BaseSkill {
    constructor(data: PostBattleSkillData)
    affinity: 'Passive';
    type: 'POSTBATTLE';
    range: Range;
    xp: number;
    yen: number;
    hp: number;
    sp: number;
}

export interface PostBattleSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'POSTBATTLE';
    range: Range;
    xp: number;
    yen: number;
    hp: number;
    sp: number;
}

export class RecoverySkill extends BaseSkill {
    constructor(data: RecoverySkillData)
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

export interface RecoverySkillData extends BaseSkillData {
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
    constructor(data: RegenSkillData)
    affinity: 'Passive';
    type: 'REGEN';
    hpspail: HPSPAIL;
    amount: number;
    percent: boolean;
    ambush: boolean;
    baton: boolean;
}

export interface RegenSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'REGEN';
    hpspail: HPSPAIL;
    amount: number;
    percent: boolean;
    ambush: boolean;
    baton: boolean;
}

export class SupportSkill extends BaseSkill {
    constructor(data: SupportSkillData)
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

export interface SupportSkillData extends BaseSkillData {
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
    constructor(data: SusceptibilitySkillData)
    affinity: 'Almighty';
    type: 'SUSCEPTIBILITY';
    range: Range;
    cost: number;
}

export interface SusceptibilitySkillData extends BaseSkillData {
    affinity: 'Almighty';
    type: 'SUSCEPTIBILITY';
    range: Range;
    cost: number;
}

export class WallSkill extends BaseSkill {
    constructor(data: WallSkillData)
    affinity: 'Support';
    type: 'WALL';
    cost: number;
    element: Element;
}

export interface WallSkillData extends BaseSkillData {
    affinity: 'Support';
    type: 'WALL';
    cost: number;
    element: Element;
}

export interface TreasureDemonData {
    name: string;
    devName: string;
    inherit: Inherit;
    arcana: Arcana;
    race: 'Treasure';
    level: number;
    hp: number;
    sp: number;
    st: number;
    ma: number;
    en: number;
    ag: number;
    lu: number;
    skills: string[];
    weak: Element[];
    resist: Element[];
    null: Element[];
    drain: Element[];
    repel: Element[];
}

export class TreasureDemon {
    constructor(data: TreasureDemonData)
    name: string;
    devName: string;
    inherit: Inherit;
    arcana: Arcana;
    race: 'Treasure';
    level: number;
    hp: number;
    sp: number;
    st: number;
    ma: number;
    en: number;
    ag: number;
    lu: number;
    skills: string[];
    weak: Element[];
    resist: Element[];
    null: Element[];
    drain: Element[];
    repel: Element[];
    image: Buffer;
}

/** An array of all Demon instances  */
export declare const demons: Demon[];
/** An array of all Skill instances  */
export declare const skills: Skill[];
/** An array of all TreasureDemon instances  */
export declare const treasureDemons: TreasureDemon[];

/** Gets a Demon by its name, removing punctuation and accents */
export function getDemon(name: string): Demon | null;
/** Gets a Skill by its name, removing punctuation and accents */
export function getSkill(name: string): Skill | null;
/** Gets a TreasureDemon by its name, removing punctuation and accents */
export function getTreasureDemon(name: string): TreasureDemon | null;

/** The current version of the megaten package being ran */
export declare const version: string;

/** A utility function that removes accents, replaces "&" with "and", and removes non-alphanumeric characters */
export function noPunc(str: string): string;

export type AilResistance = 'Resist' | 'Null'
export type Resistance = AilResistance | 'Drain' | 'Repel';

export type Arcana = 'Fool' | 'Magician' | 'Priestess' | 'Empress' | 'Emperor' | 'Hierophant' | 'Lovers' | 'Chariot'
    | 'Justice' | 'Hermit'| 'Fortune' | 'Strength' | 'Hanged' | 'Death' | 'Temperance' | 'Devil' | 'Tower'
    | 'Star' | 'Moon' | 'Sun' | 'Judgement' | 'Faith' | 'Councillor' | 'World' | 'Apostle' | 'Hope';

export type AttackDisplay = 'Minuscule' | 'Light' | 'Medium' | 'Heavy' | 'Severe' | 'Colossal';

export type BlessCurse = 'Bless' | 'Curse';

export type Buff = 'Attack' | 'Defense' | 'Agility';

export type ChanceDisplay = 'Low' | 'Medium' | 'High';

export type Element = 'Phys' | 'Gun' | 'Fire' | 'Ice' | 'Elec' | 'Wind' | 'Nuke' | 'Psy' | 'Bless' | 'Curse' | 'Almighty';
export type Inherit = Exclude<Element, 'Gun'> | 'Ailment' | 'Recovery' | 'Support';
export type Affinity = Inherit | 'Gun' | 'Passive';

export type Game = 'p3' | 'p4' | 'p5';

export type HPSP = 'HP' | 'SP';
export type HPSPAIL = HPSP | 'HPSP' | 'AIL'

export type Range = 0 | 1;

export type Skill = AilBoostSkill | AilDefensiveSkill | AilmentSkill | AttackSkill | AutoBuffSkill | BarrierSkill | BarrierBreakSkill | BoostSkill | BreakSkill
    | ChargeSkill | CounterSkill | CritSkill | CritBoostSkill | DefensiveSkill | DrainSkill | EndureSkill | EvasionSkill | HalveSkill | InstaKillSkill
    | InstaKillBoostSkill | MasterSkill | MiscSkill | NaviSkill | PostBattleSkill | RecoverySkill | RegenSkill | SupportSkill | SusceptibilitySkill | WallSkill;

export type SkillData = AilBoostSkillData | AilDefensiveSkillData | AilmentSkillData | AttackSkillData | AutoBuffSkillData | BarrierSkillData | BarrierBreakSkillData | BoostSkillData | BreakSkillData
    | ChargeSkillData | CounterSkillData | CritSkillData | CritBoostSkillData | DefensiveSkillData | DrainSkillData | EndureSkillData | EvasionSkillData | HalveSkillData | InstaKillSkillData
    | InstaKillBoostSkillData | MasterSkillData | MiscSkillData | NaviSkillData | PostBattleSkillData | RecoverySkillData | RegenSkillData | SupportSkillData | SusceptibilitySkillData | WallSkillData;

export type SkillType = 'AILBOOST' | 'AILDEFENSIVE' | 'AILMENT' | 'ATTACK' | 'AUTOBUFF' | 'BARRIER' | 'BARRIERBREAK' | 'BOOST' | 'BREAK'
    | 'CHARGE' | 'COUNTER' | 'CRIT' |'CRITBOOST' | 'DEFENSIVE' | 'DRAIN' | 'ENDURE' | 'EVASION' | 'HALVE' | 'INSTAKILL' 
    | 'INSTAKILLBOOST' | 'MASTER' | 'MISC' | 'NAVI' | 'POSTBATTLE' | 'RECOVERY' | 'REGEN' | 'SUPPORT' | 'SUSCEPTIBILITY' | 'WALL';
    
export interface Ailment {
    ailment: string;
    chance: ChanceDisplay;
}

export interface Learnset {
    name: string;
    level: number;
}