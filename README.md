# Megaten

## About

A fan-made, unofficial collection of demons and skills from the "Megaten" series, primarily consisting of the Shin Megami Tensei and Persona franchises.

This package currently contains the following data from the games, with more being added over time:

Game | Skills | Demons/Personas | Guests/Party Member Personas | Enemies/Shadows | Bosses
-------- | -------- | -------- | -------- | -------- | --------
Shin Megami Tensei V (Vanilla/Vengeance) | Yes | Yes | No | Yes | Yes
Persona 5 (Vanilla/Royal/Strikers) | Yes | Yes | Yes | No | No
Shin Megami Tensei IV (Vanilla/Apocalypse) | No | Yes | No | No | No
Persona 4 (Vanilla/Golden) | Yes | Yes | Yes | No | No
Persona 3 (Vanilla/FES/Portable) | No | No | Yes | No | No

NOTE: This is **not** a 1:1 database of all past data. Information such as MP amounts and damage values may be adjusted to the latest mainstream release, and more changes are found in the Notes section.

## Usage

This package requires Node.js v14.0.0 or higher.

First, install it by running the following command in your terminal:

```sh-session
npm install megaten
```

After installation, you may use it through methods such as the following:

```javascript
const { Demon, Skill, Persona } = require('megaten'); // Supports CommonJS, ES6, star import, and destructuring syntax

// get() functions find by the input's name without attention to capitalization, spaces, punctuation, etc.
const jack = Demon.get('Jack Frost!!!'); // Gets a Demon instance; may also return a Persona instance, typeguarded via Demon.prototype.isPersona()
const bufu = Skill.get('bufu'); // Gets a Skill instance
const zorro = Persona.get('ZORRO!'); // Gets a guaranteed Persona instance

const demonArray = Demon.array; // Gets an array of all demons
const demonMap = Demon.map; // Gets a map of all demons, keyed by their devName properties
// The other structures also have static .array and .map properties
const skillArray = Skill.array;
const personaMap = Persona.map;

// All get() functions take optional arguments that guard against missing structures
const nullDemon = Demon.get('Kazuma Kaneko'); // Type: Demon | null; returns null
const errorDemon = Demon.get('Masayuki Doi', true); // Type: Demon; throws a MegatenError
```

## Demons

Most demons follow an identical template. However, the Persona subclass (differentiated by the `'Persona'` race) have additional properties.

### Examples

```javascript
Demon {
  name: 'Jack Frost',
  aliases: [],
  devName: 'jackfrost',
  affinities: {
    skillPotential: {
      Phys: 0,
      Fire: -5,
      Ice: 4,
      Elec: 0,
      Force: 0,
      Light: 2,
      Dark: 0,
      Almighty: 0,
      Ailment: 0,
      Recovery: 0,
      Support: 0
    },
    inherit: 'Ice'
  },
  arcana: 'Magician',
  race: 'Fairy',
  level: 25,
  hp: 119,
  mp: 153,
  stats: {
    st: 14,
    vi: 15,
    ma: 29,
    ag: 21,
    lu: 21
  },
  learnset: [
    {
      name: 'Ice Breath',
      level: 0
    },
    {
      name: 'Jack Bufula',
      level: 0
    },
    {
      name: 'Ice Block',
      level: 26
    },
    {
      name: 'Mahama',
      level: 27
    },
    {
      name: 'Resist Light',
      level: 28
    }
  ],
  resistances: {
	Fire: 'Weak',
	Ice: 'Drain',
	Charm: 'Weak'
  },
  game: 'smt5',
  alignment: {
    moral: 'Neutral',
    ethical: 'Neutral'
  },
  lore: 'A frost spirit made from ice and snow that appears during the winter and melts away in the spring ...',
  origin: 'European',
  isPersona(): false,
  toString(): 'Fairy Jack Frost'
}

Persona {
  name: 'Mercurius',
  aliases: [],
  devName: 'mercurius',
  affinities: {
    skillPotential: null,
    inherit: null
  },
  arcana: 'Magician',
  race: 'Persona',
  level: 1,
  hp: null,
  mp: null,
  stats: {
    st: 2,
    vi: 1,
    ma: 3,
    ag: 3,
    lu: 1
  },
  learnset: [
    {
      name: 'Garu',
      level: 0
    },
    {
      name: 'Dia',
      level: 0
    },
    {
      name: 'Patra',
      level: 5
    },
    // ...
  ],
  resistances: {
	Elec: 'Weak',
	Wind: 'Null',
	Light: 'Resist'
  },
  game: 'p5',
  alignment: null,
  lore: 'The Roman god of travelers and thieves ...',
  origin: 'Greco-Roman',
  user: 'Morgana',
  stage: 2,
  evoSkillName: 'Evade Elec',
  isPersona(): false,
  toString(): "Morgana's Mercurius"
  evolution: Persona { name: 'Diego', ... },
  evoSkillName: 'Evade Elec',
  evoSkill: EvasionSkill { name: 'Evade Elec', ... }
}
```

## Skills

Each skill is marked by a type property which groups similar skill instances together. Refer to the types in [src/skill.ts](src/skill.ts) or use your IDE for each type of skill's format.

### Example

```javascript
AttackSkill {
  name: 'Ziodyne',
  aliases: [],
  devName: 'ziodyne',
  unique: false,
  affinity: 'Elec',
  type: 'ATTACK',
  accuracy: 98,
  ailments: [],
  cost: {
    type: 'MP',
    amount: 35
  },
  flags: [],
  max: 1,
  min: 1,
  power: {
    amount: 215,
    display: 'Heavy',
    type: 'Magic'
  },
  range: 'One',
  series: 'smt',
  description: 'Heavy Elec attack to 1 foe.',
  toString(): 'Ziodyne: Heavy Elec attack to 1 foe.'
}
```

## Other Classes

### MegatenError

A `MegatenError` is thrown when a `Structure.get(...)` function with `true` as the second argument is unable to find a matching structure.

```javascript
try {
  Persona.get('Shigenori Soejima', true);
}
catch (e) {
  if (e instanceof MegatenError) {
    console.log({
      name: e.structureName, // 'Shigenori Soejima'
      type: e.structureType // 'Persona'
    });
  }
}
```

### BattleThemes

The `BattleThemes` namespace includes enums containing Spotify links to the battle themes from the enum's respective game.

```javascript
BattleThemes.ShinMegamiTensei5.Destruction; // 'https://open.spotify.com/track/2CmTSrnpy8TBl3fdvcjY6P?si=d5bd93a3a0c84778'
BattleThemes.Persona5.LastSurprise; // 'https://open.spotify.com/track/4cPnNnTMkJ6soUOUzEtmcp?si=01eee74b90ab45a9'
```

### Enemies

The arrays `smt5StandardEnemies` and `smt5Bosses` contain data for Shin Megami Tensei V standard enemies and bosses, respectively. Due to their simplistic nature, each is a normal object rather than a class instance. Bosses have the same structure as standard enemies except for the addition of a `theme` property with their battle theme and an optional `variant` property for special designs of the character, such as Amanozako's "Berserk" variant and Lahmu's "Bound" and "Unbound" variants.

## Notes

* Attack skills prior to SMTV have their base power adjusted to be proportional to newer damage values. If you need damage values relative to particular games, please check the links in the Credits section.
* Ailment chances prior to SMTV were estimated based on known chances of ailments with similar display chances. This information will be updated if the exact odds are deduced.
* Skills with major changes to their function (e.g. Taunt in SMTV vs. Taunt in P5) are split into separate skills ("Taunt" vs. "Taunt - Persona").
* Dashes are used instead of parentheses due to a similar naming scheme used in official song titles (e.g. "Last Surprise - Scramble").
* Skills with specific uses and few similar skills are placed into a "MISC" type.
* Typings are designed to be as specific as possible for IntelliSense and TypeScript usage.
* Terms with multiple series-dependent names are given the name from SMTV (e.g. MP over SP, Vitality over Endurance, Light over Bless, Seal over Forget and Silence). However, Force and Wind remain separated.

## Credits

Atlus retains all rights to the Megami Tensei series. This data originates from the [Megaten Fusion Tool](https://github.com/aqiu384/megaten-fusion-tool), [Megami Tensei Wiki](https://megamitensei.fandom.com/wiki/Megami_Tensei_Wiki), and the videogames themselves.
