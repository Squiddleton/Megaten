import type { DemonData, PersonaData } from './dataTypes';

const demons: Readonly<(DemonData | PersonaData)>[] = [
	{
		name: 'Abaddon',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Judgement',
		race: 'Tyrant',
		level: 72,
		hp: 479,
		mp: 300,
		st: 52,
		ma: 42,
		vi: 60,
		ag: 35,
		lu: 47,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Abdiel',
		aliases: [],
		inherit: 'Light',
		arcana: null,
		race: 'Herald',
		level: 80,
		hp: 535,
		mp: 346,
		st: 70,
		ma: 65,
		vi: 50,
		ag: 55,
		lu: 31,
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
		],
		game: 'smt5'
	},
	{
		name: 'Abdiel -Fallen-',
		aliases: [
			'Abdiel'
		],
		inherit: 'Dark',
		arcana: null,
		race: 'Fallen',
		level: 89,
		hp: 596,
		mp: 451,
		st: 70,
		ma: 85,
		vi: 65,
		ag: 83,
		lu: 51,
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
		],
		game: 'smt5'
	},
	{
		name: 'Adramelech',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Hanged',
		race: 'Fallen',
		level: 71,
		hp: 402,
		mp: 310,
		st: 57,
		ma: 62,
		vi: 39,
		ag: 50,
		lu: 32,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Aeros',
		aliases: [],
		inherit: 'Force',
		arcana: null,
		race: 'Element',
		level: 12,
		hp: 62,
		mp: 99,
		st: 9,
		ma: 17,
		vi: 9,
		ag: 11,
		lu: 12,
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
		weak: [
			'Elec'
		],
		resist: [
			'Force'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Agathion',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Chariot',
		race: 'Yoma',
		level: 10,
		hp: 55,
		mp: 93,
		st: 7,
		ma: 14,
		vi: 9,
		ag: 11,
		lu: 11,
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
		weak: [
			'Ice',
			'Dark'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Agnes',
		aliases: [],
		inherit: 'Nuke',
		arcana: 'Priestess',
		race: 'Persona',
		level: 21,
		hp: null,
		mp: null,
		st: 15,
		ma: 15,
		vi: 14,
		ag: 15,
		lu: 11,
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
		repel: [],
		game: 'p5',
		user: 'Makoto Niijima',
		stage: 3,
		evoSkill: 'Debilitate'
	},
	{
		name: 'Aitvaras',
		aliases: [],
		inherit: 'Fire',
		arcana: null,
		race: 'Drake',
		level: 17,
		hp: 84,
		mp: 112,
		st: 12,
		ma: 16,
		vi: 12,
		ag: 16,
		lu: 17,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Al Azif',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Hermit',
		race: 'Persona',
		level: 31,
		hp: null,
		mp: null,
		st: 17,
		ma: 23,
		vi: 20,
		ag: 21,
		lu: 35,
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
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Futaba Sakura',
		stage: 3,
		evoSkill: 'Ultimate Support'
	},
	{
		name: 'Alice',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Death',
		race: 'Fiend',
		level: 40,
		hp: 189,
		mp: 255,
		st: 7,
		ma: 46,
		vi: 25,
		ag: 30,
		lu: 34,
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
		weak: [
			'Light'
		],
		resist: [],
		null: [],
		drain: [
			'Dark'
		],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Alilat',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Empress',
		race: 'Lady',
		level: 81,
		hp: 410,
		mp: 418,
		st: 24,
		ma: 68,
		vi: 75,
		ag: 50,
		lu: 61,
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
		weak: [],
		resist: [
			'Light',
			'Dark'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Amanozako',
		aliases: [],
		inherit: 'Elec',
		arcana: null,
		race: 'Genma',
		level: 76,
		hp: 407,
		mp: 450,
		st: 26,
		ma: 70,
		vi: 40,
		ag: 63,
		lu: 59,
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
		],
		game: 'smt5'
	},
	{
		name: 'Amaterasu',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Priestess',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		st: 8,
		ma: 15,
		vi: 11,
		ag: 8,
		lu: 10,
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
		repel: [],
		game: 'p4',
		user: 'Yukiko Amagi',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Ame-no-Uzume',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Lovers',
		race: 'Megami',
		level: 22,
		hp: 99,
		mp: 139,
		st: 11,
		ma: 26,
		vi: 14,
		ag: 19,
		lu: 20,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Amon',
		aliases: [],
		inherit: 'Fire',
		arcana: null,
		race: 'Tyrant',
		level: 82,
		hp: 619,
		mp: 329,
		st: 69,
		ma: 64,
		vi: 74,
		ag: 32,
		lu: 46,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Anahita',
		aliases: [],
		inherit: 'Ice',
		arcana: null,
		race: 'Megami',
		level: 29,
		hp: 141,
		mp: 199,
		st: 14,
		ma: 32,
		vi: 24,
		ag: 22,
		lu: 22,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Ananta',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Councillor',
		race: 'Dragon',
		level: 59,
		hp: 384,
		mp: 206,
		st: 55,
		ma: 24,
		vi: 56,
		ag: 29,
		lu: 34,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Anat',
		aliases: [],
		inherit: 'Nuke',
		arcana: 'Priestess',
		race: 'Persona',
		level: 21,
		hp: null,
		mp: null,
		st: 15,
		ma: 15,
		vi: 14,
		ag: 15,
		lu: 11,
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
		repel: [],
		game: 'p5',
		user: 'Makoto Niijima',
		stage: 2,
		evoSkill: 'Evade Psy'
	},
	{
		name: 'Andras',
		aliases: [],
		inherit: 'Force',
		arcana: 'Devil',
		race: 'Fallen',
		level: 18,
		hp: 92,
		mp: 108,
		st: 13,
		ma: 12,
		vi: 13,
		ag: 20,
		lu: 19,
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
		weak: [
			'Elec',
			'Light'
		],
		resist: [],
		null: [
			'Ice'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Angel',
		aliases: [],
		inherit: 'Light',
		arcana: 'Justice',
		race: 'Divine',
		level: 10,
		hp: 59,
		mp: 103,
		st: 6,
		ma: 16,
		vi: 8,
		ag: 12,
		lu: 12,
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
		weak: [
			'Force',
			'Dark'
		],
		resist: [],
		null: [
			'Light'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Anubis',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Judgement',
		race: 'Avatar',
		level: 41,
		hp: 184,
		mp: 240,
		st: 15,
		ma: 45,
		vi: 22,
		ag: 31,
		lu: 34,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Anzu',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Hierophant',
		race: 'Raptor',
		level: 48,
		hp: 272,
		mp: 176,
		st: 39,
		ma: 24,
		vi: 32,
		ag: 45,
		lu: 26,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Apsaras',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Priestess',
		race: 'Yoma',
		level: 16,
		hp: 76,
		mp: 118,
		st: 9,
		ma: 19,
		vi: 11,
		ag: 17,
		lu: 15,
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
		weak: [
			'Fire'
		],
		resist: [
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Aquans',
		aliases: [],
		inherit: 'Ice',
		arcana: null,
		race: 'Element',
		level: 15,
		hp: 72,
		mp: 109,
		st: 8,
		ma: 20,
		vi: 11,
		ag: 13,
		lu: 15,
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
		weak: [
			'Fire'
		],
		resist: [
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Arahabaki',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Hermit',
		race: 'Kunitsu',
		level: 62,
		hp: 290,
		mp: 317,
		st: 27,
		ma: 58,
		vi: 37,
		ag: 34,
		lu: 52,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Ara Mitama',
		aliases: [],
		inherit: 'Nuke',
		arcana: 'Chariot',
		race: 'Mitama',
		level: 30,
		hp: null,
		mp: null,
		st: 20,
		ma: 18,
		vi: 20,
		ag: 20,
		lu: 19,
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
				name: 'Taunt -Persona-',
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
		weak: [
			'Ice'
		],
		resist: [
			'Phys'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5'
	},
	{
		name: 'Archangel',
		aliases: [],
		inherit: 'Light',
		arcana: 'Justice',
		race: 'Divine',
		level: 18,
		hp: 102,
		mp: 114,
		st: 15,
		ma: 16,
		vi: 14,
		ag: 18,
		lu: 16,
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
		weak: [
			'Elec',
			'Dark'
		],
		resist: [],
		null: [
			'Light'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Ardha',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Temperance',
		race: 'Deity',
		level: 84,
		hp: null,
		mp: null,
		st: 54,
		ma: 56,
		vi: 55,
		ag: 54,
		lu: 40,
		learnset: [
			{
				name: 'God"s Hand',
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
		weak: [],
		resist: [
			'Phys'
		],
		null: [
			'Ice',
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'p5'
	},
	{
		name: 'Ares',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Chariot',
		race: 'Fury',
		level: 25,
		hp: null,
		mp: null,
		st: 18,
		ma: 15,
		vi: 20,
		ag: 15,
		lu: 14,
		learnset: [
			{
				name: 'Gale Slash',
				level: 0
			},
			{
				name: 'Counter -Persona-',
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
		repel: [],
		game: 'p4'
	},
	{
		name: 'Ariadne',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fortune',
		race: 'Persona',
		level: 30,
		hp: null,
		mp: null,
		st: 23,
		ma: 19,
		vi: 20,
		ag: 17,
		lu: 18,
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
		repel: [],
		game: 'p5',
		user: 'Labrys',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Ariadne Picaro',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fortune',
		race: 'Picaro',
		level: 42,
		hp: null,
		mp: null,
		st: 36,
		ma: 23,
		vi: 29,
		ag: 24,
		lu: 21,
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
		repel: [],
		game: 'p5'
	},
	{
		name: 'Arioch',
		aliases: [],
		inherit: 'Ice',
		arcana: null,
		race: 'Tyrant',
		level: 75,
		hp: 474,
		mp: 324,
		st: 69,
		ma: 47,
		vi: 61,
		ag: 35,
		lu: 42,
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
		],
		game: 'smt5'
	},
	{
		name: 'Arsène',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Fool',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 2,
		ma: 2,
		vi: 2,
		ag: 3,
		lu: 1,
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
		weak: [
			'Ice',
			'Light'
		],
		resist: [
			'Dark'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'P5 Protagonist',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Artemis',
		aliases: [],
		inherit: 'Phys',
		arcana: null,
		race: 'Megami',
		level: 37,
		hp: 211,
		mp: 189,
		st: 36,
		ma: 31,
		vi: 24,
		ag: 28,
		lu: 23,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Artemisia',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Empress',
		race: 'Persona',
		level: 18,
		hp: null,
		mp: null,
		st: 11,
		ma: 16,
		vi: 11,
		ag: 12,
		lu: 11,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Ice'
		],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Mitsuru Kirijo',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Astarte',
		aliases: [],
		inherit: 'Psy',
		arcana: 'Empress',
		race: 'Persona',
		level: 36,
		hp: null,
		mp: null,
		st: 27,
		ma: 25,
		vi: 22,
		ag: 22,
		lu: 21,
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
		repel: [],
		game: 'p5',
		user: 'Haru Okumura',
		stage: 2,
		evoSkill: 'Evade Nuke'
	},
	{
		name: 'Asterius',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fortune',
		race: 'Persona',
		level: 56,
		hp: null,
		mp: null,
		st: 43,
		ma: 43,
		vi: 32,
		ag: 32,
		lu: 25,
		learnset: [
			{
				name: 'Titanomachia -Persona-',
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
		repel: [],
		game: 'p5',
		user: 'Shadow Labrys',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Asterius Picaro',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fortune',
		race: 'Picaro',
		level: 62,
		hp: null,
		mp: null,
		st: 46,
		ma: 46,
		vi: 36,
		ag: 36,
		lu: 29,
		learnset: [
			{
				name: 'Titanomachia -Persona-',
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
		repel: [],
		game: 'p5'
	},
	{
		name: 'Asura',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Sun',
		race: 'Fury',
		level: 84,
		hp: 543,
		mp: 382,
		st: 80,
		ma: 53,
		vi: 73,
		ag: 52,
		lu: 53,
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
		],
		game: 'smt5'
	},
	{
		name: 'Atavaka',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Faith',
		race: 'Deity',
		level: 54,
		hp: 328,
		mp: 201,
		st: 48,
		ma: 41,
		vi: 42,
		ag: 26,
		lu: 25,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [
			'Light',
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Athena',
		aliases: [
			'Pallas Athena'
		],
		inherit: 'Almighty',
		arcana: 'Chariot',
		race: 'Persona',
		level: 46,
		hp: null,
		mp: null,
		st: 33,
		ma: 27,
		vi: 29,
		ag: 29,
		lu: 27,
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
		repel: [],
		game: 'p5',
		user: 'Aigis',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Athena Picaro',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Chariot',
		race: 'Picaro',
		level: 50,
		hp: null,
		mp: null,
		st: 35,
		ma: 30,
		vi: 31,
		ag: 32,
		lu: 29,
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
		repel: [],
		game: 'p5'
	},
	{
		name: 'Atropos',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Fortune',
		race: 'Femme',
		level: 64,
		hp: 312,
		mp: 328,
		st: 28,
		ma: 59,
		vi: 44,
		ag: 41,
		lu: 42,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Attis',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Hanged',
		race: 'Kishin',
		level: 27,
		hp: 149,
		mp: 129,
		st: 28,
		ma: 24,
		vi: 18,
		ag: 21,
		lu: 15,
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
		weak: [
			'Dark'
		],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Azumi',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Hermit',
		race: 'Brute',
		level: 11,
		hp: 68,
		mp: 77,
		st: 10,
		ma: 12,
		vi: 10,
		ag: 13,
		lu: 12,
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
		weak: [
			'Elec'
		],
		resist: [
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Baal',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Emperor',
		race: 'Deity',
		level: 93,
		hp: 578,
		mp: 476,
		st: 74,
		ma: 98,
		vi: 76,
		ag: 65,
		lu: 67,
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
		],
		game: 'smt5'
	},
	{
		name: 'Baphomet',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Devil',
		race: 'Vile',
		level: 33,
		hp: 142,
		mp: 180,
		st: 16,
		ma: 34,
		vi: 19,
		ag: 26,
		lu: 26,
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
		weak: [
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Barong',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Emperor',
		race: 'Avatar',
		level: 60,
		hp: 346,
		mp: 233,
		st: 46,
		ma: 33,
		vi: 46,
		ag: 39,
		lu: 40,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Basilisk',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Sun',
		race: 'Drake',
		level: 31,
		hp: 190,
		mp: 114,
		st: 26,
		ma: 15,
		vi: 31,
		ag: 21,
		lu: 24,
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
		weak: [
			'Elec'
		],
		resist: [
			'Fire',
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Beelzebub',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Devil',
		race: 'Tyrant',
		level: 95,
		hp: 570,
		mp: 517,
		st: 65,
		ma: 76,
		vi: 75,
		ag: 92,
		lu: 92,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Belial',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Devil',
		race: 'Tyrant',
		level: 92,
		hp: 650,
		mp: 391,
		st: 96,
		ma: 75,
		vi: 90,
		ag: 61,
		lu: 50,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Belphegor',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Tower',
		race: 'Tyrant',
		level: 44,
		hp: 225,
		mp: 190,
		st: 31,
		ma: 34,
		vi: 39,
		ag: 20,
		lu: 28,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Berith',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Hierophant',
		race: 'Fallen',
		level: 24,
		hp: 144,
		mp: 101,
		st: 26,
		ma: 13,
		vi: 24,
		ag: 18,
		lu: 14,
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
		weak: [
			'Ice'
		],
		resist: [
			'Fire',
			'Dark'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Bicorn',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Hermit',
		race: 'Wilder',
		level: 14,
		hp: 88,
		mp: 76,
		st: 18,
		ma: 8,
		vi: 14,
		ag: 13,
		lu: 11,
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
		weak: [
			'Elec',
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Bishamonten',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Hierophant',
		race: 'Kishin',
		level: 58,
		hp: 344,
		mp: 262,
		st: 49,
		ma: 45,
		vi: 41,
		ag: 28,
		lu: 33,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [
			'Fire',
			'Light'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Black Frost',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Fool',
		race: 'Night',
		level: 44,
		hp: 255,
		mp: 204,
		st: 38,
		ma: 33,
		vi: 37,
		ag: 26,
		lu: 28,
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
		],
		game: 'smt5'
	},
	{
		name: 'Black Ooze',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Moon',
		race: 'Foul',
		level: 33,
		hp: 217,
		mp: 119,
		st: 23,
		ma: 21,
		vi: 35,
		ag: 15,
		lu: 23,
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
		weak: [
			'Fire',
			'Light'
		],
		resist: [
			'Phys'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Black Rider',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Tower',
		race: 'Fiend',
		level: 52,
		hp: 273,
		mp: 256,
		st: 30,
		ma: 48,
		vi: 37,
		ag: 49,
		lu: 35,
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
		],
		game: 'smt5'
	},
	{
		name: 'Bugs',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Fool',
		race: 'Wilder',
		level: 24,
		hp: 126,
		mp: 121,
		st: 23,
		ma: 19,
		vi: 19,
		ag: 14,
		lu: 20,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Byakhee',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Moon',
		race: null,
		level: 70,
		hp: null,
		mp: null,
		st: 42,
		ma: 49,
		vi: 43,
		ag: 51,
		lu: 52,
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Stagnant Air -Persona-',
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
		repel: [],
		game: 'p5'
	},
	{
		name: 'Byakko',
		aliases: [
			'Baihu'
		],
		inherit: 'Elec',
		arcana: 'Temperance',
		race: 'Holy',
		level: 43,
		hp: 199,
		mp: 222,
		st: 30,
		ma: 23,
		vi: 25,
		ag: 42,
		lu: 35,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Caesar',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Emperor',
		race: 'Persona',
		level: 12,
		hp: null,
		mp: null,
		st: 9,
		ma: 10,
		vi: 8,
		ag: 9,
		lu: 7,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Akihiko Sanada',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Cait Sith',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Magician',
		race: 'Beast',
		level: 7,
		hp: 54,
		mp: 70,
		st: 10,
		ma: 10,
		vi: 7,
		ag: 7,
		lu: 5,
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
		weak: [
			'Force'
		],
		resist: [
			'Elec'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Camael',
		aliases: [],
		inherit: 'Phys',
		arcana: null,
		race: 'Herald',
		level: 69,
		hp: 407,
		mp: 286,
		st: 50,
		ma: 45,
		vi: 58,
		ag: 39,
		lu: 35,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Captain Kidd',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		st: 5,
		ma: 3,
		vi: 5,
		ag: 3,
		lu: 3,
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
				name: 'God"s Hand',
				level: 75
			}
		],
		weak: [
			'Wind'
		],
		resist: [
			'Elec'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Ryuji Sakamoto',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Carmen',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Lovers',
		race: 'Persona',
		level: 5,
		hp: null,
		mp: null,
		st: 3,
		ma: 6,
		vi: 4,
		ag: 4,
		lu: 5,
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
		weak: [
			'Ice'
		],
		resist: [
			'Fire'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Ann Takamaki',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Castor',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Hierophant',
		race: 'Persona',
		level: 37,
		hp: null,
		mp: null,
		st: 32,
		ma: 20,
		vi: 27,
		ag: 22,
		lu: 17,
		learnset: [
			{
				name: 'Regenerate 1',
				level: 0
			},
			{
				name: 'Counter -Persona-',
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
				name: 'God"s Hand',
				level: 77
			}
		],
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Shinjiro Aragaki',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Célestine',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Lovers',
		race: 'Persona',
		level: 5,
		hp: null,
		mp: null,
		st: 3,
		ma: 6,
		vi: 4,
		ag: 4,
		lu: 5,
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
		repel: [],
		game: 'p5',
		user: 'Ann Takamaki',
		stage: 3,
		evoSkill: 'High Energy'
	},
	{
		name: 'Cendrillon',
		aliases: [],
		inherit: 'Light',
		arcana: 'Faith',
		race: 'Persona',
		level: 75,
		hp: null,
		mp: null,
		st: 55,
		ma: 46,
		vi: 36,
		ag: 51,
		lu: 44,
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
		weak: [
			'Dark'
		],
		resist: [],
		null: [
			'Light'
		],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Sumire Yoshizawa',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Cerberus',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Chariot',
		race: 'Beast',
		level: 64,
		hp: 450,
		mp: 223,
		st: 53,
		ma: 28,
		vi: 59,
		ag: 43,
		lu: 30,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [],
		drain: [],
		repel: [
			'Fire'
		],
		game: 'smt5'
	},
	{
		name: 'Cerberus -P3-',
		aliases: [
			'Cerberus'
		],
		inherit: 'Dark',
		arcana: 'Strength',
		race: 'Persona',
		level: 34,
		hp: 450,
		mp: 223,
		st: 53,
		ma: 28,
		vi: 59,
		ag: 43,
		lu: 30,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [],
		drain: [],
		repel: [
			'Fire'
		],
		game: 'p3',
		user: 'Koromaru',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Chernobog',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Death',
		race: 'Fury',
		level: 52,
		hp: 248,
		mp: 251,
		st: 43,
		ma: 45,
		vi: 27,
		ag: 29,
		lu: 35,
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
		weak: [
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Chimera',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Strength',
		race: 'Holy',
		level: 55,
		hp: 320,
		mp: 216,
		st: 47,
		ma: 41,
		vi: 37,
		ag: 34,
		lu: 27,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Chi You',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Chariot',
		race: 'Tyrant',
		level: 87,
		hp: 577,
		mp: 378,
		st: 81,
		ma: 71,
		vi: 73,
		ag: 45,
		lu: 53,
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
		],
		game: 'smt5'
	},
	{
		name: 'Choronzon',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Magician',
		race: 'Haunt',
		level: 28,
		hp: null,
		mp: null,
		st: 16,
		ma: 19,
		vi: 19,
		ag: 18,
		lu: 19,
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
		repel: [],
		game: 'p5'
	},
	{
		name: 'Cironnup',
		aliases: [],
		inherit: 'Fire',
		arcana: null,
		race: 'Holy',
		level: 27,
		hp: 124,
		mp: 185,
		st: 16,
		ma: 25,
		vi: 18,
		ag: 25,
		lu: 24,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Cleopatra',
		aliases: [],
		inherit: 'Light',
		arcana: null,
		race: 'Femme',
		level: 61,
		hp: 404,
		mp: 412,
		st: 26,
		ma: 69,
		vi: 42,
		ag: 44,
		lu: 51,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Clotho',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Fortune',
		race: 'Femme',
		level: 52,
		hp: 278,
		mp: 265,
		st: 20,
		ma: 33,
		vi: 42,
		ag: 51,
		lu: 30,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Cu Chulainn',
		aliases: [],
		inherit: 'Force',
		arcana: 'Faith',
		race: 'Genma',
		level: 52,
		hp: 293,
		mp: 201,
		st: 41,
		ma: 33,
		vi: 37,
		ag: 40,
		lu: 25,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Cybele',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Priestess',
		race: 'Lady',
		level: 56,
		hp: 298,
		mp: 240,
		st: 49,
		ma: 44,
		vi: 29,
		ag: 22,
		lu: 48,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Daemon',
		aliases: [],
		inherit: 'Dark',
		arcana: null,
		race: 'Brute',
		level: 7,
		hp: 59,
		mp: 73,
		st: 11,
		ma: 10,
		vi: 6,
		ag: 9,
		lu: 7,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Daisoujou',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Hierophant',
		race: 'Fiend',
		level: 30,
		hp: 144,
		mp: 183,
		st: 15,
		ma: 36,
		vi: 21,
		ag: 19,
		lu: 30,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Light',
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Dakini',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Empress',
		race: 'Femme',
		level: 46,
		hp: 226,
		mp: 169,
		st: 44,
		ma: 20,
		vi: 31,
		ag: 32,
		lu: 33,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Danu',
		aliases: [],
		inherit: 'Recovery',
		arcana: null,
		race: 'Lady',
		level: 93,
		hp: 496,
		mp: 564,
		st: 42,
		ma: 103,
		vi: 59,
		ag: 65,
		lu: 110,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Decarabia',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Councillor',
		race: 'Fallen',
		level: 55,
		hp: 276,
		mp: 269,
		st: 31,
		ma: 48,
		vi: 33,
		ag: 33,
		lu: 41,
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
		weak: [
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Demeter',
		aliases: [],
		inherit: 'Recovery',
		arcana: null,
		race: 'Megami',
		level: 76,
		hp: 377,
		mp: 450,
		st: 27,
		ma: 69,
		vi: 40,
		ag: 53,
		lu: 65,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Light',
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Diego',
		aliases: [],
		inherit: 'Wind',
		arcana: 'Magician',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 2,
		ma: 3,
		vi: 1,
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
		user: 'Morgana',
		stage: 3,
		evoSkill: 'Miracle Rush'
	},
	{
		name: 'Dionysus',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Councillor',
		race: 'Fury',
		level: 44,
		hp: 225,
		mp: 182,
		st: 33,
		ma: 31,
		vi: 30,
		ag: 32,
		lu: 30,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Dis',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Magician',
		race: 'Yoma',
		level: 39,
		hp: null,
		mp: null,
		st: 25,
		ma: 31,
		vi: 24,
		ag: 26,
		lu: 21,
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
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [
			'Fire'
		],
		game: 'p4'
	},
	{
		name: 'Dominion',
		aliases: [],
		inherit: 'Light',
		arcana: 'Justice',
		race: 'Divine',
		level: 50,
		hp: 223,
		mp: 253,
		st: 23,
		ma: 48,
		vi: 28,
		ag: 35,
		lu: 40,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Eligor',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Emperor',
		race: 'Fallen',
		level: 37,
		hp: 214,
		mp: 157,
		st: 38,
		ma: 19,
		vi: 32,
		ag: 24,
		lu: 20,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Ella',
		aliases: [],
		inherit: 'Light',
		arcana: 'Faith',
		race: 'Persona',
		level: 75,
		hp: null,
		mp: null,
		st: 55,
		ma: 46,
		vi: 36,
		ag: 51,
		lu: 44,
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
		repel: [],
		game: 'p5',
		user: 'Sumire Yoshizawa',
		stage: 3,
		evoSkill: 'Masquerade'
	},
	{
		name: 'Erthys',
		aliases: [],
		inherit: 'Elec',
		arcana: null,
		race: 'Element',
		level: 9,
		hp: 73,
		mp: 62,
		st: 8,
		ma: 11,
		vi: 12,
		ag: 9,
		lu: 9,
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
		weak: [
			'Force'
		],
		resist: [
			'Elec'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Fafnir',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Hermit',
		race: 'Drake',
		level: 60,
		hp: 370,
		mp: 220,
		st: 56,
		ma: 23,
		vi: 50,
		ag: 29,
		lu: 41,
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
		weak: [
			'Ice',
			'Elec'
		],
		resist: [
			'Phys'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Feng Huang',
		aliases: [
			'Phoenix'
		],
		inherit: 'Fire',
		arcana: 'Faith',
		race: 'Avian',
		level: 22,
		hp: 128,
		mp: 116,
		st: 16,
		ma: 20,
		vi: 16,
		ag: 20,
		lu: 17,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Fionn mac Cumhaill',
		aliases: [],
		inherit: 'Phys',
		arcana: null,
		race: 'Genma',
		level: 71,
		hp: 437,
		mp: 325,
		st: 58,
		ma: 52,
		vi: 47,
		ag: 52,
		lu: 37,
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
		weak: [
			'Elec'
		],
		resist: [],
		null: [
			'Fire',
			'Light'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Flaemis',
		aliases: [],
		inherit: 'Fire',
		arcana: null,
		race: 'Element',
		level: 18,
		hp: 83,
		mp: 119,
		st: 9,
		ma: 22,
		vi: 12,
		ag: 15,
		lu: 17,
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
		weak: [
			'Ice'
		],
		resist: [
			'Fire'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Flauros',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Devil',
		race: 'Fallen',
		level: 50,
		hp: 285,
		mp: 182,
		st: 50,
		ma: 30,
		vi: 36,
		ag: 36,
		lu: 20,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Forneus',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Magician',
		race: 'Fallen',
		level: 31,
		hp: 141,
		mp: 170,
		st: 19,
		ma: 26,
		vi: 20,
		ag: 24,
		lu: 25,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Fortuna',
		aliases: [],
		inherit: 'Force',
		arcana: 'Fortune',
		race: 'Megami',
		level: 15,
		hp: 86,
		mp: 114,
		st: 8,
		ma: 21,
		vi: 10,
		ag: 14,
		lu: 18,
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
		weak: [
			'Elec',
			'Dark'
		],
		resist: [],
		null: [
			'Force'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Futsunushi',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Magician',
		race: 'Wargod',
		level: 69,
		hp: 424,
		mp: 291,
		st: 63,
		ma: 32,
		vi: 46,
		ag: 48,
		lu: 39,
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
		weak: [
			'Dark'
		],
		resist: [],
		null: [
			'Light'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Fuu-Ki',
		aliases: [],
		inherit: 'Force',
		arcana: 'Star',
		race: 'Brute',
		level: 63,
		hp: 346,
		mp: 282,
		st: 43,
		ma: 39,
		vi: 37,
		ag: 51,
		lu: 40,
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
		weak: [
			'Elec'
		],
		resist: [],
		null: [
			'Force'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Gabriel',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Temperance',
		race: 'Herald',
		level: 86,
		hp: 534,
		mp: 437,
		st: 56,
		ma: 73,
		vi: 65,
		ag: 64,
		lu: 67,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Ganesha',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Sun',
		race: 'Wargod',
		level: 57,
		hp: 364,
		mp: 217,
		st: 50,
		ma: 31,
		vi: 54,
		ag: 23,
		lu: 35,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Ganga',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Priestess',
		race: 'Dragon',
		level: 29,
		hp: null,
		mp: null,
		st: 16,
		ma: 22,
		vi: 16,
		ag: 19,
		lu: 21,
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
		weak: [
			'Fire',
			'Dark'
		],
		resist: [],
		null: [],
		drain: [
			'Ice'
		],
		repel: [],
		game: 'p4'
	},
	{
		name: 'Garuda',
		aliases: [],
		inherit: 'Force',
		arcana: 'Star',
		race: 'Avian',
		level: 64,
		hp: 319,
		mp: 302,
		st: 46,
		ma: 32,
		vi: 33,
		ag: 56,
		lu: 51,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Genbu',
		aliases: [
			'Xuanwu'
		],
		inherit: 'Ice',
		arcana: 'Temperance',
		race: 'Dragon',
		level: 23,
		hp: 153,
		mp: 88,
		st: 23,
		ma: 15,
		vi: 28,
		ag: 8,
		lu: 16,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Ice'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Girimehkala',
		aliases: [
			'Girimekhala'
		],
		inherit: 'Phys',
		arcana: 'Moon',
		race: 'Vile',
		level: 66,
		hp: 381,
		mp: 245,
		st: 61,
		ma: 46,
		vi: 40,
		ag: 35,
		lu: 38,
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
		],
		game: 'smt5'
	},
	{
		name: 'Goemon',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Emperor',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		st: 13,
		ma: 10,
		vi: 11,
		ag: 10,
		lu: 8,
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
				name: 'Counter -Persona-',
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
		weak: [
			'Fire'
		],
		resist: [
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Yusuke Kitagawa',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Gorgon',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Empress',
		race: 'Femme',
		level: 34,
		hp: null,
		mp: null,
		st: 20,
		ma: 21,
		vi: 25,
		ag: 24,
		lu: 19,
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
		weak: [
			'Light'
		],
		resist: [],
		null: [
			'Ice'
		],
		drain: [],
		repel: [],
		game: 'p4'
	},
	{
		name: 'Gorokichi',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Emperor',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		st: 13,
		ma: 10,
		vi: 11,
		ag: 10,
		lu: 8,
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
				name: 'Counter -Persona-',
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
		repel: [],
		game: 'p5',
		user: 'Yusuke Kitagawa',
		stage: 3,
		evoSkill: 'Luster Candy'
	},
	{
		name: 'Hachiman',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Hierophant',
		race: 'Deity',
		level: 70,
		hp: null,
		mp: null,
		st: 33,
		ma: 60,
		vi: 39,
		ag: 38,
		lu: 47,
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
		weak: [
			'Dark'
		],
		resist: [],
		null: [
			'Ice',
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'p4'
	},
	{
		name: 'Hanuman',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Strength',
		race: 'Genma',
		level: 46,
		hp: 267,
		mp: 169,
		st: 44,
		ma: 22,
		vi: 36,
		ag: 32,
		lu: 28,
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
		weak: [
			'Elec'
		],
		resist: [],
		null: [],
		drain: [],
		repel: [
			'Force'
		],
		game: 'smt5'
	},
	{
		name: 'Haraedo-no-Okami',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		st: 4,
		ma: 4,
		vi: 4,
		ag: 2,
		lu: 3,
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
				name: 'Counter -Persona-',
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
				name: 'God"s Hand',
				level: 70
			},
			{
				name: 'Agneyastra',
				level: 74
			}
		],
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
		repel: [],
		game: 'p4',
		user: 'Chie Satonaka',
		stage: 3,
		evoSkill: 'Luster Candy'
	},
	{
		name: 'Hariti',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Empress',
		race: 'Lady',
		level: 35,
		hp: 166,
		mp: 196,
		st: 25,
		ma: 32,
		vi: 20,
		ag: 25,
		lu: 26,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Hastur',
		aliases: [],
		inherit: 'Wind',
		arcana: 'Star',
		race: null,
		level: 84,
		hp: null,
		mp: null,
		st: 51,
		ma: 59,
		vi: 52,
		ag: 56,
		lu: 41,
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
		repel: [],
		game: 'p5'
	},
	{
		name: 'Hayataro',
		aliases: [],
		inherit: 'Phys',
		arcana: null,
		race: 'Holy',
		level: 40,
		hp: 218,
		mp: 209,
		st: 35,
		ma: 27,
		vi: 33,
		ag: 37,
		lu: 32,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Hecate',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Lovers',
		race: 'Persona',
		level: 5,
		hp: null,
		mp: null,
		st: 3,
		ma: 6,
		vi: 4,
		ag: 4,
		lu: 5,
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
		repel: [],
		game: 'p5',
		user: 'Ann Takamaki',
		stage: 2,
		evoSkill: 'Evade Ice'
	},
	{
		name: 'Hecatoncheires',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Hanged',
		race: 'Jaki',
		level: 55,
		hp: 365,
		mp: 190,
		st: 52,
		ma: 21,
		vi: 52,
		ag: 29,
		lu: 32,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Hell Biker',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Death',
		race: 'Fiend',
		level: 36,
		hp: 194,
		mp: 173,
		st: 26,
		ma: 27,
		vi: 23,
		ag: 34,
		lu: 28,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Hereward',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Justice',
		race: 'Persona',
		level: 75,
		hp: null,
		mp: null,
		st: 53,
		ma: 47,
		vi: 46,
		ag: 47,
		lu: 39,
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
		repel: [],
		game: 'p5',
		user: 'Goro Akechi',
		stage: 3,
		evoSkill: 'Rebellion Blade'
	},
	{
		name: 'Hermes',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Magician',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 3,
		ma: 2,
		vi: 2,
		ag: 2,
		lu: 1,
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
				name: 'Counter -Persona-',
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
		weak: [
			'Wind'
		],
		resist: [
			'Fire'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Junpei Iori',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'High Pixie',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Fool',
		race: 'Fairy',
		level: 18,
		hp: 93,
		mp: 129,
		st: 9,
		ma: 23,
		vi: 12,
		ag: 20,
		lu: 16,
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
		weak: [
			'Ice'
		],
		resist: [
			'Force'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Himiko',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Lovers',
		race: 'Persona',
		level: 34,
		hp: null,
		mp: null,
		st: 15,
		ma: 25,
		vi: 20,
		ag: 21,
		lu: 24,
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
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [],
		game: 'p4',
		user: 'Rise Kujikawa',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Hokuto Seikun',
		aliases: [
			'Beidou Xingjun',
			'Beiji Weng'
		],
		inherit: 'Elec',
		arcana: 'Hierophant',
		race: 'Fury',
		level: 45,
		hp: null,
		mp: null,
		st: 29,
		ma: 34,
		vi: 31,
		ag: 26,
		lu: 22,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [],
		drain: [],
		repel: [
			'Elec'
		],
		game: 'p4'
	},
	{
		name: 'Horus',
		aliases: [],
		inherit: 'Light',
		arcana: 'Sun',
		race: 'Deity',
		level: 42,
		hp: 194,
		mp: 203,
		st: 25,
		ma: 28,
		vi: 27,
		ag: 38,
		lu: 35,
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
		],
		game: 'smt5'
	},
	{
		name: 'Hua Po',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Hanged',
		race: 'Jirae',
		level: 31,
		hp: 133,
		mp: 168,
		st: 12,
		ma: 31,
		vi: 21,
		ag: 29,
		lu: 29,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Hydra',
		aliases: [],
		inherit: 'Fire',
		arcana: null,
		race: 'Drake',
		level: 53,
		hp: 316,
		mp: 194,
		st: 54,
		ma: 24,
		vi: 43,
		ag: 33,
		lu: 30,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Idun',
		aliases: [],
		inherit: 'Recovery',
		arcana: null,
		race: 'Megami',
		level: 42,
		hp: 204,
		mp: 245,
		st: 19,
		ma: 51,
		vi: 24,
		ag: 33,
		lu: 35,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Inanna',
		aliases: [],
		inherit: 'Almighty',
		arcana: null,
		race: 'Lady',
		level: 87,
		hp: 467,
		mp: 508,
		st: 57,
		ma: 96,
		vi: 68,
		ag: 59,
		lu: 68,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Incubus',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Devil',
		race: 'Night',
		level: 22,
		hp: 118,
		mp: 110,
		st: 17,
		ma: 17,
		vi: 15,
		ag: 20,
		lu: 18,
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
		weak: [
			'Elec'
		],
		resist: [
			'Force'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Inugami',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Hanged',
		race: 'Beast',
		level: 24,
		hp: 114,
		mp: 134,
		st: 16,
		ma: 15,
		vi: 17,
		ag: 25,
		lu: 21,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Io',
		aliases: [],
		inherit: 'Wind',
		arcana: 'Lovers',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 1,
		ma: 3,
		vi: 2,
		ag: 1,
		lu: 3,
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
		weak: [
			'Elec'
		],
		resist: [
			'Wind'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Yukari Takeba',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Ippon-Datara',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Hermit',
		race: 'Brute',
		level: 17,
		hp: 120,
		mp: 79,
		st: 17,
		ma: 12,
		vi: 20,
		ag: 9,
		lu: 15,
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
		weak: [
			'Light'
		],
		resist: [
			'Fire'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Ishtar',
		aliases: [],
		inherit: 'Light',
		arcana: 'Lovers',
		race: 'Lady',
		level: 62,
		hp: 310,
		mp: 317,
		st: 20,
		ma: 61,
		vi: 33,
		ag: 41,
		lu: 53,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Isis',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Priestess',
		race: 'Lady',
		level: 46,
		hp: 204,
		mp: 251,
		st: 21,
		ma: 47,
		vi: 25,
		ag: 36,
		lu: 36,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Isis -P3-',
		aliases: [
			'Isis'
		],
		inherit: 'Wind',
		arcana: 'Lovers',
		race: 'Persona',
		level: 1,
		hp: 204,
		mp: 251,
		st: 21,
		ma: 47,
		vi: 25,
		ag: 36,
		lu: 36,
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
		repel: [],
		game: 'p3',
		user: 'Yukari Takeba',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Izanagi',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Fool',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 3,
		ma: 2,
		vi: 2,
		ag: 3,
		lu: 2,
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
		repel: [],
		game: 'p5',
		user: 'P4 Protgaonist',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Izanagi-no-Okami',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'World',
		race: 'Persona',
		level: 80,
		hp: null,
		mp: null,
		st: 52,
		ma: 56,
		vi: 46,
		ag: 48,
		lu: 45,
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
		repel: [],
		game: 'p5',
		user: 'P4 Protagonist',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Izanagi-no-Okami Picaro',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'World',
		race: 'Picaro',
		level: 89,
		hp: null,
		mp: null,
		st: 54,
		ma: 61,
		vi: 56,
		ag: 58,
		lu: 45,
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
		repel: [],
		game: 'p5'
	},
	{
		name: 'Izanagi Picaro',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fool',
		race: 'Picaro',
		level: 23,
		hp: null,
		mp: null,
		st: 16,
		ma: 15,
		vi: 15,
		ag: 16,
		lu: 14,
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
		weak: [
			'Wind'
		],
		resist: [],
		null: [
			'Elec',
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'p5'
	},
	{
		name: 'Jack Frost',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Magician',
		race: 'Fairy',
		level: 25,
		hp: 119,
		mp: 153,
		st: 14,
		ma: 29,
		vi: 15,
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
		game: 'smt5'
	},
	{
		name: 'Jack-o\'-Lantern',
		aliases: [
			'Pyro Jack'
		],
		inherit: 'Fire',
		arcana: 'Magician',
		race: 'Fairy',
		level: 20,
		hp: 90,
		mp: 135,
		st: 11,
		ma: 23,
		vi: 12,
		ag: 19,
		lu: 18,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Jatayu',
		aliases: [],
		inherit: 'Force',
		arcana: 'Hanged',
		race: 'Avian',
		level: 32,
		hp: 165,
		mp: 158,
		st: 22,
		ma: 18,
		vi: 24,
		ag: 27,
		lu: 26,
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
		weak: [
			'Elec',
			'Dark'
		],
		resist: [],
		null: [],
		drain: [
			'Force'
		],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Jikokuten',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Temperance',
		race: 'Kishin',
		level: 51,
		hp: 312,
		mp: 212,
		st: 40,
		ma: 38,
		vi: 42,
		ag: 24,
		lu: 29,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Jinn',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Magician',
		race: 'Yoma',
		level: 62,
		hp: null,
		mp: null,
		st: 27,
		ma: 51,
		vi: 38,
		ag: 39,
		lu: 28,
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
		weak: [
			'Elec'
		],
		resist: [],
		null: [],
		drain: [
			'Fire'
		],
		repel: [],
		game: 'p4'
	},
	{
		name: 'Jiraiya',
		aliases: [],
		inherit: 'Wind',
		arcana: 'Magician',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		st: 5,
		ma: 3,
		vi: 3,
		ag: 5,
		lu: 4,
		learnset: [
			{
				name: 'Garu',
				level: 0
			},
			{
				name: 'Bash',
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
		weak: [
			'Elec'
		],
		resist: [
			'Wind'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p4',
		user: 'Yosuke Hanamura',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Johanna',
		aliases: [],
		inherit: 'Nuke',
		arcana: 'Priestess',
		race: 'Persona',
		level: 21,
		hp: null,
		mp: null,
		st: 15,
		ma: 15,
		vi: 14,
		ag: 15,
		lu: 11,
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
		weak: [
			'Psy'
		],
		resist: [
			'Nuke'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Makoto Niijima',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Juno',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Priestess',
		race: 'Persona',
		level: 17,
		hp: null,
		mp: null,
		st: 8,
		ma: 14,
		vi: 12,
		ag: 9,
		lu: 12,
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
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Fuuka Yamagishi',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Kaguya',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Moon',
		race: 'Persona',
		level: 16,
		hp: null,
		mp: null,
		st: 11,
		ma: 15,
		vi: 12,
		ag: 11,
		lu: 6,
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
		repel: [],
		game: 'p5',
		user: 'Marie',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Kaguya Picaro',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Moon',
		race: 'Picaro',
		level: 25,
		hp: null,
		mp: null,
		st: 17,
		ma: 20,
		vi: 19,
		ag: 15,
		lu: 11,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Light',
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'p5'
	},
	{
		name: 'Kaiwan',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Star',
		race: 'Night',
		level: 45,
		hp: 209,
		mp: 216,
		st: 24,
		ma: 30,
		vi: 27,
		ag: 41,
		lu: 38,
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
		weak: [
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Kala-Nemi',
		aliases: [],
		inherit: 'Light',
		arcana: 'Justice',
		race: 'Persona',
		level: 36,
		hp: null,
		mp: null,
		st: 21,
		ma: 25,
		vi: 23,
		ag: 26,
		lu: 20,
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
		weak: [
			'Dark'
		],
		resist: [],
		null: [
			'Light'
		],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Ken Amada',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Kali',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Empress',
		race: 'Femme',
		level: 76,
		hp: 481,
		mp: 288,
		st: 74,
		ma: 35,
		vi: 62,
		ag: 48,
		lu: 35,
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
		],
		game: 'smt5'
	},
	{
		name: 'Kamui',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Star',
		race: 'Persona',
		level: 35,
		hp: null,
		mp: null,
		st: 24,
		ma: 25,
		vi: 20,
		ag: 22,
		lu: 16,
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
		repel: [],
		game: 'p4',
		user: 'Teddie',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Kamui-Moshiri',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Star',
		race: 'Persona',
		level: 35,
		hp: null,
		mp: null,
		st: 24,
		ma: 25,
		vi: 20,
		ag: 22,
		lu: 16,
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
		weak: [],
		resist: [],
		null: [
			'Wind',
			'Dark'
		],
		drain: [
			'Ice'
		],
		repel: [],
		game: 'p4',
		user: 'Teddie',
		stage: 3,
		evoSkill: 'Kamui Miracle'
	},
	{
		name: 'Kamu Susano-o',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Emperor',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		st: 13,
		ma: 10,
		vi: 11,
		ag: 10,
		lu: 8,
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
				name: 'Counter -Persona-',
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
		repel: [],
		game: 'p5',
		user: 'Yusuke Kitagawa',
		stage: 2,
		evoSkill: 'Evade Fire'
	},
	{
		name: 'Kanzeon',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Lovers',
		race: 'Persona',
		level: 34,
		hp: null,
		mp: null,
		st: 15,
		ma: 25,
		vi: 20,
		ag: 21,
		lu: 24,
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
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [],
		game: 'p4',
		user: 'Rise Kujikawa',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Kaya-no-Hime',
		aliases: [],
		inherit: 'Recovery',
		arcana: null,
		race: 'Jirae',
		level: 21,
		hp: 94,
		mp: 143,
		st: 10,
		ma: 25,
		vi: 12,
		ag: 18,
		lu: 21,
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
		weak: [
			'Fire'
		],
		resist: [
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Kelpie',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Strength',
		race: 'Fairy',
		level: 30,
		hp: 136,
		mp: 153,
		st: 20,
		ma: 19,
		vi: 21,
		ag: 29,
		lu: 24,
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
		weak: [
			'Force'
		],
		resist: [
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Khonsu',
		aliases: [],
		inherit: 'Light',
		arcana: null,
		race: 'Deity',
		level: 62,
		hp: 358,
		mp: 293,
		st: 49,
		ma: 53,
		vi: 42,
		ag: 30,
		lu: 44,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Khonsu Ra',
		aliases: [],
		inherit: 'Fire',
		arcana: null,
		race: 'Deity',
		level: 78,
		hp: 434,
		mp: 413,
		st: 49,
		ma: 72,
		vi: 50,
		ag: 54,
		lu: 55,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Kikuri-Hime',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Priestess',
		race: 'Lady',
		level: 24,
		hp: 105,
		mp: 165,
		st: 10,
		ma: 30,
		vi: 15,
		ag: 20,
		lu: 20,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'King Frost',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Emperor',
		race: 'Tyrant',
		level: 33,
		hp: 172,
		mp: 175,
		st: 27,
		ma: 34,
		vi: 21,
		ag: 21,
		lu: 26,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Kin-Ki',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Chariot',
		race: 'Brute',
		level: 49,
		hp: 323,
		mp: 170,
		st: 43,
		ma: 27,
		vi: 52,
		ag: 21,
		lu: 25,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Kintoki-Douji',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Star',
		race: 'Persona',
		level: 35,
		hp: null,
		mp: null,
		st: 24,
		ma: 25,
		vi: 20,
		ag: 22,
		lu: 16,
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
		weak: [
			'Elec'
		],
		resist: [
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p4',
		user: 'Teddie',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Kodama',
		aliases: [],
		inherit: 'Force',
		arcana: 'Star',
		race: 'Jirae',
		level: 6,
		hp: 46,
		mp: 65,
		st: 5,
		ma: 9,
		vi: 8,
		ag: 8,
		lu: 9,
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
		weak: [
			'Fire',
			'Ice'
		],
		resist: [
			'Force'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Kohryu',
		aliases: [
			'Huang Long'
		],
		inherit: 'Almighty',
		arcana: 'Hierophant',
		race: 'Dragon',
		level: 78,
		hp: 455,
		mp: 365,
		st: 56,
		ma: 58,
		vi: 57,
		ag: 58,
		lu: 56,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Konohana Sakuya',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Priestess',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		st: 8,
		ma: 15,
		vi: 11,
		ag: 8,
		lu: 10,
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
		weak: [
			'Ice'
		],
		resist: [
			'Fire'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p4',
		user: 'Yukiko Amagi',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Koppa Tengu',
		aliases: [],
		inherit: 'Force',
		arcana: 'Temperance',
		race: 'Yoma',
		level: 24,
		hp: 116,
		mp: 129,
		st: 13,
		ma: 18,
		vi: 16,
		ag: 27,
		lu: 20,
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
		weak: [
			'Elec'
		],
		resist: [
			'Force'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Koropokguru',
		aliases: [
			'Koropokkuru',
			'Koropokkur'
		],
		inherit: 'Ice',
		arcana: 'Hermit',
		race: 'Jirae',
		level: 26,
		hp: 118,
		mp: 148,
		st: 13,
		ma: 27,
		vi: 15,
		ag: 21,
		lu: 25,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Koumokuten',
		aliases: [],
		inherit: 'Force',
		arcana: 'Hermit',
		race: 'Kishin',
		level: 44,
		hp: 249,
		mp: 194,
		st: 33,
		ma: 31,
		vi: 33,
		ag: 29,
		lu: 30,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Kouzeon',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Lovers',
		race: 'Persona',
		level: 34,
		hp: null,
		mp: null,
		st: 15,
		ma: 25,
		vi: 20,
		ag: 21,
		lu: 24,
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
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [],
		game: 'p4',
		user: 'Rise Kujikawa',
		stage: 3,
		evoSkill: 'Complete Analysis'
	},
	{
		name: 'Kumbhanda',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Hermit',
		race: 'Haunt',
		level: 41,
		hp: 208,
		mp: 168,
		st: 32,
		ma: 30,
		vi: 26,
		ag: 29,
		lu: 27,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Kurama Tengu',
		aliases: [],
		inherit: 'Force',
		arcana: 'Hermit',
		race: 'Genma',
		level: 39,
		hp: 179,
		mp: 186,
		st: 28,
		ma: 21,
		vi: 25,
		ag: 36,
		lu: 31,
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
		weak: [
			'Elec'
		],
		resist: [],
		null: [
			'Force'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Kushi Mitama',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Councillor',
		race: 'Mitama',
		level: 12,
		hp: null,
		mp: null,
		st: 7,
		ma: 11,
		vi: 9,
		ag: 8,
		lu: 8,
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
		weak: [
			'Fire'
		],
		resist: [
			'Wind'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5'
	},
	{
		name: 'Kushinada',
		aliases: [
			'Kushinada-Hime'
		],
		inherit: 'Recovery',
		arcana: 'Lovers',
		race: 'Kunitsu',
		level: 49,
		hp: 218,
		mp: 259,
		st: 22,
		ma: 50,
		vi: 27,
		ag: 36,
		lu: 37,
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
		weak: [
			'Dark'
		],
		resist: [],
		null: [
			'Light'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Lachesis',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Fortune',
		race: 'Femme',
		level: 58,
		hp: 334,
		mp: 256,
		st: 24,
		ma: 39,
		vi: 44,
		ag: 31,
		lu: 56,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Lahmu',
		aliases: [],
		inherit: 'Ailment',
		arcana: null,
		race: 'Vile',
		level: 48,
		hp: 253,
		mp: 264,
		st: 30,
		ma: 47,
		vi: 36,
		ag: 27,
		lu: 39,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Lakshmi',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Fortune',
		race: 'Megami',
		level: 70,
		hp: 363,
		mp: 373,
		st: 30,
		ma: 65,
		vi: 41,
		ag: 44,
		lu: 51,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Lamia',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Empress',
		race: 'Femme',
		level: 36,
		hp: 156,
		mp: 188,
		st: 21,
		ma: 27,
		vi: 24,
		ag: 28,
		lu: 29,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Leanan Sidhe',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Lovers',
		race: 'Femme',
		level: 17,
		hp: 82,
		mp: 115,
		st: 9,
		ma: 20,
		vi: 14,
		ag: 13,
		lu: 15,
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
		weak: [
			'Force',
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Legion',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Fool',
		race: 'Foul',
		level: 19,
		hp: 100,
		mp: 93,
		st: 15,
		ma: 16,
		vi: 18,
		ag: 14,
		lu: 15,
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
		weak: [
			'Elec',
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Lilim',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Devil',
		race: 'Night',
		level: 32,
		hp: 138,
		mp: 172,
		st: 13,
		ma: 34,
		vi: 18,
		ag: 27,
		lu: 26,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Lilith',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Moon',
		race: 'Night',
		level: 68,
		hp: 326,
		mp: 363,
		st: 22,
		ma: 63,
		vi: 36,
		ag: 48,
		lu: 57,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Loa',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Hermit',
		race: 'Jaki',
		level: 30,
		hp: 129,
		mp: 163,
		st: 15,
		ma: 31,
		vi: 16,
		ag: 24,
		lu: 26,
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
		weak: [
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Loki',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fool',
		race: 'Tyrant',
		level: 56,
		hp: 276,
		mp: 284,
		st: 31,
		ma: 47,
		vi: 33,
		ag: 40,
		lu: 42,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Loki -P5-',
		aliases: [
			'Loki'
		],
		inherit: 'Dark',
		arcana: 'Justice',
		race: 'Persona',
		level: 75,
		hp: 276,
		mp: 284,
		st: 31,
		ma: 47,
		vi: 33,
		ag: 40,
		lu: 42,
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
		repel: [],
		game: 'p5',
		user: 'Goro Akechi',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Loup-garou',
		aliases: [],
		inherit: 'Phys',
		arcana: null,
		race: 'Beast',
		level: 54,
		hp: 322,
		mp: 198,
		st: 51,
		ma: 24,
		vi: 39,
		ag: 49,
		lu: 21,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Lucia',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Priestess',
		race: 'Persona',
		level: 17,
		hp: null,
		mp: null,
		st: 8,
		ma: 14,
		vi: 12,
		ag: 9,
		lu: 12,
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
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Fuuka Yamagishi',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Lucifer',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Star',
		race: 'Devil',
		level: 93,
		hp: null,
		mp: null,
		st: 61,
		ma: 59,
		vi: 59,
		ag: 52,
		lu: 55,
		learnset: [
			{
				name: 'Gigantomachia',
				level: 0
			},
			{
				name: 'Drain Dark',
				level: 0
			},
			{
				name: 'Morning Star',
				level: 94
			},
			{
				name: 'Spell Master',
				level: 95
			},
			{
				name: 'Heat Riser',
				level: 96
			},
			{
				name: 'Repel Light',
				level: 97
			},
			{
				name: 'Insta-Heal',
				level: 98
			},
			{
				name: 'Drain Phys',
				level: 99
			}
		],
		weak: [
			'Light'
		],
		resist: [
			'Fire',
			'Ice',
			'Elec',
			'Wind'
		],
		null: [
			'Phys',
			'Gun'
		],
		drain: [
			'Dark'
		],
		repel: [],
		game: 'p5'
	},
	{
		name: 'Lucy',
		aliases: [],
		inherit: 'Psy',
		arcana: 'Empress',
		race: 'Persona',
		level: 36,
		hp: null,
		mp: null,
		st: 27,
		ma: 25,
		vi: 22,
		ag: 22,
		lu: 21,
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
		repel: [],
		game: 'p5',
		user: 'Haru Okumura',
		stage: 3,
		evoSkill: 'Life Wall'
	},
	{
		name: 'Macabre',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Hanged',
		race: 'Jaki',
		level: 43,
		hp: 240,
		mp: 158,
		st: 42,
		ma: 18,
		vi: 30,
		ag: 27,
		lu: 32,
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
		weak: [
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Mada',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Tower',
		race: 'Vile',
		level: 83,
		hp: 524,
		mp: 389,
		st: 69,
		ma: 74,
		vi: 65,
		ag: 45,
		lu: 41,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Magatsu-Izanagi',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Tower',
		race: 'Persona',
		level: 44,
		hp: null,
		mp: null,
		st: 37,
		ma: 35,
		vi: 32,
		ag: 25,
		lu: 10,
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
		repel: [],
		game: 'p5',
		user: 'Tohru Adachi',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Magatsu-Izanagi Picaro',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Tower',
		race: 'Picaro',
		level: 48,
		hp: null,
		mp: null,
		st: 40,
		ma: 38,
		vi: 35,
		ag: 27,
		lu: 11,
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
		repel: [],
		game: 'p5'
	},
	{
		name: 'Makami',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Temperance',
		race: 'Avatar',
		level: 21,
		hp: 109,
		mp: 119,
		st: 13,
		ma: 17,
		vi: 16,
		ag: 21,
		lu: 24,
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
		weak: [
			'Dark'
		],
		resist: [
			'Light'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Manananggal',
		aliases: [],
		inherit: 'Dark',
		arcana: null,
		race: 'Femme',
		level: 25,
		hp: 109,
		mp: 156,
		st: 15,
		ma: 29,
		vi: 14,
		ag: 21,
		lu: 21,
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
		weak: [
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Mandrake',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Death',
		race: 'Yoma',
		level: 6,
		hp: 49,
		mp: 75,
		st: 6,
		ma: 9,
		vi: 7,
		ag: 11,
		lu: 9,
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
		weak: [
			'Fire'
		],
		resist: [
			'Elec'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Mara',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Tower',
		race: 'Tyrant',
		level: 67,
		hp: 449,
		mp: 249,
		st: 57,
		ma: 31,
		vi: 61,
		ag: 25,
		lu: 53,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Maria',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Faith',
		race: 'Megami',
		level: 83,
		hp: 424,
		mp: 485,
		st: 34,
		ma: 80,
		vi: 46,
		ag: 61,
		lu: 74,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Matador',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Death',
		race: 'Fiend',
		level: 24,
		hp: 136,
		mp: 154,
		st: 23,
		ma: 17,
		vi: 14,
		ag: 28,
		lu: 22,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Melchizedek',
		aliases: [],
		inherit: 'Light',
		arcana: 'Justice',
		race: 'Herald',
		level: 60,
		hp: 341,
		mp: 281,
		st: 44,
		ma: 30,
		vi: 41,
		ag: 52,
		lu: 38,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Mephisto',
		aliases: [],
		inherit: 'Ailment',
		arcana: null,
		race: 'Tyrant',
		level: 79,
		hp: 503,
		mp: 455,
		st: 64,
		ma: 71,
		vi: 44,
		ag: 50,
		lu: 66,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Mercurius',
		aliases: [],
		inherit: 'Wind',
		arcana: 'Magician',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 2,
		ma: 3,
		vi: 1,
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
		user: 'Morgana',
		stage: 2,
		evoSkill: 'Evade Elec'
	},
	{
		name: 'Mermaid',
		aliases: [],
		inherit: 'Ice',
		arcana: null,
		race: 'Femme',
		level: 12,
		hp: 72,
		mp: 122,
		st: 8,
		ma: 17,
		vi: 9,
		ag: 11,
		lu: 15,
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
		weak: [
			'Fire',
			'Elec'
		],
		resist: [],
		null: [
			'Ice'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Messiah',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Judgement',
		race: 'Persona',
		level: 81,
		hp: null,
		mp: null,
		st: 50,
		ma: 50,
		vi: 50,
		ag: 50,
		lu: 50,
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
				name: 'God"s Hand',
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
		],
		game: 'p5',
		user: 'P3 Protagonist',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Messiah Picaro',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Judgement',
		race: 'Picaro',
		level: 90,
		hp: null,
		mp: null,
		st: 56,
		ma: 56,
		vi: 56,
		ag: 56,
		lu: 56,
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
		],
		game: 'p5'
	},
	{
		name: 'Metatron',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Justice',
		race: 'Herald',
		level: 95,
		hp: 626,
		mp: 443,
		st: 82,
		ma: 95,
		vi: 79,
		ag: 72,
		lu: 76,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Michael',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Judgement',
		race: 'Herald',
		level: 90,
		hp: 552,
		mp: 474,
		st: 76,
		ma: 78,
		vi: 65,
		ag: 76,
		lu: 59,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Milady',
		aliases: [],
		inherit: 'Psy',
		arcana: 'Empress',
		race: 'Persona',
		level: 36,
		hp: null,
		mp: null,
		st: 27,
		ma: 25,
		vi: 22,
		ag: 22,
		lu: 21,
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
		weak: [
			'Nuke'
		],
		resist: [
			'Psy'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Haru Okumura',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Mishaguji',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Hierophant',
		race: 'Vile',
		level: 42,
		hp: 235,
		mp: 159,
		st: 39,
		ma: 21,
		vi: 31,
		ag: 32,
		lu: 25,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Mithras',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Sun',
		race: 'Tyrant',
		level: 77,
		hp: 462,
		mp: 325,
		st: 58,
		ma: 60,
		vi: 49,
		ag: 42,
		lu: 50,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Mitra',
		aliases: [
			'Mithra'
		],
		inherit: 'Almighty',
		arcana: 'Temperance',
		race: 'Deity',
		level: 65,
		hp: 339,
		mp: 302,
		st: 43,
		ma: 53,
		vi: 39,
		ag: 37,
		lu: 43,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Mokoi',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Death',
		race: 'Night',
		level: 16,
		hp: 88,
		mp: 90,
		st: 15,
		ma: 12,
		vi: 15,
		ag: 11,
		lu: 16,
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
		weak: [
			'Force'
		],
		resist: [
			'Elec'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Moloch',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Hanged',
		race: 'Tyrant',
		level: 51,
		hp: 297,
		mp: 212,
		st: 42,
		ma: 42,
		vi: 36,
		ag: 28,
		lu: 25,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Mot',
		aliases: [],
		inherit: 'Force',
		arcana: 'Death',
		race: 'Fury',
		level: 63,
		hp: 306,
		mp: 338,
		st: 28,
		ma: 59,
		vi: 58,
		ag: 24,
		lu: 46,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Mother Harlot',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Empress',
		race: 'Fiend',
		level: 64,
		hp: 352,
		mp: 362,
		st: 42,
		ma: 60,
		vi: 45,
		ag: 36,
		lu: 40,
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
		],
		game: 'smt5'
	},
	{
		name: 'Mothman',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Moon',
		race: 'Wilder',
		level: 29,
		hp: 139,
		mp: 153,
		st: 17,
		ma: 15,
		vi: 19,
		ag: 30,
		lu: 27,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Muu Shuwuu',
		aliases: [
			'Moh Shuvuu'
		],
		inherit: 'Force',
		arcana: 'Priestess',
		race: 'Raptor',
		level: 38,
		hp: 175,
		mp: 202,
		st: 16,
		ma: 34,
		vi: 20,
		ag: 36,
		lu: 29,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Force'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Naga',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Hermit',
		race: 'Snake',
		level: 27,
		hp: 115,
		mp: 109,
		st: 28,
		ma: 14,
		vi: 25,
		ag: 20,
		lu: 15,
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
		weak: [
			'Fire',
			'Force'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Narcissus',
		aliases: [],
		inherit: 'Force',
		arcana: 'Lovers',
		race: 'Jirae',
		level: 38,
		hp: 175,
		mp: 187,
		st: 22,
		ma: 34,
		vi: 16,
		ag: 35,
		lu: 31,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Force'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Nata Taishi',
		aliases: [
			'Nezha'
		],
		inherit: 'Phys',
		arcana: 'Chariot',
		race: 'Genma',
		level: 6,
		hp: null,
		mp: null,
		st: 6,
		ma: 2,
		vi: 6,
		ag: 10,
		lu: 6,
		learnset: [
			{
				name: 'Bash',
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
		weak: [
			'Elec'
		],
		resist: [
			'Fire'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p4'
	},
	{
		name: 'Nebiros',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Devil',
		race: 'Fallen',
		level: 67,
		hp: 300,
		mp: 365,
		st: 27,
		ma: 67,
		vi: 30,
		ag: 42,
		lu: 56,
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
		weak: [
			'Force',
			'Light'
		],
		resist: [],
		null: [],
		drain: [],
		repel: [
			'Dark'
		],
		game: 'smt5'
	},
	{
		name: 'Necronomicon',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Hermit',
		race: 'Persona',
		level: 31,
		hp: null,
		mp: null,
		st: 17,
		ma: 23,
		vi: 20,
		ag: 21,
		lu: 35,
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
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Futaba Sakura',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Nekomata',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Magician',
		race: 'Beast',
		level: 34,
		hp: 158,
		mp: 166,
		st: 23,
		ma: 18,
		vi: 20,
		ag: 33,
		lu: 29,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Neko Shogun',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Star',
		race: 'Wargod',
		level: 5,
		hp: 57,
		mp: 73,
		st: 6,
		ma: 7,
		vi: 11,
		ag: 4,
		lu: 8,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Nemesis',
		aliases: [],
		inherit: 'Light',
		arcana: 'Justice',
		race: 'Persona',
		level: 36,
		hp: null,
		mp: null,
		st: 21,
		ma: 25,
		vi: 23,
		ag: 26,
		lu: 20,
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
		weak: [
			'Dark'
		],
		resist: [
			'Light'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Ken Amada',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Nigi Mitama',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Councillor',
		race: 'Mitama',
		level: 22,
		hp: null,
		mp: null,
		st: 13,
		ma: 15,
		vi: 15,
		ag: 16,
		lu: 14,
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
		weak: [
			'Elec'
		],
		resist: [
			'Light',
			'Dark'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5'
	},
	{
		name: 'Norn',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Fortune',
		race: 'Megami',
		level: 67,
		hp: 358,
		mp: 321,
		st: 39,
		ma: 59,
		vi: 40,
		ag: 34,
		lu: 49,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Nue',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Death',
		race: 'Wilder',
		level: 49,
		hp: 289,
		mp: 180,
		st: 47,
		ma: 30,
		vi: 38,
		ag: 25,
		lu: 29,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Nuwa',
		aliases: [],
		inherit: 'Force',
		arcana: null,
		race: 'Lady',
		level: 80,
		hp: 438,
		mp: 455,
		st: 63,
		ma: 70,
		vi: 52,
		ag: 44,
		lu: 50,
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
		],
		game: 'smt5'
	},
	{
		name: 'Nuwa -Snake-',
		aliases: [
			'Nuwa'
		],
		inherit: 'Force',
		arcana: null,
		race: 'Snake',
		level: 89,
		hp: 502,
		mp: 522,
		st: 44,
		ma: 105,
		vi: 65,
		ag: 60,
		lu: 74,
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
		],
		game: 'smt5'
	},
	{
		name: 'Obariyon',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Fool',
		race: 'Haunt',
		level: 12,
		hp: 71,
		mp: 91,
		st: 14,
		ma: 9,
		vi: 10,
		ag: 13,
		lu: 12,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Oberon',
		aliases: [],
		inherit: 'Force',
		arcana: 'Emperor',
		race: 'Fairy',
		level: 47,
		hp: 242,
		mp: 211,
		st: 32,
		ma: 33,
		vi: 29,
		ag: 35,
		lu: 32,
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
		weak: [
			'Elec'
		],
		resist: [],
		null: [
			'Force'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Odin',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Emperor',
		race: 'Deity',
		level: 77,
		hp: 477,
		mp: 345,
		st: 65,
		ma: 57,
		vi: 58,
		ag: 48,
		lu: 32,
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
		],
		game: 'smt5'
	},
	{
		name: 'Okuninushi',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Faith',
		race: 'Kunitsu',
		level: 55,
		hp: 320,
		mp: 236,
		st: 47,
		ma: 26,
		vi: 47,
		ag: 40,
		lu: 28,
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
		weak: [
			'Ice'
		],
		resist: [
			'Light',
			'Dark'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Omoikane',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Hierophant',
		race: 'Amatsu',
		level: 7,
		hp: null,
		mp: null,
		st: 5,
		ma: 8,
		vi: 5,
		ag: 4,
		lu: 6,
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
		weak: [
			'Ice'
		],
		resist: [
			'Elec'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p4'
	},
	{
		name: 'Ongyo-Ki',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Hermit',
		race: 'Brute',
		level: 78,
		hp: 549,
		mp: 297,
		st: 67,
		ma: 46,
		vi: 65,
		ag: 31,
		lu: 48,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Oni',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Strength',
		race: 'Brute',
		level: 23,
		hp: 151,
		mp: 93,
		st: 21,
		ma: 12,
		vi: 24,
		ag: 12,
		lu: 16,
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
		weak: [
			'Elec',
			'Light'
		],
		resist: [
			'Phys'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Onmoraki',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Moon',
		race: 'Raptor',
		level: 4,
		hp: 42,
		mp: 59,
		st: 5,
		ma: 8,
		vi: 8,
		ag: 7,
		lu: 6,
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
		weak: [
			'Ice',
			'Force'
		],
		resist: [
			'Fire'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Orobas',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Hierophant',
		race: 'Beast',
		level: 49,
		hp: 213,
		mp: 264,
		st: 35,
		ma: 41,
		vi: 32,
		ag: 26,
		lu: 35,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Orpheus',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Fool',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 2,
		ma: 2,
		vi: 2,
		ag: 2,
		lu: 2,
		learnset: [
			{
				name: 'Bash',
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
		weak: [
			'Elec',
			'Dark'
		],
		resist: [
			'Light'
		],
		null: [],
		drain: [],
		repel: [],
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
		inherit: 'Fire',
		arcana: 'Fool',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 2,
		ma: 2,
		vi: 2,
		ag: 2,
		lu: 2,
		learnset: [
			{
				name: 'Bash',
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
		weak: [
			'Elec',
			'Dark'
		],
		resist: [
			'Light'
		],
		null: [],
		drain: [],
		repel: [],
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
		inherit: 'Almighty',
		arcana: 'Fool',
		race: 'Picaro',
		level: 13,
		hp: null,
		mp: null,
		st: 9,
		ma: 11,
		vi: 9,
		ag: 10,
		lu: 7,
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
		weak: [
			'Elec',
			'Dark'
		],
		resist: [
			'Light'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5'
	},
	{
		name: 'Orpheus Picaro',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fool',
		race: 'Picaro',
		level: 20,
		hp: null,
		mp: null,
		st: 19,
		ma: 19,
		vi: 19,
		ag: 19,
		lu: 18,
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
		weak: [
			'Elec',
			'Dark'
		],
		resist: [
			'Light'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5'
	},
	{
		name: 'Orpheus Telos',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fool',
		race: 'Persona',
		level: 90,
		hp: null,
		mp: null,
		st: 62,
		ma: 62,
		vi: 62,
		ag: 62,
		lu: 62,
		learnset: [
			{
				name: 'Victory Cry',
				level: 0
			}
		],
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
		repel: [],
		game: 'p5',
		user: 'P3 Protagonist',
		stage: 3,
		evoSkill: null
	},
	{
		name: 'Orthrus',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Hanged',
		race: 'Beast',
		level: 42,
		hp: 255,
		mp: 155,
		st: 41,
		ma: 21,
		vi: 32,
		ag: 34,
		lu: 22,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Ose',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Fool',
		race: 'Fallen',
		level: 44,
		hp: 264,
		mp: 169,
		st: 45,
		ma: 21,
		vi: 35,
		ag: 33,
		lu: 26,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Ice',
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Oyamatsumi',
		aliases: [
			'Ouyamatsumi'
		],
		inherit: 'Ice',
		arcana: 'Strength',
		race: 'Kunitsu',
		level: 40,
		hp: 261,
		mp: 140,
		st: 36,
		ma: 23,
		vi: 38,
		ag: 18,
		lu: 26,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Pabilsag',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Emperor',
		race: 'Holy',
		level: 51,
		hp: null,
		mp: null,
		st: 38,
		ma: 29,
		vi: 30,
		ag: 33,
		lu: 30,
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
				name: 'Stagnant Air -Persona-',
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
		],
		game: 'p4'
	},
	{
		name: 'Pale Rider',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Death',
		race: 'Fiend',
		level: 57,
		hp: 305,
		mp: 261,
		st: 51,
		ma: 40,
		vi: 35,
		ag: 37,
		lu: 53,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Palladion',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Chariot',
		race: 'Persona',
		level: 29,
		hp: null,
		mp: null,
		st: 19,
		ma: 13,
		vi: 25,
		ag: 18,
		lu: 14,
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
		repel: [],
		game: 'p3',
		user: 'Aigis',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Pandora',
		aliases: [],
		inherit: 'Light',
		arcana: 'Hope',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 2,
		ma: 5,
		vi: 4,
		ag: 6,
		lu: 4,
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
		weak: [
			'Dark'
		],
		resist: [],
		null: [
			'Light'
		],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Sophia',
		stage: 2,
		evoSkill: 'Mahamabarion'
	},
	{
		name: 'Parvati',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Lovers',
		race: 'Megami',
		level: 35,
		hp: 151,
		mp: 204,
		st: 17,
		ma: 39,
		vi: 20,
		ag: 28,
		lu: 29,
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
		weak: [
			'Fire'
		],
		resist: [
			'Ice',
			'Light'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Pazuzu',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Devil',
		race: 'Vile',
		level: 52,
		hp: 273,
		mp: 241,
		st: 31,
		ma: 41,
		vi: 34,
		ag: 35,
		lu: 40,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Penthesilea',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Empress',
		race: 'Persona',
		level: 18,
		hp: null,
		mp: null,
		st: 11,
		ma: 16,
		vi: 11,
		ag: 12,
		lu: 11,
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
		weak: [
			'Fire'
		],
		resist: [
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Mitsuru Kirijo',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Pisaca',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Death',
		race: 'Haunt',
		level: 31,
		hp: 144,
		mp: 155,
		st: 26,
		ma: 12,
		vi: 20,
		ag: 30,
		lu: 26,
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
		weak: [
			'Fire',
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Pithos',
		aliases: [],
		inherit: 'Light',
		arcana: 'Hope',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 2,
		ma: 5,
		vi: 4,
		ag: 6,
		lu: 4,
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
		weak: [
			'Dark'
		],
		resist: [
			'Light'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Sophia',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Pixie',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Lovers',
		race: 'Fairy',
		level: 2,
		hp: 32,
		mp: 82,
		st: 2,
		ma: 7,
		vi: 4,
		ag: 8,
		lu: 6,
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
		weak: [
			'Dark'
		],
		resist: [
			'Force'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Poltergeist',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Devil',
		race: 'Haunt',
		level: 25,
		hp: 115,
		mp: 137,
		st: 17,
		ma: 16,
		vi: 17,
		ag: 20,
		lu: 23,
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
		weak: [
			'Force',
			'Light'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Polydeuces',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Emperor',
		race: 'Persona',
		level: 12,
		hp: null,
		mp: null,
		st: 9,
		ma: 10,
		vi: 8,
		ag: 9,
		lu: 7,
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
		weak: [
			'Ice'
		],
		resist: [
			'Elec'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Akihiko Sanada',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Power',
		aliases: [],
		inherit: 'Light',
		arcana: 'Justice',
		race: 'Divine',
		level: 39,
		hp: 239,
		mp: 153,
		st: 31,
		ma: 27,
		vi: 36,
		ag: 21,
		lu: 25,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Preta',
		aliases: [],
		inherit: 'Dark',
		arcana: null,
		race: 'Haunt',
		level: 3,
		hp: 40,
		mp: 54,
		st: 8,
		ma: 7,
		vi: 7,
		ag: 5,
		lu: 4,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Principality',
		aliases: [],
		inherit: 'Light',
		arcana: 'Justice',
		race: 'Divine',
		level: 28,
		hp: 130,
		mp: 175,
		st: 13,
		ma: 34,
		vi: 16,
		ag: 22,
		lu: 22,
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
		weak: [
			'Dark'
		],
		resist: [],
		null: [
			'Light'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Prometheus',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Hermit',
		race: 'Persona',
		level: 31,
		hp: null,
		mp: null,
		st: 17,
		ma: 23,
		vi: 20,
		ag: 21,
		lu: 35,
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
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Futaba Sakura',
		stage: 2,
		evoSkill: 'Treasure Skimmer'
	},
	{
		name: 'Psyche',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Hierophant',
		race: 'Persona',
		level: 25,
		hp: null,
		mp: null,
		st: 18,
		ma: 13,
		vi: 20,
		ag: 18,
		lu: 13,
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
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [],
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
		inherit: 'Fire',
		arcana: 'Magician',
		race: 'Night',
		level: 56,
		hp: 266,
		mp: 289,
		st: 25,
		ma: 52,
		vi: 30,
		ag: 33,
		lu: 49,
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
		weak: [
			'Elec'
		],
		resist: [],
		null: [
			'Force'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Quetzalcoatl',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Sun',
		race: 'Dragon',
		level: 34,
		hp: 171,
		mp: 144,
		st: 24,
		ma: 30,
		vi: 23,
		ag: 24,
		lu: 24,
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
		weak: [
			'Elec'
		],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Raja Naga',
		aliases: [
			'Naga Raja'
		],
		inherit: 'Elec',
		arcana: 'Temperance',
		race: 'Snake',
		level: 40,
		hp: 241,
		mp: 140,
		st: 33,
		ma: 31,
		vi: 36,
		ag: 19,
		lu: 22,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Rakshasa',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Strength',
		race: 'Jaki',
		level: 20,
		hp: 114,
		mp: 90,
		st: 25,
		ma: 10,
		vi: 19,
		ag: 16,
		lu: 14,
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
		weak: [
			'Ice'
		],
		resist: [
			'Light',
			'Dark'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Rangda',
		aliases: [],
		inherit: 'Force',
		arcana: 'Magician',
		race: 'Femme',
		level: 70,
		hp: 334,
		mp: 348,
		st: 46,
		ma: 59,
		vi: 36,
		ag: 39,
		lu: 51,
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
		],
		game: 'smt5'
	},
	{
		name: 'Raoul',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fool',
		race: 'Persona',
		level: 76,
		hp: null,
		mp: null,
		st: 47,
		ma: 49,
		vi: 43,
		ag: 54,
		lu: 42,
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
		weak: [
			'Light'
		],
		resist: [],
		null: [
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'P5 Protagonist',
		stage: 3,
		evoSkill: null
	},
	{
		name: 'Raphael',
		aliases: [],
		inherit: 'Force',
		arcana: 'Lovers',
		race: 'Herald',
		level: 84,
		hp: 528,
		mp: 387,
		st: 70,
		ma: 80,
		vi: 62,
		ag: 50,
		lu: 48,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Red Rider',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Tower',
		race: 'Fiend',
		level: 47,
		hp: 272,
		mp: 201,
		st: 39,
		ma: 37,
		vi: 29,
		ag: 31,
		lu: 32,
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
		],
		game: 'smt5'
	},
	{
		name: 'Regent',
		aliases: [],
		inherit: 'Support',
		arcana: 'Emperor',
		race: 'Treasure',
		level: 10,
		hp: 165,
		mp: 93,
		st: 10,
		ma: 10,
		vi: 10,
		ag: 10,
		lu: 10,
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
		weak: [
			'Nuke'
		],
		resist: [
			'Phys',
			'Gun'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5'
	},
	{
		name: 'Robin Hood',
		aliases: [],
		inherit: 'Light',
		arcana: 'Justice',
		race: 'Persona',
		level: 45,
		hp: null,
		mp: null,
		st: 32,
		ma: 29,
		vi: 28,
		ag: 29,
		lu: 24,
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
		weak: [
			'Dark'
		],
		resist: [
			'Light'
		],
		null: [],
		drain: [],
		repel: [],
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
		inherit: 'Elec',
		arcana: 'Emperor',
		race: 'Persona',
		level: 25,
		hp: null,
		mp: null,
		st: 20,
		ma: 11,
		vi: 17,
		ag: 15,
		lu: 14,
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
		weak: [
			'Wind'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'p4',
		user: 'Kanji Tatsumi',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Saki Mitama',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Lovers',
		race: 'Mitama',
		level: 6,
		hp: null,
		mp: null,
		st: 4,
		ma: 6,
		vi: 5,
		ag: 6,
		lu: 4,
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
		weak: [
			'Wind'
		],
		resist: [
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5'
	},
	{
		name: 'Sandalphon',
		aliases: [],
		inherit: 'Light',
		arcana: 'Moon',
		race: 'Herald',
		level: 88,
		hp: 536,
		mp: 458,
		st: 71,
		ma: 83,
		vi: 74,
		ag: 63,
		lu: 53,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Sandman',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Magician',
		race: 'Night',
		level: 8,
		hp: 55,
		mp: 81,
		st: 9,
		ma: 9,
		vi: 8,
		ag: 11,
		lu: 12,
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
		weak: [
			'Elec'
		],
		resist: [
			'Force'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Sarasvati',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Priestess',
		race: 'Megami',
		level: 47,
		hp: 208,
		mp: 254,
		st: 21,
		ma: 48,
		vi: 25,
		ag: 37,
		lu: 36,
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
		weak: [
			'Fire',
			'Dark'
		],
		resist: [],
		null: [
			'Ice'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Satan',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Judgement',
		race: 'Godly',
		level: 92,
		hp: null,
		mp: null,
		st: 62,
		ma: 59,
		vi: 55,
		ag: 52,
		lu: 55,
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
		weak: [],
		resist: [
			'Gun'
		],
		null: [],
		drain: [],
		repel: [
			'Ice',
			'Dark'
		],
		game: 'p5'
	},
	{
		name: 'Satanael',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fool',
		race: 'Persona',
		level: 95,
		hp: null,
		mp: null,
		st: 63,
		ma: 60,
		vi: 57,
		ag: 56,
		lu: 56,
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
		repel: [],
		game: 'p5',
		user: 'P5 Protagonist',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Scathach',
		aliases: [],
		inherit: 'Force',
		arcana: 'Priestess',
		race: 'Megami',
		level: 55,
		hp: 307,
		mp: 238,
		st: 44,
		ma: 37,
		vi: 32,
		ag: 40,
		lu: 32,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Seiryu',
		aliases: [
			'Qing Long'
		],
		inherit: 'Force',
		arcana: 'Councillor',
		race: 'Dragon',
		level: 45,
		hp: 231,
		mp: 183,
		st: 31,
		ma: 33,
		vi: 29,
		ag: 36,
		lu: 31,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Seiten Taisei -P5-',
		aliases: [
			'Seiten Taisei'
		],
		inherit: 'Elec',
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		st: 5,
		ma: 3,
		vi: 5,
		ag: 3,
		lu: 3,
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
				name: 'God"s Hand',
				level: 75
			}
		],
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
		repel: [],
		game: 'p5',
		user: 'Ryuji Sakamoto',
		stage: 2,
		evoSkill: 'Evade Wind'
	},
	{
		name: 'Senri',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Empress',
		race: 'Nymph',
		level: 9,
		hp: null,
		mp: null,
		st: 7,
		ma: 7,
		vi: 4,
		ag: 14,
		lu: 7,
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
		weak: [
			'Elec'
		],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [],
		game: 'p4'
	},
	{
		name: 'Setanta',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Emperor',
		race: 'Fairy',
		level: 35,
		hp: 193,
		mp: 163,
		st: 35,
		ma: 26,
		vi: 25,
		ag: 27,
		lu: 20,
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
		weak: [
			'Elec',
			'Dark'
		],
		resist: [],
		null: [
			'Force'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Seth',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Tower',
		race: 'Drake',
		level: 67,
		hp: 409,
		mp: 284,
		st: 62,
		ma: 51,
		vi: 43,
		ag: 40,
		lu: 34,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Shiisaa',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Strength',
		race: 'Holy',
		level: 19,
		hp: 91,
		mp: 117,
		st: 15,
		ma: 15,
		vi: 14,
		ag: 19,
		lu: 16,
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
		weak: [
			'Fire'
		],
		resist: [
			'Elec',
			'Force'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Shiki-Ouji',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Chariot',
		race: 'Brute',
		level: 29,
		hp: 135,
		mp: 159,
		st: 16,
		ma: 29,
		vi: 18,
		ag: 23,
		lu: 23,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Shiva',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Judgement',
		race: 'Fury',
		level: 96,
		hp: 670,
		mp: 440,
		st: 101,
		ma: 88,
		vi: 79,
		ag: 74,
		lu: 73,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Siegfried',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Faith',
		race: 'Wargod',
		level: 63,
		hp: 398,
		mp: 233,
		st: 59,
		ma: 27,
		vi: 54,
		ag: 41,
		lu: 29,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Silky',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Priestess',
		race: 'Fairy',
		level: 41,
		hp: 189,
		mp: 210,
		st: 19,
		ma: 40,
		vi: 23,
		ag: 29,
		lu: 34,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Ice'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Skadi',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Priestess',
		race: 'Lady',
		level: 67,
		hp: 320,
		mp: 345,
		st: 22,
		ma: 62,
		vi: 36,
		ag: 54,
		lu: 49,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Slime',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Chariot',
		race: 'Foul',
		level: 1,
		hp: 41,
		mp: 40,
		st: 5,
		ma: 4,
		vi: 6,
		ag: 3,
		lu: 4,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Sraosha',
		aliases: [],
		inherit: 'Light',
		arcana: 'Star',
		race: 'Herald',
		level: 77,
		hp: 399,
		mp: 407,
		st: 33,
		ma: 67,
		vi: 43,
		ag: 68,
		lu: 55,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Succubus',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Moon',
		race: 'Night',
		level: 38,
		hp: 165,
		mp: 197,
		st: 17,
		ma: 38,
		vi: 20,
		ag: 31,
		lu: 29,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Sudama',
		aliases: [],
		inherit: 'Force',
		arcana: 'Hermit',
		race: 'Jirae',
		level: 17,
		hp: 83,
		mp: 98,
		st: 12,
		ma: 16,
		vi: 14,
		ag: 16,
		lu: 14,
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
		weak: [
			'Fire',
			'Ice'
		],
		resist: [],
		null: [
			'Force'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Sui-Ki',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Moon',
		race: 'Brute',
		level: 56,
		hp: 328,
		mp: 227,
		st: 47,
		ma: 41,
		vi: 39,
		ag: 33,
		lu: 28,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Ice'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Sukuna-Hikona -P4-',
		aliases: [
			'Sukuna-Hikona'
		],
		inherit: 'Almighty',
		arcana: 'Fortune',
		race: 'Persona',
		level: 37,
		hp: 206,
		mp: 169,
		st: 28,
		ma: 30,
		vi: 26,
		ag: 26,
		lu: 26,
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
		repel: [],
		game: 'p4',
		user: 'Naoto Shirogane',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Sumeo-Okami',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Priestess',
		race: 'Persona',
		level: 15,
		hp: null,
		mp: null,
		st: 8,
		ma: 15,
		vi: 11,
		ag: 8,
		lu: 10,
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
		repel: [],
		game: 'p4',
		user: 'Yukiko Amagi',
		stage: 3,
		evoSkill: 'Maragibarion'
	},
	{
		name: 'Surt',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Magician',
		race: 'Tyrant',
		level: 62,
		hp: 388,
		mp: 233,
		st: 56,
		ma: 46,
		vi: 49,
		ag: 29,
		lu: 36,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [],
		drain: [
			'Fire'
		],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Susano-o',
		aliases: [],
		inherit: 'Wind',
		arcana: 'Magician',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		st: 5,
		ma: 3,
		vi: 3,
		ag: 5,
		lu: 4,
		learnset: [
			{
				name: 'Garu',
				level: 0
			},
			{
				name: 'Bash',
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
		repel: [],
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
		inherit: 'Fire',
		arcana: 'Sun',
		race: 'Avian',
		level: 43,
		hp: 188,
		mp: 219,
		st: 23,
		ma: 41,
		vi: 24,
		ag: 36,
		lu: 28,
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
		weak: [
			'Ice'
		],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Suzuka Gongen',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		st: 4,
		ma: 4,
		vi: 4,
		ag: 2,
		lu: 3,
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
				name: 'Counter -Persona-',
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
				name: 'God"s Hand',
				level: 70
			},
			{
				name: 'Agneyastra',
				level: 74
			}
		],
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
		repel: [],
		game: 'p4',
		user: 'Chie Satonaka',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Takehaya Susano-o',
		aliases: [],
		inherit: 'Wind',
		arcana: 'Magician',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		st: 5,
		ma: 3,
		vi: 3,
		ag: 5,
		lu: 4,
		learnset: [
			{
				name: 'Garu',
				level: 0
			},
			{
				name: 'Bash',
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
		repel: [],
		game: 'p4',
		user: 'Yosuke Hanamura',
		stage: 3,
		evoSkill: 'Youthful Wind'
	},
	{
		name: 'Takeji Zaiten',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Emperor',
		race: 'Persona',
		level: 25,
		hp: null,
		mp: null,
		st: 20,
		ma: 11,
		vi: 17,
		ag: 15,
		lu: 14,
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
		repel: [],
		game: 'p4',
		user: 'Kanji Tatsumi',
		stage: 3,
		evoSkill: 'The Man"s Way'
	},
	{
		name: 'Take-Mikazuchi',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Emperor',
		race: 'Persona',
		level: 25,
		hp: null,
		mp: null,
		st: 20,
		ma: 11,
		vi: 17,
		ag: 15,
		lu: 14,
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
		weak: [
			'Wind'
		],
		resist: [
			'Elec'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p4',
		user: 'Kanji Tatsumi',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Take-Minakata',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Hanged',
		race: 'Kunitsu',
		level: 19,
		hp: 107,
		mp: 98,
		st: 18,
		ma: 12,
		vi: 18,
		ag: 16,
		lu: 15,
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
		weak: [
			'Fire'
		],
		resist: [
			'Elec'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Tam Lin',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Faith',
		race: 'Genma',
		level: 27,
		hp: null,
		mp: null,
		st: 21,
		ma: 16,
		vi: 18,
		ag: 16,
		lu: 17,
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
		repel: [],
		game: 'p5'
	},
	{
		name: 'Thanatos',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Death',
		race: 'Persona',
		level: 65,
		hp: null,
		mp: null,
		st: 43,
		ma: 49,
		vi: 41,
		ag: 38,
		lu: 31,
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
		],
		game: 'p5',
		user: 'Margaret',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Thanatos Picaro',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Death',
		race: 'Picaro',
		level: 69,
		hp: null,
		mp: null,
		st: 45,
		ma: 51,
		vi: 43,
		ag: 40,
		lu: 35,
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
		],
		game: 'p5'
	},
	{
		name: 'Thor',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Chariot',
		race: 'Kishin',
		level: 66,
		hp: 399,
		mp: 272,
		st: 58,
		ma: 43,
		vi: 56,
		ag: 29,
		lu: 36,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Thoth',
		aliases: [],
		inherit: 'Light',
		arcana: 'Emperor',
		race: 'Deity',
		level: 33,
		hp: 144,
		mp: 241,
		st: 18,
		ma: 36,
		vi: 22,
		ag: 21,
		lu: 27,
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
		weak: [
			'Dark'
		],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Throne',
		aliases: [],
		inherit: 'Light',
		arcana: 'Justice',
		race: 'Divine',
		level: 64,
		hp: 327,
		mp: 313,
		st: 28,
		ma: 54,
		vi: 44,
		ag: 41,
		lu: 47,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Thunderbird',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Sun',
		race: 'Avian',
		level: 38,
		hp: 192,
		mp: 172,
		st: 27,
		ma: 32,
		vi: 18,
		ag: 36,
		lu: 21,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Titania',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Empress',
		race: 'Fairy',
		level: 57,
		hp: 262,
		mp: 395,
		st: 25,
		ma: 54,
		vi: 36,
		ag: 35,
		lu: 42,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Tomoe',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		st: 4,
		ma: 4,
		vi: 4,
		ag: 2,
		lu: 3,
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
				name: 'Counter -Persona-',
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
				name: 'God"s Hand',
				level: 70
			},
			{
				name: 'Agneyastra',
				level: 74
			}
		],
		weak: [
			'Fire'
		],
		resist: [
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p4',
		user: 'Chie Satonaka',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Triglav',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Chariot',
		race: 'Fury',
		level: 43,
		hp: null,
		mp: null,
		st: 33,
		ma: 23,
		vi: 27,
		ag: 32,
		lu: 21,
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
		weak: [
			'Elec'
		],
		resist: [
			'Phys'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p4'
	},
	{
		name: 'Trismegistus',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Magician',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 3,
		ma: 2,
		vi: 2,
		ag: 2,
		lu: 1,
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
				name: 'Counter -Persona-',
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
		weak: [
			'Wind'
		],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [],
		game: 'p3',
		user: 'Junpei Iori',
		stage: 2,
		evoSkill: 'Spring of Life'
	},
	{
		name: 'Trumpeter',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Judgement',
		race: 'Fiend',
		level: 73,
		hp: 398,
		mp: 402,
		st: 32,
		ma: 77,
		vi: 30,
		ag: 55,
		lu: 57,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Tsuchigumo',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Strength',
		race: 'Jirae',
		level: 13,
		hp: 101,
		mp: 83,
		st: 14,
		ma: 12,
		vi: 16,
		ag: 9,
		lu: 10,
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
		weak: [
			'Ice'
		],
		resist: [
			'Elec'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Tsukiyomi',
		aliases: [
			'Tsukuyomi'
		],
		inherit: 'Almighty',
		arcana: 'Moon',
		race: 'Persona',
		level: 50,
		hp: null,
		mp: null,
		st: 38,
		ma: 32,
		vi: 33,
		ag: 37,
		lu: 17,
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
		],
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
		inherit: 'Almighty',
		arcana: 'Moon',
		race: 'Picaro',
		level: 55,
		hp: null,
		mp: null,
		st: 41,
		ma: 35,
		vi: 36,
		ag: 40,
		lu: 20,
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
		],
		game: 'p5'
	},
	{
		name: 'Turdak',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Judgement',
		race: 'Jaki',
		level: 11,
		hp: 80,
		mp: 70,
		st: 15,
		ma: 7,
		vi: 13,
		ag: 10,
		lu: 8,
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
		weak: [
			'Force'
		],
		resist: [
			'Dark'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Tzitzimitl',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Priestess',
		race: 'Tyrant',
		level: 70,
		hp: null,
		mp: null,
		st: 46,
		ma: 56,
		vi: 41,
		ag: 39,
		lu: 35,
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
		],
		game: 'p4'
	},
	{
		name: 'Undine',
		aliases: [],
		inherit: 'Recovery',
		arcana: 'Lovers',
		race: 'Element',
		level: 33,
		hp: null,
		mp: null,
		st: 21,
		ma: 27,
		vi: 13,
		ag: 26,
		lu: 19,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [],
		drain: [
			'Ice'
		],
		repel: [],
		game: 'p4'
	},
	{
		name: 'Unicorn',
		aliases: [],
		inherit: 'Light',
		arcana: 'Faith',
		race: 'Holy',
		level: 39,
		hp: null,
		mp: null,
		st: 20,
		ma: 27,
		vi: 25,
		ag: 28,
		lu: 24,
		learnset: [
			{
				name: 'Assault Dive',
				level: 0
			},
			{
				name: 'Mahama',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 41
			},
			{
				name: 'Swift Strike',
				level: 42
			},
			{
				name: 'Hamabarion',
				level: 43
			},
			{
				name: 'Hamaon',
				level: 44
			}
		],
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
		repel: [],
		game: 'p5'
	},
	{
		name: 'Uriel',
		aliases: [],
		inherit: 'Fire',
		arcana: 'Justice',
		race: 'Herald',
		level: 82,
		hp: 516,
		mp: 371,
		st: 66,
		ma: 64,
		vi: 59,
		ag: 57,
		lu: 45,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Valjean',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Apostle',
		race: 'Persona',
		level: 40,
		hp: null,
		mp: null,
		st: 34,
		ma: 26,
		vi: 32,
		ag: 25,
		lu: 22,
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
		weak: [],
		resist: [],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Zenkichi Hasegawa',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Valkyrie',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Strength',
		race: 'Yoma',
		level: 40,
		hp: 222,
		mp: 148,
		st: 42,
		ma: 18,
		vi: 32,
		ag: 26,
		lu: 24,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [
			'Light'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Vanadis',
		aliases: [],
		inherit: 'Light',
		arcana: 'Faith',
		race: 'Persona',
		level: 75,
		hp: null,
		mp: null,
		st: 55,
		ma: 46,
		vi: 36,
		ag: 51,
		lu: 44,
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
		weak: [
			'Dark'
		],
		resist: [],
		null: [
			'Light'
		],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Sumire Yoshizawa',
		stage: 2,
		evoSkill: 'Evade Dark'
	},
	{
		name: 'Vasuki',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Star',
		race: 'Drake',
		level: 74,
		hp: 424,
		mp: 335,
		st: 43,
		ma: 53,
		vi: 43,
		ag: 47,
		lu: 63,
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
		],
		game: 'smt5'
	},
	{
		name: 'Vishnu',
		aliases: [],
		inherit: 'Dark',
		arcana: 'Fool',
		race: 'Deity',
		level: 87,
		hp: 452,
		mp: 523,
		st: 46,
		ma: 90,
		vi: 57,
		ag: 67,
		lu: 71,
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
		],
		game: 'smt5'
	},
	{
		name: 'Vohu Manah',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Councillor',
		race: 'Divine',
		level: 80,
		hp: null,
		mp: null,
		st: 46,
		ma: 59,
		vi: 45,
		ag: 56,
		lu: 41,
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
		repel: [],
		game: 'p5'
	},
	{
		name: 'White Rider',
		aliases: [],
		inherit: 'Light',
		arcana: 'Chariot',
		race: 'Fiend',
		level: 43,
		hp: 239,
		mp: 195,
		st: 25,
		ma: 40,
		vi: 31,
		ag: 29,
		lu: 34,
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
		],
		game: 'smt5'
	},
	{
		name: 'William',
		aliases: [],
		inherit: 'Elec',
		arcana: 'Chariot',
		race: 'Persona',
		level: 4,
		hp: null,
		mp: null,
		st: 5,
		ma: 3,
		vi: 5,
		ag: 3,
		lu: 3,
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
				name: 'God"s Hand',
				level: 75
			}
		],
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
		repel: [],
		game: 'p5',
		user: 'Ryuji Sakamoto',
		stage: 3,
		evoSkill: 'Fighting Spirit'
	},
	{
		name: 'Yaksini',
		aliases: [
			'Yakshini'
		],
		inherit: 'Force',
		arcana: 'Empress',
		race: 'Femme',
		level: 30,
		hp: 172,
		mp: 117,
		st: 31,
		ma: 14,
		vi: 25,
		ag: 24,
		lu: 17,
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
		weak: [
			'Elec'
		],
		resist: [],
		null: [
			'Force'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Yamata-no-Orochi',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Judgement',
		race: 'Snake',
		level: 72,
		hp: 468,
		mp: 255,
		st: 66,
		ma: 26,
		vi: 72,
		ag: 33,
		lu: 40,
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
		weak: [
			'Elec'
		],
		resist: [],
		null: [
			'Fire',
			'Ice'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Yamato Sumeragi',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fortune',
		race: 'Persona',
		level: 55,
		hp: null,
		mp: null,
		st: 32,
		ma: 38,
		vi: 32,
		ag: 40,
		lu: 31,
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
		weak: [],
		resist: [],
		null: [
			'Fire'
		],
		drain: [],
		repel: [
			'Light',
			'Dark'
		],
		game: 'p4',
		user: 'Naoto Shirogane',
		stage: 3,
		evoSkill: 'Shield of Justice'
	},
	{
		name: 'Yamato-Takeru',
		aliases: [],
		inherit: 'Almighty',
		arcana: 'Fortune',
		race: 'Persona',
		level: 55,
		hp: null,
		mp: null,
		st: 32,
		ma: 38,
		vi: 32,
		ag: 40,
		lu: 31,
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
		weak: [],
		resist: [
			'Fire'
		],
		null: [
			'Light',
			'Dark'
		],
		drain: [],
		repel: [],
		game: 'p4',
		user: 'Naoto Shirogane',
		stage: 2,
		evoSkill: null
	},
	{
		name: 'Yatagarasu',
		aliases: [],
		inherit: 'Light',
		arcana: 'Councillor',
		race: 'Avian',
		level: 54,
		hp: 258,
		mp: 296,
		st: 31,
		ma: 42,
		vi: 33,
		ag: 44,
		lu: 39,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Yomotsu-Shikome',
		aliases: [],
		inherit: 'Ailment',
		arcana: 'Fool',
		race: 'Femme',
		level: 2,
		hp: null,
		mp: null,
		st: 2,
		ma: 7,
		vi: 7,
		ag: 11,
		lu: 6,
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
		weak: [
			'Fire'
		],
		resist: [
			'Ice'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p4'
	},
	{
		name: 'Yoshitsune',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Tower',
		race: 'Wargod',
		level: 45,
		hp: 253,
		mp: 200,
		st: 47,
		ma: 22,
		vi: 25,
		ag: 46,
		lu: 31,
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
		weak: [
			'Dark'
		],
		resist: [
			'Phys'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Yurlungur',
		aliases: [],
		inherit: 'Ice',
		arcana: 'Sun',
		race: 'Snake',
		level: 50,
		hp: 255,
		mp: 212,
		st: 34,
		ma: 51,
		vi: 35,
		ag: 23,
		lu: 27,
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
		weak: [
			'Fire'
		],
		resist: [],
		null: [
			'Elec'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Zaou-Gongen',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Strength',
		race: 'Fury',
		level: 72,
		hp: 444,
		mp: 325,
		st: 61,
		ma: 57,
		vi: 50,
		ag: 35,
		lu: 37,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Zeus',
		aliases: [],
		inherit: 'Elec',
		arcana: null,
		race: 'Deity',
		level: 86,
		hp: 520,
		mp: 448,
		st: 73,
		ma: 62,
		vi: 56,
		ag: 82,
		lu: 54,
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
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Zhen',
		aliases: [],
		inherit: 'Ailment',
		arcana: null,
		race: 'Raptor',
		level: 14,
		hp: 73,
		mp: 97,
		st: 15,
		ma: 9,
		vi: 11,
		ag: 14,
		lu: 16,
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
		weak: [
			'Fire'
		],
		resist: [
			'Dark'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'smt5'
	},
	{
		name: 'Zorro',
		aliases: [],
		inherit: 'Wind',
		arcana: 'Magician',
		race: 'Persona',
		level: 1,
		hp: null,
		mp: null,
		st: 2,
		ma: 3,
		vi: 1,
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
			'Wind'
		],
		null: [],
		drain: [],
		repel: [],
		game: 'p5',
		user: 'Morgana',
		stage: 1,
		evoSkill: null
	},
	{
		name: 'Zouchouten',
		aliases: [],
		inherit: 'Phys',
		arcana: 'Strength',
		race: 'Kishin',
		level: 36,
		hp: 213,
		mp: 150,
		st: 29,
		ma: 24,
		vi: 27,
		ag: 22,
		lu: 26,
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
		weak: [
			'Force'
		],
		resist: [],
		null: [
			'Light'
		],
		drain: [],
		repel: [],
		game: 'smt5'
	}
];

export default demons;