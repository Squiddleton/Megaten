import { SkillData } from './skills';

const skills: SkillData[] = [
	{
		name: '+15% EXP',
		devName: '15exp',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 15,
		inactive: false,
		stat: 'EXP'
	},
	{
		name: '+50% EXP',
		devName: '50exp',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 50,
		inactive: false,
		stat: 'EXP'
	},
	{
		name: 'Abysmal Surge',
		devName: 'abysmalsurge',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
		cost: 12,
		ailments: [
			'Fear'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Abyssal Eye',
		devName: 'abyssaleye',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 270,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Abyssal Mask',
		devName: 'abyssalmask',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Greatly decreases chance of instakill and being afflicted with ailments.'
	},
	{
		name: 'Abyssal Wings',
		devName: 'abyssalwings',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 205,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Acrobat Kick',
		devName: 'acrobatkick',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 80,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Adverse Resolve',
		devName: 'adverseresolve',
		affinity: 'Passive',
		type: 'CRITBOOST',
		unique: false,
		amount: 20,
		criteria: 'Surround'
	},
	{
		name: 'Agi',
		devName: 'agi',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Agibarion',
		devName: 'agibarion',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 265,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Agidyne',
		devName: 'agidyne',
		affinity: 'Fire',
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
	},
	{
		name: 'Agilao',
		devName: 'agilao',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Agneyastra',
		devName: 'agneyastra',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 24
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 1,
		max: 3,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Ailment Boost',
		devName: 'ailmentboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'ALL',
		amount: 25,
		weather: false
	},
	{
		name: 'Akashic Arts',
		devName: 'akashicarts',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 275,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Crit Damage Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Ali Dance',
		devName: 'alidance',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: false,
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
		devName: 'almightyboost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Almighty',
		stacks: 'x'
	},
	{
		name: 'Almighty Pleroma',
		devName: 'almightypleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Almighty',
		stacks: '+'
	},
	{
		name: 'Ambient Aid',
		devName: 'ambientaid',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'ALL',
		amount: 30,
		weather: true
	},
	{
		name: 'Analysis',
		devName: 'analysis',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: 'Confirm affinities of enemies you have previously attacked.'
	},
	{
		name: 'Andalucia',
		devName: 'andalucia',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 2,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 85,
			display: 'Weak'
		},
		min: 3,
		max: 6,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Angelic Grace',
		devName: 'angelicgrace',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: false,
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
		devName: 'aptpupil',
		affinity: 'Passive',
		type: 'CRITBOOST',
		unique: false,
		amount: 100,
		criteria: null
	},
	{
		name: 'Aramasa',
		devName: 'aramasa',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 20,
			display: 'Weak'
		},
		min: 8,
		max: 8,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Arms Master',
		devName: 'armsmaster',
		affinity: 'Passive',
		type: 'MASTER',
		unique: false,
		skill: 'HP'
	},
	{
		name: 'Arrow Rain',
		devName: 'arrowrain',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 18
		},
		power: {
			amount: 125,
			display: 'Heavy'
		},
		min: 2,
		max: 2,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Assault Dive',
		devName: 'assaultdive',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 13
		},
		power: {
			amount: 180,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Astral Saintstrike',
		devName: 'astralsaintstrike',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 2,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 20,
			display: 'Weak'
		},
		min: 15,
		max: 15,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Atomic Flare',
		devName: 'atomicflare',
		affinity: 'Nuke',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 48
		},
		power: {
			amount: 265,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Attack Master',
		devName: 'attackmaster',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Attack',
		range: 1
	},
	{
		name: 'Auto-Maraku',
		devName: 'automaraku',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Defense',
		range: 0
	},
	{
		name: 'Auto-Masuku',
		devName: 'automasuku',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Accuracy/Evasion',
		range: 0
	},
	{
		name: 'Auto-Mataru',
		devName: 'automataru',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Attack',
		range: 0
	},
	{
		name: 'Axel Claw',
		devName: 'axelclaw',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 24
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 2,
		max: 4,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Ayamur',
		devName: 'ayamur',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'HP',
			amount: 25
		},
		power: {
			amount: 125,
			display: 'Medium'
		},
		min: 3,
		max: 3,
		flags: [
			'Accuracy Boost'
		],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Babylon Goblet',
		devName: 'babylongoblet',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 80
		},
		power: {
			amount: 180,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Confuse',
				chance: 45
			}
		],
		series: 'smt'
	},
	{
		name: 'Bad Beat',
		devName: 'badbeat',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 21
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Despair',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Baisudi',
		devName: 'baisudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
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
		name: 'Bash',
		devName: 'bash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 5
		},
		power: {
			amount: 110,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Beast Eye',
		devName: 'beasteye',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Increases Accuracy.'
	},
	{
		name: 'Beast Weaver',
		devName: 'beastweaver',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'HP',
			amount: 20
		},
		power: {
			amount: 600,
			display: 'Colossal'
		},
		min: 1,
		max: 1,
		flags: [
			'Attack Reduced'
		],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Beatdown',
		devName: 'beatdown',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 110,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'HP Dependent'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Berserker God',
		devName: 'berserkergod',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 180,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Bestial Bite',
		devName: 'bestialbite',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 5
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Crit Damage Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Black Dracostrike',
		devName: 'blackdracostrike',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 200,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Black Spot',
		devName: 'blackspot',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 16
		},
		power: {
			amount: 200,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Black Viper',
		devName: 'blackviper',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 48
		},
		power: {
			amount: 210,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Blade of Fury',
		devName: 'bladeoffury',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 18
		},
		power: {
			amount: 80,
			display: 'Medium'
		},
		min: 2,
		max: 4,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Bleeding Dry Brush',
		devName: 'bleedingdrybrush',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 1,
		cost: 22,
		barriers: [
			'Painting'
		]
	},
	{
		name: 'Blight',
		devName: 'blight',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 100,
			display: 'Weak'
		},
		min: 2,
		max: 4,
		flags: [],
		ailments: [
			{
				name: 'Poison',
				chance: 35
			}
		],
		series: 'smt'
	},
	{
		name: 'Blinding Strike',
		devName: 'blindingstrike',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Accuracy/Evasion Down'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Bloodbath',
		devName: 'bloodbath',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 22
		},
		power: {
			amount: 200,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Fear',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Bloody Glee',
		devName: 'bloodyglee',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Increases Critical Rate.'
	},
	{
		name: 'Boon Boost',
		devName: 'boonboost',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Your -kaja/-nda skills last 1 extra turn.'
	},
	{
		name: 'Boon Boost EX',
		devName: 'boonboostex',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Your -kaja/-nda skills last 2 extra turns.'
	},
	{
		name: 'Bouncing Claw',
		devName: 'bouncingclaw',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 12
		},
		power: {
			amount: 65,
			display: 'Weak'
		},
		min: 1,
		max: 3,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Bowl of Hygieia',
		devName: 'bowlofhygieia',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Self',
		cost: 20,
		charge: 'Recovery'
	},
	{
		name: 'Brain Buster',
		devName: 'brainbuster',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 22
		},
		power: {
			amount: 200,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Charm',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Brain Shake',
		devName: 'brainshake',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 9
		},
		power: {
			amount: 100,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Charm',
				chance: 20
			}
		],
		series: 'persona'
	},
	{
		name: 'Charm Boost',
		devName: 'charmboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Charm',
		amount: 25,
		weather: false
	},
	{
		name: 'Brave Blade',
		devName: 'braveblade',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 45
		},
		power: {
			amount: 220,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Brave Step',
		devName: 'bravestep',
		affinity: 'Support',
		type: 'CRIT',
		unique: true,
		range: 'Party',
		cost: 16
	},
	{
		name: 'Bufu',
		devName: 'bufu',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Bufubarion',
		devName: 'bufubarion',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 265,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Bufudyne',
		devName: 'bufudyne',
		affinity: 'Ice',
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
	},
	{
		name: 'Bufula',
		devName: 'bufula',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Burn Boost',
		devName: 'burnboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Burn',
		amount: 25,
		weather: false
	},
	{
		name: 'Cadenza',
		devName: 'cadenza',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 0,
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
		devName: 'carnagefang',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 260,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Crit Damage Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Catastrophe',
		devName: 'catastrophe',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 75
		},
		power: {
			amount: 290,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Cautious Cheer',
		devName: 'cautiouscheer',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		range: 0,
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
		name: 'Certain Escape',
		devName: 'certainescape',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Champion"s Cup',
		devName: 'championscup',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
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
		devName: 'chaoticwill',
		affinity: 'Ailment',
		type: 'MISC',
		unique: true,
		cost: 150,
		effect: 'Chance of instakill to all foes. Foe\'s Press Turn Icons will be halved next turn.'
	},
	{
		name: 'Charge',
		devName: 'charge',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Self',
		cost: 10,
		charge: 'Charge'
	},
	{
		name: 'Charmdi',
		devName: 'charmdi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
		cost: 5,
		ailments: [
			'Charm'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Checkmate',
		devName: 'checkmate',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		range: 1,
		cost: 90,
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
		name: 'Cleave',
		devName: 'cleave',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 6
		},
		power: {
			amount: 75,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Climate Decorum',
		devName: 'climatedecorum',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: true,
		elements: [
			'ALL'
		]
	},
	{
		name: 'Complete Analysis',
		devName: 'completeanalysis',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Concentrate',
		devName: 'concentrate',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Self',
		cost: 10,
		charge: 'Concentrate'
	},
	{
		name: 'Confuse Boost',
		devName: 'confuseboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Confuse',
		amount: 25,
		weather: false
	},
	{
		name: 'Cornered Fang',
		devName: 'corneredfang',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 10
		},
		power: {
			amount: 125,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Surround Boost'
		],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Cosmic Flare',
		devName: 'cosmicflare',
		affinity: 'Nuke',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 54
		},
		power: {
			amount: 185,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Counter',
		devName: 'counter',
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
		name: 'Counter -Persona-',
		devName: 'counterpersona',
		affinity: 'Passive',
		type: 'PERSONACOUNTER',
		unique: false,
		chance: 10
	},
	{
		name: 'Counterstrike',
		devName: 'counterstrike',
		affinity: 'Passive',
		type: 'PERSONACOUNTER',
		unique: false,
		chance: 15
	},
	{
		name: 'Crazy Chain',
		devName: 'crazychain',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 14
		},
		power: {
			amount: 110,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Rage',
				chance: 20
			}
		],
		series: 'persona'
	},
	{
		name: 'Critical Aura',
		devName: 'criticalaura',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Self',
		cost: 25,
		charge: 'Critical'
	},
	{
		name: 'Critical Slash',
		devName: 'criticalslash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 160,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Half Accuracy'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Critical Wave',
		devName: 'criticalwave',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 90,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Critical Zealot',
		devName: 'criticalzealot',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Increases Critical damage, but normal damage decreases.'
	},
	{
		name: 'Cross Slash',
		devName: 'crossslash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'HP',
			amount: 20
		},
		power: {
			amount: 260,
			display: 'Heavy'
		},
		min: 2,
		max: 2,
		flags: [
			'Accuracy Boost'
		],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Cruel Attack',
		devName: 'cruelattack',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 12
		},
		power: {
			amount: 180,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Down Boost'
		],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Crusher Onslaught',
		devName: 'crusheronslaught',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 170,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Half Accuracy'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Curse Siphon',
		devName: 'cursesiphon',
		affinity: 'Passive',
		type: 'SIPHON',
		unique: false,
		amount: 10,
		criteria: 'Ailment'
	},
	{
		name: 'Damascus Claw',
		devName: 'damascusclaw',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 24
		},
		power: {
			amount: 90,
			display: 'Medium'
		},
		min: 2,
		max: 3,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Dancing Strike',
		devName: 'dancingstrike',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 80,
			display: 'Medium'
		},
		min: 3,
		max: 3,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Dark Amp',
		devName: 'darkamp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Dark',
		stacks: 'x'
	},
	{
		name: 'Dark Block',
		devName: 'darkblock',
		affinity: 'Support',
		type: 'BLOCK',
		unique: false,
		cost: 40,
		element: 'Dark'
	},
	{
		name: 'Dark Boost',
		devName: 'darkboost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Dark',
		stacks: 'x'
	},
	{
		name: 'Dark Pleroma',
		devName: 'darkpleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Dark',
		stacks: '+'
	},
	{
		name: 'Dark Sword',
		devName: 'darksword',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 90,
			display: 'Medium'
		},
		min: 2,
		max: 2,
		flags: [],
		ailments: [
			{
				name: 'Seal',
				chance: 30
			}
		],
		series: 'smt'
	},
	{
		name: 'Dazzler',
		devName: 'dazzler',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 1,
		cost: 5,
		ailments: [
			'Mirage'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Deadly Fury',
		devName: 'deadlyfury',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 200,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Baton Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Deathbound',
		devName: 'deathbound',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 35
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Death Flies',
		devName: 'deathflies',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 120
		},
		power: {
			amount: 320,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Death Lust',
		devName: 'deathlust',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 70
		},
		power: {
			amount: 160,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Charm',
				chance: 45
			}
		],
		series: 'smt'
	},
	{
		name: 'Death Scythe',
		devName: 'deathscythe',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 20
		},
		power: {
			amount: 270,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Fear',
				chance: 20
			}
		],
		series: 'persona'
	},
	{
		name: 'Debilitate',
		devName: 'debilitate',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'defensemaster',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Defense',
		range: 1
	},
	{
		name: 'Dekaja',
		devName: 'dekaja',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'dekunda',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'demonicdecree',
		affinity: 'Dark',
		type: 'HALVE',
		unique: false,
		cost: 48
	},
	{
		name: 'Despair Boost',
		devName: 'despairboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Despair',
		amount: 25,
		weather: false
	},
	{
		name: 'Dia',
		devName: 'dia',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
		cost: 8,
		ailments: [],
		amount: 'Slight',
		buffs: [],
		flags: []
	},
	{
		name: 'Diamrita',
		devName: 'diamrita',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
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
		devName: 'diarahan',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
		cost: 35,
		ailments: [],
		amount: 'Full',
		buffs: [],
		flags: []
	},
	{
		name: 'Diarama',
		devName: 'diarama',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
		cost: 15,
		ailments: [],
		amount: 'Moderate',
		buffs: [],
		flags: []
	},
	{
		name: 'Die For Me!',
		devName: 'dieforme',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		range: 2,
		cost: {
			type: 'MP',
			amount: 35
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 2,
		max: 5,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Divine Arrowfall',
		devName: 'divinearrowfall',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 35
		},
		power: {
			amount: 170,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Divine Grace',
		devName: 'divinegrace',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Increases the effect of healing skills by 50%.'
	},
	{
		name: 'Divine Judgement',
		devName: 'divinejudgement',
		affinity: 'Light',
		type: 'HALVE',
		unique: false,
		cost: 48
	},
	{
		name: 'Mirage Boost',
		devName: 'mirageboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Mirage',
		amount: 25,
		weather: false
	},
	{
		name: 'Dodge Dark',
		devName: 'dodgedark',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: false,
		elements: [
			'Dark'
		]
	},
	{
		name: 'Dodge Elec',
		devName: 'dodgeelec',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: false,
		elements: [
			'Elec'
		]
	},
	{
		name: 'Dodge Fire',
		devName: 'dodgefire',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: false,
		elements: [
			'Fire'
		]
	},
	{
		name: 'Dodge Ice',
		devName: 'dodgeice',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: false,
		elements: [
			'Ice'
		]
	},
	{
		name: 'Dodge Light',
		devName: 'dodgelight',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: false,
		elements: [
			'Light'
		]
	},
	{
		name: 'Dodge Nuke',
		devName: 'dodgenuke',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: false,
		elements: [
			'Dark'
		]
	},
	{
		name: 'Dodge Phys',
		devName: 'dodgephys',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: false,
		elements: [
			'Phys'
		]
	},
	{
		name: 'Dodge Psy',
		devName: 'dodgepsy',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: false,
		elements: [
			'Psy'
		]
	},
	{
		name: 'Dodge Wind',
		devName: 'dodgewind',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: false,
		weather: false,
		elements: [
			'Wind'
		]
	},
	{
		name: 'Donum Gladi',
		devName: 'donumgladi',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Ally',
		cost: 40,
		charge: 'Charge'
	},
	{
		name: 'Donum Magici',
		devName: 'donummagici',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Ally',
		cost: 40,
		charge: 'Concentrate'
	},
	{
		name: 'Door of Hades',
		devName: 'doorofhades',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 32
		},
		power: {
			amount: 110,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Instakill'
		],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Dormina',
		devName: 'dormina',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 1,
		cost: 10,
		ailments: [
			'Sleep'
		],
		chance: 80,
		flags: []
	},
	{
		name: 'Dormin Rush',
		devName: 'dorminrush',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 16
		},
		power: {
			amount: 100,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Sleep',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Double Fangs',
		devName: 'doublefangs',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 10
		},
		power: {
			amount: 75,
			display: 'Weak'
		},
		min: 2,
		max: 2,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Double Shot',
		devName: 'doubleshot',
		affinity: 'Gun',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 12
		},
		power: {
			amount: 100,
			display: 'Weak'
		},
		min: 2,
		max: 2,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Dragon Eye',
		devName: 'dragoneye',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Greatly increases Accuracy.'
	},
	{
		name: 'Drain Dark',
		devName: 'draindark',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Dark',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Elec',
		devName: 'drainelec',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Elec',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Fire',
		devName: 'drainfire',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Fire',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Force',
		devName: 'drainforce',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Force',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Ice',
		devName: 'drainice',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Ice',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Light',
		devName: 'drainlight',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Light',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Nuke',
		devName: 'drainnuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Nuke',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Phys',
		devName: 'drainphys',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Phys',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Psy',
		devName: 'drainpsy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Psy',
		newAffinity: 'Drain'
	},
	{
		name: 'Drain Wind',
		devName: 'drainwind',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Wind',
		newAffinity: 'Drain'
	},
	{
		name: 'Dream Fist',
		devName: 'dreamfist',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 140,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Asleep Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Dream Needle',
		devName: 'dreamneedle',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 110,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Sleep',
				chance: 55
			}
		],
		series: 'smt'
	},
	{
		name: 'Dustoma',
		devName: 'dustoma',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 1,
		cost: 10,
		ailments: [
			'Mirage'
		],
		chance: 75,
		flags: []
	},
	{
		name: 'Eat Whole',
		devName: 'eatwhole',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Drain HP'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Elec Amp',
		devName: 'elecamp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Elec',
		stacks: 'x'
	},
	{
		name: 'Elec Block',
		devName: 'elecblock',
		affinity: 'Support',
		type: 'BLOCK',
		unique: false,
		cost: 40,
		element: 'Elec'
	},
	{
		name: 'Elec Boost',
		devName: 'elecboost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Elec',
		stacks: 'x'
	},
	{
		name: 'Elec Break',
		devName: 'elecbreak',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Elec'
	},
	{
		name: 'Elec Pleroma',
		devName: 'elecpleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Elec',
		stacks: '+'
	},
	{
		name: 'Elec Wall',
		devName: 'elecwall',
		affinity: 'Support',
		type: 'WALL',
		unique: false,
		cost: 18,
		element: 'Elec'
	},
	{
		name: 'Eleusinian Harvest',
		devName: 'eleusinianharvest',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 0,
		cost: 150,
		ailments: [],
		amount: '130%',
		buffs: [],
		flags: []
	},
	{
		name: 'Endure',
		devName: 'endure',
		affinity: 'Passive',
		type: 'ENDURE',
		unique: false,
		priority: 1,
		instakill: false
	},
	{
		name: 'Enduring Soul',
		devName: 'enduringsoul',
		affinity: 'Passive',
		type: 'ENDURE',
		unique: false,
		priority: 2,
		instakill: false
	},
	{
		name: 'Enemy Radar',
		devName: 'enemyradar',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Energy Drain',
		devName: 'energydrain',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 80,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Drain HP/MP'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Energy Drop',
		devName: 'energydrop',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
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
		devName: 'energyshower',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 0,
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
		name: 'Escape Route',
		devName: 'escaperoute',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Estoma',
		devName: 'estoma',
		affinity: 'Support',
		type: 'MISC',
		unique: false,
		cost: 35,
		effect: 'Prevents any enemy encounters until next New Moon.'
	},
	{
		name: 'Eternal Blizzard',
		devName: 'eternalblizzard',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		range: 2,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 90,
			display: 'Weak'
		},
		min: 3,
		max: 6,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Evade Dark',
		devName: 'evadedark',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		surround: false,
		weather: false,
		elements: [
			'Dark'
		]
	},
	{
		name: 'Evade Elec',
		devName: 'evadeelec',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		surround: false,
		weather: false,
		elements: [
			'Elec'
		]
	},
	{
		name: 'Evade Fire',
		devName: 'evadefire',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		surround: false,
		weather: false,
		elements: [
			'Fire'
		]
	},
	{
		name: 'Evade Ice',
		devName: 'evadeice',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		surround: false,
		weather: false,
		elements: [
			'Ice'
		]
	},
	{
		name: 'Evade Light',
		devName: 'evadelight',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		surround: false,
		weather: false,
		elements: [
			'Light'
		]
	},
	{
		name: 'Evade Nuke',
		devName: 'evadenuke',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		surround: false,
		weather: false,
		elements: [
			'Nuke'
		]
	},
	{
		name: 'Evade Phys',
		devName: 'evadephys',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		surround: false,
		weather: false,
		elements: [
			'Phys'
		]
	},
	{
		name: 'Evade Psy',
		devName: 'evadepsy',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		surround: false,
		weather: false,
		elements: [
			'Psy'
		]
	},
	{
		name: 'Evade Wind',
		devName: 'evadewind',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 3,
		surround: false,
		weather: false,
		elements: [
			'Wind'
		]
	},
	{
		name: 'Evil Melody',
		devName: 'evilmelody',
		affinity: 'Ailment',
		type: 'MISC',
		unique: true,
		cost: 100,
		effect: 'Chance of instakill to 1 foe.'
	},
	{
		name: 'Evil Smile',
		devName: 'evilsmile',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
		cost: 12,
		ailments: [
			'Fear'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Evil Touch',
		devName: 'eviltouch',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 1,
		cost: 5,
		ailments: [
			'Fear'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Fallen Destroyer',
		devName: 'fallendestroyer',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 70
		},
		power: {
			amount: 250,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Fang Breaker',
		devName: 'fangbreaker',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Attack Down'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Fast Heal',
		devName: 'fastheal',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 1,
		hpmpail: 'AIL',
		percent: false,
		ambush: false,
		baton: false
	},
	{
		name: 'Fatal End',
		devName: 'fatalend',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 14
		},
		power: {
			amount: 160,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Fatal Sword',
		devName: 'fatalsword',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 180,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Fear Boost',
		devName: 'fearboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Fear',
		amount: 25,
		weather: false
	},
	{
		name: 'Fierce Roar',
		devName: 'fierceroar',
		affinity: 'Support',
		type: 'TAUNT',
		unique: false,
		buff: 'Defense',
		cost: 30
	},
	{
		name: 'Fighting Spirit',
		devName: 'fightingspirit',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Party',
		cost: 80,
		charge: 'Charge'
	},
	{
		name: 'Figment Slash',
		devName: 'figmentslash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 300,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Half Accuracy'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Fire Amp',
		devName: 'fireamp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Fire',
		stacks: 'x'
	},
	{
		name: 'Fire Block',
		devName: 'fireblock',
		affinity: 'Support',
		type: 'BLOCK',
		unique: false,
		cost: 40,
		element: 'Fire'
	},
	{
		name: 'Fire Boost',
		devName: 'fireboost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Fire',
		stacks: 'x'
	},
	{
		name: 'Fire Break',
		devName: 'firebreak',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Fire'
	},
	{
		name: 'Fire Breath',
		devName: 'firebreath',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 90,
			display: 'Weak'
		},
		min: 2,
		max: 5,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Fire Dracostrike',
		devName: 'firedracostrike',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 200,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Fire of Sinai',
		devName: 'fireofsinai',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 2,
		cost: {
			type: 'MP',
			amount: 80
		},
		power: {
			amount: 105,
			display: 'Medium'
		},
		min: 3,
		max: 7,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Fire Pleroma',
		devName: 'firepleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Fire',
		stacks: '+'
	},
	{
		name: 'Fire Wall',
		devName: 'firewall',
		affinity: 'Support',
		type: 'WALL',
		unique: false,
		cost: 18,
		element: 'Fire'
	},
	{
		name: 'Firm Stance',
		devName: 'firmstance',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Take the blow, but decreases damage by half.'
	},
	{
		name: 'Flash Bomb',
		devName: 'flashbomb',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 19
		},
		power: {
			amount: 125,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Mirage',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Floral Gust',
		devName: 'floralgust',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 60
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 2,
		max: 5,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Fogna',
		devName: 'fogna',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
		cost: 25,
		ailments: [
			'Mirage'
		],
		chance: 50,
		flags: []
	},
	{
		name: 'Force Block',
		devName: 'forceblock',
		affinity: 'Support',
		type: 'BLOCK',
		unique: false,
		cost: 40,
		element: 'Force'
	},
	{
		name: 'Force Pleroma',
		devName: 'forcepleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Force',
		stacks: '+'
	},
	{
		name: 'Seal Boost',
		devName: 'sealboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Seal',
		amount: 25,
		weather: false
	},
	{
		name: 'Fortified Moxy',
		devName: 'fortifiedmoxy',
		affinity: 'Passive',
		type: 'CRITBOOST',
		unique: false,
		amount: 15,
		criteria: 'Ambush'
	},
	{
		name: 'Fortify Spirit',
		devName: 'fortifyspirit',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'ALL',
		resistance: 'Resist'
	},
	{
		name: 'Foul Breath',
		devName: 'foulbreath',
		affinity: 'Almighty',
		type: 'SUSCEPTIBILITY',
		unique: false,
		range: 1,
		cost: 8
	},
	{
		name: 'Freeze Boost',
		devName: 'freezeboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Freeze',
		amount: 25,
		weather: false
	},
	{
		name: 'Frei',
		devName: 'frei',
		affinity: 'Nuke',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 4
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Freidyne',
		devName: 'freidyne',
		affinity: 'Nuke',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 12
		},
		power: {
			amount: 215,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Freikugel',
		devName: 'freikugel',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 60
		},
		power: {
			amount: 230,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Freila',
		devName: 'freila',
		affinity: 'Nuke',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 8
		},
		power: {
			amount: 160,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Frenzied Chomp',
		devName: 'frenziedchomp',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 165,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
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
		series: 'smt'
	},
	{
		name: 'Frolic',
		devName: 'frolic',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 0,
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
		devName: 'fullanalysis',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Gaea Rage',
		devName: 'gaearage',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 170
		},
		power: {
			amount: 270,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Pierce'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Gale Slash',
		devName: 'galeslash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 12
		},
		power: {
			amount: 150,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Gambler"s Foresight',
		devName: 'gamblersforesight',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'garu',
		affinity: 'Wind',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 3
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Garudyne',
		devName: 'garudyne',
		affinity: 'Wind',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 215,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Garula',
		devName: 'garula',
		affinity: 'Wind',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 6
		},
		power: {
			amount: 160,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Gatling Blows',
		devName: 'gatlingblows',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 16
		},
		power: {
			amount: 90,
			display: 'Weak'
		},
		min: 3,
		max: 4,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Ghastfire Rain',
		devName: 'ghastfirerain',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Ghastly Wail',
		devName: 'ghastlywail',
		affinity: 'Almighty',
		type: 'MISC',
		unique: false,
		cost: 28,
		effect: 'Insta-kills foes inflicted with Fear.'
	},
	{
		name: 'Giant Slice',
		devName: 'giantslice',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 9
		},
		power: {
			amount: 85,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Baton Boost'
		],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Gigantic Fist',
		devName: 'giganticfist',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 16
		},
		power: {
			amount: 240,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Gigantomachia',
		devName: 'gigantomachia',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 25
		},
		power: {
			amount: 350,
			display: 'Colossal'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Glacial Blast',
		devName: 'glacialblast',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 60
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 2,
		max: 5,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'God\'s Bow',
		devName: 'godsbow',
		affinity: 'Light',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 60
		},
		power: {
			amount: 100,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'God"s Hand',
		devName: 'godshand',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 22
		},
		power: {
			amount: 400,
			display: 'Colossal'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Golden Apple',
		devName: 'goldenapple',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 0,
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
		devName: 'gramslice',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 140,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Great Curse Siphon',
		devName: 'greatcursesiphon',
		affinity: 'Passive',
		type: 'SIPHON',
		unique: false,
		amount: 20,
		criteria: 'Ailment'
	},
	{
		name: 'Great Life Spring',
		devName: 'greatlifespring',
		affinity: 'Passive',
		type: 'SPRING',
		unique: false,
		amount: 30,
		hpmp: 'HP'
	},
	{
		name: 'Great Mana Spring',
		devName: 'greatmanaspring',
		affinity: 'Passive',
		type: 'SPRING',
		unique: false,
		amount: 30,
		hpmp: 'MP'
	},
	{
		name: 'Growth 1',
		devName: 'growth1',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 25,
		inactive: true,
		stat: 'EXP'
	},
	{
		name: 'Growth 2',
		devName: 'growth2',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 50,
		inactive: true,
		stat: 'EXP'
	},
	{
		name: 'Growth 3',
		devName: 'growth3',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 100,
		inactive: true,
		stat: 'EXP'
	},
	{
		name: 'Gun Amp',
		devName: 'gunamp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Gun',
		stacks: 'x'
	},
	{
		name: 'Gun Boost',
		devName: 'gunboost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Gun',
		stacks: 'x'
	},
	{
		name: 'Gungnir',
		devName: 'gungnir',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 300,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Pierce'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Hades Blast',
		devName: 'hadesblast',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 60
		},
		power: {
			amount: 190,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Hama',
		devName: 'hama',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 140,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Hamabarion',
		devName: 'hamabarion',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 55
		},
		power: {
			amount: 265,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Hama Boost',
		devName: 'hamaboost',
		affinity: 'Passive',
		type: 'INSTAKILLBOOST',
		unique: false,
		element: 'Light'
	},
	{
		name: 'Hamaon',
		devName: 'hamaon',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 175,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Harvest Dance',
		devName: 'harvestdance',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 1,
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
		devName: 'hassoutobi',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 2,
		cost: {
			type: 'MP',
			amount: 60
		},
		power: {
			amount: 30,
			display: 'Weak'
		},
		min: 8,
		max: 8,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Headbutt',
		devName: 'headbutt',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 9
		},
		power: {
			amount: 150,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Seal',
				chance: 20
			}
		],
		series: 'persona'
	},
	{
		name: 'Headcrush',
		devName: 'headcrush',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 200,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Confuse',
				chance: 70
			}
		],
		series: 'smt'
	},
	{
		name: 'Healing Wave',
		devName: 'healingwave',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Heal Pleroma',
		devName: 'healpleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Recovery',
		stacks: '+'
	},
	{
		name: 'Heat Riser',
		devName: 'heatriser',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 1,
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
		devName: 'heatup',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 10,
		hpmpail: 'HPMP',
		percent: false,
		ambush: true,
		baton: false
	},
	{
		name: 'Heat Wave',
		devName: 'heatwave',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 100,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Heavenly Counter',
		devName: 'heavenlycounter',
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
		devName: 'heavyblow',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 160,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Crit Damage Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Hell Burner',
		devName: 'hellburner',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 150,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Hell Exhaust',
		devName: 'hellexhaust',
		affinity: 'Force',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Revert Buffs'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Hellish Brand',
		devName: 'hellishbrand',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 70
		},
		power: {
			amount: 160,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Revert Buffs'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Hellish Mask',
		devName: 'hellishmask',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Decreases chance of instakill and being afflicted with ailments.'
	},
	{
		name: 'Hellish Slash',
		devName: 'hellishslash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 5
		},
		power: {
			amount: 55,
			display: 'Weak'
		},
		min: 4,
		max: 4,
		flags: [
			'Half Accuracy'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Hellish Spurt',
		devName: 'hellishspurt',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 130,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Hell Spin',
		devName: 'hellspin',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 150,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Hell Thrust',
		devName: 'hellthrust',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 45
		},
		power: {
			amount: 235,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Pierce'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'High Almighty Pleroma',
		devName: 'highalmightypleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Almighty',
		stacks: '+'
	},
	{
		name: 'High Counter',
		devName: 'highcounter',
		affinity: 'Passive',
		type: 'PERSONACOUNTER',
		unique: false,
		chance: 20
	},
	{
		name: 'High Dark Pleroma',
		devName: 'highdarkpleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Dark',
		stacks: '+'
	},
	{
		name: 'High Elec Pleroma',
		devName: 'highelecpleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Elec',
		stacks: '+'
	},
	{
		name: 'High Energy',
		devName: 'highenergy',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Party',
		cost: 80,
		charge: 'Concentrate'
	},
	{
		name: 'High Fire Pleroma',
		devName: 'highfirepleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Fire',
		stacks: '+'
	},
	{
		name: 'High Force Pleroma',
		devName: 'highforcepleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Force',
		stacks: '+'
	},
	{
		name: 'High Heal Pleroma',
		devName: 'highhealpleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Recovery',
		stacks: '+'
	},
	{
		name: 'High Ice Pleroma',
		devName: 'highicepleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Ice',
		stacks: '+'
	},
	{
		name: 'High Light Pleroma',
		devName: 'highlightpleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Light',
		stacks: '+'
	},
	{
		name: 'High Phys Pleroma',
		devName: 'highphyspleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 35,
		element: 'Phys',
		stacks: '+'
	},
	{
		name: 'High Restore',
		devName: 'highrestore',
		affinity: 'Passive',
		type: 'SIPHON',
		unique: false,
		amount: 20,
		criteria: 'Weakness/Critical'
	},
	{
		name: 'Holy Benevolence',
		devName: 'holybenevolence',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 0,
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
		devName: 'holyembrace',
		affinity: 'Passive',
		type: 'REGEN',
		unique: true,
		amount: 25,
		hpmpail: 'HP',
		percent: true,
		ambush: false,
		baton: false
	},
	{
		name: 'Holy Whisper',
		devName: 'holywhisper',
		affinity: 'Passive',
		type: 'REGEN',
		unique: true,
		amount: 15,
		hpmpail: 'HPMP',
		percent: true,
		ambush: false,
		baton: false
	},
	{
		name: 'Humble Blessing',
		devName: 'humbleblessing',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 0,
		cost: 15,
		ailments: [],
		amount: 'Slight',
		buffs: [],
		flags: []
	},
	{
		name: 'Hysterical Slap',
		devName: 'hystericalslap',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 90,
			display: 'Weak'
		},
		min: 2,
		max: 2,
		flags: [
			'Charmed Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Ice Age',
		devName: 'iceage',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 65
		},
		power: {
			amount: 230,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Pierce'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Ice Amp',
		devName: 'iceamp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Ice',
		stacks: 'x'
	},
	{
		name: 'Ice Block',
		devName: 'iceblock',
		affinity: 'Support',
		type: 'BLOCK',
		unique: false,
		cost: 40,
		element: 'Ice'
	},
	{
		name: 'Ice Boost',
		devName: 'iceboost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Ice',
		stacks: 'x'
	},
	{
		name: 'Ice Break',
		devName: 'icebreak',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Ice'
	},
	{
		name: 'Ice Breath',
		devName: 'icebreath',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 90,
			display: 'Weak'
		},
		min: 2,
		max: 5,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Ice Dracostrike',
		devName: 'icedracostrike',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 200,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Ice Pleroma',
		devName: 'icepleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Ice',
		stacks: '+'
	},
	{
		name: 'Ice Wall',
		devName: 'icewall',
		affinity: 'Support',
		type: 'WALL',
		unique: false,
		cost: 18,
		element: 'Ice'
	},
	{
		name: 'Impaler\'s Animus',
		devName: 'impalersanimus',
		affinity: 'Support',
		type: 'CHARGE',
		unique: false,
		range: 'Self',
		cost: 50,
		charge: 'Pierce'
	},
	{
		name: 'Inspiring Leader',
		devName: 'inspiringleader',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: '(Demon) EXP earned increases when the demon\'s Lv is lower than the Nahobino.'
	},
	{
		name: 'Insta-Heal',
		devName: 'instaheal',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 2,
		hpmpail: 'AIL',
		percent: false,
		ambush: false,
		baton: false
	},
	{
		name: 'Invigorate 1',
		devName: 'invigorate1',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 3,
		hpmpail: 'MP',
		percent: false,
		ambush: false,
		baton: false
	},
	{
		name: 'Invigorate 2',
		devName: 'invigorate2',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 5,
		hpmpail: 'MP',
		percent: false,
		ambush: false,
		baton: false
	},
	{
		name: 'Invigorate 3',
		devName: 'invigorate3',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 7,
		hpmpail: 'MP',
		percent: false,
		ambush: false,
		baton: false
	},
	{
		name: 'Jack Bufula',
		devName: 'jackbufula',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Defense Down'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Javelin Rain',
		devName: 'javelinrain',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 90
		},
		power: {
			amount: 260,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Seal',
				chance: 40
			}
		],
		series: 'smt'
	},
	{
		name: 'Kamui Miracle',
		devName: 'kamuimiracle',
		affinity: 'Recovery',
		type: 'MISC',
		unique: true,
		cost: 25,
		effect: 'Anything could happen...'
	},
	{
		name: 'Kannabi Veil',
		devName: 'kannabiveil',
		affinity: 'Support',
		type: 'BARRIER',
		unique: true,
		range: 0,
		cost: 15,
		barriers: [
			'Kannabi Veil'
		]
	},
	{
		name: 'Karnak',
		devName: 'karnak',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 150,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Keraunos',
		devName: 'keraunos',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 300,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Pierce'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Killing Wind',
		devName: 'killingwind',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 65
		},
		power: {
			amount: 230,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Pierce'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Kill Rush',
		devName: 'killrush',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 14
		},
		power: {
			amount: 90,
			display: 'Weak'
		},
		min: 1,
		max: 3,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'King Bufula',
		devName: 'kingbufula',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 35
		},
		power: {
			amount: 110,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Defense Down'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Laevateinn',
		devName: 'laevateinn',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'HP',
			amount: 25
		},
		power: {
			amount: 450,
			display: 'Colossal'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Last Stand',
		devName: 'laststand',
		affinity: 'Passive',
		type: 'EVASION',
		unique: false,
		amount: 2,
		surround: true,
		weather: false,
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
		devName: 'lifeaid',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 50,
		inactive: false,
		stat: 'HP'
	},
	{
		name: 'Life Drain',
		devName: 'lifedrain',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 120,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Drain HP'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Life Spring',
		devName: 'lifespring',
		affinity: 'Passive',
		type: 'SPRING',
		unique: false,
		amount: 15,
		hpmp: 'HP'
	},
	{
		name: 'Life Wall',
		devName: 'lifewall',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 0,
		cost: 95,
		barriers: [
			'Tetrakarn',
			'Makarakarn'
		]
	},
	{
		name: 'Light Amp',
		devName: 'lightamp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Light',
		stacks: 'x'
	},
	{
		name: 'Light Block',
		devName: 'lightblock',
		affinity: 'Support',
		type: 'BLOCK',
		unique: false,
		cost: 40,
		element: 'Light'
	},
	{
		name: 'Light Boost',
		devName: 'lightboost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Light',
		stacks: 'x'
	},
	{
		name: 'Light Life Aid',
		devName: 'lightlifeaid',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 25,
		inactive: false,
		stat: 'HP'
	},
	{
		name: 'Light Mana Aid',
		devName: 'lightmanaaid',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 25,
		inactive: false,
		stat: 'MP'
	},
	{
		name: 'Light Pleroma',
		devName: 'lightpleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Light',
		stacks: '+'
	},
	{
		name: 'Light\'s Descent',
		devName: 'lightsdescent',
		affinity: 'Light',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 60
		},
		power: {
			amount: 220,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Lucky Punch',
		devName: 'luckypunch',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 3
		},
		power: {
			amount: 25,
			display: 'Minuscule'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Lullaby',
		devName: 'lullaby',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
		cost: 25,
		ailments: [
			'Sleep'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Lunge',
		devName: 'lunge',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 5
		},
		power: {
			amount: 145,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Luster Candy',
		devName: 'lustercandy',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'mabaisudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 0,
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
		devName: 'mabufu',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mabufubarion',
		devName: 'mabufubarion',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 75
		},
		power: {
			amount: 185,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mabufudyne',
		devName: 'mabufudyne',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mabufula',
		devName: 'mabufula',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mac an Luin',
		devName: 'macanluin',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 270,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Crit Damage Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Madness Glint',
		devName: 'madnessglint',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 2,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 150,
			display: 'Weak'
		},
		min: 2,
		max: 5,
		flags: [],
		ailments: [
			{
				name: 'Seal',
				chance: 40
			}
		],
		series: 'smt'
	},
	{
		name: 'Madness Nails',
		devName: 'madnessnails',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 36
		},
		power: {
			amount: 165,
			display: 'Heavy'
		},
		min: 2,
		max: 4,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Madness Needle',
		devName: 'madnessneedle',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 110,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Confuse',
				chance: 45
			}
		],
		series: 'smt'
	},
	{
		name: 'Mafrei',
		devName: 'mafrei',
		affinity: 'Nuke',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 95,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Mafreidyne',
		devName: 'mafreidyne',
		affinity: 'Nuke',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 22
		},
		power: {
			amount: 155,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Mafreila',
		devName: 'mafreila',
		affinity: 'Nuke',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 16
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Magaru',
		devName: 'magaru',
		affinity: 'Wind',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 8
		},
		power: {
			amount: 95,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Magarudyne',
		devName: 'magarudyne',
		affinity: 'Wind',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 155,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Magarula',
		devName: 'magarula',
		affinity: 'Wind',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 14
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Magatsu Mandala',
		devName: 'magatsumandala',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 155,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
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
		series: 'persona'
	},
	{
		name: 'Mahama',
		devName: 'mahama',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 105,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mahamabarion',
		devName: 'mahamabarion',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 80
		},
		power: {
			amount: 185,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mahamaon',
		devName: 'mahamaon',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 135,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Makajama',
		devName: 'makajama',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 1,
		cost: 10,
		ailments: [
			'Seal'
		],
		chance: 65,
		flags: []
	},
	{
		name: 'Makajamaon',
		devName: 'makajamaon',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
		cost: 25,
		ailments: [
			'Seal'
		],
		chance: 40,
		flags: []
	},
	{
		name: 'Makara Break',
		devName: 'makarabreak',
		affinity: 'Support',
		type: 'BARRIERBREAK',
		unique: false,
		cost: 18,
		barrier: 'Makarakarn'
	},
	{
		name: 'Makarakarn',
		devName: 'makarakarn',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 1,
		cost: 50,
		barriers: [
			'Makarakarn'
		]
	},
	{
		name: 'Mamudo',
		devName: 'mamudo',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 105,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mamudobarion',
		devName: 'mamudobarion',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 80
		},
		power: {
			amount: 185,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mamudoon',
		devName: 'mamudoon',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 135,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mana Aid',
		devName: 'manaaid',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 50,
		inactive: false,
		stat: 'MP'
	},
	{
		name: 'Mana Spring',
		devName: 'manaspring',
		affinity: 'Passive',
		type: 'SPRING',
		unique: false,
		amount: 15,
		hpmp: 'MP'
	},
	{
		name: 'Mapsi',
		devName: 'mapsi',
		affinity: 'Psy',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 95,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Mapsio',
		devName: 'mapsio',
		affinity: 'Psy',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 16
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Mapsiodyne',
		devName: 'mapsiodyne',
		affinity: 'Psy',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 22
		},
		power: {
			amount: 155,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Maragi',
		devName: 'maragi',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Maragibarion',
		devName: 'maragibarion',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 75
		},
		power: {
			amount: 185,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Maragidyne',
		devName: 'maragidyne',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Maragion',
		devName: 'maragion',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Marakukaja',
		devName: 'marakukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'marakunda',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'mararagidyne',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 32
		},
		power: {
			amount: 185,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Burn',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Marin Karin',
		devName: 'marinkarin',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 1,
		cost: 10,
		ailments: [
			'Charm'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Masquerade',
		devName: 'masquerade',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'HP',
			amount: 25
		},
		power: {
			amount: 250,
			display: 'Severe'
		},
		min: 2,
		max: 2,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Masukukaja',
		devName: 'masukukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'masukunda',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'matarukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'matarunda',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'matriarchslove',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 0,
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
		devName: 'mazan',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mazanbarion',
		devName: 'mazanbarion',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 75
		},
		power: {
			amount: 185,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mazandyne',
		devName: 'mazandyne',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mazanma',
		devName: 'mazanma',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mazio',
		devName: 'mazio',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 95,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Maziobarion',
		devName: 'maziobarion',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 75
		},
		power: {
			amount: 185,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Maziodyne',
		devName: 'maziodyne',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 155,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mazionga',
		devName: 'mazionga',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Media',
		devName: 'media',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 0,
		cost: 30,
		ailments: [],
		amount: 'Slight',
		buffs: [],
		flags: []
	},
	{
		name: 'Mediarahan',
		devName: 'mediarahan',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 0,
		cost: 150,
		ailments: [],
		amount: 'Full',
		buffs: [],
		flags: []
	},
	{
		name: 'Mediarama',
		devName: 'mediarama',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 0,
		cost: 60,
		ailments: [],
		amount: 'Moderate',
		buffs: [],
		flags: []
	},
	{
		name: 'Meditation',
		devName: 'meditation',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 5
		},
		power: {
			amount: 120,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Drain HP/MP'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Megaton Press',
		devName: 'megatonpress',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 260,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Half Accuracy'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Megaton Raid',
		devName: 'megatonraid',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 16
		},
		power: {
			amount: 310,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Megido',
		devName: 'megido',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 125,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Megido Flame',
		devName: 'megidoflame',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 130
		},
		power: {
			amount: 250,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Pierce'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Megidola',
		devName: 'megidola',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 70
		},
		power: {
			amount: 160,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Megidolaon',
		devName: 'megidolaon',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 120
		},
		power: {
			amount: 190,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Memory Blow',
		devName: 'memoryblow',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 15
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Seal',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Me Patra',
		devName: 'mepatra',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 0,
		cost: 30,
		ailments: [
			'ALL'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Mighty Cleave',
		devName: 'mightycleave',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 240,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Half Accuracy'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mind Slice',
		devName: 'mindslice',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 19
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Confuse',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Miracle Punch',
		devName: 'miraclepunch',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 8
		},
		power: {
			amount: 100,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Miracle Rush',
		devName: 'miraclerush',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'HP',
			amount: 16
		},
		power: {
			amount: 100,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Miracle Water',
		devName: 'miraclewater',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 0,
		cost: 20,
		ailments: [],
		amount: 'Slight',
		buffs: [],
		flags: []
	},
	{
		name: 'Mirage Shot',
		devName: 'mirageshot',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 160,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Mirage',
				chance: 75
			}
		],
		series: 'smt'
	},
	{
		name: 'Mist Rush',
		devName: 'mistrush',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 35
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 2,
		max: 4,
		flags: [],
		ailments: [
			{
				name: 'Mirage',
				chance: 35
			}
		],
		series: 'smt'
	},
	{
		name: 'Money Boost',
		devName: 'moneyboost',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 15,
		inactive: false,
		stat: 'Money'
	},
	{
		name: 'Morning Star',
		devName: 'morningstar',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 52
		},
		power: {
			amount: 210,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Mortal Jihad',
		devName: 'mortaljihad',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 250,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mudo',
		devName: 'mudo',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 140,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mudobarion',
		devName: 'mudobarion',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 55
		},
		power: {
			amount: 265,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Mudo Boost',
		devName: 'mudoboost',
		affinity: 'Passive',
		type: 'INSTAKILLBOOST',
		unique: false,
		element: 'Dark'
	},
	{
		name: 'Mudoon',
		devName: 'mudoon',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 175,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Murakumo',
		devName: 'murakumo',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 275,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Crit Damage Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Murderous Glee',
		devName: 'murderousglee',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Greatly increases Critical Rate.'
	},
	{
		name: 'Mustard Bomb',
		devName: 'mustardbomb',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 16
		},
		power: {
			amount: 125,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Enervation',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Myriad Slashes',
		devName: 'myriadslashes',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 55
		},
		power: {
			amount: 80,
			display: 'Weak'
		},
		min: 5,
		max: 5,
		flags: [
			'Half Accuracy'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Myriad Truths',
		devName: 'myriadtruths',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 160,
			display: 'Heavy'
		},
		min: 3,
		max: 3,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Narukami',
		devName: 'narukami',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 65
		},
		power: {
			amount: 230,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Pierce'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Navas Nebula',
		devName: 'navasnebula',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 18
		},
		power: {
			amount: 125,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Exhaustion',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Needle Spray',
		devName: 'needlespray',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 70,
			display: 'Weak'
		},
		min: 1,
		max: 4,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Negative Pile',
		devName: 'negativepile',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 12
		},
		power: {
			amount: 200,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Despair',
				chance: 20
			}
		],
		series: 'persona'
	},
	{
		name: 'Neo Cadenza',
		devName: 'neocadenza',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 0,
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
		devName: 'nihilclaw',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 36
		},
		power: {
			amount: 125,
			display: 'Heavy'
		},
		min: 2,
		max: 3,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Nocturnal Flash',
		devName: 'nocturnalflash',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
		cost: 12,
		ailments: [
			'Mirage'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Nuke Amp',
		devName: 'nukeamp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Nuke',
		stacks: 'x'
	},
	{
		name: 'Nuke Boost',
		devName: 'nukeboost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Nuke',
		stacks: 'x'
	},
	{
		name: 'Nuke Break',
		devName: 'nukebreak',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Nuke'
	},
	{
		name: 'Nuke Wall',
		devName: 'nukewall',
		affinity: 'Support',
		type: 'WALL',
		unique: false,
		cost: 18,
		element: 'Nuke'
	},
	{
		name: 'Null Charm',
		devName: 'nullcharm',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Charm',
		resistance: 'Null'
	},
	{
		name: 'Null Confuse',
		devName: 'nullconfuse',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Confuse',
		resistance: 'Null'
	},
	{
		name: 'Null Dark',
		devName: 'nulldark',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Dark',
		newAffinity: 'Null'
	},
	{
		name: 'Null Mirage',
		devName: 'nullmirage',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Mirage',
		resistance: 'Null'
	},
	{
		name: 'Null Elec',
		devName: 'nullelec',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Elec',
		newAffinity: 'Null'
	},
	{
		name: 'Null Fire',
		devName: 'nullfire',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Fire',
		newAffinity: 'Null'
	},
	{
		name: 'Null Force',
		devName: 'nullforce',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Force',
		newAffinity: 'Null'
	},
	{
		name: 'Null Seal',
		devName: 'nullseal',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Seal',
		resistance: 'Null'
	},
	{
		name: 'Null Ice',
		devName: 'nullice',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Ice',
		newAffinity: 'Null'
	},
	{
		name: 'Null Light',
		devName: 'nulllight',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Light',
		newAffinity: 'Null'
	},
	{
		name: 'Null Nuke',
		devName: 'nullnuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Nuke',
		newAffinity: 'Null'
	},
	{
		name: 'Null Phys',
		devName: 'nullphys',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Phys',
		newAffinity: 'Null'
	},
	{
		name: 'Null Psy',
		devName: 'nullpsy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Psy',
		newAffinity: 'Null'
	},
	{
		name: 'Null Rage',
		devName: 'nullrage',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Rage',
		resistance: 'Null'
	},
	{
		name: 'Null Sleep',
		devName: 'nullsleep',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Sleep',
		resistance: 'Null'
	},
	{
		name: 'Null Wind',
		devName: 'nullwind',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Wind',
		newAffinity: 'Null'
	},
	{
		name: 'Ominous Words',
		devName: 'ominouswords',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 1,
		cost: 5,
		ailments: [
			'Despair'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'One-shot Kill',
		devName: 'oneshotkill',
		affinity: 'Gun',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 17
		},
		power: {
			amount: 280,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Oni-Kagura',
		devName: 'onikagura',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 16
		},
		power: {
			amount: 100,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Rage',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Oracle',
		devName: 'oracle',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Oratorio',
		devName: 'oratorio',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 0,
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
		devName: 'pandemoniccrush',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 70
		},
		power: {
			amount: 170,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Defense Down'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Panta Rhei',
		devName: 'pantarhei',
		affinity: 'Wind',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 42
		},
		power: {
			amount: 265,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Panta Spane',
		devName: 'pantaspane',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 65
		},
		power: {
			amount: 180,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Attack Down',
			'Defense Down'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Patra',
		devName: 'patra',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
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
		devName: 'pestilence',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 170,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Afflicted Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Phantom Snow',
		devName: 'phantomsnow',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 0,
		cost: 4,
		ailments: [
			'Sleep'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Phys Block',
		devName: 'physblock',
		affinity: 'Support',
		type: 'BLOCK',
		unique: false,
		cost: 70,
		element: 'Phys'
	},
	{
		name: 'Phys Pleroma',
		devName: 'physpleroma',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 20,
		element: 'Phys',
		stacks: '+'
	},
	{
		name: 'Pierce Armor',
		devName: 'piercearmor',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Defense Down'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Poisma',
		devName: 'poisma',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 1,
		cost: 10,
		ailments: [
			'Poison'
		],
		chance: 85,
		flags: []
	},
	{
		name: 'Poison Mist',
		devName: 'poisonmist',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
		cost: 12,
		ailments: [
			'Poison'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Poison Adept',
		devName: 'poisonadept',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Increases effects of Poison.'
	},
	{
		name: 'Poison Master',
		devName: 'poisonmaster',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Greatly increases effects of Poison.'
	},
	{
		name: 'Poison Skewer',
		devName: 'poisonskewer',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 9
		},
		power: {
			amount: 110,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Poison',
				chance: 20
			}
		],
		series: 'persona'
	},
	{
		name: 'Posumudi',
		devName: 'posumudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
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
		devName: 'powerpunch',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 155,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'HP Dependent'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Power Slash',
		devName: 'powerslash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 10
		},
		power: {
			amount: 180,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Preach',
		devName: 'preach',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 0,
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
		devName: 'primalforce',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 20
		},
		power: {
			amount: 425,
			display: 'Colossal'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Profaned Land',
		devName: 'profanedland',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 35
		},
		power: {
			amount: 240,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Poison',
				chance: 100
			}
		],
		series: 'smt'
	},
	{
		name: 'Psi',
		devName: 'psi',
		affinity: 'Psy',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 4
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Psio',
		devName: 'psio',
		affinity: 'Psy',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 8
		},
		power: {
			amount: 160,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Psiodyne',
		devName: 'psiodyne',
		affinity: 'Psy',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 12
		},
		power: {
			amount: 215,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Psy Amp',
		devName: 'psyamp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Psy',
		stacks: 'x'
	},
	{
		name: 'Psy Boost',
		devName: 'psyboost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Psy',
		stacks: 'x'
	},
	{
		name: 'Psy Break',
		devName: 'psybreak',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Psy'
	},
	{
		name: 'Psycho Blast',
		devName: 'psychoblast',
		affinity: 'Psy',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 54
		},
		power: {
			amount: 185,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Psycho Force',
		devName: 'psychoforce',
		affinity: 'Psy',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 48
		},
		power: {
			amount: 265,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Psy Wall',
		devName: 'psywall',
		affinity: 'Support',
		type: 'WALL',
		unique: false,
		cost: 18,
		element: 'Psy'
	},
	{
		name: 'Pulinpa',
		devName: 'pulinpa',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 1,
		cost: 10,
		ailments: [
			'Confuse'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Puncture Punch',
		devName: 'puncturepunch',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Pierce'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Purple Smoke',
		devName: 'purplesmoke',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 75,
			display: 'Weak'
		},
		min: 3,
		max: 3,
		flags: [
			'Confused Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Rage Boost',
		devName: 'rageboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Rage',
		amount: 25,
		weather: false
	},
	{
		name: 'Raging Blizzard',
		devName: 'ragingblizzard',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 300,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Raging Hellfire',
		devName: 'raginghellfire',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 300,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Raging Lightning',
		devName: 'raginglightning',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 300,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Raging Tempest',
		devName: 'ragingtempest',
		affinity: 'Force',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 300,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Ragnarok',
		devName: 'ragnarok',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 60
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 2,
		max: 5,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Rainy Death',
		devName: 'rainydeath',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 20
		},
		power: {
			amount: 260,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Weather Boost'
		],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Rakukaja',
		devName: 'rakukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 1,
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
		devName: 'rakunda',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 1,
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
		devName: 'rampage',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 35
		},
		power: {
			amount: 180,
			display: 'Medium'
		},
		min: 2,
		max: 5,
		flags: [
			'Half Accuracy'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Rebellion',
		devName: 'rebellion',
		affinity: 'Support',
		type: 'CRIT',
		unique: false,
		range: 'Ally',
		cost: 5
	},
	{
		name: 'Rebellion Blade',
		devName: 'rebellionblade',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 99
		},
		power: {
			amount: 450,
			display: 'Colossal'
		},
		min: 1,
		max: 1,
		flags: [
			'Down Boost'
		],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Rebel Soul',
		devName: 'rebelsoul',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Showtime guage increases more quickly.'
	},
	{
		name: 'Recarm',
		devName: 'recarm',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
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
		devName: 'redcapote',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		range: 1,
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
		devName: 'regenerate1',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 2,
		hpmpail: 'HP',
		percent: true,
		ambush: false,
		baton: false
	},
	{
		name: 'Regenerate 2',
		devName: 'regenerate2',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 4,
		hpmpail: 'HP',
		percent: true,
		ambush: false,
		baton: false
	},
	{
		name: 'Regenerate 3',
		devName: 'regenerate3',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 6,
		hpmpail: 'HP',
		percent: true,
		ambush: false,
		baton: false
	},
	{
		name: 'Relaxing Wave',
		devName: 'relaxingwave',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Re Patra',
		devName: 'repatra',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
		cost: 5,
		ailments: [
			'Mirage'
		],
		amount: null,
		buffs: [],
		flags: []
	},
	{
		name: 'Repel Dark',
		devName: 'repeldark',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Dark',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Elec',
		devName: 'repelelec',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Elec',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Fire',
		devName: 'repelfire',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Fire',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Force',
		devName: 'repelforce',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Force',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Ice',
		devName: 'repelice',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Ice',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Light',
		devName: 'repellight',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Light',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Nuke',
		devName: 'repelnuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Nuke',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Phys',
		devName: 'repelphys',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Phys',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Psy',
		devName: 'repelpsy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Psy',
		newAffinity: 'Repel'
	},
	{
		name: 'Repel Wind',
		devName: 'repelwind',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Wind',
		newAffinity: 'Repel'
	},
	{
		name: 'Resist Charm',
		devName: 'resistcharm',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Charm',
		resistance: 'Resist'
	},
	{
		name: 'Resist Confuse',
		devName: 'resistconfuse',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Confuse',
		resistance: 'Resist'
	},
	{
		name: 'Resist Dark',
		devName: 'resistdark',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Dark',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Despair',
		devName: 'resistdespair',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Despair',
		resistance: 'Resist'
	},
	{
		name: 'Resist Mirage',
		devName: 'resistmirage',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Mirage',
		resistance: 'Resist'
	},
	{
		name: 'Resist Elec',
		devName: 'resistelec',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Elec',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Exhaust',
		devName: 'resistexhaust',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Exhaustion',
		resistance: 'Resist'
	},
	{
		name: 'Resist Fear',
		devName: 'resistfear',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Fear',
		resistance: 'Resist'
	},
	{
		name: 'Resist Fire',
		devName: 'resistfire',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Fire',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Force',
		devName: 'resistforce',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Force',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Seal',
		devName: 'resistseal',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Seal',
		resistance: 'Resist'
	},
	{
		name: 'Resist Ice',
		devName: 'resistice',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Ice',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Light',
		devName: 'resistlight',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Light',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Nuke',
		devName: 'resistnuke',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Nuke',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Phys',
		devName: 'resistphys',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Phys',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Poison',
		devName: 'resistpoison',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Poison',
		resistance: 'Resist'
	},
	{
		name: 'Resist Psy',
		devName: 'resistpsy',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Psy',
		newAffinity: 'Resist'
	},
	{
		name: 'Resist Sleep',
		devName: 'resistsleep',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Sleep',
		resistance: 'Resist'
	},
	{
		name: 'Resist Wind',
		devName: 'resistwind',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		unique: false,
		element: 'Wind',
		newAffinity: 'Resist'
	},
	{
		name: 'Restore',
		devName: 'restore',
		affinity: 'Passive',
		type: 'SIPHON',
		unique: false,
		amount: 10,
		criteria: 'Weakness/Critical'
	},
	{
		name: 'Retaliate',
		devName: 'retaliate',
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
		devName: 'revivalchant',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 1,
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
		devName: 'revolution',
		affinity: 'Support',
		type: 'CRIT',
		unique: false,
		range: 'All',
		cost: 5
	},
	{
		name: 'Riot Gun',
		devName: 'riotgun',
		affinity: 'Gun',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 24
		},
		power: {
			amount: 310,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Rising Slash',
		devName: 'risingslash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 14
		},
		power: {
			amount: 220,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Baton Boost'
		],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Ruinous Thunder',
		devName: 'ruinousthunder',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 200,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Sacrifice of Clay',
		devName: 'sacrificeofclay',
		affinity: 'Force',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 140,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Defense Down',
			'Attack Down'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Safeguard',
		devName: 'safeguard',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Being Evaded/Nulled/Drained/Repelled doesn\'t consume additional Press Turn Icons.'
	},
	{
		name: 'Sakanagi',
		devName: 'sakanagi',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 230,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Salvation',
		devName: 'salvation',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 0,
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
		devName: 'samarecarm',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: false,
		range: 1,
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
		devName: 'sanguinedrain',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 120,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Attack Down',
			'Drain HP'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Scratch Dance',
		devName: 'scratchdance',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 12
		},
		power: {
			amount: 85,
			display: 'Weak'
		},
		min: 2,
		max: 4,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Severing Bite',
		devName: 'severingbite',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 190,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Crit Damage Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Sexy Dance',
		devName: 'sexydance',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
		cost: 25,
		ailments: [
			'Charm'
		],
		chance: 45,
		flags: []
	},
	{
		name: 'Sharp Student',
		devName: 'sharpstudent',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Decreases chance of being hit by a Critical.'
	},
	{
		name: 'Shield of Justice',
		devName: 'shieldofjustice',
		affinity: 'Support',
		type: 'BARRIER',
		unique: true,
		range: 0,
		cost: 160,
		barriers: [
			'Shield of Justice'
		]
	},
	{
		name: 'Shining Arrows',
		devName: 'shiningarrows',
		affinity: 'Light',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 22
		},
		power: {
			amount: 15,
			display: 'Weak'
		},
		min: 4,
		max: 8,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Shock Boost',
		devName: 'shockboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Shock',
		amount: 25,
		weather: false
	},
	{
		name: 'Shockbound',
		devName: 'shockbound',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 90,
			display: 'Weak'
		},
		min: 2,
		max: 5,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Silt of Ruin',
		devName: 'siltofruin',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 45
		},
		power: {
			amount: 140,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Accuracy/Evasion Down'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Skewer',
		devName: 'skewer',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 5
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Skull Cracker',
		devName: 'skullcracker',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 10
		},
		power: {
			amount: 125,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Confuse',
				chance: 20
			}
		],
		series: 'persona'
	},
	{
		name: 'Sledgehammer',
		devName: 'sledgehammer',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 10
		},
		power: {
			amount: 125,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Mirage',
				chance: 20
			}
		],
		series: 'persona'
	},
	{
		name: 'Sleep Boost',
		devName: 'sleepboost',
		affinity: 'Passive',
		type: 'AILBOOST',
		unique: false,
		ailment: 'Sleep',
		amount: 25,
		weather: false
	},
	{
		name: 'Slumber Vortex',
		devName: 'slumbervortex',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
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
		devName: 'snap',
		affinity: 'Gun',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 9
		},
		power: {
			amount: 100,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Somersault',
		devName: 'somersault',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 35
		},
		power: {
			amount: 160,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Defense Greatly Down'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Sonic Punch',
		devName: 'sonicpunch',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 8
		},
		power: {
			amount: 140,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Souffle D\'éclair',
		devName: 'souffledeclair',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 55
		},
		power: {
			amount: 330,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Soul Break',
		devName: 'soulbreak',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 1,
		cost: 5,
		ailments: [
			'Exhaustion'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Soul Chain',
		devName: 'soulchain',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 20,
		hpmpail: 'MP',
		percent: false,
		ambush: false,
		baton: true
	},
	{
		name: 'Soul Divide',
		devName: 'souldivide',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 230,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Half Accuracy'
		],
		ailments: [
			{
				name: 'Seal',
				chance: 40
			}
		],
		series: 'smt'
	},
	{
		name: 'Soul Touch',
		devName: 'soultouch',
		affinity: 'Passive',
		type: 'REGEN',
		unique: false,
		amount: 5,
		hpmpail: 'MP',
		percent: false,
		ambush: false,
		baton: true
	},
	{
		name: 'Speed Master',
		devName: 'speedmaster',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		unique: false,
		buff: 'Accuracy/Evasion',
		range: 1
	},
	{
		name: 'Spell Master',
		devName: 'spellmaster',
		affinity: 'Passive',
		type: 'MASTER',
		unique: false,
		skill: 'MP'
	},
	{
		name: 'Spirit Drain',
		devName: 'spiritdrain',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 5
		},
		power: {
			amount: 100,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Drain MP'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Stagnant Air',
		devName: 'stagnantair',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		range: 0,
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
		name: 'Stagnant Air -Persona-',
		devName: 'stagnantairpersona',
		affinity: 'Almighty',
		type: 'SUSCEPTIBILITY',
		unique: false,
		range: 0,
		cost: 5
	},
	{
		name: 'Stamina Song',
		devName: 'staminasong',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Steel Needle',
		devName: 'steelneedle',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 75,
			display: 'Medium'
		},
		min: 1,
		max: 4,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Stormcaller Song',
		devName: 'stormcallersong',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		range: 2,
		cost: {
			type: 'MP',
			amount: 18
		},
		power: {
			amount: 60,
			display: 'Weak'
		},
		min: 3,
		max: 6,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Storm Dracostrike',
		devName: 'stormdracostrike',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 200,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Subrecover HP',
		devName: 'subrecoverhp',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: 'Restores 10% HP to backup members after battle.'
	},
	{
		name: 'Subrecover HP EX',
		devName: 'subrecoverhpex',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: 'Restores 20% HP to backup members after battle.'
	},
	{
		name: 'Subrecover SP',
		devName: 'subrecoversp',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: 'Restores 1% SP to backup members after battle.'
	},
	{
		name: 'Subrecover SP EX',
		devName: 'subrecoverspex',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: 'Restores 3% SP to backup members after battle.'
	},
	{
		name: 'Sukukaja',
		devName: 'sukukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 1,
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
		devName: 'sukunda',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 1,
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
		devName: 'sunsradiance',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 1,
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
		devName: 'supportscan',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Survival Trick',
		devName: 'survivaltrick',
		affinity: 'Passive',
		type: 'ENDURE',
		unique: false,
		priority: 3,
		instakill: true
	},
	{
		name: 'Swift Strike',
		devName: 'swiftstrike',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 17
		},
		power: {
			amount: 25,
			display: 'Minuscule'
		},
		min: 2,
		max: 4,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Sword Dance',
		devName: 'sworddance',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 25
		},
		power: {
			amount: 375,
			display: 'Colossal'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Tandava',
		devName: 'tandava',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 160
		},
		power: {
			amount: 230,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Minimize Defense'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Tarukaja',
		devName: 'tarukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 1,
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
		devName: 'tarunda',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 1,
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
		devName: 'taunt',
		affinity: 'Support',
		type: 'TAUNT',
		unique: false,
		buff: null,
		cost: 10
	},
	{
		name: 'Taunt -Persona-',
		devName: 'tauntpersona',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 1,
		cost: 5,
		ailments: [
			'Rage'
		],
		chance: 70,
		flags: []
	},
	{
		name: 'Technical High',
		devName: 'technicalhigh',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Increases duration of Kaja-type buff skills when landing a Critical.'
	},
	{
		name: 'Tempest Slash',
		devName: 'tempestslash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 17
		},
		power: {
			amount: 20,
			display: 'Minuscule'
		},
		min: 3,
		max: 5,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Tentarafoo',
		devName: 'tentarafoo',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
		cost: 25,
		ailments: [
			'Confuse'
		],
		chance: 45,
		flags: []
	},
	{
		name: 'Terrorblade',
		devName: 'terrorblade',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 2,
		cost: {
			type: 'MP',
			amount: 35
		},
		power: {
			amount: 250,
			display: 'Heavy'
		},
		min: 1,
		max: 3,
		flags: [
			'Pierce'
		],
		ailments: [
			{
				name: 'Confuse',
				chance: 50
			}
		],
		series: 'smt'
	},
	{
		name: 'Terror Claw',
		devName: 'terrorclaw',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 8
		},
		power: {
			amount: 90,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Fear',
				chance: 20
			}
		],
		series: 'persona'
	},
	{
		name: 'Tetra Break',
		devName: 'tetrabreak',
		affinity: 'Support',
		type: 'BARRIERBREAK',
		unique: false,
		cost: 18,
		barrier: 'Tetrakarn'
	},
	{
		name: 'Tetraja',
		devName: 'tetraja',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 1,
		cost: 24,
		barriers: [
			'Tetraja'
		]
	},
	{
		name: 'Tetrakarn',
		devName: 'tetrakarn',
		affinity: 'Support',
		type: 'BARRIER',
		unique: false,
		range: 1,
		cost: 50,
		barriers: [
			'Tetrakarn'
		]
	},
	{
		name: 'Thalassic Calamity',
		devName: 'thalassiccalamity',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		range: 2,
		cost: {
			type: 'MP',
			amount: 45
		},
		power: {
			amount: 95,
			display: 'Weak'
		},
		min: 3,
		max: 7,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'The Man"s Way',
		devName: 'themansway',
		affinity: 'Ailment',
		type: 'MISC',
		unique: true,
		cost: 30,
		effect: 'May inflict Down/Dizzy on all foes.'
	},
	{
		name: 'Thermopylae',
		devName: 'thermopylae',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'thirdeye',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Thunder Reign',
		devName: 'thunderreign',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 60
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 2,
		max: 5,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Titanomachia',
		devName: 'titanomachia',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 60
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Titanomachia -Persona-',
		devName: 'titanomachiapersona',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 34
		},
		power: {
			amount: 190,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Fear',
				chance: 70
			}
		],
		series: 'persona'
	},
	{
		name: 'Torrent Shot',
		devName: 'torrentshot',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 12
		},
		power: {
			amount: 75,
			display: 'Medium'
		},
		min: 2,
		max: 4,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Touch n" Go',
		devName: 'touchngo',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Automatic Sukukaja after a Baton Pass.'
	},
	{
		name: 'Toxic Breath',
		devName: 'toxicbreath',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 120,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Poison',
				chance: 50
			}
		],
		series: 'smt'
	},
	{
		name: 'Toxic Cloud',
		devName: 'toxiccloud',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
		cost: 25,
		ailments: [
			'Poison'
		],
		chance: 60,
		flags: []
	},
	{
		name: 'Toxic Spray',
		devName: 'toxicspray',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
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
		devName: 'toxicsting',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 110,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Poison',
				chance: 60
			}
		],
		series: 'smt'
	},
	{
		name: 'Traesto',
		devName: 'traesto',
		affinity: 'Support',
		type: 'MISC',
		unique: false,
		cost: 18,
		effect: 'Instantly escape from a dungeon.'
	},
	{
		name: 'Trafuri',
		devName: 'trafuri',
		affinity: 'Support',
		type: 'MISC',
		unique: false,
		cost: 6,
		effect: 'Guarantees escape from escapable battles.'
	},
	{
		name: 'Treasure Radar',
		devName: 'treasureradar',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Treasure Skimmer',
		devName: 'treasureskimmer',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: 'Find out if a foe is carrying a rare item ahead of time.'
	},
	{
		name: 'Trigger Happy',
		devName: 'triggerhappy',
		affinity: 'Passive',
		type: 'MISC',
		unique: false,
		cost: null,
		effect: 'Increases chance of Critical from Gun attacks.'
	},
	{
		name: 'Triple Down',
		devName: 'tripledown',
		affinity: 'Gun',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 16
		},
		power: {
			amount: 40,
			display: 'Weak'
		},
		min: 3,
		max: 3,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Trisagion',
		devName: 'trisagion',
		affinity: 'Fire',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 65
		},
		power: {
			amount: 230,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Pierce'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Tyrant"s Mind',
		devName: 'tyrantsmind',
		affinity: 'Passive',
		type: 'BOOST',
		unique: true,
		amount: 25,
		element: 'ALL',
		stacks: 'x'
	},
	{
		name: 'Ultimate Support',
		devName: 'ultimatesupport',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: 'Ultimate support effect of strengthening/healing all allies may activate in battle.'
	},
	{
		name: 'Unshaken Will',
		devName: 'unshakenwill',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		unique: false,
		ailment: 'Confuse/Fear/Rage/Despair',
		resistance: 'Null'
	},
	{
		name: 'Vacuum Wave',
		devName: 'vacuumwave',
		affinity: 'Wind',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 48
		},
		power: {
			amount: 185,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Vajra Blast',
		devName: 'vajrablast',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 13
		},
		power: {
			amount: 100,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Vault Guardian',
		devName: 'vaultguardian',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: false,
		range: 0,
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
		devName: 'venomchaser',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 15
		},
		power: {
			amount: 160,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Poisoned Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Vicious Strike',
		devName: 'viciousstrike',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 18
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Victory Cry',
		devName: 'victorycry',
		affinity: 'Passive',
		type: 'POSTBATTLE',
		unique: false,
		amount: 100,
		inactive: false,
		stat: 'HPMP'
	},
	{
		name: 'Vigor Song',
		devName: 'vigorsong',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'Vile Assault',
		devName: 'vileassault',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'HP',
			amount: 18
		},
		power: {
			amount: 300,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [
			'Down Boost'
		],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Violent Rage',
		devName: 'violentrage',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		range: 0,
		cost: {
			type: 'MP',
			amount: 60
		},
		power: {
			amount: 150,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Seal',
				chance: 40
			}
		],
		series: 'smt'
	},
	{
		name: 'Virus Wave',
		devName: 'viruswave',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 16
		},
		power: {
			amount: 175,
			display: 'Heavy'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [
			{
				name: 'Poison',
				chance: 5
			}
		],
		series: 'persona'
	},
	{
		name: 'Vorpal Blade',
		devName: 'vorpalblade',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'HP',
			amount: 23
		},
		power: {
			amount: 280,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'persona'
	},
	{
		name: 'Wage War',
		devName: 'wagewar',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: false,
		range: 0,
		cost: 12,
		ailments: [
			'Rage'
		],
		chance: 55,
		flags: []
	},
	{
		name: 'Walpurgisnacht',
		devName: 'walpurgisnacht',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		range: 1,
		cost: {
			type: 'MP',
			amount: 40
		},
		power: {
			amount: 300,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Weakness Scan',
		devName: 'weaknessscan',
		affinity: 'Passive',
		type: 'NAVI',
		unique: false,
		effect: ''
	},
	{
		name: 'White Dracostrike',
		devName: 'whitedracostrike',
		affinity: 'Light',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 30
		},
		power: {
			amount: 200,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [
			'Weakness Instakill'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Wind Amp',
		devName: 'windamp',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 50,
		element: 'Wind',
		stacks: 'x'
	},
	{
		name: 'Wind Boost',
		devName: 'windboost',
		affinity: 'Passive',
		type: 'BOOST',
		unique: false,
		amount: 25,
		element: 'Wind',
		stacks: 'x'
	},
	{
		name: 'Wind Break',
		devName: 'windbreak',
		affinity: 'Support',
		type: 'BREAK',
		unique: false,
		cost: 15,
		element: 'Wind'
	},
	{
		name: 'Wind Breath',
		devName: 'windbreath',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		range: 2,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 90,
			display: 'Weak'
		},
		min: 2,
		max: 5,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Wind Dracostrike',
		devName: 'winddracostrike',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 25
		},
		power: {
			amount: 200,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Wind Wall',
		devName: 'windwall',
		affinity: 'Support',
		type: 'WALL',
		unique: false,
		cost: 18,
		element: 'Wind'
	},
	{
		name: 'Witness Me',
		devName: 'witnessme',
		affinity: 'Support',
		type: 'TAUNT',
		unique: true,
		buff: 'Double Accuracy/Evasion',
		cost: 5
	},
	{
		name: 'Wrath Tempest',
		devName: 'wrathtempest',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		range: 2,
		cost: {
			type: 'MP',
			amount: 35
		},
		power: {
			amount: 30,
			display: 'Weak'
		},
		min: 8,
		max: 8,
		flags: [
			'Crit Damage Boost'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Yabusame Shot',
		devName: 'yabusameshot',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: false,
		range: 0,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 60,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [
			'Pierce'
		],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Youthful Wind',
		devName: 'youthfulwind',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		range: 0,
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
		devName: 'zan',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Zanbarion',
		devName: 'zanbarion',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 265,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Zandyne',
		devName: 'zandyne',
		affinity: 'Force',
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
	},
	{
		name: 'Zanma',
		devName: 'zanma',
		affinity: 'Force',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Zio',
		devName: 'zio',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 10
		},
		power: {
			amount: 130,
			display: 'Weak'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
		name: 'Ziobarion',
		devName: 'ziobarion',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 50
		},
		power: {
			amount: 265,
			display: 'Severe'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	},
	{
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
	},
	{
		name: 'Zionga',
		devName: 'zionga',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: false,
		range: 1,
		cost: {
			type: 'MP',
			amount: 20
		},
		power: {
			amount: 160,
			display: 'Medium'
		},
		min: 1,
		max: 1,
		flags: [],
		ailments: [],
		series: 'smt'
	}
];

export default skills;