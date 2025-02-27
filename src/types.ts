/** A utility type for shortening ternary typings */
export type If<Bool extends boolean, ValueIfTrue, ValueIfFalse> = Bool extends true ? ValueIfTrue : ValueIfFalse;

/** Buffs, debuffs, and negation that skills may cast */
export enum BuffValue {
	Maximize = 4,
	GreatlyIncrease = 2,
	Increase = 1,
	Decrease = -1,
	GreatlyDecrease = -2,
	Minimize = -4,
	NegateBuffs = -5,
	NegateDebuffs = -6,
	NegateAll = -7,
	NegateDebuffsAndIncrease = -8,
	NegateBuffsAndDecrease = -9
}

/** Criteria for AilBoostSkill instances taking effect */
export type AilBoostCriteria = 'Rain/Snow';

/** Ailments possibly inflicted by AttackSkill instances */
export interface AttackAilments {
	/** Ailments the skill may inflict */
	names: AilmentName[];
	/** The percent chance of inflicting one of the ailments */
	chance: number | 'Level-Based';
}

/** Ailments' names (adjusted for consistency with SMT5) */
export type AilmentName = 'Bind' | 'Brand' | 'Burn' | 'Charm' | 'Confusion' | 'Daze' | 'Death' | 'Despair' | 'Dizzy' | 'Down' | 'Enervate' | 'Exhaust' | 'Fear' | 'Freeze' | 'Hunger' | 'Mirage' | 'Mud' | 'Poison' | 'Rage' | 'Seal' | 'Shock' | 'Stone' | 'Stun' | 'Shroud' | 'Sick' | 'Sleep';

/** Resistances to ailments */
export type AilResistance = 'Resist' | 'Null';
/* Resistances to damaging affinities */
export type Resistance = 'Weak' | AilResistance | 'Repel' | 'Drain';
/* Resistances created by DefensiveSkill instances */
export type DefensiveSKillResistance = Exclude<Resistance, 'Weak'>;

/** Demons' Arcana */
export type Arcana = 'Fool' | 'Magician' | 'Councillor' | 'Priestess' | 'Empress' | 'Emperor' | 'Hierophant' | 'Apostle' | 'Lovers' | 'Chariot' | 'Justice' | 'Hermit' | 'Fortune' | 'Strength' | 'Hunger' | 'Hanged' | 'Death' | 'Temperance' | 'Devil' | 'Tower' | 'Star' | 'Moon' | 'Sun' | 'Judgement' | 'Aeon' | 'World' | 'Faith' | 'Hope';

/** An AttackSkill instance's cost */
export interface AttackCost {
	/** The amount of HP or MP that the skill uses */
	amount: number;
	/** The stat that the skill uses */
	stat: AttackCostStat;
}

/** Flags for AttackSkill instances */
export type AttackFlag = '+20% Crit Rate' | '+200% Crit Rate' | '+30% Crit Rate' | 'Afflicted Boost' | 'After Evading Only' | 'Agility Dependent Hits' | 'Asleep Boost' | 'Attack Reduced' | 'Baton Boost' | 'Chaos Target Boost' | 'Charmed Boost' | 'Confused Boost' | 'Crit Damage Boost' | 'Debuff Number Dependent' | 'Defense Greatly Down' | 'Down Boost' | 'Drain HP' | 'Drain HP/MP' | 'Drain MP' | 'Foe Number Dependent' | 'Guarantees Weakness' | 'HP Dependent' | 'Law Target Boost' | 'Minimize Defense' | 'Mirage Boost' | 'Negate Charges/Barriers' | 'Pierce' | 'Poisoned Boost' | 'Shroud Dependent' | 'Smirk Boost' | 'Smirk Instakill' | 'Smirk Pierce' | 'Smirk-Dependent Debuffs' | 'Static Damage' | 'Surround Boost' | 'Weakness Instakill' | 'Weather Boost';

/** A base for skills with a specific amount of power */
export interface BasePower {
	/** The skill's base power (adjusted for consistency with SMT5) */
	amount: number;
	/** The skill's visible power relative to other skills */
	display: AttackDisplay;
}
/** An AttackSkill instance's power */
export interface AttackPower extends BasePower {
	/** The type of damage that the skill inflicts */
	type: DamageType;
}

/** Barriers formed by a Skill instance */
export type Barrier = 'Painting' | 'Damage Down' | 'Repel Phys' | 'Repel Magic' | 'Shield of Justice' | 'Tetraja' | `${Exclude<DamagingAffinity, PersonaAffinity | 'Almighty'>} Nullify` | 'Absolute Evasion';

/** The method for calculating how multiple BoostSkill instances stack */
export type BoostStack = '+' | 'x';

/** Buffs cast by a Skill instance */
export type Buff = 'Attack' | 'Magic' | 'Defense' | 'Accuracy/Evasion';
/** All the buffs a skill casts */
export type BuffRecord = Partial<Record<Buff, BuffValue>>;

/** Charges cast by a Skill instance */
export type Charge = 'Phys Charge' | 'Phys Charge - Dark Energy' | 'Phys Charge - Donum' | 'Magic Charge' | 'Magic Charge - Donum' | 'Magic Charge - Spirit Focus' | 'Critical Charge' | 'Recovery Charge' | 'Pierce Charge' | 'Pierce Charge EX' | 'Successive Strikes' | 'Fire Pierce' | 'Ice Pierce' | 'Elec Pierce' | 'Force Pierce';

/** Displayed damage values for SMTCounterSkill instances */
export type CounterDisplay = 'Weak' | 'Medium';
/** Displayed damage values for AttackSkill instances */
export type AttackDisplay = CounterDisplay | 'Minimal' | 'Heavy' | 'Severe' | 'Colossal' | 'Weak to heavy' | 'Medium to severe';

/** Criteria for CritBoostSkill instances taking effect */
export type CritBoostCriteria = 'Ambush' | 'Surround';

/** Types of damage dealt */
export type DamageType = 'Physical' | 'Magic';

/** A demon's skill potential and inherit affinity */
export interface DemonAffinities<PersonaBased extends boolean = boolean> {
	/** The demon's skill potential */
	skillPotential: If<PersonaBased, null, SkillPotential | null>;
	/** The affinity that the demon can learn skills of */
	inherit: InheritAffinity | null;
}

/** A demon's mythological origin */
export type DemonOrigin = 'Aboriginal' | 'Abrahamic' | 'African' | 'Arabian' | 'ATLUS Original' | 'Balinese' | 'Buddhist' | 'Buryat' | 'Canaanite' | 'Celtic' | 'Chinese' | 'Egyptian' | 'European' | 'Filipino' | 'Greco-Roman' | 'Haitian' | 'Hindu' | 'Japanese' | 'Lithuanian' | 'Lovecraftian' | 'Historical' | 'Mesopotamian' | 'Modern Fiction' | 'Norse' | 'North American' | 'Slavic' | 'South American' | 'Universal' | 'Zoroastrian';

/** A demon's ailment and affinity resistances */
export type DemonResistances = Partial<Record<DamagingAffinity, Resistance> & Record<AilmentName, 'Weak' | AilResistance>>;

/** A skill that a demon learns via leveling up */
export interface DemonSkill {
	/** The skill's name */
	name: string;
	/** The level that the skill is learned, or 0 if innate */
	level: number;
}

/** A demon's stats */
export type DemonStats = DemonStatsWithVitality | DemonStatsWithDexterity;

/** A demon's stats regardless of the game */
export interface BaseDemonStats {
	/** The demon's strength stat */
	st: number;
	/** The demon's magic stat */
	ma: number;
	/** The demon's agility stat */
	ag: number;
	/** The demon's luck stat */
	lu: number;
}

/** Stats used in most games */
export interface DemonStatsWithVitality extends BaseDemonStats {
	/** The demon's vitality or endurance stat */
	vi: number;
}

/** Stats used in SMT4 and 4A */
export interface DemonStatsWithDexterity extends BaseDemonStats {
	/** The demon's dexterity stat */
	dx: number;
}

/** Criteria for EndureSkill instances taking effect */
export type EndureCriteria = LightDark | 'Light/Dark';

/** Criteria for EvasionSkill instances taking effect */
export type EvasionBoostCriteria = 'Surrounded' | 'Rain/Snow';

/** The HP or MP stats */
export type HPMP = 'HP' | 'MP' | 'HPMP';
/** The cost stat that an AttackSkill instance decreases */
export type AttackCostStat = Exclude<HPMP, 'HPMP'>;
/** The stat that a RegenSkill instance regenerates */
export type RegenStat = HPMP | 'AIL';
/** The stat that a PostBattleSkill instance increases */
export type PostBattleStat = HPMP | 'EXP' | 'Money';

/** Demons' major alignments that indicate their character */
export type MajorAlignment = 'Light' | 'Neutral' | 'Dark' | 'Unknown';
/** Demons' minor alignments that indicate their ideals */
export type MinorAlignment = 'Law' | 'Neutral' | 'Chaos' | 'Unknown';
/** A demon's major and minor alignment */
export interface DemonAlignment {
	/** The demon's major alignment indicative of their character (Light v. Dark) */
	major: MajorAlignment;
	/** The demon's minor alignment indicative of their ideals (Law v. Chaos) */
	minor: MinorAlignment;
}

/** A static number or a percent */
export type NumberOrPercent = number | `${number}%`;

/** Affinities exclusive to the Persona series */
export type PersonaAffinity = 'Gun' | 'Wind' | 'Psy' | 'Nuke';
/** Affinities exclusive to the mainline Shin Megami Tensei series */
export type SMTAffinity = 'Force';
/** Affinities used by demons and skills */
export type AnyAffinity = 'Phys' | 'Fire' | 'Ice' | 'Elec' | 'Light' | 'Dark' | 'Almighty' | 'Recovery' | 'Ailment' | 'Support' | 'Passive' | 'Special' | SMTAffinity | PersonaAffinity;
/** Affinities used by damage-dealing skills */
export type DamagingAffinity = Exclude<AnyAffinity, 'Recovery' | 'Ailment' | 'Support' | 'Passive' | 'Special'>;
/** A damaging affinity or all damaging affinities */
export type OneOrAllDamagingAffinities = DamagingAffinity | 'All';
/** Affinities that can be a demon's inherit affinity */
export type InheritAffinity = Exclude<AnyAffinity, 'Gun' | 'Passive' | 'Special' | SMTAffinity>;
/** The Light and Dark affinities */
export type LightDark = 'Light' | 'Dark';
/** Affinities used by BoostSkill instances */
export type BoostAffinity = OneOrAllDamagingAffinities | 'Magic' | 'Recovery';
/** Affinities used by BreakSkill instances */
export type BreakAffinity = Exclude<DamagingAffinity, SMTAffinity | 'Almighty'>;
/** Affinities used by DefensiveSkill instances */
export type DefensiveAffinity = Exclude<DamagingAffinity, 'Almighty'> | 'Light/Dark';
/** Affinities used by EvasionSkill instances */
export type EvasionAffinity = OneOrAllDamagingAffinities | 'Crit/Magic' | 'Magic';
/** Affinities used by MiscSkill instances */
export type MiscAffinity = 'Almighty' | 'Recovery' | 'Support' | 'Special' | 'Passive';
/** Affinities used by SetSkill instances */
export type SetAffinity = LightDark | 'Almighty';
/** Affinities used by SMTCounterSkill instances */
export type SMTCounterAffinity = 'Phys' | 'Elec' | 'Dark' | 'Almighty';
/** Affinities used by WallSkill instances */
export type WallAffinity = Exclude<DamagingAffinity, SMTAffinity | 'Phys' | 'Gun' | LightDark | 'Almighty'>;

/** Mainline Persona games */
export type PersonaGame = 'p3' | 'p4' | 'p5';
/** Mainline Shin Megami Tensei games */
export type SMTGame = 'smt3' | 'smt4' | 'smt5';
/** Games that demon data can originate from */
export type AnyGame = PersonaGame | SMTGame;

/** Custom races for demons that originate in Persona games */
export type PersonaRace = 'Persona' | 'Picaro' | 'Treasure';
/** Demons' official races */
export type SMTRace = 'Amatsu' | 'Avatar' | 'Avian' | 'Beast' | 'Brute' | 'Chaos' | 'Deity' | 'Devil' | 'Divine' | 'Dragon' | 'Drake' | 'Element' | 'Enigma' | 'Entity' | 'Fairy' | 'Fallen' | 'Famed' | 'Femme' | 'Fiend' | 'Flight' | 'Food' | 'Foul' | 'Fury' | 'Genma' | 'Godly' | 'Haunt' | 'Herald' | 'Holy' | 'Jaki' | 'Jirae' | 'Kishin' | 'Kunitsu' | 'Lady' | 'Matter' | 'Megami' | 'Meta' | 'Mitama' | 'Nahobino' | 'Night' | 'Nymph' | 'Panagia' | 'Primal' | 'Qadištu' | 'Raptor' | 'Reaper' | 'Snake' | 'Spirit' | 'Tenma' | 'Tree' | 'Tyrant' | 'UMA' | 'Undead' | 'Vermin' | 'Vile' | 'Wargod' | 'Wilder' | 'Wood' | 'Yoma' | 'Zealot' | '???';
/** Demons' races */
export type AnyRace = PersonaRace | SMTRace;

/** The displayed amount that RecoverySkill instances can recover  */
export type RecoveryAmount = 'Slight' | 'Moderate' | 'Half' | 'Full' | '130%';

/** Flags for AilmentSkill instances */
export type AilmentFlag = 'Charm Instakill' | 'Halve Press Turn Icons';

/** Flags for RecoverySkill instances */
export type RecoveryFlag = 'Revive' | 'Summon' | 'Recover HP/MP';

/** Criteria for RegenSkill instances taking effect */
export type RegenCriteria = 'Ambush' | 'Baton Pass' | 'Turn Start';

/** Game series that skill data can originate from */
export type Series = 'persona' | 'smt';

/** Criteria for SiphonSkill instances taking effect */
export type SiphonCriteria = 'Ailment' | 'Weakness/Critical' | 'Drain';

/** The effectiveness of a demon's skills based on the skills' affinities */
export type SkillPotential = Record<Exclude<AnyAffinity, PersonaAffinity | 'Passive' | 'Special'>, number> & { Gun?: number };

/** Skill instances' types */
export type SkillType = 'AILBOOST' | 'AILDEFENSIVE' | 'AILMENT' | 'ATTACK' | 'AUTOBUFF' | 'BARRIER' | 'BARRIERBREAK' | 'BOOST' | 'BREAK' | 'CHARGE' | 'CRIT' | 'CRITBOOST' | 'DEFENSIVE' | 'ENDURE' | 'EVASION' | 'INSTAKILLBOOST' | 'MASTER' | 'MISC' | 'NAVI' | 'PERSONACOUNTER' | 'POSTBATTLE' | 'RECOVERY' | 'REGEN' | 'SET' | 'SIPHON' | 'SMTCOUNTER' | 'SPRING' | 'SUMMON' | 'SUPPORT' | 'SUSCEPTIBILITY' | 'TAUNT' | 'WALL';

/** Stages for a Persona and its evolutions */
export type Stage = 1 | 2 | 3;

/** Effects automatically applied by having a SupportSkill instance */
export type SupportAutoEffect = Barrier | Buff | Charge;

/** Flags for SupportSkill instances */
export type SupportFlag = 'Cure Non-Special Ailments' | 'Reduce HP to 1' | 'Restore MP' | 'Surrounded Only';

/** Demons a skill targets */
export type Target = 'Self' | 'One Ally' | 'One Alive Stocked Ally' | 'One Dead Stocked Ally' | 'One Stocked Ally' | 'All Allies' | 'All Allies and Stock' | 'One Foe' | 'All Foes' | 'Random Foes' | 'All';
/** Demons an AilmentSkill instance targets */
export type AilmentTarget = 'One Foe' | 'All Foes';
/** Demons an AttackSkill instance targets */
export type AttackTarget = 'One Foe' | 'All Foes' | 'Random Foes';
/** Demons an AutoBuffSkill instance targets */
export type AutoBuffTarget = 'Self' | 'All Allies';
/** Demons a BarrierSkill instance targets */
export type BarrierTarget = 'Self' | 'One Ally' | 'All Allies';
/** Demons a ChargeSkill instance targets */
export type ChargeTarget = 'Self' | 'One Ally' | 'All Allies';
/** Demons a CritSkill instance targets */
export type CritTarget = 'One Ally' | 'All Allies' | 'All';
/** Demons a RecoverySkill instance targets */
export type RecoveryTarget = 'One Ally' | 'One Dead Stocked Ally' | 'One Stocked Ally' | 'All Allies' | 'All Allies and Stock';
/** Demons a SetSkill instance targets */
export type SetTarget = 'One Foe' | 'All Foes';
/** Demons a SupportSkill instance targets */
export type SupportTarget = 'Self' | 'One Ally' | 'All Allies' | 'One Foe' | 'All Foes' | 'All';
/** Demons a SusceptibilitySkill instance targets */
export type SusceptibilityTarget = 'One Foe' | 'All';