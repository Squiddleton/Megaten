export type Ailment = 'Burn' | 'Charm' | 'Confuse' | 'Despair' | 'Enervation' | 'Exhaustion' | 'Fear' | 'Freeze' | 'Mirage' | 'Poison' | 'Rage' | 'Seal' | 'Shock' | 'Sleep';

export type AilResistance = 'Resist' | 'Null';
export type Resistance = AilResistance | 'Drain' | 'Repel';

export type Arcana = 'Fool' | 'Magician' | 'Priestess' | 'Empress' | 'Emperor' | 'Hierophant' | 'Lovers' | 'Chariot'
| 'Justice' | 'Hermit' | 'Fortune' | 'Strength' | 'Hanged' | 'Death' | 'Temperance' | 'Devil' | 'Tower'
| 'Star' | 'Moon' | 'Sun' | 'Judgement' | 'Faith' | 'Councillor' | 'World' | 'Apostle' | 'Hope' | null;

export type Barrier = 'Painting' | 'Kannabi Veil' | 'Tetrakarn' | 'Makarakarn' | 'Shield of Justice' | 'Tetraja';

export type Charge = 'Recovery' | 'Charge' | 'Concentrate' | 'Critical' | 'Pierce';

export type CounterDisplay = 'Weak' | 'Medium';
export type AttackDisplay = CounterDisplay | 'Minuscule' | 'Heavy' | 'Severe' | 'Colossal';

export type LightDark = 'Light' | 'Dark';

export type Buff = 'Attack' | 'Defense' | 'Accuracy/Evasion' | 'Double Defense' | 'Double Accuracy/Evasion';

export type PersonaAffinity = 'Gun' | 'Wind' | 'Psy' | 'Nuke';
export type SMTAffinity = 'Force';
export type AnyAffinity = 'Phys' | 'Fire' | 'Ice' | 'Elec' | 'Light' | 'Dark' | 'Almighty' | 'Recovery' | 'Ailment' | 'Support' | 'Passive' | 'Misc' | SMTAffinity | PersonaAffinity;
export type DamagingAffinity = Exclude<AnyAffinity, 'Recovery' | 'Ailment' | 'Support' | 'Passive' | 'Misc'>;
export type CounterAffinity = 'Phys' | 'Dark';

export type Game = 'p3' | 'p4' | 'p5' | 'smt5';

export type HPMP = 'HP' | 'MP';
export type HPMPAil = HPMP | 'HPMP' | 'AIL';
export type PostBattleStat = HPMP | 'HPMP' | 'EXP' | 'Money';

export type MegatenErrorType = 'Demon' | 'Persona' | 'Skill';

export type Race = 'Amatsu' | 'Avatar' | 'Avian' | 'Beast' | 'Brute' | 'Deity' | 'Devil' | 'Divine' | 'Dragon' | 'Drake' | 'Element' | 'Fairy' | 'Fallen'
| 'Femme' | 'Fiend' | 'Foul' | 'Fury' | 'Genma' | 'Godly' | 'Haunt' | 'Herald' | 'Holy' | 'Jaki' | 'Jirae' | 'Kishin' | 'Kunitsu' | 'Lady'
| 'Megami' | 'Mitama' | 'Night' | 'Nymph' | 'Persona' | 'Picaro' | 'Raptor' | 'Snake' | 'Treasure' | 'Tyrant' | 'Vile' | 'Wargod' | 'Wilder' | 'Yoma' | null;

export type AllyRange = 'Ally' | 'Party';
export type EnemyRange = 'One' | 'All';

export type RecoveryAmount = 'Slight' | 'Moderate' | 'Half' | 'Full' | '130%' | null;

export type RestoreCriteria = 'Weakness/Critical' | 'Ailment';

export type Series = 'persona' | 'smt';

export type SkillType = 'AILBOOST' | 'AILDEFENSIVE' | 'AILMENT' | 'ATTACK' | 'AUTOBUFF' | 'BARRIER' | 'BARRIERBREAK' | 'BLOCK' | 'BOOST' | 'BREAK'
| 'CHARGE' | 'CRIT' | 'CRITBOOST' | 'DEFENSIVE' | 'ENDURE' | 'EVASION' | 'HALVE' | 'INSTAKILLBOOST' | 'MASTER' | 'MISC' | 'NAVI'
| 'PERSONACOUNTER' | 'POSTBATTLE' | 'RECOVERY' | 'REGEN' | 'SIPHON' | 'SMTCOUNTER' | 'SPRING' | 'SUPPORT' | 'SUSCEPTIBILITY' | 'TAUNT' | 'WALL';

export type Stage = 1 | 2 | 3;