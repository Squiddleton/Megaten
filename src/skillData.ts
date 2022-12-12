import type { AnySkillData } from './skill';

const skillData: Readonly<AnySkillData[]> = [
	{
		name: '+15% EXP',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 15,
		inactive: false,
		stat: 'EXP'
	},
	{
		name: '+50% EXP',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 50,
		inactive: false,
		stat: 'EXP'
	},
	{
		name: 'Abysmal Surge',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'All',
		cost: 12,
		ailments: [
			'Fear'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Abyssal Eye',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		cost: null,
		description: 'Greatly decreases chance of instakill and being afflicted with ailments.'
	},
	{
		name: 'Abyssal Wings',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [
			'+200% Crit Rate'
		],
		max: 1,
		min: 1,
		power: {
			amount: 80,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Adverse Resolve',
		affinity: 'Passive',
		type: 'CRITBOOST',
		unique: false,
		amount: 20,
		criteria: 'Surround'
	},
	{
		name: 'Aeon Rain',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 75,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 18
		},
		flags: [],
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 35
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 80,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 24
		},
		flags: [],
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
		unique: false,
		ailment: 'ALL',
		amount: 25,
		weather: false
	},
	{
		name: 'Akashic Arts',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [
			'Crit Damage Boost'
		],
		max: 1,
		min: 1,
		power: {
			amount: 275,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Ali Dance',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		criteria: null,
		elements: [
			'Phys',
			'Gun',
			'Fire',
			'Ice',
			'Elec',
			'Wind',
			'Psy',
			'Nuke',
			'Light',
			'Dark',
			'Almighty'
		]
	},
	{
		name: 'Almighty Boost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Almighty',
		stacks: 'x'
	},
	{
		name: 'Almighty Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Almighty',
		stacks: '+'
	},
	{
		name: 'Ambient Aid',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'ALL',
		amount: 30,
		weather: true
	},
	{
		name: 'Analysis',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Confirm affinities of enemies you have previously attacked.'
	},
	{
		name: 'Andalucia',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [],
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
		unique: false,
		amount: 2,
		criteria: null,
		elements: [
			'Fire',
			'Ice',
			'Force',
			'Wind',
			'Elec',
			'Psy',
			'Nuke',
			'Light',
			'Dark'
		]
	},
	{
		name: 'Apt Pupil',
		affinity: 'Passive',
		type: 'CRITBOOST',
		unique: false,
		amount: 100,
		criteria: null
	},
	{
		name: 'Aramasa',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [],
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
		name: 'Arms Master',
		affinity: 'Passive',
		type: 'MASTER',
		unique: false,
		stat: 'HP'
	},
	{
		name: 'Arrow Rain',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 75,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 18
		},
		flags: [],
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
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 13
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [],
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Attack Master',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Attack',
		range: 'Self'
	},
	{
		name: 'Auto-Maraku',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Defense',
		range: 'Party'
	},
	{
		name: 'Auto-Masuku',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Accuracy/Evasion',
		range: 'Party'
	},
	{
		name: 'Auto-Mataru',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Attack',
		range: 'Party'
	},
	{
		name: 'Axel Claw',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 24
		},
		flags: [],
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
		ailments: [],
		cost: {
			type: 'HP',
			amount: 25
		},
		flags: [],
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
		name: 'Babylon Goblet',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [
			{
				name: 'Confuse',
				chance: 45
			}
		],
		cost: {
			type: 'MP',
			amount: 80
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Despair',
				chance: 5
			}
		],
		cost: {
			type: 'HP',
			amount: 21
		},
		flags: [],
		max: 1,
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
		name: 'Baisudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 4,
		ailments: [
			'Burn',
			'Freeze',
			'Shock'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Beast Eye',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: 'Increases Accuracy.'
	},
	{
		name: 'Beast Weaver',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 20
		},
		flags: [
			'Attack Reduced'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [
			'HP Dependent'
		],
		max: 1,
		min: 1,
		power: {
			amount: 110,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Berserker God',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 5
		},
		flags: [
			'Crit Damage Boost'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 80,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 16
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 48
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 18
		},
		flags: [],
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
		unique: false,
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
		unique: false,
		accuracy: 98,
		ailments: [
			{
				name: 'Poison',
				chance: 35
			}
		],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [],
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [
			'Accuracy/Evasion Down'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Fear',
				chance: 5
			}
		],
		cost: {
			type: 'HP',
			amount: 22
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		cost: null,
		description: 'Increases Critical Rate.'
	},
	{
		name: 'Boon Boost',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: 'Your -kaja/-nda skills last 1 extra turn.'
	},
	{
		name: 'Boon Boost EX',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: 'Your -kaja/-nda skills last 2 extra turns.'
	},
	{
		name: 'Bouncing Claw',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 12
		},
		flags: [],
		max: 3,
		min: 1,
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
		unique: false,
		range: 'Self',
		cost: 20,
		charge: 'Recovery'
	},
	{
		name: 'Brain Buster',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Charm',
				chance: 5
			}
		],
		cost: {
			type: 'HP',
			amount: 22
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 90,
		ailments: [
			{
				name: 'Charm',
				chance: 20
			}
		],
		cost: {
			type: 'HP',
			amount: 9
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 45
		},
		flags: [
			'+30% Crit Rate'
		],
		max: 1,
		min: 1,
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
		unique: true,
		range: 'Party',
		cost: 16
	},
	{
		name: 'Bufu',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 35
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		ailment: 'Burn',
		amount: 25,
		weather: false
	},
	{
		name: 'Cadenza',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 24,
		ailments: [],
		amount: 'Half',
		buffs: [
			'Accuracy/Evasion'
		],
		flags: []
	},
	{
		name: 'Carnage Fang',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [
			'Crit Damage Boost'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 75
		},
		flags: [],
		max: 1,
		min: 1,
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
		surround: false,
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
		unique: false,
		accuracy: 90,
		ailments: [
			{
				name: 'Enervate',
				chance: 35
			}
		],
		cost: {
			type: 'HP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		description: 'Escape random battles successfully.'
	},
	{
		name: 'Champion"s Cup',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 10,
		ailments: [],
		amount: 'Moderate',
		buffs: [
			'Attack'
		],
		flags: []
	},
	{
		name: 'Chaotic Will',
		affinity: 'Ailment',
		type: 'MISC',
		unique: true,
		cost: 150,
		description: 'Chance of instakill to all foes. Foe\'s Press Turn Icons will be halved next turn.'
	},
	{
		name: 'Charge',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Self',
		cost: 10,
		charge: 'Charge'
	},
	{
		name: 'Charm Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Charm',
		amount: 25,
		weather: false
	},
	{
		name: 'Charmdi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 5,
		ailments: [
			'Charm'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Cleave',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 6
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		amount: 2,
		criteria: 'Rain/Snow',
		elements: [
			'ALL'
		]
	},
	{
		name: 'Complete Analysis',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Reveals all elemental affinities on all enemies.'
	},
	{
		name: 'Concentrate',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Self',
		cost: 10,
		charge: 'Concentrate'
	},
	{
		name: 'Confuse Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Confuse',
		amount: 25,
		weather: false
	},
	{
		name: 'Cornered Fang',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 85,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 10
		},
		flags: [
			'Surround Boost'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 95,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 75
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		attackDown: false,
		chance: 50,
		element: 'Phys',
		power: {
			amount: 100,
			display: 'Weak'
		}
	},
	{
		name: 'Counter - Persona',
		affinity: 'Passive',
		type: 'PERSONACOUNTER',
		unique: false,
		chance: 10
	},
	{
		name: 'Counterstrike',
		affinity: 'Passive',
		type: 'PERSONACOUNTER',
		unique: false,
		chance: 15
	},
	{
		name: 'Crazy Chain',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Rage',
				chance: 20
			}
		],
		cost: {
			type: 'HP',
			amount: 14
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'Self',
		cost: 25,
		charge: 'Critical'
	},
	{
		name: 'Critical Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 50,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [
			'+200% Crit Rate'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [
			'+20% Crit Rate'
		],
		max: 1,
		min: 1,
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
		unique: false,
		cost: null,
		description: 'Increases Critical damage, but normal damage decreases.'
	},
	{
		name: 'Cross Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 99,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 20
		},
		flags: [],
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
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 12
		},
		flags: [
			'Down Boost'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 50,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		amount: 10,
		criteria: 'Ailment'
	},
	{
		name: 'Damascus Claw',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 24
		},
		flags: [],
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
		name: 'Dancing Strike',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
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
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Dark',
		stacks: 'x'
	},
	{
		name: 'Dark Block',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 'Party',
		cost: 40,
		barriers: [
			'Dark Block'
		]
	},
	{
		name: 'Dark Boost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Dark',
		stacks: 'x'
	},
	{
		name: 'Dark Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Dark',
		stacks: '+'
	},
	{
		name: 'Dark Sword',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [
			{
				name: 'Seal',
				chance: 30
			}
		],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [],
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
		unique: false,
		range: 'One',
		cost: 5,
		ailments: [
			'Mirage'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Deadly Fury',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [
			'+200% Crit Rate'
		],
		max: 1,
		min: 1,
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Death Flies',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 120
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
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
		ailments: [
			{
				name: 'Charm',
				chance: 45
			}
		],
		cost: {
			type: 'MP',
			amount: 70
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 90,
		ailments: [
			{
				name: 'Fear',
				chance: 20
			}
		],
		cost: {
			type: 'HP',
			amount: 20
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 270,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Deathbound',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 35
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Debilitate',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 'All',
		cost: 150,
		surround: false,
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
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Defense',
		range: 'Self'
	},
	{
		name: 'Dekaja',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 'All',
		cost: 40,
		surround: false,
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
		unique: false,
		range: 'Party',
		cost: 40,
		surround: false,
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
		affinity: 'Dark',
		type: 'HALVE',
		unique: false,
		cost: 48
	},
	{
		name: 'Despair Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Despair',
		amount: 25,
		weather: false
	},
	{
		name: 'Dia',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 8,
		ailments: [],
		amount: 'Slight',
		buffs: [],
		flags: []
	},
	{
		name: 'Diamrita',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 30,
		ailments: [
			'ALL'
		],
		amount: 'Moderate',
		buffs: [],
		flags: []
	},
	{
		name: 'Diarahan',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 35,
		ailments: [],
		amount: 'Full',
		buffs: [],
		flags: []
	},
	{
		name: 'Diarama',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 15,
		ailments: [],
		amount: 'Moderate',
		buffs: [],
		flags: []
	},
	{
		name: 'Die For Me!',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
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
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 35
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		cost: null,
		description: 'Increases the effect of healing skills by 50%.'
	},
	{
		name: 'Divine Judgement',
		affinity: 'Light',
		type: 'HALVE',
		unique: false,
		cost: 48
	},
	{
		name: 'Dodge Dark',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		criteria: null,
		elements: [
			'Dark'
		]
	},
	{
		name: 'Dodge Elec',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		criteria: null,
		elements: [
			'Elec'
		]
	},
	{
		name: 'Dodge Fire',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		criteria: null,
		elements: [
			'Fire'
		]
	},
	{
		name: 'Dodge Ice',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		criteria: null,
		elements: [
			'Ice'
		]
	},
	{
		name: 'Dodge Light',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		criteria: null,
		elements: [
			'Light'
		]
	},
	{
		name: 'Dodge Nuke',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		criteria: null,
		elements: [
			'Dark'
		]
	},
	{
		name: 'Dodge Phys',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		criteria: null,
		elements: [
			'Phys'
		]
	},
	{
		name: 'Dodge Psy',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		criteria: null,
		elements: [
			'Psy'
		]
	},
	{
		name: 'Dodge Wind',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		criteria: null,
		elements: [
			'Wind'
		]
	},
	{
		name: 'Donum Gladi',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Ally',
		cost: 40,
		charge: 'Charge'
	},
	{
		name: 'Donum Magici',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Ally',
		cost: 40,
		charge: 'Concentrate'
	},
	{
		name: 'Door of Hades',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 32
		},
		flags: [
			'Instakill'
		],
		max: 1,
		min: 1,
		power: {
			amount: 110,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Dormin Rush',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Sleep',
				chance: 5
			}
		],
		cost: {
			type: 'HP',
			amount: 16
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 100,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Dormina',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'One',
		cost: 10,
		ailments: [
			'Sleep'
		],
		chance: 80,
		flags: []
	},
	{
		name: 'Double Fangs',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 10
		},
		flags: [],
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
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 12
		},
		flags: [],
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
		unique: false,
		cost: null,
		description: 'Greatly increases Accuracy.'
	},
	{
		name: 'Drain Dark',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Dark',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Elec',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Elec',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Fire',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Fire',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Force',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Force',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Ice',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Ice',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Light',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Light',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Nuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Nuke',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Phys',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Phys',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Psy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Psy',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Wind',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Wind',
		newAffinity: 'Drain'
	},
	{
		name: 'Dream Fist',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [
			'Asleep Boost'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [
			{
				name: 'Sleep',
				chance: 55
			}
		],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'One',
		cost: 10,
		ailments: [
			'Mirage'
		],
		chance: 75,
		flags: []
	},
	{
		name: 'Eat Whole',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [
			'Drain HP'
		],
		max: 1,
		min: 1,
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Elec Amp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Elec',
		stacks: 'x'
	},
	{
		name: 'Elec Block',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 'Party',
		cost: 40,
		barriers: [
			'Elec Block'
		]
	},
	{
		name: 'Elec Boost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Elec',
		stacks: 'x'
	},
	{
		name: 'Elec Break',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Elec'
	},
	{
		name: 'Elec Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Elec',
		stacks: '+'
	},
	{
		name: 'Elec Wall',
		affinity: 'Support',
		type: 'WALL',
		unique: false,
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
		ailments: [],
		amount: '130%',
		buffs: [],
		flags: []
	},
	{
		name: 'Endure',
		affinity: 'Passive',
		type: 'ENDURE',
		unique: false,
		priority: 1,
		instakill: false
	},
	{
		name: 'Enduring Soul',
		affinity: 'Passive',
		type: 'ENDURE',
		unique: false,
		priority: 2,
		instakill: false
	},
	{
		name: 'Enemy Radar',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Reveal the location of Shadows on each floor over a wide area.'
	},
	{
		name: 'Energy Drain',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [
			'Drain HP/MP'
		],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'Ally',
		cost: 4,
		ailments: [
			'Confuse',
			'Fear',
			'Despair',
			'Rage',
			'Charm'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Energy Shower',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Party',
		cost: 8,
		ailments: [
			'Confuse',
			'Fear',
			'Despair',
			'Rage',
			'Charm'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Enervate Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Enervate',
		amount: 25,
		weather: false
	},
	{
		name: 'Enervation',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'One',
		cost: 5,
		ailments: [
			'Enervate'
		],
		chance: 40,
		flags: []
	},
	{
		name: 'Escape Route',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Return to the entrance of Tartarus or the Desert of Doors.'
	},
	{
		name: 'Estoma',
		affinity: 'Support',
		type: 'MISC',
		unique: false,
		cost: 35,
		description: 'Prevents any enemy encounters until next New Moon.'
	},
	{
		name: 'Eternal Blizzard',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
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
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		criteria: null,
		elements: [
			'Dark'
		]
	},
	{
		name: 'Evade Elec',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		criteria: null,
		elements: [
			'Elec'
		]
	},
	{
		name: 'Evade Fire',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		criteria: null,
		elements: [
			'Fire'
		]
	},
	{
		name: 'Evade Ice',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		criteria: null,
		elements: [
			'Ice'
		]
	},
	{
		name: 'Evade Light',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		criteria: null,
		elements: [
			'Light'
		]
	},
	{
		name: 'Evade Nuke',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		criteria: null,
		elements: [
			'Nuke'
		]
	},
	{
		name: 'Evade Phys',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		criteria: null,
		elements: [
			'Phys'
		]
	},
	{
		name: 'Evade Psy',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		criteria: null,
		elements: [
			'Psy'
		]
	},
	{
		name: 'Evade Wind',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		criteria: null,
		elements: [
			'Wind'
		]
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
		unique: false,
		range: 'All',
		cost: 12,
		ailments: [
			'Fear'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Evil Touch',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'One',
		cost: 5,
		ailments: [
			'Fear'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Fallen Destroyer',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 70
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
		power: {
			amount: 250,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Fang Breaker',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [
			'Attack Down'
		],
		max: 1,
		min: 1,
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
		unique: false,
		amount: 1,
		criteria: null,
		percent: false,
		stat: 'AIL'
	},
	{
		name: 'Fatal End',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 14
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [
			'+30% Crit Rate'
		],
		max: 1,
		min: 1,
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
		unique: false,
		ailment: 'Fear',
		amount: 25,
		weather: false
	},
	{
		name: 'Fierce Roar',
		affinity: 'Support',
		type: 'TAUNT',
		unique: false,
		buff: 'Defense',
		cost: 30
	},
	{
		name: 'Fighting Spirit',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Party',
		cost: 80,
		charge: 'Charge'
	},
	{
		name: 'Figment Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 50,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [
			'+200% Crit Rate'
		],
		max: 1,
		min: 1,
		power: {
			amount: 300,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Fire Amp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Fire',
		stacks: 'x'
	},
	{
		name: 'Fire Block',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 'Party',
		cost: 40,
		barriers: [
			'Fire Block'
		]
	},
	{
		name: 'Fire Boost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Fire',
		stacks: 'x'
	},
	{
		name: 'Fire Break',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Fire'
	},
	{
		name: 'Fire Breath',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [],
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 80
		},
		flags: [],
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
		unique: false,
		amount: 20,
		element: 'Fire',
		stacks: '+'
	},
	{
		name: 'Fire Wall',
		affinity: 'Support',
		type: 'WALL',
		unique: false,
		cost: 18,
		element: 'Fire'
	},
	{
		name: 'Firm Stance',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: 'Take the blow, but decreases damage by half.'
	},
	{
		name: 'Flash Bomb',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Mirage',
				chance: 5
			}
		],
		cost: {
			type: 'HP',
			amount: 19
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 60
		},
		flags: [],
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
		unique: false,
		range: 'All',
		cost: 25,
		ailments: [
			'Mirage'
		],
		chance: 50,
		flags: []
	},
	{
		name: 'Force Block',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 'Party',
		cost: 40,
		barriers: [
			'Force Block'
		]
	},
	{
		name: 'Force Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Force',
		stacks: '+'
	},
	{
		name: 'Fortified Moxy',
		affinity: 'Passive',
		type: 'CRITBOOST',
		unique: false,
		amount: 15,
		criteria: 'Ambush'
	},
	{
		name: 'Fortify Spirit',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'ALL',
		resistance: 'Resist'
	},
	{
		name: 'Foul Breath',
		affinity: 'Almighty',
		type: 'SUSCEPTIBILITY',
		unique: false,
		range: 'Foe',
		cost: 8
	},
	{
		name: 'Freeze Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Freeze',
		amount: 25,
		weather: false
	},
	{
		name: 'Frei',
		affinity: 'Nuke',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 4
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 12
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 60
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 8
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [
			{
				name: 'Poison',
				chance: 25
			},
			{
				name: 'Confuse',
				chance: 25
			},
			{
				name: 'Charm',
				chance: 25
			}
		],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 165,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
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
		unique: false,
		description: 'Reveal an enemy\'s stats, weak points, and skills.'
	},
	{
		name: 'Gaea Rage',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 170
		},
		flags: [
			'Pierce'
		],
		max: 1,
		min: 1,
		power: {
			amount: 270,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Gale Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 85,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 12
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 150,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Gambler"s Foresight',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 'Party',
		cost: 20,
		surround: false,
		buffs: [
			'Accuracy/Evasion'
		],
		negate: false,
		debuffs: [],
		auto: [
			'Concentrate'
		]
	},
	{
		name: 'Garu',
		affinity: 'Wind',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 3
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 6
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 16
		},
		flags: [],
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		cost: 28,
		description: 'Insta-kills foes inflicted with Fear.'
	},
	{
		name: 'Giant Slice',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 9
		},
		flags: [
			'Baton Boost'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 16
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 85,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 25
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 60
		},
		flags: [],
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
		name: 'God\'s Bow',
		affinity: 'Light',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 60
		},
		flags: [
			'Instakill'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 22
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		amount: 'Moderate',
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		flags: []
	},
	{
		name: 'Gram Slice',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [
			'+30% Crit Rate'
		],
		max: 1,
		min: 1,
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
		unique: false,
		amount: 20,
		criteria: 'Ailment'
	},
	{
		name: 'Great Life Spring',
		affinity: 'Passive',
		type: 'SPRING',
		unique: false,
		amount: 30,
		stat: 'HP'
	},
	{
		name: 'Great Mana Spring',
		affinity: 'Passive',
		type: 'SPRING',
		unique: false,
		amount: 30,
		stat: 'MP'
	},
	{
		name: 'Growth 1',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 25,
		inactive: true,
		stat: 'EXP'
	},
	{
		name: 'Growth 2',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 50,
		inactive: true,
		stat: 'EXP'
	},
	{
		name: 'Growth 3',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 100,
		inactive: true,
		stat: 'EXP'
	},
	{
		name: 'Gun Amp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Gun',
		stacks: 'x'
	},
	{
		name: 'Gun Boost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [
			'Pierce'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 60
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 190,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Hama',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
		power: {
			amount: 140,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Hama Boost',
		affinity: 'Passive',
		type: 'INSTAKILLBOOST',
		unique: false,
		element: 'Light'
	},
	{
		name: 'Hamabarion',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 55
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Hamaon',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
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
		ailments: [],
		amount: 'Slight',
		buffs: [
			'Double Defense'
		],
		flags: []
	},
	{
		name: 'Hassou Tobi',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
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
		unique: false,
		accuracy: 90,
		ailments: [
			{
				name: 'Seal',
				chance: 20
			}
		],
		cost: {
			type: 'HP',
			amount: 9
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [
			{
				name: 'Confuse',
				chance: 70
			}
		],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Heal Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Recovery',
		stacks: '+'
	},
	{
		name: 'Healing Wave',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Recover 5% HP after battle (party).'
	},
	{
		name: 'Heat Riser',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 'Ally',
		cost: 30,
		surround: false,
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
		unique: false,
		amount: 10,
		criteria: 'Ambush',
		percent: false,
		stat: 'HPMP'
	},
	{
		name: 'Heat Wave',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [],
		max: 1,
		min: 1,
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
		attackDown: true,
		chance: 65,
		element: 'Dark',
		power: {
			amount: 100,
			display: 'Weak'
		}
	},
	{
		name: 'Heavy Blow',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [
			'Crit Damage Boost'
		],
		max: 1,
		min: 1,
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Hell Burner',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [
			'Negate Buffs'
		],
		max: 1,
		min: 1,
		power: {
			amount: 120,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 45
		},
		flags: [
			'Pierce'
		],
		max: 1,
		min: 1,
		power: {
			amount: 235,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Hellish Brand',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 70
		},
		flags: [
			'Negate Buffs'
		],
		max: 1,
		min: 1,
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
		unique: false,
		cost: null,
		description: 'Decreases chance of instakill and being afflicted with ailments.'
	},
	{
		name: 'Hellish Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 50,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 5
		},
		flags: [],
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 130,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'High Almighty Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Almighty',
		stacks: '+'
	},
	{
		name: 'High Counter',
		affinity: 'Passive',
		type: 'PERSONACOUNTER',
		unique: false,
		chance: 20
	},
	{
		name: 'High Dark Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Dark',
		stacks: '+'
	},
	{
		name: 'High Elec Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Elec',
		stacks: '+'
	},
	{
		name: 'High Energy',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Party',
		cost: 80,
		charge: 'Concentrate'
	},
	{
		name: 'High Fire Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Fire',
		stacks: '+'
	},
	{
		name: 'High Force Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Force',
		stacks: '+'
	},
	{
		name: 'High Heal Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Recovery',
		stacks: '+'
	},
	{
		name: 'High Ice Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Ice',
		stacks: '+'
	},
	{
		name: 'High Light Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Light',
		stacks: '+'
	},
	{
		name: 'High Phys Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Phys',
		stacks: '+'
	},
	{
		name: 'High Restore',
		affinity: 'Passive',
		type: 'SIPHON',
		unique: false,
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
		ailments: [],
		amount: 'Full',
		buffs: [],
		flags: [
			'Revive'
		]
	},
	{
		name: 'Holy Embrace',
		affinity: 'Passive',
		type: 'REGEN',
		unique: true,
		amount: 25,
		criteria: 'Turn Start',
		percent: true,
		stat: 'HP'
	},
	{
		name: 'Holy Whisper',
		affinity: 'Passive',
		type: 'REGEN',
		unique: true,
		amount: 15,
		criteria: 'Turn Start',
		percent: true,
		stat: 'HPMP'
	},
	{
		name: 'Humble Blessing',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 15,
		ailments: [],
		amount: 'Slight',
		buffs: [],
		flags: []
	},
	{
		name: 'Hysterical Slap',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 65
		},
		flags: [
			'Pierce'
		],
		max: 1,
		min: 1,
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
		unique: false,
		amount: 50,
		element: 'Ice',
		stacks: 'x'
	},
	{
		name: 'Ice Block',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 'Party',
		cost: 40,
		barriers: [
			'Ice Block'
		]
	},
	{
		name: 'Ice Boost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Ice',
		stacks: 'x'
	},
	{
		name: 'Ice Break',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Ice'
	},
	{
		name: 'Ice Breath',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [],
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		amount: 20,
		element: 'Ice',
		stacks: '+'
	},
	{
		name: 'Ice Wall',
		affinity: 'Support',
		type: 'WALL',
		unique: false,
		cost: 18,
		element: 'Ice'
	},
	{
		name: 'Impaler\'s Animus',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Self',
		cost: 50,
		charge: 'Pierce'
	},
	{
		name: 'Inspiring Leader',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: '(Demon) EXP earned increases when the demon\'s Lv is lower than the Nahobino.'
	},
	{
		name: 'Insta-Heal',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 2,
		criteria: null,
		percent: false,
		stat: 'AIL'
	},
	{
		name: 'Invigorate 1',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 3,
		criteria: 'Turn Start',
		percent: false,
		stat: 'MP'
	},
	{
		name: 'Invigorate 2',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 5,
		criteria: 'Turn Start',
		percent: false,
		stat: 'MP'
	},
	{
		name: 'Invigorate 3',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 7,
		criteria: 'Turn Start',
		percent: false,
		stat: 'MP'
	},
	{
		name: 'Jack Bufula',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [
			'Defense Down'
		],
		max: 1,
		min: 1,
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
		unique: true,
		accuracy: 108,
		ailments: [
			{
				name: 'Seal',
				chance: 40
			}
		],
		cost: {
			type: 'MP',
			amount: 90
		},
		flags: [
			'+40% Crit Rate'
		],
		max: 1,
		min: 1,
		power: {
			amount: 260,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Kamui Miracle',
		affinity: 'Recovery',
		type: 'MISC',
		unique: true,
		cost: 25,
		description: 'Anything could happen...'
	},
	{
		name: 'Kannabi Veil',
		affinity: 'Support',
		type: 'BARRIER',
		unique: true,
		range: 'Party',
		cost: 15,
		barriers: [
			'Kannabi Veil'
		]
	},
	{
		name: 'Karnak',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [
			'+30% Crit Rate'
		],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [
			'Pierce'
		],
		max: 1,
		min: 1,
		power: {
			amount: 300,
			display: 'Severe',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Kill Rush',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 14
		},
		flags: [],
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
		name: 'Killing Wind',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 65
		},
		flags: [
			'Pierce'
		],
		max: 1,
		min: 1,
		power: {
			amount: 230,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'King Bufula',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 35
		},
		flags: [
			'Defense Down'
		],
		max: 1,
		min: 1,
		power: {
			amount: 110,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Laevateinn',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 95,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 25
		},
		flags: [],
		max: 1,
		min: 1,
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
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		criteria: 'Surrounded',
		elements: [
			'Phys',
			'Gun',
			'Fire',
			'Ice',
			'Elec',
			'Force',
			'Wind',
			'Psy',
			'Nuke',
			'Light',
			'Dark'
		]
	},
	{
		name: 'Life Aid',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 50,
		inactive: false,
		stat: 'HP'
	},
	{
		name: 'Life Drain',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [
			'Drain HP'
		],
		max: 1,
		min: 1,
		power: {
			amount: 120,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Life Spring',
		affinity: 'Passive',
		type: 'SPRING',
		unique: false,
		amount: 15,
		stat: 'HP'
	},
	{
		name: 'Life Wall',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 'Party',
		cost: 95,
		barriers: [
			'Tetrakarn',
			'Makarakarn'
		]
	},
	{
		name: 'Light Amp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Light',
		stacks: 'x'
	},
	{
		name: 'Light Block',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 'Party',
		cost: 40,
		barriers: [
			'Light Block'
		]
	},
	{
		name: 'Light Boost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Light',
		stacks: 'x'
	},
	{
		name: 'Light Life Aid',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 25,
		inactive: false,
		stat: 'HP'
	},
	{
		name: 'Light Mana Aid',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 25,
		inactive: false,
		stat: 'MP'
	},
	{
		name: 'Light of Order',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 150,
		ailments: [],
		amount: 'Moderate',
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		flags: [
			'Negate'
		]
	},
	{
		name: 'Light Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 60
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 75,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 3
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 25,
			display: 'Minuscule',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Lullaby',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'All',
		cost: 25,
		ailments: [
			'Sleep'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Lunge',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 5
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'Party',
		cost: 150,
		surround: false,
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
		unique: false,
		range: 'Party',
		cost: 8,
		ailments: [
			'Burn',
			'Freeze',
			'Shock'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Mabufu',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [],
		max: 1,
		min: 1,
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
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 75
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [
			'Crit Damage Boost'
		],
		max: 1,
		min: 1,
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
		ailments: [
			{
				name: 'Seal',
				chance: 40
			}
		],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 36
		},
		flags: [],
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
		unique: false,
		accuracy: 98,
		ailments: [
			{
				name: 'Confuse',
				chance: 45
			}
		],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 110,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Mafrei',
		affinity: 'Nuke',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 22
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 16
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 8
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 14
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [
			{
				name: 'Confuse',
				chance: 20
			},
			{
				name: 'Fear',
				chance: 20
			},
			{
				name: 'Despair',
				chance: 20
			}
		],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Mahama',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
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
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 80
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
		power: {
			amount: 135,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Makajama',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'One',
		cost: 10,
		ailments: [
			'Seal'
		],
		chance: 65,
		flags: []
	},
	{
		name: 'Makajamaon',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'All',
		cost: 25,
		ailments: [
			'Seal'
		],
		chance: 40,
		flags: []
	},
	{
		name: 'Makara Break',
		affinity: 'Support',
		type: 'BARRIERBREAK',
		unique: false,
		cost: 18,
		barrier: 'Makarakarn'
	},
	{
		name: 'Makarakarn',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 'Ally',
		cost: 50,
		barriers: [
			'Makarakarn'
		]
	},
	{
		name: 'Mamudo',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
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
		affinity: 'Dark',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 80
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
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
		unique: false,
		amount: 50,
		inactive: false,
		stat: 'MP'
	},
	{
		name: 'Mana Spring',
		affinity: 'Passive',
		type: 'SPRING',
		unique: false,
		amount: 15,
		stat: 'MP'
	},
	{
		name: 'Mapsi',
		affinity: 'Psy',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 16
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 22
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [],
		max: 1,
		min: 1,
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
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 75
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'Party',
		cost: 30,
		surround: false,
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
		unique: false,
		range: 'All',
		cost: 30,
		surround: false,
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
		ailments: [
			{
				name: 'Burn',
				chance: 5
			}
		],
		cost: {
			type: 'MP',
			amount: 32
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'One',
		cost: 10,
		ailments: [
			'Charm'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Masquerade',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 25
		},
		flags: [],
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
		unique: false,
		range: 'Party',
		cost: 30,
		surround: false,
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
		unique: false,
		range: 'All',
		cost: 30,
		surround: false,
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
		unique: false,
		range: 'Party',
		cost: 30,
		surround: false,
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
		unique: false,
		range: 'All',
		cost: 30,
		surround: false,
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
		ailments: [
			'ALL'
		],
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 75
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [],
		max: 1,
		min: 1,
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
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 75
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Me Patra',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Party',
		cost: 30,
		ailments: [
			'ALL'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Media',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Party',
		cost: 30,
		ailments: [],
		amount: 'Slight',
		buffs: [],
		flags: []
	},
	{
		name: 'Mediarahan',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Party',
		cost: 150,
		ailments: [],
		amount: 'Full',
		buffs: [],
		flags: []
	},
	{
		name: 'Mediarama',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Party',
		cost: 60,
		ailments: [],
		amount: 'Moderate',
		buffs: [],
		flags: []
	},
	{
		name: 'Meditation',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 5
		},
		flags: [
			'Drain HP/MP'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 50,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 16
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Megido Flame',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 130
		},
		flags: [
			'Pierce'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 70
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 120
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 190,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Memory Blow',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Seal',
				chance: 5
			}
		],
		cost: {
			type: 'HP',
			amount: 15
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Mighty Cleave',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 50,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [
			'+200% Crit Rate'
		],
		max: 1,
		min: 1,
		power: {
			amount: 240,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Mind Slice',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Confuse',
				chance: 5
			}
		],
		cost: {
			type: 'HP',
			amount: 19
		},
		flags: [],
		max: 1,
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
		name: 'Miracle Punch',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 75,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 8
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: true,
		accuracy: 75,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 16
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: true,
		range: 'Party',
		cost: 20,
		ailments: [],
		amount: 'Slight',
		buffs: [],
		flags: []
	},
	{
		name: 'Mirage Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Mirage',
		amount: 25,
		weather: false
	},
	{
		name: 'Mirage Shot',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [
			{
				name: 'Mirage',
				chance: 75
			}
		],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [
			{
				name: 'Mirage',
				chance: 35
			}
		],
		cost: {
			type: 'MP',
			amount: 35
		},
		flags: [],
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
		unique: false,
		amount: 15,
		inactive: false,
		stat: 'Money'
	},
	{
		name: 'Morning Star - Persona',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 95,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 52
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
		power: {
			amount: 140,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Mudo Boost',
		affinity: 'Passive',
		type: 'INSTAKILLBOOST',
		unique: false,
		element: 'Dark'
	},
	{
		name: 'Mudobarion',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 55
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Mudoon',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
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
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [
			'Crit Damage Boost'
		],
		max: 1,
		min: 1,
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
		unique: false,
		cost: null,
		description: 'Greatly increases Critical Rate.'
	},
	{
		name: 'Mustard Bomb',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Enervate',
				chance: 5
			}
		],
		cost: {
			type: 'HP',
			amount: 16
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Muzzle Shot',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [
			{
				name: 'Seal',
				chance: 35
			}
		],
		cost: {
			type: 'HP',
			amount: 9
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 85,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 22
		},
		flags: [],
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
		unique: false,
		accuracy: 50,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 55
		},
		flags: [],
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [],
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 65
		},
		flags: [
			'Pierce'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Exhaustion',
				chance: 5
			}
		],
		cost: {
			type: 'HP',
			amount: 18
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
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
		unique: false,
		accuracy: 90,
		ailments: [
			{
				name: 'Despair',
				chance: 20
			}
		],
		cost: {
			type: 'HP',
			amount: 12
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		amount: 'Half',
		buffs: [
			'Attack',
			'Defense',
			'Accuracy/Evasion'
		],
		flags: []
	},
	{
		name: 'Nihil Claw',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 36
		},
		flags: [],
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
		unique: false,
		range: 'All',
		cost: 12,
		ailments: [
			'Mirage'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Nuke Amp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Nuke',
		stacks: 'x'
	},
	{
		name: 'Nuke Boost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Nuke',
		stacks: 'x'
	},
	{
		name: 'Nuke Break',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Nuke'
	},
	{
		name: 'Nuke Wall',
		affinity: 'Support',
		type: 'WALL',
		unique: false,
		cost: 18,
		element: 'Nuke'
	},
	{
		name: 'Null Charm',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Charm',
		resistance: 'Null'
	},
	{
		name: 'Null Confuse',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Confuse',
		resistance: 'Null'
	},
	{
		name: 'Null Dark',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Dark',
		newAffinity: 'Null'
	},
	{
		name: 'Null Elec',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Elec',
		newAffinity: 'Null'
	},
	{
		name: 'Null Enervate',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Enervate',
		resistance: 'Null'
	},
	{
		name: 'Null Fire',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Fire',
		newAffinity: 'Null'
	},
	{
		name: 'Null Force',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Force',
		newAffinity: 'Null'
	},
	{
		name: 'Null Ice',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Ice',
		newAffinity: 'Null'
	},
	{
		name: 'Null Light',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Light',
		newAffinity: 'Null'
	},
	{
		name: 'Null Mirage',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Mirage',
		resistance: 'Null'
	},
	{
		name: 'Null Nuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Nuke',
		newAffinity: 'Null'
	},
	{
		name: 'Null Phys',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Phys',
		newAffinity: 'Null'
	},
	{
		name: 'Null Poison',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Poison',
		resistance: 'Null'
	},
	{
		name: 'Null Psy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Psy',
		newAffinity: 'Null'
	},
	{
		name: 'Null Rage',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Rage',
		resistance: 'Null'
	},
	{
		name: 'Null Seal',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Seal',
		resistance: 'Null'
	},
	{
		name: 'Null Sleep',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Sleep',
		resistance: 'Null'
	},
	{
		name: 'Null Wind',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Wind',
		newAffinity: 'Null'
	},
	{
		name: 'Old One',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'All',
		cost: 12,
		ailments: [
			'Enervate'
		],
		chance: 30,
		flags: []
	},
	{
		name: 'Ominous Words',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'One',
		cost: 5,
		ailments: [
			'Despair'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'One-shot Kill',
		affinity: 'Gun',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 17
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Rage',
				chance: 5
			}
		],
		cost: {
			type: 'HP',
			amount: 16
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		description: 'Ask Fuuka to use Oracle.'
	},
	{
		name: 'Oratorio',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Party',
		cost: 38,
		ailments: [],
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 70
		},
		flags: [
			'Defense Down'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 65
		},
		flags: [
			'Attack Down',
			'Defense Down'
		],
		max: 1,
		min: 1,
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
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 8,
		ailments: [
			'ALL'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Pestilence',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [
			'Afflicted Boost'
		],
		max: 1,
		min: 1,
		power: {
			amount: 170,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Phantom Snow',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 'All',
		cost: 4,
		ailments: [
			'Sleep'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Phys Block',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 'Party',
		cost: 70,
		barriers: [
			'Phys Block'
		]
	},
	{
		name: 'Phys Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Phys',
		stacks: '+'
	},
	{
		name: 'Pierce Armor',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [
			'Defense Down'
		],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'One',
		cost: 10,
		ailments: [
			'Poison'
		],
		chance: 85,
		flags: []
	},
	{
		name: 'Poison Adept',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: 'Increases effects of Poison.'
	},
	{
		name: 'Poison Arrow',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 85,
		ailments: [
			{
				name: 'Poison',
				chance: 35
			}
		],
		cost: {
			type: 'HP',
			amount: 14
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		ailment: 'Poison',
		amount: 50,
		weather: false
	},
	{
		name: 'Poison Master',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: 'Greatly increases effects of Poison.'
	},
	{
		name: 'Poison Mist',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'All',
		cost: 12,
		ailments: [
			'Poison'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Poison Skewer',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [
			{
				name: 'Poison',
				chance: 20
			}
		],
		cost: {
			type: 'HP',
			amount: 9
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 110,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Posumudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 3,
		ailments: [
			'Poison'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Power Punch',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [
			'HP Dependent'
		],
		max: 1,
		min: 1,
		power: {
			amount: 155,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Power Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 180,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
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
			'Confuse',
			'Charm',
			'Sleep'
		],
		chance: 75,
		flags: []
	},
	{
		name: 'Primal Force',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 20
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 425,
			display: 'Colossal',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Profaned Land',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [
			{
				name: 'Poison',
				chance: 100
			}
		],
		cost: {
			type: 'MP',
			amount: 35
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 4
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 8
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 12
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		amount: 50,
		element: 'Psy',
		stacks: 'x'
	},
	{
		name: 'Psy Boost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Psy',
		stacks: 'x'
	},
	{
		name: 'Psy Break',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Psy'
	},
	{
		name: 'Psy Wall',
		affinity: 'Support',
		type: 'WALL',
		unique: false,
		cost: 18,
		element: 'Psy'
	},
	{
		name: 'Psycho Blast',
		affinity: 'Psy',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 75
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 265,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Pulinpa',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'One',
		cost: 10,
		ailments: [
			'Confuse'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Puncture Punch',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [
			'Pierce'
		],
		max: 1,
		min: 1,
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Purple Smoke',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
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
		name: 'Rage Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Rage',
		amount: 25,
		weather: false
	},
	{
		name: 'Raging Blizzard',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 60
		},
		flags: [],
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
		unique: false,
		accuracy: 85,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 20
		},
		flags: [
			'Weather Boost'
		],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'Ally',
		cost: 8,
		surround: false,
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
		unique: false,
		range: 'One',
		cost: 8,
		surround: false,
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
		unique: false,
		accuracy: 50,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 35
		},
		flags: [
			'Half Accuracy'
		],
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
		name: 'Re Patra',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 5,
		ailments: [
			'Mirage'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Rebel Soul',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: 'Showtime guage increases more quickly.'
	},
	{
		name: 'Rebellion',
		affinity: 'Support',
		type: 'CRIT',
		unique: false,
		range: 'Ally',
		cost: 5
	},
	{
		name: 'Rebellion Blade',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 95,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 99
		},
		flags: [
			'Down Boost'
		],
		max: 1,
		min: 1,
		power: {
			amount: 450,
			display: 'Colossal',
			type: 'Magic'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Recarm',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 20,
		ailments: [],
		amount: 'Half',
		buffs: [],
		flags: [
			'Revive'
		]
	},
	{
		name: 'Red Capote',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		range: 'Ally',
		cost: 8,
		surround: false,
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
		unique: false,
		amount: 2,
		criteria: 'Turn Start',
		percent: true,
		stat: 'HP'
	},
	{
		name: 'Regenerate 2',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 4,
		criteria: 'Turn Start',
		percent: true,
		stat: 'HP'
	},
	{
		name: 'Regenerate 3',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 6,
		criteria: 'Turn Start',
		percent: true,
		stat: 'HP'
	},
	{
		name: 'Relaxing Wave',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Recover 5% SP after battle (party).'
	},
	{
		name: 'Repel Dark',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Dark',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Elec',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Elec',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Fire',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Fire',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Force',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Force',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Ice',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Ice',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Light',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Light',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Nuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Nuke',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Phys',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Phys',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Psy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Psy',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Wind',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Wind',
		newAffinity: 'Repel'
	},
	{
		name: 'Resist Charm',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Charm',
		resistance: 'Resist'
	},
	{
		name: 'Resist Confuse',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Confuse',
		resistance: 'Resist'
	},
	{
		name: 'Resist Dark',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Dark',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Despair',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Despair',
		resistance: 'Resist'
	},
	{
		name: 'Resist Elec',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Elec',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Exhaust',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Exhaustion',
		resistance: 'Resist'
	},
	{
		name: 'Resist Fear',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Fear',
		resistance: 'Resist'
	},
	{
		name: 'Resist Fire',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Fire',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Force',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Force',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Ice',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Ice',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Light',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Light',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Mirage',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Mirage',
		resistance: 'Resist'
	},
	{
		name: 'Resist Nuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Nuke',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Phys',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Phys',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Poison',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Poison',
		resistance: 'Resist'
	},
	{
		name: 'Resist Psy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Psy',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Seal',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Seal',
		resistance: 'Resist'
	},
	{
		name: 'Resist Sleep',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Sleep',
		resistance: 'Resist'
	},
	{
		name: 'Resist Wind',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Wind',
		newAffinity: 'Resist'
	},
	{
		name: 'Restore',
		affinity: 'Passive',
		type: 'SIPHON',
		unique: false,
		amount: 10,
		criteria: 'Weakness/Critical'
	},
	{
		name: 'Retaliate',
		affinity: 'Passive',
		type: 'SMTCOUNTER',
		unique: false,
		attackDown: false,
		chance: 50,
		element: 'Phys',
		power: {
			amount: 150,
			display: 'Medium'
		}
	},
	{
		name: 'Revival Chant',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Ally',
		cost: 100,
		ailments: [],
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
		unique: false,
		range: 'All',
		cost: 5
	},
	{
		name: 'Riot Gun',
		affinity: 'Gun',
		type: 'ATTACK',
		unique: false,
		accuracy: 80,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 24
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 14
		},
		flags: [
			'Baton Boost'
		],
		max: 1,
		min: 1,
		power: {
			amount: 220,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Ruinous Thunder',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [
			'Defense Down',
			'Attack Down'
		],
		max: 1,
		min: 1,
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
		unique: false,
		cost: null,
		description: 'Being Evaded/Nulled/Drained/Repelled doesn\'t consume additional Press Turn Icons.'
	},
	{
		name: 'Sakanagi',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 230,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Salvation',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Party',
		cost: 48,
		ailments: [
			'ALL'
		],
		amount: 'Full',
		buffs: [],
		flags: []
	},
	{
		name: 'Samarecarm',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 'Ally',
		cost: 60,
		ailments: [],
		amount: 'Full',
		buffs: [],
		flags: [
			'Revive'
		]
	},
	{
		name: 'Sanguine Drain',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [
			'Attack Down',
			'Drain HP'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 12
		},
		flags: [],
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
		name: 'Seal Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Seal',
		amount: 25,
		weather: false
	},
	{
		name: 'Severing Bite',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [
			'Crit Damage Boost'
		],
		max: 1,
		min: 1,
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
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'All',
		cost: 25,
		ailments: [
			'Charm'
		],
		chance: 45,
		flags: []
	},
	{
		name: 'Shadow of Grief',
		affinity: 'Passive',
		type: 'SIPHON',
		unique: false,
		amount: 22,
		criteria: 'Drain'
	},
	{
		name: 'Sharp Student',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: 'Decreases chance of being hit by a Critical.'
	},
	{
		name: 'Shield of Justice',
		affinity: 'Support',
		type: 'BARRIER',
		unique: true,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 22
		},
		flags: [],
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
		unique: false,
		ailment: 'Shock',
		amount: 25,
		weather: false
	},
	{
		name: 'Shockbound',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [],
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
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 45
		},
		flags: [
			'Accuracy/Evasion Down'
		],
		max: 1,
		min: 1,
		power: {
			amount: 140,
			display: 'Medium',
			type: 'Magic'
		},
		range: 'All',
		series: 'smt'
	},
	{
		name: 'Skewer',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 85,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 5
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 90,
		ailments: [
			{
				name: 'Confuse',
				chance: 20
			}
		],
		cost: {
			type: 'HP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 90,
		ailments: [
			{
				name: 'Mirage',
				chance: 20
			}
		],
		cost: {
			type: 'HP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		ailment: 'Sleep',
		amount: 25,
		weather: false
	},
	{
		name: 'Slumber Vortex',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'All',
		cost: 35,
		ailments: [
			'Sleep',
			'Mirage'
		],
		chance: 40,
		flags: []
	},
	{
		name: 'Snap',
		affinity: 'Gun',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 9
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 35
		},
		flags: [
			'Defense Greatly Down'
		],
		max: 1,
		min: 1,
		power: {
			amount: 160,
			display: 'Weak',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Sonic Punch',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 8
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 55
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'One',
		cost: 5,
		ailments: [
			'Exhaustion'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Soul Chain',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 20,
		criteria: 'Baton Pass',
		percent: false,
		stat: 'MP'
	},
	{
		name: 'Soul Divide',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 50,
		ailments: [
			{
				name: 'Seal',
				chance: 40
			}
		],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		amount: 5,
		criteria: 'Baton Pass',
		percent: false,
		stat: 'MP'
	},
	{
		name: 'Speed Master',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Accuracy/Evasion',
		range: 'Self'
	},
	{
		name: 'Spell Master',
		affinity: 'Passive',
		type: 'MASTER',
		unique: false,
		stat: 'MP'
	},
	{
		name: 'Spirit Drain',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 5
		},
		flags: [
			'Drain MP'
		],
		max: 1,
		min: 1,
		power: {
			amount: 100,
			display: 'Weak',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Spring of Life',
		affinity: 'Passive',
		type: 'REGEN',
		unique: true,
		amount: 8,
		criteria: 'Turn Start',
		percent: true,
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
		affinity: 'Almighty',
		type: 'SUSCEPTIBILITY',
		unique: false,
		range: 'All',
		cost: 5
	},
	{
		name: 'Stamina Song',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Recover 10% HP after battle (party).'
	},
	{
		name: 'Steel Needle',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
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
		name: 'Storm Dracostrike',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Stormcaller Song',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 18
		},
		flags: [],
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
		name: 'Subrecover HP',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Restores 10% HP to backup members after battle.'
	},
	{
		name: 'Subrecover HP EX',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Restores 20% HP to backup members after battle.'
	},
	{
		name: 'Subrecover SP',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Restores 1% SP to backup members after battle.'
	},
	{
		name: 'Subrecover SP EX',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Restores 3% SP to backup members after battle.'
	},
	{
		name: 'Sukukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 'Ally',
		cost: 8,
		surround: false,
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
		unique: false,
		range: 'One',
		cost: 8,
		surround: false,
		buffs: [],
		negate: false,
		debuffs: [
			'Accuracy/Evasion'
		],
		auto: []
	},
	{
		name: 'Sun\'s Radiance',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 'Ally',
		cost: 12,
		ailments: [
			'ALL'
		],
		amount: 'Moderate',
		buffs: [],
		flags: []
	},
	{
		name: 'Support Scan',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Displays all buffs and debuffs currently in effect.'
	},
	{
		name: 'Survival Trick',
		affinity: 'Passive',
		type: 'ENDURE',
		unique: false,
		priority: 3,
		instakill: true
	},
	{
		name: 'Swift Strike',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 70,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 17
		},
		flags: [],
		max: 4,
		min: 2,
		power: {
			amount: 25,
			display: 'Minuscule',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Sword Dance',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 25
		},
		flags: [],
		max: 1,
		min: 1,
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
		ailments: [],
		cost: {
			type: 'MP',
			amount: 160
		},
		flags: [
			'Minimize Defense'
		],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'Ally',
		cost: 8,
		surround: false,
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
		unique: false,
		range: 'One',
		cost: 8,
		surround: false,
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
		unique: false,
		buff: null,
		cost: 10
	},
	{
		name: 'Taunt - Persona',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'One',
		cost: 5,
		ailments: [
			'Rage'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Technical High',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: 'Increases duration of Kaja-type buff skills when landing a Critical.'
	},
	{
		name: 'Tempest Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 85,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 17
		},
		flags: [],
		max: 5,
		min: 3,
		power: {
			amount: 20,
			display: 'Minuscule',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Tentarafoo',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'All',
		cost: 25,
		ailments: [
			'Confuse'
		],
		chance: 45,
		flags: []
	},
	{
		name: 'Terror Claw',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [
			{
				name: 'Fear',
				chance: 20
			}
		],
		cost: {
			type: 'HP',
			amount: 8
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 90,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'persona'
	},
	{
		name: 'Terrorblade',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 108,
		ailments: [
			{
				name: 'Confuse',
				chance: 50
			}
		],
		cost: {
			type: 'MP',
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
		name: 'Tetra Break',
		affinity: 'Support',
		type: 'BARRIERBREAK',
		unique: false,
		cost: 18,
		barrier: 'Tetrakarn'
	},
	{
		name: 'Tetraja',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
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
		unique: false,
		range: 'Ally',
		cost: 50,
		barriers: [
			'Tetrakarn'
		]
	},
	{
		name: 'Thalassic Calamity',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 45
		},
		flags: [],
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
		name: 'The Man"s Way',
		affinity: 'Ailment',
		type: 'MISC',
		unique: true,
		cost: 30,
		description: 'May inflict Down/Dizzy on all foes.'
	},
	{
		name: 'Thermopylae',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 'Party',
		cost: 30,
		surround: true,
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
		unique: false,
		description: 'Reveal the effectiveness of an attack.'
	},
	{
		name: 'Thunder Reign',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 60
		},
		flags: [],
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 60
		},
		flags: [
			'+20% Crit Rate'
		],
		max: 1,
		min: 1,
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
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		ailments: [
			{
				name: 'Fear',
				chance: 70
			}
		],
		cost: {
			type: 'MP',
			amount: 34
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 190,
			display: 'Severe',
			type: 'Magic'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Torrent Shot',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 90,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 12
		},
		flags: [],
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
		name: 'Touch n" Go',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: 'Automatic Sukukaja after a Baton Pass.'
	},
	{
		name: 'Toxic Breath',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [
			{
				name: 'Poison',
				chance: 50
			}
		],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'All',
		cost: 25,
		ailments: [
			'Poison'
		],
		chance: 60,
		flags: []
	},
	{
		name: 'Toxic Spray',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
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
		unique: false,
		accuracy: 98,
		ailments: [
			{
				name: 'Poison',
				chance: 60
			}
		],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		cost: 18,
		description: 'Instantly escape from a dungeon.'
	},
	{
		name: 'Trafuri',
		affinity: 'Misc',
		type: 'MISC',
		unique: false,
		cost: 6,
		description: 'Guarantees escape from escapable battles.'
	},
	{
		name: 'Treasure Radar',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Reveal the location of treasure chests on each floor.'
	},
	{
		name: 'Treasure Skimmer',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Find out if a foe is carrying a rare item ahead of time.'
	},
	{
		name: 'Trigger Happy',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		description: 'Increases chance of Critical from Gun attacks.'
	},
	{
		name: 'Triple Down',
		affinity: 'Gun',
		type: 'ATTACK',
		unique: false,
		accuracy: 70,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 16
		},
		flags: [],
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 65
		},
		flags: [
			'Pierce'
		],
		max: 1,
		min: 1,
		power: {
			amount: 230,
			display: 'Heavy',
			type: 'Magic'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Tyrant"s Mind',
		affinity: 'Passive',
		type: 'BOOST',
		unique: true,
		amount: 25,
		element: 'ALL',
		stacks: 'x'
	},
	{
		name: 'Ultimate Support',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Ultimate support effect of strengthening/healing all allies may activate in battle.'
	},
	{
		name: 'Unshaken Will',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Confuse/Fear/Rage/Despair',
		resistance: 'Null'
	},
	{
		name: 'Vacuum Wave',
		affinity: 'Wind',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 75
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 80,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 13
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		range: 'Party',
		cost: 20,
		surround: false,
		buffs: [
			'Defense'
		],
		negate: false,
		debuffs: [],
		auto: [
			'Tetrakarn',
			'Makarakarn'
		]
	},
	{
		name: 'Venom Chaser',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 15
		},
		flags: [
			'Poisoned Boost'
		],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 80,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 18
		},
		flags: [],
		max: 1,
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
		name: 'Victory Cry',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 100,
		inactive: false,
		stat: 'HPMP'
	},
	{
		name: 'Vigor Song',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		description: 'Recover 10% SP after battle (party).'
	},
	{
		name: 'Vile Assault',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 95,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 18
		},
		flags: [
			'Down Boost'
		],
		max: 1,
		min: 1,
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
		ailments: [
			{
				name: 'Seal',
				chance: 40
			}
		],
		cost: {
			type: 'MP',
			amount: 60
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 80,
		ailments: [
			{
				name: 'Poison',
				chance: 5
			}
		],
		cost: {
			type: 'HP',
			amount: 16
		},
		flags: [],
		max: 1,
		min: 1,
		power: {
			amount: 175,
			display: 'Heavy',
			type: 'Physical'
		},
		range: 'All',
		series: 'persona'
	},
	{
		name: 'Vorpal Blade',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 80,
		ailments: [],
		cost: {
			type: 'HP',
			amount: 23
		},
		flags: [],
		max: 1,
		min: 1,
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
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 'All',
		cost: 12,
		ailments: [
			'Rage'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Walpurgisnacht',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 40
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
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
		unique: false,
		description: 'Reveal an enemy\'s affinity at the start of battle.'
	},
	{
		name: 'White Dracostrike',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 30
		},
		flags: [
			'Weakness Instakill'
		],
		max: 1,
		min: 1,
		power: {
			amount: 200,
			display: 'Medium',
			type: 'Physical'
		},
		range: 'One',
		series: 'smt'
	},
	{
		name: 'Wind Amp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Wind',
		stacks: 'x'
	},
	{
		name: 'Wind Boost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Wind',
		stacks: 'x'
	},
	{
		name: 'Wind Break',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Wind'
	},
	{
		name: 'Wind Breath',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [],
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 25
		},
		flags: [],
		max: 1,
		min: 1,
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
		affinity: 'Support',
		type: 'WALL',
		unique: false,
		cost: 18,
		element: 'Wind'
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
		unique: true,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
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
		name: 'Yabusame Shot',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [
			'Pierce',
			'+200% Crit Rate'
		],
		max: 1,
		min: 1,
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
		unique: true,
		range: 'Party',
		cost: 25,
		ailments: [],
		amount: 'Moderate',
		buffs: [
			'Accuracy/Evasion'
		],
		flags: []
	},
	{
		name: 'Zan',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 35
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 10
		},
		flags: [],
		max: 1,
		min: 1,
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
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 50
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 35
		},
		flags: [],
		max: 1,
		min: 1,
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
		unique: false,
		accuracy: 98,
		ailments: [],
		cost: {
			type: 'MP',
			amount: 20
		},
		flags: [],
		max: 1,
		min: 1,
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