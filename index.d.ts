import { Affinity, Skill } from './skills'

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
    skills:   string[];
    weak:    Affinity[];
    resist:  Affinity[];
    null:    Affinity[];
    drain:   Affinity[];
    repel:   Affinity[];
}

export declare const demons: Demon[];
export declare const skills: Skill[];
export declare const treasureDemons: TreasureDemon[];

export function getDemon(input: string): Demon | null
export function getSkill(input: string): Skill | null
export function getTreasureDemon(input: string): TreasureDemon | null