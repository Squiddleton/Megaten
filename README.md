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
const megaten = require('megaten') // Or, "import megaten from 'megaten'" in ES6. Destructuring syntax is also supported

// All get... functions find by the input's name without attention to capitalization, spaces, punctuation, etc. via the exported "noPunc" utility function
const jack = megaten.getDemon('Jack Frost!!!') // Gets a Demon instance
const bufu = megaten.getSkill('bufu') // Gets a Skill instance

const { demons, skills } = megaten // Gets full arrays of the respective data instances
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
  st: 14,
  ma: 29,
  en: 15,
  ag: 21,
  lu: 21,
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
  weak: [
    'Fire'
  ],
  resist: [],
  null: [],
  drain: [
    'Ice'
  ],
  repel: [],
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
  st: 2,
  vi: 1,
  ma: 3,
  ag: 3,
  lu: 1,
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
    {
      name: 'Media',
      level: 11
    },
    {
      name: 'Lucky Punch',
      level: 13
    },
    {
      name: 'Magaru',
      level: 16
    },
    {
      name: 'Pulinpa',
      level: 19
    },
    {
      name: 'Me Patra',
      level: 21
    },
    {
      name: 'Diarama',
      level: 24
    },
    {
      name: 'Garula',
      level: 26
    },
    {
      name: 'Recarm',
      level: 28
    },
    {
      name: 'Wind Break',
      level: 32
    },
    {
      name: 'Mediarama',
      level: 34
    },
    {
      name: 'Magarula',
      level: 37
    },
    {
      name: 'Miracle Punch',
      level: 40
    },
    {
      name: 'Wind Boost',
      level: 43
    },
    {
      name: 'Samarecarm',
      level: 45
    },
    {
      name: 'Diarahan',
      level: 49
    },
    {
      name: 'Garudyne',
      level: 52
    },
    {
      name: 'Masukunda',
      level: 55
    },
    {
      name: 'Mediarahan',
      level: 58
    },
    {
      name: 'Magarudyne',
      level: 62
    },
    {
      name: 'Wind Amp',
      level: 69
    },
    {
      name: 'Salvation',
      level: 75
    }
  ],
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
  repel: [],
  game: 'p5',
  image: Buffer {...},
  isPersona(): true
  user: 'Morgana',
  stage: 2,
  evoSkill: "Evade Elec",
  evolution: Persona {...},
}
```

The `demons` array contains both Demon and Persona instances. For type-guarding, use `Demon.prototype.isPersona()` which returns `true` for Persona instances and `false` for the base class.

## Skills

Each skill is marked by a type property which groups similar skill instances together. Please see index.d.ts or use IntelliSense for each type's format.

### Example

```javascript
AttackSkill {
  name: 'Ziodyne',
  devName: 'ziodyne',
  affinity: 'Elec',
  type: 'ATTACK',
  unique: false,
  range: 1,
  cost: {
    type: 'MP',
    amount: 35
  },
  power: {
    amount: 215,
    display: 'Heavy'
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
* Skills with major changes to their function (e.g. Taunt in SMTV vs. Taunt in P5) are split into separate skills ("Taunt" vs. "Taunt -Persona-").
* Dashes are used instead of parentheses due to a similar naming scheme used in official song titles (e.g. "Last Surprise -Scramble-").
* Skills with specific uses and few similar skills are placed into a "MISC" type. Their "effect" property lists the skill's description in its last major appearance.
* Typings are designed to be as specific as possible for efficient use.
* Images originate from the best obtainable picture of the demon found at the current time. These will be updated if/when renders are available for many Personas and classic demons.
* Terms with multiple series-dependent names are given the name from SMTV (e.g. Vitality over Endurance, Light over Bless, Seal over Forget). However, Force and Wind remain separated.

## Credits

Atlus retains all rights to the Megami Tensei series. This data originates from the [Megaten Fusion Tool](https://github.com/aqiu384/megaten-fusion-tool), [Megami Tensei Wiki](https://megamitensei.fandom.com/wiki/Megami_Tensei_Wiki), and the videogames themselves.
