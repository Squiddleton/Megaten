/** A utility type for shortening ternary type checks */
export type If<Bool extends boolean, ValueIfTrue, ValueIfFalse> = Bool extends true ? ValueIfTrue : ValueIfFalse;

/** An ailment inflicted by a skill */
export interface Ailment {
	name: AilmentName;
	chance: number;
}

/** Ailments' names */
export type AilmentName = 'Burn' | 'Charm' | 'Confuse' | 'Despair' | 'Enervate' | 'Exhaust' | 'Fear' | 'Freeze' | 'Hunger' | 'Mirage' | 'Poison' | 'Rage' | 'Seal' | 'Shock' | 'Sleep';
/** An ailment's name or all ailments */
export type OneOrAllAilments = AilmentName | 'All';

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

/** Demons' Arcana */
export type Arcana = 'Fool' | 'Magician' | 'Councillor' | 'Priestess' | 'Empress' | 'Emperor' | 'Hierophant' | 'Apostle' | 'Lovers' | 'Chariot' | 'Justice' | 'Hermit' | 'Fortune' | 'Strength' | 'Hunger' | 'Hanged' | 'Death' | 'Temperance' | 'Devil' | 'Tower' | 'Star' | 'Moon' | 'Sun' | 'Judgement' | 'Aeon' | 'World' | 'Faith' | 'Hope';

/** An ATTACK-type skill's cost */
export interface AttackCost {
	/** The amount of HP or MP that the skill uses */
	amount: number;
	/** The type of stat that the skill uses */
	type: HPMP;
}

export interface BasePower {
	/** The skill's base power */
	amount: number;
}
/** An ATTACK-type skill's power */
export interface AttackPower extends BasePower {
	/** The skill's public power relative to other skills */
	display: AttackDisplay;
	/** The type of damage that the skill inflicts */
	type: DamageType;
}
/** An SMTCOUNTER-type skill's power */
export interface CounterPower extends BasePower {
	/** The skill's public power relative to other skills */
	display: CounterDisplay;
}

/** Barriers set up by a Skill instance */
export type Barrier = 'Painting' | 'Kannabi Veil' | 'Tetrakarn' | 'Makarakarn' | 'Shield of Justice' | 'Tetraja' | `${string} Block`;

/** Buffs cast by a Skill instance */
export type Buff = 'Attack' | 'Defense' | 'Accuracy/Evasion' | 'Double Defense' | 'Double Accuracy/Evasion';

/** Charges cast by a Skill instance */
export type Charge = 'Recovery' | 'Charge' | 'Concentrate' | 'Critical' | 'Pierce';

/** Displayed damage values for SMTCounterSkill instances */
export type CounterDisplay = 'Weak' | 'Medium';
/** Displayed damage values for AttackSkill instances */
export type AttackDisplay = CounterDisplay | 'Minuscule' | 'Heavy' | 'Severe' | 'Colossal';

/** Types of damage dealt */
export type DamageType = 'Physical' | 'Magic';

export interface DemonAffinities<PersonaBased extends boolean = boolean> {
	/** The demon's skill potential */
	skillPotential: If<PersonaBased, null, SkillPotential | null>;
	/** The affinity that this demon can inherit skills of */
	inherit: InheritAffinity | null;
}

export interface DemonResistances<PersonaBased extends boolean = boolean> {
	/** Ailments that the demon is weak to, resists, or nullifies */
	ailments: If<PersonaBased, null, Partial<Record<AilmentName, AilResistance | 'Weak'>> | null>;
	/** The affinities that the demon is weak to */
	weak: DamagingAffinity[];
	/** Affinities that the demon resists */
	resist: DamagingAffinity[];
	/** Affinities that the demon nullifies */
	null: DamagingAffinity[];
	/** Affinities that the demon drains */
	drain: DamagingAffinity[];
	/** Affinities that the demon repels */
	repel: DamagingAffinity[];
}

/** A skill that a demon naturally learns */
export interface DemonSkill {
	/** The skill's name */
	name: string;
	/** The level that the skill is learned, or 0 if innate */
	level: number;
}

/** A demon's stats */
export interface DemonStats {
	/** The demon's strength */
	st: number;
	/** The demon's vitality/endurance */
	vi: number;
	/** The demon's magic */
	ma: number;
	/** The demon's agility */
	ag: number;
	/** The demon's luck */
	lu: number;
}

/** Criteria causing EndureSkill instances to take effect */
export type EndureCriteria = LightDark | 'Light/Dark';

/** Criteria causing EvasionSkill instances to take effect */
export type EvasionBoostCriteria = 'Surrounded' | 'Rain/Snow';

/** The HP or MP stats */
export type HPMP = 'HP' | 'MP';
/** The stat which a RegenSkill instance regenerates */
export type HPMPAil = HPMP | 'HPMP' | 'AIL';
/** The stat which a PostBattleSkill instance increases */
export type PostBattleStat = HPMP | 'HPMP' | 'EXP' | 'Money';

/** Demons' moral alignments */
export type MoralAlignment = 'Light' | 'Neutral' | 'Dark' | 'Unknown';
/** Demons' ethical alignments */
export type EthicalAlignment = 'Law' | 'Neutral' | 'Chaos' | 'Unknown';
/** Demons' alignments */
export interface Alignment<PersonaBased extends boolean> {
	moral: If<PersonaBased, null, MoralAlignment>;
	ethical: If<PersonaBased, null, EthicalAlignment>;
}

/** A static number or a percentage */
export type NumberOrPercent = number | `${number}%`;

/** Affinities exclusive to the Persona series */
export type PersonaAffinity = 'Gun' | 'Wind' | 'Psy' | 'Nuke';
/** Affinities exclusive to the SMT series */
export type SMTAffinity = 'Force';
/** Affinities used by demons and skills */
export type AnyAffinity = 'Phys' | 'Fire' | 'Ice' | 'Elec' | 'Light' | 'Dark' | 'Almighty' | 'Recovery' | 'Ailment' | 'Support' | 'Passive' | 'Misc' | SMTAffinity | PersonaAffinity;
/** Affinities used by damage-dealing skills */
export type DamagingAffinity = Exclude<AnyAffinity, 'Recovery' | 'Ailment' | 'Support' | 'Passive' | 'Misc'>;
/** A damaging affinity or all damaging affinities */
export type OneOrAllDamagingAffinities = DamagingAffinity | 'All';
/** Affinities that can be demons' inherit affinity */
export type InheritAffinity = Exclude<AnyAffinity, 'Gun' | 'Passive' | 'Misc' | SMTAffinity>;
/** Affinities used by SMTCounterSkill instances */
export type CounterAffinity = 'Phys' | 'Dark';
/** The Light and Dark affinities */
export type LightDark = 'Light' | 'Dark';

/** Games in the Persona series */
export type PersonaGame = 'p3' | 'p4' | 'p5';
/** Games in the Shin Megami Tensei series */
export type SMTGame = 'smt5';
/** Games that Demon data can originate from */
export type AnyGame = PersonaGame | SMTGame;

/** Custom races for demons originating in Persona games */
export type PersonaRace = 'Persona' | 'Picaro' | 'Treasure';
/** Demons' races */
export type SMTRace = 'Amatsu' | 'Avatar' | 'Avian' | 'Beast' | 'Brute' | 'Deity' | 'Devil' | 'Divine' | 'Dragon' | 'Drake' | 'Element' | 'Fairy' | 'Fallen' | 'Femme' | 'Fiend' | 'Foul' | 'Fury' | 'Genma' | 'Godly' | 'Haunt' | 'Herald' | 'Holy' | 'Jaki' | 'Jirae' | 'Kishin' | 'Kunitsu' | 'Lady' | 'Megami' | 'Mitama' | 'Night' | 'Nymph' | 'Panagia' | 'Raptor' | 'Snake' | 'Tenma' | 'Tyrant' | 'Vile' | 'Wargod' | 'Wilder' | 'Wood' | 'Yoma';
/** Demons' races */
export type AnyRace = PersonaRace | SMTRace;

/** The displayed amount that RecoverySkill instances can recover  */
export type RecoveryAmount = 'Slight' | 'Moderate' | 'Half' | 'Full' | '130%';

/** Criteria causing RegenSkill instances to take effect */
export type RegenCriteria = 'Ambush' | 'Baton Pass' | 'Turn Start';

/** Series that Skill data can originate from */
export type Series = 'persona' | 'smt';

/** Criteria causing SiphonSkill instances to take effect */
export type SiphonCriteria = 'Ailment' | 'Weakness/Critical' | 'Drain';

/** The effectiveness of a demon's skills based on the skills' affinities */
export type SkillPotential = Record<Exclude<AnyAffinity, PersonaAffinity | 'Passive' | 'Misc'>, number>;

/** Skill instances' types */
export type SkillType = 'AILBOOST' | 'AILDEFENSIVE' | 'AILMENT' | 'ATTACK' | 'AUTOBUFF' | 'BARRIER' | 'BARRIERBREAK' | 'BOOST' | 'BREAK' | 'CHARGE' | 'CRIT' | 'CRITBOOST' | 'DEFENSIVE' | 'ENDURE' | 'EVASION' | 'INSTAKILLBOOST' | 'MASTER' | 'MISC' | 'NAVI' | 'PERSONACOUNTER' | 'POSTBATTLE' | 'RECOVERY' | 'REGEN' | 'SET' | 'SIPHON' | 'SMTCOUNTER' | 'SPRING' | 'SUMMON' | 'SUPPORT' | 'SUSCEPTIBILITY' | 'TAUNT' | 'WALL';

/** Stages for a Persona and its evolutions */
export type Stage = 1 | 2 | 3;