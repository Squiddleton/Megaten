import { Affinity, Skill } from './skills'

export interface Lists {
    demons:         Demon[];
    skills:         Skill[];
    treasureDemons: TreasureDemon[];
}

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
    block:    Affinity[];
    absorb:   Affinity[];
    reflect:  Affinity[];
    party:    string | null;
    evo:      number | null;
    ultimate: boolean;
    special:  boolean;
    game:     Game;
    evolution: Demon | null;
}

export type Game = 'p3' | 'p4' | 'p5'

export interface Learnset {
    name:  string;
    level: number;
}

export { Skill } from './skills'

export interface TreasureDemon {
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
    moves:   string[];
    weak:    Affinity[];
    resist:  Affinity[];
    block:   Affinity[];
    absorb:  Affinity[];
    reflect: Affinity[];
}

export function getDemon(input: string): Demon | null
export function getSkill(input: string): Skill | null
export function getTreasuredemon(input: string): TreasureDemon | null