import type { DemonData, PersonaData } from './dataTypes';

const demonData: readonly (DemonData<true> | DemonData<false> | PersonaData)[] = Object.freeze([
	{
		name: 'Abaddon',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'The king of the abyss that appears in the Book of Revelation of the New Testament.\nHe controls locusts and plagues and leads the seventh order of demons who are set to appear at the sounding of the fifth trumpet on Judgment Day, when it is said that will bring horde of locusts to make the people suffer. His name in Hebrew means "destroyer" or "endless pit". It is thought that his origins lie in deification of the natural disasters caused by locust swarms.'
	},
	{
		name: 'Abdiel',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A high-ranking angel that is wholly devoted to God. The name Abdiel carries the meaning of "slave to God," which supposedly originates from the Arabic word for "slave".\nOf the angels who followed Satan, Abdiel was the only one to reject the temptation to rebel against God, and instead received God\'s praises for returning to His side. Abdiel then led the angels to fight against Lucifer.'
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'A high-ranking angel that is devoted to God. The name carries the meaning of "slave to God," which supposedly originates from the Arabic word for "slave".\nOf the angels who followed Satan, Abdiel was the only one to reject the temptation to rebel against God, and instead received praise for returning to His side. Abdiel took this form after resolving to protect the order that God created and thus fell to darkness to obtain power greater than that of the angels.'
	},
	{
		name: 'Adramelech',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Chancellor of Hell and supervisor of Satan\'s wardrobe. He has the body of a mule, though he may also sometimes appear as a peacock.\nHe was worshipped by the Assyrians, who occasionally offered him children as sacrifice.'
	},
	{
		name: 'Aeros',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A wind elemental; one of the four elements in energy form.\nIt is said to be a fusion of "moist" and "heat" essences, forming the basis for an exponential energy increase.'
	},
	{
		name: 'Agathion',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'A familiar with no physical body that only appears during the day.\nThere is no consensus on the appearance of an Agathion: it can resemble a human, bird, or animal. They are usually sealed away in bottles or pots but can also be sealed in rings or talismans. The term Agathion is also used as a general term for familiars.'
	},
	{
		name: 'Agnes',
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
		alignment: null,
		lore: 'Another name of Johanna, the female pope of the middle ages. Posing as a man, her wits and ability helped her climb the ranks. Her story shook the Catholic Church to its core.',
		user: 'Makoto Niijima',
		stage: 3,
		evoSkillName: 'Checkmate'
	},
	{
		name: 'Aitvaras',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A fairy in Lithuanian mythology.\nIndoors, it takes the form of a black cat or rooster. Outdoors, it takes the form of a small dragon or a snake with a burning tail. The Aitvaras makes the home it inhabits rich by stealing from its neighbors. It is said that it typically demands an omelette as compensation and is difficult to chase away once it\'s settled into a home. It can, however, be exterminated by shining it with the flame of a candle purified by the church.'
	},
	{
		name: 'Al Azif',
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
				name: 'Subrecover MP',
				level: 49
			},
			{
				name: 'Subrecover HP EX',
				level: 58
			},
			{
				name: 'Subrecover MP EX',
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
		alignment: null,
		lore: 'The original name of the Necronomicon, a tome of the Cthulhu Mythos\'s mysteries. Said to have been authored by Abdul Alhazred, a poet and devotee of Cthulhu known as the \'mad Arab.\'',
		user: 'Futaba Sakura',
		stage: 3,
		evoSkillName: 'Ultimate Support'
	},
	{
		name: 'Alice',
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
		game: 'smt5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'A mysterious spirit that takes the form of a blonde girl. Despite her innocent appearance, she possesses immeasurable magical strength.\nSome say she is the ghost of an English girl who died a tragic death. Others say she is merely an apparition born from someone\'s imagination.'
	},
	{
		name: 'Alilat',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The Arabian mother goddess also known as Allat.\nShe was thought to reside in the Black Stone at the Kaaba, where and her son, Dusura, were worshipped by desert nomads.'
	},
	{
		name: 'Alraune',
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'A cursed Norse spirit in the form of a beautiful woman, known to bloom from the blood of hanged men. She was believed to tell secrets if properly tended to.'
	},
	{
		name: 'Amanozako',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A Japanese goddess commonly thought to be the ancestor of the tengu and amanojaku.\nThe famed warrior Susano-o once allowed his tempestuous spirit to build up to such an intense degree, he vomited her out as a result. Similarly to Susano-o, she has a wild personality and tends to go on a rampage if she doesn\'t get her way. It is said that she can hurl even the most powerful gods a great distance, and that her fangs can mangle the very sharpest of blades. Like amanojaku, she is prone to doing the exact opposite of what is expected.'
	},
	{
		name: 'Amaterasu',
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
		alignment: null,
		lore: null,
		user: 'Yukiko Amagi',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Ame-no-Uzume',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The goddess of entertainment in Japanese lore.\nShe governs many sacred dances and is most famous for the provocative dance she used to lure out Amaterasu, who had barricaded herself inside a cave. She later became Sarutahiko\'s wife.'
	},
	{
		name: 'Amon',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of Solomon\'s Ars Goetia.\nHe is the seventh spirit of Goetia and the Grand Marquis of Hell. Amon is depicted in several different forms, sometimes appearing as a wolf with a serpent\'s tail and other times appearing as having the head of an owl, the torso of a wolf and the tail of a snake sometimes replacing his hind legs altogether. It is said that he bestows knowledge of the past and the future. He is also incredibly loyal, having led his army to assist Satan when Satan rebelled against God.'
	},
	{
		name: 'Anahita',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A Zoroastrian goddess whose name means "pure."\nWhile primarily known as a beautiful deity who rules over rivers and water, she is also the goddess of health, fertility, safe delivery, production of livestock, harvest, wealth and expansion of land. She is often portrayed as an elegant virgin wearing a crown decorated with numerous stars in addition to a golden necklace and a golden cape, and is typically shown holding a water jug. She is also a brave god of war astride a four-wheeled chariot, toppling demons and tyrants alike. Both her allies and her enemies have been said to have offered their prayers to her.'
	},
	{
		name: 'Ananta',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The 1,000-headed serpent of Hindu legend, Ananta is Sanskrit for "infinite."\nVishnu slept atop him before waking up to create the universe.'
	},
	{
		name: 'Anat',
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
		alignment: null,
		lore: 'The daughter of Ugaritic\'s highest god El. She is the goddess of fertility, as well as hunting and war. Her characteristics are the characteristics of the seasons in Canaan.',
		user: 'Makoto Niijima',
		stage: 2,
		evoSkillName: 'Evade Psy'
	},
	{
		name: 'Andras',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nThe great Marquis of Hell, he appears where there is battle to stoke the hatred within soldiers. He helps defeat the enemies of those who summon him.'
	},
	{
		name: 'Angel',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'Ninth of the nine orders of angels.\nThey are closest in nature to humans. They watch over individuals and offer warning to those who stray from the path.'
	},
	{
		name: 'Anubis',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The jackal-headed god of the dead and embalming from Egyptian myth.\nHe weighs the hearts of the dead to determine their final destination. He is also said to govern the technique of mummification'
	},
	{
		name: 'Anzu',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'An evil deity of Mesopotamian folklore with an eagle\'s body and lion\'s head.\nWhile the god Enlil purified himself, Anzu stole the Tablet of Destinies from him in an attempt to become the chief god.'
	},
	{
		name: 'Apsaras',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'Water spirits in Hindu lore.\nThey are beautiful young women who dance for the gods. They also guide heroes who fall in battle to paradise.'
	},
	{
		name: 'Aquans',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A water elemental; one of the four elements in energy form.\nAccording to Aristotle, it is composed of both "moist" and "cold" essences.'
	},
	{
		name: 'Arahabaki',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A major deity in ancient Japanese mythology. Clay dolls were often sculpted in its image.\nHowever, because this god was known to be worshipped by a rebel, the dolls later came to be considered symbols of defiance.'
	},
	{
		name: 'Ara Mitama',
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
		game: 'p5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'One of the four great aspects of Shinto thought, it has the power to grant wildness and ferocity.\nIt is said to aid in one\'s bravery, growth, and endeavors, though it can potentially lead one in a negative direction.'
	},
	{
		name: 'Archangel',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'Eighth of the nine orders of angels.\nThey are responsible for ministering to humans and delivering messages. As warriors of the heavens, they lead the armies of heaven against the forces of darkness.'
	},
	{
		name: 'Ardha',
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
		game: 'p5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A god of dual gender whose appearance is half that of the destroyer, Shiva, and half his wife, Parvati. Ardha is the ideal figure of Shaktism, the perfect god.'
	},
	{
		name: 'Ares',
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The god of war in Greek myth. Other gods despised him for his cruel and violent nature. Opposed Athena, who represented strategic warfare.'
	},
	{
		name: 'Ariadne',
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
		alignment: null,
		lore: 'A Persona of another story. She is the daughter of Minos, the king of Crete. She helped Theseus defeat the Minotaur and gave him a ball of yarn so he could escape the labyrinth.',
		user: 'Labrys',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Ariadne Picaro',
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. She is the daughter of Minos. She helped Theseus defeat the Minoataur and gave him a ball of yarn so he could escape the Labyrinth.'
	},
	{
		name: 'Arioch',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'The fallen angel of Israel and the demon of vengeance.\nHis name means "ferocious lion" and he is said to aid in vengeance of those who seek his service. During his time as an angel of God, he was recognized as the guardian angel of the saint Enoch. It is said that his name originally belonged to one in either the Book of Genesis or the Book of Daniel, only to become associated with the demon thereafter.'
	},
	{
		name: 'Arsène',
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
		alignment: null,
		lore: 'A being based off the main character of Maurice Leblanc\'s novels, Arsène Lupin. He appears everywhere and is a master of disguise. He is known to help law-abiding citizens.',
		user: 'P5 Protagonist',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Artemis',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The Greek goddess of hunting and chastity. She was often identified with the moon goddess Selene and was therefore also worshipped as a moon goddess herself.\nLike her twin brother, Apollo, her association with archery granted her the title of "far-shooter" in addition to being recognized as a bringer of plague and death. This is depicted in myth, in which she is deceived by Apollo and shoots her beloved Orion.'
	},
	{
		name: 'Artemisia',
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
		alignment: null,
		lore: null,
		user: 'Mitsuru Kirijo',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Astarte',
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
		alignment: null,
		lore: 'A Middle Eastern goddess of fertilty. Many scriptures note her folklore, and there is even a mention of her as the "Queen of Heaven" in the Bible.',
		user: 'Haru Okumura',
		stage: 2,
		evoSkillName: 'Evade Nuke'
	},
	{
		name: 'Asterius',
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
		alignment: null,
		lore: 'A Persona of another story. Due to a curse on his mother Pasiphae, he was born a bull-headed monster. Locked away in the labyrinth as the Minotaur, he wielded a double-sided axe.',
		user: 'Shadow Labrys',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Asterius Picaro',
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. Son of Pasiphae, he was born a bull-headed monster. Locked away in the labyrinth as the Minotaur, he wielded a double-sided axe.'
	},
	{
		name: 'Asura',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A violent group of demons in Hindu lore.\nThey were very powerful and caused the gods great trouble. They are a fiercely strict group and attack anyone who runs counter to their ideals. They were originally gods of light worshipped in Persia. The Zoroastrian god Ahura Mazda was one of them.'
	},
	{
		name: 'Atavaka',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'One of the eight Yasha-o.\nHis domain is war and protection. Originally known as a wicked devourer of children, he later became one of the greatest of the Wisdom Kings after receiving the Buddha\'s enlightenment.'
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
		alignment: null,
		lore: 'A Persona of another story. Daughter of Zeus, and a goddess of great martial ability. She fights to protect her land or her family, but never for sheer bloodlust. Her symbol is the olive tree.',
		user: 'Aigis',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Athena Picaro',
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. Daughter of Zeus, and a goddess of great martial ability. She fights to protect her land or her family, but never for sheer bloodlust.'
	},
	{
		name: 'Atropos',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the three Moirae Sisters in Greek mythology.\nShe cuts the life threads of those whose time has come.'
	},
	{
		name: 'Attis',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A Phrygian god who symbolizes life, death, and revival.\nHe rejected Cybele\'s love and was driven mad, dying shortly after castrating himself. Cybele then resurrected him.'
	},
	{
		name: 'Azumi',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A water deity of the Azumi, a Japanese seafaring tribe. As such, it can freely control water.\nThe three gods born from Izanagi after he returned from Yomi are said to be the Azumi tribe\'s ancestors.'
	},
	{
		name: 'Baal',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The chief Semitic god.\nBearing a name that means "Lord" or "owner," he was revered as a god of fertility in addition to being known as the god of Canaan and both brother and consort to the goddess Anat. Many demons, such as Bael, Beelzebub, Belphegor and Berith are believed to be derivations of Baal. There were even instances of him being worshipped in the very same temples as Yahweh (YHVH) in times long since passed.'
	},
	{
		name: 'Baal Zebul',
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'Demon whose name means "Lord of the High Place." Possibly derived from the Syrian deity Ba\'al, he presides over death and the spirits of the deceased. Many worshipped him because of this power.'
	},
	{
		name: 'Baphomet',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'An idol commonly worshipped by the Knights Templar.\nIt is a demon with the head of a goat.\nThis figure later became the idol of worship for witches as well.'
	},
	{
		name: 'Barong',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'Said to live in the forests of Bali, it was an evil god whom the people sacrificed and made their guardian.\nNow a symbol of good, it is fated to war with Rangda, the avatar of evil, for all eternity.'
	},
	{
		name: 'Basilisk',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A dark dragon from Northern Africa marked by wings and a crested crown.\nIts name means "king of snakes," and both its breath and gaze are so toxic that they instantly kill any human or animal unfortunate enough to be subjected to them.'
	},
	{
		name: 'Beelzebub',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'Lord of the Flies and the prince of Hell.\nHe is established as a high-ranking demon in the Bible and his multitude of flies are said to carry souls down to the abyss. He has been speculated to be a bastardization of the Canaanite god Baal.'
	},
	{
		name: 'Belial',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of Goetia invoked by King Solomon.\nHe leads 50 legions of demons as their chief and is said to appear before his conjurer as two beautiful angels in a chariot of fire. His name means "worthless," and he is known to be exceptionally cunning, having caused the fall of Sodom and Gomorrah in addition to persecuting Jesus Christ.'
	},
	{
		name: 'Belphegor',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'Demonic governor of the deadly sin of sloth who also excels at both invention and discovery.\nIt is rumored that he may be the disgraced form of Baal Peor, Syrian god of abundant crops.'
	},
	{
		name: 'Berith',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of Goetia.\nKnown as the Duke of Hell, he rides a gigantic horse and burns those without manners.'
	},
	{
		name: 'Bicorn',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'An evil creature that looks like a horse with two curving horns.\nIt is said to be the opposite of a Chichevache, but theory speculates that it is actually a mistranslation of "Re\'em," a two-horned beast that appears in the Old Testament.'
	},
	{
		name: 'Bishamonten',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The strongest of the Four Heavenly Kings, also known as Tamonten, and in Buddhist mythology, Vaishravana.\nHe protects the North and is recognized as the god of war. Similarly to his fellow kings, he is often depicted as a fierce warrior, clad in armor and wielding a great spear. Bishamonten is also well known as a bringer of fortune, being one of the Shichi Fukujin, the seven gods of fortune.'
	},
	{
		name: 'Black Frost',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A Jack Frost that grew powerful and evil.\nThese are the evolved form of the fairly peaceful winter fairy and mark the transformation from small prankster into massively powerful entity.'
	},
	{
		name: 'Black Ooze',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'An amoeba-like monster that attacks and eats people.\nSupposedly, it is actually a demon that failed to take form and now roams in search of Magatsushi. It is said that when a Slime\'s ability to absorb Magatsuhi goes out of control, it transforms into a Black Ooze.'
	},
	{
		name: 'Black Rider',
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
		game: 'smt5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides a black horse and carries scales, indicating the terrible famine he is to bring. He also has been given the authority to end the lives of those who are suffering.'
	},
	{
		name: 'Bugs',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'A type of goblin from Welsh folklore that eats children who don\'t listen to their parents.\nThey are said to look like humans covered head to toe with hair, and are recognized as an iconic monster that appears at nighttime. They are often spoken of by mothers wishing to discipline their children as noted in the popular phrase, "For naughty kids who disobey, the Bugs will come and surely prey."'
	},
	{
		name: 'Byakhee',
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
		game: 'p5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'A malformed, winged servant of the Cthulhu Mythos\' cosmic god Hastur. They can fly even in the vacuum of space and it\'s said that if you can summon one, it will carry you wherever you wish.'
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the west, the season of autumn, and the element of metal. It is believed to be the king of all beasts.'
	},
	{
		name: 'Caesar',
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
		alignment: null,
		lore: null,
		user: 'Akihiko Sanada',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Cait Sith',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A fae beast from the Scottish highlands whose kingdoms can be found in tree hollows or abandoned houses.\nDog-sized, they have white tufts or hair on their chest, green, intelligent eyes, and are even capable of understanding the human language. Though they usually stick to their territory, some have been known to live with humans as normal black cats. They are generally peaceful, but should a human treat one poorly, they will forcibly take that human to their kingdom.'
	},
	{
		name: 'Camael',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'The angel of god in Jewish mythology. He rules over the angels known as the Powers, and his name Camael means "one who sees god."\nHe is also the commander of the angels of destruction, punishment, and death in addition to being the ruler of Mars.'
	},
	{
		name: 'Captain Kidd',
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
		alignment: null,
		lore: 'A 17th century privateer who eventually became a world-renowned pirate. At his execution, he declared he had a hidden treasure, leaving behind many legends.',
		user: 'Ryuji Sakamoto',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Carmen',
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
		alignment: null,
		lore: 'A gypsy thief from the novel by Merimee, which became famous through the opera by Bizet. She is a femme fatale who is beautiful but very capricious.',
		user: 'Ann Takamaki',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Castor',
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
		alignment: null,
		lore: null,
		user: 'Shinjiro Aragaki',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Célestine',
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
		alignment: null,
		lore: 'A beautiful actress who performed as Carmen in the opera named for the role. So tempestuous and outspoken was she that it\'s said the main role was rewritten to better suit her.',
		user: 'Ann Takamaki',
		stage: 3,
		evoSkillName: 'High Energy'
	},
	{
		name: 'Cendrillon',
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
		alignment: null,
		lore: 'The French name of the titular heroine of Cinderella, an oft-retold tale of great renown in which a mistreated waif gains luxury, beauty, and a single night\'s dance with a prince through the power of magic.',
		user: 'Sumire Yoshizawa',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Cerberus',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The guardian hound of Hades in Greek lore.\nIt traditionally has three heads and a snake\'s tail. It was born from Typhon, the giant of wind, and Echidna, the mother of monsters. It is also the older brother of Orthrus.'
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
		alignment: null,
		lore: null,
		user: 'Koromaru',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Chernobog',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The god of night, evil and death in Slavic lore. His name means "black god".\nLike many other gods of the dead, he is said to live below the earth. His counterpart is Belobog, the "white god." Despite being feared, he was also worshipped. The curse, "May the black god end you," is still used in Ukraine to this day.'
	},
	{
		name: 'Chimera',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A monster that is part lion, part goat, and part snake.\nOriginally a symbol representing the seasons, it became a violent monster adopted into Greek mythology. Its father is Typhon and its mother Echidna.'
	},
	{
		name: 'Chi You',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A Chinese god of war, often depicted with a bull\'s head, six or eight arms and four eyes.\nHe invented many weapons and commanded an invincible army. Seeking control of the land, he fought with Huang Di and though he was winning, Huang Di invented something of his own, the South-Pointing Chariot and promptly defeated him. Huang Di then had Chi You\'s head buried thousands of li apart from his body.'
	},
	{
		name: 'Choronzon',
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
		game: 'p5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Law'
		},
		lore: 'A demon summoned by a sorcerer named Crowley at the beginning of the 20th century. He prevents those from attempting to reach enlightenment.'
	},
	{
		name: 'Cironnup',
		aliases: [
			'Chironnupu'
		],
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: '"Fox" in the Ainu tongue. Though "Sumari" is another word for "fox," chironnupu refers to "those who we kill" — which is to say, the various small-to-medium-sized Canidae.\nIt is also a divine beast that alerts people to forthcoming disasters by howling loudly from the mountains.'
	},
	{
		name: 'Cleopatra',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'More specifically, Cleopatra VII. Her name means "glory of the father" in Greek.\nShe is known as one of the greatest beauties ever to live, having charmed many with her musical voice and conversation skills. It is said that all of history would have unfolded differently had even her nose been longer or shorter.'
	},
	{
		name: 'Clotho',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the three Moirae Sisters in Greek mythology.\nShe is the spinner of the threads of fate.'
	},
	{
		name: 'Crystal Skull',
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
		game: 'p5',
		alignment: null,
		lore: 'An ancient Out-Of-Place-Artifact found in Central and South America. It is said that if you collect 13 of them in one spot, the truth of the universe will be revealed.'
	},
	{
		name: 'Cu Chulainn',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A gallant Celtic hero and son of the sun god Lugh.\nHe is said to have beaten an army singlehandedly. He was cursed to die after spurning the war goddess Morrighan and was impaled on his own mighty spear, Gae Bolg.'
	},
	{
		name: 'Cu Sith',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A dog fairy in Scottish folklore. Its main duties are to transport fairies and be a watchdog. It can transfix a target it\'s chasing by barking three times.'
	},
	{
		name: 'Cybele',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Mother goddess of nature.\nA temple of her was created atop a mountain in Phrygia, where she was worshipped. She ruled over beasts and was said to be served by lions. She later became a goddess passionately worshipped in Rome.'
	},
	{
		name: 'Daemon',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A low-ranking class of spirits. While the name may conjure up familiar images of "demons" due to Christianity\'s influence, daemons were not strictly associated with good or evil and simply thought to be lesser supernatural beings, sometimes acting as tutelary spirits that guided the souls of men.\nWhat might be considered a demon today would\'ve been called a "cacodaemon" in ancient Greece — that is, an evil spirit. In contrast, their benevolent counterparts were known as "agathodaemons."'
	},
	{
		name: 'Daisoujou',
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
		game: 'smt5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'A monk who died while fasting for the sake of humanity. Because of his intense spiritual power, his body continues to exist without rotting.\nIt is said that on the day of salvation, he will appear in front of humankind once again.'
	},
	{
		name: 'Dakini',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Hindu deities of passion and relations. They are Kali\'s attendants.\nThey eat human flesh and gather at graveyards and crematories each night. Their name means "sky dancer."'
	},
	{
		name: 'Danu',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The mother goddess of Celtic mythology. She is the mother of the Tuatha De Danann, a race of gods and also the world itself, having given birth to all life.\nDanu\'s large body is said to be lying down on earth to this day. The Munster region in Ireland, which is said to be especially blessed by her.'
	},
	{
		name: 'Decarabia',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nHe comes in the shape of a star and has vast knowledge of herbs and jewels. He can also control birds at will.'
	},
	{
		name: 'Demeter',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A goddess from Greek mythology. Her name means "Mother Earth" in ancient Greek.\nShe is the sister of Zeus, goddess of fertility and is said to be the one who taught humanity the ways of agriculture. With the advancement of civilization, laws were put into place and she was given another name, "Demeter Thesmophoros".'
	},
	{
		name: 'Diego',
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
		alignment: null,
		lore: 'The true name of California\'s masked swordsman of justice, who fought corrupt officials during the era of Spanish rule. Despite being marked as a thief, he fought for the weak as a true gentleman.',
		user: 'Morgana',
		stage: 3,
		evoSkillName: 'Miracle Rush'
	},
	{
		name: 'Dionysus',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The Greek god of wine and theater. He had two births.\nMyth tells that Zeus took the premature Dionysus from his dying mother, Semele, and allowed him to mature inside his thigh so that the underdeveloped god might have a proper birth.'
	},
	{
		name: 'Dis',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'A spiritual attendant to humans in Norse lore. She is known as a goddess of both farming and war, though some see her as a low-ranking servant of the valkyries.'
	},
	{
		name: 'Dominion',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'The fourth of the nine orders of angels. Their name carries the meaning of "governance," and it is their duty to oversee the other angels.\nIt is said that their work is the embodiment of God\'s will, and that they wish for this governance to spread throughout the cosmos.'
	},
	{
		name: 'Eligor',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nHe takes the appearance of a knight and has the power to see things to come. He also possesses great knowledge of many wars.'
	},
	{
		name: 'Ella',
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
		alignment: null,
		lore: 'The true name of Cinderella\'s heroine. "Cinder Ella" was a derisive nickname, born from her hard work always leaving her dusty and sooty. After marrying her prince, she became "Princess Ella."',
		user: 'Sumire Yoshizawa',
		stage: 3,
		evoSkillName: 'Masquerade'
	},
	{
		name: 'Emperor\'s Amulet',
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
		game: 'p5',
		alignment: null,
		lore: 'Also known as Charlemagne\'s talisman, it is said to make its owner an emperor. In between the two gems is a piece of Jesus\' cross and a hair of the Virgin Mary.'
	},
	{
		name: 'Erthys',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'An earth elemental; one of the four elements in energy form.\nIt is said to be composed of "dry" and "cold" essences, which are known to be the basic components of destruction.'
	},
	{
		name: 'Fafnir',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'An evil dragon of Norse lore, it was vanquished by the hero Siegfried.\nAccording to the Volsunga saga, it was extremely venomous, had legs like snakes, and shook the ground with every step.'
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'The legendary bird of Chinese myth, said to appear only in times of peace.\nIt is the ruler of all birds. When it dies, birds across the land chirp with sadness.'
	},
	{
		name: 'Fionn mac Cumhaill',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The leader of the Fianna, warriors who protected High King Cormac of Ireland. He was born as Deimne, but, due to his blond hair and white skin, he soon came to be called "Fionn," a name meaning "golden hair."\nWhen training under the druid, Finn Eces, he was ordered to cook the Salmon of Knowledge, and upon licking some of the salmon\'s fat from his thumb, he gained its knowledge. From that point on, it is said that Fionn could tap this knowledge any time he licked his thumb.'
	},
	{
		name: 'Flaemis',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A fire elemental; one of the four elements in energy form.\nIt is said to be composed of both "dry" and "heat" essences. The ancient Greek concepts of the four basic elements significantly influenced early astrology.'
	},
	{
		name: 'Flauros',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nHe appears as a leopard and can see the past and future. He can control fire, which he uses to burn his adversaries to death.'
	},
	{
		name: 'Forneus',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nHe appears as a great sea monster and is skilled in many languages in addition to being a master of rhetoric.'
	},
	{
		name: 'Fortuna',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The Roman goddess of luck, she spins the Wheel of Fortune and is believed to have originally been a fertility goddess. Her Greek counterpart is Tyche.'
	},
	{
		name: 'Futsunushi',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The Nihonshoki sword deity who pacified Ashihara-no-Nakatasukuni.\nHis name comes from "futsu," the fashion in which things are cut, and "nushi," a term meaning, "nature as a god."'
	},
	{
		name: 'Fuu-Ki',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, it sends hurricanes to blow away its enemies.\nSome say that Fuu-Ki is the original ninja.'
	},
	{
		name: 'Gabriel',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the four major angels. The name Gabriel means "God is my strength."\nActing as a messenger for God, Gabriel is the one who informed the virgin Mary of her pregnancy. Though often depicted with a feminine face, there are various interpretations suggesting Gabriel is not androgynous but is in fact a woman.'
	},
	{
		name: 'Ganesha',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The elephant-headed god in Hindu mythology.\nHe was originally created out of dirt by Parvati to prevent anyone from watching her bathe. It is said that Shiva knocked his head off but later replaced it with an elphant\'s head.'
	},
	{
		name: 'Ganga',
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The personification of the Ganges river. Originally from the heavens, she came to earth to clean the souls of the people as a result of the prayers of Bhagiratha.'
	},
	{
		name: 'Garuda',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A divine bird-man in Hindu mythology.\nHe hunts Nagas as a result of a dispute between the two creatures\' mothers. According to legend, he once fought with the gods, and was even granted immortality in exchange for becoming Vishnu\'s carrier.'
	},
	{
		name: 'Gdon',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The tigress mount of the goddess Durga, of Hindu myth. Durga was born to defeat the Asura Mahisha, and Gdon was granted to her to help complete the task.'
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the north, the season of winter, and the element of water. Known to be a great warrior, it is said to support the Earth from below.'
	},
	{
		name: 'Ghoul',
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'Cannibalistic demon from Islamic lore. It feeds on the flesh of both the living and the dead. It is indistinguishable from normal humans, and prefers to prey on children and travelers.'
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'A giant elephant monster of Sri Lankan mythology.\nIt is typically portrayed as being ridden by Mara, the Evil One. Whoever looks into its evil eye is said to be met with great misfortune.'
	},
	{
		name: 'Goemon',
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
		alignment: null,
		lore: 'Ishikawa Goemon was a thief who stole from the rich and gave to the poor in Japan during the Azuchi-Momoyama period. The kabuki scene of him sitting on the gate of Nanzen-ji is famous.',
		user: 'Yusuke Kitagawa',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Gorgon',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A hideous female monster with poison fangs and snakes instead of hair. Her name is Greek for "terrible." After Perseus took her head, he offered it to the gods who helped hem slay her.'
	},
	{
		name: 'Gorokichi',
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
		alignment: null,
		lore: 'Childhood nickname of Goemon Ishikawa. During his youth, he was raised among the Iga-ryu ninjas before he set off on his own to become a rogue ninja.',
		user: 'Yusuke Kitagawa',
		stage: 3,
		evoSkillName: 'Hyakka Ryouran'
	},
	{
		name: 'Gurr',
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'A demon that takes the shape of a giant bird in Sri Lankan myth. It is thought to be a derivation of Garuda.'
	},
	{
		name: 'Hachiman',
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A god who migrated from Silla to Kyushu to give oracles to the people. Later deified as a guardian of samurai across Japan. Also called Yahata, or "a figure for gods to possess."'
	},
	{
		name: 'Hanuman',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A hero of Hindu descent. He can transform into anything, fly, and possesses incredible strength.\nHe performed many heroic deeds in the Ramayana and is most always depicted as a monkey.'
	},
	{
		name: 'Haraedo-no-Okami',
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
		alignment: null,
		lore: null,
		user: 'Chie Satonaka',
		stage: 3,
		evoSkillName: 'Luster Candy'
	},
	{
		name: 'Hariti',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A Buddhist goddess also known as Kishimojin.\nShe was originally an evil devil who ate children, but when Buddha hit the most beloved of her 500 children, she was stricken with sorrow. Having been taught the pain of losing a child, she then became a good god and started eating pomegranates instead of children.'
	},
	{
		name: 'Hastur',
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
		game: 'p5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'An evil god of the Cthulhu Mythos and one of the eldritch deities known as Great Old Ones. It wields great power over wind. Also called "The Unspeakable" and "The King in Yellow."'
	},
	{
		name: 'Hayataro',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The spirit of a monster-bursting dog that used to live at Kozen-ji.\nLong ago, the villagers of Mitsuke would offer one of their own girls to a giant monkey yokai to prevent it from ravaging the fields. A monk passing by learned of this and that it greatly feared Hayataro. The monk then rushed off and found him at a temple. Hayataro was offered in place of a village girl, where he then defeated the monster, but was mortally wounded in the epic battle. The loyal dog traveled back to Kozen-ji, where he died shortly after reuniting with his master.'
	},
	{
		name: 'Hecate',
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
		alignment: null,
		lore: 'A Greek goddess of crossroads, ghosts and witchcraft, she is commonly attended to by dogs. She is also known to be the chief of the witches that appears in the play "Macbeth"',
		user: 'Ann Takamaki',
		stage: 2,
		evoSkillName: 'Evade Ice'
	},
	{
		name: 'Hecatoncheires',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'Giants born from Uranus and Gaia in Greek mythology. The name means "those with a hundred arms."\nDuring the war of the Titans, Zeus freed them from the underworld to help him obtain victory.'
	},
	{
		name: 'Helel',
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A fallen angel in Judeo-Christian lore whose name signifies "Morning Star." Primarily known for defying God, but also worshipped as a bringer of light to mankind.'
	},
	{
		name: 'Hell Biker',
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
		game: 'smt5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'A biker-turned-Fiend that claims to come from Hell.\nArmed with an intense hatred of himself and the world, his reliance solely on his own poewr turned him into this abominable figure.'
	},
	{
		name: 'Hereward',
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
		alignment: null,
		lore: 'The legendary Saxon who opposed the Normans during the conquest of England in the 11th century. Said to have been the basis for tales of Robin Hood. Called "Hereward the Wake" for his watchfulness.',
		user: 'Goro Akechi',
		stage: 3,
		evoSkillName: 'Rebellion Blade'
	},
	{
		name: 'Hermes',
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
		alignment: null,
		lore: null,
		user: 'Junpei Iori',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'High Pixie',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'One of a higher class of pixie, these are the Seelie Court\'s more powerful soldiers.\nThey are charged with guarding the ruins and caves where other pixies dwell.'
	},
	{
		name: 'Himiko',
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
		alignment: null,
		lore: null,
		user: 'Rise Kujikawa',
		stage: 1,
		evoSkillName: null
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Japanese god of words, thought to be the deification of echoes. Said to proclaim good and bad in a single word, and all words uttered by him come true.'
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: '"According to Chinese myth, Hokuto Seikun, or "Wise Man of the North Star," determines the moment that one is born.'
	},
	{
		name: 'Hope Diamond',
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
		game: 'p5',
		alignment: null,
		lore: 'Unlike its name suggests, the Hope Diamond is a cursed jewel that brings ruin from one owner to the next. A few supposed victims include King Louis XVI and his wife, Marie Antoinette.'
	},
	{
		name: 'Horus',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'An ancient god of Egypt known for having the sun and moon as his watchful eyes.\nHe was revered by some as the principal god, most likely due to his association with the celestial bodies above. Myth often depicts him as a hawk or a falcon.'
	},
	{
		name: 'Hua Po',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Tree spirits in Chinese mythology that are born when three or more people hang themselves from the same tree.\nThey take the form of a beautiful woman in white clothing, however they are much smaller in size than a human. They cannot talk, though they can chirp like birds.'
	},
	{
		name: 'Hydra',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'One of the monsters in Greek mythology. It is usually depicted as having 9 heads, but some may say that it has as many as 100.\nIts father is Typhon, giant of the wind, and its mother is Echidna, goddess of the snake. The Hydra has incredible regenerating power; so much so that when one of its heads is cut off, two more will sprout from the wound. It is also extremely venomous and simply inhaling its breath is enough to kill. The slaying of Hydra is listed as one of the 12 great labors of Hercules.'
	},
	{
		name: 'Idun',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A goddess from Norse mythology. She is the keeper of the golden apples and wife to Bragi the god of poetry.\nGods in Norse mythology are said to retain their youth via her apples, which are safely kept in a box made from ash wood.'
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'Izanami sent them after Izanagi at Yomotsu Hirasaka, the entrance of Yomi, the Japanese land of shadows. The army of Ikusa is led by Yomotsu Shikome.'
	},
	{
		name: 'Inanna',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The Sumerian goddess of fertility.\nHer name means "Lady of Heaven," and she is often viewed as one and the same with Aphrodite, Ishtar, and Venus. She is also a goddess of warfare, and it is said that even male gods feared her great power.'
	},
	{
		name: 'Incubus',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A male demon of popular European folklore during medieval ages and the counterpart to the Succubus.\nThey are known to visit women in their sleep and have sex with them. The offspring born from these incidents are said to later become witches and wizards.'
	},
	{
		name: 'Inugami',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Spirits of dogs said to possess humans in Japanese folklore.\nThose possessed enter a state of "inu-tsuki" and go crazy. Onmyoji, or Japanese sorcerers, summon them to do their will.'
	},
	{
		name: 'Io',
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
		alignment: null,
		lore: null,
		user: 'Yukari Takeba',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Ippon-Datara',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A monster with one eye and one leg, said to live deep in the mountains of Kumano, Japan.\nA single footprint measuring 30 cm has been sighted in the snowy mountains.'
	},
	{
		name: 'Ishtar',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A Mesopotamian goddess of love and war. Dubbed the "Queen of Heaven," the planet Venus was often seen as the embodiment of the goddess herself.\nIn the Epic of Gilgamesh, she makes many heroes her lovers, but the story also foretells that she will eventually kill them or turn them into animals.'
	},
	{
		name: 'Isis',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The mother goddess of Egypt. She is wife and sister to Osiris, god of the underworld.\nKnown for her powerful magic, she could perform miracles such as raising her husband from the dead. As the patron goddess of the dead, her image can be found at many burial sites.'
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
		alignment: null,
		lore: null,
		user: 'Yukari Takeba',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Izanagi',
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
		alignment: null,
		lore: 'A Persona of another story. One of the ancient gods who existed before Japan was formed. He created the Oyashima from chaos, then gave birth to countless children and laid the foundation of soil and nature.',
		user: 'P4 Protagonist',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Izanagi-no-Okami',
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
		alignment: null,
		lore: 'A Persona of another story. A Japanese god of creation, he begat the sky, ocean, and night, and 8 million other gods. Opposes his once-wife, the goddess Izanami, after an encounter in Yomotsu Hirasaka.',
		user: 'P4 Protagonist',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Izanagi-no-Okami Picaro',
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. A Japanese god of creation, he begat the sky, ocean, and night, and 8 million other gods. Opposes his once-wife, the goddess Izanami.'
	},
	{
		name: 'Izanagi Picaro',
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. One of the ancient gods who existed before Japan was formed. He created the Oyashima from chaos, then gave birth to countless children.'
	},
	{
		name: 'Jack Frost',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A frost spirit made from ice and snow that appears during the winter and melts away in the spring.\nDo not be fooled by his cute demeanor, however, for Jack Frost is known to freeze people with his cold breath, smiling all the while. Some suggest that he originally looked like an abominable snowman, but may have changed form to appear more approachable and thus more easily lure in his victims.'
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'An Irish spirit typically found in swamps, bogs, or marshes.\nSaid to be spirits of the dead, Jack-o\'-Lanterns appear as floating flames and are known around the world by various names such as "Will-o\'-the-Wisp" and "Hitodama." They are also said to come out at night to startle travelers and make them lose their way.'
	},
	{
		name: 'Jatayu',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'The Hindu king of birds.\nIn the Ramayana, he fought bravely against Ravana in an attempt to save Sita, the wife of Rama, the seventh avatar of Vishnu. However, he was unfortunately defeated.'
	},
	{
		name: 'Jikokuten',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Jikokuten, protector of the East, is one of the Four Heavenly Kings in Buddhist mythology.\nHe is also known as Dhritarashtra, and similarly to his fellow kings, is often depicted as a fierce warrior, clad in armor and wielding a sword. As his name suggests, it is said that he bestows serenity upon a country.'
	},
	{
		name: 'Jinn',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A spirit of wind and fire appearing in Arabian lore. It can transform at will and grant wishes to those who release it from its bottle or jar.'
	},
	{
		name: 'Jiraiya',
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
		alignment: null,
		lore: null,
		user: 'Yosuke Hanamura',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Johanna',
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
		alignment: null,
		lore: 'The mysterious female pope of the Middle Ages. She posed as a man and eventually made it all the way up to pope due to her unrivaled intellect. Her existence shook the history of the Catholic church.',
		user: 'Makoto Niijima',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Juno',
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
		alignment: null,
		lore: null,
		user: 'Fuuka Yamagishi',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Kaguya',
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
		alignment: null,
		lore: 'A Persona of another story. A divine being born from a glowing bamboo shoot. Though many proposed to her, none could complete her strict tasks. She eventually returned to her home, the moon.',
		user: 'Marie',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Kaguya Picaro',
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. She appeared from a glowing bamboo shoot. She received many proposals, but rejected them and returned to the moon.'
	},
	{
		name: 'Kaiwan',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A god in Assyrian legend, his name is interchangeable with Sakkut, another incarnation of the star-god, Saturn.'
	},
	{
		name: 'Kala-Nemi',
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
		alignment: null,
		lore: null,
		user: 'Ken Amada',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Kali',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'The Black One, a symbol of death and destruction.\nShe is said to be another face of Parvati, Shiva\'s consort. Wearing a necklace of human heads, she wields numerous bloody swords, one for each of her many arms. It is said that when Durga, another form of Parvati, was fighting the Asuras, she summoned Kali and defeated the Asura army in an instant.'
	},
	{
		name: 'Kamui',
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
		alignment: null,
		lore: null,
		user: 'Teddie',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Kamui-Moshiri',
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
		alignment: null,
		lore: null,
		user: 'Teddie',
		stage: 3,
		evoSkillName: 'Kamui Miracle'
	},
	{
		name: 'Kamu Susano-o',
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
		alignment: null,
		lore: 'A Japanese god found in the Izumo Fudoki. He was one of the three gods born from Izanagi. He was a violent ruffian, but also has a sensitive side, showing love for his mother and reading poems.',
		user: 'Yusuke Kitagawa',
		stage: 2,
		evoSkillName: 'Evade Fire'
	},
	{
		name: 'Kanzeon',
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
		alignment: null,
		lore: null,
		user: 'Rise Kujikawa',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Kartikeya',
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A Hindu god of war, also known as Skanda and Murugan. He rides upon a peacock called Paravani, with a bow and arrow drawn. He commands the army of the gods, and defeated the forces of Asura.'
	},
	{
		name: 'Kaya-no-Hime',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A goddess of grasses in Japanese mythology.\nThe name "Kaya" refers to the grass that was used to build traditional grass-roof houses, highlighting its importance to the people of ancient Japan.'
	},
	{
		name: 'Kelpie',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A fairy of Celtic folklore that lives by the water and takes the appearance of a horse.\nThey often drown those who attempt to ride them, but, if tames, they can be valuable mounts.'
	},
	{
		name: 'Khonsu',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The Egyptian god of the moon.\nOften portrayed as a mummy with two long braids of hair, he is said to be a reincarnation of the moon itself and holds possession over what\'s known as the moon ship. He also acts as a companion to the Pharaoh\'s shadow. Hieroglyphics found in Unas\' pyramid depict him as a god who prepares meals for an oppressive, god-devouring king.'
	},
	{
		name: 'Khonsu Ra',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The form of the Egyptian god of the Moon, Khonsu, upon gaining the power of the sun god, Ra.\nHidden behind a foreboding mask, he possesses the dual powers of the sun and moon, the day and night, and the living and the dead.'
	},
	{
		name: 'Kikuri-Hime',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The goddess of Shirayama, also called Shirayama-Hime, and the deification of a maiden who relayed Izanami\'s words.\nShe once mediated between Izanagi and Izanami during their confrontation in Yomi, the land of the dead. Since she is the goddess of love and marriage, she was thought to have been named for "kukuri," meaning "to bring people together."'
	},
	{
		name: 'King Frost',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'The king of snow who rules over an infinite number of Jack Frosts.\nHe has the power to freeze the entire world but is unaware of it due to his rather naïve personality.'
	},
	{
		name: 'Kingu',
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'The son and second consort to the female dragon Tiamat. He was to be the leader of the gods, but was killed by Marduk. Mankind was created from his blood.'
	},
	{
		name: 'Kin-Ki',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, its body is so hard that no weapons can penetrate it.\nIt and its comrades fell into hell through holes that can still be found in Mie Prefecture, Japan (the modern-day Iga Province).'
	},
	{
		name: 'Kintoki-Douji',
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
		alignment: null,
		lore: null,
		user: 'Teddie',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Kodama',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'In Japanese mythology, they are the spirits of plants. They are born from trees that live 100 years.\nIt was once thought that the echoes heard in valleys were actually from Kodama replying.'
	},
	{
		name: 'Koh-i-Noor',
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
		game: 'p5',
		alignment: null,
		lore: 'Once called the world\'s largest diamond, it was cut when it came to the British royal family. It is said to bring bad luck to any man who wears it, so only the females have ever adorned it.'
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'One of the holy dragons of Chinese lore, the Golden Dragon appears in times of great fortune or joy.\nHis dominion over the earth extends to the four gods Qing Long, Xuanwu, Zhuquem and Baihu.'
	},
	{
		name: 'Konohana Sakuya',
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
		alignment: null,
		lore: null,
		user: 'Yukiko Amagi',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Koppa Tengu',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'A smaller member of the Tengu race less powerful than other Tengu.\nThey are believed to be an incarnation of an old wolf and are capable of eventually transforming into Karasu Tengu.'
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Small human-like creatures that have kind, calm personalities.\nOnce coexisting with the Ainu people of Japan, there was a falling out at some point, and they disappeared.'
	},
	{
		name: 'Koumokuten',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Koumokuten, protector of the West, is one of the Four Heavenly Kings of Buddhist mythology.\nSimilarly to his fellow kings, he is often depicted as a fierce warrior, clad in armor and wielding a trident. He is also known as Virupaksha and is said to keep a close eye on the world with his sharp gaze, preaching to the people all the while.'
	},
	{
		name: 'Kouzeon',
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
		alignment: null,
		lore: null,
		user: 'Rise Kujikawa',
		stage: 3,
		evoSkillName: 'Complete Analysis'
	},
	{
		name: 'Kumbhanda',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'Demons of Buddhist origin, known for draining the life energy of humans.\nIt is said that they often change shape and take the form of a gourd. They stand three meters tall, with red hair and dark skin, and have the body of a human but the head of a white horse. They once served Rudra, but according to Buddhist scriptures, they now follow Zouchouten of the Four Heavenly Kings.'
	},
	{
		name: 'Kurama Tengu',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A tengu that is said to have lived in Mt. Kurama in Kyoto.\nThe most powerful and well-known of the tengu, he has the power to fend off disease and bring good fortune. He is also said to have trained Yoshitsune how to fight with a sword when Yoshitsune was still a child. Some believe him to be Bishamonten\'s night form.'
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
		game: 'p5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'One of the four great aspects of Shinto thought, it uses its power to bring good omens.\nIt is said to aid in one\'s wisdom, observation, and skill, and can also mend fractured paths.'
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Kushinada-Hime is a goddess in Japanese mythology.\nWhen she was human, she was saved from the eight-headed serpent Yamata-no-Orochi by the storm god Susano-o, whom she later wedded.'
	},
	{
		name: 'Lachesis',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the three Moirae Sisters in Greek mythology.\nShe is the apportioner, measuring the thread which determines a person\'s life span.'
	},
	{
		name: 'Lahmu',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A god that appears in Babylonian mythology.\nBorn from Apsu and Tiamat, he and his sister, Lahamu, gave birth to Anshar and Kishar. Lahmu is at times depicted as a large serpent, but has also been illustrated as a man wearing a red sash with six curls in his hair. Regardless, he is always shown alongside Lahamu and it is thought that together they represent the slit in the sea where Apsu\'s fresh water and Tiamat\'s sea water mix.'
	},
	{
		name: 'Lakshmi',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'Goddess of beauty and good fortune in Hindu lore.\nVishnu\'s wife and Kama\'s mother, she is regarded as the goddess of love and is said to embody the ideal woman. She is also known to have charmed many gods with her dance.'
	},
	{
		name: 'Lamia',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Half-woman, half-snake creatures that appear in Greek mythology and are said to reside in Libya.\nThey supposedly favor the blood of children and young men.'
	},
	{
		name: 'Leanan Sidhe',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A beautiful faerie of Irish lore whose name means "faerie mistress."\nShe drains the life of her lovers in return for granting them artistic inspiration.'
	},
	{
		name: 'Legion',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A demon or horde of demons quoted as saying, "For we are many" in the New Testament.\nThe name comes from the Roman military term for an army unit of 3,000 to 6,000 men.'
	},
	{
		name: 'Lilim',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A demon in female form from Judeo-Christian lore known to tempt sleeping men and attack infants.\nShe is the daughter of the demoness Lilith, who tempted Adam. Like her mother, she drains men of their essence.'
	},
	{
		name: 'Lilith',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'She is said to have been Adam\'s first wife. Refusing to obey Adam, she left Eden and became a demon of the night.\nThough there are several theories regarding her disobedience, she is often regarded as a symbol of infidelity.'
	},
	{
		name: 'Loa',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'A group of divinities worshipped in voodoo religion.\nOf the many hidden entities mentioned in religious doctrines, the ones that influence human activities in the earthly realm are known by this name. It is said that those aligned with shadow also possess powerful dark magic.'
	},
	{
		name: 'Loki',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A malevolent god of Norse mythology.\nThough not always driven by malice, he can be capricious and is quite cunning, and despite being a blood brother to Odin, he was punished for many of his wrong doings, including the murder of Odin\'s child, Baldur.'
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
		alignment: null,
		lore: 'A malignant god of Norse mythology. Not always driven by malice, but impulsive and devious. He had an uneasy peace with Odin and the gods, but his part in Baldr\'s death drove them to finally punish him.',
		user: 'Goro Akechi',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Loup-garou',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A type of werewolf originating in France. It appears human during the day, but transforms into its beastly form at night, when it has been known to viciously attack humans.\nThey are said to have once been ordinary human beings. However, upon turning into a loup-garou, one cannot regain their humanity ever again.'
	},
	{
		name: 'Lucia',
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
		alignment: null,
		lore: null,
		user: 'Fuuka Yamagishi',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Lucifer',
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
		game: 'p5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A fallen Judeo-Christian angel, he lead a rebellion with an army of angels against God and lost. He waits in Hell for his chance to challenge God once more and strike him down.'
	},
	{
		name: 'Lucy',
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
		alignment: null,
		lore: 'The Countess of Carlisle, and the historical basis for Alexandre Dumas\'s femme fatale, Milady de Winter. Known for her beauty and cunning, she was a courtier much favored by the Queen.',
		user: 'Haru Okumura',
		stage: 3,
		evoSkillName: 'Life Wall'
	},
	{
		name: 'Macabre',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'An evil spirit appearing in medieval oratorios as the grim reaper.\nIt is truly Death itself, with the power to lead humans to their demise in an instant. It is depicted as a skeleton with a black cloak and a sickle to reap human souls in a single stroke. True to its name, it dances the feared Dance of Death, a reminder that all worldly things must someday meet their end.'
	},
	{
		name: 'Mada',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'A giant Asura in Hinduism whose name means "the intoxicator."\nIt is said that the sage Chyavana created it from fire. Mada has the power to swollow its enemies, and even the deity Indra has been said to surrender to its power.'
	},
	{
		name: 'Magatsu-Izanagi',
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
		alignment: null,
		lore: 'A Persona of another story. He\'s Izanagi\'s rival and looks just like him. Magatsu means "calamity." Unlike Izanagi, who founded the land and brought order, he leads all back into chaos.',
		user: 'Tohru Adachi',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Magatsu-Izanagi Picaro',
		aliases: [
			'M. Izanagi Picaro'
		],
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. He\'s Izanagi\'s rival. Magatsu means "calamity," so, unlike Izanagi who founded the land and brought order, he leads all back into chaos.'
	},
	{
		name: 'Mahakala',
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
		game: 'p4',
		alignment: {
			moral: 'Unknown',
			ethical: 'Chaos'
		},
		lore: 'Indian god who repels evil, known as Daikokuten in Buddhism. Its swords are fearsome, but by paying tribute to him, believers may be blessed with tremendous wealth and happiness.'
	},
	{
		name: 'Makami',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A divine beast in Japanese mythology.\nIt has been said to ward off evil and disasters, especially thefts and fire, and is commonly drawn on "ema," a type of Japanese amulet. However, despite being known primarily for protection, it has also been rumored to eat people.'
	},
	{
		name: 'Manananggal',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A witch whose lore originated in the Philippines.\nIt masquerades as a beautiful woman during the day but transforms into a blood-sucking monster at night. It has the ability to separate its upper and lower body, and can sprout bat wings from its back to fly in search of humans to suck their blood. It is said that the Manananggal preys on unborn fetuses in particular, using its proboscis-like tongue to open the wombs of pregnant women, wherein it will suck the fetus\' blood, or devour it outright.'
	},
	{
		name: 'Mandrake',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'A magical plant whose roots take the appearance of a human.\nMandrakes are a precious component in potions to heal sicknesses, but obtaining one is notoriously difficult. When pulled from the ground, they let out a bloodcurdling scream, killing anyone unlucky enough to hear it. There are both male and female variations of Mandrakes.'
	},
	{
		name: 'Mara',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A Buddhist demon that represents the fear of death.\nAlso known as "The Evil One," he sent his daughter to tempt Buddha during his meditations.'
	},
	{
		name: 'Maria',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'The maternal figure of Christianity.\nGabriel informed her that she was to be the mother of Jesus. Some sects revere her as Virgin Mary, but other denominations do not focus on her.'
	},
	{
		name: 'Masakado',
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'Taira no Masakado, hero of the Heian period. He claimed the title "Shinno" (New Emperor) and rebelled against the government. He was killed, but it is said he became a demigod.'
	},
	{
		name: 'Matador',
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
		game: 'smt5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'A master sportsman who entertains the audience at the cost of his own peril; even one small slip-up can spell certain death.\nIt is said that some of the men who die in this cruel game remain in this world as Fiends, bound by regret as well as the thirst for the cheers and excitement.'
	},
	{
		name: 'Melchizedek',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A Christian Gnostic angel said to be the "savior of angels."\nIn the Bible, he is referred to as "Melchizedek, king of Saelm.'
	},
	{
		name: 'Mephisto',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'More accurately, Mephistopheles. He is one of the princes of Hell and his name means "he who loves not the light".\nHe is commonly known as the demon summoned by Georg Faust. Other than Satan himself, he is the most feared commander in Hell. However, he despises having fallen into Hell and hates any and all humans who have been granted salvation. He is rather knowledgeable in the realms of astronomy, astrology and meteorology in addition to being a skilled illusionist who can manipulate all five senses.'
	},
	{
		name: 'Mercurius',
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
		alignment: null,
		lore: 'The Roman god of travelers and thieves. A diverse god, he is seen as a symbol of human unconscious and the mental world. He is equated with the Philosopher\'s Stone, the ultimate mystery in the field of alchemy.',
		user: 'Morgana',
		stage: 2,
		evoSkillName: 'Evade Elec'
	},
	{
		name: 'Mermaid',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Half-woman, half-fish inhabitant of the ocean. Males are called mermen.\nMermaids are regarded as unlucky omens by many fishermen, often foretelling severe storms or poor catches. Legend says they use their voices to charm men, causing them to crash their ships.'
	},
	{
		name: 'Messiah',
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
		alignment: null,
		lore: 'A Persona of another story. He appears before Judgment Day to save the virtuous. He is a universal figure, appearing in myths around the world. Many stories involve his death and rebirth.',
		user: 'P3 Protagonist',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Messiah Picaro',
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. He appears before Judgment Day to save the virtuous. He is a universal figure, appearing in myths around the world.'
	},
	{
		name: 'Metatron',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the most important angels in the hierarchy, yet the most mysterious.\nHe is the scribe and advocate of heaven.'
	},
	{
		name: 'Michael',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the four major angels, his name means "He who is like God."\nHe stands at the top of the angel hierarchy and carries a divine armament known to shatter any blade.'
	},
	{
		name: 'Milady',
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
		alignment: null,
		lore: 'The beautiful woman that appears in Dumas\' "Three Musketeers". Branded with a fleur-de-lis symbol, she used many aliases to control nobility and get her vengeance.',
		user: 'Haru Okumura',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Mishaguji',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'An indigenous god of the Shinano region from before the forces of Yamato occupied the land.\nSaid to be born from the belief that divine spirits dwelled in rocks and stones.'
	},
	{
		name: 'Mithras',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A sun deity who was worshipped in the Roman Empire from the 1st to the 4th century AD.\nThe rituals of the religion were secretive, but it is believed they entailed covering oneself in the blood of sheep and bulls. He was said to be reborn after death, inspiring worshippers to hold a festival each winter solstice.'
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'Commonly known as Mitra-Buddha or Mitra.\nAn ancient Persian god of contracts, he was also revered as a sun god. He is a protector of the world\'s harmony and truth, and passes judgment upon those who threaten it. It is said that one of his powers to safeguard harmony allows him to cure any illness.'
	},
	{
		name: 'Mokoi',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A monster from Aboriginal folktales.\nIt lives in a jungle alongside owls and, though it appears human, has an abnormally large head. It also lacks a tongue and therefore cannot speak. Myth tells that these creatures are reincarnations of the "soul of the shadow," and they are even said to engage in intercourse with human women from time to time as well as eat children and fight humans.'
	},
	{
		name: 'Moloch',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A Canaanite god of fire.\nTradition states that a bronze statue of a human with the head of a female ox would be placed at the altar as its vessel. It is said that the statue would first be heated with fire, then children would be put inside as a sacrifice. The Bible mentions its name as a cruel pagan god.'
	},
	{
		name: 'Mot',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The Canaanite god of death.\nEvery year he attemps to kill Baal, the god of fertility, only to see him raised from the dead with the help of Baal\'s sister, Anat.'
	},
	{
		name: 'Mother Harlot',
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
		game: 'smt5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'Reviled as the "Whore of Babylon" in the Book of Revelation.\nShe defies God from atop a scarlet-colored beast with seven heads and ten horns, and carries a golden cup brimming with abominations and the filth of her deeds.'
	},
	{
		name: 'Mothman',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'A cryptid sighted in West Virginia from the 1960s to 1980s.\nIt has red, shining eyes and was known for the finlike appendages on both sides of its boy. It has been said to walk on two foot and fly without moving these appendages. It has a keen sense for blood which allows it to easily track its prey. Eyewitnesses say that a UFO was sighted when Mothman appeared, so many believe that it is actually an alien.'
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'Meaning "evil bird," it is the ghost of a young girl who died without knowing love in Buryat folklore.\nShe seduces travelers, only to crack their heads open and suck out their brains with her beak.'
	},
	{
		name: 'Naga',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Half-snake, half-human, they are divine beings in Hindu lore.\nWorshipped as bringers of fertility, they live in the bottoms of lakes and seas, and enjoy singing and dancing outside of battle.'
	},
	{
		name: 'Narasimha',
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The 4th avatar of Vishnu. He took this form to defeat Hiranyakashipu, who can\'t be killed by human, animal or deva, and killed his foe at dusk, since he couldn\'t die at other times.'
	},
	{
		name: 'Narcissus',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A young man of Greek lore. He rejected the nymph Echo, who faded to a whisper out of despair.\nCursed by Nemesis, he fell in love with his own reflection and wasted away, becoming the flower that now bears his name.'
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A demon of Chinese mythology, also known as Zhongtan Yuanshuai. He committed suicide to atone for killing a Dragon King, but was brought back to life as a lotus.'
	},
	{
		name: 'Nebiros',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'The general of Hell. He keeps watch over other demons.\nOne of Hell\'s greatest necromancers, he can control souls and corpses.'
	},
	{
		name: 'Necronomicon',
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
				name: 'Subrecover MP',
				level: 49
			},
			{
				name: 'Subrecover HP EX',
				level: 58
			},
			{
				name: 'Subrecover MP EX',
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
		alignment: null,
		lore: 'The grimoire which contains vital information of the Cthulhu mythos by Lovecraft. Its original name is Al Azif. It is said the book itself is alive.',
		user: 'Futaba Sakura',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Nekomata',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Incarnations of long-living cats in Japanese mythology.\nThey can speak to humans and, depending on their power, can do various things. Some can turn into humans, while others can have the dead do their bidding'
	},
	{
		name: 'Neko Shogun',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The god of prophecy in Taoist religion.\nIt is said to have the head of a cat and the body of a human, and its shrine was located in Annam, which is present-day Vietnam. The shrine was meant for Mao Shangshu, a 14-15th century general who conquered Vietnam. However, because the name "Mao" is similar to the Chinese word for cat, the temple was effectively misnamed, and he was reborn as a different god. It should also be noted that there is a similar story about the god of sailing known as "Tetsu Neko Shogun."'
	},
	{
		name: 'Nemesis',
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
		alignment: null,
		lore: null,
		user: 'Ken Amada',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Niddhoggr',
		aliases: [
			'Nidhoggr'
		],
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'An evil dragon that gnaws on the roots of Yggdrasil, the World Tree. It rules over the evil snakes that live there. Capable of surviving Ragnarok by feeding on the slain corpses that drift to it.'
	},
	{
		name: 'Nigi Mitama',
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
		game: 'p5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'One of the four great aspects of Shinto thought, it works gently to help maintain a calm mind.\nIt is said to aid in one\'s relations, calmness, and sociability, and can also lead one in a positive direction.'
	},
	{
		name: 'Norn',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The goddesses of fate in Norse myth.\nThey live below the roots of Yggdrasil and weave the threads of fate by which even the gods are bound.'
	},
	{
		name: 'Nozuchi',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A spirit of earth from Japanese myth, whose name means "god of fields." Though not innately evil, its temper may cause it to attack humans from behind a tree or bushes.'
	},
	{
		name: 'Nue',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'A legendary monster in Japanese mythology. It has the head of a monkey, the body of a tanuki, the arms and legs of a tiger, and the tail of a snake.\nDue to its bizarre appearance, the term "Nue" is sometimes used to describe a person of unknown origins. According to The Tale of Heike, the Nue would come to the emperor\'s palace every night from 2 to 2:30 A.M., shrouded in a dark cloud, where it would howl in a horrific and terrifying manner. However, the warrior Minamoto no Yorimasa eventually shot it down with his bow.'
	},
	{
		name: 'Nuwa',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A goddess that appears in Chinese mythology.\nRecognized as one of the sovereigns, she is said to have the head of a human and a body of a serpent. She is also known to be responsible for the creation of humanity, having created them from mud. Legend tells that when one of the four pillars said to hold up the world broke, she repaired it. Furthermore, her colleague Fuxi is typically labeled as either her brother or her husband, depending on what version of her story is told.'
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
		race: 'Lady',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A goddess that appears in Chinese mythology.\nRecognized as one of the sovereigns, she is said to have the head of a human and a body of a serpent. She is also known to be responsible for the creation of humanity, having created them from mud. Legend tells that when one of the four pillars said to hold up the world broke, she repaired it. Furthermore, her colleague Fuxi is typically labeled as either her brother or her husband, depending on what version of her story is told.'
	},
	{
		name: 'Obariyon',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A "piggyback monster" of Japan that jumps on the backs of those who walk on wooded paths at night.\nIts weight becomes progressively heavier to the point of being nearly unbearable, but it is said that it will transform into gold coins if you can carry it all the way back home.'
	},
	{
		name: 'Oberon',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The king of the fairies and the husband of Titania.\nHe is quite old, but due to a curse he received when he was young, he remains small yet still beautiful. He often flirts with human women and has earned many a scolding from his wife as a result.'
	},
	{
		name: 'Odin',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The All-Father in Norse Mythology. Warrior, sorcerer and near insatiable seeker of knowledge, he rides his eight-legged horse Sleipnir, armed with both Gungnir, his mighty spear and Draupnir, an enchanting ring.\nHe is known to have willingly sacrificed an eye to drink from the Well of Wisdom and is also recognized as the one who welcomes the souls of departed warriors as they cross over into Valhalla.'
	},
	{
		name: 'Okuninushi',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A Kunitsu deity of Japanese mythology that governs agriculture and medicine.\nSaid to have built the country of Izumo with Susano-o\'s daughter, Suseri-Hime. He is a peaceful god who prefers not to fight.'
	},
	{
		name: 'Omoikane',
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A deity of knowledge in Japanese myth. He conceived the plan to draw Amaterasu from the Amato-Iwato, the cave she was hiding in.'
	},
	{
		name: 'Ongyo-Ki',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, who ruled Iga and Ise during the Heian Period.\nBy suppressing its aura, thereby preventing others from sensing its presence, it can effectively ambush its enemies. Oni have been said to act as liaisons between humans and gods, and the Fudoki holds many records of such exchanges in this region.'
	},
	{
		name: 'Oni',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A common demon in Japanese mythology. This terrifying and powerful creature is known to raid human villages for food, riches, and women.\nIt is characterized by red skin, horns on its head, long claws, and sharp fangs.'
	},
	{
		name: 'Onmoraki',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'A Japanese monster that takes the form of a bird with the face of a man. It produces a sickening chirp and spits a wicked flame.\nIts true identity is a corpse that hasn\'t had a proper memorial service, and it is said to appear before monks who neglect their duties.'
	},
	{
		name: 'Orichalcum',
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
		game: 'p5',
		alignment: null,
		lore: 'A metal mentioned in ancient Greek literature. Some accounts say it was merely brass, but other stories suggest it was, in fact, a legendary material.'
	},
	{
		name: 'Orlov',
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
		game: 'p5',
		alignment: null,
		lore: 'A diamond stolen from a Hindu temple that is said to drive its owner to their death. It was cut into smaller pieces in an attempt to break the curse.'
	},
	{
		name: 'Orobas',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of 72 demons in Solomon\'s Goetia.\nHe is said to appear as a human with a head of a horse. He answers all questions conerning past, present and future and is both liked and respected by sorcerers. According to legend, he was often summoned by sorcerers seeking to see through lies or predict the future.'
	},
	{
		name: 'Orpheus',
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
		alignment: null,
		lore: 'A Persona of another story. A poet skilled with the lyre. He tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface.',
		user: 'P3 Protagonist',
		stage: 1,
		evoSkillName: null
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
		alignment: null,
		lore: 'A Persona of another story. A poet skilled with the lyre. He tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface.',
		user: 'P3 Protagonist',
		stage: 1,
		evoSkillName: null
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. A Greek poet who tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface.'
	},
	{
		name: 'Orpheus Picaro',
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. A Greek poet who tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface.'
	},
	{
		name: 'Orpheus Telos',
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
		game: 'p3',
		alignment: null,
		lore: 'By bonding with many people, Orpheus was once again born from the sea of the soul. He has awakened to the power of Cipher, which holds endless possibilities.',
		user: 'P3 Protagonist',
		stage: 3,
		evoSkillName: null
	},
	{
		name: 'Orthrus',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The two-headed dog who protected the Titan Geryon\'s red cattle in Greek lore.\nDespite his skill as a guard, Hercules killed him in one blow while performing one of his 12 great labors.'
	},
	{
		name: 'Ose',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nAppearing as half-man and half-beast, it is said that he can change his form according to the desires of the one who summons him, though not for very long.'
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'One of the Kunitsukami\'s in Japanese mythology. He is the grandfather of Susano-o\'s wife, Kushinada-Hime.\nHe is known as the god of the mountains but is also considered to be the god of water and rice fields because he ruled over water sources and harvests.'
	},
	{
		name: 'Pabilsag',
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A guardian of the gate to paradise. This beast with a human head and a scorpion body appears in Mesopotamian lore.'
	},
	{
		name: 'Pale Rider',
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
		game: 'smt5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides upon a sickly pale horse and bears the name "Death." The embodiment of Hell itself follows behind him, eager to claim his victims. Fittingly, he has been given authority to mete out widespread death and disease.'
	},
	{
		name: 'Palladion',
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
		alignment: null,
		lore: null,
		user: 'Aigis',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Pandora',
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
		alignment: null,
		lore: 'The first woman created by the Greek gods, made to punish mankind\'s hubris. She opens a forbidden vessel (said to be a jar or a box) and unleashes evil into the world, but also reveals Hope, to ensure humanity is not crushed by despair.',
		user: 'Sophia',
		stage: 2,
		evoSkillName: 'Mahamabarion'
	},
	{
		name: 'Parvati',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'This beautiful goddess of love is one of Shiva\'s wives in Hindu mythology.\nShe won Shiva\'s love despite the fact that he was an ascetic.'
	},
	{
		name: 'Pazuzu',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A demon from Sumerian civilization, he governs the southwestern wind.\nHe has the face of a lion, the body of a human, the wings of a bird, the talons of an eagle, the tail of a scorpion and a curved horn protruding from his forehead. It is said that the wind he blew from the Persian Gulf spread disease throughout the land.'
	},
	{
		name: 'Penthesilea',
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
		alignment: null,
		lore: null,
		user: 'Mitsuru Kirijo',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Pisaca',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A type of demon in Hindu mythology that arises from the vices of men such as criminals, drunkards and adulterers.\nKnown to feast on the flesh of corpses, it is said that it can possess a human by entering through their mouth, where it will plague them until it is driven away through magic or medicine. It is also said that anyone who looks upon one directly is guaranteed to die within nine months.'
	},
	{
		name: 'Pithos',
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
		alignment: null,
		lore: 'A set of mysterious objects Sophia uses in battle to mimic the powers of Persona-users. Though they function similarly to Personas, their inner workings are completely unknown. It\'s name is derived from the Greek word for "jar."',
		user: 'Sophia',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Pixie',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A small fairy found in southwestern Britain known for their cheerful nature and love of pranks.\nTheir physical appearance changes from region to region, but their personality is always playful and mischievous. A common prank they like to pull is causing humans to wander in circles. However, they are also known to help farmers from time to time and are generally considered good fairies.'
	},
	{
		name: 'Poltergeist',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A mischievous spirit known for haunting houses. The name is German in origin, and literally means "noisy ghost."\nIt can do various things, from pulling harmless pranks like making loud noises and moving objects through the air, to dangerous, destructive acts, like starting fires and assaulting people. Poltergeist incidents often occur in homes with children or teenagers, and one theory states that the cause is a child\'s unstable mentality.'
	},
	{
		name: 'Polydeuces',
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
		alignment: null,
		lore: null,
		user: 'Akihiko Sanada',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Power',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'The sixth of the nine order of angels. Their name carries the meaning of "power of God."\nAs their duty is to protect the souls of humans, they are constantly on patrol to guard against demon attacks.'
	},
	{
		name: 'Preta',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'Known as "gaki" in Japanese, they are ghoulish demons of Buddhist lore.\nGreedy humans cast into the preta realm become these. Their hunger is unrelenting and their suffering continues until they are reincarnated.'
	},
	{
		name: 'Principality',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'The seventh of the nine orders of angels.\nThey are charged with overseeing the welfare of countries and civilizations.'
	},
	{
		name: 'Prometheus',
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
				name: 'Subrecover MP',
				level: 49
			},
			{
				name: 'Subrecover HP EX',
				level: 58
			},
			{
				name: 'Subrecover MP EX',
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
		alignment: null,
		lore: 'The Greek Titan created mankind from clay. He later stole fire from Olympus and, in turn, gave it to mankind against Zeus\'s will. His name is often synonymous with fire and "divine knowledge."',
		user: 'Futaba Sakura',
		stage: 2,
		evoSkillName: 'Treasure Skimmer'
	},
	{
		name: 'Psyche',
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
		alignment: null,
		lore: null,
		user: 'Metis',
		stage: 1,
		evoSkillName: null
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'The queen of fairies in Celtic mythology.\nSome say she was the inspiration for William Shakespeare\'s Queen Mab, leading many to conclude that she and the fairy queen Titania, Oberon\'s wife, are one and the same. She was known to give mead mixed with her blood to her many consorts.'
	},
	{
		name: 'Queen\'s Necklace',
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
		game: 'p5',
		alignment: null,
		lore: 'The diamond necklace that Jeanne de la Motte swindled from jewelers in 1785 by claiming it was on behalf of the Queen of France, Marie Antoinette.'
	},
	{
		name: 'Quetzalcoatl',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'An Aztec creator deity known as the Feathered Serpent.\nHe is identified as the sun and is also known as the god of wind and giver of breath. He is said to have created humans by sprinkling blood on the bones of people from a previously created world, and acts as guardian of their fertility and culture. According to legend, the planet Venus is actually Quetzalcoatl\'s heart.'
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'The king of the Naga, a half-man, half-snake tribe in Hindu lore.\nThe dragon kings of Nanda and Takshaka of Buddhist myth fall into this royal category.'
	},
	{
		name: 'Rakshasa',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'Evil spirits that battle the gods in Hindu lore. They also attack humans.\nTheir hideous appearance symbolizes their evil nature, but they can also change shape to fool humans.'
	},
	{
		name: 'Rangda',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A wicked witch and the symbol of evil in Balinese Hinduism. When women who used magic held a grudge or went down the path of evil, they became this dreadful creature.\nShe spreads plagues, causes natural disasters, curses people, and even uses evil spirits to do her bidding. The holy beast Barong that symbolizes good is her eternal rival. Even if defeated, she will come back to life, and their battle will have no end.'
	},
	{
		name: 'Raoul',
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
				name: 'Phantom Show',
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
		alignment: null,
		lore: 'Another alias of Maurice Leblanc\'s hero, Arsène Lupin. Infamous as a phantom thief, he was also known to be a man of many friends, lovers, and treasured allies.',
		user: 'P5 Protagonist',
		stage: 3,
		evoSkillName: null
	},
	{
		name: 'Raphael',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the four major angels. His name means "healer."\nHe explains the history of the fallen angels and the creation of Adam and Eve.'
	},
	{
		name: 'Red Rider',
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
		game: 'smt5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides a red horse and carries a greatsword. It is said that he has the power to destroy peace and make men slay one another.'
	},
	{
		name: 'Regent',
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
		game: 'p5',
		alignment: null,
		lore: 'A bluish-tinged diamond that Napoleon Bonaparte had mounted to the pommel of his sword. It was named after the French Regent Philippe II, Duke of Orleans, who had purchased it in 1717.'
	},
	{
		name: 'Robin Hood',
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
		alignment: null,
		lore: 'A noble thief that made waves in England during the Middle Ages. He is an expert archer and leader of the Merry Men, outlaws of justice who made Sherwood Forest their home.',
		user: 'Goro Akechi',
		stage: 1,
		evoSkillName: null
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
		alignment: null,
		lore: null,
		user: 'Kanji Tatsumi',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Saki Mitama',
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
		game: 'p5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'One of the four great aspects of Shinto thought, it brings great bounty from the hunt.\nIt is said to aid in love, profit, and growth, and can even create new paths.'
	},
	{
		name: 'Samael',
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'A mysterious angel with the name "poison of God". He is often shown as a serpent. Opinions differ on whether he is fallen or not, but either way, he is linked with death.'
	},
	{
		name: 'Sandalphon',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'The twin brother of Metatron.\nAn influential angel in Jewish mythology, he governs the songs of heaven, and his colossal size has led many to believe that it would take a human being 500 years to reach his head.'
	},
	{
		name: 'Sandman',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A fairy from rural Germany rumored to put people to sleep using the magic sand he carried in his bag.\nIf a victim resisted, he would sit on their eyelids to force them to sleep. It has even been said that "naughty children" who refused to go to sleep would be punished by having their eyes scooped out and taken away, though this is speculated to be a fabrication thought up by German mothers.'
	},
	{
		name: 'Sarasvati',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The consort of Brahma in Hindu lore.\nShe embodies the river and her name means "one who flows." She is also the goddess of music and art and is said to be skilled in every artistic or creative pursuit known to man.'
	},
	{
		name: 'Satan',
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
		game: 'p5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'The Judeo-Christian prince of darkness, he is known for his role as the snake that tempted Adam and Eve in Eden. It is also said that he was sent by God to test man\'s piety.'
	},
	{
		name: 'Satanael',
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
				name: 'Tyrant\'s Mind',
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
		alignment: null,
		lore: 'An archangel who is said to be the form of Satan before he fell from Heaven. The second son of God, he rebelled against Him for freedom and bestowed free will and chaos upon humanity.',
		user: 'P5 Protagonist',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Sati',
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
		game: 'p4',
		alignment: {
			moral: 'Unknown',
			ethical: 'Law'
		},
		lore: 'Shiva\'s first consort in Hindu myth, she threw herself into a sacrifical fire in protest of her father\'s treatment of Shiva. Reborn as Parvati, she was reunited with Shiva.'
	},
	{
		name: 'Saturnus',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The Roman god of agriculture. He is commonly identified with Cronus. In an attempt to prevent his destiny, he ate his children, but was overthrown as fated.'
	},
	{
		name: 'Scathach',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The war goddess of Celtic lore as well as the queen of the Land of Shadows.\nShe is a skilled magician and a master warrior who trains the many young men who come to her in the art of war. The famed Cu Chulainn was one of her students and it is said that he received the legendary Gae Bolg from her upon mastering her teachings.'
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the east, the season of spring, and the element of wood. It is the noblest of the Ssu-Ling and dwells in a palace at the bottom of the ocean. In Feng Shui, placing water to the east is known to guide its power, and is said to bring good fortune.'
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Sun Wu Kong was supposedly born from a rock. He wreaked havoc and was punished by Buddha, but was eventually saved by a monk named Santsang.'
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
		alignment: null,
		lore: 'A title Sun Wukong had given himself. Born from a rock, he wreaked havoc and was punished by Buddha who imprisoned him under a mountain. Eventually, he was saved by a monk named Xuanzang.',
		user: 'Ryuji Sakamoto',
		stage: 2,
		evoSkillName: 'Evade Wind'
	},
	{
		name: 'Senri',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'A spirit formed of a long-lived wildcat. It disguises itself as a beautiful woman to take vitality from men. Some say other demon animals collect vitality in order to become Senri themselves.'
	},
	{
		name: 'Setanta',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A brave young man in Celtic myth.\nAfter defeating a fierce guard dog, he volunteered to take its place, thus earning himself "Culann\'s Hound" as his nickname.'
	},
	{
		name: 'Seth',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'The Egyptian god of the desert, chaos and evil.\nHe murdered his brother, Osiris, and tried to become chief god, but he was castrated by Osiris\' son, Horus.'
	},
	{
		name: 'Shiisaa',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A holy beast said to protect houses from evil and grant them fortune.\nThough it may look similar to Shinto guardian dogs, it is actually modeled after a lion. There are many stories about it in Ryukyu lore.'
	},
	{
		name: 'Shiki-Ouji',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A powerful creature often summoned by Japanese sorcerers called onmyoji.\nThey are used both to hurt and to heal, but their true nature is said to be very violent.'
	},
	{
		name: 'Shiva',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The great god who governs the destruction and creation of the world. He is the most worshipped god in Hinduism alongside Vishnu.\nIt is said that he purifies the world through destruction only to rebuild it anew, and though he casts terrifying destruction against the demons, he also blesses his followers. Shiva has been depicted in many ways, but the most common is for him to have four hands, one face and three eyes. He wields a trishula, or trident, and his third eye is said to emit a ray of light that destroys all it touches.'
	},
	{
		name: 'Siegfried',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The name of the hero in the epic German poem, the Nibelungenlied, often seen as the same as Sigurd of Norse folklore.\nHe was married to Kriemhild, the princess of Burgundy, and is said to have become wrapped up in a feud between her and Brunhilde of Austrasia, resulting in many attempts on his life. The dragon Fafnir\'s blood made him invincible, but a single leaf on his back resulted in a weak spot, which was later exploited by the treacherous Hagan.'
	},
	{
		name: 'Silky',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A house fairy of England and Scotland.\nA welcome spirit, she carries out household chores while everyone sleeps. It is said you can hear her silk skirts rustle as she works. However, she is not without a dangerous side, and will kill anyone who tries to cause harm to the family she protects.'
	},
	{
		name: 'Skadi',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A giantess called the "snowshoe goddess," she is the embodiment of winter.\nAccording to legend, all gods will return to her at the end of Ragnarok.'
	},
	{
		name: 'Slime',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A gel-like monster. It is said to be the byproduct of a failed summoning.\nDevoid of its original powers, it is trapped in an incomplete gel form. There are several theories of when the slime first was recorded as a monster. They tend to collect shiny objects.'
	},
	{
		name: 'Sraosha',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'In Zoroastrian lore, Sraosha\'s duty is to listen to humanity\'s cry for Ahura Mazda.\nIt is also known to descend after sunset to vanquish evil, and its name literally means "observance."'
	},
	{
		name: 'Stone of Scone',
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
		game: 'p5',
		alignment: null,
		lore: 'Also known as the Stone of Destiny, it is a stone used in the coronations of Scotland\'s monarchs. Legends say the stone is linked to angels.'
	},
	{
		name: 'Succubus',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A female demon in popular European folklore during the medieval ages.\nThey are known to visit men in their sleep and have sex with them. And though they appear beautiful in the dream, in reality, they are ugly, old hags.'
	},
	{
		name: 'Sudama',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Earth spirits in Japanese mythology. They are born from ancient trees and boulders.\nThey are not evil but will transform into humans or monsters to warn people not to infiltrate their mountains.'
	},
	{
		name: 'Sui-Ki',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, it can cause floods with the swing of its arms. In the Taiheiki, Ki no Tomoo expelled the oni by reading a Japanese poem.'
	},
	{
		name: 'Sukuna-Hikona',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'One of the gods of Japanese lore. Son of Kamimusubi, he was so small he fell through her fingers at birth.\nThough he would normally be counted among the Amatsukami, he became blood-brothers with Okuninushi, and is now considered a Kunitsukami. After building Japan with Okuninushi, he is said to have returned to Tokoyo no Kuni, the land of eternity.'
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
		alignment: null,
		lore: null,
		user: 'Naoto Shirogane',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Sumeo-Okami',
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
		alignment: null,
		lore: null,
		user: 'Yukiko Amagi',
		stage: 3,
		evoSkillName: 'Maragibarion'
	},
	{
		name: 'Suparna',
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A legendary bird of Hindu mythology. Its name means "one with beautiful wings." It can create wind at will by flapping its wings, and can also change its size freely.'
	},
	{
		name: 'Surt',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A fire giant from Norse mythology.\nHe rules over Muspelheim, the realm of fire and brandishes a sword of fire called "Laevateinn". In Ragnarok, he will set the world ablaze.'
	},
	{
		name: 'Susano-o',
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
		alignment: null,
		lore: null,
		user: 'Yosuke Hanamura',
		stage: 2,
		evoSkillName: null
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the south, the season of summer, and the element of fire. It is said to resemble a quail in appearance and have a beautiful chirping voice.'
	},
	{
		name: 'Suzuka Gongen',
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
		alignment: null,
		lore: null,
		user: 'Chie Satonaka',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Sylph',
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A cheerful, mischief-loving spirit that governs air. Since belief in it dates back generations, many have tried to find a real Sylph.'
	},
	{
		name: 'Takehaya Susano-o',
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
		alignment: null,
		lore: null,
		user: 'Yosuke Hanamura',
		stage: 3,
		evoSkillName: 'Youthful Wind'
	},
	{
		name: 'Takeji Zaiten',
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
		alignment: null,
		lore: null,
		user: 'Kanji Tatsumi',
		stage: 3,
		evoSkillName: 'The Man\'s Way'
	},
	{
		name: 'Take-Mikazuchi',
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
		alignment: null,
		lore: null,
		user: 'Kanji Tatsumi',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Take-Minakata',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A Japanese god of war, hunting, and fertility.\nHe fought Take-Mikazuchi for control of Japan and lost. He escaped to Suwa but has been prohibited from leaving ever since.'
	},
	{
		name: 'Tam Lin',
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
		game: 'p5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A fae knight of the Seelie Court, said to protect the forest of Carterhaugh. After being kidnapped by the faeries at the tender age of 9, he lived much of his life among them.'
	},
	{
		name: 'Tao',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'Once cherished as the Saint of Bethel, Tao Isonokami was forced to watch helplessly as a close friend perished before her eyes. At that moment, the voice of a higher being spoke unto her, awakening the goddess within.\nEven after her divine transfiguration, she appears to have retained her memories. However, she has cast off her former personality, and no longer acts as she once did as a human.'
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'One of the Si-xiong of ancient China. It has a human face on a sheep-like body, and sharp fangs. Its insatiable hunger causes it to eat until nothing remains.'
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
		game: 'p4',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'One of the Si-xiong from the west side of China, it is believed to carry the blood of a great emperor. Its stubborn personality leads it to fight until it can no longer stand.'
	},
	{
		name: 'Thanatos',
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
		alignment: null,
		lore: 'A Persona of another story. The Greek god of death, he is the son of Nyx and the twin brother of Hypnos. He is known to provide mortals with a peaceful death.',
		user: 'Elizabeth',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Thanatos Picaro',
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. The Greek god of death, he is the son of Nyx and the twin brother of Hypnos. He is known to provide mortals with a peaceful death.'
	},
	{
		name: 'Thor',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The Norse god of thunder and fertility whose strength is incomparable.\nHe is a heroic and honest god worshipped mainly by farmers and is primarily known for defeating the giants. He wields Mjolnir, a hammer that returns to its owner after being thrown. He and the World Serpent, Jormungandr, are fated to kill each other at the end of Ragnarok.'
	},
	{
		name: 'Thoth',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'An almighty god of Egyptian lore with the head of a baboon. He stands opposite of Seth, the god of evil, and sides with Osiris and Isis, the gods of good.'
	},
	{
		name: 'Throne',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'The third of the nine orders of angels. Their Hebrew name, Ophan, carries the meaning of "wheel".\nThey are the highest ranking angels to carry a material body and are tasked with carrying the seat of God.'
	},
	{
		name: 'Thunderbird',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A revered bird of Native American mythology said to live atop cloud-shrouded peaks.\nIt resembles an eagle, and its wingbeats create mighty thunderclaps. Some legends say its eyes can unleash lightning, and other accounts say it can carry an entire lake on its back or even swallow an entire whale whole.'
	},
	{
		name: 'Titan',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The children of Gaia and Uranus in Greek myth. They ruled the land as gods before the Olympians overthrew them.'
	},
	{
		name: 'Titania',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The queen of the fairies and King Oberon\'s wife. She is based on the Roman goddess Diana and was later imagined as a fairy.\nShe is famously recognized as a queen in William Shakespeare\'s "A Midsummer Night\'s Dream."'
	},
	{
		name: 'Tomoe',
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
		alignment: null,
		lore: null,
		user: 'Chie Satonaka',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Triglav',
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
		game: 'p4',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'A Slavic god whose name means "three heads". He rode a holy black horse, in contrast to Sventovit, who rode a white horse.'
	},
	{
		name: 'Trismegistus',
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
		alignment: null,
		lore: null,
		user: 'Junpei Iori',
		stage: 2,
		evoSkillName: 'Spring of Life'
	},
	{
		name: 'Trumpeter',
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
		game: 'smt5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'Angels that sound their trumpets to signify the coming of the apocalypse ordained in the Book of Revelation.\nIt is said that the trumpets bring plagues and disasters, turning the earth into a land of death and sufferring.'
	},
	{
		name: 'Tsuchigumo',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'Monsters said to come from the bastardization of certain clans of Japan. The word carries the literal meaning of "dirt spider."\nThose who did not pledge allegiance to the Imperial Court were called this derogatory term because of their short stature and spindly limbs. As time passed, people may have misinterpreted the name for a literal meaning and made them into spiders, or perhaps the manifestations of grudges of those who were persecuted by the Imperial Court.'
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
		alignment: null,
		lore: 'A Persona of another story. An important god born from the Japanese god Izanagi, he governs over the moon and the night. There are many theories behind this mysterious god.',
		user: 'Sho Minazuki',
		stage: 1,
		evoSkillName: null
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
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. An important god born from the Japanese god Izanagi, he governs over the moon and the night. There are many theories behind this mysterious god.'
	},
	{
		name: 'Turdak',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Neutral'
		},
		lore: 'An Indian deity that serves Yama, the god of death.\nWhen Yama judges a dead soul to be guilty, Turdak acts as the executioner and drags that soul to hell.'
	},
	{
		name: 'Tzitzimitl',
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'Goddess of Aztec myth who governs night and fear, she symbolizes death and evil. Her wawr with the sun god caused a catastrophic solar eclipse. She seeks a sacrifice every 52 years.'
	},
	{
		name: 'Ukobach',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A subordinate demon of Hell, ordered by Beelzebub to stoke the fires that heat its iron pots. He also throws coals into the fire to torment humans trapped in Hell.'
	},
	{
		name: 'Undine',
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
		game: 'p4',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'This water spirit lives in lakes and fountains, appearing as a beautiful woman. It has no soul unless it marries a human man, which is a serious taboo among Undines.'
	},
	{
		name: 'Unicorn',
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
		game: 'p5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A legendary white horse with a single spiral horn. It can only be tamed by a pure maiden, and its horn supposedly has miraculous healing capabilities.'
	},
	{
		name: 'Uriel',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the four major angels.\nHis name means "flame of God," and he possesses knowledge of all celestial phenomena. He is also the first angel Satan met after falling to Earth.'
	},
	{
		name: 'Valjean',
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
		alignment: null,
		lore: 'Protagonist of Victor Hugo\'s "Les Misérables." Jailed after stealing bread for his starving nephews, he was consumed by bitterness, but a bishop\'s mercy inspired a change of heart. He strove to be a virtuous champion of the poor and downtrodden.',
		user: 'Zenkichi Hasegawa',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Valkyrie',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'Daughters of Odin from Norse mythology.\nTheir name means "choosers of the slain." Armed with shining armor and spears, they look for brave warriors to take to Valhalla, so that they may fight in Ragnarok.'
	},
	{
		name: 'Vanadis',
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
		alignment: null,
		lore: 'The true name of Freyja, of the Norse Vanir deities. Younger twin sister of Freyr. Her name means "dis of the Vanir" - dis being a goddess. Known to be a great beauty and a witchlike master of magic.',
		user: 'Sumire Yoshizawa',
		stage: 2,
		evoSkillName: 'Evade Dark'
	},
	{
		name: 'Vasuki',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A giant serpent of Hindu lore.\nIt is said that gods and demons used him as a rope to churn the sea of milk to create Amrita, while also using Mt. Mandara as the stick. The strain from this caused him to exhale incredibly poisonous venom, but it was safely swallowed up by Shiva.'
	},
	{
		name: 'Vetala',
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
		game: 'p4',
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A type of Preta in Hindu and Buddhist myth. Classified as "powerful ghosts," they have varying shapes and forms. They can control the dead and eat humans.'
	},
	{
		name: 'Virtue',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'The fifth of the nine orders of angels, also known as "The Shining Ones." They work miracles and support those struggling with their faith.'
	},
	{
		name: 'Vishnu',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'One of the Trimurti and the highest-ranking god in Hinduism.\nHe governs the universe and is also recognized as its protector. It is said that, when the surface world is in danger, he will appear as an avatar.'
	},
	{
		name: 'Vohu Manah',
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
		game: 'p5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'The second of Zoroastrianism\'s "divine sparks," Amesha Spenta, its name means "good thought." This holy entity is said to have given Zoroaster revelations from God.'
	},
	{
		name: 'White Rider',
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
		game: 'smt5',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides a white horse and carries a bow. Wears a resplendent crown as a symbol of God\'s dominion over Armageddon, and promises to bring total victory.'
	},
	{
		name: 'William',
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
		alignment: null,
		lore: 'The other name of Captain Kidd, world-renowned pirate. For years after his death, songs and legends of his life inspired many to chase rumors of his buried treasure across the seas.',
		user: 'Ryuji Sakamoto',
		stage: 3,
		evoSkillName: 'Fighting Spirit'
	},
	{
		name: 'Xiezhai',
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
		game: 'p4',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'A spirit from Chinese legend, shaped like a sheep, that can see through any lie. It occasionally appears in the human world to punish evildoers with the power stored in its sharp horn.'
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'Semi-divine beings in Hindu mythology.\nThough they were once worshipped by the Dravidians as goddesses of the harvest, they became interpreted as demons with the spread of Hinduism and the two clashing ideologies. They are depicted as naked women with voluptuous bodies'
	},
	{
		name: 'Yamata-no-Orochi',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A giant snake with eight heads that the hero Susano-o defeated to save Kushinada-Hime.\nThe legendary sword Ame-no-Murakumo-no-Tsurugi, also known as the "Sword of Kusanagi," was said to have emerged from its belly.'
	},
	{
		name: 'Yamato Sumeragi',
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
		alignment: null,
		lore: null,
		user: 'Naoto Shirogane',
		stage: 3,
		evoSkillName: 'Shield of Justice'
	},
	{
		name: 'Yamato-Takeru',
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
		alignment: null,
		lore: null,
		user: 'Naoto Shirogane',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Yatagarasu',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A divine creature in Japanese mythology, they are three-legged ravens that the goddess Amaterasu sent to help humans.\nIt is said that they helped Emperor Jinmu claim victory, and, despite their divine standing, those who are unworthy have been known to go mad after looking them directly in the eye.'
	},
	{
		name: 'Yatsufusa',
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
		game: 'p4',
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: '7 days after its birth, a wolf killed its mother. Yoshizane Satomi later promised his daughter\'s hand if it could defeat the enemy, but after Yatsufasa\'s success, Yoshizane\'s retainer shot it dead.'
	},
	{
		name: 'Yomotsu-Shikome',
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
		game: 'p4',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A demoness in Japanese mythology that lives in Yomi, the netherworld. She is the first demon Izanami sends after Izanagi.'
	},
	{
		name: 'Yoshitsune',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A Japanese general of the Genpei War near the end of the Heian era and start of the Kamakura era.\nAlso known as Ushiwakamaru, he is said to have learned the art of war from the Mt. Kurama Tengu. On joining his half-brother Yoritomo\'s army, he defeated the Taira one by one, finishing them off at the battle of Dan-no-ura. He was later pursued by Yoritomo\'s army, only to kill himself at Koromogawa.'
	},
	{
		name: 'Yurlungur',
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
		game: 'smt5',
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'In Oceanian folklore, he is a giant copper python.\nA being that transcends good and evil, he governs the weather and is considered a god of harvest. He is known as the "Rainbow Serpent" because the water in the well he calls home is said to shine like a rainbow.'
	},
	{
		name: 'Zaou-Gongen',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Repeller of evil found at Kinpusen by En-no-Ozunu.\nBelieved to be a fusion of Buddha, Guanyin, and Maitreya, he is a god who originated from Japan, rather than the Buddhavacana.'
	},
	{
		name: 'Zeus',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The main deity of Greek mythology. Said to be omnipotent, he is both god of the sky and ruler of the twelve gods of Olympus.\nHe is a son of the titan Kronos and brother to both Hades and Poseidon. Upon defeating his father, he claimed the right to rule the entire universe. He also fathered many children with not only goddesses, but a number of human women as well.'
	},
	{
		name: 'Zhen',
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
		game: 'smt5',
		alignment: {
			moral: 'Dark',
			ethical: 'Law'
		},
		lore: 'A bird in Chinese mythology said to have poison in its feathers because it eats poisonous snakes.\nDipping a feather into wine will turn it into a deadly poison, able to kill anyone with a single drop.'
	},
	{
		name: 'Zorro',
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
		alignment: null,
		lore: 'A masked swordsman of justice who fought in California against corrupt officials during the era of Spanish rule. He always left his "Z" mark with his rapier wherever he appeared.',
		user: 'Morgana',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Zouchouten',
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
		game: 'smt5',
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Zouchouten, protector of the South, is one of the Four Heavenly Kings in Buddhist mythology.\nSimilarly to his fellow kings, he is often depicted as a fierc warrior, clad in armor and wielding a long sword, though he is sometimes shown wielding a trident instead. Also known as Virudhaka, he is god of the five grains.'
	}
]);

export default demonData;