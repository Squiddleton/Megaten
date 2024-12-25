import type { SMT5StandardEnemyData } from './dataTypes.js';

export const smt5StandardEnemies: SMT5StandardEnemyData[] = [
	{
		name: 'Adramelech',
		skillPotential: {
			Phys: 1,
			Fire: 6,
			Ice: -5,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 2,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Fallen',
		level: 71,
		hp: 1092,
		stats: {
			st: 57,
			vi: 49,
			ma: 62,
			ag: 50,
			lu: 32
		},
		skills: [
			'Hellish Brand',
			'Power Punch',
			'Agibarion',
			'Mudobarion'
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [
				'Fire'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Chancellor of Hell and supervisor of Satan\'s wardrobe. He has the body of a mule, though he may also sometimes appear as a peacock.\nHe was worshipped by the Assyrians, who occasionally offered him children as sacrifice.',
		itemDrops: [
			'Life Stone',
			'Amrita Shower',
			'Adramelech\'s Essence'
		]
	},
	{
		name: 'Agathion',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: -4,
			Elec: 2,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 2
		},
		race: 'Yoma',
		level: 10,
		hp: 80,
		stats: {
			st: 7,
			vi: 9,
			ma: 14,
			ag: 11,
			lu: 11
		},
		skills: [
			'Zio'
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice',
				'Dark'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'A familiar with no physical body that only appears during the day.\nThere is no consensus on the appearance of an Agathion: it can resemble a human, bird, or animal. They are usually sealed away in bottles or pots but can also be sealed in rings or talismans. The term Agathion is also used as a general term for familiars.',
		itemDrops: [
			'Life Stone',
			'Elec Shard',
			'Agathion\'s Essence'
		]
	},
	{
		name: 'Aitvaras',
		skillPotential: {
			Phys: 0,
			Fire: 3,
			Ice: -3,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 1,
			Recovery: 0,
			Support: 1
		},
		race: 'Drake',
		level: 17,
		hp: 127,
		stats: {
			st: 13,
			vi: 13,
			ma: 16,
			ag: 16,
			lu: 17
		},
		skills: [
			'Mirage Shot'
		],
		resistances: {
			ailments: {
				Poison: 'Resist'
			},
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A fairy in Lithuanian mythology.\nIndoors, it takes the form of a black cat or rooster. Outdoors, it takes the form of a small dragon or a snake with a burning tail. The Aitvaras makes the home it inhabits rich by stealing from its neighbors. It is said that it typically demands an omelette as compensation and is difficult to chase away once it\'s settled into a home. It can, however, be exterminated by shining it with the flame of a candle purified by the church.',
		itemDrops: [
			'Life Stone',
			'Revival Bead',
			'Aitvaras\'s Essence'
		]
	},
	{
		name: 'Andras',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 2,
			Light: -2,
			Dark: 0,
			Almighty: 0,
			Ailment: 1,
			Recovery: 0,
			Support: 2
		},
		race: 'Fallen',
		level: 18,
		hp: 192,
		stats: {
			st: 23,
			vi: 13,
			ma: 12,
			ag: 20,
			lu: 25
		},
		skills: [
			'Poisma',
			'Sukukaja'
		],
		resistances: {
			ailments: {
				Charm: 'Resist'
			},
			weak: [
				'Elec',
				'Light'
			],
			resist: [],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nThe great Marquis of Hell, he appears where there is battle to stoke the hatred within soldiers. He helps defeat the enemies of those who summon him.',
		itemDrops: [
			'Life Stone',
			'Chakra Drop',
			'Andras\'s Essence'
		]
	},
	{
		name: 'Anzu',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: 0,
			Elec: 2,
			Force: -4,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 1
		},
		race: 'Raptor',
		level: 48,
		hp: 557,
		stats: {
			st: 30,
			vi: 35,
			ma: 24,
			ag: 39,
			lu: 26
		},
		skills: [
			'Damascus Claw',
			'Steel Needle'
		],
		resistances: {
			ailments: {
				Sleep: 'Weak',
				Seal: 'Resist',
				Mirage: 'Null'
			},
			weak: [
				'Force'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'An evil deity of Mesopotamian folklore with an eagle\'s body and lion\'s head.\nWhile the god Enlil purified himself, Anzu stole the Tablet of Destinies from him in an attempt to become the chief god.',
		itemDrops: [
			'Life Stone',
			'Elec Gem',
			'Anzu\'s Essence'
		]
	},
	{
		name: 'Atropos',
		skillPotential: {
			Phys: 0,
			Fire: -4,
			Ice: 4,
			Elec: 0,
			Force: 0,
			Light: 3,
			Dark: 0,
			Almighty: 0,
			Ailment: 1,
			Recovery: 0,
			Support: 0
		},
		race: 'Femme',
		level: 64,
		hp: 662,
		stats: {
			st: 28,
			vi: 47,
			ma: 59,
			ag: 41,
			lu: 42
		},
		skills: [
			'Mabufudyne',
			'Hamaon',
			'Slumber Vortex'
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire'
			],
			resist: [
				'Ice'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the three Moirae Sisters in Greek mythology.\nShe cuts the life threads of those whose time has come.',
		itemDrops: [
			'Life Stone',
			'Ice Gem',
			'Atropos\'s Essence'
		]
	},
	{
		name: 'Azumi',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 2,
			Elec: -3,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 1,
			Support: 0
		},
		race: 'Brute',
		level: 11,
		hp: 100,
		stats: {
			st: 11,
			vi: 12,
			ma: 13,
			ag: 14,
			lu: 12
		},
		skills: [
			'Bufu'
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec'
			],
			resist: [
				'Ice'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A water deity of the Azumi, a Japanese seafaring tribe. As such, it can freely control water.\nThe three gods born from Izanagi after he returned from Yomi are said to be the Azumi tribe\'s ancestors.',
		itemDrops: [
			'Life Stone',
			'Ice Shard',
			'Azumi\'s Essence'
		]
	},
	{
		name: 'Baphomet',
		skillPotential: {
			Phys: 0,
			Fire: 1,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: -3,
			Dark: 3,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Vile',
		level: 33,
		hp: 330,
		stats: {
			st: 16,
			vi: 19,
			ma: 39,
			ag: 26,
			lu: 21
		},
		skills: [
			'Maragion',
			'Mudoon'
		],
		resistances: {
			ailments: {
				Poison: 'Weak'
			},
			weak: [
				'Light'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'An idol commonly worshipped by the Knights Templar.\nIt is a demon with the head of a goat.\nThis figure later became the idol of worship for witches as well.',
		itemDrops: [
			'Life Stone',
			'Dark Gem',
			'Baphomet\'s Essence'
		]
	},
	{
		name: 'Basilisk',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 2,
			Elec: -3,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 5,
			Recovery: 0,
			Support: 0
		},
		race: 'Drake',
		level: 31,
		hp: 562,
		stats: {
			st: 31,
			vi: 31,
			ma: 15,
			ag: 21,
			lu: 24
		},
		skills: [
			'Crusher Onslaught',
			'Toxic Cloud'
		],
		resistances: {
			ailments: {
				Poison: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Fire',
				'Ice'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A dark dragon from Northern Africa marked by wings and a crested crown.\nIts name means "king of snakes," and both its breath and gaze are so toxic that they instantly kill any human or animal unfortunate enough to be subjected to them.',
		itemDrops: [
			'Life Stone',
			'Poison Gem',
			'Basilisk\'s Essence'
		]
	},
	{
		name: 'Berith',
		skillPotential: {
			Phys: 2,
			Fire: 2,
			Ice: -3,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 1,
			Support: 0
		},
		race: 'Fallen',
		level: 24,
		hp: 268,
		stats: {
			st: 31,
			vi: 24,
			ma: 18,
			ag: 18,
			lu: 14
		},
		skills: [
			'Pierce Armor',
			'Bloody Glee'
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [
				'Fire',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of Goetia.\nKnown as the Duke of Hell, he rides a gigantic horse and burns those without manners.',
		itemDrops: [
			'Life Stone',
			'Hexagram Trading Card',
			'Berith\'s Essence'
		]
	},
	{
		name: 'Bicorn',
		skillPotential: {
			Phys: 2,
			Fire: 0,
			Ice: 0,
			Elec: -3,
			Force: 0,
			Light: -2,
			Dark: 2,
			Almighty: 0,
			Ailment: 0,
			Recovery: -1,
			Support: 0
		},
		race: 'Wilder',
		level: 14,
		hp: 171,
		stats: {
			st: 17,
			vi: 14,
			ma: 8,
			ag: 13,
			lu: 11
		},
		skills: [
			'Beatdown'
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec',
				'Light'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'An evil creature that looks like a horse with two curving horns.\nIt is said to be the opposite of a Chichevache, but theory speculates that it is actually a mistranslation of "Re\'em," a two-horned beast that appears in the Old Testament.',
		itemDrops: [
			'Life Stone',
			'Bicorn\'s Essence',
			'Bicorn Horn'
		]
	},
	{
		name: 'Black Ooze',
		skillPotential: {
			Phys: 2,
			Fire: -2,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: -2,
			Dark: 0,
			Almighty: 2,
			Ailment: 6,
			Recovery: -3,
			Support: 0
		},
		race: 'Foul',
		level: 33,
		hp: 359,
		stats: {
			st: 24,
			vi: 35,
			ma: 30,
			ag: 15,
			lu: 25
		},
		skills: [
			'Toxic Spray',
			'Life Drain'
		],
		resistances: {
			ailments: {
				Mirage: 'Weak',
				Confusion: 'Weak',
				Charm: 'Weak'
			},
			weak: [
				'Fire',
				'Light'
			],
			resist: [
				'Phys'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'An amoeba-like monster that attacks and eats people.\nSupposedly, it is actually a demon that failed to take form and now roams in search of Magatsushi. It is said that when a Slime\'s ability to absorb Magatsuhi goes out of control, it transforms into a Black Ooze.',
		itemDrops: [
			'Life Stone',
			'Poison Gem',
			'Black Ooze\'s Essence'
		]
	},
	{
		name: 'Bugs',
		skillPotential: {
			Phys: 0,
			Fire: -2,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 5,
			Almighty: 0,
			Ailment: 0,
			Recovery: -4,
			Support: 2
		},
		race: 'Wilder',
		level: 24,
		hp: 244,
		stats: {
			st: 23,
			vi: 19,
			ma: 17,
			ag: 19,
			lu: 27
		},
		skills: [
			'Mamudo',
			'Dormina'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist'
			},
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'A type of goblin from Welsh folklore that eats children who don\'t listen to their parents.\nThey are said to look like humans covered head to toe with hair, and are recognized as an iconic monster that appears at nighttime. They are often spoken of by mothers wishing to discipline their children as noted in the popular phrase, "For naughty kids who disobey, the Bugs will come and surely prey."',
		itemDrops: [
			'Life Stone',
			'Sleep Gem',
			'Bugs\'s Essence'
		]
	},
	{
		name: 'Cait Sith',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 1,
			Force: -3,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 1,
			Support: 1
		},
		race: 'Beast',
		level: 7,
		hp: 93,
		stats: {
			st: 11,
			vi: 8,
			ma: 9,
			ag: 9,
			lu: 7
		},
		skills: [
			'Dia'
		],
		resistances: {
			ailments: {},
			weak: [
				'Force'
			],
			resist: [
				'Elec'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A fae beast from the Scottish highlands whose kingdoms can be found in tree hollows or abandoned houses.\nDog-sized, they have white tufts or hair on their chest, green, intelligent eyes, and are even capable of understanding the human language. Though they usually stick to their territory, some have been known to live with humans as normal black cats. They are generally peaceful, but should a human treat one poorly, they will forcibly take that human to their kingdom.',
		itemDrops: [
			'Life Stone',
			'Chakra Drop',
			'Cait Sith\'s Essence'
		]
	},
	{
		name: 'Cerberus',
		skillPotential: {
			Phys: 3,
			Fire: 4,
			Ice: -5,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Beast',
		level: 64,
		hp: 1382,
		stats: {
			st: 53,
			vi: 59,
			ma: 28,
			ag: 43,
			lu: 30
		},
		skills: [
			'Severing Bite',
			'Power Punch',
			'Fire Breath'
		],
		resistances: {
			ailments: {
				Seal: 'Resist'
			},
			weak: [
				'Ice'
			],
			resist: [],
			null: [],
			drain: [],
			repel: [
				'Fire'
			]
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The guardian hound of Hades in Greek lore.\nIt traditionally has three heads and a snake\'s tail. It was born from Typhon, the giant of wind, and Echidna, the mother of monsters. It is also the older brother of Orthrus.',
		itemDrops: [
			'Life Stone',
			'Fire Gem',
			'Cerberus\'s Essence'
		]
	},
	{
		name: 'Chi You',
		skillPotential: {
			Phys: 4,
			Fire: -5,
			Ice: 4,
			Elec: -5,
			Force: 2,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Tyrant',
		level: 87,
		hp: 2068,
		stats: {
			st: 71,
			vi: 64,
			ma: 62,
			ag: 39,
			lu: 46
		},
		skills: [
			'Yabusame Shot',
			'Glacial Blast',
			'Mazanbarion',
			'High Phys Pleroma'
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire',
				'Elec'
			],
			resist: [],
			null: [
				'Ice'
			],
			drain: [],
			repel: [
				'Force'
			]
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A Chinese god of war, often depicted with a bull\'s head, six or eight arms and four eyes.\nHe invented many weapons and commanded an invincible army. Seeking control of the land, he fought with Huang Di and though he was winning, Huang Di invented something of his own, the South-Pointing Chariot and promptly defeated him. Huang Di then had Chi You\'s head buried thousands of li apart from his body.',
		itemDrops: [
			'Life Stone',
			'Soma',
			'Chi You\'s Essence'
		]
	},
	{
		name: 'Cironnup',
		skillPotential: {
			Phys: 0,
			Fire: 3,
			Ice: 1,
			Elec: 0,
			Force: 0,
			Light: 2,
			Dark: -5,
			Almighty: -2,
			Ailment: 0,
			Recovery: 0,
			Support: 4
		},
		race: 'Holy',
		level: 27,
		hp: 235,
		stats: {
			st: 14,
			vi: 18,
			ma: 20,
			ag: 26,
			lu: 24
		},
		skills: [
			'Ghastfire Rain',
			'Hama'
		],
		resistances: {
			ailments: {},
			weak: [
				'Dark'
			],
			resist: [
				'Fire',
				'Ice',
				'Light'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: '"Fox" in the Ainu tongue. Though "Sumari" is another word for "fox," chironnupu refers to "those who we kill" — which is to say, the various small-to-medium-sized Canidae.\nIt is also a divine beast that alerts people to forthcoming disasters by howling loudly from the mountains.',
		itemDrops: [
			'Life Stone',
			'Light Shard',
			'Cironnup\'s Essence'
		]
	},
	{
		name: 'Clotho',
		skillPotential: {
			Phys: 0,
			Fire: 1,
			Ice: -5,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 1,
			Recovery: 3,
			Support: 2
		},
		race: 'Femme',
		level: 52,
		hp: 577,
		stats: {
			st: 20,
			vi: 42,
			ma: 33,
			ag: 51,
			lu: 30
		},
		skills: [
			'Lullaby',
			'Mediarama',
			'Makarakarn'
		],
		resistances: {
			ailments: {
				Sleep: 'Null'
			},
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the three Moirae Sisters in Greek mythology.\nShe is the spinner of the threads of fate.',
		itemDrops: [
			'Life Stone',
			'Magic Mirror',
			'Clotho\'s Essence'
		]
	},
	{
		name: 'Daemon',
		skillPotential: {
			Phys: 2,
			Fire: 2,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: -4,
			Dark: 2,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Brute',
		level: 7,
		hp: 78,
		stats: {
			st: 11,
			vi: 9,
			ma: 8,
			ag: 9,
			lu: 7
		},
		skills: [
			'Hellish Slash'
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec',
				'Light'
			],
			resist: [
				'Fire'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A low-ranking class of spirits. While the name may conjure up familiar images of "demons" due to Christianity\'s influence, daemons were not strictly associated with good or evil and simply thought to be lesser supernatural beings, sometimes acting as tutelary spirits that guided the souls of men.\nWhat might be considered a demon today would\'ve been called a "cacodaemon" in ancient Greece — that is, an evil spirit. In contrast, their benevolent counterparts were known as "agathodaemons."',
		itemDrops: [
			'Life Stone',
			'Fire Shard',
			'Daemon\'s Essence'
		]
	},
	{
		name: 'Dakini',
		skillPotential: {
			Phys: 2,
			Fire: 3,
			Ice: -4,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 1,
			Recovery: 0,
			Support: -2
		},
		race: 'Femme',
		level: 46,
		hp: 533,
		stats: {
			st: 44,
			vi: 29,
			ma: 22,
			ag: 32,
			lu: 33
		},
		skills: [
			'Fatal Sword',
			'Dark Sword'
		],
		resistances: {
			ailments: {
				Seal: 'Null'
			},
			weak: [
				'Ice',
				'Light'
			],
			resist: [
				'Phys',
				'Fire'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Hindu deities of passion and relations. They are Kali\'s attendants.\nThey eat human flesh and gather at graveyards and crematories each night. Their name means "sky dancer."',
		itemDrops: [
			'Life Stone',
			'Seal Gem',
			'Dakini\'s Essence'
		]
	},
	{
		name: 'Decarabia',
		skillPotential: {
			Phys: 0,
			Fire: 2,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: -4,
			Dark: 3,
			Almighty: 2,
			Ailment: 1,
			Recovery: 0,
			Support: 0
		},
		race: 'Fallen',
		level: 55,
		hp: 483,
		stats: {
			st: 31,
			vi: 33,
			ma: 48,
			ag: 33,
			lu: 41
		},
		skills: [
			'Agidyne',
			'Tetrakarn'
		],
		resistances: {
			ailments: {},
			weak: [
				'Light'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nHe comes in the shape of a star and has vast knowledge of herbs and jewels. He can also control birds at will.',
		itemDrops: [
			'Life Stone',
			'Attack Mirror',
			'Decarabia\'s Essence'
		]
	},
	{
		name: 'Eligor',
		skillPotential: {
			Phys: 3,
			Fire: 2,
			Ice: 0,
			Elec: -3,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 1
		},
		race: 'Fallen',
		level: 37,
		hp: 435,
		stats: {
			st: 38,
			vi: 35,
			ma: 29,
			ag: 24,
			lu: 20
		},
		skills: [
			'Dark Sword',
			'Blight'
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec'
			],
			resist: [
				'Dark'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nHe takes the appearance of a knight and has the power to see things to come. He also possesses great knowledge of many wars.',
		itemDrops: [
			'Life Stone',
			'Fire Gem',
			'Eligor\'s Essence'
		]
	},
	{
		name: 'Fafnir',
		skillPotential: {
			Phys: 4,
			Fire: 0,
			Ice: -3,
			Elec: -3,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 3,
			Recovery: 0,
			Support: 0
		},
		race: 'Drake',
		level: 60,
		hp: 789,
		stats: {
			st: 56,
			vi: 50,
			ma: 23,
			ag: 29,
			lu: 41
		},
		skills: [
			'Mortal Jihad',
			'Toxic Cloud',
			'Poison Adept'
		],
		resistances: {
			ailments: {
				Poison: 'Null'
			},
			weak: [
				'Ice',
				'Elec'
			],
			resist: [
				'Phys'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'An evil dragon of Norse lore, it was vanquished by the hero Siegfried.\nAccording to the Volsunga saga, it was extremely venomous, had legs like snakes, and shook the ground with every step.',
		itemDrops: [
			'Poison Gem',
			'Dragon Scale',
			'Fafnir\'s Essence'
		]
	},
	{
		name: 'Flauros',
		skillPotential: {
			Phys: 2,
			Fire: 4,
			Ice: -6,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 2,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Fallen',
		level: 50,
		hp: 544,
		stats: {
			st: 48,
			vi: 45,
			ma: 24,
			ag: 24,
			lu: 29
		},
		skills: [
			'Damascus Claw',
			'Black Dracostrike'
		],
		resistances: {
			ailments: {
				Sleep: 'Weak'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Dark'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nHe appears as a leopard and can see the past and future. He can control fire, which he uses to burn his adversaries to death.',
		itemDrops: [
			'Life Stone',
			'Fire Gem',
			'Flauros\'s Essence'
		]
	},
	{
		name: 'Forneus',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 4,
			Elec: -5,
			Force: 0,
			Light: -3,
			Dark: 2,
			Almighty: 0,
			Ailment: 2,
			Recovery: 0,
			Support: 2
		},
		race: 'Fallen',
		level: 31,
		hp: 326,
		stats: {
			st: 19,
			vi: 20,
			ma: 26,
			ag: 24,
			lu: 25
		},
		skills: [
			'Mabufula',
			'Ice Breath',
			'Marakunda'
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec',
				'Light'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [
				'Ice'
			],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nHe appears as a great sea monster and is skilled in many languages in addition to being a master of rhetoric.',
		itemDrops: [
			'Life Stone',
			'Ice Gem',
			'Forneus\'s Essence'
		]
	},
	{
		name: 'Fuu-Ki',
		skillPotential: {
			Phys: 2,
			Fire: 0,
			Ice: 0,
			Elec: -5,
			Force: 5,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: -3,
			Support: 1
		},
		race: 'Brute',
		level: 63,
		hp: 648,
		stats: {
			st: 43,
			vi: 42,
			ma: 39,
			ag: 51,
			lu: 40
		},
		skills: [
			'Titanomachia',
			'Zandyne',
			'Force Pleroma'
		],
		resistances: {
			ailments: {
				Charm: 'Weak'
			},
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, it sends hurricanes to blow away its enemies.\nSome say that Fuu-Ki is the original ninja.',
		itemDrops: [
			'Life Stone',
			'Force Gem',
			'Fuu-Ki\'s Essence'
		]
	},
	{
		name: 'Girimekhala',
		skillPotential: {
			Phys: 4,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 1,
			Recovery: -3,
			Support: 2
		},
		race: 'Vile',
		level: 66,
		hp: 759,
		stats: {
			st: 61,
			vi: 40,
			ma: 46,
			ag: 35,
			lu: 38
		},
		skills: [
			'Hell Thrust',
			'Hades Blast',
			'Marakunda'
		],
		resistances: {
			ailments: {
				Sleep: 'Weak',
				Poison: 'Resist'
			},
			weak: [
				'Elec',
				'Force',
				'Light'
			],
			resist: [
				'Dark'
			],
			null: [],
			drain: [],
			repel: [
				'Phys'
			]
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'A giant elephant monster of Sri Lankan mythology.\nIt is typically portrayed as being ridden by Mara, the Evil One. Whoever looks into its evil eye is said to be met with great misfortune.',
		itemDrops: [
			'Life Stone',
			'Chakra Pot',
			'Girimekhala\'s Essence'
		]
	},
	{
		name: 'Hanuman',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: 0,
			Elec: -5,
			Force: 2,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 1
		},
		race: 'Genma',
		level: 46,
		hp: 583,
		stats: {
			st: 44,
			vi: 36,
			ma: 22,
			ag: 29,
			lu: 28
		},
		skills: [
			'Purple Smoke',
			'Wind Dracostrike'
		],
		resistances: {
			ailments: {
				Mirage: 'Weak'
			},
			weak: [
				'Elec'
			],
			resist: [],
			null: [],
			drain: [],
			repel: [
				'Force'
			]
		},
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A hero of Hindu descent. He can transform into anything, fly, and possesses incredible strength.\nHe performed many heroic deeds in the Ramayana and is most always depicted as a monkey.',
		itemDrops: [
			'Life Stone',
			'Muscle Drink',
			'Hanuman\'s Essence'
		]
	},
	{
		name: 'Hecatoncheires',
		skillPotential: {
			Phys: 4,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: -2,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 2,
			Recovery: -4,
			Support: 1
		},
		race: 'Jaki',
		level: 55,
		hp: 665,
		stats: {
			st: 52,
			vi: 52,
			ma: 21,
			ag: 19,
			lu: 32
		},
		skills: [
			'Mortal Jihad',
			'Rampage',
			'Critical Aura'
		],
		resistances: {
			ailments: {
				Mirage: 'Weak',
				Confusion: 'Resist'
			},
			weak: [
				'Force'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'Giants born from Uranus and Gaia in Greek mythology. The name means "those with a hundred arms."\nDuring the war of the Titans, Zeus freed them from the underworld to help him obtain victory.',
		itemDrops: [
			'Life Stone',
			'Balm of Life',
			'Hecatoncheires\'s Essence'
		]
	},
	{
		name: 'Hua Po',
		skillPotential: {
			Phys: 0,
			Fire: 2,
			Ice: -3,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 1,
			Support: 1
		},
		race: 'Jirae',
		level: 31,
		hp: 213,
		stats: {
			st: 12,
			vi: 18,
			ma: 31,
			ag: 28,
			lu: 29
		},
		skills: [
			'Agilao',
			'Maragi'
		],
		resistances: {
			ailments: {
				Mirage: 'Weak'
			},
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Tree spirits in Chinese mythology that are born when three or more people hang themselves from the same tree.\nThey take the form of a beautiful woman in white clothing, however they are much smaller in size than a human. They cannot talk, though they can chirp like birds.',
		itemDrops: [
			'Life Stone',
			'Fire Gem',
			'Hua Po\'s Essence'
		]
	},
	{
		name: 'Incubus',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: -4,
			Force: 1,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 5,
			Recovery: 0,
			Support: -2
		},
		race: 'Night',
		level: 22,
		hp: 194,
		stats: {
			st: 17,
			vi: 18,
			ma: 15,
			ag: 32,
			lu: 17
		},
		skills: [
			'Dream Needle',
			'Marin Karin'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Charm: 'Null'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Force'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A male demon of popular European folklore during medieval ages and the counterpart to the Succubus.\nThey are known to visit women in their sleep and have sex with them. The offspring born from these incidents are said to later become witches and wizards.',
		itemDrops: [
			'Life Stone',
			'Sleep Gem',
			'Incubus\'s Essence'
		]
	},
	{
		name: 'Inugami',
		skillPotential: {
			Phys: 0,
			Fire: 3,
			Ice: -4,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 1,
			Recovery: 1,
			Support: 0
		},
		race: 'Beast',
		level: 24,
		hp: 223,
		stats: {
			st: 16,
			vi: 17,
			ma: 15,
			ag: 25,
			lu: 21
		},
		skills: [
			'Fire Breath'
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice',
				'Light'
			],
			resist: [
				'Dark'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Spirits of dogs said to possess humans in Japanese folklore.\nThose possessed enter a state of "inu-tsuki" and go crazy. Onmyoji, or Japanese sorcerers, summon them to do their will.',
		itemDrops: [
			'Life Stone',
			'Inugami\'s Essence',
			'Inugami Head'
		]
	},
	{
		name: 'Ippon-Datara',
		skillPotential: {
			Phys: 2,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: -3,
			Dark: 0,
			Almighty: 0,
			Ailment: 1,
			Recovery: 0,
			Support: 2
		},
		race: 'Brute',
		level: 17,
		hp: 246,
		stats: {
			st: 16,
			vi: 22,
			ma: 12,
			ag: 11,
			lu: 13
		},
		skills: [
			'Beatdown',
			'Heat Wave'
		],
		resistances: {
			ailments: {},
			weak: [
				'Light'
			],
			resist: [
				'Fire'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A monster with one eye and one leg, said to live deep in the mountains of Kumano, Japan.\nA single footprint measuring 30 cm has been sighted in the snowy mountains.',
		itemDrops: [
			'Life Stone',
			'Revival Bead',
			'Ippon-Datara\'s Essence'
		]
	},
	{
		name: 'Jack Frost',
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
		race: 'Fairy',
		level: 25,
		hp: 200,
		stats: {
			st: 14,
			vi: 15,
			ma: 29,
			ag: 21,
			lu: 21
		},
		skills: [
			'Jack Bufula',
			'Ice Breath'
		],
		resistances: {
			ailments: {
				Charm: 'Weak'
			},
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
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A frost spirit made from ice and snow that appears during the winter and melts away in the spring.\nDo not be fooled by his cute demeanor, however, for Jack Frost is known to freeze people with his cold breath, smiling all the while. Some suggest that he originally looked like an abominable snowman, but may have changed form to appear more approachable and thus more easily lure in his victims.',
		itemDrops: [
			'Life Stone',
			'Ice Gem',
			'Jack Frost\'s Essence'
		]
	},
	{
		name: 'Jack-o\'-Lantern',
		skillPotential: {
			Phys: 0,
			Fire: 5,
			Ice: -5,
			Elec: 0,
			Force: 0,
			Light: -1,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 1
		},
		race: 'Fairy',
		level: 20,
		hp: 168,
		stats: {
			st: 11,
			vi: 12,
			ma: 23,
			ag: 19,
			lu: 18
		},
		skills: [
			'Agilao',
			'Maragi'
		],
		resistances: {
			ailments: {
				Confusion: 'Weak'
			},
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'An Irish spirit typically found in swamps, bogs, or marshes.\nSaid to be spirits of the dead, Jack-o\'-Lanterns appear as floating flames and are known around the world by various names such as "Will-o\'-the-Wisp" and "Hitodama." They are also said to come out at night to startle travelers and make them lose their way.',
		itemDrops: [
			'Life Stone',
			'Fire Shard',
			'Jack-o\'-Lantern\'s Essence'
		]
	},
	{
		name: 'Kaiwan',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: -3,
			Dark: 3,
			Almighty: 0,
			Ailment: 1,
			Recovery: 0,
			Support: 2
		},
		race: 'Night',
		level: 45,
		hp: 435,
		stats: {
			st: 27,
			vi: 27,
			ma: 24,
			ag: 41,
			lu: 38
		},
		skills: [
			'Mamudoon',
			'Makajamaon'
		],
		resistances: {
			ailments: {
				Seal: 'Resist'
			},
			weak: [
				'Light'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A god in Assyrian legend, his name is interchangeable with Sakkut, another incarnation of the star-god, Saturn.',
		itemDrops: [
			'Life Stone',
			'Dark Gem',
			'Kaiwan\'s Essence'
		]
	},
	{
		name: 'Kali',
		skillPotential: {
			Phys: 4,
			Fire: 3,
			Ice: -2,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 2,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: -3
		},
		race: 'Femme',
		level: 76,
		hp: 1384,
		stats: {
			st: 74,
			vi: 62,
			ma: 35,
			ag: 40,
			lu: 43
		},
		skills: [
			'Hell Thrust',
			'Figment Slash',
			'Black Dracostrike'
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice',
				'Force'
			],
			resist: [
				'Light'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: [
				'Dark'
			]
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'The Black One, a symbol of death and destruction.\nShe is said to be another face of Parvati, Shiva\'s consort. Wearing a necklace of human heads, she wields numerous bloody swords, one for each of her many arms. It is said that when Durga, another form of Parvati, was fighting the Asuras, she summoned Kali and defeated the Asura army in an instant.',
		itemDrops: [
			'Life Stone',
			'Chakra Pot',
			'Kali\'s Essence'
		]
	},
	{
		name: 'Kaya-no-Hime',
		skillPotential: {
			Phys: 0,
			Fire: -4,
			Ice: 2,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: -2,
			Recovery: 3,
			Support: 2
		},
		race: 'Jirae',
		level: 21,
		hp: 184,
		stats: {
			st: 10,
			vi: 12,
			ma: 25,
			ag: 18,
			lu: 21
		},
		skills: [
			'Harvest Dance',
			'Bufula'
		],
		resistances: {
			ailments: {
				Poison: 'Weak',
				Sleep: 'Resist',
				Charm: 'Resist'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Ice'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A goddess of grasses in Japanese mythology.\nThe name "Kaya" refers to the grass that was used to build traditional grass-roof houses, highlighting its importance to the people of ancient Japan.',
		itemDrops: [
			'Life Stone',
			'Spirit Drain Gem',
			'Kaya-no-Hime\'s Essence'
		]
	},
	{
		name: 'Kelpie',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: -3,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 3,
			Support: 1
		},
		race: 'Fairy',
		level: 30,
		hp: 247,
		stats: {
			st: 21,
			vi: 22,
			ma: 20,
			ag: 29,
			lu: 24
		},
		skills: [
			'Berserker God',
			'Diarama'
		],
		resistances: {
			ailments: {
				Mirage: 'Null'
			},
			weak: [
				'Force'
			],
			resist: [
				'Ice'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A fairy of Celtic folklore that lives by the water and takes the appearance of a horse.\nThey often drown those who attempt to ride them, but, if tames, they can be valuable mounts.',
		itemDrops: [
			'Life Stone',
			'Mirage Gem',
			'Kelpie\'s Essence'
		]
	},
	{
		name: 'Kin-Ki',
		skillPotential: {
			Phys: 4,
			Fire: 0,
			Ice: 0,
			Elec: 2,
			Force: -4,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: -2,
			Support: 0
		},
		race: 'Brute',
		level: 49,
		hp: 973,
		stats: {
			st: 43,
			vi: 52,
			ma: 27,
			ag: 21,
			lu: 25
		},
		skills: [
			'Berserker God',
			'Deathbound',
			'Retaliate'
		],
		resistances: {
			ailments: {
				Mirage: 'Weak'
			},
			weak: [
				'Force'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, its body is so hard that no weapons can penetrate it.\nIt and its comrades fell into hell through holes that can still be found in Mie Prefecture, Japan (the modern-day Iga Province).',
		itemDrops: [
			'Life Stone',
			'Revival Bead',
			'Kin-Ki\'s Essence'
		]
	},
	{
		name: 'Kodama',
		skillPotential: {
			Phys: 0,
			Fire: -3,
			Ice: -3,
			Elec: 0,
			Force: 2,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 1,
			Recovery: 1,
			Support: 0
		},
		race: 'Jirae',
		level: 6,
		hp: 68,
		stats: {
			st: 6,
			vi: 8,
			ma: 9,
			ag: 8,
			lu: 9
		},
		skills: [
			'Zan'
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire',
				'Ice'
			],
			resist: [
				'Force'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'In Japanese mythology, they are the spirits of plants. They are born from trees that live 100 years.\nIt was once thought that the echoes heard in valleys were actually from Kodama replying.',
		itemDrops: [
			'Life Stone',
			'Force Shard',
			'Kodama\'s Essence'
		]
	},
	{
		name: 'Koppa Tengu',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: -3,
			Force: 3,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 1
		},
		race: 'Yoma',
		level: 24,
		hp: 213,
		stats: {
			st: 18,
			vi: 16,
			ma: 13,
			ag: 27,
			lu: 20
		},
		skills: [
			'Zanma',
			'Mazan'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Force'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'A smaller member of the Tengu race less powerful than other Tengu.\nThey are believed to be an incarnation of an old wolf and are capable of eventually transforming into Karasu Tengu.',
		itemDrops: [
			'Life Stone',
			'Force Shard',
			'Koppa Tengu\'s Essence'
		]
	},
	{
		name: 'Koropokkur',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 4,
			Elec: 0,
			Force: -3,
			Light: 0,
			Dark: -4,
			Almighty: 0,
			Ailment: 0,
			Recovery: 1,
			Support: 3
		},
		race: 'Jirae',
		level: 26,
		hp: 237,
		stats: {
			st: 13,
			vi: 15,
			ma: 27,
			ag: 21,
			lu: 25
		},
		skills: [
			'Bufula',
			'Mabufu',
			'Tarukaja'
		],
		resistances: {
			ailments: {
				Poison: 'Resist'
			},
			weak: [
				'Force',
				'Dark'
			],
			resist: [
				'Light'
			],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Small human-like creatures that have kind, calm personalities.\nOnce coexisting with the Ainu people of Japan, there was a falling out at some point, and they disappeared.',
		itemDrops: [
			'Life Stone',
			'Ice Shard',
			'Koropokkur\'s Essence'
		]
	},
	{
		name: 'Kumbhanda',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: 0,
			Elec: -5,
			Force: 0,
			Light: 0,
			Dark: 2,
			Almighty: 0,
			Ailment: 2,
			Recovery: 0,
			Support: 0
		},
		race: 'Haunt',
		level: 41,
		hp: 448,
		stats: {
			st: 30,
			vi: 27,
			ma: 29,
			ag: 29,
			lu: 29
		},
		skills: [
			'Fatal Sword',
			'Critical Wave',
			'Spirit Drain'
		],
		resistances: {
			ailments: {
				Mirage: 'Weak',
				Poison: 'Resist',
				Confusion: 'Resist',
				Charm: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Dark'
			],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'Demons of Buddhist origin, known for draining the life energy of humans.\nIt is said that they often change shape and take the form of a gourd. They stand three meters tall, with red hair and dark skin, and have the body of a human but the head of a white horse. They once served Rudra, but according to Buddhist scriptures, they now follow Zouchouten of the Four Heavenly Kings.',
		itemDrops: [
			'Life Stone',
			'Life Drain Gem',
			'Kumbhanda\'s Essence'
		]
	},
	{
		name: 'Kurama Tengu',
		skillPotential: {
			Phys: 1,
			Fire: 0,
			Ice: 0,
			Elec: -5,
			Force: 4,
			Light: 2,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Genma',
		level: 39,
		hp: 297,
		stats: {
			st: 28,
			vi: 25,
			ma: 21,
			ag: 36,
			lu: 31
		},
		skills: [
			'Acrobat Kick',
			'Wind Dracostrike'
		],
		resistances: {
			ailments: {
				Charm: 'Weak',
				Seal: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A tengu that is said to have lived in Mt. Kurama in Kyoto.\nThe most powerful and well-known of the tengu, he has the power to fend off disease and bring good fortune. He is also said to have trained Yoshitsune how to fight with a sword when Yoshitsune was still a child. Some believe him to be Bishamonten\'s night form.',
		itemDrops: [
			'Life Stone',
			'Force Gem',
			'Kurama Tengu\'s Essence'
		]
	},
	{
		name: 'Lachesis',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: -5,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 5,
			Recovery: 0,
			Support: 4
		},
		race: 'Femme',
		level: 58,
		hp: 656,
		stats: {
			st: 24,
			vi: 44,
			ma: 39,
			ag: 31,
			lu: 56
		},
		skills: [
			'Makajamaon',
			'Masukukaja',
			'Donum Magici'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confusion: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
			},
			weak: [
				'Force'
			],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the three Moirae Sisters in Greek mythology.\nShe is the apportioner, measuring the thread which determines a person\'s life span.',
		itemDrops: [
			'Life Stone',
			'Chakra Drop',
			'Lachesis\'s Essence'
		]
	},
	{
		name: 'Lamia',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: -3,
			Elec: 3,
			Force: 0,
			Light: -2,
			Dark: 2,
			Almighty: 0,
			Ailment: 3,
			Recovery: -1,
			Support: 0
		},
		race: 'Femme',
		level: 36,
		hp: 335,
		stats: {
			st: 17,
			vi: 20,
			ma: 33,
			ag: 30,
			lu: 29
		},
		skills: [
			'Zionga',
			'Life Drain',
			'Makajama'
		],
		resistances: {
			ailments: {
				Mirage: 'Weak',
				Poison: 'Resist'
			},
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Half-woman, half-snake creatures that appear in Greek mythology and are said to reside in Libya.\nThey supposedly favor the blood of children and young men.',
		itemDrops: [
			'Life Stone',
			'Life Drain Gem',
			'Lamia\'s Essence'
		]
	},
	{
		name: 'Legion',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: -3,
			Dark: 2,
			Almighty: 0,
			Ailment: 2,
			Recovery: -1,
			Support: 0
		},
		race: 'Foul',
		level: 19,
		hp: 182,
		stats: {
			st: 15,
			vi: 18,
			ma: 16,
			ag: 14,
			lu: 15
		},
		skills: [
			'Mudo'
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec',
				'Light'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A demon or horde of demons quoted as saying, "For we are many" in the New Testament.\nThe name comes from the Roman military term for an army unit of 3,000 to 6,000 men.',
		itemDrops: [
			'Life Stone',
			'Dark Shard',
			'Legion\'s Essence'
		]
	},
	{
		name: 'Lilim',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: -3,
			Elec: 3,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 2,
			Recovery: 0,
			Support: 0
		},
		race: 'Night',
		level: 32,
		hp: 292,
		stats: {
			st: 13,
			vi: 18,
			ma: 34,
			ag: 27,
			lu: 26
		},
		skills: [
			'Mazionga',
			'Marin Karin'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Charm: 'Null'
			},
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A demon in female form from Judeo-Christian lore known to tempt sleeping men and attack infants.\nShe is the daughter of the demoness Lilith, who tempted Adam. Like her mother, she drains men of their essence.',
		itemDrops: [
			'Life Stone',
			'Charm Gem',
			'Lilim\'s Essence'
		]
	},
	{
		name: 'Loa',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: -3,
			Dark: 3,
			Almighty: 0,
			Ailment: 4,
			Recovery: 0,
			Support: 0
		},
		race: 'Jaki',
		level: 30,
		hp: 256,
		stats: {
			st: 23,
			vi: 16,
			ma: 31,
			ag: 24,
			lu: 30
		},
		skills: [
			'Toxic Sting'
		],
		resistances: {
			ailments: {
				Poison: 'Null'
			},
			weak: [
				'Light'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'A group of divinities worshipped in voodoo religion.\nOf the many hidden entities mentioned in religious doctrines, the ones that influence human activities in the earthly realm are known by this name. It is said that those aligned with shadow also possess powerful dark magic.',
		itemDrops: [
			'Life Stone',
			'Dark Gem',
			'Loa\'s Essence'
		]
	},
	{
		name: 'Loup-garou',
		skillPotential: {
			Phys: 3,
			Fire: 2,
			Ice: 0,
			Elec: 2,
			Force: 0,
			Light: -4,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Beast',
		level: 54,
		hp: 636,
		stats: {
			st: 33,
			vi: 44,
			ma: 24,
			ag: 49,
			lu: 21
		},
		skills: [
			'Souffle D\'éclair',
			'Severing Bite',
			'Madness Nails'
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice',
				'Light'
			],
			resist: [
				'Fire'
			],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A type of werewolf originating in France. It appears human during the day, but transforms into its beastly form at night, when it has been known to viciously attack humans.\nThey are said to have once been ordinary human beings. However, upon turning into a loup-garou, one cannot regain their humanity ever again.',
		itemDrops: [
			'Life Stone',
			'Revival Bead',
			'Loup-garou\'s Essence'
		]
	},
	{
		name: 'Macabre',
		skillPotential: {
			Phys: 1,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: -3,
			Dark: 1,
			Almighty: 0,
			Ailment: 5,
			Recovery: 0,
			Support: 0
		},
		race: 'Jaki',
		level: 43,
		hp: 484,
		stats: {
			st: 42,
			vi: 34,
			ma: 21,
			ag: 27,
			lu: 25
		},
		skills: [
			'Venom Chaser',
			'Blight',
			'Black Dracostrike'
		],
		resistances: {
			ailments: {
				Confusion: 'Resist',
				Poison: 'Null'
			},
			weak: [
				'Light'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'An evil spirit appearing in medieval oratorios as the grim reaper.\nIt is truly Death itself, with the power to lead humans to their demise in an instant. It is depicted as a skeleton with a black cloak and a sickle to reap human souls in a single stroke. True to its name, it dances the feared Dance of Death, a reminder that all worldly things must someday meet their end.',
		itemDrops: [
			'Life Stone',
			'Poison Gem',
			'Macabre\'s Essence'
		]
	},
	{
		name: 'Mada',
		skillPotential: {
			Phys: 3,
			Fire: 5,
			Ice: -4,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: -3,
			Ailment: 0,
			Recovery: 3,
			Support: 2
		},
		race: 'Vile',
		level: 83,
		hp: 1864,
		stats: {
			st: 64,
			vi: 61,
			ma: 69,
			ag: 42,
			lu: 38
		},
		skills: [
			'Hades Blast',
			'Trisagion',
			'Mediarahan'
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [
				'Fire'
			],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'A giant Asura in Hinduism whose name means "the intoxicator."\nIt is said that the sage Chyavana created it from fire. Mada has the power to swollow its enemies, and even the deity Indra has been said to surrender to its power.',
		itemDrops: [
			'Life Stone',
			'Bead Chain',
			'Mada\'s Essence'
		]
	},
	{
		name: 'Manananggal',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 2,
			Light: -2,
			Dark: 3,
			Almighty: 0,
			Ailment: 2,
			Recovery: 0,
			Support: 0
		},
		race: 'Femme',
		level: 25,
		hp: 200,
		stats: {
			st: 15,
			vi: 14,
			ma: 29,
			ag: 21,
			lu: 21
		},
		skills: [
			'Sanguine Drain',
			'Zanma'
		],
		resistances: {
			ailments: {
				Mirage: 'Resist',
				Charm: 'Resist'
			},
			weak: [
				'Light'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A witch whose lore originated in the Philippines.\nIt masquerades as a beautiful woman during the day but transforms into a blood-sucking monster at night. It has the ability to separate its upper and lower body, and can sprout bat wings from its back to fly in search of humans to suck their blood. It is said that the Manananggal preys on unborn fetuses in particular, using its proboscis-like tongue to open the wombs of pregnant women, wherein it will suck the fetus\' blood, or devour it outright.',
		itemDrops: [
			'Life Stone',
			'Spirit Drain Gem',
			'Manananggal\'s Essence'
		]
	},
	{
		name: 'Mandrake',
		skillPotential: {
			Phys: 0,
			Fire: -3,
			Ice: 0,
			Elec: 1,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 3,
			Recovery: 1,
			Support: 0
		},
		race: 'Yoma',
		level: 6,
		hp: 66,
		stats: {
			st: 6,
			vi: 7,
			ma: 9,
			ag: 11,
			lu: 10
		},
		skills: [
			'Zio'
		],
		resistances: {
			ailments: {
				Mirage: 'Weak'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Elec'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'A magical plant whose roots take the appearance of a human.\nMandrakes are a precious component in potions to heal sicknesses, but obtaining one is notoriously difficult. When pulled from the ground, they let out a bloodcurdling scream, killing anyone unlucky enough to hear it. There are both male and female variations of Mandrakes.',
		itemDrops: [
			'Life Stone',
			'Elec Shard',
			'Mandrake\'s Essence'
		]
	},
	{
		name: 'Mermaid',
		skillPotential: {
			Phys: -2,
			Fire: -2,
			Ice: 3,
			Elec: -4,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 3,
			Recovery: 0,
			Support: 2
		},
		race: 'Femme',
		level: 12,
		hp: 111,
		stats: {
			st: 8,
			vi: 9,
			ma: 17,
			ag: 13,
			lu: 13
		},
		skills: [
			'Stormcaller Song'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist'
			},
			weak: [
				'Fire',
				'Elec'
			],
			resist: [],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Half-woman, half-fish inhabitant of the ocean. Males are called mermen.\nMermaids are regarded as unlucky omens by many fishermen, often foretelling severe storms or poor catches. Legend says they use their voices to charm men, causing them to crash their ships.',
		itemDrops: [
			'Life Stone',
			'Ice Shard',
			'Mermaid\'s Essence'
		]
	},
	{
		name: 'Mishaguji',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 3,
			Force: -6,
			Light: 0,
			Dark: 2,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 1
		},
		race: 'Vile',
		level: 42,
		hp: 514,
		stats: {
			st: 39,
			vi: 31,
			ma: 21,
			ag: 32,
			lu: 25
		},
		skills: [
			'Beatdown',
			'Matarunda'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist'
			},
			weak: [
				'Force',
				'Light'
			],
			resist: [],
			null: [
				'Elec',
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'An indigenous god of the Shinano region from before the forces of Yamato occupied the land.\nSaid to be born from the belief that divine spirits dwelled in rocks and stones.',
		itemDrops: [
			'Life Stone',
			'Bead',
			'Mishaguji\'s Essence'
		]
	},
	{
		name: 'Mokoi',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 2,
			Force: -3,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 2,
			Recovery: 0,
			Support: -1
		},
		race: 'Night',
		level: 16,
		hp: 157,
		stats: {
			st: 15,
			vi: 15,
			ma: 12,
			ag: 11,
			lu: 16
		},
		skills: [
			'Pulinpa',
			'Dustoma'
		],
		resistances: {
			ailments: {},
			weak: [
				'Force'
			],
			resist: [
				'Elec'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A monster from Aboriginal folktales.\nIt lives in a jungle alongside owls and, though it appears human, has an abnormally large head. It also lacks a tongue and therefore cannot speak. Myth tells that these creatures are reincarnations of the "soul of the shadow," and they are even said to engage in intercourse with human women from time to time as well as eat children and fight humans.',
		itemDrops: [
			'Life Stone',
			'Fortune',
			'Mokoi\'s Essence'
		]
	},
	{
		name: 'Mothman',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 1,
			Force: -3,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 4,
			Recovery: 0,
			Support: 0
		},
		race: 'Wilder',
		level: 29,
		hp: 207,
		stats: {
			st: 17,
			vi: 19,
			ma: 15,
			ag: 30,
			lu: 27
		},
		skills: [
			'Zionga',
			'Pulinpa'
		],
		resistances: {
			ailments: {
				Mirage: 'Resist',
				Poison: 'Resist'
			},
			weak: [
				'Force'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'A cryptid sighted in West Virginia from the 1960s to 1980s.\nIt has red, shining eyes and was known for the finlike appendages on both sides of its boy. It has been said to walk on two foot and fly without moving these appendages. It has a keen sense for blood which allows it to easily track its prey. Eyewitnesses say that a UFO was sighted when Mothman appeared, so many believe that it is actually an alien.',
		itemDrops: [
			'Life Stone',
			'Elec Gem',
			'Mothman\'s Essence'
		]
	},
	{
		name: 'Muu Shuwuu',
		skillPotential: {
			Phys: 0,
			Fire: -3,
			Ice: 0,
			Elec: 0,
			Force: 3,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 1,
			Support: 2
		},
		race: 'Raptor',
		level: 38,
		hp: 322,
		stats: {
			st: 16,
			vi: 20,
			ma: 39,
			ag: 31,
			lu: 29
		},
		skills: [
			'Zanma',
			'Mazanma',
			'Tetrakarn'
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'Meaning "evil bird," it is the ghost of a young girl who died without knowing love in Buryat folklore.\nShe seduces travelers, only to crack their heads open and suck out their brains with her beak.',
		itemDrops: [
			'Life Stone',
			'Force Gem',
			'Muu Shuwuu\'s Essence'
		]
	},
	{
		name: 'Naga',
		skillPotential: {
			Phys: 2,
			Fire: -3,
			Ice: 0,
			Elec: 1,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 1
		},
		race: 'Snake',
		level: 27,
		hp: 275,
		stats: {
			st: 28,
			vi: 25,
			ma: 14,
			ag: 20,
			lu: 15
		},
		skills: [
			'Puncture Punch',
			'Heat Wave'
		],
		resistances: {
			ailments: {
				Seal: 'Null'
			},
			weak: [
				'Fire',
				'Force'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Half-snake, half-human, they are divine beings in Hindu lore.\nWorshipped as bringers of fertility, they live in the bottoms of lakes and seas, and enjoy singing and dancing outside of battle.',
		itemDrops: [
			'Life Stone',
			'Revival Bead',
			'Naga\'s Essence'
		]
	},
	{
		name: 'Naga Raja',
		skillPotential: {
			Phys: 3,
			Fire: -3,
			Ice: 1,
			Elec: 3,
			Force: -4,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: -1
		},
		race: 'Snake',
		level: 40,
		hp: 651,
		stats: {
			st: 33,
			vi: 40,
			ma: 28,
			ag: 16,
			lu: 22
		},
		skills: [
			'Ice Breath',
			'Shockbound',
			'Elec Pleroma'
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire',
				'Force'
			],
			resist: [
				'Ice'
			],
			null: [],
			drain: [
				'Elec'
			],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'The king of the Naga, a half-man, half-snake tribe in Hindu lore.\nThe dragon kings of Nanda and Takshaka of Buddhist myth fall into this royal category.',
		itemDrops: [
			'Life Stone',
			'Ice Gem',
			'Naga Raja\'s Essence'
		]
	},
	{
		name: 'Narcissus',
		skillPotential: {
			Phys: -2,
			Fire: -3,
			Ice: 0,
			Elec: 0,
			Force: 4,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 3,
			Recovery: 0,
			Support: 0
		},
		race: 'Jirae',
		level: 38,
		hp: 342,
		stats: {
			st: 18,
			vi: 20,
			ma: 40,
			ag: 29,
			lu: 31
		},
		skills: [
			'Sexy Dance',
			'Tentarafoo',
			'Hellish Mask'
		],
		resistances: {
			ailments: {
				Confusion: 'Resist',
				Charm: 'Null'
			},
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A young man of Greek lore. He rejected the nymph Echo, who faded to a whisper out of despair.\nCursed by Nemesis, he fell in love with his own reflection and wasted away, becoming the flower that now bears his name.',
		itemDrops: [
			'Life Stone',
			'Ox Bezoar',
			'Narcissus\'s Essence'
		]
	},
	{
		name: 'Nebiros',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: -3,
			Light: -3,
			Dark: 4,
			Almighty: 2,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Fallen',
		level: 67,
		hp: 730,
		stats: {
			st: 27,
			vi: 43,
			ma: 67,
			ag: 42,
			lu: 56
		},
		skills: [
			'Mamudoon',
			'Megidola'
		],
		resistances: {
			ailments: {},
			weak: [
				'Force',
				'Light'
			],
			resist: [],
			null: [],
			drain: [],
			repel: [
				'Dark'
			]
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'The general of Hell. He keeps watch over other demons.\nOne of Hell\'s greatest necromancers, he can control souls and corpses.',
		itemDrops: [
			'Life Stone',
			'Dark Gem',
			'Nebiros\'s Essence'
		]
	},
	{
		name: 'Nekomata',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: -5,
			Elec: 0,
			Force: 2,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 2,
			Recovery: 0,
			Support: 0
		},
		race: 'Beast',
		level: 34,
		hp: 302,
		stats: {
			st: 23,
			vi: 20,
			ma: 18,
			ag: 33,
			lu: 29
		},
		skills: [
			'Axel Claw',
			'Beast Eye'
		],
		resistances: {
			ailments: {
				Charm: 'Resist'
			},
			weak: [
				'Ice',
				'Elec'
			],
			resist: [
				'Fire'
			],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Incarnations of long-living cats in Japanese mythology.\nThey can speak to humans and, depending on their power, can do various things. Some can turn into humans, while others can have the dead do their bidding',
		itemDrops: [
			'Life Stone',
			'Confusion Gem',
			'Nekomata\'s Essence'
		]
	},
	{
		name: 'Nue',
		skillPotential: {
			Phys: 1,
			Fire: 0,
			Ice: 0,
			Elec: 4,
			Force: -3,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: -2
		},
		race: 'Wilder',
		level: 49,
		hp: 541,
		stats: {
			st: 47,
			vi: 42,
			ma: 24,
			ag: 31,
			lu: 25
		},
		skills: [
			'Axel Claw',
			'Storm Dracostrike',
			'Beast Eye'
		],
		resistances: {
			ailments: {
				Charm: 'Weak'
			},
			weak: [
				'Force'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'A legendary monster in Japanese mythology. It has the head of a monkey, the body of a tanuki, the arms and legs of a tiger, and the tail of a snake.\nDue to its bizarre appearance, the term "Nue" is sometimes used to describe a person of unknown origins. According to The Tale of Heike, the Nue would come to the emperor\'s palace every night from 2 to 2:30 A.M., shrouded in a dark cloud, where it would howl in a horrific and terrifying manner. However, the warrior Minamoto no Yorimasa eventually shot it down with his bow.',
		itemDrops: [
			'Life Stone',
			'Elec Gem',
			'Nue\'s Essence'
		]
	},
	{
		name: 'Obariyon',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: -3,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 1,
			Support: 1
		},
		race: 'Haunt',
		level: 12,
		hp: 167,
		stats: {
			st: 14,
			vi: 10,
			ma: 9,
			ag: 13,
			lu: 12
		},
		skills: [
			'Sukunda',
			'Sukukaja'
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice',
				'Light'
			],
			resist: [
				'Elec',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A "piggyback monster" of Japan that jumps on the backs of those who walk on wooded paths at night.\nIts weight becomes progressively heavier to the point of being nearly unbearable, but it is said that it will transform into gold coins if you can carry it all the way back home.',
		itemDrops: [
			'Life Stone',
			'Chakra Drop',
			'Obariyon\'s Essence'
		]
	},
	{
		name: 'Oberon',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: -4,
			Force: 3,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 2,
			Support: 2
		},
		race: 'Fairy',
		level: 47,
		hp: 514,
		stats: {
			st: 32,
			vi: 34,
			ma: 32,
			ag: 31,
			lu: 32
		},
		skills: [
			'Zandyne',
			'Diamrita'
		],
		resistances: {
			ailments: {
				Charm: 'Weak'
			},
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The king of the fairies and the husband of Titania.\nHe is quite old, but due to a curse he received when he was young, he remains small yet still beautiful. He often flirts with human women and has earned many a scolding from his wife as a result.',
		itemDrops: [
			'Life Stone',
			'Chakra Drop',
			'Oberon\'s Essence'
		]
	},
	{
		name: 'Ongyo-Ki',
		skillPotential: {
			Phys: 5,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: -4,
			Dark: 0,
			Almighty: 3,
			Ailment: 4,
			Recovery: 0,
			Support: 0
		},
		race: 'Brute',
		level: 78,
		hp: 1536,
		stats: {
			st: 67,
			vi: 70,
			ma: 51,
			ag: 31,
			lu: 53
		},
		skills: [
			'Mist Rush',
			'Megidolaon',
			'Slumber Vortex'
		],
		resistances: {
			ailments: {},
			weak: [
				'Light'
			],
			resist: [
				'Phys',
				'Ice',
				'Force'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, who ruled Iga and Ise during the Heian Period.\nBy suppressing its aura, thereby preventing others from sensing its presence, it can effectively ambush its enemies. Oni have been said to act as liaisons between humans and gods, and the Fudoki holds many records of such exchanges in this region.',
		itemDrops: [
			'Life Stone',
			'Balm of Life',
			'Ongyo-Ki\'s Essence'
		]
	},
	{
		name: 'Oni',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: 0,
			Elec: -2,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: -1,
			Support: 0
		},
		race: 'Brute',
		level: 23,
		hp: 338,
		stats: {
			st: 16,
			vi: 24,
			ma: 12,
			ag: 12,
			lu: 15
		},
		skills: [
			'Heavy Blow',
			'Crusher Onslaught'
		],
		resistances: {
			ailments: {
				Sleep: 'Weak',
				Confusion: 'Weak'
			},
			weak: [
				'Elec',
				'Light'
			],
			resist: [
				'Phys'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A common demon in Japanese mythology. This terrifying and powerful creature is known to raid human villages for food, riches, and women.\nIt is characterized by red skin, horns on its head, long claws, and sharp fangs.',
		itemDrops: [
			'Life Stone',
			'Revival Bead',
			'Oni\'s Essence'
		]
	},
	{
		name: 'Onmoraki',
		skillPotential: {
			Phys: 0,
			Fire: 2,
			Ice: -3,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 1,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Raptor',
		level: 4,
		hp: 60,
		stats: {
			st: 6,
			vi: 8,
			ma: 8,
			ag: 7,
			lu: 6
		},
		skills: [
			'Agi'
		],
		resistances: {
			ailments: {
				Mirage: 'Weak'
			},
			weak: [
				'Ice',
				'Force'
			],
			resist: [
				'Fire'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'A Japanese monster that takes the form of a bird with the face of a man. It produces a sickening chirp and spits a wicked flame.\nIts true identity is a corpse that hasn\'t had a proper memorial service, and it is said to appear before monks who neglect their duties.',
		itemDrops: [
			'Life Stone',
			'Fire Shard',
			'Onmoraki\'s Essence'
		]
	},
	{
		name: 'Orobas',
		skillPotential: {
			Phys: 1,
			Fire: 3,
			Ice: -4,
			Elec: 0,
			Force: 0,
			Light: -2,
			Dark: 2,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 1
		},
		race: 'Beast',
		level: 49,
		hp: 426,
		stats: {
			st: 32,
			vi: 35,
			ma: 47,
			ag: 26,
			lu: 29
		},
		skills: [
			'Agidyne',
			'Mudoon',
			'Megido'
		],
		resistances: {
			ailments: {
				Confusion: 'Null'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Dark'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of 72 demons in Solomon\'s Goetia.\nHe is said to appear as a human with a head of a horse. He answers all questions conerning past, present and future and is both liked and respected by sorcerers. According to legend, he was often summoned by sorcerers seeking to see through lies or predict the future.',
		itemDrops: [
			'Life Stone',
			'Life Drain Gem',
			'Orobas\'s Essence'
		]
	},
	{
		name: 'Orthrus',
		skillPotential: {
			Phys: 3,
			Fire: 3,
			Ice: -5,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: -2,
			Support: 1
		},
		race: 'Beast',
		level: 42,
		hp: 514,
		stats: {
			st: 41,
			vi: 32,
			ma: 21,
			ag: 34,
			lu: 22
		},
		skills: [
			'Fang Breaker',
			'Axel Claw',
			'Fire Dracostrike'
		],
		resistances: {
			ailments: {
				Poison: 'Weak',
				Confusion: 'Resist'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Dark'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The two-headed dog who protected the Titan Geryon\'s red cattle in Greek lore.\nDespite his skill as a guard, Hercules killed him in one blow while performing one of his 12 great labors.',
		itemDrops: [
			'Life Stone',
			'Can of Oden',
			'Orthrus\'s Essence'
		]
	},
	{
		name: 'Ose',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: -3,
			Recovery: 0,
			Support: 3
		},
		race: 'Fallen',
		level: 44,
		hp: 528,
		stats: {
			st: 42,
			vi: 35,
			ma: 21,
			ag: 28,
			lu: 26
		},
		skills: [
			'Critical Slash',
			'Critical Wave',
			'Beast Eye'
		],
		resistances: {
			ailments: {
				Charm: 'Weak'
			},
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Ice',
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nAppearing as half-man and half-beast, it is said that he can change his form according to the desires of the one who summons him, though not for very long.',
		itemDrops: [
			'Life Stone',
			'Revival Bead',
			'Ose\'s Essence'
		]
	},
	{
		name: 'Pazuzu',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: -5,
			Elec: 0,
			Force: 3,
			Light: 0,
			Dark: 1,
			Almighty: 0,
			Ailment: 4,
			Recovery: 0,
			Support: 0
		},
		race: 'Vile',
		level: 52,
		hp: 707,
		stats: {
			st: 31,
			vi: 37,
			ma: 53,
			ag: 40,
			lu: 40
		},
		skills: [
			'Zandyne',
			'Mamudoon',
			'Tentarafoo'
		],
		resistances: {
			ailments: {
				Confusion: 'Resist'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Force'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A demon from Sumerian civilization, he governs the southwestern wind.\nHe has the face of a lion, the body of a human, the wings of a bird, the talons of an eagle, the tail of a scorpion and a curved horn protruding from his forehead. It is said that the wind he blew from the Persian Gulf spread disease throughout the land.',
		itemDrops: [
			'Life Stone',
			'Dark Gem',
			'Pazuzu\'s Essence'
		]
	},
	{
		name: 'Pisaca',
		skillPotential: {
			Phys: 2,
			Fire: -3,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 2,
			Almighty: 0,
			Ailment: 1,
			Recovery: -2,
			Support: 0
		},
		race: 'Haunt',
		level: 31,
		hp: 226,
		stats: {
			st: 24,
			vi: 20,
			ma: 14,
			ag: 30,
			lu: 26
		},
		skills: [
			'Damascus Claw',
			'Fang Breaker'
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire',
				'Light'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A type of demon in Hindu mythology that arises from the vices of men such as criminals, drunkards and adulterers.\nKnown to feast on the flesh of corpses, it is said that it can possess a human by entering through their mouth, where it will plague them until it is driven away through magic or medicine. It is also said that anyone who looks upon one directly is guaranteed to die within nine months.',
		itemDrops: [
			'Life Stone',
			'Spirit Drain Gem',
			'Pisaca\'s Essence'
		]
	},
	{
		name: 'Pixie',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 1,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: -1,
			Recovery: 1,
			Support: 1
		},
		race: 'Fairy',
		level: 2,
		hp: 55,
		stats: {
			st: 2,
			vi: 4,
			ma: 7,
			ag: 8,
			lu: 6
		},
		skills: [
			'Dia'
		],
		resistances: {
			ailments: {
				Confusion: 'Weak'
			},
			weak: [
				'Dark'
			],
			resist: [
				'Force'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A small fairy found in southwestern Britain known for their cheerful nature and love of pranks.\nTheir physical appearance changes from region to region, but their personality is always playful and mischievous. A common prank they like to pull is causing humans to wander in circles. However, they are also known to help farmers from time to time and are generally considered good fairies.',
		itemDrops: [
			'Life Stone',
			'Amrita Soda',
			'Pixie\'s Essence'
		]
	},
	{
		name: 'Poltergeist',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 2,
			Force: -1,
			Light: -2,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 2
		},
		race: 'Haunt',
		level: 25,
		hp: 250,
		stats: {
			st: 17,
			vi: 17,
			ma: 15,
			ag: 25,
			lu: 23
		},
		skills: [
			'Shockbound',
			'Masukunda'
		],
		resistances: {
			ailments: {},
			weak: [
				'Force',
				'Light'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A mischievous spirit known for haunting houses. The name is German in origin, and literally means "noisy ghost."\nIt can do various things, from pulling harmless pranks like making loud noises and moving objects through the air, to dangerous, destructive acts, like starting fires and assaulting people. Poltergeist incidents often occur in homes with children or teenagers, and one theory states that the cause is a child\'s unstable mentality.',
		itemDrops: [
			'Life Stone',
			'Can of Jelly',
			'Poltergeist\'s Essence'
		]
	},
	{
		name: 'Preta',
		skillPotential: {
			Phys: 1,
			Fire: 0,
			Ice: 1,
			Elec: 0,
			Force: 0,
			Light: -3,
			Dark: 3,
			Almighty: 0,
			Ailment: 0,
			Recovery: -1,
			Support: 0
		},
		race: 'Haunt',
		level: 3,
		hp: 57,
		stats: {
			st: 8,
			vi: 6,
			ma: 6,
			ag: 6,
			lu: 5
		},
		skills: [
			'Bestial Bite'
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire',
				'Force',
				'Light'
			],
			resist: [
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'Known as "gaki" in Japanese, they are ghoulish demons of Buddhist lore.\nGreedy humans cast into the preta realm become these. Their hunger is unrelenting and their suffering continues until they are reincarnated.',
		itemDrops: [
			'Life Stone',
			'Spirit Drain Gem',
			'Preta\'s Essence'
		]
	},
	{
		name: 'Queen Medb',
		skillPotential: {
			Phys: 0,
			Fire: 3,
			Ice: 0,
			Elec: -2,
			Force: 2,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 3,
			Recovery: 0,
			Support: 0
		},
		race: 'Night',
		level: 56,
		hp: 534,
		stats: {
			st: 25,
			vi: 30,
			ma: 52,
			ag: 33,
			lu: 49
		},
		skills: [
			'Agidyne',
			'Mazandyne',
			'Fogna'
		],
		resistances: {
			ailments: {
				Poison: 'Weak',
				Sleep: 'Resist',
				Charm: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'The queen of fairies in Celtic mythology.\nSome say she was the inspiration for William Shakespeare\'s Queen Mab, leading many to conclude that she and the fairy queen Titania, Oberon\'s wife, are one and the same. She was known to give mead mixed with her blood to her many consorts.',
		itemDrops: [
			'Life Stone',
			'Mirage Gem',
			'Queen Medb\'s Essence'
		]
	},
	{
		name: 'Rakshasa',
		skillPotential: {
			Phys: 2,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: -1,
			Support: 1
		},
		race: 'Jaki',
		level: 20,
		hp: 174,
		stats: {
			st: 25,
			vi: 19,
			ma: 10,
			ag: 16,
			lu: 14
		},
		skills: [
			'Venom Chaser',
			'Counter'
		],
		resistances: {
			ailments: {
				Sleep: 'Weak'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'Evil spirits that battle the gods in Hindu lore. They also attack humans.\nTheir hideous appearance symbolizes their evil nature, but they can also change shape to fool humans.',
		itemDrops: [
			'Life Stone',
			'Ox Bezoar',
			'Rakshasa\'s Essence'
		]
	},
	{
		name: 'Rangda',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: 0,
			Elec: -5,
			Force: 3,
			Light: -3,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 1,
			Support: 0
		},
		race: 'Femme',
		level: 70,
		hp: 660,
		stats: {
			st: 46,
			vi: 36,
			ma: 59,
			ag: 39,
			lu: 31
		},
		skills: [
			'Nihil Claw',
			'Steel Needle',
			'Wind Breath'
		],
		resistances: {
			ailments: {
				Sleep: 'Weak'
			},
			weak: [
				'Fire',
				'Elec',
				'Light'
			],
			resist: [],
			null: [],
			drain: [],
			repel: [
				'Phys'
			]
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A wicked witch and the symbol of evil in Balinese Hinduism. When women who used magic held a grudge or went down the path of evil, they became this dreadful creature.\nShe spreads plagues, causes natural disasters, curses people, and even uses evil spirits to do her bidding. The holy beast Barong that symbolizes good is her eternal rival. Even if defeated, she will come back to life, and their battle will have no end.',
		itemDrops: [
			'Life Stone',
			'Force Gem',
			'Rangda\'s Essence'
		]
	},
	{
		name: 'Sandman',
		skillPotential: {
			Phys: 1,
			Fire: 0,
			Ice: 0,
			Elec: -3,
			Force: 1,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 3,
			Recovery: 0,
			Support: -1
		},
		race: 'Night',
		level: 8,
		hp: 81,
		stats: {
			st: 11,
			vi: 8,
			ma: 7,
			ag: 12,
			lu: 13
		},
		skills: [
			'Dream Needle'
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec'
			],
			resist: [
				'Force'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A fairy from rural Germany rumored to put people to sleep using the magic sand he carried in his bag.\nIf a victim resisted, he would sit on their eyelids to force them to sleep. It has even been said that "naughty children" who refused to go to sleep would be punished by having their eyes scooped out and taken away, though this is speculated to be a fabrication thought up by German mothers.',
		itemDrops: [
			'Life Stone',
			'Ice Shard',
			'Sandman\'s Essence'
		]
	},
	{
		name: 'Setanta',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: 0,
			Elec: -3,
			Force: 1,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 2
		},
		race: 'Fairy',
		level: 35,
		hp: 315,
		stats: {
			st: 35,
			vi: 25,
			ma: 26,
			ag: 27,
			lu: 20
		},
		skills: [
			'Fatal Sword',
			'Deathbound'
		],
		resistances: {
			ailments: {
				Confusion: 'Weak',
				Seal: 'Resist'
			},
			weak: [
				'Elec',
				'Dark'
			],
			resist: [],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A brave young man in Celtic myth.\nAfter defeating a fierce guard dog, he volunteered to take its place, thus earning himself "Culann\'s Hound" as his nickname.',
		itemDrops: [
			'Life Stone',
			'Chakra Drop',
			'Setanta\'s Essence'
		]
	},
	{
		name: 'Shiki-Ouji',
		skillPotential: {
			Phys: 0,
			Fire: -5,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 2,
			Dark: 2,
			Almighty: 0,
			Ailment: 1,
			Recovery: 0,
			Support: 0
		},
		race: 'Brute',
		level: 29,
		hp: 220,
		stats: {
			st: 19,
			vi: 25,
			ma: 27,
			ag: 19,
			lu: 19
		},
		skills: [
			'Hama',
			'Mudo'
		],
		resistances: {
			ailments: {
				Confusion: 'Weak'
			},
			weak: [
				'Fire',
				'Force'
			],
			resist: [
				'Phys',
				'Light',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A powerful creature often summoned by Japanese sorcerers called onmyoji.\nThey are used both to hurt and to heal, but their true nature is said to be very violent.',
		itemDrops: [
			'Life Stone',
			'Light Shard',
			'Shiki-Ouji\'s Essence'
		]
	},
	{
		name: 'Slime',
		skillPotential: {
			Phys: 1,
			Fire: -3,
			Ice: -3,
			Elec: -3,
			Force: -3,
			Light: -3,
			Dark: 0,
			Almighty: 0,
			Ailment: 3,
			Recovery: 0,
			Support: -1
		},
		race: 'Foul',
		level: 1,
		hp: 47,
		stats: {
			st: 5,
			vi: 6,
			ma: 4,
			ag: 3,
			lu: 4
		},
		skills: [
			'Lunge'
		],
		resistances: {
			ailments: {
				Poison: 'Resist'
			},
			weak: [
				'Fire',
				'Ice',
				'Elec',
				'Force',
				'Light'
			],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A gel-like monster. It is said to be the byproduct of a failed summoning.\nDevoid of its original powers, it is trapped in an incomplete gel form. There are several theories of when the slime first was recorded as a monster. They tend to collect shiny objects.',
		itemDrops: [
			'Life Stone',
			'Slime\'s Essence'
		]
	},
	{
		name: 'Succubus',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 4,
			Elec: 0,
			Force: 0,
			Light: -5,
			Dark: 0,
			Almighty: 0,
			Ailment: 4,
			Recovery: 0,
			Support: 1
		},
		race: 'Night',
		level: 38,
		hp: 372,
		stats: {
			st: 17,
			vi: 20,
			ma: 38,
			ag: 31,
			lu: 29
		},
		skills: [
			'Bufula',
			'Spirit Drain',
			'Masukunda'
		],
		resistances: {
			ailments: {},
			weak: [
				'Light'
			],
			resist: [
				'Fire'
			],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A female demon in popular European folklore during the medieval ages.\nThey are known to visit men in their sleep and have sex with them. And though they appear beautiful in the dream, in reality, they are ugly, old hags.',
		itemDrops: [
			'Life Stone',
			'Charm Gem',
			'Succubus\'s Essence'
		]
	},
	{
		name: 'Sudama',
		skillPotential: {
			Phys: 0,
			Fire: -3,
			Ice: -2,
			Elec: 0,
			Force: 3,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 2,
			Recovery: 0,
			Support: 0
		},
		race: 'Jirae',
		level: 17,
		hp: 130,
		stats: {
			st: 13,
			vi: 14,
			ma: 15,
			ag: 16,
			lu: 14
		},
		skills: [
			'Mazan'
		],
		resistances: {
			ailments: {
				Sleep: 'Weak',
				Confusion: 'Resist'
			},
			weak: [
				'Fire',
				'Ice'
			],
			resist: [],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Earth spirits in Japanese mythology. They are born from ancient trees and boulders.\nThey are not evil but will transform into humans or monsters to warn people not to infiltrate their mountains.',
		itemDrops: [
			'Life Stone',
			'Force Shard',
			'Sudama\'s Essence'
		]
	},
	{
		name: 'Sui-Ki',
		skillPotential: {
			Phys: 2,
			Fire: -5,
			Ice: 4,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 1
		},
		race: 'Brute',
		level: 56,
		hp: 618,
		stats: {
			st: 47,
			vi: 47,
			ma: 41,
			ag: 33,
			lu: 28
		},
		skills: [
			'Fang Breaker',
			'Ice Dracostrike',
			'Marakukaja'
		],
		resistances: {
			ailments: {
				Seal: 'Weak'
			},
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, it can cause floods with the swing of its arms. In the Taiheiki, Ki no Tomoo expelled the oni by reading a Japanese poem.',
		itemDrops: [
			'Life Stone',
			'Ice Gem',
			'Sui-Ki\'s Essence'
		]
	},
	{
		name: 'Throne',
		skillPotential: {
			Phys: 0,
			Fire: 4,
			Ice: -3,
			Elec: 0,
			Force: 0,
			Light: 4,
			Dark: -6,
			Almighty: 0,
			Ailment: 0,
			Recovery: 1,
			Support: 0
		},
		race: 'Divine',
		level: 64,
		hp: 662,
		stats: {
			st: 28,
			vi: 47,
			ma: 54,
			ag: 41,
			lu: 47
		},
		skills: [
			'Maragidyne',
			'Mahamaon',
			'Mediarama'
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice',
				'Dark'
			],
			resist: [],
			null: [
				'Fire',
				'Light'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'The third of the nine orders of angels. Their Hebrew name, Ophan, carries the meaning of "wheel".\nThey are the highest ranking angels to carry a material body and are tasked with carrying the seat of God.',
		itemDrops: [
			'Life Stone',
			'Light Gem',
			'Throne\'s Essence'
		]
	},
	{
		name: 'Titania',
		skillPotential: {
			Phys: -4,
			Fire: 0,
			Ice: 0,
			Elec: 3,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 3,
			Support: 1
		},
		race: 'Fairy',
		level: 57,
		hp: 496,
		stats: {
			st: 25,
			vi: 36,
			ma: 54,
			ag: 35,
			lu: 42
		},
		skills: [
			'Ziodyne',
			'Diarahan'
		],
		resistances: {
			ailments: {
				Confusion: 'Resist',
				Mirage: 'Resist'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Dark'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The queen of the fairies and King Oberon\'s wife. She is based on the Roman goddess Diana and was later imagined as a fairy.\nShe is famously recognized as a queen in William Shakespeare\'s "A Midsummer Night\'s Dream."',
		itemDrops: [
			'Life Stone',
			'Elec Gem',
			'Titania\'s Essence'
		]
	},
	{
		name: 'Tsuchigumo',
		skillPotential: {
			Phys: 1,
			Fire: 0,
			Ice: 0,
			Elec: 2,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: -2,
			Support: 1
		},
		race: 'Jirae',
		level: 13,
		hp: 205,
		stats: {
			st: 16,
			vi: 16,
			ma: 10,
			ag: 9,
			lu: 10
		},
		skills: [
			'Mazio'
		],
		resistances: {
			ailments: {
				Charm: 'Weak',
				Poison: 'Resist'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Elec'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Monsters said to come from the bastardization of certain clans of Japan. The word carries the literal meaning of "dirt spider."\nThose who did not pledge allegiance to the Imperial Court were called this derogatory term because of their short stature and spindly limbs. As time passed, people may have misinterpreted the name for a literal meaning and made them into spiders, or perhaps the manifestations of grudges of those who were persecuted by the Imperial Court.',
		itemDrops: [
			'Life Stone',
			'Revival Bead',
			'Tsuchigumo\'s Essence'
		]
	},
	{
		name: 'Turdak',
		skillPotential: {
			Phys: 2,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: -3,
			Light: 0,
			Dark: 1,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Jaki',
		level: 11,
		hp: 140,
		stats: {
			st: 15,
			vi: 15,
			ma: 7,
			ag: 10,
			lu: 8
		},
		skills: [
			'Gram Slice'
		],
		resistances: {
			ailments: {},
			weak: [
				'Force'
			],
			resist: [
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'An Indian deity that serves Yama, the god of death.\nWhen Yama judges a dead soul to be guilty, Turdak acts as the executioner and drags that soul to hell.',
		itemDrops: [
			'Life Stone',
			'Soda',
			'Turdak\'s Essence'
		]
	},
	{
		name: 'Valkyrie',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: 0,
			Elec: 2,
			Force: -4,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 2
		},
		race: 'Yoma',
		level: 40,
		hp: 469,
		stats: {
			st: 42,
			vi: 32,
			ma: 18,
			ag: 26,
			lu: 24
		},
		skills: [
			'Critical Wave',
			'Storm Dracostrike'
		],
		resistances: {
			ailments: {},
			weak: [
				'Force'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'Daughters of Odin from Norse mythology.\nTheir name means "choosers of the slain." Armed with shining armor and spears, they look for brave warriors to take to Valhalla, so that they may fight in Ragnarok.',
		itemDrops: [
			'Life Stone',
			'Chakra Drop',
			'Valkyrie\'s Essence'
		]
	},
	{
		name: 'Yakshini',
		skillPotential: {
			Phys: 2,
			Fire: 0,
			Ice: 0,
			Elec: -3,
			Force: 2,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Femme',
		level: 30,
		hp: 343,
		stats: {
			st: 31,
			vi: 25,
			ma: 14,
			ag: 24,
			lu: 17
		},
		skills: [
			'Venom Chaser',
			'Counter'
		],
		resistances: {
			ailments: {
				Seal: 'Weak'
			},
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Semi-divine beings in Hindu mythology.\nThough they were once worshipped by the Dravidians as goddesses of the harvest, they became interpreted as demons with the spread of Hinduism and the two clashing ideologies. They are depicted as naked women with voluptuous bodies',
		itemDrops: [
			'Life Stone',
			'Bead',
			'Yakshini\'s Essence'
		]
	},
	{
		name: 'Yamata-no-Orochi',
		skillPotential: {
			Phys: 4,
			Fire: 3,
			Ice: 0,
			Elec: -2,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: -5,
			Recovery: 0,
			Support: 0
		},
		race: 'Snake',
		level: 72,
		hp: 1089,
		stats: {
			st: 66,
			vi: 72,
			ma: 26,
			ag: 33,
			lu: 40
		},
		skills: [
			'Titanomachia',
			'Fire Dracostrike',
			'Dragon Eye'
		],
		resistances: {
			ailments: {
				Sleep: 'Weak',
				Poison: 'Weak',
				Confusion: 'Weak'
			},
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Fire',
				'Ice'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A giant snake with eight heads that the hero Susano-o defeated to save Kushinada-Hime.\nThe legendary sword Ame-no-Murakumo-no-Tsurugi, also known as the "Sword of Kusanagi," was said to have emerged from its belly.',
		itemDrops: [
			'Life Stone',
			'Dragon Scale',
			'Yamata-no-Orochi\'s Essence'
		]
	},
	{
		name: 'Yurlungur',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 3,
			Elec: 2,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: -5,
			Recovery: 1,
			Support: 1
		},
		race: 'Snake',
		level: 50,
		hp: 620,
		stats: {
			st: 34,
			vi: 40,
			ma: 44,
			ag: 23,
			lu: 29
		},
		skills: [
			'Bufudyne',
			'Ziodyne',
			'Diarahan'
		],
		resistances: {
			ailments: {
				Seal: 'Weak'
			},
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'In Oceanian folklore, he is a giant copper python.\nA being that transcends good and evil, he governs the weather and is considered a god of harvest. He is known as the "Rainbow Serpent" because the water in the well he calls home is said to shine like a rainbow.',
		itemDrops: [
			'Life Stone',
			'Ice Gem',
			'Yurlungur\'s Essence'
		]
	},
	{
		name: 'Zhen',
		skillPotential: {
			Phys: 2,
			Fire: -3,
			Ice: 0,
			Elec: 1,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 2,
			Recovery: 0,
			Support: 0
		},
		race: 'Raptor',
		level: 14,
		hp: 109,
		stats: {
			st: 12,
			vi: 11,
			ma: 9,
			ag: 14,
			lu: 16
		},
		skills: [
			'Needle Spray'
		],
		resistances: {
			ailments: {
				Mirage: 'Resist',
				Poison: 'Resist'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'A bird in Chinese mythology said to have poison in its feathers because it eats poisonous snakes.\nDipping a feather into wine will turn it into a deadly poison, able to kill anyone with a single drop.',
		itemDrops: [
			'Life Stone',
			'Elec Shard',
			'Zhen\'s Essence'
		]
	}
];