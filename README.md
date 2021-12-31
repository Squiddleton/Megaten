# About
Resources from the Megaten series, primarily consisting of the Shin Megami Tensei and Persona franchises.

These lists contain all the demons/Personas and skills from the following games, with more being added over time:
* Persona 5 Strikers
* Persona 5 Royal
* Persona 5
* **(Incomplete)** Persona 4 Golden

# Usage
First, install the package by running the following command in your terminal:
```
npm install megaten@latest
```

After the package is installed, you may use it through methods such as the following:
```javascript
const megaten = require('megaten') // Or, "import megaten from 'megaten'" in es6

// All functions find by the input's name without attention to capitalization, spaces, punctuation, etc.
const jack = megaten.getDemon('Jack Frost!!!') // Gets a Demon instance
const bufu = megaten.getSkill('bufu') // Gets a Skill instance
const regent = megaten.getTreasureDemon('Regent') // Gets a Treasure Demon instance

const { demons, skills, treasureDemons } = megaten // Gets raw JSON arrays of the respective data
```

## Demons
All Personas/demons follow an identical template.

#### Example:
```javascript
{
      "name": "Loki -P5-", // The name of the Persona/demon, with some being named after unique variants in specific games
      "devName": "lokip5", // The name without capitalization, spaces, punctuation, accents, etc.
      "aliases": [
        "loki" // Possible devNames that the Persona/demon is commonly referred to
      ],
      "inherit": "Curse", // The affinity which determines inheritable skills
      "arcana": "Justice", // The means by which all is revealed
      "race": "Persona", // The race of the demon (some are custom if no prior SMT appearances)
      "level": 75, // The base level
      "st": 53, // Strength stat
      "ma": 47, // Magic stat
      "en": 46, // Endurance/Vitality stat
      "ag": 47, // Agility stat
      "lu": 39, // Luck stat
      "learnset": [
        {
          "name": "Fortify Spirit", // The name of the skill
          "level": 0 // The level the skill is learned at, with 0 representing innate
        },
        {
          "name": "Laevateinn",
          "level": 0
        },
        {
          "name": "Megidolaon",
          "level": 0
        },
        {
          "name": "Debilitate",
          "level": 0
        },
        {
          "name": "Riot Gun",
          "level": 0
        },
        {
          "name": "Eigaon",
          "level": 0
        },
        {
          "name": "Attack Master",
          "level": 0
        },
        {
          "name": "Evade Bless",
          "level": 0
        }
      ],
      "evoMove": null, // The name of a skill the Persona will learn upon evolving, or null if none
      "weak": [ // Affinities the Persona/demon is weak to
        "Bless"
      ],
      "resist": [], // Affinities the Persona/demon resists
      "null": [ // Affinities the Persona/demon nullifies
        "Curse"
      ],
      "drain": [], // Affinities the Persona/demon drains
      "repel": [], // Affinities the Persona/demon repels
      "party": "Redacted for spoiler reasons, but not in the package.", // The name of the party member who the Persona belongs to, or null if non-party
      "evo": 2, // The point of evolution for a party member's persona, with 1 being base, 2 being second awakening, and 3 being third awakening (or null if non-party)
      "ultimate": false, // Whether the Persona is the Ultimate Persona of its arcana in the game this data is based on
      "special": false, // Whether the Persona is a result of special fusions (incomplete)
      "game": "p5", // The game that this data originates from
      "evolution": Demon {...}, // The Persona that this evolves into, or null if none
      "image": Buffer // A buffer of an image of the Persona/demon
    }
```

## Skills
Each skill is marked by a type property which groups similar skills together.  Please read skills.ts for examples of the format of each type.

#### Example:
```javascript
{
      "name": "Ziodyne", // The name of the skill
      "devName": "ziodyne", // The name without capitalization, spaces, punctuation, accents, etc.
      "affinity": "Elec", // The affinity/element of the skill
      "type": "ATTACK", // The type of the skill (full list in skills.ts)
      "range": 1, // The range of the skill, with 1 being single-target and 0 being party-wide
      "cost": 12, // The SP cost of magic skills or the HP percentage cost of physical skills
      "power": 320, // The base power of the skill; most are from Persona 4 Golden, with other skills' damage being assumed based off comparisons with known skills
      "display": "Heavy", // The in-game display of a skill's strength
      "min": 1, // The minimum number of times the skill may hit
      "max": 1, // The maximum number of times the skill may hit
      "ailment": [
        {
          "ailment": "Shock", // The name of the ailment which may be inflicted
          "chance": "Low" // The displayed chance that the ailment will be inflicted
        }
      ],
      "crit": null, // Whether the skill has a boosted crit rate (incomplete)
      "unique": false, // Whether the skill is exclusive to specific Personas/demons who learn it
      "downBoost": false, // Whether the skill gains damage when the target is down
      "baton": false, // Whether the skill gains power if used during a baton pass
      "accurate": false, // Whether the skill has high accuracy
      "surround": false, // Whether the skill gains power when the user is surrounded
      "weather": false // Whether the skill gains power under certain weather conditions
    }
```

## Treasure Demons
Treasure Demons, specifically from Persona 5 Royal, are slight variations on the normal Demon class since they lack variation that others have.

#### Example:
```javascript
{
      "name": "Regent",
      "devName": "regent",
      "inherit": "Support",
      "arcana": "Emperor",
      "race": "Treasure",
      "level": 10,
      "hp": 165, // The max HP of the Treasure Demon
      "sp": 93, // The max SP of the Treasure Demon
      "st": 12,
      "ma": 11,
      "en": 10,
      "ag": 10,
      "lu": 10,
      "skills": [ // Skills array are only strings since no Treasure Demon learns skills naturally
        "Maragi",
        "Mabufu",
        "Magaru",
        "Mazio",
        "Mapsi",
        "Mafrei",
        "Makouha",
        "Maeiha"
      ],
      "weak": [
        "Nuke"
      ],
      "resist": [
        "Phys",
        "Gun"
      ],
      "null": [],
      "drain": [],
      "repel": [],
      "image": Buffer // A buffer of an image of the Treasure Demon
    }
```

### Credits
Atlus retains all rights to the Megami Tensei series.  This data originates from the [Megami Tensei Wiki](https://megamitensei.fandom.com/wiki/Megami_Tensei_Wiki).
