import type { SMT5BossData } from './dataTypes.js';
import { BattleThemes } from './music.js';

const bosses: SMT5BossData[] = [
	{
		name: 'Abaddon',
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
		race: 'Tyrant',
		level: 61,
		hp: 14000,
		stats: {
			st: 45,
			vi: 47,
			ma: 43,
			ag: 39,
			lu: 41
		},
		skills: [
			'Severing Bite',
			'Frenzied Chomp',
			'Mabufudyne',
			'Toxic Cloud',
			'Fogna',
			'Hades Blast',
			'Retaliate'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Weak'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'The king of the abyss that appears in the Book of Revelation of the New Testament.\nHe controls locusts and plagues and leads the seventh order of demons who are set to appear at the sounding of the fifth trumpet on Judgment Day, when it is said that will bring horde of locusts to make the people suffer. His name in Hebrew means "destroyer" or "endless pit". It is thought that his origins lie in deification of the natural disasters caused by locust swarms.',
		itemDrops: [
			'Abaddon\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Abdiel',
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
		race: 'Herald',
		level: 58,
		hp: 9000,
		stats: {
			st: 60,
			vi: 44,
			ma: 59,
			ag: 43,
			lu: 33
		},
		skills: [
			'Light\'s Descent',
			'Pierce Armor',
			'Dark Sword',
			'Myriad Slashes',
			'Agidyne',
			'Maragidyne',
			'Mighty Cleave'
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
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A high-ranking angel that is wholly devoted to God. The name Abdiel carries the meaning of "slave to God," which supposedly originates from the Arabic word for "slave".\nOf the angels who followed Satan, Abdiel was the only one to reject the temptation to rebel against God, and instead received God\'s praises for returning to His side. Abdiel then led the angels to fight against Lucifer.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Origin,
		variant: 'Herald'
	},
	{
		name: 'Abdiel',
		skillPotential: {
			Phys: 5,
			Fire: 7,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 7,
			Almighty: 0,
			Ailment: 6,
			Recovery: 0,
			Support: 0
		},
		race: 'Nahobino',
		level: 83,
		hp: 21000,
		stats: {
			st: 80,
			vi: 60,
			ma: 85,
			ag: 52,
			lu: 73
		},
		skills: [
			'Agibarion',
			'Mudobarion',
			'Maragibarion',
			'Megaton Press',
			'Tentarafoo',
			'Purgatorium',
			'Impetus'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
			},
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
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A high-ranking angel entirely devoted to carrying out God\'s will. Her name carries the meaning of "slave to God," which supposedly originates from the Arabic word for "slave."\nOf all the angels who followed Lucifer, Abdiel was the only one to reject the temptation to rebel against God, and instead received praise for returning to His side.\nAbdiel assumed her forbidden Nahobino form after fusing with Ichiro Dazai, proving just how far she would go to protect God\'s earthly and spiritual order.',
		itemDrops: [
			'Chakra Pot',
			'Bead Chain',
			'Balm of Life'
		],
		theme: BattleThemes.ShinMegamiTensei5.Abdiel,
		variant: 'Nahobino'
	},
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
		hp: 12000,
		stats: {
			st: 56,
			vi: 44,
			ma: 54,
			ag: 35,
			lu: 47
		},
		skills: [
			'Hellish Brand',
			'Deathbound'
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
			'Fire Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Droll
	},
	{
		name: 'Alilat',
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
		race: 'Lady',
		level: 81,
		hp: 8300,
		stats: {
			st: 42,
			vi: 49,
			ma: 52,
			ag: 51,
			lu: 53
		},
		skills: [
			'Megidolaon',
			'Concentrate'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The Arabian mother goddess also known as Allat.\nShe was thought to reside in the Black Stone at the Kaaba, where and her son, Dusura, were worshipped by desert nomads.',
		itemDrops: [
			'Large Glory Crystal',
			'Alilat\'s Essence'
		],
		theme: null
	},
	{
		name: 'Amanozako',
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
		race: 'Genma',
		level: 51,
		hp: 6400,
		stats: {
			st: 38,
			vi: 33,
			ma: 60,
			ag: 37,
			lu: 43
		},
		skills: [
			'Mazionga',
			'Mazanma',
			'Energy Drain',
			'Tentarafoo',
			'Makarakarn',
			'Heavenly Counter',
			'Diarama'
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A Japanese goddess commonly thought to be the ancestor of the tengu and amanojaku.\nThe famed warrior Susano-o once allowed his tempestuous spirit to build up to such an intense degree, he vomited her out as a result. Similarly to Susano-o, she has a wild personality and tends to go on a rampage if she doesn\'t get her way. It is said that she can hurl even the most powerful gods a great distance, and that her fangs can mangle the very sharpest of blades. Like amanojaku, she is prone to doing the exact opposite of what is expected.',
		itemDrops: [
			'Grimoire',
			'Grimoire'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity,
		variant: 'Berserk'
	},
	{
		name: 'Amon',
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
		race: 'Tyrant',
		level: 73,
		hp: 15000,
		stats: {
			st: 54,
			vi: 61,
			ma: 63,
			ag: 36,
			lu: 52
		},
		skills: [
			'Megido Flame',
			'Agidyne',
			'Nihil Claw',
			'Tentarafoo',
			'Madness Nails',
			'Marakunda',
			'Makarakarn'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of Solomon\'s Ars Goetia.\nHe is the seventh spirit of Goetia and the Grand Marquis of Hell. Amon is depicted in several different forms, sometimes appearing as a wolf with a serpent\'s tail and other times appearing as having the head of an owl, the torso of a wolf and the tail of a snake sometimes replacing his hind legs altogether. It is said that he bestows knowledge of the past and the future. He is also incredibly loyal, having led his army to assist Satan when Satan rebelled against God.',
		itemDrops: [
			'Amon\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.HumansDemonsAnd
	},
	{
		name: 'Anahita',
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
		race: 'Megami',
		level: 18,
		hp: 1800,
		stats: {
			st: 16,
			vi: 13,
			ma: 21,
			ag: 11,
			lu: 16
		},
		skills: [
			'Hellish Spurt',
			'Rakunda',
			'Bufu',
			'Mahama',
			'Matarunda'
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A Zoroastrian goddess whose name means "pure."\nWhile primarily known as a beautiful deity who rules over rivers and water, she is also the goddess of health, fertility, safe delivery, production of livestock, harvest, wealth and expansion of land. She is often portrayed as an elegant virgin wearing a crown decorated with numerous stars in addition to a golden necklace and a golden cape, and is typically shown holding a water jug. She is also a brave god of war astride a four-wheeled chariot, toppling demons and tyrants alike. Both her allies and her enemies have been said to have offered their prayers to her.',
		itemDrops: [
			'Ice Gem',
			'Ice Gem'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seeker
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
		level: 19,
		hp: 400,
		stats: {
			st: 15,
			vi: 14,
			ma: 13,
			ag: 14,
			lu: 13
		},
		skills: [
			'Zan',
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
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Strength
	},
	{
		name: 'Apsaras',
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
		race: 'Yoma',
		level: 16,
		hp: 380,
		stats: {
			st: 12,
			vi: 11,
			ma: 13,
			ag: 10,
			lu: 9
		},
		skills: [
			'Bufu'
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
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'Water spirits in Hindu lore.\nThey are beautiful young women who dance for the gods. They also guide heroes who fall in battle to paradise.',
		itemDrops: [
			'Ice Gem'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seeker
	},
	{
		name: 'Arahabaki',
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
		race: 'Kunitsu',
		level: 62,
		hp: 8000,
		stats: {
			st: 42,
			vi: 31,
			ma: 58,
			ag: 34,
			lu: 36
		},
		skills: [
			'Spirit Drain',
			'Megidola',
			'Debilitate',
			'Donum Gladi',
			'Donum Magici'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A major deity in ancient Japanese mythology. Clay dolls were often sculpted in its image.\nHowever, because this god was known to be worshipped by a rebel, the dolls later came to be considered symbols of defiance.',
		itemDrops: [
			'Dispel Charm',
			'Dispel Charm'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Arioch',
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
		race: 'Tyrant',
		level: 55,
		hp: 5400,
		stats: {
			st: 55,
			vi: 46,
			ma: 51,
			ag: 40,
			lu: 32
		},
		skills: [
			'Brave Blade',
			'Mighty Cleave',
			'Bufudyne',
			'Hades Blast',
			'Mabufudyne'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'The fallen angel of Israel and the demon of vengeance.\nHis name means "ferocious lion" and he is said to aid in vengeance of those who seek his service. During his time as an angel of God, he was recognized as the guardian angel of the saint Enoch. It is said that his name originally belonged to one in either the Book of Genesis or the Book of Daniel, only to become associated with the demon thereafter.',
		itemDrops: [
			'Ice Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.HumansDemonsAnd
	},
	{
		name: 'Artemis',
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
		race: 'Megami',
		level: 37,
		hp: 4200,
		stats: {
			st: 36,
			vi: 28,
			ma: 28,
			ag: 30,
			lu: 26
		},
		skills: [
			'Astral Saintstrike',
			'Lullaby',
			'Mabufula',
			'Zionga',
			'Headcrush',
			'Somersault',
			'Tarukaja'
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The Greek goddess of hunting and chastity. She was often identified with the moon goddess Selene and was therefore also worshipped as a moon goddess herself.\nLike her twin brother, Apollo, her association with archery granted her the title of "far-shooter" in addition to being recognized as a bringer of plague and death. This is depicted in myth, in which she is deceived by Apollo and shoots her beloved Orion.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Addition
	},
	{
		name: 'Asura',
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
		race: 'Fury',
		level: 71,
		hp: 9000,
		stats: {
			st: 64,
			vi: 50,
			ma: 55,
			ag: 43,
			lu: 42
		},
		skills: [
			'Power Punch',
			'Hades Blast',
			'Agidyne',
			'Critical Aura',
			'Dekunda',
			'Megidola'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A violent group of demons in Hindu lore.\nThey were very powerful and caused the gods great trouble. They are a fiercely strict group and attack anyone who runs counter to their ideals. They were originally gods of light worshipped in Persia. The Zoroastrian god Ahura Mazda was one of them.',
		itemDrops: [
			'Asura\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Baal',
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
		race: 'Deity',
		level: 69,
		hp: 13000,
		stats: {
			st: 60,
			vi: 47,
			ma: 70,
			ag: 44,
			lu: 55
		},
		skills: [
			'Maziodyne',
			'Mist Rush',
			'Agidyne',
			'Tentarafoo',
			'Megidola',
			'Ice Block',
			'Sukukaja'
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The chief Semitic god.\nBearing a name that means "Lord" or "owner," he was revered as a god of fertility in addition to being known as the god of Canaan and both brother and consort to the goddess Anat. Many demons, such as Bael, Beelzebub, Belphegor and Berith are believed to be derivations of Baal. There were even instances of him being worshipped in the very same temples as Yahweh (YHVH) in times long since passed.',
		itemDrops: [
			'Baal\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.DancingCrazyMurder
	},
	{
		name: 'Baihu',
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
		race: 'Holy',
		level: 43,
		hp: 4750,
		stats: {
			st: 39,
			vi: 27,
			ma: 21,
			ag: 44,
			lu: 35
		},
		skills: [
			'Damascus Claw',
			'Mazionga',
			'Fierce Roar',
			'Frenzied Chomp'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Weak',
				Charm: 'Resist',
				Seal: 'Resist'
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
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the west, the season of autumn, and the element of metal. It is believed to be the king of all beasts.',
		itemDrops: [
			'Baihu\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Belial',
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
		race: 'Tyrant',
		level: 80,
		hp: 18000,
		stats: {
			st: 102,
			vi: 61,
			ma: 82,
			ag: 65,
			lu: 52
		},
		skills: [
			'Mudobarion',
			'Maragibarion',
			'Debilitate',
			'Hell Thrust',
			'Charge',
			'Mamudobarion'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'One of the 72 demons of Goetia invoked by King Solomon.\nHe leads 50 legions of demons as their chief and is said to appear before his conjurer as two beautiful angels in a chariot of fire. His name means "worthless," and he is known to be exceptionally cunning, having caused the fall of Sodom and Gomorrah in addition to persecuting Jesus Christ.',
		itemDrops: [
			'Fire Sutra',
			'Grimoire',
			'Grimoire'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Belphegor',
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
		race: 'Tyrant',
		level: 38,
		hp: 4900,
		stats: {
			st: 47,
			vi: 23,
			ma: 42,
			ag: 26,
			lu: 26
		},
		skills: [
			'Bufula',
			'Mamudoon',
			'Concentrate',
			'Matarunda',
			'Marin Karin'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'Demonic governor of the deadly sin of sloth who also excels at both invention and discovery.\nIt is rumored that he may be the disgraced form of Baal Peor, Syrian god of abundant crops.',
		itemDrops: [
			'Grimoire',
			'Grimoire'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Bishamonten',
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
		race: 'Kishin',
		level: 58,
		hp: 7560,
		stats: {
			st: 46,
			vi: 41,
			ma: 44,
			ag: 40,
			lu: 38
		},
		skills: [
			'Tarukaja',
			'Puncture Punch',
			'Agidyne',
			'Deathbound',
			'Maragidyne'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The strongest of the Four Heavenly Kings, also known as Tamonten, and in Buddhist mythology, Vaishravana.\nHe protects the North and is recognized as the god of war. Similarly to his fellow kings, he is often depicted as a fierce warrior, clad in armor and wielding a great spear. Bishamonten is also well known as a bringer of fortune, being one of the Shichi Fukujin, the seven gods of fortune.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Bishamonten',
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
		race: 'Kishin',
		level: 65,
		hp: 10000,
		stats: {
			st: 47,
			vi: 45,
			ma: 43,
			ag: 31,
			lu: 43
		},
		skills: [
			'Tarukaja',
			'Sukukaja',
			'Agibarion',
			'Ragnarok',
			'Mist Rush',
			'Hades Blast',
			'Concentrate',
			'Megidolaon'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The strongest of the Four Heavenly Kings, also known as Tamonten, and in Buddhist mythology, Vaishravana.\nHe protects the North and is recognized as the god of war. Similarly to his fellow kings, he is often depicted as a fierce warrior, clad in armor and wielding a great spear. Bishamonten is also well known as a bringer of fortune, being one of the Shichi Fukujin, the seven gods of fortune.',
		itemDrops: [
			'Fire Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Black Frost',
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
		race: 'Night',
		level: 44,
		hp: 3900,
		stats: {
			st: 25,
			vi: 24,
			ma: 26,
			ag: 20,
			lu: 25
		},
		skills: [
			'Mabufula',
			'Tarunda',
			'Black Dracostrike'
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
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A Jack Frost that grew powerful and evil.\nThese are the evolved form of the fairly peaceful winter fairy and mark the transformation from small prankster into massively powerful entity.',
		itemDrops: [
			'Ice Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Droll
	},
	{
		name: 'Black Rider',
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
		race: 'Fiend',
		level: 52,
		hp: 4900,
		stats: {
			st: 35,
			vi: 32,
			ma: 40,
			ag: 34,
			lu: 35
		},
		skills: [
			'Soul Divide',
			'Glacial Blast',
			'Megidolaon',
			'Dekaja',
			'Call Souls'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Null',
				Charm: 'Resist',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides a black horse and carries scales, indicating the terrible famine he is to bring. He also has been given the authority to end the lives of those who are suffering.',
		itemDrops: [
			'Large Glory Crystal',
			'Stamina Balm',
			'Ice Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Fiend
	},
	{
		name: 'Brimstone Star',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Matter',
		level: 85,
		hp: 750,
		stats: {
			st: 85,
			vi: 47,
			ma: 105,
			ag: 3,
			lu: 5
		},
		skills: [],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
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
		lore: 'A star of flames created by Lucifer.\nIn Milton\'s "Paradise Lost", the former angel is shown burning with passion, swearing to continue his rebellion, even after his defeat. Those who are hit with this falling star are said to be burned by his fiery will.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Eon
	},
	{
		name: 'Camael',
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
		race: 'Herald',
		level: 54,
		hp: 4600,
		stats: {
			st: 41,
			vi: 38,
			ma: 51,
			ag: 26,
			lu: 36
		},
		skills: [
			'Agidyne',
			'Hades Blast',
			'Diarama'
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
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'The angel of god in Jewish mythology. He rules over the angels known as the Powers, and his name Camael means "one who sees god."\nHe is also the commander of the angels of destruction, punishment, and death in addition to being the ruler of Mars.',
		itemDrops: [
			'Purge Charm',
			'Dispel Charm'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seraph
	},
	{
		name: 'Chernobog',
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
		race: 'Fury',
		level: 53,
		hp: 8000,
		stats: {
			st: 44,
			vi: 29,
			ma: 38,
			ag: 25,
			lu: 45
		},
		skills: [
			'Dark Sword',
			'Blight',
			'Toxic Spray',
			'Fang Breaker',
			'Pierce Armor',
			'Blinding Strike',
			'Mamudoon'
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
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The god of night, evil and death in Slavic lore. His name means "black god".\nLike many other gods of the dead, he is said to live below the earth. His counterpart is Belobog, the "white god." Despite being feared, he was also worshipped. The curse, "May the black god end you," is still used in Ukraine to this day.',
		itemDrops: [
			'Dispel Charm',
			'Dispel Charm',
			'Large Glory Crystal'
		],
		theme: BattleThemes.ShinMegamiTensei5.Strength
	},
	{
		name: 'Chimera',
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
		race: 'Holy',
		level: 50,
		hp: 6500,
		stats: {
			st: 60,
			vi: 45,
			ma: 44,
			ag: 31,
			lu: 29
		},
		skills: [
			'Frenzied Chomp',
			'Severing Bite',
			'Maragion',
			'Ziodyne'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Weak',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A monster that is part lion, part goat, and part snake.\nOriginally a symbol representing the seasons, it became a violent monster adopted into Greek mythology. Its father is Typhon and its mother Echidna.',
		itemDrops: [
			'Horn of Plenty'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Cleopatra',
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
		race: 'Femme',
		level: 61,
		hp: 14000,
		stats: {
			st: 40,
			vi: 32,
			ma: 80,
			ag: 44,
			lu: 59
		},
		skills: [
			'Frolic',
			'Mazandyne',
			'Mabufudyne',
			'Hamabarion',
			'Hysterical Slap',
			'Mabufubarion'
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
				'Dark'
			],
			resist: [
				'Fire',
				'Ice',
				'Elec',
				'Wind'
			],
			null: [],
			drain: [
				'Light'
			],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'More specifically, Cleopatra VII. Her name means "glory of the father" in Greek.\nShe is known as one of the greatest beauties ever to live, having charmed many with her musical voice and conversation skills. It is said that all of history would have unfolded differently had even her nose been longer or shorter.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Addition
	},
	{
		name: 'Cocytus Star',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Matter',
		level: 85,
		hp: 750,
		stats: {
			st: 85,
			vi: 47,
			ma: 105,
			ag: 3,
			lu: 5
		},
		skills: [],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
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
			ethical: 'Neutral'
		},
		lore: 'A star of ice created by Lucifer.\nIn Dante\'s "Divine Comedy", the former angel is shown buried in the frozen Cocytus, deep within the darkest depths of the underworld. Those who are hit with this falling star are said to be frozen even long after death.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Eon
	},
	{
		name: 'Daisoujou',
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
		race: 'Fiend',
		level: 30,
		hp: 2500,
		stats: {
			st: 15,
			vi: 12,
			ma: 31,
			ag: 24,
			lu: 35
		},
		skills: [
			'Preach',
			'Meditation',
			'Mamudo',
			'Mahama'
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
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'A monk who died while fasting for the sake of humanity. Because of his intense spiritual power, his body continues to exist without rotting.\nIt is said that on the day of salvation, he will appear in front of humankind once again.',
		itemDrops: [
			'Large Glory Crystal',
			'Magic Balm',
			'Dark Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Fiend
	},
	{
		name: 'Danu',
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
		race: 'Lady',
		level: 81,
		hp: 13000,
		stats: {
			st: 60,
			vi: 32,
			ma: 88,
			ag: 66,
			lu: 59
		},
		skills: [
			'Matriarch\'s Love',
			'Megidolaon',
			'Hamabarion',
			'Mahamabarion',
			'Mortal Jihad',
			'Slumber Vortex',
			'Dragon Eye'
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The mother goddess of Celtic mythology. She is the mother of the Tuatha De Danann, a race of gods and also the world itself, having given birth to all life.\nDanu\'s large body is said to be lying down on earth to this day. The Munster region in Ireland, which is said to be especially blessed by her.',
		itemDrops: [
			'Danu\'s Essence',
			'Grimoire',
			'Grimoire'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Demi-fiend',
		skillPotential: {
			Phys: 8,
			Fire: 8,
			Ice: 8,
			Elec: 8,
			Force: 8,
			Light: 8,
			Dark: 8,
			Almighty: 8,
			Ailment: 8,
			Recovery: 4,
			Support: 4
		},
		race: 'King',
		level: 99,
		hp: 60000,
		stats: {
			st: 99,
			vi: 99,
			ma: 99,
			ag: 99,
			lu: 99
		},
		skills: [
			'Freikugel',
			'Gaea Rage',
			'Javelin Rain',
			'Deadly Fury',
			'Chaotic Will',
			'Mediarahan'
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
			weak: [],
			resist: [
				'Phys',
				'Fire',
				'Ice',
				'Elec',
				'Force',
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
		lore: 'Once an ordinary high school student, now the bane of God\'s creation. On the whim of a certain blond-haired child, he was made to survive the Conception, but at the cost of a gruesome transformation. After emerging from the Shinjuku Medical Center with the body of a demon, he became the Demi-fiend of legend, as prophesied in the Scripture of Miroku.',
		itemDrops: [
			'Demi-fiend\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.DemiFiend
	},
	{
		name: 'Depraved Arm',
		skillPotential: {
			Phys: 5,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Nahobino',
		level: 83,
		hp: 4000,
		stats: {
			st: 60,
			vi: 60,
			ma: 54,
			ag: 52,
			lu: 53
		},
		skills: [
			'Madness Nails',
			'Masukukaja'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Resist',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Resist'
			},
			weak: [
				'Light'
			],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A high-ranking angel entirely devoted to carrying out God\'s will. Her name carries the meaning of "slave to God," which supposedly originates from the Arabic word for "slave."\nOf all the angels who followed Lucifer, Abdiel was the only one to reject the temptation to rebel against God, and instead received praise for returning to His side.\nAbdiel assumed her forbidden Nahobino form after fusing with Ichiro Dazai, proving just how far she would go to protect God\'s earthly and spiritual order.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Abdiel
	},
	{
		name: 'Depraved Wing',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 5
		},
		race: 'Nahobino',
		level: 83,
		hp: 4000,
		stats: {
			st: 54,
			vi: 60,
			ma: 54,
			ag: 52,
			lu: 53
		},
		skills: [
			'Makarakarn',
			'Luster Candy'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Resist',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Resist'
			},
			weak: [
				'Elec'
			],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A high-ranking angel entirely devoted to carrying out God\'s will. Her name carries the meaning of "slave to God," which supposedly originates from the Arabic word for "slave."\nOf all the angels who followed Lucifer, Abdiel was the only one to reject the temptation to rebel against God, and instead received praise for returning to His side.\nAbdiel assumed her forbidden Nahobino form after fusing with Ichiro Dazai, proving just how far she would go to protect God\'s earthly and spiritual order.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Abdiel
	},
	{
		name: 'Dionysus',
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
		race: 'Fury',
		level: 44,
		hp: 4000,
		stats: {
			st: 27,
			vi: 28,
			ma: 28,
			ag: 25,
			lu: 20
		},
		skills: [
			'Acrobat Kick',
			'Agilao',
			'Sexy Dance'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Null',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The Greek god of wine and theater. He had two births.\nMyth tells that Zeus took the premature Dionysus from his dying mother, Semele, and allowed him to mature inside his thigh so that the underdeveloped god might have a proper birth.',
		itemDrops: [
			'Battle Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seeker
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
		level: 20,
		hp: 750,
		stats: {
			st: 23,
			vi: 18,
			ma: 12,
			ag: 12,
			lu: 11
		},
		skills: [
			'Gram Slice',
			'Maragi'
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
			'Fire Gem'
		],
		theme: BattleThemes.ShinMegamiTensei5.Strength
	},
	{
		name: 'Fionn mac Cumhaill',
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
		race: 'Genma',
		level: 32,
		hp: 4100,
		stats: {
			st: 36,
			vi: 25,
			ma: 36,
			ag: 25,
			lu: 23
		},
		skills: [
			'Mac an Luin',
			'Dark Sword',
			'Pierce Armor',
			'Bufula',
			'Trisagion',
			'Tarukaja'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The leader of the Fianna, warriors who protected High King Cormac of Ireland. He was born as Deimne, but, due to his blond hair and white skin, he soon came to be called "Fionn," a name meaning "golden hair."\nWhen training under the druid, Finn Eces, he was ordered to cook the Salmon of Knowledge, and upon licking some of the salmon\'s fat from his thumb, he gained its knowledge. From that point on, it is said that Fionn could tap this knowledge any time he licked his thumb.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Origin
	},
	{
		name: 'Fionn mac Cumhaill',
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
		race: 'Genma',
		level: 66,
		hp: 14700,
		stats: {
			st: 63,
			vi: 46,
			ma: 58,
			ag: 42,
			lu: 44
		},
		skills: [
			'Mac an Luin',
			'Mist Rush',
			'Pierce Armor',
			'Bufudyne',
			'Maragidyne',
			'Tarukaja',
			'Fatal Sword',
			'Deathbound'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The leader of the Fianna, warriors who protected High King Cormac of Ireland. He was born as Deimne, but, due to his blond hair and white skin, he soon came to be called "Fionn," a name meaning "golden hair."\nWhen training under the druid, Finn Eces, he was ordered to cook the Salmon of Knowledge, and upon licking some of the salmon\'s fat from his thumb, he gained its knowledge. From that point on, it is said that Fionn could tap this knowledge any time he licked his thumb.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Origin
	},
	{
		name: 'Futsunushi',
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
		race: 'Wargod',
		level: 69,
		hp: 9000,
		stats: {
			st: 53,
			vi: 45,
			ma: 29,
			ag: 32,
			lu: 39
		},
		skills: [
			'Catastrophe',
			'Critical Aura',
			'Tarukaja'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Null',
				Poison: 'Resist',
				Confuse: 'Null',
				Charm: 'Resist',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The Nihonshoki sword deity who pacified Ashihara-no-Nakatasukuni.\nHis name comes from "futsu," the fashion in which things are cut, and "nushi," a term meaning, "nature as a god."',
		itemDrops: [
			'Battle Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Gabriel',
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
		race: 'Herald',
		level: 74,
		hp: 6000,
		stats: {
			st: 40,
			vi: 49,
			ma: 68,
			ag: 38,
			lu: 48
		},
		skills: [
			'Mabufudyne',
			'Bufudyne',
			'Mahamaon',
			'Hamaon'
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
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the four major angels. The name Gabriel means "God is my strength."\nActing as a messenger for God, Gabriel is the one who informed the virgin Mary of her pregnancy. Though often depicted with a feminine face, there are various interpretations suggesting Gabriel is not androgynous but is in fact a woman.',
		itemDrops: [
			'Gabriel\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seraph
	},
	{
		name: 'Garuda',
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
		race: 'Avian',
		level: 80,
		hp: 15900,
		stats: {
			st: 60,
			vi: 46,
			ma: 54,
			ag: 68,
			lu: 63
		},
		skills: [
			'Mazandyne',
			'Masukukaja',
			'Yabusame Shot',
			'Retaliate'
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
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A divine bird-man in Hindu mythology.\nHe hunts Nagas as a result of a dispute between the two creatures\' mothers. According to legend, he once fought with the gods, and was even granted immortality in exchange for becoming Vishnu\'s carrier.',
		itemDrops: [
			'Aiding Sutra',
			'Large Glory Crystal'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seeker
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
		level: 46,
		hp: 5200,
		stats: {
			st: 49,
			vi: 31,
			ma: 22,
			ag: 29,
			lu: 13
		},
		skills: [
			'Mighty Cleave',
			'Mamudoon',
			'Marakunda',
			'Deathbound',
			'Crusher Onslaught',
			'Tentarafoo'
		],
		resistances: {
			ailments: {
				Sleep: 'Weak',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
			'Girimekhala\'s Head'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
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
		level: 47,
		hp: 5200,
		stats: {
			st: 42,
			vi: 37,
			ma: 21,
			ag: 24,
			lu: 30
		},
		skills: [
			'Makajama',
			'Sukukaja',
			'Crusher Onslaught',
			'Rampage',
			'Storm Dracostrike',
			'Critical Aura'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Weak',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
			'Balm of Life'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Hell Biker',
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
		race: 'Fiend',
		level: 36,
		hp: 3900,
		stats: {
			st: 12,
			vi: 23,
			ma: 14,
			ag: 34,
			lu: 32
		},
		skills: [
			'Hell Spin',
			'Hell Exhaust',
			'Hell Burner',
			'Dekunda',
			'Tentarafoo'
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
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'A biker-turned-Fiend that claims to come from Hell.\nArmed with an intense hatred of himself and the world, his reliance solely on his own poewr turned him into this abominable figure.',
		itemDrops: [
			'Large Glory Crystal',
			'Agility Balm',
			'Force Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Fiend
	},
	{
		name: 'Horus',
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
		race: 'Deity',
		level: 46,
		hp: 5000,
		stats: {
			st: 41,
			vi: 28,
			ma: 51,
			ag: 81,
			lu: 62
		},
		skills: [
			'Rampage',
			'White Dracostrike',
			'Mahama',
			'Mahamaon',
			'Megido',
			'Sukukaja',
			'Masukunda'
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'An ancient god of Egypt known for having the sun and moon as his watchful eyes.\nHe was revered by some as the principal god, most likely due to his association with the celestial bodies above. Myth often depicts him as a hawk or a falcon.',
		itemDrops: [
			'Horus\'s Head'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seeker
	},
	{
		name: 'Huang Long',
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
		race: 'Dragon',
		level: 70,
		hp: 10000,
		stats: {
			st: 51,
			vi: 43,
			ma: 56,
			ag: 44,
			lu: 46
		},
		skills: [
			'Megidolaon',
			'Mazandyne',
			'Maragidyne',
			'Maziodyne',
			'Mabufudyne'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'One of the holy dragons of Chinese lore, the Golden Dragon appears in times of great fortune or joy.\nHis dominion over the earth extends to the four gods Qing Long, Xuanwu, Zhuquem and Baihu.',
		itemDrops: [
			'Huang Long\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.HumansDemonsAnd
	},
	{
		name: 'Hydra',
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
		race: 'Drake',
		level: 15,
		hp: 1550,
		stats: {
			st: 21,
			vi: 16,
			ma: 15,
			ag: 7,
			lu: 12
		},
		skills: [
			'Frenzy',
			'Toxic Breath',
			'Fire Breath'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Null',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
		lore: 'One of the monsters in Greek mythology. It is usually depicted as having 9 heads, but some may say that it has as many as 100.\nIts father is Typhon, giant of the wind, and its mother is Echidna, goddess of the snake. The Hydra has incredible regenerating power; so much so that when one of its heads is cut off, two more will sprout from the wound. It is also extremely venomous and simply inhaling its breath is enough to kill. The slaying of Hydra is listed as one of the 12 great labors of Hercules.',
		itemDrops: [
			'Bead'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Inanna',
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
		race: 'Lady',
		level: 81,
		hp: 30000,
		stats: {
			st: 400,
			vi: 32,
			ma: 120,
			ag: 50,
			lu: 59
		},
		skills: [
			'Raging Hellfire',
			'Raging Blizzard',
			'Raging Lightning',
			'Raging Tempest',
			'Freikugel',
			'Concentrate'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The Sumerian goddess of fertility.\nHer name means "Lady of Heaven," and she is often viewed as one and the same with Aphrodite, Ishtar, and Venus. She is also a goddess of warfare, and it is said that even male gods feared her great power.',
		itemDrops: [
			'Inanna\'s Essence',
			'Grimoire',
			'Grimoire'
		],
		theme: BattleThemes.ShinMegamiTensei5.DancingCrazyMurder
	},
	{
		name: 'Ishtar',
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
		race: 'Lady',
		level: 52,
		hp: 7500,
		stats: {
			st: 23,
			vi: 33,
			ma: 60,
			ag: 37,
			lu: 44
		},
		skills: [
			'Dreadful Gleam',
			'Ziodyne',
			'Mazionga',
			'Hamaon',
			'Mahamaon',
			'Sexy Dance',
			'Diarama',
			'Marakunda'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A Mesopotamian goddess of love and war. Dubbed the "Queen of Heaven," the planet Venus was often seen as the embodiment of the goddess herself.\nIn the Epic of Gilgamesh, she makes many heroes her lovers, but the story also foretells that she will eventually kill them or turn them into animals.',
		itemDrops: [
			'Chakra Pot'
		],
		theme: BattleThemes.ShinMegamiTensei5.DancingCrazyMurder
	},
	{
		name: 'Jatayu',
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
		race: 'Avian',
		level: 25,
		hp: 3400,
		stats: {
			st: 17,
			vi: 22,
			ma: 16,
			ag: 25,
			lu: 23
		},
		skills: [
			'Critical Wave',
			'Zanma',
			'Sukukaja',
			'Lunge'
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
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'The Hindu king of birds.\nIn the Ramayana, he fought bravely against Ravana in an attempt to save Sita, the wife of Rama, the seventh avatar of Vishnu. However, he was unfortunately defeated.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Jikokuten',
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
		race: 'Kishin',
		level: 51,
		hp: 5920,
		stats: {
			st: 41,
			vi: 40,
			ma: 39,
			ag: 31,
			lu: 33
		},
		skills: [
			'Marakunda',
			'Charge',
			'Mabufula',
			'Fogna',
			'Dark Sword',
			'Deathbound'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Jikokuten, protector of the East, is one of the Four Heavenly Kings in Buddhist mythology.\nHe is also known as Dhritarashtra, and similarly to his fellow kings, is often depicted as a fierce warrior, clad in armor and wielding a sword. As his name suggests, it is said that he bestows serenity upon a country.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Jikokuten',
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
		race: 'Kishin',
		level: 65,
		hp: 8800,
		stats: {
			st: 43,
			vi: 45,
			ma: 43,
			ag: 31,
			lu: 43
		},
		skills: [
			'Marakunda',
			'Charge',
			'Bufubarion',
			'Glacial Blast',
			'Dark Sword',
			'Deathbound',
			'Makarakarn',
			'Megidolaon'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Jikokuten, protector of the East, is one of the Four Heavenly Kings in Buddhist mythology.\nHe is also known as Dhritarashtra, and similarly to his fellow kings, is often depicted as a fierce warrior, clad in armor and wielding a sword. As his name suggests, it is said that he bestows serenity upon a country.',
		itemDrops: [
			'Ice Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Khonsu',
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
		race: 'Deity',
		level: 64,
		hp: 11200,
		stats: {
			st: 76,
			vi: 49,
			ma: 80,
			ag: 39,
			lu: 46
		},
		skills: [
			'Agidyne',
			'Hamaon',
			'Mahamaon',
			'Dark Sword',
			'Karnak',
			'Debilitate',
			'Diarama'
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The Egyptian god of the moon.\nOften portrayed as a mummy with two long braids of hair, he is said to be a reincarnation of the moon itself and holds possession over what\'s known as the moon ship. He also acts as a companion to the Pharaoh\'s shadow. Hieroglyphics found in Unas\' pyramid depict him as a god who prepares meals for an oppressive, god-devouring king.',
		itemDrops: [
			'Health Incense',
			'Stamina Incense'
		],
		theme: BattleThemes.ShinMegamiTensei5.DancingCrazyMurder
	},
	{
		name: 'Khonsu Ra',
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
		race: 'Deity',
		level: 82,
		hp: 20000,
		stats: {
			st: 75,
			vi: 50,
			ma: 85,
			ag: 51,
			lu: 54
		},
		skills: [
			'Agidyne',
			'Hamaon',
			'Mahamaon',
			'Megidolaon',
			'Freikugel',
			'Mesektet\'s Path',
			'Heliopolis Dawn'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The form of the Egyptian god of the Moon, Khonsu, upon gaining the power of the sun god, Ra.\nHidden behind a foreboding mask, he possesses the dual powers of the sun and moon, the day and night, and the living and the dead.',
		itemDrops: [
			'Health Balm',
			'Stamina Balm'
		],
		theme: BattleThemes.ShinMegamiTensei5.HumansDemonsAnd
	},
	{
		name: 'King Frost',
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
		race: 'Tyrant',
		level: 28,
		hp: 3900,
		stats: {
			st: 25,
			vi: 19,
			ma: 38,
			ag: 13,
			lu: 12
		},
		skills: [
			'King Bufula',
			'Bufula',
			'Bufu',
			'Berserker God'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'The king of snow who rules over an infinite number of Jack Frosts.\nHe has the power to freeze the entire world but is unaware of it due to his rather naïve personality.',
		itemDrops: [
			'Chakra Drop',
			'Chakra Drop'
		],
		theme: BattleThemes.ShinMegamiTensei5.Droll
	},
	{
		name: 'Koumokuten',
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
		race: 'Kishin',
		level: 44,
		hp: 3900,
		stats: {
			st: 37,
			vi: 34,
			ma: 35,
			ag: 30,
			lu: 31
		},
		skills: [
			'Marakunda',
			'Masukunda',
			'Mazanma',
			'Fang Breaker',
			'Crusher Onslaught'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Koumokuten, protector of the West, is one of the Four Heavenly Kings of Buddhist mythology.\nSimilarly to his fellow kings, he is often depicted as a fierce warrior, clad in armor and wielding a trident. He is also known as Virupaksha and is said to keep a close eye on the world with his sharp gaze, preaching to the people all the while.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Koumokuten',
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
		race: 'Kishin',
		level: 65,
		hp: 8800,
		stats: {
			st: 43,
			vi: 45,
			ma: 43,
			ag: 31,
			lu: 43
		},
		skills: [
			'Marakunda',
			'Masukunda',
			'Zanbarion',
			'Killing Wind',
			'Fang Breaker',
			'Rampage',
			'Mazanbarion',
			'Impaler\'s Animus'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Koumokuten, protector of the West, is one of the Four Heavenly Kings of Buddhist mythology.\nSimilarly to his fellow kings, he is often depicted as a fierce warrior, clad in armor and wielding a trident. He is also known as Virupaksha and is said to keep a close eye on the world with his sharp gaze, preaching to the people all the while.',
		itemDrops: [
			'Force Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
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
		level: 34,
		hp: 3900,
		stats: {
			st: 40,
			vi: 26,
			ma: 32,
			ag: 16,
			lu: 16
		},
		skills: [
			'Dark Sword',
			'Spirit Drain',
			'Zanma',
			'Critical Wave',
			'Mazanma'
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
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Seeker
	},
	{
		name: 'Lahmu',
		skillPotential: {
			Phys: 2,
			Fire: 2,
			Ice: 0,
			Elec: 0,
			Force: -4,
			Light: 0,
			Dark: 3,
			Almighty: 0,
			Ailment: 3,
			Recovery: 0,
			Support: 0
		},
		race: 'Vile',
		level: 23,
		hp: 700,
		stats: {
			st: 18,
			vi: 18,
			ma: 18,
			ag: 18,
			lu: 17
		},
		skills: [
			'Mudo'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A god that appears in Babylonian mythology.\nBorn from Apsu and Tiamat, he and his sister, Lahamu, gave birth to Anshar and Kishar. Lahmu is at times depicted as a large serpent, but has also been illustrated as a man wearing a red sash with six curls in his hair. Regardless, he is always shown alongside Lahamu and it is thought that together they represent the slit in the sea where Apsu\'s fresh water and Tiamat\'s sea water mix.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Strength,
		variant: 'Bound'
	},
	{
		name: 'Lahmu',
		skillPotential: {
			Phys: 2,
			Fire: 2,
			Ice: 3,
			Elec: 0,
			Force: -4,
			Light: 0,
			Dark: 3,
			Almighty: 0,
			Ailment: 3,
			Recovery: 0,
			Support: 0
		},
		race: 'Vile',
		level: 38,
		hp: 350,
		stats: {
			st: 22,
			vi: 28,
			ma: 27,
			ag: 26,
			lu: 26
		},
		skills: [
			'Babylon Curse',
			'Bufula',
			'Zionga',
			'Mudo',
			'Charge'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A god that appears in Babylonian mythology.\nBorn from Apsu and Tiamat, he and his sister, Lahamu, gave birth to Anshar and Kishar. Lahmu is at times depicted as a large serpent, but has also been illustrated as a man wearing a red sash with six curls in his hair. Regardless, he is always shown alongside Lahamu and it is thought that together they represent the slit in the sea where Apsu\'s fresh water and Tiamat\'s sea water mix.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Strength,
		variant: 'Bound'
	},
	{
		name: 'Lahmu',
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
		race: 'Vile',
		level: 38,
		hp: 3600,
		stats: {
			st: 32,
			vi: 23,
			ma: 34,
			ag: 26,
			lu: 30
		},
		skills: [
			'Silt of Ruin',
			'Mudoon',
			'Bufula',
			'Purple Smoke',
			'Tentarafoo',
			'Mazionga'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Null',
				Charm: 'Resist',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A god that appears in Babylonian mythology.\nBorn from Apsu and Tiamat, he and his sister, Lahamu, gave birth to Anshar and Kishar. Lahmu is at times depicted as a large serpent, but has also been illustrated as a man wearing a red sash with six curls in his hair. Regardless, he is always shown alongside Lahamu and it is thought that together they represent the slit in the sea where Apsu\'s fresh water and Tiamat\'s sea water mix.',
		itemDrops: [
			'Bead',
			'Chakra Pot'
		],
		theme: BattleThemes.ShinMegamiTensei5.HumansDemonsAnd,
		variant: 'Unbound'
	},
	{
		name: 'Lahmu\'s Tentacle',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Vile',
		level: 38,
		hp: 800,
		stats: {
			st: 27,
			vi: 23,
			ma: 27,
			ag: 6,
			lu: 6
		},
		skills: [],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
			},
			weak: [
				'Wind',
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
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A god that appears in Babylonian mythology.\nBorn from Apsu and Tiamat, he and his sister, Lahamu, gave birth to Anshar and Kishar. Lahmu is at times depicted as a large serpent, but has also been illustrated as a man wearing a red sash with six curls in his hair. Regardless, he is always shown alongside Lahamu and it is thought that together they represent the slit in the sea where Apsu\'s fresh water and Tiamat\'s sea water mix.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Strength
	},
	{
		name: 'Leanan Sidhe',
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
		race: 'Femme',
		level: 17,
		hp: 350,
		stats: {
			st: 10,
			vi: 12,
			ma: 10,
			ag: 10,
			lu: 9
		},
		skills: [
			'Mudo'
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
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A beautiful faerie of Irish lore whose name means "faerie mistress."\nShe drains the life of her lovers in return for granting them artistic inspiration.',
		itemDrops: [
			'Dark Gem'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seeker
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
		hp: 400,
		stats: {
			st: 5,
			vi: 6,
			ma: 8,
			ag: 10,
			lu: 9
		},
		skills: [
			'Mazionga',
			'Marin Karin',
			'Zionga'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Null',
				Seal: 'Resist'
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
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Seeker
	},
	{
		name: 'Loki',
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
		race: 'Tyrant',
		level: 36,
		hp: 4200,
		stats: {
			st: 32,
			vi: 20,
			ma: 60,
			ag: 28,
			lu: 29
		},
		skills: [
			'Agilao',
			'Zionga',
			'Zanma',
			'Mabufula',
			'Pulinpa'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Weak',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A malevolent god of Norse mythology.\nThough not always driven by malice, he can be capricious and is quite cunning, and despite being a blood brother to Odin, he was punished for many of his wrong doings, including the murder of Odin\'s child, Baldur.',
		itemDrops: [
			'Magic Mirror'
		],
		theme: BattleThemes.ShinMegamiTensei5.Strength
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
		level: 28,
		hp: 3600,
		stats: {
			st: 30,
			vi: 23,
			ma: 30,
			ag: 21,
			lu: 17
		},
		skills: [
			'Souffle D\'éclair',
			'Fang Breaker',
			'Damascus Claw',
			'Axel Claw',
			'Critical Aura'
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
			'Elec Gem',
			'Elec Gem'
		],
		theme: BattleThemes.ShinMegamiTensei5.Strength
	},
	{
		name: 'Lucifer',
		skillPotential: {
			Phys: 8,
			Fire: 8,
			Ice: 8,
			Elec: 8,
			Force: 8,
			Light: 8,
			Dark: 8,
			Almighty: 8,
			Ailment: 8,
			Recovery: 4,
			Support: 4
		},
		race: 'Matter',
		level: 90,
		hp: 11000,
		stats: {
			st: 88,
			vi: 40,
			ma: 110,
			ag: 56,
			lu: 68
		},
		skills: [
			'Agibarion',
			'Bufubarion',
			'Ziobarion',
			'Zanbarion',
			'Megidolaon',
			'Falling Star - Fire',
			'Falling Star - Ice',
			'Cold Dark Matter',
			'Hamabarion',
			'Mudobarion',
			'Diarama',
			'Tentarafoo',
			'Dekaja',
			'Dekunda'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
			},
			weak: [],
			resist: [
				'Phys'
			],
			null: [
				'Fire',
				'Ice',
				'Elec',
				'Force'
			],
			drain: [
				'Light'
			],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The Lord of Chaos who leads the fallen angels and is equated with Satan, according to Christian traditions.\nHis name holds the meaning of "one who brings light," indicating that he was once the most beautiful of the archangels. However, it is said that he rebelled against the almighty Creator and chose to become a fallen angel.\nAfter defeating the Creator during Armageddon, he ended up not assuming the Throne of Creation, and instead transcended to a higher plane of existence.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Eon,
		variant: 'Law'
	},
	{
		name: 'Lucifer',
		skillPotential: {
			Phys: 8,
			Fire: 8,
			Ice: 8,
			Elec: 8,
			Force: 8,
			Light: 8,
			Dark: 8,
			Almighty: 8,
			Ailment: 8,
			Recovery: 4,
			Support: 4
		},
		race: 'Matter',
		level: 90,
		hp: 16000,
		stats: {
			st: 80,
			vi: 60,
			ma: 90,
			ag: 76,
			lu: 60
		},
		skills: [
			'Freikugel',
			'Gaea Rage',
			'Magma Axis',
			'Deadly Fury',
			'Wild Dance',
			'Hot Dark Matter',
			'Contempt of God',
			'Holy Crucifixion',
			'Xeros Beat',
			'Javelin Rain'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
			},
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
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The Lord of Chaos who leads the fallen angels and is equated with Satan, according to Christian traditions.\nHis name holds the meaning of "one who brings light," indicating that he was once the most beautiful of the archangels. However, it is said that he rebelled against the almighty Creator and chose to become a fallen angel.\nAfter defeating the Creator during Armageddon, he ended up not assuming the Throne of Creation, and instead transcended to a higher plane of existence.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Eon,
		variant: 'Chaos'
	},
	{
		name: 'Lucifer',
		skillPotential: {
			Phys: 8,
			Fire: 8,
			Ice: 8,
			Elec: 8,
			Force: 8,
			Light: 8,
			Dark: 8,
			Almighty: 8,
			Ailment: 8,
			Recovery: 4,
			Support: 4
		},
		race: 'Matter',
		level: 90,
		hp: 30000,
		stats: {
			st: 88,
			vi: 65,
			ma: 115,
			ag: 61,
			lu: 73
		},
		skills: [
			'Inferno of God',
			'Hailstorm of God',
			'Lightning of God',
			'Tornado of God',
			'Megidolaon',
			'Morning Star',
			'Cold Dark Matter',
			'Evil Gleam',
			'Tentarafoo',
			'Dekaja',
			'Dekunda'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
			},
			weak: [],
			resist: [
				'Phys'
			],
			null: [
				'Fire',
				'Ice',
				'Elec',
				'Force'
			],
			drain: [
				'Light'
			],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The Lord of Chaos who leads the fallen angels and is equated with Satan, according to Christian traditions.\nHis name holds the meaning of "one who brings light," indicating that he was once the most beautiful of the archangels. However, it is said that he rebelled against the almighty Creator and chose to become a fallen angel.\nAfter defeating the Creator during Armageddon, he ended up not assuming the Throne of Creation, and instead transcended to a higher plane of existence.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Eon,
		variant: 'Law'
	},
	{
		name: 'Lucifer',
		skillPotential: {
			Phys: 5,
			Fire: 5,
			Ice: 5,
			Elec: 5,
			Force: 5,
			Light: 5,
			Dark: 5,
			Almighty: 5,
			Ailment: 5,
			Recovery: 2,
			Support: 2
		},
		race: 'Matter',
		level: 85,
		hp: 20000,
		stats: {
			st: 85,
			vi: 67,
			ma: 105,
			ag: 53,
			lu: 65
		},
		skills: [
			'Agibarion',
			'Bufubarion',
			'Ziobarion',
			'Zanbarion',
			'Megidolaon',
			'Falling Star - Fire',
			'Falling Star - Ice',
			'Cold Dark Matter',
			'Hamabarion',
			'Mudobarion'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
			},
			weak: [],
			resist: [
				'Phys'
			],
			null: [
				'Fire',
				'Ice',
				'Elec',
				'Force'
			],
			drain: [
				'Light'
			],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'The Lord of Chaos who leads the fallen angels and is equated with Satan, according to Christian traditions.\nHis name holds the meaning of "one who brings light," indicating that he was once the most beautiful of the archangels. However, it is said that he rebelled against the almighty Creator and chose to become a fallen angel.\nAfter defeating the Creator during Armageddon, he ended up not assuming the Throne of Creation, and instead transcended to a higher plane of existence.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Eon,
		variant: 'Law'
	},
	{
		name: 'Maria',
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
		race: 'Megami',
		level: 81,
		hp: 10000,
		stats: {
			st: 45,
			vi: 41,
			ma: 85,
			ag: 35,
			lu: 47
		},
		skills: [
			'Mahamabarion',
			'Mazanbarion',
			'Megidolaon',
			'Lullaby',
			'Patra',
			'Diarahan'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'The maternal figure of Christianity.\nGabriel informed her that she was to be the mother of Jesus. Some sects revere her as Virgin Mary, but other denominations do not focus on her.',
		itemDrops: [
			'Maria\'s Essence',
			'Grimoire',
			'Grimoire'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seraph
	},
	{
		name: 'Matador',
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
		race: 'Fiend',
		level: 24,
		hp: 3000,
		stats: {
			st: 31,
			vi: 15,
			ma: 29,
			ag: 35,
			lu: 22
		},
		skills: [
			'Andalucia',
			'Charge',
			'Mazan',
			'Red Capote',
			'Marakunda'
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
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'A master sportsman who entertains the audience at the cost of his own peril; even one small slip-up can spell certain death.\nIt is said that some of the men who die in this cruel game remain in this world as Fiends, bound by regret as well as the thirst for the cheers and excitement.',
		itemDrops: [
			'Large Glory Crystal',
			'Luck Balm',
			'Aiding Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Fiend
	},
	{
		name: 'Melchizedek',
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
		race: 'Herald',
		level: 79,
		hp: 2500,
		stats: {
			st: 54,
			vi: 46,
			ma: 54,
			ag: 68,
			lu: 62
		},
		skills: [
			'Mortal Jihad',
			'Hamaon',
			'Mahamaon',
			'Fogna'
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
			null: [
				'Dark'
			],
			drain: [
				'Light'
			],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A Christian Gnostic angel said to be the "savior of angels."\nIn the Bible, he is referred to as "Melchizedek, king of Saelm.',
		itemDrops: [
			'Chakra Pot',
			'Large Glory Crystal'
		],
		theme: null
	},
	{
		name: 'Mephisto',
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
		race: 'Tyrant',
		level: 79,
		hp: 16000,
		stats: {
			st: 51,
			vi: 44,
			ma: 55,
			ag: 48,
			lu: 41
		},
		skills: [
			'Walpurgisnacht',
			'Brave Blade',
			'Agibarion',
			'Makajamaon',
			'Luster Candy',
			'Impaler\'s Animus',
			'Stagnant Air',
			'Mamudobarion'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'More accurately, Mephistopheles. He is one of the princes of Hell and his name means "he who loves not the light".\nHe is commonly known as the demon summoned by Georg Faust. Other than Satan himself, he is the most feared commander in Hell. However, he despises having fallen into Hell and hates any and all humans who have been granted salvation. He is rather knowledgeable in the realms of astronomy, astrology and meteorology in addition to being a skilled illusionist who can manipulate all five senses.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Addition
	},
	{
		name: 'Metatron',
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
		race: 'Herald',
		level: 78,
		hp: 15000,
		stats: {
			st: 60,
			vi: 47,
			ma: 70,
			ag: 49,
			lu: 50
		},
		skills: [
			'Fire of Sinai',
			'Mahamaon',
			'Megidolaon',
			'Tarukaja',
			'Dekunda',
			'Dekaja',
			'Debilitate',
			'Mahamabarion'
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
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the most important angels in the hierarchy, yet the most mysterious.\nHe is the scribe and advocate of heaven.',
		itemDrops: [
			'Large Glory Crystal',
			'Metatron\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seraph
	},
	{
		name: 'Michael',
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
		race: 'Herald',
		level: 80,
		hp: 19000,
		stats: {
			st: 80,
			vi: 53,
			ma: 92,
			ag: 65,
			lu: 57
		},
		skills: [
			'Trisagion',
			'Brave Blade',
			'Mahamabarion',
			'Ragnarok',
			'Hades Blast',
			'Megidolaon'
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
			null: [
				'Fire',
				'Ice',
				'Light'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the four major angels, his name means "He who is like God."\nHe stands at the top of the angel hierarchy and carries a divine armament known to shatter any blade.',
		itemDrops: [
			'Light Sutra',
			'Grimoire',
			'Grimoire'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seraph
	},
	{
		name: 'Mithras',
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
		race: 'Tyrant',
		level: 71,
		hp: 8000,
		stats: {
			st: 55,
			vi: 44,
			ma: 65,
			ag: 45,
			lu: 50
		},
		skills: [
			'Maragidyne',
			'Mahamaon',
			'Rampage',
			'Concentrate',
			'Dekaja',
			'Megidola'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A sun deity who was worshipped in the Roman Empire from the 1st to the 4th century AD.\nThe rituals of the religion were secretive, but it is believed they entailed covering oneself in the blood of sheep and bulls. He was said to be reborn after death, inspiring worshippers to hold a festival each winter solstice.',
		itemDrops: [
			'Mithras\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Moloch',
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
		race: 'Tyrant',
		level: 51,
		hp: 4000,
		stats: {
			st: 40,
			vi: 36,
			ma: 46,
			ag: 34,
			lu: 38
		},
		skills: [
			'Agilao',
			'Megaton Press',
			'Rampage'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A Canaanite god of fire.\nTradition states that a bronze statue of a human with the head of a female ox would be placed at the altar as its vessel. It is said that the statue would first be heated with fire, then children would be put inside as a sacrifice. The Bible mentions its name as a cruel pagan god.',
		itemDrops: [
			'Fire Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Strength
	},
	{
		name: 'Morning Star',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Matter',
		level: 90,
		hp: 1300,
		stats: {
			st: 69,
			vi: 40,
			ma: 120,
			ag: 6,
			lu: 8
		},
		skills: [],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
			},
			weak: [
				'Fire',
				'Ice',
				'Elec',
				'Force'
			],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Neutral',
			ethical: 'Neutral'
		},
		lore: 'A star of light created by Lucifer.\nLucifer himself is also known as the "Morning Star", and it is this very star that represents both his rebellion and his fall from the heavens. Though it brought great destruction, Lucifer would nevertheless emerge as the victor in the new world, or so the legend says.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Eon
	},
	{
		name: 'Mother Harlot',
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
		race: 'Fiend',
		level: 64,
		hp: 10000,
		stats: {
			st: 42,
			vi: 45,
			ma: 45,
			ag: 33,
			lu: 42
		},
		skills: [
			'Babylon Goblet',
			'Death Lust',
			'Maziodyne',
			'Makajamaon',
			'Trisagion',
			'Dekunda'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Null',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'Reviled as the "Whore of Babylon" in the Book of Revelation.\nShe defies God from atop a scarlet-colored beast with seven heads and ten horns, and carries a golden cup brimming with abominations and the filth of her deeds.',
		itemDrops: [
			'Large Glory Crystal',
			'Magic Balm',
			'Battle Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Fiend
	},
	{
		name: 'Nuwa',
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
		race: 'Lady',
		level: 22,
		hp: 5900,
		stats: {
			st: 16,
			vi: 14,
			ma: 31,
			ag: 16,
			lu: 14
		},
		skills: [
			'Sacrifice of Clay',
			'Zanma',
			'Mazio'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Null',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A goddess that appears in Chinese mythology.\nRecognized as one of the sovereigns, she is said to have the head of a human and a body of a serpent. She is also known to be responsible for the creation of humanity, having created them from mud. Legend tells that when one of the four pillars said to hold up the world broke, she repaired it. Furthermore, her colleague Fuxi is typically labeled as either her brother or her husband, depending on what version of her story is told.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.HumansDemonsAnd,
		variant: 'Snake'
	},
	{
		name: 'Nuwa',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: 0,
			Elec: 8,
			Force: 7,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 3
		},
		race: 'Nahobino',
		level: 83,
		hp: 28000,
		stats: {
			st: 66,
			vi: 50,
			ma: 85,
			ag: 57,
			lu: 64
		},
		skills: [
			'Ziobarion',
			'Zanbarion',
			'Maziodyne',
			'Slumber Vortex',
			'Dekunda',
			'Electrify',
			'Lightning Pulse',
			'Rising Storm Dragon'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
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
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A goddess that appears in Chinese mythology.\nRecognized as one of the sovereigns, she is said to have the head of a human and a body of a serpent. She is also known to be responsible for the creation of humanity, having created them from mud.\nShe assumed the form of a Nahobino after fusing with the bearer of her Knowledge, Shohei Yakumo.',
		itemDrops: [
			'Chakra Pot',
			'Bead Chain',
			'Balm of Life'
		],
		theme: BattleThemes.ShinMegamiTensei5.Nuwa,
		variant: 'Nahobino'
	},
	{
		name: 'Odin',
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
		race: 'Deity',
		level: 72,
		hp: 18000,
		stats: {
			st: 72,
			vi: 60,
			ma: 67,
			ag: 52,
			lu: 47
		},
		skills: [
			'Gungnir',
			'Charge',
			'Concentrate',
			'Hades Blast',
			'Ziodyne',
			'Thunder Reign',
			'Mabufudyne',
			'Dekaja'
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
			null: [
				'Light',
				'Dark'
			],
			drain: [],
			repel: [
				'Elec'
			]
		},
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The All-Father in Norse Mythology. Warrior, sorcerer and near insatiable seeker of knowledge, he rides his eight-legged horse Sleipnir, armed with both Gungnir, his mighty spear and Draupnir, an enchanting ring.\nHe is known to have willingly sacrificed an eye to drink from the Well of Wisdom and is also recognized as the one who welcomes the souls of departed warriors as they cross over into Valhalla.',
		itemDrops: [
			'Soma'
		],
		theme: BattleThemes.ShinMegamiTensei5.HumansDemonsAnd
	},
	{
		name: 'Okuninushi',
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
		race: 'Kunitsu',
		level: 50,
		hp: 2200,
		stats: {
			st: 53,
			vi: 40,
			ma: 24,
			ag: 25,
			lu: 29
		},
		skills: [
			'Fatal Sword',
			'Media',
			'Critical Wave',
			'Agilao',
			'Me Patra',
			'Diarama'
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
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A Kunitsu deity of Japanese mythology that governs agriculture and medicine.\nSaid to have built the country of Izumo with Susano-o\'s daughter, Suseri-Hime. He is a peaceful god who prefers not to fight.',
		itemDrops: [
			'Small Glory Crystal',
			'Small Glory Crystal'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
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
		level: 17,
		hp: 1500,
		stats: {
			st: 19,
			vi: 23,
			ma: 12,
			ag: 10,
			lu: 11
		},
		skills: [
			'Heavy Blow',
			'Crusher Onslaught'
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
		alignment: {
			moral: 'Neutral',
			ethical: 'Chaos'
		},
		lore: 'A common demon in Japanese mythology. This terrifying and powerful creature is known to raid human villages for food, riches, and women.\nIt is characterized by red skin, horns on its head, long claws, and sharp fangs.',
		itemDrops: [
			'Revival Bead'
		],
		theme: BattleThemes.ShinMegamiTensei5.Droll
	},
	{
		name: 'Oyamatsumi',
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
		race: 'Kunitsu',
		level: 43,
		hp: 2000,
		stats: {
			st: 35,
			vi: 43,
			ma: 24,
			ag: 23,
			lu: 27
		},
		skills: [
			'Marakukaja',
			'Tetrakarn'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Weak',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'One of the Kunitsukami\'s in Japanese mythology. He is the grandfather of Susano-o\'s wife, Kushinada-Hime.\nHe is known as the god of the mountains but is also considered to be the god of water and rice fields because he ruled over water sources and harvests.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Oyamatsumi',
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
		race: 'Kunitsu',
		level: 48,
		hp: 5500,
		stats: {
			st: 48,
			vi: 50,
			ma: 42,
			ag: 25,
			lu: 29
		},
		skills: [
			'Ice Dracostrike',
			'Tarukaja',
			'Crusher Onslaught',
			'Mabufudyne',
			'Beatdown'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Weak',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'One of the Kunitsukami\'s in Japanese mythology. He is the grandfather of Susano-o\'s wife, Kushinada-Hime.\nHe is known as the god of the mountains but is also considered to be the god of water and rice fields because he ruled over water sources and harvests.',
		itemDrops: [
			'Kunitsu Keystone'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Pale Rider',
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
		race: 'Fiend',
		level: 57,
		hp: 5500,
		stats: {
			st: 44,
			vi: 40,
			ma: 38,
			ag: 37,
			lu: 51
		},
		skills: [
			'Pestilence',
			'Toxic Cloud',
			'Mabufudyne',
			'Call Evil',
			'Dekaja'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Confuse: 'Resist',
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
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides upon a sickly pale horse and bears the name "Death." The embodiment of Hell itself follows behind him, eager to claim his victims. Fittingly, he has been given authority to mete out widespread death and disease.',
		itemDrops: [
			'Large Glory Crystal',
			'Strength Balm',
			'Calamity Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Fiend
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
		level: 16,
		hp: 1000,
		stats: {
			st: 20,
			vi: 12,
			ma: 17,
			ag: 14,
			lu: 19
		},
		skills: [
			'Mudo',
			'Mamudo',
			'Pulinpa',
			'Mazan'
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
			'Force Gem',
			'Force Gem'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Principality',
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
		race: 'Divine',
		level: 28,
		hp: 1050,
		stats: {
			st: 12,
			vi: 15,
			ma: 16,
			ag: 12,
			lu: 14
		},
		skills: [
			'Mahama',
			'Diarama',
			'Hamaon'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
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
		alignment: {
			moral: 'Neutral',
			ethical: 'Law'
		},
		lore: 'The seventh of the nine orders of angels.\nThey are charged with overseeing the welfare of countries and civilizations.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Seeker
	},
	{
		name: 'Qing Long',
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
		race: 'Dragon',
		level: 45,
		hp: 4900,
		stats: {
			st: 36,
			vi: 37,
			ma: 41,
			ag: 33,
			lu: 31
		},
		skills: [
			'Bufula',
			'Wind Breath',
			'Matarunda',
			'Eat Whole'
		],
		resistances: {
			ailments: {
				Sleep: 'Weak',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the east, the season of spring, and the element of wood. It is the noblest of the Ssu-Ling and dwells in a palace at the bottom of the ocean. In Feng Shui, placing water to the east is known to guide its power, and is said to bring good fortune.',
		itemDrops: [
			'Qing Long\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Quetzalcoatl',
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
		race: 'Dragon',
		level: 34,
		hp: 2770,
		stats: {
			st: 30,
			vi: 23,
			ma: 35,
			ag: 24,
			lu: 24
		},
		skills: [
			'Maragion',
			'Zanma',
			'Masukunda',
			'Toxic Cloud'
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
				'Elec'
			],
			resist: [],
			null: [
				'Fire'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'An Aztec creator deity known as the Feathered Serpent.\nHe is identified as the sun and is also known as the god of wind and giver of breath. He is said to have created humans by sprinkling blood on the bones of people from a previously created world, and acts as guardian of their fertility and culture. According to legend, the planet Venus is actually Quetzalcoatl\'s heart.',
		itemDrops: [
			'Vitality Balm'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Raphael',
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
		race: 'Herald',
		level: 74,
		hp: 6000,
		stats: {
			st: 48,
			vi: 41,
			ma: 63,
			ag: 32,
			lu: 58
		},
		skills: [
			'Mazandyne',
			'Zandyne',
			'Diarahan',
			'Patra',
			'Makajamaon'
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
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the four major angels. His name means "healer."\nHe explains the history of the fallen angels and the creation of Adam and Eve.',
		itemDrops: [
			'Raphael\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seraph
	},
	{
		name: 'Red Rider',
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
		race: 'Fiend',
		level: 47,
		hp: 4000,
		stats: {
			st: 37,
			vi: 34,
			ma: 32,
			ag: 31,
			lu: 32
		},
		skills: [
			'Terrorblade',
			'Thunder Reign',
			'Zandyne',
			'Dekunda',
			'Call Soldiers'
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
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides a red horse and carries a greatsword. It is said that he has the power to destroy peace and make men slay one another.',
		itemDrops: [
			'Large Glory Crystal',
			'Health Balm',
			'Elec Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Fiend
	},
	{
		name: 'Seth',
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
		race: 'Drake',
		level: 62,
		hp: 10000,
		stats: {
			st: 66,
			vi: 53,
			ma: 59,
			ag: 37,
			lu: 35
		},
		skills: [
			'Madness Nails',
			'Maziodyne',
			'Mazandyne',
			'Tentarafoo',
			'Matarunda',
			'Frenzied Chomp'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Weak',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'The Egyptian god of the desert, chaos and evil.\nHe murdered his brother, Osiris, and tried to become chief god, but he was castrated by Osiris\' son, Horus.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Seeker
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
		level: 19,
		hp: 1600,
		stats: {
			st: 20,
			vi: 12,
			ma: 27,
			ag: 11,
			lu: 20
		},
		skills: [
			'Hama',
			'Mudo',
			'Makajama',
			'Tarukaja'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Weak',
				Charm: 'Resist',
				Seal: 'Resist'
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
			'Light Gem'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Shiva',
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
		race: 'Fury',
		level: 96,
		hp: 65535,
		stats: {
			st: 110,
			vi: 40,
			ma: 140,
			ag: 84,
			lu: 37
		},
		skills: [
			'Maragibarion',
			'Maziobarion',
			'Akashic Arts',
			'Hades Blast',
			'Megidolaon',
			'Tandava',
			'Impaler\'s Animus',
			'Dragon Eye'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'The great god who governs the destruction and creation of the world. He is the most worshipped god in Hinduism alongside Vishnu.\nIt is said that he purifies the world through destruction only to rebuild it anew, and though he casts terrifying destruction against the demons, he also blesses his followers. Shiva has been depicted in many ways, but the most common is for him to have four hands, one face and three eyes. He wields a trishula, or trident, and his third eye is said to emit a ray of light that destroys all it touches.',
		itemDrops: [
			'Shiva\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.Destruction
	},
	{
		name: 'Shohei Yakumo',
		skillPotential: {
			Phys: 3,
			Fire: 0,
			Ice: 0,
			Elec: 2,
			Force: 0,
			Light: 0,
			Dark: -2,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Meta',
		level: 46,
		hp: 6300,
		stats: {
			st: 57,
			vi: 43,
			ma: 36,
			ag: 40,
			lu: 35
		},
		skills: [
			'Galvanic Slash',
			'Mazionga',
			'Fatal Sword',
			'Deathbound',
			'Tarukaja',
			'Dekaja',
			'Mist Rush'
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
				'Dark'
			],
			resist: [
				'Phys',
				'Elec'
			],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A man who eradicates demons for the sake of humanity\'s spiritual independence. Curiously, he happens to operate alongside one such demon: a goddess named Nuwa.',
		itemDrops: [
			'Attack Mirror'
		],
		theme: BattleThemes.ShinMegamiTensei5.Origin
	},
	{
		name: 'Sraosha',
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
		race: 'Herald',
		level: 80,
		hp: 15000,
		stats: {
			st: 34,
			vi: 41,
			ma: 73,
			ag: 60,
			lu: 66
		},
		skills: [
			'Hamabarion',
			'Mahamabarion',
			'Concentrate',
			'Freikugel',
			'Lullaby',
			'Makarakarn'
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
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'In Zoroastrian lore, Sraosha\'s duty is to listen to humanity\'s cry for Ahura Mazda.\nIt is also known to descend after sunset to vanquish evil, and its name literally means "observance."',
		itemDrops: [
			'Large Glory Crystal',
			'Sraosha\'s Essence'
		],
		theme: null
	},
	{
		name: 'Sukuna-Hikona',
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
		race: 'Kunitsu',
		level: 47,
		hp: 1800,
		stats: {
			st: 38,
			vi: 33,
			ma: 42,
			ag: 31,
			lu: 32
		},
		skills: [
			'Eternal Blizzard',
			'Matarunda',
			'Blinding Strike'
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'One of the gods of Japanese lore. Son of Kamimusubi, he was so small he fell through her fingers at birth.\nThough he would normally be counted among the Amatsukami, he became blood-brothers with Okuninushi, and is now considered a Kunitsukami. After building Japan with Okuninushi, he is said to have returned to Tokoyo no Kuni, the land of eternity.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Surt',
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
		race: 'Tyrant',
		level: 49,
		hp: 7800,
		stats: {
			st: 63,
			vi: 35,
			ma: 58,
			ag: 35,
			lu: 33
		},
		skills: [
			'Heat Wave',
			'Fire Dracostrike',
			'Maragidyne',
			'Ragnarok',
			'Dekunda',
			'Counter',
			'Agilao',
			'Maragi'
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
				'Ice'
			],
			resist: [],
			null: [],
			drain: [
				'Fire'
			],
			repel: []
		},
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A fire giant from Norse mythology.\nHe rules over Muspelheim, the realm of fire and brandishes a sword of fire called "Laevateinn". In Ragnarok, he will set the world ablaze.',
		itemDrops: [
			'Magic Mirror'
		],
		theme: BattleThemes.ShinMegamiTensei5.Ferocity
	},
	{
		name: 'Take-Minakata',
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
		race: 'Kunitsu',
		level: 39,
		hp: 1700,
		stats: {
			st: 40,
			vi: 30,
			ma: 37,
			ag: 27,
			lu: 27
		},
		skills: [
			'Berserker God',
			'Ziogna',
			'Mazionga'
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
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A Japanese god of war, hunting, and fertility.\nHe fought Take-Mikazuchi for control of Japan and lost. He escaped to Suwa but has been prohibited from leaving ever since.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Thunder Bit',
		skillPotential: {
			Phys: 0,
			Fire: 0,
			Ice: 0,
			Elec: 0,
			Force: 0,
			Light: 0,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 0,
			Support: 0
		},
		race: 'Nahobino',
		level: 83,
		hp: 500,
		stats: {
			st: 36,
			vi: 43,
			ma: 76,
			ag: 47,
			lu: 59
		},
		skills: [],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Null',
				Charm: 'Null',
				Seal: 'Null'
			},
			weak: [
				'Fire'
			],
			resist: [],
			null: [],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'A goddess that appears in Chinese mythology.\nRecognized as one of the sovereigns, she is said to have the head of a human and a body of a serpent. She is also known to be responsible for the creation of humanity, having created them from mud.\nShe assumed the form of a Nahobino after fusing with the bearer of her Knowledge, Shohei Yakumo.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.Nuwa
	},
	{
		name: 'Thunderbird',
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
		race: 'Avian',
		level: 35,
		hp: 4100,
		stats: {
			st: 27,
			vi: 26,
			ma: 35,
			ag: 30,
			lu: 16
		},
		skills: [
			'Zionga',
			'Mazionga',
			'Masukunda',
			'Concentrate',
			'Sonic Boom'
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
			null: [
				'Elec'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'A revered bird of Native American mythology said to live atop cloud-shrouded peaks.\nIt resembles an eagle, and its wingbeats create mighty thunderclaps. Some legends say its eyes can unleash lightning, and other accounts say it can carry an entire lake on its back or even swallow an entire whale whole.',
		itemDrops: [
			'Giant Bird\'s Feather'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seeker
	},
	{
		name: 'Trumpeter',
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
		race: 'Fiend',
		level: 73,
		hp: 12500,
		stats: {
			st: 32,
			vi: 38,
			ma: 78,
			ag: 51,
			lu: 59
		},
		skills: [
			'Evil Melody',
			'Maragidyne',
			'Mabufudyne',
			'Maziodyne',
			'Mazandyne',
			'Megidolaon',
			'Dekaja'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
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
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'Angels that sound their trumpets to signify the coming of the apocalypse ordained in the Book of Revelation.\nIt is said that the trumpets bring plagues and disasters, turning the earth into a land of death and sufferring.',
		itemDrops: [
			'Large Glory Crystal',
			'Vitality Balm',
			'Destruction Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Fiend
	},
	{
		name: 'Tsukuyomi',
		skillPotential: {
			Phys: 6,
			Fire: 0,
			Ice: 7,
			Elec: 0,
			Force: 0,
			Light: 7,
			Dark: 0,
			Almighty: 0,
			Ailment: 0,
			Recovery: 3,
			Support: 3
		},
		race: 'Nahobino',
		level: 83,
		hp: 30000,
		stats: {
			st: 80,
			vi: 46,
			ma: 70,
			ag: 110,
			lu: 75
		},
		skills: [
			'Bufubarion',
			'Hamabarion',
			'Mabufubarion',
			'Myriad Slashes',
			'Yabusame Shot',
			'Moonlight Frost',
			'True Replication',
			'False Replication',
			'Diarama',
			'Debilitate'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Null'
			},
			weak: [
				'Fire'
			],
			resist: [
				'Elec'
			],
			null: [
				'Light'
			],
			drain: [
				'Ice'
			],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'A god that appears in Japanese legend, believed to be the deification of the moon and the ruler of the night.\nAccording to the Kojiki and Nihon Shoki, he was born from Izanagi, and is younger brother to Amaterasu as well as older brother to Susano-o.\nUpon fusing with Yuzuru Atsuta and reassimilating his lost Knowledge, he thus assumed his original Nahobino form.',
		itemDrops: [
			'Chakra Pot',
			'Bead Chain',
			'Balm of Life'
		],
		theme: BattleThemes.ShinMegamiTensei5.Tsukuyomi,
		variant: 'Nahobino'
	},
	{
		name: 'Uriel',
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
		race: 'Herald',
		level: 74,
		hp: 6000,
		stats: {
			st: 61,
			vi: 53,
			ma: 58,
			ag: 43,
			lu: 37
		},
		skills: [
			'Maziodyne',
			'Agidyne',
			'Deathbound',
			'Mighty Cleave'
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
		alignment: {
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the four major angels.\nHis name means "flame of God," and he possesses knowledge of all celestial phenomena. He is also the first angel Satan met after falling to Earth.',
		itemDrops: [
			'Uriel\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.Seraph
	},
	{
		name: 'Vasuki',
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
		race: 'Drake',
		level: 72,
		hp: 15000,
		stats: {
			st: 47,
			vi: 50,
			ma: 65,
			ag: 39,
			lu: 72
		},
		skills: [
			'Toxic Spray',
			'Frenzied Chomp',
			'Makajamaon',
			'Slumber Vortex',
			'Sexy Dance',
			'Mabufudyne',
			'Hysterical Slap',
			'Venom Chaser'
		],
		resistances: {
			ailments: {
				Sleep: 'Null',
				Mirage: 'Null',
				Poison: 'Null',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
		alignment: {
			moral: 'Dark',
			ethical: 'Chaos'
		},
		lore: 'A giant serpent of Hindu lore.\nIt is said that gods and demons used him as a rope to churn the sea of milk to create Amrita, while also using Mt. Mandara as the stick. The strain from this caused him to exhale incredibly poisonous venom, but it was safely swallowed up by Shiva.',
		itemDrops: [
			'Critical Gem',
			'Critical Gem'
		],
		theme: BattleThemes.ShinMegamiTensei5.DancingCrazyMurder
	},
	{
		name: 'White Rider',
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
		race: 'Fiend',
		level: 43,
		hp: 3400,
		stats: {
			st: 27,
			vi: 29,
			ma: 20,
			ag: 29,
			lu: 29
		},
		skills: [
			'God\'s Bow',
			'Ragnarok',
			'Mahamaon',
			'Dekaja',
			'Call Angels'
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
		alignment: {
			moral: 'Unknown',
			ethical: 'Unknown'
		},
		lore: 'One of the Four Horsemen of the Apocalypse spoken of in the Book of Revelation.\nHe rides a white horse and carries a bow. Wears a resplendent crown as a symbol of God\'s dominion over Armageddon, and promises to bring total victory.',
		itemDrops: [
			'Large Glory Crystal',
			'Strength Balm',
			'Light Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.Fiend
	},
	{
		name: 'Xuanwu',
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
		race: 'Dragon',
		level: 23,
		hp: 1150,
		stats: {
			st: 25,
			vi: 39,
			ma: 16,
			ag: 14,
			lu: 16
		},
		skills: [
			'Ice Breath',
			'Rakukaja',
			'Heavy Blow',
			'Bufula',
			'Critical Aura'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Weak',
				Confuse: 'Resist',
				Charm: 'Resist',
				Seal: 'Resist'
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
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the north, the season of winter, and the element of water. Known to be a great warrior, it is said to support the Earth from below.',
		itemDrops: [
			'Xuanwu\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Zaou-Gongen',
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
		race: 'Fury',
		level: 75,
		hp: 13800,
		stats: {
			st: 64,
			vi: 51,
			ma: 54,
			ag: 35,
			lu: 49
		},
		skills: [
			'Agibarion',
			'Ragnarok',
			'Luster Candy',
			'Akashic Arts',
			'Impaler\'s Animus',
			'Violent Rage',
			'Pandemonic Crush'
		],
		resistances: {
			ailments: {
				Poison: 'Resist',
				Seal: 'Resist',
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
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Repeller of evil found at Kinpusen by En-no-Ozunu.\nBelieved to be a fusion of Buddha, Guanyin, and Maitreya, he is a god who originated from Japan, rather than the Buddhavacana.',
		itemDrops: [
			'Zaou-Gongen\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Zeus',
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
		race: 'Deity',
		level: 72,
		hp: 20000,
		stats: {
			st: 75,
			vi: 52,
			ma: 70,
			ag: 61,
			lu: 50
		},
		skills: [
			'Keraunos',
			'Impaler\'s Animus',
			'Luster Candy',
			'Madness Glint',
			'Maziodyne',
			'Panta Spane',
			'Brave Blade'
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
			null: [
				'Elec',
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The main deity of Greek mythology. Said to be omnipotent, he is both god of the sky and ruler of the twelve gods of Olympus.\nHe is a son of the titan Kronos and brother to both Hades and Poseidon. Upon defeating his father, he claimed the right to rule the entire universe. He also fathered many children with not only goddesses, but a number of human women as well.',
		itemDrops: [
			'Bead Chain'
		],
		theme: BattleThemes.ShinMegamiTensei5.HumansDemonsAnd
	},
	{
		name: 'Zeus',
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
		race: 'Deity',
		level: 86,
		hp: 35000,
		stats: {
			st: 100,
			vi: 58,
			ma: 95,
			ag: 84,
			lu: 71
		},
		skills: [
			'Keraunos',
			'Maziodyne',
			'Madness Glint',
			'Panta Spane',
			'Brave Blade',
			'Impaler\'s Animus',
			'Dekunda',
			'Luster Candy'
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
			null: [
				'Elec',
				'Light',
				'Dark'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Neutral'
		},
		lore: 'The main deity of Greek mythology. Said to be omnipotent, he is both god of the sky and ruler of the twelve gods of Olympus.\nHe is a son of the titan Kronos and brother to both Hades and Poseidon. Upon defeating his father, he claimed the right to rule the entire universe. He also fathered many children with not only goddesses, but a number of human women as well.',
		itemDrops: [
			'Zeus\'s Essence',
			'Large Glory Crystal'
		],
		theme: BattleThemes.ShinMegamiTensei5.HumansDemonsAnd
	},
	{
		name: 'Zhuque',
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
		race: 'Avian',
		level: 43,
		hp: 4720,
		stats: {
			st: 20,
			vi: 22,
			ma: 47,
			ag: 32,
			lu: 32
		},
		skills: [
			'Agilao',
			'Masukunda',
			'Maragion',
			'Dekunda',
			'Lullaby'
		],
		resistances: {
			ailments: {
				Sleep: 'Resist',
				Mirage: 'Resist',
				Poison: 'Resist',
				Confuse: 'Resist',
				Charm: 'Weak',
				Seal: 'Resist'
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
			moral: 'Light',
			ethical: 'Law'
		},
		lore: 'One of the Ssu-Ling, celestial creatures in Chinese mythology.\nIt represents the south, the season of summer, and the element of fire. It is said to resemble a quail in appearance and have a beautiful chirping voice.',
		itemDrops: [
			'Zhuque\'s Essence'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Zouchouten',
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
		race: 'Kishin',
		level: 36,
		hp: 3700,
		stats: {
			st: 32,
			vi: 27,
			ma: 30,
			ag: 23,
			lu: 26
		},
		skills: [
			'Tarukaja',
			'Charge',
			'Mazionga',
			'Fatal Sword',
			'Dormina'
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
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Zouchouten, protector of the South, is one of the Four Heavenly Kings in Buddhist mythology.\nSimilarly to his fellow kings, he is often depicted as a fierc warrior, clad in armor and wielding a long sword, though he is sometimes shown wielding a trident instead. Also known as Virudhaka, he is god of the five grains.',
		itemDrops: [],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	},
	{
		name: 'Zouchouten',
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
		race: 'Kishin',
		level: 65,
		hp: 9500,
		stats: {
			st: 46,
			vi: 50,
			ma: 43,
			ag: 31,
			lu: 43
		},
		skills: [
			'Tarukaja',
			'Charge',
			'Ziobarion',
			'Thunder Reign',
			'Dream Needle',
			'Deathbound',
			'Energy Drain',
			'Dekunda'
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
			null: [
				'Light'
			],
			drain: [],
			repel: []
		},
		alignment: {
			moral: 'Light',
			ethical: 'Chaos'
		},
		lore: 'Zouchouten, protector of the South, is one of the Four Heavenly Kings in Buddhist mythology.\nSimilarly to his fellow kings, he is often depicted as a fierc warrior, clad in armor and wielding a long sword, though he is sometimes shown wielding a trident instead. Also known as Virudhaka, he is god of the five grains.',
		itemDrops: [
			'Elec Sutra'
		],
		theme: BattleThemes.ShinMegamiTensei5.ClashOfTheMighty
	}
];

export default bosses;