import type { AnySkillData } from './skill.js';

const skillData: Readonly<AnySkillData[]> = [
	{
		name: '+15% EXP',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 15,
		inactive: false,
		stat: 'EXP'
	},
	{
		name: '+50% EXP',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 50,
		inactive: false,
		stat: 'EXP'
	},
	{
		name: 'Abysmal Surge',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 12,
		ailments: [
			'Despair'
		],
		chance: 55
	},
	{
		name: 'Abyssal Beckoning',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		ailments: {
			names: [
				'Sleep'
			],
			chance: 70
		},
		cost: {
			stat: 'MP',
			amount: 10
		},
		flags: [
			'Drain HP/MP'
		],
		power: {
			amount: 120,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Abyssal Eye',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 270,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Abyssal Mask',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Greatly decreases chance of instakill and being afflicted with ailments.'
	},
	{
		name: 'Abyssal Wings',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 205,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Acrobat Kick',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'+200% Crit Rate'
		],
		power: {
			amount: 80,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Active Support',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Moral Support may now Charge or recover MP.'
	},
	{
		name: 'Adverse Resolve',
		affinity: 'Passive',
		type: 'CRITBOOST',
		amount: 20,
		criteria: 'Surround'
	},
	{
		name: 'Aeon Rain',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 75,
		cost: {
			stat: 'HP',
			amount: 18
		},
		max: 1,
		min: 3,
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Agi',
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Agibarion',
		aliases: [
			'Inferno'
		],
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Agidyne',
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		power: {
			amount: 215,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Agilao',
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Agneyastra',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		cost: {
			stat: 'HP',
			amount: 24
		},
		max: 3,
		min: 1,
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Ailment Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'All',
		amount: 25,
		criteria: null
	},
	{
		name: 'Akashic Arts',
		aliases: [
			'Akasha Arts'
		],
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Crit Damage Boost'
		],
		power: {
			amount: 275,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Alertness',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Decreases chance of being ambushed by foes.'
	},
	{
		name: 'Ali Dance',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: null,
		element: 'All'
	},
	{
		name: 'All-out Attack Boost',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Increases strength of All-Out Attacks.'
	},
	{
		name: 'Almighty Amp',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 50,
		element: 'Almighty',
		stacks: 'x'
	},
	{
		name: 'Almighty Boost',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Almighty',
		stacks: 'x'
	},
	{
		name: 'Almighty Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 20,
		element: 'Almighty',
		stacks: '+'
	},
	{
		name: 'Ambient Aid',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'All',
		amount: 30,
		criteria: 'Rain/Snow'
	},
	{
		name: 'Analysis',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Confirm affinities of enemies you have previously attacked.'
	},
	{
		name: 'Andalucia',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 20
		},
		max: 6,
		min: 3,
		power: {
			amount: 85,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Angelic Grace',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: null,
		element: 'Magic'
	},
	{
		name: 'Anima Freeze',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 12,
		ailments: [
			'Exhaust'
		],
		chance: 30
	},
	{
		name: 'Apt Pupil',
		affinity: 'Passive',
		type: 'CRITBOOST',
		amount: 100,
		criteria: null
	},
	{
		name: 'Aramasa',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		max: 8,
		min: 8,
		power: {
			amount: 20,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Arm Chopper',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Fear'
			],
			chance: 15
		},
		cost: {
			stat: 'HP',
			amount: 9
		},
		max: 2,
		min: 2,
		power: {
			amount: 75,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Arms Master',
		affinity: 'Passive',
		type: 'MASTER',
		amount: 50,
		stat: 'HP'
	},
	{
		name: 'Arrow Rain',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 75,
		cost: {
			stat: 'HP',
			amount: 18
		},
		max: 2,
		min: 2,
		power: {
			amount: 125,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Assault Dive',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 13
		},
		power: {
			amount: 180,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Astral Saintstrike',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 40
		},
		max: 15,
		min: 15,
		power: {
			amount: 20,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Atomic Flare',
		affinity: 'Nuke',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Atom Smasher',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Fear'
			],
			chance: 15
		},
		cost: {
			stat: 'HP',
			amount: 16
		},
		max: 2,
		power: {
			amount: 80,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Attack Master',
		aliases: [
			'Auto-Tarukaja'
		],
		affinity: 'Passive',
		type: 'AUTOBUFF',
		buff: 'Attack',
		range: 'Self'
	},
	{
		name: 'Auto-Maraku',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		buff: 'Defense',
		range: 'Party'
	},
	{
		name: 'Auto-Masuku',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		buff: 'Accuracy/Evasion',
		range: 'Party'
	},
	{
		name: 'Auto-Mataru',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		buff: 'Attack',
		range: 'Party'
	},
	{
		name: 'Axel Claw',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 24
		},
		max: 4,
		min: 2,
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Ayamur',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 95,
		cost: {
			stat: 'HP',
			amount: 25
		},
		max: 3,
		min: 3,
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Babylon Curse',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		ailments: {
			names: [
				'Mud'
			],
			chance: 100
		},
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 100,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Babylon Goblet',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 45
		},
		cost: {
			stat: 'MP',
			amount: 80
		},
		power: {
			amount: 180,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Bad Beat',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Despair'
			],
			chance: 5
		},
		cost: {
			stat: 'HP',
			amount: 21
		},
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Baisudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 4,
		ailments: [
			'Burn',
			'Freeze',
			'Shock'
		],
		amount: null
	},
	{
		name: 'Beast Eye',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Increases Accuracy.'
	},
	{
		name: 'Beast Weaver',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 20
		},
		flags: [
			'Attack Reduced'
		],
		power: {
			amount: 600,
			display: 'Colossal',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Beatdown',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'HP Dependent'
		],
		power: {
			amount: 110,
			display: 'Weak to heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Berserker God',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 180,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Bestial Bite',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 5
		},
		flags: [
			'Crit Damage Boost'
		],
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Black Dracostrike',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Black Spot',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		cost: {
			stat: 'HP',
			amount: 16
		},
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Black Viper',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 48
		},
		power: {
			amount: 210,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Blade of Fury',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 18
		},
		max: 4,
		min: 2,
		power: {
			amount: 80,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Bleeding Dry Brush',
		affinity: 'Support',
		type: 'BARRIER',
		unique: null,
		range: 'Ally',
		cost: 22,
		barriers: [
			'Painting'
		]
	},
	{
		name: 'Blight',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Poison'
			],
			chance: 35
		},
		cost: {
			stat: 'MP',
			amount: 20
		},
		max: 4,
		min: 2,
		power: {
			amount: 100,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Blinding Strike',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'Accuracy/Evasion Down'
		],
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Bloodbath',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Fear'
			],
			chance: 5
		},
		cost: {
			stat: 'HP',
			amount: 22
		},
		power: {
			amount: 200,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Bloody Glee',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Increases Critical Rate.'
	},
	{
		name: 'Boon Boost',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Your -kaja/-nda skills last 1 extra turn.'
	},
	{
		name: 'Boon Boost EX',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Your -kaja/-nda skills last 2 extra turns.'
	},
	{
		name: 'Bouncing Claw',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 12
		},
		max: 3,
		min: 2,
		power: {
			amount: 65,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Bowl of Hygieia',
		affinity: 'Support',
		type: 'CHARGE',
		range: 'Self',
		cost: 20,
		charge: 'Recovery Charge'
	},
	{
		name: 'Brain Buster',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Charm'
			],
			chance: 5
		},
		cost: {
			stat: 'HP',
			amount: 22
		},
		power: {
			amount: 200,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Brain Shake',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Charm'
			],
			chance: 20
		},
		cost: {
			stat: 'HP',
			amount: 9
		},
		power: {
			amount: 100,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Brave Blade',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 45
		},
		flags: [
			'+30% Crit Rate'
		],
		power: {
			amount: 220,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Brave Step',
		affinity: 'Support',
		type: 'CRIT',
		unique: null,
		range: 'Party',
		cost: 16
	},
	{
		name: 'Bufu',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Bufubarion',
		aliases: [
			'Diamond Dust',
			'Niflheim'
		],
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Bufudyne',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		power: {
			amount: 215,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Bufula',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Burn Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Burn',
		amount: 25,
		criteria: null
	},
	{
		name: 'Cadenza',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 24,
		amount: 'Half',
		buffs: [
			'Accuracy/Evasion'
		]
	},
	{
		name: 'Call Allies',
		affinity: 'Special',
		type: 'SUMMON',
		unique: null,
		demon: null
	},
	{
		name: 'Call Angels',
		affinity: 'Special',
		type: 'SUMMON',
		unique: null,
		demon: 'Dominion'
	},
	{
		name: 'Call Evil',
		affinity: 'Special',
		type: 'SUMMON',
		unique: null,
		demon: 'Loa'
	},
	{
		name: 'Call Soldiers',
		affinity: 'Special',
		type: 'SUMMON',
		unique: null,
		demon: 'Power'
	},
	{
		name: 'Call Souls',
		affinity: 'Special',
		type: 'SUMMON',
		unique: null,
		demon: 'Legion'
	},
	{
		name: 'Capitulate to Pleasure',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 'All',
		cost: 30,
		ailments: [
			'Charm'
		],
		chance: 80,
		flags: [
			'Negate Buffs'
		]
	},
	{
		name: 'Carnage Fang',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		flags: [
			'Crit Damage Boost'
		],
		power: {
			amount: 260,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Catastrophe',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 75
		},
		power: {
			amount: 290,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Cautious Cheer',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		range: 'Party',
		cost: 50,
		buffs: [
			'Defense',
			'Accuracy/Evasion'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Cell Breaker',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Enervate'
			],
			chance: 35
		},
		cost: {
			stat: 'HP',
			amount: 10
		},
		power: {
			amount: 140,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Certain Escape',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Escape random battles successfully.'
	},
	{
		name: 'Champion\'s Cup',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: null,
		range: 'Ally',
		cost: 10,
		amount: 'Moderate',
		buffs: [
			'Attack'
		]
	},
	{
		name: 'Chaotic Will',
		affinity: 'Ailment',
		type: 'MISC',
		unique: null,
		cost: 150,
		description: 'Chance of instakill to all foes. Foe\'s Press Turn Icons will be halved next turn.'
	},
	{
		name: 'Charge',
		aliases: [
			'Power Charge'
		],
		affinity: 'Support',
		type: 'CHARGE',
		range: 'Self',
		cost: 10,
		charge: 'Phys Charge'
	},
	{
		name: 'Charm Boost',
		aliases: [
			'Brainwash Boost'
		],
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Charm',
		amount: 25,
		criteria: null
	},
	{
		name: 'Charmdi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 5,
		ailments: [
			'Charm'
		],
		amount: null
	},
	{
		name: 'Checkmate',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		range: 'All',
		cost: 90,
		buffs: [],
		negate: false,
		debuffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		auto: []
	},
	{
		name: 'Cleave',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 6
		},
		power: {
			amount: 75,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Climate Decorum',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: 'Rain/Snow',
		element: 'All'
	},
	{
		name: 'Cold Dark Matter',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		range: 'Self',
		cost: 0,
		buffs: [
			'Defense'
		],
		negate: false,
		debuffs: [],
		flags: [
			'Maximize Buff'
		],
		auto: []
	},
	{
		name: 'Complete Analysis',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Reveals all elemental affinities on all enemies.'
	},
	{
		name: 'Concealment',
		affinity: 'Support',
		type: 'MISC',
		cost: 4,
		description: 'Decreases chance of being targeted by foes.'
	},
	{
		name: 'Concentrate',
		aliases: [
			'Mind Charge'
		],
		affinity: 'Support',
		type: 'CHARGE',
		range: 'Self',
		cost: 10,
		charge: 'Magic Charge'
	},
	{
		name: 'Confuse Boost',
		aliases: [
			'Dizzy Boost'
		],
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Confusion',
		amount: 25,
		criteria: null
	},
	{
		name: 'Contempt of God',
		affinity: 'Special',
		type: 'MISC',
		unique: null,
		cost: 0,
		description: 'Adds 2 Press Turn Icons to your next turn.'
	},
	{
		name: 'Cool Breeze',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 8,
		inactive: false,
		stat: 'HPMP'
	},
	{
		name: 'Cornered Fang',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 85,
		cost: {
			stat: 'HP',
			amount: 10
		},
		flags: [
			'Surround Boost'
		],
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Cosmic Flare',
		affinity: 'Nuke',
		type: 'ATTACK',
		accuracy: 95,
		cost: {
			stat: 'MP',
			amount: 75
		},
		power: {
			amount: 185,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Counter',
		affinity: 'Passive',
		type: 'SMTCOUNTER',
		chance: 50,
		element: 'Phys',
		power: {
			amount: 100,
			display: 'Weak'
		}
	},
	{
		name: 'Counter - Persona',
		aliases: [
			'Counter'
		],
		affinity: 'Passive',
		type: 'PERSONACOUNTER',
		chance: 10
	},
	{
		name: 'Counterstrike',
		affinity: 'Passive',
		type: 'PERSONACOUNTER',
		chance: 15
	},
	{
		name: 'Crazy Chain',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Rage'
			],
			chance: 20
		},
		cost: {
			stat: 'HP',
			amount: 14
		},
		power: {
			amount: 110,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Critical Aura',
		affinity: 'Support',
		type: 'CHARGE',
		range: 'Self',
		cost: 25,
		charge: 'Critical Charge'
	},
	{
		name: 'Critical Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 50,
		cost: {
			stat: 'MP',
			amount: 10
		},
		flags: [
			'+200% Crit Rate'
		],
		power: {
			amount: 160,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Critical Wave',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'+20% Crit Rate'
		],
		power: {
			amount: 90,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Critical Zealot',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Increases Critical damage, but normal damage decreases.'
	},
	{
		name: 'Cross Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 99,
		cost: {
			stat: 'HP',
			amount: 20
		},
		max: 2,
		min: 2,
		power: {
			amount: 260,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Cruel Attack',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 12
		},
		flags: [
			'Down Boost'
		],
		power: {
			amount: 180,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Crusher Onslaught',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 50,
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 170,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Curse Siphon',
		affinity: 'Passive',
		type: 'SIPHON',
		amount: 10,
		criteria: 'Ailment'
	},
	{
		name: 'Damascus Claw',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 24
		},
		max: 3,
		min: 2,
		power: {
			amount: 90,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Dance of Mara',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 'All',
		cost: 35,
		ailments: [
			'Charm'
		],
		chance: 70,
		flags: [
			'Charm Instakill'
		]
	},
	{
		name: 'Dancing Strike',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'+30% Crit Rate'
		],
		max: 3,
		min: 3,
		power: {
			amount: 80,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Dark Amp',
		aliases: [
			'Curse Amp'
		],
		affinity: 'Passive',
		type: 'BOOST',
		amount: 50,
		element: 'Dark',
		stacks: 'x'
	},
	{
		name: 'Dark Block',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Party',
		cost: 40,
		barriers: [
			'Dark Nullify'
		]
	},
	{
		name: 'Dark Boost',
		aliases: [
			'Curse Boost'
		],
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Dark',
		stacks: 'x'
	},
	{
		name: 'Dark Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 20,
		element: 'Dark',
		stacks: '+'
	},
	{
		name: 'Dark Sword',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Seal'
			],
			chance: 30
		},
		cost: {
			stat: 'MP',
			amount: 25
		},
		max: 2,
		min: 2,
		power: {
			amount: 90,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Dazzler',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 5,
		ailments: [
			'Mirage'
		],
		chance: 70
	},
	{
		name: 'Deadly Fury',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'+200% Crit Rate'
		],
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Deathbound',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Death Flies',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 120
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 320,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Death Lust',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		ailments: {
			names: [
				'Charm'
			],
			chance: 45
		},
		cost: {
			stat: 'MP',
			amount: 70
		},
		power: {
			amount: 160,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Death Scythe',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Fear'
			],
			chance: 20
		},
		cost: {
			stat: 'HP',
			amount: 20
		},
		power: {
			amount: 270,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Debilitate',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'All',
		cost: 150,
		buffs: [],
		negate: false,
		debuffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		auto: []
	},
	{
		name: 'Defense Master',
		aliases: [
			'Auto-Rakukaja'
		],
		affinity: 'Passive',
		type: 'AUTOBUFF',
		buff: 'Defense',
		range: 'Self'
	},
	{
		name: 'Deicidal Poison',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 'All',
		cost: 50,
		ailments: [
			'Poison'
		],
		chance: 90,
		flags: [
			'Accuracy/Evasion Greatly Down'
		]
	},
	{
		name: 'Dekaja',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'All',
		cost: 40,
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		negate: true,
		debuffs: [],
		auto: []
	},
	{
		name: 'Dekunda',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'Party',
		cost: 40,
		buffs: [],
		negate: true,
		debuffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		auto: []
	},
	{
		name: 'Demonic Decree',
		aliases: [
			'Hell\'s Judgment'
		],
		affinity: 'Dark',
		type: 'SET',
		amount: '50%',
		cost: 48
	},
	{
		name: 'Despair Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Despair',
		amount: 25,
		criteria: null
	},
	{
		name: 'Dia',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 8,
		amount: 'Slight'
	},
	{
		name: 'Diamrita',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 30,
		ailments: 'All',
		amount: 'Moderate'
	},
	{
		name: 'Diarahan',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 35,
		amount: 'Full'
	},
	{
		name: 'Diarama',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 15,
		amount: 'Moderate'
	},
	{
		name: 'Die For Me!',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		flags: [
			'Weakness Instakill'
		],
		max: 5,
		min: 2,
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Divine Arrowfall',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		power: {
			amount: 170,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Divine Grace',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Increases the effect of healing skills by 50%.'
	},
	{
		name: 'Divine Judgement',
		aliases: [
			'God\'s Judgment'
		],
		affinity: 'Light',
		type: 'SET',
		amount: '50%',
		cost: 48
	},
	{
		name: 'Dodge Dark',
		aliases: [
			'Dodge Curse'
		],
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: null,
		element: 'Dark'
	},
	{
		name: 'Dodge Elec',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: null,
		element: 'Elec'
	},
	{
		name: 'Dodge Fire',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: null,
		element: 'Fire'
	},
	{
		name: 'Dodge Ice',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: null,
		element: 'Ice'
	},
	{
		name: 'Dodge Light',
		aliases: [
			'Dodge Bless'
		],
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: null,
		element: 'Light'
	},
	{
		name: 'Dodge Nuke',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: null,
		element: 'Dark'
	},
	{
		name: 'Dodge Phys',
		aliases: [
			'Dodge Physical'
		],
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: null,
		element: 'Phys'
	},
	{
		name: 'Dodge Psy',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: null,
		element: 'Psy'
	},
	{
		name: 'Dodge Wind',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 2,
		criteria: null,
		element: 'Wind'
	},
	{
		name: 'Donum Gladi',
		affinity: 'Support',
		type: 'CHARGE',
		range: 'Ally',
		cost: 40,
		charge: 'Phys Charge - Donum'
	},
	{
		name: 'Donum Magici',
		affinity: 'Support',
		type: 'CHARGE',
		range: 'Ally',
		cost: 40,
		charge: 'Magic Charge - Donum'
	},
	{
		name: 'Door of Hades',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		cost: {
			stat: 'MP',
			amount: 32
		},
		flags: [
			'Instakill'
		],
		power: {
			amount: 110,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Dormina',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 10,
		ailments: [
			'Sleep'
		],
		chance: 80
	},
	{
		name: 'Dormin Rush',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Sleep'
			],
			chance: 5
		},
		cost: {
			stat: 'HP',
			amount: 16
		},
		power: {
			amount: 100,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Double Fangs',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 10
		},
		max: 2,
		min: 2,
		power: {
			amount: 75,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Double Shot',
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 12
		},
		max: 2,
		min: 2,
		power: {
			amount: 100,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Dragon Eye',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Greatly increases Accuracy.'
	},
	{
		name: 'Drain Dark',
		aliases: [
			'Drain Curse'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Dark',
		newResistance: 'Drain'
	},
	{
		name: 'Drain Elec',
		aliases: [
			'Absorb Elec'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Elec',
		newResistance: 'Drain'
	},
	{
		name: 'Drain Fire',
		aliases: [
			'Absorb Fire'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Fire',
		newResistance: 'Drain'
	},
	{
		name: 'Drain Force',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Force',
		newResistance: 'Drain'
	},
	{
		name: 'Drain Ice',
		aliases: [
			'Absorb Ice'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Ice',
		newResistance: 'Drain'
	},
	{
		name: 'Drain Light',
		aliases: [
			'Drain Bless'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Light',
		newResistance: 'Drain'
	},
	{
		name: 'Drain Nuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Nuke',
		newResistance: 'Drain'
	},
	{
		name: 'Drain Phys',
		aliases: [
			'Absorb Physical'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Phys',
		newResistance: 'Drain'
	},
	{
		name: 'Drain Psy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Psy',
		newResistance: 'Drain'
	},
	{
		name: 'Drain Wind',
		aliases: [
			'Absorb Wind'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Wind',
		newResistance: 'Drain'
	},
	{
		name: 'Dreadful Gleam',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		ailments: {
			names: [
				'Seal'
			],
			chance: 40
		},
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 150,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt',
		flags: [
			'Pierce'
		]
	},
	{
		name: 'Dream Fist',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		flags: [
			'Asleep Boost'
		],
		power: {
			amount: 140,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Dream Needle',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Sleep'
			],
			chance: 55
		},
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 110,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Dustoma',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 10,
		ailments: [
			'Mirage'
		],
		chance: 75
	},
	{
		name: 'Eat Whole',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		flags: [
			'Drain HP'
		],
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Eiga',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Eigaon',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 215,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Eiha',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Electrify',
		affinity: 'Special',
		type: 'MISC',
		unique: null,
		cost: 0,
		description: 'Greatly increases the damage of the next Rising Storm Dragon performed by 1 ally.'
	},
	{
		name: 'Elec Amp',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 50,
		element: 'Elec',
		stacks: 'x'
	},
	{
		name: 'Elec Block',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Party',
		cost: 40,
		barriers: [
			'Elec Nullify'
		]
	},
	{
		name: 'Elec Boost',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Elec',
		stacks: 'x'
	},
	{
		name: 'Elec Break',
		affinity: 'Support',
		type: 'BREAK',
		cost: 15,
		element: 'Elec'
	},
	{
		name: 'Elec Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 20,
		element: 'Elec',
		stacks: '+'
	},
	{
		name: 'Elec Wall',
		aliases: [
			'Blue Wall'
		],
		affinity: 'Support',
		type: 'WALL',
		cost: 18,
		element: 'Elec'
	},
	{
		name: 'Eleusinian Harvest',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 150,
		amount: '130%'
	},
	{
		name: 'Elusive Eclipse',
		affinity: 'Passive',
		type: 'SMTCOUNTER',
		chance: 100,
		element: 'Phys',
		power: {
			amount: 300,
			display: 'Severe'
		},
		pierce: true,
		evasionBased: true,
		unique: null
	},
	{
		name: 'Emergency Shift',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Chance to swap current party with backups when 2 or more people are KO\'d.'
	},
	{
		name: 'Endure',
		affinity: 'Passive',
		type: 'ENDURE',
		amount: 1,
		criteria: null
	},
	{
		name: 'Endure Dark',
		affinity: 'Passive',
		type: 'ENDURE',
		amount: 100,
		criteria: 'Dark'
	},
	{
		name: 'Endure Light',
		affinity: 'Passive',
		type: 'ENDURE',
		amount: 100,
		criteria: 'Light'
	},
	{
		name: 'Enduring Soul',
		affinity: 'Passive',
		type: 'ENDURE',
		amount: 2,
		criteria: null
	},
	{
		name: 'Enemy Radar',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Reveal the location of Shadows on each floor over a wide area.'
	},
	{
		name: 'Energy Drain',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'Drain HP/MP'
		],
		power: {
			amount: 80,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Energy Drop',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 4,
		ailments: [
			'Confusion',
			'Fear',
			'Despair',
			'Rage',
			'Charm'
		],
		amount: null
	},
	{
		name: 'Energy Shower',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Party',
		cost: 8,
		ailments: [
			'Confusion',
			'Fear',
			'Despair',
			'Rage',
			'Charm'
		],
		amount: null
	},
	{
		name: 'Enervate Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Enervate',
		amount: 25,
		criteria: null
	},
	{
		name: 'Enervation',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 5,
		ailments: [
			'Enervate'
		],
		chance: 40
	},
	{
		name: 'Entangling Tendrils',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 'All',
		cost: 25,
		ailments: [
			'Seal'
		],
		chance: 40,
		flags: [
			'Attack Down'
		]
	},
	{
		name: 'Escape Route',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Return to the entrance of Tartarus or the Desert of Doors.'
	},
	{
		name: 'Estoma',
		affinity: 'Support',
		type: 'MISC',
		cost: 35,
		description: 'Prevents any enemy encounters until next New Moon.'
	},
	{
		name: 'Eternal Blizzard',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		max: 6,
		min: 3,
		power: {
			amount: 90,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Evade Dark',
		aliases: [
			'Evade Curse'
		],
		affinity: 'Passive',
		type: 'EVASION',
		amount: 3,
		criteria: null,
		element: 'Dark'
	},
	{
		name: 'Evade Elec',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 3,
		criteria: null,
		element: 'Elec'
	},
	{
		name: 'Evade Fire',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 3,
		criteria: null,
		element: 'Fire'
	},
	{
		name: 'Evade Ice',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 3,
		criteria: null,
		element: 'Ice'
	},
	{
		name: 'Evade Light',
		aliases: [
			'Evade Bless'
		],
		affinity: 'Passive',
		type: 'EVASION',
		amount: 3,
		criteria: null,
		element: 'Light'
	},
	{
		name: 'Evade Nuke',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 3,
		criteria: null,
		element: 'Nuke'
	},
	{
		name: 'Evade Phys',
		aliases: [
			'Evade Physical'
		],
		affinity: 'Passive',
		type: 'EVASION',
		amount: 3,
		criteria: null,
		element: 'Phys'
	},
	{
		name: 'Evade Psy',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 3,
		criteria: null,
		element: 'Psy'
	},
	{
		name: 'Evade Wind',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 3,
		criteria: null,
		element: 'Wind'
	},
	{
		name: 'Evergreen Dance',
		affinity: 'Support',
		type: 'MISC',
		unique: null,
		cost: 25,
		description: 'Greatly fills the Magatsuhi Gauge. (Once per turn)'
	},
	{
		name: 'Evil Gleam',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: null,
		range: 'All',
		cost: 0,
		ailments: [
			'Charm'
		],
		chance: 65
	},
	{
		name: 'Evil Melody',
		affinity: 'Ailment',
		type: 'MISC',
		unique: true,
		cost: 100,
		description: 'Chance of instakill to 1 foe.'
	},
	{
		name: 'Evil Smile',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 12,
		ailments: [
			'Fear'
		],
		chance: 55
	},
	{
		name: 'Evil Touch',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 5,
		ailments: [
			'Fear'
		],
		chance: 70
	},
	{
		name: 'Exhaust Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Exhaust',
		amount: 25,
		criteria: null
	},
	{
		name: 'Fallen Destroyer',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 70
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 250,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Falling Star - Fire',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: null,
		accuracy: 178,
		cost: {
			stat: 'MP',
			amount: 0
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 1000,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Falling Star - Ice',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: null,
		accuracy: 178,
		cost: {
			stat: 'MP',
			amount: 0
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 1000,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'False Replication',
		affinity: 'Special',
		type: 'MISC',
		unique: null,
		cost: 0,
		description: 'Creates a replica.'
	},
	{
		name: 'Famine\'s Scream',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: null,
		range: 'All',
		cost: 0,
		ailments: [
			'Hunger'
		],
		chance: 25
	},
	{
		name: 'Fang Breaker',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'Attack Down'
		],
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Fast Heal',
		affinity: 'Passive',
		type: 'REGEN',
		amount: 1,
		criteria: null,
		stat: 'AIL'
	},
	{
		name: 'Fatal End',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 14
		},
		power: {
			amount: 160,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Fatal Sword',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'+30% Crit Rate'
		],
		power: {
			amount: 180,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Fear Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Fear',
		amount: 25,
		criteria: null
	},
	{
		name: 'Fierce Roar',
		affinity: 'Support',
		type: 'TAUNT',
		buff: 'Defense',
		cost: 30
	},
	{
		name: 'Fighting Spirit',
		affinity: 'Support',
		type: 'CHARGE',
		range: 'Party',
		cost: 80,
		charge: 'Phys Charge'
	},
	{
		name: 'Figment Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 50,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'+200% Crit Rate'
		],
		power: {
			amount: 300,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Final Guard',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Chance to nullify a fatal attack to a current party member.'
	},
	{
		name: 'Fire Amp',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 50,
		element: 'Fire',
		stacks: 'x'
	},
	{
		name: 'Fire Block',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Party',
		cost: 40,
		barriers: [
			'Fire Nullify'
		]
	},
	{
		name: 'Fire Boost',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Fire',
		stacks: 'x'
	},
	{
		name: 'Fire Break',
		affinity: 'Support',
		type: 'BREAK',
		cost: 15,
		element: 'Fire'
	},
	{
		name: 'Fire Breath',
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		max: 5,
		min: 2,
		power: {
			amount: 90,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Fire Dracostrike',
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Fire of Sinai',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 80
		},
		max: 7,
		min: 3,
		power: {
			amount: 105,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Fire Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 20,
		element: 'Fire',
		stacks: '+'
	},
	{
		name: 'Fire Wall',
		aliases: [
			'Red Wall'
		],
		affinity: 'Support',
		type: 'WALL',
		cost: 18,
		element: 'Fire'
	},
	{
		name: 'Firm Stance',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Take the blow, but decreases damage by half.'
	},
	{
		name: 'Flash Bomb',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Mirage'
			],
			chance: 5
		},
		cost: {
			stat: 'HP',
			amount: 19
		},
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Floral Gust',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		max: 5,
		min: 2,
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Fogna',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 25,
		ailments: [
			'Mirage'
		],
		chance: 50
	},
	{
		name: 'Force Block',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Party',
		cost: 40,
		barriers: [
			'Force Nullify'
		]
	},
	{
		name: 'Force Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 20,
		element: 'Force',
		stacks: '+'
	},
	{
		name: 'Formless Arrows',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 40,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt',
		flags: [
			'Mirage Boost'
		],
		min: 5,
		max: 5
	},
	{
		name: 'Fortified Moxy',
		affinity: 'Passive',
		type: 'CRITBOOST',
		amount: 15,
		criteria: 'Ambush'
	},
	{
		name: 'Fortify Spirit',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'All',
		resistance: 'Resist'
	},
	{
		name: 'Foul Breath',
		affinity: 'Almighty',
		type: 'SUSCEPTIBILITY',
		range: 'Foe',
		cost: 8
	},
	{
		name: 'Freeze Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Freeze',
		amount: 25,
		criteria: null
	},
	{
		name: 'Frei',
		affinity: 'Nuke',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Freidyne',
		affinity: 'Nuke',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		power: {
			amount: 215,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Freikugel',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		power: {
			amount: 230,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Freila',
		affinity: 'Nuke',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Frenzied Chomp',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Poison',
				'Confusion',
				'Charm'
			],
			chance: 25
		},
		cost: {
			stat: 'MP',
			amount: 25
		},
		power: {
			amount: 165,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Frenzy',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: null,
		accuracy: 88,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 80,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Frolic',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 'All',
		cost: 80,
		ailments: [
			'Charm'
		],
		chance: 40,
		flags: [
			'Attack Greatly Down',
			'Defense Greatly Down'
		]
	},
	{
		name: 'Full Analysis',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Reveal an enemy\'s stats, weak points, and skills.'
	},
	{
		name: 'Gae Bolg',
		affinity: 'Force',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt',
		flags: [
			'Pierce',
			'+200% Crit Rate'
		]
	},
	{
		name: 'Gaea Rage',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 170
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 270,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Gale Charge',
		affinity: 'Force',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		power: {
			amount: 90,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt',
		flags: [
			'+200% Crit Rate'
		]
	},
	{
		name: 'Gale Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 85,
		cost: {
			stat: 'HP',
			amount: 12
		},
		power: {
			amount: 150,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Galgalim Eyes',
		affinity: 'Almighty',
		type: 'SET',
		amount: 1,
		cost: null
	},
	{
		name: 'Galvanic Slash',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 200,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Gambler\'s Foresight',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		range: 'Party',
		cost: 20,
		buffs: [
			'Accuracy/Evasion'
		],
		negate: false,
		debuffs: [],
		auto: [
			'Magic Charge'
		]
	},
	{
		name: 'Garu',
		affinity: 'Wind',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Garudyne',
		affinity: 'Wind',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		power: {
			amount: 215,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Garula',
		affinity: 'Wind',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Gatling Blows',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 16
		},
		max: 4,
		min: 3,
		power: {
			amount: 90,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Ghastfire Rain',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Ghastly Wail',
		affinity: 'Almighty',
		type: 'MISC',
		cost: 28,
		description: 'Instakills foes inflicted with Fear.'
	},
	{
		name: 'Giant Slice',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 9
		},
		flags: [
			'Baton Boost'
		],
		power: {
			amount: 85,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Gigantic Fist',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 16
		},
		power: {
			amount: 240,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Gigantomachia',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 85,
		cost: {
			stat: 'HP',
			amount: 25
		},
		power: {
			amount: 350,
			display: 'Colossal',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Glacial Blast',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		max: 5,
		min: 2,
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Glacial Dragon Spiral',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 145,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt',
		flags: [
			'Pierce'
		]
	},
	{
		name: 'God\'s Bow',
		affinity: 'Light',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 60
		},
		flags: [
			'Instakill'
		],
		power: {
			amount: 100,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'God\'s Hand',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 22
		},
		power: {
			amount: 400,
			display: 'Colossal',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Golden Apple',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 180,
		amount: 'Moderate',
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		]
	},
	{
		name: 'Gram Slice',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		flags: [
			'+30% Crit Rate'
		],
		power: {
			amount: 140,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Great Curse Siphon',
		affinity: 'Passive',
		type: 'SIPHON',
		amount: 20,
		criteria: 'Ailment'
	},
	{
		name: 'Great Life Spring',
		affinity: 'Passive',
		type: 'SPRING',
		amount: 30,
		stat: 'HP'
	},
	{
		name: 'Great Lament',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Poison',
				'Mirage'
			],
			chance: 50
		},
		cost: {
			stat: 'MP',
			amount: 140
		},
		power: {
			amount: 180,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt',
		unique: true,
		flags: [
			'Afflicted Boost'
		]
	},
	{
		name: 'Great Mana Spring',
		affinity: 'Passive',
		type: 'SPRING',
		amount: 30,
		stat: 'MP'
	},
	{
		name: 'Growth 1',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 25,
		inactive: true,
		stat: 'EXP'
	},
	{
		name: 'Growth 2',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 50,
		inactive: true,
		stat: 'EXP'
	},
	{
		name: 'Growth 3',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 100,
		inactive: true,
		stat: 'EXP'
	},
	{
		name: 'Guiding Tendril',
		affinity: 'Almighty',
		type: 'MISC',
		cost: 20,
		description: 'Knockdown attack on all foes (only usable during an Ambush).'
	},
	{
		name: 'Gun Accuracy +5%',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Increases Accuracy of Gun attacks by 5%.'
	},
	{
		name: 'Gun Amp',
		aliases: [
			'Cripple'
		],
		affinity: 'Passive',
		type: 'BOOST',
		amount: 50,
		element: 'Gun',
		stacks: 'x'
	},
	{
		name: 'Gun Boost',
		aliases: [
			'Snipe'
		],
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Gun',
		stacks: 'x'
	},
	{
		name: 'Gungnir',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 118,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 300,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Hades Blast',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		power: {
			amount: 190,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Hailstorm of God',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 220,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Hama',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 140,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Hamabarion',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 55
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Hama Boost',
		affinity: 'Passive',
		type: 'INSTAKILLBOOST',
		element: 'Light'
	},
	{
		name: 'Hamaon',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 175,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Harvest Dance',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Ally',
		cost: 30,
		amount: 'Slight',
		buffs: [
			'Double Defense'
		]
	},
	{
		name: 'Hassou Tobi',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		flags: [
			'+200% Crit Rate'
		],
		max: 8,
		min: 8,
		power: {
			amount: 30,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Headbutt',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Seal'
			],
			chance: 20
		},
		cost: {
			stat: 'HP',
			amount: 9
		},
		power: {
			amount: 150,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Headcrush',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 70
		},
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Healing Wave',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Recover 5% HP after battle (party).'
	},
	{
		name: 'Heal Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 20,
		element: 'Recovery',
		stacks: '+'
	},
	{
		name: 'Heat Riser',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'Ally',
		cost: 30,
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Heat Up',
		affinity: 'Passive',
		type: 'REGEN',
		amount: 10,
		criteria: 'Ambush',
		stat: 'HPMP'
	},
	{
		name: 'Heat Wave',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 100,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Heavenly Counter',
		affinity: 'Passive',
		type: 'SMTCOUNTER',
		unique: true,
		chance: 65,
		element: 'Dark',
		power: {
			amount: 100,
			display: 'Weak'
		},
		attackDown: true
	},
	{
		name: 'Heavenly Ikuyumi',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 65
		},
		flags: [
			'Debuff Number Dependent'
		],
		power: {
			amount: 150,
			display: 'Medium to severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Heaven\'s Blade',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 19
		},
		power: {
			amount: 300,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Heavy Blow',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'Crit Damage Boost'
		],
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Heliopolis Dawn',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 600,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt',
		flags: [
			'Shroud Dependent'
		]
	},
	{
		name: 'Hell Burner',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		power: {
			amount: 150,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Hell Exhaust',
		affinity: 'Force',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		flags: [
			'Negate Buffs'
		],
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Hell Gaze',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 55
		},
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt',
		flags: [
			'Pierce',
			'Weakness Instakill'
		]
	},
	{
		name: 'Hellish Brand',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 70
		},
		flags: [
			'Negate Buffs'
		],
		power: {
			amount: 160,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Hellish Mask',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Decreases chance of instakill and being afflicted with ailments.'
	},
	{
		name: 'Hellish Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 50,
		cost: {
			stat: 'MP',
			amount: 5
		},
		max: 4,
		min: 4,
		power: {
			amount: 55,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Hellish Spurt',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		power: {
			amount: 130,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Hell Spin',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 150,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Hell Thrust',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 45
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 235,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Herculean Strike',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 80,
		cost: {
			stat: 'HP',
			amount: 16
		},
		power: {
			amount: 110,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Hide',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Decreases chance of being targeted by foes.'
	},
	{
		name: 'High Almighty Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 35,
		element: 'Almighty',
		stacks: '+'
	},
	{
		name: 'High Counter',
		affinity: 'Passive',
		type: 'PERSONACOUNTER',
		chance: 20
	},
	{
		name: 'High Dark Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 35,
		element: 'Dark',
		stacks: '+'
	},
	{
		name: 'High Elec Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 35,
		element: 'Elec',
		stacks: '+'
	},
	{
		name: 'High Energy',
		affinity: 'Support',
		type: 'CHARGE',
		range: 'Party',
		cost: 80,
		charge: 'Magic Charge'
	},
	{
		name: 'High Fire Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 35,
		element: 'Fire',
		stacks: '+'
	},
	{
		name: 'High Force Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 35,
		element: 'Force',
		stacks: '+'
	},
	{
		name: 'High Heal Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 35,
		element: 'Recovery',
		stacks: '+'
	},
	{
		name: 'High Ice Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 35,
		element: 'Ice',
		stacks: '+'
	},
	{
		name: 'High Light Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 35,
		element: 'Light',
		stacks: '+'
	},
	{
		name: 'High Phys Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 35,
		element: 'Phys',
		stacks: '+'
	},
	{
		name: 'High Restore',
		affinity: 'Passive',
		type: 'SIPHON',
		amount: 20,
		criteria: 'Weakness/Critical'
	},
	{
		name: 'Holy Benevolence',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 27,
		amount: 'Full',
		buffs: [],
		flags: [
			'Revive'
		]
	},
	{
		name: 'Holy Crucifixion',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		range: 'One',
		cost: 0,
		buffs: [],
		negate: false,
		debuffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		flags: [
			'Minimize Debuffs'
		],
		auto: []
	},
	{
		name: 'Holy Embrace',
		affinity: 'Passive',
		type: 'REGEN',
		unique: true,
		amount: '25%',
		criteria: 'Turn Start',
		stat: 'HP'
	},
	{
		name: 'Holy Whisper',
		affinity: 'Passive',
		type: 'REGEN',
		unique: true,
		amount: 15,
		criteria: 'Turn Start',
		stat: 'HPMP'
	},
	{
		name: 'Hot Dark Matter',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		range: 'Self',
		cost: 0,
		buffs: [
			'Attack'
		],
		negate: false,
		debuffs: [],
		flags: [
			'Maximize Buff'
		],
		auto: []
	},
	{
		name: 'Humble Blessing',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 15,
		amount: 'Slight'
	},
	{
		name: 'Hyakka Ryouran',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		range: 'Party',
		cost: 90,
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Hysterical Slap',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		flags: [
			'Charmed Boost'
		],
		max: 2,
		min: 2,
		power: {
			amount: 90,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Ice Age',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 65
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 230,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Ice Amp',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 50,
		element: 'Ice',
		stacks: 'x'
	},
	{
		name: 'Ice Block',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Party',
		cost: 40,
		barriers: [
			'Ice Nullify'
		]
	},
	{
		name: 'Ice Boost',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Ice',
		stacks: 'x'
	},
	{
		name: 'Ice Break',
		affinity: 'Support',
		type: 'BREAK',
		cost: 15,
		element: 'Ice'
	},
	{
		name: 'Ice Breath',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		max: 5,
		min: 2,
		power: {
			amount: 90,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Ice Dracostrike',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Ice Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 20,
		element: 'Ice',
		stacks: '+'
	},
	{
		name: 'Ice Wall',
		aliases: [
			'White Wall'
		],
		affinity: 'Support',
		type: 'WALL',
		cost: 18,
		element: 'Ice'
	},
	{
		name: 'Impaler\'s Animus',
		affinity: 'Support',
		type: 'CHARGE',
		range: 'Self',
		cost: 50,
		charge: 'Pierce Charge'
	},
	{
		name: 'Impaler\'s Revenge',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Chance of granting Impaler\'s Animus after user\'s attack has been Nulled/Drained/Repelled.',
		unique: null
	},
	{
		name: 'Impetus',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 220,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Inferno of God',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 220,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Inflaming Divinity',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		range: 'Ally',
		cost: 50,
		buffs: [
			'Double Attack',
			'Double Defense',
			'Double Accuracy/Evasion'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Inspiring Leader',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: '(Demon) EXP earned increases when the demon\'s Lv is lower than the Nahobino.'
	},
	{
		name: 'Insta-Heal',
		affinity: 'Passive',
		type: 'REGEN',
		amount: 2,
		criteria: null,
		stat: 'AIL'
	},
	{
		name: 'Intercalation',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'After evading an attack, adds 1 Press Turn Icon at the start of the user\'s next turn.',
		unique: null
	},
	{
		name: 'Invigorate 1',
		affinity: 'Passive',
		type: 'REGEN',
		amount: 3,
		criteria: 'Turn Start',
		stat: 'MP'
	},
	{
		name: 'Invigorate 2',
		affinity: 'Passive',
		type: 'REGEN',
		amount: 5,
		criteria: 'Turn Start',
		stat: 'MP'
	},
	{
		name: 'Invigorate 3',
		affinity: 'Passive',
		type: 'REGEN',
		amount: 7,
		criteria: 'Turn Start',
		stat: 'MP'
	},
	{
		name: 'Jack Agilao',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt',
		flags: [
			'Attack Down'
		]
	},
	{
		name: 'Jack Bufula',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		flags: [
			'Defense Down'
		],
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Javelin Rain',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		ailments: {
			names: [
				'Seal'
			],
			chance: 40
		},
		cost: {
			stat: 'MP',
			amount: 90
		},
		power: {
			amount: 260,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Judgement',
		affinity: 'Light',
		type: 'SET',
		amount: 1,
		cost: null
	},
	{
		name: 'Kamui Miracle',
		affinity: 'Recovery',
		type: 'MISC',
		unique: null,
		cost: 25,
		description: 'Anything could happen...'
	},
	{
		name: 'Kannabi Veil',
		affinity: 'Support',
		type: 'BARRIER',
		unique: null,
		range: 'Party',
		cost: 15,
		barriers: [
			'Damage Down'
		]
	},
	{
		name: 'Karnak',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'+30% Crit Rate'
		],
		power: {
			amount: 150,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Keraunos',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: true,
		accuracy: 118,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 300,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Killing Wind',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 65
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 230,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Kill Rush',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 14
		},
		max: 3,
		min: 1,
		power: {
			amount: 90,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'King Bufula',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		flags: [
			'Defense Down'
		],
		power: {
			amount: 110,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Kouga',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Kougaon',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 215,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Kouha',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Kuzunoha Emblem',
		affinity: 'Passive',
		type: 'MASTER',
		amount: 25,
		stat: 'HPMP'
	},
	{
		name: 'Laevateinn',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: null,
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 25
		},
		power: {
			amount: 450,
			display: 'Colossal',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Last Stand',
		aliases: [
			'Pressing Stance'
		],
		affinity: 'Passive',
		type: 'EVASION',
		amount: 3,
		criteria: 'Surrounded',
		element: 'All'
	},
	{
		name: 'Life Aid',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 50,
		inactive: false,
		stat: 'HP'
	},
	{
		name: 'Life Bonus',
		affinity: 'Passive',
		type: 'SPRING',
		amount: '10%',
		stat: 'HP'
	},
	{
		name: 'Life Boost',
		affinity: 'Passive',
		type: 'SPRING',
		amount: 20,
		stat: 'MP'
	},
	{
		name: 'Life Drain',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		flags: [
			'Drain HP'
		],
		power: {
			amount: 120,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Life Gain',
		affinity: 'Passive',
		type: 'SPRING',
		amount: '20%',
		stat: 'HP'
	},
	{
		name: 'Life Leech',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: null,
		accuracy: 90,
		cost: {
			stat: 'MP',
			amount: 0
		},
		flags: [
			'Drain HP',
			'Static Damage'
		],
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Life Spring',
		affinity: 'Passive',
		type: 'SPRING',
		amount: 15,
		stat: 'HP'
	},
	{
		name: 'Life Surge',
		affinity: 'Passive',
		type: 'SPRING',
		amount: '30%',
		stat: 'HP'
	},
	{
		name: 'Life Wall',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Party',
		cost: 95,
		barriers: [
			'Repel Phys',
			'Repel Magic'
		]
	},
	{
		name: 'Lightning Pulse',
		affinity: 'Passive',
		type: 'SMTCOUNTER',
		unique: null,
		chance: 100,
		element: 'Elec',
		power: {
			amount: 100,
			display: 'Weak'
		}
	},
	{
		name: 'Lightning of God',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 220,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Light Amp',
		aliases: [
			'Bless Amp'
		],
		affinity: 'Passive',
		type: 'BOOST',
		amount: 50,
		element: 'Light',
		stacks: 'x'
	},
	{
		name: 'Light Block',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Party',
		cost: 40,
		barriers: [
			'Light Nullify'
		]
	},
	{
		name: 'Light Boost',
		aliases: [
			'Bless Boost'
		],
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Light',
		stacks: 'x'
	},
	{
		name: 'Light Life Aid',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 25,
		inactive: false,
		stat: 'HP'
	},
	{
		name: 'Light Mana Aid',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 25,
		inactive: false,
		stat: 'MP'
	},
	{
		name: 'Light of Order',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: null,
		range: 'Party',
		cost: 150,
		amount: 'Moderate',
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		flags: [
			'Revert Debuffs'
		]
	},
	{
		name: 'Light Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 20,
		element: 'Light',
		stacks: '+'
	},
	{
		name: 'Light\'s Descent',
		affinity: 'Light',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 220,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Lucky Punch',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 75,
		cost: {
			stat: 'HP',
			amount: 3
		},
		power: {
			amount: 25,
			display: 'Minimal',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Lullaby',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 25,
		ailments: [
			'Sleep'
		],
		chance: 55
	},
	{
		name: 'Luminescent Mirage',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Self',
		cost: 100,
		barriers: [
			'Absolute Evasion'
		]
	},
	{
		name: 'Lunge',
		aliases: [
			'Bash'
		],
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 5
		},
		power: {
			amount: 145,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Luster Candy',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'Party',
		cost: 150,
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Mabaisudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Party',
		cost: 8,
		ailments: [
			'Burn',
			'Freeze',
			'Shock'
		],
		amount: null
	},
	{
		name: 'Mabufu',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mabufubarion',
		aliases: [
			'Ice Age'
		],
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 75
		},
		power: {
			amount: 185,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mabufudyne',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mabufula',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mac an Luin',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Crit Damage Boost'
		],
		power: {
			amount: 270,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Madness Glint',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		ailments: {
			names: [
				'Seal'
			],
			chance: 40
		},
		cost: {
			stat: 'MP',
			amount: 50
		},
		max: 5,
		min: 2,
		power: {
			amount: 150,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Madness Nails',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 36
		},
		max: 4,
		min: 2,
		power: {
			amount: 165,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Madness Needle',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 45
		},
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 110,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Maeiga',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Maeigaon',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Maeiha',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Mafrei',
		affinity: 'Nuke',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Mafreidyne',
		affinity: 'Nuke',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Mafreila',
		affinity: 'Nuke',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Magaru',
		affinity: 'Wind',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Magarudyne',
		affinity: 'Wind',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Magarula',
		affinity: 'Wind',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Magatsu Mandala',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		ailments: {
			names: [
				'Confusion',
				'Fear',
				'Despair'
			],
			chance: 20
		},
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Magatsuhi Plunder',
		affinity: 'Special',
		type: 'MISC',
		unique: null,
		cost: 35,
		description: 'Drain HP from 1 ally. User\'s affinity resistances, skills, and Magatsuhi Skills will change depending on the drained ally.'
	},
	{
		name: 'Magic Ability',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Magic',
		stacks: 'x'
	},
	{
		name: 'Magma Axis',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 0
		},
		flags: [
			'Pierce'
		],
		min: 3,
		max: 8,
		power: {
			amount: 110,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Mahama',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 105,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mahamabarion',
		aliases: [
			'Samsara'
		],
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 80
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 185,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mahamaon',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 135,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Maiden\'s Morsel',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 8
		},
		power: {
			amount: 100,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt',
		flags: [
			'Charmed Boost'
		]
	},
	{
		name: 'Makajama',
		aliases: [
			'Makajam'
		],
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 10,
		ailments: [
			'Seal'
		],
		chance: 65
	},
	{
		name: 'Makajamaon',
		aliases: [
			'Foolish Whisper'
		],
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 25,
		ailments: [
			'Seal'
		],
		chance: 40
	},
	{
		name: 'Makara Break',
		affinity: 'Support',
		type: 'BARRIERBREAK',
		cost: 18,
		barrier: 'Repel Magic'
	},
	{
		name: 'Makarkarn',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Ally',
		cost: 50,
		barriers: [
			'Repel Magic'
		]
	},
	{
		name: 'Makouga',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Makougaon',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Makouha',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Mamudo',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 105,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mamudobarion',
		aliases: [
			'Die For Me!'
		],
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 80
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 185,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mamudoon',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 135,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mana Aid',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 50,
		inactive: false,
		stat: 'MP'
	},
	{
		name: 'Mana Bonus',
		affinity: 'Passive',
		type: 'SPRING',
		amount: '10%',
		stat: 'MP'
	},
	{
		name: 'Mana Spring',
		affinity: 'Passive',
		type: 'SPRING',
		amount: 15,
		stat: 'MP'
	},
	{
		name: 'Mapsi',
		affinity: 'Psy',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Mapsio',
		affinity: 'Psy',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Mapsiodyne',
		affinity: 'Psy',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Maragi',
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Maragibarion',
		aliases: [
			'Blazing Hell'
		],
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 75
		},
		power: {
			amount: 185,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Maragidyne',
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Maragion',
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Marakukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'Party',
		cost: 30,
		buffs: [
			'Defense'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Marakunda',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'All',
		cost: 30,
		buffs: [],
		negate: false,
		debuffs: [
			'Defense'
		],
		auto: []
	},
	{
		name: 'Mararagidyne',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 95,
		ailments: {
			names: [
				'Burn'
			],
			chance: 5
		},
		cost: {
			stat: 'MP',
			amount: 32
		},
		power: {
			amount: 185,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Marin Karin',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 10,
		ailments: [
			'Charm'
		],
		chance: 70
	},
	{
		name: 'Masquerade',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: null,
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 25
		},
		max: 2,
		min: 2,
		power: {
			amount: 250,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Masukukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'Party',
		cost: 30,
		buffs: [
			'Accuracy/Evasion'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Masukunda',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'All',
		cost: 30,
		buffs: [],
		negate: false,
		debuffs: [
			'Accuracy/Evasion'
		],
		auto: []
	},
	{
		name: 'Matarukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'Party',
		cost: 30,
		buffs: [
			'Attack'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Matarunda',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'All',
		cost: 30,
		buffs: [],
		negate: false,
		debuffs: [
			'Attack'
		],
		auto: []
	},
	{
		name: 'Matriarch\'s Love',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 140,
		ailments: 'All',
		amount: 'Moderate',
		buffs: [],
		flags: [
			'Revert Debuffs'
		]
	},
	{
		name: 'Mazan',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mazanbarion',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 75
		},
		power: {
			amount: 185,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mazandyne',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mazanma',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mazio',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Maziobarion',
		aliases: [
			'Wild Thunder'
		],
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 75
		},
		power: {
			amount: 185,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Maziodyne',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mazionga',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Media',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Party',
		cost: 30,
		amount: 'Slight'
	},
	{
		name: 'Mediarahan',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Party',
		cost: 150,
		amount: 'Full'
	},
	{
		name: 'Mediarama',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Party',
		cost: 60,
		amount: 'Moderate'
	},
	{
		name: 'Meditation',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 5
		},
		flags: [
			'Drain HP/MP'
		],
		power: {
			amount: 120,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Megaton Press',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 50,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 260,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Megaton Raid',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 16
		},
		power: {
			amount: 310,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Megido',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Megido Ark',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		flags: [
			'Foe Number Dependent'
		],
		power: {
			amount: 10,
			display: 'Medium to severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Megido Flame',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 130
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 250,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Megidola',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 70
		},
		power: {
			amount: 160,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Megidolaon',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 120
		},
		power: {
			amount: 190,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mementos Scan',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Chance to fully map a floor of Mementos when entering that floor.'
	},
	{
		name: 'Memory Blow',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Seal'
			],
			chance: 5
		},
		cost: {
			stat: 'HP',
			amount: 15
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Mesektet\'s Path',
		affinity: 'Passive',
		type: 'SMTCOUNTER',
		unique: null,
		chance: 100,
		element: 'Almighty',
		power: {
			amount: 50,
			display: 'Weak'
		},
		shroud: true
	},
	{
		name: 'Me Patra',
		aliases: [
			'Amrita',
			'Amrita Shower'
		],
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Party',
		cost: 30,
		ailments: 'All',
		amount: null
	},
	{
		name: 'Mighty Cleave',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 50,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'+200% Crit Rate'
		],
		power: {
			amount: 240,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Mighty Swing',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 14
		},
		power: {
			amount: 210,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Mind Slice',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 5
		},
		cost: {
			stat: 'HP',
			amount: 19
		},
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Miracle Punch',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 75,
		cost: {
			stat: 'HP',
			amount: 8
		},
		power: {
			amount: 100,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Miracle Rush',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: null,
		accuracy: 75,
		cost: {
			stat: 'HP',
			amount: 16
		},
		power: {
			amount: 100,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Miracle Water',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: null,
		range: 'Party',
		cost: 20,
		amount: 'Slight'
	},
	{
		name: 'Mirage Assailment',
		affinity: 'Force',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: {
			names: [
				'Mirage'
			],
			chance: 30
		},
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Mirage Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Mirage',
		amount: 25,
		criteria: null
	},
	{
		name: 'Mirage Shot',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: {
			names: [
				'Mirage'
			],
			chance: 75
		},
		cost: {
			stat: 'MP',
			amount: 15
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Mist Rush',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Mirage'
			],
			chance: 35
		},
		cost: {
			stat: 'MP',
			amount: 35
		},
		max: 4,
		min: 2,
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Money Boost',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 15,
		inactive: false,
		stat: 'Money'
	},
	{
		name: 'Moonlight Frost',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 450,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt',
		flags: [
			'Pierce'
		]
	},
	{
		name: 'Moral Support',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Chance to cast Kaja or party-healing magic during battle.'
	},
	{
		name: 'Morning Star',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: null,
		accuracy: 178,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 1000,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Morning Star - Persona',
		aliases: [
			'Morning Star'
		],
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 95,
		cost: {
			stat: 'MP',
			amount: 52
		},
		power: {
			amount: 210,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Mortal Jihad',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 250,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Mudo',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 140,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Mudobarion',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 55
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Mudo Boost',
		affinity: 'Passive',
		type: 'INSTAKILLBOOST',
		element: 'Dark'
	},
	{
		name: 'Mudoon',
		affinity: 'Dark',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 175,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Murakumo',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Crit Damage Boost'
		],
		power: {
			amount: 275,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Murderous Glee',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Greatly increases Critical Rate.'
	},
	{
		name: 'Mustard Bomb',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Enervate'
			],
			chance: 5
		},
		cost: {
			stat: 'HP',
			amount: 16
		},
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Mutudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 3,
		ailments: [
			'Seal'
		],
		amount: null
	},
	{
		name: 'Muzzle Shot',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Seal'
			],
			chance: 35
		},
		cost: {
			stat: 'HP',
			amount: 9
		},
		power: {
			amount: 145,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Myriad Arrows',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 85,
		cost: {
			stat: 'HP',
			amount: 22
		},
		max: 1,
		min: 3,
		power: {
			amount: 150,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Myriad Slashes',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 50,
		cost: {
			stat: 'MP',
			amount: 55
		},
		max: 5,
		min: 5,
		power: {
			amount: 80,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Myriad Truths',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		cost: {
			stat: 'MP',
			amount: 40
		},
		max: 3,
		min: 3,
		power: {
			amount: 160,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Narukami',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 65
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 230,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Navas Nebula',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Exhaust'
			],
			chance: 5
		},
		cost: {
			stat: 'HP',
			amount: 18
		},
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Needle Spray',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'+20% Crit Rate'
		],
		max: 4,
		min: 1,
		power: {
			amount: 70,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Negative Pile',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Despair'
			],
			chance: 20
		},
		cost: {
			stat: 'HP',
			amount: 12
		},
		power: {
			amount: 200,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Neo Cadenza',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 24,
		amount: 'Half',
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		]
	},
	{
		name: 'Nervundi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 3,
		ailments: [
			'Exhaust',
			'Enervate'
		],
		amount: null
	},
	{
		name: 'Nihil Claw',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 36
		},
		max: 3,
		min: 2,
		power: {
			amount: 125,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Nocturnal Flash',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 12,
		ailments: [
			'Mirage'
		],
		chance: 55
	},
	{
		name: 'Nuke Amp',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 50,
		element: 'Nuke',
		stacks: 'x'
	},
	{
		name: 'Nuke Boost',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Nuke',
		stacks: 'x'
	},
	{
		name: 'Nuke Break',
		affinity: 'Support',
		type: 'BREAK',
		cost: 15,
		element: 'Nuke'
	},
	{
		name: 'Nuke Wall',
		affinity: 'Support',
		type: 'WALL',
		cost: 18,
		element: 'Nuke'
	},
	{
		name: 'Null Burn',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Burn',
		resistance: 'Null'
	},
	{
		name: 'Null Charm',
		aliases: [
			'Null Brainwash'
		],
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Charm',
		resistance: 'Null'
	},
	{
		name: 'Null Confuse',
		aliases: [
			'Null Dizzy'
		],
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Confusion',
		resistance: 'Null'
	},
	{
		name: 'Null Dark',
		aliases: [
			'Null Curse'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Dark',
		newResistance: 'Null'
	},
	{
		name: 'Null Despair',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Despair',
		resistance: 'Null'
	},
	{
		name: 'Null Elec',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Elec',
		newResistance: 'Null'
	},
	{
		name: 'Null Enervate',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Enervate',
		resistance: 'Null'
	},
	{
		name: 'Null Exhaust',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Exhaust',
		resistance: 'Null'
	},
	{
		name: 'Null Fear',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Fear',
		resistance: 'Null'
	},
	{
		name: 'Null Fire',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Fire',
		newResistance: 'Null'
	},
	{
		name: 'Null Force',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Force',
		newResistance: 'Null'
	},
	{
		name: 'Null Freeze',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Freeze',
		resistance: 'Null'
	},
	{
		name: 'Null Hunger',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Hunger',
		resistance: 'Null'
	},
	{
		name: 'Null Ice',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Ice',
		newResistance: 'Null'
	},
	{
		name: 'Null Light',
		aliases: [
			'Null Bless'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Light',
		newResistance: 'Null'
	},
	{
		name: 'Null Light/Dark',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Light/Dark',
		newResistance: 'Null'
	},
	{
		name: 'Null Mirage',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Mirage',
		resistance: 'Null'
	},
	{
		name: 'Null Nuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Nuke',
		newResistance: 'Null'
	},
	{
		name: 'Null Phys',
		aliases: [
			'Null Physical'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Phys',
		newResistance: 'Null'
	},
	{
		name: 'Null Poison',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Poison',
		resistance: 'Null'
	},
	{
		name: 'Null Psy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Psy',
		newResistance: 'Null'
	},
	{
		name: 'Null Rage',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Rage',
		resistance: 'Null'
	},
	{
		name: 'Null Seal',
		aliases: [
			'Null Forget',
			'Null Mute'
		],
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Seal',
		resistance: 'Null'
	},
	{
		name: 'Null Shock',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Shock',
		resistance: 'Null'
	},
	{
		name: 'Null Sleep',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Sleep',
		resistance: 'Null'
	},
	{
		name: 'Null Wind',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Wind',
		newResistance: 'Null'
	},
	{
		name: 'Old One',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 12,
		ailments: [
			'Enervate'
		],
		chance: 30
	},
	{
		name: 'Ominous Words',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 5,
		ailments: [
			'Despair'
		],
		chance: 70
	},
	{
		name: 'One-shot Kill',
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 17
		},
		power: {
			amount: 280,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Oni-Kagura',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Rage'
			],
			chance: 5
		},
		cost: {
			stat: 'HP',
			amount: 16
		},
		power: {
			amount: 100,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Oracle',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Ask Fuuka to use Oracle.'
	},
	{
		name: 'Oratorio',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 38,
		amount: 'Full',
		buffs: [],
		flags: [
			'Revert Debuffs'
		]
	},
	{
		name: 'Pandemonic Crush',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 70
		},
		flags: [
			'Defense Down'
		],
		power: {
			amount: 170,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Panta Rhei',
		affinity: 'Wind',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Panta Spane',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 65
		},
		flags: [
			'Attack Down',
			'Defense Down'
		],
		power: {
			amount: 180,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Patra',
		aliases: [
			'Amrita Drop'
		],
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 8,
		ailments: 'All',
		amount: null
	},
	{
		name: 'Pestilence',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Afflicted Boost'
		],
		power: {
			amount: 170,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Phantom Show',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 'All',
		cost: 4,
		ailments: [
			'Sleep'
		],
		chance: 70
	},
	{
		name: 'Phys Block',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Party',
		cost: 70,
		barriers: [
			'Phys Nullify'
		]
	},
	{
		name: 'Phys Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 20,
		element: 'Phys',
		stacks: '+'
	},
	{
		name: 'Pierce Armor',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'Defense Down'
		],
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Poisma',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 10,
		ailments: [
			'Poison'
		],
		chance: 85
	},
	{
		name: 'Poison Adept',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Increases effects of Poison.'
	},
	{
		name: 'Poison Arrow',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 85,
		ailments: {
			names: [
				'Poison'
			],
			chance: 35
		},
		cost: {
			stat: 'HP',
			amount: 14
		},
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Poison Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Poison',
		amount: 50,
		criteria: null
	},
	{
		name: 'Poison Master',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Greatly increases effects of Poison.'
	},
	{
		name: 'Poison Mist',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 12,
		ailments: [
			'Poison'
		],
		chance: 55
	},
	{
		name: 'Poison Skewer',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Poison'
			],
			chance: 20
		},
		cost: {
			stat: 'HP',
			amount: 9
		},
		power: {
			amount: 110,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Position Hack',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Chance to instantly Hold Up enemies when starting a battle.'
	},
	{
		name: 'Posumudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 3,
		ailments: [
			'Poison'
		],
		amount: null
	},
	{
		name: 'Power Punch',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		flags: [
			'HP Dependent'
		],
		power: {
			amount: 155,
			display: 'Medium to severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Power Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 10
		},
		power: {
			amount: 180,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Pralaya',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 80,
		cost: {
			stat: 'HP',
			amount: 25
		},
		flags: [
			'Instakill'
		],
		power: {
			amount: 290,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Preach',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 'All',
		cost: 35,
		ailments: [
			'Confusion',
			'Charm',
			'Sleep'
		],
		chance: 75
	},
	{
		name: 'President\'s Insight',
		affinity: 'Support',
		type: 'CHARGE',
		unique: null,
		range: 'Ally',
		cost: 15,
		charge: 'Magic Charge'
	},
	{
		name: 'Primal Force',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 20
		},
		power: {
			amount: 425,
			display: 'Colossal',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Primordial Chaos',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 150
		},
		power: {
			amount: 210,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt',
		unique: true,
		flags: [
			'Negate Buffs',
			'Attack Down',
			'Defense Down',
			'Accuracy/Evasion Down'
		]
	},
	{
		name: 'Primordial Parturition',
		affinity: 'Special',
		type: 'SUMMON',
		unique: null,
		demon: 'Qadištu'
	},
	{
		name: 'Profaned Land',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		ailments: {
			names: [
				'Poison'
			],
			chance: 100
		},
		cost: {
			stat: 'MP',
			amount: 35
		},
		power: {
			amount: 240,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Psi',
		affinity: 'Psy',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Psio',
		affinity: 'Psy',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Psiodyne',
		affinity: 'Psy',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		power: {
			amount: 215,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Psy Amp',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 50,
		element: 'Psy',
		stacks: 'x'
	},
	{
		name: 'Psy Boost',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Psy',
		stacks: 'x'
	},
	{
		name: 'Psy Break',
		affinity: 'Support',
		type: 'BREAK',
		cost: 15,
		element: 'Psy'
	},
	{
		name: 'Psycho Blast',
		affinity: 'Psy',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 75
		},
		power: {
			amount: 185,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Psycho Force',
		affinity: 'Psy',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Psy Wall',
		affinity: 'Support',
		type: 'WALL',
		cost: 18,
		element: 'Psy'
	},
	{
		name: 'Pulinpa',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 10,
		ailments: [
			'Confusion'
		],
		chance: 70
	},
	{
		name: 'Puncture Punch',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Purgatorium',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 210,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt',
		flags: [
			'Pierce'
		]
	},
	{
		name: 'Purple Smoke',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'Confused Boost'
		],
		max: 3,
		min: 3,
		power: {
			amount: 75,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Queen\'s Decree',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		min: 12,
		max: 12,
		power: {
			amount: 25,
			display: 'Minimal',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Rage Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Rage',
		amount: 25,
		criteria: null
	},
	{
		name: 'Raging Blizzard',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 40
		},
		power: {
			amount: 300,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Raging Hellfire',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 40
		},
		power: {
			amount: 300,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Raging Lightning',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 40
		},
		power: {
			amount: 300,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Raging Tempest',
		affinity: 'Force',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 40
		},
		power: {
			amount: 300,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Ragnarok',
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		max: 5,
		min: 2,
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Rainy Death',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 85,
		cost: {
			stat: 'HP',
			amount: 20
		},
		flags: [
			'Weather Boost'
		],
		power: {
			amount: 260,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Rakukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'Ally',
		cost: 8,
		buffs: [
			'Defense'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Rakunda',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'One',
		cost: 8,
		buffs: [],
		negate: false,
		debuffs: [
			'Defense'
		],
		auto: []
	},
	{
		name: 'Rampage',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 50,
		cost: {
			stat: 'MP',
			amount: 35
		},
		max: 5,
		min: 2,
		power: {
			amount: 180,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Rebellion',
		affinity: 'Support',
		type: 'CRIT',
		range: 'Ally',
		cost: 5
	},
	{
		name: 'Rebellion Blade',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: null,
		accuracy: 95,
		cost: {
			stat: 'MP',
			amount: 99
		},
		flags: [
			'Down Boost'
		],
		power: {
			amount: 450,
			display: 'Colossal',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Rebel Soul',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Showtime guage increases more quickly.'
	},
	{
		name: 'Recarm',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 20,
		amount: 'Half',
		buffs: [],
		flags: [
			'Revive'
		]
	},
	{
		name: 'Recarmdra',
		affinity: 'Recovery',
		type: 'MISC',
		unique: null,
		cost: null,
		description: 'Fully revive and recover party but user\'s HP drops to 1.'
	},
	{
		name: 'Red Capote',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		range: 'Ally',
		cost: 8,
		buffs: [
			'Double Accuracy/Evasion'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Regenerate 1',
		affinity: 'Passive',
		type: 'REGEN',
		amount: '2%',
		criteria: 'Turn Start',
		stat: 'HP'
	},
	{
		name: 'Regenerate 2',
		affinity: 'Passive',
		type: 'REGEN',
		amount: '4%',
		criteria: 'Turn Start',
		stat: 'HP'
	},
	{
		name: 'Regenerate 3',
		affinity: 'Passive',
		type: 'REGEN',
		amount: '6%',
		criteria: 'Turn Start',
		stat: 'HP'
	},
	{
		name: 'Relaxing Wave',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Recover 5% SP after battle (party).'
	},
	{
		name: 'Re Patra',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 5,
		ailments: [
			'Mirage'
		],
		amount: null
	},
	{
		name: 'Repel Dark',
		aliases: [
			'Repel Curse'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Dark',
		newResistance: 'Repel'
	},
	{
		name: 'Repel Elec',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Elec',
		newResistance: 'Repel'
	},
	{
		name: 'Repel Fire',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Fire',
		newResistance: 'Repel'
	},
	{
		name: 'Repel Force',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Force',
		newResistance: 'Repel'
	},
	{
		name: 'Repel Ice',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Ice',
		newResistance: 'Repel'
	},
	{
		name: 'Repel Light',
		aliases: [
			'Repel Bless'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Light',
		newResistance: 'Repel'
	},
	{
		name: 'Repel Nuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Nuke',
		newResistance: 'Repel'
	},
	{
		name: 'Repel Phys',
		aliases: [
			'Repel Physical'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Phys',
		newResistance: 'Repel'
	},
	{
		name: 'Repel Psy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Psy',
		newResistance: 'Repel'
	},
	{
		name: 'Repel Wind',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Wind',
		newResistance: 'Repel'
	},
	{
		name: 'Resist Burn',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Burn',
		resistance: 'Resist'
	},
	{
		name: 'Resist Charm',
		aliases: [
			'Resist Brainwash'
		],
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Charm',
		resistance: 'Resist'
	},
	{
		name: 'Resist Confuse',
		aliases: [
			'Resist Dizzy'
		],
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Confusion',
		resistance: 'Resist'
	},
	{
		name: 'Resist Dark',
		aliases: [
			'Resist Curse'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Dark',
		newResistance: 'Resist'
	},
	{
		name: 'Resist Despair',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Despair',
		resistance: 'Resist'
	},
	{
		name: 'Resist Elec',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Elec',
		newResistance: 'Resist'
	},
	{
		name: 'Resist Enervate',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Enervate',
		resistance: 'Resist'
	},
	{
		name: 'Resist Exhaust',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Exhaust',
		resistance: 'Resist'
	},
	{
		name: 'Resist Fear',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Fear',
		resistance: 'Resist'
	},
	{
		name: 'Resist Fire',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Fire',
		newResistance: 'Resist'
	},
	{
		name: 'Resist Force',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Force',
		newResistance: 'Resist'
	},
	{
		name: 'Resist Freeze',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Freeze',
		resistance: 'Resist'
	},
	{
		name: 'Resist Hunger',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Hunger',
		resistance: 'Resist'
	},
	{
		name: 'Resist Ice',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Ice',
		newResistance: 'Resist'
	},
	{
		name: 'Resist Light',
		aliases: [
			'Resist Bless'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Light',
		newResistance: 'Resist'
	},
	{
		name: 'Resist Mirage',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Mirage',
		resistance: 'Resist'
	},
	{
		name: 'Resist Nuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Nuke',
		newResistance: 'Resist'
	},
	{
		name: 'Resist Phys',
		aliases: [
			'Resist Physical'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Phys',
		newResistance: 'Resist'
	},
	{
		name: 'Resist Poison',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Poison',
		resistance: 'Resist'
	},
	{
		name: 'Resist Psy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Psy',
		newResistance: 'Resist'
	},
	{
		name: 'Resist Rage',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Rage',
		resistance: 'Resist'
	},
	{
		name: 'Resist Seal',
		aliases: [
			'Resist Forget',
			'Resist Mute'
		],
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Seal',
		resistance: 'Resist'
	},
	{
		name: 'Resist Shock',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Shock',
		resistance: 'Resist'
	},
	{
		name: 'Resist Sleep',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Sleep',
		resistance: 'Resist'
	},
	{
		name: 'Resist Wind',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Wind',
		newResistance: 'Resist'
	},
	{
		name: 'Restore',
		affinity: 'Passive',
		type: 'SIPHON',
		amount: 10,
		criteria: 'Weakness/Critical'
	},
	{
		name: 'Retaliate',
		affinity: 'Passive',
		type: 'SMTCOUNTER',
		chance: 50,
		element: 'Phys',
		power: {
			amount: 150,
			display: 'Medium'
		}
	},
	{
		name: 'Reverse Rub',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: null,
		range: 'One',
		cost: 0,
		ailments: [
			'Rage'
		],
		chance: 100
	},
	{
		name: 'Revival Chant',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: null,
		range: 'Ally',
		cost: 100,
		amount: 'Full',
		buffs: [],
		flags: [
			'Revive',
			'Summon'
		]
	},
	{
		name: 'Revolution',
		affinity: 'Support',
		type: 'CRIT',
		range: 'All',
		cost: 5
	},
	{
		name: 'Riot Gun',
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 80,
		cost: {
			stat: 'HP',
			amount: 24
		},
		power: {
			amount: 310,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Rising Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 14
		},
		flags: [
			'Baton Boost'
		],
		power: {
			amount: 220,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Rising Storm Dragon',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: null,
		accuracy: 118,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 1000,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt',
		flags: [
			'Pierce'
		]
	},
	{
		name: 'Rooted Soul',
		affinity: 'Passive',
		type: 'SPRING',
		amount: 30,
		stat: 'HPMP',
		unique: null
	},
	{
		name: 'Ruinous Thunder',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 200,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Sacrifice of Clay',
		affinity: 'Force',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Defense Down',
			'Attack Down'
		],
		power: {
			amount: 140,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Safeguard',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Being Evaded/Nulled/Drained/Repelled doesn\'t consume additional Press Turn Icons.'
	},
	{
		name: 'Sakanagi',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 230,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Sakuya Sakura',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 180,
		amount: 'Slight',
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		flags: [
			'Recover HP/MP'
		]
	},
	{
		name: 'Salvation',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Party',
		cost: 48,
		ailments: 'All',
		amount: 'Full'
	},
	{
		name: 'Samarecarm',
		affinity: 'Recovery',
		type: 'RECOVERY',
		range: 'Ally',
		cost: 60,
		amount: 'Full',
		buffs: [],
		flags: [
			'Revive'
		]
	},
	{
		name: 'Samurai\'s Order',
		affinity: 'Passive',
		type: 'EVASION',
		amount: 0,
		criteria: null,
		element: 'Crit/Magic'
	},
	{
		name: 'Sanguine Drain',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'Attack Down',
			'Drain HP'
		],
		power: {
			amount: 120,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Scratch Dance',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 12
		},
		max: 4,
		min: 2,
		power: {
			amount: 85,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Seal Bomb',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Seal'
			],
			chance: 20
		},
		cost: {
			stat: 'HP',
			amount: 14
		},
		power: {
			amount: 110,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Seal Boost',
		aliases: [
			'Forget Boost',
			'Silence Boost'
		],
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Seal',
		amount: 25,
		criteria: null
	},
	{
		name: 'Seething Mansemat',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 100
		},
		power: {
			amount: 120,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt',
		unique: true,
		flags: [
			'+200% Crit Rate',
			'Crit Damage Boost'
		]
	},
	{
		name: 'Self-destruct',
		aliases: [
			'Last Resort'
		],
		affinity: 'Almighty',
		type: 'MISC',
		unique: null,
		cost: null,
		description: 'Medium Almighty damage to all. User dies.'
	},
	{
		name: 'Severing Bite',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'Crit Damage Boost'
		],
		power: {
			amount: 190,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Sexy Dance',
		aliases: [
			'Brain Jack'
		],
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 25,
		ailments: [
			'Charm'
		],
		chance: 45
	},
	{
		name: 'Shadow of Grief',
		affinity: 'Passive',
		type: 'SIPHON',
		amount: 22,
		criteria: 'Drain'
	},
	{
		name: 'Shadow Summoning',
		affinity: 'Special',
		type: 'SUMMON',
		unique: null,
		demon: 'Qadištu'
	},
	{
		name: 'Sharp Student',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Decreases chance of being hit by a Critical.'
	},
	{
		name: 'Shield of Justice',
		affinity: 'Support',
		type: 'BARRIER',
		unique: null,
		range: 'Party',
		cost: 160,
		barriers: [
			'Shield of Justice'
		]
	},
	{
		name: 'Shining Arrows',
		affinity: 'Light',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		cost: {
			stat: 'MP',
			amount: 22
		},
		max: 8,
		min: 4,
		power: {
			amount: 15,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Shock Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Shock',
		amount: 25,
		criteria: null
	},
	{
		name: 'Shockbound',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		max: 5,
		min: 2,
		power: {
			amount: 90,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Silt of Ruin',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 45
		},
		flags: [
			'Accuracy/Evasion Down'
		],
		power: {
			amount: 140,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Single Shot',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 8
		},
		power: {
			amount: 145,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Skewer',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 85,
		cost: {
			stat: 'HP',
			amount: 5
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Skull Cracker',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 20
		},
		cost: {
			stat: 'HP',
			amount: 10
		},
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Sledgehammer',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Mirage'
			],
			chance: 20
		},
		cost: {
			stat: 'HP',
			amount: 10
		},
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Sleep Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: 'Sleep',
		amount: 25,
		criteria: null
	},
	{
		name: 'Slumber Vortex',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 35,
		ailments: [
			'Sleep',
			'Mirage'
		],
		chance: 40
	},
	{
		name: 'Snap',
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 9
		},
		power: {
			amount: 100,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Somersault',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		flags: [
			'Defense Greatly Down'
		],
		power: {
			amount: 160,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Sonic Boom',
		affinity: 'Force',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 145,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Sonic Punch',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 8
		},
		power: {
			amount: 140,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Souffle D\'éclair',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 55
		},
		power: {
			amount: 330,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Soul Break',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 5,
		ailments: [
			'Exhaust'
		],
		chance: 70
	},
	{
		name: 'Soul Chain',
		affinity: 'Passive',
		type: 'REGEN',
		amount: 20,
		criteria: 'Baton Pass',
		stat: 'MP'
	},
	{
		name: 'Soul Divide',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 50,
		ailments: {
			names: [
				'Seal'
			],
			chance: 40
		},
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 230,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Soul Touch',
		affinity: 'Passive',
		type: 'REGEN',
		amount: 5,
		criteria: 'Baton Pass',
		stat: 'MP'
	},
	{
		name: 'Speed Master',
		aliases: [
			'Auto-Sukukaja'
		],
		affinity: 'Passive',
		type: 'AUTOBUFF',
		buff: 'Accuracy/Evasion',
		range: 'Self'
	},
	{
		name: 'Spell Master',
		affinity: 'Passive',
		type: 'MASTER',
		amount: 50,
		stat: 'MP'
	},
	{
		name: 'Spirit Drain',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 5
		},
		flags: [
			'Drain MP'
		],
		power: {
			amount: 100,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Spirit Leech',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: null,
		accuracy: 90,
		cost: {
			stat: 'MP',
			amount: 0
		},
		flags: [
			'Drain MP',
			'Static Damage'
		],
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Spring of Life',
		affinity: 'Passive',
		type: 'REGEN',
		unique: null,
		amount: '8%',
		criteria: 'Turn Start',
		stat: 'HP'
	},
	{
		name: 'Stagnant Air',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 'All',
		cost: 50,
		ailments: [
			'Mirage'
		],
		chance: 80,
		flags: [
			'Defense Down',
			'Accuracy/Evasion Down'
		]
	},
	{
		name: 'Stagnant Air - Persona',
		aliases: [
			'Stagnant Air'
		],
		affinity: 'Almighty',
		type: 'SUSCEPTIBILITY',
		range: 'All',
		cost: 5
	},
	{
		name: 'Stamina Song',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Recover 10% HP after battle (party).'
	},
	{
		name: 'Steel Needle',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'+20% Crit Rate'
		],
		max: 4,
		min: 1,
		power: {
			amount: 75,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Stomach Blow',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: null,
		accuracy: 80,
		ailments: {
			names: [
				'Hunger'
			],
			chance: 100
		},
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Stormcaller Song',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 18
		},
		max: 6,
		min: 3,
		power: {
			amount: 60,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Storm Dracostrike',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Subrecover HP',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Restores 10% HP to backup members after battle.'
	},
	{
		name: 'Subrecover HP EX',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Restores 20% HP to backup members after battle.'
	},
	{
		name: 'Subrecover SP',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Restores 1% SP to backup members after battle.'
	},
	{
		name: 'Subrecover SP EX',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Restores 3% SP to backup members after battle.'
	},
	{
		name: 'Sukukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'Ally',
		cost: 8,
		buffs: [
			'Accuracy/Evasion'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Sukunda',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'One',
		cost: 8,
		buffs: [],
		negate: false,
		debuffs: [
			'Accuracy/Evasion'
		],
		auto: []
	},
	{
		name: 'Summon',
		affinity: 'Special',
		type: 'SUMMON',
		unique: null,
		demon: null
	},
	{
		name: 'Sun\'s Radiance',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Ally',
		cost: 12,
		ailments: 'All',
		amount: 'Moderate'
	},
	{
		name: 'Support Plus 1',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Activates Masukunda.'
	},
	{
		name: 'Support Plus 2',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Activates Masukunda and Marakunda.'
	},
	{
		name: 'Support Plus 3',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Activates Masukunda, Marakunda, and Matarunda.'
	},
	{
		name: 'Support Rate Up',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Increases activation of Moral Support.'
	},
	{
		name: 'Support Scan',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Displays all buffs and debuffs currently in effect.'
	},
	{
		name: 'Survival Trick',
		affinity: 'Passive',
		type: 'ENDURE',
		amount: 3,
		criteria: 'Light/Dark'
	},
	{
		name: 'Survive Dark',
		affinity: 'Passive',
		type: 'ENDURE',
		amount: 50,
		criteria: 'Dark'
	},
	{
		name: 'Survive Light',
		affinity: 'Passive',
		type: 'ENDURE',
		amount: 50,
		criteria: 'Light'
	},
	{
		name: 'Swift Strike',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 70,
		cost: {
			stat: 'HP',
			amount: 17
		},
		max: 4,
		min: 2,
		power: {
			amount: 25,
			display: 'Minimal',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Sword Dance',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 25
		},
		power: {
			amount: 375,
			display: 'Colossal',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Tandava',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 160
		},
		flags: [
			'Minimize Defense'
		],
		power: {
			amount: 230,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Tarukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'Ally',
		cost: 8,
		buffs: [
			'Attack'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Tarunda',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'One',
		cost: 8,
		buffs: [],
		negate: false,
		debuffs: [
			'Attack'
		],
		auto: []
	},
	{
		name: 'Taunt',
		affinity: 'Support',
		type: 'TAUNT',
		buff: null,
		cost: 10
	},
	{
		name: 'Taunting Aura',
		affinity: 'Support',
		type: 'TAUNT',
		buff: null,
		cost: 4
	},
	{
		name: 'Taunt - Persona',
		aliases: [
			'Taunt',
			'Balzac'
		],
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'One',
		cost: 5,
		ailments: [
			'Rage'
		],
		chance: 70
	},
	{
		name: 'Technical High',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Increases duration of Kaja-type buff skills when landing a Critical.'
	},
	{
		name: 'Tempest Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 85,
		cost: {
			stat: 'HP',
			amount: 17
		},
		max: 5,
		min: 3,
		power: {
			amount: 20,
			display: 'Minimal',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Tentarafoo',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 25,
		ailments: [
			'Confusion'
		],
		chance: 45
	},
	{
		name: 'Terrorblade',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 50
		},
		cost: {
			stat: 'MP',
			amount: 35
		},
		flags: [
			'Pierce'
		],
		max: 3,
		min: 1,
		power: {
			amount: 250,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Terror Claw',
		aliases: [
			'Golden Right'
		],
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Fear'
			],
			chance: 20
		},
		cost: {
			stat: 'HP',
			amount: 8
		},
		power: {
			amount: 90,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Tetra Break',
		affinity: 'Support',
		type: 'BARRIERBREAK',
		cost: 18,
		barrier: 'Repel Phys'
	},
	{
		name: 'Tetraja',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Ally',
		cost: 24,
		barriers: [
			'Tetraja'
		]
	},
	{
		name: 'Tetrakarn',
		affinity: 'Support',
		type: 'BARRIER',
		range: 'Ally',
		cost: 50,
		barriers: [
			'Repel Phys'
		]
	},
	{
		name: 'Thalassic Calamity',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 45
		},
		max: 7,
		min: 3,
		power: {
			amount: 95,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'The Man\'s Way',
		affinity: 'Ailment',
		type: 'MISC',
		unique: null,
		cost: 30,
		description: 'May inflict Down/Dizzy on all foes.'
	},
	{
		name: 'Thermopylae',
		affinity: 'Support',
		type: 'SUPPORT',
		range: 'Party',
		cost: 30,
		flags: [
			'Surrounded Only'
		],
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		negate: false,
		debuffs: [],
		auto: []
	},
	{
		name: 'Third Eye',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Reveal the effectiveness of an attack.'
	},
	{
		name: 'Thunder Reign',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		max: 5,
		min: 2,
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Titanomachia',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		flags: [
			'+20% Crit Rate'
		],
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Titanomachia - Persona',
		aliases: [
			'Titanomachia'
		],
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		ailments: {
			names: [
				'Fear'
			],
			chance: 70
		},
		cost: {
			stat: 'MP',
			amount: 34
		},
		power: {
			amount: 190,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Tornado of God',
		affinity: 'Force',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 220,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Torrent Shot',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 12
		},
		max: 4,
		min: 2,
		power: {
			amount: 75,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Touch n\' Go',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Automatic Sukukaja after a Baton Pass.'
	},
	{
		name: 'Toxic Breath',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: {
			names: [
				'Poison'
			],
			chance: 50
		},
		cost: {
			stat: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Toxic Cloud',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 25,
		ailments: [
			'Poison'
		],
		chance: 60
	},
	{
		name: 'Toxic Spray',
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 15,
		ailments: [
			'Poison'
		],
		chance: 85,
		flags: [
			'Defense Down'
		]
	},
	{
		name: 'Toxic Sting',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Poison'
			],
			chance: 60
		},
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 110,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Traesto',
		affinity: 'Support',
		type: 'MISC',
		cost: 18,
		description: 'Instantly escape from a dungeon.'
	},
	{
		name: 'Trafuri',
		affinity: 'Special',
		type: 'MISC',
		cost: 6,
		description: 'Guarantees escape from escapable battles.'
	},
	{
		name: 'Treasure Radar',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Reveal the location of treasure chests on each floor.'
	},
	{
		name: 'Treasure Reboot',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Chance to revive search objects in the area after battle.'
	},
	{
		name: 'Treasure Skimmer',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Find out if a foe is carrying a rare item ahead of time.'
	},
	{
		name: 'Trigger Happy',
		affinity: 'Passive',
		type: 'MISC',
		cost: null,
		description: 'Increases chance of Critical from Gun attacks.'
	},
	{
		name: 'Triple Down',
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 70,
		cost: {
			stat: 'HP',
			amount: 16
		},
		max: 3,
		min: 3,
		power: {
			amount: 40,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Trisagion',
		affinity: 'Fire',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 65
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 230,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'True Replication',
		affinity: 'Special',
		type: 'MISC',
		unique: null,
		cost: 0,
		description: 'Creates a replica.'
	},
	{
		name: 'Twin Shot',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 20
		},
		cost: {
			stat: 'HP',
			amount: 10
		},
		max: 2,
		min: 2,
		power: {
			amount: 120,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Tyrant\'s Mind',
		affinity: 'Passive',
		type: 'BOOST',
		unique: true,
		amount: 25,
		element: 'All',
		stacks: 'x'
	},
	{
		name: 'Tyrant\'s Will',
		affinity: 'Support',
		type: 'CHARGE',
		unique: null,
		range: 'Ally',
		cost: 15,
		charge: 'Phys Charge'
	},
	{
		name: 'Ultimate Support',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Ultimate support effect of strengthening/healing all allies may activate in battle.'
	},
	{
		name: 'Unshaken Will',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailment: 'Confuse/Fear/Rage/Despair',
		resistance: 'Null'
	},
	{
		name: 'Untainted Wind',
		affinity: 'Force',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		ailments: {
			names: [
				'Charm'
			],
			chance: 50
		},
		cost: {
			stat: 'MP',
			amount: 240
		},
		flags: [
			'Attack Greatly Down',
			'Defense Greatly Down',
			'Accuracy/Evasion Greatly Down'
		],
		power: {
			amount: 150,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Vacuum Wave',
		affinity: 'Wind',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 75
		},
		power: {
			amount: 185,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Vajra Blast',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		cost: {
			stat: 'HP',
			amount: 13
		},
		power: {
			amount: 100,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Vault Guardian',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		range: 'Party',
		cost: 20,
		buffs: [
			'Defense'
		],
		negate: false,
		debuffs: [],
		auto: [
			'Repel Phys',
			'Repel Magic'
		]
	},
	{
		name: 'Venom Chaser',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 15
		},
		flags: [
			'Poisoned Boost'
		],
		power: {
			amount: 160,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Vicious Strike',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		cost: {
			stat: 'HP',
			amount: 18
		},
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Victory Cry',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 100,
		inactive: false,
		stat: 'HPMP'
	},
	{
		name: 'Vigor Song',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Recover 10% SP after battle (party).'
	},
	{
		name: 'Vile Assault',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 90,
		cost: {
			stat: 'HP',
			amount: 18
		},
		flags: [
			'Down Boost'
		],
		power: {
			amount: 300,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Violent Rage',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: {
			names: [
				'Seal'
			],
			chance: 40
		},
		cost: {
			stat: 'MP',
			amount: 60
		},
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Virus Wave',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		ailments: {
			names: [
				'Poison'
			],
			chance: 5
		},
		cost: {
			stat: 'HP',
			amount: 16
		},
		power: {
			amount: 175,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Voracious Salvation',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		flags: [
			'Afflicted Boost',
			'Drain HP'
		],
		power: {
			amount: 200,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Vorpal Blade',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 80,
		cost: {
			stat: 'HP',
			amount: 23
		},
		power: {
			amount: 280,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Wage War',
		aliases: [
			'Valiant Dance'
		],
		affinity: 'Ailment',
		type: 'AILMENT',
		range: 'All',
		cost: 12,
		ailments: [
			'Rage'
		],
		chance: 55
	},
	{
		name: 'Walpurgisnacht',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 300,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Weakness Scan',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Reveal an enemy\'s affinity at the start of battle.'
	},
	{
		name: 'White Dracostrike',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Wild Dance',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: null,
		range: 'All',
		cost: 0,
		ailments: [
			'Confusion'
		],
		chance: 65
	},
	{
		name: 'Wind Amp',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 50,
		element: 'Wind',
		stacks: 'x'
	},
	{
		name: 'Wind Boost',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Wind',
		stacks: 'x'
	},
	{
		name: 'Wind Break',
		affinity: 'Support',
		type: 'BREAK',
		cost: 15,
		element: 'Wind'
	},
	{
		name: 'Wind Breath',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		max: 5,
		min: 2,
		power: {
			amount: 90,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Wind Dracostrike',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Wind Wall',
		aliases: [
			'Green Wall'
		],
		affinity: 'Support',
		type: 'WALL',
		cost: 18,
		element: 'Wind'
	},
	{
		name: 'Wings of Wisdom',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		range: 'Party',
		cost: 10,
		flags: [
			'Cure Non-Special Ailments'
		],
		buffs: [],
		negate: false,
		debuffs: [],
		auto: [
			'Accuracy/Evasion'
		]
	},
	{
		name: 'Witness Me',
		affinity: 'Support',
		type: 'TAUNT',
		unique: true,
		buff: 'Double Accuracy/Evasion',
		cost: 5
	},
	{
		name: 'Wrath Tempest',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		flags: [
			'Crit Damage Boost'
		],
		max: 8,
		min: 8,
		power: {
			amount: 30,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'Random',
		series: 'smt'
	},
	{
		name: 'Xeros Beat',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: null,
		accuracy: 108,
		ailments: {
			names: [
				'Mirage'
			],
			chance: 50
		},
		cost: {
			stat: 'MP',
			amount: 0
		},
		power: {
			amount: 160,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Yabusame Shot',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Pierce',
			'+200% Crit Rate'
		],
		power: {
			amount: 60,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Youthful Wind',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: null,
		range: 'Party',
		cost: 25,
		amount: 'Moderate',
		buffs: [
			'Accuracy/Evasion'
		]
	},
	{
		name: 'Zan',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Zanbarion',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Zandyne',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		power: {
			amount: 215,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Zanma',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Zio',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Ziobarion',
		aliases: [
			'Thunder Reign'
		],
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Ziodyne',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 35
		},
		power: {
			amount: 215,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Zionga',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	}
];

export default skillData;