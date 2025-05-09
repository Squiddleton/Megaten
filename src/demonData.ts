import type { DemonData, PersonaData } from './dataTypes.js';

const demonData: (DemonData<true> | DemonData<false> | PersonaData)[] = [
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
			Fire: 'Null',
			Elec: 'Weak',
			Dark: 'Resist',
			Seal: 'Weak',
			Mirage: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'The king of the abyss that appears in the Book of Revelation of the New Testament.\nHe controls locusts and plagues and leads the seventh order of demons who are set to appear at the sounding of the fifth trumpet on Judgment Day, when it is said that will bring horde of locusts to make the people suffer. His name in Hebrew means "destroyer" or "endless pit". It is thought that his origins lie in deification of the natural disasters caused by locust swarms.',
		origin: 'Abrahamic'
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
			Elec: 'Resist',
			Force: 'Resist',
			Light: 'Repel',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A high-ranking angel that is wholly devoted to God. The name Abdiel carries the meaning of "slave to God," which supposedly originates from the Arabic word for "slave".\nOf the angels who followed Satan, Abdiel was the only one to reject the temptation to rebel against God, and instead received God\'s praises for returning to His side. Abdiel then led the angels to fight against Lucifer.',
		origin: 'Abrahamic'
	},
	{
		name: 'Abdiel - Fallen',
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
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Light: 'Weak',
			Dark: 'Repel',
			Confusion: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A high-ranking angel that is devoted to God. The name carries the meaning of "slave to God," which supposedly originates from the Arabic word for "slave".\nOf the angels who followed Satan, Abdiel was the only one to reject the temptation to rebel against God, and instead received praise for returning to His side. Abdiel took this form after resolving to protect the order that God created and thus fell to darkness to obtain power greater than that of the angels.',
		origin: 'Abrahamic'
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
			Fire: 'Resist',
			Ice: 'Weak',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Chancellor of Hell and supervisor of Satan\'s wardrobe. He has the body of a mule, though he may also sometimes appear as a peacock.\nHe was worshipped by the Assyrians, who occasionally offered him children as sacrifice.',
		origin: 'Abrahamic'
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
			Elec: 'Weak',
			Force: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A wind elemental; one of the four elements in energy form.\nIt is said to be a fusion of "moist" and "heat" essences, forming the basis for an exponential energy increase.',
		origin: 'Universal'
	},
	{
		name: 'Aeshma',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Tower',
		race: 'Tyrant',
		level: 10,
		hp: 134,
		mp: 97,
		stats: {
			st: 16,
			dx: 16,
			ma: 16,
			ag: 16,
			lu: 16
		},
		learnset: [
			{
				name: 'Refrigerate',
				level: 0
			},
			{
				name: 'Ice Pierce',
				level: 0
			},
			{
				name: 'Fire Pierce',
				level: 13
			},
			{
				name: 'Elec Pierce',
				level: 16
			},
			{
				name: 'Force Pierce',
				level: 19
			},
			{
				name: 'Star Tarantella',
				level: 21
			}
		],
		resistances: {},
		game: 'smt4',
		alignment: null,
		lore: null,
		origin: 'Zoroastrian'
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
			Ice: 'Weak',
			Elec: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A familiar with no physical body that only appears during the day.\nThere is no consensus on the appearance of an Agathion: it can resemble a human, bird, or animal. They are usually sealed away in bottles or pots but can also be sealed in rings or talismans. The term Agathion is also used as a general term for familiars.',
		origin: 'European'
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
			Psy: 'Weak',
			Nuke: 'Null',
			Dark: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'Another name of Johanna, the female pope of the middle ages. Posing as a man, her wits and ability helped her climb the ranks. Her story shook the Catholic Church to its core.',
		origin: 'European',
		user: 'Makoto Niijima',
		stage: 3,
		evoSkillName: 'Checkmate'
	},
	{
		name: 'Agrat',
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 2,
				Ice: 4,
				Elec: -5,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 5,
				Ailment: -4,
				Recovery: 3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Qadištu',
		level: 68,
		hp: 348,
		mp: 396,
		stats: {
			st: 26,
			vi: 51,
			ma: 78,
			ag: 42,
			lu: 39
		},
		learnset: [
			{
				name: 'Queen\'s Decree',
				level: 0
			},
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Diamrita',
				level: 0
			},
			{
				name: 'Almighty Pleroma',
				level: 69
			},
			{
				name: 'Bufubarion',
				level: 70
			},
			{
				name: 'Mediarahan',
				level: 71
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Null',
			Elec: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Agrat bat Mahlat. One of the four female demons in the Zohar, a spiritual text of Jewish mystical thought.\nHer name means "Agrat, daughter of Mahlat": said to be the child of Mahlat, daughter of Ishmael, who had a child with a desert demon named Igrathiel. A queen of demons, she is called "the demon who dances on the roof" and is said to wander the air with a horde of messengers of destruction on Wednesday and Sabbath eve. It is also said that men sometimed begged Agrat for help, seeking for her to share the night with them.',
		origin: 'Abrahamic'
	},
	{
		name: 'Airavata',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 2,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Holy',
		level: 44,
		hp: 446,
		mp: 136,
		stats: {
			st: 69,
			dx: 43,
			ma: 32,
			ag: 46,
			lu: 53
		},
		learnset: [
			{
				name: 'Earthquake',
				level: 0
			},
			{
				name: 'Chakra Walk',
				level: 45
			},
			{
				name: 'Life Surge',
				level: 46
			}
		],
		resistances: {
			Gun: 'Null',
			Fire: 'Weak',
			Ice: 'Resist',
			Elec: 'Resist',
			Light: 'Resist',
			Dark: 'Weak',
			Seal: 'Weak',
			Confusion: 'Resist',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: null,
		lore: null,
		origin: 'Hindu'
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
			Fire: 'Null',
			Ice: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A fairy in Lithuanian mythology.\nIndoors, it takes the form of a black cat or rooster. Outdoors, it takes the form of a small dragon or a snake with a burning tail. The Aitvaras makes the home it inhabits rich by stealing from its neighbors. It is said that it typically demands an omelette as compensation and is difficult to chase away once it\'s settled into a home. It can, however, be exterminated by shining it with the flame of a candle purified by the church.',
		origin: 'Lithuanian'
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
		resistances: {},
		game: 'p5',
		alignment: null,
		lore: 'The original name of the Necronomicon, a tome of the Cthulhu Mythos\'s mysteries. Said to have been authored by Abdul Alhazred, a poet and devotee of Cthulhu known as the \'mad Arab.\'',
		origin: 'Lovecraftian',
		user: 'Futaba Sakura',
		stage: 3,
		evoSkillName: 'Ultimate Support'
	},
	{
		name: 'Albion',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Entity',
		level: 64,
		hp: 534,
		mp: 252,
		stats: {
			st: 25,
			ma: 20,
			vi: 25,
			ag: 10,
			lu: 16
		},
		learnset: [
			{
				name: 'Drain Attack',
				level: 65
			},
			{
				name: 'Drain Phys',
				level: 66
			},
			{
				name: 'Recarmdra',
				level: 67
			},
			{
				name: 'Hades Blast',
				level: 68
			}
		],
		resistances: {
			Phys: 'Null',
			Ice: 'Null',
			Light: 'Null'
		},
		game: 'smt3',
		alignment: null,
		lore: 'The ruler of ancient Britain. He is the first giant of Britain. It is said that he was born from Amphitrite, the wife of Poseidon.',
		origin: 'European'
	},
	{
		name: 'Alciel',
		aliases: [
			'Aciel'
		],
		affinities: {
			skillPotential: {
				Phys: -4,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 2,
				Almighty: 0,
				Recovery: 0,
				Ailment: 3,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Vile',
		level: 67,
		hp: 472,
		mp: 262,
		stats: {
			st: 65,
			dx: 58,
			ma: 86,
			ag: 69,
			lu: 76
		},
		learnset: [
			{
				name: 'Poison Breath',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 0
			},
			{
				name: 'Magaon',
				level: 68
			}
		],
		resistances: {
			Phys: 'Weak',
			Gun: 'Weak',
			Fire: 'Null',
			Ice: 'Null',
			Elec: 'Null',
			Force: 'Null',
			Light: 'Weak',
			Dark: 'Drain',
			Seal: 'Resist'
		},
		game: 'smt4',
		alignment: null,
		lore: 'The "Black Sun" who lives in the underworld in Babylonian lore.\nHis original name is Aciel, which the Jews borrowed from a Babylonian god, and called him the "King of Gehenna." But in some Asian faiths, all things are reborn only by darkness, so Aciel is not all bad.',
		origin: 'Abrahamic'
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
			Light: 'Weak',
			Dark: 'Drain'
		},
		game: 'smt5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'A mysterious spirit that takes the form of a blonde girl. Despite her innocent appearance, she possesses immeasurable magical strength.\nSome say she is the ghost of an English girl who died a tragic death. Others say she is merely an apparition born from someone\'s imagination.',
		origin: 'European'
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
			Light: 'Resist',
			Dark: 'Resist',
			Mirage: 'Resist',
			Confusion: 'Resist',
			Charm: 'Resist',
			Sleep: 'Null',
			Poison: 'Null',
			Seal: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The Arabian mother goddess also known as Allat.\nShe was thought to reside in the Black Stone at the Kaaba, where and her son, Dusura, were worshipped by desert nomads.',
		origin: 'Arabian'
	},
	{
		name: 'Alraune',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 2,
				Fire: -4,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 3,
				Support: 0
			},
			inherit: 'Recovery'
		},
		arcana: 'Moon',
		race: 'Wood',
		level: 48,
		hp: 499,
		mp: 204,
		stats: {
			st: 47,
			dx: 75,
			ma: 39,
			ag: 51,
			lu: 62
		},
		learnset: [
			{
				name: 'Madness Needle',
				level: 0
			},
			{
				name: 'Sexy Dance',
				level: 0
			},
			{
				name: 'Blast Arrow',
				level: 49
			},
			{
				name: 'Mana Gain',
				level: 51
			}
		],
		resistances: {
			Gun: 'Resist',
			Fire: 'Weak',
			Charm: 'Null',
			Daze: 'Weak',
			Sick: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A cursed Norse spirit in the form of a beautiful woman, known to bloom from the blood of hanged men. She was believed to tell secrets if properly tended to.',
		origin: 'Norse'
	},
	{
		name: 'Amabie',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 1,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Ailment: -3,
				Recovery: 3,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Enigma',
		level: 39,
		hp: 190,
		mp: 202,
		stats: {
			st: 15,
			vi: 29,
			ma: 38,
			ag: 26,
			lu: 34
		},
		learnset: [
			{
				name: 'Good Cheer',
				level: 0
			},
			{
				name: 'Media',
				level: 0
			},
			{
				name: 'Bowl of Hygieia',
				level: 0
			},
			{
				name: 'Heal Pleroma',
				level: 40
			},
			{
				name: 'Resist Dark',
				level: 41
			},
			{
				name: 'Samarecarm',
				level: 42
			}
		],
		resistances: {
			Ice: 'Null',
			Light: 'Resist',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A Japanese yokai said to have appeared in the Higo Province during the Edo period. One day, it was spotted as a glowing object in the sea, and made a prophecy to those who investigated it. The prophecy was that for the next six years, there would be a bountiful harvest, but also an epidemic of disease. Once that time came, it said, those who fell ill should be shown a drawing of Amabie as soon as possible to ward off the sickness. Similar rumors were recorded around this time for amabiko, jinjahime, and kudan.',
		origin: 'Japanese'
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
			Fire: 'Weak',
			Ice: 'Weak',
			Elec: 'Repel',
			Force: 'Null',
			Light: 'Resist',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A Japanese goddess commonly thought to be the ancestor of the tengu and amanojaku.\nThe famed warrior Susano-o once allowed his tempestuous spirit to build up to such an intense degree, he vomited her out as a result. Similarly to Susano-o, she has a wild personality and tends to go on a rampage if she doesn\'t get her way. It is said that she can hurl even the most powerful gods a great distance, and that her fangs can mangle the very sharpest of blades. Like amanojaku, she is prone to doing the exact opposite of what is expected.',
		origin: 'Japanese'
	},
	{
		name: 'Amaterasu',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 5,
				Ice: -2,
				Elec: -3,
				Force: 0,
				Light: 2,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Amatsu',
		level: 79,
		hp: 493,
		mp: 406,
		stats: {
			st: 53,
			dx: 69,
			ma: 118,
			ag: 77,
			lu: 94
		},
		learnset: [
			{
				name: 'Trisagion',
				level: 0
			},
			{
				name: 'Will of Flame',
				level: 0
			},
			{
				name: 'Mana Surge',
				level: 80
			},
			{
				name: 'Mediarahan',
				level: 81
			},
			{
				name: 'Null Light',
				level: 82
			}
		],
		resistances: {
			Fire: 'Repel',
			Elec: 'Weak',
			Light: 'Resist'
		},
		game: 'smt4',
		alignment: null,
		lore: 'The Japanese goddess of light. She is one of the leading deities of Takaamagahara, the land of the Amatsu gods. A deification of the sun, she also governs life. It is said she was born from the left eye of Izanagi.',
		origin: 'Japanese'
	},
	{
		name: 'Amaterasu - P4',
		aliases: [
			'Amaterasu'
		],
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
			Fire: 'Null',
			Ice: 'Weak',
			Elec: 'Resist'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
		user: 'Yukiko Amagi',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Ame-no-Uzume',
		aliases: [
			'Ame no Uzume'
		],
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
			Elec: 'Null',
			Force: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The goddess of entertainment in Japanese lore.\nShe governs many sacred dances and is most famous for the provocative dance she used to lure out Amaterasu, who had barricaded herself inside a cave. She later became Sarutahiko\'s wife.',
		origin: 'Japanese'
	},
	{
		name: 'Ammut',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Beast',
		level: 64,
		hp: 614,
		mp: 187,
		stats: {
			st: 97,
			dx: 60,
			ma: 44,
			ag: 64,
			lu: 74
		},
		learnset: [
			{
				name: 'Energy Drain',
				level: 0
			},
			{
				name: 'War Cry',
				level: 0
			},
			{
				name: 'Nihil Claw',
				level: 65
			},
			{
				name: 'Null Fire',
				level: 66
			}
		],
		resistances: {
			Gun: 'Resist',
			Ice: 'Weak',
			Elec: 'Null',
			Confusion: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt4',
		alignment: null,
		lore: 'A creature of Egyptian lore with the head of a crocodile, the front legs of a lion, and the hind legs of a hippo.\nWhen a person dies, he must be judged by Osiris. His heart is weighed on a scale, and if the heart is heavier than the feather of truth, the heart is given to Ammut to devour, denying the dead of eternal life.',
		origin: 'Egyptian'
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
		level: 87,
		hp: 668,
		mp: 352,
		stats: {
			st: 73,
			vi: 78,
			ma: 66,
			ag: 34,
			lu: 49
		},
		learnset: [
			{
				name: 'Megido Flame',
				level: 0
			},
			{
				name: 'Nihil Claw',
				level: 0
			},
			{
				name: 'Madness Nails',
				level: 0
			},
			{
				name: 'Abyssal Mask',
				level: 0
			},
			{
				name: 'Great Life Spring',
				level: 88
			},
			{
				name: 'Debilitate',
				level: 89
			},
			{
				name: 'Trisagion',
				level: 90
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Drain',
			Ice: 'Weak',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of Solomon\'s "Ars Goetia."\nHe is the seventh spirit of Goetia and the Grand Marquis of Hell. Amon is depicted in several different forms, sometimes appearing as a wolf with a serpent\'s tail, and other times appearing as having the head of an owl, the torso of a wolf, and the tail of a snake sometimes replacing his hind legs altogether. It is said that he bestows knowledge of the past and the future. He is also incredibly loyal, having led his army to assist Satan when Satan rebelled against God.',
		origin: 'Abrahamic'
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
			Fire: 'Weak',
			Ice: 'Drain',
			Elec: 'Weak',
			Light: 'Null',
			Mirage: 'Resist',
			Confusion: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A Zoroastrian goddess whose name means "pure."\nWhile primarily known as a beautiful deity who rules over rivers and water, she is also the goddess of health, fertility, safe delivery, production of livestock, harvest, wealth and expansion of land. She is often portrayed as an elegant virgin wearing a crown decorated with numerous stars in addition to a golden necklace and a golden cape, and is typically shown holding a water jug. She is also a brave god of war astride a four-wheeled chariot, toppling demons and tyrants alike. Both her allies and her enemies have been said to have offered their prayers to her.',
		origin: 'Zoroastrian'
	},
	{
		name: 'Anansi',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -4,
				Ice: 2,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 2,
				Almighty: 0,
				Ailment: 1,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Genma',
		level: 49,
		hp: 225,
		mp: 243,
		stats: {
			st: 22,
			vi: 27,
			ma: 47,
			ag: 30,
			lu: 43
		},
		learnset: [
			{
				name: 'What Comes After Four',
				level: 0
			},
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Fire Block',
				level: 50
			},
			{
				name: 'Life Aid',
				level: 51
			},
			{
				name: 'Mamudoon',
				level: 52
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A folkloric hero of the Ashanti and other tribes in West Africa. He is depicted as a trickster who gets by on his wit and cunning. Portrayed as a spider or a man, depending on interpretation.\nAnansi appears in many stories, including one where he collects the people\'s wisdom in a gourd and attempts to hang it from a tree. But in a fit of dismay, he upends it and scatters wisdom across the world. Other stories tell of how he buys the stories of the sky god Onyankopon and makes them his own. These stories are collectively called Anansesem, or spider tales.',
		origin: 'African'
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
			Ice: 'Null',
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The 1,000-headed serpent of Hindu legend, Ananta is Sanskrit for "infinite."\nVishnu slept atop him before waking up to create the universe.',
		origin: 'Hindu'
	},
	{
		name: 'Anat',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 1,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Megami',
		level: 63,
		hp: 635,
		mp: 234,
		stats: {
			st: 99,
			dx: 59,
			ma: 48,
			ag: 70,
			lu: 78
		},
		learnset: [
			{
				name: 'Mortal Jihad',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 64
			},
			{
				name: 'Ally Retaliate',
				level: 65
			},
			{
				name: 'Phys Pleroma',
				level: 66
			}
		],
		resistances: {
			Phys: 'Resist',
			Ice: 'Weak',
			Light: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The goddess of birth and death. She is Baal\'s sister and wife.\nIt is said that even her father El in the heavens feared her power. She is known for bringing Baal back from the land of the dead by going there herself and defeating its ruler, Mot.',
		origin: 'Canaanite'
	},
	{
		name: 'Anat - P5',
		aliases: [
			'Anat'
		],
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
			Psy: 'Weak',
			Nuke: 'Null',
			Dark: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'The daughter of Ugaritic\'s highest god El. She is the goddess of fertility, as well as hunting and war. Her characteristics are the characteristics of the seasons in Canaan.',
		origin: 'Canaanite',
		user: 'Makoto Niijima',
		stage: 2,
		evoSkillName: 'Evade Psy'
	},
	{
		name: 'Ancient of Days',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Godly',
		level: 96,
		hp: 494,
		mp: 400,
		stats: {
			st: 88,
			dx: 98,
			ma: 127,
			ag: 83,
			lu: 117
		},
		learnset: [
			{
				name: 'Damnation',
				level: 0
			},
			{
				name: 'Stigmatic Gleam',
				level: 97
			},
			{
				name: 'Spirit Focus',
				level: 99
			}
		],
		resistances: {
			Elec: 'Weak',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: null,
		lore: null,
		origin: 'Abrahamic'
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
			Ice: 'Null',
			Elec: 'Weak',
			Light: 'Weak',
			Charm: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the "Ars Goetia."\nThe great Marquis of Hell, he appears where there is battle to stoke the hatred within soldiers. He helps defeat the enemies of those who summon him.',
		origin: 'Abrahamic'
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
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'Ninth of the nine orders of angels.\nThey are closest in nature to humans. They watch over individuals and offer warning to those who stray from the path.',
		origin: 'Abrahamic'
	},
	{
		name: 'Angel - Final',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 0,
				Light: 5,
				Dark: -6,
				Almighty: 0,
				Recovery: 3,
				Ailment: 0,
				Support: 4
			},
			inherit: null
		},
		arcana: 'Justice',
		race: 'Divine',
		level: 82,
		hp: 510,
		mp: 420,
		stats: {
			st: 54,
			dx: 71,
			ma: 122,
			ag: 80,
			lu: 97
		},
		learnset: [
			{
				name: 'Judgement Light',
				level: 0
			},
			{
				name: 'Luster Candy',
				level: 0
			},
			{
				name: 'Mediarahan',
				level: 83
			},
			{
				name: 'High Light Pleroma',
				level: 84
			}
		],
		resistances: {
			Fire: 'Resist',
			Elec: 'Weak',
			Force: 'Resist',
			Light: 'Null',
			Dark: 'Weak',
			Bind: 'Null',
			Charm: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'Ninth of the nine orders of angels.\nThey are closest in nature to humans. They watch over individuals and offer warning to those who stray from the path.',
		origin: 'Abrahamic'
	},
	{
		name: 'Aniel',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 6,
				Force: -5,
				Light: 6,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Herald',
		level: 90,
		hp: 743,
		mp: 335,
		stats: {
			st: 93,
			dx: 98,
			ma: 103,
			ag: 94,
			lu: 101
		},
		learnset: [
			{
				name: 'Thunder Reign',
				level: 0
			},
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 91
			},
			{
				name: 'Judgement Light',
				level: 92
			},
			{
				name: 'Thunder Gods',
				level: 93
			}
		],
		resistances: {
			Elec: 'Repel',
			Force: 'Weak',
			Light: 'Drain'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'He is the angel of beauty, also known as Hanael. His name means "grace of God." He is generally associated with the planet Venus and performs a similar role as the goddess Ishtar.\nHe gives rise to feelings of love amongst people and has the role of tying together young men and women. He is also thought to be the symbol of lasting friendship and lust. When he appears, it is said to be in the form of a beautiful man or woman.',
		origin: 'Abrahamic'
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
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Resist',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The jackal-headed god of the dead and embalming from Egyptian myth.\nHe weighs the hearts of the dead to determine their final destination. He is also said to govern the technique of mummification',
		origin: 'Egyptian'
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
			Elec: 'Null',
			Force: 'Weak',
			Sleep: 'Weak',
			Seal: 'Resist',
			Mirage: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'An evil deity of Mesopotamian folklore with an eagle\'s body and lion\'s head.\nWhile the god Enlil purified himself, Anzu stole the Tablet of Destinies from him in an attempt to become the chief god.',
		origin: 'Mesopotamian'
	},
	{
		name: 'Apis',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: -3,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Holy',
		level: 18,
		hp: 227,
		mp: 71,
		stats: {
			st: 33,
			dx: 21,
			ma: 16,
			ag: 20,
			lu: 28
		},
		learnset: [
			{
				name: 'Hama',
				level: 0
			},
			{
				name: 'Critical Wave',
				level: 0
			},
			{
				name: 'Tetraja',
				level: 19
			},
			{
				name: 'Media',
				level: 20
			}
		],
		resistances: {
			Light: 'Resist',
			Dark: 'Weak',
			Confusion: 'Resist',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The bull-god of Ptah, the god of creation in Egyptian lore worshipped in the Memphis region.\nApis was conceived by the union of a cow and a ray of light from the heavens. It is said to have 29 distinct identifying attributes, such as a diamond on its forehead and an eagle mark on its back.',
		origin: 'Egyptian'
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
			Fire: 'Weak',
			Ice: 'Resist',
			Charm: 'Null',
			Confusion: 'Weak',
			Sleep: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'Water spirits in Hindu lore.\nThey are beautiful young women who dance for the gods. They also guide heroes who fall in battle to paradise.',
		origin: 'Hindu'
	},
	{
		name: 'Apsu',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 5,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 82,
		hp: 510,
		mp: 420,
		stats: {
			st: 54,
			dx: 71,
			ma: 122,
			ag: 80,
			lu: 97
		},
		learnset: [
			{
				name: 'Ice Age',
				level: 0
			},
			{
				name: 'Victory Cry',
				level: 0
			},
			{
				name: 'Titanomachia',
				level: 83
			},
			{
				name: 'Smile Charge',
				level: 84
			},
			{
				name: 'Repel Fire',
				level: 85
			}
		],
		resistances: {
			Ice: 'Repel',
			Elec: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A Mesopotamian god of the deep waters.\nApsu existed since the birth of time and is depicted as a freshwater sea. He is the source of knowledge and made the lands fertile. His fresh water mixed with that of Tiamat, the deification of the chaotic salt waters, and from there the main gods were born.',
		origin: 'Mesopotamian'
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
			Fire: 'Weak',
			Ice: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A water elemental; one of the four elements in energy form.\nAccording to Aristotle, it is composed of both "moist" and "cold" essences.',
		origin: 'Universal'
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
			Phys: 'Resist',
			Ice: 'Weak'
		},
		game: 'p5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'One of the four great aspects of Shinto thought, it has the power to grant wildness and ferocity.\nIt is said to aid in one\'s bravery, growth, and endeavors, though it can potentially lead one in a negative direction.',
		origin: 'Japanese'
	},
	{
		name: 'Arachne',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 3,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Vermin',
		level: 44,
		hp: 409,
		mp: 153,
		stats: {
			st: 43,
			dx: 69,
			ma: 36,
			ag: 73,
			lu: 46
		},
		learnset: [
			{
				name: 'Stun Needles',
				level: 0
			},
			{
				name: 'Blast Arrow',
				level: 0
			},
			{
				name: 'Sukunda',
				level: 45
			}
		],
		resistances: {
			Gun: 'Null',
			Ice: 'Weak',
			Elec: 'Null',
			Light: 'Weak',
			Bind: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A spider demon of Greek lore. Once a skilled seamstress, she was changed after challenging Athena.\nShe spun a tapestry mocking the gods in the contest, and Athena cursed her to become a spider.',
		origin: 'Greco-Roman'
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
			Phys: 'Null',
			Fire: 'Weak',
			Ice: 'Weak',
			Elec: 'Weak',
			Force: 'Weak',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A major deity in ancient Japanese mythology. Clay dolls were often sculpted in its image.\nHowever, because this god was known to be worshipped by a rebel, the dolls later came to be considered symbols of defiance.',
		origin: 'Japanese'
	},
	{
		name: 'Aramisaki',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -3,
				Almighty: 2,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Zealot',
		level: 59,
		hp: 451,
		mp: 365,
		stats: {
			st: 42,
			dx: 56,
			ma: 94,
			ag: 84,
			lu: 73
		},
		learnset: [
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Magaon',
				level: 0
			},
			{
				name: 'Sea of Chaos',
				level: 60
			},
			{
				name: 'Blood Ritual',
				level: 61
			}
		],
		resistances: {
			Light: 'Resist',
			Dark: 'Weak',
			Charm: 'Weak',
			Confusion: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A violent goddess known as the Ara Mitama of the Sumiyoshi gods.\nWhen Empress Jingu went to Shinra, Aramisaki was sent by Amaterasu to protect the ship she was on. She is also a jealous god, and is known as a goddess of separation as Aramisakihime.',
		origin: 'Japanese'
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
			Elec: 'Weak',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'Eighth of the nine orders of angels.\nThey are responsible for ministering to humans and delivering messages. As warriors of the heavens, they lead the armies of heaven against the forces of darkness.',
		origin: 'Abrahamic'
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
			Phys: 'Resist',
			Ice: 'Null',
			Elec: 'Null'
		},
		game: 'p5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A god of dual gender whose appearance is half that of the destroyer, Shiva, and half his wife, Parvati. Ardha is the ideal figure of Shaktism, the perfect god.',
		origin: 'Hindu'
	},
	{
		name: 'Ares',
		affinities: {
			skillPotential: {
				Phys: 4,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Recovery: -2,
				Ailment: -3,
				Support: 1
			},
			inherit: 'Phys'
		},
		arcana: 'Chariot',
		race: 'Fury',
		level: 32,
		hp: 375,
		mp: 106,
		stats: {
			st: 57,
			dx: 40,
			ma: 24,
			ag: 35,
			lu: 40
		},
		learnset: [
			{
				name: 'Power Punch',
				level: 0
			},
			{
				name: 'Counter',
				level: 0
			},
			{
				name: 'Charge',
				level: 33
			},
			{
				name: 'Javelin Rain',
				level: 34
			}
		],
		resistances: {
			Light: 'Resist',
			Dark: 'Weak',
			Confusion: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The god of war in Greek myth. Other gods despised him for his cruel and violent nature. Opposed Athena, who represented strategic warfare.',
		origin: 'Greco-Roman'
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
			Gun: 'Resist',
			Psy: 'Weak',
			Nuke: 'Null',
			Light: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. She is the daughter of Minos, the king of Crete. She helped Theseus defeat the Minotaur and gave him a ball of yarn so he could escape the labyrinth.',
		origin: 'Greco-Roman',
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
			Gun: 'Resist',
			Psy: 'Weak',
			Nuke: 'Null',
			Light: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. She is the daughter of Minos. She helped Theseus defeat the Minoataur and gave him a ball of yarn so he could escape the Labyrinth.',
		origin: 'Greco-Roman'
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
			Ice: 'Repel',
			Elec: 'Weak',
			Force: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'The fallen angel of Israel and the demon of vengeance.\nHis name means "ferocious lion" and he is said to aid in vengeance of those who seek his service. During his time as an angel of God, he was recognized as the guardian angel of the saint Enoch. It is said that his name originally belonged to one in either the Book of Genesis or the Book of Daniel, only to become associated with the demon thereafter.',
		origin: 'Abrahamic'
	},
	{
		name: 'Armaiti',
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 4,
				Ailment: -2,
				Recovery: 2,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Herald',
		level: 53,
		hp: 245,
		mp: 259,
		stats: {
			st: 27,
			vi: 33,
			ma: 48,
			ag: 38,
			lu: 35
		},
		learnset: [
			{
				name: 'Spirit Drain',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 0
			},
			{
				name: 'Great Mana Spring',
				level: 54
			},
			{
				name: 'Diarahan',
				level: 55
			},
			{
				name: 'Megidola',
				level: 56
			}
		],
		resistances: {
			Elec: 'Weak',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Null',
			Charm: 'Resist',
			Seal: 'Resist',
			Confusion: 'Resist',
			Poison: 'Resist',
			Sleep: 'Resist',
			Mirage: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'An archangel worshipped in Zoroastrianism, and one of the Amesha Spenta.\nShe is the daughter of the head god Ahura Mazda, and an angel who oversees the earth and provides pasture for livestock. Armaiti is roughly translated as "devotion," and she is the personification of piety. It is said that she is heartbroken when sinful humans walk on her path, and rejoices when those who follow the laws of heaven feed their livestock and birth pious and virtuous children.',
		origin: 'Zoroastrian'
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
				name: 'Eiha',
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
			Ice: 'Weak',
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'A being based off the main character of Maurice Leblanc\'s novels, Arsène Lupin. He appears everywhere and is a master of disguise. He is known to help law-abiding citizens.',
		origin: 'Modern Fiction',
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
			Fire: 'Weak',
			Ice: 'Null',
			Elec: 'Null',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The Greek goddess of hunting and chastity. She was often identified with the moon goddess Selene and was therefore also worshipped as a moon goddess herself.\nLike her twin brother, Apollo, her association with archery granted her the title of "far-shooter" in addition to being recognized as a bringer of plague and death. This is depicted in myth, in which she is deceived by Apollo and shoots her beloved Orion.',
		origin: 'Greco-Roman'
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
			Fire: 'Weak',
			Ice: 'Null'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Historical',
		user: 'Mitsuru Kirijo',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Asherah',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 2,
				Fire: 2,
				Ice: -5,
				Elec: -2,
				Force: 3,
				Light: 0,
				Dark: 0,
				Almighty: 1,
				Recovery: 4,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Lady',
		level: 51,
		hp: 462,
		mp: 293,
		stats: {
			st: 50,
			dx: 85,
			ma: 75,
			ag: 45,
			lu: 57
		},
		learnset: [
			{
				name: 'Maragion',
				level: 0
			},
			{
				name: 'Grand Tack',
				level: 0
			},
			{
				name: 'Diarama',
				level: 52
			},
			{
				name: 'Judgement',
				level: 53
			},
			{
				name: 'Samarecarm',
				level: 54
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak',
			Force: 'Null',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A Semitic goddess who was the one to bring fertility to the Babylonian lands.\nShe is known as the mother of the gods. it is believed that in Phoenicia, she became Astarte.',
		origin: 'Canaanite'
	},
	{
		name: 'Asmodeus',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Tyrant',
		level: 51,
		hp: 421,
		mp: 220,
		stats: {
			st: 57,
			dx: 57,
			ma: 57,
			ag: 57,
			lu: 57
		},
		learnset: [
			{
				name: 'Fire Breath',
				level: 0
			},
			{
				name: 'Blight',
				level: 0
			},
			{
				name: 'Life Aid',
				level: 52
			},
			{
				name: 'Doping',
				level: 53
			}
		],
		resistances: {
			Gun: 'Null',
			Fire: 'Drain',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: null,
		origin: 'Abrahamic'
	},
	{
		name: 'Astaroth',
		aliases: [
			'Ashtar',
			'Astarte',
			'Ishtar'
		],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: 'Devil',
		race: 'Tyrant',
		level: 48,
		hp: 400,
		mp: 209,
		stats: {
			st: 54,
			dx: 49,
			ma: 49,
			ag: 65,
			lu: 54
		},
		learnset: [
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'High Ice Pleroma',
				level: 50
			},
			{
				name: 'Bloody Glee',
				level: 52
			}
		],
		resistances: {
			Ice: 'Repel',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: null,
		origin: 'Abrahamic'
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
			Ice: 'Resist',
			Psy: 'Null',
			Nuke: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Middle Eastern goddess of fertilty. Many scriptures note her folklore, and there is even a mention of her as the "Queen of Heaven" in the Bible.',
		origin: 'Abrahamic',
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
			Fire: 'Resist',
			Ice: 'Weak',
			Psy: 'Resist',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. Due to a curse on his mother Pasiphae, he was born a bull-headed monster. Locked away in the labyrinth as the Minotaur, he wielded a double-sided axe.',
		origin: 'Greco-Roman',
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
			Fire: 'Resist',
			Ice: 'Weak',
			Psy: 'Resist',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. Son of Pasiphae, he was born a bull-headed monster. Locked away in the labyrinth as the Minotaur, he wielded a double-sided axe.',
		origin: 'Greco-Roman'
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
			Fire: 'Repel',
			Ice: 'Weak',
			Light: 'Null',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A violent group of demons in Hindu lore.\nThey were very powerful and caused the gods great trouble. They are a fiercely strict group and attack anyone who runs counter to their ideals. They were originally gods of light worshipped in Persia. The Zoroastrian god Ahura Mazda was one of them.',
		origin: 'Hindu'
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
			Ice: 'Weak',
			Light: 'Null',
			Dark: 'Null',
			Seal: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'One of the eight Yasha-o.\nHis domain is war and protection. Originally known as a wicked devourer of children, he later became one of the greatest of the Wisdom Kings after receiving the Buddha\'s enlightenment.',
		origin: 'Buddhist'
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
			Phys: 'Resist',
			Gun: 'Null',
			Elec: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. Daughter of Zeus, and a goddess of great martial ability. She fights to protect her land or her family, but never for sheer bloodlust. Her symbol is the olive tree.',
		origin: 'Greco-Roman',
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
			Phys: 'Resist',
			Gun: 'Null',
			Elec: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. Daughter of Zeus, and a goddess of great martial ability. She fights to protect her land or her family, but never for sheer bloodlust.',
		origin: 'Greco-Roman'
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
			Fire: 'Weak',
			Ice: 'Resist',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the three Moirae Sisters in Greek mythology.\nShe cuts the life threads of those whose time has come.',
		origin: 'Greco-Roman'
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
			Fire: 'Null',
			Dark: 'Weak',
			Sleep: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A Phrygian god who symbolizes life, death, and revival.\nHe rejected Cybele\'s love and was driven mad, dying shortly after castrating himself. Cybele then resurrected him.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Azazel',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 3,
				Ice: 0,
				Elec: -4,
				Force: 3,
				Light: -2,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fallen',
		level: 61,
		hp: 350,
		mp: 297,
		stats: {
			st: 38,
			vi: 44,
			ma: 56,
			ag: 32,
			lu: 34
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Mazandyne',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Maragidyne',
				level: 62
			},
			{
				name: 'High Restore',
				level: 63
			},
			{
				name: 'Resist Light',
				level: 64
			}
		],
		resistances: {
			Fire: 'Null',
			Elec: 'Weak',
			Force: 'Null',
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A leader of the Grigori, a group of angels who descended to earth to educate humans. He is said to have committed acts of defiance against God, such as being attracted to beautiful human daughters on earth and taking them as wives, and giving humans various truths of forbidden knowledge. Azazel imparted knowledge of armors, ornaments, and makeup, teaching men to fight and struggle and women to dress up and seduce men.',
		origin: 'Abrahamic'
	},
	{
		name: 'Azrael',
		affinities: {
			skillPotential: {
				Phys: -5,
				Gun: 0,
				Fire: 3,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: 4,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Herald',
		level: 77,
		hp: 482,
		mp: 398,
		stats: {
			st: 51,
			dx: 67,
			ma: 115,
			ag: 75,
			lu: 91
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Blink of Death',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 78
			},
			{
				name: 'Tetrakarn',
				level: 79
			},
			{
				name: 'Null Dark',
				level: 80
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Resist',
			Ice: 'Weak',
			Light: 'Repel',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The Islamic angel of death, said to have four faces and four wings.\nAzrael has a book in which he inscribes and erases the names of those who are born and die. His body is covered in eyes. When one blinks, someone in the world dies.',
		origin: 'Abrahamic'
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
			Ice: 'Resist',
			Elec: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A water deity of the Azumi, a Japanese seafaring tribe. As such, it can freely control water.\nThe three gods born from Izanagi after he returned from Yomi are said to be the Azumi tribe\'s ancestors.',
		origin: 'Japanese'
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
			Fire: 'Resist',
			Ice: 'Weak',
			Elec: 'Repel',
			Force: 'Resist',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The chief Semitic god.\nBearing a name that means "Lord" or "owner," he was revered as a god of fertility in addition to being known as the god of Canaan and both brother and consort to the goddess Anat. Many demons, such as Bael, Beelzebub, Belphegor and Berith are believed to be derivations of Baal. There were even instances of him being worshipped in the very same temples as Yahweh (YHVH) in times long since passed.',
		origin: 'Canaanite'
	},
	{
		name: 'Baal Zebul',
		affinities: {
			skillPotential: null,
			inherit: 'Ice'
		},
		arcana: 'Moon',
		race: 'Tyrant',
		level: 84,
		hp: 666,
		mp: 333,
		stats: {
			st: 32,
			ma: 27,
			vi: 27,
			ag: 19,
			lu: 19
		},
		learnset: [
			{
				name: 'Maziodyne',
				level: 0
			},
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Null Freeze',
				level: 0
			},
			{
				name: 'Null Shock',
				level: 0
			},
			{
				name: 'Growth 3',
				level: 85
			},
			{
				name: 'Elec Boost',
				level: 86
			}
		],
		resistances: {
			Phys: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Light: 'Repel',
			Dark: 'Repel',
			Confusion: 'Null',
			Sleep: 'Null',
			Charm: 'Null',
			Stun: 'Null',
			Bind: 'Null',
			Poison: 'Null',
			Seal: 'Null'
		},
		game: 'smt3',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Demon whose name means "Lord of the High Place." Possibly derived from the Syrian deity Ba\'al, he presides over death and the spirits of the deceased. Many worshipped him because of this power.',
		origin: 'Abrahamic'
	},
	{
		name: 'Badb Catha',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Beast',
		level: 23,
		hp: 186,
		mp: 87,
		stats: {
			st: 11,
			ma: 6,
			vi: 8,
			ag: 12,
			lu: 6
		},
		learnset: [
			{
				name: 'Liftoma',
				level: 0
			},
			{
				name: 'Needle Rush',
				level: 0
			},
			{
				name: 'Detain',
				level: 24
			},
			{
				name: 'Wind Breath',
				level: 25
			},
			{
				name: 'Resist Force',
				level: 26
			},
			{
				name: 'Mana Aid',
				level: 27
			}
		],
		resistances: {
			Phys: 'Resist',
			Elec: 'Weak'
		},
		game: 'smt3',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'The Celtic goddess of war. She often assumes the form of a crow; as such, her name means "battle crow." She was part of the war-goddess triad. She would take part in battle, as well as use her magic to confuse soldiers.',
		origin: 'Celtic'
	},
	{
		name: 'Bai Suzhen',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -4,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: -1,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Drake',
		level: 21,
		hp: 168,
		mp: 141,
		stats: {
			st: 18,
			dx: 23,
			ma: 37,
			ag: 25,
			lu: 30
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Media',
				level: 0
			},
			{
				name: 'Makakaja',
				level: 22
			},
			{
				name: 'Me Patra',
				level: 23
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Light: 'Weak',
			Poison: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'The heroine of the Chinese tale of a white snake. She appears as a human.\nShe was originally portrayed as an atrocious monster who charmed and ate young men, but was later depicted as a sad girl who falls in love with a human and is tormented by the difference in their natures.',
		origin: 'Chinese'
	},
	{
		name: 'Baihu',
		aliases: [
			'Byakko'
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
		level: 49,
		hp: 230,
		mp: 249,
		stats: {
			st: 33,
			vi: 28,
			ma: 25,
			ag: 48,
			lu: 40
		},
		learnset: [
			{
				name: 'Damascus Claw',
				level: 0
			},
			{
				name: 'Storm Dracostrike',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 0
			},
			{
				name: 'Fierce Roar',
				level: 50
			},
			{
				name: 'Great Life Spring',
				level: 51
			},
			{
				name: 'Frenzied Chomp',
				level: 52
			}
		],
		resistances: {
			Elec: 'Null',
			Force: 'Weak',
			Confusion: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the west, the season of autumn, and the element of metal. It is believed to be the king of all beasts.',
		origin: 'Chinese'
	},
	{
		name: 'Baldur',
		affinities: {
			skillPotential: {
				Phys: 1,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Genma',
		level: 28,
		hp: 311,
		mp: 96,
		stats: {
			st: 44,
			dx: 30,
			ma: 22,
			ag: 31,
			lu: 39
		},
		learnset: [
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Headcrush',
				level: 0
			},
			{
				name: 'Resist Light',
				level: 30
			},
			{
				name: 'Light Pleroma',
				level: 31
			},
			{
				name: 'Ally Counter',
				level: 32
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Weak',
			Elec: 'Resist',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: null,
		lore: 'The god of light in Norse lore and son of Odin and Frigg. He is married to Nanna and has two brothers, Hod and Hermod, and a son named Forseti. He was loved by all the gods, but after having a nightmare of his death, Frigg made all the plants and animals swear not to harm Baldur. Only the mistletoe was passed over as it was too young. Hearing this, Loki tricked Hod into shooting a mistletoe at Baldur, which killed him. Hel promised to revive Baldur if every living thing cried for him, but the giantess Thokk refused to weep. When it was found that Thokk was Loki in disguise, the gods punished him. With the world\'s light gone, it took its first steps toward Ragnarok.',
		origin: 'Norse'
	},
	{
		name: 'Balor',
		affinities: {
			skillPotential: {
				Phys: 1,
				Gun: 0,
				Fire: 3,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Tyrant',
		level: 36,
		hp: 408,
		mp: 116,
		stats: {
			st: 58,
			dx: 37,
			ma: 32,
			ag: 34,
			lu: 44
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Megaton Press',
				level: 0
			},
			{
				name: 'Mamudo',
				level: 37
			},
			{
				name: 'Agidyne',
				level: 40
			}
		],
		resistances: {
			Gun: 'Resist',
			Fire: 'Null',
			Ice: 'Weak',
			Force: 'Resist',
			Sick: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A one-eyed king in Celtic lore. He can kill merely with a look of his eye. He is a leader of the Fomorians, enemies of the gods. His name was feared and his army troubled the gods.',
		origin: 'Celtic'
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
			Light: 'Weak',
			Dark: 'Null',
			Poison: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'An idol commonly worshipped by the Knights Templar.\nIt is a demon with the head of a goat.\nThis figure later became the idol of worship for witches as well.',
		origin: 'European'
	},
	{
		name: 'Barbatos',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 5,
				Fire: -3,
				Ice: 0,
				Elec: -2,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fallen',
		level: 69,
		hp: 601,
		mp: 224,
		stats: {
			st: 65,
			dx: 104,
			ma: 54,
			ag: 79,
			lu: 68
		},
		learnset: [
			{
				name: 'Stun Needles',
				level: 0
			},
			{
				name: 'Heaven\'s Bow',
				level: 0
			},
			{
				name: 'Hellish Mask',
				level: 70
			},
			{
				name: 'Zandyne',
				level: 71
			},
			{
				name: 'Myriad Arrows',
				level: 72
			}
		],
		resistances: {
			Gun: 'Repel',
			Fire: 'Weak',
			Force: 'Null',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'The Earl of Duke of Hell that appears as a hunter. He is one of the 72 demons of the Goetia, and used to be a Virtue. He has several unique powers, such as finding treasure hidden by magicians and reconciling friends. He can also understand the cries of animals.',
		origin: 'Abrahamic'
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
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'Said to live in the forests of Bali, it was an evil god whom the people sacrificed and made their guardian.\nNow a symbol of good, it is fated to war with Rangda, the avatar of evil, for all eternity.',
		origin: 'Balinese'
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
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A dark dragon from Northern Africa marked by wings and a crested crown.\nIts name means "king of snakes," and both its breath and gaze are so toxic that they instantly kill any human or animal unfortunate enough to be subjected to them.',
		origin: 'European'
	},
	{
		name: 'Beelzebub',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -6,
				Ice: 2,
				Elec: 4,
				Force: 0,
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
				name: 'Thunder Reign',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			},
			{
				name: 'Debilitate',
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
			Fire: 'Weak',
			Ice: 'Resist',
			Elec: 'Drain',
			Light: 'Resist',
			Dark: 'Null',
			Confusion: 'Null',
			Poison: 'Null',
			Sleep: 'Null',
			Mirage: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Lord of the Flies and the Prince of Hell.\nHe is established as a high-ranking demon in the Bible, and his multitude of flies are said to carry souls down to the abyss. It has been speculated that he is a bastardization of the Canaanite god Baal.',
		origin: 'Abrahamic'
	},
	{
		name: 'Beiji-Weng',
		aliases: [
			'Beidou Xingjun',
			'Beiji Weng',
			'Hokuto Seikun'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: -3
			},
			inherit: 'Elec'
		},
		arcana: 'Hierophant',
		race: 'Fury',
		level: 66,
		hp: 490,
		mp: 377,
		stats: {
			st: 45,
			dx: 73,
			ma: 95,
			ag: 81,
			lu: 79
		},
		learnset: [
			{
				name: 'Glacial Blast',
				level: 0
			},
			{
				name: 'Recarm',
				level: 0
			},
			{
				name: 'Cold World',
				level: 67
			},
			{
				name: 'Workaholic',
				level: 68
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Light: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'According to Chinese myth, Hokuto Seikun, or "Wise Man of the North Star," determines the moment that one is born.',
		origin: 'Chinese'
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
			Fire: 'Null',
			Ice: 'Weak',
			Force: 'Null',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of Goetia invoked by King Solomon.\nHe leads 50 legions of demons as their chief and is said to appear before his conjurer as two beautiful angels in a chariot of fire. His name means "worthless," and he is known to be exceptionally cunning, having caused the fall of Sodom and Gomorrah in addition to persecuting Jesus Christ.',
		origin: 'Abrahamic'
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
			Phys: 'Resist',
			Fire: 'Weak',
			Ice: 'Null',
			Elec: 'Resist',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Demonic governor of the deadly sin of sloth who also excels at both invention and discovery.\nIt is rumored that he may be the disgraced form of Baal Peor, Syrian god of abundant crops.',
		origin: 'Abrahamic'
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
			Fire: 'Resist',
			Ice: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of Goetia.\nKnown as the Duke of Hell, he rides a gigantic horse and burns those without manners.',
		origin: 'Abrahamic'
	},
	{
		name: 'Berserker',
		affinities: {
			skillPotential: {
				Phys: 6,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 1
			},
			inherit: null
		},
		arcana: 'Judgement',
		race: 'Brute',
		level: 64,
		hp: 514,
		mp: 237,
		stats: {
			st: 107,
			dx: 60,
			ma: 44,
			ag: 64,
			lu: 74
		},
		learnset: [
			{
				name: 'Charge',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Dark Sword',
				level: 65
			},
			{
				name: 'Enduring Soul',
				level: 66
			}
		],
		resistances: {
			Phys: 'Null',
			Force: 'Weak',
			Bind: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Fierce warriors of Norse origin who fight heedlessly and without fear.\nTheir name comes from their bearskin coats. They are also warriors of Odin.',
		origin: 'Norse'
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
			Elec: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'An evil creature that looks like a horse with two curving horns.\nIt is said to be the opposite of a Chichevache, but theory speculates that it is actually a mistranslation of "Re\'em," a two-horned beast that appears in the Old Testament.',
		origin: 'European'
	},
	{
		name: 'Bifrons',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 2,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Fool',
		race: 'Fallen',
		level: 20,
		hp: 163,
		mp: 137,
		stats: {
			st: 17,
			dx: 22,
			ma: 36,
			ag: 24,
			lu: 29
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 0
			},
			{
				name: 'Healing Knowhow',
				level: 21
			},
			{
				name: 'Resist Dark',
				level: 22
			}
		],
		resistances: {
			Fire: 'Resist',
			Force: 'Weak',
			Light: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia. He lights candles on graves.\nHe only appears in human form when ordered to: at all other times he is a hideous monster. He has much knowledge, and teaches about magic, herbs, and gems. It is said he also has the ability to control the souls of the dead.',
		origin: 'Abrahamic'
	},
	{
		name: 'Bilwis',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -2,
				Fire: 0,
				Ice: 1,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: -1
			},
			inherit: null
		},
		arcana: null,
		race: 'Brute',
		level: 9,
		hp: 126,
		mp: 59,
		stats: {
			st: 16,
			dx: 17,
			ma: 13,
			ag: 13,
			lu: 17
		},
		learnset: [
			{
				name: 'Poison Claw',
				level: 0
			},
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Bufu',
				level: 10
			}
		],
		resistances: {
			Gun: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Confusion: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A creature said to appear in German grain fields. It comes at night and damages crops.\nIt is tall and emaciated with an ugly face. Scythes are tied to its toes, and by walking through fields with them on, it mows down the grain. Bilwis appears on Walpurgisnacht, or before sunrise on Pentecost.',
		origin: 'European'
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
			Fire: 'Null',
			Ice: 'Weak',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The strongest of the Four Heavenly Kings, also known as Tamonten, and in Buddhist mythology, Vaishravana.\nHe protects the North and is recognized as the god of war. Similarly to his fellow kings, he is often depicted as a fierce warrior, clad in armor and wielding a great spear. Bishamonten is also well known as a bringer of fortune, being one of the Shichi Fukujin, the seven gods of fortune.',
		origin: 'Buddhist'
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
			Fire: 'Resist',
			Ice: 'Null',
			Light: 'Weak',
			Dark: 'Repel'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A Jack Frost that grew powerful and evil.\nThese are the evolved form of the fairly peaceful winter fairy and mark the transformation from small prankster into massively powerful entity.',
		origin: 'ATLUS Original'
	},
	{
		name: 'Black Maria',
		affinities: {
			skillPotential: {
				Phys: -2,
				Gun: 0,
				Fire: 0,
				Ice: 3,
				Elec: 3,
				Force: -5,
				Light: 0,
				Dark: 0,
				Almighty: 2,
				Recovery: 3,
				Ailment: 1,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Lady',
		level: 66,
		hp: 580,
		mp: 387,
		stats: {
			st: 40,
			dx: 64,
			ma: 113,
			ag: 70,
			lu: 84
		},
		learnset: [
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'Megidola',
				level: 67
			},
			{
				name: 'Dekaja',
				level: 68
			}
		],
		resistances: {
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Resist',
			Dark: 'Resist',
			Charm: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A holy mother of the dark, of Christian descent.\nThe statues in regular churches are usually of the Virgin Mary, but there exist some suspicious black statues. They say that these statues have their origins in the Middle East, such as Egypt\'s Isis and the Phrygian Cybele.',
		origin: 'Abrahamic'
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
			Phys: 'Resist',
			Fire: 'Weak',
			Light: 'Weak',
			Mirage: 'Weak',
			Confusion: 'Weak',
			Charm: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'An amoeba-like monster that attacks and eats people.\nSupposedly, it is actually a demon that failed to take form and now roams in search of Magatsushi. It is said that when a Slime\'s ability to absorb Magatsuhi goes out of control, it transforms into a Black Ooze.',
		origin: 'ATLUS Original'
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
			Ice: 'Repel',
			Force: 'Weak',
			Light: 'Resist',
			Dark: 'Resist',
			Confusion: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides a black horse and carries scales, indicating the terrible famine he is to bring. He also has been given the authority to end the lives of those who are suffering.',
		origin: 'Abrahamic'
	},
	{
		name: 'Blob',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Foul',
		level: 16,
		hp: 156,
		mp: 66,
		stats: {
			st: 8,
			ma: 6,
			vi: 10,
			ag: 5,
			lu: 7
		},
		learnset: [
			{
				name: 'Tarunda',
				level: 0
			},
			{
				name: 'Self-destruct',
				level: 0
			},
			{
				name: 'Toxic Sting',
				level: 17
			},
			{
				name: 'Marin Karin',
				level: 18
			},
			{
				name: 'Spirit Drain',
				level: 19
			},
			{
				name: 'Zanma',
				level: 20
			}
		],
		resistances: {
			Phys: 'Resist',
			Ice: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt3',
		alignment: null,
		lore: 'An infamous jelly-like monster. It swallows humans and grows. It is said that the only way to stop Blobs is to freeze them.',
		origin: 'North American'
	},
	{
		name: 'Botis',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 5,
				Force: -7,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fallen',
		level: 83,
		hp: 536,
		mp: 439,
		stats: {
			st: 53,
			dx: 67,
			ma: 123,
			ag: 85,
			lu: 111
		},
		learnset: [
			{
				name: 'Maziodyne',
				level: 0
			},
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Mist Rush',
				level: 84
			},
			{
				name: 'Will of Thunder',
				level: 85
			},
			{
				name: 'Null Gun',
				level: 86
			}
		],
		resistances: {
			Elec: 'Repel',
			Force: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia, invoked by King Solomon. He is the Great President and Earl and commands many legions. He appears before his summoner as a terrifying snake and grants knowledge of the past, present, and future. He can also transform into a human with a sword, large teeth, and two horns. Those who behold him are struck with terror.',
		origin: 'Abrahamic'
	},
	{
		name: 'Brigid',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 4,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Empress',
		race: 'Megami',
		level: 33,
		hp: 256,
		mp: 226,
		stats: {
			st: 25,
			dx: 32,
			ma: 59,
			ag: 36,
			lu: 45
		},
		learnset: [
			{
				name: 'Media',
				level: 0
			},
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Makakaja',
				level: 34
			},
			{
				name: 'Mana Gain',
				level: 35
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The goddess of fire in Irish lore. She also presides over craftsmanship, intelligence, poetry, and healing.\nShe is depicted carrying a magic cup symbolizing a brazier. She had such authority that her name itself was synonymous with "goddess." When Christianity spread to Ireland, she was so revered by the masses that the church canonized her as a Christian saint.',
		origin: 'Celtic'
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
			Fire: 'Weak',
			Dark: 'Null',
			Sleep: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A type of goblin from Welsh folklore that eats children who don\'t listen to their parents.\nThey are said to look like humans covered head to toe with hair, and are recognized as an iconic monster that appears at nighttime. They are often spoken of by mothers wishing to discipline their children as noted in the popular phrase, "For naughty kids who disobey, the Bugs will come and surely prey."',
		origin: 'European'
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
			Fire: 'Null',
			Ice: 'Weak',
			Wind: 'Null',
			Nuke: 'Weak',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'A malformed, winged servant of the Cthulhu Mythos\' cosmic god Hastur. They can fly even in the vacuum of space and it\'s said that if you can summon one, it will carry you wherever you wish.',
		origin: 'Lovecraftian'
	},
	{
		name: 'Cabracan',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 2,
				Ice: -2,
				Elec: 2,
				Force: -5,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Wilder',
		level: 59,
		hp: 672,
		mp: 134,
		stats: {
			st: 90,
			dx: 51,
			ma: 36,
			ag: 29,
			lu: 66
		},
		learnset: [
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Pandemic Bomb',
				level: 0
			},
			{
				name: 'Earthquake',
				level: 60
			},
			{
				name: 'Acid Breath',
				level: 61
			}
		],
		resistances: {
			Fire: 'Null',
			Elec: 'Null',
			Force: 'Weak',
			Dark: 'Weak',
			Poison: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A giant monster that appears in the Popol Vuh of Mayan lore.\nHe called himself the "mountain shaker" and became the Mayan god of earthquakes. He ruled the Earth with his father, but was buried alive by the heroes Hunahpu and Xbalanque.',
		origin: 'South American'
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
			Ice: 'Weak',
			Elec: 'Null'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Historical',
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
			Elec: 'Resist',
			Force: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A fae beast from the Scottish highlands whose kingdoms can be found in tree hollows or abandoned houses.\nDog-sized, they have white tufts or hair on their chest, green, intelligent eyes, and are even capable of understanding the human language. Though they usually stick to their territory, some have been known to live with humans as normal black cats. They are generally peaceful, but should a human treat one poorly, they will forcibly take that human to their kingdom.',
		origin: 'European'
	},
	{
		name: 'Caladrius',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: -1
			},
			inherit: null
		},
		arcana: null,
		race: 'Flight',
		level: 4,
		hp: 71,
		mp: 59,
		stats: {
			st: 8,
			dx: 10,
			ma: 11,
			ag: 13,
			lu: 12
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 6
			}
		],
		resistances: {
			Gun: 'Weak',
			Dark: 'Weak',
			Sick: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A mysterious bird that can tell the severity of one\'s illness as well as heal sickness itself. A Caladrius draws illnesses into itself with its beak and flies away, healing the sick. But if the sickness is too far advanced, the bird will refuse even to look at the sufferer. It is thought to be a plover or wagtail, but the only certain detail is that it is pure white.',
		origin: 'Greco-Roman'
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
			Fire: 'Resist',
			Ice: 'Weak',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The angel of god in Jewish mythology. He rules over the angels known as the Powers, and his name Camael means "one who sees god."\nHe is also the commander of the angels of destruction, punishment, and death in addition to being the ruler of Mars.',
		origin: 'Abrahamic'
	},
	{
		name: 'Camazotz',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: -2
			},
			inherit: null
		},
		arcana: 'Temperance',
		race: 'Raptor',
		level: 25,
		hp: 227,
		mp: 121,
		stats: {
			st: 29,
			dx: 29,
			ma: 27,
			ag: 40,
			lu: 33
		},
		learnset: [
			{
				name: 'Tetanus Cut',
				level: 0
			},
			{
				name: 'Life Drain',
				level: 0
			},
			{
				name: 'Frenzied Chomp',
				level: 26
			},
			{
				name: 'Axel Claw',
				level: 27
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Weak',
			Light: 'Weak',
			Daze: 'Weak',
			Sick: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'An evil bat who dwelled in Xibalba in Mayan lore.\nWhen the heroic twins Xbalanque and Hunahpu went to Xibalba, he decapitated Hunahpu at the Bat House.',
		origin: 'South American'
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
			Elec: 'Resist',
			Wind: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A 17th century privateer who eventually became a world-renowned pirate. At his execution, he declared he had a hidden treasure, leaving behind many legends.',
		origin: 'Historical',
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
			Fire: 'Resist',
			Ice: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A gypsy thief from the novel by Merimee, which became famous through the opera by Bizet. She is a femme fatale who is beautiful but very capricious.',
		origin: 'Modern Fiction',
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
		resistances: {},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman',
		user: 'Shinjiro Aragaki',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Catoblepas',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 2,
				Force: 0,
				Light: -3,
				Dark: 1,
				Almighty: 0,
				Recovery: 0,
				Ailment: -4,
				Support: -3
			},
			inherit: null
		},
		arcana: null,
		race: 'Wilder',
		level: 52,
		hp: 583,
		mp: 196,
		stats: {
			st: 80,
			dx: 45,
			ma: 64,
			ag: 53,
			lu: 64
		},
		learnset: [
			{
				name: 'Titanomachia',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'Life Surge',
				level: 53
			},
			{
				name: 'Eat Whole',
				level: 54
			}
		],
		resistances: {
			Phys: 'Resist',
			Light: 'Weak',
			Seal: 'Weak',
			Sick: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A sluggish creature that lives by the river. It is said to have the body of an ox and the head of a pig.\nThey are believed to live by the Nile and have heavy heads which keep their faces pointing downward. Contrary to their sluggishness, though, one look from its eyes could kill a person.',
		origin: 'African'
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
			Fire: 'Null',
			Ice: 'Weak',
			Elec: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'A beautiful actress who performed as Carmen in the opera named for the role. So tempestuous and outspoken was she that it\'s said the main role was rewritten to better suit her.',
		origin: 'Historical',
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
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'The French name of the titular heroine of Cinderella, an oft-retold tale of great renown in which a mistreated waif gains luxury, beauty, and a single night\'s dance with a prince through the power of magic.',
		origin: 'Modern Fiction',
		user: 'Sumire Yoshizawa',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Centaur',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 2,
				Fire: 0,
				Ice: 1,
				Elec: -3,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -1,
				Support: -1
			},
			inherit: null
		},
		arcana: null,
		race: 'Yoma',
		level: 4,
		hp: 111,
		mp: 50,
		stats: {
			st: 9,
			dx: 13,
			ma: 10,
			ag: 16,
			lu: 9
		},
		learnset: [
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Needle Shot',
				level: 5
			}
		],
		resistances: {
			Gun: 'Resist',
			Fire: 'Resist',
			Elec: 'Weak',
			Force: 'Weak',
			Dark: 'Weak',
			Poison: 'Weak'
		},
		game: 'smt4',
		alignment: null,
		lore: 'A half-man, half-horse creature of Greek lore. The top half is human and the bottom half is a horse.\nThey are often depicted as wise and noble mentors of heroes. A common theory about their origins is that a non-riding culture saw men from another civilization mounted on horses and thought them to be half-horse.',
		origin: 'Greco-Roman'
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
			Fire: 'Repel',
			Ice: 'Weak',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'The guardian hound of Hades in Greek lore.\nIt traditionally has three heads and a snake\'s tail. It was born from Typhon, the giant of wind, and Echidna, the mother of monsters. It is also the older brother of Orthrus.',
		origin: 'Greco-Roman'
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
			Fire: 'Null',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman',
		user: 'Koromaru',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Cernunnos',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 2,
				Force: -5,
				Light: 0,
				Dark: 3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 6,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Reaper',
		level: 71,
		hp: 583,
		mp: 390,
		stats: {
			st: 68,
			dx: 58,
			ma: 107,
			ag: 70,
			lu: 85
		},
		learnset: [
			{
				name: 'Cough',
				level: 0
			},
			{
				name: 'Death\'s Door',
				level: 0
			},
			{
				name: 'Megidola',
				level: 72
			},
			{
				name: 'Mamudoon',
				level: 73
			}
		],
		resistances: {
			Phys: 'Resist',
			Elec: 'Null',
			Force: 'Weak',
			Dark: 'Repel',
			Seal: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A beast god of Celtic lore, worshipped by Druids. His name means "horned one."\nHe has deer antlers and is usually pictured with horned snakes. He is the god of the dead, hunting, fertility, and vegetation.',
		origin: 'Celtic'
	},
	{
		name: 'Chagrin',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 1,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Wilder',
		level: 11,
		hp: 154,
		mp: 60,
		stats: {
			st: 14,
			dx: 23,
			ma: 13,
			ag: 20,
			lu: 15
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Toxic Sting',
				level: 0
			},
			{
				name: 'Stun Needles',
				level: 12
			},
			{
				name: 'Sukukaja',
				level: 14
			}
		],
		resistances: {
			Fire: 'Weak',
			Elec: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'An evil spirit of Romani folklore. It is also called Chagrino and Harginn. It is thought to be a combination of several religions and cultures of nations, absorbed as the Romani moved from place to place. The Chagrin appears as a yellow hedgehog, and seeing it is a sign of an upcoming disaster.',
		origin: 'Romani'
	},
	{
		name: 'Chatterskull',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Haunt',
		level: 20,
		hp: 156,
		mp: 96,
		stats: {
			st: 7,
			ma: 12,
			vi: 6,
			ag: 7,
			lu: 8
		},
		learnset: [
			{
				name: 'Sukunda',
				level: 0
			},
			{
				name: 'Stun Gaze',
				level: 0
			},
			{
				name: 'Dekaja',
				level: 21
			},
			{
				name: 'Dormina',
				level: 22
			},
			{
				name: 'Self-destruct',
				level: 23
			},
			{
				name: 'Hell Thrust',
				level: 24
			}
		],
		resistances: {
			Fire: 'Drain',
			Light: 'Weak',
			Dark: 'Null',
			Poison: 'Weak',
			Seal: 'Weak'
		},
		game: 'smt3',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A creature of folklore from Dominica. It is a living skull that gives out a piercing laugh. It is said that the hearts of those who hear its laugh will immediately stop.',
		origin: 'Dominican'
	},
	{
		name: 'Chemtrail',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Fiend',
		level: 83,
		hp: 433,
		mp: 357,
		stats: {
			st: 77,
			dx: 85,
			ma: 111,
			ag: 72,
			lu: 102
		},
		learnset: [
			{
				name: 'Shivering Taboo',
				level: 0
			},
			{
				name: 'Fog Breath',
				level: 0
			},
			{
				name: 'Acid Breath',
				level: 84
			},
			{
				name: 'Riot Gun',
				level: 85
			}
		],
		resistances: {
			Light: 'Resist',
			Dark: 'Null',
			Bind: 'Null',
			Confusion: 'Null',
			Poison: 'Null',
			Sick: 'Null',
			Sleep: 'Null'
		},
		game: 'smt4',
		alignment: null,
		lore: null,
		origin: 'North American'
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
			Light: 'Weak',
			Dark: 'Null',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The god of night, evil and death in Slavic lore. His name means "black god".\nLike many other gods of the dead, he is said to live below the earth. His counterpart is Belobog, the "white god." Despite being feared, he was also worshipped. The curse, "May the black god end you," is still used in Ukraine to this day.',
		origin: 'Slavic'
	},
	{
		name: 'Cherub',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 3,
				Light: 4,
				Dark: -4,
				Almighty: 1,
				Ailment: 0,
				Recovery: 0,
				Support: -3
			},
			inherit: null
		},
		arcana: null,
		race: 'Divine',
		level: 71,
		hp: 348,
		mp: 351,
		stats: {
			st: 34,
			vi: 42,
			ma: 60,
			ag: 55,
			lu: 50
		},
		learnset: [
			{
				name: 'Judgment Light',
				level: 0
			},
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Zanbarion',
				level: 72
			},
			{
				name: 'Hamabarion',
				level: 73
			},
			{
				name: 'Null Light',
				level: 74
			}
		],
		resistances: {
			Force: 'Drain',
			Light: 'Resist',
			Dark: 'Weak',
			Seal: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A senior angel in the angelic hierarchy, ranked second in the order of angels.\nThey are represented by four wings and four faces, and carry the throne of God or drive His chariot. In the Bible, they are known as the gatekeepers of the Garden of Eden, where they are said to guard the tree of life with flaming swords.',
		origin: 'Abrahamic'
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
		level: 77,
		hp: 497,
		mp: 325,
		stats: {
			st: 75,
			vi: 67,
			ma: 65,
			ag: 39,
			lu: 47
		},
		learnset: [
			{
				name: 'Yabusame Shot',
				level: 0
			},
			{
				name: 'Glacial Blast',
				level: 0
			},
			{
				name: 'Mazanbarion',
				level: 0
			},
			{
				name: 'High Phys Pleroma',
				level: 0
			},
			{
				name: 'Catastrophe',
				level: 78
			},
			{
				name: 'Myriad Slashes',
				level: 79
			},
			{
				name: 'Drain Ice',
				level: 81
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Elec: 'Weak',
			Force: 'Repel'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A Chinese demon king often depicted with a bull\'s head, six or eight arms, and four eyes.\nHe invented many weapons and commanded an invincible army. Seeking control of the mortal world, he fought with the Yellow Emperor Huang Di. Though he was winning, the Yellow Emperor ultimately defeated him. Huang Di then had Chi You\'s head buried thousands of li apart from his body.',
		origin: 'Chinese'
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
			Fire: 'Resist',
			Elec: 'Null',
			Force: 'Weak',
			Poison: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A monster that is part lion, part goat, and part snake.\nOriginally a symbol representing the seasons, it became a violent monster adopted into Greek mythology. Its father is Typhon and its mother Echidna.',
		origin: 'Greco-Roman'
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
				name: 'Maeiha',
				level: 29
			},
			{
				name: 'Dodge Elec',
				level: 30
			},
			{
				name: 'Eiga',
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
			Phys: 'Resist',
			Fire: 'Drain',
			Light: 'Weak'
		},
		game: 'p5',
		alignment: {
			major: 'Unknown',
			minor: 'Law'
		},
		lore: 'A demon summoned by a sorcerer named Crowley at the beginning of the 20th century. He prevents those from attempting to reach enlightenment.',
		origin: 'European'
	},
	{
		name: 'Chupacabra',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Food',
		level: 21,
		hp: 200,
		mp: 107,
		stats: {
			st: 25,
			dx: 25,
			ma: 21,
			ag: 35,
			lu: 31
		},
		learnset: [
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Life Drain',
				level: 0
			},
			{
				name: 'Dormina',
				level: 22
			},
			{
				name: 'Frenzied Chomp',
				level: 23
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A mysterious creature that appears in Puerto Rico. It is said to suck the blood of cows and goats.\nIts name means "goat-sucker," and it is anywhere from 90 to 180cm, with elliptical eyes. Its body is like a kangaroo\'s and it has three sharp claws on both arms, with legs like a goat\'s. Its hair can change colors to blend with its surroundings. Some speculate that it its not of this planet.',
		origin: 'Puerto Rican'
	},
	{
		name: 'Churel',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 3,
				Almighty: 0,
				Recovery: -2,
				Ailment: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Haunt',
		level: 32,
		hp: 230,
		mp: 192,
		stats: {
			st: 24,
			dx: 31,
			ma: 52,
			ag: 40,
			lu: 42
		},
		learnset: [
			{
				name: 'Marin Karin',
				level: 0
			},
			{
				name: 'Shibaboo',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 33
			},
			{
				name: 'Dark Pleroma',
				level: 34
			}
		],
		resistances: {
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A Hindu ghost of a woman. She bewitches young men and possesses them.\nA woman who dies in childbirth or during impure rituals becomes a Churel. She has no mouth and her legs are on backwards.',
		origin: 'Hindu'
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
			Fire: 'Resist',
			Ice: 'Resist',
			Light: 'Resist',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: '"Fox" in the Ainu tongue. Though "Sumari" is another word for "fox," chironnupu refers to "those who we kill" — which is to say, the various small-to-medium-sized Canidae.\nIt is also a divine beast that alerts people to forthcoming disasters by howling loudly from the mountains.',
		origin: 'Japanese'
	},
	{
		name: 'Cleopatra',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 5,
				Elec: 0,
				Force: 5,
				Light: 6,
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
		hp: 306,
		mp: 352,
		stats: {
			st: 26,
			vi: 32,
			ma: 69,
			ag: 44,
			lu: 51
		},
		learnset: [
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
				name: 'Diarahan',
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
			Ice: 'Resist',
			Force: 'Resist',
			Light: 'Drain',
			Dark: 'Weak',
			Charm: 'Resist',
			Poison: 'Weak',
			Sleep: 'Weak',
			Mirage: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'More specifically, Cleopatra VII. Her name means "glory of the father" in Greek.\nShe is known as one of the greatest beauties ever to live, having charmed many with her musical voice and conversation skills. It is said that all of history would have unfolded differently had even her nose been longer or shorter.',
		origin: 'Historical'
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
			Fire: 'Null',
			Ice: 'Weak',
			Sleep: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the three Moirae Sisters in Greek mythology.\nShe is the spinner of the threads of fate.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Corpses',
		aliases: [
			'Corpse'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 2,
				Fire: -5,
				Ice: 2,
				Elec: -3,
				Force: 0,
				Light: -3,
				Dark: 2,
				Almighty: 0,
				Recovery: -5,
				Ailment: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Undead',
		level: 35,
		hp: 470,
		mp: 113,
		stats: {
			st: 57,
			dx: 36,
			ma: 26,
			ag: 33,
			lu: 38
		},
		learnset: [
			{
				name: 'Life Drain',
				level: 0
			},
			{
				name: 'Binding Claw',
				level: 0
			},
			{
				name: 'Mamudo',
				level: 36
			}
		],
		resistances: {
			Gun: 'Resist',
			Fire: 'Weak',
			Ice: 'Resist',
			Elec: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A group of zombies that have fused together.\nWhile this lump of bodies has multiple heads, their brains cannot distinguish between their own will and the will of the others, so they are essentially a singular entity. Being both an individual and a whole is a frightening concept, even for a zombie. Perhaps they too are victims, trying to escape the pain and chaos they have found themselves in.',
		origin: 'Universal'
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
				name: 'Makougaon',
				level: 0
			},
			{
				name: 'Maeigaon',
				level: 0
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Resist',
			Wind: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'An ancient Out-Of-Place-Artifact found in Central and South America. It is said that if you collect 13 of them in one spot, the truth of the universe will be revealed.',
		origin: 'South American'
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
				name: 'Gae Bolg',
				level: 0
			},
			{
				name: 'Deathbound',
				level: 0
			},
			{
				name: 'Mazanma',
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
			Phys: 'Resist',
			Elec: 'Weak',
			Force: 'Null',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A gallant Celtic hero and son of the sun god Lugh.\nHe is said to have beaten a whole army singlehandedly. He was cursed to die after spurning the war goddess Morrigan and was impaled on his own mighty spear, Gae Bolg.',
		origin: 'Celtic'
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
			Fire: 'Weak',
			Wind: 'Resist'
		},
		game: 'p4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A dog fairy in Scottish folklore. Its main duties are to transport fairies and be a watchdog. It can transfix a target it\'s chasing by barking three times.',
		origin: 'Celtic'
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
			Fire: 'Resist',
			Elec: 'Weak',
			Light: 'Null',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'Mother goddess of nature.\nA temple of her was created atop a mountain in Phrygia, where she was worshipped. She ruled over beasts and was said to be served by lions. She later became a goddess passionately worshipped in Rome.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Da Peng',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: -2,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Flight',
		level: 56,
		hp: 508,
		mp: 208,
		stats: {
			st: 70,
			dx: 47,
			ma: 73,
			ag: 80,
			lu: 64
		},
		learnset: [
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Panic Voice',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 57
			},
			{
				name: 'Mazandyne',
				level: 58
			}
		],
		resistances: {
			Gun: 'Weak',
			Force: 'Null',
			Dark: 'Weak',
			Daze: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A giant bird of Chinese lore.\nThey are so huge that it is impossible to tell their actual size. They can fly 30,000 miles into the sky, and their wingspan is as long as the clouds.',
		origin: 'Chinese'
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
			Fire: 'Resist',
			Elec: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A low-ranking class of spirits. While the name may conjure up familiar images of "demons" due to Christianity\'s influence, daemons were not strictly associated with good or evil and simply thought to be lesser supernatural beings, sometimes acting as tutelary spirits that guided the souls of men.\nWhat might be considered a demon today would\'ve been called a "cacodaemon" in ancient Greece — that is, an evil spirit. In contrast, their benevolent counterparts were known as "agathodaemons."',
		origin: 'Universal'
	},
	{
		name: 'Dagda',
		affinities: {
			skillPotential: {
				Phys: 6,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -4,
				Dark: -4,
				Almighty: 3,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 80,
		hp: 559,
		mp: 339,
		stats: {
			st: 85,
			vi: 65,
			ma: 43,
			ag: 43,
			lu: 41
		},
		learnset: [
			{
				name: 'Lost Hit',
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
				name: 'Luster Candy',
				level: 0
			},
			{
				name: 'Freikugel',
				level: 81
			},
			{
				name: 'High Phys Pleroma',
				level: 83
			},
			{
				name: 'Null Phys',
				level: 84
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Null',
			Elec: 'Null',
			Force: 'Null',
			Light: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A god of Celtic myth and the supreme deity of the Tuatha Dé Danann. His name means "the good god."\nA glutton for porridge, he\'s even-tempered and excels in martial arts. His treasures include a club with the power to destroy and resurrect, a golden harp that can control the seasons, and a cauldron of endless food.',
		origin: 'Celtic'
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
			Fire: 'Weak',
			Light: 'Null',
			Dark: 'Null',
			Sleep: 'Resist',
			Confusion: 'Resist',
			Charm: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'A monk who died while fasting for the sake of humanity. Because of his intense spiritual power, his body continues to exist without rotting.\nIt is said that on the day of salvation, he will appear in front of humankind once again.',
		origin: 'Buddhist'
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
			Phys: 'Resist',
			Fire: 'Resist',
			Ice: 'Weak',
			Light: 'Weak',
			Seal: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Hindu deities of passion and relations. They are Kali\'s attendants.\nThey eat human flesh and gather at graveyards and crematories each night. Their name means "sky dancer."',
		origin: 'Hindu'
	},
	{
		name: 'Dantalian',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: -5,
				Force: 2,
				Light: 0,
				Dark: 2,
				Almighty: 0,
				Recovery: 0,
				Ailment: 3,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Fallen',
		level: 53,
		hp: 348,
		mp: 288,
		stats: {
			st: 37,
			dx: 48,
			ma: 82,
			ag: 54,
			lu: 65
		},
		learnset: [
			{
				name: 'Makakaja',
				level: 0
			},
			{
				name: 'Makajama',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 0
			},
			{
				name: 'Sabbatma',
				level: 55
			},
			{
				name: 'Makajamaon',
				level: 56
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Weak',
			Force: 'Null',
			Light: 'Weak',
			Dark: 'Resist',
			Poison: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nHe is a duke with many faces that change constantly. He holds a heavy book in his right hand which has the thoughts of all living beings, past, present, and future, written in a language only he can read.',
		origin: 'Abrahamic'
	},
	{
		name: 'Dante',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Fiend',
		level: 80,
		hp: 612,
		mp: 306,
		stats: {
			st: 25,
			ma: 22,
			vi: 22,
			ag: 25,
			lu: 16
		},
		learnset: [
			{
				name: 'E & I',
				level: 0
			},
			{
				name: 'Rebellion - SMT',
				level: 0
			},
			{
				name: 'Roundtrip',
				level: 0
			},
			{
				name: 'Whirlwind',
				level: 0
			},
			{
				name: 'Holy Star',
				level: 0
			},
			{
				name: 'Provoke',
				level: 0
			},
			{
				name: 'Never Yield',
				level: 0
			},
			{
				name: 'Intimidate',
				level: 0
			},
			{
				name: 'Twosome Time',
				level: 81
			},
			{
				name: 'Stinger',
				level: 82
			},
			{
				name: 'Son\'s Oath',
				level: 83
			},
			{
				name: 'Showtime',
				level: 84
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Light: 'Null',
			Dark: 'Null',
			Confusion: 'Null',
			Sleep: 'Null',
			Charm: 'Null',
			Stun: 'Null',
			Bind: 'Null',
			Poison: 'Null',
			Seal: 'Null'
		},
		game: 'smt3',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A Devil Hunter who wandered into the Vortex World. He wields his two guns, Ebony and Ivory, along with his trusty sword, Rebellion. It is said that he has the blood of the legendary demon warrior Sparda in him.',
		origin: 'ATLUS Original'
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
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The mother goddess of Celtic mythology. She is the mother of the Tuatha De Danann, a race of gods and also the world itself, having given birth to all life.\nDanu\'s large body is said to be lying down on earth to this day. The Munster region in Ireland, which is said to be especially blessed by her.',
		origin: 'Celtic'
	},
	{
		name: 'Daphne',
		affinities: {
			skillPotential: {
				Phys: -2,
				Gun: 0,
				Fire: -4,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 2,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Tree',
		level: 16,
		hp: 140,
		mp: 168,
		stats: {
			st: 15,
			dx: 19,
			ma: 30,
			ag: 21,
			lu: 24
		},
		learnset: [
			{
				name: 'Dia',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Attack Knowhow',
				level: 17
			},
			{
				name: 'Makakaja',
				level: 18
			}
		],
		resistances: {
			Gun: 'Resist',
			Fire: 'Weak',
			Force: 'Resist',
			Bind: 'Null',
			Confusion: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A nymph of Greek lore who turned herself into a laurel to escape Apollo\'s pursuit. Affected by Eros\' arrow, Apollo chased Daphne for days. When he had almost caught her, she prayed to Peneus, her father the river god, and was transformed into a laurel.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Datsue-Ba',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Femme',
		level: 7,
		hp: 72,
		mp: 45,
		stats: {
			st: 4,
			ma: 8,
			vi: 5,
			ag: 4,
			lu: 6
		},
		learnset: [
			{
				name: 'Needle Rush',
				level: 0
			},
			{
				name: 'Shibaboo',
				level: 0
			},
			{
				name: 'Haggle',
				level: 8
			},
			{
				name: 'Bufu',
				level: 9
			},
			{
				name: 'Patra',
				level: 10
			},
			{
				name: 'Dormina',
				level: 11
			}
		],
		resistances: {
			Elec: 'Weak',
			Confusion: 'Null',
			Sleep: 'Null',
			Charm: 'Null',
			Stun: 'Null',
			Bind: 'Null'
		},
		game: 'smt3',
		alignment: null,
		lore: 'A demoness in Japanese mythology. She rips the clothes off those crossing the river Sanzu who don\'t have the money to pay the boat fare. She then hangs them on the tree Eryou-ju to weigh their sin.',
		origin: 'Japanese'
	},
	{
		name: 'David',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 5,
				Almighty: 3,
				Recovery: 0,
				Ailment: 5,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Fiend',
		level: 82,
		hp: 604,
		mp: 455,
		stats: {
			st: 65,
			dx: 77,
			ma: 143,
			ag: 115,
			lu: 87
		},
		learnset: [
			{
				name: 'Haunting Rhapsody',
				level: 0
			},
			{
				name: 'Energy Drain',
				level: 0
			},
			{
				name: 'Smile Charge',
				level: 83
			},
			{
				name: 'Mamudoon',
				level: 84
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Weak',
			Light: 'Resist',
			Dark: 'Resist',
			Bind: 'Resist',
			Charm: 'Resist',
			Confusion: 'Resist',
			Poison: 'Resist',
			Sick: 'Resist',
			Sleep: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A violinist of inhuman power who appears as a skeleton.\nHe travels around Europe with the Romani and plays his enchanting violin that causes people to dance the dance of death.',
		origin: 'European'
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
				name: 'Hell Gaze',
				level: 0
			},
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
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the "Ars Goetia."\nHe comes in the shape of a star and has vast knowledge of herbs and jewels. He can also control birds at will.',
		origin: 'Abrahamic'
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
			Fire: 'Weak',
			Light: 'Null',
			Dark: 'Null',
			Sleep: 'Resist',
			Poison: 'Resist',
			Charm: 'Resist',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A goddess from Greek mythology. Her name means "Mother Earth" in ancient Greek.\nShe is the sister of Zeus, goddess of fertility and is said to be the one who taught humanity the ways of agriculture. With the advancement of civilization, laws were put into place and she was given another name, "Demeter Thesmophoros".',
		origin: 'Greco-Roman'
	},
	{
		name: 'Demiurge',
		affinities: {
			skillPotential: {
				Phys: -3,
				Gun: -3,
				Fire: 3,
				Ice: 3,
				Elec: 3,
				Force: 3,
				Light: -3,
				Dark: 3,
				Almighty: 4,
				Recovery: -3,
				Ailment: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Vile',
		level: 95,
		hp: 748,
		mp: 320,
		stats: {
			st: 116,
			dx: 98,
			ma: 116,
			ag: 110,
			lu: 82
		},
		learnset: [
			{
				name: 'Antichthon',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 0
			},
			{
				name: 'Chakra Walk',
				level: 96
			},
			{
				name: 'Null Mind',
				level: 97
			},
			{
				name: 'Drain Light',
				level: 98
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Dark: 'Drain'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'An imperfect god of Gnosticism who created the material world.\nAccording to Gnostics of the Roman Empire, the Demiurge proclaims himself as God; when Adam and Eve gain "knowledge," he cast them out in anger.\nThe Demiurge wishes for the souls of humans to be trapped in the material world forever.',
		origin: 'Gnostic'
	},
	{
		name: 'Demonee-Ho',
		affinities: {
			skillPotential: {
				Phys: 4,
				Gun: 4,
				Fire: 0,
				Ice: 4,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 3,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fairy',
		level: 76,
		hp: 714,
		mp: 216,
		stats: {
			st: 114,
			dx: 71,
			ma: 51,
			ag: 75,
			lu: 86
		},
		learnset: [
			{
				name: 'Iron Judgement',
				level: 0
			},
			{
				name: 'Blank Bullet',
				level: 0
			},
			{
				name: 'Smile Charge',
				level: 0
			},
			{
				name: 'Desperate Hit',
				level: 77
			},
			{
				name: 'Ice Breath',
				level: 78
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Resist',
			Fire: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Jack Frost equipped with his own mini-Demonica.\nRumor has it that he participates in operations all over the world, and has a legendary 100% mission complete rate. He originally donned the Demonica because he admired it, but after long, hard training, he emerged as the perfect soldier. He may look like the cute Jack Frost everyone knows and loves, but underestimate him and he\'ll make you laugh or cry.',
		origin: 'ATLUS Original'
	},
	{
		name: 'Diana',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Lady',
		level: 41,
		hp: 455,
		mp: 174,
		stats: {
			st: 42,
			dx: 72,
			ma: 47,
			ag: 52,
			lu: 42
		},
		learnset: [
			{
				name: 'Madness Needle',
				level: 0
			},
			{
				name: 'Blast Arrow',
				level: 0
			},
			{
				name: 'Gun Pleroma',
				level: 42
			},
			{
				name: 'Grand Tack',
				level: 43
			}
		],
		resistances: {
			Gun: 'Null',
			Force: 'Weak',
			Bind: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A mother goddess in Roman lore, she is the goddess of hunting and the equivalent of Greece\'s Artemis.\nDiana is often pictured with a deer at her side and is also known as the goddess of fertility. She is an eternal virgin and has her followers take a vow of virginity. Later Christian influence led her to be named the Queen of Witches.',
		origin: 'Greco-Roman'
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
			Elec: 'Weak',
			Wind: 'Null',
			Light: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'The true name of California\'s masked swordsman of justice, who fought corrupt officials during the era of Spanish rule. Despite being marked as a thief, he fought for the weak as a true gentleman.',
		origin: 'Modern Fiction',
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
			Fire: 'Null',
			Ice: 'Weak',
			Elec: 'Resist',
			Charm: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The Greek god of wine and theater. He had two births.\nMyth tells that Zeus took the premature Dionysus from his dying mother, Semele, and allowed him to mature inside his thigh so that the underdeveloped god might have a proper birth.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Dís',
		affinities: {
			skillPotential: {
				Phys: -4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 2,
				Support: 2
			},
			inherit: 'Fire'
		},
		arcana: 'Magician',
		race: 'Yoma',
		level: 31,
		hp: 153,
		mp: 158,
		stats: {
			st: 15,
			vi: 25,
			ma: 26,
			ag: 23,
			lu: 26
		},
		learnset: [
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Elec Block',
				level: 0
			},
			{
				name: 'Ice Block',
				level: 0
			},
			{
				name: 'Fire Block',
				level: 32
			},
			{
				name: 'Force Block',
				level: 33
			},
			{
				name: 'Me Patra',
				level: 35
			}
		],
		resistances: {
			Phys: 'Weak',
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Seal: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'Figures in Norse mythology considered to be spiritual companions of humans.\nWhile they are said to be protectors of agriculture and livestock, they are also noted as masters of war. They are sometimes regarded as spirits that accompany the Valkyrie, or play a similar role. Also interpreted as lesser goddesses.',
		origin: 'Norse'
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
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'The fourth of the nine orders of angels. Their name carries the meaning of "governance," and it is their duty to oversee the other angels.\nIt is said that their work is the embodiment of God\'s will, and that they wish for this governance to spread throughout the cosmos.',
		origin: 'Abrahamic'
	},
	{
		name: 'Dormarth',
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 1,
				Almighty: 0,
				Ailment: 2,
				Recovery: -3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Wilder',
		level: 40,
		hp: 193,
		mp: 189,
		stats: {
			st: 30,
			vi: 21,
			ma: 26,
			ag: 33,
			lu: 31
		},
		learnset: [
			{
				name: 'Frenzied Chomp',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Axel Claw',
				level: 0
			},
			{
				name: 'Purple Smoke',
				level: 41
			},
			{
				name: 'Hysterical Slap',
				level: 42
			},
			{
				name: 'Dark Pleroma',
				level: 43
			}
		],
		resistances: {
			Force: 'Weak',
			Light: 'Resist',
			Dark: 'Null',
			Charm: 'Resist',
			Confusion: 'Resist',
			Poison: 'Resist',
			Mirage: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A canine demon of Celtic mythology.\nCommanded by Gwyn, King of the Afterlife, she is said to be a hound with a red nose visible through even the mountain mist. The meaning of her name is uncertain and subject to much speculation, but the most common theory is "death\'s door," and she is thought to be the gatekeeper of the afterlife under Gwyn\'s reign.',
		origin: 'Celtic'
	},
	{
		name: 'Dullahan',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Haunt',
		level: 67,
		hp: 533,
		mp: 267,
		stats: {
			st: 73,
			dx: 73,
			ma: 73,
			ag: 73,
			lu: 73
		},
		learnset: [
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Blight',
				level: 0
			},
			{
				name: 'Luster Candy',
				level: 0
			},
			{
				name: 'Awakening',
				level: 68
			},
			{
				name: 'Bloody Glee',
				level: 70
			}
		],
		resistances: {
			Phys: 'Resist',
			Elec: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: null,
		lore: null,
		origin: 'Celtic'
	},
	{
		name: 'Dwarf',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Jirae',
		level: 8,
		hp: 143,
		mp: 45,
		stats: {
			st: 19,
			dx: 13,
			ma: 10,
			ag: 13,
			lu: 15
		},
		learnset: [
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Life Bonus',
				level: 9
			},
			{
				name: 'Headcrush',
				level: 10
			}
		],
		resistances: {
			Elec: 'Resist',
			Force: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A small spirit of Norse lore. The original spelling is Dvergar.\nThey live below the ground and are skilled craftsmen, good at sculpture and architecture. They are excellent blacksmiths as well and create many weapons for the gods.',
		origin: 'Norse'
	},
	{
		name: 'Dybbuk',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: -1,
				Light: -3,
				Dark: 1,
				Almighty: 0,
				Recovery: 1,
				Ailment: 2,
				Support: -1
			},
			inherit: null
		},
		arcana: null,
		race: 'Spirit',
		level: 10,
		hp: 107,
		mp: 92,
		stats: {
			st: 11,
			dx: 14,
			ma: 22,
			ag: 15,
			lu: 18
		},
		learnset: [
			{
				name: 'Mudo',
				level: 0
			},
			{
				name: 'Hard Worker',
				level: 11
			},
			{
				name: 'Patra',
				level: 12
			}
		],
		resistances: {
			Ice: 'Weak',
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'An evil spirit of Jewish lore. They are said to possess people. Unable to gain a new body, it searches for humans to attach to. Once driven away, the lost soul may return to the earth with a new body, or may be cast into Hell.',
		origin: 'Abrahamic'
	},
	{
		name: 'Dzelarhons',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 1,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Lady',
		level: 19,
		hp: 167,
		mp: 152,
		stats: {
			st: 16,
			dx: 16,
			ma: 39,
			ag: 23,
			lu: 31
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Hard Worker',
				level: 0
			},
			{
				name: 'Maragi',
				level: 20
			},
			{
				name: 'Mana Bonus',
				level: 21
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A frog princess of North American Haida lore. She is also known as the volcano woman. She came from the sea with six canoes full of people. Her consort is the bear god Kaiti.',
		origin: 'North American'
	},
	{
		name: 'Efreet',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 5,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Yoma',
		level: 52,
		hp: 284,
		mp: 224,
		stats: {
			st: 34,
			vi: 38,
			ma: 43,
			ag: 32,
			lu: 29
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Fire Pleroma',
				level: 0
			},
			{
				name: 'Matarukaja',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 53
			},
			{
				name: 'Safeguard',
				level: 54
			},
			{
				name: 'Maragidyne',
				level: 56
			}
		],
		resistances: {
			Fire: 'Drain',
			Ice: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A type of powerful spirit in Arabic folklore that wields the power of fire.\nIt is said they will grant various boons of magic to those who summon them, but they also have violent tempers and will not hesitate to kill anyone who sparks their ire.',
		origin: 'Arabian'
	},
	{
		name: 'Eisheth',
		affinities: {
			skillPotential: {
				Phys: 6,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Ailment: 3,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Qadištu',
		level: 66,
		hp: 412,
		mp: 278,
		stats: {
			st: 66,
			vi: 60,
			ma: 21,
			ag: 55,
			lu: 28
		},
		learnset: [
			{
				name: 'Voracious Salvation',
				level: 0
			},
			{
				name: 'Mist Rush',
				level: 0
			},
			{
				name: 'Murderous Glee',
				level: 0
			},
			{
				name: 'Titanomachia',
				level: 0
			},
			{
				name: 'Phys Pleroma',
				level: 67
			},
			{
				name: 'Critical Zealot',
				level: 68
			},
			{
				name: 'Nihil Claw',
				level: 70
			}
		],
		resistances: {
			Fire: 'Null',
			Force: 'Weak',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Eisheth Zenunim. One of the four female demons in the Zohar, a spiritual text of Jewish mystical thought.\nSaid to be a princess of the Qlippoth, a concept of evil power in the same school of thought, she is the embodiment of sin; seducing many humans and leading them to their destruction. It is said that when people abuse words with mystical power, those words are taken away by the devil to create an evil world of arrogance and vanity. From this world, Eisheth appears to terrorize humanity.',
		origin: 'Abrahamic'
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
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Blight',
				level: 0
			},
			{
				name: 'Riberama',
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
			Fire: 'Null',
			Elec: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the "Ars Goetia".\nHe takes the appearance of a knight and has the power to see things to come. He also possesses great knowledge of many wars.',
		origin: 'Abrahamic'
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
			Nuke: 'Resist',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'The true name of Cinderella\'s heroine. "Cinder Ella" was a derisive nickname, born from her hard work always leaving her dusty and sooty. After marrying her prince, she became "Princess Ella."',
		origin: 'Modern Fiction',
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
				name: 'Kougaon',
				level: 0
			},
			{
				name: 'Eigaon',
				level: 0
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Resist',
			Elec: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'Also known as Charlemagne\'s talisman, it is said to make its owner an emperor. In between the two gems is a piece of Jesus\' cross and a hair of the Virgin Mary.',
		origin: 'Abrahamic'
	},
	{
		name: 'Enku',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 4,
				Ice: -5,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 3,
				Almighty: 0,
				Recovery: -2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Haunt',
		level: 38,
		hp: 264,
		mp: 219,
		stats: {
			st: 28,
			dx: 36,
			ma: 61,
			ag: 40,
			lu: 49
		},
		learnset: [
			{
				name: 'Fire Breath',
				level: 0
			},
			{
				name: 'Damascus Claw',
				level: 0
			},
			{
				name: 'Maragion',
				level: 39
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak',
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A type of preta, residing in the hunger realm of the six Buddhist domains. It cooks and eats insects out of the air with the fire it spits out, but its insatiable hunger is its eternal torment. Enku are small-wealth pretas, and are allowed to eat some unclean things; other preta are forced to eat feces or burnt bodies.',
		origin: 'Buddhist'
	},
	{
		name: 'Erlkonig',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 4,
				Fire: -2,
				Ice: 0,
				Elec: 3,
				Force: 0,
				Light: 0,
				Dark: 2,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Wood',
		level: 70,
		hp: 659,
		mp: 227,
		stats: {
			st: 66,
			dx: 106,
			ma: 55,
			ag: 80,
			lu: 69
		},
		learnset: [
			{
				name: 'Maziodyne',
				level: 0
			},
			{
				name: 'Stun Needles',
				level: 0
			},
			{
				name: 'Endure',
				level: 71
			},
			{
				name: 'Null Elec',
				level: 72
			},
			{
				name: 'Myriad Arrows',
				level: 73
			}
		],
		resistances: {
			Gun: 'Repel',
			Fire: 'Weak',
			Elec: 'Resist',
			Force: 'Weak',
			Dark: 'Null',
			Daze: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'An evil wood spirit appearing in Germany\'s Scharzwald. He charms people and leads them to their deaths.\nHis name means "Alder King," and true to his name, he is the ruler of the alders of the forest. It is said that the Erlkonig is the strongest of the alder trees.',
		origin: 'European'
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
			Elec: 'Resist',
			Force: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'An earth elemental; one of the four elements in energy form.\nIt is said to be composed of "dry" and "cold" essences, which are known to be the basic components of destruction.',
		origin: 'Universal'
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
			Phys: 'Resist',
			Ice: 'Weak',
			Elec: 'Weak',
			Poison: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'An evil dragon of Norse lore, it was vanquished by the hero Siegfried.\nAccording to the Volsunga saga, it was extremely venomous, had legs like snakes, and shook the ground with every step.',
		origin: 'Norse'
	},
	{
		name: 'Feng Huang',
		aliases: [
			'Houou',
			'Ho-ou',
			'Ho-Oh',
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
			Fire: 'Null',
			Force: 'Resist',
			Dark: 'Weak',
			Seal: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The legendary bird of Chinese myth, said to appear only in times of peace.\nIt is the ruler of all birds. When it dies, birds across the land chirp with sadness.',
		origin: 'Chinese'
	},
	{
		name: 'Fenrir',
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 0,
				Ice: 4,
				Elec: 0,
				Force: -4,
				Light: 0,
				Dark: 0,
				Almighty: -2,
				Ailment: 0,
				Recovery: -1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Wilder',
		level: 65,
		hp: 373,
		mp: 253,
		stats: {
			st: 61,
			vi: 41,
			ma: 36,
			ag: 54,
			lu: 30
		},
		learnset: [
			{
				name: 'Ice Dracostrike',
				level: 0
			},
			{
				name: 'Severing Bite',
				level: 0
			},
			{
				name: 'Retaliate',
				level: 0
			},
			{
				name: 'Mabufudyne',
				level: 66
			},
			{
				name: 'Impaler\'s Animus',
				level: 67
			},
			{
				name: 'Murderous Glee',
				level: 68
			}
		],
		resistances: {
			Ice: 'Drain',
			Force: 'Weak',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'An evil dragon of Norse lore that was vanquished by the hero Siegfried.\nAccording to the Völsunga saga, it was extremely venomous, had legs like snakes, and shook the ground with every step.',
		origin: 'Norse'
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
				name: 'Mac an Luin',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Agibarion',
				level: 0
			},
			{
				name: 'Riberama',
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
			Fire: 'Null',
			Elec: 'Weak',
			Light: 'Null',
			Seal: 'Null',
			Sleep: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The leader of the Fianna, warriors who protected High King Cormac of Ireland. He was born as Deimne, but, due to his blond hair and white skin, he soon came to be called "Fionn," a name meaning "golden hair."\nWhen training under the druid Finn Eces, he was ordered to cook the Salmon of Knowledge. Upon licking some of the salmon\'s fat from his thumb, he gained its knowledge. From that point on, it is said that Fionn could tap this knowledge any time he licked his thumb.',
		origin: 'Celtic'
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
			Fire: 'Resist',
			Ice: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A fire elemental; one of the four elements in energy form.\nIt is said to be composed of both "dry" and "heat" essences. The ancient Greek concepts of the four basic elements significantly influenced early astrology.',
		origin: 'Universal'
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
			Fire: 'Null',
			Ice: 'Weak',
			Dark: 'Resist',
			Sleep: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the "Ars Goetia."\nHe appears as a leopard and can see the past and future. He can control fire, which he uses to burn his adversaries to death.',
		origin: 'Abrahamic'
	},
	{
		name: 'Fomorian',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 1,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: -1
			},
			inherit: null
		},
		arcana: null,
		race: 'Night',
		level: 6,
		hp: 181,
		mp: 30,
		stats: {
			st: 19,
			dx: 11,
			ma: 8,
			ag: 9,
			lu: 13
		},
		learnset: [
			{
				name: 'Headcrush',
				level: 0
			},
			{
				name: 'Needle Shot',
				level: 7
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Evil giants of Celtic lore. They are often depicted as goat- or horse-headed barbarians.\nThey were led by Balor of the Evil Eye. They lived in Ireland since ancient times and three times quelled invasions from westerners.',
		origin: 'Celtic'
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
			Ice: 'Drain',
			Elec: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the "Ars Goetia."\nHe appears as a great sea monster and is skilled in many languages in addition to being a master of rhetoric.',
		origin: 'Abrahamic'
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
			Elec: 'Weak',
			Force: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The Roman goddess of luck, she spins the Wheel of Fortune and is believed to have originally been a fertility goddess. Her Greek counterpart is Tyche.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Frost Ace',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -1,
				Ice: 4,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Genma',
		level: 42,
		hp: 390,
		mp: 230,
		stats: {
			st: 52,
			dx: 37,
			ma: 52,
			ag: 62,
			lu: 52
		},
		learnset: [
			{
				name: 'Mabufula',
				level: 0
			},
			{
				name: 'Purple Smoke',
				level: 0
			},
			{
				name: 'Ice Pleroma',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 43
			},
			{
				name: 'Bufudyne',
				level: 44
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Null',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Jack Frost after he donned his Ice Vest and transformed into a superhero.\nLittle is known about him, but rumors says he was involved in a tragic incident and now burns with vengeance, though his heart is still frozen in sorrow. As Fate toys with the dark hero, what path will he choose? Mercy? Or vengeance?\nStill unable to come up with an answer, he continues his long battle, hiding that cool, cute face of his behind the mask.',
		origin: 'ATLUS Original'
	},
	{
		name: 'Futomimi',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Kishin',
		level: 63,
		hp: 498,
		mp: 267,
		stats: {
			st: 20,
			ma: 26,
			vi: 20,
			ag: 15,
			lu: 12
		},
		learnset: [
			{
				name: 'Charge',
				level: 0
			},
			{
				name: 'War Cry',
				level: 0
			},
			{
				name: 'Mute Gaze',
				level: 0
			},
			{
				name: 'Null Freeze',
				level: 0
			},
			{
				name: 'Null Shock',
				level: 0
			},
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Might',
				level: 64
			},
			{
				name: 'Life Surge',
				level: 65
			},
			{
				name: 'Mana Surge',
				level: 66
			}
		],
		resistances: {
			Phys: 'Resist',
			Light: 'Null',
			Dark: 'Null',
			Confusion: 'Null',
			Sleep: 'Null',
			Charm: 'Null',
			Stun: 'Null',
			Bind: 'Null',
			Poison: 'Null',
			Seal: 'Null'
		},
		game: 'smt3',
		alignment: null,
		lore: 'A good Manikin that was reborn, called back into the world by the Afterlife Bell. Because of his doings in the previous life, he has gained new powers.',
		origin: 'ATLUS Original'
	},
	{
		name: 'Futotama',
		aliases: [
			'Ame no Futotama'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Enigma',
		level: 50,
		hp: 381,
		mp: 325,
		stats: {
			st: 35,
			dx: 46,
			ma: 83,
			ag: 61,
			lu: 67
		},
		learnset: [
			{
				name: 'Healing Knowhow',
				level: 0
			},
			{
				name: 'Attack Knowhow',
				level: 0
			},
			{
				name: 'Workaholic',
				level: 51
			},
			{
				name: 'Sabbatma',
				level: 52
			},
			{
				name: 'Makarakarn',
				level: 53
			}
		],
		resistances: {
			Force: 'Weak',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'Fully known as Ame no Futotama, he is a god of Japanese origin who governs divination and religious services. He is said to be the divine ancestor of the Inbe clan.\nWhen Amaterasu was hiding and the world was covered in darkness, he was the one who performed the Futomani, a divination using the bones of a deer.',
		origin: 'Japanese'
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
			Light: 'Null',
			Dark: 'Weak',
			Sleep: 'Weak',
			Seal: 'Resist',
			Mirage: 'Null',
			Confusion: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The Nihonshoki sword deity who pacified Ashihara-no-Nakatasukuni.\nHis name comes from "futsu," the fashion in which things are cut, and "nushi," a term meaning, "nature as a god."',
		origin: 'Japanese'
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
			Elec: 'Weak',
			Force: 'Null',
			Charm: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, it sends hurricanes to blow away its enemies.\nSome say that Fuu-Ki is the original ninja.',
		origin: 'Japanese'
	},
	{
		name: 'Fuxi',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 1,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: -1
			},
			inherit: null
		},
		arcana: null,
		race: 'Raptor',
		level: 6,
		hp: 116,
		mp: 45,
		stats: {
			st: 11,
			dx: 16,
			ma: 10,
			ag: 13,
			lu: 12
		},
		learnset: [
			{
				name: 'Zan',
				level: 0
			},
			{
				name: 'Shibaboo',
				level: 0
			},
			{
				name: 'Bouncing Claw',
				level: 7
			},
			{
				name: 'Patra',
				level: 8
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Weak',
			Confusion: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'An ominous bird of Chinese lore. Its name is derived from the sounds it makes when it cries. Note it has no relation to Fu Xi the emperor/god, which is spelled differently in Chinese.\nIt appears in the Xishan Jing chapter of the book Shan Hai Jing. It has the body of a rooster and the head of a human with a cockscomb and pointed ears. The appearance of a Fukei is a bad omen, a sign that war is about to break out. ',
		origin: 'Chinese'
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
			Fire: 'Resist',
			Ice: 'Null',
			Elec: 'Weak',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'One of the four major angels. The name Gabriel means "God is my strength."\nActing as a messenger for God, Gabriel is the one who informed the virgin Mary of her pregnancy. Though often depicted with a feminine face, there are various interpretations suggesting Gabriel is not androgynous but is in fact a woman.',
		origin: 'Abrahamic'
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
			Phys: 'Resist',
			Elec: 'Weak',
			Force: 'Null',
			Dark: 'Weak',
			Poison: 'Weak',
			Confusion: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The elephant-headed god in Hindu mythology.\nHe was originally created out of dirt by Parvati to prevent anyone from watching her bathe. It is said that Shiva knocked his head off but later replaced it with an elphant\'s head.',
		origin: 'Hindu'
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
			Fire: 'Weak',
			Ice: 'Drain',
			Dark: 'Weak'
		},
		game: 'p4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The personification of the Ganges river. Originally from the heavens, she came to earth to clean the souls of the people as a result of the prayers of Bhagiratha.',
		origin: 'Hindu'
	},
	{
		name: 'Garrote',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Recovery: -1,
				Ailment: 3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Spirit',
		level: 7,
		hp: 107,
		mp: 59,
		stats: {
			st: 12,
			dx: 12,
			ma: 11,
			ag: 16,
			lu: 15
		},
		learnset: [
			{
				name: 'Cough',
				level: 0
			},
			{
				name: 'Dormina',
				level: 0
			},
			{
				name: 'Poisma',
				level: 8
			},
			{
				name: 'Binding Claw',
				level: 9
			}
		],
		resistances: {
			Gun: 'Resist',
			Fire: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Sleep: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'An execution device that has become an evil spirit. Victims would be tied to a stake and a rope or iron collar was placed around their neck. The rope or collar was tightened with a wheel. The tension of the rope would constrict the victim\'s neck to the point of asphyxiation. Using the iron collar, it would also break their neck.',
		origin: 'European'
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
			Elec: 'Weak',
			Force: 'Drain',
			Light: 'Resist',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A divine bird-man in Hindu mythology.\nHe hunts Nagas as a result of a dispute between the two creatures\' mothers. According to legend, he once fought with the gods, and was even granted immortality in exchange for becoming Vishnu\'s carrier.',
		origin: 'Hindu'
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
			Fire: 'Drain',
			Ice: 'Weak'
		},
		game: 'p4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'The tigress mount of the goddess Durga, of Hindu myth. Durga was born to defeat the Asura Mahisha, and Gdon was granted to her to help complete the task.',
		origin: 'Hindu'
	},
	{
		name: 'Gemori',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 2,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fallen',
		level: 58,
		hp: 386,
		mp: 311,
		stats: {
			st: 40,
			dx: 52,
			ma: 89,
			ag: 54,
			lu: 71
		},
		learnset: [
			{
				name: 'Sexy Dance',
				level: 0
			},
			{
				name: 'Maragidyne',
				level: 0
			},
			{
				name: 'Mana Surge',
				level: 59
			},
			{
				name: 'Mediarama',
				level: 60
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Charm: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia, and the only female among them. She is a beautiful woman with a golden crown and pure white lace. She is said to have the power to see the past and future, knows how to gain the love of women, and sometimes turns into an ugly woman to test her summoners.',
		origin: 'Abrahamic'
	},
	{
		name: 'Ghoul',
		affinities: {
			skillPotential: {
				Phys: 1,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 3,
				Almighty: 0,
				Recovery: -2,
				Ailment: 2,
				Support: 0
			},
			inherit: 'Ailment'
		},
		arcana: 'Death',
		race: 'Haunt',
		level: 49,
		hp: 356,
		mp: 204,
		stats: {
			st: 66,
			dx: 42,
			ma: 57,
			ag: 62,
			lu: 63
		},
		learnset: [
			{
				name: 'Frenzied Chomp',
				level: 0
			},
			{
				name: 'Tetanus Cut',
				level: 0
			},
			{
				name: 'Damascus Claw',
				level: 50
			},
			{
				name: 'Acid Breath',
				level: 51
			}
		],
		resistances: {
			Fire: 'Weak',
			Light: 'Weak',
			Dark: 'Null',
			Charm: 'Weak',
			Seal: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Cannibalistic demon from Islamic lore. It feeds on the flesh of both the living and the dead. It is indistinguishable from normal humans, and prefers to prey on children and travelers.',
		origin: 'Abrahamic'
	},
	{
		name: 'Girimekhala',
		aliases: [
			'Girimehkala'
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
		hp: 335,
		mp: 225,
		stats: {
			st: 61,
			vi: 40,
			ma: 46,
			ag: 35,
			lu: 38
		},
		learnset: [
			{
				name: 'Hell Thrust',
				level: 0
			},
			{
				name: 'Hades Blast',
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
			Phys: 'Repel',
			Elec: 'Weak',
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Poison: 'Resist',
			Sleep: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A giant elephant monster of Sri Lankan mythology.\nIt is typically portrayed as being ridden by Mara, the Evil One. Whoever looks into its evil eye is said to be met with great misfortune.',
		origin: 'Buddhist'
	},
	{
		name: 'Glasya-Labolas',
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 0,
				Ice: 0,
				Elec: -4,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 1,
				Recovery: -3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Beast',
		level: 59,
		hp: 333,
		mp: 255,
		stats: {
			st: 39,
			vi: 41,
			ma: 45,
			ag: 38,
			lu: 45
		},
		learnset: [
			{
				name: 'Mirage Assailment',
				level: 0
			},
			{
				name: 'Severing Bite',
				level: 0
			},
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Force Pleroma',
				level: 60
			},
			{
				name: 'Abyssal Mask',
				level: 61
			},
			{
				name: 'Resist Phys',
				level: 62
			}
		],
		resistances: {
			Elec: 'Weak',
			Force: 'Null',
			Dark: 'Null',
			Mirage: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'One of the 72 demons of the "Ars Goetia," sometimes referred to as Caacrinolaas.\nHis form is described as a dog with griffin-like wings, and he can impart instant knowledge in all arts and sciences. It is also said that he is the author of bloodshed and murder, excels at predicting the future, and can make people invisible. Some accounts suggest the demon Nebiros uses him as a mount.',
		origin: 'Abrahamic'
	},
	{
		name: 'Gnome',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 4,
				Force: -5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Element',
		level: 24,
		hp: 308,
		mp: 116,
		stats: {
			st: 41,
			dx: 26,
			ma: 20,
			ag: 33,
			lu: 37
		},
		learnset: [
			{
				name: 'High Elec Pleroma',
				level: 0
			},
			{
				name: 'Lullaby',
				level: 25
			},
			{
				name: 'Life Gain',
				level: 28
			}
		],
		resistances: {
			Elec: 'Resist',
			Force: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'One of the four elemental spirits of Paracelsus, it is a spirit of earth.\nThey are similar to Dwarves and Knockers, living underground and protecting treasure. Their name comes from the Greek phrase "earth-dweller."',
		origin: 'European'
	},
	{
		name: 'Goblin',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fairy',
		level: 3,
		hp: 101,
		mp: 24,
		stats: {
			st: 15,
			dx: 6,
			ma: 7,
			ag: 9,
			lu: 10
		},
		learnset: [
			{
				name: 'Gram Slice',
				level: 0
			},
			{
				name: 'Lunge',
				level: 4
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Weak',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A representative of the faeries, but compared to others of its kind such as elves, it is much more bestial and mischievous.\nThey try to drag those who can see them to their homes. They are also often used as familiars.',
		origin: 'European'
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
			Fire: 'Weak',
			Ice: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'Ishikawa Goemon was a thief who stole from the rich and gave to the poor in Japan during the Azuchi-Momoyama period. The kabuki scene of him sitting on the gate of Nanzen-ji is famous.',
		origin: 'Historical',
		user: 'Yusuke Kitagawa',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Gogmagog',
		affinities: {
			skillPotential: {
				Phys: 5,
				Fire: -1,
				Ice: 0,
				Elec: 0,
				Force: -2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: -2,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Jirae',
		level: 61,
		hp: 412,
		mp: 212,
		stats: {
			st: 46,
			vi: 56,
			ma: 27,
			ag: 31,
			lu: 42
		},
		learnset: [
			{
				name: 'Power Punch',
				level: 0
			},
			{
				name: 'Rampage',
				level: 0
			},
			{
				name: 'Critical Aura',
				level: 0
			},
			{
				name: 'Critical Zealot',
				level: 62
			},
			{
				name: 'Titanomachia',
				level: 63
			},
			{
				name: 'Phys Pleroma',
				level: 65
			}
		],
		resistances: {
			Phys: 'Null',
			Fire: 'Weak',
			Ice: 'Null',
			Force: 'Weak',
			Dark: 'Weak',
			Seal: 'Weak',
			Confusion: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A giant believed to have lived on the island of Britain in prehistoric times.\nHis body was so huge that he could destroy a sailing ship with a swing of his arm. He repelled all who invaded the island, but was defeated by Brutus of Troy.',
		origin: 'European'
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
			Ice: 'Null',
			Light: 'Weak'
		},
		game: 'p4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A hideous female monster with poison fangs and snakes instead of hair. Her name is Greek for "terrible." After Perseus took her head, he offered it to the gods who helped hem slay her.',
		origin: 'Greco-Roman'
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
			Fire: 'Weak',
			Ice: 'Null',
			Wind: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'Childhood nickname of Goemon Ishikawa. During his youth, he was raised among the Iga-ryu ninjas before he set off on his own to become a rogue ninja.',
		origin: 'Historical',
		user: 'Yusuke Kitagawa',
		stage: 3,
		evoSkillName: 'Hyakka Ryouran'
	},
	{
		name: 'Gremlin',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -2,
				Ice: 2,
				Elec: 1,
				Force: -2,
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
		race: 'Jaki',
		level: 5,
		hp: 47,
		mp: 80,
		stats: {
			st: 4,
			vi: 5,
			ma: 8,
			ag: 10,
			lu: 11
		},
		learnset: [
			{
				name: 'Dustoma',
				level: 0
			},
			{
				name: 'Zio',
				level: 6
			},
			{
				name: 'Bufu',
				level: 7
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A mischievous sprite that enjoys wreaking havoc on machines and tools. It\'s said that during World War II, Gremlins often were found when examining plane failures.\nThough rather troublesome creatures, Gremlins have been known to be quite useful at times and are even said to have helped Benjamin Franklin with his famous kite experiment.',
		origin: 'European'
	},
	{
		name: 'Grendel',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Recovery: -3,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Jaki',
		level: 50,
		hp: 596,
		mp: 152,
		stats: {
			st: 86,
			dx: 49,
			ma: 35,
			ag: 42,
			lu: 44
		},
		learnset: [
			{
				name: 'Mortal Jihad',
				level: 0
			},
			{
				name: 'Headcrush',
				level: 0
			},
			{
				name: 'Purple Smoke',
				level: 52
			},
			{
				name: 'Life Surge',
				level: 53
			}
		],
		resistances: {
			Gun: 'Resist',
			Force: 'Weak',
			Light: 'Weak',
			Daze: 'Resist',
			Confusion: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'The monster who appeared in the poem of Beowulf.\nHe raided the hall of Hrothgar, king of Denmark, for 12 years until the Swedish hero Beowulf ripped his arm off. Beowulf found Grendel in his lair below the lake and beheaded him.',
		origin: 'European'
	},
	{
		name: 'Gryphon',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Beast',
		level: 40,
		hp: 442,
		mp: 126,
		stats: {
			st: 61,
			dx: 40,
			ma: 29,
			ag: 42,
			lu: 51
		},
		learnset: [
			{
				name: 'Oni-Kagura',
				level: 0
			},
			{
				name: 'Power Punch',
				level: 0
			},
			{
				name: 'Damascus Claw',
				level: 41
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Weak',
			Force: 'Resist',
			Poison: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A creature of Indian origin with the head and wings of an eagle and the body of a lion.\nThey are said to protect the gold ore they tend to live near.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Gu Huo Niao',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 3,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Flight',
		level: 16,
		hp: 140,
		mp: 118,
		stats: {
			st: 15,
			dx: 19,
			ma: 30,
			ag: 21,
			lu: 24
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Makakaja',
				level: 17
			},
			{
				name: 'Maragi',
				level: 18
			}
		],
		resistances: {
			Gun: 'Weak',
			Fire: 'Resist',
			Ice: 'Weak',
			Force: 'Resist',
			Dark: 'Weak',
			Sick: 'Weak',
			Sleep: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A bird of Chinese lore that kidnaps human girls and raises them as its own.\nIt is normally seen in bird form, but it is said to be able to take off its feathers and become a human woman. A girl kidnapped and raised by a Gu Huo Niao is said to become one herself.',
		origin: 'Chinese'
	},
	{
		name: 'Gucumatz',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: -3,
				Ice: 2,
				Elec: 0,
				Force: 2,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Dragon',
		level: 27,
		hp: 240,
		mp: 128,
		stats: {
			st: 30,
			dx: 30,
			ma: 26,
			ag: 42,
			lu: 38
		},
		learnset: [
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Heat Wave',
				level: 0
			},
			{
				name: 'Wind Breath',
				level: 28
			},
			{
				name: 'Ice Breath',
				level: 29
			},
			{
				name: 'Media',
				level: 30
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Force: 'Resist',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A giant monster with blue and green plumage that appears in the Popol Vuh of Mayan lore. The god of the sky Huracan and the god of the sea Gucumatz conjured mountains and land from water and gave life to the world. The ancient Mayans also called Gucumatz the god of creation for this reason.',
		origin: 'South American'
	},
	{
		name: 'Guedhe',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 4,
				Almighty: 0,
				Recovery: 1,
				Ailment: -2,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Reaper',
		level: 63,
		hp: 404,
		mp: 373,
		stats: {
			st: 43,
			dx: 56,
			ma: 96,
			ag: 63,
			lu: 76
		},
		learnset: [
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Smile Charge',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 64
			},
			{
				name: 'Dark Pleroma',
				level: 65
			}
		],
		resistances: {
			Dark: 'Repel',
			Daze: 'Resist',
			Seal: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A Voodoo god of death who wears an all-black suit and a tall black hat. In order for the souls of the dead to reach Guinee, the afterworld, they must travel a long road. He waits at the crossroads to lead the souls. He is said to be very smart, knowing everything about all humans.',
		origin: 'Haitian'
	},
	{
		name: 'Gurulu',
		aliases: [
			'Gurr'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 3,
				Light: -4,
				Dark: 0,
				Almighty: 0,
				Ailment: 3,
				Recovery: -2,
				Support: 0
			},
			inherit: 'Phys'
		},
		arcana: 'Hunger',
		race: 'Raptor',
		level: 68,
		hp: 333,
		mp: 346,
		stats: {
			st: 44,
			vi: 35,
			ma: 39,
			ag: 59,
			lu: 53
		},
		learnset: [
			{
				name: 'Slumber Vortex',
				level: 0
			},
			{
				name: 'Mazandyne',
				level: 0
			},
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Yabusame Shot',
				level: 69
			},
			{
				name: 'Zanbarion',
				level: 70
			},
			{
				name: 'Nihil Claw',
				level: 72
			}
		],
		resistances: {
			Force: 'Null',
			Light: 'Weak',
			Poison: 'Resist',
			Sleep: 'Resist',
			Mirage: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A demon that takes the shape of a giant bird in Sri Lankan mythology.\nAlso known as "Gurulu Yaksha." It is believed to be a derivation of Garuda, the spirit bird of Indian mythology, which is in ideological opposition to its place in Sri Lankan mythology, in which it is interpreted as a demon.',
		origin: 'Hindu'
	},
	{
		name: 'Hachiman',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 3,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -3,
				Ailment: 0,
				Support: 1
			},
			inherit: 'Elec'
		},
		arcana: 'Hierophant',
		race: 'Deity',
		level: 75,
		hp: 726,
		mp: 244,
		stats: {
			st: 111,
			dx: 70,
			ma: 50,
			ag: 74,
			lu: 97
		},
		learnset: [
			{
				name: 'Maziodyne',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 0
			},
			{
				name: 'Holy Wrath',
				level: 0
			},
			{
				name: 'Berserker God',
				level: 76
			},
			{
				name: 'Life Surge',
				level: 77
			}
		],
		resistances: {
			Fire: 'Repel',
			Elec: 'Resist',
			Force: 'Weak',
			Light: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A god who migrated from Silla to Kyushu to give oracles to the people. Later deified as a guardian of samurai across Japan. Also called Yahata, or "a figure for gods to possess."',
		origin: 'Japanese'
	},
	{
		name: 'Hagen',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Famed',
		level: 56,
		hp: 596,
		mp: 216,
		stats: {
			st: 86,
			dx: 54,
			ma: 39,
			ag: 67,
			lu: 90
		},
		learnset: [
			{
				name: 'Loyalty Slash',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Hellish Mask',
				level: 0
			},
			{
				name: 'Grand Tack',
				level: 57
			},
			{
				name: 'Bloody Glee',
				level: 58
			}
		],
		resistances: {},
		game: 'smt4',
		alignment: null,
		lore: 'The warrior who killed Siegfried in the Nibelungenlied.\nHe was a loyal vassal of Gunther, king of Burgundy. He killed Siegfried by throwing a spear at Siegfried\'s only weak spot while he was drinking from a brook. Afterwards, he and his king were both beheaded by Siegfried\'s wife Kriemhild.',
		origin: 'Norse'
	},
	{
		name: 'Hairy Jack',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Beast',
		level: 30,
		hp: 328,
		mp: 81,
		stats: {
			st: 50,
			dx: 32,
			ma: 23,
			ag: 38,
			lu: 38
		},
		learnset: [
			{
				name: 'Sukunda',
				level: 0
			},
			{
				name: 'Frenzied Chomp',
				level: 0
			},
			{
				name: 'Axel Claw',
				level: 31
			},
			{
				name: 'Retaliate',
				level: 32
			}
		],
		resistances: {
			Light: 'Weak',
			Dark: 'Resist',
			Bind: 'Weak',
			Charm: 'Weak'
		},
		game: 'smt4',
		alignment: null,
		lore: 'A demon dog of England. It is a type of black, demonic hound known as a Barghest and is covered with mounds of hair.\nIt\'s said to appear commonly in deserted farmlands and wastelands. It can take a human form. Although it has helped people in some cases, in general they are dangerous and will attack with fierce strength if provoked.',
		origin: 'European'
	},
	{
		name: 'Halphas',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: -2,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: -2,
				Ailment: 2,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fallen',
		level: 11,
		hp: 62,
		mp: 89,
		stats: {
			st: 6,
			vi: 6,
			ma: 13,
			ag: 15,
			lu: 15
		},
		learnset: [
			{
				name: 'Dormina',
				level: 0
			},
			{
				name: 'Marin Karin',
				level: 0
			},
			{
				name: 'Mazan',
				level: 12
			},
			{
				name: 'Makajama',
				level: 14
			}
		],
		resistances: {
			Elec: 'Weak',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the "Ars Goetia." He is called the Count of Death and Destruction, and appears as a jet-black dove with blood-red eyes. He is a craftsman and builds towers full of weapons.',
		origin: 'Abrahamic'
	},
	{
		name: 'Hamsa',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 1,
				Force: 0,
				Light: 1,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Avian',
		level: 10,
		hp: 137,
		mp: 75,
		stats: {
			st: 15,
			dx: 15,
			ma: 13,
			ag: 20,
			lu: 18
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Attack Knowhow',
				level: 0
			},
			{
				name: 'Dia',
				level: 11
			},
			{
				name: 'Hama',
				level: 12
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Resist',
			Dark: 'Weak',
			Sleep: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The sacred white goose that Brahma rides in Hindu lore.\nThe sight of pure white flying the winter skies symbolizes the efforts of the Brahmins trying to obtain Brahma\'s knowledge. It is said that is why Hamsa became Brahma\'s steed.',
		origin: 'Hindu'
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
			Elec: 'Weak',
			Force: 'Repel',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A hero of Hindu descent. He can transform into anything, fly, and possesses incredible strength.\nHe performed many heroic deeds in the Ramayana and is most always depicted as a monkey.',
		origin: 'Hindu'
	},
	{
		name: 'Haoma',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 2,
				Fire: -4,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Tree',
		level: 54,
		hp: 486,
		mp: 251,
		stats: {
			st: 42,
			dx: 81,
			ma: 68,
			ag: 60,
			lu: 55
		},
		learnset: [
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Fog Breath',
				level: 0
			},
			{
				name: 'Blast Arrow',
				level: 55
			},
			{
				name: 'Tetraja',
				level: 56
			}
		],
		resistances: {
			Gun: 'Null',
			Fire: 'Weak',
			Light: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A Persian god of Zoroastrian origin who has a plant of the same name. He is the giver of life.\nThe plant was originally a sacred plant used to make stimulants. Unfortunately, it is no longer known which herb that was. It was used commonly in religious rituals.',
		origin: 'Zoroastrian'
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
			Fire: 'Weak',
			Ice: 'Drain',
			Light: 'Null'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
		user: 'Chie Satonaka',
		stage: 3,
		evoSkillName: 'Luster Candy'
	},
	{
		name: 'Hare of Inaba',
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: -2,
				Ailment: 1,
				Recovery: 1,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'UMA',
		level: 31,
		hp: 166,
		mp: 155,
		stats: {
			st: 19,
			vi: 24,
			ma: 22,
			ag: 34,
			lu: 23
		},
		learnset: [
			{
				name: 'Taunt',
				level: 0
			},
			{
				name: 'Trafuri',
				level: 0
			},
			{
				name: 'Masukukaja',
				level: 0
			},
			{
				name: 'Resist Force',
				level: 0
			},
			{
				name: 'Resist Elec',
				level: 32
			},
			{
				name: 'Resist Fire',
				level: 33
			},
			{
				name: 'Resist Ice',
				level: 34
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Weak',
			Elec: 'Weak',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Known in Japanese as "Inaba no Shirousagi," it is a smart rabbit written about in the Kojiki, worshipped as a hare god.\nWanting to cross the sea from Oki Island to the mainland, he had sharks line up in a row and crossed on them, under the guise of helping to count them. Once he crossed and revealed that he was just using them as a bridge, the sharks skinned him. He was healed by a passing god.',
		origin: 'Japanese'
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
			Force: 'Weak',
			Dark: 'Null',
			Sleep: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A Buddhist goddess also known as Kishimojin.\nShe was originally an evil devil who ate children, but when Buddha hit the most beloved of her 500 children, she was stricken with sorrow. Having been taught the pain of losing a child, she then became a good god and started eating pomegranates instead of children.',
		origin: 'Buddhist'
	},
	{
		name: 'Harpy',
		aliases: [
			'Harpie'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Flight',
		level: 35,
		hp: 293,
		mp: 156,
		stats: {
			st: 38,
			dx: 38,
			ma: 32,
			ag: 53,
			lu: 47
		},
		learnset: [
			{
				name: 'Bind Voice',
				level: 0
			},
			{
				name: 'Zanma',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 0
			},
			{
				name: 'Force Pleroma',
				level: 36
			},
			{
				name: 'Sukunda',
				level: 37
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Weak',
			Force: 'Resist',
			Dark: 'Weak',
			Bind: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'Spirits of the wind in Greek lore. Originally thought to be a goddess of the island of Creta.\n"Harpy" is the English name; the original Greek name is Harpuia. The Harpies consisted of three sisters: Aello ("storm"), Ocypete ("swift"), and Celaeno ("dark"). They are cowardly and hate fighting, but they were also spiteful and enjoyed causing trouble.',
		origin: 'Greco-Roman'
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
			Fire: 'Resist',
			Wind: 'Drain',
			Psy: 'Null',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'An evil god of the Cthulhu Mythos and one of the eldritch deities known as Great Old Ones. It wields great power over wind. Also called "The Unspeakable" and "The King in Yellow."',
		origin: 'Lovecraftian'
	},
	{
		name: 'Hathor',
		affinities: {
			skillPotential: {
				Phys: -4,
				Gun: -4,
				Fire: 0,
				Ice: 1,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 3,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Megami',
		level: 18,
		hp: 200,
		mp: 127,
		stats: {
			st: 22,
			dx: 22,
			ma: 26,
			ag: 35,
			lu: 28
		},
		learnset: [
			{
				name: 'Spring of Life',
				level: 0
			},
			{
				name: 'Patra',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 19
			},
			{
				name: 'Rakunda',
				level: 20
			}
		],
		resistances: {
			Phys: 'Weak',
			Gun: 'Weak',
			Ice: 'Resist',
			Force: 'Resist',
			Light: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The Egyptian goddess of fertility. She is also the goddess of love, motherhood and joy.\nShe is depicted as a cow with the disc of the sun between her horns, or as a horned woman holding the disc of the sun.',
		origin: 'Egyptian'
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
			Phys: 'Resist',
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Resist',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The spirit of a monster-bursting dog that used to live at Kozen-ji.\nLong ago, the villagers of Mitsuke would offer one of their own girls to a giant monkey yokai to prevent it from ravaging the fields. A monk passing by learned of this and that it greatly feared Hayataro. The monk then rushed off and found him at a temple. Hayataro was offered in place of a village girl, where he then defeated the monster, but was mortally wounded in the epic battle. The loyal dog traveled back to Kozen-ji, where he died shortly after reuniting with his master.',
		origin: 'Japanese'
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
			Fire: 'Null',
			Ice: 'Weak',
			Elec: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Greek goddess of crossroads, ghosts and witchcraft, she is commonly attended to by dogs. She is also known to be the chief of the witches that appears in the play "Macbeth"',
		origin: 'Greco-Roman',
		user: 'Ann Takamaki',
		stage: 2,
		evoSkillName: 'Evade Ice'
	},
	{
		name: 'Hecatoncheires',
		aliases: [
			'Hekatoncheires'
		],
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
			Force: 'Weak',
			Dark: 'Null',
			Mirage: 'Weak',
			Confusion: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'Giants born from Uranus and Gaia in Greek mythology. The name means "those with a hundred arms."\nDuring the war of the Titans, Zeus freed them from the underworld to help him obtain victory.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Heimdall',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: -4,
				Support: 2
			},
			inherit: null
		},
		arcana: 'Sun',
		race: 'Genma',
		level: 73,
		hp: 574,
		mp: 301,
		stats: {
			st: 74,
			dx: 74,
			ma: 94,
			ag: 79,
			lu: 82
		},
		learnset: [
			{
				name: 'Dekunda',
				level: 0
			},
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Life Aid',
				level: 74
			},
			{
				name: 'Mana Aid',
				level: 75
			},
			{
				name: 'High Force Pleroma',
				level: 76
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Force: 'Null',
			Bind: 'Resist',
			Seal: 'Weak',
			Confusion: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'One of the most beautiful gods of Norse lore, he is also kown as the White God. He guards the Bifrost Bridge, the entrance to Asgard, and will blow his Gjallarhorn to signal the beginning of the end. He and Loki are fated to kill each other at the end of Ragnarok.',
		origin: 'Norse'
	},
	{
		name: 'Hel',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -5,
				Ice: 4,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 4,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: -2
			},
			inherit: null
		},
		arcana: 'Death',
		race: 'Reaper',
		level: 43,
		hp: 352,
		mp: 214,
		stats: {
			st: 31,
			dx: 40,
			ma: 68,
			ag: 45,
			lu: 54
		},
		learnset: [
			{
				name: 'Mamudo',
				level: 0
			},
			{
				name: 'Mabufula',
				level: 0
			},
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Sabbatma',
				level: 44
			},
			{
				name: 'Bufudyne',
				level: 45
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'The queen of the netherworld in Norse lore. It is said her name is where the English term "Hell" originates. Medieval legends mentioned her as Brunhilde, which means "burning Hel." This is also the name of the Valkyrie leader.',
		origin: 'Norse'
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
			Phys: 'Resist',
			Fire: 'Null',
			Wind: 'Weak',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'p4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A fallen angel in Judeo-Christian lore whose name signifies "Morning Star." Primarily known for defying God, but also worshipped as a bringer of light to mankind.',
		origin: 'Abrahamic'
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
			Fire: 'Null',
			Ice: 'Weak',
			Force: 'Null',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'A biker-turned-Fiend that claims to come from Hell.\nArmed with an intense hatred of himself and the world, his reliance solely on his own poewr turned him into this abominable figure.',
		origin: 'North American'
	},
	{
		name: 'Heqet',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 1,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Lovers',
		race: 'Holy',
		level: 13,
		hp: 154,
		mp: 72,
		stats: {
			st: 20,
			dx: 18,
			ma: 19,
			ag: 21,
			lu: 17
		},
		learnset: [
			{
				name: 'Healing Knowhow',
				level: 0
			},
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 14
			},
			{
				name: 'Mazio',
				level: 15
			}
		],
		resistances: {
			Elec: 'Resist',
			Force: 'Weak',
			Poison: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A goddess of Egyptian lore who governs water and fertility.\nShe is depicted as a frog or a woman with a frog\'s head. She might have been derived from the creation myth of Hermopolis, where four frog gods existed before man. She is the wife of Khnum and is thought to be the giver of life.',
		origin: 'Egyptian'
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
				name: 'Eigaon',
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
			Psy: 'Resist',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: null,
		lore: 'The legendary Saxon who opposed the Normans during the conquest of England in the 11th century. Said to have been the basis for tales of Robin Hood. Called "Hereward the Wake" for his watchfulness.',
		origin: 'Historical',
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
			Fire: 'Resist',
			Wind: 'Weak'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman',
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
			Ice: 'Weak',
			Force: 'Resist',
			Confusion: 'Resist',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'One of a higher class of pixie, these are the Seelie Court\'s more powerful soldiers.\nThey are charged with guarding the ruins and caves where other pixies dwell.',
		origin: 'European'
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
		resistances: {},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
		user: 'Rise Kujikawa',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Hitokotonushi',
		aliases: [
			'Hitokoto-Nushi',
			'Hitokotonusi'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 2,
				Force: -2,
				Light: 3,
				Dark: -3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 3
			},
			inherit: 'Ailment'
		},
		arcana: 'Hermit',
		race: 'Kunitsu',
		level: 49,
		hp: 375,
		mp: 339,
		stats: {
			st: 38,
			dx: 48,
			ma: 86,
			ag: 60,
			lu: 64
		},
		learnset: [
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 0
			},
			{
				name: 'Purple Smoke',
				level: 50
			},
			{
				name: 'Tetraja',
				level: 51
			}
		],
		resistances: {
			Fire: 'Weak',
			Elec: 'Null',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'Japanese god of words, thought to be the deification of echoes. Said to proclaim good and bad in a single word, and all words uttered by him come true.',
		origin: 'Japanese'
	},
	{
		name: 'Hooligan',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 3,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: -1
			},
			inherit: null
		},
		arcana: null,
		race: 'Foul',
		level: 10,
		hp: 180,
		mp: 57,
		stats: {
			st: 15,
			dx: 22,
			ma: 13,
			ag: 17,
			lu: 15
		},
		learnset: [
			{
				name: 'Madness Needle',
				level: 0
			},
			{
				name: 'Toxic Sting',
				level: 11
			},
			{
				name: 'Attack Knowhow',
				level: 12
			}
		],
		resistances: {
			Gun: 'Resist',
			Ice: 'Weak',
			Elec: 'Resist',
			Force: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Punks from street gangs who became demons. They commit various crimes, such as vandalism and robbery.\nIt is believed the word "hooligan" came from a fictitious family name in a song that was popular around the late 1800s/early 1900\'s among Irish immigrants in England. In modern days, "hooligans" commonly refers to soccer fans who cause riots.',
		origin: 'European'
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
			Phys: 'Resist',
			Gun: 'Resist',
			Ice: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'Unlike its name suggests, the Hope Diamond is a cursed jewel that brings ruin from one owner to the next. A few supposed victims include King Louis XVI and his wife, Marie Antoinette.',
		origin: 'European'
	},
	{
		name: 'Horkos',
		aliases: [
			'Orcus'
		],
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Tyrant',
		level: 26,
		hp: 364,
		mp: 91,
		stats: {
			st: 44,
			dx: 26,
			ma: 19,
			ag: 27,
			lu: 34
		},
		learnset: [
			{
				name: 'Critical Wave',
				level: 0
			},
			{
				name: 'Megaton Press',
				level: 28
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Weak',
			Light: 'Weak',
			Charm: 'Weak',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A death god originating in Greco-Roman lore.\nIn those days, he was depicted as a demon with the head of a pig, most likely because sacrifices to him commonly used pigs.',
		origin: 'Greco-Roman'
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
			Fire: 'Resist',
			Elec: 'Resist',
			Force: 'Weak',
			Light: 'Repel',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'An ancient god of Egypt known for having the sun and moon as his watchful eyes.\nHe was revered by some as the principal god, most likely due to his association with the celestial bodies above. Myth often depicts him as a hawk or a falcon.',
		origin: 'Egyptian'
	},
	{
		name: 'Hresvelgr',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: -6,
				Ice: 3,
				Elec: -2,
				Force: 3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Raptor',
		level: 70,
		hp: 526,
		mp: 278,
		stats: {
			st: 59,
			dx: 69,
			ma: 83,
			ag: 98,
			lu: 87
		},
		learnset: [
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Pandemic Bomb',
				level: 0
			},
			{
				name: 'Nihil Claw',
				level: 71
			},
			{
				name: 'Mazandyne',
				level: 73
			}
		],
		resistances: {
			Gun: 'Weak',
			Fire: 'Weak',
			Ice: 'Null',
			Force: 'Drain'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A giant eagle that sits at the very top of Yggdrasil.\nThe winds blow whenever it beats its wings. It is forever at war with the snake Nidhoggr, which lives at the tree\'s root.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Hsing-Hsing',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Beast',
		level: 48,
		hp: 360,
		mp: 171,
		stats: {
			st: 72,
			dx: 44,
			ma: 32,
			ag: 70,
			lu: 62
		},
		learnset: [
			{
				name: 'Binding Claw',
				level: 0
			},
			{
				name: 'Attack Knowhow',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Taunt',
				level: 49
			},
			{
				name: 'Beast Eye',
				level: 50
			}
		],
		resistances: {
			Fire: 'Resist',
			Elec: 'Resist',
			Force: 'Weak',
			Charm: 'Weak',
			Confusion: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A monkey-like creature that can speak human languages in Chinese and Japanese folklore. Judging from their red faces, it is believed they like liquor, and can be easily captured by getting them intoxicated.',
		origin: 'Chinese'
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
			Fire: 'Null',
			Ice: 'Weak',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Tree spirits in Chinese mythology that are born when three or more people hang themselves from the same tree.\nThey take the form of a beautiful woman in white clothing, however they are much smaller in size than a human. They cannot talk, though they can chirp like birds.',
		origin: 'Chinese'
	},
	{
		name: 'Huang Di',
		affinities: {
			skillPotential: {
				Phys: 4,
				Gun: 4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 4,
				Recovery: 4,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Emperor',
		race: 'Famed',
		level: 86,
		hp: 695,
		mp: 322,
		stats: {
			st: 84,
			dx: 84,
			ma: 107,
			ag: 94,
			lu: 99
		},
		learnset: [
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Riot Gun',
				level: 0
			},
			{
				name: 'Salvation',
				level: 0
			},
			{
				name: 'Great Logos',
				level: 87
			},
			{
				name: 'Victory Cry',
				level: 88
			},
			{
				name: 'Repel Light',
				level: 89
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The legendary Yellow Emperor of China who is thought to be the founder of Chinese civilization.\nWhen his mother Dubhe became pregnant with him, she began to glow brightly, and the pregnancy lasted 24 months. He is famous for inventing several things, lending his talents to creating houses, clothes, wagons, boats, music, and medicine.',
		origin: 'Chinese'
	},
	{
		name: 'Huang Long',
		aliases: [
			'Kohryu'
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
		hp: 410,
		mp: 330,
		stats: {
			st: 56,
			vi: 50,
			ma: 58,
			ag: 49,
			lu: 56
		},
		learnset: [
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 0
			},
			{
				name: 'Luster Candy',
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
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Light: 'Null',
			Dark: 'Weak',
			Confusion: 'Resist',
			Sleep: 'Weak',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'One of the holy dragons of Chinese lore, the Golden Dragon appears in times of great fortune or joy.\nHis dominion over the earth extends to the four gods Qing Long, Xuanwu, Zhuque, and Baihu.',
		origin: 'Chinese'
	},
	{
		name: 'Huoniao',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -3,
				Fire: 4,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -1,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Temperance',
		race: 'Raptor',
		level: 65,
		hp: 415,
		mp: 343,
		stats: {
			st: 44,
			dx: 58,
			ma: 99,
			ag: 65,
			lu: 78
		},
		learnset: [
			{
				name: 'Fire Breath',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Agidyne',
				level: 66
			},
			{
				name: 'Concentrate',
				level: 67
			}
		],
		resistances: {
			Gun: 'Weak',
			Fire: 'Repel',
			Ice: 'Weak',
			Bind: 'Weak',
			Seal: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A three-legged bird said to live in the sun.\nIn ancient China, there used to be 10 suns which would take turns traveling the sky. But one day, all ten suns appeared in the sky and scored the earth. A man named Hou Yi shot down nine of the suns.',
		origin: 'Chinese'
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
			Fire: 'Null',
			Ice: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'One of the monsters in Greek mythology. It is usually depicted as having 9 heads, but some may say that it has as many as 100.\nIts father is Typhon, giant of the wind, and its mother is Echidna, goddess of the snake. The Hydra has incredible regenerating power; so much so that when one of its heads is cut off, two more will sprout from the wound. It is also extremely venomous and simply inhaling its breath is enough to kill. The slaying of Hydra is listed as one of the 12 great labors of Hercules.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Ictinike',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: -3,
				Fire: 1,
				Ice: -3,
				Elec: 0,
				Force: 1,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Genma',
		level: 18,
		hp: 247,
		mp: 71,
		stats: {
			st: 31,
			dx: 24,
			ma: 14,
			ag: 24,
			lu: 24
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
				name: 'Scratch Dance',
				level: 19
			},
			{
				name: 'Resist Force',
				level: 20
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Weak',
			Ice: 'Weak',
			Sick: 'Weak'
		},
		game: 'smt4',
		alignment: null,
		lore: 'A knowledgeable hero of Sioux lore and son of the sun god.\nCast out of the heavens for angering his father, he lived a life of mischief and trickery on Earth. But when he tried to trick the beaver, kingfisher, squirrel, and muskrat, who were believed to be the creator gods, he was punished. He also taught the Sioux to fight.',
		origin: 'North American'
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
			Elec: 'Weak',
			Force: 'Resist',
			Light: 'Null',
			Charm: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A goddess from Norse mythology. She is the keeper of the golden apples and wife to Bragi the god of poetry.\nGods in Norse mythology are said to retain their youth via her apples, which are safely kept in a box made from ash wood.',
		origin: 'Norse'
	},
	{
		name: 'Illuyanka',
		affinities: {
			skillPotential: {
				Phys: 1,
				Gun: 0,
				Fire: 0,
				Ice: 3,
				Elec: 0,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -4,
				Support: 0
			},
			inherit: null
		},
		arcana: 'World',
		race: 'Dragon',
		level: 47,
		hp: 592,
		mp: 179,
		stats: {
			st: 60,
			dx: 53,
			ma: 64,
			ag: 40,
			lu: 64
		},
		learnset: [
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Megaton Press',
				level: 0
			},
			{
				name: 'Mazanma',
				level: 48
			},
			{
				name: 'Dragon Eye',
				level: 49
			}
		],
		resistances: {
			Ice: 'Resist',
			Force: 'Resist',
			Bind: 'Weak',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'An dragon god that appeared in ancient Hittite legend. A violent god, he rules the sea. In many cultures around the ancient Orient, the rough waters and the river floods were often likened to dragons. There are many legends about him, including a time when he fought the main god, the god of storms, in which he showed power greater than his opponent.',
		origin: 'Mesopotamian'
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
			Phys: 'Weak',
			Fire: 'Null',
			Ice: 'Null',
			Elec: 'Null',
			Force: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The Sumerian goddess of fertility.\nHer name means "Lady of Heaven," and she is often viewed as one and the same with Aphrodite, Ishtar, and Venus. She is also a goddess of warfare, and it is said that even male gods feared her great power.',
		origin: 'Mesopotamian'
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
			Elec: 'Weak',
			Force: 'Resist',
			Sleep: 'Resist',
			Charm: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A male demon of popular European folklore during medieval ages and the counterpart to the Succubus.\nThey are known to visit women in their sleep and have sex with them. The offspring born from these incidents are said to later become witches and wizards.',
		origin: 'European'
	},
	{
		name: 'Inferno',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 4,
				Ice: -8,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Spirit',
		level: 31,
		hp: 324,
		mp: 188,
		stats: {
			st: 24,
			dx: 28,
			ma: 46,
			ag: 34,
			lu: 39
		},
		learnset: [
			{
				name: 'Fire Breath',
				level: 0
			},
			{
				name: 'Heat Wave',
				level: 0
			},
			{
				name: 'Agilao',
				level: 32
			},
			{
				name: 'Maragion',
				level: 34
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak',
			Light: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A ghost who sends its hatred from the flames. Its name comes from the Italian word for Hell.\nmIt was given its name because the burning figure reminded people of the flames of Hell. There were those who stepped into the flames willingly... what kind of grudge did they have?',
		origin: 'ATLUS Original'
	},
	{
		name: 'Inti',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 2,
				Ice: 2,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 34,
		hp: 261,
		mp: 231,
		stats: {
			st: 26,
			dx: 33,
			ma: 55,
			ag: 44,
			lu: 51
		},
		learnset: [
			{
				name: 'Maragion',
				level: 0
			},
			{
				name: 'Fire Pleroma',
				level: 0
			},
			{
				name: 'Mabufula',
				level: 35
			},
			{
				name: 'Ice Pleroma',
				level: 36
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Weak',
			Force: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The Inca god of the sun, revered as a creation god.\nHe and his wife, the moon goddess Mama Quilla, were worshipped as great gods and loved by the Incas. The Inca king Manco Capac was said to be Inti\'s son, and was also worshipped as a sun god.',
		origin: 'Incan'
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
			Fire: 'Null',
			Ice: 'Weak',
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Spirits of dogs said to possess humans in Japanese folklore.\nThose possessed enter a state of "inu-tsuki" and go crazy. Onmyoji, or Japanese sorcerers, summon them to do their will.',
		origin: 'Japanese'
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
			Elec: 'Weak',
			Wind: 'Resist'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman',
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
			Fire: 'Resist',
			Light: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A monster with one eye and one leg, said to live deep in the mountains of Kumano, Japan.\nA single footprint measuring 30 cm has been sighted in the snowy mountains.',
		origin: 'Japanese'
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
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Weak',
			Charm: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A Mesopotamian goddess of love and war. Dubbed the "Queen of Heaven," the planet Venus was often seen as the embodiment of the goddess herself.\nIn the Epic of Gilgamesh, she makes many heroes her lovers, but the story also foretells that she will eventually kill them or turn them into animals.',
		origin: 'Mesopotamian'
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
			Fire: 'Resist',
			Elec: 'Null',
			Dark: 'Weak',
			Seal: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The mother goddess of Egypt. She is wife and sister to Osiris, god of the underworld.\nKnown for her powerful magic, she could perform miracles such as raising her husband from the dead. As the patron goddess of the dead, her image can be found at many burial sites.',
		origin: 'Egyptian'
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
			Elec: 'Weak',
			Wind: 'Null'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Egyptian',
		user: 'Yukari Takeba',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Isora',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Yoma',
		level: 14,
		hp: 132,
		mp: 66,
		stats: {
			st: 9,
			ma: 8,
			vi: 8,
			ag: 6,
			lu: 3
		},
		learnset: [
			{
				name: 'Analyze',
				level: 0
			},
			{
				name: 'Venom Bite',
				level: 0
			},
			{
				name: 'Kidnap',
				level: 15
			},
			{
				name: 'Lullaby',
				level: 16
			},
			{
				name: 'Ice Breath',
				level: 17
			},
			{
				name: 'Media',
				level: 18
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist'
		},
		game: 'smt3',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A Japanese god of the seashore. He can control water.',
		origin: 'Japanese'
	},
	{
		name: 'Israfel',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -5,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: 0,
				Almighty: 2,
				Recovery: 0,
				Ailment: 3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Herald',
		level: 68,
		hp: 532,
		mp: 356,
		stats: {
			st: 46,
			dx: 60,
			ma: 108,
			ag: 83,
			lu: 85
		},
		learnset: [
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Panic Voice',
				level: 0
			},
			{
				name: 'Mahamaon',
				level: 69
			},
			{
				name: 'Judgement',
				level: 70
			},
			{
				name: 'Ally Retaliate',
				level: 71
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Light: 'Drain',
			Dark: 'Weak',
			Confusion: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The Islamic angel of music. It is said that he will sound the trumpet during the Last Judgement.\nHe has four wings and is said to tower into the heavens Thrice daily and nightly, he sheds enormous tears while watching humans tormented in Hell.',
		origin: 'Abrahamic'
	},
	{
		name: 'Itsumade',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 2,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Raptor',
		level: 19,
		hp: 187,
		mp: 101,
		stats: {
			st: 23,
			dx: 23,
			ma: 20,
			ag: 32,
			lu: 29
		},
		learnset: [
			{
				name: 'Makakaja',
				level: 0
			},
			{
				name: 'Mazan',
				level: 0
			},
			{
				name: 'Mudo',
				level: 20
			},
			{
				name: 'Rakunda',
				level: 21
			}
		],
		resistances: {
			Gun: 'Weak',
			Ice: 'Weak',
			Force: 'Resist',
			Light: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'The transformed figure of a human killed by plague and famine.\nIn old Japan, many fatalities were due to sickness and starvation. Normally, bodies were to be buried, but in some cases they were left alone. It is these types of corpses that gave rise to Itsumade. They cry "Itsumade?" ("How long?"), asking for a proper burial.',
		origin: 'Japanese'
	},
	{
		name: 'Ixtab',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 2,
				Almighty: 0,
				Recovery: 1,
				Ailment: 4,
				Support: -2
			},
			inherit: null
		},
		arcana: 'Death',
		race: 'Reaper',
		level: 76,
		hp: 545,
		mp: 320,
		stats: {
			st: 72,
			dx: 80,
			ma: 90,
			ag: 78,
			lu: 82
		},
		learnset: [
			{
				name: 'Lullaby',
				level: 0
			},
			{
				name: 'Eternal Rest',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 77
			},
			{
				name: 'Null Force',
				level: 78
			}
		],
		resistances: {
			Light: 'Weak',
			Dark: 'Repel',
			Bind: 'Weak',
			Daze: 'Weak',
			Sleep: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'The Mayan goddess of suicide. Portrayed as a woman hanging by the neck from a rope, her figure is that of a hanged corpse.\nDespite being a death goddess, she was worshipped by many. This is because she was the guide for souls who died by suicide, sacrifice, war, and childbirth. She also guided deceased members of the priesthood. She took them to rest under the shade of Yaxche, where they could enjoy a life of luxury.',
		origin: 'Mayan'
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
			Elec: 'Resist',
			Wind: 'Weak',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. One of the ancient gods who existed before Japan was formed. He created the Oyashima from chaos, then gave birth to countless children and laid the foundation of soil and nature.',
		origin: 'Japanese',
		user: 'P4 Protagonist',
		stage: 1,
		evoSkillName: null
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
			Elec: 'Null',
			Wind: 'Weak',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. One of the ancient gods who existed before Japan was formed. He created the Oyashima from chaos, then gave birth to countless children.',
		origin: 'Japanese'
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
			Phys: 'Resist',
			Gun: 'Resist',
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Wind: 'Resist',
			Psy: 'Resist',
			Nuke: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. A Japanese god of creation, he begat the sky, ocean, and night, and 8 million other gods. Opposes his once-wife, the goddess Izanami, after an encounter in Yomotsu Hirasaka.',
		origin: 'Japanese',
		user: 'P4 Protagonist',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Izanagi-no-Okami Pic.',
		aliases: [
			'Izanagi-no-Okami Picaro'
		],
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
			Phys: 'Resist',
			Gun: 'Resist',
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Wind: 'Resist',
			Psy: 'Resist',
			Nuke: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. A Japanese god of creation, he begat the sky, ocean, and night, and 8 million other gods. Opposes his once-wife, the goddess Izanami.',
		origin: 'Japanese'
	},
	{
		name: 'Izanami',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -6,
				Ice: 3,
				Elec: 6,
				Force: 0,
				Light: 0,
				Dark: 5,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Priestess',
		race: 'Megami',
		level: 82,
		hp: 448,
		mp: 463,
		stats: {
			st: 50,
			dx: 60,
			ma: 140,
			ag: 80,
			lu: 100
		},
		learnset: [
			{
				name: 'Thunder Gods',
				level: 0
			},
			{
				name: 'Dark Grudge',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 0
			},
			{
				name: 'Spring of Life',
				level: 83
			},
			{
				name: 'Repel Ice',
				level: 85
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Light: 'Resist',
			Dark: 'Drain',
			Charm: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A Mother Earth goddess of Japanese lore, she gave birth to the islands with her consort Izanagi.\nShe also gave birth to many gods, but she died of burns when bearing the fire god Hi-no-Kagutsuchi. Izanagi traveled to Yomi no Kuni (the land of the dead) to bring her back to the land of the living, but because she ate the food of Yomi, she was no longer able to return. When Izanagi lit a torch and saw her rotting body covered in maggots, he ran in fear, and after that Izanami became the goddess of the dead, Yomotsu-Okami.',
		origin: 'Japanese'
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
			Fire: 'Weak',
			Ice: 'Drain',
			Charm: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A frost spirit made from ice and snow that appears during the winter and melts away in the spring.\nDo not be fooled by his cute demeanor, however, for Jack Frost is known to freeze people with his cold breath, smiling all the while. Some suggest that he originally looked like an abominable snowman, but may have changed form to appear more approachable and thus more easily lure in his victims.',
		origin: 'European'
	},
	{
		name: 'Jack the Ripper',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 1,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: -1
			},
			inherit: null
		},
		arcana: null,
		race: 'Foul',
		level: 7,
		hp: 107,
		mp: 59,
		stats: {
			st: 12,
			dx: 12,
			ma: 11,
			ag: 16,
			lu: 15
		},
		learnset: [
			{
				name: 'Tetanus Cut',
				level: 0
			},
			{
				name: 'Mudo',
				level: 9
			},
			{
				name: 'Light Life Aid',
				level: 10
			}
		],
		resistances: {
			Fire: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Sick: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A serial killer who terrorized London in the 19th century.\nHe killed prostitute after prostitute in the slums of London, then mutilated their bodies. The media was quick to cover the murders, and the case was the talk of the town. Scotland Yard came up with a few suspects after a thorough investigation, but the case went unsolved. This unusual case still piques the imagination today, with aspiring detectives coming up with their own theories. Whether or not this Jack is the culprit still remains a mystery. Perhaps the image of the murderer conjured up this demon.',
		origin: 'European'
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
				name: 'Jack Agilao',
				level: 0
			},
			{
				name: 'Maragi',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 21
			},
			{
				name: 'Life Spring',
				level: 23
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak',
			Confusion: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'An Irish spirit typically found in swamps, bogs, or marshes.\nSaid to be spirits of the dead, Jack-o\'-Lanterns appear as floating flames and are known around the world by various names such as Will-o\'-the-Wisp and Hitodama. They are also said to come out at night to startle travelers and make them lose their way.',
		origin: 'Celtic'
	},
	{
		name: 'Jarilo',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Genma',
		level: 61,
		hp: 559,
		mp: 201,
		stats: {
			st: 78,
			dx: 93,
			ma: 48,
			ag: 71,
			lu: 61
		},
		learnset: [
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Grand Tack',
				level: 0
			},
			{
				name: 'Trafuri',
				level: 62
			},
			{
				name: 'Heaven\'s Bow',
				level: 63
			}
		],
		resistances: {
			Gun: 'Null',
			Elec: 'Weak',
			Charm: 'Null',
			Poison: 'Weak'
		},
		game: 'smt4',
		alignment: null,
		lore: 'The Slavic god of vegetation and fertility.\nHe is a beautiful young man wearing a white cape who rides a white horse. He has a human head in one hand and ears of wheat in the other. Festivals in his honor were held each year in many Slavic regions, but the practice faded with the advent of Christianity.',
		origin: 'Slavic'
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
			Elec: 'Weak',
			Force: 'Drain',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The Hindu king of birds.\nIn the Ramayana, he fought bravely against Ravana in an attempt to save Sita, the wife of Rama, the seventh avatar of Vishnu. However, he was unfortunately defeated.',
		origin: 'Hindu'
	},
	{
		name: 'Jeanne D\'Arc',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: -2,
				Almighty: 2,
				Recovery: 4,
				Ailment: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: 'Justice',
		race: 'Famed',
		level: 42,
		hp: 361,
		mp: 282,
		stats: {
			st: 50,
			dx: 39,
			ma: 66,
			ag: 54,
			lu: 53
		},
		learnset: [
			{
				name: 'High Heal Pleroma',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Silent Prayer',
				level: 0
			},
			{
				name: 'Holy Wrath',
				level: 44
			},
			{
				name: 'Samarecarm',
				level: 45
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A French heroine who appeared towards the end of the Hundred Years War.\nShe is nicknamed "the Maid of Orleans." Upon receiving a vision from God at the age of 16, she took a stand to save France. After meeting with King Charles VII, she drove the English out of Orleans. She was later captured at Compienge and burned at the stake by the Rouen diocese, occupied at the time by the English. Her conviction was posthumously overturned and she was later canonized.',
		origin: 'European'
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
			Fire: 'Weak',
			Ice: 'Null',
			Light: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'Jikokuten, protector of the East, is one of the Four Heavenly Kings in Buddhist mythology.\nHe is also known as Dhritarashtra, and similarly to his fellow kings, is often depicted as a fierce warrior, clad in armor and wielding a sword. As his name suggests, it is said that he bestows serenity upon a country.',
		origin: 'Buddhist'
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
			Fire: 'Drain',
			Elec: 'Weak'
		},
		game: 'p4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A spirit of wind and fire appearing in Arabian lore. It can transform at will and grant wishes to those who release it from its bottle or jar.',
		origin: 'Arabian'
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
			Elec: 'Weak',
			Wind: 'Resist'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
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
			Psy: 'Weak',
			Nuke: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'The mysterious female pope of the Middle Ages. She posed as a man and eventually made it all the way up to pope due to her unrivaled intellect. Her existence shook the history of the Catholic church.',
		origin: 'European',
		user: 'Makoto Niijima',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Jueyuan',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: 1,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 1,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Wilder',
		level: 26,
		hp: 245,
		mp: 113,
		stats: {
			st: 34,
			dx: 34,
			ma: 29,
			ag: 34,
			lu: 29
		},
		learnset: [
			{
				name: 'Poison Claw',
				level: 0
			},
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 27
			}
		],
		resistances: {
			Fire: 'Resist',
			Force: 'Weak',
			Poison: 'Null',
			Sick: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A male monkey creature in Chinese lore.\nThey kidnap human women to leave offspring. When a woman gives birth to a child, both of them are returned to their home, but if she does not conceive, she is killed. The child born is a perfectly normal human.',
		origin: 'Chinese'
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
		resistances: {},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman',
		user: 'Fuuka Yamagishi',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Kabuso',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 1,
				Support: -1
			},
			inherit: null
		},
		arcana: null,
		race: 'Beast',
		level: 6,
		hp: 84,
		mp: 73,
		stats: {
			st: 9,
			dx: 11,
			ma: 16,
			ag: 12,
			lu: 13
		},
		learnset: [
			{
				name: 'Bouncing Claw',
				level: 0
			},
			{
				name: 'Poison Claw',
				level: 7
			},
			{
				name: 'Dia',
				level: 8
			}
		],
		resistances: {
			Ice: 'Resist',
			Elec: 'Weak',
			Confusion: 'Resist'
		},
		game: 'smt4',
		alignment: null,
		lore: 'A demon of Ishikawa prefecture that takes the form of a kitten and is said to often bewitch people.\nBecause it has a wide-ended tail and lives in aquatic regions, it is thought to be a type of Kappa. It loves to fool people with illusions that cause them to wrestle with boulders and tree roots, or it may transform into a beautiful woman to seduce them. When a Kabuso tries to pull a prank, it will follow its victim while talking incessantly. Beware, should this happen to you.',
		origin: 'Japanese'
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
			Fire: 'Weak',
			Wind: 'Resist',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. A divine being born from a glowing bamboo shoot. Though many proposed to her, none could complete her strict tasks. She eventually returned to her home, the moon.',
		origin: 'Japanese',
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
			Fire: 'Weak',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. She appeared from a glowing bamboo shoot. She received many proposals, but rejected them and returned to the moon.',
		origin: 'Japanese'
	},
	{
		name: 'Kaiming Shou',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Avatar',
		level: 40,
		hp: 462,
		mp: 176,
		stats: {
			st: 66,
			dx: 38,
			ma: 27,
			ag: 52,
			lu: 59
		},
		learnset: [
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Mortal Jihad',
				level: 0
			},
			{
				name: 'Magaon',
				level: 41
			},
			{
				name: 'Resist Phys',
				level: 42
			}
		],
		resistances: {
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The beast that guards Mt. Kunlun, which leads to the heavens.\nIt has nine faces and a tiger-like body. It is often depicted standing majestically in front of the stone gate. It is said to be intelligent, but there are no recorded stories attesting to that.',
		origin: 'Chinese'
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
			Light: 'Weak',
			Dark: 'Null',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A god in Assyrian legend, his name is interchangeable with Sakkut, another incarnation of the star-god, Saturn.',
		origin: 'Mesopotamian'
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
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Hindu',
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
		level: 74,
		hp: 465,
		mp: 279,
		stats: {
			st: 73,
			vi: 61,
			ma: 34,
			ag: 48,
			lu: 33
		},
		learnset: [
			{
				name: 'Hell Thrust',
				level: 0
			},
			{
				name: 'Figment Slash',
				level: 0
			},
			{
				name: 'Black Dracostrike',
				level: 0
			},
			{
				name: 'Maragibarion',
				level: 75
			},
			{
				name: 'Murderous Glee',
				level: 76
			},
			{
				name: 'Catastrophe',
				level: 77
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak',
			Force: 'Weak',
			Light: 'Resist',
			Dark: 'Repel'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'The Black One, a symbol of death and destruction.\nShe is said to be another face of Parvati, Shiva\'s consort. Wearing a necklace of human heads, she wields numerous bloody swords, one for each of her many arms. It is said that when Durga, another form of Parvati, was fighting the Asuras, she summoned Kali and defeated the Asura army in an instant.',
		origin: 'Hindu'
	},
	{
		name: 'Kama',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 4,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Enigma',
		level: 72,
		hp: 539,
		mp: 284,
		stats: {
			st: 71,
			dx: 71,
			ma: 60,
			ag: 101,
			lu: 90
		},
		learnset: [
			{
				name: 'Heaven\'s Bow',
				level: 0
			},
			{
				name: 'Madness Needle',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 73
			},
			{
				name: 'Dekaja',
				level: 74
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Drain',
			Fire: 'Weak',
			Light: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The Hindu god of sexual desire. He looks like a young, handsome man on a parrot. He uses honeybees as his string and shoots arrows tipped with flowers. By the gods\' request, he shot Shiva, but Shiva was angered and burned him with his third eye.',
		origin: 'Hindu'
	},
	{
		name: 'Kamapua\'a',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Avatar',
		level: 23,
		hp: 299,
		mp: 103,
		stats: {
			st: 46,
			dx: 26,
			ma: 17,
			ag: 29,
			lu: 28
		},
		learnset: [
			{
				name: 'Oni-Kagura',
				level: 0
			},
			{
				name: 'Media',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 24
			},
			{
				name: 'Tarunda',
				level: 25
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Weak',
			Fire: 'Resist',
			Ice: 'Weak',
			Elec: 'Resist',
			Force: 'Weak',
			Poison: 'Null',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A demigod of Hawaiian lore who resembled a pig. He can also turn into a caped human.\nHe was a brutal god, plundering his enemies\' harvests and stealing precious goods. He was also amorous and often flirted with the goddesses. When he made advances on the fire goddess Pele, She called him a "son of a pig," which began a long battle between the two.',
		origin: 'Hawaiian'
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
			Fire: 'Weak',
			Ice: 'Null',
			Wind: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Japanese god found in the Izumo Fudoki. He was one of the three gods born from Izanagi. He was a violent ruffian, but also has a sensitive side, showing love for his mother and reading poems.',
		origin: 'Japanese',
		user: 'Yusuke Kitagawa',
		stage: 2,
		evoSkillName: 'Evade Fire'
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
			Ice: 'Null',
			Elec: 'Weak',
			Wind: 'Resist',
			Dark: 'Resist'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
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
			Ice: 'Drain',
			Wind: 'Null',
			Dark: 'Null'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
		user: 'Teddie',
		stage: 3,
		evoSkillName: 'Kamui Miracle'
	},
	{
		name: 'Kanbari',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: -3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Enigma',
		level: 27,
		hp: 278,
		mp: 105,
		stats: {
			st: 29,
			dx: 50,
			ma: 24,
			ag: 35,
			lu: 35
		},
		learnset: [
			{
				name: 'Pandemic Bomb',
				level: 0
			},
			{
				name: 'Megaton Press',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 28
			},
			{
				name: 'Chakra Walk',
				level: 29
			}
		],
		resistances: {
			Phys: 'Weak',
			Gun: 'Resist',
			Light: 'Resist',
			Dark: 'Weak',
			Bind: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The Japanese god of the toilet, his full name is Kanbari Nyudo. He keeps the toilets worry-free, and if you recite the words "Kanbari Nyudo hototogisu" in the toilet on New Year\'s Eve, you won\'t have to worry about seeing monsters in the toilet for the next year. Old toilets were not only simple, but also constructed dangerously, so Kanbari is thought to have his origins in fears of the toilets.',
		origin: 'Japanese'
	},
	{
		name: 'Kangiten',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 4,
				Fire: 1,
				Ice: -1,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Enigma',
		level: 80,
		hp: 499,
		mp: 411,
		stats: {
			st: 53,
			dx: 70,
			ma: 120,
			ag: 78,
			lu: 95
		},
		learnset: [
			{
				name: 'Invitation',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 0
			},
			{
				name: 'Riot Gun',
				level: 81
			},
			{
				name: 'Null Ice',
				level: 82
			}
		],
		resistances: {
			Light: 'Resist',
			Dark: 'Resist',
			Confusion: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'Ganesha\'s form in his Buddhist aspect.\nThey abolish evil, bring harmony to couples and cause conceivements. They are commonly depicted as a male and female with elephant heads embracing each other. It was formerly a violent god whose worship required strict conduct.',
		origin: 'Buddhist'
	},
	{
		name: 'Kanseiteikun',
		aliases: [
			'Guan Yu'
		],
		affinities: {
			skillPotential: {
				Phys: 4,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Famed',
		level: 67,
		hp: 669,
		mp: 241,
		stats: {
			st: 107,
			dx: 67,
			ma: 59,
			ag: 81,
			lu: 84
		},
		learnset: [
			{
				name: 'Berserker God',
				level: 0
			},
			{
				name: 'Estoma',
				level: 0
			},
			{
				name: 'Critical Aura',
				level: 0
			},
			{
				name: 'Ally Retaliate',
				level: 68
			},
			{
				name: 'Phys Pleroma',
				level: 69
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'Originally Guan Yu of the Three Kingdoms period, he was deified and worshipped as a war god.\nGuan Yu fought alongside his blood brothers Liu Bei and Zhang Fei, helping construct the state of Shu until he died as a result of a ploy by the two rival states, Wu and Wei. Several hundred years after his death, he appeared to Master Zhiyi at Yuquan Hill, from whom he learned to be a guardian and fend off evil spirits.',
		origin: 'Chinese'
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
		resistances: {},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Buddhist',
		user: 'Rise Kujikawa',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Karasu Tengu',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: -4,
				Force: 3,
				Light: 1,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Brute',
		level: 35,
		hp: 169,
		mp: 166,
		stats: {
			st: 26,
			vi: 22,
			ma: 27,
			ag: 30,
			lu: 23
		},
		learnset: [
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Masukunda',
				level: 0
			},
			{
				name: 'Puncture Punch',
				level: 36
			},
			{
				name: 'Mazanma',
				level: 37
			},
			{
				name: 'Light Mana Aid',
				level: 38
			}
		],
		resistances: {
			Elec: 'Weak',
			Force: 'Resist',
			Light: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A member of the tengu race.\nThey do not have the long nose that usually represents the tengu, but, as the name "karasu" (crow) suggests, they are said to have a sharp beak similar to that of a crow. They harbor an evil nature, seeking to corrupt people by haunting them.',
		origin: 'Japanese'
	},
	{
		name: 'Kartikeya',
		affinities: {
			skillPotential: {
				Phys: -2,
				Gun: 4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -3,
				Ailment: 0,
				Support: 0
			},
			inherit: 'Elec'
		},
		arcana: 'Star',
		race: 'Fury',
		level: 78,
		hp: 629,
		mp: 325,
		stats: {
			st: 66,
			dx: 81,
			ma: 54,
			ag: 109,
			lu: 97
		},
		learnset: [
			{
				name: 'Heaven\'s Bow',
				level: 0
			},
			{
				name: 'Debilitate',
				level: 0
			},
			{
				name: 'Charge',
				level: 79
			},
			{
				name: 'High Gun Pleroma',
				level: 81
			}
		],
		resistances: {
			Gun: 'Null',
			Light: 'Resist',
			Dark: 'Resist',
			Confusion: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A Hindu god of war, also known as Skanda and Murugan. He rides upon a peacock called Paravani, with a bow and arrow drawn. He commands the army of the gods, and defeated the forces of Asura.',
		origin: 'Hindu'
	},
	{
		name: 'Kaso',
		aliases: [
			'Lava Rat'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 2,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Beast',
		level: 10,
		hp: 107,
		mp: 92,
		stats: {
			st: 11,
			dx: 14,
			ma: 19,
			ag: 22,
			lu: 13
		},
		learnset: [
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 12
			},
			{
				name: 'Beast Eye',
				level: 13
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A rat said to live in fire in ancient Chinese myths. The fur of these creatures is said to never burn in fire. In the Japanese story "Taketori Monogatari," Princess Kaguya asks one of her suitors to obtain a robe made from the fur.',
		origin: 'Chinese'
	},
	{
		name: 'Katakirauwa',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -2,
				Ice: -2,
				Elec: -2,
				Force: -2,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Food',
		level: 1,
		hp: 70,
		mp: 34,
		stats: {
			st: 7,
			dx: 6,
			ma: 6,
			ag: 9,
			lu: 7
		},
		learnset: [
			{
				name: 'Bouncing Claw',
				level: 0
			},
			{
				name: 'Lunge',
				level: 2
			},
			{
				name: 'Counter',
				level: 3
			}
		],
		resistances: {
			Phys: 'Weak',
			Fire: 'Weak',
			Ice: 'Weak',
			Elec: 'Weak',
			Force: 'Weak',
			Light: 'Weak',
			Sick: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A creature of Amami Oshima lore that appears as a one-eared pig with no shadow.\nThey are said to appear alone or in groups in front of people walking at night, and if it runs between a person\'s legs, that person will die. If you run into one, cross your legs to keep it from passing through.',
		origin: 'Japanese'
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
			Fire: 'Weak',
			Ice: 'Resist',
			Poison: 'Weak',
			Sleep: 'Resist',
			Charm: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A goddess of grasses in Japanese mythology.\nThe name "Kaya" refers to the grass that was used to build traditional grass-roof houses, highlighting its importance to the people of ancient Japan.',
		origin: 'Japanese'
	},
	{
		name: 'Kazfiel',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: -5,
				Ice: 2,
				Elec: -5,
				Force: 5,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Herald',
		level: 82,
		hp: 586,
		mp: 268,
		stats: {
			st: 105,
			dx: 65,
			ma: 87,
			ag: 114,
			lu: 96
		},
		learnset: [
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Will of Wind',
				level: 83
			},
			{
				name: 'Deadly Wind',
				level: 84
			},
			{
				name: 'Null Elec',
				level: 85
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Elec: 'Weak',
			Force: 'Null',
			Light: 'Repel'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The sinful "angel of the oath." His original name was Biqa, meaning "good person."\nHe attempted to coerce Michael into telling him the sacred name of God, but was denied. After the Fall, he was given the name Kazbiel, "he who lies to God."',
		origin: 'Abrahamic'
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
			Ice: 'Resist',
			Force: 'Weak',
			Mirage: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A fairy of Celtic folklore that lives by the water and takes the appearance of a horse.\nThey often drown those who attempt to ride them, but, if tames, they can be valuable mounts.',
		origin: 'Celtic'
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
			Fire: 'Resist',
			Ice: 'Weak',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The Egyptian god of the moon.\nOften portrayed as a mummy with two long braids of hair, he is said to be a reincarnation of the moon itself and holds possession over what\'s known as the moon ship. He also acts as a companion to the Pharaoh\'s shadow. Hieroglyphics found in Unas\' pyramid depict him as a god who prepares meals for an oppressive, god-devouring king.',
		origin: 'Egyptian'
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
				Light: 5,
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
				name: 'Heliopolis Dawn',
				level: 0
			},
			{
				name: 'Trisagion',
				level: 0
			},
			{
				name: 'Mahamabarion',
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
			Fire: 'Null',
			Ice: 'Weak',
			Elec: 'Resist',
			Force: 'Resist',
			Light: 'Drain',
			Seal: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The form of the Egyptian god of the Moon, Khonsu, upon gaining the power of the sun god, Ra.\nHidden behind a foreboding mask, he possesses the dual powers of the sun and moon, the day and night, and the living and the dead.',
		origin: 'Egyptian'
	},
	{
		name: 'Kikimora',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Night',
		level: 28,
		hp: 208,
		mp: 173,
		stats: {
			st: 22,
			dx: 28,
			ma: 47,
			ag: 31,
			lu: 38
		},
		learnset: [
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Axel Claw',
				level: 0
			},
			{
				name: 'Diarama',
				level: 30
			},
			{
				name: 'Heal Pleroma',
				level: 31
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Sleep: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A female spirit that appears in Slavic lore. Her face and legs are said to be like that of a bird.\nShe appears in the dead of night to make babies cry and spin thread. It\'s said that those who see her or hear her spinning will meet with misfortune. In some cases, she helps with housework, but only if the wife is a hard worker. If she is lazy, the Kikimora will tickle the children in the night to make the shiftless mother suffer.',
		origin: 'Slavic'
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
			Elec: 'Weak',
			Force: 'Null',
			Light: 'Resist',
			Charm: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The goddess of Shirayama, also called Shirayama-Hime, and the deification of a maiden who relayed Izanami\'s words.\nShe once mediated between Izanagi and Izanami during their confrontation in Yomi, the land of the dead. Since she is the goddess of love and marriage, she was thought to have been named for "kukuri," meaning "to bring people together."',
		origin: 'Japanese'
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
			Elec: 'Null',
			Force: 'Weak',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, its body is so hard that no weapons can penetrate it.\nIt and its comrades fell into hell through holes that can still be found in Mie Prefecture, Japan (the modern-day Iga Province).',
		origin: 'Japanese'
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
			Fire: 'Weak',
			Ice: 'Drain',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'The king of snow who rules over an infinite number of Jack Frosts.\nHe has the power to freeze the entire world but is unaware of it due to his rather naïve personality.',
		origin: 'ATLUS Original'
	},
	{
		name: 'Kingu',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: -3,
				Ice: 0,
				Elec: 1,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 1,
				Support: -2
			},
			inherit: 'Recovery'
		},
		arcana: 'Aeon',
		race: 'Drake',
		level: 39,
		hp: 320,
		mp: 170,
		stats: {
			st: 41,
			dx: 41,
			ma: 35,
			ag: 58,
			lu: 52
		},
		learnset: [
			{
				name: 'Zanma',
				level: 0
			},
			{
				name: 'Shockbound',
				level: 0
			},
			{
				name: 'Recarmdra',
				level: 40
			},
			{
				name: 'Panic Voice',
				level: 41
			}
		],
		resistances: {
			Gun: 'Weak',
			Fire: 'Weak',
			Elec: 'Resist',
			Force: 'Null',
			Light: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'The son and second consort to the female dragon Tiamat. He was to be the leader of the gods, but was killed by Marduk. Mankind was created from his blood.',
		origin: 'Mesopotamian'
	},
	{
		name: 'Kinmamon',
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 4,
				Ailment: -5,
				Recovery: 4,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Enigma',
		level: 68,
		hp: 360,
		mp: 352,
		stats: {
			st: 27,
			vi: 46,
			ma: 67,
			ag: 43,
			lu: 53
		},
		learnset: [
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Diamrita',
				level: 0
			},
			{
				name: 'Bowl of Hygieia',
				level: 0
			},
			{
				name: 'Energy Drain',
				level: 69
			},
			{
				name: 'Abyssal Mask',
				level: 70
			},
			{
				name: 'Almighty Pleroma',
				level: 72
			}
		],
		resistances: {
			Fire: 'Null',
			Elec: 'Weak',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Null',
			Charm: 'Resist',
			Confusion: 'Resist',
			Sleep: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'Highest god of Ryukyu Shinto. He hails from the eternal kingdom Nirai Kanai, and protects the Ryukyu Islands.\nThere is a Yin and a Yang duality to this eity, with Kiraikanaino Kinmamon coming from the sky and Ohokakerakuno Kinmamon from the sea. He brings gifts of wisdom, and appears before people through women.',
		origin: 'Japanese'
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
			Ice: 'Resist',
			Elec: 'Weak'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
		user: 'Teddie',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Knocker',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 1,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Jirae',
		level: 17,
		hp: 182,
		mp: 85,
		stats: {
			st: 23,
			dx: 23,
			ma: 23,
			ag: 23,
			lu: 23
		},
		learnset: [
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Zanma',
				level: 0
			},
			{
				name: 'Magaon',
				level: 18
			}
		],
		resistances: {
			Elec: 'Weak',
			Force: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A sprite who lives in the mines of Cornwall. They would notify miners of a good ore-bearing seam by knocking. They are generally good sprites, but show their anger to those they dislike. They hate whistling, so miners never whistle inside mines.',
		origin: 'Celtic'
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
			Fire: 'Weak',
			Ice: 'Weak',
			Force: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'In Japanese mythology, they are the spirits of plants. They are born from trees that live 100 years.\nIt was once thought that the echoes heard in valleys were actually from Kodama replying.',
		origin: 'Japanese'
	},
	{
		name: 'Koga Saburo',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Dragon',
		level: 75,
		hp: 589,
		mp: 290,
		stats: {
			st: 81,
			dx: 74,
			ma: 74,
			ag: 97,
			lu: 81
		},
		learnset: [
			{
				name: 'Life Gain',
				level: 0
			},
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Berserker God',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 76
			},
			{
				name: 'High Force Pleroma',
				level: 77
			}
		],
		resistances: {
			Ice: 'Weak',
			Elec: 'Resist',
			Force: 'Repel',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: null,
		lore: null,
		origin: 'Japanese'
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
			Phys: 'Resist',
			Gun: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'Once called the world\'s largest diamond, it was cut when it came to the British royal family. It is said to bring bad luck to any man who wears it, so only the females have ever adorned it.',
		origin: 'European'
	},
	{
		name: 'Konohana Sakuya',
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 4,
				Ice: 0,
				Elec: -3,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 4,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Kunitsu',
		level: 50,
		hp: 253,
		mp: 303,
		stats: {
			st: 20,
			vi: 37,
			ma: 48,
			ag: 33,
			lu: 38
		},
		learnset: [
			{
				name: 'Sakuya Sakura',
				level: 0
			},
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Heal Pleroma',
				level: 0
			},
			{
				name: 'Bowl of Hygieia',
				level: 0
			},
			{
				name: 'Great Mana Spring',
				level: 51
			},
			{
				name: 'Zandyne',
				level: 52
			},
			{
				name: 'Maragidyne',
				level: 53
			}
		],
		resistances: {
			Fire: 'Repel',
			Elec: 'Weak',
			Force: 'Null',
			Charm: 'Resist',
			Seal: 'Resist',
			Confusion: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'One of the Kunitsukami in Japanese mythology. Daughter of Oyamatsumi.\nYounger sister of Iwanaga-hime. Her name means "a woman who blooms and flourishes like a cherry blossom." She is considered one of the most beautiful of Japan\'s myriad gods. She fell in love with Ninigi of the Amatsukami and became his wife. After she became pregnant in just one night, he questioned whether the child was truly his and therefore godly. As proof that the child was of the Amatsukami, she barricaded herself in a birthing-house and set it on fire, then successfully gave birth. Originally, she is said to have been a god who governed water. However, this legacy of giving birth in a fire earned her regard as the goddess of volcanoes, and she is identified with the volcano spirit Asama no Okami.',
		origin: 'Japanese'
	},
	{
		name: 'Konohana Sakuya - P4',
		aliases: [
			'Konohana Sakuya'
		],
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
			Fire: 'Resist',
			Ice: 'Weak'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
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
			Elec: 'Weak',
			Force: 'Resist',
			Sleep: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A smaller member of the Tengu race less powerful than other Tengu.\nThey are believed to be an incarnation of an old wolf and are capable of eventually transforming into Karasu Tengu.',
		origin: 'Japanese'
	},
	{
		name: 'Koropokkur',
		aliases: [
			'Koropokkuru',
			'Koropokguru'
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
			Ice: 'Null',
			Force: 'Weak',
			Light: 'Resist',
			Dark: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Small human-like creatures that have kind, calm personalities.\nOnce coexisting with the Ainu people of Japan, there was a falling out at some point, and they disappeared.',
		origin: 'Japanese'
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
			Elec: 'Weak',
			Force: 'Null',
			Light: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'Koumokuten, protector of the West, is one of the Four Heavenly Kings of Buddhist mythology.\nSimilarly to his fellow kings, he is often depicted as a fierce warrior, clad in armor and wielding a trident. He is also known as Virupaksha and is said to keep a close eye on the world with his sharp gaze, preaching to the people all the while.',
		origin: 'Buddhist'
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
		resistances: {},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Buddhist',
		user: 'Rise Kujikawa',
		stage: 3,
		evoSkillName: 'Complete Analysis'
	},
	{
		name: 'Kresnik',
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -4,
				Light: 3,
				Dark: -2,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Genma',
		level: 60,
		hp: 359,
		mp: 251,
		stats: {
			st: 56,
			vi: 45,
			ma: 28,
			ag: 41,
			lu: 29
		},
		learnset: [
			{
				name: 'White Dracostrike',
				level: 0
			},
			{
				name: 'Brave Blade',
				level: 0
			},
			{
				name: 'Phys Pleroma',
				level: 0
			},
			{
				name: 'Mist Rush',
				level: 61
			},
			{
				name: 'Retaliate',
				level: 62
			},
			{
				name: 'Mana Aid',
				level: 63
			}
		],
		resistances: {
			Phys: 'Resist',
			Force: 'Weak',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A virtuous vampire hunter blessed by the power of light. His name comes from the word "cross."\nArchnemesis of a Slovenian vampire, Kudlak, with whom he engages in endless conflict. Both of them fight by transforming into animals such as pigs, bulls, and horses, but Kresnik\'s bestial forms are always pure white in color. Kudlak, the enemy of God, is never considered to be a match for the emissary of light, and their battles always end with Kresnik\'s victory.',
		origin: 'Slavic'
	},
	{
		name: 'Krishna',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 5,
				Force: 5,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Recovery: 3,
				Ailment: 5,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 87,
		hp: 632,
		mp: 495,
		stats: {
			st: 88,
			dx: 89,
			ma: 133,
			ag: 113,
			lu: 123
		},
		learnset: [
			{
				name: 'Venomous Raga',
				level: 0
			},
			{
				name: 'Dream Raga',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'Deadly Wind',
				level: 88
			},
			{
				name: 'Combat Tara',
				level: 89
			},
			{
				name: 'Salvation',
				level: 90
			},
			{
				name: 'Drain Dark',
				level: 91
			}
		],
		resistances: {
			Light: 'Resist',
			Dark: 'Weak',
			Charm: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A divine hero of Hindu mythology. He is the eighth avatar of Vishnu, who is said to appear whenever the world is at risk. Name is sometimes translated as "all-attractive."\nRaised by cow herders. As a boy, he would play his flute, causing women to flock to him. As an adult, he became a great tactician. Shot in the back of the leg by mistake by a hunter named Jara.',
		origin: 'Hindu'
	},
	{
		name: 'Kuda',
		aliases: [
			'Kudagitsune'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -3,
				Fire: 0,
				Ice: 3,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Food',
		level: 27,
		hp: 240,
		mp: 128,
		stats: {
			st: 30,
			dx: 30,
			ma: 26,
			ag: 42,
			lu: 38
		},
		learnset: [
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Tetanus Cut',
				level: 0
			},
			{
				name: 'Blight',
				level: 28
			},
			{
				name: 'Mabufula',
				level: 30
			}
		],
		resistances: {
			Gun: 'Weak',
			Ice: 'Resist',
			Force: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A fox used by people known as "Kuda-users." They are beasts that possess humans.\nThose possessed do not eat much, but start eating raw miso. Kuda are passed from master to student.',
		origin: 'Japanese'
	},
	{
		name: 'Kudlak',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -4,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -2,
				Dark: 4,
				Almighty: 0,
				Ailment: 3,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Haunt',
		level: 60,
		hp: 333,
		mp: 295,
		stats: {
			st: 31,
			vi: 37,
			ma: 49,
			ag: 42,
			lu: 44
		},
		learnset: [
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Spirit Drain',
				level: 0
			},
			{
				name: 'Slumber Vortex',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 61
			},
			{
				name: 'Abyssal Mask',
				level: 62
			},
			{
				name: 'Enduring Soul',
				level: 63
			}
		],
		resistances: {
			Fire: 'Weak',
			Dark: 'Drain'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'An evil vampire who fights Kresnik, a proxy of God.\nIt is said that all bad things, including diseases, poor harvests, and bad luck, are all under Kudlak\'s purview. He transforms into various animal forms to fight with Kresnik, and his other forms are always colored black.',
		origin: 'Slavic'
	},
	{
		name: 'Kuebiko',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Jirae',
		level: 44,
		hp: 250,
		mp: 235,
		stats: {
			st: 43,
			dx: 48,
			ma: 62,
			ag: 41,
			lu: 58
		},
		learnset: [
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Light Life Aid',
				level: 0
			},
			{
				name: 'War Cry',
				level: 0
			},
			{
				name: 'Resist Fire',
				level: 45
			},
			{
				name: 'Berserker God',
				level: 46
			}
		],
		resistances: {
			Fire: 'Weak',
			Force: 'Drain',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: null,
		lore: null,
		origin: 'Japanese'
	},
	{
		name: 'Kukunochi',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 2,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Tree',
		level: 44,
		hp: 347,
		mp: 297,
		stats: {
			st: 35,
			dx: 42,
			ma: 69,
			ag: 51,
			lu: 68
		},
		learnset: [
			{
				name: 'Tetrakarn',
				level: 0
			},
			{
				name: 'Makakaja',
				level: 0
			},
			{
				name: 'Energy Drain',
				level: 45
			}
		],
		resistances: {
			Gun: 'Null',
			Fire: 'Weak',
			Light: 'Resist',
			Confusion: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The god of trees in Japanese lore. Also pronounced Kugunochi.\nAlong with Toyouke-Hime, Kukunochi was a guardian of houses and is honored in house-raising events.',
		origin: 'Japanese'
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
			Elec: 'Weak',
			Force: 'Null',
			Dark: 'Resist',
			Mirage: 'Weak',
			Poison: 'Resist',
			Confusion: 'Resist',
			Charm: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Demons of Buddhist origin, known for draining the life energy of humans.\nIt is said that they often change shape and take the form of a gourd. They stand three meters tall, with red hair and dark skin, and have the body of a human but the head of a white horse. They once served Rudra, but according to Buddhist scriptures, they now follow Zouchouten of the Four Heavenly Kings.',
		origin: 'Buddhist'
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
			Elec: 'Weak',
			Force: 'Null',
			Charm: 'Weak',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A tengu that is said to have lived in Mt. Kurama in Kyoto.\nThe most powerful and well-known of the tengu, he has the power to fend off disease and bring good fortune. He is also said to have trained Yoshitsune how to fight with a sword when Yoshitsune was still a child. Some believe him to be Bishamonten\'s night form.',
		origin: 'Japanese'
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
			Fire: 'Weak',
			Wind: 'Resist'
		},
		game: 'p5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'One of the four great aspects of Shinto thought, it uses its power to bring good omens.\nIt is said to aid in one\'s wisdom, observation, and skill, and can also mend fractured paths.',
		origin: 'Japanese'
	},
	{
		name: 'Kushinada-Hime',
		aliases: [
			'Kushinada'
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
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'Kushinada-Hime is a goddess in Japanese mythology.\nWhen she was human, she was saved from the eight-headed serpent Yamata-no-Orochi by the storm god Susano-o, whom she later wedded.',
		origin: 'Japanese'
	},
	{
		name: 'Kwancha',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 1,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 4,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Jirae',
		level: 22,
		hp: 174,
		mp: 145,
		stats: {
			st: 18,
			dx: 23,
			ma: 38,
			ag: 26,
			lu: 31
		},
		learnset: [
			{
				name: 'Poison Claw',
				level: 0
			},
			{
				name: 'Bind Voice',
				level: 0
			},
			{
				name: 'Pandemic Bomb',
				level: 23
			},
			{
				name: 'Mahama',
				level: 24
			}
		],
		resistances: {
			Force: 'Weak',
			Bind: 'Null',
			Poison: 'Resist',
			Sick: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A demon of disease that lives in the underworld in Nepali folklore.\nIt appears at a crossroads, but if you make an offering and chant a mantra, it will defend you from sickness. He is also Shiva and Kali\'s attendant. There is a Nepali festival where Kwancha appears among other gods.',
		origin: 'Nepali'
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
			Force: 'Weak',
			Sleep: 'Resist',
			Mirage: 'Resist',
			Poison: 'Resist',
			Confusion: 'Resist',
			Charm: 'Resist',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the three Moirae Sisters in Greek mythology.\nShe is the apportioner, measuring the thread which determines a person\'s life span.',
		origin: 'Greco-Roman'
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
			ma: 49,
			ag: 27,
			lu: 30
		},
		learnset: [
			{
				name: 'Silt of Ruin',
				level: 0
			},
			{
				name: 'Purple Smoke',
				level: 0
			},
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Mudoon',
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
			Fire: 'Weak',
			Ice: 'Resist',
			Force: 'Resist',
			Dark: 'Null',
			Confusion: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A god that appears in Babylonian mythology.\nBorn from Apsu and Tiamat, he and his sister, Lahamu, gave birth to Anshar and Kishar. Lahmu is at times depicted as a large serpent but has also been illustrated as a man wearing a red sash with six curls in his hair. Regardless, he is always shown alongside Lahamu, and it is thought that together they represent the silt in the sea where Apsu\'s fresh water and Tiamat\'s sea water mix.',
		origin: 'Mesopotamian'
	},
	{
		name: 'Lailah',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 0,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Herald',
		level: 54,
		hp: 353,
		mp: 342,
		stats: {
			st: 38,
			dx: 49,
			ma: 93,
			ag: 55,
			lu: 66
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
				name: 'Light Pleroma',
				level: 0
			},
			{
				name: 'Makakaja',
				level: 55
			},
			{
				name: 'Samarecarm',
				level: 56
			}
		],
		resistances: {
			Elec: 'Weak',
			Force: 'Resist',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'An angel in Judeo-Christian lore that presides over conception.\nShe is the intermediary between pregnant women and God. When a woman conceives a child, the seed is given to God, who then decides the child\'s sex, appearance, and destiny. After such things are decided, a new soul is placed into the woman\'s womb.',
		origin: 'Abrahamic'
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
			Elec: 'Weak',
			Force: 'Resist',
			Light: 'Null',
			Charm: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'Goddess of beauty and good fortune in Hindu lore.\nVishnu\'s wife and Kama\'s mother, she is regarded as the goddess of love and is said to embody the ideal woman. She is also known to have charmed many gods with her dance.',
		origin: 'Hindu'
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
			Ice: 'Weak',
			Elec: 'Null',
			Mirage: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Half-woman, half-snake creatures that appear in Greek mythology and are said to reside in Libya.\nThey supposedly favor the blood of children and young men.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Lanling Wang',
		aliases: [
			'Raryou-oh'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 2,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Famed',
		level: 49,
		hp: 538,
		mp: 198,
		stats: {
			st: 79,
			dx: 50,
			ma: 35,
			ag: 61,
			lu: 58
		},
		learnset: [
			{
				name: 'Javelin Rain',
				level: 0
			},
			{
				name: 'Marin Karin',
				level: 0
			},
			{
				name: 'Ally Counter',
				level: 50
			},
			{
				name: 'Mortal Jihad',
				level: 52
			}
		],
		resistances: {
			Gun: 'Null',
			Elec: 'Resist',
			Poison: 'Weak'
		},
		game: 'smt4',
		alignment: null,
		lore: 'A general of the Northern Qi during the 600s. He wore an ugly mask in battle because he was too beautiful for the battlefield. He was said to lead a cavalry of 500 men. His deeds were reproduced in a Chinese opera, where he wears a terrifying dragon mask.',
		origin: 'Chinese'
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
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Null',
			Poison: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A beautiful faerie of Irish lore whose name means "faerie mistress."\nShe drains the life of her lovers in return for granting them artistic inspiration.',
		origin: 'Celtic'
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
			Elec: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A demon or horde of demons quoted as saying, "For we are many" in the New Testament.\nThe name comes from the Roman military term for an army unit of 3,000 to 6,000 men.',
		origin: 'Abrahamic'
	},
	{
		name: 'Lham Dearg',
		affinities: {
			skillPotential: {
				Phys: 4,
				Gun: -4,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Jaki',
		level: 22,
		hp: 261,
		mp: 80,
		stats: {
			st: 38,
			dx: 25,
			ma: 18,
			ag: 26,
			lu: 30
		},
		learnset: [
			{
				name: 'Power Punch',
				level: 0
			},
			{
				name: 'Critical Wave',
				level: 0
			},
			{
				name: 'Light Life Aid',
				level: 24
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Weak',
			Ice: 'Weak',
			Poison: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A famous Scottish ghost that appears around Glenmore.\nIt is also known as Ly Erg and appears with a bloody right hand. He challenges men to fights, and any who accept will die in a matter of days. It is thought that those who die in war while still thirsting for battle become Lham Deargs.',
		origin: 'Scottish'
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
			Ice: 'Weak',
			Elec: 'Null',
			Sleep: 'Resist',
			Charm: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A demon in female form from Judeo-Christian lore known to tempt sleeping men and attack infants.\nShe is the daughter of the demoness Lilith, who tempted Adam. Like her mother, she drains men of their essence.',
		origin: 'Abrahamic'
	},
	{
		name: 'Lilith',
		affinities: {
			skillPotential: {
				Phys: -2,
				Fire: 0,
				Ice: 0,
				Elec: 4,
				Force: 6,
				Light: -6,
				Dark: 0,
				Almighty: 1,
				Ailment: 0,
				Recovery: -3,
				Support: 3
			},
			inherit: 'Ice'
		},
		arcana: 'Moon',
		race: 'Qadištu',
		level: 72,
		hp: 442,
		mp: 355,
		stats: {
			st: 37,
			vi: 60,
			ma: 72,
			ag: 35,
			lu: 42
		},
		learnset: [
			{
				name: 'Mother Earth',
				level: 0
			},
			{
				name: 'Zanbarion',
				level: 0
			},
			{
				name: 'Maziodyne',
				level: 0
			},
			{
				name: 'Energy Drain',
				level: 0
			},
			{
				name: 'Luster Candy',
				level: 73
			},
			{
				name: 'High Force Pleroma',
				level: 75
			},
			{
				name: 'Mazanbarion',
				level: 76
			}
		],
		resistances: {
			Phys: 'Resist',
			Elec: 'Resist',
			Force: 'Drain',
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Said to have been Adam\'s first wife. Refusing to obey him, she left Eden and became a demon of the night.\nThough there are several theories regarding her disobedience, she is often regarded as a symbol of infidelity. Some theories suggest she was originally the mother goddess of Babylonia. In the Zohar, a Jewish spiritual text, she is listed as the first of four demons; seducer of men, killer of infants, and first consort of Samael.',
		origin: 'Abrahamic'
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
			Light: 'Weak',
			Dark: 'Null',
			Poison: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A group of divinities worshipped in voodoo religion.\nOf the many hidden entities mentioned in religious doctrines, the ones that influence human activities in the earthly realm are known by this name. It is said that those aligned with shadow also possess powerful dark magic.',
		origin: 'Haitian'
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
			Ice: 'Null',
			Force: 'Resist',
			Light: 'Weak',
			Dark: 'Resist',
			Poison: 'Weak',
			Charm: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A malevolent god of Norse mythology.\nThough not always driven by malice, he can be capricious and is quite cunning, and despite being a blood brother to Odin, he was punished for many of his wrong doings, including the murder of Odin\'s child, Baldur.',
		origin: 'Norse'
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
				name: 'Eigaon',
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
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: null,
		lore: 'A malignant god of Norse mythology. Not always driven by malice, but impulsive and devious. He had an uneasy peace with Odin and the gods, but his part in Baldr\'s death drove them to finally punish him.',
		origin: 'Norse',
		user: 'Goro Akechi',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Lord Nandou',
		aliases: [
			'Lord Nan Dou'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: 3,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 48,
		hp: 529,
		mp: 196,
		stats: {
			st: 75,
			dx: 47,
			ma: 49,
			ag: 54,
			lu: 60
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Fang Breaker',
				level: 0
			},
			{
				name: 'Berserker God',
				level: 49
			},
			{
				name: 'Samarecarm',
				level: 50
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak',
			Light: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The Taoist deification of the southern Dipper, part of the Sagittarius constellation.\nLike Beidou-Xingjun, he governs the life and death of men, but he has stronger associations with life and is worshipped as a kinder god.',
		origin: 'Chinese'
	},
	{
		name: 'Lorelei',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: -2,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 3,
				Ailment: 3,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Lovers',
		race: 'Fairy',
		level: 58,
		hp: 366,
		mp: 341,
		stats: {
			st: 40,
			dx: 52,
			ma: 94,
			ag: 53,
			lu: 71
		},
		learnset: [
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'Lullaby',
				level: 0
			},
			{
				name: 'Marin Karin',
				level: 59
			},
			{
				name: 'Makarakarn',
				level: 60
			}
		],
		resistances: {
			Elec: 'Weak',
			Force: 'Null',
			Charm: 'Resist',
			Sleep: 'Null'
		},
		game: 'smt4',
		alignment: null,
		lore: 'A beautiful river maiden who lives at the rock of the same name on the Rhine River. She lures sailors to their doom with her enchanting voice.\nShe was made famous in Heine\'s poem. In ancient times, she was seen as one and the same as the river goddess, but the menacing rock and heavy currents turned her into a witch.',
		origin: 'European'
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
			Fire: 'Resist',
			Ice: 'Weak',
			Elec: 'Null',
			Light: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A type of werewolf originating in France. It appears human during the day, but transforms into its beastly form at night, when it has been known to viciously attack humans.\nThey are said to have once been ordinary human beings. However, upon turning into a loup-garou, one cannot regain their humanity ever again.',
		origin: 'European'
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
		resistances: {},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Historical',
		user: 'Fuuka Yamagishi',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Lucifer',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 4,
				Ice: 4,
				Elec: 2,
				Force: 2,
				Light: -8,
				Dark: 3,
				Almighty: 7,
				Ailment: 0,
				Recovery: 1,
				Support: 0
			},
			inherit: 'Almighty'
		},
		arcana: 'Star',
		race: 'Devil',
		level: 99,
		hp: 650,
		mp: 650,
		stats: {
			st: 73,
			vi: 92,
			ma: 108,
			ag: 65,
			lu: 73
		},
		learnset: [
			{
				name: 'Root of Evil',
				level: 0
			},
			{
				name: 'Trisagion',
				level: 0
			},
			{
				name: 'Ice Age',
				level: 0
			},
			{
				name: 'Diarahan',
				level: 0
			}
		],
		resistances: {
			Ice: 'Repel',
			Elec: 'Repel',
			Light: 'Weak',
			Dark: 'Repel',
			Charm: 'Null',
			Confusion: 'Null',
			Sleep: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'The Lord of Chaos who leads the fallen angels and, according to Christian tradition, is equated with Satan.\nHis name holds the meaning of "one who brings light" indicating that he was once the most beautiful of the archangels. However, it is said that he rebelled against the almighty Creator and chose to become a fallen angel.',
		origin: 'Abrahamic'
	},
	{
		name: 'Lucifuge',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 3,
				Fire: 0,
				Ice: 0,
				Elec: -5,
				Force: 3,
				Light: 0,
				Dark: 4,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: 'Devil',
		race: 'Tyrant',
		level: 73,
		hp: 460,
		mp: 379,
		stats: {
			st: 49,
			dx: 64,
			ma: 110,
			ag: 72,
			lu: 87
		},
		learnset: [
			{
				name: 'Light Devourer',
				level: 0
			},
			{
				name: 'Luster Candy',
				level: 0
			},
			{
				name: 'Grand Tack',
				level: 74
			},
			{
				name: 'Mazandyne',
				level: 75
			},
			{
				name: 'High Dark Pleroma',
				level: 76
			}
		],
		resistances: {
			Gun: 'Repel',
			Elec: 'Weak',
			Force: 'Repel',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Lucifuge Rofocale, whose name means "he who flees the light", is the prime minister of Hell, watching over the government. He is Demon Lord Lucifer\'s counterpart.\nOn his head are three twisting horns, and he has a goat\'s body with a long tail. Lucifer ordered him to manage the world\'s fortune, and he has Bael, Agares, and Marbas at his command. He is also an officer of contracts, granting his conjurers\' wishes in exchange for their souls.',
		origin: 'Abrahamic'
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
			Ice: 'Resist',
			Psy: 'Null',
			Nuke: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'The Countess of Carlisle, and the historical basis for Alexandre Dumas\'s femme fatale, Milady de Winter. Known for her beauty and cunning, she was a courtier much favored by the Queen.',
		origin: 'Historical',
		user: 'Haru Okumura',
		stage: 3,
		evoSkillName: 'Life Wall'
	},
	{
		name: 'M. Izanagi Picaro',
		aliases: [
			'Magatsu-Izanagi Picaro'
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
			Gun: 'Resist',
			Nuke: 'Weak',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. He\'s Izanagi\'s rival. Magatsu means "calamity," so, unlike Izanagi who founded the land and brought order, he leads all back into chaos.',
		origin: 'ATLUS Original'
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
			Light: 'Weak',
			Dark: 'Null',
			Confusion: 'Resist',
			Poison: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'An evil spirit appearing in medieval oratorios as the grim reaper.\nIt is truly Death itself, with the power to lead humans to their demise in an instant. It is depicted as a skeleton with a black cloak and a sickle to reap human souls in a single stroke. True to its name, it dances the feared Dance of Death, a reminder that all worldly things must someday meet their end.',
		origin: 'European'
	},
	{
		name: 'Mad Gasser',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -2,
				Dark: 0,
				Almighty: 0,
				Ailment: 5,
				Recovery: -4,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Foul',
		level: 48,
		hp: 260,
		mp: 209,
		stats: {
			st: 38,
			vi: 33,
			ma: 25,
			ag: 28,
			lu: 41
		},
		learnset: [
			{
				name: 'Toxic Cloud',
				level: 0
			},
			{
				name: 'Blight',
				level: 0
			},
			{
				name: 'Poison Adept',
				level: 0
			},
			{
				name: 'Riberama',
				level: 49
			},
			{
				name: 'Great Curse Siphon',
				level: 50
			},
			{
				name: 'Phys Block',
				level: 51
			}
		],
		resistances: {
			Light: 'Weak',
			Dark: 'Null',
			Charm: 'Weak',
			Seal: 'Weak',
			Confusion: 'Weak',
			Poison: 'Null',
			Sleep: 'Null',
			Mirage: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A mysterious figure that spreads and unknown poisonous gas around.\nHe wears all black and is said to be a tall man. The gas he uses has a sweet smell, but inhaling it will cause intense headaches and vomiting. He returns when people begin to forget his existence, though he is rarely sighted.',
		origin: 'North American'
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
		level: 76,
		hp: 469,
		mp: 353,
		stats: {
			st: 64,
			vi: 61,
			ma: 69,
			ag: 41,
			lu: 38
		},
		learnset: [
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Trisagion',
				level: 0
			},
			{
				name: 'Mediarahan',
				level: 0
			},
			{
				name: 'Debilitate',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 77
			},
			{
				name: 'Ragnarok',
				level: 79
			},
			{
				name: 'Akashic Arts',
				level: 80
			}
		],
		resistances: {
			Fire: 'Drain',
			Ice: 'Weak',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A giant Asura in Hinduism whose name means "the intoxicator."\nIt is said that the sage Chyavana created it from fire. Mada has the power to swallow its enemies, and even the deity Indra has been said to surrender to its power.',
		origin: 'Hindu'
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
			Gun: 'Resist',
			Nuke: 'Weak',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. He\'s Izanagi\'s rival and looks just like him. Magatsu means "calamity." Unlike Izanagi, who founded the land and brought order, he leads all back into chaos.',
		origin: 'ATLUS Original',
		user: 'Tohru Adachi',
		stage: 2,
		evoSkillName: null
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
			Fire: 'Drain',
			Elec: 'Repel',
			Dark: 'Null'
		},
		game: 'p4',
		alignment: {
			major: 'Unknown',
			minor: 'Chaos'
		},
		lore: 'Indian god who repels evil, known as Daikokuten in Buddhism. Its swords are fearsome, but by paying tribute to him, believers may be blessed with tremendous wealth and happiness.',
		origin: 'Buddhist'
	},
	{
		name: 'Mahamayuri',
		affinities: {
			skillPotential: {
				Phys: -2,
				Gun: -3,
				Fire: 0,
				Ice: 0,
				Elec: -6,
				Force: 3,
				Light: 0,
				Dark: 0,
				Almighty: 2,
				Recovery: 2,
				Ailment: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 67,
		hp: 506,
		mp: 381,
		stats: {
			st: 51,
			dx: 79,
			ma: 98,
			ag: 63,
			lu: 80
		},
		learnset: [
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Null Nerve',
				level: 68
			},
			{
				name: 'Doping',
				level: 70
			}
		],
		resistances: {
			Fire: 'Resist',
			Elec: 'Weak',
			Force: 'Null',
			Light: 'Resist',
			Sleep: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'Known as Kujaku Myo-o in Japan, he is known to remove misfortune, fear, and poison. This is due to the fact that he is the deification of the peacock, which eats poisonous snakes. He is often portrayed as riding a peacock, holding a lotus or peacock feather, and has a graceful expression, unlike the other Wisdom Kings that are depicted in more wrathful fashion. In Shingon Buddhism, founded by the monk Kukai, it is said he is an incarnation of Buddha, taking that form to enlighten people.',
		origin: 'Buddhist'
	},
	{
		name: 'Maitreya',
		affinities: {
			skillPotential: {
				Phys: 4,
				Gun: -3,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 4,
				Recovery: 0,
				Ailment: 3,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 83,
		hp: 844,
		mp: 272,
		stats: {
			st: 95,
			dx: 94,
			ma: 119,
			ag: 94,
			lu: 95
		},
		learnset: [
			{
				name: 'Enlightenment',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: '5.67 Billion Hands',
				level: 84
			},
			{
				name: 'Drain Ice',
				level: 85
			},
			{
				name: 'Doping',
				level: 86
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Weak',
			Fire: 'Weak',
			Ice: 'Resist',
			Light: 'Null',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Also known as Maitreya Bodhisattva. Said to be the successor to the current Buddha. Name means "loving-kindness."\nCurrently resides in Tusita Heaven. Will become Buddha in 5,670,000,000 years, during which he will lead many to salvation.',
		origin: 'Buddhist'
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
			Light: 'Resist',
			Dark: 'Weak',
			Confusion: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A divine beast in Japanese mythology.\nIt has been said to ward off evil and disasters, especially thefts and fire, and is commonly drawn on "ema," a type of Japanese amulet. However, despite being known primarily for protection, it has also been rumored to eat people.',
		origin: 'Japanese'
	},
	{
		name: 'Makara',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 1,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Dragon',
		level: 13,
		hp: 154,
		mp: 72,
		stats: {
			st: 18,
			dx: 18,
			ma: 22,
			ag: 21,
			lu: 19
		},
		learnset: [
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Mabufu',
				level: 14
			},
			{
				name: 'Tarunda',
				level: 17
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A holy creature that carries the gods on its back in Hindu lore. It lives in rivers and lakes.\nIt is a type of fish said to have the qualities of crocodiles, hippopotami, elephants, and Naga. In the Da Tang Xiyu Ji, a Buddhist record of the western world, it is the size of a mountain and its eyes shine like the sun.',
		origin: 'Hindu'
	},
	{
		name: 'Mamedanuki',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -5,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Food',
		level: 9,
		hp: 120,
		mp: 65,
		stats: {
			st: 14,
			dx: 14,
			ma: 12,
			ag: 19,
			lu: 17
		},
		learnset: [
			{
				name: 'Pulinpa',
				level: 0
			},
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Frenzied Chomp',
				level: 11
			}
		],
		resistances: {
			Gun: 'Weak',
			Fire: 'Resist',
			Ice: 'Resist',
			Bind: 'Weak',
			Confusion: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A male raccoon that specializes in enchanting people.\nIt has massive genitals, about 12 feet squared, which it uses to fool people. It sometimes covers itself in them and transforms; at other times it uses them as an umbrella. In the sake breweries in Nada, Japan, they say you can\'t make good liquor if there\'s no Mamedanuki around.',
		origin: 'Japanese'
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
			Light: 'Weak',
			Dark: 'Null',
			Mirage: 'Resist',
			Charm: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A witch whose lore originated in the Philippines.\nIt masquerades as a beautiful woman during the day but transforms into a blood-sucking monster at night. It has the ability to separate its upper and lower body, and can sprout bat wings from its back to fly in search of humans to suck their blood. It is said that the Manananggal preys on unborn fetuses in particular, using its proboscis-like tongue to open the wombs of pregnant women, wherein it will suck the fetus\' blood, or devour it outright.',
		origin: 'Filipino'
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
			Fire: 'Weak',
			Elec: 'Resist',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A magical plant whose roots take the appearance of a human.\nMandrakes are a precious component in potions to heal sicknesses, but obtaining one is notoriously difficult. When pulled from the ground, they let out a bloodcurdling scream, killing anyone unlucky enough to hear it. There are both male and female variations of Mandrakes.',
		origin: 'European'
	},
	{
		name: 'Manticore',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 1,
				Fire: 0,
				Ice: 0,
				Elec: 2,
				Force: -5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -1,
				Ailment: 3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Wilder',
		level: 45,
		hp: 360,
		mp: 191,
		stats: {
			st: 67,
			dx: 47,
			ma: 39,
			ag: 73,
			lu: 59
		},
		learnset: [
			{
				name: 'Toxic Sting',
				level: 0
			},
			{
				name: 'Axel Claw',
				level: 0
			},
			{
				name: 'Frenzied Chomp',
				level: 46
			},
			{
				name: 'Acid Breath',
				level: 47
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Null',
			Force: 'Weak',
			Seal: 'Weak',
			Poison: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'An evil chimera of Indian descent. It lives in deserts and jungles.\nIt had the body of a lion and the wrinkled face of a man. It loves to eat human flesh with its three rows of teeth. Its tail is fatally poisonous; in some versions, this poison can be shot out.',
		origin: 'Arabian'
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
				name: 'Hell Thrust',
				level: 0
			},
			{
				name: 'Toxic Spray',
				level: 0
			},
			{
				name: 'Dance of Mara',
				level: 0
			},
			{
				name: 'Charge',
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
			Ice: 'Weak',
			Elec: 'Drain',
			Light: 'Resist',
			Dark: 'Resist',
			Charm: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A Buddhist demon that represents the fear of death.\nAlso known as "The Evil One," he sent his daughter to tempt Buddha during his meditations.',
		origin: 'Buddhist'
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
			Elec: 'Weak',
			Force: 'Drain',
			Light: 'Null',
			Dark: 'Resist',
			Sleep: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The maternal figure of Christianity.\nGabriel informed her that she was to be the mother of Jesus. Some sects revere her as Virgin Mary, but other denominations do not focus on her.',
		origin: 'Abrahamic'
	},
	{
		name: 'Marici',
		aliases: [
			'Marishiten'
		],
		affinities: {
			skillPotential: {
				Phys: 5,
				Fire: 0,
				Ice: 2,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: -3,
				Almighty: 1,
				Ailment: 0,
				Recovery: -5,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Kishin',
		level: 78,
		hp: 508,
		mp: 312,
		stats: {
			st: 69,
			vi: 47,
			ma: 44,
			ag: 52,
			lu: 60
		},
		learnset: [
			{
				name: 'Formless Arrows',
				level: 0
			},
			{
				name: 'Mist Rush',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Luster Candy',
				level: 0
			},
			{
				name: 'Glacial Blast',
				level: 79
			},
			{
				name: 'Freikugel',
				level: 81
			},
			{
				name: 'High Phys Pleroma',
				level: 82
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Null',
			Ice: 'Resist',
			Elec: 'Resist',
			Light: 'Repel',
			Dark: 'Weak',
			Confusion: 'Weak',
			Poison: 'Weak',
			Mirage: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A sun goddess of Buddhism, her name means "light" or "heat haze." In Japan, where she is known as Marishiten, she was worshipped by warriors, said to protect them from harm and enemy detection. Often portrayed as having three heads and six-to-eight arms, holding weapons such as swords, bows, and vajra.',
		origin: 'Buddhist'
	},
	{
		name: 'Masakado',
		affinities: {
			skillPotential: {
				Phys: 6,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -4,
				Dark: -4,
				Almighty: 6,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Light'
		},
		arcana: 'Tower',
		race: 'Wargod',
		level: 94,
		hp: 676,
		mp: 409,
		stats: {
			st: 104,
			vi: 89,
			ma: 46,
			ag: 59,
			lu: 83
		},
		learnset: [
			{
				name: 'Recalcitrant Execution',
				level: 0
			},
			{
				name: 'Brave Blade',
				level: 0
			},
			{
				name: 'Figment Slash',
				level: 0
			},
			{
				name: 'Critical Zealot',
				level: 0
			},
			{
				name: 'Freikugel',
				level: 95
			},
			{
				name: 'Murderous Glee',
				level: 96
			},
			{
				name: 'High Almighty Pleroma',
				level: 97
			}
		],
		resistances: {
			Phys: 'Resist',
			Light: 'Null',
			Dark: 'Null',
			Sleep: 'Weak',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A general who rebelled against the Imperial Court in the mid-Heian period: Taira no Masakado.\nHe succeeded in ruling Kanto and declared himself emperor, but was later defeated by Fujiwara no Hidesato and Taira no Sadamori. After death, he was enshrined as a vengeful spirit, but was later viewed as a hero and became revered as a guardian deity of the Kanto region, where he has remained to this day.',
		origin: 'Japanese'
	},
	{
		name: 'Masakado\'s Shadow',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Fury',
		level: 83,
		hp: 645,
		mp: 314,
		stats: {
			st: 89,
			dx: 89,
			ma: 89,
			ag: 89,
			lu: 89
		},
		learnset: [
			{
				name: 'Curse Thy Enemy',
				level: 0
			},
			{
				name: 'Gun Pierce',
				level: 0
			},
			{
				name: 'Drain Fire',
				level: 0
			},
			{
				name: 'Drain Ice',
				level: 84
			},
			{
				name: 'Drain Elec',
				level: 85
			},
			{
				name: 'Drain Force',
				level: 86
			},
			{
				name: 'Guardian\'s Eye',
				level: 99
			}
		],
		resistances: {
			Phys: 'Drain',
			Gun: 'Drain',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: null,
		origin: 'Japanese'
	},
	{
		name: 'Mastema',
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: -5,
				Ice: 0,
				Elec: -3,
				Force: 3,
				Light: 3,
				Dark: 0,
				Almighty: 3,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Herald',
		level: 83,
		hp: 550,
		mp: 400,
		stats: {
			st: 69,
			vi: 59,
			ma: 69,
			ag: 47,
			lu: 53
		},
		learnset: [
			{
				name: 'Great Lament',
				level: 0
			},
			{
				name: 'Floral Gust',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Great Mana Spring',
				level: 84
			},
			{
				name: 'Mahamabarion',
				level: 85
			},
			{
				name: 'High Light Pleroma',
				level: 86
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Repel',
			Force: 'Repel',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'An angel who persecutes evil in Hebrew lore. His role is to deliver punishment on behalf of God.\nHe is said to be permitted by God to tempt humans and test their faith, and even has demons as his servants, at the behest of God. The Zadokite Fragments and the Dead Sea Scrolls describe him as the angel of woe, the father of all evil, and a flatterer of God.',
		origin: 'Abrahamic'
	},
	{
		name: 'Master Therion',
		affinities: {
			skillPotential: {
				Phys: -5,
				Gun: 0,
				Fire: 3,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 2,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Yoma',
		level: 61,
		hp: 490,
		mp: 223,
		stats: {
			st: 64,
			dx: 68,
			ma: 71,
			ag: 65,
			lu: 67
		},
		learnset: [
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 62
			},
			{
				name: 'Mabufudyne',
				level: 63
			}
		],
		resistances: {
			Gun: 'Weak',
			Fire: 'Null',
			Ice: 'Null',
			Light: 'Weak',
			Dark: 'Null',
			Daze: 'Weak',
			Seal: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'The name of the beast that the mystic Aleister Crowley called himself. It refers to the beast that appears in the Book of Revelations.\nAccording to Revelations, Therion is the enemy of humanity, a beast with the power and authority of Satan. The beast is said to come from the sea, having seven heads and ten horns, a body like a leopard with legs like a bear. Another beast with lamb\'s horns is said to come from the earth, forcing man to worship the beast from the sea. Everyone must also bear the mark of the beast, the number 666, on their hand or forehead, or they cannot buy or sell goods.',
		origin: 'Abrahamic'
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
			Elec: 'Weak',
			Force: 'Null',
			Light: 'Resist',
			Dark: 'Resist',
			Sleep: 'Resist',
			Mirage: 'Resist',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'A master sportsman who entertains the audience at the cost of his own peril; even one small slip-up can spell certain death.\nIt is said that some of the men who die in this cruel game remain in this world as Fiends, bound by regret as well as the thirst for the cheers and excitement.',
		origin: 'European'
	},
	{
		name: 'Maya',
		affinities: {
			skillPotential: {
				Phys: -5,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 3,
				Recovery: 0,
				Ailment: 5,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Night',
		level: 77,
		hp: 722,
		mp: 398,
		stats: {
			st: 51,
			dx: 67,
			ma: 115,
			ag: 75,
			lu: 91
		},
		learnset: [
			{
				name: 'Megidolaon',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 0
			},
			{
				name: 'Sexy Dance',
				level: 78
			},
			{
				name: 'Mana Surge',
				level: 79
			},
			{
				name: 'Null Mind',
				level: 80
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Null',
			Dark: 'Resist',
			Charm: 'Null',
			Sleep: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'The Hindu personification of illusion. It is said to have the power to make humans aware and become enlightened about "phenomena" caused by things on Earth.\nA Maya of Burmese lore was a mother goddess and may have some relation to the goddess of illusion.',
		origin: 'Hindu'
	},
	{
		name: 'Mayahuel',
		affinities: {
			skillPotential: {
				Phys: -3,
				Gun: 2,
				Fire: -4,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: 0,
				Almighty: 0,
				Recovery: 5,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Tree',
		level: 34,
		hp: 261,
		mp: 231,
		stats: {
			st: 28,
			dx: 36,
			ma: 55,
			ag: 39,
			lu: 47
		},
		learnset: [
			{
				name: 'Media',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Mahamaon',
				level: 35
			},
			{
				name: 'High Heal Pleroma',
				level: 36
			}
		],
		resistances: {
			Gun: 'Null',
			Fire: 'Weak',
			Seal: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'An Aztec goddess said to have brought the maguey plant to this world. As granddaughter of a Tzitzimitl, she descended to Earth alongside Quetzalcoatl, disguised as the branches of a forked tree. Her upset grandmother found her, tore her to pieces, and ate her, leaving Quetzalcoatl intact. Later, Quetzalcoatl buried Mayahuel\'s bones, from which the first maguey plant sprouted.',
		origin: 'Aztec'
	},
	{
		name: 'Medusa',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 3,
				Fire: 0,
				Ice: 0,
				Elec: 3,
				Force: -5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Femme',
		level: 39,
		hp: 420,
		mp: 189,
		stats: {
			st: 39,
			dx: 69,
			ma: 57,
			ag: 54,
			lu: 46
		},
		learnset: [
			{
				name: 'Snake\'s Fangs',
				level: 0
			},
			{
				name: 'Marin Karin',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 0
			},
			{
				name: 'Gun Pleroma',
				level: 40
			},
			{
				name: 'Grand Tack',
				level: 41
			},
			{
				name: 'Ziodyne',
				level: 43
			}
		],
		resistances: {
			Gun: 'Resist',
			Elec: 'Null',
			Force: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A monster of Greek lore; one of the three Gorgon sisters.\nShe had snakes for hair, bronze scales for skin, golden wings on her back, sharp fangs, and eyes that could turn anyone who looked straight into them into stone. In some traditions, she was a beautiful woman, and her snake hair was her only ugly feature. With the help of the goddess Athena, Perseus was able to behead her.',
		origin: 'Greco-Roman'
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
			Force: 'Weak',
			Light: 'Drain',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A Christian Gnostic angel said to be the "savior of angels."\nIn the Bible, he is referred to as "Melchizedek, king of Saelm.',
		origin: 'Abrahamic'
	},
	{
		name: 'Melchom',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 1,
				Ice: -3,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 2,
				Almighty: 0,
				Recovery: 1,
				Ailment: -1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fallen',
		level: 13,
		hp: 147,
		mp: 80,
		stats: {
			st: 18,
			dx: 18,
			ma: 15,
			ag: 24,
			lu: 22
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
				name: 'Maragi',
				level: 14
			},
			{
				name: 'Tarukaja',
				level: 15
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Weak',
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Bind: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'The paymaster of Hell. He is often depicted with a wallet.\nIt is not known exactly what his duties are as the comptroller of the chamberlains, but it is certain that he is the one handing out the paychecks to the public workers of Hell.',
		origin: 'Abrahamic'
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
			Phys: 'Null',
			Light: 'Weak',
			Dark: 'Drain',
			Sleep: 'Resist',
			Mirage: 'Resist',
			Poison: 'Resist',
			Confusion: 'Resist',
			Charm: 'Resist',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'More accurately, Mephistopheles. He is one of the princes of Hell and his name means "he who loves not the light".\nHe is commonly known as the demon summoned by Georg Faust. Other than Satan himself, he is the most feared commander in Hell. However, he despises having fallen into Hell and hates any and all humans who have been granted salvation. He is rather knowledgeable in the realms of astronomy, astrology and meteorology in addition to being a skilled illusionist who can manipulate all five senses.',
		origin: 'Abrahamic'
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
			Elec: 'Weak',
			Wind: 'Null',
			Light: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'The Roman god of travelers and thieves. A diverse god, he is seen as a symbol of human unconscious and the mental world. He is equated with the Philosopher\'s Stone, the ultimate mystery in the field of alchemy.',
		origin: 'Greco-Roman',
		user: 'Morgana',
		stage: 2,
		evoSkillName: 'Evade Elec'
	},
	{
		name: 'Merkabah',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 6,
				Fire: 0,
				Ice: 0,
				Elec: 6,
				Force: 6,
				Light: 6,
				Dark: -6,
				Almighty: 5,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Herald',
		level: 99,
		hp: 926,
		mp: 403,
		stats: {
			st: 117,
			dx: 155,
			ma: 140,
			ag: 115,
			lu: 111
		},
		learnset: [
			{
				name: 'Chariot',
				level: 0
			},
			{
				name: 'Riot Gun',
				level: 0
			},
			{
				name: 'Thunder Reign',
				level: 0
			},
			{
				name: 'Deadly Wind',
				level: 0
			}
		],
		resistances: {
			Light: 'Drain',
			Dark: 'Weak',
			Bind: 'Resist',
			Charm: 'Resist',
			Seal: 'Null',
			Confusion: 'Resist',
			Poison: 'Resist',
			Sleep: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Unknown',
			minor: 'Law'
		},
		lore: 'Sometimes called the "heavenly chariot" or the "throne of God." Described as having four faces and four wings in Ezekiel.\nThere is also a form of meditation that invokes Merkabah used to connect to a higher realm. The ritual is quite dangerous, so caution is advised.',
		origin: 'Abrahamic'
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
			Fire: 'Weak',
			Ice: 'Null',
			Elec: 'Weak',
			Sleep: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Half-woman, half-fish inhabitant of the ocean. Males are called mermen.\nMermaids are regarded as unlucky omens by many fishermen, often foretelling severe storms or poor catches. Legend says they use their voices to charm men, causing them to crash their ships.',
		origin: 'European'
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
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Wind: 'Resist',
			Psy: 'Resist',
			Nuke: 'Resist',
			Light: 'Repel',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. He appears before Judgment Day to save the virtuous. He is a universal figure, appearing in myths around the world. Many stories involve his death and rebirth.',
		origin: 'Universal',
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
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Wind: 'Resist',
			Psy: 'Resist',
			Nuke: 'Resist',
			Light: 'Repel',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. He appears before Judgment Day to save the virtuous. He is a universal figure, appearing in myths around the world.',
		origin: 'Universal'
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
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'One of the most important angels in the hierarchy, yet the most mysterious.\nHe is the scribe and advocate of heaven.',
		origin: 'Abrahamic'
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
			Fire: 'Null',
			Ice: 'Null',
			Force: 'Weak',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'One of the four major angels, his name means "He who is like God."\nHe stands at the top of the angel hierarchy and carries a divine armament known to shatter any blade.',
		origin: 'Abrahamic'
	},
	{
		name: 'Michizane',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Famed',
		level: 84,
		hp: 652,
		mp: 319,
		stats: {
			st: 90,
			dx: 90,
			ma: 90,
			ag: 90,
			lu: 90
		},
		learnset: [
			{
				name: 'Thunder Reign',
				level: 0
			},
			{
				name: 'Heaven\'s Bow',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Workaholic',
				level: 85
			},
			{
				name: 'Concentrate',
				level: 86
			}
		],
		resistances: {
			Ice: 'Weak',
			Elec: 'Drain',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: null,
		lore: null,
		origin: 'Japanese'
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
			Psy: 'Resist',
			Nuke: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'The beautiful woman that appears in Dumas\' "Three Musketeers". Branded with a fleur-de-lis symbol, she used many aliases to control nobility and get her vengeance.',
		origin: 'Modern Fiction',
		user: 'Haru Okumura',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Minotaur',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Beast',
		level: 33,
		hp: 400,
		mp: 80,
		stats: {
			st: 48,
			dx: 43,
			ma: 34,
			ag: 39,
			lu: 32
		},
		learnset: [
			{
				name: 'Oni-Kagura',
				level: 0
			},
			{
				name: 'Phys Pleroma',
				level: 0
			},
			{
				name: 'Charge',
				level: 34
			},
			{
				name: 'Ally Counter',
				level: 35
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman'
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
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Null',
			Sleep: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'An indigenous god of the Shinano region from before the forces of Yamato occupied the land.\nSaid to be born from the belief that divine spirits dwelled in rocks and stones.',
		origin: 'Japanese'
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
		level: 82,
		hp: 501,
		mp: 351,
		stats: {
			st: 61,
			vi: 52,
			ma: 63,
			ag: 45,
			lu: 53
		},
		learnset: [
			{
				name: 'Rampage',
				level: 0
			},
			{
				name: 'Maragibarion',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Dekunda',
				level: 83
			},
			{
				name: 'Ragnarok',
				level: 84
			},
			{
				name: 'High Fire Pleroma',
				level: 85
			}
		],
		resistances: {
			Fire: 'Drain',
			Ice: 'Weak',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A sun deity who was worshipped in the Roman Empire from the 1st to the 4th century AD.\nThe rituals of the religion were secretive, but it is believed they entailed covering oneself in the blood of sheep and bulls. He was said to be reborn after death, inspiring worshippers to hold a festival each winter solstice.',
		origin: 'Greco-Roman'
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
			Ice: 'Weak',
			Light: 'Null',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'Commonly known as Mitra-Buddha or Mitra.\nAn ancient Persian god of contracts, he was also revered as a sun god. He is a protector of the world\'s harmony and truth, and passes judgment upon those who threaten it. It is said that one of his powers to safeguard harmony allows him to cure any illness.',
		origin: 'Zoroastrian'
	},
	{
		name: 'Mitra-Buddha',
		affinities: {
			skillPotential: {
				Phys: 6,
				Gun: 0,
				Fire: -3,
				Ice: 6,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 5,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fury',
		level: 96,
		hp: 955,
		mp: 333,
		stats: {
			st: 108,
			dx: 107,
			ma: 132,
			ag: 107,
			lu: 108
		},
		learnset: [
			{
				name: 'Severe Judgement',
				level: 0
			},
			{
				name: 'Berserker God',
				level: 0
			},
			{
				name: 'Smile Charge',
				level: 0
			},
			{
				name: 'Tetra Break',
				level: 0
			},
			{
				name: 'Glacial Blast',
				level: 97
			},
			{
				name: 'Self-Righteous Vow',
				level: 98
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Weak',
			Ice: 'Resist',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Unknown',
			minor: 'Chaos'
		},
		lore: 'Commonly known as Mitra-Buddha or Mitra.\nAn ancient Persian god of contracts, he was also revered as a sun god. At the end of time, he will descend from the heavens and raise the dead for final judgment.',
		origin: 'Buddhist'
	},
	{
		name: 'Mizuchi',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Snake',
		level: 34,
		hp: 318,
		mp: 141,
		stats: {
			st: 12,
			ma: 13,
			vi: 19,
			ag: 7,
			lu: 7
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Mabufula',
				level: 0
			},
			{
				name: 'Makakaja',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 35
			},
			{
				name: 'Me Patra',
				level: 36
			},
			{
				name: 'Scratch Dance',
				level: 37
			},
			{
				name: 'Fog Breath',
				level: 38
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Elec: 'Drain',
			Dark: 'Null'
		},
		game: 'smt3',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A water spirit in Japanese mythology. It appears around lakes full of fish. It has the ability to use illusions to trick its enemies.',
		origin: 'Japanese'
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
			Elec: 'Resist',
			Force: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A monster from Aboriginal folktales.\nIt lives in a jungle alongside owls and, though it appears human, has an abnormally large head. It also lacks a tongue and therefore cannot speak. Myth tells that these creatures are reincarnations of the "soul of the shadow," and they are even said to engage in intercourse with human women from time to time as well as eat children and fight humans.',
		origin: 'Aboriginal'
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
			Fire: 'Null',
			Ice: 'Weak',
			Elec: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A Canaanite god of fire.\nTradition states that a bronze statue of a human with the head of a female ox would be placed at the altar as its vessel. It is said that the statue would first be heated with fire, then children would be put inside as a sacrifice. The Bible mentions its name as a cruel pagan god.',
		origin: 'Canaanite'
	},
	{
		name: 'Momunofu',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: -6,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Brute',
		level: 25,
		hp: 286,
		mp: 88,
		stats: {
			st: 43,
			dx: 27,
			ma: 20,
			ag: 29,
			lu: 33
		},
		learnset: [
			{
				name: 'Charge',
				level: 0
			},
			{
				name: 'Oni-Kagura',
				level: 0
			},
			{
				name: 'Heat Wave',
				level: 26
			},
			{
				name: 'Light Life Aid',
				level: 27
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Resist',
			Force: 'Weak',
			Bind: 'Weak',
			Charm: 'Weak',
			Confusion: 'Weak',
			Poison: 'Weak',
			Sick: 'Weak',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A war god of ancient Japan. One of Arahabaki\'s subordinates. He is said to be the model for the fairy tale hero Momotaro, and is the origin for the word "mononofu," Japanese for "warrior."',
		origin: 'Japanese'
	},
	{
		name: 'Morax',
		affinities: {
			skillPotential: {
				Phys: 1,
				Gun: 0,
				Fire: 2,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Tyrant',
		level: 14,
		hp: 214,
		mp: 60,
		stats: {
			st: 29,
			dx: 20,
			ma: 16,
			ag: 19,
			lu: 21
		},
		learnset: [
			{
				name: 'Oni-Kagura',
				level: 0
			},
			{
				name: 'Counter',
				level: 0
			},
			{
				name: 'Maragi',
				level: 15
			},
			{
				name: 'Life Bonus',
				level: 16
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Sick: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia. He appears as a man with a bull\'s head.\nHe has knowledge of magical gems and plants, and teaches astronomy and astrology. He also sometimes gives his summoner a familiar.',
		origin: 'Abrahamic'
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
			Fire: 'Resist',
			Elec: 'Weak',
			Dark: 'Drain'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The Canaanite god of death.\nEvery year he attemps to kill Baal, the god of fertility, only to see him raised from the dead with the help of Baal\'s sister, Anat.',
		origin: 'Canaanite'
	},
	{
		name: 'Mother Harlot',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 1,
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
		hp: 319,
		mp: 295,
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
				name: 'Death Lust',
				level: 0
			},
			{
				name: 'Concentrate',
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
			Phys: 'Repel',
			Ice: 'Weak',
			Elec: 'Drain',
			Force: 'Weak',
			Light: 'Resist',
			Dark: 'Resist',
			Charm: 'Null',
			Sleep: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'Reviled as the "Whore of Babylon" in the Book of Revelation.\nShe defies God from atop a scarlet-colored beast with seven heads and ten horns, and carries a golden cup brimming with abominations and the filth of her deeds.',
		origin: 'Abrahamic'
	},
	{
		name: 'Mothman',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: 1,
				Force: 2,
				Light: -2,
				Dark: -2,
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
				name: 'Gale Charge',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Pulinpa',
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
			Elec: 'Null',
			Force: 'Weak',
			Poison: 'Resist',
			Mirage: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A cryptid sighted in West Virginia from the 1960s to the 1980s.\nIt has red, shining eyes and was known for the finlike appendages on both sides of its body. It has been said to walk on two foot and fly without moving these appendages. It has a keen sense for blood which allows it to easily track its prey. Eyewitnesses say that a UFO was sighted when Mothman appeared, so many believe that it is actually an alien.',
		origin: 'North American'
	},
	{
		name: 'Mou-Ryo',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 3,
				Almighty: 0,
				Recovery: -1,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Haunt',
		level: 23,
		hp: 180,
		mp: 150,
		stats: {
			st: 19,
			dx: 24,
			ma: 40,
			ag: 27,
			lu: 32
		},
		learnset: [
			{
				name: 'Mudo',
				level: 0
			},
			{
				name: 'Spirit Drain',
				level: 0
			},
			{
				name: 'Pulinpa',
				level: 25
			},
			{
				name: 'Resist Elec',
				level: 26
			}
		],
		resistances: {
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A spirit of the dead that failed to ascend to the heavens in Japanese lore.\nSome have evil intent, but most are not that powerful. They are often depicted as flaming balls.',
		origin: 'Japanese'
	},
	{
		name: 'Murmur',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 3,
				Force: 1,
				Light: 0,
				Dark: 3,
				Almighty: 0,
				Recovery: 0,
				Ailment: -2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fallen',
		level: 63,
		hp: 554,
		mp: 215,
		stats: {
			st: 84,
			dx: 69,
			ma: 69,
			ag: 79,
			lu: 64
		},
		learnset: [
			{
				name: 'Madness Nails',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Maziodyne',
				level: 64
			}
		],
		resistances: {
			Fire: 'Weak',
			Elec: 'Repel',
			Force: 'Resist',
			Light: 'Weak',
			Dark: 'Resist',
			Charm: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia, he is called the Great Duke of Thrones. He appears clad in blue armor, riding a gryphon, and wearing a crown. Philosophy and necromancy are his forte, and he can use any corpse as a vengeful spirit. He also leads over 30 armies as a Grand Duke of Hell.',
		origin: 'Abrahamic'
	},
	{
		name: 'Mushussu',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 4,
				Force: -7,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: -2,
				Support: -3
			},
			inherit: null
		},
		arcana: null,
		race: 'Drake',
		level: 47,
		hp: 373,
		mp: 197,
		stats: {
			st: 48,
			dx: 40,
			ma: 59,
			ag: 68,
			lu: 56
		},
		learnset: [
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 0
			},
			{
				name: 'Axel Claw',
				level: 48
			},
			{
				name: 'Elec Pleroma',
				level: 49
			}
		],
		resistances: {
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Weak',
			Daze: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A beast of Babylonian origin. Its name means "angry snake."\nIt has the head and body of a snake, the front legs of a lion, and the hind legs of a scorpion. It is one of the 11 beasts that serve Tiamat and fought with the god Marduk. For some reason, it is often later depicted carrying Marduk on its back.',
		origin: 'Mesopotamian'
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
				name: 'Maiden\'s Morsel',
				level: 0
			},
			{
				name: 'Mazanma',
				level: 0
			},
			{
				name: 'Tetrakarn',
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
			Fire: 'Weak',
			Force: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'Meaning "evil bird," it is the ghost of a young girl who died without knowing love in Buryat folklore.\nShe seduces travelers, only to crack their heads open and suck out their brains with her beak.',
		origin: 'Buryat'
	},
	{
		name: 'Myrmecolion',
		aliases: [
			'Myrmecoleon'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Vermin',
		level: 29,
		hp: 293,
		mp: 110,
		stats: {
			st: 31,
			dx: 48,
			ma: 26,
			ag: 37,
			lu: 32
		},
		learnset: [
			{
				name: 'Tarunda',
				level: 0
			},
			{
				name: 'Frenzied Chomp',
				level: 0
			},
			{
				name: 'Patra',
				level: 30
			},
			{
				name: 'Wind Breath',
				level: 31
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Weak',
			Force: 'Resist',
			Confusion: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A monster whose front half is a lion and rear half is an ant.\nIt is said to be born when a male lion impregnates an ant egg. Because its father is carnivorous and its mother herbivorous, it eats nothing and dies of starvation. It was apparently a mistranslation of "old lion" in the Book of Job that gave rise to this strange creature.',
		origin: 'European'
	},
	{
		name: 'Naamah',
		affinities: {
			skillPotential: {
				Phys: -6,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 3,
				Almighty: 0,
				Ailment: 7,
				Recovery: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Qadištu',
		level: 63,
		hp: 313,
		mp: 363,
		stats: {
			st: 21,
			vi: 42,
			ma: 57,
			ag: 45,
			lu: 55
		},
		learnset: [
			{
				name: 'Capitulate to Pleasure',
				level: 0
			},
			{
				name: 'Slumber Vortex',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Abyssal Mask',
				level: 0
			},
			{
				name: 'Great Curse Siphon',
				level: 64
			},
			{
				name: 'Debilitate',
				level: 66
			},
			{
				name: 'Mudobarion',
				level: 67
			}
		],
		resistances: {
			Phys: 'Weak',
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Dark: 'Null',
			Charm: 'Null',
			Confusion: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the four demons in the Zohar, a spiritual text of Jewish mystical thought. Her name means "pleasure" in Hebrew.\nShe is the most carnal of the four demons, and specializes in seduction. She is said to have intercourse with human men in their dreams and to give birth to numerous evil spirits, almost solely driven by her own desires. Her beauty bewitches even angels, and she birthed the demon king Asmodeus with an angel named Shomron. It is believed she was originally a human female, sister of Tubal-cain (a descendent of the Old Testament\'s Cain), and only later was she interpreted as a demon.',
		origin: 'Abrahamic'
	},
	{
		name: 'Nadja',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: 1,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fairy',
		level: 6,
		hp: 97,
		mp: 63,
		stats: {
			st: 9,
			dx: 15,
			ma: 15,
			ag: 9,
			lu: 12
		},
		learnset: [
			{
				name: 'Zan',
				level: 0
			},
			{
				name: 'Dia',
				level: 7
			},
			{
				name: 'Posumudi',
				level: 9
			}
		],
		resistances: {
			Ice: 'Weak',
			Force: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A mysterious fairy girl with green eyes and brown skin, wearing a short, white dress and a bone necklace.\nHer name comes from the young woman who appears in the eponymous novel by Andre Brenton. Her name may come from the russian word for hope, "Nadezda," or the English/French name stemming from it, "Nadia", but there is no definitive answer.',
		origin: 'European'
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
			Fire: 'Weak',
			Elec: 'Null',
			Force: 'Weak',
			Seal: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Half-snake, half-human, they are divine beings in Hindu lore.\nWorshipped as bringers of fertility, they live in the bottoms of lakes and seas, and enjoy singing and dancing outside of battle.',
		origin: 'Hindu'
	},
	{
		name: 'Naga Raja',
		aliases: [
			'Raja Naga'
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
			Fire: 'Weak',
			Ice: 'Resist',
			Elec: 'Drain',
			Force: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'The king of the Naga, a half-man, half-snake tribe in Hindu lore.\nThe dragon kings of Nanda and Takshaka of Buddhist myth fall into this royal category.',
		origin: 'Hindu'
	},
	{
		name: 'Nahobeeho',
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 0,
				Ice: 5,
				Elec: 3,
				Force: -5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: -4,
				Recovery: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Fairy',
		level: 65,
		hp: 398,
		mp: 287,
		stats: {
			st: 63,
			vi: 50,
			ma: 33,
			ag: 41,
			lu: 38
		},
		learnset: [
			{
				name: 'Jack Tempest',
				level: 0
			},
			{
				name: 'Storm Dracostrike',
				level: 0
			},
			{
				name: 'Mortal Jihad',
				level: 0
			},
			{
				name: 'Critical Aura',
				level: 0
			},
			{
				name: 'High Restore',
				level: 66
			},
			{
				name: 'Enduring Soul',
				level: 67
			},
			{
				name: 'Freikugel',
				level: 69
			}
		],
		resistances: {
			Phys: 'Resist',
			Ice: 'Drain',
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A Jack Frost who looks like a certain Nahobino. Not content with being a mere demon, he pushes himself to his limits.\nHis blue hair and costume are homemade, and he\'s said to be proud of his divine craftsmanship. He likes snowy mornings, and by his own words, aims to create a world of silver.',
		origin: 'ATLUS Original'
	},
	{
		name: 'Napaea',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 1,
				Ice: -3,
				Elec: 0,
				Force: 3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fairy',
		level: 12,
		hp: 130,
		mp: 113,
		stats: {
			st: 14,
			dx: 11,
			ma: 24,
			ag: 25,
			lu: 20
		},
		learnset: [
			{
				name: 'Marin Karin',
				level: 0
			},
			{
				name: 'Zan',
				level: 0
			},
			{
				name: 'Resist Ice',
				level: 13
			},
			{
				name: 'Agi',
				level: 14
			},
			{
				name: 'Zanma',
				level: 15
			}
		],
		resistances: {
			Ice: 'Weak',
			Force: 'Resist',
			Charm: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Nymphs of Greek lore said to live in wooded valleys.\nThey are beautiful young maidens wearing graceful garments, long hair, and a gold ring on their heads as they sing and dance. They are worshipped as providers who make flowers bloom, watch over livestock, assist with hunts, and heal illnesses, among other things. They can also attack the wicked at times. Those who drink from the springs of Napaea are given the gift of prophecy.',
		origin: 'Greco-Roman'
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
			Phys: 'Resist',
			Fire: 'Weak',
			Light: 'Null'
		},
		game: 'p4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The 4th avatar of Vishnu. He took this form to defeat Hiranyakashipu, who can\'t be killed by human, animal or deva, and killed his foe at dusk, since he couldn\'t die at other times.',
		origin: 'Hindu'
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
				name: 'Sexy Dance',
				level: 0
			},
			{
				name: 'Tentarafoo',
				level: 0
			},
			{
				name: 'Hellish Mask',
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
				name: 'Hysterical Slap',
				level: 41
			}
		],
		resistances: {
			Fire: 'Weak',
			Force: 'Null',
			Charm: 'Null',
			Confusion: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A young man of Greek lore. He rejected the nymph Echo, who faded to a whisper out of despair.\nCursed by Nemesis, he fell in love with his own reflection and wasted away, becoming the flower that now bears his name.',
		origin: 'Greco-Roman'
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
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Repel'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'The general of Hell. He keeps watch over other demons.\nOne of Hell\'s greatest necromancers, he can control souls and corpses.',
		origin: 'Abrahamic'
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
		resistances: {},
		game: 'p5',
		alignment: null,
		lore: 'The grimoire which contains vital information of the Cthulhu mythos by Lovecraft. Its original name is Al Azif. It is said the book itself is alive.',
		origin: 'Lovecraftian',
		user: 'Futaba Sakura',
		stage: 1,
		evoSkillName: null
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
			Fire: 'Weak',
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Resist',
			Mirage: 'Resist',
			Poison: 'Resist',
			Confusion: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The god of prophecy in Taoist religion.\nIt is said to have the head of a cat and the body of a human, and its shrine was located in Annam, which is present-day Vietnam. The shrine was meant for Mao Shangshu, a 14-15th century general who conquered Vietnam. However, because the name "Mao" is similar to the Chinese word for cat, the temple was effectively misnamed, and he was reborn as a different god. It should also be noted that there is a similar story about the god of sailing known as "Tetsu Neko Shogun."',
		origin: 'Chinese'
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
			Fire: 'Resist',
			Ice: 'Weak',
			Elec: 'Weak',
			Force: 'Null',
			Charm: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Incarnations of long-living cats in Japanese mythology.\nThey can speak to humans and, depending on their power, can do various things. Some can turn into humans, while others can have the dead do their bidding',
		origin: 'Japanese'
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
			Light: 'Resist',
			Dark: 'Weak'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman',
		user: 'Ken Amada',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Nergal',
		affinities: {
			skillPotential: {
				Phys: 4,
				Gun: 0,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 5,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Reaper',
		level: 81,
		hp: 786,
		mp: 246,
		stats: {
			st: 123,
			dx: 83,
			ma: 51,
			ag: 76,
			lu: 97
		},
		learnset: [
			{
				name: 'Pandemic Bomb',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Berserker God',
				level: 83
			},
			{
				name: 'Null Light',
				level: 84
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Weak',
			Light: 'Resist',
			Dark: 'Repel'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'The god of the netherworld in Sumerian lore. Originally, he was the god of pestilence and war who lived in the heavens.\nWhile there, he refused to kneel to the messenger of Ereshkigal, goddess of the underworld. He was summoned there with 14 demons given to him as guards by his father Ea. He intended to kill Ereshkigal with his sword, but she promised to become his wife and give him the netherworld\'s throne, so he spared her.',
		origin: 'Mesopotamian'
	},
	{
		name: 'Nezha Taizi',
		aliases: [
			'Nata Taishi',
			'Nezha'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 2,
				Ice: 0,
				Elec: -2,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: -2,
				Ailment: 0,
				Recovery: -2,
				Support: 0
			},
			inherit: 'Phys'
		},
		arcana: 'Chariot',
		race: 'Wargod',
		level: 28,
		hp: 155,
		mp: 137,
		stats: {
			st: 28,
			vi: 22,
			ma: 24,
			ag: 16,
			lu: 14
		},
		learnset: [
			{
				name: 'Agilao',
				level: 0
			},
			{
				name: 'Zanma',
				level: 0
			},
			{
				name: 'Berserker God',
				level: 0
			},
			{
				name: 'Counter',
				level: 29
			},
			{
				name: 'Riberama',
				level: 30
			},
			{
				name: 'Endure',
				level: 32
			}
		],
		resistances: {
			Fire: 'Resist',
			Elec: 'Weak',
			Force: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A protection deity of Chinese lore. Sometimes said to take the form of an ageless young man, he was granted his trusty weapon Qiankun Quan (Universe Ring) and his trademark Hun Tian Ling (Red Armillary Sash) upon birth. He later committed suicide as atonement for killing the Dragon King, but was brought back to life with lotus roots. In "Journey to the West," he fought an intense battle with Sun Wukong.',
		origin: 'Chinese'
	},
	{
		name: 'Niddhoggr',
		aliases: [
			'Nidhoggr'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 2,
				Fire: -2,
				Ice: 3,
				Elec: -3,
				Force: 0,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: -3
			},
			inherit: 'Dark'
		},
		arcana: 'Hermit',
		race: 'Drake',
		level: 60,
		hp: 682,
		mp: 198,
		stats: {
			st: 69,
			dx: 92,
			ma: 63,
			ag: 66,
			lu: 52
		},
		learnset: [
			{
				name: 'Grand Tack',
				level: 0
			},
			{
				name: 'Poison Breath',
				level: 0
			},
			{
				name: 'Madness Nails',
				level: 61
			},
			{
				name: 'Eat Whole',
				level: 63
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Resist',
			Ice: 'Repel',
			Elec: 'Weak',
			Light: 'Weak',
			Confusion: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'An evil dragon that gnaws on the roots of Yggdrasil, the World Tree. It rules over the evil snakes that live there. Capable of surviving Ragnarok by feeding on the slain corpses that drift to it.',
		origin: 'Norse'
	},
	{
		name: 'Night Stalker',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Foul',
		level: 22,
		hp: 207,
		mp: 110,
		stats: {
			st: 26,
			dx: 26,
			ma: 22,
			ag: 36,
			lu: 32
		},
		learnset: [
			{
				name: 'Damascus Claw',
				level: 0
			},
			{
				name: 'Dormina',
				level: 0
			},
			{
				name: 'Attack Knowhow',
				level: 23
			}
		],
		resistances: {
			Light: 'Weak',
			Sleep: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Demon worshippers who work in the shadows of society. They live a life of crime and sacrifice their victims to the demons they pledge their allegiance to.\nMany of their victims are children. By killing the ones God loves, they believe they are pleasing demons who hate God.',
		origin: 'North American'
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
			Elec: 'Weak',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'p5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'One of the four great aspects of Shinto thought, it works gently to help maintain a calm mind.\nIt is said to aid in one\'s relations, calmness, and sociability, and can also lead one in a positive direction.',
		origin: 'Japanese'
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
			Elec: 'Weak',
			Light: 'Resist',
			Dark: 'Null',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The goddesses of fate in Norse myth.\nThey live below the roots of Yggdrasil and weave the threads of fate by which even the gods are bound.',
		origin: 'Norse'
	},
	{
		name: 'Nozuchi',
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: -1,
				Ice: -1,
				Elec: -1,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: 0,
				Support: 2
			},
			inherit: 'Ailment'
		},
		arcana: 'Moon',
		race: 'Snake',
		level: 15,
		hp: 108,
		mp: 69,
		stats: {
			st: 17,
			vi: 19,
			ma: 9,
			ag: 9,
			lu: 11
		},
		learnset: [
			{
				name: 'Lunge',
				level: 0
			},
			{
				name: 'Counter',
				level: 0
			},
			{
				name: 'Taunt',
				level: 16
			},
			{
				name: 'Life Spring',
				level: 17
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Weak',
			Ice: 'Weak',
			Elec: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Said to be the spirit of a serpent that has lived in the mountains since ancient times in the Nihon Shoki and is also said to govern the earth\'s veins.\nThe name Nozuchi comes from the ancient Japanese word for "god of the fields." It is said to live deep in the mountains behind trees and in thickets. It has a large mouth at the end of its head, but no eyes or nose. It is not evil, but rather violent all the same. When it sees a human, it may try to harm or even eat them.',
		origin: 'Japanese'
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
			Elec: 'Null',
			Force: 'Weak',
			Charm: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A legendary monster in Japanese mythology. It has the head of a monkey, the body of a tanuki, the arms and legs of a tiger, and the tail of a snake.\nDue to its bizarre appearance, the term "Nue" is sometimes used to describe a person of unknown origins. According to The Tale of Heike, the Nue would come to the emperor\'s palace every night from 2 to 2:30 A.M., shrouded in a dark cloud, where it would howl in a horrific and terrifying manner. However, the warrior Minamoto no Yorimasa eventually shot it down with his bow.',
		origin: 'Japanese'
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
			Fire: 'Weak',
			Elec: 'Resist',
			Force: 'Repel',
			Dark: 'Resist',
			Charm: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A goddess that appears in Chinese mythology.\nRecognized as one of the sovereigns, she is said to have the head of a human and a body of a serpent. She is also known to be responsible for the creation of humanity, having created them from mud. Legend tells that when one of the four pillars said to hold up the world broke, she repaired it. Furthermore, her colleague Fuxi is typically labeled as either her brother or her husband, depending on what version of her story is told.',
		origin: 'Chinese'
	},
	{
		name: 'Nuwa - Snake',
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
			Fire: 'Weak',
			Elec: 'Null',
			Force: 'Repel',
			Dark: 'Null',
			Charm: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A goddess that appears in Chinese mythology.\nRecognized as one of the sovereigns, she is said to have the head of a human and a body of a serpent. She is also known to be responsible for the creation of humanity, having created them from mud. Legend tells that when one of the four pillars said to hold up the world broke, she repaired it. Furthermore, her colleague Fuxi is typically labeled as either her brother or her husband, depending on what version of her story is told.',
		origin: 'Chinese'
	},
	{
		name: 'Nyami Nyami',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -1,
				Ice: 3,
				Elec: -1,
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
		race: 'Dragon',
		level: 13,
		hp: 62,
		mp: 109,
		stats: {
			st: 10,
			vi: 9,
			ma: 17,
			ag: 11,
			lu: 13
		},
		learnset: [
			{
				name: 'Glacial Dragon Spiral',
				level: 0
			},
			{
				name: 'Bestial Bite',
				level: 0
			},
			{
				name: 'Life Drain',
				level: 14
			},
			{
				name: 'Mabufu',
				level: 15
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Elec: 'Weak',
			Mirage: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'Zambezi River god of the Tonga and Lozi tribes of southern Africa.\nHe has the body of a snake and the head of a fish or dragon. He is said to protect people near the water and provide them with food. He lived with his wife, Kitapo, until the construction of the Kariba Dam, which separated them. The local inhabitants were also forced to move to barren land. It is said that the great floods that occurred during the construction of the dam were casued by the Nyami Nyami, who was angered by these events.',
		origin: 'African'
	},
	{
		name: 'Nyx',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Night',
		level: 70,
		hp: 522,
		mp: 291,
		stats: {
			st: 15,
			ma: 27,
			vi: 17,
			ag: 16,
			lu: 15
		},
		learnset: [
			{
				name: 'Dormina',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 0
			},
			{
				name: 'Eternal Rest',
				level: 0
			},
			{
				name: 'Debilitate',
				level: 71
			},
			{
				name: 'Spirit Drain',
				level: 72
			},
			{
				name: 'Glacial Blast',
				level: 73
			},
			{
				name: 'Drain Fire',
				level: 74
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist'
		},
		game: 'smt3',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'The goddess of the night in Greek mythology. She was born out of Chaos and gave birth to many offspring, including light (Aether), day (Hemera), death (Thanatos), and the Moirae Sisters.',
		origin: 'Greco-Roman'
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
			Ice: 'Weak',
			Elec: 'Resist',
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A "piggyback monster" of Japan that jumps on the backs of those who walk on wooded paths at night.\nIts weight becomes progressively heavier to the point of being nearly unbearable, but it is said that it will transform into gold coins if you can carry it all the way back home.',
		origin: 'Japanese'
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
			Elec: 'Weak',
			Force: 'Null',
			Charm: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'The king of the fairies and the husband of Titania.\nHe is quite old, but due to a curse he received when he was young, he remains small yet still beautiful. He often flirts with human women and has earned many a scolding from his wife as a result.',
		origin: 'European'
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
			Elec: 'Repel',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Null',
			Mirage: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The All-Father in Norse Mythology. Warrior, sorcerer and near insatiable seeker of knowledge, he rides his eight-legged horse Sleipnir, armed with both Gungnir, his mighty spear and Draupnir, an enchanting ring.\nHe is known to have willingly sacrificed an eye to drink from the Well of Wisdom and is also recognized as the one who welcomes the souls of departed warriors as they cross over into Valhalla.',
		origin: 'Norse'
	},
	{
		name: 'Ogre',
		affinities: {
			skillPotential: {
				Phys: 4,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -3,
				Ailment: -2,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Chariot',
		race: 'Jaki',
		level: 45,
		hp: 524,
		mp: 99,
		stats: {
			st: 71,
			dx: 44,
			ma: 32,
			ag: 47,
			lu: 54
		},
		learnset: [
			{
				name: 'Mortal Jihad',
				level: 0
			},
			{
				name: 'Life Gain',
				level: 46
			},
			{
				name: 'Bloody Glee',
				level: 47
			}
		],
		resistances: {
			Phys: 'Resist',
			Elec: 'Weak',
			Force: 'Resist',
			Bind: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'An evil monster that lives in the hills. They are strong but stupid.\nIt is large in size and is said to attack and eat humans, especially young, beautiful women. It can also transform, but its relative stupidity has caused it to often fall for human tricks.',
		origin: 'European'
	},
	{
		name: 'Ogun',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Zealot',
		level: 24,
		hp: 255,
		mp: 97,
		stats: {
			st: 36,
			dx: 46,
			ma: 17,
			ag: 32,
			lu: 28
		},
		learnset: [
			{
				name: 'Blight',
				level: 0
			},
			{
				name: 'Tathlum Shot',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 25
			},
			{
				name: 'Null Nerve',
				level: 26
			}
		],
		resistances: {
			Fire: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A heroic warrior god in the Voodoo religion. Worship of him involves the use of rum, which he enjoys.\nHe has many aspects, such as governing fire, politics, and of course, war. His name comes from the Nigerian god of ironsmithing.',
		origin: 'Haitian'
	},
	{
		name: 'Okiku-Mushi',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 3,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: -3,
				Light: -3,
				Dark: 2,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Vermin',
		level: 34,
		hp: 332,
		mp: 155,
		stats: {
			st: 35,
			dx: 58,
			ma: 29,
			ag: 37,
			lu: 37
		},
		learnset: [
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Tathlum Shot',
				level: 0
			},
			{
				name: 'Poisma',
				level: 35
			},
			{
				name: 'Mudoon',
				level: 36
			}
		],
		resistances: {
			Gun: 'Resist',
			Ice: 'Weak',
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'An insect demon that takes the form of a woman with her hands tied behind her back. It arose from the hatred of a girl named Okiku, who was falsely convicted of a crime and executed. She is a separate person from the Okiku of Bancho Sarayashiki fame, but because of its popularity, they eventually were seen as one and the same.',
		origin: 'Japanese'
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
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Mist Rush',
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
			Ice: 'Weak',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A Kunitsu deity of Japanese mythology that governs agriculture and medicine.\nSaid to have built the country of Izumo with Susano-o\'s daughte, Suseri-Hime. He is a peaceful god who prefers not to fight.',
		origin: 'Japanese'
	},
	{
		name: 'Ometeotl',
		affinities: {
			skillPotential: {
				Phys: -5,
				Gun: 0,
				Fire: 3,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: -3
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 59,
		hp: 493,
		mp: 319,
		stats: {
			st: 49,
			dx: 51,
			ma: 83,
			ag: 93,
			lu: 75
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Recarmdra',
				level: 0
			},
			{
				name: 'Bufudyne',
				level: 60
			},
			{
				name: 'Judgement',
				level: 61
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Resist',
			Seal: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The dualistic creator of all in Aztec lore. Ometeotl\'s male aspect is Tonacatecuhtli and his female aspect is Tonacacihuatl. They are known as the creator, but the world\'s actual creation was done by their four sons.',
		origin: 'Aztec'
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
			Ice: 'Weak',
			Elec: 'Resist'
		},
		game: 'p4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A deity of knowledge in Japanese myth. He conceived the plan to draw Amaterasu from the Amato-Iwato, the cave she was hiding in.',
		origin: 'Japanese'
	},
	{
		name: 'Ongkhot',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Yoma',
		level: 37,
		hp: 288,
		mp: 138,
		stats: {
			st: 14,
			ma: 9,
			vi: 11,
			ag: 15,
			lu: 12
		},
		learnset: [
			{
				name: 'Might',
				level: 0
			},
			{
				name: 'Scratch Dance',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 38
			},
			{
				name: 'Brutal Slash',
				level: 39
			},
			{
				name: 'Stone Hunt',
				level: 40
			},
			{
				name: 'Sukukaja',
				level: 41
			},
			{
				name: 'Sacrifice',
				level: 42
			}
		],
		resistances: {
			Phys: 'Resist',
			Stun: 'Weak',
			Bind: 'Weak',
			Poison: 'Weak',
			Seal: 'Weak'
		},
		game: 'smt3',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A monkey god in Hindu mythology, he is the general of Hanuman\'s army. In the Ramakian, Thailand\'s national epic, it is written that he fought with a giant and freed it from its curse.',
		origin: 'Hindu'
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
		level: 75,
		hp: 524,
		mp: 284,
		stats: {
			st: 64,
			vi: 63,
			ma: 45,
			ag: 30,
			lu: 47
		},
		learnset: [
			{
				name: 'Mist Rush',
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
				name: 'Dragon Eye',
				level: 0
			},
			{
				name: 'Impaler\'s Animus',
				level: 76
			},
			{
				name: 'Nihil Claw',
				level: 77
			},
			{
				name: 'Null Phys',
				level: 79
			}
		],
		resistances: {
			Phys: 'Resist',
			Ice: 'Resist',
			Force: 'Resist',
			Light: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, who ruled Iga and Ise during the Heian Period.\nBy suppressing its aura, thereby preventing others from sensing its presence, it can effectively ambush its enemies. Oni have been said to act as liaisons between humans and gods, and the Fudoki holds many records of such exchanges in this region.',
		origin: 'Japanese'
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
			Phys: 'Resist',
			Elec: 'Weak',
			Light: 'Weak',
			Sleep: 'Weak',
			Confusion: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A common demon in Japanese mythology. This terrifying and powerful creature is known to raid human villages for food, riches, and women.\nIt is characterized by red skin, horns on its head, long claws, and sharp fangs.',
		origin: 'Japanese'
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
			Fire: 'Resist',
			Ice: 'Weak',
			Force: 'Weak',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A Japanese monster that takes the form of a bird with the face of a man. It produces a sickening chirp and spits a wicked flame.\nIts true identity is a corpse that hasn\'t had a proper memorial service, and it is said to appear before monks who neglect their duties.',
		origin: 'Japanese'
	},
	{
		name: 'Onyankopon',
		affinities: {
			skillPotential: {
				Phys: -2,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Ailment: -2,
				Recovery: 2,
				Support: 4
			},
			inherit: null
		},
		arcana: null,
		race: 'Enigma',
		level: 50,
		hp: 273,
		mp: 238,
		stats: {
			st: 22,
			vi: 41,
			ma: 48,
			ag: 31,
			lu: 38
		},
		learnset: [
			{
				name: 'King of Tales',
				level: 0
			},
			{
				name: 'Donum Magici',
				level: 0
			},
			{
				name: 'Diamrita',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 51
			},
			{
				name: 'Donum Gladi',
				level: 52
			},
			{
				name: 'Mediarama',
				level: 53
			}
		],
		resistances: {
			Phys: 'Weak',
			Fire: 'Null',
			Elec: 'Null',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A sky god of the Ashanti people and other tribes in West Africa. One of the aliases of the supreme god Nyame, said to mean "the all-knowing and all-seeing."\nThe god of spiders who created all things, he is said to be the god who imparts joy and motivation to live, and the one people look to in times of hardship. At first, he lived near humans, but when they struck the roots of a yam with a pestle, he migrated to the sky. Although far removed from humans, he is not considered unapproachable.',
		origin: 'African'
	},
	{
		name: 'Orcus',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: -5,
				Force: 2,
				Light: 0,
				Dark: 3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Reaper',
		level: 50,
		hp: 501,
		mp: 275,
		stats: {
			st: 70,
			dx: 46,
			ma: 78,
			ag: 31,
			lu: 62
		},
		learnset: [
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'War Cry',
				level: 51
			},
			{
				name: 'Tetrakarn',
				level: 52
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Weak',
			Ice: 'Resist',
			Elec: 'Weak',
			Force: 'Null',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: null,
		lore: 'A death demon of Etruscan lore.\nA terrifying portrait of this demon was painted on the walls of the tombs of the Etruscans. He was later given the same status as the Roman Pluto and Dis Pater, rulers of the underworld.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Oread',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Fairy',
		level: 13,
		hp: 104,
		mp: 138,
		stats: {
			st: 17,
			dx: 19,
			ma: 23,
			ag: 16,
			lu: 22
		},
		learnset: [
			{
				name: 'Zanma',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Patra',
				level: 0
			},
			{
				name: 'Force Pleroma',
				level: 14
			},
			{
				name: 'Trafuri',
				level: 16
			}
		],
		resistances: {
			Fire: 'Weak',
			Force: 'Resist',
			Light: 'Resist',
			Dark: 'Resist',
			Confusion: 'Resist',
			Poison: 'Resist'
		},
		game: 'smt4',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman'
	},
	{
		name: 'Orias',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 2,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 1,
				Almighty: 0,
				Recovery: 1,
				Ailment: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Fallen',
		level: 38,
		hp: 329,
		mp: 121,
		stats: {
			st: 47,
			dx: 44,
			ma: 46,
			ag: 49,
			lu: 39
		},
		learnset: [
			{
				name: 'Pandemic Bomb',
				level: 0
			},
			{
				name: 'Maragion',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 40
			},
			{
				name: 'Attack Knowhow',
				level: 41
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Sick: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the Goetia.\nHe rides a horse and has the head of a lion and the tail of a snake, with the vipers held in both hands as well. He is knowledgeable in astrology, can transform a man into any form, has the power to turn a foe into a friend, and can give people new titles.',
		origin: 'Abrahamic'
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
			Phys: 'Resist',
			Gun: 'Resist',
			Light: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A metal mentioned in ancient Greek literature. Some accounts say it was merely brass, but other stories suggest it was, in fact, a legendary material.',
		origin: 'Greco-Roman'
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
				name: 'Makouga',
				level: 0
			},
			{
				name: 'Maeiga',
				level: 0
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Resist',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A diamond stolen from a Hindu temple that is said to drive its owner to their death. It was cut into smaller pieces in an attempt to break the curse.',
		origin: 'Hindu'
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
			Fire: 'Null',
			Ice: 'Weak',
			Dark: 'Resist',
			Confusion: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of 72 demons in Solomon\'s Goetia.\nHe is said to appear as a human with a head of a horse. He answers all questions conerning past, present and future and is both liked and respected by sorcerers. According to legend, he was often summoned by sorcerers seeking to see through lies or predict the future.',
		origin: 'Abrahamic'
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
			Elec: 'Weak',
			Light: 'Resist',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. A poet skilled with the lyre. He tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface.',
		origin: 'Greco-Roman',
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
			Elec: 'Weak',
			Light: 'Resist',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. A poet skilled with the lyre. He tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface.',
		origin: 'Greco-Roman',
		user: 'P3 Protagonist',
		stage: 1,
		evoSkillName: null
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
			Elec: 'Weak',
			Light: 'Resist',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. A Greek poet who tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Orpheus Picaro F',
		aliases: [
			'F Orpheus Picaro',
			'Orpheus F Picaro'
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
			Elec: 'Weak',
			Light: 'Resist',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. A Greek poet who tried to retrieve his wife from Hades, but she vanished when he looked back before reaching the surface.',
		origin: 'Greco-Roman'
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
			Phys: 'Resist',
			Gun: 'Resist',
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Wind: 'Resist',
			Psy: 'Resist',
			Nuke: 'Resist',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'p3',
		alignment: null,
		lore: 'By bonding with many people, Orpheus was once again born from the sea of the soul. He has awakened to the power of Cipher, which holds endless possibilities.',
		origin: 'Greco-Roman',
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
			Fire: 'Null',
			Ice: 'Weak',
			Dark: 'Resist',
			Poison: 'Weak',
			Confusion: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'The two-headed dog who protected the Titan Geryon\'s red cattle in Greek lore.\nDespite his skill as a guard, Hercules killed him in one blow while performing one of his 12 great labors.',
		origin: 'Greco-Roman'
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
			Fire: 'Weak',
			Ice: 'Null',
			Dark: 'Null',
			Charm: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the 72 demons of the "Ars Goetia."\nAppearing as half-man and half-beast, it is said that he can change his form according to the desires of the one who summons him, though not for very long.',
		origin: 'Abrahamic'
	},
	{
		name: 'Osiris',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -2,
				Dark: 4,
				Almighty: 0,
				Recovery: -3,
				Ailment: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 53,
		hp: 494,
		mp: 258,
		stats: {
			st: 64,
			dx: 56,
			ma: 72,
			ag: 67,
			lu: 61
		},
		learnset: [
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Dark Pleroma',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 54
			}
		],
		resistances: {
			Phys: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'God of the dead in Egyptian lore. His consort is Isis, and his son is Horus. He was the god of vegetation, and once ruled Egypt after the sun god Ra, but was murdered by his brother Seth.\nThanks to Isis\' work, he was resurrected from the dead and became king of the underworld. He was not feared, but rather worshipped as a god who brings eternal happiness in the afterlife.',
		origin: 'Egyptian'
	},
	{
		name: 'Oumitsunu',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Chariot',
		race: 'Kunitsu',
		level: 65,
		hp: 659,
		mp: 244,
		stats: {
			st: 97,
			dx: 61,
			ma: 44,
			ag: 65,
			lu: 75
		},
		learnset: [
			{
				name: 'Berserker God',
				level: 0
			},
			{
				name: 'Life Surge',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 66
			},
			{
				name: 'Titanomachia',
				level: 67
			}
		],
		resistances: {
			Elec: 'Drain',
			Force: 'Weak'
		},
		game: 'smt4',
		alignment: null,
		lore: 'The giant of the Izumo-no-kuni Fudoki, or the Records of Izumo.\nPerformed the Kuni-biki, roping in land from the opposing Silla, in an effort to expand Izumo. All over Japan, there are stories of how Daidarabocchi giants shaped the land. Oumitsunu is thought to be the roof of theses tales.',
		origin: 'Japanese'
	},
	{
		name: 'Ouroboros',
		affinities: {
			skillPotential: {
				Phys: -4,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 0,
				Almighty: 2,
				Recovery: 1,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Snake',
		level: 47,
		hp: 392,
		mp: 179,
		stats: {
			st: 57,
			dx: 53,
			ma: 52,
			ag: 55,
			lu: 48
		},
		learnset: [
			{
				name: 'Megido',
				level: 0
			},
			{
				name: 'Spring of Life',
				level: 0
			},
			{
				name: 'Recarm',
				level: 48
			},
			{
				name: 'Makakaja',
				level: 50
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Light: 'Weak',
			Dark: 'Weak',
			Seal: 'Null',
			Confusion: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A dragon that signifies eternity. In biting its own tail, it forms a neverending circle.\nIn alchemy, the art of Hermes, it is considered an important material to create the Philosopher\'s Stone. Some of Ouroboros\' aspects are similar to those of Oceanus in Greek lore and the Biblical Leviathan.',
		origin: 'Greco-Roman'
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
			Fire: 'Weak',
			Ice: 'Resist',
			Elec: 'Resist',
			Dark: 'Null',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'One of the Kunitsukami\'s in Japanese mythology. He is the grandfather of Susano-o\'s wife, Kushinada-Hime.\nHe is known as the god of the mountains but is also considered to be the god of water and rice fields because he ruled over water sources and harvests.',
		origin: 'Japanese'
	},
	{
		name: 'Pabilsag',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 2,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: 'Phys'
		},
		arcana: 'Emperor',
		race: 'Holy',
		level: 24,
		hp: 255,
		mp: 97,
		stats: {
			st: 26,
			dx: 41,
			ma: 22,
			ag: 32,
			lu: 28
		},
		learnset: [
			{
				name: 'Tathlum Shot',
				level: 0
			},
			{
				name: 'Toxic Sting',
				level: 0
			},
			{
				name: 'Rapid Needle',
				level: 25
			}
		],
		resistances: {
			Gun: 'Resist',
			Elec: 'Weak',
			Force: 'Resist',
			Dark: 'Weak',
			Poison: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A guardian of the gate to paradise. This beast with a human head and a scorpion body appears in Mesopotamian lore.',
		origin: 'Mesopotamian'
	},
	{
		name: 'Pachacamac',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: -5,
				Force: 2,
				Light: 0,
				Dark: 2,
				Almighty: 0,
				Recovery: 0,
				Ailment: -2,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Vile',
		level: 47,
		hp: 314,
		mp: 260,
		stats: {
			st: 28,
			dx: 43,
			ma: 73,
			ag: 44,
			lu: 65
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
				name: 'Mamudoon',
				level: 48
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Weak',
			Force: 'Null',
			Dark: 'Null',
			Daze: 'Resist',
			Sick: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'The spirit of the earth and creator of mankind. He is also said to be considered a sea god to those living on the beach.\nHe gave life and energy to those born from the earth, but he also governed earthquakes.',
		origin: 'Incan'
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
			Fire: 'Weak',
			Ice: 'Null',
			Light: 'Resist',
			Dark: 'Resist',
			Sleep: 'Resist',
			Charm: 'Resist',
			Seal: 'Resist',
			Mirage: 'Null',
			Poison: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides upon a sickly pale horse and bears the name "Death." The embodiment of Hell itself follows behind him, eager to claim his victims. Fittingly, he has been given authority to mete out widespread death and disease.',
		origin: 'Abrahamic'
	},
	{
		name: 'Pales',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -5,
				Ice: 2,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 4,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Vile',
		level: 73,
		hp: 646,
		mp: 288,
		stats: {
			st: 107,
			dx: 65,
			ma: 60,
			ag: 102,
			lu: 91
		},
		learnset: [
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Pandemic Bomb',
				level: 0
			},
			{
				name: 'Beast Eye',
				level: 74
			},
			{
				name: 'Berserker God',
				level: 75
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Light: 'Resist',
			Dark: 'Drain',
			Bind: 'Weak',
			Seal: 'Null',
			Poison: 'Weak'
		},
		game: 'smt4',
		alignment: null,
		lore: 'A god or goddess with a donkey\'s head who was worshipped from northern Africa all the way to Rome.\nThe donkey\'s head has long been a sigh of fertility and is often worshipped.\nHis or her (there is some dispute amongst scholars) temple was built on Palatine Hill in Rome. The word "palace" came from this god\'s name.',
		origin: 'Greco-Roman'
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
			Phys: 'Resist',
			Elec: 'Weak',
			Dark: 'Null'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman',
		user: 'Aigis',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Pallas Athena',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 1,
				Dark: -3,
				Almighty: 1,
				Recovery: 1,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: 'Justice',
		race: 'Megami',
		level: 51,
		hp: 544,
		mp: 224,
		stats: { st: 79, dx: 49, ma: 36, ag: 67, lu: 75 },
		learnset: [
			{
				name: 'Makarakarn',
				level: 0
			},
			{
				name: 'Mortal Jihad',
				level: 0
			},
			{
				name: 'Holy Wrath',
				level: 52
			},
			{
				name: 'Chakra Walk',
				level: 53
			}
		],
		resistances: {
			Gun: 'Null',
			Light: 'Null',
			Dark: 'Weak',
			Charm: 'Weak',
			Daze: 'Resist',
			Confusion: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The virgin war goddess who sprung from Zeus\' forehead fully armored after he swallowed her mother, Metis. She is the patron goddess of Athens and is associated with olive trees.',
		origin: 'Greco-Roman'
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
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'The first woman created by the Greek gods, made to punish mankind\'s hubris. She opens a forbidden vessel (said to be a jar or a box) and unleashes evil into the world, but also reveals Hope, to ensure humanity is not crushed by despair.',
		origin: 'Greco-Roman',
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
			Fire: 'Weak',
			Ice: 'Resist',
			Light: 'Resist',
			Confusion: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'This beautiful goddess of love is one of Shiva\'s wives in Hindu mythology.\nShe won Shiva\'s love despite the fact that he was an ascetic.',
		origin: 'Hindu'
	},
	{
		name: 'Patrimpas',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 1,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Recovery: 4,
				Ailment: -1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Dragon',
		level: 20,
		hp: 163,
		mp: 137,
		stats: {
			st: 17,
			dx: 22,
			ma: 36,
			ag: 29,
			lu: 24
		},
		learnset: [
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Tetraja',
				level: 21
			},
			{
				name: 'Recarm',
				level: 22
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Force: 'Resist',
			Dark: 'Weak',
			Daze: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The god of land, harvest, water, and the sea. One of the three main gods of Lithuanian lore, usually depicted as a young man wearing a crown made of wheat. It is said that he is the provider of all things necessary to live. This may be because he is the god of water which brings life to most things.',
		origin: 'European'
	},
	{
		name: 'Patriot',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 2,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 2,
				Almighty: 0,
				Recovery: -5,
				Ailment: 2,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Undead',
		level: 45,
		hp: 416,
		mp: 156,
		stats: {
			st: 44,
			dx: 71,
			ma: 37,
			ag: 54,
			lu: 47
		},
		learnset: [
			{
				name: 'Taunt',
				level: 0
			},
			{
				name: 'Cough',
				level: 0
			},
			{
				name: 'Tathlum Shot',
				level: 0
			},
			{
				name: 'Madness Needle',
				level: 46
			},
			{
				name: 'Resist Phys',
				level: 47
			}
		],
		resistances: {
			Gun: 'Resist',
			Fire: 'Weak',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A fearful nationalist who fights for his ideology even after death.\nThey are dead people who believe in a unipolar system where the world is led by their own country. The ideologies they carried into death still burn brightly, and they are all the more dangerous with no sense of reason or restraint left.',
		origin: 'Universal'
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
			Ice: 'Weak',
			Force: 'Resist',
			Dark: 'Null',
			Confusion: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A demon from Sumerian civilization, he governs the southwestern wind.\nHe has the face of a lion, the body of a human, the wings of a bird, the talons of an eagle, the tail of a scorpion and a curved horn protruding from his forehead. It is said that the wind he blew from the Persian Gulf spread disease throughout the land.',
		origin: 'Mesopotamian'
	},
	{
		name: 'Peallaidh',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: -3,
				Ice: 1,
				Elec: 0,
				Force: 0,
				Light: -2,
				Dark: 0,
				Almighty: 0,
				Ailment: 3,
				Recovery: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Wilder',
		level: 8,
		hp: 63,
		mp: 83,
		stats: {
			st: 6,
			vi: 12,
			ma: 11,
			ag: 7,
			lu: 9
		},
		learnset: [
			{
				name: 'Bufu',
				level: 0
			},
			{
				name: 'Mudo',
				level: 0
			},
			{
				name: 'Pulinpa',
				level: 9
			},
			{
				name: 'Entangling Tendrils',
				level: 10
			},
			{
				name: 'Rakukaja',
				level: 11
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A half-human, half-beast Scottish fairy. Said to prefer to live near water, such as rivers, lakes, and shores.\nA kind of spirit called "ùruisg," it is described as a hairy human male figure with the upper body of a man, the legs of a deer and the hooves of a goat. When lonely, they are said to run after travelers and others all night in search of human companionship. Although basically harmless, they are said to be the most malevolent of the ùruisg fairies and dangerous to approach.',
		origin: 'European'
	},
	{
		name: 'Pele',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 2,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Sun',
		race: 'Lady',
		level: 7,
		hp: 105,
		mp: 82,
		stats: {
			st: 10,
			dx: 11,
			ma: 20,
			ag: 11,
			lu: 15
		},
		learnset: [
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 0
			},
			{
				name: 'Hard Worker',
				level: 8
			},
			{
				name: 'Healing Knowhow',
				level: 9
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The Hawaiian volcano goddess. When angered, she sends lava over the people. It was she who dug the opening of Kilauea and rules the deities there. It is said she warns islanders of pending eruptions.',
		origin: 'Hawaiian'
	},
	{
		name: 'Pendragon',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: -4,
				Fire: -2,
				Ice: 3,
				Elec: 2,
				Force: -2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Snake',
		level: 66,
		hp: 710,
		mp: 192,
		stats: {
			st: 100,
			dx: 62,
			ma: 45,
			ag: 66,
			lu: 76
		},
		learnset: [
			{
				name: 'Titanomachia',
				level: 0
			},
			{
				name: 'Acid Breath',
				level: 0
			},
			{
				name: 'Charge',
				level: 67
			},
			{
				name: 'Dragon Eye',
				level: 69
			}
		],
		resistances: {
			Gun: 'Weak',
			Ice: 'Repel',
			Elec: 'Null',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'The king of dragons from Arthurian lore. Its name means both "dragon\'s head" and "head dragon."\nWhen Arthur\'s father Uther fought the Saxons, two comets like fire soared across the sky. To commemorate this, he called himself Uther Pendragon, a name which Arthur inherited. Thus, a Pendragon is thought to be the symbol of a king\'s ultimate authority. Its figure can be seen in places such as the emblem on the shields of British knights.',
		origin: 'European'
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
			Fire: 'Weak',
			Ice: 'Resist'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman',
		user: 'Mitsuru Kirijo',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Peri',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 2,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: -5,
				Almighty: 0,
				Recovery: 4,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Nymph',
		level: 62,
		hp: 517,
		mp: 261,
		stats: {
			st: 63,
			dx: 65,
			ma: 81,
			ag: 66,
			lu: 77
		},
		learnset: [
			{
				name: 'Diarahan',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Chakra Walk',
				level: 63
			},
			{
				name: 'Mediarama',
				level: 64
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak',
			Light: 'Null',
			Dark: 'Weak',
			Charm: 'Resist',
			Confusion: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A fairy or spirit of Persian lore with white, dove-like wings. They are often drawn as beautiful maidens.\nThey eat fragrant scents such as musk, and when their blood dries, it is said to form a gem. They are skilled magicians and can do feats such as transform, fly, and prophesy. They often help heroes with their magic, sometimes even becoming their wives.',
		origin: 'Arabian'
	},
	{
		name: 'Persephone',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -2,
				Ice: 2,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 2,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Reaper',
		level: 57,
		hp: 370,
		mp: 306,
		stats: {
			st: 39,
			dx: 51,
			ma: 87,
			ag: 53,
			lu: 69
		},
		learnset: [
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Death\'s Door',
				level: 0
			},
			{
				name: 'Mamudoon',
				level: 58
			}
		],
		resistances: {
			Ice: 'Null',
			Elec: 'Weak',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'The goddess who became Hades\'s wife in Greek lore. She is said to have the power to bring fertility to the earth. While playing with the Oceanids, the earth cracked and Hades appeared to take her away to the underworld. Without her, the earth grew barren, but she was able to return for several months of each year, bringing stability back while she was free.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Phantom',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Foul',
		level: 42,
		hp: 336,
		mp: 177,
		stats: {
			st: 9,
			ma: 17,
			vi: 14,
			ag: 15,
			lu: 7
		},
		learnset: [
			{
				name: 'Spirit Drain',
				level: 0
			},
			{
				name: 'Self-destruct',
				level: 0
			},
			{
				name: 'Null Freeze',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 43
			},
			{
				name: 'Kamikaze',
				level: 44
			},
			{
				name: 'Tarunda',
				level: 45
			},
			{
				name: 'Dekaja',
				level: 46
			},
			{
				name: 'Ziodyne',
				level: 47
			}
		],
		resistances: {
			Phys: 'Resist',
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt3',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A common type of ghost seen in Western cultures. They are apparitions made up of the negative emotions of people.',
		origin: 'Universal'
	},
	{
		name: 'Phoenix',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 4,
				Ice: -4,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Avian',
		level: 24,
		hp: 250,
		mp: 138,
		stats: {
			st: 28,
			dx: 28,
			ma: 24,
			ag: 39,
			lu: 40
		},
		learnset: [
			{
				name: 'Fire Breath',
				level: 0
			},
			{
				name: 'Recarm',
				level: 0
			},
			{
				name: 'Light Mana Aid',
				level: 25
			},
			{
				name: 'Fire Pleroma',
				level: 26
			}
		],
		resistances: {
			Gun: 'Weak',
			Fire: 'Resist',
			Ice: 'Weak',
			Light: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The famous holy Egyptian bird that\'s born from fire.\nThe Phoenix is a crimson-colored bird the size of an eagle with a colorful tail. After about 500 years, it throws itself into a pyre and is reborn from the ashes as a chick.',
		origin: 'Egyptian'
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
			Fire: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A type of demon in Hindu mythology that arises from the vices of men such as criminals, drunkards and adulterers.\nKnown to feast on the flesh of corpses, it is said that it can possess a human by entering through their mouth, where it will plague them until it is driven away through magic or medicine. It is also said that anyone who looks upon one directly is guaranteed to die within nine months.',
		origin: 'Hindu'
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
			Light: 'Resist',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A set of mysterious objects Sophia uses in battle to mimic the powers of Persona-users. Though they function similarly to Personas, their inner workings are completely unknown. It\'s name is derived from the Greek word for "jar."',
		origin: 'Greco-Roman',
		user: 'Sophia',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Pixie',
		affinities: {
			skillPotential: {
				Phys: -2,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 1,
				Light: 0,
				Dark: -1,
				Almighty: 0,
				Ailment: 1,
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
			Force: 'Resist',
			Dark: 'Weak',
			Confusion: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Small fairies found in southwestern Britain known for their cheerful nature and love of pranks.\nTheir physical appearance changes from region to region, but their personality is always playful and mischievous. A common prank they like to pull is causing humans to wander in circles. However, they are also known to help farmers from time to time and are generally considered good fairies.',
		origin: 'European'
	},
	{
		name: 'Plasma',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Fiend',
		level: 28,
		hp: 175,
		mp: 184,
		stats: {
			st: 30,
			dx: 33,
			ma: 42,
			ag: 28,
			lu: 39
		},
		learnset: [
			{
				name: 'Plasma Discharge',
				level: 0
			},
			{
				name: 'Fog Breath',
				level: 29
			},
			{
				name: 'Megidoplasma',
				level: 31
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Resist',
			Ice: 'Weak',
			Elec: 'Drain',
			Poison: 'Resist',
			Sick: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: null,
		origin: 'North American'
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
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A mischievous spirit known for haunting houses. The name is German in origin, and literally means "noisy ghost."\nIt can do various things, from pulling harmless pranks like making loud noises and moving objects through the air, to dangerous, destructive acts, like starting fires and assaulting people. Poltergeist incidents often occur in homes with children or teenagers, and one theory states that the cause is a child\'s unstable mentality.',
		origin: 'European'
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
			Ice: 'Weak',
			Elec: 'Resist'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman',
		user: 'Akihiko Sanada',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Porewit',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 3,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: -1
			},
			inherit: null
		},
		arcana: null,
		race: 'Wilder',
		level: 7,
		hp: 112,
		mp: 53,
		stats: {
			st: 15,
			dx: 14,
			ma: 11,
			ag: 14,
			lu: 11
		},
		learnset: [
			{
				name: 'Agi',
				level: 0
			},
			{
				name: 'Lunge',
				level: 8
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A beast that breathes fire, causing havoc in towns and in the mountains. Fires with unknown causes are said to be this creature\'s work.\nWhen fires occur out of nowhere today, they are written off as spontaneous combustions, but in older times they were said to be caused by the anger of the Porewit. Whenever a fire like that occurred, the people would immediately go to Porewit\'s altar and sacrifice cows and sheep. They must never laugh about it, for if they did, the fire would spread to their houses as well.',
		origin: 'Japanese'
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
			Elec: 'Resist',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'The sixth of the nine order of angels. Their name carries the meaning of "power of God."\nAs their duty is to protect the souls of humans, they are constantly on patrol to guard against demon attacks.',
		origin: 'Abrahamic'
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
			Fire: 'Weak',
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Known as "gaki" in Japanese, they are ghoulish demons of Buddhist lore.\nGreedy humans cast into the preta realm become these. Their hunger is unrelenting and their suffering continues until they are reincarnated.',
		origin: 'Japanese'
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
			Light: 'Null',
			Dark: 'Weak',
			Seal: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'The seventh of the nine orders of angels.\nThey are charged with overseeing the welfare of countries and civilizations.',
		origin: 'Abrahamic'
	},
	{
		name: 'Prometheus',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 5,
				Ice: -7,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: -1,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Deity',
		level: 40,
		hp: 425,
		mp: 228,
		stats: {
			st: 54,
			dx: 38,
			ma: 66,
			ag: 27,
			lu: 51
		},
		learnset: [
			{
				name: 'Maragion',
				level: 0
			},
			{
				name: 'Recarmdra',
				level: 0
			},
			{
				name: 'Fire Breath',
				level: 0
			},
			{
				name: 'Fire Pleroma',
				level: 41
			},
			{
				name: 'Workaholic',
				level: 43
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak',
			Light: 'Resist',
			Bind: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A Titan of Greek lore. He was very intelligent; his name means "forethought."\nHe stole fire from Zeus and gave it to mankind. Zeus chained him to a rock as punishment and set an eagle to eat his liver every day. He was kept there until freed by Hercules.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Prometheus - P5',
		aliases: [
			'Prometheus'
		],
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
		resistances: {},
		game: 'p5',
		alignment: null,
		lore: 'The Greek Titan created mankind from clay. He later stole fire from Olympus and, in turn, gave it to mankind against Zeus\'s will. His name is often synonymous with fire and "divine knowledge."',
		origin: 'Greco-Roman',
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
		resistances: {},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman',
		user: 'Metis',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Pulukishi',
		aliases: [
			'Purski'
		],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Yoma',
		level: 48,
		hp: 390,
		mp: 189,
		stats: {
			st: 19,
			ma: 15,
			vi: 17,
			ag: 9,
			lu: 12
		},
		learnset: [
			{
				name: 'Bind Voice',
				level: 0
			},
			{
				name: 'Growth 3',
				level: 0
			},
			{
				name: 'Scout',
				level: 0
			},
			{
				name: 'Stasis Blade',
				level: 49
			},
			{
				name: 'Panic Voice',
				level: 50
			},
			{
				name: 'Force Boost',
				level: 51
			},
			{
				name: 'Chaos Blade',
				level: 52
			},
			{
				name: 'Mazandyne',
				level: 53
			}
		],
		resistances: {
			Elec: 'Weak',
			Force: 'Null',
			Light: 'Null'
		},
		game: 'smt3',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'In Hindu mythology, he is a god with an elephant\'s head and a third eye on his forehead. Although his looks suggest Ganesha\'s influence, he is thought to have originally been a local god of Tibet.',
		origin: 'Hindu'
	},
	{
		name: 'Python',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 3,
				Force: -5,
				Light: -3,
				Dark: 3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 4,
				Support: 1
			},
			inherit: null
		},
		arcana: 'Strength',
		race: 'Drake',
		level: 70,
		hp: 566,
		mp: 288,
		stats: {
			st: 59,
			dx: 59,
			ma: 85,
			ag: 98,
			lu: 79
		},
		learnset: [
			{
				name: 'Mamudoon',
				level: 0
			},
			{
				name: 'Fog Breath',
				level: 0
			},
			{
				name: 'Pandemic Bomb',
				level: 71
			},
			{
				name: 'Maziodyne',
				level: 72
			}
		],
		resistances: {
			Ice: 'Null',
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Weak',
			Bind: 'Null',
			Daze: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A gigantic, black snake god born from the Greek goddess Gaea with no father.\nHe has unparalleled prophetic abilities and has protected oracular shrines since days of old. He is said to have been the guardian of Delphi, site of Delphic oracles. He is sometimes called "the king of the deceitful spirits" and gave prophecies that would only be in his favor, but he never gave prophecies that went against Gaea\'s will.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Qing Long',
		aliases: [
			'Long',
			'Seiryu',
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
			Ice: 'Resist',
			Elec: 'Weak',
			Force: 'Null',
			Sleep: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the east, the season of spring, and the element of wood. It is the noblest of the Ssu-Ling and dwells in a palace at the bottom of the ocean. In Feng Shui, placing water to the east is known to guide its power, and is said to bring good fortune.',
		origin: 'Chinese'
	},
	{
		name: 'Qing Niugai',
		aliases: [
			'Qing Niuguai'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Recovery: 0,
				Ailment: -2,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Holy',
		level: 29,
		hp: 390,
		mp: 98,
		stats: {
			st: 48,
			dx: 29,
			ma: 21,
			ag: 29,
			lu: 37
		},
		learnset: [
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Megaton Press',
				level: 0
			},
			{
				name: 'Life Gain',
				level: 30
			},
			{
				name: 'Silent Prayer',
				level: 32
			}
		],
		resistances: {
			Phys: 'Resist',
			Elec: 'Resist',
			Force: 'Weak',
			Dark: 'Weak',
			Daze: 'Weak',
			Confusion: 'Null',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The immortal cow of Tai Shang Lao Jun that descended to earth and caused many disasters.\nWhen Tai Shang Lao Jun was away, he posed as the emperor and ruled the kingdom, but when the real emperor was found, he rampaged and caused many deaths. Thanks to Xuan Nu and Xu Jia, Tai Shang Lao Jun\'s pupil, Qing Niuguai was brought back to his master.',
		origin: 'Chinese'
	},
	{
		name: 'Queen Medb',
		aliases: [
			'Queen Mab'
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
			Elec: 'Weak',
			Force: 'Null',
			Poison: 'Weak',
			Sleep: 'Resist',
			Charm: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'The queen of fairies in Celtic mythology.\nSome say she was the inspiration for William Shakespeare\'s Queen Mab, leading many to conclude that she and the fairy queen Titania, Oberon\'s wife, are one and the same. She was known to give mead mixed with her blood to her many consorts.',
		origin: 'Celtic'
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
			Phys: 'Resist',
			Gun: 'Resist',
			Psy: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'The diamond necklace that Jeanne de la Motte swindled from jewelers in 1785 by claiming it was on behalf of the Queen of France, Marie Antoinette.',
		origin: 'European'
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
			Fire: 'Null',
			Elec: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'An Aztec creator deity known as the Feathered Serpent.\nHe is identified as the sun and is also known as the god of wind and giver of breath. He is said to have created humans by sprinkling blood on the bones of people from a previously created world, and acts as guardian of their fertility and culture. According to legend, the planet Venus is actually Quetzalcoatl\'s heart.',
		origin: 'South American'
	},
	{
		name: 'Quicksilver',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 3,
				Force: -4,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Spirit',
		level: 25,
		hp: 227,
		mp: 121,
		stats: {
			st: 29,
			dx: 29,
			ma: 24,
			ag: 40,
			lu: 36
		},
		learnset: [
			{
				name: 'Mazio',
				level: 0
			},
			{
				name: 'Shockbound',
				level: 26
			}
		],
		resistances: {
			Gun: 'Resist',
			Elec: 'Resist',
			Force: 'Weak',
			Light: 'Weak',
			Bind: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Female poltergeists that like to pull pranks. They break furniture and throw things around, as well as write the letter Q on windows and mirrors with soap or lipstick.\nThey are easily bored, not staying in the same place for very long. In general, they are not dangerous spirits.',
		origin: 'European'
	},
	{
		name: 'Raidou Kuzunoha the XIV',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: '???',
		level: 80,
		hp: 612,
		mp: 306,
		stats: {
			st: 25,
			ma: 22,
			vi: 22,
			ag: 25,
			lu: 16
		},
		learnset: [
			{
				name: 'Boogie-Woogie',
				level: 0
			},
			{
				name: 'Enter Yoshitsune',
				level: 0
			},
			{
				name: 'Mishaguji Raiden',
				level: 0
			},
			{
				name: 'Hitokoto Storm',
				level: 0
			},
			{
				name: 'Raptor Guardian',
				level: 0
			},
			{
				name: 'Provoke',
				level: 0
			},
			{
				name: 'Endure',
				level: 0
			},
			{
				name: 'Arbitration',
				level: 0
			},
			{
				name: 'Mokoi Boomerang',
				level: 81
			},
			{
				name: 'Tekisatsu',
				level: 82
			},
			{
				name: 'Raidou the Eternal',
				level: 83
			},
			{
				name: 'Jiraiya Dance',
				level: 84
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Light: 'Null',
			Dark: 'Null',
			Confusion: 'Null',
			Sleep: 'Null',
			Charm: 'Null',
			Stun: 'Null',
			Bind: 'Null',
			Poison: 'Null',
			Seal: 'Null'
		},
		game: 'smt3',
		alignment: {
			major: 'Unknown',
			minor: 'Neutral'
		},
		lore: 'To the public, he is merely a detective for the Narumi Detective Agency. To the underworld, he is Raidou Kuzunoha the XIV, a Devil Summoner who protects the capital under the Herald of Yatagarasu\'s orders. His partner is a black cat named Gouto.',
		origin: 'ATLUS Original'
	},
	{
		name: 'Raijuu',
		aliases: [
			'Raiju'
		],
		affinities: {
			skillPotential: {
				Phys: 1,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 1,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Tower',
		race: 'Wilder',
		level: 33,
		hp: 280,
		mp: 149,
		stats: {
			st: 36,
			dx: 36,
			ma: 30,
			ag: 50,
			lu: 45
		},
		learnset: [
			{
				name: 'Shockbound',
				level: 0
			},
			{
				name: 'Binding Claw',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 34
			},
			{
				name: 'Endure',
				level: 35
			}
		],
		resistances: {
			Gun: 'Resist',
			Elec: 'Resist',
			Force: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A beast of Japanese lore, said to come down to Earth on a bolt of lightning.\nIt usually runs through thunder clouds, but will also ride bolts of lightning down to the ground.',
		origin: 'Japanese'
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
			Ice: 'Weak',
			Light: 'Resist',
			Dark: 'Resist',
			Sleep: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'Evil spirits that battle the gods in Hindu lore. They also attack humans.\nTheir hideous appearance symbolizes their evil nature, but they can also change shape to fool humans.',
		origin: 'Hindu'
	},
	{
		name: 'Rama',
		affinities: {
			skillPotential: {
				Phys: 4,
				Gun: 0,
				Fire: 0,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: -2,
				Dark: -2,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Famed',
		level: 74,
		hp: 698,
		mp: 212,
		stats: {
			st: 111,
			dx: 69,
			ma: 50,
			ag: 73,
			lu: 84
		},
		learnset: [
			{
				name: 'Luster Candy',
				level: 0
			},
			{
				name: 'Hades Blast',
				level: 0
			},
			{
				name: 'Cold World',
				level: 75
			},
			{
				name: 'Megidolaon',
				level: 76
			}
		],
		resistances: {
			Fire: 'Null'
		},
		game: 'smt4',
		alignment: null,
		lore: 'A prince of Kosala and the seventh avatar of Vishnu. He is the protagonist of the epic poem, the Ramayana.in the story he shows great valor saving his wife and killing the evil demon Ravana. His serious but earnest demeanor made him a popular hero in India.',
		origin: 'Hindu'
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
		hp: 297,
		mp: 328,
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
			Phys: 'Repel',
			Fire: 'Weak',
			Elec: 'Weak',
			Light: 'Weak',
			Sleep: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A wicked witch and the symbol of evil in Balinese Hinduism. When women who used magic held a grudge or went down the path of evil, they became this dreadful creature.\nShe spreads plagues, causes natural disasters, curses people, and even uses evil spirits to do her bidding. The holy beast Barong that symbolizes good is her eternal rival. Even if defeated, she will come back to life, and their battle will have no end.',
		origin: 'Balinese'
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
				name: 'Eigaon',
				level: 0
			},
			{
				name: 'Ali Dance',
				level: 0
			},
			{
				name: 'Maeigaon',
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
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: null,
		lore: 'Another alias of Maurice Leblanc\'s hero, Arsène Lupin. Infamous as a phantom thief, he was also known to be a man of many friends, lovers, and treasured allies.',
		origin: 'Modern Fiction',
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
			Fire: 'Weak',
			Elec: 'Resist',
			Force: 'Null',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'One of the four major angels. His name means "healer."\nHe explains the history of the fallen angels and the creation of Adam and Eve.',
		origin: 'Abrahamic'
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
			Ice: 'Weak',
			Elec: 'Repel',
			Force: 'Drain',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides a red horse and carries a greatsword. It is said that he has the power to destroy peace and make men slay one another.',
		origin: 'Abrahamic'
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
				name: 'Makouha',
				level: 0
			},
			{
				name: 'Maeiha',
				level: 0
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Resist',
			Nuke: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A bluish-tinged diamond that Napoleon Bonaparte had mounted to the pommel of his sword. It was named after the French Regent Philippe II, Duke of Orleans, who had purchased it in 1717.',
		origin: 'European'
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
				name: 'Kouga',
				level: 0
			},
			{
				name: 'Eiga',
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
				name: 'Kougaon',
				level: 47
			},
			{
				name: 'Eigaon',
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
			Light: 'Resist',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A noble thief that made waves in England during the Middle Ages. He is an expert archer and leader of the Merry Men, outlaws of justice who made Sherwood Forest their home.',
		origin: 'European',
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
			Elec: 'Null',
			Wind: 'Weak'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Buddhist',
		user: 'Kanji Tatsumi',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Rukh',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 4,
				Fire: -3,
				Ice: 0,
				Elec: 1,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Flight',
		level: 47,
		hp: 532,
		mp: 162,
		stats: {
			st: 46,
			dx: 85,
			ma: 38,
			ag: 56,
			lu: 48
		},
		learnset: [
			{
				name: 'Grand Tack',
				level: 0
			},
			{
				name: 'Zandyne',
				level: 0
			},
			{
				name: 'Charge',
				level: 0
			},
			{
				name: 'Nihil Claw',
				level: 48
			}
		],
		resistances: {
			Gun: 'Resist',
			Fire: 'Weak',
			Force: 'Resist',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A giant bird of Arabian lore. Also known as the Roc.\nIn "One Thousand and One Nights," one appeared in Sinbad\'s journeys. It dwells on an island in the Indian Ocean and is known to grow large enough to carry an elephant and drop it from the sky to smash it to edible pieces.',
		origin: 'Arabian'
	},
	{
		name: 'Sakahagi',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Foul',
		level: 45,
		hp: 360,
		mp: 186,
		stats: {
			st: 17,
			ma: 17,
			vi: 15,
			ag: 15,
			lu: 11
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
				name: 'Mazionga',
				level: 0
			},
			{
				name: 'Mazanma',
				level: 0
			},
			{
				name: 'Panic Voice',
				level: 0
			},
			{
				name: 'War Cry',
				level: 0
			},
			{
				name: 'Null Force',
				level: 46
			},
			{
				name: 'Null Elec',
				level: 47
			}
		],
		resistances: {
			Light: 'Null',
			Dark: 'Null',
			Confusion: 'Null',
			Sleep: 'Null',
			Charm: 'Null',
			Stun: 'Null',
			Bind: 'Null',
			Poison: 'Null',
			Seal: 'Null'
		},
		game: 'smt3',
		alignment: null,
		lore: 'An evil Manikin that was reborn, called back into the world by the Afterlife Bell. Because of his doings in the previous life, he has gained new powers.',
		origin: 'ATLUS Original'
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
			Ice: 'Resist',
			Wind: 'Weak'
		},
		game: 'p5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'One of the four great aspects of Shinto thought, it brings great bounty from the hunt.\nIt is said to aid in love, profit, and growth, and can even create new paths.',
		origin: 'Japanese'
	},
	{
		name: 'Salamander',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 5,
				Ice: -7,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Element',
		level: 36,
		hp: 345,
		mp: 164,
		stats: {
			st: 49,
			dx: 42,
			ma: 49,
			ag: 42,
			lu: 42
		},
		learnset: [
			{
				name: 'High Fire Pleroma',
				level: 0
			},
			{
				name: 'Panic Voice',
				level: 37
			},
			{
				name: 'Life Gain',
				level: 40
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'One of the four elemental spirits of Paracelsus, it is a fire spirit that looks like a lizard with black skin.\nThey live in volcanos and lava, and are said to radiate fire. They get their name from the amphibious salamander.',
		origin: 'European'
	},
	{
		name: 'Samael',
		affinities: {
			skillPotential: {
				Phys: -4,
				Fire: 0,
				Ice: -6,
				Elec: 0,
				Force: 0,
				Light: 4,
				Dark: 4,
				Almighty: 2,
				Ailment: 7,
				Recovery: 2,
				Support: 0
			},
			inherit: 'Dark'
		},
		arcana: 'Death',
		race: 'Drake',
		level: 88,
		hp: 572,
		mp: 435,
		stats: {
			st: 48,
			vi: 70,
			ma: 85,
			ag: 55,
			lu: 57
		},
		learnset: [
			{
				name: 'Hamabarion',
				level: 0
			},
			{
				name: 'Deicidal Poison',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 0
			},
			{
				name: 'Poison Master',
				level: 0
			},
			{
				name: 'Mamudobarion',
				level: 89
			},
			{
				name: 'Megidolaon',
				level: 90
			},
			{
				name: 'Mediarahan',
				level: 91
			}
		],
		resistances: {
			Ice: 'Weak',
			Light: 'Repel',
			Dark: 'Repel',
			Poison: 'Null',
			Mirage: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'An enigmatic angel whose name bears the unusual meaning "poison of God" and who is commonly depicted as a winged serpent.\nThough an angel, he is often referred to as the leader of daemons. It\'s been suggested that he\'s a fallen angel, but several descriptions in the Bible and other sources refute this.',
		origin: 'Abrahamic'
	},
	{
		name: 'Samyaza',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: -3,
				Elec: 5,
				Force: 5,
				Light: 0,
				Dark: 2,
				Almighty: 1,
				Recovery: 0,
				Ailment: 4,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Tyrant',
		level: 76,
		hp: 476,
		mp: 392,
		stats: {
			st: 51,
			dx: 67,
			ma: 114,
			ag: 75,
			lu: 90
		},
		learnset: [
			{
				name: 'Ziobarion',
				level: 0
			},
			{
				name: 'Zanbarion',
				level: 0
			},
			{
				name: 'Elec Pleroma',
				level: 77
			},
			{
				name: 'Force Pleroma',
				level: 78
			},
			{
				name: 'Magic Torrent',
				level: 79
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Weak',
			Elec: 'Null',
			Force: 'Null',
			Dark: 'Null',
			Seal: 'Null'
		},
		game: 'smt4',
		alignment: null,
		lore: 'A fallen angel found in the Book of Enoch, where he gave a human knowledge of God.\nThe Grigori, a group of angels which descended upon the earth to watch humans, instead began to lust for women. Because of that, God marked them with the stigmata of fallen angels. They also taught humans warfare, which angered God and caused him to send the Great Flood. Samyaza is a leader of the Grigori.',
		origin: 'Abrahamic'
	},
	{
		name: 'Sanat',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Chaos',
		level: 96,
		hp: 995,
		mp: 155,
		stats: {
			st: 127,
			dx: 112,
			ma: 88,
			ag: 102,
			lu: 83
		},
		learnset: [
			{
				name: 'Gaea Rage',
				level: 0
			},
			{
				name: 'Deadly Fury',
				level: 0
			},
			{
				name: 'Dark Energy',
				level: 98
			},
			{
				name: 'Phys Pierce',
				level: 99
			}
		],
		resistances: {
			Phys: 'Null',
			Gun: 'Weak',
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Resist',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: null,
		lore: null,
		origin: 'Hindu'
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
			Phys: 'Null',
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The twin brother of Metatron.\nAn influential angel in Jewish mythology, he governs the songs of heaven, and his colossal size has led many to believe that it would take a human being 500 years to reach his head.',
		origin: 'Abrahamic'
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
			Elec: 'Weak',
			Force: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A fairy from rural Germany rumored to put people to sleep using the magic sand he carried in his bag.\nIf a victim resisted, he would sit on their eyelids to force them to sleep. It has even been said that "naughty children" who refused to go to sleep would be punished by having their eyes scooped out and taken away, though this is speculated to be a fabrication thought up by German mothers.',
		origin: 'European'
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
			Fire: 'Weak',
			Ice: 'Null',
			Dark: 'Weak',
			Confusion: 'Resist',
			Charm: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The consort of Brahma in Hindu lore.\nShe embodies the river and her name means "one who flows." She is also the goddess of music and art and is said to be skilled in every artistic or creative pursuit known to man.',
		origin: 'Hindu'
	},
	{
		name: 'Sarutahiko',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Jirae',
		level: 35,
		hp: 312,
		mp: 126,
		stats: {
			st: 18,
			ma: 7,
			vi: 17,
			ag: 7,
			lu: 6
		},
		learnset: [
			{
				name: 'Scratch Dance',
				level: 0
			},
			{
				name: 'Lightoma',
				level: 0
			},
			{
				name: 'Haggle',
				level: 36
			},
			{
				name: 'Petradi',
				level: 37
			},
			{
				name: 'Counter',
				level: 38
			},
			{
				name: 'Charge',
				level: 39
			},
			{
				name: 'Hell Thrust',
				level: 40
			}
		],
		resistances: {
			Light: 'Null',
			Dark: 'Null',
			Stun: 'Weak',
			Bind: 'Weak'
		},
		game: 'smt3',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'During the descent of the gods to the earth, he was the first to welcome them. Later, he married Ame-no-Uzume.',
		origin: 'Japanese'
	},
	{
		name: 'Satan',
		affinities: {
			skillPotential: {
				Phys: 6,
				Fire: 6,
				Ice: 3,
				Elec: 3,
				Force: 3,
				Light: 0,
				Dark: 0,
				Almighty: 7,
				Ailment: -5,
				Recovery: -2,
				Support: 2
			},
			inherit: 'Ice'
		},
		arcana: 'Judgement',
		race: 'Primal',
		level: 99,
		hp: 700,
		mp: 550,
		stats: {
			st: 103,
			vi: 72,
			ma: 103,
			ag: 61,
			lu: 70
		},
		learnset: [
			{
				name: 'Megido Ark',
				level: 0
			},
			{
				name: 'Akashic Arts',
				level: 0
			},
			{
				name: 'Trisagion',
				level: 0
			},
			{
				name: 'High Almighty Pleroma',
				level: 0
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Drain',
			Light: 'Drain',
			Dark: 'Drain'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A Judeo-Christian angel of darkness with a name that means "adversary."\nAlso known as the evil serpent that tempted Adam and Eve in the Garden of Eden. In the Book of Job, he is depicted as a servant of God who tests Job, a man of faith, and is said to be the accuser angel sent from the heavens to judge mankind.',
		origin: 'Abrahamic'
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
				name: 'Maeigaon',
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
			Phys: 'Resist',
			Gun: 'Resist',
			Fire: 'Resist',
			Ice: 'Resist',
			Elec: 'Resist',
			Wind: 'Resist',
			Psy: 'Resist',
			Nuke: 'Resist',
			Light: 'Null',
			Dark: 'Drain'
		},
		game: 'p5',
		alignment: null,
		lore: 'An archangel who is said to be the form of Satan before he fell from Heaven. The second son of God, he rebelled against Him for freedom and bestowed free will and chaos upon humanity.',
		origin: 'Abrahamic',
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
			Fire: 'Null',
			Ice: 'Weak'
		},
		game: 'p4',
		alignment: {
			major: 'Unknown',
			minor: 'Law'
		},
		lore: 'Shiva\'s first consort in Hindu myth, she threw herself into a sacrifical fire in protest of her father\'s treatment of Shiva. Reborn as Parvati, she was reunited with Shiva.',
		origin: 'Hindu'
	},
	{
		name: 'Saturnus',
		affinities: {
			skillPotential: {
				Phys: 4,
				Fire: 5,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: -2,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Fire'
		},
		arcana: 'Star',
		race: 'Vile',
		level: 88,
		hp: 588,
		mp: 389,
		stats: {
			st: 85,
			vi: 65,
			ma: 60,
			ag: 52,
			lu: 48
		},
		learnset: [
			{
				name: 'Ragnarok',
				level: 0
			},
			{
				name: 'Eat Whole',
				level: 0
			},
			{
				name: 'Maragibarion',
				level: 0
			},
			{
				name: 'Madness Nails',
				level: 89
			},
			{
				name: 'Trisagion',
				level: 90
			},
			{
				name: 'High Fire Pleroma',
				level: 91
			}
		],
		resistances: {
			Fire: 'Drain',
			Ice: 'Weak',
			Light: 'Null',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A fertility god of Roman mythology, associated with the primordial earth. He is commonly identified with the Greek god Cronus. Often referred to as "Black Sun" by Chaldean astronomers, linked to the low position of the sun around the time of the winter solstice. Also knwon as the "Night Sun" and also the "King of Death" living in the depths of the underworld. It is said that people prayed to Saturnus, the winter sun, to call for a new spring, and that custom became what we now know as Christmas.',
		origin: 'Greco-Roman'
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
			Elec: 'Weak',
			Force: 'Null',
			Light: 'Resist',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The war goddess of Celtic lore as well as the queen of the Land of Shadows.\nShe is a skilled magician and a master warrior who trains the many young men who come to her in the art of war. The famed Cu Chulainn was one of her students and it is said that he received the legendary Gae Bolg from her upon mastering her teachings.',
		origin: 'Celtic'
	},
	{
		name: 'Sedna',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 2,
				Almighty: 0,
				Recovery: 3,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Lady',
		level: 27,
		hp: 353,
		mp: 93,
		stats: {
			st: 45,
			dx: 29,
			ma: 21,
			ag: 30,
			lu: 45
		},
		learnset: [
			{
				name: 'Mabufula',
				level: 0
			},
			{
				name: 'Mamudo',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 28
			},
			{
				name: 'Diarama',
				level: 29
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The Inuit goddess of the sea. She watches over her children, the fishes and seals. She is a terrifying one-eyed goddess and lives in a house made of stone and whale bones. However, only shamans can see it.',
		origin: 'North American'
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
			Fire: 'Resist',
			Elec: 'Null',
			Wind: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'A title Sun Wukong had given himself. Born from a rock, he wreaked havoc and was punished by Buddha who imprisoned him under a mountain. Eventually, he was saved by a monk named Xuanzang.',
		origin: 'Buddhist',
		user: 'Ryuji Sakamoto',
		stage: 2,
		evoSkillName: 'Evade Wind'
	},
	{
		name: 'Senri',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: -2,
				Ailment: 2,
				Recovery: 2,
				Support: 0
			},
			inherit: 'Recovery'
		},
		arcana: 'Empress',
		race: 'Holy',
		level: 43,
		hp: 203,
		mp: 210,
		stats: {
			st: 31,
			vi: 22,
			ma: 33,
			ag: 30,
			lu: 35
		},
		learnset: [
			{
				name: 'Sexy Dance',
				level: 0
			},
			{
				name: 'Diamrita',
				level: 0
			},
			{
				name: 'Wind Dracostrike',
				level: 0
			},
			{
				name: 'Mazanma',
				level: 44
			},
			{
				name: 'Acrobat Kick',
				level: 45
			},
			{
				name: 'Force Pleroma',
				level: 46
			}
		],
		resistances: {
			Elec: 'Weak',
			Force: 'Resist',
			Light: 'Null',
			Charm: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A yokai said to be born from the incarnation of a long-lived wildcat. It disguises itself as a beautiful woman and collects vitality from human men.\nIt is said to be the highest rank possible for a beast\'s demonic incarnation, similar to nekomata. Some believe all beast-demons gather spirits in the hopes of becoming a Senri themselves.',
		origin: 'Chinese'
	},
	{
		name: 'Seraph',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 4,
				Fire: 6,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Recovery: 3,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Justice',
		race: 'Herald',
		level: 94,
		hp: 827,
		mp: 475,
		stats: {
			st: 62,
			dx: 111,
			ma: 139,
			ag: 91,
			lu: 110
		},
		learnset: [
			{
				name: 'Riot Gun',
				level: 0
			},
			{
				name: 'Trisagion',
				level: 0
			},
			{
				name: 'Repel Elec',
				level: 95
			},
			{
				name: 'Salvation',
				level: 96
			},
			{
				name: 'High Gun Pleroma',
				level: 97
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Resist',
			Fire: 'Drain',
			Ice: 'Weak',
			Light: 'Drain',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The highest rank of all angels, it is the being closest to God.\nHumans can rarely detect their presence, but they are said to have four heads and six wings. They also appear in human form.',
		origin: 'Abrahamic'
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
			Elec: 'Weak',
			Force: 'Null',
			Dark: 'Weak',
			Confusion: 'Weak',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A brave young man in Celtic myth.\nAfter defeating a fierce guard dog, he volunteered to take its place, thus earning himself "Culann\'s Hound" as his nickname.',
		origin: 'Celtic'
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
			Ice: 'Weak',
			Elec: 'Null',
			Light: 'Resist',
			Dark: 'Resist',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'The Egyptian god of the desert, chaos and evil.\nHe murdered his brother, Osiris, and tried to become chief god, but he was castrated by Osiris\' son, Horus.',
		origin: 'Egyptian'
	},
	{
		name: 'Shadow',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Foul',
		level: 52,
		hp: 420,
		mp: 216,
		stats: {
			st: 10,
			ma: 20,
			vi: 18,
			ag: 16,
			lu: 8
		},
		learnset: [
			{
				name: 'Resist Phys',
				level: 0
			},
			{
				name: 'Mudoon',
				level: 0
			},
			{
				name: 'Null Freeze',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 53
			},
			{
				name: 'Spirit Drain',
				level: 54
			},
			{
				name: 'Makakaja',
				level: 55
			},
			{
				name: 'Tarukaja',
				level: 56
			},
			{
				name: 'Rakukaja',
				level: 57
			},
			{
				name: 'Sukukaja',
				level: 58
			}
		],
		resistances: {
			Phys: 'Resist',
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt3',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'It can transform into any person it sees. It is said that whomsoever meets it will die within a few days, and much folklore stems from this creature. They may also become physical incarnations of psychological ailments.',
		origin: 'Universal'
	},
	{
		name: 'Shan Xiao',
		affinities: {
			skillPotential: {
				Phys: 1,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Wood',
		level: 11,
		hp: 133,
		mp: 73,
		stats: {
			st: 16,
			dx: 16,
			ma: 14,
			ag: 22,
			lu: 20
		},
		learnset: [
			{
				name: 'Binding Claw',
				level: 0
			},
			{
				name: 'Bouncing Claw',
				level: 12
			},
			{
				name: 'Poison Claw',
				level: 13
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Confusion: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A tree spirit living in the mountains of China. They are also believed to be demons that attack humans.\nIt is very tall and has a face the color of a gourd, with large teeth growing out of a giant mouth. Some legends say it is one-legged. It is also said to be powerful, with a grip that can punch holes in doors.',
		origin: 'Chinese'
	},
	{
		name: 'Shax',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: -2,
				Ice: 3,
				Elec: -5,
				Force: 5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 2,
				Support: 1
			},
			inherit: null
		},
		arcana: 'Hanged',
		race: 'Fallen',
		level: 74,
		hp: 515,
		mp: 395,
		stats: {
			st: 71,
			dx: 65,
			ma: 97,
			ag: 85,
			lu: 86
		},
		learnset: [
			{
				name: 'Bufudyne',
				level: 0
			},
			{
				name: 'Mazandyne',
				level: 0
			},
			{
				name: 'Makajamaon',
				level: 75
			},
			{
				name: 'Will of Wind',
				level: 77
			}
		],
		resistances: {
			Gun: 'Weak',
			Ice: 'Null',
			Elec: 'Weak',
			Force: 'Repel',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: null,
		lore: 'One of the 72 demons of the Goetia. He is the great marquis of hell and controls 30 legions of demons. He appears as a stork with a raspy voice and is a liar, but will speak the truth when in a magic triangle. He can take away the use of people\'s eyes, ears or mouth, and is adept at finding hidden treasure, likely because he is fond of stealing treasure to take back to Hell.',
		origin: 'Abrahamic'
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
			Fire: 'Weak',
			Elec: 'Resist',
			Force: 'Resist',
			Charm: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A holy beast said to protect houses from evil and grant them fortune.\nThough it may look similar to Shinto guardian dogs, it is actually modeled after a lion. There are many stories about it in Ryukyu lore.',
		origin: 'Japanese'
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
				name: 'Makajama',
				level: 30
			},
			{
				name: 'Mahama',
				level: 31
			},
			{
				name: 'Riberama',
				level: 32
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Weak',
			Force: 'Weak',
			Light: 'Resist',
			Dark: 'Resist',
			Confusion: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A powerful creature often summoned by Japanese sorcerers called onmyoji.\nThey are used both to hurt and to heal, but their true nature is said to be very violent.',
		origin: 'Japanese'
	},
	{
		name: 'Shikigami',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Brute',
		level: 4,
		hp: 48,
		mp: 27,
		stats: {
			st: 5,
			ma: 5,
			vi: 4,
			ag: 5,
			lu: 5
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Beseech',
				level: 0
			},
			{
				name: 'Tarunda',
				level: 5
			},
			{
				name: 'Sukunda',
				level: 6
			},
			{
				name: 'Anti-Curse',
				level: 7
			},
			{
				name: 'Tarukaja',
				level: 8
			}
		],
		resistances: {
			Fire: 'Weak',
			Elec: 'Repel'
		},
		game: 'smt3',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A common demon often used by Japanese sorcerers called onmyoji. They are used for many things, from common household chores to cursing others.',
		origin: 'Japanese'
	},
	{
		name: 'Shikome',
		aliases: [
			'Yomotsu-Shikome'
		],
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 3,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 1,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Fool',
		race: 'Femme',
		level: 23,
		hp: 247,
		mp: 93,
		stats: {
			st: 26,
			dx: 40,
			ma: 22,
			ag: 31,
			lu: 27
		},
		learnset: [
			{
				name: 'Stun Needles',
				level: 0
			},
			{
				name: 'Rapid Needle',
				level: 24
			},
			{
				name: 'Tarunda',
				level: 25
			}
		],
		resistances: {
			Gun: 'Resist',
			Fire: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Poison: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'In Japanese lore, they are hideous demonesses of Yomi, the land of the dead, and serve the gods there.\nIzanagi came down to Yomi to take back his dead wife Izanami, but when he saw her ugly form, he tried to escape from her. Enraged, Izanami sent the Shikome after him. Each Shikome commanded an army of Yomosu Ikusa. As he ran, Izanagi threw his hair and comb to the ground. His hair became grapes and his comb bamboo sprouts. The Shikome forgot their duty and started eating them.',
		origin: 'Japanese'
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
			Phys: 'Resist',
			Fire: 'Drain',
			Ice: 'Weak',
			Elec: 'Drain',
			Light: 'Resist',
			Dark: 'Resist',
			Mirage: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The great god who governs the destruction and creation of the world. He is the most worshipped god in Hinduism alongside Vishnu.\nIt is said that he purifies the world through destruction only to rebuild it anew, and though he casts terrifying destruction against the demons, he also blesses his followers. Shiva has been depicted in many ways, but the most common is for him to have four hands, one face and three eyes. He wields a trishula, or trident, and his third eye is said to emit a ray of light that destroys all it touches.',
		origin: 'Hindu'
	},
	{
		name: 'Shiwanna',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -5,
				Ice: 2,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Yoma',
		level: 38,
		hp: 329,
		mp: 131,
		stats: {
			st: 44,
			dx: 42,
			ma: 47,
			ag: 48,
			lu: 43
		},
		learnset: [
			{
				name: 'Pandemic Bomb',
				level: 0
			},
			{
				name: 'Purple Smoke',
				level: 0
			},
			{
				name: 'Fog Breath',
				level: 39
			},
			{
				name: 'Spring of Life',
				level: 40
			}
		],
		resistances: {
			Gun: 'Resist',
			Fire: 'Weak',
			Ice: 'Null',
			Dark: 'Weak',
			Daze: 'Resist',
			Confusion: 'Resist',
			Sick: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'Spirits that are found in Native American Pueblo folklore. Their name means "cloud people."\nIt is said that humans become cloud people when they die. They are also said to live in mountains below lakes and oceans.',
		origin: 'Puebloan'
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
		hp: 338,
		mp: 213,
		stats: {
			st: 59,
			vi: 41,
			ma: 30,
			ag: 47,
			lu: 33
		},
		learnset: [
			{
				name: 'Brave Blade',
				level: 0
			},
			{
				name: 'Titanomachia',
				level: 0
			},
			{
				name: 'Mist Rush',
				level: 0
			},
			{
				name: 'Mighty Cleave',
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
			Phys: 'Drain',
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Weak',
			Seal: 'Weak',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The name of the hero in the epic German poem, the Nibelungenlied, often seen as the same as Sigurd of Norse folklore.\nHe was married to Kriemhild, the princess of Burgundy, and is said to have become wrapped up in a feud between her and Brunhilde of Austrasia, resulting in many attempts on his life. The dragon Fafnir\'s blood made him invincible, but a single leaf on his back resulted in a weak spot, which was later exploited by the treacherous Hagen.',
		origin: 'Norse'
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
			Fire: 'Weak',
			Ice: 'Null',
			Confusion: 'Weak',
			Charm: 'Resist',
			Sleep: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A house fairy of England and Scotland.\nA welcome spirit, she carries out household chores while everyone sleeps. It is said you can hear her silk skirts rustle as she works. However, she is not without a dangerous side, and will kill anyone who tries to cause harm to the family she protects.',
		origin: 'European'
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
			Fire: 'Weak',
			Ice: 'Resist',
			Dark: 'Null',
			Seal: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A giantess called the "snowshoe goddess," she is the embodiment of winter.\nAccording to legend, all gods will return to her at the end of Ragnarok.',
		origin: 'Norse'
	},
	{
		name: 'Skogsra',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Wood',
		level: 31,
		hp: 224,
		mp: 188,
		stats: {
			st: 24,
			dx: 29,
			ma: 51,
			ag: 39,
			lu: 38
		},
		learnset: [
			{
				name: 'Rakunda',
				level: 0
			},
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Scratch Dance',
				level: 32
			}
		],
		resistances: {
			Gun: 'Resist',
			Fire: 'Weak',
			Force: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'Beautiful wood faeries of Swedish folklore. They are said to resemble beautiful women from the front, but their backs are covered in bark. They are known to blow on huntsmen\'s rifles to bless them, as well as protect campfires while travelers sleep. They yearn for the company of a man, but those who see their backs flee in terror.',
		origin: 'European'
	},
	{
		name: 'Sleipnir',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 0,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Holy',
		level: 55,
		hp: 506,
		mp: 285,
		stats: {
			st: 51,
			dx: 54,
			ma: 75,
			ag: 79,
			lu: 83
		},
		learnset: [
			{
				name: 'Me Patra',
				level: 0
			},
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'Samarecarm',
				level: 56
			},
			{
				name: 'Dekunda',
				level: 58
			}
		],
		resistances: {
			Gun: 'Weak',
			Fire: 'Weak',
			Light: 'Resist',
			Seal: 'Resist',
			Confusion: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'Odin\'s eight-legged horse of Norse lore. Its father was Svadilfari and its mother was Loki, in the guise of a female horse. It is also used as a symbol of the gallows.',
		origin: 'Norse'
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
			Fire: 'Weak',
			Ice: 'Weak',
			Elec: 'Weak',
			Force: 'Weak',
			Light: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A gel-like monster. It is said to be the byproduct of a failed summoning.\nDevoid of its original powers, it is trapped in an incomplete gel form. There are several theories of when the slime first was recorded as a monster. They tend to collect shiny objects.',
		origin: 'ATLUS Original'
	},
	{
		name: 'Sphinx',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 3,
				Fire: 0,
				Ice: -5,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: -5,
				Almighty: 0,
				Recovery: 4,
				Ailment: -2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Holy',
		level: 71,
		hp: 548,
		mp: 400,
		stats: {
			st: 48,
			dx: 63,
			ma: 107,
			ag: 70,
			lu: 85
		},
		learnset: [
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'Grand Tack',
				level: 72
			},
			{
				name: 'Mediarahan',
				level: 73
			}
		],
		resistances: {
			Gun: 'Drain',
			Fire: 'Null',
			Ice: 'Weak',
			Light: 'Repel',
			Dark: 'Weak',
			Charm: 'Resist',
			Seal: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A beast from Greek lore with the head and breasts of a woman, but the body of a lion and feathered wings.\nThe goddess Hera sent her to Thebes, where she asked a riddle of those attempting to pass. Oedipus answered correctly and she threw herself off the cliff, killing herself. In Egyptian lore, she was a statue related to the sun god. One Sphinx had the head of a pharaoh.',
		origin: 'Greco-Roman'
	},
	{
		name: 'Spriggan',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: -1,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -5,
				Dark: -3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Fairy',
		level: 14,
		hp: 304,
		mp: 50,
		stats: {
			st: 29,
			dx: 17,
			ma: 8,
			ag: 15,
			lu: 21
		},
		learnset: [
			{
				name: 'Dormina',
				level: 0
			},
			{
				name: 'Oni-Kagura',
				level: 0
			},
			{
				name: 'Magaon',
				level: 15
			},
			{
				name: 'Light Life Aid',
				level: 16
			},
			{
				name: 'Resist Light',
				level: 17
			}
		],
		resistances: {
			Phys: 'Resist',
			Elec: 'Resist',
			Light: 'Weak',
			Dark: 'Weak',
			Bind: 'Weak',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'An ugly faerie said to have lived in the Cornwall region.\nThey are found around ancient ruins guarding treasure and other faeries. They are commonly small, but can grow to large sizes. According to folklore, they are the spirits of giants killed long ago.',
		origin: 'European'
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
			Ice: 'Resist',
			Elec: 'Resist',
			Force: 'Weak',
			Light: 'Drain'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'In Zoroastrian lore, Sraosha\'s duty is to listen to humanity\'s cry for Ahura Mazda.\nIt is also known to descend after sunset to vanquish evil, and its name literally means "observance."',
		origin: 'Zoroastrian'
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
				name: 'Kouga',
				level: 0
			},
			{
				name: 'Eiga',
				level: 0
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Resist',
			Fire: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'Also known as the Stone of Destiny, it is a stone used in the coronations of Scotland\'s monarchs. Legends say the stone is linked to angels.',
		origin: 'European'
	},
	{
		name: 'Stonka',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: -2,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -1,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Beast',
		level: 26,
		hp: 233,
		mp: 125,
		stats: {
			st: 30,
			dx: 30,
			ma: 25,
			ag: 41,
			lu: 37
		},
		learnset: [
			{
				name: 'Tarunda',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Oni-Kagura',
				level: 27
			},
			{
				name: 'Counter',
				level: 28
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Resist',
			Force: 'Weak',
			Charm: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A one-eyed bull that caused chaos around the Balkans.\nWith a cry like thunder and speed like lightning, it would run through ranches, ramming and killing any cow or horse in its way. Its skin was made of bronze and could deflect arrows with ease. It was also very cautious, never getting close to a human when it spotted one, and could sense traps with its magic. It was finally killed by a man with a golden sword.',
		origin: 'Japanese'
	},
	{
		name: 'Strigoii',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 1,
				Almighty: 0,
				Recovery: -1,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Haunt',
		level: 6,
		hp: 81,
		mp: 55,
		stats: {
			st: 12,
			dx: 12,
			ma: 10,
			ag: 15,
			lu: 14
		},
		learnset: [
			{
				name: 'Life Drain',
				level: 0
			},
			{
				name: 'Poison Claw',
				level: 0
			},
			{
				name: 'Mudo',
				level: 8
			}
		],
		resistances: {
			Gun: 'Weak',
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A common vampire found in Romania that are also called "dead vampires." They commonly have red hair, blue eyes, and two hearts.\nThose who commit suicide, witches, criminals, and perjurers make good Strigoii after death.',
		origin: 'European'
	},
	{
		name: 'Strix',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: 1,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Femme',
		level: 17,
		hp: 182,
		mp: 85,
		stats: {
			st: 27,
			dx: 28,
			ma: 25,
			ag: 22,
			lu: 13
		},
		learnset: [
			{
				name: 'Life Drain',
				level: 0
			},
			{
				name: 'Mabufu',
				level: 0
			},
			{
				name: 'Bouncing Claw',
				level: 18
			},
			{
				name: 'Tarunda',
				level: 19
			}
		],
		resistances: {
			Gun: 'Weak',
			Ice: 'Resist',
			Elec: 'Weak',
			Dark: 'Resist',
			Sleep: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Witches that transform into birds at night and drink the blood of children. During the day they look like normal human women.\nTheir name comes from the Roman word for owl. The Romans believed that owls sucked the blood of infants, and eventually the story evolved into that of the witches.',
		origin: 'Greco-Roman'
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
			Fire: 'Resist',
			Ice: 'Null',
			Light: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A female demon in popular European folklore during the medieval ages.\nThey are known to visit men in their sleep and have sex with them. And though they appear beautiful in the dream, in reality, they are ugly, old hags.',
		origin: 'European'
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
			Fire: 'Weak',
			Ice: 'Weak',
			Force: 'Null',
			Sleep: 'Weak',
			Confusion: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Earth spirits in Japanese mythology. They are born from ancient trees and boulders.\nThey are not evil but will transform into humans or monsters to warn people not to infiltrate their mountains.',
		origin: 'Japanese'
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
			Fire: 'Weak',
			Ice: 'Null',
			Seal: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'One of the four oni controlled by Fujiwara no Chikata, it can cause floods with the swing of its arms. In the Taiheiki, Ki no Tomoo expelled the oni by reading a Japanese poem.',
		origin: 'Japanese'
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
			Ice: 'Null',
			Elec: 'Weak',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'One of the gods of Japanese lore. Son of Kamimusubi, he was so small he fell through her fingers at birth.\nThough he would normally be counted among the Amatsukami, he became blood-brothers with Okuninushi, and is now considered a Kunitsukami. After building Japan with Okuninushi, he is said to have returned to Tokoyo no Kuni, the land of eternity.',
		origin: 'Japanese'
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
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
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
			Fire: 'Drain',
			Ice: 'Weak',
			Elec: 'Null'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
		user: 'Yukiko Amagi',
		stage: 3,
		evoSkillName: 'Maragibarion'
	},
	{
		name: 'Suparna',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 1,
				Force: 0,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Recovery: 1,
				Ailment: 0,
				Support: 1
			},
			inherit: 'Wind'
		},
		arcana: 'Sun',
		race: 'Avian',
		level: 15,
		hp: 170,
		mp: 96,
		stats: {
			st: 22,
			dx: 24,
			ma: 17,
			ag: 27,
			lu: 24
		},
		learnset: [
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Diarama',
				level: 0
			},
			{
				name: 'Mazio',
				level: 16
			},
			{
				name: 'Spirit Drain',
				level: 17
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Resist',
			Light: 'Resist',
			Dark: 'Weak',
			Bind: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A legendary bird of Hindu mythology. Its name means "one with beautiful wings." It can create wind at will by flapping its wings, and can also change its size freely.',
		origin: 'Hindu'
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
			Fire: 'Drain',
			Ice: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A fire giant from Norse mythology.\nHe rules over Muspelheim, the realm of fire and brandishes a sword of fire called "Laevateinn". In Ragnarok, he will set the world ablaze.',
		origin: 'Norse'
	},
	{
		name: 'Susano-o',
		affinities: {
			skillPotential: {
				Phys: 6,
				Gun: 0,
				Fire: -3,
				Ice: -3,
				Elec: -3,
				Force: 5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -4,
				Ailment: -5,
				Support: 1
			},
			inherit: null
		},
		arcana: 'Fool',
		race: 'Fury',
		level: 84,
		hp: 870,
		mp: 200,
		stats: {
			st: 132,
			dx: 82,
			ma: 69,
			ag: 79,
			lu: 96
		},
		learnset: [
			{
				name: 'Deadly Wind',
				level: 0
			},
			{
				name: 'Mist Rush',
				level: 0
			},
			{
				name: 'Critical Aura',
				level: 85
			},
			{
				name: 'High Phys Pleroma',
				level: 86
			},
			{
				name: 'Drain Fire',
				level: 87
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Weak',
			Force: 'Drain',
			Daze: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A violent god of Japanese legend. He was one of three gods born from Izanagi. Originally banned from Takaamagahara for uncouth behavior, he later performed heroic deeds, such as slaying Yamata-no-Orochi, and became a great god of Ne-no-kuni.',
		origin: 'Japanese'
	},
	{
		name: 'Susano-o - P4',
		aliases: [
			'Susano-o'
		],
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
			Fire: 'Resist',
			Elec: 'Weak',
			Wind: 'Null'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
		user: 'Yosuke Hanamura',
		stage: 2,
		evoSkillName: null
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
			Fire: 'Weak',
			Ice: 'Null',
			Light: 'Resist'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
		user: 'Chie Satonaka',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Sylph',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: -5,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: 'Wind'
		},
		arcana: 'Temperance',
		race: 'Element',
		level: 28,
		hp: 267,
		mp: 161,
		stats: {
			st: 31,
			dx: 38,
			ma: 27,
			ag: 44,
			lu: 46
		},
		learnset: [
			{
				name: 'High Force Pleroma',
				level: 0
			},
			{
				name: 'Bind Voice',
				level: 29
			},
			{
				name: 'Mana Gain',
				level: 32
			}
		],
		resistances: {
			Elec: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A cheerful, mischief-loving spirit that governs air. Since belief in it dates back generations, many have tried to find a real Sylph.',
		origin: 'European'
	},
	{
		name: 'Take-Mikazuchi',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 4,
				Force: -5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Emperor',
		race: 'Amatsu',
		level: 55,
		hp: 608,
		mp: 214,
		stats: {
			st: 97,
			dx: 53,
			ma: 38,
			ag: 74,
			lu: 64
		},
		learnset: [
			{
				name: 'Estoma',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'Retaliate',
				level: 56
			},
			{
				name: 'Berserker God',
				level: 57
			}
		],
		resistances: {
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The Japanese god of war or thunder. He is a god who played an active role in the abdication of Japan.\nHe was born from the blood spattered on the sword that Izanagi used to behead the fire god Hi-no-kagutsuchi. He was sent to Okuninushi from Takaamagahara at the time of abdication, but since Okuninushi\'s son, Take-Minakata, didn\'t obey Take-Mikazuchi, they had a duel of strength, from which he emerged victorious.',
		origin: 'Japanese'
	},
	{
		name: 'Take-Mikazuchi - P4',
		aliases: [
			'Take-Mikazuchi'
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
			Elec: 'Resist',
			Wind: 'Weak'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
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
			Fire: 'Weak',
			Elec: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A Japanese god of war, hunting, and fertility.\nHe fought Take-Mikazuchi for control of Japan and lost. He escaped to Suwa but has been prohibited from leaving ever since.',
		origin: 'Japanese'
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
			Fire: 'Null',
			Elec: 'Weak',
			Wind: 'Drain'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		user: 'Yosuke Hanamura',
		origin: 'Japanese',
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
			Phys: 'Resist',
			Elec: 'Drain',
			Wind: 'Weak'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Buddhist',
		user: 'Kanji Tatsumi',
		stage: 3,
		evoSkillName: 'The Man\'s Way'
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
			Phys: 'Resist',
			Fire: 'Null',
			Wind: 'Resist',
			Light: 'Drain',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A fae knight of the Seelie Court, said to protect the forest of Carterhaugh. After being kidnapped by the faeries at the tender age of 9, he lived much of his life among them.',
		origin: 'European'
	},
	{
		name: 'Tangata Manu',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 1,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 2,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Flight',
		level: 22,
		hp: 239,
		mp: 90,
		stats: {
			st: 25,
			dx: 37,
			ma: 19,
			ag: 36,
			lu: 23
		},
		learnset: [
			{
				name: 'Makakaja',
				level: 0
			},
			{
				name: 'Dream Needle',
				level: 0
			},
			{
				name: 'Mazan',
				level: 23
			},
			{
				name: 'Force Pleroma',
				level: 24
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Weak',
			Force: 'Resist',
			Dark: 'Weak',
			Sick: 'Weak',
			Sleep: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'A bird-man revered on Easter Island. The leader of the tribe was also given the title of the same name. A competition is held to decide the tribe\'s leader, where one must swim to a nearby island and fetch a bird egg. The first to return is given the title of Tangata Manu ("bird man") and great authority.',
		origin: 'Polynesian'
	},
	{
		name: 'Tao',
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 5,
				Dark: -3,
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
				name: 'Samarecarm',
				level: 0
			},
			{
				name: 'Mahamaon',
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
				name: 'Mana Aid',
				level: 0
			},
			{
				name: 'Hamabarion',
				level: 62
			},
			{
				name: 'Null Dark',
				level: 64
			}
		],
		resistances: {
			Light: 'Null',
			Dark: 'Weak',
			Charm: 'Null',
			Confusion: 'Resist',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'Once cherished as the Saint of Bethel, Tao Isonokami was forced to watch helplessly as a close friend perished before her eyes. It was then that the voice of a higher being spoke unto her, awakening the goddess power within.\nEven after her divine transfiguration, she appears to have retained her memories. However, she has cast off her former personality, and no longer acts as she once did as a human.',
		origin: 'ATLUS Original'
	},
	{
		name: 'Taotie',
		aliases: [
			'Tao Tie'
		],
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: -3,
				Ice: -3,
				Elec: -3,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: 'Almighty'
		},
		arcana: 'Tower',
		race: 'Vile',
		level: 58,
		hp: 469,
		mp: 214,
		stats: {
			st: 64,
			dx: 68,
			ma: 64,
			ag: 63,
			lu: 61
		},
		learnset: [
			{
				name: 'Spirit Drain',
				level: 0
			},
			{
				name: 'Purple Smoke',
				level: 0
			},
			{
				name: 'Healing Knowhow',
				level: 59
			},
			{
				name: 'Endure',
				level: 62
			}
		],
		resistances: {
			Gun: 'Null',
			Fire: 'Weak',
			Ice: 'Weak',
			Elec: 'Weak',
			Force: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'One of the Si-xiong of ancient China. It has a human face on a sheep-like body, and sharp fangs. Its insatiable hunger causes it to eat until nothing remains.',
		origin: 'Chinese'
	},
	{
		name: 'Taowu',
		aliases: [
			'Taown'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 3,
				Force: -5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 2,
				Support: 0
			},
			inherit: 'Recovery'
		},
		arcana: 'Hanged',
		race: 'Wilder',
		level: 64,
		hp: 572,
		mp: 257,
		stats: {
			st: 79,
			dx: 64,
			ma: 77,
			ag: 91,
			lu: 81
		},
		learnset: [
			{
				name: 'Ziodyne',
				level: 0
			},
			{
				name: 'Eat Whole',
				level: 0
			},
			{
				name: 'Sukunda',
				level: 65
			},
			{
				name: 'Beast Eye',
				level: 66
			}
		],
		resistances: {
			Elec: 'Repel',
			Force: 'Weak',
			Bind: 'Null',
			Charm: 'Null',
			Daze: 'Weak',
			Seal: 'Weak',
			Poison: 'Null',
			Sick: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'One of the Si-xiong from the west side of China, it is believed to carry the blood of a great emperor. Its stubborn personality leads it to fight until it can no longer stand.',
		origin: 'Chinese'
	},
	{
		name: 'Taraka',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 2,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Hermit',
		race: 'Femme',
		level: 56,
		hp: 586,
		mp: 166,
		stats: {
			st: 83,
			dx: 54,
			ma: 39,
			ag: 63,
			lu: 69
		},
		learnset: [
			{
				name: 'Tetanus Cut',
				level: 0
			},
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 57
			},
			{
				name: 'Hades Blast',
				level: 58
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A female Rakshasa in Hindu myth. Also known as Takata.\nShe lived in a forest named after her and would wreak havoc, eating anyone who set foot in her forest. She was eventually killed by Rama.',
		origin: 'Hindu'
	},
	{
		name: 'Tattooed Man',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Foul',
		level: 27,
		hp: 303,
		mp: 93,
		stats: {
			st: 45,
			dx: 29,
			ma: 21,
			ag: 25,
			lu: 40
		},
		learnset: [
			{
				name: 'Taunt',
				level: 0
			},
			{
				name: 'Fatal Sword',
				level: 0
			},
			{
				name: 'Heat Wave',
				level: 28
			},
			{
				name: 'Counter',
				level: 29
			}
		],
		resistances: {
			Gun: 'Weak',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Japanese yakuza who have become demons.\nIt is said that the larger the tattoo inked on their back by master artists, the greater the caliber of the man. Normally, they prize the yakuza code of conduct, but those who have fallen this far have no regard for it.',
		origin: 'ATLUS Original'
	},
	{
		name: 'Tenkai',
		affinities: {
			skillPotential: {
				Phys: 5,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 3,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Famed',
		level: 77,
		hp: 482,
		mp: 398,
		stats: {
			st: 51,
			dx: 67,
			ma: 115,
			ag: 75,
			lu: 91
		},
		learnset: [
			{
				name: 'Mahamaon',
				level: 0
			},
			{
				name: 'Berserker God',
				level: 0
			},
			{
				name: 'Blood Ritual',
				level: 0
			},
			{
				name: 'Ally Retaliate',
				level: 78
			},
			{
				name: 'Imposing Stance',
				level: 79
			}
		],
		resistances: {
			Phys: 'Resist',
			Gun: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Unknown',
			minor: 'Neutral'
		},
		lore: 'A Tendai Buddhist monk of the Azuchi-Momoyama and early Edo periods. He was an adivsor to Tokugawa Ieyasu, serving as a liason between the Shogunate and the Imperial Court. After Ieyasu\'s death, he suggested that Ieyasu\'s posthumous title be Gongen instead of Myojin, since Toyotomi Hideyoshi\'s posthumous title was Myojin and Tenkai believed it to be unlucky, as Toyotomi\'s rule ended soon after Hideyoshi\'s death. And so Ieyasu became Tosho Daigongen. Tenkai served the following two Shogun, and under the third Shogun, Iemitsu, he established the temple Kan\'ei-ji. It is said that he also helped in city planning for Edo, incorporating feng shui into the plan.',
		origin: 'Japanese'
	},
	{
		name: 'Tezcatlipoca',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 5,
				Ice: -3,
				Elec: -3,
				Force: 4,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: 'Tower',
		race: 'Zealot',
		level: 82,
		hp: 460,
		mp: 410,
		stats: {
			st: 49,
			dx: 73,
			ma: 124,
			ag: 115,
			lu: 90
		},
		learnset: [
			{
				name: 'Trisagion',
				level: 0
			},
			{
				name: 'Mazandyne',
				level: 0
			},
			{
				name: 'Repel Force',
				level: 83
			},
			{
				name: 'Madness Nails',
				level: 84
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Weak',
			Elec: 'Resist',
			Force: 'Null',
			Confusion: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A fearsome creator god of Aztec lore. His name means "smoking mirror."\nA god of many things, including war, he was the first sun god before being struck down by Quetzalcoatl.',
		origin: 'Aztec'
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
				name: 'Maeigaon',
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
			Phys: 'Resist',
			Light: 'Weak',
			Dark: 'Repel'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. The Greek god of death, he is the son of Nyx and the twin brother of Hypnos. He is known to provide mortals with a peaceful death.',
		origin: 'Greco-Roman',
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
				name: 'Maeigaon',
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
			Phys: 'Resist',
			Light: 'Weak',
			Dark: 'Repel'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. The Greek god of death, he is the son of Nyx and the twin brother of Hypnos. He is known to provide mortals with a peaceful death.',
		origin: 'Greco-Roman'
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
			Fire: 'Resist',
			Elec: 'Drain',
			Force: 'Weak',
			Light: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The Norse god of thunder and fertility whose strength is incomparable.\nHe is a heroic and honest god worshipped mainly by farmers and is primarily known for defeating the giants. He wields Mjolnir, a hammer that returns to its owner after being thrown. He and the World Serpent, Jormungandr, are fated to kill each other at the end of Ragnarok.',
		origin: 'Norse'
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
			Fire: 'Null',
			Dark: 'Weak',
			Sleep: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'An almighty god of Egyptian lore with the head of a baboon. He stands opposite of Seth, the god of evil, and sides with Osiris and Isis, the gods of good.',
		origin: 'Egyptian'
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
			Fire: 'Null',
			Ice: 'Weak',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'The third of the nine orders of angels. Their Hebrew name, Ophan, carries the meaning of "wheel".\nThey are the highest ranking angels to carry a material body and are tasked with carrying the seat of God.',
		origin: 'Abrahamic'
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
			Elec: 'Null',
			Force: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A revered bird of Native American mythology said to live atop cloud-shrouded peaks.\nIt resembles an eagle, and its wingbeats create mighty thunderclaps. Some legends say its eyes can unleash lightning, and other accounts say it can carry an entire lake on its back or even swallow an entire whale whole.',
		origin: 'North American'
	},
	{
		name: 'Tiamat',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 2,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 1,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Drake',
		level: 55,
		hp: 359,
		mp: 296,
		stats: {
			st: 38,
			dx: 50,
			ma: 85,
			ag: 56,
			lu: 67
		},
		learnset: [
			{
				name: 'Ice Breath',
				level: 0
			},
			{
				name: 'Megidola',
				level: 0
			},
			{
				name: 'Chakra Walk',
				level: 56
			},
			{
				name: 'Silent Prayer',
				level: 57
			}
		],
		resistances: {
			Fire: 'Null',
			Ice: 'Null',
			Elec: 'Weak',
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Primordial goddess of Babylonian mythology. Often represented as a dragon with a female torso and a serpentine body, but some accounts describe her with the features of a goat or a camel.\nA being deified by the sea, she is said to have given birth to numerous gods with her husband Apsu, a giant freshwater god. When war with the gods eventually broke out, she created eleven monsters to fight, but was slain by Marduk, who fought on behalf of the other gods. When she died, her body was torn apart, half of her becoming heaven and the other half becoming earth. By this, her defeat became the foundation of the mortal world\'s creation.',
		origin: 'Mesopotamian'
	},
	{
		name: 'Titan',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -6,
				Support: 1
			},
			inherit: 'Elec'
		},
		arcana: 'Strength',
		race: 'Jirae',
		level: 37,
		hp: 387,
		mp: 119,
		stats: {
			st: 59,
			dx: 37,
			ma: 27,
			ag: 39,
			lu: 45
		},
		learnset: [
			{
				name: 'Critical Aura',
				level: 0
			},
			{
				name: 'Oni-Kagura',
				level: 0
			},
			{
				name: 'Power Punch',
				level: 39
			},
			{
				name: 'Retaliate',
				level: 40
			}
		],
		resistances: {
			Phys: 'Resist',
			Bind: 'Weak',
			Poison: 'Weak',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'The children of Gaia and Uranus in Greek myth. They ruled the land as gods before the Olympians overthrew them.',
		origin: 'Greco-Roman'
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
			Fire: 'Weak',
			Light: 'Null',
			Dark: 'Resist',
			Confusion: 'Resist',
			Mirage: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'The queen of the fairies and King Oberon\'s wife. She is based on the Roman goddess Diana and was later imagined as a fairy.\nShe is famously recognized as a queen in William Shakespeare\'s "A Midsummer Night\'s Dream."',
		origin: 'European'
	},
	{
		name: 'Tlaloc',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 2,
				Elec: 2,
				Force: -5,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Genma',
		level: 39,
		hp: 269,
		mp: 224,
		stats: {
			st: 29,
			dx: 37,
			ma: 62,
			ag: 41,
			lu: 50
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Resist Fire',
				level: 40
			},
			{
				name: 'Mana Gain',
				level: 41
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Elec: 'Null',
			Force: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The god of rain and lightning in Aztec lore, he is also associated with clouds and water.\nIn the tale of the Five Suns, he reigned as the third sun for 312 years. Those who died of lightning strikes and water-related causes go to his kingdom, Tlalocan.',
		origin: 'Aztec'
	},
	{
		name: 'Tlaltecuhtli',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 2,
				Ice: -2,
				Elec: 2,
				Force: -2,
				Light: -2,
				Dark: -2,
				Almighty: 1,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Jirae',
		level: 46,
		hp: 408,
		mp: 276,
		stats: {
			st: 35,
			dx: 46,
			ma: 83,
			ag: 52,
			lu: 58
		},
		learnset: [
			{
				name: 'Megido',
				level: 0
			},
			{
				name: 'Mazionga',
				level: 0
			},
			{
				name: 'Rakukaja',
				level: 47
			},
			{
				name: 'Agidyne',
				level: 48
			}
		],
		resistances: {
			Phys: 'Resist',
			Ice: 'Weak',
			Elec: 'Null',
			Seal: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A monster of Aztec lore.\nDuring the earth\'s creation, she was ripped in half by Quetzalcoatl and Tezcatlipoca. Half became the land and half became the sky.',
		origin: 'Aztec'
	},
	{
		name: 'Tlazolteotl',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -2,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 3,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Megami',
		level: 57,
		hp: 390,
		mp: 356,
		stats: {
			st: 42,
			dx: 54,
			ma: 92,
			ag: 72,
			lu: 72
		},
		learnset: [
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 0
			},
			{
				name: 'Makakaja',
				level: 58
			},
			{
				name: 'Recarmdra',
				level: 59
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Light: 'Null',
			Charm: 'Weak',
			Poison: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The Aztec goddess of filth. She is also the goddess of sexual deeds, as well as a goddess of purification.\nShe is also known as Tlaelquani ("she who eats filth"), befitting her nature as a goddess of atonement.',
		origin: 'Aztec'
	},
	{
		name: 'Tokisada',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 4,
				Dark: -3,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Famed',
		level: 80,
		hp: 499,
		mp: 411,
		stats: {
			st: 53,
			dx: 70,
			ma: 120,
			ag: 78,
			lu: 95
		},
		learnset: [
			{
				name: 'Judgement Light',
				level: 0
			},
			{
				name: 'Debilitate',
				level: 0
			},
			{
				name: 'Smile Charge',
				level: 81
			},
			{
				name: 'High Light Pleroma',
				level: 82
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Resist',
			Force: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Unknown',
			minor: 'Neutral'
		},
		lore: 'Fully known as Amakusa Shiro Tokisada, his baptismal name was "Geronimo", though it became "Francisco" during the time of the rebellion.\nHe was the leader of the Kan-ei 14 (1637) rebellion of Shimabara, though it is said that the mastermind of the rebellion was someone else and that Shiro was set up as the leader. After successfully defeating the Shogunate army several times, the rebels were finally besieged at Hara Castle and killed. His head was put on public display. He lived a mere 16 years.',
		origin: 'Japanese'
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
			Fire: 'Weak',
			Ice: 'Resist'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
		user: 'Chie Satonaka',
		stage: 1,
		evoSkillName: null
	},
	{
		name: 'Tonatiuh',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Fury',
		level: 37,
		hp: 372,
		mp: 148,
		stats: {
			st: 50,
			dx: 48,
			ma: 43,
			ag: 45,
			lu: 43
		},
		learnset: [
			{
				name: 'Megido',
				level: 0
			},
			{
				name: 'Fatal Sword',
				level: 0
			},
			{
				name: 'Javelin Rain',
				level: 38
			},
			{
				name: 'Charge',
				level: 39
			}
		],
		resistances: {
			Fire: 'Resist',
			Ice: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'The sun god of Aztec lore who is also worshipped as a war god. He is said to give warriors strength.\nHe is often depicted as an armed warrior with the sun on his back.',
		origin: 'Aztec'
	},
	{
		name: 'Toubyou',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: -3,
				Elec: 2,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 3,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Drake',
		level: 14,
		hp: 161,
		mp: 75,
		stats: {
			st: 21,
			dx: 22,
			ma: 20,
			ag: 19,
			lu: 18
		},
		learnset: [
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Hard Worker',
				level: 0
			},
			{
				name: 'Pandemic Bomb',
				level: 15
			},
			{
				name: 'Attack Knowhow',
				level: 16
			}
		],
		resistances: {
			Ice: 'Weak',
			Light: 'Weak',
			Poison: 'Null',
			Sick: 'Resist',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A possessive spirit in the form of a small snake, spoken of in the Shikoku and San-in regions. A golden ring is wrapped around its neck.\nIt is also called Tonbe or Tonbo and can possess humans. They are kept in earthen bottles and are given the same food as people. If you send it to one you have a grudge against, it will make them suffer, but if treated badly it will attack its owner. Because snakes are thought to bring good luck, it\'s said that taking care of a Toubyou will bring prosperity to one\'s family.',
		origin: 'Japanese'
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
			Phys: 'Resist',
			Elec: 'Weak'
		},
		game: 'p4',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'A Slavic god whose name means "three heads". He rode a holy black horse, in contrast to Sventovit, who rode a white horse.',
		origin: 'Slavic'
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
			Fire: 'Null',
			Wind: 'Weak'
		},
		game: 'p3',
		alignment: null,
		lore: null,
		origin: 'Greco-Roman',
		user: 'Junpei Iori',
		stage: 2,
		evoSkillName: 'Spring of Life'
	},
	{
		name: 'Troll',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Fairy',
		level: 38,
		hp: 354,
		mp: 144,
		stats: {
			st: 14,
			ma: 10,
			vi: 21,
			ag: 4,
			lu: 9
		},
		learnset: [
			{
				name: 'Begging',
				level: 0
			},
			{
				name: 'Mutudi',
				level: 0
			},
			{
				name: 'Mabufula',
				level: 39
			},
			{
				name: 'Scratch Dance',
				level: 40
			},
			{
				name: 'Life Gain',
				level: 41
			},
			{
				name: 'Lightoma',
				level: 42
			},
			{
				name: 'Diarahan',
				level: 43
			}
		],
		resistances: {
			Ice: 'Drain',
			Confusion: 'Weak',
			Sleep: 'Weak',
			Charm: 'Weak'
		},
		game: 'smt3',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'An ugly, violent giant of Scandinavian myth. It is often portrayed as a creature that lives under bridges. It is incredibly strong, but easily outsmarted.',
		origin: 'European'
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
				name: 'Dekaja',
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
			Light: 'Null',
			Dark: 'Null',
			Seal: 'Null',
			Sleep: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'Angels that sound their trumpets to signify the coming of the apocalypse ordained in the Book of Revelation.\nIt is said that the trumpets bring plagues and disasters, turning the earth into a land of death and sufferring.',
		origin: 'Abrahamic'
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
			Ice: 'Weak',
			Elec: 'Resist',
			Charm: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'Monsters said to come from the bastardization of certain clans of Japan. The word carries the literal meaning of "dirt spider."\nThose who did not pledge allegiance to the Imperial Court were called this derogatory term because of their short stature and spindly limbs. As time passed, people may have misinterpreted the name for a literal meaning and made them into spiders, or perhaps the manifestations of grudges of those who were persecuted by the Imperial Court.',
		origin: 'Japanese'
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
			Phys: 'Resist',
			Nuke: 'Weak',
			Light: 'Resist',
			Dark: 'Repel'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona of another story. An important god born from the Japanese god Izanagi, he governs over the moon and the night. There are many theories behind this mysterious god.',
		origin: 'Japanese',
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
			Phys: 'Resist',
			Nuke: 'Weak',
			Light: 'Resist',
			Dark: 'Repel'
		},
		game: 'p5',
		alignment: null,
		lore: 'A Persona turned picaro after becoming the Trickster\'s mask. An important god born from the Japanese god Izanagi, he governs over the moon and the night. There are many theories behind this mysterious god.',
		origin: 'Japanese'
	},
	{
		name: 'Tuofei',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: -4,
				Fire: 0,
				Ice: 2,
				Elec: 0,
				Force: 0,
				Light: -2,
				Dark: 0,
				Almighty: 0,
				Recovery: 2,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Flight',
		level: 30,
		hp: 260,
		mp: 169,
		stats: {
			st: 33,
			dx: 33,
			ma: 28,
			ag: 46,
			lu: 41
		},
		learnset: [
			{
				name: 'Media',
				level: 0
			},
			{
				name: 'Ice Breath',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 31
			},
			{
				name: 'Magaon',
				level: 32
			}
		],
		resistances: {
			Gun: 'Weak',
			Elec: 'Resist',
			Dark: 'Weak',
			Bind: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A bird with the body of an owl and a single leg with sharp claws. It is said to have a human face.\nIt can only be seen during the winter because it sleeps throughout the summer. If you can capture a Toufei and wear its feathers, you will be protected from lightning.',
		origin: 'Chinese'
	},
	{
		name: 'Turbo Granny',
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 1,
				Light: -2,
				Dark: 0,
				Almighty: 0,
				Ailment: 0,
				Recovery: -2,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Foul',
		level: 26,
		hp: 114,
		mp: 141,
		stats: {
			st: 20,
			vi: 15,
			ma: 17,
			ag: 32,
			lu: 18
		},
		learnset: [
			{
				name: 'Wind Breath',
				level: 0
			},
			{
				name: 'Blinding Strike',
				level: 0
			},
			{
				name: 'Crusher Onslaught',
				level: 0
			},
			{
				name: 'Trafuri',
				level: 27
			},
			{
				name: 'Critical Aura',
				level: 28
			}
		],
		resistances: {
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'The ghost of an old lady who runs on all fours at blazing speeds near Mt. Rokko.\nShould you manage to catch a glimpse of her back as she races by, you will likely see a piece of paper on her back that reads "Turbo." She is not a dangerous ghost, but her love for speed is insatiable. Similar ghosts include the "Dash Hag" of the Shuto Expressway and the "100 km/h Granny" of Hokkaido.',
		origin: 'Japanese'
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
			Force: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'An Indian deity that serves Yama, the god of death.\nWhen Yama judges a dead soul to be guilty, Turdak acts as the executioner and drags that soul to hell.',
		origin: 'Hindu'
	},
	{
		name: 'Tzitzimitl',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 4,
				Almighty: 0,
				Ailment: 0,
				Recovery: -4,
				Support: 0
			},
			inherit: 'Elec'
		},
		arcana: 'Priestess',
		race: 'Vile',
		level: 75,
		hp: 393,
		mp: 394,
		stats: {
			st: 32,
			vi: 49,
			ma: 74,
			ag: 52,
			lu: 44
		},
		learnset: [
			{
				name: 'Makajamaon',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			},
			{
				name: 'Bufubarion',
				level: 0
			},
			{
				name: 'Impaler\'s Animus',
				level: 76
			},
			{
				name: 'Glacial Blast',
				level: 77
			},
			{
				name: 'Mamudobarion',
				level: 78
			}
		],
		resistances: {
			Fire: 'Weak',
			Light: 'Null',
			Dark: 'Null',
			Seal: 'Null',
			Confusion: 'Weak',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'Aztec goddesses of night and fear. They constantly attack the sun and cause solar eclipses. They demand a sacrifice once every 52 years.',
		origin: 'South American'
	},
	{
		name: 'Ubu',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 1,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Vermin',
		level: 21,
		hp: 201,
		mp: 88,
		stats: {
			st: 24,
			dx: 40,
			ma: 20,
			ag: 29,
			lu: 25
		},
		learnset: [
			{
				name: 'Toxic Sting',
				level: 0
			},
			{
				name: 'Tetanus Cut',
				level: 0
			},
			{
				name: 'Stun Needles',
				level: 22
			},
			{
				name: 'Rapid Needle',
				level: 23
			}
		],
		resistances: {
			Gun: 'Resist',
			Force: 'Weak',
			Light: 'Weak',
			Poison: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'A spider-monster that appears on Sado Island in the Niigata prefecture. It appears while making noises like a baby\'s cry.\nDead or abandoned babies sometimes transform into an Ubu. They grab onto passersby and kill them. If one grasps your leg, take off a shoe, throw it over your shoulder and yell, "This is your mother," and it will disappear.',
		origin: 'Japanese'
	},
	{
		name: 'Ukano Mitama',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: -3,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 3,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Avatar',
		level: 53,
		hp: 615,
		mp: 350,
		stats: {
			st: 34,
			dx: 34,
			ma: 24,
			ag: 83,
			lu: 73
		},
		learnset: [
			{
				name: 'Mediarama',
				level: 0
			},
			{
				name: 'Healing Knowhow',
				level: 0
			},
			{
				name: 'High Heal Pleroma',
				level: 54
			},
			{
				name: 'Tetrakarn',
				level: 55
			}
		],
		resistances: {
			Ice: 'Weak',
			Elec: 'Null',
			Light: 'Null',
			Dark: 'Weak',
			Confusion: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A deified rice spirit of Japanese lore. He presides over the five grains.\nIn the Kojiki, he was the child of Susano-o and Kamu-ouichi-hime, while in the Nihon Shoki, he was the child of Izanagi and Izanami. His name isn\'t well known, but the god housed in many Inari shrines throughout Japan is Ukano Mitama. Tradtionally the god of agriculture, he is currently known to bring good fortune in matters of commerce and household safety.',
		origin: 'Japanese'
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
			Fire: 'Resist',
			Ice: 'Weak'
		},
		game: 'p4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A subordinate demon of Hell, ordered by Beelzebub to stoke the fires that heat its iron pots. He also throws coals into the fire to torment humans trapped in Hell.',
		origin: 'Abrahamic'
	},
	{
		name: 'Undine',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -7,
				Ice: 5,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: 'Recovery'
		},
		arcana: 'Lovers',
		race: 'Element',
		level: 32,
		hp: 300,
		mp: 192,
		stats: {
			st: 24,
			dx: 31,
			ma: 52,
			ag: 41,
			lu: 37
		},
		learnset: [
			{
				name: 'High Ice Pleroma',
				level: 0
			},
			{
				name: 'Poison Breath',
				level: 33
			},
			{
				name: 'Mana Gain',
				level: 35
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'This water spirit lives in lakes and fountains, appearing as a beautiful woman. It has no soul unless it marries a human man, which is a serious taboo among Undines.',
		origin: 'European'
	},
	{
		name: 'Unicorn',
		affinities: {
			skillPotential: {
				Phys: 0,
				Fire: 0,
				Ice: 0,
				Elec: -2,
				Force: 0,
				Light: 2,
				Dark: 0,
				Almighty: 0,
				Ailment: -1,
				Recovery: 1,
				Support: 1
			},
			inherit: 'Nuke'
		},
		arcana: 'Hierophant',
		race: 'Holy',
		level: 11,
		hp: 76,
		mp: 76,
		stats: {
			st: 10,
			vi: 12,
			ma: 10,
			ag: 11,
			lu: 8
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
				name: 'Hama',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 13
			},
			{
				name: 'Recarm',
				level: 14
			}
		],
		resistances: {
			Elec: 'Weak',
			Light: 'Null',
			Charm: 'Resist',
			Confusion: 'Resist',
			Poison: 'Weak',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A white horse of Scottish legend, featuring a spiral horn on its forehead. This horn is said to make a panacea for all manner of ailments, but it will only open its heart to the purest of maidens, allowing only them to touch its body.',
		origin: 'European'
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
			Fire: 'Null',
			Ice: 'Weak',
			Elec: 'Resist',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'One of the four major angels.\nHis name means "flame of God," and he possesses knowledge of all celestial phenomena. He is also the first angel Satan met after falling to Earth.',
		origin: 'Abrahamic'
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
		resistances: {},
		game: 'p5',
		alignment: null,
		lore: 'Protagonist of Victor Hugo\'s "Les Misérables." Jailed after stealing bread for his starving nephews, he was consumed by bitterness, but a bishop\'s mercy inspired a change of heart. He strove to be a virtuous champion of the poor and downtrodden.',
		origin: 'Modern Fiction',
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
			Force: 'Weak',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'Daughters of Odin from Norse mythology.\nTheir name means "choosers of the slain." Armed with shining armor and spears, they look for brave warriors to take to Valhalla, so that they may fight in Ragnarok.',
		origin: 'Norse'
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
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'The true name of Freyja, of the Norse Vanir deities. Younger twin sister of Freyr. Her name means "dis of the Vanir" - dis being a goddess. Known to be a great beauty and a witchlike master of magic.',
		origin: 'Norse',
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
			Fire: 'Weak',
			Ice: 'Repel',
			Dark: 'Resist',
			Sleep: 'Null',
			Mirage: 'Null',
			Poison: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A giant serpent of Hindu lore.\nIt is said that gods and demons used him as a rope to churn the sea of milk to create Amrita, while also using Mt. Mandara as the stick. The strain from this caused him to exhale incredibly poisonous venom, but it was safely swallowed up by Shiva.',
		origin: 'Hindu'
	},
	{
		name: 'Vetala',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 3,
				Almighty: 0,
				Recovery: -3,
				Ailment: -1,
				Support: 3
			},
			inherit: 'Ailment'
		},
		arcana: 'Devil',
		race: 'Haunt',
		level: 74,
		hp: 581,
		mp: 264,
		stats: {
			st: 89,
			dx: 87,
			ma: 86,
			ag: 70,
			lu: 68
		},
		learnset: [
			{
				name: 'Eat Whole',
				level: 0
			},
			{
				name: 'Acid Breath',
				level: 0
			},
			{
				name: 'Fog Breath',
				level: 75
			},
			{
				name: 'Life Surge',
				level: 76
			}
		],
		resistances: {
			Fire: 'Weak',
			Light: 'Weak',
			Dark: 'Null',
			Charm: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A type of Preta in Hindu and Buddhist myth. Classified as "powerful ghosts," they have varying shapes and forms. They can control the dead and eat humans.',
		origin: 'Hindu'
	},
	{
		name: 'Victor',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 2,
				Fire: 0,
				Ice: 0,
				Elec: -3,
				Force: 0,
				Light: 4,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Herald',
		level: 61,
		hp: 559,
		mp: 231,
		stats: {
			st: 58,
			dx: 93,
			ma: 55,
			ag: 74,
			lu: 64
		},
		learnset: [
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Heaven\'s Bow',
				level: 0
			},
			{
				name: 'Makarakarn',
				level: 62
			},
			{
				name: 'Light Pleroma',
				level: 64
			}
		],
		resistances: {
			Gun: 'Null',
			Elec: 'Weak',
			Force: 'Resist',
			Light: 'Null',
			Dark: 'Weak',
			Sleep: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'The guardian angel of Saint Patrick who spoke to him in a dream and had him spread Christianity throughout Ireland.\nHis role is to speak the will of God to those who are to become leaders.',
		origin: 'Abrahamic'
	},
	{
		name: 'Vidofnir',
		affinities: {
			skillPotential: {
				Phys: 1,
				Gun: -4,
				Fire: 0,
				Ice: 0,
				Elec: 2,
				Force: -1,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Avian',
		level: 34,
		hp: 261,
		mp: 231,
		stats: {
			st: 26,
			dx: 38,
			ma: 55,
			ag: 47,
			lu: 44
		},
		learnset: [
			{
				name: 'Damascus Claw',
				level: 0
			},
			{
				name: 'Zionga',
				level: 0
			},
			{
				name: 'Ally Counter',
				level: 35
			},
			{
				name: 'Mazionga',
				level: 36
			}
		],
		resistances: {
			Gun: 'Weak',
			Light: 'Resist',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Unknown',
			minor: 'Law'
		},
		lore: 'A shining rooster in Norse lore that sits at the top of Yggdrasil, the World Tree.\nIts name means "tree snake," and it releases light atop Yggdrasil. By basking in that light, Yggdrasil floats into the sky.',
		origin: 'Norse'
	},
	{
		name: 'Virtue',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: -5,
				Force: 2,
				Light: 4,
				Dark: -5,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 2
			},
			inherit: 'Light'
		},
		arcana: 'Justice',
		race: 'Divine',
		level: 41,
		hp: 310,
		mp: 262,
		stats: {
			st: 30,
			dx: 39,
			ma: 69,
			ag: 53,
			lu: 62
		},
		learnset: [
			{
				name: 'Sabbatma',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 0
			},
			{
				name: 'Tetraja',
				level: 42
			},
			{
				name: 'Silent Prayer',
				level: 43
			}
		],
		resistances: {
			Elec: 'Weak',
			Force: 'Null',
			Light: 'Null',
			Dark: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'The fifth of the nine orders of angels, also known as "The Shining Ones." They work miracles and support those struggling with their faith.',
		origin: 'Abrahamic'
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
			Phys: 'Null',
			Fire: 'Weak',
			Light: 'Repel',
			Dark: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'One of the Trimurti and the highest-ranking god in Hinduism.\nHe governs the universe and is also recognized as its protector. It is said that, when the surface world is in danger, he will appear as an avatar.',
		origin: 'Hindu'
	},
	{
		name: 'Vivian',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -6,
				Ice: 3,
				Elec: 0,
				Force: 0,
				Light: 2,
				Dark: -5,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Fairy',
		level: 52,
		hp: 382,
		mp: 303,
		stats: {
			st: 36,
			dx: 47,
			ma: 82,
			ag: 49,
			lu: 64
		},
		learnset: [
			{
				name: 'Lullaby',
				level: 0
			},
			{
				name: 'Sukukaja',
				level: 0
			},
			{
				name: 'Dark Sword',
				level: 0
			},
			{
				name: 'Mana Surge',
				level: 53
			},
			{
				name: 'Mabufudyne',
				level: 54
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Null',
			Light: 'Null',
			Dark: 'Weak',
			Charm: 'Resist',
			Seal: 'Weak',
			Poison: 'Weak',
			Sleep: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A beautiful faerie of Arthurian lore. She also guards Lancelot, knight of the Round Table.\nShe lives beneath an illusory lake in France and is also known as the "Lady of the Lake." She is known for giving Excalibur to Arthur and for raising Lancelot.',
		origin: 'European'
	},
	{
		name: 'Vodyanik',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -1,
				Ice: 0,
				Elec: 1,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: -1
			},
			inherit: null
		},
		arcana: null,
		race: 'Yoma',
		level: 8,
		hp: 96,
		mp: 82,
		stats: {
			st: 10,
			dx: 12,
			ma: 19,
			ag: 13,
			lu: 16
		},
		learnset: [
			{
				name: 'Zio',
				level: 0
			},
			{
				name: 'Bouncing Claw',
				level: 9
			},
			{
				name: 'Mana Bonus',
				level: 10
			}
		],
		resistances: {
			Elec: 'Resist',
			Force: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'A water creature in Slavic lore. He drowns humans and sometimes makes them his slaves.\nWith his Rusalka wife, he lives at the bottom of lakes. He catches and eats people who venture near the water. He appears as a merman or frogman, but is said to be able to change his shape to human.',
		origin: 'Slavic'
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
			Elec: 'Resist',
			Wind: 'Weak',
			Light: 'Drain',
			Dark: 'Null'
		},
		game: 'p5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'The second of Zoroastrianism\'s "divine sparks," Amesha Spenta, its name means "good thought." This holy entity is said to have given Zoroaster revelations from God.',
		origin: 'Zoroastrian'
	},
	{
		name: 'Vouivre',
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 0,
				Ice: -3,
				Elec: 0,
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
		race: 'Snake',
		level: 20,
		hp: 114,
		mp: 100,
		stats: {
			st: 22,
			vi: 16,
			ma: 11,
			ag: 16,
			lu: 18
		},
		learnset: [
			{
				name: 'Toxic Sting',
				level: 0
			},
			{
				name: 'Venom Chaser',
				level: 0
			},
			{
				name: 'Curse Siphon',
				level: 21
			},
			{
				name: 'Madness Needle',
				level: 22
			},
			{
				name: 'Toxic Spray',
				level: 23
			}
		],
		resistances: {
			Ice: 'Weak',
			Seal: 'Resist',
			Poison: 'Null',
			Sleep: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A female dragon with bat wings, eagle legs, and a viper tail. Sometimes depicted as a beautiful female spirit.\nThe secret of Vouivre\'s power is a garnet jewel on her forehead, which if lost or stolen, causes her to lose all her magical powers and forces her to obey the gem\'s owner. Some believe the jewel is not actually found in her forehead, but actually refers to her eyes.',
		origin: 'European'
	},
	{
		name: 'Vritra',
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 0,
				Ice: 0,
				Elec: 3,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: -1,
				Ailment: 0,
				Recovery: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Dragon',
		level: 52,
		hp: 263,
		mp: 246,
		stats: {
			st: 40,
			vi: 32,
			ma: 40,
			ag: 34,
			lu: 30
		},
		learnset: [
			{
				name: 'Shockbound',
				level: 0
			},
			{
				name: 'Axel Claw',
				level: 0
			},
			{
				name: 'Marakunda',
				level: 0
			},
			{
				name: 'Ziodyne',
				level: 53
			},
			{
				name: 'Dragon Eye',
				level: 54
			},
			{
				name: 'Mortal Jihad',
				level: 55
			}
		],
		resistances: {
			Ice: 'Resist',
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A ferocious giant dragon of Hindu mythology. Its name means "obstacle," and it\'s said to block the rivers in the sky, bringing drought.\nWhen Indra, god of thunder, defeats him, the earth\'s rains will return. However, Vritra will rise again the following year. The battle between the two is said to continue for eternity.',
		origin: 'Hindu'
	},
	{
		name: 'Wendigo',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: -3,
				Ice: 4,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: 1,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Jaki',
		level: 30,
		hp: 328,
		mp: 61,
		stats: {
			st: 45,
			dx: 27,
			ma: 38,
			ag: 33,
			lu: 33
		},
		learnset: [
			{
				name: 'Mabufula',
				level: 0
			},
			{
				name: 'Oni-Kagura',
				level: 0
			},
			{
				name: 'Poison Breath',
				level: 31
			},
			{
				name: 'Power Punch',
				level: 31
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist',
			Bind: 'Weak',
			Sick: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Neutral'
		},
		lore: 'An abominable snowman of Canada. Its height is over five meters.\nIt has a face that looks like a skull and its fur lets it run quickly in snow. It appears in villages and eats humans. Sacrifices are common to avoid being attacked.',
		origin: 'North American'
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
			Fire: 'Repel',
			Elec: 'Weak',
			Light: 'Resist',
			Dark: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides a white horse and carries a bow. Wears a resplendent crown as a symbol of God\'s dominion over Armageddon, and promises to bring total victory.',
		origin: 'Abrahamic'
	},
	{
		name: 'Wicker Man',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -3,
				Ice: 0,
				Elec: -3,
				Force: 2,
				Light: -2,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: 3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Spirit',
		level: 38,
		hp: 329,
		mp: 151,
		stats: {
			st: 47,
			dx: 44,
			ma: 43,
			ag: 44,
			lu: 42
		},
		learnset: [
			{
				name: 'Makajama',
				level: 0
			},
			{
				name: 'Mazanma',
				level: 0
			},
			{
				name: 'Magaon',
				level: 39
			},
			{
				name: 'Resist Elec',
				level: 40
			}
		],
		resistances: {
			Fire: 'Weak',
			Elec: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Sick: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A giant man made of wicker used in human sacrifices by Druids of ancient Celtic descent. The sacrifice was held inside, then the wicker man would be set ablaze. Some tales describe passersby stumbling across the remains, wondering how they got burned.\nOther Druid methods of human sacrifice included drowning men in barrels of water, hanging men from trees and shooting men with arrows.',
		origin: 'Celtic'
	},
	{
		name: 'Wild Hunt',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 1,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: -2
			},
			inherit: null
		},
		arcana: null,
		race: 'Night',
		level: 53,
		hp: 478,
		mp: 209,
		stats: {
			st: 51,
			dx: 82,
			ma: 43,
			ag: 58,
			lu: 54
		},
		learnset: [
			{
				name: 'Blast Arrow',
				level: 0
			},
			{
				name: 'Dream Fist',
				level: 0
			},
			{
				name: 'Mana Surge',
				level: 54
			},
			{
				name: 'Grand Tack',
				level: 56
			}
		],
		resistances: {
			Light: 'Weak',
			Dark: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Terrifying ghouls that ride through the night skies in many European folk tales.\nThey are a group of hunters on horseback with a pack of hunting dogs. It is said a pagan goddess with the stigmata of demons leads them. They lay waste wherever they ride, and take those who see them to the land of the dead.',
		origin: 'European'
	},
	{
		name: 'Will o\' Wisp',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Foul',
		level: 1,
		hp: 30,
		mp: 18,
		stats: {
			st: 4,
			ma: 5,
			vi: 4,
			ag: 5,
			lu: 3
		},
		learnset: [
			{
				name: 'Needle Rush',
				level: 0
			},
			{
				name: 'Null Freeze',
				level: 0
			},
			{
				name: 'Zan',
				level: 2
			},
			{
				name: 'Riberama',
				level: 3
			},
			{
				name: 'Life Drain',
				level: 4
			},
			{
				name: 'Self-destruct',
				level: 5
			},
			{
				name: 'Makakaja',
				level: 6
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Weak',
			Ice: 'Weak',
			Elec: 'Weak',
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt3',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'One of the more famous names for the mysterious lights seen over swamps. They are the souls of those who fail to go to the afterlife and instead wander the wilderness, misleading travelers.',
		origin: 'European'
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
			Fire: 'Resist',
			Elec: 'Null',
			Wind: 'Weak'
		},
		game: 'p5',
		alignment: null,
		lore: 'The other name of Captain Kidd, world-renowned pirate. For years after his death, songs and legends of his life inspired many to chase rumors of his buried treasure across the seas.',
		origin: 'Historical',
		user: 'Ryuji Sakamoto',
		stage: 3,
		evoSkillName: 'Fighting Spirit'
	},
	{
		name: 'Wu Kong',
		aliases: [
			'Seiten Taisei',
			'Qitian Dasheng'
		],
		affinities: {
			skillPotential: {
				Phys: 4,
				Gun: 0,
				Fire: 0,
				Ice: -3,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -3,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: 'Hunger',
		race: 'Fury',
		level: 57,
		hp: 675,
		mp: 179,
		stats: {
			st: 103,
			dx: 64,
			ma: 41,
			ag: 59,
			lu: 69
		},
		learnset: [
			{
				name: 'Mortal Jihad',
				level: 0
			},
			{
				name: 'Taunt',
				level: 0
			},
			{
				name: 'Charge',
				level: 0
			},
			{
				name: 'Critical Aura',
				level: 58
			},
			{
				name: 'Phys Pleroma',
				level: 60
			}
		],
		resistances: {
			Phys: 'Resist',
			Fire: 'Resist',
			Elec: 'Weak',
			Force: 'Resist',
			Light: 'Resist',
			Dark: 'Weak',
			Daze: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'Qitian Dasheng was supposedly born from a rock. He wreaked havoc throughout the land and was punished by Buddha, but was eventually saved by a monk named Tang Sanzang.',
		origin: 'Chinese'
	},
	{
		name: 'Xi Wangmu',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: -3,
				Ailment: 3,
				Support: 4
			},
			inherit: null
		},
		arcana: 'Empress',
		race: 'Lady',
		level: 79,
		hp: 543,
		mp: 436,
		stats: {
			st: 48,
			dx: 65,
			ma: 123,
			ag: 77,
			lu: 102
		},
		learnset: [
			{
				name: 'Makarakarn',
				level: 0
			},
			{
				name: 'Myriad Arrows',
				level: 0
			},
			{
				name: 'Lullaby',
				level: 80
			},
			{
				name: 'Doping',
				level: 81
			},
			{
				name: 'Invitation',
				level: 82
			}
		],
		resistances: {
			Gun: 'Null',
			Light: 'Resist',
			Charm: 'Null',
			Poison: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'An ancient Chinese goddess who ruled over the Kunlun mountains. She was worshipped during the Han Dynasty. She looks like a human, but is said to have the teeth of a tiger and tail of a leopard. She kept the peaches of immortality, which Wu Kong stole and ate.',
		origin: 'Chinese'
	},
	{
		name: 'Xiezhai',
		affinities: {
			skillPotential: {
				Phys: 3,
				Fire: 0,
				Ice: 1,
				Elec: 0,
				Force: 0,
				Light: 1,
				Dark: -1,
				Almighty: 0,
				Ailment: -4,
				Recovery: 0,
				Support: 0
			},
			inherit: 'Elec'
		},
		arcana: 'Temperance',
		race: 'Avatar',
		level: 29,
		hp: 161,
		mp: 127,
		stats: {
			st: 24,
			vi: 25,
			ma: 24,
			ag: 18,
			lu: 16
		},
		learnset: [
			{
				name: 'Pierce Armor',
				level: 0
			},
			{
				name: 'Heavy Blow',
				level: 0
			},
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Hamaon',
				level: 30
			},
			{
				name: 'Puncture Punch',
				level: 31
			}
		],
		resistances: {
			Ice: 'Null',
			Light: 'Null',
			Dark: 'Weak',
			Charm: 'Weak',
			Seal: 'Weak',
			Confusion: 'Weak',
			Poison: 'Weak',
			Sleep: 'Weak',
			Mirage: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A sacred beast resembling a sheep in Chinese legend.\nIts eyes are said to have the power to see through any lie. Often appearing in the human world, it is said to punish the wicked with the power of its sharp horn.',
		origin: 'Chinese'
	},
	{
		name: 'Xiuhtecuhtli',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 2,
				Fire: 5,
				Ice: -6,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -4,
				Support: -3
			},
			inherit: null
		},
		arcana: null,
		race: 'Yoma',
		level: 48,
		hp: 420,
		mp: 264,
		stats: {
			st: 54,
			dx: 34,
			ma: 75,
			ag: 38,
			lu: 55
		},
		learnset: [
			{
				name: 'Agidyne',
				level: 0
			},
			{
				name: 'Fire Pleroma',
				level: 49
			},
			{
				name: 'Grand Tack',
				level: 50
			}
		],
		resistances: {
			Gun: 'Null',
			Fire: 'Null',
			Ice: 'Weak',
			Seal: 'Weak',
			Sleep: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Neutral'
		},
		lore: 'The god of fire in Aztec lore, often depicted as a pillar of fire.\nAll the fires in stoves were thanks to him. Every day, bread and liquor were offered to him. The festival of Xiuhtecuhtli was quite gruesome, as victims of the human sacrifice were thrown into the fire while alive.',
		origin: 'Aztec'
	},
	{
		name: 'Xuanwu',
		aliases: [
			'Genbu',
			'Gui Xian'
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
			Fire: 'Weak',
			Ice: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the north, the season of winter, and the element of water. Known to be a great warrior, it is said to support the Earth from below.',
		origin: 'Chinese'
	},
	{
		name: 'Yaka',
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Haunt',
		level: 17,
		hp: 150,
		mp: 81,
		stats: {
			st: 8,
			ma: 10,
			vi: 8,
			ag: 5,
			lu: 6
		},
		learnset: [
			{
				name: 'Life Drain',
				level: 0
			},
			{
				name: 'Tarunda',
				level: 0
			},
			{
				name: 'Mazio',
				level: 18
			},
			{
				name: 'Taunt',
				level: 19
			},
			{
				name: 'Dia',
				level: 20
			},
			{
				name: 'Poison Claw',
				level: 21
			},
			{
				name: 'Diarama',
				level: 22
			}
		],
		resistances: {
			Ice: 'Weak',
			Light: 'Weak',
			Dark: 'Null'
		},
		game: 'smt3',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Demons of disease in Sri Lankan mythology. Masks of them are made so that shamans can talk with them. They can be summoned and exorcised through ritual dancing while wearing the mask.',
		origin: 'Sri Lankan'
	},
	{
		name: 'Yaksha',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -2,
				Ice: 3,
				Elec: 0,
				Force: -3,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 1,
				Ailment: 2,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Brute',
		level: 71,
		hp: 560,
		mp: 255,
		stats: {
			st: 78,
			dx: 74,
			ma: 89,
			ag: 80,
			lu: 73
		},
		learnset: [
			{
				name: 'Magaon',
				level: 0
			},
			{
				name: 'Tetrakarn',
				level: 0
			},
			{
				name: 'Me Patra',
				level: 72
			},
			{
				name: 'Makajamaon',
				level: 73
			}
		],
		resistances: {
			Phys: 'Resist',
			Ice: 'Repel',
			Force: 'Weak',
			Bind: 'Weak',
			Sick: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A spirit of demigod status that serves the Hindu god of wealth. It lives in the Himalayas and guards treasure.\nIt is a holy spirit of sorts that lives in other worlds, in the air, in forests, and underwater. It is known as Yasha in Buddhism, and protects its teachings. It prevents invasion of homes by evil spirits, grants blessings to the good, and devours the evil. It is a benevolent god in India, but in Japan, it is known as a dreadful man-eating demon that kills men and devours their bodies and souls.',
		origin: 'Hindu'
	},
	{
		name: 'Yakshini',
		aliases: [
			'Yaksini'
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
			Elec: 'Weak',
			Force: 'Null',
			Seal: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Semi-divine beings in Hindu mythology.\nThough they were once worshipped by the Dravidians as goddesses of the harvest, they became interpreted as demons with the spread of Hinduism and the two clashing ideologies. They are depicted as naked women with voluptuous bodies.',
		origin: 'Hindu'
	},
	{
		name: 'Yamata-no-Orochi',
		aliases: [
			'Orochi'
		],
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
			Fire: 'Null',
			Ice: 'Null',
			Elec: 'Weak',
			Sleep: 'Weak',
			Poison: 'Weak',
			Confusion: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A giant snake with eight heads that the hero Susano-o defeated to save Kushinada-Hime.\nThe legendary sword Ame-no-Murakumo-no-Tsurugi, also known as the "Sword of Kusanagi," was said to have emerged from its belly.',
		origin: 'Japanese'
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
			Fire: 'Null',
			Light: 'Repel',
			Dark: 'Repel'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		user: 'Naoto Shirogane',
		origin: 'Japanese',
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
			Fire: 'Resist',
			Light: 'Null',
			Dark: 'Null'
		},
		game: 'p4',
		alignment: null,
		lore: null,
		origin: 'Japanese',
		user: 'Naoto Shirogane',
		stage: 2,
		evoSkillName: null
	},
	{
		name: 'Yamawaro',
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: -3,
				Almighty: 0,
				Recovery: -2,
				Ailment: -3,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Brute',
		level: 32,
		hp: 415,
		mp: 106,
		stats: {
			st: 52,
			dx: 31,
			ma: 22,
			ag: 32,
			lu: 40
		},
		learnset: [
			{
				name: 'Megaton Press',
				level: 0
			},
			{
				name: 'Tarukaja',
				level: 0
			},
			{
				name: 'Life Gain',
				level: 33
			},
			{
				name: 'Attack Knowhow',
				level: 34
			}
		],
		resistances: {
			Phys: 'Resist',
			Ice: 'Resist',
			Light: 'Weak',
			Dark: 'Weak',
			Charm: 'Weak',
			Confusion: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'Hairy Kappa who have migrated to the mountains for the autumn.\nIf you give them food when you meet them, they will help you in your work. But they can sense those who hold evil thoughts about them, and they will flee. In the spring, they return to the rivers and become Kappa once again.',
		origin: 'Japanese'
	},
	{
		name: 'Yaso Magatsuhi',
		aliases: [
			'Magatsuhi'
		],
		affinities: {
			skillPotential: null,
			inherit: null
		},
		arcana: null,
		race: 'Vile',
		level: 80,
		hp: 844,
		mp: 137,
		stats: {
			st: 107,
			dx: 95,
			ma: 74,
			ag: 86,
			lu: 70
		},
		learnset: [
			{
				name: 'Acid Breath',
				level: 0
			},
			{
				name: 'Shivering Taboo',
				level: 0
			},
			{
				name: 'Poison Breath',
				level: 0
			},
			{
				name: 'Bufudyne',
				level: 81
			},
			{
				name: 'Death\'s Door',
				level: 82
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Repel',
			Elec: 'Null',
			Dark: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Unknown',
			minor: 'Law'
		},
		lore: 'Yaso Magatsuhi no Kami is the deification of the sources of disaster: impurity, ill fortune, miser, evil, etc...\nAfter his return from Yomi, the land of the dead, Izanagi performed a ritual purification to wash the filth of death from himself. Two gods were born from the cast-off filth, one of which was Yaso Magatsuhi.',
		origin: 'Japanese'
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
			Force: 'Resist',
			Light: 'Null',
			Dark: 'Weak',
			Charm: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'A divine creature in Japanese mythology, they are three-legged ravens that the goddess Amaterasu sent to help humans.\nIt is said that they helped Emperor Jinmu claim victory, and, despite their divine standing, those who are unworthy have been known to go mad after looking them directly in the eye.',
		origin: 'Japanese'
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
			Fire: 'Drain',
			Wind: 'Repel',
			Light: 'Null'
		},
		game: 'p4',
		alignment: {
			major: 'Unknown',
			minor: 'Unknown'
		},
		lore: '7 days after its birth, a wolf killed its mother. Yoshizane Satomi later promised his daughter\'s hand if it could defeat the enemy, but after Yatsufasa\'s success, Yoshizane\'s retainer shot it dead.',
		origin: 'Japanese'
	},
	{
		name: 'Yggdrasil',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 3,
				Fire: -4,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 1,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Tree',
		level: 65,
		hp: 600,
		mp: 263,
		stats: {
			st: 71,
			dx: 100,
			ma: 48,
			ag: 72,
			lu: 79
		},
		learnset: [
			{
				name: 'Grand Tack',
				level: 0
			},
			{
				name: 'Dekaja',
				level: 0
			},
			{
				name: 'Healing Knowhow',
				level: 66
			},
			{
				name: 'Tetrakarn',
				level: 67
			}
		],
		resistances: {
			Gun: 'Null',
			Fire: 'Weak',
			Bind: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'The ash tree known as the World Tree in Norse lore.\nIts branches cover the entire earth, and its trunk pierces the sky and holds up several worlds, including Alfheim, the abode of the Light Elves. Its three roots stretch into Jotunheim, Niflheim, and Asgard. It is said that it will live through Ragnarok.',
		origin: 'Norse'
	},
	{
		name: 'Ym',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -4,
				Ice: 4,
				Elec: -3,
				Force: 0,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: -1,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Drake',
		level: 65,
		hp: 515,
		mp: 343,
		stats: {
			st: 44,
			dx: 58,
			ma: 99,
			ag: 65,
			lu: 78
		},
		learnset: [
			{
				name: 'Mabufudyne',
				level: 0
			},
			{
				name: 'Concentrate',
				level: 0
			},
			{
				name: 'Sea of Chaos',
				level: 67
			},
			{
				name: 'Energy Drain',
				level: 68
			}
		],
		resistances: {
			Ice: 'Drain',
			Elec: 'Weak',
			Dark: 'Resist',
			Seal: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A dragon that appears in ancient Semitic lore of the Palestinian region. He is enemies with Baal, the god of fertility and agriculture.\nHe gains his powers by dwelling underwater and ruling the seas and rivers, where he causes floods. Baal defeated him, but since there are similarities to Tiamat\'s death at Marduk\'s hands in Babylonian lore, some believe that Ym and Tiamat are the same being.',
		origin: 'Canaanite'
	},
	{
		name: 'Yoko',
		affinities: {
			skillPotential: {
				Phys: -3,
				Fire: 3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 5,
				Almighty: 4,
				Ailment: 0,
				Recovery: 3,
				Support: 3
			},
			inherit: null
		},
		arcana: null,
		race: 'Panagia',
		level: 82,
		hp: 441,
		mp: 500,
		stats: {
			st: 27,
			vi: 58,
			ma: 85,
			ag: 56,
			lu: 66
		},
		learnset: [
			{
				name: 'Primordial Chaos',
				level: 0
			},
			{
				name: 'Energy Drain',
				level: 0
			},
			{
				name: 'Agibarion',
				level: 0
			},
			{
				name: 'Mudobarion',
				level: 0
			},
			{
				name: 'Mediarahan',
				level: 0
			},
			{
				name: 'Phys Block',
				level: 0
			},
			{
				name: 'Null Light',
				level: 0
			},
			{
				name: 'Abyssal Mask',
				level: 0
			}
		],
		resistances: {
			Light: 'Weak',
			Dark: 'Null',
			Seal: 'Null',
			Sleep: 'Resist',
			Mirage: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'Awoke as a goddess when the Tokyo Conception took place, but was sealed in Shakan by the Creator, who did not want to give up His throne.\nYoko Hiromine, whose power was unsealed by Lilith of the Qadištu, was restored to her goddess form. Those who have awakened as goddesses often struggle to retain mortal perspectives and values. Yoko, however, remains relatively human in her perspective due to her time in a normal human state while her powers were sealed.',
		origin: 'ATLUS Original'
	},
	{
		name: 'Yomotsu-Ikusa',
		aliases: [
			'Ikusa'
		],
		affinities: {
			skillPotential: {
				Phys: 2,
				Gun: 3,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: -2,
				Support: 0
			},
			inherit: 'Ailment'
		},
		arcana: 'Hanged',
		race: 'Brute',
		level: 37,
		hp: 325,
		mp: 164,
		stats: {
			st: 37,
			dx: 62,
			ma: 31,
			ag: 45,
			lu: 39
		},
		learnset: [
			{
				name: 'Fang Breaker',
				level: 0
			},
			{
				name: 'Tathlum Shot',
				level: 0
			},
			{
				name: 'Blast Arrow',
				level: 38
			},
			{
				name: 'Bloody Glee',
				level: 40
			}
		],
		resistances: {
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Confusion: 'Weak'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Law'
		},
		lore: 'Izanami sent them after Izanagi at Yomotsu Hirasaka, the entrance of Yomi, the Japanese land of shadows. The army of Ikusa is led by Yomotsu Shikome.',
		origin: 'Japanese'
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
			Phys: 'Resist',
			Dark: 'Weak',
			Poison: 'Weak',
			Sleep: 'Weak',
			Mirage: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'A Japanese general of the Genpei War near the end of the Heian era and start of the Kamakura era.\nAlso known as Ushiwakamaru, he is said to have learned the art of war from the Mt. Kurama Tengu. On joining his half-brother Yoritomo\'s army, he defeated the Taira one by one, finishing them off at the battle of Dan-no-ura. He was later pursued by Yoritomo\'s army, only to kill himself at Koromogawa.',
		origin: 'Japanese'
	},
	{
		name: 'Yuki Jyorou',
		affinities: {
			skillPotential: {
				Phys: -2,
				Gun: 0,
				Fire: -5,
				Ice: 4,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: 2,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Femme',
		level: 30,
		hp: 199,
		mp: 183,
		stats: {
			st: 23,
			dx: 30,
			ma: 53,
			ag: 33,
			lu: 40
		},
		learnset: [
			{
				name: 'Bufula',
				level: 0
			},
			{
				name: 'Mamudo',
				level: 0
			},
			{
				name: 'Ice Pleroma',
				level: 31
			},
			{
				name: 'Mabufula',
				level: 32
			}
		],
		resistances: {
			Fire: 'Weak',
			Ice: 'Resist'
		},
		game: 'smt4',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'A female demon of Japanese lore who apppears on snowy nights.\nShe is a type of Yuki-onna who freezes and kills men. Sometimes she appears with a baby and asks travelers to hold it for her. The baby gets heavier and heavier, and if you drop it she will kill you. But if you can bear it, she will give you strength.',
		origin: 'Japanese'
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
			Fire: 'Weak',
			Elec: 'Null',
			Seal: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Neutral',
			minor: 'Chaos'
		},
		lore: 'In Oceanian folklore, he is a giant copper python.\nA being that transcends good and evil, he governs the weather and is considered a god of harvest. He is known as the "Rainbow Serpent" because the water in the well he calls home is said to shine like a rainbow.',
		origin: 'Aboriginal'
	},
	{
		name: 'Zaccoum',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 0,
				Fire: -1,
				Ice: 2,
				Elec: 0,
				Force: -2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 4,
				Support: 1
			},
			inherit: null
		},
		arcana: null,
		race: 'Wood',
		level: 41,
		hp: 280,
		mp: 232,
		stats: {
			st: 30,
			dx: 39,
			ma: 65,
			ag: 47,
			lu: 52
		},
		learnset: [
			{
				name: 'Poison Breath',
				level: 0
			},
			{
				name: 'Acid Breath',
				level: 0
			},
			{
				name: 'Pandemic Bomb',
				level: 42
			},
			{
				name: 'Bloody Glee',
				level: 43
			}
		],
		resistances: {
			Ice: 'Null',
			Force: 'Weak',
			Light: 'Weak',
			Dark: 'Resist',
			Seal: 'Null',
			Poison: 'Null',
			Sick: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A tree believed to grow in Jahannam, the Islamic hell. It bears fruit shaped like the heads of devils. Its existence is mentioned in the Qu\'ran.',
		origin: 'Abrahamic'
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
			Fire: 'Resist',
			Elec: 'Weak',
			Light: 'Resist',
			Dark: 'Resist',
			Sleep: 'Null',
			Mirage: 'Null',
			Confusion: 'Null',
			Charm: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'Repeller of evil found at Kinpusen by En-no-Ozunu.\nBelieved to be a fusion of Buddha, Guanyin, and Maitreya, he is a god who originated from Japan, rather than the Buddhavacana.',
		origin: 'Buddhist'
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
			Elec: 'Null',
			Force: 'Weak',
			Light: 'Null',
			Dark: 'Null',
			Seal: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Neutral'
		},
		lore: 'The main deity of Greek mythology. Said to be omnipotent, he is both god of the sky and ruler of the twelve gods of Olympus.\nHe is a son of the titan Kronos and brother to both Hades and Poseidon. Upon defeating his father, he claimed the right to rule the entire universe. He also fathered many children with not only goddesses, but a number of human women as well.',
		origin: 'Greco-Roman'
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
			Fire: 'Weak',
			Dark: 'Resist',
			Mirage: 'Resist',
			Poison: 'Resist'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Law'
		},
		lore: 'A bird in Chinese mythology said to have poison in its feathers because it eats poisonous snakes.\nDipping a feather into wine will turn it into a deadly poison, able to kill anyone with a single drop.',
		origin: 'Chinese'
	},
	{
		name: 'Zhong Kui',
		affinities: {
			skillPotential: {
				Phys: 3,
				Gun: 0,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: -3,
				Light: 1,
				Dark: 0,
				Almighty: 0,
				Recovery: -2,
				Ailment: 2,
				Support: 2
			},
			inherit: null
		},
		arcana: null,
		race: 'Kishin',
		level: 50,
		hp: 596,
		mp: 182,
		stats: {
			st: 85,
			dx: 50,
			ma: 38,
			ag: 52,
			lu: 74
		},
		learnset: [
			{
				name: 'Imposing Stance',
				level: 0
			},
			{
				name: 'Javelin Rain',
				level: 0
			},
			{
				name: 'Rakunda',
				level: 51
			},
			{
				name: 'Berserker God',
				level: 52
			},
			{
				name: 'Null Nerve',
				level: 53
			}
		],
		resistances: {
			Fire: 'Resist',
			Force: 'Weak',
			Light: 'Resist',
			Poison: 'Null',
			Sick: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Unknown',
			minor: 'Chaos'
		},
		lore: 'He is a god in Chinese lore that can command ghosts and spirits. One day, when the Emperor Xuanzong was sick, he had a dream where a ghost appeared and tormented the emporer, but a large man, Zhong Kui, appeared and destroyed it. After waking from the dream, the emperor was cured of his illness. As a human, he committed suicide after failing an exam to become an imperial official, but Emperor Gaozu gave him an honorable burial. To repay the emperor, Zhong Kui swore to rid the world of demons.',
		origin: 'Chinese'
	},
	{
		name: 'Zhu Tun She',
		affinities: {
			skillPotential: {
				Phys: 2,
				Fire: 0,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: 0,
				Dark: -2,
				Almighty: 0,
				Ailment: 3,
				Recovery: -3,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Drake',
		level: 9,
		hp: 73,
		mp: 65,
		stats: {
			st: 13,
			vi: 11,
			ma: 6,
			ag: 10,
			lu: 8
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
				name: 'Bouncing Claw',
				level: 10
			},
			{
				name: 'Rakunda',
				level: 12
			}
		],
		resistances: {
			Ice: 'Resist',
			Dark: 'Weak',
			Poison: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'A monstrous snake-like beast sighted in China during the Song dynasty.\nIt appeared before soldiers-in-training and tried to swallow humans, but was defeated by a soldier with sorcerous powers. A bizarre, hairy quadruped about three feet long, it emerges from a bamboo grove with a pig-like squeal. Because its features defy taxonomic classification, it is highly suspected to be a creature wholly unknown.',
		origin: 'Chinese'
	},
	{
		name: 'Zhu Yin',
		affinities: {
			skillPotential: {
				Phys: -7,
				Gun: 0,
				Fire: -2,
				Ice: 2,
				Elec: -2,
				Force: 2,
				Light: 0,
				Dark: 0,
				Almighty: 0,
				Recovery: 0,
				Ailment: 0,
				Support: 1
			},
			inherit: null
		},
		arcana: 'World',
		race: 'Dragon',
		level: 55,
		hp: 628,
		mp: 196,
		stats: {
			st: 79,
			dx: 38,
			ma: 58,
			ag: 43,
			lu: 70
		},
		learnset: [
			{
				name: 'Rakukaja',
				level: 0
			},
			{
				name: 'Fog Breath',
				level: 0
			},
			{
				name: 'Posumudi',
				level: 0
			},
			{
				name: 'Dekaja',
				level: 57
			}
		],
		resistances: {
			Ice: 'Null',
			Force: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'A snake god that controls daylight and the weather. He has the face of a human, but his eyes are vertical.\nHe lives in the mountains of northern China, wrapped around them with his crimson body. He does not eat, sleep, or breathe. It is day when his eyes are open and night when they closed. If he blows, it becomes winter, and if he inhales it becomes summer.',
		origin: 'Chinese'
	},
	{
		name: 'Zhuque',
		aliases: [
			'Suzaku'
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
			Fire: 'Null',
			Ice: 'Weak'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Law'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the south, the season of summer, and the element of fire. It is said to resemble a quail in appearance and have a beautiful chirping voice.',
		origin: 'Chinese'
	},
	{
		name: 'Zombie Cop',
		affinities: {
			skillPotential: {
				Phys: 0,
				Gun: 1,
				Fire: -3,
				Ice: 0,
				Elec: 0,
				Force: 0,
				Light: -3,
				Dark: 2,
				Almighty: 0,
				Recovery: -5,
				Ailment: 5,
				Support: 0
			},
			inherit: null
		},
		arcana: null,
		race: 'Undead',
		level: 17,
		hp: 201,
		mp: 77,
		stats: {
			st: 20,
			dx: 31,
			ma: 17,
			ag: 24,
			lu: 21
		},
		learnset: [
			{
				name: 'Cough',
				level: 0
			},
			{
				name: 'Rapid Needle',
				level: 0
			},
			{
				name: 'Panic Voice',
				level: 18
			}
		],
		resistances: {
			Fire: 'Weak',
			Light: 'Weak',
			Dark: 'Null',
			Bind: 'Null',
			Sick: 'Null'
		},
		game: 'smt4',
		alignment: {
			major: 'Dark',
			minor: 'Chaos'
		},
		lore: 'Police officers who have become zombies. They attack people regardless of whether any crime has been committed.\nThey are supposed to be loyal public servants, but as zombies, they assault the very people they swore to protect. Due to their training in life, their attacks are orderly and deadly, and they are more than willing to put to use the fighting abilities that went to waste while they were alive. Threats of increased paperwork, pay cuts, or disciplinary action are all useless, as they are no longer government employees.',
		origin: 'ATLUS Original'
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
			Elec: 'Weak',
			Wind: 'Resist'
		},
		game: 'p5',
		alignment: null,
		lore: 'A masked swordsman of justice who fought in California against corrupt officials during the era of Spanish rule. He always left his "Z" mark with his rapier wherever he appeared.',
		origin: 'Modern Fiction',
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
			Force: 'Weak',
			Light: 'Null'
		},
		game: 'smt5',
		alignment: {
			major: 'Light',
			minor: 'Chaos'
		},
		lore: 'Zouchouten, protector of the South, is one of the Four Heavenly Kings in Buddhist mythology.\nSimilarly to his fellow kings, he is often depicted as a fierc warrior, clad in armor and wielding a long sword, though he is sometimes shown wielding a trident instead. Also known as Virudhaka, he is god of the five grains.',
		origin: 'Buddhist'
	}
];

export default demonData;