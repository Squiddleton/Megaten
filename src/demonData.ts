import type { DemonData, PersonaData } from './dataTypes';

const demonData: Readonly<(DemonData | PersonaData)[]> = [
	{
		name: 'Abaddon',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 2,
				Ice: 0,
				Elec: -5,
				Force: 0,
				Light: 0,
				Dark: 1,
				Almighty: 0,
				Ailment: 3,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Dark'
		},
		arcana: 'Judgement',
		race: 'Tyrant',
		level: 72,
		hp: 479,
		mp: 300,
		stats: {
			st: 52,
			vi: 60,
			ma: 42,
			ag: 35,
			lu: 47
		},
		learnset: [
			{
				name: 'Fogna',
				level: 0
			},
			{
				name: 'Megaton Press',
				level: 0
			},
			{
				name: 'Retaliate',
				level: 0
			},
			{
				name: 'Severing Bite',
				level: 0
			},
			{
				name: 'Safeguard',
				level: 73
			},
			{
				name: 'Great Life Spring',
				level: 74
			},
			{
				name: 'Maragibarion',
				level: 75
			}
		],
		resistances: {
			ailments: {
				Seal: 'Weak',
				Mirage: 'Resist'
			},
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
		game: 'smt5'
	},
	{
		name: 'Abdiel',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 0,
				Ice: 0,
				Elec: 2,
				Force: 2,
				Light: 5,
				Dark: -5,
				Almighty: -4,
				Ailment: -2,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Herald',
		level: 80,
		hp: 535,
		mp: 346,
		stats: {
			st: 70,
			vi: 50,
			ma: 65,
			ag: 55,
			lu: 31
		},
		learnset: [
			{
				name: 'Floral Gust',
				level: 0
			},
			{
				name: 'Light\'s Descent',
				level: 0
			},
			{
				name: 'Myriad Slashes',
				level: 0
			},
			{
				name: 'Narukami',
				level: 81
			},
			{
				name: 'High Light Pleroma',
				level: 82
			},
			{
				name: 'Akashic Arts',
				level: 83
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Dark'
			],
			resist: [
				'Elec',
				'Force'
			],
			null: [],
			drain: [],
			repel: [
				'Light'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Abdiel -Fallen-',
		aliases: [
			'Abdiel'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 4,
				Elec: 0,
				Force: 2,
				Light: -5,
				Dark: 7,
				Almighty: 0,
				Ailment: 0,
				Recovery: -3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fallen',
		level: 89,
		hp: 596,
		mp: 451,
		stats: {
			st: 70,
			vi: 65,
			ma: 85,
			ag: 83,
			lu: 51
		},
		learnset: [
			{
				name: 'Akashic Arts',
				level: 0
			},
			{
				name: 'Fallen Destroyer',
				level: 0
			},
			{
				name: 'Mazanbarion',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			},
			{
				name: 'Glacial Blast',
				level: 90
			},
			{
				name: 'Repel Phys',
				level: 91
			},
			{
				name: 'High Dark Pleroma',
				level: 92
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Null'
			},
			weak: [
				'Light'
			],
			resist: [
				'Ice',
				'Elec',
				'Force'
			],
			null: [],
			drain: [],
			repel: [
				'Dark'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Adramelech',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: 'Hanged',
		race: 'Fallen',
		level: 71,
		hp: 402,
		mp: 310,
		stats: {
			st: 57,
			vi: 39,
			ma: 62,
			ag: 50,
			lu: 32
		},
		learnset: [
			{
				name: 'Agibarion',
				level: 0
			},
			{
				name: 'Hellish Brand',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			},
			{
				name: 'Power Punch',
				level: 0
			},
			{
				name: 'Null Fire',
				level: 72
			},
			{
				name: 'Catastrophe',
				level: 73
			},
			{
				name: 'High Fire Pleroma',
				level: 75
			}
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
		game: 'smt5'
	},
	{
		name: 'Aeros',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: -4,
				Force: 3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 1,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Element',
		level: 12,
		hp: 62,
		mp: 99,
		stats: {
			st: 9,
			vi: 9,
			ma: 17,
			ag: 11,
			lu: 12
		},
		learnset: [
			{
				name: 'Makajama',
				level: 0
			},
			{
				name: 'Zan',
				level: 0
			},
			{
				name: 'Mazan',
				level: 13
			}
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
		game: 'smt5'
	},
	{
		name: 'Agathion',
		aliases: [],
		affinities: {
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
			inherit: 'Elec'
		},
		arcana: 'Chariot',
		race: 'Yoma',
		level: 10,
		hp: 55,
		mp: 93,
		stats: {
			st: 7,
			vi: 9,
			ma: 14,
			ag: 11,
			lu: 11
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Dia',
				level: 11
			},
			{
				name: 'Sukukaja',
				level: 12
			}
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
		game: 'smt5'
	},
	{
		name: 'Agnes',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Priestess',
		race: 'Persona',
		level: 21,
		hp: null,
		mp: null,
		stats: {
			st: 15,
			vi: 14,
			ma: 15,
			ag: 15,
			lu: 11
		},
		learnset: [
			{
				name: 'Frei',
				level: 0
			},
			{
				name: 'Mafrei',
				level: 0
			},
			{
				name: 'Vajra Blast',
				level: 0
			},
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Freila',
				level: 24
			},
			{
				name: 'Energy Shower',
				level: 27
			},
			{
				name: 'Flash Bomb',
				level: 31
			},
			{
				name: 'Dekunda',
				level: 34
			},
			{
				name: 'Defense Master',
				level: 36
			},
			{
				name: 'Mafreila',
				level: 38
			},
			{
				name: 'Mediarama',
				level: 41
			},
			{
				name: 'Nuke Break',
				level: 43
			},
			{
				name: 'Nuke Boost',
				level: 45
			},
			{
				name: 'Marakukaja',
				level: 48
			},
			{
				name: 'Freidyne',
				level: 50
			},
			{
				name: 'Diarahan',
				level: 54
			},
			{
				name: 'Mafreidyne',
				level: 59
			},
			{
				name: 'Mediarahan',
				level: 65
			},
			{
				name: 'Nuke Amp',
				level: 71
			},
			{
				name: 'Atomic Flare',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Psy'
			],
			resist: [
				'Dark'
			],
			null: [
				'Nuke'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Makoto Niijima',
		stage: 3,
		evoSkill: 'Debilitate'
	},
	{
		name: 'Aitvaras',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: null,
		race: 'Drake',
		level: 17,
		hp: 84,
		mp: 112,
		stats: {
			st: 12,
			vi: 12,
			ma: 16,
			ag: 16,
			lu: 17
		},
		learnset: [
			{
				name: 'Mirage Shot',
				level: 0
			},
			{
				name: 'Maragi',
				level: 18
			},
			{
				name: 'Concentrate',
				level: 19
			}
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
		game: 'smt5'
	},
	{
		name: 'Al Azif',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Justice',
		race: 'Persona',
		level: 31,
		hp: null,
		mp: null,
		stats: {
			st: 17,
			vi: 20,
			ma: 23,
			ag: 21,
			lu: 35
		},
		learnset: [
			{
				name: 'Analysis',
				level: 0
			},
			{
				name: 'Subrecover HP',
				level: 38
			},
			{
				name: 'Subrecover SP',
				level: 49
			},
			{
				name: 'Subrecover HP EX',
				level: 58
			},
			{
				name: 'Subrecover SP EX',
				level: 67
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Futaba Sakura',
		stage: 3,
		evoSkill: 'Ultimate Support'
	},
	{
		name: 'Alarune',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Recovery'
		},
		arcana: 'Moon',
		race: 'Wood',
		level: 41,
		hp: null,
		mp: null,
		stats: {
			st: 17,
			vi: 21,
			ma: 35,
			ag: 29,
			lu: 28
		},
		learnset: [
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Energy Shower',
				level: 0
			},
			{
				name: 'Old One',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 43
			},
			{
				name: 'Wind Wall',
				level: 44
			},
			{
				name: 'Null Enervate',
				level: 45
			},
			{
				name: 'Enervate Boost',
				level: 46
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Fire',
				'Ice'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Alice',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -5,
				Dark: 5,
				Almighty: 0,
				Ailment: 3,
				Recovery: -2,
				Support: 0
			},
			inherit: 'Dark'
		},
		arcana: 'Death',
		race: 'Fiend',
		level: 40,
		hp: 189,
		mp: 255,
		stats: {
			st: 7,
			vi: 25,
			ma: 46,
			ag: 30,
			lu: 34
		},
		learnset: [
			{
				name: 'Die For Me!',
				level: 0
			},
			{
				name: 'Lullaby',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Spirit Drain',
				level: 0
			},
			{
				name: 'Dark Pleroma',
				level: 41
			},
			{
				name: 'Mamudoon',
				level: 42
			},
			{
				name: 'Resist Light',
				level: 43
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Light'
			],
			resist: [],
			null: [],
			drain: [
				'Dark'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Alilat',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -6,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 4,
				Ailment: 0,
				Recovery: 3,
				Support: 3
			},
			inherit: 'Ice'
		},
		arcana: 'Empress',
		race: 'Lady',
		level: 81,
		hp: 410,
		mp: 418,
		stats: {
			st: 24,
			vi: 75,
			ma: 68,
			ag: 50,
			lu: 61
		},
		learnset: [
			{
				name: 'Donum Gladi',
				level: 0
			},
			{
				name: 'Donum Magici',
				level: 0
			},
			{
				name: 'Mediarahan',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 82
			},
			{
				name: 'Tetrakarn',
				level: 83
			},
			{
				name: 'Energy Drain',
				level: 84
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
				Sleep: 'Null',
				Poison: 'Null',
				Seal: 'Null'
			},
			weak: [],
			resist: [
				'Light',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Amanozako',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -4,
				Ice: -4,
				Elec: 4,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: 3,
				Ailment: 0,
				Recovery: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Genma',
		level: 76,
		hp: 407,
		mp: 450,
		stats: {
			st: 26,
			vi: 40,
			ma: 70,
			ag: 63,
			lu: 59
		},
		learnset: [
			{
				name: 'Energy Drain',
				level: 0
			},
			{
				name: 'Heavenly Counter',
				level: 0
			},
			{
				name: 'Maziobarion',
				level: 0
			},
			{
				name: 'Mediarahan',
				level: 0
			},
			{
				name: 'Zanbarion',
				level: 77
			},
			{
				name: 'Almighty Pleroma',
				level: 78
			},
			{
				name: 'Thunder Reign',
				level: 79
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire',
				'Ice'
			],
			resist: [
				'Light'
			],
			null: [
				'Force',
				'Dark'
			],
			drain: [],
			repel: [
				'Elec'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Amaterasu',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Priestess',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		stats: {
			st: 8,
			vi: 11,
			ma: 15,
			ag: 8,
			lu: 10
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Maragi',
				level: 0
			},
			{
				name: 'Media',
				level: 16
			},
			{
				name: 'Agilao',
				level: 21
			},
			{
				name: 'Recarm',
				level: 26
			},
			{
				name: 'Fire Break',
				level: 30
			},
			{
				name: 'Diarama',
				level: 33
			},
			{
				name: 'Maragion',
				level: 39
			},
			{
				name: 'Mediarama',
				level: 43
			},
			{
				name: 'Fire Boost',
				level: 45
			},
			{
				name: 'Agidyne',
				level: 51
			},
			{
				name: 'Diarahan',
				level: 55
			},
			{
				name: 'Samarecarm',
				level: 59
			},
			{
				name: 'Mediarahan',
				level: 65
			},
			{
				name: 'Maragidyne',
				level: 68
			},
			{
				name: 'Salvation',
				level: 74
			},
			{
				name: 'Fire Amp',
				level: 76
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [
				'Elec'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Yukiko Amagi',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Ame-no-Uzume',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 0,
				Ice: 0,
				Elec: 2,
				Force: -3,
				Light: 2,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 1,
				Support: 2
			},
			inherit: 'Ice'
		},
		arcana: 'Lovers',
		race: 'Megami',
		level: 22,
		hp: 99,
		mp: 139,
		stats: {
			st: 11,
			vi: 14,
			ma: 26,
			ag: 19,
			lu: 20
		},
		learnset: [
			{
				name: 'Hama',
				level: 0
			},
			{
				name: 'Media',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 23
			},
			{
				name: 'Mazio',
				level: 24
			},
			{
				name: 'Resist Light',
				level: 25
			}
		],
		resistances: {
			ailments: {},
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
		game: 'smt5'
	},
	{
		name: 'Amon',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 6,
				Ice: -6,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 4
			},
			inherit: null
		},
		arcana: null,
		race: 'Tyrant',
		level: 82,
		hp: 619,
		mp: 329,
		stats: {
			st: 69,
			vi: 74,
			ma: 64,
			ag: 32,
			lu: 46
		},
		learnset: [
			{
				name: 'Abyssal Mask',
				level: 0
			},
			{
				name: 'Madness Nails',
				level: 0
			},
			{
				name: 'Megido Flame',
				level: 0
			},
			{
				name: 'Nihil Claw',
				level: 0
			},
			{
				name: 'Great Life Spring',
				level: 83
			},
			{
				name: 'Debilitate',
				level: 84
			},
			{
				name: 'Trisagion',
				level: 85
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [
				'Phys',
				'Light',
				'Dark'
			],
			null: [],
			drain: [
				'Fire'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Anahita',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -2,
				Ice: 4,
				Elec: -6,
				Force: 0,
				Light: 2,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Megami',
		level: 29,
		hp: 141,
		mp: 199,
		stats: {
			st: 14,
			vi: 24,
			ma: 32,
			ag: 22,
			lu: 22
		},
		learnset: [
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Hellish Spurt',
				level: 0
			},
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Mana Spring',
				level: 30
			},
			{
				name: 'Matarunda',
				level: 31
			},
			{
				name: 'Hamaon',
				level: 32
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Resist',
				Confuse: 'Resist'
			},
			weak: [
				'Fire',
				'Elec'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [
				'Ice'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Ananta',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 4,
				Elec: 2,
				Force: -4,
				Light: 2,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Nuke'
		},
		arcana: 'Councillor',
		race: 'Dragon',
		level: 59,
		hp: 384,
		mp: 206,
		stats: {
			st: 55,
			vi: 56,
			ma: 24,
			ag: 29,
			lu: 34
		},
		learnset: [
			{
				name: 'Ice Dracostrike',
				level: 0
			},
			{
				name: 'Purple Smoke',
				level: 0
			},
			{
				name: 'Storm Dracostrike',
				level: 0
			},
			{
				name: 'Ice Pleroma',
				level: 60
			},
			{
				name: 'Titanomachia',
				level: 61
			},
			{
				name: 'Murderous Glee',
				level: 62
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force',
				'Dark'
			],
			resist: [],
			null: [
				'Ice',
				'Elec',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Anat',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Priestess',
		race: 'Persona',
		level: 21,
		hp: null,
		mp: null,
		stats: {
			st: 15,
			vi: 14,
			ma: 15,
			ag: 15,
			lu: 11
		},
		learnset: [
			{
				name: 'Frei',
				level: 0
			},
			{
				name: 'Mafrei',
				level: 0
			},
			{
				name: 'Vajra Blast',
				level: 0
			},
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Freila',
				level: 24
			},
			{
				name: 'Energy Shower',
				level: 27
			},
			{
				name: 'Flash Bomb',
				level: 31
			},
			{
				name: 'Dekunda',
				level: 34
			},
			{
				name: 'Defense Master',
				level: 36
			},
			{
				name: 'Mafreila',
				level: 38
			},
			{
				name: 'Mediarama',
				level: 41
			},
			{
				name: 'Nuke Break',
				level: 43
			},
			{
				name: 'Nuke Boost',
				level: 45
			},
			{
				name: 'Marakukaja',
				level: 48
			},
			{
				name: 'Freidyne',
				level: 50
			},
			{
				name: 'Diarahan',
				level: 54
			},
			{
				name: 'Mafreidyne',
				level: 59
			},
			{
				name: 'Mediarahan',
				level: 65
			},
			{
				name: 'Nuke Amp',
				level: 71
			},
			{
				name: 'Atomic Flare',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Psy'
			],
			resist: [
				'Dark'
			],
			null: [
				'Nuke'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Makoto Niijima',
		stage: 2,
		evoSkill: 'Evade Psy'
	},
	{
		name: 'Andras',
		aliases: [],
		affinities: {
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
			inherit: 'Ice'
		},
		arcana: 'Devil',
		race: 'Fallen',
		level: 18,
		hp: 92,
		mp: 108,
		stats: {
			st: 13,
			vi: 13,
			ma: 12,
			ag: 20,
			lu: 19
		},
		learnset: [
			{
				name: 'Poisma',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Critical Wave',
				level: 19
			},
			{
				name: 'Bouncing Claw',
				level: 20
			},
			{
				name: 'Zanma',
				level: 21
			}
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
		game: 'smt5'
	},
	{
		name: 'Angel',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 3,
				Dark: -4,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 2
			},
			inherit: 'Light'
		},
		arcana: 'Justice',
		race: 'Divine',
		level: 10,
		hp: 59,
		mp: 103,
		stats: {
			st: 6,
			vi: 8,
			ma: 16,
			ag: 12,
			lu: 12
		},
		learnset: [
			{
				name: 'Hama',
				level: 0
			},
			{
				name: 'Humble Blessing',
				level: 0
			},
			{
				name: 'Patra',
				level: 11
			},
			{
				name: 'Recarm',
				level: 13
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force',
				'Dark'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Anubis',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 4,
				Dark: 4,
				Almighty: 0,
				Ailment: 0,
				Recovery: 1,
				Support: 0
			},
			inherit: 'Almighty'
		},
		arcana: 'Judgement',
		race: 'Avatar',
		level: 41,
		hp: 184,
		mp: 240,
		stats: {
			st: 15,
			vi: 22,
			ma: 45,
			ag: 31,
			lu: 34
		},
		learnset: [
			{
				name: 'Mahama',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 42
			},
			{
				name: 'Donum Gladi',
				level: 43
			},
			{
				name: 'Light Block',
				level: 44
			}
		],
		resistances: {
			ailments: {
				Seal: 'Resist'
			},
			weak: [
				'Force'
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
		game: 'smt5'
	},
	{
		name: 'Anzu',
		aliases: [],
		affinities: {
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
			inherit: 'Wind'
		},
		arcana: 'Hierophant',
		race: 'Raptor',
		level: 48,
		hp: 272,
		mp: 176,
		stats: {
			st: 39,
			vi: 32,
			ma: 24,
			ag: 45,
			lu: 26
		},
		learnset: [
			{
				name: 'Damascus Claw',
				level: 0
			},
			{
				name: 'Steel Needle',
				level: 0
			},
			{
				name: 'Zionga',
				level: 49
			},
			{
				name: 'Masukukaja',
				level: 50
			},
			{
				name: 'Me Patra',
				level: 51
			}
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
		game: 'smt5'
	},
	{
		name: 'Apsaras',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -3,
				Ice: 2,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 1,
				Support: 1
			},
			inherit: 'Ice'
		},
		arcana: 'Priestess',
		race: 'Yoma',
		level: 16,
		hp: 76,
		mp: 118,
		stats: {
			st: 9,
			vi: 11,
			ma: 19,
			ag: 17,
			lu: 15
		},
		learnset: [
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Mabufu',
				level: 0
			},
			{
				name: 'Patra',
				level: 17
			},
			{
				name: 'Tarunda',
				level: 18
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Weak',
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
		game: 'smt5'
	},
	{
		name: 'Aquans',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -4,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 1,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Element',
		level: 15,
		hp: 72,
		mp: 109,
		stats: {
			st: 8,
			vi: 11,
			ma: 20,
			ag: 13,
			lu: 15
		},
		learnset: [
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Poisma',
				level: 0
			},
			{
				name: 'Mabufu',
				level: 16
			}
		],
		resistances: {
			ailments: {},
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
		game: 'smt5'
	},
	{
		name: 'Ara Mitama',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Nuke'
		},
		arcana: 'Chariot',
		race: 'Mitama',
		level: 30,
		hp: null,
		mp: null,
		stats: {
			st: 20,
			vi: 20,
			ma: 18,
			ag: 20,
			lu: 19
		},
		learnset: [
			{
				name: 'Miracle Punch',
				level: 0
			},
			{
				name: 'Freila',
				level: 0
			},
			{
				name: 'Taunt - Persona',
				level: 0
			},
			{
				name: 'Rebellion',
				level: 31
			},
			{
				name: 'Marakunda',
				level: 32
			},
			{
				name: 'Rage Boost',
				level: 34
			},
			{
				name: 'Matarukaja',
				level: 35
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [
				'Phys'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Arahabaki',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -4,
				Ice: -2,
				Elec: -3,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 3,
				Ailment: 0,
				Recovery: 0,
				Support: 3
			},
			inherit: 'Dark'
		},
		arcana: 'Hermit',
		race: 'Kunitsu',
		level: 62,
		hp: 290,
		mp: 317,
		stats: {
			st: 27,
			vi: 37,
			ma: 58,
			ag: 34,
			lu: 52
		},
		learnset: [
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 0
			},
			{
				name: 'Great Life Spring',
				level: 63
			},
			{
				name: 'Debilitate',
				level: 64
			},
			{
				name: 'Boon Boost',
				level: 65
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire',
				'Ice',
				'Elec',
				'Force'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [
				'Phys'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Archangel',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 1,
				Fire: 1,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: -5,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Light'
		},
		arcana: 'Justice',
		race: 'Divine',
		level: 18,
		hp: 102,
		mp: 114,
		stats: {
			st: 15,
			vi: 14,
			ma: 16,
			ag: 18,
			lu: 16
		},
		learnset: [
			{
				name: 'Hama',
				level: 0
			},
			{
				name: 'Heat Wave',
				level: 0
			},
			{
				name: 'Tarunda',
				level: 19
			},
			{
				name: 'Critical Slash',
				level: 20
			},
			{
				name: 'Agilao',
				level: 21
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec',
				'Dark'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Ardha',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Temperance',
		race: 'Deity',
		level: 84,
		hp: null,
		mp: null,
		stats: {
			st: 54,
			vi: 55,
			ma: 56,
			ag: 54,
			lu: 40
		},
		learnset: [
			{
				name: 'God\'s Hand',
				level: 0
			},
			{
				name: 'Cosmic Flare',
				level: 0
			},
			{
				name: 'Invigorate 3',
				level: 0
			},
			{
				name: 'Agneyastra',
				level: 87
			},
			{
				name: 'Auto-Masuku',
				level: 88
			},
			{
				name: 'Fortified Moxy',
				level: 89
			},
			{
				name: 'Salvation',
				level: 90
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [
				'Phys'
			],
			null: [
				'Ice',
				'Elec'
			],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Ares',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Phys'
		},
		arcana: 'Chariot',
		race: 'Fury',
		level: 25,
		hp: null,
		mp: null,
		stats: {
			st: 18,
			vi: 20,
			ma: 15,
			ag: 15,
			lu: 14
		},
		learnset: [
			{
				name: 'Gale Slash',
				level: 0
			},
			{
				name: 'Counter - Persona',
				level: 0
			},
			{
				name: 'Dodge Wind',
				level: 27
			},
			{
				name: 'Rampage',
				level: 28
			},
			{
				name: 'Dekaja',
				level: 29
			},
			{
				name: 'Charge',
				level: 30
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Phys'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Ariadne',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Fortune',
		race: 'Persona',
		level: 30,
		hp: null,
		mp: null,
		stats: {
			st: 23,
			vi: 20,
			ma: 19,
			ag: 17,
			lu: 18
		},
		learnset: [
			{
				name: 'Beast Weaver',
				level: 0
			},
			{
				name: 'Apt Pupil',
				level: 0
			},
			{
				name: 'Miracle Punch',
				level: 0
			},
			{
				name: 'Attack Master',
				level: 31
			},
			{
				name: 'Fortified Moxy',
				level: 32
			},
			{
				name: 'Evade Phys',
				level: 34
			},
			{
				name: 'Charge',
				level: 36
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Psy'
			],
			resist: [
				'Gun',
				'Light'
			],
			null: [
				'Nuke'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Labrys',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Ariadne Picaro',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Fortune',
		race: 'Picaro',
		level: 42,
		hp: null,
		mp: null,
		stats: {
			st: 36,
			vi: 29,
			ma: 23,
			ag: 24,
			lu: 21
		},
		learnset: [
			{
				name: 'Beast Weaver',
				level: 0
			},
			{
				name: 'Apt Pupil',
				level: 0
			},
			{
				name: 'Miracle Punch',
				level: 0
			},
			{
				name: 'Auto-Mataru',
				level: 43
			},
			{
				name: 'Heat Up',
				level: 44
			},
			{
				name: 'Evade Phys',
				level: 46
			},
			{
				name: 'Charge',
				level: 48
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Psy'
			],
			resist: [
				'Gun',
				'Light'
			],
			null: [
				'Nuke'
			],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Arioch',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 0,
				Ice: 5,
				Elec: -7,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 2,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Tyrant',
		level: 75,
		hp: 474,
		mp: 324,
		stats: {
			st: 69,
			vi: 61,
			ma: 47,
			ag: 35,
			lu: 42
		},
		learnset: [
			{
				name: 'Bufubarion',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Hell Thrust',
				level: 0
			},
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Mabufubarion',
				level: 76
			},
			{
				name: 'Megaton Press',
				level: 77
			},
			{
				name: 'High Ice Pleroma',
				level: 79
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec'
			],
			resist: [
				'Force',
				'Dark'
			],
			null: [],
			drain: [],
			repel: [
				'Ice'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Arsène',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Dark'
		},
		arcana: 'Fool',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		stats: {
			st: 2,
			vi: 2,
			ma: 2,
			ag: 3,
			lu: 1
		},
		learnset: [
			{
				name: 'Mudo',
				level: 0
			},
			{
				name: 'Cleave',
				level: 2
			},
			{
				name: 'Sukunda',
				level: 4
			},
			{
				name: 'Dream Needle',
				level: 5
			},
			{
				name: 'Adverse Resolve',
				level: 7
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice',
				'Light'
			],
			resist: [
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'P5 Protagonist',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Artemis',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 5,
				Fire: -4,
				Ice: 3,
				Elec: 3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 1,
				Recovery: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Megami',
		level: 37,
		hp: 211,
		mp: 189,
		stats: {
			st: 36,
			vi: 24,
			ma: 31,
			ag: 28,
			lu: 23
		},
		learnset: [
			{
				name: 'Astral Saintstrike',
				level: 0
			},
			{
				name: 'Headcrush',
				level: 0
			},
			{
				name: 'Matarukaja',
				level: 0
			},
			{
				name: 'Somersault',
				level: 0
			},
			{
				name: 'Mabufula',
				level: 38
			},
			{
				name: 'Lullaby',
				level: 39
			},
			{
				name: 'Ziodyne',
				level: 41
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [
				'Ice',
				'Elec'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Artemisia',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Empress',
		race: 'Persona',
		level: 18,
		hp: null,
		mp: null,
		stats: {
			st: 11,
			vi: 11,
			ma: 16,
			ag: 12,
			lu: 11
		},
		learnset: [
			{
				name: 'Analysis',
				level: 0
			},
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Mabufu',
				level: 0
			},
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Marin Karin',
				level: 0
			},
			{
				name: 'Bufula',
				level: 21
			},
			{
				name: 'Diarama',
				level: 25
			},
			{
				name: 'Spirit Drain',
				level: 27
			},
			{
				name: 'Tentarafoo',
				level: 32
			},
			{
				name: 'Mabufula',
				level: 42
			},
			{
				name: 'Ice Boost',
				level: 45
			},
			{
				name: 'Concentrate',
				level: 50
			},
			{
				name: 'Bufudyne',
				level: 55
			},
			{
				name: 'Diarahan',
				level: 58
			},
			{
				name: 'Ice Break',
				level: 61
			},
			{
				name: 'Mabufudyne',
				level: 71
			},
			{
				name: 'Ice Amp',
				level: 76
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p3',
		user: 'Mitsuru Kirijo',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Astarte',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Empress',
		race: 'Persona',
		level: 36,
		hp: null,
		mp: null,
		stats: {
			st: 27,
			vi: 22,
			ma: 25,
			ag: 22,
			lu: 21
		},
		learnset: [
			{
				name: 'Psio',
				level: 0
			},
			{
				name: 'Mapsio',
				level: 0
			},
			{
				name: 'Triple Down',
				level: 0
			},
			{
				name: 'Patra',
				level: 0
			},
			{
				name: 'Fast Heal',
				level: 0
			},
			{
				name: 'Psy Break',
				level: 0
			},
			{
				name: 'Tentarafoo',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 38
			},
			{
				name: 'Psy Boost',
				level: 42
			},
			{
				name: 'Makarakarn',
				level: 44
			},
			{
				name: 'Climate Decorum',
				level: 48
			},
			{
				name: 'Psiodyne',
				level: 52
			},
			{
				name: 'Gun Boost',
				level: 54
			},
			{
				name: 'One-shot Kill',
				level: 58
			},
			{
				name: 'Me Patra',
				level: 60
			},
			{
				name: 'Mapsiodyne',
				level: 64
			},
			{
				name: 'Gun Amp',
				level: 68
			},
			{
				name: 'Psy Amp',
				level: 73
			},
			{
				name: 'Heat Riser',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Nuke'
			],
			resist: [
				'Ice'
			],
			null: [
				'Psy'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Haru Okumura',
		stage: 2,
		evoSkill: 'Evade Nuke'
	},
	{
		name: 'Asterius',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Fortune',
		race: 'Persona',
		level: 56,
		hp: null,
		mp: null,
		stats: {
			st: 43,
			vi: 32,
			ma: 43,
			ag: 32,
			lu: 25
		},
		learnset: [
			{
				name: 'Titanomachia - Persona',
				level: 0
			},
			{
				name: 'Maragidyne',
				level: 0
			},
			{
				name: 'Burn Boost',
				level: 0
			},
			{
				name: 'Auto-Mataru',
				level: 57
			},
			{
				name: 'Fire Amp',
				level: 59
			},
			{
				name: 'Tetrakarn',
				level: 60
			},
			{
				name: 'Gigantomachia',
				level: 62
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [
				'Fire',
				'Psy'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Shadow Labrys',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Asterius Picaro',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Fortune',
		race: 'Picaro',
		level: 62,
		hp: null,
		mp: null,
		stats: {
			st: 46,
			vi: 36,
			ma: 46,
			ag: 36,
			lu: 29
		},
		learnset: [
			{
				name: 'Titanomachia - Persona',
				level: 0
			},
			{
				name: 'Maragidyne',
				level: 0
			},
			{
				name: 'Burn Boost',
				level: 0
			},
			{
				name: 'Auto-Masuku',
				level: 63
			},
			{
				name: 'Fire Amp',
				level: 65
			},
			{
				name: 'Makarakarn',
				level: 66
			},
			{
				name: 'Gigantomachia',
				level: 68
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [
				'Fire',
				'Psy'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Asura',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 5,
				Ice: -4,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 3,
				Ailment: 0,
				Recovery: -4,
				Support: 0
			},
			inherit: 'Nuke'
		},
		arcana: 'Sun',
		race: 'Fury',
		level: 84,
		hp: 543,
		mp: 382,
		stats: {
			st: 80,
			vi: 73,
			ma: 53,
			ag: 52,
			lu: 53
		},
		learnset: [
			{
				name: 'Agibarion',
				level: 0
			},
			{
				name: 'Critical Aura',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Power Punch',
				level: 0
			},
			{
				name: 'Megaton Press',
				level: 85
			},
			{
				name: 'Freikugel',
				level: 87
			},
			{
				name: 'High Phys Pleroma',
				level: 88
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [
				'Dark'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: [
				'Fire'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Atavaka',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 0,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: 2,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Phys'
		},
		arcana: 'Faith',
		race: 'Deity',
		level: 54,
		hp: 328,
		mp: 201,
		stats: {
			st: 48,
			vi: 42,
			ma: 41,
			ag: 26,
			lu: 25
		},
		learnset: [
			{
				name: 'Fatal Sword',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'White Dracostrike',
				level: 0
			},
			{
				name: 'Light Pleroma',
				level: 55
			},
			{
				name: 'Mahamaon',
				level: 56
			},
			{
				name: 'Retaliate',
				level: 57
			}
		],
		resistances: {
			ailments: {
				Seal: 'Weak'
			},
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Athena',
		aliases: [
			'Pallas Athena'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Chariot',
		race: 'Persona',
		level: 46,
		hp: null,
		mp: null,
		stats: {
			st: 33,
			vi: 29,
			ma: 27,
			ag: 29,
			lu: 27
		},
		learnset: [
			{
				name: 'Akashic Arts',
				level: 0
			},
			{
				name: 'Rising Slash',
				level: 0
			},
			{
				name: 'Marakukaja',
				level: 0
			},
			{
				name: 'Diarahan',
				level: 47
			},
			{
				name: 'Matarukaja',
				level: 48
			},
			{
				name: 'Auto-Maraku',
				level: 50
			},
			{
				name: 'Samarecarm',
				level: 51
			},
			{
				name: 'Megaton Raid',
				level: 52
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Phys'
			],
			null: [
				'Gun'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Aigis',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Athena Picaro',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Chariot',
		race: 'Picaro',
		level: 50,
		hp: null,
		mp: null,
		stats: {
			st: 35,
			vi: 31,
			ma: 30,
			ag: 32,
			lu: 29
		},
		learnset: [
			{
				name: 'Akashic Arts',
				level: 0
			},
			{
				name: 'Rising Slash',
				level: 0
			},
			{
				name: 'Marakukaja',
				level: 0
			},
			{
				name: 'Diarahan',
				level: 51
			},
			{
				name: 'Matarukaja',
				level: 52
			},
			{
				name: 'Auto-Mataru',
				level: 54
			},
			{
				name: 'Samarecarm',
				level: 55
			},
			{
				name: 'Megaton Raid',
				level: 56
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Phys'
			],
			null: [
				'Gun'
			],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Atropos',
		aliases: [],
		affinities: {
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
			inherit: 'Elec'
		},
		arcana: 'Fortune',
		race: 'Femme',
		level: 64,
		hp: 312,
		mp: 328,
		stats: {
			st: 28,
			vi: 44,
			ma: 59,
			ag: 41,
			lu: 42
		},
		learnset: [
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'Slumber Vortex',
				level: 0
			},
			{
				name: 'Mana Aid',
				level: 65
			},
			{
				name: 'Null Ice',
				level: 66
			},
			{
				name: 'Bufubarion',
				level: 67
			}
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
		game: 'smt5'
	},
	{
		name: 'Attis',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 2,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -4,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 0
			},
			inherit: 'Fire'
		},
		arcana: 'Hanged',
		race: 'Kishin',
		level: 27,
		hp: 149,
		mp: 129,
		stats: {
			st: 28,
			vi: 18,
			ma: 24,
			ag: 21,
			lu: 15
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Recarm',
				level: 0
			},
			{
				name: 'Venom Chaser',
				level: 0
			},
			{
				name: 'Fire Block',
				level: 28
			},
			{
				name: 'Berserker God',
				level: 29
			},
			{
				name: 'Endure',
				level: 30
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Weak'
			},
			weak: [
				'Dark'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Azumi',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: 'Hermit',
		race: 'Brute',
		level: 11,
		hp: 68,
		mp: 77,
		stats: {
			st: 10,
			vi: 10,
			ma: 12,
			ag: 13,
			lu: 12
		},
		learnset: [
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Scratch Dance',
				level: 12
			},
			{
				name: 'Mabufu',
				level: 13
			}
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
		game: 'smt5'
	},
	{
		name: 'Baal',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 3,
				Ice: -5,
				Elec: 5,
				Force: 2,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Ailment: 4,
				Recovery: -3,
				Support: 0
			},
			inherit: 'Wind'
		},
		arcana: 'Emperor',
		race: 'Deity',
		level: 93,
		hp: 578,
		mp: 476,
		stats: {
			st: 74,
			vi: 76,
			ma: 98,
			ag: 65,
			lu: 67
		},
		learnset: [
			{
				name: 'Makarakarn',
				level: 0
			},
			{
				name: 'Maragibarion',
				level: 0
			},
			{
				name: 'Tentarafoo',
				level: 0
			},
			{
				name: 'Ziobarion',
				level: 0
			},
			{
				name: 'Floral Gust',
				level: 94
			},
			{
				name: 'Maziobarion',
				level: 95
			},
			{
				name: 'Drain Force',
				level: 96
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [
				'Fire',
				'Force'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: [
				'Elec'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Baal Zebul',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Ice'
		},
		arcana: 'Moon',
		race: 'Tyrant',
		level: 77,
		hp: null,
		mp: null,
		stats: {
			st: 48,
			vi: 49,
			ma: 60,
			ag: 40,
			lu: 41
		},
		learnset: [
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Old One',
				level: 0
			},
			{
				name: 'Tentarafoo',
				level: 78
			},
			{
				name: 'Maziodyne',
				level: 79
			},
			{
				name: 'Mudo Boost',
				level: 80
			},
			{
				name: 'Stagnant Air',
				level: 82
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
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
		game: 'p4'
	},
	{
		name: 'Baphomet',
		aliases: [],
		affinities: {
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
			inherit: 'Almighty'
		},
		arcana: 'Devil',
		race: 'Vile',
		level: 33,
		hp: 142,
		mp: 180,
		stats: {
			st: 16,
			vi: 19,
			ma: 34,
			ag: 26,
			lu: 26
		},
		learnset: [
			{
				name: 'Maragion',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Mamudo',
				level: 34
			},
			{
				name: 'Dark Pleroma',
				level: 35
			},
			{
				name: 'Dark Block',
				level: 36
			}
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
		game: 'smt5'
	},
	{
		name: 'Barong',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 0,
				Ice: 0,
				Elec: 4,
				Force: -3,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Elec'
		},
		arcana: 'Emperor',
		race: 'Avatar',
		level: 60,
		hp: 346,
		mp: 233,
		stats: {
			st: 46,
			vi: 46,
			ma: 33,
			ag: 39,
			lu: 40
		},
		learnset: [
			{
				name: 'Damascus Claw',
				level: 0
			},
			{
				name: 'Maziodyne',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 0
			},
			{
				name: 'High Restore',
				level: 61
			},
			{
				name: 'Elec Block',
				level: 62
			},
			{
				name: 'Null Force',
				level: 63
			}
		],
		resistances: {
			ailments: {
				Poison: 'Resist'
			},
			weak: [
				'Force',
				'Dark'
			],
			resist: [],
			null: [
				'Elec',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Basilisk',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: 'Sun',
		race: 'Drake',
		level: 31,
		hp: 190,
		mp: 114,
		stats: {
			st: 26,
			vi: 31,
			ma: 15,
			ag: 21,
			lu: 24
		},
		learnset: [
			{
				name: 'Crusher Onslaught',
				level: 0
			},
			{
				name: 'Toxic Cloud',
				level: 0
			},
			{
				name: 'Fogna',
				level: 32
			},
			{
				name: 'Curse Siphon',
				level: 33
			},
			{
				name: 'Taunt',
				level: 34
			}
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
		game: 'smt5'
	},
	{
		name: 'Beelzebub',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 2,
				Elec: 4,
				Force: -6,
				Light: -2,
				Dark: 6,
				Almighty: 0,
				Ailment: 0,
				Recovery: -4,
				Support: 2
			},
			inherit: 'Dark'
		},
		arcana: 'Devil',
		race: 'Tyrant',
		level: 95,
		hp: 570,
		mp: 517,
		stats: {
			st: 65,
			vi: 75,
			ma: 76,
			ag: 92,
			lu: 92
		},
		learnset: [
			{
				name: 'Death Flies',
				level: 0
			},
			{
				name: 'Debilitate',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			},
			{
				name: 'Thunder Reign',
				level: 0
			},
			{
				name: 'Ice Age',
				level: 96
			},
			{
				name: 'Drain Dark',
				level: 97
			},
			{
				name: 'Boon Boost EX',
				level: 98
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null'
			},
			weak: [
				'Force'
			],
			resist: [
				'Ice',
				'Light'
			],
			null: [
				'Dark'
			],
			drain: [
				'Elec'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Belial',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 6,
				Ice: -7,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 2,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Dark'
		},
		arcana: 'Devil',
		race: 'Tyrant',
		level: 92,
		hp: 650,
		mp: 391,
		stats: {
			st: 96,
			vi: 90,
			ma: 75,
			ag: 61,
			lu: 50
		},
		learnset: [
			{
				name: 'Hell Thrust',
				level: 0
			},
			{
				name: 'Mamudobarion',
				level: 0
			},
			{
				name: 'Maragibarion',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			},
			{
				name: 'Myriad Slashes',
				level: 93
			},
			{
				name: 'Ragnarok',
				level: 94
			},
			{
				name: 'Drain Fire',
				level: 96
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Fire',
				'Force',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Belphegor',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 4,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 4,
				Almighty: 0,
				Ailment: 0,
				Recovery: -3,
				Support: 1
			},
			inherit: 'Ice'
		},
		arcana: 'Tower',
		race: 'Tyrant',
		level: 44,
		hp: 225,
		mp: 190,
		stats: {
			st: 31,
			vi: 39,
			ma: 34,
			ag: 20,
			lu: 28
		},
		learnset: [
			{
				name: 'Mabufula',
				level: 0
			},
			{
				name: 'Marakukaja',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 45
			},
			{
				name: 'Mamudoon',
				level: 46
			},
			{
				name: 'Makarakarn',
				level: 47
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire',
				'Light'
			],
			resist: [
				'Phys',
				'Elec'
			],
			null: [
				'Ice',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Berith',
		aliases: [],
		affinities: {
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
			inherit: 'Support'
		},
		arcana: 'Hierophant',
		race: 'Fallen',
		level: 24,
		hp: 144,
		mp: 101,
		stats: {
			st: 26,
			vi: 24,
			ma: 13,
			ag: 18,
			lu: 14
		},
		learnset: [
			{
				name: 'Bloody Glee',
				level: 0
			},
			{
				name: 'Pierce Armor',
				level: 0
			},
			{
				name: 'Critical Slash',
				level: 25
			},
			{
				name: 'Agilao',
				level: 26
			},
			{
				name: 'Critical Wave',
				level: 27
			}
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
		game: 'smt5'
	},
	{
		name: 'Bicorn',
		aliases: [],
		affinities: {
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
			inherit: 'Wind'
		},
		arcana: 'Hermit',
		race: 'Wilder',
		level: 14,
		hp: 88,
		mp: 76,
		stats: {
			st: 18,
			vi: 14,
			ma: 8,
			ag: 13,
			lu: 11
		},
		learnset: [
			{
				name: 'Beatdown',
				level: 0
			},
			{
				name: 'Charge',
				level: 15
			},
			{
				name: 'Beast Eye',
				level: 16
			}
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
		game: 'smt5'
	},
	{
		name: 'Bishamonten',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 5,
				Fire: 5,
				Ice: -4,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Nuke'
		},
		arcana: 'Hierophant',
		race: 'Kishin',
		level: 58,
		hp: 344,
		mp: 262,
		stats: {
			st: 49,
			vi: 41,
			ma: 45,
			ag: 28,
			lu: 33
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Deathbound',
				level: 0
			},
			{
				name: 'Matarukaja',
				level: 0
			},
			{
				name: 'Puncture Punch',
				level: 0
			},
			{
				name: 'Fire Block',
				level: 59
			},
			{
				name: 'Maragidyne',
				level: 60
			},
			{
				name: 'Abyssal Mask',
				level: 61
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Fire',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Black Frost',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: -4,
				Dark: 4,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Ice'
		},
		arcana: 'Fool',
		race: 'Night',
		level: 44,
		hp: 255,
		mp: 204,
		stats: {
			st: 38,
			vi: 37,
			ma: 33,
			ag: 26,
			lu: 28
		},
		learnset: [
			{
				name: 'Black Dracostrike',
				level: 0
			},
			{
				name: 'Ice Dracostrike',
				level: 0
			},
			{
				name: 'Mabufula',
				level: 0
			},
			{
				name: 'Matarunda',
				level: 0
			},
			{
				name: 'Endure',
				level: 45
			},
			{
				name: 'Blinding Strike',
				level: 46
			},
			{
				name: 'Dark Block',
				level: 47
			}
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
			repel: [
				'Dark'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Black Ooze',
		aliases: [],
		affinities: {
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
			inherit: 'Dark'
		},
		arcana: 'Moon',
		race: 'Foul',
		level: 33,
		hp: 217,
		mp: 119,
		stats: {
			st: 23,
			vi: 35,
			ma: 21,
			ag: 15,
			lu: 23
		},
		learnset: [
			{
				name: 'Life Drain',
				level: 0
			},
			{
				name: 'Toxic Spray',
				level: 0
			},
			{
				name: 'Toxic Cloud',
				level: 34
			},
			{
				name: 'Bestial Bite',
				level: 35
			},
			{
				name: 'Resist Elec',
				level: 36
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Weak',
				Confuse: 'Weak',
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
		game: 'smt5'
	},
	{
		name: 'Black Rider',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 7,
				Elec: 0,
				Force: -5,
				Light: 0,
				Dark: 2,
				Almighty: 5,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Dark'
		},
		arcana: 'Tower',
		race: 'Fiend',
		level: 52,
		hp: 273,
		mp: 256,
		stats: {
			st: 30,
			vi: 37,
			ma: 48,
			ag: 49,
			lu: 35
		},
		learnset: [
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Ice Breath',
				level: 0
			},
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Soul Divide',
				level: 0
			},
			{
				name: 'Masukukaja',
				level: 53
			},
			{
				name: 'Great Mana Spring',
				level: 54
			},
			{
				name: 'Mamudoon',
				level: 55
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Null'
			},
			weak: [
				'Force'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [],
			drain: [],
			repel: [
				'Ice'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Bugs',
		aliases: [],
		affinities: {
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
			inherit: 'Psy'
		},
		arcana: 'Fool',
		race: 'Wilder',
		level: 24,
		hp: 126,
		mp: 121,
		stats: {
			st: 23,
			vi: 19,
			ma: 19,
			ag: 14,
			lu: 20
		},
		learnset: [
			{
				name: 'Dormina',
				level: 0
			},
			{
				name: 'Mamudo',
				level: 0
			},
			{
				name: 'Bestial Bite',
				level: 25
			},
			{
				name: 'Sukunda',
				level: 26
			},
			{
				name: 'Resist Ice',
				level: 27
			}
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
		game: 'smt5'
	},
	{
		name: 'Byakhee',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Fire'
		},
		arcana: 'Moon',
		race: null,
		level: 70,
		hp: null,
		mp: null,
		stats: {
			st: 42,
			vi: 43,
			ma: 49,
			ag: 51,
			lu: 52
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Stagnant Air - Persona',
				level: 0
			},
			{
				name: 'Death Scythe',
				level: 0
			},
			{
				name: 'Maragidyne',
				level: 72
			},
			{
				name: 'Ailment Boost',
				level: 73
			},
			{
				name: 'Fire Break',
				level: 74
			},
			{
				name: 'Heat Riser',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice',
				'Nuke'
			],
			resist: [],
			null: [
				'Fire',
				'Wind',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Byakko',
		aliases: [
			'Baihu'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 0,
				Ice: 0,
				Elec: 5,
				Force: -6,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Ice'
		},
		arcana: 'Temperance',
		race: 'Holy',
		level: 43,
		hp: 199,
		mp: 222,
		stats: {
			st: 30,
			vi: 25,
			ma: 23,
			ag: 42,
			lu: 35
		},
		learnset: [
			{
				name: 'Damascus Claw',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 0
			},
			{
				name: 'Storm Dracostrike',
				level: 0
			},
			{
				name: 'Fierce Roar',
				level: 44
			},
			{
				name: 'Great Life Spring',
				level: 45
			},
			{
				name: 'Frenzied Chomp',
				level: 46
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Weak'
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
		game: 'smt5'
	},
	{
		name: 'Caesar',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Emperor',
		race: 'Persona',
		level: 12,
		hp: null,
		mp: null,
		stats: {
			st: 9,
			vi: 8,
			ma: 10,
			ag: 9,
			lu: 7
		},
		learnset: [
			{
				name: 'Sonic Punch',
				level: 0
			},
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Tarunda',
				level: 16
			},
			{
				name: 'Mazio',
				level: 21
			},
			{
				name: 'Rakunda',
				level: 25
			},
			{
				name: 'Zionga',
				level: 29
			},
			{
				name: 'Sukunda',
				level: 33
			},
			{
				name: 'Elec Boost',
				level: 37
			},
			{
				name: 'Diarama',
				level: 38
			},
			{
				name: 'Mazionga',
				level: 41
			},
			{
				name: 'Matarunda',
				level: 47
			},
			{
				name: 'Arms Master',
				level: 50
			},
			{
				name: 'Ziodyne',
				level: 53
			},
			{
				name: 'Marakunda',
				level: 57
			},
			{
				name: 'Diarahan',
				level: 65
			},
			{
				name: 'Masukunda',
				level: 66
			},
			{
				name: 'Maziodyne',
				level: 74
			},
			{
				name: 'Elec Amp',
				level: 76
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p3',
		user: 'Akihiko Sanada',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Cait Sith',
		aliases: [],
		affinities: {
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
			inherit: 'Ailment'
		},
		arcana: 'Magician',
		race: 'Beast',
		level: 7,
		hp: 54,
		mp: 70,
		stats: {
			st: 10,
			vi: 7,
			ma: 10,
			ag: 7,
			lu: 5
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Zio',
				level: 8
			},
			{
				name: 'Gram Slice',
				level: 10
			}
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
		game: 'smt5'
	},
	{
		name: 'Camael',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 0,
				Ice: -4,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Herald',
		level: 69,
		hp: 407,
		mp: 286,
		stats: {
			st: 50,
			vi: 58,
			ma: 45,
			ag: 39,
			lu: 35
		},
		learnset: [
			{
				name: 'Agibarion',
				level: 0
			},
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Null Fire',
				level: 70
			},
			{
				name: 'Catastrophe',
				level: 71
			},
			{
				name: 'Hamabarion',
				level: 72
			}
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
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Captain Kidd',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		stats: {
			st: 5,
			vi: 5,
			ma: 3,
			ag: 3,
			lu: 3
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Lunge',
				level: 5
			},
			{
				name: 'Tarukaja',
				level: 9
			},
			{
				name: 'Headbutt',
				level: 11
			},
			{
				name: 'Adverse Resolve',
				level: 14
			},
			{
				name: 'Rampage',
				level: 17
			},
			{
				name: 'Mazio',
				level: 21
			},
			{
				name: 'Memory Blow',
				level: 24
			},
			{
				name: 'Assault Dive',
				level: 26
			},
			{
				name: 'Zionga',
				level: 28
			},
			{
				name: 'Swift Strike',
				level: 32
			},
			{
				name: 'Shock Boost',
				level: 35
			},
			{
				name: 'Elec Break',
				level: 39
			},
			{
				name: 'Mazionga',
				level: 43
			},
			{
				name: 'Deathbound',
				level: 47
			},
			{
				name: 'Elec Boost',
				level: 49
			},
			{
				name: 'Megaton Raid',
				level: 53
			},
			{
				name: 'Ziodyne',
				level: 55
			},
			{
				name: 'Matarukaja',
				level: 58
			},
			{
				name: 'Charge',
				level: 63
			},
			{
				name: 'Maziodyne',
				level: 67
			},
			{
				name: 'Agneyastra',
				level: 71
			},
			{
				name: 'God\'s Hand',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Elec'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Ryuji Sakamoto',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Carmen',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Lovers',
		race: 'Persona',
		level: 5,
		hp: null,
		mp: null,
		stats: {
			st: 3,
			vi: 4,
			ma: 6,
			ag: 4,
			lu: 5
		},
		learnset: [
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Dormina',
				level: 7
			},
			{
				name: 'Tarunda',
				level: 11
			},
			{
				name: 'Maragi',
				level: 13
			},
			{
				name: 'Dekaja',
				level: 16
			},
			{
				name: 'Agilao',
				level: 22
			},
			{
				name: 'Fire Break',
				level: 25
			},
			{
				name: 'Diarama',
				level: 28
			},
			{
				name: 'Lullaby',
				level: 30
			},
			{
				name: 'Ambient Aid',
				level: 33
			},
			{
				name: 'Maragion',
				level: 35
			},
			{
				name: 'Fire Boost',
				level: 38
			},
			{
				name: 'Matarunda',
				level: 41
			},
			{
				name: 'Agidyne',
				level: 46
			},
			{
				name: 'Burn Boost',
				level: 50
			},
			{
				name: 'Maragidyne',
				level: 54
			},
			{
				name: 'Diarahan',
				level: 57
			},
			{
				name: 'Concentrate',
				level: 62
			},
			{
				name: 'Fire Amp',
				level: 68
			},
			{
				name: 'Maragibarion',
				level: 74
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [
				'Fire'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Ann Takamaki',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Castor',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Hierophant',
		race: 'Persona',
		level: 37,
		hp: null,
		mp: null,
		stats: {
			st: 32,
			vi: 27,
			ma: 20,
			ag: 22,
			lu: 17
		},
		learnset: [
			{
				name: 'Regenerate 1',
				level: 0
			},
			{
				name: 'Counter - Persona',
				level: 0
			},
			{
				name: 'Fatal End',
				level: 0
			},
			{
				name: 'Evil Smile',
				level: 39
			},
			{
				name: 'Counterstrike',
				level: 42
			},
			{
				name: 'Charge',
				level: 50
			},
			{
				name: 'Blade of Fury',
				level: 52
			},
			{
				name: 'Heat Wave',
				level: 53
			},
			{
				name: 'High Counter',
				level: 55
			},
			{
				name: 'Deathbound',
				level: 60
			},
			{
				name: 'Regenerate 2',
				level: 65
			},
			{
				name: 'Akashic Arts',
				level: 72
			},
			{
				name: 'God\'s Hand',
				level: 77
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Shinjiro Aragaki',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Célestine',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Lovers',
		race: 'Persona',
		level: 5,
		hp: null,
		mp: null,
		stats: {
			st: 3,
			vi: 4,
			ma: 6,
			ag: 4,
			lu: 5
		},
		learnset: [
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Dormina',
				level: 7
			},
			{
				name: 'Tarunda',
				level: 11
			},
			{
				name: 'Maragi',
				level: 13
			},
			{
				name: 'Dekaja',
				level: 16
			},
			{
				name: 'Agilao',
				level: 22
			},
			{
				name: 'Fire Break',
				level: 25
			},
			{
				name: 'Diarama',
				level: 28
			},
			{
				name: 'Lullaby',
				level: 30
			},
			{
				name: 'Ambient Aid',
				level: 33
			},
			{
				name: 'Maragion',
				level: 35
			},
			{
				name: 'Fire Boost',
				level: 38
			},
			{
				name: 'Matarunda',
				level: 41
			},
			{
				name: 'Agidyne',
				level: 46
			},
			{
				name: 'Burn Boost',
				level: 50
			},
			{
				name: 'Maragidyne',
				level: 54
			},
			{
				name: 'Diarahan',
				level: 57
			},
			{
				name: 'Concentrate',
				level: 62
			},
			{
				name: 'Fire Amp',
				level: 68
			},
			{
				name: 'Maragibarion',
				level: 74
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [
				'Elec'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Ann Takamaki',
		stage: 3,
		evoSkill: 'High Energy'
	},
	{
		name: 'Cendrillon',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Faith',
		race: 'Persona',
		level: 75,
		hp: null,
		mp: null,
		stats: {
			st: 55,
			vi: 36,
			ma: 46,
			ag: 51,
			lu: 44
		},
		learnset: [
			{
				name: 'Apt Pupil',
				level: 0
			},
			{
				name: 'Vorpal Blade',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Sword Dance',
				level: 0
			},
			{
				name: 'Mahamabarion',
				level: 0
			},
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Light Amp',
				level: 0
			},
			{
				name: 'Ali Dance',
				level: 0
			},
			{
				name: 'Brave Step',
				level: 80
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Sumire Yoshizawa',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Cerberus',
		aliases: [],
		affinities: {
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
			inherit: 'Fire'
		},
		arcana: 'Chariot',
		race: 'Beast',
		level: 64,
		hp: 450,
		mp: 223,
		stats: {
			st: 53,
			vi: 59,
			ma: 28,
			ag: 43,
			lu: 30
		},
		learnset: [
			{
				name: 'Fire Breath',
				level: 0
			},
			{
				name: 'Power Punch',
				level: 0
			},
			{
				name: 'Severing Bite',
				level: 0
			},
			{
				name: 'Resist Phys',
				level: 65
			},
			{
				name: 'Madness Nails',
				level: 66
			},
			{
				name: 'Enduring Soul',
				level: 67
			}
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
		game: 'smt5'
	},
	{
		name: 'Cerberus - P3',
		aliases: [
			'Cerberus'
		],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Strength',
		race: 'Persona',
		level: 34,
		hp: null,
		mp: null,
		stats: {
			st: 20,
			vi: 21,
			ma: 20,
			ag: 29,
			lu: 19
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Mudo',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Maragion',
				level: 38
			},
			{
				name: 'Counterstrike',
				level: 40
			},
			{
				name: 'Mamudo',
				level: 42
			},
			{
				name: 'Agidyne',
				level: 45
			},
			{
				name: 'Fire Boost',
				level: 48
			},
			{
				name: 'Masukukaja',
				level: 50
			},
			{
				name: 'High Counter',
				level: 52
			},
			{
				name: 'Mudoon',
				level: 56
			},
			{
				name: 'Mudo Boost',
				level: 60
			},
			{
				name: 'Maragidyne',
				level: 67
			},
			{
				name: 'Mamudoon',
				level: 71
			},
			{
				name: 'Fire Amp',
				level: 77
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Light'
			],
			resist: [],
			null: [
				'Fire',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Koromaru',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Chernobog',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -2,
				Dark: 3,
				Almighty: 0,
				Ailment: 4,
				Recovery: -3,
				Support: 0
			},
			inherit: 'Ailment'
		},
		arcana: 'Death',
		race: 'Fury',
		level: 52,
		hp: 248,
		mp: 251,
		stats: {
			st: 43,
			vi: 27,
			ma: 45,
			ag: 29,
			lu: 35
		},
		learnset: [
			{
				name: 'Blight',
				level: 0
			},
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Dark Pleroma',
				level: 53
			},
			{
				name: 'Great Curse Siphon',
				level: 54
			},
			{
				name: 'Retaliate',
				level: 55
			}
		],
		resistances: {
			ailments: {
				Poison: 'Resist'
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
		game: 'smt5'
	},
	{
		name: 'Chi You',
		aliases: [],
		affinities: {
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
			inherit: 'Psy'
		},
		arcana: 'Chariot',
		race: 'Tyrant',
		level: 87,
		hp: 577,
		mp: 378,
		stats: {
			st: 81,
			vi: 73,
			ma: 71,
			ag: 45,
			lu: 53
		},
		learnset: [
			{
				name: 'Glacial Blast',
				level: 0
			},
			{
				name: 'High Phys Pleroma',
				level: 0
			},
			{
				name: 'Mazanbarion',
				level: 0
			},
			{
				name: 'Yabusame Shot',
				level: 0
			},
			{
				name: 'Catastrophe',
				level: 88
			},
			{
				name: 'Myriad Slashes',
				level: 89
			},
			{
				name: 'Drain Ice',
				level: 90
			}
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
		game: 'smt5'
	},
	{
		name: 'Chimera',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 2,
				Ice: 0,
				Elec: 3,
				Force: -4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: -2,
				Support: 0
			},
			inherit: 'Phys'
		},
		arcana: 'Strength',
		race: 'Holy',
		level: 55,
		hp: 320,
		mp: 216,
		stats: {
			st: 47,
			vi: 37,
			ma: 41,
			ag: 34,
			lu: 27
		},
		learnset: [
			{
				name: 'Fierce Roar',
				level: 0
			},
			{
				name: 'Fire Dracostrike',
				level: 0
			},
			{
				name: 'Frenzied Chomp',
				level: 0
			},
			{
				name: 'Severing Bite',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 56
			},
			{
				name: 'Eat Whole',
				level: 57
			},
			{
				name: 'Null Fire',
				level: 58
			}
		],
		resistances: {
			ailments: {
				Poison: 'Weak'
			},
			weak: [
				'Force'
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
		game: 'smt5'
	},
	{
		name: 'Choronzon',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Dark'
		},
		arcana: 'Magician',
		race: 'Haunt',
		level: 28,
		hp: null,
		mp: null,
		stats: {
			st: 16,
			vi: 19,
			ma: 19,
			ag: 18,
			lu: 19
		},
		learnset: [
			{
				name: 'Pulinpa',
				level: 0
			},
			{
				name: 'Life Drain',
				level: 0
			},
			{
				name: 'Rampage',
				level: 0
			},
			{
				name: 'Mamudo',
				level: 29
			},
			{
				name: 'Dodge Elec',
				level: 30
			},
			{
				name: 'Mudoon',
				level: 31
			},
			{
				name: 'Dark Boost',
				level: 32
			},
			{
				name: 'Climate Decorum',
				level: 33
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Light'
			],
			resist: [
				'Phys'
			],
			null: [],
			drain: [
				'Fire'
			],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Cironnup',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: null,
		race: 'Holy',
		level: 27,
		hp: 124,
		mp: 185,
		stats: {
			st: 16,
			vi: 18,
			ma: 25,
			ag: 25,
			lu: 24
		},
		learnset: [
			{
				name: 'Ghastfire Rain',
				level: 0
			},
			{
				name: 'Hama',
				level: 0
			},
			{
				name: 'Restore',
				level: 0
			},
			{
				name: 'Blinding Strike',
				level: 28
			},
			{
				name: 'Light Block',
				level: 29
			},
			{
				name: 'Cautious Cheer',
				level: 30
			}
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
		game: 'smt5'
	},
	{
		name: 'Cleopatra',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 6,
				Elec: 0,
				Force: 5,
				Light: 5,
				Dark: -6,
				Almighty: 0,
				Ailment: 3,
				Recovery: 5,
				Support: 5
			},
			inherit: null
		},
		arcana: null,
		race: 'Femme',
		level: 61,
		hp: 404,
		mp: 412,
		stats: {
			st: 26,
			vi: 42,
			ma: 69,
			ag: 44,
			lu: 51
		},
		learnset: [
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Frolic',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'Mazandyne',
				level: 62
			},
			{
				name: 'Luster Candy',
				level: 63
			},
			{
				name: 'Mabufubarion',
				level: 64
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Resist',
				Charm: 'Resist'
			},
			weak: [
				'Dark'
			],
			resist: [
				'Fire',
				'Ice',
				'Elec',
				'Force'
			],
			null: [],
			drain: [
				'Light'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Clotho',
		aliases: [],
		affinities: {
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
			inherit: 'Recovery'
		},
		arcana: 'Fortune',
		race: 'Femme',
		level: 52,
		hp: 278,
		mp: 265,
		stats: {
			st: 20,
			vi: 42,
			ma: 33,
			ag: 51,
			lu: 30
		},
		learnset: [
			{
				name: 'Lullaby',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Diamrita',
				level: 53
			},
			{
				name: 'Bowl of Hygieia',
				level: 54
			},
			{
				name: 'Heal Pleroma',
				level: 55
			}
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
		game: 'smt5'
	},
	{
		name: 'Crystal Skull',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Support'
		},
		arcana: 'Fool',
		race: 'Treasure',
		level: 50,
		hp: null,
		mp: null,
		stats: {
			st: 50,
			vi: 50,
			ma: 50,
			ag: 50,
			lu: 50
		},
		learnset: [
			{
				name: 'Maragidyne',
				level: 0
			},
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'Maziodyne',
				level: 0
			},
			{
				name: 'Magarudyne',
				level: 0
			},
			{
				name: 'Mapsiodyne',
				level: 0
			},
			{
				name: 'Mafreidyne',
				level: 0
			},
			{
				name: 'Mahamabarion',
				level: 0
			},
			{
				name: 'Mamudobarion',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Phys',
				'Gun'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Cu Chulainn',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 0,
				Ice: 0,
				Elec: -2,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 2
			},
			inherit: 'Phys'
		},
		arcana: 'Faith',
		race: 'Genma',
		level: 52,
		hp: 293,
		mp: 201,
		stats: {
			st: 41,
			vi: 37,
			ma: 33,
			ag: 40,
			lu: 25
		},
		learnset: [
			{
				name: 'Fatal Sword',
				level: 0
			},
			{
				name: 'Mazanma',
				level: 0
			},
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Charge',
				level: 53
			},
			{
				name: 'Force Pleroma',
				level: 54
			},
			{
				name: 'Mist Rush',
				level: 55
			}
		],
		resistances: {
			ailments: {
				Seal: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Phys'
			],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Cu Sith',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Wind'
		},
		arcana: 'Sun',
		race: 'Beast',
		level: 10,
		hp: null,
		mp: null,
		stats: {
			st: 10,
			vi: 6,
			ma: 5,
			ag: 9,
			lu: 7
		},
		learnset: [
			{
				name: 'Garu',
				level: 0
			},
			{
				name: 'Pulinpa',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Growth 1',
				level: 11
			},
			{
				name: 'Magaru',
				level: 13
			},
			{
				name: 'Ice Wall',
				level: 14
			},
			{
				name: 'Traesto',
				level: 15
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [
				'Wind'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Cybele',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 2,
				Ice: 0,
				Elec: -6,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 0
			},
			inherit: 'Recovery'
		},
		arcana: 'Priestess',
		race: 'Lady',
		level: 56,
		hp: 298,
		mp: 240,
		stats: {
			st: 49,
			vi: 29,
			ma: 44,
			ag: 22,
			lu: 48
		},
		learnset: [
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Maragidyne',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 0
			},
			{
				name: 'Safeguard',
				level: 57
			},
			{
				name: 'Sexy Dance',
				level: 58
			},
			{
				name: 'Mighty Cleave',
				level: 59
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Weak'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Fire'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Daemon',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: null,
		race: 'Brute',
		level: 7,
		hp: 59,
		mp: 73,
		stats: {
			st: 11,
			vi: 6,
			ma: 10,
			ag: 9,
			lu: 7
		},
		learnset: [
			{
				name: 'Hellish Slash',
				level: 0
			},
			{
				name: 'Agi',
				level: 8
			},
			{
				name: 'Mudo',
				level: 9
			},
			{
				name: 'Tarukaja',
				level: 10
			}
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
		game: 'smt5'
	},
	{
		name: 'Daisoujou',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -5,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 4,
				Dark: 4,
				Almighty: 0,
				Ailment: 3,
				Recovery: 1,
				Support: 0
			},
			inherit: 'Light'
		},
		arcana: 'Hierophant',
		race: 'Fiend',
		level: 30,
		hp: 144,
		mp: 183,
		stats: {
			st: 15,
			vi: 21,
			ma: 36,
			ag: 19,
			lu: 30
		},
		learnset: [
			{
				name: 'Mahama',
				level: 0
			},
			{
				name: 'Meditation',
				level: 0
			},
			{
				name: 'Preach',
				level: 0
			},
			{
				name: 'Mamudo',
				level: 31
			},
			{
				name: 'Light Pleroma',
				level: 32
			},
			{
				name: 'Great Curse Siphon',
				level: 33
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist'
			},
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Dakini',
		aliases: [],
		affinities: {
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
			inherit: 'Phys'
		},
		arcana: 'Empress',
		race: 'Femme',
		level: 46,
		hp: 226,
		mp: 169,
		stats: {
			st: 44,
			vi: 31,
			ma: 20,
			ag: 32,
			lu: 33
		},
		learnset: [
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Fatal Sword',
				level: 0
			},
			{
				name: 'Maragion',
				level: 47
			},
			{
				name: 'Fire Dracostrike',
				level: 48
			},
			{
				name: 'Bloody Glee',
				level: 49
			}
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
		game: 'smt5'
	},
	{
		name: 'Danu',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 0,
				Ice: 2,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: -7,
				Almighty: 4,
				Ailment: 0,
				Recovery: 4,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Lady',
		level: 93,
		hp: 496,
		mp: 564,
		stats: {
			st: 42,
			vi: 59,
			ma: 103,
			ag: 65,
			lu: 110
		},
		learnset: [
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Matriarch\'s Love',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Slumber Vortex',
				level: 0
			},
			{
				name: 'Drain Light',
				level: 94
			},
			{
				name: 'Glacial Blast',
				level: 95
			},
			{
				name: 'Luster Candy',
				level: 96
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Dark'
			],
			resist: [
				'Fire',
				'Ice',
				'Elec',
				'Force'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Decarabia',
		aliases: [],
		affinities: {
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
			inherit: 'Fire'
		},
		arcana: 'Councillor',
		race: 'Fallen',
		level: 55,
		hp: 276,
		mp: 269,
		stats: {
			st: 31,
			vi: 33,
			ma: 48,
			ag: 33,
			lu: 41
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 0
			},
			{
				name: 'Megidola',
				level: 56
			},
			{
				name: 'Trafuri',
				level: 57
			},
			{
				name: 'Mamudoon',
				level: 58
			}
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
		game: 'smt5'
	},
	{
		name: 'Demeter',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -5,
				Ice: 0,
				Elec: 0,
				Force: 3,
				Light: 1,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 4,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Megami',
		level: 76,
		hp: 377,
		mp: 450,
		stats: {
			st: 27,
			vi: 40,
			ma: 69,
			ag: 53,
			lu: 65
		},
		learnset: [
			{
				name: 'Diamrita',
				level: 0
			},
			{
				name: 'Eleusinian Harvest',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Mazanbarion',
				level: 0
			},
			{
				name: 'Luster Candy',
				level: 77
			},
			{
				name: 'Null Force',
				level: 78
			},
			{
				name: 'High Heal Pleroma',
				level: 79
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Poison: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
			},
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Diego',
		aliases: [],
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
		resistances: {
			ailments: null,
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
		user: 'Morgana',
		stage: 3,
		evoSkill: 'Miracle Rush'
	},
	{
		name: 'Dionysus',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 2,
				Ice: -4,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 3,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Ailment'
		},
		arcana: 'Councillor',
		race: 'Fury',
		level: 44,
		hp: 225,
		mp: 182,
		stats: {
			st: 33,
			vi: 30,
			ma: 31,
			ag: 32,
			lu: 30
		},
		learnset: [
			{
				name: 'Acrobat Kick',
				level: 0
			},
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Sexy Dance',
				level: 0
			},
			{
				name: 'Donum Magici',
				level: 45
			},
			{
				name: 'Heavy Blow',
				level: 46
			},
			{
				name: 'Hysterical Slap',
				level: 47
			}
		],
		resistances: {
			ailments: {
				Charm: 'Null'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Elec'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Dis',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Fire'
		},
		arcana: 'Magician',
		race: 'Yoma',
		level: 39,
		hp: null,
		mp: null,
		stats: {
			st: 25,
			vi: 24,
			ma: 31,
			ag: 26,
			lu: 21
		},
		learnset: [
			{
				name: 'Maragion',
				level: 0
			},
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 0
			},
			{
				name: 'Dodge Ice',
				level: 41
			},
			{
				name: 'Masukunda',
				level: 10
			},
			{
				name: 'Agidyne',
				level: 43
			},
			{
				name: 'Concentrate',
				level: 44
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: [
				'Fire'
			]
		},
		game: 'p4'
	},
	{
		name: 'Dominion',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 3,
				Force: 0,
				Light: 3,
				Dark: -5,
				Almighty: 0,
				Ailment: 0,
				Recovery: 1,
				Support: 2
			},
			inherit: 'Light'
		},
		arcana: 'Justice',
		race: 'Divine',
		level: 50,
		hp: 223,
		mp: 253,
		stats: {
			st: 23,
			vi: 28,
			ma: 48,
			ag: 35,
			lu: 40
		},
		learnset: [
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Shockbound',
				level: 51
			},
			{
				name: 'Dekunda',
				level: 52
			},
			{
				name: 'Makarakarn',
				level: 53
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force',
				'Dark'
			],
			resist: [],
			null: [
				'Elec',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Eligor',
		aliases: [],
		affinities: {
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
			inherit: 'Fire'
		},
		arcana: 'Emperor',
		race: 'Fallen',
		level: 37,
		hp: 214,
		mp: 157,
		stats: {
			st: 38,
			vi: 32,
			ma: 19,
			ag: 24,
			lu: 20
		},
		learnset: [
			{
				name: 'Blight',
				level: 0
			},
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Agilao',
				level: 38
			},
			{
				name: 'Restore',
				level: 39
			},
			{
				name: 'Masukukaja',
				level: 40
			}
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
		game: 'smt5'
	},
	{
		name: 'Ella',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Faith',
		race: 'Persona',
		level: 75,
		hp: null,
		mp: null,
		stats: {
			st: 55,
			vi: 36,
			ma: 46,
			ag: 51,
			lu: 44
		},
		learnset: [
			{
				name: 'Apt Pupil',
				level: 0
			},
			{
				name: 'Vorpal Blade',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Sword Dance',
				level: 0
			},
			{
				name: 'Mahamabarion',
				level: 0
			},
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Light Amp',
				level: 0
			},
			{
				name: 'Ali Dance',
				level: 0
			},
			{
				name: 'Brave Step',
				level: 80
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [
				'Nuke'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Sumire Yoshizawa',
		stage: 3,
		evoSkill: 'Masquerade'
	},
	{
		name: 'Emperor\'s Amulet',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Support'
		},
		arcana: 'Hanged',
		race: 'Treasure',
		level: 35,
		hp: null,
		mp: null,
		stats: {
			st: 35,
			vi: 35,
			ma: 35,
			ag: 35,
			lu: 35
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Garudyne',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'Psiodyne',
				level: 0
			},
			{
				name: 'Freidyne',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Phys',
				'Gun'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Erthys',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 3,
				Force: -4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 1,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Element',
		level: 9,
		hp: 73,
		mp: 62,
		stats: {
			st: 8,
			vi: 12,
			ma: 11,
			ag: 9,
			lu: 9
		},
		learnset: [
			{
				name: 'Dustoma',
				level: 0
			},
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Mazio',
				level: 12
			}
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
		game: 'smt5'
	},
	{
		name: 'Fafnir',
		aliases: [],
		affinities: {
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
			inherit: 'Nuke'
		},
		arcana: 'Hermit',
		race: 'Drake',
		level: 60,
		hp: 370,
		mp: 220,
		stats: {
			st: 56,
			vi: 50,
			ma: 23,
			ag: 29,
			lu: 41
		},
		learnset: [
			{
				name: 'Mortal Jihad',
				level: 0
			},
			{
				name: 'Poison Adept',
				level: 0
			},
			{
				name: 'Steel Needle',
				level: 0
			},
			{
				name: 'Toxic Cloud',
				level: 0
			},
			{
				name: 'Abyssal Mask',
				level: 61
			},
			{
				name: 'Null Elec',
				level: 62
			},
			{
				name: 'Poison Master',
				level: 63
			}
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
		game: 'smt5'
	},
	{
		name: 'Feng Huang',
		aliases: [
			'Phoenix'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 4,
				Ice: 0,
				Elec: 0,
				Force: 2,
				Light: 0,
				Dark: -4,
				Almighty: 0,
				Ailment: 0,
				Recovery: 3,
				Support: 0
			},
			inherit: 'Nuke'
		},
		arcana: 'Faith',
		race: 'Avian',
		level: 22,
		hp: 128,
		mp: 116,
		stats: {
			st: 16,
			vi: 16,
			ma: 20,
			ag: 20,
			lu: 17
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Media',
				level: 0
			},
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Light Life Aid',
				level: 23
			},
			{
				name: 'Fire Breath',
				level: 24
			},
			{
				name: 'Needle Spray',
				level: 25
			}
		],
		resistances: {
			ailments: {
				Seal: 'Weak'
			},
			weak: [
				'Dark'
			],
			resist: [
				'Force'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Fionn mac Cumhaill',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 5,
				Fire: 4,
				Ice: 3,
				Elec: -6,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Genma',
		level: 71,
		hp: 437,
		mp: 325,
		stats: {
			st: 58,
			vi: 47,
			ma: 52,
			ag: 52,
			lu: 37
		},
		learnset: [
			{
				name: 'Agibarion',
				level: 0
			},
			{
				name: 'Estoma',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Mac an Luin',
				level: 0
			},
			{
				name: 'Enduring Soul',
				level: 72
			},
			{
				name: 'Bufubarion',
				level: 73
			},
			{
				name: 'Null Ice',
				level: 75
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Seal: 'Null'
			},
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Fire',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Flaemis',
		aliases: [],
		affinities: {
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
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Element',
		level: 18,
		hp: 83,
		mp: 119,
		stats: {
			st: 9,
			vi: 12,
			ma: 22,
			ag: 15,
			lu: 17
		},
		learnset: [
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Pulinpa',
				level: 0
			},
			{
				name: 'Maragi',
				level: 19
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [
				'Fire'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Flauros',
		aliases: [],
		affinities: {
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
			inherit: 'Ailment'
		},
		arcana: 'Devil',
		race: 'Fallen',
		level: 50,
		hp: 285,
		mp: 182,
		stats: {
			st: 50,
			vi: 36,
			ma: 30,
			ag: 36,
			lu: 20
		},
		learnset: [
			{
				name: 'Black Dracostrike',
				level: 0
			},
			{
				name: 'Damascus Claw',
				level: 0
			},
			{
				name: 'Restore',
				level: 0
			},
			{
				name: 'Agidyne',
				level: 51
			},
			{
				name: 'Critical Aura',
				level: 52
			},
			{
				name: 'Severing Bite',
				level: 53
			}
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
		game: 'smt5'
	},
	{
		name: 'Forneus',
		aliases: [],
		affinities: {
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
			inherit: 'Psy'
		},
		arcana: 'Magician',
		race: 'Fallen',
		level: 31,
		hp: 141,
		mp: 170,
		stats: {
			st: 19,
			vi: 20,
			ma: 26,
			ag: 24,
			lu: 25
		},
		learnset: [
			{
				name: 'Ice Breath',
				level: 0
			},
			{
				name: 'Mabufula',
				level: 0
			},
			{
				name: 'Marakunda',
				level: 0
			},
			{
				name: 'Fogna',
				level: 32
			},
			{
				name: 'Ice Block',
				level: 33
			},
			{
				name: 'Mana Spring',
				level: 34
			}
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
		game: 'smt5'
	},
	{
		name: 'Fortuna',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -1,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 3,
				Light: 1,
				Dark: -3,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 1
			},
			inherit: 'Wind'
		},
		arcana: 'Fortune',
		race: 'Megami',
		level: 15,
		hp: 86,
		mp: 114,
		stats: {
			st: 8,
			vi: 10,
			ma: 21,
			ag: 14,
			lu: 18
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Life Spring',
				level: 0
			},
			{
				name: 'Zan',
				level: 0
			},
			{
				name: 'Hama',
				level: 16
			},
			{
				name: 'Rakunda',
				level: 17
			}
		],
		resistances: {
			ailments: {},
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
		game: 'smt5'
	},
	{
		name: 'Futsunushi',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 6,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: -3,
				Support: 4
			},
			inherit: 'Phys'
		},
		arcana: 'Magician',
		race: 'Wargod',
		level: 69,
		hp: 424,
		mp: 291,
		stats: {
			st: 63,
			vi: 46,
			ma: 32,
			ag: 48,
			lu: 39
		},
		learnset: [
			{
				name: 'Catastrophe',
				level: 0
			},
			{
				name: 'Impaler\'s Animus',
				level: 0
			},
			{
				name: 'Matarukaja',
				level: 0
			},
			{
				name: 'Resist Phys',
				level: 70
			},
			{
				name: 'Phys Pleroma',
				level: 71
			},
			{
				name: 'Hades Blast',
				level: 72
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Weak',
				Seal: 'Resist',
				Mirage: 'Null',
				Confuse: 'Null'
			},
			weak: [
				'Dark'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Fuu-Ki',
		aliases: [],
		affinities: {
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
			inherit: 'Wind'
		},
		arcana: 'Star',
		race: 'Brute',
		level: 63,
		hp: 346,
		mp: 282,
		stats: {
			st: 43,
			vi: 37,
			ma: 39,
			ag: 51,
			lu: 40
		},
		learnset: [
			{
				name: 'Force Pleroma',
				level: 0
			},
			{
				name: 'Titanomachia',
				level: 0
			},
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Masukunda',
				level: 64
			},
			{
				name: 'Impaler\'s Animus',
				level: 65
			},
			{
				name: 'Murderous Glee',
				level: 66
			}
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
		game: 'smt5'
	},
	{
		name: 'Gabriel',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 5,
				Elec: -4,
				Force: 0,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Ailment: -7,
				Recovery: 3,
				Support: 1
			},
			inherit: 'Almighty'
		},
		arcana: 'Temperance',
		race: 'Herald',
		level: 86,
		hp: 534,
		mp: 437,
		stats: {
			st: 56,
			vi: 65,
			ma: 73,
			ag: 64,
			lu: 67
		},
		learnset: [
			{
				name: 'Diamrita',
				level: 0
			},
			{
				name: 'Ice Age',
				level: 0
			},
			{
				name: 'Mahamabarion',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 0
			},
			{
				name: 'High Ice Pleroma',
				level: 87
			},
			{
				name: 'Glacial Blast',
				level: 88
			},
			{
				name: 'Repel Ice',
				level: 90
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec'
			],
			resist: [
				'Fire'
			],
			null: [
				'Ice',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Ganesha',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 0,
				Ice: 0,
				Elec: -6,
				Force: 1,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 4
			},
			inherit: 'Nuke'
		},
		arcana: 'Sun',
		race: 'Wargod',
		level: 57,
		hp: 364,
		mp: 217,
		stats: {
			st: 50,
			vi: 54,
			ma: 31,
			ag: 23,
			lu: 35
		},
		learnset: [
			{
				name: 'Mighty Cleave',
				level: 0
			},
			{
				name: 'Mist Rush',
				level: 0
			},
			{
				name: 'Wind Dracostrike',
				level: 0
			},
			{
				name: 'Fierce Roar',
				level: 58
			},
			{
				name: 'Phys Pleroma',
				level: 59
			},
			{
				name: 'Critical Zealot',
				level: 60
			}
		],
		resistances: {
			ailments: {
				Poison: 'Weak',
				Confuse: 'Resist'
			},
			weak: [
				'Elec',
				'Dark'
			],
			resist: [
				'Phys'
			],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Ganga',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Ice'
		},
		arcana: 'Priestess',
		race: 'Dragon',
		level: 29,
		hp: null,
		mp: null,
		stats: {
			st: 16,
			vi: 16,
			ma: 22,
			ag: 19,
			lu: 21
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Mind Slice',
				level: 31
			},
			{
				name: 'Confuse Boost',
				level: 32
			},
			{
				name: 'Mediarama',
				level: 33
			},
			{
				name: 'Evade Fire',
				level: 35
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire',
				'Dark'
			],
			resist: [],
			null: [],
			drain: [
				'Ice'
			],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Garuda',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 0,
				Ice: 0,
				Elec: -4,
				Force: 5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Wind'
		},
		arcana: 'Star',
		race: 'Avian',
		level: 64,
		hp: 319,
		mp: 302,
		stats: {
			st: 46,
			vi: 33,
			ma: 32,
			ag: 56,
			lu: 51
		},
		learnset: [
			{
				name: 'Masukukaja',
				level: 0
			},
			{
				name: 'Mazandyne',
				level: 0
			},
			{
				name: 'Retaliate',
				level: 0
			},
			{
				name: 'Yabusame Shot',
				level: 0
			},
			{
				name: 'Force Block',
				level: 65
			},
			{
				name: 'Null Light',
				level: 66
			},
			{
				name: 'Hell Thrust',
				level: 67
			}
		],
		resistances: {
			ailments: {
				Seal: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Light'
			],
			null: [],
			drain: [
				'Force'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Gdon',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Fire'
		},
		arcana: 'Sun',
		race: 'Beast',
		level: 31,
		hp: null,
		mp: null,
		stats: {
			st: 27,
			vi: 23,
			ma: 10,
			ag: 22,
			lu: 18
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Maragi',
				level: 0
			},
			{
				name: 'Fire Break',
				level: 0
			},
			{
				name: 'Growth 2',
				level: 33
			},
			{
				name: 'Maragion',
				level: 34
			},
			{
				name: 'Fire Boost',
				level: 35
			},
			{
				name: 'Evade Ice',
				level: 36
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [],
			null: [],
			drain: [
				'Fire'
			],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Genbu',
		aliases: [
			'Xuanwu'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: -6,
				Ice: 5,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 2
			},
			inherit: 'Ice'
		},
		arcana: 'Temperance',
		race: 'Dragon',
		level: 23,
		hp: 153,
		mp: 88,
		stats: {
			st: 23,
			vi: 28,
			ma: 15,
			ag: 8,
			lu: 16
		},
		learnset: [
			{
				name: 'Ice Breath',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Heavy Blow',
				level: 24
			},
			{
				name: 'Bufula',
				level: 25
			},
			{
				name: 'Critical Aura',
				level: 26
			}
		],
		resistances: {
			ailments: {},
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
		game: 'smt5'
	},
	{
		name: 'Ghoul',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Ailment'
		},
		arcana: 'Death',
		race: 'Haunt',
		level: 9,
		hp: null,
		mp: null,
		stats: {
			st: 8,
			vi: 9,
			ma: 7,
			ag: 5,
			lu: 5
		},
		learnset: [
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Poisma',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 10
			},
			{
				name: 'Enervation',
				level: 11
			},
			{
				name: 'Poison Skewer',
				level: 12
			},
			{
				name: 'Rakunda',
				level: 13
			},
			{
				name: 'Poison Boost',
				level: 14
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire',
				'Light'
			],
			resist: [],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Girimehkala',
		aliases: [
			'Girimekhala'
		],
		affinities: {
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
			inherit: 'Ailment'
		},
		arcana: 'Moon',
		race: 'Vile',
		level: 66,
		hp: 381,
		mp: 245,
		stats: {
			st: 61,
			vi: 40,
			ma: 46,
			ag: 35,
			lu: 38
		},
		learnset: [
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Hell Thrust',
				level: 0
			},
			{
				name: 'Marakunda',
				level: 0
			},
			{
				name: 'Toxic Spray',
				level: 67
			},
			{
				name: 'Critical Zealot',
				level: 68
			},
			{
				name: 'Poison Master',
				level: 69
			}
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
		game: 'smt5'
	},
	{
		name: 'Goemon',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Emperor',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		stats: {
			st: 13,
			vi: 11,
			ma: 10,
			ag: 10,
			lu: 8
		},
		learnset: [
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Giant Slice',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Vicious Strike',
				level: 18
			},
			{
				name: 'Mabufu',
				level: 20
			},
			{
				name: 'Counter - Persona',
				level: 22
			},
			{
				name: 'Rising Slash',
				level: 23
			},
			{
				name: 'Dormin Rush',
				level: 27
			},
			{
				name: 'Bufula',
				level: 29
			},
			{
				name: 'Speed Master',
				level: 31
			},
			{
				name: 'Tempest Slash',
				level: 34
			},
			{
				name: 'Counterstrike',
				level: 37
			},
			{
				name: 'Mabufula',
				level: 40
			},
			{
				name: 'Heat Wave',
				level: 43
			},
			{
				name: 'Deadly Fury',
				level: 47
			},
			{
				name: 'Masukukaja',
				level: 49
			},
			{
				name: 'Bufudyne',
				level: 53
			},
			{
				name: 'High Counter',
				level: 58
			},
			{
				name: 'Myriad Slashes',
				level: 62
			},
			{
				name: 'Mabufudyne',
				level: 65
			},
			{
				name: 'Vorpal Blade',
				level: 69
			},
			{
				name: 'Brave Blade',
				level: 73
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p5',
		user: 'Yusuke Kitagawa',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Gorgon',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Ice'
		},
		arcana: 'Empress',
		race: 'Femme',
		level: 34,
		hp: null,
		mp: null,
		stats: {
			st: 20,
			vi: 25,
			ma: 21,
			ag: 24,
			lu: 19
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Crazy Chain',
				level: 35
			},
			{
				name: 'Null Confuse',
				level: 36
			},
			{
				name: 'Mabufula',
				level: 38
			},
			{
				name: 'Ice Boost',
				level: 39
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Light'
			],
			resist: [],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Gorokichi',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Emperor',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		stats: {
			st: 13,
			vi: 11,
			ma: 10,
			ag: 10,
			lu: 8
		},
		learnset: [
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Giant Slice',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Vicious Strike',
				level: 18
			},
			{
				name: 'Mabufu',
				level: 20
			},
			{
				name: 'Counter - Persona',
				level: 22
			},
			{
				name: 'Rising Slash',
				level: 23
			},
			{
				name: 'Dormin Rush',
				level: 27
			},
			{
				name: 'Bufula',
				level: 29
			},
			{
				name: 'Speed Master',
				level: 31
			},
			{
				name: 'Tempest Slash',
				level: 34
			},
			{
				name: 'Counterstrike',
				level: 37
			},
			{
				name: 'Mabufula',
				level: 40
			},
			{
				name: 'Heat Wave',
				level: 43
			},
			{
				name: 'Deadly Fury',
				level: 47
			},
			{
				name: 'Masukukaja',
				level: 49
			},
			{
				name: 'Bufudyne',
				level: 53
			},
			{
				name: 'High Counter',
				level: 58
			},
			{
				name: 'Myriad Slashes',
				level: 62
			},
			{
				name: 'Mabufudyne',
				level: 65
			},
			{
				name: 'Vorpal Blade',
				level: 69
			},
			{
				name: 'Brave Blade',
				level: 73
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [
				'Wind'
			],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Yusuke Kitagawa',
		stage: 3,
		evoSkill: 'Luster Candy'
	},
	{
		name: 'Gurr',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Phys'
		},
		arcana: 'Hunger',
		race: 'Raptor',
		level: 20,
		hp: null,
		mp: null,
		stats: {
			st: 16,
			vi: 14,
			ma: 11,
			ag: 15,
			lu: 11
		},
		learnset: [
			{
				name: 'Muzzle Shot',
				level: 0
			},
			{
				name: 'Attack Master',
				level: 0
			},
			{
				name: 'Growth 1',
				level: 21
			},
			{
				name: 'Swift Strike',
				level: 22
			},
			{
				name: 'Poison Mist',
				level: 23
			},
			{
				name: 'Poison Boost',
				level: 25
			},
			{
				name: 'Resist Phys',
				level: 27
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Light'
			],
			resist: [
				'Wind',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Hachiman',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Elec'
		},
		arcana: 'Hierophant',
		race: 'Deity',
		level: 70,
		hp: null,
		mp: null,
		stats: {
			st: 33,
			vi: 39,
			ma: 60,
			ag: 38,
			lu: 47
		},
		learnset: [
			{
				name: 'Maziodyne',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 0
			},
			{
				name: 'Matarukaja',
				level: 0
			},
			{
				name: 'Elec Break',
				level: 72
			},
			{
				name: 'Dekunda',
				level: 74
			},
			{
				name: 'Revolution',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [],
			null: [
				'Ice',
				'Elec'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Hanuman',
		aliases: [],
		affinities: {
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
			inherit: 'Phys'
		},
		arcana: 'Strength',
		race: 'Genma',
		level: 46,
		hp: 267,
		mp: 169,
		stats: {
			st: 44,
			vi: 36,
			ma: 22,
			ag: 32,
			lu: 28
		},
		learnset: [
			{
				name: 'Purple Smoke',
				level: 0
			},
			{
				name: 'Wind Dracostrike',
				level: 0
			},
			{
				name: 'Masukunda',
				level: 47
			},
			{
				name: 'Light Mana Aid',
				level: 48
			},
			{
				name: 'Tetrakarn',
				level: 49
			}
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
		game: 'smt5'
	},
	{
		name: 'Haraedo-no-Okami',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		stats: {
			st: 4,
			vi: 4,
			ma: 4,
			ag: 2,
			lu: 3
		},
		learnset: [
			{
				name: 'Skewer',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 0
			},
			{
				name: 'Bufu',
				level: 6
			},
			{
				name: 'Skull Cracker',
				level: 11
			},
			{
				name: 'Mabufu',
				level: 14
			},
			{
				name: 'Rampage',
				level: 20
			},
			{
				name: 'Assault Dive',
				level: 22
			},
			{
				name: 'Counter - Persona',
				level: 24
			},
			{
				name: 'Gale Slash',
				level: 29
			},
			{
				name: 'Apt Pupil',
				level: 33
			},
			{
				name: 'Attack Master',
				level: 36
			},
			{
				name: 'Black Spot',
				level: 38
			},
			{
				name: 'Counterstrike',
				level: 43
			},
			{
				name: 'Heat Wave',
				level: 46
			},
			{
				name: 'Charge',
				level: 52
			},
			{
				name: 'High Counter',
				level: 61
			},
			{
				name: 'Rainy Death',
				level: 67
			},
			{
				name: 'God\'s Hand',
				level: 70
			},
			{
				name: 'Agneyastra',
				level: 74
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [
				'Ice'
			],
			repel: []
		},
		game: 'p4',
		user: 'Chie Satonaka',
		stage: 3,
		evoSkill: 'Luster Candy'
	},
	{
		name: 'Hariti',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -2,
				Light: 0,
				Dark: 2,
				Almighty: 0,
				Ailment: 2,
				Recovery: 3,
				Support: 0
			},
			inherit: 'Elec'
		},
		arcana: 'Empress',
		race: 'Lady',
		level: 35,
		hp: 166,
		mp: 196,
		stats: {
			st: 25,
			vi: 20,
			ma: 32,
			ag: 25,
			lu: 26
		},
		learnset: [
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Hysterical Slap',
				level: 0
			},
			{
				name: 'Lullaby',
				level: 0
			},
			{
				name: 'Dream Fist',
				level: 36
			},
			{
				name: 'Recarm',
				level: 37
			},
			{
				name: 'Mudoon',
				level: 38
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Resist'
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
		game: 'smt5'
	},
	{
		name: 'Hastur',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Wind'
		},
		arcana: 'Star',
		race: null,
		level: 84,
		hp: null,
		mp: null,
		stats: {
			st: 51,
			vi: 52,
			ma: 59,
			ag: 56,
			lu: 41
		},
		learnset: [
			{
				name: 'Debilitate',
				level: 0
			},
			{
				name: 'Vacuum Wave',
				level: 0
			},
			{
				name: 'Nocturnal Flash',
				level: 0
			},
			{
				name: 'Abyssal Eye',
				level: 86
			},
			{
				name: 'Wind Amp',
				level: 87
			},
			{
				name: 'Spirit Drain',
				level: 88
			},
			{
				name: 'Repel Wind',
				level: 89
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [
				'Fire'
			],
			null: [
				'Psy',
				'Dark'
			],
			drain: [
				'Wind'
			],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Hayataro',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 5,
				Fire: 0,
				Ice: 0,
				Elec: 4,
				Force: -5,
				Light: 3,
				Dark: -3,
				Almighty: 0,
				Ailment: 0,
				Recovery: 3,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Holy',
		level: 40,
		hp: 218,
		mp: 209,
		stats: {
			st: 35,
			vi: 33,
			ma: 27,
			ag: 37,
			lu: 32
		},
		learnset: [
			{
				name: 'Carnage Fang',
				level: 0
			},
			{
				name: 'Phys Block',
				level: 0
			},
			{
				name: 'Sun\'s Radiance',
				level: 0
			},
			{
				name: 'Witness Me',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 41
			},
			{
				name: 'Resist Force',
				level: 42
			},
			{
				name: 'Enduring Soul',
				level: 43
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force',
				'Dark'
			],
			resist: [
				'Phys',
				'Light'
			],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Hecate',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Lovers',
		race: 'Persona',
		level: 5,
		hp: null,
		mp: null,
		stats: {
			st: 3,
			vi: 4,
			ma: 6,
			ag: 4,
			lu: 5
		},
		learnset: [
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Dormina',
				level: 7
			},
			{
				name: 'Tarunda',
				level: 11
			},
			{
				name: 'Maragi',
				level: 13
			},
			{
				name: 'Dekaja',
				level: 16
			},
			{
				name: 'Agilao',
				level: 22
			},
			{
				name: 'Fire Break',
				level: 25
			},
			{
				name: 'Diarama',
				level: 28
			},
			{
				name: 'Lullaby',
				level: 30
			},
			{
				name: 'Ambient Aid',
				level: 33
			},
			{
				name: 'Maragion',
				level: 35
			},
			{
				name: 'Fire Boost',
				level: 38
			},
			{
				name: 'Matarunda',
				level: 41
			},
			{
				name: 'Agidyne',
				level: 46
			},
			{
				name: 'Burn Boost',
				level: 50
			},
			{
				name: 'Maragidyne',
				level: 54
			},
			{
				name: 'Diarahan',
				level: 57
			},
			{
				name: 'Concentrate',
				level: 62
			},
			{
				name: 'Fire Amp',
				level: 68
			},
			{
				name: 'Maragibarion',
				level: 74
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [
				'Elec'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Ann Takamaki',
		stage: 2,
		evoSkill: 'Evade Ice'
	},
	{
		name: 'Hecatoncheires',
		aliases: [],
		affinities: {
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
			inherit: 'Phys'
		},
		arcana: 'Hanged',
		race: 'Jaki',
		level: 55,
		hp: 365,
		mp: 190,
		stats: {
			st: 52,
			vi: 52,
			ma: 21,
			ag: 29,
			lu: 32
		},
		learnset: [
			{
				name: 'Critical Aura',
				level: 0
			},
			{
				name: 'Mortal Jihad',
				level: 0
			},
			{
				name: 'Rampage',
				level: 0
			},
			{
				name: 'Fierce Roar',
				level: 56
			},
			{
				name: 'Critical Zealot',
				level: 57
			},
			{
				name: 'Phys Pleroma',
				level: 58
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Weak',
				Confuse: 'Resist'
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
		game: 'smt5'
	},
	{
		name: 'Helel',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Star',
		race: 'Tyrant',
		level: 87,
		hp: null,
		mp: null,
		stats: {
			st: 56,
			vi: 56,
			ma: 57,
			ag: 49,
			lu: 50
		},
		learnset: [
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Maragidyne',
				level: 0
			},
			{
				name: 'God\'s Hand',
				level: 0
			},
			{
				name: 'Salvation',
				level: 88
			},
			{
				name: 'Insta-Heal',
				level: 90
			},
			{
				name: 'Repel Wind',
				level: 91
			},
			{
				name: 'Arms Master',
				level: 92
			},
			{
				name: 'Morning Star - Persona',
				level: 94
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Phys'
			],
			null: [
				'Fire',
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Hell Biker',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 4,
				Ice: -5,
				Elec: 0,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 2,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Fire'
		},
		arcana: 'Death',
		race: 'Fiend',
		level: 36,
		hp: 194,
		mp: 173,
		stats: {
			st: 26,
			vi: 23,
			ma: 27,
			ag: 34,
			lu: 28
		},
		learnset: [
			{
				name: 'Hell Burner',
				level: 0
			},
			{
				name: 'Hell Exhaust',
				level: 0
			},
			{
				name: 'Hell Spin',
				level: 0
			},
			{
				name: 'Fire Pleroma',
				level: 37
			},
			{
				name: 'Life Aid',
				level: 38
			},
			{
				name: 'Great Life Spring',
				level: 39
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [
				'Fire',
				'Force'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Hereward',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Justice',
		race: 'Persona',
		level: 75,
		hp: null,
		mp: null,
		stats: {
			st: 53,
			vi: 46,
			ma: 47,
			ag: 47,
			lu: 39
		},
		learnset: [
			{
				name: 'Fortify Spirit',
				level: 0
			},
			{
				name: 'Laevateinn',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Debilitate',
				level: 0
			},
			{
				name: 'Riot Gun',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			},
			{
				name: 'Attack Master',
				level: 0
			},
			{
				name: 'Evade Light',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Light'
			],
			resist: [
				'Psy'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Goro Akechi',
		stage: 3,
		evoSkill: 'Rebellion Blade'
	},
	{
		name: 'Hermes',
		aliases: [],
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
			st: 3,
			vi: 2,
			ma: 2,
			ag: 2,
			lu: 1
		},
		learnset: [
			{
				name: 'Cleave',
				level: 0
			},
			{
				name: 'Agi',
				level: 5
			},
			{
				name: 'Re Patra',
				level: 7
			},
			{
				name: 'Rakukaja',
				level: 9
			},
			{
				name: 'Assault Dive',
				level: 18
			},
			{
				name: 'Double Fangs',
				level: 20
			},
			{
				name: 'Kill Rush',
				level: 25
			},
			{
				name: 'Agilao',
				level: 32
			},
			{
				name: 'Counter - Persona',
				level: 35
			},
			{
				name: 'Torrent Shot',
				level: 40
			},
			{
				name: 'Marakukaja',
				level: 44
			},
			{
				name: 'Counterstrike',
				level: 45
			},
			{
				name: 'Blade of Fury',
				level: 50
			},
			{
				name: 'Gigantic Fist',
				level: 55
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Fire'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Junpei Iori',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'High Pixie',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: -4,
				Elec: 1,
				Force: 1,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 1,
				Support: 1
			},
			inherit: 'Wind'
		},
		arcana: 'Fool',
		race: 'Fairy',
		level: 18,
		hp: 93,
		mp: 129,
		stats: {
			st: 9,
			vi: 12,
			ma: 23,
			ag: 20,
			lu: 16
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Sukunda',
				level: 0
			},
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Zanma',
				level: 20
			},
			{
				name: 'Concentrate',
				level: 21
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Resist',
				Seal: 'Resist'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Force'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Himiko',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Lovers',
		race: 'Persona',
		level: 34,
		hp: null,
		mp: null,
		stats: {
			st: 15,
			vi: 20,
			ma: 25,
			ag: 21,
			lu: 24
		},
		learnset: [
			{
				name: 'Analysis',
				level: 0
			},
			{
				name: 'Weakness Scan',
				level: 0
			},
			{
				name: 'Full Analysis',
				level: 0
			},
			{
				name: 'Third Eye',
				level: 0
			},
			{
				name: 'Healing Wave',
				level: 0
			},
			{
				name: 'Stamina Song',
				level: 0
			},
			{
				name: 'Treasure Radar',
				level: 43
			},
			{
				name: 'Enemy Radar',
				level: 52
			},
			{
				name: 'Relaxing Wave',
				level: 61
			},
			{
				name: 'Certain Escape',
				level: 70
			},
			{
				name: 'Vigor Song',
				level: 79
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Rise Kujikawa',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Hitokotonusi',
		aliases: [
			'Hitokoto-Nushi'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Ailment'
		},
		arcana: 'Hermit',
		race: 'Kunitsu',
		level: 41,
		hp: null,
		mp: null,
		stats: {
			st: 28,
			vi: 30,
			ma: 33,
			ag: 20,
			lu: 19
		},
		learnset: [
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Speed Master',
				level: 0
			},
			{
				name: 'Poison Arrow',
				level: 0
			},
			{
				name: 'Zionga',
				level: 43
			},
			{
				name: 'Resist Fire',
				level: 45
			},
			{
				name: 'Elec Boost',
				level: 46
			},
			{
				name: 'Auto-Masuku',
				level: 47
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Ice',
				'Wind'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Hokuto Seikun',
		aliases: [
			'Beidou Xingjun',
			'Beiji Weng'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Elec'
		},
		arcana: 'Hierophant',
		race: 'Fury',
		level: 45,
		hp: null,
		mp: null,
		stats: {
			st: 29,
			vi: 31,
			ma: 34,
			ag: 26,
			lu: 22
		},
		learnset: [
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Elec Boost',
				level: 0
			},
			{
				name: 'Navas Nebula',
				level: 0
			},
			{
				name: 'Blade of Fury',
				level: 47
			},
			{
				name: 'Resist Exhaust',
				level: 48
			},
			{
				name: 'Counterstrike',
				level: 50
			},
			{
				name: 'Ziodyne',
				level: 51
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [],
			null: [],
			drain: [],
			repel: [
				'Elec'
			]
		},
		game: 'p4'
	},
	{
		name: 'Hope Diamond',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Support'
		},
		arcana: 'Death',
		race: 'Treasure',
		level: 40,
		hp: null,
		mp: null,
		stats: {
			st: 40,
			vi: 40,
			ma: 40,
			ag: 40,
			lu: 40
		},
		learnset: [
			{
				name: 'Auto-Mataru',
				level: 0
			},
			{
				name: 'Auto-Maraku',
				level: 0
			},
			{
				name: 'Auto-Masuku',
				level: 0
			},
			{
				name: 'Endure',
				level: 0
			},
			{
				name: 'Regenerate 2',
				level: 0
			},
			{
				name: 'Invigorate 2',
				level: 0
			},
			{
				name: 'High Counter',
				level: 0
			},
			{
				name: 'Fast Heal',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [
				'Phys',
				'Gun'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Horus',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: -4,
				Almighty: 2,
				Ailment: 0,
				Recovery: 2,
				Support: 2
			},
			inherit: 'Almighty'
		},
		arcana: 'Sun',
		race: 'Deity',
		level: 42,
		hp: 194,
		mp: 203,
		stats: {
			st: 25,
			vi: 27,
			ma: 28,
			ag: 38,
			lu: 35
		},
		learnset: [
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'White Dracostrike',
				level: 0
			},
			{
				name: 'Masukukaja',
				level: 43
			},
			{
				name: 'Megido',
				level: 44
			},
			{
				name: 'Great Mana Spring',
				level: 45
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force',
				'Dark'
			],
			resist: [
				'Fire',
				'Elec'
			],
			null: [],
			drain: [],
			repel: [
				'Light'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Hua Po',
		aliases: [],
		affinities: {
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
			inherit: 'Fire'
		},
		arcana: 'Hanged',
		race: 'Jirae',
		level: 31,
		hp: 133,
		mp: 168,
		stats: {
			st: 12,
			vi: 21,
			ma: 31,
			ag: 29,
			lu: 29
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Maragi',
				level: 0
			},
			{
				name: 'Matarunda',
				level: 32
			},
			{
				name: 'Light Mana Aid',
				level: 33
			},
			{
				name: 'Media',
				level: 34
			}
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
		game: 'smt5'
	},
	{
		name: 'Hydra',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 3,
				Ice: -4,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 2,
				Recovery: -1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Drake',
		level: 53,
		hp: 316,
		mp: 194,
		stats: {
			st: 54,
			vi: 43,
			ma: 24,
			ag: 33,
			lu: 30
		},
		learnset: [
			{
				name: 'Fire Breath',
				level: 0
			},
			{
				name: 'Frenzied Chomp',
				level: 0
			},
			{
				name: 'Toxic Breath',
				level: 0
			},
			{
				name: 'Eat Whole',
				level: 54
			},
			{
				name: 'Dragon Eye',
				level: 55
			},
			{
				name: 'Rampage',
				level: 56
			}
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
		game: 'smt5'
	},
	{
		name: 'Idun',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 2,
				Light: 2,
				Dark: -4,
				Almighty: 0,
				Ailment: 0,
				Recovery: 4,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Megami',
		level: 42,
		hp: 204,
		mp: 245,
		stats: {
			st: 19,
			vi: 24,
			ma: 51,
			ag: 33,
			lu: 35
		},
		learnset: [
			{
				name: 'Golden Apple',
				level: 0
			},
			{
				name: 'Marin Karin',
				level: 0
			},
			{
				name: 'Zanma',
				level: 0
			},
			{
				name: 'Diamrita',
				level: 43
			},
			{
				name: 'Mahamaon',
				level: 44
			},
			{
				name: 'Life Aid',
				level: 45
			}
		],
		resistances: {
			ailments: {
				Charm: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Force'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Ikusa',
		aliases: [
			'Yomotsu-Ikusa'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Ailment'
		},
		arcana: 'Hanged',
		race: 'Brute',
		level: 22,
		hp: null,
		mp: null,
		stats: {
			st: 17,
			vi: 18,
			ma: 16,
			ag: 12,
			lu: 10
		},
		learnset: [
			{
				name: 'Cell Breaker',
				level: 0
			},
			{
				name: 'Mabufu',
				level: 0
			},
			{
				name: 'Enervate Boost',
				level: 24
			},
			{
				name: 'Foul Breath',
				level: 25
			},
			{
				name: 'Poison Mist',
				level: 26
			},
			{
				name: 'Poison Boost',
				level: 27
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [
				'Ice'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Inanna',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -6,
				Fire: 5,
				Ice: 5,
				Elec: 5,
				Force: 5,
				Light: 0,
				Dark: 0,
				Almighty: 3,
				Ailment: -6,
				Recovery: -4,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Lady',
		level: 87,
		hp: 467,
		mp: 508,
		stats: {
			st: 57,
			vi: 68,
			ma: 96,
			ag: 59,
			lu: 68
		},
		learnset: [
			{
				name: 'Raging Blizzard',
				level: 0
			},
			{
				name: 'Raging Hellfire',
				level: 0
			},
			{
				name: 'Raging Lightning',
				level: 0
			},
			{
				name: 'Raging Tempest',
				level: 0
			},
			{
				name: 'Impaler\'s Animus',
				level: 88
			},
			{
				name: 'Tetrakarn',
				level: 89
			},
			{
				name: 'Freikugel',
				level: 90
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Phys',
				'Dark'
			],
			resist: [],
			null: [
				'Fire',
				'Ice',
				'Elec',
				'Force'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Incubus',
		aliases: [],
		affinities: {
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
			inherit: 'Ailment'
		},
		arcana: 'Devil',
		race: 'Night',
		level: 22,
		hp: 118,
		mp: 110,
		stats: {
			st: 17,
			vi: 15,
			ma: 17,
			ag: 20,
			lu: 18
		},
		learnset: [
			{
				name: 'Dream Needle',
				level: 0
			},
			{
				name: 'Marin Karin',
				level: 0
			},
			{
				name: 'Life Drain',
				level: 23
			},
			{
				name: 'Zanma',
				level: 24
			},
			{
				name: 'Madness Needle',
				level: 25
			}
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
		game: 'smt5'
	},
	{
		name: 'Inugami',
		aliases: [],
		affinities: {
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
			inherit: 'Fire'
		},
		arcana: 'Hanged',
		race: 'Beast',
		level: 24,
		hp: 114,
		mp: 134,
		stats: {
			st: 16,
			vi: 17,
			ma: 15,
			ag: 25,
			lu: 21
		},
		learnset: [
			{
				name: 'Fire Breath',
				level: 0
			},
			{
				name: 'Inspiring Leader',
				level: 25
			},
			{
				name: 'Scratch Dance',
				level: 26
			},
			{
				name: 'Rakunda',
				level: 27
			}
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
		game: 'smt5'
	},
	{
		name: 'Io',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Lovers',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		stats: {
			st: 1,
			vi: 2,
			ma: 3,
			ag: 1,
			lu: 3
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Patra',
				level: 4
			},
			{
				name: 'Garu',
				level: 5
			},
			{
				name: 'Charmdi',
				level: 16
			},
			{
				name: 'Magaru',
				level: 21
			},
			{
				name: 'Media',
				level: 22
			},
			{
				name: 'Diarama',
				level: 25
			},
			{
				name: 'Recarm',
				level: 28
			},
			{
				name: 'Garula',
				level: 32
			},
			{
				name: 'Me Patra',
				level: 36
			},
			{
				name: 'Mediarama',
				level: 43
			},
			{
				name: 'Magarula',
				level: 46
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Wind'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Yukari Takeba',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Ippon-Datara',
		aliases: [],
		affinities: {
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
			inherit: 'Phys'
		},
		arcana: 'Hermit',
		race: 'Brute',
		level: 17,
		hp: 120,
		mp: 79,
		stats: {
			st: 17,
			vi: 20,
			ma: 12,
			ag: 9,
			lu: 15
		},
		learnset: [
			{
				name: 'Beatdown',
				level: 0
			},
			{
				name: 'Heat Wave',
				level: 0
			},
			{
				name: 'Taunt',
				level: 18
			},
			{
				name: 'Tarukaja',
				level: 19
			}
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
		game: 'smt5'
	},
	{
		name: 'Ishtar',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 2,
				Force: 0,
				Light: 3,
				Dark: -3,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 2
			},
			inherit: 'Recovery'
		},
		arcana: 'Lovers',
		race: 'Lady',
		level: 62,
		hp: 310,
		mp: 317,
		stats: {
			st: 20,
			vi: 33,
			ma: 61,
			ag: 41,
			lu: 53
		},
		learnset: [
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'Bowl of Hygieia',
				level: 63
			},
			{
				name: 'Dekunda',
				level: 64
			},
			{
				name: 'Null Dark',
				level: 65
			}
		],
		resistances: {
			ailments: {
				Charm: 'Resist'
			},
			weak: [
				'Force',
				'Dark'
			],
			resist: [],
			null: [
				'Elec',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Isis',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -4,
				Fire: 0,
				Ice: 0,
				Elec: 4,
				Force: 0,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Ailment: 0,
				Recovery: 3,
				Support: 1
			},
			inherit: 'Recovery'
		},
		arcana: 'Priestess',
		race: 'Lady',
		level: 46,
		hp: 204,
		mp: 251,
		stats: {
			st: 21,
			vi: 25,
			ma: 47,
			ag: 36,
			lu: 36
		},
		learnset: [
			{
				name: 'Elec Block',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 47
			},
			{
				name: 'Mazionga',
				level: 48
			},
			{
				name: 'Marakukaja',
				level: 49
			}
		],
		resistances: {
			ailments: {
				Seal: 'Weak'
			},
			weak: [
				'Dark'
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
		game: 'smt5'
	},
	{
		name: 'Isis - P3',
		aliases: [
			'Isis'
		],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Lovers',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		stats: {
			st: 1,
			vi: 3,
			ma: 2,
			ag: 1,
			lu: 3
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Patra',
				level: 4
			},
			{
				name: 'Garu',
				level: 5
			},
			{
				name: 'Charmdi',
				level: 16
			},
			{
				name: 'Magaru',
				level: 21
			},
			{
				name: 'Media',
				level: 22
			},
			{
				name: 'Diarama',
				level: 25
			},
			{
				name: 'Recarm',
				level: 28
			},
			{
				name: 'Garula',
				level: 32
			},
			{
				name: 'Me Patra',
				level: 36
			},
			{
				name: 'Mediarama',
				level: 43
			},
			{
				name: 'Magarula',
				level: 46
			},
			{
				name: 'Diarahan',
				level: 52
			},
			{
				name: 'Garudyne',
				level: 57
			},
			{
				name: 'Wind Break',
				level: 60
			},
			{
				name: 'Magarudyne',
				level: 65
			},
			{
				name: 'Samarecarm',
				level: 68
			},
			{
				name: 'Mediarahan',
				level: 74
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Wind'
			],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Yukari Takeba',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Izanagi',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Elec'
		},
		arcana: 'Fool',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		stats: {
			st: 3,
			vi: 2,
			ma: 2,
			ag: 3,
			lu: 2
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Cleave',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Rakunda',
				level: 3
			},
			{
				name: 'Tarukaja',
				level: 5
			},
			{
				name: 'Cross Slash',
				level: 20
			},
			{
				name: 'Zionga',
				level: 20
			},
			{
				name: 'Rising Slash',
				level: 21
			},
			{
				name: 'Dodge Phys',
				level: 22
			},
			{
				name: 'Mazionga',
				level: 24
			},
			{
				name: 'Growth 3',
				level: 25
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Elec'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'P4 Protgaonist',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Izanagi Picaro',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Fool',
		race: 'Picaro',
		level: 23,
		hp: null,
		mp: null,
		stats: {
			st: 16,
			vi: 15,
			ma: 15,
			ag: 16,
			lu: 14
		},
		learnset: [
			{
				name: 'Cross Slash',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Rising Slash',
				level: 24
			},
			{
				name: 'Null Phys',
				level: 25
			},
			{
				name: 'Mazionga',
				level: 27
			},
			{
				name: 'Growth 3',
				level: 28
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [],
			null: [
				'Elec',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Izanagi-no-Okami',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'World',
		race: 'Persona',
		level: 80,
		hp: null,
		mp: null,
		stats: {
			st: 52,
			vi: 46,
			ma: 56,
			ag: 48,
			lu: 45
		},
		learnset: [
			{
				name: 'Myriad Truths',
				level: 0
			},
			{
				name: 'Victory Cry',
				level: 0
			},
			{
				name: 'Angelic Grace',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 81
			},
			{
				name: 'Heat Riser',
				level: 82
			},
			{
				name: 'Heat Up',
				level: 83
			},
			{
				name: 'Salvation',
				level: 84
			},
			{
				name: 'Almighty Boost',
				level: 85
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [
				'Phys',
				'Gun',
				'Fire',
				'Ice',
				'Wind',
				'Elec',
				'Psy',
				'Nuke'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'P4 Protagonist',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Izanagi-no-Okami Picaro',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'World',
		race: 'Picaro',
		level: 89,
		hp: null,
		mp: null,
		stats: {
			st: 54,
			vi: 56,
			ma: 61,
			ag: 58,
			lu: 45
		},
		learnset: [
			{
				name: 'Myriad Truths',
				level: 0
			},
			{
				name: 'Victory Cry',
				level: 0
			},
			{
				name: 'Angelic Grace',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 90
			},
			{
				name: 'Debilitate',
				level: 91
			},
			{
				name: 'Enduring Soul',
				level: 92
			},
			{
				name: 'Salvation',
				level: 93
			},
			{
				name: 'Almighty Boost',
				level: 94
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [
				'Phys',
				'Gun',
				'Fire',
				'Ice',
				'Wind',
				'Elec',
				'Psy',
				'Nuke'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Jack Frost',
		aliases: [],
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
		game: 'smt5'
	},
	{
		name: 'Jack-o\'-Lantern',
		aliases: [
			'Pyro Jack'
		],
		affinities: {
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
			inherit: 'Fire'
		},
		arcana: 'Magician',
		race: 'Fairy',
		level: 20,
		hp: 90,
		mp: 135,
		stats: {
			st: 11,
			vi: 12,
			ma: 23,
			ag: 19,
			lu: 18
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Maragi',
				level: 0
			},
			{
				name: 'Tarunda',
				level: 21
			},
			{
				name: 'Life Spring',
				level: 23
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Weak'
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
		game: 'smt5'
	},
	{
		name: 'Jatayu',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 4,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 3
			},
			inherit: 'Wind'
		},
		arcana: 'Hanged',
		race: 'Avian',
		level: 32,
		hp: 165,
		mp: 158,
		stats: {
			st: 22,
			vi: 24,
			ma: 18,
			ag: 27,
			lu: 26
		},
		learnset: [
			{
				name: 'Axel Claw',
				level: 0
			},
			{
				name: 'Masukukaja',
				level: 0
			},
			{
				name: 'Mazanma',
				level: 0
			},
			{
				name: 'Force Block',
				level: 33
			},
			{
				name: 'Critical Aura',
				level: 34
			},
			{
				name: 'Force Pleroma',
				level: 35
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec',
				'Dark'
			],
			resist: [],
			null: [],
			drain: [
				'Force'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Jikokuten',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: -5,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 3
			},
			inherit: 'Phys'
		},
		arcana: 'Temperance',
		race: 'Kishin',
		level: 51,
		hp: 312,
		mp: 212,
		stats: {
			st: 40,
			vi: 42,
			ma: 38,
			ag: 24,
			lu: 29
		},
		learnset: [
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Deathbound',
				level: 0
			},
			{
				name: 'Ice Block',
				level: 0
			},
			{
				name: 'Mabufula',
				level: 0
			},
			{
				name: 'Fogna',
				level: 52
			},
			{
				name: 'Dragon Eye',
				level: 53
			},
			{
				name: 'Marakunda',
				level: 54
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire'
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
		game: 'smt5'
	},
	{
		name: 'Jinn',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Fire'
		},
		arcana: 'Magician',
		race: 'Yoma',
		level: 62,
		hp: null,
		mp: null,
		stats: {
			st: 27,
			vi: 38,
			ma: 51,
			ag: 39,
			lu: 28
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Resist Phys',
				level: 65
			},
			{
				name: 'Fire Boost',
				level: 66
			},
			{
				name: 'Null Phys',
				level: 67
			},
			{
				name: 'Wage War',
				level: 68
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [],
			null: [],
			drain: [
				'Fire'
			],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Jiraiya',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Magician',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		stats: {
			st: 5,
			vi: 3,
			ma: 3,
			ag: 5,
			lu: 4
		},
		learnset: [
			{
				name: 'Garu',
				level: 0
			},
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 6
			},
			{
				name: 'Makajama',
				level: 10
			},
			{
				name: 'Sonic Punch',
				level: 14
			},
			{
				name: 'Magaru',
				level: 18
			},
			{
				name: 'Tentarafoo',
				level: 23
			},
			{
				name: 'Garula',
				level: 29
			},
			{
				name: 'Power Slash',
				level: 34
			},
			{
				name: 'Magarula',
				level: 40
			},
			{
				name: 'Wind Boost',
				level: 44
			},
			{
				name: 'Wind Break',
				level: 49
			},
			{
				name: 'Garudyne',
				level: 53
			},
			{
				name: 'Masukukaja',
				level: 60
			},
			{
				name: 'Magarudyne',
				level: 64
			},
			{
				name: 'Brave Blade',
				level: 69
			},
			{
				name: 'Wind Amp',
				level: 73
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Wind'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Yosuke Hanamura',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Johanna',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Priestess',
		race: 'Persona',
		level: 21,
		hp: null,
		mp: null,
		stats: {
			st: 15,
			vi: 14,
			ma: 15,
			ag: 15,
			lu: 11
		},
		learnset: [
			{
				name: 'Frei',
				level: 0
			},
			{
				name: 'Mafrei',
				level: 0
			},
			{
				name: 'Vajra Blast',
				level: 0
			},
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Freila',
				level: 24
			},
			{
				name: 'Energy Shower',
				level: 27
			},
			{
				name: 'Flash Bomb',
				level: 31
			},
			{
				name: 'Dekunda',
				level: 34
			},
			{
				name: 'Defense Master',
				level: 36
			},
			{
				name: 'Mafreila',
				level: 38
			},
			{
				name: 'Mediarama',
				level: 41
			},
			{
				name: 'Nuke Break',
				level: 43
			},
			{
				name: 'Nuke Boost',
				level: 45
			},
			{
				name: 'Marakukaja',
				level: 48
			},
			{
				name: 'Freidyne',
				level: 50
			},
			{
				name: 'Diarahan',
				level: 54
			},
			{
				name: 'Mafreidyne',
				level: 59
			},
			{
				name: 'Mediarahan',
				level: 65
			},
			{
				name: 'Nuke Amp',
				level: 71
			},
			{
				name: 'Atomic Flare',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Psy'
			],
			resist: [
				'Nuke'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Makoto Niijima',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Juno',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Priestess',
		race: 'Persona',
		level: 17,
		hp: null,
		mp: null,
		stats: {
			st: 8,
			vi: 12,
			ma: 14,
			ag: 9,
			lu: 12
		},
		learnset: [
			{
				name: 'Full Analysis',
				level: 0
			},
			{
				name: 'Support Scan',
				level: 23
			},
			{
				name: 'Third Eye',
				level: 32
			},
			{
				name: 'Healing Wave',
				level: 41
			},
			{
				name: 'Oracle',
				level: 50
			},
			{
				name: 'Escape Route',
				level: 72
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Fuuka Yamagishi',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Kaguya',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Moon',
		race: 'Persona',
		level: 16,
		hp: null,
		mp: null,
		stats: {
			st: 11,
			vi: 12,
			ma: 15,
			ag: 11,
			lu: 6
		},
		learnset: [
			{
				name: 'Shining Arrows',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Counterstrike',
				level: 0
			},
			{
				name: 'Divine Grace',
				level: 17
			},
			{
				name: 'Me Patra',
				level: 18
			},
			{
				name: 'Diarahan',
				level: 21
			},
			{
				name: 'Repel Phys',
				level: 22
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [
				'Wind'
			],
			null: [
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Marie',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Kaguya Picaro',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Moon',
		race: 'Picaro',
		level: 25,
		hp: null,
		mp: null,
		stats: {
			st: 17,
			vi: 19,
			ma: 20,
			ag: 15,
			lu: 11
		},
		learnset: [
			{
				name: 'Shining Arrows',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'High Counter',
				level: 0
			},
			{
				name: 'Divine Grace',
				level: 26
			},
			{
				name: 'Me Patra',
				level: 27
			},
			{
				name: 'Diarahan',
				level: 30
			},
			{
				name: 'Repel Phys',
				level: 31
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Kaiwan',
		aliases: [],
		affinities: {
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
			inherit: 'Psy'
		},
		arcana: 'Star',
		race: 'Night',
		level: 45,
		hp: 209,
		mp: 216,
		stats: {
			st: 24,
			vi: 27,
			ma: 30,
			ag: 41,
			lu: 38
		},
		learnset: [
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 46
			},
			{
				name: 'Masukukaja',
				level: 47
			},
			{
				name: 'Hellish Mask',
				level: 48
			}
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
		game: 'smt5'
	},
	{
		name: 'Kala-Nemi',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Justice',
		race: 'Persona',
		level: 36,
		hp: null,
		mp: null,
		stats: {
			st: 21,
			vi: 23,
			ma: 25,
			ag: 26,
			lu: 20
		},
		learnset: [
			{
				name: 'Hama',
				level: 0
			},
			{
				name: 'Cruel Attack',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 37
			},
			{
				name: 'Hamaon',
				level: 41
			},
			{
				name: 'Recarm',
				level: 42
			},
			{
				name: 'Arms Master',
				level: 54
			},
			{
				name: 'Ziodyne',
				level: 55
			},
			{
				name: 'Vile Assault',
				level: 59
			},
			{
				name: 'Diarahan',
				level: 62
			},
			{
				name: 'Primal Force',
				level: 65
			},
			{
				name: 'Samarecarm',
				level: 73
			},
			{
				name: 'Mediarahan',
				level: 78
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Ken Amada',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Kali',
		aliases: [],
		affinities: {
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
			inherit: 'Psy'
		},
		arcana: 'Empress',
		race: 'Femme',
		level: 76,
		hp: 481,
		mp: 288,
		stats: {
			st: 74,
			vi: 62,
			ma: 35,
			ag: 48,
			lu: 35
		},
		learnset: [
			{
				name: 'Black Dracostrike',
				level: 0
			},
			{
				name: 'Figment Slash',
				level: 0
			},
			{
				name: 'Hell Thrust',
				level: 0
			},
			{
				name: 'Maragibarion',
				level: 77
			},
			{
				name: 'Murderous Glee',
				level: 78
			},
			{
				name: 'Catastrophe',
				level: 79
			}
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
		game: 'smt5'
	},
	{
		name: 'Kamu Susano-o',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Emperor',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		stats: {
			st: 13,
			vi: 11,
			ma: 10,
			ag: 10,
			lu: 8
		},
		learnset: [
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Giant Slice',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Vicious Strike',
				level: 18
			},
			{
				name: 'Mabufu',
				level: 20
			},
			{
				name: 'Counter - Persona',
				level: 22
			},
			{
				name: 'Rising Slash',
				level: 23
			},
			{
				name: 'Dormin Rush',
				level: 27
			},
			{
				name: 'Bufula',
				level: 29
			},
			{
				name: 'Speed Master',
				level: 31
			},
			{
				name: 'Tempest Slash',
				level: 34
			},
			{
				name: 'Counterstrike',
				level: 37
			},
			{
				name: 'Mabufula',
				level: 40
			},
			{
				name: 'Heat Wave',
				level: 43
			},
			{
				name: 'Deadly Fury',
				level: 47
			},
			{
				name: 'Masukukaja',
				level: 49
			},
			{
				name: 'Bufudyne',
				level: 53
			},
			{
				name: 'High Counter',
				level: 58
			},
			{
				name: 'Myriad Slashes',
				level: 62
			},
			{
				name: 'Mabufudyne',
				level: 65
			},
			{
				name: 'Vorpal Blade',
				level: 69
			},
			{
				name: 'Brave Blade',
				level: 73
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [
				'Wind'
			],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Yusuke Kitagawa',
		stage: 2,
		evoSkill: 'Evade Fire'
	},
	{
		name: 'Kamui',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Star',
		race: 'Persona',
		level: 35,
		hp: null,
		mp: null,
		stats: {
			st: 24,
			vi: 20,
			ma: 25,
			ag: 22,
			lu: 16
		},
		learnset: [
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Energy Shower',
				level: 0
			},
			{
				name: 'Poison Skewer',
				level: 0
			},
			{
				name: 'Re Patra',
				level: 0
			},
			{
				name: 'Traesto',
				level: 36
			},
			{
				name: 'Mabufula',
				level: 38
			},
			{
				name: 'Ice Boost',
				level: 40
			},
			{
				name: 'Matarukaja',
				level: 42
			},
			{
				name: 'Ice Break',
				level: 44
			},
			{
				name: 'Diarahan',
				level: 49
			},
			{
				name: 'Bufudyne',
				level: 54
			},
			{
				name: 'Marakukaja',
				level: 58
			},
			{
				name: 'Me Patra',
				level: 61
			},
			{
				name: 'Gigantic Fist',
				level: 63
			},
			{
				name: 'Mabufudyne',
				level: 67
			},
			{
				name: 'Mediarahan',
				level: 70
			},
			{
				name: 'Ice Amp',
				level: 72
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Wind',
				'Dark'
			],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Teddie',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Kamui-Moshiri',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Star',
		race: 'Persona',
		level: 35,
		hp: null,
		mp: null,
		stats: {
			st: 24,
			vi: 20,
			ma: 25,
			ag: 22,
			lu: 16
		},
		learnset: [
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Energy Shower',
				level: 0
			},
			{
				name: 'Poison Skewer',
				level: 0
			},
			{
				name: 'Re Patra',
				level: 0
			},
			{
				name: 'Traesto',
				level: 36
			},
			{
				name: 'Mabufula',
				level: 38
			},
			{
				name: 'Ice Boost',
				level: 40
			},
			{
				name: 'Matarukaja',
				level: 42
			},
			{
				name: 'Ice Break',
				level: 44
			},
			{
				name: 'Diarahan',
				level: 49
			},
			{
				name: 'Bufudyne',
				level: 54
			},
			{
				name: 'Marakukaja',
				level: 58
			},
			{
				name: 'Me Patra',
				level: 61
			},
			{
				name: 'Gigantic Fist',
				level: 63
			},
			{
				name: 'Mabufudyne',
				level: 67
			},
			{
				name: 'Mediarahan',
				level: 70
			},
			{
				name: 'Ice Amp',
				level: 72
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [
				'Wind',
				'Dark'
			],
			drain: [
				'Ice'
			],
			repel: []
		},
		game: 'p4',
		user: 'Teddie',
		stage: 3,
		evoSkill: 'Kamui Miracle'
	},
	{
		name: 'Kanzeon',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Lovers',
		race: 'Persona',
		level: 34,
		hp: null,
		mp: null,
		stats: {
			st: 15,
			vi: 20,
			ma: 25,
			ag: 21,
			lu: 24
		},
		learnset: [
			{
				name: 'Analysis',
				level: 0
			},
			{
				name: 'Weakness Scan',
				level: 0
			},
			{
				name: 'Full Analysis',
				level: 0
			},
			{
				name: 'Third Eye',
				level: 0
			},
			{
				name: 'Healing Wave',
				level: 0
			},
			{
				name: 'Stamina Song',
				level: 0
			},
			{
				name: 'Treasure Radar',
				level: 43
			},
			{
				name: 'Enemy Radar',
				level: 52
			},
			{
				name: 'Relaxing Wave',
				level: 61
			},
			{
				name: 'Certain Escape',
				level: 70
			},
			{
				name: 'Vigor Song',
				level: 79
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Rise Kujikawa',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Kartikeya',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Elec'
		},
		arcana: 'Star',
		race: 'Fury',
		level: 67,
		hp: null,
		mp: null,
		stats: {
			st: 47,
			vi: 40,
			ma: 39,
			ag: 44,
			lu: 38
		},
		learnset: [
			{
				name: 'Maziodyne',
				level: 0
			},
			{
				name: 'Auto-Mataru',
				level: 0
			},
			{
				name: 'High Counter',
				level: 68
			},
			{
				name: 'Myriad Arrows',
				level: 69
			},
			{
				name: 'Growth 2',
				level: 70
			},
			{
				name: 'Primal Force',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: [
				'Elec'
			]
		},
		game: 'p4'
	},
	{
		name: 'Kaya-no-Hime',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: null,
		race: 'Jirae',
		level: 21,
		hp: 94,
		mp: 143,
		stats: {
			st: 10,
			vi: 12,
			ma: 25,
			ag: 18,
			lu: 21
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Harvest Dance',
				level: 0
			},
			{
				name: 'Patra',
				level: 22
			},
			{
				name: 'Mabufu',
				level: 23
			},
			{
				name: 'Rakunda',
				level: 24
			}
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
		game: 'smt5'
	},
	{
		name: 'Kelpie',
		aliases: [],
		affinities: {
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
			inherit: 'Wind'
		},
		arcana: 'Strength',
		race: 'Fairy',
		level: 30,
		hp: 136,
		mp: 153,
		stats: {
			st: 20,
			vi: 21,
			ma: 19,
			ag: 29,
			lu: 24
		},
		learnset: [
			{
				name: 'Berserker God',
				level: 0
			},
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Inspiring Leader',
				level: 0
			},
			{
				name: 'Dustoma',
				level: 31
			},
			{
				name: 'Masukunda',
				level: 32
			},
			{
				name: 'Resist Elec',
				level: 33
			}
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
		game: 'smt5'
	},
	{
		name: 'Khonsu',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 4,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 5,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 62,
		hp: 358,
		mp: 293,
		stats: {
			st: 49,
			vi: 42,
			ma: 53,
			ag: 30,
			lu: 44
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Karnak',
				level: 0
			},
			{
				name: 'Mahamaon',
				level: 63
			},
			{
				name: 'Resist Phys',
				level: 64
			},
			{
				name: 'Debilitate',
				level: 65
			}
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
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Khonsu Ra',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 7,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: -5,
				Dark: 0,
				Almighty: 3,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 78,
		hp: 434,
		mp: 413,
		stats: {
			st: 49,
			vi: 50,
			ma: 72,
			ag: 54,
			lu: 55
		},
		learnset: [
			{
				name: 'Mahamabarion',
				level: 0
			},
			{
				name: 'Maragibarion',
				level: 0
			},
			{
				name: 'Trisagion',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 79
			},
			{
				name: 'High Fire Pleroma',
				level: 80
			},
			{
				name: 'Null Phys',
				level: 81
			}
		],
		resistances: {
			ailments: {
				Seal: 'Null'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Elec',
				'Force'
			],
			null: [
				'Fire'
			],
			drain: [
				'Light'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Kikuri-Hime',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -2,
				Fire: 0,
				Ice: 0,
				Elec: -5,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 3,
				Support: 2
			},
			inherit: 'Support'
		},
		arcana: 'Priestess',
		race: 'Lady',
		level: 24,
		hp: 105,
		mp: 165,
		stats: {
			st: 10,
			vi: 15,
			ma: 30,
			ag: 20,
			lu: 20
		},
		learnset: [
			{
				name: 'Tarunda',
				level: 0
			},
			{
				name: 'Zanma',
				level: 0
			},
			{
				name: 'Recarm',
				level: 25
			},
			{
				name: 'Media',
				level: 26
			},
			{
				name: 'Life Spring',
				level: 27
			}
		],
		resistances: {
			ailments: {
				Charm: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Light'
			],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Kin-Ki',
		aliases: [],
		affinities: {
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
			inherit: 'Phys'
		},
		arcana: 'Chariot',
		race: 'Brute',
		level: 49,
		hp: 323,
		mp: 170,
		stats: {
			st: 43,
			vi: 52,
			ma: 27,
			ag: 21,
			lu: 25
		},
		learnset: [
			{
				name: 'Berserker God',
				level: 0
			},
			{
				name: 'Deathbound',
				level: 0
			},
			{
				name: 'Retaliate',
				level: 0
			},
			{
				name: 'Shockbound',
				level: 50
			},
			{
				name: 'Endure',
				level: 51
			},
			{
				name: 'Rampage',
				level: 52
			}
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
		game: 'smt5'
	},
	{
		name: 'King Frost',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -6,
				Ice: 5,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 1,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Ice'
		},
		arcana: 'Emperor',
		race: 'Tyrant',
		level: 33,
		hp: 172,
		mp: 175,
		stats: {
			st: 27,
			vi: 21,
			ma: 34,
			ag: 21,
			lu: 26
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Ice Pleroma',
				level: 0
			},
			{
				name: 'King Bufula',
				level: 0
			},
			{
				name: 'Beatdown',
				level: 34
			},
			{
				name: 'Matarukaja',
				level: 35
			},
			{
				name: 'Concentrate',
				level: 36
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire',
				'Dark'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [
				'Ice'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Kingu',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Recovery'
		},
		arcana: 'Aeon',
		race: 'Drake',
		level: 58,
		hp: null,
		mp: null,
		stats: {
			st: 38,
			vi: 38,
			ma: 44,
			ag: 30,
			lu: 31
		},
		learnset: [
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Evade Fire',
				level: 0
			},
			{
				name: 'Auto-Masuku',
				level: 0
			},
			{
				name: 'Null Confuse',
				level: 59
			},
			{
				name: 'Null Poison',
				level: 60
			},
			{
				name: 'Vicious Strike',
				level: 62
			},
			{
				name: 'Endure',
				level: 63
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [
				'Elec',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Kintoki-Douji',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Star',
		race: 'Persona',
		level: 35,
		hp: null,
		mp: null,
		stats: {
			st: 24,
			vi: 20,
			ma: 25,
			ag: 22,
			lu: 16
		},
		learnset: [
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Energy Shower',
				level: 0
			},
			{
				name: 'Poison Skewer',
				level: 0
			},
			{
				name: 'Re Patra',
				level: 0
			},
			{
				name: 'Traesto',
				level: 36
			},
			{
				name: 'Mabufula',
				level: 38
			},
			{
				name: 'Ice Boost',
				level: 40
			},
			{
				name: 'Matarukaja',
				level: 42
			},
			{
				name: 'Ice Break',
				level: 44
			},
			{
				name: 'Diarahan',
				level: 49
			},
			{
				name: 'Bufudyne',
				level: 54
			},
			{
				name: 'Marakukaja',
				level: 58
			},
			{
				name: 'Me Patra',
				level: 61
			},
			{
				name: 'Gigantic Fist',
				level: 63
			},
			{
				name: 'Mabufudyne',
				level: 67
			},
			{
				name: 'Mediarahan',
				level: 70
			},
			{
				name: 'Ice Amp',
				level: 72
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p4',
		user: 'Teddie',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Kodama',
		aliases: [],
		affinities: {
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
			inherit: 'Ailment'
		},
		arcana: 'Star',
		race: 'Jirae',
		level: 6,
		hp: 46,
		mp: 65,
		stats: {
			st: 5,
			vi: 8,
			ma: 9,
			ag: 8,
			lu: 9
		},
		learnset: [
			{
				name: 'Zan',
				level: 0
			},
			{
				name: 'Dormina',
				level: 7
			},
			{
				name: 'Dia',
				level: 8
			}
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
		game: 'smt5'
	},
	{
		name: 'Koh-i-Noor',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Support'
		},
		arcana: 'Priestess',
		race: 'Treasure',
		level: 25,
		hp: null,
		mp: null,
		stats: {
			st: 25,
			vi: 25,
			ma: 25,
			ag: 25,
			lu: 25
		},
		learnset: [
			{
				name: 'Dodge Fire',
				level: 0
			},
			{
				name: 'Dodge Ice',
				level: 0
			},
			{
				name: 'Dodge Elec',
				level: 0
			},
			{
				name: 'Dodge Wind',
				level: 0
			},
			{
				name: 'Dodge Psy',
				level: 0
			},
			{
				name: 'Dodge Nuke',
				level: 0
			},
			{
				name: 'Dodge Light',
				level: 0
			},
			{
				name: 'Dodge Dark',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Gun'
			],
			resist: [
				'Phys'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Kohryu',
		aliases: [
			'Huang Long'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -5,
				Almighty: 5,
				Ailment: 0,
				Recovery: 2,
				Support: 2
			},
			inherit: 'Psy'
		},
		arcana: 'Hierophant',
		race: 'Dragon',
		level: 78,
		hp: 455,
		mp: 365,
		stats: {
			st: 56,
			vi: 57,
			ma: 58,
			ag: 58,
			lu: 56
		},
		learnset: [
			{
				name: 'Luster Candy',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 0
			},
			{
				name: 'Fierce Roar',
				level: 79
			},
			{
				name: 'Almighty Pleroma',
				level: 80
			},
			{
				name: 'Phys Block',
				level: 81
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Resist'
			},
			weak: [
				'Dark'
			],
			resist: [
				'Fire',
				'Ice',
				'Elec',
				'Force'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Konohana Sakuya',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Priestess',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		stats: {
			st: 8,
			vi: 11,
			ma: 15,
			ag: 8,
			lu: 10
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Maragi',
				level: 0
			},
			{
				name: 'Media',
				level: 16
			},
			{
				name: 'Agilao',
				level: 21
			},
			{
				name: 'Recarm',
				level: 26
			},
			{
				name: 'Fire Break',
				level: 30
			},
			{
				name: 'Diarama',
				level: 33
			},
			{
				name: 'Maragion',
				level: 39
			},
			{
				name: 'Mediarama',
				level: 43
			},
			{
				name: 'Fire Boost',
				level: 45
			},
			{
				name: 'Agidyne',
				level: 51
			},
			{
				name: 'Diarahan',
				level: 55
			},
			{
				name: 'Samarecarm',
				level: 59
			},
			{
				name: 'Mediarahan',
				level: 65
			},
			{
				name: 'Maragidyne',
				level: 68
			},
			{
				name: 'Salvation',
				level: 74
			},
			{
				name: 'Fire Amp',
				level: 76
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [
				'Fire'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Yukiko Amagi',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Koppa Tengu',
		aliases: [],
		affinities: {
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
			inherit: 'Wind'
		},
		arcana: 'Temperance',
		race: 'Yoma',
		level: 24,
		hp: 116,
		mp: 129,
		stats: {
			st: 13,
			vi: 16,
			ma: 18,
			ag: 27,
			lu: 20
		},
		learnset: [
			{
				name: 'Mazan',
				level: 0
			},
			{
				name: 'Zanma',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 25
			},
			{
				name: 'Blinding Strike',
				level: 26
			},
			{
				name: 'Force Block',
				level: 27
			}
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
		game: 'smt5'
	},
	{
		name: 'Koropokguru',
		aliases: [
			'Koropokkuru',
			'Koropokkur'
		],
		affinities: {
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
			inherit: 'Ice'
		},
		arcana: 'Hermit',
		race: 'Jirae',
		level: 26,
		hp: 118,
		mp: 148,
		stats: {
			st: 13,
			vi: 15,
			ma: 27,
			ag: 21,
			lu: 25
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Mabufu',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 0
			},
			{
				name: 'Trafuri',
				level: 27
			},
			{
				name: 'Tarunda',
				level: 28
			},
			{
				name: 'Ice Block',
				level: 29
			}
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
		game: 'smt5'
	},
	{
		name: 'Koumokuten',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 0,
				Ice: 0,
				Elec: -4,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 3
			},
			inherit: 'Phys'
		},
		arcana: 'Hermit',
		race: 'Kishin',
		level: 44,
		hp: 249,
		mp: 194,
		stats: {
			st: 33,
			vi: 33,
			ma: 31,
			ag: 29,
			lu: 30
		},
		learnset: [
			{
				name: 'Crusher Onslaught',
				level: 0
			},
			{
				name: 'Fang Breaker',
				level: 0
			},
			{
				name: 'Marakunda',
				level: 0
			},
			{
				name: 'Mazanma',
				level: 0
			},
			{
				name: 'Force Block',
				level: 45
			},
			{
				name: 'Purple Smoke',
				level: 46
			},
			{
				name: 'Life Aid',
				level: 47
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec'
			],
			resist: [
				'Light'
			],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Kouzeon',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Lovers',
		race: 'Persona',
		level: 34,
		hp: null,
		mp: null,
		stats: {
			st: 15,
			vi: 20,
			ma: 25,
			ag: 21,
			lu: 24
		},
		learnset: [
			{
				name: 'Analysis',
				level: 0
			},
			{
				name: 'Weakness Scan',
				level: 0
			},
			{
				name: 'Full Analysis',
				level: 0
			},
			{
				name: 'Third Eye',
				level: 0
			},
			{
				name: 'Healing Wave',
				level: 0
			},
			{
				name: 'Stamina Song',
				level: 0
			},
			{
				name: 'Treasure Radar',
				level: 43
			},
			{
				name: 'Enemy Radar',
				level: 52
			},
			{
				name: 'Relaxing Wave',
				level: 61
			},
			{
				name: 'Certain Escape',
				level: 70
			},
			{
				name: 'Vigor Song',
				level: 79
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Rise Kujikawa',
		stage: 3,
		evoSkill: 'Complete Analysis'
	},
	{
		name: 'Kumbhanda',
		aliases: [],
		affinities: {
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
			inherit: 'Ailment'
		},
		arcana: 'Hermit',
		race: 'Haunt',
		level: 41,
		hp: 208,
		mp: 168,
		stats: {
			st: 32,
			vi: 26,
			ma: 30,
			ag: 29,
			lu: 27
		},
		learnset: [
			{
				name: 'Critical Wave',
				level: 0
			},
			{
				name: 'Fatal Sword',
				level: 0
			},
			{
				name: 'Spirit Drain',
				level: 0
			},
			{
				name: 'Zanma',
				level: 42
			},
			{
				name: 'Dark Block',
				level: 43
			},
			{
				name: 'Bloody Glee',
				level: 44
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Weak',
				Poison: 'Resist',
				Confuse: 'Resist',
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
		game: 'smt5'
	},
	{
		name: 'Kurama Tengu',
		aliases: [],
		affinities: {
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
			inherit: 'Wind'
		},
		arcana: 'Hermit',
		race: 'Genma',
		level: 39,
		hp: 179,
		mp: 186,
		stats: {
			st: 28,
			vi: 25,
			ma: 21,
			ag: 36,
			lu: 31
		},
		learnset: [
			{
				name: 'Acrobat Kick',
				level: 0
			},
			{
				name: 'Wind Dracostrike',
				level: 0
			},
			{
				name: 'Mahama',
				level: 40
			},
			{
				name: 'Light Life Aid',
				level: 41
			},
			{
				name: 'Mazanma',
				level: 42
			}
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
		game: 'smt5'
	},
	{
		name: 'Kushi Mitama',
		aliases: [
			'Kusi Mitama'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Recovery'
		},
		arcana: 'Councillor',
		race: 'Mitama',
		level: 12,
		hp: null,
		mp: null,
		stats: {
			st: 7,
			vi: 9,
			ma: 11,
			ag: 8,
			lu: 8
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Media',
				level: 0
			},
			{
				name: 'Makajama',
				level: 0
			},
			{
				name: 'Regenerate 1',
				level: 13
			},
			{
				name: 'Wind Wall',
				level: 14
			},
			{
				name: 'Seal Boost',
				level: 16
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [
				'Wind'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Kushinada',
		aliases: [
			'Kushinada-Hime'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: -3,
				Almighty: 0,
				Ailment: 0,
				Recovery: 4,
				Support: 1
			},
			inherit: 'Recovery'
		},
		arcana: 'Lovers',
		race: 'Kunitsu',
		level: 49,
		hp: 218,
		mp: 259,
		stats: {
			st: 22,
			vi: 27,
			ma: 50,
			ag: 36,
			lu: 37
		},
		learnset: [
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Mahamaon',
				level: 50
			},
			{
				name: 'Heal Pleroma',
				level: 51
			},
			{
				name: 'Phys Block',
				level: 52
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Dark'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Lachesis',
		aliases: [],
		affinities: {
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
			inherit: 'Ice'
		},
		arcana: 'Fortune',
		race: 'Femme',
		level: 58,
		hp: 334,
		mp: 256,
		stats: {
			st: 24,
			vi: 44,
			ma: 39,
			ag: 31,
			lu: 56
		},
		learnset: [
			{
				name: 'Donum Magici',
				level: 0
			},
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Masukukaja',
				level: 0
			},
			{
				name: 'Matarukaja',
				level: 0
			},
			{
				name: 'Boon Boost',
				level: 59
			},
			{
				name: 'Great Curse Siphon',
				level: 60
			},
			{
				name: 'Null Elec',
				level: 62
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
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
		game: 'smt5'
	},
	{
		name: 'Lahmu',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: -4,
				Ice: 3,
				Elec: 0,
				Force: 2,
				Light: 0,
				Dark: 3,
				Almighty: 2,
				Ailment: 3,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Vile',
		level: 48,
		hp: 253,
		mp: 264,
		stats: {
			st: 30,
			vi: 36,
			ma: 47,
			ag: 27,
			lu: 39
		},
		learnset: [
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Purple Smoke',
				level: 0
			},
			{
				name: 'Silt of Ruin',
				level: 0
			},
			{
				name: 'Tentarafoo',
				level: 49
			},
			{
				name: 'Mazionga',
				level: 50
			},
			{
				name: 'Great Mana Spring',
				level: 51
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Null'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Ice',
				'Force'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Lakshmi',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -4,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 3,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 3,
				Support: 3
			},
			inherit: 'Recovery'
		},
		arcana: 'Fortune',
		race: 'Megami',
		level: 70,
		hp: 363,
		mp: 373,
		stats: {
			st: 30,
			vi: 41,
			ma: 65,
			ag: 44,
			lu: 51
		},
		learnset: [
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Mana Aid',
				level: 0
			},
			{
				name: 'Mediarahan',
				level: 0
			},
			{
				name: 'Sexy Dance',
				level: 0
			},
			{
				name: 'Luster Candy',
				level: 71
			},
			{
				name: 'Zanbarion',
				level: 72
			},
			{
				name: 'Boon Boost',
				level: 73
			}
		],
		resistances: {
			ailments: {
				Charm: 'Null'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Force'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Lamia',
		aliases: [],
		affinities: {
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
			inherit: 'Fire'
		},
		arcana: 'Empress',
		race: 'Femme',
		level: 36,
		hp: 156,
		mp: 188,
		stats: {
			st: 21,
			vi: 24,
			ma: 27,
			ag: 28,
			lu: 29
		},
		learnset: [
			{
				name: 'Life Drain',
				level: 0
			},
			{
				name: 'Makajama',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Resist Dark',
				level: 37
			},
			{
				name: 'Steel Needle',
				level: 38
			},
			{
				name: 'Mudoon',
				level: 39
			}
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
		game: 'smt5'
	},
	{
		name: 'Leanan Sidhe',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -1,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: -2,
				Dark: 3,
				Almighty: 0,
				Ailment: 3,
				Recovery: 2,
				Support: 0
			},
			inherit: 'Almighty'
		},
		arcana: 'Lovers',
		race: 'Femme',
		level: 17,
		hp: 82,
		mp: 115,
		stats: {
			st: 9,
			vi: 14,
			ma: 20,
			ag: 13,
			lu: 15
		},
		learnset: [
			{
				name: 'Curse Siphon',
				level: 0
			},
			{
				name: 'Marin Karin',
				level: 0
			},
			{
				name: 'Mudo',
				level: 0
			},
			{
				name: 'Media',
				level: 18
			},
			{
				name: 'Mamudo',
				level: 19
			}
		],
		resistances: {
			ailments: {
				Poison: 'Weak'
			},
			weak: [
				'Force',
				'Light'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Legion',
		aliases: [],
		affinities: {
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
			inherit: 'Psy'
		},
		arcana: 'Fool',
		race: 'Foul',
		level: 19,
		hp: 100,
		mp: 93,
		stats: {
			st: 15,
			vi: 18,
			ma: 16,
			ag: 14,
			lu: 15
		},
		learnset: [
			{
				name: 'Mudo',
				level: 0
			},
			{
				name: 'Berserker God',
				level: 20
			},
			{
				name: 'Makajama',
				level: 21
			},
			{
				name: 'Curse Siphon',
				level: 22
			}
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
		game: 'smt5'
	},
	{
		name: 'Lilim',
		aliases: [],
		affinities: {
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
			inherit: 'Support'
		},
		arcana: 'Devil',
		race: 'Night',
		level: 32,
		hp: 138,
		mp: 172,
		stats: {
			st: 13,
			vi: 18,
			ma: 34,
			ag: 27,
			lu: 26
		},
		learnset: [
			{
				name: 'Marin Karin',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 0
			},
			{
				name: 'Zionga',
				level: 33
			},
			{
				name: 'Resist Dark',
				level: 34
			},
			{
				name: 'Spirit Drain',
				level: 36
			}
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
		game: 'smt5'
	},
	{
		name: 'Lilith',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 4,
				Force: -5,
				Light: 0,
				Dark: 0,
				Almighty: 2,
				Ailment: 3,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Ice'
		},
		arcana: 'Moon',
		race: 'Night',
		level: 68,
		hp: 326,
		mp: 363,
		stats: {
			st: 22,
			vi: 36,
			ma: 63,
			ag: 48,
			lu: 57
		},
		learnset: [
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Slumber Vortex',
				level: 0
			},
			{
				name: 'Ziobarion',
				level: 0
			},
			{
				name: 'Null Elec',
				level: 69
			},
			{
				name: 'Almighty Pleroma',
				level: 70
			},
			{
				name: 'Energy Drain',
				level: 71
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force'
			],
			resist: [
				'Fire',
				'Ice',
				'Elec',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Loa',
		aliases: [],
		affinities: {
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
			inherit: 'Dark'
		},
		arcana: 'Hermit',
		race: 'Jaki',
		level: 30,
		hp: 129,
		mp: 163,
		stats: {
			st: 15,
			vi: 16,
			ma: 31,
			ag: 24,
			lu: 26
		},
		learnset: [
			{
				name: 'Poison Adept',
				level: 0
			},
			{
				name: 'Toxic Sting',
				level: 0
			},
			{
				name: 'Mamudo',
				level: 31
			},
			{
				name: 'Mudoon',
				level: 32
			},
			{
				name: 'Dark Block',
				level: 33
			}
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
		game: 'smt5'
	},
	{
		name: 'Loki',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 3,
				Ice: 3,
				Elec: 3,
				Force: 3,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Fool',
		race: 'Tyrant',
		level: 56,
		hp: 276,
		mp: 284,
		stats: {
			st: 31,
			vi: 33,
			ma: 47,
			ag: 40,
			lu: 42
		},
		learnset: [
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'High Restore',
				level: 57
			},
			{
				name: 'Agidyne',
				level: 58
			},
			{
				name: 'Mazandyne',
				level: 59
			}
		],
		resistances: {
			ailments: {
				Poison: 'Weak',
				Charm: 'Resist'
			},
			weak: [
				'Light'
			],
			resist: [
				'Force',
				'Dark'
			],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Loki - P5',
		aliases: [
			'Loki'
		],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Justice',
		race: 'Persona',
		level: 75,
		hp: null,
		mp: null,
		stats: {
			st: 53,
			vi: 46,
			ma: 47,
			ag: 47,
			lu: 39
		},
		learnset: [
			{
				name: 'Fortify Spirit',
				level: 0
			},
			{
				name: 'Laevateinn',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Debilitate',
				level: 0
			},
			{
				name: 'Riot Gun',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			},
			{
				name: 'Attack Master',
				level: 0
			},
			{
				name: 'Evade Light',
				level: 0
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p5',
		user: 'Goro Akechi',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Loup-garou',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: null,
		race: 'Beast',
		level: 54,
		hp: 322,
		mp: 198,
		stats: {
			st: 51,
			vi: 39,
			ma: 24,
			ag: 49,
			lu: 21
		},
		learnset: [
			{
				name: 'Madness Nails',
				level: 0
			},
			{
				name: 'Severing Bite',
				level: 0
			},
			{
				name: 'Souffle D\'éclair',
				level: 0
			},
			{
				name: 'Critical Aura',
				level: 55
			},
			{
				name: 'Phys Pleroma',
				level: 56
			},
			{
				name: 'Nihil Claw',
				level: 57
			}
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
		game: 'smt5'
	},
	{
		name: 'Lucia',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Priestess',
		race: 'Persona',
		level: 17,
		hp: null,
		mp: null,
		stats: {
			st: 8,
			vi: 12,
			ma: 14,
			ag: 9,
			lu: 12
		},
		learnset: [
			{
				name: 'Full Analysis',
				level: 0
			},
			{
				name: 'Support Scan',
				level: 23
			},
			{
				name: 'Third Eye',
				level: 32
			},
			{
				name: 'Healing Wave',
				level: 41
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Fuuka Yamagishi',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Lucifer',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Star',
		race: 'Devil',
		level: 90,
		hp: null,
		mp: null,
		stats: {
			st: 59,
			vi: 57,
			ma: 57,
			ag: 54,
			lu: 50
		},
		learnset: [
			{
				name: 'Gigantomachia',
				level: 0
			},
			{
				name: 'Maragibarion',
				level: 0
			},
			{
				name: 'Rebel Soul',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 95
			},
			{
				name: 'Morning Star - Persona',
				level: 96
			},
			{
				name: 'Heat Riser',
				level: 98
			},
			{
				name: 'Shadow of Grief',
				level: 99
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Light'
			],
			resist: [
				'Phys',
				'Fire',
				'Ice',
				'Elec',
				'Wind'
			],
			null: [
				'Gun'
			],
			drain: [
				'Dark'
			],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Lucy',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Empress',
		race: 'Persona',
		level: 36,
		hp: null,
		mp: null,
		stats: {
			st: 27,
			vi: 22,
			ma: 25,
			ag: 22,
			lu: 21
		},
		learnset: [
			{
				name: 'Psio',
				level: 0
			},
			{
				name: 'Mapsio',
				level: 0
			},
			{
				name: 'Triple Down',
				level: 0
			},
			{
				name: 'Patra',
				level: 0
			},
			{
				name: 'Fast Heal',
				level: 0
			},
			{
				name: 'Psy Break',
				level: 0
			},
			{
				name: 'Tentarafoo',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 38
			},
			{
				name: 'Psy Boost',
				level: 42
			},
			{
				name: 'Makarakarn',
				level: 44
			},
			{
				name: 'Climate Decorum',
				level: 48
			},
			{
				name: 'Psiodyne',
				level: 52
			},
			{
				name: 'Gun Boost',
				level: 54
			},
			{
				name: 'One-shot Kill',
				level: 58
			},
			{
				name: 'Me Patra',
				level: 60
			},
			{
				name: 'Mapsiodyne',
				level: 64
			},
			{
				name: 'Gun Amp',
				level: 68
			},
			{
				name: 'Psy Amp',
				level: 73
			},
			{
				name: 'Heat Riser',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Nuke'
			],
			resist: [
				'Ice'
			],
			null: [
				'Psy'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Haru Okumura',
		stage: 3,
		evoSkill: 'Life Wall'
	},
	{
		name: 'Macabre',
		aliases: [],
		affinities: {
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
			inherit: 'Dark'
		},
		arcana: 'Hanged',
		race: 'Jaki',
		level: 43,
		hp: 240,
		mp: 158,
		stats: {
			st: 42,
			vi: 30,
			ma: 18,
			ag: 27,
			lu: 32
		},
		learnset: [
			{
				name: 'Black Dracostrike',
				level: 0
			},
			{
				name: 'Blight',
				level: 0
			},
			{
				name: 'Venom Chaser',
				level: 0
			},
			{
				name: 'Hellish Mask',
				level: 44
			},
			{
				name: 'Trafuri',
				level: 45
			},
			{
				name: 'Poison Adept',
				level: 46
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Resist',
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
		game: 'smt5'
	},
	{
		name: 'Mada',
		aliases: [],
		affinities: {
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
			inherit: 'Fire'
		},
		arcana: 'Tower',
		race: 'Vile',
		level: 83,
		hp: 524,
		mp: 389,
		stats: {
			st: 69,
			vi: 65,
			ma: 74,
			ag: 45,
			lu: 41
		},
		learnset: [
			{
				name: 'Debilitate',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Mediarahan',
				level: 0
			},
			{
				name: 'Trisagion',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 84
			},
			{
				name: 'Ragnarok',
				level: 85
			},
			{
				name: 'Akashic Arts',
				level: 86
			}
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
		game: 'smt5'
	},
	{
		name: 'Magatsu-Izanagi',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Tower',
		race: 'Persona',
		level: 44,
		hp: null,
		mp: null,
		stats: {
			st: 37,
			vi: 32,
			ma: 35,
			ag: 25,
			lu: 10
		},
		learnset: [
			{
				name: 'Magatsu Mandala',
				level: 0
			},
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Ghastly Wail',
				level: 0
			},
			{
				name: 'Maziodyne',
				level: 45
			},
			{
				name: 'Bloodbath',
				level: 46
			},
			{
				name: 'Attack Master',
				level: 48
			},
			{
				name: 'Heat Riser',
				level: 50
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Nuke'
			],
			resist: [
				'Gun'
			],
			null: [
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Tohru Adachi',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Magatsu-Izanagi Picaro',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Tower',
		race: 'Picaro',
		level: 48,
		hp: null,
		mp: null,
		stats: {
			st: 40,
			vi: 35,
			ma: 38,
			ag: 27,
			lu: 11
		},
		learnset: [
			{
				name: 'Magatsu Mandala',
				level: 0
			},
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Ghastly Wail',
				level: 0
			},
			{
				name: 'Magarudyne',
				level: 49
			},
			{
				name: 'Bloodbath',
				level: 50
			},
			{
				name: 'Speed Master',
				level: 52
			},
			{
				name: 'Heat Riser',
				level: 54
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Nuke'
			],
			resist: [
				'Gun'
			],
			null: [
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Mahakala',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Phys'
		},
		arcana: 'Death',
		race: 'Tenma',
		level: 78,
		hp: null,
		mp: null,
		stats: {
			st: 58,
			vi: 57,
			ma: 38,
			ag: 49,
			lu: 39
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Myriad Arrows',
				level: 0
			},
			{
				name: 'Charge',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 80
			},
			{
				name: 'Maragidyne',
				level: 82
			},
			{
				name: 'Mamudoon',
				level: 83
			},
			{
				name: 'Fire Amp',
				level: 84
			},
			{
				name: 'Mudo Boost',
				level: 85
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [
				'Dark'
			],
			drain: [
				'Fire'
			],
			repel: [
				'Elec'
			]
		},
		game: 'p4'
	},
	{
		name: 'Makami',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 1,
				Dark: 0,
				Almighty: -2,
				Ailment: -2,
				Recovery: 3,
				Support: 2
			},
			inherit: 'Nuke'
		},
		arcana: 'Temperance',
		race: 'Avatar',
		level: 21,
		hp: 109,
		mp: 119,
		stats: {
			st: 13,
			vi: 16,
			ma: 17,
			ag: 21,
			lu: 24
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Mahama',
				level: 0
			},
			{
				name: 'Recarm',
				level: 0
			},
			{
				name: 'Sukunda',
				level: 22
			},
			{
				name: 'Mana Spring',
				level: 23
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Weak'
			},
			weak: [
				'Dark'
			],
			resist: [
				'Light'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Manananggal',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: null,
		race: 'Femme',
		level: 25,
		hp: 109,
		mp: 156,
		stats: {
			st: 15,
			vi: 14,
			ma: 29,
			ag: 21,
			lu: 21
		},
		learnset: [
			{
				name: 'Sanguine Drain',
				level: 0
			},
			{
				name: 'Zanma',
				level: 0
			},
			{
				name: 'Mamudo',
				level: 26
			},
			{
				name: 'Toxic Spray',
				level: 27
			},
			{
				name: 'Concentrate',
				level: 28
			}
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
		game: 'smt5'
	},
	{
		name: 'Mandrake',
		aliases: [],
		affinities: {
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
			inherit: 'Elec'
		},
		arcana: 'Death',
		race: 'Yoma',
		level: 6,
		hp: 49,
		mp: 75,
		stats: {
			st: 6,
			vi: 7,
			ma: 9,
			ag: 11,
			lu: 9
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Lunge',
				level: 8
			},
			{
				name: 'Toxic Sting',
				level: 9
			}
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
		game: 'smt5'
	},
	{
		name: 'Mara',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 5,
				Fire: 0,
				Ice: -6,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 3,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Fire'
		},
		arcana: 'Tower',
		race: 'Tyrant',
		level: 67,
		hp: 449,
		mp: 249,
		stats: {
			st: 57,
			vi: 61,
			ma: 31,
			ag: 25,
			lu: 53
		},
		learnset: [
			{
				name: 'Charge',
				level: 0
			},
			{
				name: 'Hell Thrust',
				level: 0
			},
			{
				name: 'Slumber Vortex',
				level: 0
			},
			{
				name: 'Toxic Spray',
				level: 0
			},
			{
				name: 'Enduring Soul',
				level: 68
			},
			{
				name: 'Megaton Press',
				level: 69
			},
			{
				name: 'Poison Master',
				level: 70
			}
		],
		resistances: {
			ailments: {
				Charm: 'Null'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [],
			drain: [
				'Elec'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Maria',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 0,
				Ice: 0,
				Elec: -5,
				Force: 4,
				Light: 4,
				Dark: -5,
				Almighty: 0,
				Ailment: 0,
				Recovery: 4,
				Support: 2
			},
			inherit: 'Recovery'
		},
		arcana: 'Faith',
		race: 'Megami',
		level: 83,
		hp: 424,
		mp: 485,
		stats: {
			st: 34,
			vi: 46,
			ma: 80,
			ag: 61,
			lu: 74
		},
		learnset: [
			{
				name: 'Diamrita',
				level: 0
			},
			{
				name: 'Floral Gust',
				level: 0
			},
			{
				name: 'Mahamabarion',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 0
			},
			{
				name: 'High Heal Pleroma',
				level: 84
			},
			{
				name: 'Mediarahan',
				level: 85
			},
			{
				name: 'Luster Candy',
				level: 86
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Null'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Dark'
			],
			null: [
				'Light'
			],
			drain: [
				'Force'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Masakado',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Light'
		},
		arcana: 'Tower',
		race: 'Fury',
		level: 69,
		hp: null,
		mp: null,
		stats: {
			st: 51,
			vi: 45,
			ma: 32,
			ag: 46,
			lu: 40
		},
		learnset: [
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'Tempest Slash',
				level: 0
			},
			{
				name: 'Myriad Arrows',
				level: 71
			},
			{
				name: 'Hama Boost',
				level: 73
			},
			{
				name: 'Arms Master',
				level: 74
			},
			{
				name: 'Enduring Soul',
				level: 76
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec',
				'Dark'
			],
			resist: [],
			null: [
				'Phys',
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Matador',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 0,
				Ice: 0,
				Elec: -5,
				Force: 3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Psy'
		},
		arcana: 'Death',
		race: 'Fiend',
		level: 24,
		hp: 136,
		mp: 154,
		stats: {
			st: 23,
			vi: 14,
			ma: 17,
			ag: 28,
			lu: 22
		},
		learnset: [
			{
				name: 'Andalucia',
				level: 0
			},
			{
				name: 'Mazan',
				level: 0
			},
			{
				name: 'Red Capote',
				level: 0
			},
			{
				name: 'Light Life Aid',
				level: 25
			},
			{
				name: 'Critical Aura',
				level: 26
			},
			{
				name: 'Counter',
				level: 27
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Seal: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Melchizedek',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -6,
				Light: 5,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 2
			},
			inherit: 'Light'
		},
		arcana: 'Justice',
		race: 'Herald',
		level: 60,
		hp: 341,
		mp: 281,
		stats: {
			st: 44,
			vi: 41,
			ma: 30,
			ag: 52,
			lu: 38
		},
		learnset: [
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'Mortal Jihad',
				level: 0
			},
			{
				name: 'Light Block',
				level: 61
			},
			{
				name: 'Power Punch',
				level: 62
			},
			{
				name: 'Impaler\'s Animus',
				level: 63
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [
				'Light'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Mephisto',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 7,
				Fire: 7,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -6,
				Dark: 9,
				Almighty: 0,
				Ailment: 9,
				Recovery: 0,
				Support: 4
			},
			inherit: null
		},
		arcana: null,
		race: 'Tyrant',
		level: 79,
		hp: 503,
		mp: 455,
		stats: {
			st: 64,
			vi: 44,
			ma: 71,
			ag: 50,
			lu: 66
		},
		learnset: [
			{
				name: 'Agibarion',
				level: 0
			},
			{
				name: 'Brave Blade',
				level: 0
			},
			{
				name: 'Stagnant Air',
				level: 0
			},
			{
				name: 'Walpurgisnacht',
				level: 0
			},
			{
				name: 'Luster Candy',
				level: 80
			},
			{
				name: 'Makajamaon',
				level: 81
			},
			{
				name: 'Impaler\'s Animus',
				level: 82
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
			},
			weak: [
				'Light'
			],
			resist: [],
			null: [
				'Phys'
			],
			drain: [
				'Dark'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Mercurius',
		aliases: [],
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
		resistances: {
			ailments: null,
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
		user: 'Morgana',
		stage: 2,
		evoSkill: 'Evade Elec'
	},
	{
		name: 'Mermaid',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: null,
		race: 'Femme',
		level: 12,
		hp: 72,
		mp: 122,
		stats: {
			st: 8,
			vi: 9,
			ma: 17,
			ag: 11,
			lu: 15
		},
		learnset: [
			{
				name: 'Stormcaller Song',
				level: 0
			},
			{
				name: 'Dormina',
				level: 13
			},
			{
				name: 'Marin Karin',
				level: 14
			},
			{
				name: 'Rakukaja',
				level: 15
			}
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
		game: 'smt5'
	},
	{
		name: 'Messiah',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Judgement',
		race: 'Persona',
		level: 81,
		hp: null,
		mp: null,
		stats: {
			st: 50,
			vi: 50,
			ma: 50,
			ag: 50,
			lu: 50
		},
		learnset: [
			{
				name: 'Oratorio',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'God\'s Hand',
				level: 0
			},
			{
				name: 'Regenerate 3',
				level: 82
			},
			{
				name: 'Enduring Soul',
				level: 83
			},
			{
				name: 'Invigorate 3',
				level: 84
			},
			{
				name: 'Drain Phys',
				level: 85
			},
			{
				name: 'Almighty Boost',
				level: 87
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [
				'Fire',
				'Ice',
				'Elec',
				'Wind',
				'Psy',
				'Nuke'
			],
			null: [],
			drain: [],
			repel: [
				'Light'
			]
		},
		game: 'p5',
		user: 'P3 Protagonist',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Messiah Picaro',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Judgement',
		race: 'Picaro',
		level: 90,
		hp: null,
		mp: null,
		stats: {
			st: 56,
			vi: 56,
			ma: 56,
			ag: 56,
			lu: 56
		},
		learnset: [
			{
				name: 'Oratorio',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Agneyastra',
				level: 0
			},
			{
				name: 'Insta-Heal',
				level: 91
			},
			{
				name: 'Enduring Soul',
				level: 92
			},
			{
				name: 'Light Life Aid',
				level: 93
			},
			{
				name: 'Firm Stance',
				level: 94
			},
			{
				name: 'Almighty Boost',
				level: 96
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [
				'Fire',
				'Ice',
				'Elec',
				'Wind',
				'Psy',
				'Nuke'
			],
			null: [],
			drain: [],
			repel: [
				'Light'
			]
		},
		game: 'p5'
	},
	{
		name: 'Metatron',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 5,
				Dark: 0,
				Almighty: 6,
				Ailment: -4,
				Recovery: -4,
				Support: 2
			},
			inherit: 'Light'
		},
		arcana: 'Justice',
		race: 'Herald',
		level: 95,
		hp: 626,
		mp: 443,
		stats: {
			st: 82,
			vi: 79,
			ma: 95,
			ag: 72,
			lu: 76
		},
		learnset: [
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 0
			},
			{
				name: 'Fire of Sinai',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 96
			},
			{
				name: 'Repel Light',
				level: 97
			},
			{
				name: 'High Almighty Pleroma',
				level: 98
			}
		],
		resistances: {
			ailments: {},
			weak: [],
			resist: [
				'Fire',
				'Ice',
				'Elec',
				'Force'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Michael',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 5,
				Ice: 0,
				Elec: 0,
				Force: -4,
				Light: 3,
				Dark: -5,
				Almighty: 4,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Almighty'
		},
		arcana: 'Judgement',
		race: 'Herald',
		level: 90,
		hp: 552,
		mp: 474,
		stats: {
			st: 76,
			vi: 65,
			ma: 78,
			ag: 76,
			lu: 59
		},
		learnset: [
			{
				name: 'Akashic Arts',
				level: 0
			},
			{
				name: 'Mahamabarion',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Trisagion',
				level: 0
			},
			{
				name: 'Ragnarok',
				level: 91
			},
			{
				name: 'Titanomachia',
				level: 92
			},
			{
				name: 'Repel Fire',
				level: 93
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force'
			],
			resist: [],
			null: [
				'Fire',
				'Ice',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Milady',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Empress',
		race: 'Persona',
		level: 36,
		hp: null,
		mp: null,
		stats: {
			st: 27,
			vi: 22,
			ma: 25,
			ag: 22,
			lu: 21
		},
		learnset: [
			{
				name: 'Psio',
				level: 0
			},
			{
				name: 'Mapsio',
				level: 0
			},
			{
				name: 'Triple Down',
				level: 0
			},
			{
				name: 'Patra',
				level: 0
			},
			{
				name: 'Fast Heal',
				level: 0
			},
			{
				name: 'Psy Break',
				level: 0
			},
			{
				name: 'Tentarafoo',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 38
			},
			{
				name: 'Psy Boost',
				level: 42
			},
			{
				name: 'Makarakarn',
				level: 44
			},
			{
				name: 'Climate Decorum',
				level: 48
			},
			{
				name: 'Psiodyne',
				level: 52
			},
			{
				name: 'Gun Boost',
				level: 54
			},
			{
				name: 'One-shot Kill',
				level: 58
			},
			{
				name: 'Me Patra',
				level: 60
			},
			{
				name: 'Mapsiodyne',
				level: 64
			},
			{
				name: 'Gun Amp',
				level: 68
			},
			{
				name: 'Psy Amp',
				level: 73
			},
			{
				name: 'Heat Riser',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Nuke'
			],
			resist: [
				'Psy'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Haru Okumura',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Mishaguji',
		aliases: [],
		affinities: {
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
			inherit: 'Ailment'
		},
		arcana: 'Hierophant',
		race: 'Vile',
		level: 42,
		hp: 235,
		mp: 159,
		stats: {
			st: 39,
			vi: 31,
			ma: 21,
			ag: 32,
			lu: 25
		},
		learnset: [
			{
				name: 'Beatdown',
				level: 0
			},
			{
				name: 'Matarunda',
				level: 0
			},
			{
				name: 'Resist Light',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 43
			},
			{
				name: 'Donum Gladi',
				level: 44
			},
			{
				name: 'Mamudoon',
				level: 45
			}
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
		game: 'smt5'
	},
	{
		name: 'Mithras',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 1,
				Fire: 5,
				Ice: -4,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Nuke'
		},
		arcana: 'Sun',
		race: 'Tyrant',
		level: 77,
		hp: 462,
		mp: 325,
		stats: {
			st: 58,
			vi: 49,
			ma: 60,
			ag: 42,
			lu: 50
		},
		learnset: [
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Maragibarion',
				level: 0
			},
			{
				name: 'Rampage',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 78
			},
			{
				name: 'Ragnarok',
				level: 79
			},
			{
				name: 'High Fire Pleroma',
				level: 80
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [
				'Fire'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Mitra',
		aliases: [
			'Mithra'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: 3,
				Almighty: 2,
				Ailment: 0,
				Recovery: 3,
				Support: 0
			},
			inherit: 'Light'
		},
		arcana: 'Temperance',
		race: 'Deity',
		level: 65,
		hp: 339,
		mp: 302,
		stats: {
			st: 43,
			vi: 39,
			ma: 53,
			ag: 37,
			lu: 43
		},
		learnset: [
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Null Dark',
				level: 66
			},
			{
				name: 'Diamrita',
				level: 67
			},
			{
				name: 'Debilitate',
				level: 68
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
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
		game: 'smt5'
	},
	{
		name: 'Mokoi',
		aliases: [],
		affinities: {
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
			inherit: 'Support'
		},
		arcana: 'Death',
		race: 'Night',
		level: 16,
		hp: 88,
		mp: 90,
		stats: {
			st: 15,
			vi: 15,
			ma: 12,
			ag: 11,
			lu: 16
		},
		learnset: [
			{
				name: 'Dustoma',
				level: 0
			},
			{
				name: 'Pulinpa',
				level: 0
			},
			{
				name: 'Zio',
				level: 17
			},
			{
				name: 'Trafuri',
				level: 18
			}
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
		game: 'smt5'
	},
	{
		name: 'Moloch',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 4,
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
			inherit: 'Fire'
		},
		arcana: 'Hanged',
		race: 'Tyrant',
		level: 51,
		hp: 297,
		mp: 212,
		stats: {
			st: 42,
			vi: 36,
			ma: 42,
			ag: 28,
			lu: 25
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Crusher Onslaught',
				level: 0
			},
			{
				name: 'Masukunda',
				level: 0
			},
			{
				name: 'Black Dracostrike',
				level: 52
			},
			{
				name: 'Rampage',
				level: 53
			},
			{
				name: 'Maragion',
				level: 54
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [
				'Elec',
				'Dark'
			],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Mot',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: -6,
				Force: 4,
				Light: 0,
				Dark: 4,
				Almighty: 4,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Nuke'
		},
		arcana: 'Death',
		race: 'Fury',
		level: 63,
		hp: 306,
		mp: 338,
		stats: {
			st: 28,
			vi: 58,
			ma: 59,
			ag: 24,
			lu: 46
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Null Force',
				level: 64
			},
			{
				name: 'High Restore',
				level: 65
			},
			{
				name: 'Zanbarion',
				level: 66
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec'
			],
			resist: [
				'Fire'
			],
			null: [],
			drain: [
				'Dark'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Mother Harlot',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 4,
				Ice: 0,
				Elec: 4,
				Force: -6,
				Light: 0,
				Dark: 0,
				Almighty: 6,
				Ailment: 3,
				Recovery: 0,
				Support: 3
			},
			inherit: 'Ice'
		},
		arcana: 'Empress',
		race: 'Fiend',
		level: 64,
		hp: 352,
		mp: 362,
		stats: {
			st: 42,
			vi: 45,
			ma: 60,
			ag: 36,
			lu: 40
		},
		learnset: [
			{
				name: 'Babylon Goblet',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 0
			},
			{
				name: 'Death Lust',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 0
			},
			{
				name: 'Maziodyne',
				level: 65
			},
			{
				name: 'Makajamaon',
				level: 66
			},
			{
				name: 'Trisagion',
				level: 67
			}
		],
		resistances: {
			ailments: {
				Charm: 'Null'
			},
			weak: [
				'Force'
			],
			resist: [
				'Fire',
				'Light',
				'Dark'
			],
			null: [],
			drain: [
				'Elec'
			],
			repel: [
				'Phys'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Mothman',
		aliases: [],
		affinities: {
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
			inherit: 'Elec'
		},
		arcana: 'Moon',
		race: 'Wilder',
		level: 29,
		hp: 139,
		mp: 153,
		stats: {
			st: 17,
			vi: 19,
			ma: 15,
			ag: 30,
			lu: 27
		},
		learnset: [
			{
				name: 'Pulinpa',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 30
			},
			{
				name: 'Needle Spray',
				level: 31
			},
			{
				name: 'Elec Block',
				level: 32
			}
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
		game: 'smt5'
	},
	{
		name: 'Muu Shuwuu',
		aliases: [
			'Moh Shuvuu'
		],
		affinities: {
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
			inherit: null
		},
		arcana: 'Priestess',
		race: 'Raptor',
		level: 38,
		hp: 175,
		mp: 202,
		stats: {
			st: 16,
			vi: 20,
			ma: 34,
			ag: 36,
			lu: 29
		},
		learnset: [
			{
				name: 'Mazanma',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 0
			},
			{
				name: 'Zanma',
				level: 0
			},
			{
				name: 'Marakunda',
				level: 39
			},
			{
				name: 'Media',
				level: 40
			},
			{
				name: 'Boon Boost',
				level: 41
			}
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
		game: 'smt5'
	},
	{
		name: 'Naga',
		aliases: [],
		affinities: {
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
			inherit: 'Elec'
		},
		arcana: 'Hermit',
		race: 'Snake',
		level: 27,
		hp: 115,
		mp: 109,
		stats: {
			st: 28,
			vi: 25,
			ma: 14,
			ag: 20,
			lu: 15
		},
		learnset: [
			{
				name: 'Heat Wave',
				level: 0
			},
			{
				name: 'Puncture Punch',
				level: 0
			},
			{
				name: 'Resist Fire',
				level: 28
			},
			{
				name: 'Zionga',
				level: 29
			},
			{
				name: 'Charge',
				level: 30
			}
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
		game: 'smt5'
	},
	{
		name: 'Narasimha',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Light'
		},
		arcana: 'Sun',
		race: 'Avatar',
		level: 47,
		hp: null,
		mp: null,
		stats: {
			st: 29,
			vi: 30,
			ma: 27,
			ag: 35,
			lu: 27
		},
		learnset: [
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Tempest Slash',
				level: 0
			},
			{
				name: 'Counterstrike',
				level: 48
			},
			{
				name: 'Evade Wind',
				level: 49
			},
			{
				name: 'Mahamaon',
				level: 51
			},
			{
				name: 'Auto-Mataru',
				level: 53
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [
				'Phys'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Narcissus',
		aliases: [],
		affinities: {
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
			inherit: 'Ailment'
		},
		arcana: 'Lovers',
		race: 'Jirae',
		level: 38,
		hp: 175,
		mp: 187,
		stats: {
			st: 22,
			vi: 16,
			ma: 34,
			ag: 35,
			lu: 31
		},
		learnset: [
			{
				name: 'Hellish Mask',
				level: 0
			},
			{
				name: 'Sexy Dance',
				level: 0
			},
			{
				name: 'Tentarafoo',
				level: 0
			},
			{
				name: 'Zanma',
				level: 39
			},
			{
				name: 'Wind Breath',
				level: 40
			},
			{
				name: 'Estoma',
				level: 41
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Resist',
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
		game: 'smt5'
	},
	{
		name: 'Nata Taishi',
		aliases: [
			'Nezha'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Phys'
		},
		arcana: 'Chariot',
		race: 'Genma',
		level: 6,
		hp: null,
		mp: null,
		stats: {
			st: 6,
			vi: 6,
			ma: 2,
			ag: 10,
			lu: 6
		},
		learnset: [
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 0
			},
			{
				name: 'Sonic Punch',
				level: 7
			},
			{
				name: 'Dodge Ice',
				level: 8
			},
			{
				name: 'Resist Mirage',
				level: 9
			},
			{
				name: 'Soul Break',
				level: 10
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Fire'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Nebiros',
		aliases: [],
		affinities: {
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
			inherit: 'Dark'
		},
		arcana: 'Devil',
		race: 'Fallen',
		level: 67,
		hp: 300,
		mp: 365,
		stats: {
			st: 27,
			vi: 30,
			ma: 67,
			ag: 42,
			lu: 56
		},
		learnset: [
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Null Light',
				level: 68
			},
			{
				name: 'Energy Drain',
				level: 69
			},
			{
				name: 'Almighty Pleroma',
				level: 70
			}
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
		game: 'smt5'
	},
	{
		name: 'Necronomicon',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Justice',
		race: 'Persona',
		level: 31,
		hp: null,
		mp: null,
		stats: {
			st: 17,
			vi: 20,
			ma: 23,
			ag: 21,
			lu: 35
		},
		learnset: [
			{
				name: 'Analysis',
				level: 0
			},
			{
				name: 'Subrecover HP',
				level: 38
			},
			{
				name: 'Subrecover SP',
				level: 49
			},
			{
				name: 'Subrecover HP EX',
				level: 58
			},
			{
				name: 'Subrecover SP EX',
				level: 67
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Futaba Sakura',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Neko Shogun',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -1,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: -4,
				Ailment: 0,
				Recovery: 3,
				Support: 3
			},
			inherit: 'Fire'
		},
		arcana: 'Star',
		race: 'Wargod',
		level: 5,
		hp: 57,
		mp: 73,
		stats: {
			st: 6,
			vi: 11,
			ma: 7,
			ag: 4,
			lu: 8
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Sukunda',
				level: 6
			},
			{
				name: 'Fang Breaker',
				level: 8
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist'
			},
			weak: [
				'Fire',
				'Force'
			],
			resist: [
				'Light'
			],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Nekomata',
		aliases: [],
		affinities: {
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
			inherit: 'Ailment'
		},
		arcana: 'Magician',
		race: 'Beast',
		level: 34,
		hp: 158,
		mp: 166,
		stats: {
			st: 23,
			vi: 20,
			ma: 18,
			ag: 33,
			lu: 29
		},
		learnset: [
			{
				name: 'Axel Claw',
				level: 0
			},
			{
				name: 'Beast Eye',
				level: 0
			},
			{
				name: 'Pulinpa',
				level: 35
			},
			{
				name: 'Damascus Claw',
				level: 36
			},
			{
				name: 'Wind Breath',
				level: 37
			}
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
		game: 'smt5'
	},
	{
		name: 'Nemesis',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Justice',
		race: 'Persona',
		level: 36,
		hp: null,
		mp: null,
		stats: {
			st: 21,
			vi: 23,
			ma: 25,
			ag: 26,
			lu: 20
		},
		learnset: [
			{
				name: 'Hama',
				level: 0
			},
			{
				name: 'Cruel Attack',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 37
			},
			{
				name: 'Hamaon',
				level: 41
			},
			{
				name: 'Recarm',
				level: 42
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [
				'Light'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Ken Amada',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Nidhoggr',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Dark'
		},
		arcana: 'Hermit',
		race: 'Drake',
		level: 55,
		hp: null,
		mp: null,
		stats: {
			st: 23,
			vi: 35,
			ma: 41,
			ag: 31,
			lu: 42
		},
		learnset: [
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Evil Smile',
				level: 0
			},
			{
				name: 'Ghastly Wail',
				level: 57
			},
			{
				name: 'Bufudyne',
				level: 58
			},
			{
				name: 'Stagnant Air',
				level: 59
			},
			{
				name: 'Resist Phys',
				level: 60
			},
			{
				name: 'Ice Boost',
				level: 61
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Light'
			],
			resist: [],
			null: [
				'Ice',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Nigi Mitama',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Recovery'
		},
		arcana: 'Councillor',
		race: 'Mitama',
		level: 22,
		hp: null,
		mp: null,
		stats: {
			st: 13,
			vi: 15,
			ma: 15,
			ag: 16,
			lu: 14
		},
		learnset: [
			{
				name: 'Baisudi',
				level: 0
			},
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Mahama',
				level: 0
			},
			{
				name: 'Divine Grace',
				level: 24
			},
			{
				name: 'Me Patra',
				level: 25
			},
			{
				name: 'Climate Decorum',
				level: 26
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Norn',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: -4,
				Force: 0,
				Light: 1,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 4,
				Support: 3
			},
			inherit: 'Wind'
		},
		arcana: 'Fortune',
		race: 'Megami',
		level: 67,
		hp: 358,
		mp: 321,
		stats: {
			st: 39,
			vi: 40,
			ma: 59,
			ag: 34,
			lu: 49
		},
		learnset: [
			{
				name: 'Luster Candy',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 68
			},
			{
				name: 'Null Light',
				level: 69
			},
			{
				name: 'Phys Block',
				level: 70
			}
		],
		resistances: {
			ailments: {
				Seal: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Light'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Nozuchi',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Ailment'
		},
		arcana: 'Moon',
		race: 'Snake',
		level: 27,
		hp: null,
		mp: null,
		stats: {
			st: 26,
			vi: 19,
			ma: 13,
			ag: 15,
			lu: 15
		},
		learnset: [
			{
				name: 'Poison Mist',
				level: 0
			},
			{
				name: 'Enervation',
				level: 0
			},
			{
				name: 'Ailment Boost',
				level: 0
			},
			{
				name: 'Zionga',
				level: 29
			},
			{
				name: 'Rakukaja',
				level: 30
			},
			{
				name: 'Null Poison',
				level: 31
			},
			{
				name: 'Null Enervate',
				level: 32
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [],
			null: [],
			drain: [],
			repel: [
				'Elec'
			]
		},
		game: 'p4'
	},
	{
		name: 'Nue',
		aliases: [],
		affinities: {
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
			inherit: 'Dark'
		},
		arcana: 'Death',
		race: 'Wilder',
		level: 49,
		hp: 289,
		mp: 180,
		stats: {
			st: 47,
			vi: 38,
			ma: 30,
			ag: 25,
			lu: 29
		},
		learnset: [
			{
				name: 'Axel Claw',
				level: 0
			},
			{
				name: 'Beast Eye',
				level: 0
			},
			{
				name: 'Storm Dracostrike',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 50
			},
			{
				name: 'Elec Pleroma',
				level: 51
			},
			{
				name: 'Eat Whole',
				level: 52
			}
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
		game: 'smt5'
	},
	{
		name: 'Nuwa',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: -5,
				Ice: 0,
				Elec: 0,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Lady',
		level: 80,
		hp: 438,
		mp: 455,
		stats: {
			st: 63,
			vi: 52,
			ma: 70,
			ag: 44,
			lu: 50
		},
		learnset: [
			{
				name: 'Dancing Strike',
				level: 0
			},
			{
				name: 'Diamrita',
				level: 0
			},
			{
				name: 'Floral Gust',
				level: 0
			},
			{
				name: 'Mana Aid',
				level: 81
			},
			{
				name: 'Killing Wind',
				level: 82
			},
			{
				name: 'High Force Pleroma',
				level: 83
			}
		],
		resistances: {
			ailments: {
				Charm: 'Null'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Elec',
				'Dark'
			],
			null: [],
			drain: [],
			repel: [
				'Force'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Nuwa -Snake-',
		aliases: [
			'Nuwa'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -6,
				Ice: 2,
				Elec: 3,
				Force: 7,
				Light: -3,
				Dark: -3,
				Almighty: 0,
				Ailment: 0,
				Recovery: 3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Snake',
		level: 89,
		hp: 502,
		mp: 522,
		stats: {
			st: 44,
			vi: 65,
			ma: 105,
			ag: 60,
			lu: 74
		},
		learnset: [
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Killing Wind',
				level: 0
			},
			{
				name: 'Sacrifice of Clay',
				level: 0
			},
			{
				name: 'Thunder Reign',
				level: 0
			},
			{
				name: 'Ice Age',
				level: 90
			},
			{
				name: 'Narukami',
				level: 91
			},
			{
				name: 'Drain Phys',
				level: 92
			}
		],
		resistances: {
			ailments: {
				Charm: 'Null'
			},
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Elec',
				'Dark'
			],
			drain: [],
			repel: [
				'Force'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Obariyon',
		aliases: [],
		affinities: {
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
			inherit: 'Phys'
		},
		arcana: 'Fool',
		race: 'Haunt',
		level: 12,
		hp: 71,
		mp: 91,
		stats: {
			st: 14,
			vi: 10,
			ma: 9,
			ag: 13,
			lu: 12
		},
		learnset: [
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Sukunda',
				level: 0
			},
			{
				name: 'Bouncing Claw',
				level: 13
			},
			{
				name: 'Patra',
				level: 14
			}
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
		game: 'smt5'
	},
	{
		name: 'Oberon',
		aliases: [],
		affinities: {
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
			inherit: 'Elec'
		},
		arcana: 'Emperor',
		race: 'Fairy',
		level: 47,
		hp: 242,
		mp: 211,
		stats: {
			st: 32,
			vi: 29,
			ma: 33,
			ag: 35,
			lu: 32
		},
		learnset: [
			{
				name: 'Diamrita',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 0
			},
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Matarukaja',
				level: 48
			},
			{
				name: 'Force Block',
				level: 49
			},
			{
				name: 'Mahamaon',
				level: 50
			}
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
		game: 'smt5'
	},
	{
		name: 'Odin',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 6,
				Fire: 0,
				Ice: 0,
				Elec: 4,
				Force: -6,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Elec'
		},
		arcana: 'Emperor',
		race: 'Deity',
		level: 77,
		hp: 477,
		mp: 345,
		stats: {
			st: 65,
			vi: 58,
			ma: 57,
			ag: 48,
			lu: 32
		},
		learnset: [
			{
				name: 'Figment Slash',
				level: 0
			},
			{
				name: 'Gungnir',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Maziobarion',
				level: 0
			},
			{
				name: 'Critical Aura',
				level: 78
			},
			{
				name: 'Thunder Reign',
				level: 79
			},
			{
				name: 'High Elec Pleroma',
				level: 80
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Resist'
			},
			weak: [
				'Force'
			],
			resist: [],
			null: [
				'Light',
				'Dark'
			],
			drain: [],
			repel: [
				'Elec'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Okuninushi',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 0,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 4,
				Support: 0
			},
			inherit: 'Psy'
		},
		arcana: 'Faith',
		race: 'Kunitsu',
		level: 55,
		hp: 320,
		mp: 236,
		stats: {
			st: 47,
			vi: 47,
			ma: 26,
			ag: 40,
			lu: 28
		},
		learnset: [
			{
				name: 'Fatal Sword',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Estoma',
				level: 56
			},
			{
				name: 'White Dracostrike',
				level: 57
			},
			{
				name: 'Phys Block',
				level: 58
			}
		],
		resistances: {
			ailments: {},
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
		game: 'smt5'
	},
	{
		name: 'Omoikane',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Elec'
		},
		arcana: 'Hierophant',
		race: 'Amatsu',
		level: 7,
		hp: null,
		mp: null,
		stats: {
			st: 5,
			vi: 5,
			ma: 8,
			ag: 4,
			lu: 6
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Sukunda',
				level: 0
			},
			{
				name: 'Tarunda',
				level: 0
			},
			{
				name: 'Poison Mist',
				level: 8
			},
			{
				name: 'Resist Wind',
				level: 9
			},
			{
				name: 'Dodge Ice',
				level: 10
			},
			{
				name: 'Resist Poison',
				level: 11
			},
			{
				name: 'Resist Elec',
				level: 12
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p4'
	},
	{
		name: 'Ongyo-Ki',
		aliases: [],
		affinities: {
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
			inherit: 'Phys'
		},
		arcana: 'Hermit',
		race: 'Brute',
		level: 78,
		hp: 549,
		mp: 297,
		stats: {
			st: 67,
			vi: 65,
			ma: 46,
			ag: 31,
			lu: 48
		},
		learnset: [
			{
				name: 'Dragon Eye',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Mist Rush',
				level: 0
			},
			{
				name: 'Slumber Vortex',
				level: 0
			},
			{
				name: 'Impaler\'s Animus',
				level: 79
			},
			{
				name: 'Nihil Claw',
				level: 80
			},
			{
				name: 'Null Phys',
				level: 81
			}
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
		game: 'smt5'
	},
	{
		name: 'Oni',
		aliases: [],
		affinities: {
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
			inherit: 'Phys'
		},
		arcana: 'Strength',
		race: 'Brute',
		level: 23,
		hp: 151,
		mp: 93,
		stats: {
			st: 21,
			vi: 24,
			ma: 12,
			ag: 12,
			lu: 16
		},
		learnset: [
			{
				name: 'Crusher Onslaught',
				level: 0
			},
			{
				name: 'Heavy Blow',
				level: 0
			},
			{
				name: 'Taunt',
				level: 24
			},
			{
				name: 'Fang Breaker',
				level: 25
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Weak',
				Confuse: 'Weak'
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
		game: 'smt5'
	},
	{
		name: 'Onmoraki',
		aliases: [],
		affinities: {
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
			inherit: 'Dark'
		},
		arcana: 'Moon',
		race: 'Raptor',
		level: 4,
		hp: 42,
		mp: 59,
		stats: {
			st: 5,
			vi: 8,
			ma: 8,
			ag: 7,
			lu: 6
		},
		learnset: [
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Pulinpa',
				level: 5
			},
			{
				name: 'Mudo',
				level: 6
			}
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
		game: 'smt5'
	},
	{
		name: 'Orichalcum',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Support'
		},
		arcana: 'Faith',
		race: 'Treasure',
		level: 60,
		hp: null,
		mp: null,
		stats: {
			st: 60,
			vi: 60,
			ma: 60,
			ag: 60,
			lu: 60
		},
		learnset: [
			{
				name: 'Agibarion',
				level: 0
			},
			{
				name: 'Bufubarion',
				level: 0
			},
			{
				name: 'Panta Rhei',
				level: 0
			},
			{
				name: 'Ziobarion',
				level: 0
			},
			{
				name: 'Psycho Force',
				level: 0
			},
			{
				name: 'Atomic Flare',
				level: 0
			},
			{
				name: 'Divine Judgement',
				level: 0
			},
			{
				name: 'Demonic Decree',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Light'
			],
			resist: [
				'Phys',
				'Gun'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Orlov',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Support'
		},
		arcana: 'Strength',
		race: 'Treasure',
		level: 30,
		hp: null,
		mp: null,
		stats: {
			st: 30,
			vi: 30,
			ma: 30,
			ag: 30,
			lu: 30
		},
		learnset: [
			{
				name: 'Maragion',
				level: 0
			},
			{
				name: 'Mabufula',
				level: 0
			},
			{
				name: 'Magarula',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 0
			},
			{
				name: 'Mapsio',
				level: 0
			},
			{
				name: 'Mafreila',
				level: 0
			},
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [
				'Phys',
				'Gun'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Orobas',
		aliases: [],
		affinities: {
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
			inherit: 'Fire'
		},
		arcana: 'Hierophant',
		race: 'Beast',
		level: 49,
		hp: 213,
		mp: 264,
		stats: {
			st: 35,
			vi: 32,
			ma: 41,
			ag: 26,
			lu: 35
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Megido',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Heavy Blow',
				level: 50
			},
			{
				name: 'Dream Fist',
				level: 51
			},
			{
				name: 'Marakunda',
				level: 52
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Null'
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
		game: 'smt5'
	},
	{
		name: 'Orpheus',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Fire'
		},
		arcana: 'Fool',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		stats: {
			st: 2,
			vi: 2,
			ma: 2,
			ag: 2,
			lu: 2
		},
		learnset: [
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Agi',
				level: 2
			},
			{
				name: 'Tarunda',
				level: 6
			},
			{
				name: 'Cadenza',
				level: 26
			},
			{
				name: 'Agilao',
				level: 26
			},
			{
				name: 'Endure',
				level: 27
			},
			{
				name: 'Maragion',
				level: 29
			},
			{
				name: 'Marakukaja',
				level: 30
			},
			{
				name: 'Fire Boost',
				level: 32
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec',
				'Dark'
			],
			resist: [
				'Light'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'P3 Protagonist',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Orpheus F',
		aliases: [
			'F Orpheus'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Fire'
		},
		arcana: 'Fool',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		stats: {
			st: 2,
			vi: 2,
			ma: 2,
			ag: 2,
			lu: 2
		},
		learnset: [
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Agi',
				level: 2
			},
			{
				name: 'Tarunda',
				level: 6
			},
			{
				name: 'Neo Cadenza',
				level: 11
			},
			{
				name: 'Endure',
				level: 11
			},
			{
				name: 'Maragion',
				level: 12
			},
			{
				name: 'Marakukaja',
				level: 14
			},
			{
				name: 'Dodge Dark',
				level: 15
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec',
				'Dark'
			],
			resist: [
				'Light'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'P3 Protagonist',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Orpheus F Picaro',
		aliases: [
			'F Orpheus Picaro',
			'Orpheus Picaro F'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Fool',
		race: 'Picaro',
		level: 13,
		hp: null,
		mp: null,
		stats: {
			st: 9,
			vi: 9,
			ma: 11,
			ag: 10,
			lu: 7
		},
		learnset: [
			{
				name: 'Neo Cadenza',
				level: 0
			},
			{
				name: 'Maragi',
				level: 0
			},
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Endure',
				level: 0
			},
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Marakukaja',
				level: 0
			},
			{
				name: 'Dodge Dark',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec',
				'Dark'
			],
			resist: [
				'Light'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Orpheus Picaro',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Fool',
		race: 'Picaro',
		level: 20,
		hp: null,
		mp: null,
		stats: {
			st: 19,
			vi: 19,
			ma: 19,
			ag: 19,
			lu: 18
		},
		learnset: [
			{
				name: 'Cadenza',
				level: 0
			},
			{
				name: 'Maragion',
				level: 0
			},
			{
				name: 'Matarunda',
				level: 0
			},
			{
				name: 'Endure',
				level: 30
			},
			{
				name: 'Agidyne',
				level: 32
			},
			{
				name: 'Matarukaja',
				level: 33
			},
			{
				name: 'Fire Boost',
				level: 35
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec',
				'Dark'
			],
			resist: [
				'Light'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Orpheus Telos',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Fool',
		race: 'Persona',
		level: 90,
		hp: null,
		mp: null,
		stats: {
			st: 62,
			vi: 62,
			ma: 62,
			ag: 62,
			lu: 62
		},
		learnset: [
			{
				name: 'Victory Cry',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [
				'Phys',
				'Gun',
				'Fire',
				'Ice',
				'Elec',
				'Wind',
				'Nuke',
				'Psy',
				'Light',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'P3 Protagonist',
		stage: 3,
		evoSkill: null
	},
	{
		name: 'Orthrus',
		aliases: [],
		affinities: {
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
			inherit: 'Nuke'
		},
		arcana: 'Hanged',
		race: 'Beast',
		level: 42,
		hp: 255,
		mp: 155,
		stats: {
			st: 41,
			vi: 32,
			ma: 21,
			ag: 34,
			lu: 22
		},
		learnset: [
			{
				name: 'Axel Claw',
				level: 0
			},
			{
				name: 'Fang Breaker',
				level: 0
			},
			{
				name: 'Fire Dracostrike',
				level: 0
			},
			{
				name: 'Inspiring Leader',
				level: 43
			},
			{
				name: 'Fire Breath',
				level: 44
			},
			{
				name: 'Fierce Roar',
				level: 45
			}
		],
		resistances: {
			ailments: {
				Poison: 'Weak',
				Confuse: 'Resist'
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
		game: 'smt5'
	},
	{
		name: 'Ose',
		aliases: [],
		affinities: {
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
			inherit: 'Ailment'
		},
		arcana: 'Fool',
		race: 'Fallen',
		level: 44,
		hp: 264,
		mp: 169,
		stats: {
			st: 45,
			vi: 35,
			ma: 21,
			ag: 33,
			lu: 26
		},
		learnset: [
			{
				name: 'Beast Eye',
				level: 0
			},
			{
				name: 'Critical Slash',
				level: 0
			},
			{
				name: 'Critical Wave',
				level: 0
			},
			{
				name: 'Charge',
				level: 45
			},
			{
				name: 'Blinding Strike',
				level: 46
			},
			{
				name: 'Ice Dracostrike',
				level: 47
			}
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
		game: 'smt5'
	},
	{
		name: 'Oyamatsumi',
		aliases: [
			'Ouyamatsumi'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: -6,
				Ice: 5,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 1,
				Support: 4
			},
			inherit: null
		},
		arcana: 'Strength',
		race: 'Kunitsu',
		level: 40,
		hp: 261,
		mp: 140,
		stats: {
			st: 36,
			vi: 38,
			ma: 23,
			ag: 18,
			lu: 26
		},
		learnset: [
			{
				name: 'Ice Dracostrike',
				level: 0
			},
			{
				name: 'Matarukaja',
				level: 0
			},
			{
				name: 'Marakukaja',
				level: 41
			},
			{
				name: 'Crusher Onslaught',
				level: 42
			},
			{
				name: 'Samarecarm',
				level: 43
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Weak'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Ice',
				'Elec'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Pabilsag',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Phys'
		},
		arcana: 'Emperor',
		race: 'Holy',
		level: 51,
		hp: null,
		mp: null,
		stats: {
			st: 38,
			vi: 30,
			ma: 29,
			ag: 33,
			lu: 30
		},
		learnset: [
			{
				name: 'Blight',
				level: 0
			},
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Stagnant Air - Persona',
				level: 53
			},
			{
				name: 'Seal Boost',
				level: 54
			},
			{
				name: 'Mudoon',
				level: 55
			},
			{
				name: 'Arrow Rain',
				level: 56
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice',
				'Light'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: [
				'Dark'
			]
		},
		game: 'p4'
	},
	{
		name: 'Pale Rider',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: -5,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 7,
				Recovery: 0,
				Support: 2
			},
			inherit: 'Dark'
		},
		arcana: 'Death',
		race: 'Fiend',
		level: 57,
		hp: 305,
		mp: 261,
		stats: {
			st: 51,
			vi: 35,
			ma: 40,
			ag: 37,
			lu: 53
		},
		learnset: [
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'Pestilence',
				level: 0
			},
			{
				name: 'Tentarafoo',
				level: 0
			},
			{
				name: 'Toxic Cloud',
				level: 0
			},
			{
				name: 'Poison Master',
				level: 58
			},
			{
				name: 'Marakukaja',
				level: 59
			},
			{
				name: 'Mist Rush',
				level: 60
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist',
				Mirage: 'Null',
				Poison: 'Null'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Palladion',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Chariot',
		race: 'Persona',
		level: 29,
		hp: null,
		mp: null,
		stats: {
			st: 19,
			vi: 25,
			ma: 13,
			ag: 18,
			lu: 14
		},
		learnset: [
			{
				name: 'Kill Rush',
				level: 0
			},
			{
				name: 'Swift Strike',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 32
			},
			{
				name: 'Fatal End',
				level: 35
			},
			{
				name: 'Tarukaja',
				level: 36
			},
			{
				name: 'Dekunda',
				level: 42
			},
			{
				name: 'Masukukaja',
				level: 47
			},
			{
				name: 'Heat Wave',
				level: 51
			},
			{
				name: 'Marakukaja',
				level: 56
			},
			{
				name: 'Diarahan',
				level: 59
			},
			{
				name: 'Matarukaja',
				level: 60
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Phys'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Aigis',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Pandora',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Hope',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		stats: {
			st: 2,
			vi: 4,
			ma: 5,
			ag: 6,
			lu: 4
		},
		learnset: [
			{
				name: 'Hama',
				level: 0
			},
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Dia',
				level: 2
			},
			{
				name: 'Mahama',
				level: 12
			},
			{
				name: 'Media',
				level: 14
			},
			{
				name: 'Light Boost',
				level: 16
			},
			{
				name: 'Tetraja',
				level: 19
			},
			{
				name: 'Recarm',
				level: 21
			},
			{
				name: 'Hamaon',
				level: 23
			},
			{
				name: 'Diarama',
				level: 26
			},
			{
				name: 'Divine Grace',
				level: 32
			},
			{
				name: 'Mediarama',
				level: 35
			},
			{
				name: 'Mahamaon',
				level: 40
			},
			{
				name: 'Marakunda',
				level: 43
			},
			{
				name: 'Light Amp',
				level: 46
			},
			{
				name: 'Hamabarion',
				level: 48
			},
			{
				name: 'Diarahan',
				level: 51
			},
			{
				name: 'Rebel Soul',
				level: 52
			},
			{
				name: 'Samarecarm',
				level: 55
			},
			{
				name: 'Mediarahan',
				level: 60
			},
			{
				name: 'Angelic Grace',
				level: 70
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Sophia',
		stage: 2,
		evoSkill: 'Mahamabarion'
	},
	{
		name: 'Parvati',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 4,
				Support: 3
			},
			inherit: 'Psy'
		},
		arcana: 'Lovers',
		race: 'Megami',
		level: 35,
		hp: 151,
		mp: 204,
		stats: {
			st: 17,
			vi: 20,
			ma: 39,
			ag: 28,
			lu: 29
		},
		learnset: [
			{
				name: 'Bowl of Hygieia',
				level: 0
			},
			{
				name: 'Matarunda',
				level: 0
			},
			{
				name: 'Media',
				level: 0
			},
			{
				name: 'Heal Pleroma',
				level: 36
			},
			{
				name: 'Bufula',
				level: 37
			},
			{
				name: 'Mahama',
				level: 38
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Null'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Ice',
				'Light'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Pazuzu',
		aliases: [],
		affinities: {
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
			inherit: 'Dark'
		},
		arcana: 'Devil',
		race: 'Vile',
		level: 52,
		hp: 273,
		mp: 241,
		stats: {
			st: 31,
			vi: 34,
			ma: 41,
			ag: 35,
			lu: 40
		},
		learnset: [
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Safeguard',
				level: 0
			},
			{
				name: 'Tentarafoo',
				level: 0
			},
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Dark Block',
				level: 53
			},
			{
				name: 'Dekaja',
				level: 54
			},
			{
				name: 'Great Mana Spring',
				level: 55
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Resist'
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
		game: 'smt5'
	},
	{
		name: 'Penthesilea',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Empress',
		race: 'Persona',
		level: 18,
		hp: null,
		mp: null,
		stats: {
			st: 11,
			vi: 11,
			ma: 16,
			ag: 12,
			lu: 11
		},
		learnset: [
			{
				name: 'Analysis',
				level: 0
			},
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Mabufu',
				level: 0
			},
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Marin Karin',
				level: 0
			},
			{
				name: 'Bufula',
				level: 21
			},
			{
				name: 'Diarama',
				level: 25
			},
			{
				name: 'Spirit Drain',
				level: 27
			},
			{
				name: 'Tentarafoo',
				level: 32
			},
			{
				name: 'Mabufula',
				level: 42
			},
			{
				name: 'Ice Boost',
				level: 45
			},
			{
				name: 'Concentrate',
				level: 50
			},
			{
				name: 'Bufudyne',
				level: 55
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p3',
		user: 'Mitsuru Kirijo',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Pisaca',
		aliases: [],
		affinities: {
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
			inherit: 'Dark'
		},
		arcana: 'Death',
		race: 'Haunt',
		level: 31,
		hp: 144,
		mp: 155,
		stats: {
			st: 26,
			vi: 20,
			ma: 12,
			ag: 30,
			lu: 26
		},
		learnset: [
			{
				name: 'Damascus Claw',
				level: 0
			},
			{
				name: 'Fang Breaker',
				level: 0
			},
			{
				name: 'Life Drain',
				level: 0
			},
			{
				name: 'Madness Needle',
				level: 32
			},
			{
				name: 'Resist Fire',
				level: 33
			},
			{
				name: 'Bloody Glee',
				level: 34
			}
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
		game: 'smt5'
	},
	{
		name: 'Pithos',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Hope',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		stats: {
			st: 2,
			vi: 4,
			ma: 5,
			ag: 6,
			lu: 4
		},
		learnset: [
			{
				name: 'Hama',
				level: 0
			},
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Dia',
				level: 2
			},
			{
				name: 'Mahama',
				level: 12
			},
			{
				name: 'Media',
				level: 14
			},
			{
				name: 'Light Boost',
				level: 16
			},
			{
				name: 'Tetraja',
				level: 19
			},
			{
				name: 'Recarm',
				level: 21
			},
			{
				name: 'Hamaon',
				level: 23
			},
			{
				name: 'Diarama',
				level: 26
			},
			{
				name: 'Divine Grace',
				level: 32
			},
			{
				name: 'Mediarama',
				level: 35
			},
			{
				name: 'Mahamaon',
				level: 40
			},
			{
				name: 'Marakunda',
				level: 43
			},
			{
				name: 'Light Amp',
				level: 46
			},
			{
				name: 'Hamabarion',
				level: 48
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [
				'Light'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Sophia',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Pixie',
		aliases: [],
		affinities: {
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
			inherit: 'Recovery'
		},
		arcana: 'Lovers',
		race: 'Fairy',
		level: 2,
		hp: 32,
		mp: 82,
		stats: {
			st: 2,
			vi: 4,
			ma: 7,
			ag: 8,
			lu: 6
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Patra',
				level: 0
			},
			{
				name: 'Zan',
				level: 3
			},
			{
				name: 'Rakukaja',
				level: 4
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Weak'
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
		game: 'smt5'
	},
	{
		name: 'Poltergeist',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: 'Devil',
		race: 'Haunt',
		level: 25,
		hp: 115,
		mp: 137,
		stats: {
			st: 17,
			vi: 17,
			ma: 16,
			ag: 20,
			lu: 23
		},
		learnset: [
			{
				name: 'Masukunda',
				level: 0
			},
			{
				name: 'Shockbound',
				level: 0
			},
			{
				name: 'Dream Needle',
				level: 26
			},
			{
				name: 'Elec Block',
				level: 27
			},
			{
				name: 'Resist Force',
				level: 28
			}
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
		game: 'smt5'
	},
	{
		name: 'Polydeuces',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Emperor',
		race: 'Persona',
		level: 12,
		hp: null,
		mp: null,
		stats: {
			st: 9,
			vi: 8,
			ma: 10,
			ag: 9,
			lu: 7
		},
		learnset: [
			{
				name: 'Sonic Punch',
				level: 0
			},
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Tarunda',
				level: 16
			},
			{
				name: 'Mazio',
				level: 21
			},
			{
				name: 'Rakunda',
				level: 25
			},
			{
				name: 'Zionga',
				level: 29
			},
			{
				name: 'Sukunda',
				level: 33
			},
			{
				name: 'Elec Boost',
				level: 37
			},
			{
				name: 'Diarama',
				level: 38
			},
			{
				name: 'Mazionga',
				level: 41
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p3',
		user: 'Akihiko Sanada',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Power',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: -6,
				Almighty: 0,
				Ailment: 0,
				Recovery: 1,
				Support: 0
			},
			inherit: 'Light'
		},
		arcana: 'Justice',
		race: 'Divine',
		level: 39,
		hp: 239,
		mp: 153,
		stats: {
			st: 31,
			vi: 36,
			ma: 27,
			ag: 21,
			lu: 25
		},
		learnset: [
			{
				name: 'Fang Breaker',
				level: 0
			},
			{
				name: 'Light Block',
				level: 0
			},
			{
				name: 'White Dracostrike',
				level: 0
			},
			{
				name: 'Taunt',
				level: 40
			},
			{
				name: 'Berserker God',
				level: 41
			},
			{
				name: 'Marakukaja',
				level: 42
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force',
				'Dark'
			],
			resist: [
				'Elec'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Preta',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: null,
		race: 'Haunt',
		level: 3,
		hp: 40,
		mp: 54,
		stats: {
			st: 8,
			vi: 7,
			ma: 7,
			ag: 5,
			lu: 4
		},
		learnset: [
			{
				name: 'Bestial Bite',
				level: 0
			},
			{
				name: 'Bufu',
				level: 4
			},
			{
				name: 'Life Drain',
				level: 5
			}
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
		game: 'smt5'
	},
	{
		name: 'Principality',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 4,
				Dark: -5,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 1
			},
			inherit: 'Recovery'
		},
		arcana: 'Justice',
		race: 'Divine',
		level: 28,
		hp: 130,
		mp: 175,
		stats: {
			st: 13,
			vi: 16,
			ma: 34,
			ag: 22,
			lu: 22
		},
		learnset: [
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Mahama',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 29
			},
			{
				name: 'Light Block',
				level: 30
			},
			{
				name: 'Light Mana Aid',
				level: 31
			}
		],
		resistances: {
			ailments: {
				Seal: 'Weak'
			},
			weak: [
				'Dark'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Prometheus',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Justice',
		race: 'Persona',
		level: 31,
		hp: null,
		mp: null,
		stats: {
			st: 17,
			vi: 20,
			ma: 23,
			ag: 21,
			lu: 35
		},
		learnset: [
			{
				name: 'Analysis',
				level: 0
			},
			{
				name: 'Subrecover HP',
				level: 38
			},
			{
				name: 'Subrecover SP',
				level: 49
			},
			{
				name: 'Subrecover HP EX',
				level: 58
			},
			{
				name: 'Subrecover SP EX',
				level: 67
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Futaba Sakura',
		stage: 2,
		evoSkill: 'Treasure Skimmer'
	},
	{
		name: 'Psyche',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Hierophant',
		race: 'Persona',
		level: 25,
		hp: null,
		mp: null,
		stats: {
			st: 18,
			vi: 20,
			ma: 13,
			ag: 18,
			lu: 13
		},
		learnset: [
			{
				name: 'Fatal End',
				level: 0
			},
			{
				name: 'Garula',
				level: 0
			},
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Marin Karin',
				level: 29
			},
			{
				name: 'Bufula',
				level: 34
			},
			{
				name: 'Charge',
				level: 40
			},
			{
				name: 'Vajra Blast',
				level: 45
			},
			{
				name: 'Gigantic Fist',
				level: 48
			},
			{
				name: 'Poison Skewer',
				level: 53
			},
			{
				name: 'Garudyne',
				level: 58
			},
			{
				name: 'Vicious Strike',
				level: 60
			},
			{
				name: 'Bufudyne',
				level: 62
			},
			{
				name: 'Sexy Dance',
				level: 65
			},
			{
				name: 'Akashic Arts',
				level: 72
			},
			{
				name: 'Brave Blade',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Metis',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Queen Mab',
		aliases: [
			'Queen Medb'
		],
		affinities: {
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
			inherit: 'Fire'
		},
		arcana: 'Magician',
		race: 'Night',
		level: 56,
		hp: 266,
		mp: 289,
		stats: {
			st: 25,
			vi: 30,
			ma: 52,
			ag: 33,
			lu: 49
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Fogna',
				level: 0
			},
			{
				name: 'Mazandyne',
				level: 0
			},
			{
				name: 'Resist Fire',
				level: 57
			},
			{
				name: 'Spirit Drain',
				level: 58
			},
			{
				name: 'High Restore',
				level: 59
			}
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
		game: 'smt5'
	},
	{
		name: 'Queen\'s Necklace',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Support'
		},
		arcana: 'Empress',
		race: 'Treasure',
		level: 15,
		hp: null,
		mp: null,
		stats: {
			st: 15,
			vi: 15,
			ma: 15,
			ag: 15,
			lu: 15
		},
		learnset: [
			{
				name: 'Tarukaja',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Recarm',
				level: 0
			},
			{
				name: 'Media',
				level: 0
			},
			{
				name: 'Tarunda',
				level: 0
			},
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Sukunda',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Psy'
			],
			resist: [
				'Phys',
				'Gun'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Quetzalcoatl',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 4,
				Ice: 0,
				Elec: -6,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 2
			},
			inherit: 'Wind'
		},
		arcana: 'Sun',
		race: 'Dragon',
		level: 34,
		hp: 171,
		mp: 144,
		stats: {
			st: 24,
			vi: 23,
			ma: 30,
			ag: 24,
			lu: 24
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Fire Pleroma',
				level: 0
			},
			{
				name: 'Zanma',
				level: 0
			},
			{
				name: 'Fire Block',
				level: 35
			},
			{
				name: 'Maragion',
				level: 36
			},
			{
				name: 'Resist Force',
				level: 37
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Raja Naga',
		aliases: [
			'Naga Raja'
		],
		affinities: {
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
			inherit: 'Elec'
		},
		arcana: 'Temperance',
		race: 'Snake',
		level: 40,
		hp: 241,
		mp: 140,
		stats: {
			st: 33,
			vi: 36,
			ma: 31,
			ag: 19,
			lu: 22
		},
		learnset: [
			{
				name: 'Elec Pleroma',
				level: 0
			},
			{
				name: 'Ice Breath',
				level: 0
			},
			{
				name: 'Shockbound',
				level: 0
			},
			{
				name: 'Critical Slash',
				level: 41
			},
			{
				name: 'Pierce Armor',
				level: 42
			},
			{
				name: 'Storm Dracostrike',
				level: 43
			}
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
		game: 'smt5'
	},
	{
		name: 'Rakshasa',
		aliases: [],
		affinities: {
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
			inherit: 'Phys'
		},
		arcana: 'Strength',
		race: 'Jaki',
		level: 20,
		hp: 114,
		mp: 90,
		stats: {
			st: 25,
			vi: 19,
			ma: 10,
			ag: 16,
			lu: 14
		},
		learnset: [
			{
				name: 'Counter',
				level: 0
			},
			{
				name: 'Venom Chaser',
				level: 0
			},
			{
				name: 'Gram Slice',
				level: 21
			},
			{
				name: 'Charge',
				level: 22
			}
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
		game: 'smt5'
	},
	{
		name: 'Rangda',
		aliases: [],
		affinities: {
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
			inherit: 'Dark'
		},
		arcana: 'Magician',
		race: 'Femme',
		level: 70,
		hp: 334,
		mp: 348,
		stats: {
			st: 46,
			vi: 36,
			ma: 59,
			ag: 39,
			lu: 51
		},
		learnset: [
			{
				name: 'Nihil Claw',
				level: 0
			},
			{
				name: 'Steel Needle',
				level: 0
			},
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Frenzied Chomp',
				level: 71
			},
			{
				name: 'Samarecarm',
				level: 72
			},
			{
				name: 'Zanbarion',
				level: 73
			}
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
		game: 'smt5'
	},
	{
		name: 'Raoul',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Fool',
		race: 'Persona',
		level: 76,
		hp: null,
		mp: null,
		stats: {
			st: 47,
			vi: 43,
			ma: 49,
			ag: 54,
			lu: 42
		},
		learnset: [
			{
				name: 'Phantom Snow',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			},
			{
				name: 'Ali Dance',
				level: 0
			},
			{
				name: 'Mamudobarion',
				level: 78
			},
			{
				name: 'Heat Riser',
				level: 79
			},
			{
				name: 'Dark Amp',
				level: 80
			},
			{
				name: 'Concentrate',
				level: 81
			},
			{
				name: 'Light Life Aid',
				level: 82
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p5',
		user: 'P5 Protagonist',
		stage: 3,
		evoSkill: null
	},
	{
		name: 'Raphael',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -4,
				Ice: 0,
				Elec: 0,
				Force: 5,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Ailment: 2,
				Recovery: 3,
				Support: -2
			},
			inherit: 'Almighty'
		},
		arcana: 'Lovers',
		race: 'Herald',
		level: 84,
		hp: 528,
		mp: 387,
		stats: {
			st: 70,
			vi: 62,
			ma: 80,
			ag: 50,
			lu: 48
		},
		learnset: [
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Mazanbarion',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'High Force Pleroma',
				level: 85
			},
			{
				name: 'Killing Wind',
				level: 86
			},
			{
				name: 'Repel Force',
				level: 87
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire'
			],
			resist: [
				'Elec'
			],
			null: [
				'Force',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Red Rider',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 6,
				Fire: 0,
				Ice: -5,
				Elec: 4,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 2
			},
			inherit: 'Psy'
		},
		arcana: 'Tower',
		race: 'Fiend',
		level: 47,
		hp: 272,
		mp: 201,
		stats: {
			st: 39,
			vi: 29,
			ma: 37,
			ag: 31,
			lu: 32
		},
		learnset: [
			{
				name: 'Pierce Armor',
				level: 0
			},
			{
				name: 'Shockbound',
				level: 0
			},
			{
				name: 'Terrorblade',
				level: 0
			},
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Matarukaja',
				level: 48
			},
			{
				name: 'Retaliate',
				level: 49
			},
			{
				name: 'Dekunda',
				level: 50
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [],
			drain: [
				'Force'
			],
			repel: [
				'Elec'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Regent',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Support'
		},
		arcana: 'Emperor',
		race: 'Treasure',
		level: 10,
		hp: null,
		mp: null,
		stats: {
			st: 10,
			vi: 10,
			ma: 10,
			ag: 10,
			lu: 10
		},
		learnset: [
			{
				name: 'Maragi',
				level: 0
			},
			{
				name: 'Mabufu',
				level: 0
			},
			{
				name: 'Magaru',
				level: 0
			},
			{
				name: 'Mazio',
				level: 0
			},
			{
				name: 'Mapsi',
				level: 0
			},
			{
				name: 'Mafrei',
				level: 0
			},
			{
				name: 'Mahama',
				level: 0
			},
			{
				name: 'Mamudo',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Nuke'
			],
			resist: [
				'Phys',
				'Gun'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Robin Hood',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Justice',
		race: 'Persona',
		level: 45,
		hp: null,
		mp: null,
		stats: {
			st: 32,
			vi: 28,
			ma: 29,
			ag: 29,
			lu: 24
		},
		learnset: [
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Megaton Raid',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Fortify Spirit',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 47
			},
			{
				name: 'Mudobarion',
				level: 48
			},
			{
				name: 'Attack Master',
				level: 50
			},
			{
				name: 'Samarecarm',
				level: 54
			},
			{
				name: 'Mahamaon',
				level: 59
			},
			{
				name: 'Mamudoon',
				level: 62
			},
			{
				name: 'Megidolaon',
				level: 67
			},
			{
				name: 'Debilitate',
				level: 70
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [
				'Light'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Goro Akechi',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Rokuten Maoh',
		aliases: [
			'Rokuten Maou'
		],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Emperor',
		race: 'Persona',
		level: 25,
		hp: null,
		mp: null,
		stats: {
			st: 20,
			vi: 17,
			ma: 11,
			ag: 15,
			lu: 14
		},
		learnset: [
			{
				name: 'Mazio',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Kill Rush',
				level: 0
			},
			{
				name: 'Regenerate 1',
				level: 0
			},
			{
				name: 'Elec Boost',
				level: 27
			},
			{
				name: 'Fatal End',
				level: 34
			},
			{
				name: 'Cruel Attack',
				level: 38
			},
			{
				name: 'Mazionga',
				level: 40
			},
			{
				name: 'Torrent Shot',
				level: 44
			},
			{
				name: 'Elec Break',
				level: 48
			},
			{
				name: 'Ziodyne',
				level: 54
			},
			{
				name: 'Vile Assault',
				level: 58
			},
			{
				name: 'Matarukaja',
				level: 60
			},
			{
				name: 'Maziodyne',
				level: 67
			},
			{
				name: 'Primal Force',
				level: 73
			},
			{
				name: 'Elec Amp',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Kanji Tatsumi',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Saki Mitama',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Recovery'
		},
		arcana: 'Lovers',
		race: 'Mitama',
		level: 6,
		hp: null,
		mp: null,
		stats: {
			st: 4,
			vi: 5,
			ma: 6,
			ag: 6,
			lu: 4
		},
		learnset: [
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Energy Drop',
				level: 0
			},
			{
				name: 'Wind Wall',
				level: 0
			},
			{
				name: 'Growth 1',
				level: 7
			},
			{
				name: 'Rakukaja',
				level: 8
			},
			{
				name: 'Resist Mirage',
				level: 10
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Ice'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Samael',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Dark'
		},
		arcana: 'Death',
		race: 'Fallen',
		level: 36,
		hp: null,
		mp: null,
		stats: {
			st: 24,
			vi: 25,
			ma: 29,
			ag: 19,
			lu: 18
		},
		learnset: [
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Matarunda',
				level: 0
			},
			{
				name: 'Poison Mist',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 38
			},
			{
				name: 'Megido',
				level: 39
			},
			{
				name: 'Mudo Boost',
				level: 40
			},
			{
				name: 'Survival Trick',
				level: 41
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Ice'
			],
			null: [
				'Elec',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Sandalphon',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 3,
				Force: -4,
				Light: 5,
				Dark: 0,
				Almighty: 3,
				Ailment: -5,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Light'
		},
		arcana: 'Moon',
		race: 'Herald',
		level: 88,
		hp: 536,
		mp: 458,
		stats: {
			st: 71,
			vi: 74,
			ma: 83,
			ag: 63,
			lu: 53
		},
		learnset: [
			{
				name: 'Freikugel',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Thunder Reign',
				level: 0
			},
			{
				name: 'Narukami',
				level: 89
			},
			{
				name: 'Phys Block',
				level: 90
			},
			{
				name: 'Repel Elec',
				level: 91
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force'
			],
			resist: [
				'Dark'
			],
			null: [
				'Phys',
				'Elec',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Sandman',
		aliases: [],
		affinities: {
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
			inherit: 'Wind'
		},
		arcana: 'Magician',
		race: 'Night',
		level: 8,
		hp: 55,
		mp: 81,
		stats: {
			st: 9,
			vi: 8,
			ma: 9,
			ag: 11,
			lu: 12
		},
		learnset: [
			{
				name: 'Dream Needle',
				level: 0
			},
			{
				name: 'Bufu',
				level: 9
			},
			{
				name: 'Zan',
				level: 10
			},
			{
				name: 'Mazan',
				level: 11
			}
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
		game: 'smt5'
	},
	{
		name: 'Sarasvati',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -4,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 2,
				Recovery: 0,
				Support: 2
			},
			inherit: 'Recovery'
		},
		arcana: 'Priestess',
		race: 'Megami',
		level: 47,
		hp: 208,
		mp: 254,
		stats: {
			st: 21,
			vi: 25,
			ma: 48,
			ag: 37,
			lu: 36
		},
		learnset: [
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Donum Gladi',
				level: 0
			},
			{
				name: 'Lullaby',
				level: 0
			},
			{
				name: 'Marakunda',
				level: 48
			},
			{
				name: 'Mabufula',
				level: 49
			},
			{
				name: 'Tentarafoo',
				level: 50
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Resist',
				Charm: 'Null'
			},
			weak: [
				'Fire',
				'Dark'
			],
			resist: [],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Satan',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Ice'
		},
		arcana: 'Judgement',
		race: 'Godly',
		level: 92,
		hp: null,
		mp: null,
		stats: {
			st: 62,
			vi: 55,
			ma: 59,
			ag: 52,
			lu: 55
		},
		learnset: [
			{
				name: 'Bufubarion',
				level: 0
			},
			{
				name: 'Mabufubarion',
				level: 0
			},
			{
				name: 'Regenerate 3',
				level: 0
			},
			{
				name: 'Black Viper',
				level: 94
			},
			{
				name: 'Invigorate 3',
				level: 95
			},
			{
				name: 'Fortify Spirit',
				level: 96
			},
			{
				name: 'Concentrate',
				level: 97
			},
			{
				name: 'Drain Ice',
				level: 98
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [
				'Gun'
			],
			null: [],
			drain: [],
			repel: [
				'Ice',
				'Dark'
			]
		},
		game: 'p5'
	},
	{
		name: 'Satanael',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Fool',
		race: 'Persona',
		level: 95,
		hp: null,
		mp: null,
		stats: {
			st: 63,
			vi: 57,
			ma: 60,
			ag: 56,
			lu: 56
		},
		learnset: [
			{
				name: 'Mamudobarion',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Survival Trick',
				level: 0
			},
			{
				name: 'Riot Gun',
				level: 0
			},
			{
				name: 'Black Viper',
				level: 96
			},
			{
				name: 'Heat Riser',
				level: 97
			},
			{
				name: 'Tyrant"s Mind',
				level: 98
			},
			{
				name: 'Victory Cry',
				level: 99
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [
				'Phys',
				'Gun',
				'Fire',
				'Ice',
				'Elec',
				'Wind',
				'Psy',
				'Nuke'
			],
			null: [
				'Light'
			],
			drain: [
				'Dark'
			],
			repel: []
		},
		game: 'p5',
		user: 'P5 Protagonist',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Sati',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Fire'
		},
		arcana: 'Aeon',
		race: 'Megami',
		level: 31,
		hp: null,
		mp: null,
		stats: {
			st: 19,
			vi: 20,
			ma: 27,
			ag: 17,
			lu: 17
		},
		learnset: [
			{
				name: 'Maragi',
				level: 0
			},
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Energy Shower',
				level: 0
			},
			{
				name: 'Diarama',
				level: 33
			},
			{
				name: 'Trafuri',
				level: 34
			},
			{
				name: 'Maragion',
				level: 36
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p4'
	},
	{
		name: 'Saturnus',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Fire'
		},
		arcana: 'Star',
		race: 'Vile',
		level: 75,
		hp: null,
		mp: null,
		stats: {
			st: 50,
			vi: 36,
			ma: 57,
			ag: 43,
			lu: 49
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Maragidyne',
				level: 0
			},
			{
				name: 'Fire Amp',
				level: 0
			},
			{
				name: 'Evade Ice',
				level: 77
			},
			{
				name: 'Growth 3',
				level: 79
			},
			{
				name: 'Spell Master',
				level: 81
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Wind'
			],
			drain: [
				'Fire'
			],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Scathach',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 1,
				Fire: 0,
				Ice: 0,
				Elec: -5,
				Force: 3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 2,
				Recovery: 2,
				Support: 0
			},
			inherit: 'Wind'
		},
		arcana: 'Priestess',
		race: 'Megami',
		level: 55,
		hp: 307,
		mp: 238,
		stats: {
			st: 44,
			vi: 32,
			ma: 37,
			ag: 40,
			lu: 32
		},
		learnset: [
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Wind Dracostrike',
				level: 0
			},
			{
				name: 'Diamrita',
				level: 56
			},
			{
				name: 'Mist Rush',
				level: 57
			},
			{
				name: 'Abyssal Mask',
				level: 58
			}
		],
		resistances: {
			ailments: {
				Seal: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Light'
			],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Seiryu',
		aliases: [
			'Long',
			'Qing Long',
			'Seiryuu'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 2,
				Elec: -6,
				Force: 5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Ice'
		},
		arcana: 'Councillor',
		race: 'Dragon',
		level: 45,
		hp: 231,
		mp: 183,
		stats: {
			st: 31,
			vi: 29,
			ma: 33,
			ag: 36,
			lu: 31
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Matarunda',
				level: 0
			},
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Ice Pleroma',
				level: 46
			},
			{
				name: 'Eat Whole',
				level: 47
			},
			{
				name: 'Dragon Eye',
				level: 48
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Weak'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Ice'
			],
			null: [
				'Force'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Seiten Taisei',
		aliases: [
			'Qitian Dasheng'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Phys'
		},
		arcana: 'Hunger',
		race: 'Fury',
		level: 68,
		hp: null,
		mp: null,
		stats: {
			st: 47,
			vi: 40,
			ma: 34,
			ag: 48,
			lu: 42
		},
		learnset: [
			{
				name: 'Brave Blade',
				level: 0
			},
			{
				name: 'Rebellion',
				level: 0
			},
			{
				name: 'Evade Elec',
				level: 0
			},
			{
				name: 'High Counter',
				level: 69
			},
			{
				name: 'Arms Master',
				level: 71
			},
			{
				name: 'Regenerate 3',
				level: 74
			},
			{
				name: 'Vorpal Blade',
				level: 76
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [
				'Phys',
				'Wind'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Seiten Taisei - P5',
		aliases: [
			'Seiten Taisei'
		],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		stats: {
			st: 5,
			vi: 5,
			ma: 3,
			ag: 3,
			lu: 3
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Lunge',
				level: 5
			},
			{
				name: 'Tarukaja',
				level: 9
			},
			{
				name: 'Headbutt',
				level: 11
			},
			{
				name: 'Adverse Resolve',
				level: 14
			},
			{
				name: 'Rampage',
				level: 17
			},
			{
				name: 'Mazio',
				level: 21
			},
			{
				name: 'Memory Blow',
				level: 24
			},
			{
				name: 'Assault Dive',
				level: 26
			},
			{
				name: 'Zionga',
				level: 28
			},
			{
				name: 'Swift Strike',
				level: 32
			},
			{
				name: 'Shock Boost',
				level: 35
			},
			{
				name: 'Elec Break',
				level: 39
			},
			{
				name: 'Mazionga',
				level: 43
			},
			{
				name: 'Deathbound',
				level: 47
			},
			{
				name: 'Elec Boost',
				level: 49
			},
			{
				name: 'Megaton Raid',
				level: 53
			},
			{
				name: 'Ziodyne',
				level: 55
			},
			{
				name: 'Matarukaja',
				level: 58
			},
			{
				name: 'Charge',
				level: 63
			},
			{
				name: 'Maziodyne',
				level: 67
			},
			{
				name: 'Agneyastra',
				level: 71
			},
			{
				name: 'God\'s Hand',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
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
		game: 'p5',
		user: 'Ryuji Sakamoto',
		stage: 2,
		evoSkill: 'Evade Wind'
	},
	{
		name: 'Senri',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Recovery'
		},
		arcana: 'Empress',
		race: 'Nymph',
		level: 9,
		hp: null,
		mp: null,
		stats: {
			st: 7,
			vi: 4,
			ma: 7,
			ag: 14,
			lu: 7
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Makajama',
				level: 0
			},
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 10
			},
			{
				name: 'Media',
				level: 11
			},
			{
				name: 'Trafuri',
				level: 14
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Setanta',
		aliases: [],
		affinities: {
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
			inherit: 'Nuke'
		},
		arcana: 'Emperor',
		race: 'Fairy',
		level: 35,
		hp: 193,
		mp: 163,
		stats: {
			st: 35,
			vi: 25,
			ma: 26,
			ag: 27,
			lu: 20
		},
		learnset: [
			{
				name: 'Deathbound',
				level: 0
			},
			{
				name: 'Fatal Sword',
				level: 0
			},
			{
				name: 'Fang Breaker',
				level: 36
			},
			{
				name: 'Mazanma',
				level: 37
			},
			{
				name: 'Acrobat Kick',
				level: 38
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Weak',
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
		game: 'smt5'
	},
	{
		name: 'Seth',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 0,
				Ice: -6,
				Elec: 3,
				Force: 3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 2,
				Recovery: -5,
				Support: 0
			},
			inherit: 'Dark'
		},
		arcana: 'Tower',
		race: 'Drake',
		level: 67,
		hp: 409,
		mp: 284,
		stats: {
			st: 62,
			vi: 43,
			ma: 51,
			ag: 40,
			lu: 34
		},
		learnset: [
			{
				name: 'Madness Nails',
				level: 0
			},
			{
				name: 'Mazandyne',
				level: 0
			},
			{
				name: 'Tentarafoo',
				level: 0
			},
			{
				name: 'Null Force',
				level: 68
			},
			{
				name: 'Yabusame Shot',
				level: 69
			},
			{
				name: 'Ziobarion',
				level: 70
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Weak'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Shiisaa',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 1,
				Fire: -3,
				Ice: 0,
				Elec: 3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 2
			},
			inherit: 'Elec'
		},
		arcana: 'Strength',
		race: 'Holy',
		level: 19,
		hp: 91,
		mp: 117,
		stats: {
			st: 15,
			vi: 14,
			ma: 15,
			ag: 19,
			lu: 16
		},
		learnset: [
			{
				name: 'Bestial Bite',
				level: 0
			},
			{
				name: 'Mazio',
				level: 0
			},
			{
				name: 'Scratch Dance',
				level: 20
			},
			{
				name: 'Sukunda',
				level: 21
			},
			{
				name: 'Zionga',
				level: 22
			}
		],
		resistances: {
			ailments: {
				Charm: 'Weak'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Elec',
				'Force'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Shiki-Ouji',
		aliases: [],
		affinities: {
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
			inherit: 'Psy'
		},
		arcana: 'Chariot',
		race: 'Brute',
		level: 29,
		hp: 135,
		mp: 159,
		stats: {
			st: 16,
			vi: 18,
			ma: 29,
			ag: 23,
			lu: 23
		},
		learnset: [
			{
				name: 'Hama',
				level: 0
			},
			{
				name: 'Mudo',
				level: 0
			},
			{
				name: 'Mahama',
				level: 30
			},
			{
				name: 'Makajama',
				level: 31
			},
			{
				name: 'Estoma',
				level: 32
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Weak'
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
		game: 'smt5'
	},
	{
		name: 'Shiva',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 6,
				Fire: 3,
				Ice: -5,
				Elec: 3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 3,
				Ailment: -5,
				Recovery: -2,
				Support: 2
			},
			inherit: 'Psy'
		},
		arcana: 'Judgement',
		race: 'Fury',
		level: 96,
		hp: 670,
		mp: 440,
		stats: {
			st: 101,
			vi: 79,
			ma: 88,
			ag: 74,
			lu: 73
		},
		learnset: [
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Maragibarion',
				level: 0
			},
			{
				name: 'Maziobarion',
				level: 0
			},
			{
				name: 'Tandava',
				level: 0
			},
			{
				name: 'Yabusame Shot',
				level: 97
			},
			{
				name: 'High Almighty Pleroma',
				level: 98
			},
			{
				name: 'Boon Boost EX',
				level: 99
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Resist'
			},
			weak: [
				'Ice'
			],
			resist: [
				'Phys',
				'Light',
				'Dark'
			],
			null: [],
			drain: [
				'Fire',
				'Elec'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Siegfried',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 6,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -5,
				Dark: -5,
				Almighty: -5,
				Ailment: 0,
				Recovery: -4,
				Support: 1
			},
			inherit: 'Phys'
		},
		arcana: 'Faith',
		race: 'Wargod',
		level: 63,
		hp: 398,
		mp: 233,
		stats: {
			st: 59,
			vi: 54,
			ma: 27,
			ag: 41,
			lu: 29
		},
		learnset: [
			{
				name: 'Brave Blade',
				level: 0
			},
			{
				name: 'Mighty Cleave',
				level: 0
			},
			{
				name: 'Mist Rush',
				level: 0
			},
			{
				name: 'Titanomachia',
				level: 0
			},
			{
				name: 'Safeguard',
				level: 64
			},
			{
				name: 'Enduring Soul',
				level: 65
			},
			{
				name: 'Impaler\'s Animus',
				level: 66
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force',
				'Light',
				'Dark'
			],
			resist: [],
			null: [],
			drain: [
				'Phys'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Silky',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 0,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 1
			},
			inherit: 'Ice'
		},
		arcana: 'Priestess',
		race: 'Fairy',
		level: 41,
		hp: 189,
		mp: 210,
		stats: {
			st: 19,
			vi: 23,
			ma: 40,
			ag: 29,
			lu: 34
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Donum Magici',
				level: 0
			},
			{
				name: 'Marakukaja',
				level: 42
			},
			{
				name: 'Me Patra',
				level: 43
			},
			{
				name: 'Boon Boost',
				level: 44
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Weak',
				Charm: 'Resist',
				Sleep: 'Null'
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
		game: 'smt5'
	},
	{
		name: 'Skadi',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -5,
				Ice: 4,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 3,
				Almighty: 0,
				Ailment: 1,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Ice'
		},
		arcana: 'Priestess',
		race: 'Lady',
		level: 67,
		hp: 320,
		mp: 345,
		stats: {
			st: 22,
			vi: 36,
			ma: 62,
			ag: 54,
			lu: 49
		},
		learnset: [
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Null Ice',
				level: 68
			},
			{
				name: 'Bufubarion',
				level: 69
			},
			{
				name: 'Mudobarion',
				level: 70
			}
		],
		resistances: {
			ailments: {
				Seal: 'Null'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Ice'
			],
			null: [
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Slime',
		aliases: [],
		affinities: {
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
			inherit: 'Dark'
		},
		arcana: 'Chariot',
		race: 'Foul',
		level: 1,
		hp: 41,
		mp: 40,
		stats: {
			st: 5,
			vi: 6,
			ma: 4,
			ag: 3,
			lu: 4
		},
		learnset: [
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Dustoma',
				level: 2
			},
			{
				name: 'Poisma',
				level: 3
			}
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
		game: 'smt5'
	},
	{
		name: 'Sraosha',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -5,
				Light: 5,
				Dark: 0,
				Almighty: 2,
				Ailment: 0,
				Recovery: 3,
				Support: 0
			},
			inherit: 'Light'
		},
		arcana: 'Star',
		race: 'Herald',
		level: 77,
		hp: 399,
		mp: 407,
		stats: {
			st: 33,
			vi: 43,
			ma: 67,
			ag: 68,
			lu: 55
		},
		learnset: [
			{
				name: 'Mahamabarion',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 0
			},
			{
				name: 'Mediarahan',
				level: 0
			},
			{
				name: 'Energy Drain',
				level: 78
			},
			{
				name: 'Hamabarion',
				level: 79
			},
			{
				name: 'High Light Pleroma',
				level: 80
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force'
			],
			resist: [
				'Ice',
				'Elec'
			],
			null: [],
			drain: [
				'Light'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Stone of Scone',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Support'
		},
		arcana: 'Fortune',
		race: 'Treasure',
		level: 20,
		hp: null,
		mp: null,
		stats: {
			st: 20,
			vi: 20,
			ma: 20,
			ag: 20,
			lu: 20
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Garula',
				level: 0
			},
			{
				name: 'Psio',
				level: 0
			},
			{
				name: 'Freila',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [
				'Phys',
				'Gun'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Succubus',
		aliases: [],
		affinities: {
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
			inherit: 'Psy'
		},
		arcana: 'Moon',
		race: 'Night',
		level: 38,
		hp: 165,
		mp: 197,
		stats: {
			st: 17,
			vi: 20,
			ma: 38,
			ag: 31,
			lu: 29
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Masukunda',
				level: 0
			},
			{
				name: 'Spirit Drain',
				level: 0
			},
			{
				name: 'Sexy Dance',
				level: 39
			},
			{
				name: 'Donum Magici',
				level: 40
			},
			{
				name: 'Great Curse Siphon',
				level: 41
			}
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
		game: 'smt5'
	},
	{
		name: 'Sudama',
		aliases: [],
		affinities: {
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
			inherit: 'Psy'
		},
		arcana: 'Hermit',
		race: 'Jirae',
		level: 17,
		hp: 83,
		mp: 98,
		stats: {
			st: 12,
			vi: 14,
			ma: 16,
			ag: 16,
			lu: 14
		},
		learnset: [
			{
				name: 'Mazan',
				level: 0
			},
			{
				name: 'Zan',
				level: 18
			},
			{
				name: 'Makajama',
				level: 19
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Weak',
				Confuse: 'Resist'
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
		game: 'smt5'
	},
	{
		name: 'Sui-Ki',
		aliases: [],
		affinities: {
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
			inherit: 'Ice'
		},
		arcana: 'Moon',
		race: 'Brute',
		level: 56,
		hp: 328,
		mp: 227,
		stats: {
			st: 47,
			vi: 39,
			ma: 41,
			ag: 33,
			lu: 28
		},
		learnset: [
			{
				name: 'Fang Breaker',
				level: 0
			},
			{
				name: 'Ice Dracostrike',
				level: 0
			},
			{
				name: 'Marakukaja',
				level: 0
			},
			{
				name: 'Donum Gladi',
				level: 57
			},
			{
				name: 'Deathbound',
				level: 58
			},
			{
				name: 'Mabufudyne',
				level: 59
			}
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
		game: 'smt5'
	},
	{
		name: 'Sukuna-Hikona',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 0,
				Ice: 4,
				Elec: -5,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Kunitsu',
		level: 37,
		hp: 206,
		mp: 169,
		stats: {
			st: 28,
			vi: 26,
			ma: 30,
			ag: 26,
			lu: 26
		},
		learnset: [
			{
				name: 'Eternal Blizzard',
				level: 0
			},
			{
				name: 'Fatal Sword',
				level: 0
			},
			{
				name: 'Matarukaja',
				level: 0
			},
			{
				name: 'Hellish Mask',
				level: 38
			},
			{
				name: 'Blight',
				level: 39
			},
			{
				name: 'Charge',
				level: 40
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [
				'Ice'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Sukuna-Hikona - P4',
		aliases: [
			'Sukuna-Hikona'
		],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Fortune',
		race: 'Persona',
		level: 55,
		hp: null,
		mp: null,
		stats: {
			st: 32,
			vi: 32,
			ma: 38,
			ag: 40,
			lu: 31
		},
		learnset: [
			{
				name: 'Tempest Slash',
				level: 0
			},
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Garudyne',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Deathbound',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 56
			},
			{
				name: 'Blight',
				level: 58
			},
			{
				name: 'Mudo Boost',
				level: 60
			},
			{
				name: 'Hama Boost',
				level: 62
			},
			{
				name: 'Makarakarn',
				level: 64
			},
			{
				name: 'Mamudoon',
				level: 68
			},
			{
				name: 'Mahamaon',
				level: 70
			},
			{
				name: 'Vorpal Blade',
				level: 73
			},
			{
				name: 'Megidolaon',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [
				'Light',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Naoto Shirogane',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Sumeo-Okami',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Priestess',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		stats: {
			st: 8,
			vi: 11,
			ma: 15,
			ag: 8,
			lu: 10
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Maragi',
				level: 0
			},
			{
				name: 'Media',
				level: 16
			},
			{
				name: 'Agilao',
				level: 21
			},
			{
				name: 'Recarm',
				level: 26
			},
			{
				name: 'Fire Break',
				level: 30
			},
			{
				name: 'Diarama',
				level: 33
			},
			{
				name: 'Maragion',
				level: 39
			},
			{
				name: 'Mediarama',
				level: 43
			},
			{
				name: 'Fire Boost',
				level: 45
			},
			{
				name: 'Agidyne',
				level: 51
			},
			{
				name: 'Diarahan',
				level: 55
			},
			{
				name: 'Samarecarm',
				level: 59
			},
			{
				name: 'Mediarahan',
				level: 65
			},
			{
				name: 'Maragidyne',
				level: 68
			},
			{
				name: 'Salvation',
				level: 74
			},
			{
				name: 'Fire Amp',
				level: 76
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [],
			null: [
				'Elec'
			],
			drain: [
				'Fire'
			],
			repel: []
		},
		game: 'p4',
		user: 'Yukiko Amagi',
		stage: 3,
		evoSkill: 'Maragibarion'
	},
	{
		name: 'Suparna',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Wind'
		},
		arcana: 'Sun',
		race: 'Avian',
		level: 77,
		hp: null,
		mp: null,
		stats: {
			st: 48,
			vi: 45,
			ma: 52,
			ag: 55,
			lu: 38
		},
		learnset: [
			{
				name: 'Garudyne',
				level: 0
			},
			{
				name: 'Makajama',
				level: 0
			},
			{
				name: 'Evade Ice',
				level: 79
			},
			{
				name: 'Wind Amp',
				level: 80
			},
			{
				name: 'Magarudyne',
				level: 81
			},
			{
				name: 'Evade Fire',
				level: 82
			},
			{
				name: 'Elec Amp',
				level: 83
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Wind'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Surt',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 6,
				Ice: -6,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Fire'
		},
		arcana: 'Magician',
		race: 'Tyrant',
		level: 62,
		hp: 388,
		mp: 233,
		stats: {
			st: 56,
			vi: 49,
			ma: 46,
			ag: 29,
			lu: 36
		},
		learnset: [
			{
				name: 'Brave Blade',
				level: 0
			},
			{
				name: 'Fire Dracostrike',
				level: 0
			},
			{
				name: 'Maragidyne',
				level: 0
			},
			{
				name: 'Mighty Cleave',
				level: 63
			},
			{
				name: 'Hades Blast',
				level: 64
			},
			{
				name: 'Murderous Glee',
				level: 65
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [],
			null: [],
			drain: [
				'Fire'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Susano-o',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Magician',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		stats: {
			st: 5,
			vi: 3,
			ma: 3,
			ag: 5,
			lu: 4
		},
		learnset: [
			{
				name: 'Garu',
				level: 0
			},
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 6
			},
			{
				name: 'Makajama',
				level: 10
			},
			{
				name: 'Sonic Punch',
				level: 14
			},
			{
				name: 'Magaru',
				level: 18
			},
			{
				name: 'Tentarafoo',
				level: 23
			},
			{
				name: 'Garula',
				level: 29
			},
			{
				name: 'Power Slash',
				level: 34
			},
			{
				name: 'Magarula',
				level: 40
			},
			{
				name: 'Wind Boost',
				level: 44
			},
			{
				name: 'Wind Break',
				level: 49
			},
			{
				name: 'Garudyne',
				level: 53
			},
			{
				name: 'Masukukaja',
				level: 60
			},
			{
				name: 'Magarudyne',
				level: 64
			},
			{
				name: 'Brave Blade',
				level: 69
			},
			{
				name: 'Wind Amp',
				level: 73
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Fire'
			],
			null: [
				'Wind'
			],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Yosuke Hanamura',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Suzaku',
		aliases: [
			'Zhuque'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 5,
				Ice: 0,
				Elec: -6,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 1,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Nuke'
		},
		arcana: 'Sun',
		race: 'Avian',
		level: 43,
		hp: 188,
		mp: 219,
		stats: {
			st: 23,
			vi: 24,
			ma: 41,
			ag: 36,
			lu: 28
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Fire Pleroma',
				level: 0
			},
			{
				name: 'Matarunda',
				level: 0
			},
			{
				name: 'Maragion',
				level: 44
			},
			{
				name: 'Fire Block',
				level: 45
			},
			{
				name: 'Dekunda',
				level: 46
			}
		],
		resistances: {
			ailments: {},
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
		game: 'smt5'
	},
	{
		name: 'Suzuka Gongen',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		stats: {
			st: 4,
			vi: 4,
			ma: 4,
			ag: 2,
			lu: 3
		},
		learnset: [
			{
				name: 'Skewer',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 0
			},
			{
				name: 'Bufu',
				level: 6
			},
			{
				name: 'Skull Cracker',
				level: 11
			},
			{
				name: 'Mabufu',
				level: 14
			},
			{
				name: 'Rampage',
				level: 20
			},
			{
				name: 'Assault Dive',
				level: 22
			},
			{
				name: 'Counter - Persona',
				level: 24
			},
			{
				name: 'Gale Slash',
				level: 29
			},
			{
				name: 'Apt Pupil',
				level: 33
			},
			{
				name: 'Attack Master',
				level: 36
			},
			{
				name: 'Black Spot',
				level: 38
			},
			{
				name: 'Counterstrike',
				level: 43
			},
			{
				name: 'Heat Wave',
				level: 46
			},
			{
				name: 'Charge',
				level: 52
			},
			{
				name: 'High Counter',
				level: 61
			},
			{
				name: 'Rainy Death',
				level: 67
			},
			{
				name: 'God\'s Hand',
				level: 70
			},
			{
				name: 'Agneyastra',
				level: 74
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
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
		game: 'p4',
		user: 'Chie Satonaka',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Sylph',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Wind'
		},
		arcana: 'Temperance',
		race: 'Element',
		level: 11,
		hp: null,
		mp: null,
		stats: {
			st: 8,
			vi: 5,
			ma: 10,
			ag: 10,
			lu: 7
		},
		learnset: [
			{
				name: 'Garu',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Regenerate 1',
				level: 12
			},
			{
				name: 'Media',
				level: 13
			},
			{
				name: 'Magaru',
				level: 14
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Wind'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Take-Mikazuchi',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Emperor',
		race: 'Persona',
		level: 25,
		hp: null,
		mp: null,
		stats: {
			st: 20,
			vi: 17,
			ma: 11,
			ag: 15,
			lu: 14
		},
		learnset: [
			{
				name: 'Mazio',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Kill Rush',
				level: 0
			},
			{
				name: 'Regenerate 1',
				level: 0
			},
			{
				name: 'Elec Boost',
				level: 27
			},
			{
				name: 'Fatal End',
				level: 34
			},
			{
				name: 'Cruel Attack',
				level: 38
			},
			{
				name: 'Mazionga',
				level: 40
			},
			{
				name: 'Torrent Shot',
				level: 44
			},
			{
				name: 'Elec Break',
				level: 48
			},
			{
				name: 'Ziodyne',
				level: 54
			},
			{
				name: 'Vile Assault',
				level: 58
			},
			{
				name: 'Matarukaja',
				level: 60
			},
			{
				name: 'Maziodyne',
				level: 67
			},
			{
				name: 'Primal Force',
				level: 73
			},
			{
				name: 'Elec Amp',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Elec'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Kanji Tatsumi',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Take-Minakata',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: -3,
				Ice: 0,
				Elec: 2,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: -1,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Elec'
		},
		arcana: 'Hanged',
		race: 'Kunitsu',
		level: 19,
		hp: 107,
		mp: 98,
		stats: {
			st: 18,
			vi: 18,
			ma: 12,
			ag: 16,
			lu: 15
		},
		learnset: [
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Shockbound',
				level: 0
			},
			{
				name: 'Charge',
				level: 20
			},
			{
				name: 'Zionga',
				level: 21
			},
			{
				name: 'Counter',
				level: 22
			}
		],
		resistances: {
			ailments: {},
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
		game: 'smt5'
	},
	{
		name: 'Takehaya Susano-o',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Magician',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		stats: {
			st: 5,
			vi: 3,
			ma: 3,
			ag: 5,
			lu: 4
		},
		learnset: [
			{
				name: 'Garu',
				level: 0
			},
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 6
			},
			{
				name: 'Makajama',
				level: 10
			},
			{
				name: 'Sonic Punch',
				level: 14
			},
			{
				name: 'Magaru',
				level: 18
			},
			{
				name: 'Tentarafoo',
				level: 23
			},
			{
				name: 'Garula',
				level: 29
			},
			{
				name: 'Power Slash',
				level: 34
			},
			{
				name: 'Magarula',
				level: 40
			},
			{
				name: 'Wind Boost',
				level: 44
			},
			{
				name: 'Wind Break',
				level: 49
			},
			{
				name: 'Garudyne',
				level: 53
			},
			{
				name: 'Masukukaja',
				level: 60
			},
			{
				name: 'Magarudyne',
				level: 64
			},
			{
				name: 'Brave Blade',
				level: 69
			},
			{
				name: 'Wind Amp',
				level: 73
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [
				'Wind'
			],
			repel: []
		},
		game: 'p4',
		user: 'Yosuke Hanamura',
		stage: 3,
		evoSkill: 'Youthful Wind'
	},
	{
		name: 'Takeji Zaiten',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Emperor',
		race: 'Persona',
		level: 25,
		hp: null,
		mp: null,
		stats: {
			st: 20,
			vi: 17,
			ma: 11,
			ag: 15,
			lu: 14
		},
		learnset: [
			{
				name: 'Mazio',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Kill Rush',
				level: 0
			},
			{
				name: 'Regenerate 1',
				level: 0
			},
			{
				name: 'Elec Boost',
				level: 27
			},
			{
				name: 'Fatal End',
				level: 34
			},
			{
				name: 'Cruel Attack',
				level: 38
			},
			{
				name: 'Mazionga',
				level: 40
			},
			{
				name: 'Torrent Shot',
				level: 44
			},
			{
				name: 'Elec Break',
				level: 48
			},
			{
				name: 'Ziodyne',
				level: 54
			},
			{
				name: 'Vile Assault',
				level: 58
			},
			{
				name: 'Matarukaja',
				level: 60
			},
			{
				name: 'Maziodyne',
				level: 67
			},
			{
				name: 'Primal Force',
				level: 73
			},
			{
				name: 'Elec Amp',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Phys'
			],
			null: [],
			drain: [
				'Elec'
			],
			repel: []
		},
		game: 'p4',
		user: 'Kanji Tatsumi',
		stage: 3,
		evoSkill: 'The Man"s Way'
	},
	{
		name: 'Tam Lin',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Faith',
		race: 'Genma',
		level: 27,
		hp: null,
		mp: null,
		stats: {
			st: 21,
			vi: 18,
			ma: 16,
			ag: 16,
			lu: 17
		},
		learnset: [
			{
				name: 'Assault Dive',
				level: 0
			},
			{
				name: 'Brain Shake',
				level: 0
			},
			{
				name: 'Rebellion',
				level: 0
			},
			{
				name: 'Sharp Student',
				level: 28
			},
			{
				name: 'Brain Buster',
				level: 30
			},
			{
				name: 'Charm Boost',
				level: 31
			},
			{
				name: 'Heat Up',
				level: 32
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [
				'Phys',
				'Wind'
			],
			null: [
				'Fire'
			],
			drain: [
				'Light'
			],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Tao',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -5,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 5,
				Dark: -5,
				Almighty: 4,
				Ailment: 0,
				Recovery: 3,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Panagia',
		level: 60,
		hp: 308,
		mp: 355,
		stats: {
			st: 20,
			vi: 44,
			ma: 62,
			ag: 38,
			lu: 49
		},
		learnset: [
			{
				name: 'Light of Order',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Matarunda',
				level: 0
			},
			{
				name: 'Mahamaon',
				level: 61
			},
			{
				name: 'Mana Aid',
				level: 62
			},
			{
				name: 'Null Dark',
				level: 64
			}
		],
		resistances: {
			ailments: {
				Charm: 'Null'
			},
			weak: [
				'Dark'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Taotie',
		aliases: [
			'Tao Tie'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Tower',
		race: 'Vile',
		level: 35,
		hp: null,
		mp: null,
		stats: {
			st: 20,
			vi: 30,
			ma: 27,
			ag: 22,
			lu: 13
		},
		learnset: [
			{
				name: 'Megido',
				level: 0
			},
			{
				name: 'Mind Slice',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 0
			},
			{
				name: 'Confuse Boost',
				level: 37
			},
			{
				name: 'Concentrate',
				level: 38
			},
			{
				name: 'Null Enervate',
				level: 40
			},
			{
				name: 'Torrent Shot',
				level: 41
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: [
				'Dark'
			]
		},
		game: 'p4'
	},
	{
		name: 'Taowu',
		aliases: [
			'Taown'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Recovery'
		},
		arcana: 'Hanged',
		race: 'Wilder',
		level: 56,
		hp: null,
		mp: null,
		stats: {
			st: 40,
			vi: 37,
			ma: 31,
			ag: 38,
			lu: 29
		},
		learnset: [
			{
				name: 'Aeon Rain',
				level: 0
			},
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Matarukaja',
				level: 0
			},
			{
				name: 'Null Enervate',
				level: 58
			},
			{
				name: 'Charge',
				level: 50
			},
			{
				name: 'Evade Phys',
				level: 61
			},
			{
				name: 'Drain Fire',
				level: 62
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire',
				'Light'
			],
			resist: [],
			null: [
				'Wind',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Thanatos',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Death',
		race: 'Persona',
		level: 65,
		hp: null,
		mp: null,
		stats: {
			st: 43,
			vi: 41,
			ma: 49,
			ag: 38,
			lu: 31
		},
		learnset: [
			{
				name: 'Door of Hades',
				level: 0
			},
			{
				name: 'Mamudobarion',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Dark Amp',
				level: 66
			},
			{
				name: 'One-shot Kill',
				level: 68
			},
			{
				name: 'Fortified Moxy',
				level: 69
			},
			{
				name: 'Enduring Soul',
				level: 70
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Light'
			],
			resist: [
				'Phys'
			],
			null: [],
			drain: [],
			repel: [
				'Dark'
			]
		},
		game: 'p5',
		user: 'Elizabeth',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Thanatos Picaro',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Death',
		race: 'Picaro',
		level: 69,
		hp: null,
		mp: null,
		stats: {
			st: 45,
			vi: 43,
			ma: 51,
			ag: 40,
			lu: 35
		},
		learnset: [
			{
				name: 'Door of Hades',
				level: 0
			},
			{
				name: 'Mamudobarion',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Mudo Boost',
				level: 70
			},
			{
				name: 'One-shot Kill',
				level: 72
			},
			{
				name: 'Adverse Resolve',
				level: 73
			},
			{
				name: 'Enduring Soul',
				level: 74
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Light'
			],
			resist: [
				'Phys'
			],
			null: [],
			drain: [],
			repel: [
				'Dark'
			]
		},
		game: 'p5'
	},
	{
		name: 'Thor',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 0,
				Ice: 0,
				Elec: 4,
				Force: -5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Elec'
		},
		arcana: 'Chariot',
		race: 'Kishin',
		level: 66,
		hp: 399,
		mp: 272,
		stats: {
			st: 58,
			vi: 56,
			ma: 43,
			ag: 29,
			lu: 36
		},
		learnset: [
			{
				name: 'Hell Thrust',
				level: 0
			},
			{
				name: 'Maziodyne',
				level: 0
			},
			{
				name: 'Power Punch',
				level: 0
			},
			{
				name: 'Titanomachia',
				level: 67
			},
			{
				name: 'Abyssal Mask',
				level: 68
			},
			{
				name: 'Ziobarion',
				level: 69
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Force'
			],
			resist: [
				'Fire',
				'Light'
			],
			null: [],
			drain: [
				'Elec'
			],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Thoth',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: 3,
				Almighty: 1,
				Ailment: 0,
				Recovery: 0,
				Support: 3
			},
			inherit: 'Nuke'
		},
		arcana: 'Emperor',
		race: 'Deity',
		level: 33,
		hp: 144,
		mp: 241,
		stats: {
			st: 18,
			vi: 22,
			ma: 36,
			ag: 21,
			lu: 27
		},
		learnset: [
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Mana Spring',
				level: 0
			},
			{
				name: 'Megido',
				level: 0
			},
			{
				name: 'Resist Ice',
				level: 34
			},
			{
				name: 'Matarunda',
				level: 35
			},
			{
				name: 'Light Pleroma',
				level: 36
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Weak'
			},
			weak: [
				'Dark'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Throne',
		aliases: [],
		affinities: {
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
			inherit: 'Light'
		},
		arcana: 'Justice',
		race: 'Divine',
		level: 64,
		hp: 327,
		mp: 313,
		stats: {
			st: 28,
			vi: 44,
			ma: 54,
			ag: 41,
			lu: 47
		},
		learnset: [
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'Maragidyne',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Fire Block',
				level: 65
			},
			{
				name: 'Null Dark',
				level: 66
			},
			{
				name: 'Light Pleroma',
				level: 67
			}
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
		game: 'smt5'
	},
	{
		name: 'Thunderbird',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 5,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 2
			},
			inherit: 'Elec'
		},
		arcana: 'Sun',
		race: 'Avian',
		level: 38,
		hp: 192,
		mp: 172,
		stats: {
			st: 27,
			vi: 18,
			ma: 32,
			ag: 36,
			lu: 21
		},
		learnset: [
			{
				name: 'Elec Pleroma',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Masukunda',
				level: 39
			},
			{
				name: 'Concentrate',
				level: 40
			},
			{
				name: 'Great Life Spring',
				level: 41
			}
		],
		resistances: {
			ailments: {},
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
		game: 'smt5'
	},
	{
		name: 'Titan',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Elec'
		},
		arcana: 'Strength',
		race: 'Jirae',
		level: 14,
		hp: null,
		mp: null,
		stats: {
			st: 11,
			vi: 10,
			ma: 12,
			ag: 10,
			lu: 6
		},
		learnset: [
			{
				name: 'Mazio',
				level: 0
			},
			{
				name: 'Skull Cracker',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 0
			},
			{
				name: 'Dodge Ice',
				level: 16
			},
			{
				name: 'Kill Rush',
				level: 18
			},
			{
				name: 'Resist Fear',
				level: 19
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p4'
	},
	{
		name: 'Titania',
		aliases: [],
		affinities: {
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
			inherit: 'Nuke'
		},
		arcana: 'Empress',
		race: 'Fairy',
		level: 57,
		hp: 262,
		mp: 395,
		stats: {
			st: 25,
			vi: 36,
			ma: 54,
			ag: 35,
			lu: 42
		},
		learnset: [
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Great Mana Spring',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'Marakunda',
				level: 58
			},
			{
				name: 'Lullaby',
				level: 59
			},
			{
				name: 'Maziodyne',
				level: 60
			}
		],
		resistances: {
			ailments: {
				Confuse: 'Resist',
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
		game: 'smt5'
	},
	{
		name: 'Tomoe',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		stats: {
			st: 4,
			vi: 4,
			ma: 4,
			ag: 2,
			lu: 3
		},
		learnset: [
			{
				name: 'Skewer',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 0
			},
			{
				name: 'Bufu',
				level: 6
			},
			{
				name: 'Skull Cracker',
				level: 11
			},
			{
				name: 'Mabufu',
				level: 14
			},
			{
				name: 'Rampage',
				level: 20
			},
			{
				name: 'Assault Dive',
				level: 22
			},
			{
				name: 'Counter - Persona',
				level: 24
			},
			{
				name: 'Gale Slash',
				level: 29
			},
			{
				name: 'Apt Pupil',
				level: 33
			},
			{
				name: 'Attack Master',
				level: 36
			},
			{
				name: 'Black Spot',
				level: 38
			},
			{
				name: 'Counterstrike',
				level: 43
			},
			{
				name: 'Heat Wave',
				level: 46
			},
			{
				name: 'Charge',
				level: 52
			},
			{
				name: 'High Counter',
				level: 61
			},
			{
				name: 'Rainy Death',
				level: 67
			},
			{
				name: 'God\'s Hand',
				level: 70
			},
			{
				name: 'Agneyastra',
				level: 74
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p4',
		user: 'Chie Satonaka',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Triglav',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Phys'
		},
		arcana: 'Chariot',
		race: 'Fury',
		level: 43,
		hp: null,
		mp: null,
		stats: {
			st: 33,
			vi: 27,
			ma: 23,
			ag: 32,
			lu: 21
		},
		learnset: [
			{
				name: 'Heat Wave',
				level: 0
			},
			{
				name: 'Counterstrike',
				level: 0
			},
			{
				name: 'Marakukaja',
				level: 45
			},
			{
				name: 'Mustard Bomb',
				level: 46
			},
			{
				name: 'Null Mirage',
				level: 48
			},
			{
				name: 'Ice Wall',
				level: 48
			},
			{
				name: 'Charge',
				level: 49
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Phys'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Trismegistus',
		aliases: [],
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
			st: 3,
			vi: 2,
			ma: 2,
			ag: 2,
			lu: 1
		},
		learnset: [
			{
				name: 'Cleave',
				level: 0
			},
			{
				name: 'Agi',
				level: 5
			},
			{
				name: 'Re Patra',
				level: 7
			},
			{
				name: 'Rakukaja',
				level: 9
			},
			{
				name: 'Assault Dive',
				level: 18
			},
			{
				name: 'Double Fangs',
				level: 20
			},
			{
				name: 'Kill Rush',
				level: 25
			},
			{
				name: 'Agilao',
				level: 32
			},
			{
				name: 'Counter - Persona',
				level: 35
			},
			{
				name: 'Torrent Shot',
				level: 40
			},
			{
				name: 'Marakukaja',
				level: 44
			},
			{
				name: 'Counterstrike',
				level: 45
			},
			{
				name: 'Blade of Fury',
				level: 50
			},
			{
				name: 'Gigantic Fist',
				level: 55
			},
			{
				name: 'High Counter',
				level: 58
			},
			{
				name: 'Fire Break',
				level: 60
			},
			{
				name: 'Agidyne',
				level: 64
			},
			{
				name: 'Brave Blade',
				level: 65
			},
			{
				name: 'Vorpal Blade',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		game: 'p3',
		user: 'Junpei Iori',
		stage: 2,
		evoSkill: 'Spring of Life'
	},
	{
		name: 'Trumpeter',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: -6,
				Fire: 3,
				Ice: 3,
				Elec: 3,
				Force: 3,
				Light: 0,
				Dark: 0,
				Almighty: 5,
				Ailment: 4,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Nuke'
		},
		arcana: 'Judgement',
		race: 'Fiend',
		level: 73,
		hp: 398,
		mp: 402,
		stats: {
			st: 32,
			vi: 30,
			ma: 77,
			ag: 55,
			lu: 57
		},
		learnset: [
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Evil Melody',
				level: 0
			},
			{
				name: 'Mazanbarion',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Maragibarion',
				level: 74
			},
			{
				name: 'Mabufubarion',
				level: 75
			},
			{
				name: 'Maziobarion',
				level: 76
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Seal: 'Null'
			},
			weak: [],
			resist: [
				'Fire',
				'Ice',
				'Elec',
				'Force'
			],
			null: [
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Tsuchigumo',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: 'Strength',
		race: 'Jirae',
		level: 13,
		hp: 101,
		mp: 83,
		stats: {
			st: 14,
			vi: 16,
			ma: 12,
			ag: 9,
			lu: 10
		},
		learnset: [
			{
				name: 'Mazio',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 14
			},
			{
				name: 'Bouncing Claw',
				level: 15
			}
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
		game: 'smt5'
	},
	{
		name: 'Tsukiyomi',
		aliases: [
			'Tsukuyomi'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Moon',
		race: 'Persona',
		level: 50,
		hp: null,
		mp: null,
		stats: {
			st: 38,
			vi: 33,
			ma: 32,
			ag: 37,
			lu: 17
		},
		learnset: [
			{
				name: 'Abyssal Wings',
				level: 0
			},
			{
				name: 'Drain Dark',
				level: 0
			},
			{
				name: 'Myriad Slashes',
				level: 0
			},
			{
				name: 'Life Drain',
				level: 0
			},
			{
				name: 'Dark Amp',
				level: 53
			},
			{
				name: 'Vorpal Blade',
				level: 55
			},
			{
				name: 'Arms Master',
				level: 56
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Nuke'
			],
			resist: [
				'Phys',
				'Light'
			],
			null: [],
			drain: [],
			repel: [
				'Dark'
			]
		},
		game: 'p5',
		user: 'Sho Minazuki',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Tsukiyomi Picaro',
		aliases: [
			'Tsukuyomi Picaro'
		],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Moon',
		race: 'Picaro',
		level: 55,
		hp: null,
		mp: null,
		stats: {
			st: 41,
			vi: 36,
			ma: 35,
			ag: 40,
			lu: 20
		},
		learnset: [
			{
				name: 'Abyssal Wings',
				level: 0
			},
			{
				name: 'Drain Dark',
				level: 0
			},
			{
				name: 'Myriad Slashes',
				level: 0
			},
			{
				name: 'Spirit Drain',
				level: 0
			},
			{
				name: 'Dark Amp',
				level: 58
			},
			{
				name: 'Vorpal Blade',
				level: 60
			},
			{
				name: 'Spell Master',
				level: 61
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Nuke'
			],
			resist: [
				'Phys',
				'Light'
			],
			null: [],
			drain: [],
			repel: [
				'Dark'
			]
		},
		game: 'p5'
	},
	{
		name: 'Turdak',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: 'Judgement',
		race: 'Jaki',
		level: 11,
		hp: 80,
		mp: 70,
		stats: {
			st: 15,
			vi: 13,
			ma: 7,
			ag: 10,
			lu: 8
		},
		learnset: [
			{
				name: 'Gram Slice',
				level: 0
			},
			{
				name: 'Critical Slash',
				level: 12
			},
			{
				name: 'Recarm',
				level: 14
			}
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
		game: 'smt5'
	},
	{
		name: 'Tzitzimitl',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Elec'
		},
		arcana: 'Priestess',
		race: 'Tyrant',
		level: 70,
		hp: null,
		mp: null,
		stats: {
			st: 46,
			vi: 41,
			ma: 56,
			ag: 39,
			lu: 35
		},
		learnset: [
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'Virus Wave',
				level: 0
			},
			{
				name: 'Mustard Bomb',
				level: 0
			},
			{
				name: 'Seal Boost',
				level: 71
			},
			{
				name: 'Dekaja',
				level: 72
			},
			{
				name: 'Regenerate 3',
				level: 73
			},
			{
				name: 'Maziodyne',
				level: 76
			},
			{
				name: 'Repel Elec',
				level: 77
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [],
			null: [
				'Dark'
			],
			drain: [],
			repel: [
				'Elec'
			]
		},
		game: 'p4'
	},
	{
		name: 'Ukobach',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Fire'
		},
		arcana: 'Devil',
		race: 'Fallen',
		level: 3,
		hp: null,
		mp: null,
		stats: {
			st: 3,
			vi: 3,
			ma: 4,
			ag: 4,
			lu: 2
		},
		learnset: [
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Sukunda',
				level: 0
			},
			{
				name: 'Pulinpa',
				level: 4
			},
			{
				name: 'Confuse Boost',
				level: 5
			},
			{
				name: 'Resist Fire',
				level: 6
			},
			{
				name: 'Fire Break',
				level: 7
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice'
			],
			resist: [
				'Fire'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Undine',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Recovery'
		},
		arcana: 'Lovers',
		race: 'Element',
		level: 33,
		hp: null,
		mp: null,
		stats: {
			st: 21,
			vi: 13,
			ma: 27,
			ag: 26,
			lu: 19
		},
		learnset: [
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 0
			},
			{
				name: 'Mabufula',
				level: 34
			},
			{
				name: 'Mediarama',
				level: 36
			},
			{
				name: 'Ice Boost',
				level: 37
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p4'
	},
	{
		name: 'Unicorn',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Nuke'
		},
		arcana: 'Hierophant',
		race: 'Holy',
		level: 39,
		hp: null,
		mp: null,
		stats: {
			st: 20,
			vi: 24,
			ma: 26,
			ag: 27,
			lu: 24
		},
		learnset: [
			{
				name: 'Assault Dive',
				level: 0
			},
			{
				name: 'Mafreila',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Recarm',
				level: 40
			},
			{
				name: 'Regenerate 2',
				level: 42
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [
				'Psy'
			],
			null: [
				'Ice',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'Uriel',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 5,
				Ice: -5,
				Elec: 2,
				Force: 0,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: -4
			},
			inherit: 'Light'
		},
		arcana: 'Justice',
		race: 'Herald',
		level: 82,
		hp: 516,
		mp: 371,
		stats: {
			st: 66,
			vi: 59,
			ma: 64,
			ag: 57,
			lu: 45
		},
		learnset: [
			{
				name: 'Akashic Arts',
				level: 0
			},
			{
				name: 'Maziobarion',
				level: 0
			},
			{
				name: 'Ragnarok',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 83
			},
			{
				name: 'Figment Slash',
				level: 84
			},
			{
				name: 'Narukami',
				level: 85
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Ice'
			],
			resist: [
				'Elec'
			],
			null: [
				'Fire',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Valjean',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Apostle',
		race: 'Persona',
		level: 40,
		hp: null,
		mp: null,
		stats: {
			st: 34,
			vi: 32,
			ma: 26,
			ag: 25,
			lu: 22
		},
		learnset: [
			{
				name: 'Tarukaja',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Megido',
				level: 0
			},
			{
				name: 'Triple Down',
				level: 0
			},
			{
				name: 'Gun Boost',
				level: 0
			},
			{
				name: 'Technical High',
				level: 42
			},
			{
				name: 'Dekaja',
				level: 45
			},
			{
				name: 'Enduring Soul',
				level: 49
			},
			{
				name: 'Heat Riser',
				level: 52
			},
			{
				name: 'Tetraja',
				level: 55
			},
			{
				name: 'Deathbound',
				level: 58
			},
			{
				name: 'Megidola',
				level: 60
			},
			{
				name: 'One-shot Kill',
				level: 65
			},
			{
				name: 'Debilitate',
				level: 68
			},
			{
				name: 'Firm Stance',
				level: 72
			},
			{
				name: 'Agneyastra',
				level: 76
			},
			{
				name: 'Megidolaon',
				level: 80
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Zenkichi Hasegawa',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Valkyrie',
		aliases: [],
		affinities: {
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
			inherit: 'Phys'
		},
		arcana: 'Strength',
		race: 'Yoma',
		level: 40,
		hp: 222,
		mp: 148,
		stats: {
			st: 42,
			vi: 32,
			ma: 18,
			ag: 26,
			lu: 24
		},
		learnset: [
			{
				name: 'Critical Wave',
				level: 0
			},
			{
				name: 'Storm Dracostrike',
				level: 0
			},
			{
				name: 'Safeguard',
				level: 41
			},
			{
				name: 'Mazionga',
				level: 42
			},
			{
				name: 'Resist Elec',
				level: 43
			}
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
		game: 'smt5'
	},
	{
		name: 'Vanadis',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Faith',
		race: 'Persona',
		level: 75,
		hp: null,
		mp: null,
		stats: {
			st: 55,
			vi: 36,
			ma: 46,
			ag: 51,
			lu: 44
		},
		learnset: [
			{
				name: 'Apt Pupil',
				level: 0
			},
			{
				name: 'Vorpal Blade',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Sword Dance',
				level: 0
			},
			{
				name: 'Mahamabarion',
				level: 0
			},
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Light Amp',
				level: 0
			},
			{
				name: 'Ali Dance',
				level: 0
			},
			{
				name: 'Brave Step',
				level: 80
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Dark'
			],
			resist: [],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Sumire Yoshizawa',
		stage: 2,
		evoSkill: 'Evade Dark'
	},
	{
		name: 'Vasuki',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -5,
				Ice: 4,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 1,
				Almighty: 0,
				Ailment: 7,
				Recovery: 0,
				Support: -4
			},
			inherit: 'Ailment'
		},
		arcana: 'Star',
		race: 'Drake',
		level: 74,
		hp: 424,
		mp: 335,
		stats: {
			st: 43,
			vi: 43,
			ma: 53,
			ag: 47,
			lu: 63
		},
		learnset: [
			{
				name: 'Mabufubarion',
				level: 0
			},
			{
				name: 'Mamudobarion',
				level: 0
			},
			{
				name: 'Slumber Vortex',
				level: 0
			},
			{
				name: 'Toxic Spray',
				level: 0
			},
			{
				name: 'Poison Master',
				level: 75
			},
			{
				name: 'Bufubarion',
				level: 76
			},
			{
				name: 'Great Curse Siphon',
				level: 77
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Dark'
			],
			null: [],
			drain: [],
			repel: [
				'Ice'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Vetala',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Ailment'
		},
		arcana: 'Devil',
		race: 'Haunt',
		level: 19,
		hp: null,
		mp: null,
		stats: {
			st: 17,
			vi: 14,
			ma: 10,
			ag: 12,
			lu: 11
		},
		learnset: [
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Evil Touch',
				level: 0
			},
			{
				name: 'Life Drain',
				level: 20
			},
			{
				name: 'Foul Breath',
				level: 21
			},
			{
				name: 'Brain Shake',
				level: 22
			},
			{
				name: 'Ghastly Wail',
				level: 23
			},
			{
				name: 'Fear Boost',
				level: 24
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Fire'
			],
			resist: [
				'Wind',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Virtue',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Light'
		},
		arcana: 'Justice',
		race: 'Divine',
		level: 33,
		hp: null,
		mp: null,
		stats: {
			st: 22,
			vi: 21,
			ma: 29,
			ag: 19,
			lu: 15
		},
		learnset: [
			{
				name: 'Mahama',
				level: 0
			},
			{
				name: 'Garula',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 0
			},
			{
				name: 'Fatal End',
				level: 35
			},
			{
				name: 'Elec Wall',
				level: 37
			},
			{
				name: 'Hama Boost',
				level: 38
			},
			{
				name: 'Resist Dark',
				level: 39
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Ice',
				'Dark'
			],
			resist: [],
			null: [
				'Elec',
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Vishnu',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -5,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 4,
				Dark: 6,
				Almighty: 0,
				Ailment: 0,
				Recovery: 3,
				Support: 0
			},
			inherit: 'Almighty'
		},
		arcana: 'Fool',
		race: 'Deity',
		level: 87,
		hp: 452,
		mp: 523,
		stats: {
			st: 46,
			vi: 57,
			ma: 90,
			ag: 67,
			lu: 71
		},
		learnset: [
			{
				name: 'Mahamabarion',
				level: 0
			},
			{
				name: 'Mamudobarion',
				level: 0
			},
			{
				name: 'Mediarahan',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			},
			{
				name: 'High Dark Pleroma',
				level: 88
			},
			{
				name: 'Enduring Soul',
				level: 89
			},
			{
				name: 'Repel Dark',
				level: 90
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Fire'
			],
			resist: [],
			null: [
				'Phys',
				'Dark'
			],
			drain: [],
			repel: [
				'Light'
			]
		},
		game: 'smt5'
	},
	{
		name: 'Vohu Manah',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Almighty'
		},
		arcana: 'Councillor',
		race: 'Divine',
		level: 80,
		hp: null,
		mp: null,
		stats: {
			st: 46,
			vi: 45,
			ma: 59,
			ag: 56,
			lu: 41
		},
		learnset: [
			{
				name: 'Divine Judgement',
				level: 0
			},
			{
				name: 'Light Amp',
				level: 0
			},
			{
				name: 'Mahamabarion',
				level: 0
			},
			{
				name: 'Drain Light',
				level: 82
			},
			{
				name: 'Fortify Spirit',
				level: 83
			},
			{
				name: 'Invigorate 3',
				level: 84
			},
			{
				name: 'Salvation',
				level: 85
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Elec'
			],
			null: [
				'Dark'
			],
			drain: [
				'Light'
			],
			repel: []
		},
		game: 'p5'
	},
	{
		name: 'White Rider',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 5,
				Ice: 0,
				Elec: -5,
				Force: 0,
				Light: 7,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 3
			},
			inherit: 'Dark'
		},
		arcana: 'Chariot',
		race: 'Fiend',
		level: 43,
		hp: 239,
		mp: 195,
		stats: {
			st: 25,
			vi: 31,
			ma: 40,
			ag: 29,
			lu: 34
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'God\'s Bow',
				level: 0
			},
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'Maragion',
				level: 0
			},
			{
				name: 'Mana Aid',
				level: 44
			},
			{
				name: 'Phys Block',
				level: 45
			},
			{
				name: 'Dekaja',
				level: 46
			}
		],
		resistances: {
			ailments: {},
			weak: [
				'Elec'
			],
			resist: [
				'Light',
				'Dark'
			],
			null: [],
			drain: [],
			repel: [
				'Fire'
			]
		},
		game: 'smt5'
	},
	{
		name: 'William',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		stats: {
			st: 5,
			vi: 5,
			ma: 3,
			ag: 3,
			lu: 3
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Lunge',
				level: 5
			},
			{
				name: 'Tarukaja',
				level: 9
			},
			{
				name: 'Headbutt',
				level: 11
			},
			{
				name: 'Adverse Resolve',
				level: 14
			},
			{
				name: 'Rampage',
				level: 17
			},
			{
				name: 'Mazio',
				level: 21
			},
			{
				name: 'Memory Blow',
				level: 24
			},
			{
				name: 'Assault Dive',
				level: 26
			},
			{
				name: 'Zionga',
				level: 28
			},
			{
				name: 'Swift Strike',
				level: 32
			},
			{
				name: 'Shock Boost',
				level: 35
			},
			{
				name: 'Elec Break',
				level: 39
			},
			{
				name: 'Mazionga',
				level: 43
			},
			{
				name: 'Deathbound',
				level: 47
			},
			{
				name: 'Elec Boost',
				level: 49
			},
			{
				name: 'Megaton Raid',
				level: 53
			},
			{
				name: 'Ziodyne',
				level: 55
			},
			{
				name: 'Matarukaja',
				level: 58
			},
			{
				name: 'Charge',
				level: 63
			},
			{
				name: 'Maziodyne',
				level: 67
			},
			{
				name: 'Agneyastra',
				level: 71
			},
			{
				name: 'God\'s Hand',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
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
		game: 'p5',
		user: 'Ryuji Sakamoto',
		stage: 3,
		evoSkill: 'Fighting Spirit'
	},
	{
		name: 'Xiezhai',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Elec'
		},
		arcana: 'Temperance',
		race: 'Avatar',
		level: 16,
		hp: null,
		mp: null,
		stats: {
			st: 14,
			vi: 9,
			ma: 12,
			ag: 13,
			lu: 7
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Mazio',
				level: 0
			},
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Makajama',
				level: 17
			},
			{
				name: 'Seal Boost',
				level: 18
			},
			{
				name: 'Rampage',
				level: 19
			},
			{
				name: 'Elec Boost',
				level: 21
			}
		],
		resistances: {
			ailments: null,
			weak: [
				'Wind'
			],
			resist: [
				'Elec'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p4'
	},
	{
		name: 'Yaksini',
		aliases: [
			'Yakshini'
		],
		affinities: {
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
			inherit: 'Ice'
		},
		arcana: 'Empress',
		race: 'Femme',
		level: 30,
		hp: 172,
		mp: 117,
		stats: {
			st: 31,
			vi: 25,
			ma: 14,
			ag: 24,
			lu: 17
		},
		learnset: [
			{
				name: 'Counter',
				level: 0
			},
			{
				name: 'Venom Chaser',
				level: 0
			},
			{
				name: 'Pierce Armor',
				level: 31
			},
			{
				name: 'Resist Dark',
				level: 32
			},
			{
				name: 'Zanma',
				level: 33
			}
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
		game: 'smt5'
	},
	{
		name: 'Yamata-no-Orochi',
		aliases: [],
		affinities: {
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
			inherit: 'Ice'
		},
		arcana: 'Judgement',
		race: 'Snake',
		level: 72,
		hp: 468,
		mp: 255,
		stats: {
			st: 66,
			vi: 72,
			ma: 26,
			ag: 33,
			lu: 40
		},
		learnset: [
			{
				name: 'Dragon Eye',
				level: 0
			},
			{
				name: 'Fire Dracostrike',
				level: 0
			},
			{
				name: 'Titanomachia',
				level: 0
			},
			{
				name: 'Catastrophe',
				level: 73
			},
			{
				name: 'Great Life Spring',
				level: 74
			},
			{
				name: 'Phys Pleroma',
				level: 75
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Weak',
				Poison: 'Weak',
				Confuse: 'Weak'
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
		game: 'smt5'
	},
	{
		name: 'Yamato Sumeragi',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Fortune',
		race: 'Persona',
		level: 55,
		hp: null,
		mp: null,
		stats: {
			st: 32,
			vi: 32,
			ma: 38,
			ag: 40,
			lu: 31
		},
		learnset: [
			{
				name: 'Tempest Slash',
				level: 0
			},
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Garudyne',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Deathbound',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 56
			},
			{
				name: 'Blight',
				level: 58
			},
			{
				name: 'Mudo Boost',
				level: 60
			},
			{
				name: 'Hama Boost',
				level: 62
			},
			{
				name: 'Makarakarn',
				level: 64
			},
			{
				name: 'Mamudoon',
				level: 68
			},
			{
				name: 'Mahamaon',
				level: 70
			},
			{
				name: 'Vorpal Blade',
				level: 73
			},
			{
				name: 'Megidolaon',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: [
				'Light',
				'Dark'
			]
		},
		game: 'p4',
		user: 'Naoto Shirogane',
		stage: 3,
		evoSkill: 'Shield of Justice'
	},
	{
		name: 'Yamato-Takeru',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Fortune',
		race: 'Persona',
		level: 55,
		hp: null,
		mp: null,
		stats: {
			st: 32,
			vi: 32,
			ma: 38,
			ag: 40,
			lu: 31
		},
		learnset: [
			{
				name: 'Tempest Slash',
				level: 0
			},
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Garudyne',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Deathbound',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 56
			},
			{
				name: 'Blight',
				level: 58
			},
			{
				name: 'Mudo Boost',
				level: 60
			},
			{
				name: 'Hama Boost',
				level: 62
			},
			{
				name: 'Makarakarn',
				level: 64
			},
			{
				name: 'Mamudoon',
				level: 68
			},
			{
				name: 'Mahamaon',
				level: 70
			},
			{
				name: 'Vorpal Blade',
				level: 73
			},
			{
				name: 'Megidolaon',
				level: 75
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [
				'Fire'
			],
			null: [
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'p4',
		user: 'Naoto Shirogane',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Yatagarasu',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 2,
				Light: 4,
				Dark: -7,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 2
			},
			inherit: 'Elec'
		},
		arcana: 'Councillor',
		race: 'Avian',
		level: 54,
		hp: 258,
		mp: 296,
		stats: {
			st: 31,
			vi: 33,
			ma: 42,
			ag: 44,
			lu: 39
		},
		learnset: [
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Life Aid',
				level: 55
			},
			{
				name: 'Phys Block',
				level: 56
			},
			{
				name: 'Yabusame Shot',
				level: 57
			}
		],
		resistances: {
			ailments: {
				Charm: 'Weak'
			},
			weak: [
				'Dark'
			],
			resist: [
				'Force'
			],
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Yatsufusa',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Fire'
		},
		arcana: 'Hanged',
		race: 'Holy',
		level: 49,
		hp: null,
		mp: null,
		stats: {
			st: 32,
			vi: 27,
			ma: 33,
			ag: 36,
			lu: 26
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Masukukaja',
				level: 0
			},
			{
				name: 'Fire Boost',
				level: 0
			},
			{
				name: 'Heat Wave',
				level: 51
			},
			{
				name: 'Charge',
				level: 52
			},
			{
				name: 'Dodge Phys',
				level: 53
			},
			{
				name: 'Maragidyne',
				level: 54
			},
			{
				name: 'Concentrate',
				level: 55
			}
		],
		resistances: {
			ailments: null,
			weak: [],
			resist: [],
			null: [
				'Light'
			],
			drain: [
				'Fire'
			],
			repel: [
				'Wind'
			]
		},
		game: 'p4'
	},
	{
		name: 'Yomotsu-Shikome',
		aliases: [],
		affinities: {
			skillPotential: null,
			inherit: 'Ailment'
		},
		arcana: 'Fool',
		race: 'Femme',
		level: 2,
		hp: null,
		mp: null,
		stats: {
			st: 2,
			vi: 7,
			ma: 7,
			ag: 11,
			lu: 6
		},
		learnset: [
			{
				name: 'Poisma',
				level: 0
			},
			{
				name: 'Skewer',
				level: 0
			},
			{
				name: 'Evil Touch',
				level: 0
			},
			{
				name: 'Sukunda',
				level: 9
			},
			{
				name: 'Mudo',
				level: 10
			},
			{
				name: 'Ghastly Wail',
				level: 11
			}
		],
		resistances: {
			ailments: null,
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
		game: 'p4'
	},
	{
		name: 'Yoshitsune',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 5,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -4,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Phys'
		},
		arcana: 'Tower',
		race: 'Wargod',
		level: 45,
		hp: 253,
		mp: 200,
		stats: {
			st: 47,
			vi: 25,
			ma: 22,
			ag: 46,
			lu: 31
		},
		learnset: [
			{
				name: 'Hassou Tobi',
				level: 0
			},
			{
				name: 'Pierce Armor',
				level: 0
			},
			{
				name: 'Puncture Punch',
				level: 46
			},
			{
				name: 'Retaliate',
				level: 47
			},
			{
				name: 'Restore',
				level: 48
			}
		],
		resistances: {
			ailments: {
				Mirage: 'Null'
			},
			weak: [
				'Dark'
			],
			resist: [
				'Phys'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Yurlungur',
		aliases: [],
		affinities: {
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
			inherit: 'Elec'
		},
		arcana: 'Sun',
		race: 'Snake',
		level: 50,
		hp: 255,
		mp: 212,
		stats: {
			st: 34,
			vi: 35,
			ma: 51,
			ag: 23,
			lu: 27
		},
		learnset: [
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'Resist Ice',
				level: 51
			},
			{
				name: 'Ice Block',
				level: 52
			},
			{
				name: 'Great Mana Spring',
				level: 53
			}
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
		game: 'smt5'
	},
	{
		name: 'Zaou-Gongen',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 5,
				Fire: 4,
				Ice: 0,
				Elec: -7,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 3,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Fire'
		},
		arcana: 'Strength',
		race: 'Fury',
		level: 72,
		hp: 444,
		mp: 325,
		stats: {
			st: 61,
			vi: 50,
			ma: 57,
			ag: 35,
			lu: 37
		},
		learnset: [
			{
				name: 'Murderous Glee',
				level: 0
			},
			{
				name: 'Pandemonic Crush',
				level: 0
			},
			{
				name: 'Violent Rage',
				level: 0
			},
			{
				name: 'Maragidyne',
				level: 73
			},
			{
				name: 'Null Fire',
				level: 74
			},
			{
				name: 'Brave Blade',
				level: 75
			}
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Confuse: 'Null',
				Charm: 'Null'
			},
			weak: [
				'Elec'
			],
			resist: [
				'Fire',
				'Light',
				'Dark'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Zeus',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 0,
				Ice: 0,
				Elec: 6,
				Force: -6,
				Light: 0,
				Dark: 0,
				Almighty: 2,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 86,
		hp: 520,
		mp: 448,
		stats: {
			st: 73,
			vi: 56,
			ma: 62,
			ag: 82,
			lu: 54
		},
		learnset: [
			{
				name: 'Impaler\'s Animus',
				level: 0
			},
			{
				name: 'Keraunos',
				level: 0
			},
			{
				name: 'Madness Glint',
				level: 0
			},
			{
				name: 'Panta Spane',
				level: 0
			},
			{
				name: 'Maziobarion',
				level: 87
			},
			{
				name: 'High Elec Pleroma',
				level: 88
			},
			{
				name: 'Drain Elec',
				level: 89
			}
		],
		resistances: {
			ailments: {
				Seal: 'Resist'
			},
			weak: [
				'Force'
			],
			resist: [],
			null: [
				'Elec',
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		game: 'smt5'
	},
	{
		name: 'Zhen',
		aliases: [],
		affinities: {
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
			inherit: null
		},
		arcana: null,
		race: 'Raptor',
		level: 14,
		hp: 73,
		mp: 97,
		stats: {
			st: 15,
			vi: 11,
			ma: 9,
			ag: 14,
			lu: 16
		},
		learnset: [
			{
				name: 'Needle Spray',
				level: 0
			},
			{
				name: 'Toxic Sting',
				level: 0
			},
			{
				name: 'Zio',
				level: 16
			},
			{
				name: 'Madness Needle',
				level: 17
			}
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
		game: 'smt5'
	},
	{
		name: 'Zorro',
		aliases: [],
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
		resistances: {
			ailments: null,
			weak: [
				'Elec'
			],
			resist: [
				'Wind'
			],
			null: [],
			drain: [],
			repel: []
		},
		game: 'p5',
		user: 'Morgana',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Zouchouten',
		aliases: [],
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -4,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: 'Elec'
		},
		arcana: 'Strength',
		race: 'Kishin',
		level: 36,
		hp: 213,
		mp: 150,
		stats: {
			st: 29,
			vi: 27,
			ma: 24,
			ag: 22,
			lu: 26
		},
		learnset: [
			{
				name: 'Charge',
				level: 0
			},
			{
				name: 'Elec Block',
				level: 0
			},
			{
				name: 'Fatal Sword',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 0
			},
			{
				name: 'Dream Fist',
				level: 37
			},
			{
				name: 'Marakukaja',
				level: 38
			},
			{
				name: 'Puncture Punch',
				level: 39
			}
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
		game: 'smt5'
	}
];

export default demonData;