export interface DemonData {
    name: string;
    devName: string;
    aliases: string[];
    inherit: Inherit;
    arcana: Arcana;
    race: string;
    level: number;
    hp: number;
    mp: number;
    st: number;
    ma: number;
    en: number;
    ag: number;
    lu: number;
    learnset: Learnset[];
    weak: Element[];
    resist: Element[];
    null: Element[];
    drain: Element[];
    repel: Element[];
    game: Game;
    user: string | undefined;
    stage: 1 | 2 | 3 | undefined;
    evoSkill: string | null | undefined;
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
    hp: number;
    mp: number;
    st: number;
    ma: number;
    en: number;
    ag: number;
    lu: number;
    learnset: Learnset[];
    weak: Element[];
    resist: Element[];
    null: Element[];
    drain: Element[];
    repel: Element[];
    game: Game;
    image: Buffer;
    isPersona(): this is Persona;
}

export class Persona extends Demon {
    constructor(data: DemonData);
    user: string;
    stage: 1 | 2 | 3;
    evoSkill: string | null;
    evolution: Persona | null;
}

export class BaseSkill {
    constructor(data: BaseSkillData);
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
    constructor(data: AilBoostSkillData);
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
    constructor(data: AilDefensiveSkillData);
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
    constructor(data: AilmentSkillData);
    affinity: 'Ailment';
    type: 'AILMENT';
    range: Range;
    cost: number;
    ailments: string[];
    chance: number;
    flags: string[];
}

export interface AilmentSkillData extends BaseSkillData {
    affinity: 'Ailment';
    type: 'AILMENT';
    range: Range;
    cost: number;
    ailments: string[];
    chance: number;
    flags: string[];
}

export class AttackSkill extends BaseSkill {
    constructor(data: AttackSkillData);
    affinity: Element;
    type: 'ATTACK';
    range: Range | 2;
    cost: {
        type: HPMP;
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
    series: Series;
}

export interface AttackSkillData extends BaseSkillData {
    affinity: Element;
    type: 'ATTACK';
    range: Range | 2;
    cost: {
        type: HPMP;
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
    series: Series;
}

export class AutoBuffSkill extends BaseSkill {
    constructor(data: AutoBuffSkillData);
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
    constructor(data: BarrierSkillData);
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
    constructor(data: BarrierBreakSkillData);
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

export class BlockSkill extends BaseSkill {
    constructor(data: BlockSkillData);
    affinity: 'Support';
    type: 'BLOCK';
    cost: number;
    element: Exclude<SMTElement, 'Almighty'>
}

export interface BlockSkillData extends BaseSkillData {
    affinity: 'Support';
    type: 'BLOCK';
    cost: number;
    element: Exclude<SMTElement, 'Almighty'>
}

export class BoostSkill extends BaseSkill {
    constructor(data: BoostSkillData);
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
    constructor(data: BreakSkillData);
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
    constructor(data: ChargeSkillData);
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

export class PersonaCounterSkill extends BaseSkill {
    constructor(data: PersonaCounterSkillData);
    affinity: 'Passive';
    type: 'PERSONACOUNTER';
    chance: number;
}

export interface PersonaCounterSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'PERSONACOUNTER';
    chance: number;
}

export class CritSkill extends BaseSkill {
    constructor(data: CritSkillData);
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
    constructor(data: CritBoostSkillData);
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
    constructor(data: DefensiveSkillData);
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

export class EndureSkill extends BaseSkill {
    constructor(data: EndureSkillData);
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
    constructor(data: EvasionSkillData);
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
    constructor(data: HalveSkillData);
    affinity: LightDark;
    type: 'HALVE';
    cost: number;
}

export interface HalveSkillData extends BaseSkillData {
    affinity: LightDark;
    type: 'HALVE';
    cost: number;
}

export class InstaKillBoostSkill extends BaseSkill {
    constructor(data: InstaKillBoostSkillData);
    affinity: 'Passive';
    type: 'INSTAKILLBOOST';
    element: LightDark;
}

export interface InstaKillBoostSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'INSTAKILLBOOST';
    element: LightDark;
}

export class MasterSkill extends BaseSkill {
    constructor(data: MasterSkillData);
    affinity: 'Passive';
    type: 'MASTER';
    skill: HPMP;
}

export interface MasterSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'MASTER';
    skill: HPMP;
}

export class MiscSkill extends BaseSkill {
    constructor(data: MiscSkillData)
    type: 'MISC';
    cost: number | null;
    effect: string;
}

export interface MiscSkillData extends BaseSkillData {
    type: 'MISC';
    cost: number | null;
    effect: string;
}

export class NaviSkill extends BaseSkill {
    constructor(data: NaviSkillData);
    affinity: 'Passive';
    type: 'NAVI';
}

export interface NaviSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'NAVI';
}

export class PostBattleSkill extends BaseSkill {
    constructor(data: PostBattleSkillData);
    affinity: 'Passive';
    type: 'POSTBATTLE';
    range: Range;
    xp: number;
    yen: number;
    hp: number;
    mp: number;
}

export interface PostBattleSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'POSTBATTLE';
    range: Range;
    xp: number;
    yen: number;
    hp: number;
    mp: number;
}

export class RecoverySkill extends BaseSkill {
    constructor(data: RecoverySkillData);
    affinity: 'Recovery';
    type: 'RECOVERY';
    range: Range;
    cost: number;
    amount: string | null;
    ailments: string[];
    buffs: Buff[];
    flags: string[];
}

export interface RecoverySkillData extends BaseSkillData {
    affinity: 'Recovery';
    type: 'RECOVERY';
    range: Range;
    cost: number;
    amount: string | null;
    ailments: string[];
    buffs: Buff[];
    flags: string[];
}

export class RegenSkill extends BaseSkill {
    constructor(data: RegenSkillData);
    affinity: 'Passive';
    type: 'REGEN';
    hpmpail: HPMPAIL;
    amount: number;
    percent: boolean;
    ambush: boolean;
    baton: boolean;
}

export interface RegenSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'REGEN';
    hpmpail: HPMPAIL;
    amount: number;
    percent: boolean;
    ambush: boolean;
    baton: boolean;
}

export class SiphonSkill extends BaseSkill {
    constructor(data: SiphonSkillData);
    affinity: 'Passive';
    type: 'SIPHON';
    amount: number;
    criteria: RestoreCriteria;
}

export interface SiphonSkillData extends BaseSkillData {
    affinity: 'Passive';
    type: 'SIPHON';
    amount: number;
    criteria: RestoreCriteria;
}

export class SMTCounterSkill extends BaseSkill {
    constructor(data: SMTCounterSkillData);
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

export interface SMTCounterSkillData extends BaseSkillData {
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

export class SpringSkill extends BaseSkill {
    constructor(data: SpringSkillData)
    affinity: 'Passive';
    type: 'SPRING';
    amount: number;
    hpmp: HPMP;
}

export interface SpringSkillData extends BaseSkill {
    affinity: 'Passive';
    type: 'SPRING';
    amount: number;
    hpmp: HPMP;
}

export class SupportSkill extends BaseSkill {
    constructor(data: SupportSkillData);
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
    constructor(data: SusceptibilitySkillData);
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

export class TauntSkill extends BaseSkill {
    constructor(data: TauntSkillData);
    affinity: 'Support';
    type: 'TAUNT';
    buff: string | null;
    cost: number;
}

export interface TauntSkillData extends BaseSkillData {
    affinity: 'Support';
    type: 'TAUNT';
    buff: string | null;
    cost: number;
}

export class WallSkill extends BaseSkill {
    constructor(data: WallSkillData);
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

/** An array of all Demon instances  */
export declare const demons: Demon[];
/** An array of all Skill instances  */
export declare const skills: Skill[];

/** Gets a Demon by its name, removing punctuation and accents */
export function getDemon(name: string): Demon | null;
/** Gets a Skill by its name, removing punctuation and accents */
export function getSkill(name: string): Skill | null;

/** The current version of the megaten package being ran */
export declare const version: string;

/** A utility function that removes accents, replaces "&" with "and", and removes non-alphanumeric characters */
export function noPunc(str: string): string;

export type AilResistance = 'Resist' | 'Null'
export type Resistance = AilResistance | 'Drain' | 'Repel';

export type Arcana = 'Fool' | 'Magician' | 'Priestess' | 'Empress' | 'Emperor' | 'Hierophant' | 'Lovers' | 'Chariot'
    | 'Justice' | 'Hermit'| 'Fortune' | 'Strength' | 'Hanged' | 'Death' | 'Temperance' | 'Devil' | 'Tower'
    | 'Star' | 'Moon' | 'Sun' | 'Judgement' | 'Faith' | 'Councillor' | 'World' | 'Apostle' | 'Hope';

export type CounterDisplay = 'Weak' | 'Medium'
export type AttackDisplay = CounterDisplay | 'Minuscule' | 'Light' | 'Heavy' | 'Severe' | 'Colossal';

export type LightDark = 'Light' | 'Dark';

export type Buff = 'Attack' | 'Defense' | 'Agility' | 'Double Defense' | 'Double Agility';

export type ChanceDisplay = 'Low' | 'Medium' | 'High';

export type Element = 'Phys' | 'Gun' | 'Fire' | 'Ice' | 'Elec' | 'Force' | 'Wind' | 'Nuke' | 'Psy' | 'Light' | 'Dark' | 'Almighty';
export type Inherit = Exclude<Element, 'Gun'> | 'Ailment' | 'Recovery' | 'Support';
export type Affinity = Inherit | 'Gun' | 'Passive';
export type SMTElement = Exclude<Element, 'Wind' | 'Nuke' | 'Psy'>
export type CounterAffinity = 'Phys' | 'Dark';

export type Game = 'p3' | 'p4' | 'p5' | 'smt5';

export type HPMP = 'HP' | 'MP';
export type HPMPAIL = HPMP | 'HPMP' | 'AIL'

export type Range = 0 | 1;
export type ChargeRnage = 'Self' | 'Ally' | 'Party'

export type RestoreCriteria = 'Weakness/Critical' | 'Ailment'

export type Series = 'persona' | 'smt';

export type Skill = AilBoostSkill | AilDefensiveSkill | AilmentSkill | AttackSkill | AutoBuffSkill | BarrierSkill | BarrierBreakSkill | BlockSkill | BoostSkill
    | BreakSkill | ChargeSkill | CritSkill | CritBoostSkill | DefensiveSkill | EndureSkill | EvasionSkill | HalveSkill
    | InstaKillBoostSkill | MasterSkill | MiscSkill | NaviSkill | PersonaCounterSkill | PostBattleSkill | RecoverySkill | RegenSkill | SiphonSkill | SMTCounterSkill | SpringSkill | SupportSkill | SusceptibilitySkill | TauntSkill | WallSkill;

export type SkillData = AilBoostSkillData | AilDefensiveSkillData | AilmentSkillData | AttackSkillData | AutoBuffSkillData | BarrierSkillData | BarrierBreakSkillData | BlockSkillData | BoostSkillData
    | BreakSkillData | ChargeSkillData | CritSkillData | CritBoostSkillData | DefensiveSkillData | EndureSkillData | EvasionSkillData | HalveSkillData
    | InstaKillBoostSkillData | MasterSkillData | MiscSkillData | NaviSkillData | PersonaCounterSkillData | PostBattleSkillData | RecoverySkillData | RegenSkillData | SiphonSkillData | SMTCounterSkillData | SpringSkillData | SupportSkillData | SusceptibilitySkillData | TauntSkillData | WallSkillData;

export type SkillType = 'AILBOOST' | 'AILDEFENSIVE' | 'AILMENT' | 'ATTACK' | 'AUTOBUFF' | 'BARRIER' | 'BARRIERBREAK' | 'BLOCK' | 'BOOST'
    | 'BREAK' | 'CHARGE' | 'CRIT' |'CRITBOOST' | 'DEFENSIVE' | 'ENDURE' | 'EVASION' | 'HALVE'
    | 'INSTAKILLBOOST' | 'MASTER' | 'MISC' | 'NAVI' | 'PERSONACOUNTER' | 'POSTBATTLE' | 'RECOVERY' | 'REGEN' | 'SIPHON' | 'SMTCOUNTER' | 'SPRING' | 'SUPPORT' | 'SUSCEPTIBILITY' | 'TAUNT' | 'WALL';
    
export interface Ailment {
    name: string;
    chance: number;
}

export interface Learnset {
    name: string;
    level: number;
}