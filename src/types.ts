/** Ailments inflicted by Skill instances */
export type Ailment = 'Burn' | 'Charm' | 'Confuse' | 'Despair' | 'Enervation' | 'Exhaustion' | 'Fear' | 'Freeze' | 'Mirage' | 'Poison' | 'Rage' | 'Seal' | 'Shock' | 'Sleep';

/** Resistances to ailments */
export type AilResistance = 'Resist' | 'Null';
/** Resistances to damaging skills */
export type Resistance = AilResistance | 'Drain' | 'Repel';

/** Ranges for skills targeting allies */
export type AllyRange = 'Self' | 'Ally' | 'Party';
/** Ranges for skills targeting enemies */
export type EnemyRange = 'One' | 'All' | 'Random';
/** Ranges for skills targeting specific entities */
export type AnyRange = AllyRange | EnemyRange;

/** Demons' Arcanas */
export type Arcana = 'Fool' | 'Magician' | 'Priestess' | 'Empress' | 'Emperor' | 'Hierophant' | 'Lovers' | 'Chariot'
| 'Justice' | 'Hermit' | 'Fortune' | 'Strength' | 'Hanged' | 'Death' | 'Temperance' | 'Devil' | 'Tower'
| 'Star' | 'Moon' | 'Sun' | 'Judgement' | 'Faith' | 'Councillor' | 'World' | 'Apostle' | 'Hope';

/** Barriers set up by a Skill instance */
export type Barrier = 'Painting' | 'Kannabi Veil' | 'Tetrakarn' | 'Makarakarn' | 'Shield of Justice' | 'Tetraja';

/** Buffs cast by a Skill instance */
export type Buff = 'Attack' | 'Defense' | 'Accuracy/Evasion' | 'Double Defense' | 'Double Accuracy/Evasion';

/** Charges cast by a Skill instance */
export type Charge = 'Recovery' | 'Charge' | 'Concentrate' | 'Critical' | 'Pierce';

/** Displayed damage values for SMTCounterSkill instances */
export type CounterDisplay = 'Weak' | 'Medium';
/** Displayed damage values for AttackSkill instances */
export type AttackDisplay = CounterDisplay | 'Minuscule' | 'Heavy' | 'Severe' | 'Colossal';

/** Criteria causing EvasionSkill instances to take effect */
export type EvasionBoostCriteria = 'Surrounded' | 'Rain/Snow';

/** Games that Demon data can originate from */
export type Game = 'p3' | 'p4' | 'p5' | 'smt5';

/** The HP or MP stats */
export type HPMP = 'HP' | 'MP';
/** The stat which a RegenSkill instance regenerates */
export type HPMPAil = HPMP | 'HPMP' | 'AIL';
/** The stat which a PostBattleSkill instance increases */
export type PostBattleStat = HPMP | 'HPMP' | 'EXP' | 'Money';

/** The type of structure that a MegatenError may throw from */
export type MegatenErrorType = 'Demon' | 'Persona' | 'Skill';

/** Affinities exclusive to the Persona series */
export type PersonaAffinity = 'Gun' | 'Wind' | 'Psy' | 'Nuke';
/** Affinities exclusive to the SMT series */
export type SMTAffinity = 'Force';
/** Affinities used by demons and skills */
export type AnyAffinity = 'Phys' | 'Fire' | 'Ice' | 'Elec' | 'Light' | 'Dark' | 'Almighty' | 'Recovery' | 'Ailment' | 'Support' | 'Passive' | 'Misc' | SMTAffinity | PersonaAffinity;
/** Affinities used by damage-dealing skills */
export type DamagingAffinity = Exclude<AnyAffinity, 'Recovery' | 'Ailment' | 'Support' | 'Passive' | 'Misc'>;
/** Affinities used by SMTCounterSkill instances */
export type CounterAffinity = 'Phys' | 'Dark';
/** The Light and Dark affinities */
export type LightDark = 'Light' | 'Dark';

/** Demons' races */
export type Race = 'Amatsu' | 'Avatar' | 'Avian' | 'Beast' | 'Brute' | 'Deity' | 'Devil' | 'Divine' | 'Dragon' | 'Drake' | 'Element' | 'Fairy' | 'Fallen'
| 'Femme' | 'Fiend' | 'Foul' | 'Fury' | 'Genma' | 'Godly' | 'Haunt' | 'Herald' | 'Holy' | 'Jaki' | 'Jirae' | 'Kishin' | 'Kunitsu' | 'Lady'
| 'Megami' | 'Mitama' | 'Night' | 'Nymph' | 'Persona' | 'Picaro' | 'Raptor' | 'Snake' | 'Treasure' | 'Tyrant' | 'Vile' | 'Wargod' | 'Wilder' | 'Yoma';

/** The displayed amount that RecoverySkill instances can recover  */
export type RecoveryAmount = 'Slight' | 'Moderate' | 'Half' | 'Full' | '130%';

/** Criteria causing RegenSkill instances to take effect */
export type RegenCriteria = 'Ambush' | 'Baton Pass' | 'Turn Start';

/** Criteria causing SiphonSkill instances to take effect */
export type RestoreCriteria = 'Weakness/Critical' | 'Ailment';

/** Series that Skill data can originate from */
export type Series = 'persona' | 'smt';

/** Skill instances' types */
export type SkillType = 'AILBOOST' | 'AILDEFENSIVE' | 'AILMENT' | 'ATTACK' | 'AUTOBUFF' | 'BARRIER' | 'BARRIERBREAK' | 'BLOCK' | 'BOOST' | 'BREAK'
| 'CHARGE' | 'CRIT' | 'CRITBOOST' | 'DEFENSIVE' | 'ENDURE' | 'EVASION' | 'HALVE' | 'INSTAKILLBOOST' | 'MASTER' | 'MISC' | 'NAVI'
| 'PERSONACOUNTER' | 'POSTBATTLE' | 'RECOVERY' | 'REGEN' | 'SIPHON' | 'SMTCOUNTER' | 'SPRING' | 'SUPPORT' | 'SUSCEPTIBILITY' | 'TAUNT' | 'WALL';

/** Stages for a Persona and its evolutions */
export type Stage = 1 | 2 | 3;