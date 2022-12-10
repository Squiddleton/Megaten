# Megaten

## About

A fan-made, unofficial collection of demons and skills from the "Megaten" series, primarily consisting of the Shin Megami Tensei and Persona franchises.

This contains the demons/Personas and skills from the following games, with more being added over time:

* Shin Megami Tensei V
* Persona 5/Royal/Strikers
* **(Incomplete)** Persona 4/Golden
* **(Incomplete)** Persona 3/Portable/FES

NOTE: This is **not** a 1:1 database of all past data. Information is adjusted to the latest mainstream release, and more changes are found in the Notes section.

## Usage

This package requires Node.js v14.0.0 or higher.

First, install it by running the following command in your terminal:

```sh-session
npm install megaten
```

After installation, you may use it through methods such as the following:

```javascript
const { Demon, Skill, Persona } = require('megaten') // Supports CommonJS, ES6, star import, and destructuring syntax

// get() functions find by the input's name without attention to capitalization, spaces, punctuation, etc. via the normalize() utility function
const jack = Demon.get('Jack Frost!!!'); // Gets a Demon instance; may also return a Persona instance, typeguarded via Demon.prototype.isPersona()
const bufu = Skill.get('bufu'); // Gets a Skill instance
const zorro = Persona.get('ZORRO!'); // Gets a guaranteed Persona instance

const demonArray = Demon.array; // Gets an array of all demons
const demonMap = Demon.map; // Gets a map of all demons, keyed by their devName properties
// The other structures also have static .array and .map properties
const skillArray = Skill.array;
const personaMap = Persona.map;

// All get() functions take optional arguments that typeguard for nonexistent structures
const nullDemon = Demon.get('Kazuma Kaneko'); // Returns null; typed as "Demon | null"
const errorDemon = Demon.get('Masayuki Doi', true); // Throws a MegatenError; typed as just "Demon"
```

## Demons

Most demons follow an identical template. However, ones that are specifically attached to the Persona series (marked by a 'Persona' race) have additional properties.

### Examples

```javascript
Demon {
  name: 'Jack Frost',
  devName: 'jackfrost',
  aliases: [],
  inherit: 'Ice',
  arcana: 'Magician',
  race: 'Fairy',
  level: 25,
  hp: 119,
  mp: 153,
  stats: {
    st: 14,
    ma: 29,
    vi: 15,
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
  affinities: {
    weak: [
      'Fire'
    ],
    resist: [],
    null: [],
    drain: [
      'Ice'
    ],
    repel: []
  },
  game: 'smt5',
  image: Buffer {...},
  isPersona(): false
}

Persona {
  name: 'Mercurius',
  devName: 'mercurius',
  aliases: [],
  inherit: 'Wind',
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
  affinities: {
    weak: [
      'Elec'
    ],
    resist: [
      'Light'
    ],
    null: [
      'Wind'
    ],
    drain: [],
    repel: []
  },
  game: 'p5',
  image: Buffer {...},
  isPersona(): true,
  user: 'Morgana',
  stage: 2,
  evoSkill: "Evade Elec",
  evolution: Persona {...}
}
```

## Skills

Each skill is marked by a type property which groups similar skill instances together. Refer to the types in [src/skill.ts](src/skill.ts) or use your IDE for each type of skill's format.

### Example

```javascript
AttackSkill {
  name: 'Ziodyne',
  devName: 'ziodyne',
  unique: false,
  affinity: 'Elec',
  type: 'ATTACK',
  range: 1,
  cost: {
    type: 'MP',
    amount: 35
  },
  power: {
    amount: 215,
    display: 'Heavy',
    type: 'Magic'
  },
  min: 1,
  max: 1,
  flags: [],
  ailments: [],
  series: 'smt'
}
```

## Notes

* Attack skills prior to SMTV have their base power adjusted to be proportional to newer damage values. If you need damage values relative to particular games, please check the links in the Credits section.
* Ailment chances prior to SMTV were estimated based on known chances of ailments with similar display chances. This information will be updated if the exact odds are deduced.
* Skills with major changes to their function (e.g. Taunt in SMTV vs. Taunt in P5) are split into separate skills ("Taunt" vs. "Taunt - Persona").
* Dashes are used instead of parentheses due to a similar naming scheme used in official song titles (e.g. "Last Surprise - Scramble").
* Skills with specific uses and few similar skills are placed into a "MISC" type. Their "effect" property lists the skill's description in its last major appearance.
* Typings are designed to be as specific as possible for IntelliSense and TypeScript usage.
* Images originate from the best obtainable picture of the demon found at the current time. These will be updated if/when renders are available for many Personas and classic demons.
* Terms with multiple series-dependent names are given the name from SMTV (e.g. Vitality over Endurance, Light over Bless, Seal over Forget). However, Force and Wind remain separated.
* Kouha/Eiha skills were changed to Hama/Mudo skills since the latter also deal damage in the latest installments.

## Credits

Atlus retains all rights to the Megami Tensei series. This data originates from the [Megaten Fusion Tool](https://github.com/aqiu384/megaten-fusion-tool), [Megami Tensei Wiki](https://megamitensei.fandom.com/wiki/Megami_Tensei_Wiki), and the videogames themselves.
