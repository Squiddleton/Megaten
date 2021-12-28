import { Skill } from './skills'

export interface Lists {
    demons:         Demon[];
    skills:         Skill[];
    treasureDemons: TreasureDemon[];
}

export interface Demon {
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
    block:    Affinity[];
    absorb:   Affinity[];
    reflect:  Affinity[];
    party:    string | null;
    evo:      number | null;
    ultimate: boolean;
    special:  boolean;
    game:     Game;
    evolution: string;
}

export enum Affinity {
    Ailment = "Ailment",
    All = "ALL",
    Almighty = "Almighty",
    Bless = "Bless",
    Curse = "Curse",
    Elec = "Elec",
    Fire = "Fire",
    Gun = "Gun",
    Ice = "Ice",
    Nuke = "Nuke",
    Null = "Null",
    Passive = "Passive",
    Phys = "Phys",
    Psy = "Psy",
    Recovery = "Recovery",
    Support = "Support",
    Wind = "Wind",
}

export enum Game {
    P3 = "p3",
    P4 = "p4",
    P5 = "p5",
}

export interface Learnset {
    name:  string;
    level: number;
}

export interface AilmentClass {
    ailment: string;
    chance:  Display;
}

export enum Display {
    Colossal = "Colossal",
    Heavy = "Heavy",
    High = "High",
    Light = "Light",
    Low = "Low",
    Medium = "Medium",
    Minuscule = "Minuscule",
    Severe = "Severe",
}

export enum Buff {
    Agility = "Agility",
    Attack = "Attack",
    Defense = "Defense",
}

export enum NewAffinity {
    Absorb = "Absorb",
    Block = "Block",
    Reflect = "Reflect",
    Resist = "Resist",
}

export enum Resistance {
    Null = "Null",
    Resist = "Resist",
}

export interface TreasureDemon {
    name:    string;
    devName: string;
    inherit: Affinity;
    arcana:  string;
    race:    string;
    level:   number;
    hp:      number;
    sp:      number;
    st:      number;
    ma:      number;
    en:      number;
    ag:      number;
    lu:      number;
    moves:   string[];
    weak:    Affinity[];
    resist:  Affinity[];
    block:   Affinity[];
    absorb:  Affinity[];
    reflect: Affinity[];
}
