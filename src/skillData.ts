import type { AnySkillData } from './skill.js';
import { BuffValue } from './types.js';

const skillData: AnySkillData[] = [
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
		name: '5.67 Billion Hands',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Smirk Boost'
		],
		power: {
			amount: 28,
			display: 'Weak',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Abysmal Surge',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Abyssal Mask',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Acid Breath',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Foes',
		cost: 65,
		buffs: {
			Defense: BuffValue.Decrease,
			'Accuracy/Evasion': BuffValue.Decrease
		},
		auto: []
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Agibarion',
		aliases: [
			'Inferno',
			'True Agidyne'
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Ailment Boost',
		affinity: 'Passive',
		type: 'AILBOOST',
		ailment: null,
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Alertness',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'Self',
		cost: null,
		description: 'Increases strength of All-Out Attacks.'
	},
	{
		name: 'Ally Counter',
		affinity: 'Passive',
		type: 'SMTCOUNTER',
		chance: 50,
		element: 'Phys',
		power: {
			amount: 100,
			display: 'Weak'
		},
		ally: true
	},
	{
		name: 'Ally Retaliate',
		affinity: 'Passive',
		type: 'SMTCOUNTER',
		chance: 50,
		element: 'Phys',
		power: {
			amount: 150,
			display: 'Heavy'
		},
		ally: true
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
		ailment: null,
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
		name: 'Analyze',
		affinity: 'Special',
		type: 'MISC',
		target: 'One Foe',
		cost: 2,
		description: 'Displays info for 1 foe.'
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
		target: 'Random Foes',
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
		target: 'All Foes',
		cost: 12,
		ailments: [
			'Exhaust'
		],
		chance: 30
	},
	{
		name: 'Anti-Curse',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Poison',
			'Seal'
		],
		resistance: 'Resist'
	},
	{
		name: 'Antichthon',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 110
		},
		debuffs: {
			Attack: BuffValue.Decrease,
			Defense: BuffValue.Decrease,
			'Accuracy/Evasion': BuffValue.Decrease
		},
		flags: [
			'Smirk-Dependent Debuffs'
		],
		power: {
			amount: 190,
			display: 'Severe',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Arbitration',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Soothes an enraged demon.'
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'Random Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Attack Knowhow',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Enables use of attack items.'
	},
	{
		name: 'Attack Master',
		aliases: [
			'Auto-Tarukaja'
		],
		affinity: 'Passive',
		type: 'AUTOBUFF',
		target: 'Self',
		buff: 'Attack'
	},
	{
		name: 'Auto-Maraku',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		target: 'All Allies',
		buff: 'Defense'
	},
	{
		name: 'Auto-Masuku',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		target: 'All Allies',
		buff: 'Accuracy/Evasion'
	},
	{
		name: 'Auto-Mataru',
		affinity: 'Passive',
		type: 'AUTOBUFF',
		target: 'All Allies',
		buff: 'Attack'
	},
	{
		name: 'Awakening',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Boosts all stats by 5 points.'
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
		target: 'Random Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Baisudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Ally',
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
		aliases: [
			'Beastly Reaction'
		],
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Begging',
		affinity: 'Special',
		type: 'MISC',
		target: 'One Foe',
		cost: 0,
		description: 'Requests Macca or Item.'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Beseech',
		affinity: 'Special',
		type: 'MISC',
		target: 'One Foe',
		cost: 0,
		description: 'Recruits a demon higher level than the user.'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Bind Voice',
		aliases: [
			'Binding Cry'
		],
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'One Foe',
		cost: 20,
		ailments: [
			'Bind'
		],
		chance: 45
	},
	{
		name: 'Binding Claw',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Bind'
			],
			chance: 50
		},
		cost: {
			stat: 'MP',
			amount: 11
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Blank Bullet',
		affinity: 'Gun',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 60
		},
		cost: {
			stat: 'MP',
			amount: 22
		},
		max: 2,
		min: 2,
		power: {
			amount: 115,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Blast Arrow',
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 16
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Bleeding Dry Brush',
		affinity: 'Support',
		type: 'BARRIER',
		unique: null,
		target: 'One Ally',
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
		target: 'Random Foes',
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
		debuffs: {
			'Accuracy/Evasion': BuffValue.Decrease
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Blink of Death',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		debuffs: {
			Defense: BuffValue.Decrease
		},
		flags: [
			'Smirk Instakill'
		],
		power: {
			amount: 120,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Blood Ritual',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'Self',
		cost: 25,
		buffs: {
			Attack: BuffValue.Increase,
			Defense: BuffValue.Increase,
			'Accuracy/Evasion': BuffValue.Increase
		},
		flags: [
			'Reduce HP to 1'
		],
		auto: []
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Bloody Glee',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Increases Critical Rate.'
	},
	{
		name: 'Boogie-Woogie',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 97,
		cost: {
			stat: 'MP',
			amount: 3
		},
		max: 4,
		min: 4,
		power: {
			amount: 40,
			display: 'Weak',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Boon Boost',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Your -kaja/-nda skills last 1 extra turn.'
	},
	{
		name: 'Boon Boost EX',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Boundless Sea',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 150
		},
		debuffs: {
			Attack: BuffValue.NegateBuffs,
			Defense: BuffValue.NegateBuffs,
			'Accuracy/Evasion': BuffValue.NegateBuffs
		},
		flags: [
			'Pierce'
		],
		power: {
			amount: 180,
			display: 'Severe',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Bowl of Hygieia',
		affinity: 'Support',
		type: 'CHARGE',
		target: 'Self',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Brave Step',
		affinity: 'Support',
		type: 'CRIT',
		unique: null,
		target: 'All Allies',
		cost: 16
	},
	{
		name: 'Brutal Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 75,
		cost: {
			stat: 'HP',
			amount: 13
		},
		flags: [
			'+20% Crit Rate',
			'HP Dependent'
		],
		power: {
			amount: 170,
			display: 'Heavy',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Bufubarion',
		aliases: [
			'Diamond Dust',
			'Niflheim',
			'True Bufudyne'
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Allies',
		cost: 24,
		amount: 'Half',
		buffs: {
			'Accuracy/Evasion': BuffValue.Increase
		}
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
		target: 'All Foes',
		cost: 30,
		ailments: [
			'Charm'
		],
		chance: 80,
		debuffs: {
			Attack: BuffValue.NegateBuffs,
			Defense: BuffValue.NegateBuffs,
			'Accuracy/Evasion': BuffValue.NegateDebuffs
		}
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Cautious Cheer',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		target: 'All Allies',
		cost: 50,
		buffs: {
			Defense: BuffValue.Increase,
			'Accuracy/Evasion': BuffValue.Increase
		},
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
		target: 'One Foe',
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
		name: 'Chakra Walk',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Recover some MP while walking. Inactive when in stock.'
	},
	{
		name: 'Champion\'s Cup',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: null,
		target: 'One Ally',
		cost: 10,
		amount: 'Moderate',
		buffs: {
			Attack: BuffValue.Increase
		}
	},
	{
		name: 'Chaos Blade',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 99,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 30
		},
		cost: {
			stat: 'HP',
			amount: 32
		},
		flags: [
			'HP Dependent'
		],
		max: 5,
		min: 2,
		power: {
			amount: 100,
			display: 'Weak',
			type: 'Physical'
		},
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Chaotic Will',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: null,
		target: 'All Foes',
		ailments: [
			'Death'
		],
		chance: 30,
		cost: 150,
		flags: [
			'Halve Press Turn Icons'
		]
	},
	{
		name: 'Charge',
		aliases: [
			'Focus',
			'Power Charge'
		],
		affinity: 'Support',
		type: 'CHARGE',
		target: 'Self',
		cost: 10,
		charge: 'Phys Charge'
	},
	{
		name: 'Chariot',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		debuffs: {
			'Accuracy/Evasion': BuffValue.Decrease
		},
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
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
		target: 'One Ally',
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
		target: 'All Foes',
		cost: 90,
		buffs: {
			Attack: BuffValue.Decrease,
			Defense: BuffValue.Decrease,
			'Accuracy/Evasion': BuffValue.Decrease
		},
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
		target: 'One Foe',
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
		target: 'Self',
		cost: 0,
		buffs: {
			Defense: 4
		},
		auto: []
	},
	{
		name: 'Cold World',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Death'
			],
			chance: 15
		},
		cost: {
			stat: 'MP',
			amount: 70
		},
		power: {
			amount: 150,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Combat Tara',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		target: 'All Allies',
		cost: 60,
		buffs: {
			Attack: BuffValue.Increase,
			Defense: BuffValue.Increase,
			'Accuracy/Evasion': BuffValue.Increase
		},
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
		target: 'Self',
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
		target: 'Self',
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
		target: 'Self',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Cough',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'One Foe',
		cost: 4,
		ailments: [
			'Sick'
		],
		chance: 90
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Critical Aura',
		aliases: [
			'Critical Eye'
		],
		affinity: 'Support',
		type: 'CHARGE',
		target: 'Self',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Critical Zealot',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		name: 'Curse Thy Enemy',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 80
		},
		flags: [
			'Guarantees Weakness'
		],
		power: {
			amount: 200,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Damnation',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: {
			names: [
				'Poison'
			],
			chance: 70
		},
		cost: {
			stat: 'MP',
			amount: 65
		},
		power: {
			amount: 350,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Dance of Mara',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'All Allies',
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
		name: 'Dark Energy',
		affinity: 'Support',
		type: 'CHARGE',
		target: 'Self',
		cost: 25,
		charge: 'Phys Charge - Dark Energy'
	},
	{
		name: 'Dark Grudge',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 30
		},
		flags: [
			'Smirk Instakill'
		],
		power: {
			amount: 160,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'One Foe',
		series: 'smt'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Dazzler',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Deadly Wind',
		affinity: 'Force',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		flags: [
			'Smirk Pierce'
		],
		power: {
			amount: 210,
			display: 'Severe',
			type: 'Magic'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Death\'s Door',
		affinity: 'Almighty',
		type: 'SET',
		target: 'All Foes',
		amount: 1,
		cost: 35,
		sickDependent: true
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Debilitate',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Foes',
		cost: 150,
		buffs: {
			Attack: BuffValue.Decrease,
			Defense: BuffValue.Decrease,
			'Accuracy/Evasion': BuffValue.Decrease
		},
		auto: []
	},
	{
		name: 'Defense Master',
		aliases: [
			'Auto-Rakukaja'
		],
		affinity: 'Passive',
		type: 'AUTOBUFF',
		target: 'Self',
		buff: 'Defense'
	},
	{
		name: 'Deicidal Poison',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		target: 'All Foes',
		cost: 50,
		ailments: [
			'Poison'
		],
		chance: 90,
		debuffs: {
			'Accuracy/Evasion': BuffValue.GreatlyDecrease
		}
	},
	{
		name: 'Dekaja',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Foes',
		cost: 40,
		buffs: {
			Attack: BuffValue.NegateBuffs,
			Defense: BuffValue.NegateBuffs,
			'Accuracy/Evasion': BuffValue.NegateBuffs
		},
		auto: []
	},
	{
		name: 'Dekunda',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Allies',
		cost: 40,
		buffs: {
			Attack: BuffValue.NegateDebuffs,
			Defense: BuffValue.NegateDebuffs,
			'Accuracy/Evasion': BuffValue.NegateDebuffs
		},
		auto: []
	},
	{
		name: 'Demonic Decree',
		aliases: [
			'Hell\'s Judgment'
		],
		affinity: 'Dark',
		type: 'SET',
		target: 'One Foe',
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
		name: 'Desperate Hit',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		max: 5,
		min: 1,
		power: {
			amount: 48,
			display: 'Weak',
			type: 'Magic'
		},
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Detain',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Prevents the demon from leaving while talking.'
	},
	{
		name: 'Dia',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Ally',
		cost: 8,
		amount: 'Slight'
	},
	{
		name: 'Diamrita',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Ally',
		cost: 30,
		ailments: 'All',
		amount: 'Moderate'
	},
	{
		name: 'Diarahan',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Ally',
		cost: 35,
		amount: 'Full'
	},
	{
		name: 'Diarama',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Ally',
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
		target: 'Random Foes',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Divine Grace',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'One Foe',
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
		target: 'One Ally',
		cost: 40,
		charge: 'Phys Charge - Donum'
	},
	{
		name: 'Donum Magici',
		affinity: 'Support',
		type: 'CHARGE',
		target: 'One Ally',
		cost: 40,
		charge: 'Magic Charge - Donum'
	},
	{
		name: 'Door of Hades',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 90,
		ailments: {
			names: [
				'Death'
			],
			chance: 40
		},
		cost: {
			stat: 'MP',
			amount: 32
		},
		power: {
			amount: 110,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Doping',
		affinity: 'Support',
		type: 'MISC',
		target: 'All Allies',
		cost: 98,
		description: 'Increases maximum HP for all allies during battle.'
	},
	{
		name: 'Dormina',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Dragon Eye',
		aliases: [
			'Draconic Reaction'
		],
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Greatly increases Accuracy.'
	},
	{
		name: 'Drain Attack',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'User\'s basic attack drains HP but has a reduced Critical Rate.'
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
			'Absorb Fire',
			'Fire Drain'
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
		name: 'Drain Gun',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Gun',
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
		target: 'All Foes',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Dream Raga',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		target: 'All Foes',
		cost: 65,
		ailments: [
			'Sleep',
			'Confusion',
			'Charm'
		],
		chance: 70,
		debuffs: {
			Defense: BuffValue.GreatlyDecrease
		}
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Dustoma',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'One Foe',
		cost: 10,
		ailments: [
			'Mirage'
		],
		chance: 75
	},
	{
		name: 'E & I',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 97,
		cost: {
			stat: 'MP',
			amount: 3
		},
		max: 4,
		min: 4,
		power: {
			amount: 40,
			display: 'Weak',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Earthquake',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Daze'
			],
			chance: 60
		},
		cost: {
			stat: 'HP',
			amount: 25
		},
		power: {
			amount: 140,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'All Foes',
		series: 'smt'
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Electrify',
		affinity: 'Special',
		type: 'MISC',
		unique: null,
		target: 'One Ally',
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
		target: 'All Allies',
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
		name: 'Elec Pierce',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Elec attacks ignore affinity resistance except repel.'
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
		target: 'All Allies',
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
		aliases: [
			'Soul Drain'
		],
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Energy Drop',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Ally',
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
		target: 'All Allies',
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
		target: 'One Foe',
		cost: 5,
		ailments: [
			'Enervate'
		],
		chance: 40
	},
	{
		name: 'Enlightenment',
		affinity: 'Support',
		type: 'MISC',
		target: 'Self',
		cost: 8,
		description: 'User absorbs weaknesses until next turn. Raises all stats by 1 stage and gains smirk if hit with weakness.'
	},
	{
		name: 'Entangling Tendrils',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		target: 'All Foes',
		cost: 25,
		ailments: [
			'Seal'
		],
		chance: 40,
		debuffs: {
			Attack: BuffValue.Decrease
		}
	},
	{
		name: 'Enter Yoshitsune',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 200,
		cost: {
			stat: 'HP',
			amount: 9
		},
		flags: [
			'+30% Crit Rate'
		],
		power: {
			amount: 200,
			display: 'Heavy',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
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
		target: 'Self',
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
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Eternal Rest',
		affinity: 'Almighty',
		type: 'MISC',
		target: 'All Foes',
		cost: 50,
		description: 'Instakills foes inflicted with Sleep.'
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
		target: 'Self',
		cost: 25,
		description: 'Greatly fills the Magatsuhi Gauge. (Once per turn)'
	},
	{
		name: 'Evil Gleam',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: null,
		target: 'All Foes',
		cost: 0,
		ailments: [
			'Charm'
		],
		chance: 65
	},
	{
		name: 'Evil Melody',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		target: 'One Foe',
		ailments: [
			'Death'
		],
		chance: 150,
		cost: 100
	},
	{
		name: 'Evil Smile',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'False Replication',
		affinity: 'Special',
		type: 'MISC',
		unique: null,
		target: 'Self',
		cost: 0,
		description: 'Creates a replica.'
	},
	{
		name: 'Famine\'s Scream',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: null,
		target: 'All Foes',
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
		debuffs: {
			Attack: BuffValue.Decrease
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Physical'
		},
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		buffs: {
			Defense: BuffValue.Increase
		},
		cost: 30
	},
	{
		name: 'Fighting Spirit',
		affinity: 'Support',
		type: 'CHARGE',
		target: 'All Allies',
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
		target: 'One Foe',
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
		target: 'All Allies',
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
		target: 'Random Foes',
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
		target: 'One Foe',
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
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Fire Pierce',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Fire attacks ignore affinity resistance except repel.'
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
		target: 'Self',
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
		target: 'All Foes',
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
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Fog Breath',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Foes',
		cost: 65,
		buffs: {
			Attack: BuffValue.Decrease,
			'Accuracy/Evasion': BuffValue.Decrease
		},
		auto: []
	},
	{
		name: 'Fogna',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
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
		target: 'All Allies',
		cost: 40,
		barriers: [
			'Force Nullify'
		]
	},
	{
		name: 'Force Boost',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 25,
		element: 'Force',
		stacks: 'x'
	},
	{
		name: 'Force Pierce',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Force attacks ignore affinity resistance except repel.'
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
		target: 'All Foes',
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
		ailments: null,
		resistance: 'Resist'
	},
	{
		name: 'Foul Breath',
		affinity: 'Almighty',
		type: 'SUSCEPTIBILITY',
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Frolic',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		target: 'All Foes',
		cost: 80,
		ailments: [
			'Charm'
		],
		chance: 40,
		debuffs: {
			Attack: BuffValue.GreatlyDecrease,
			Defense: BuffValue.GreatlyDecrease
		}
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'Random Foes',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Galgalim Eyes',
		affinity: 'Almighty',
		type: 'SET',
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Gambler\'s Foresight',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		target: 'All Allies',
		cost: 20,
		buffs: {
			'Accuracy/Evasion': BuffValue.Increase
		},
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Ghastly Wail',
		affinity: 'Almighty',
		type: 'MISC',
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'Random Foes',
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
		target: 'One Foe',
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
		ailments: {
			names: [
				'Death'
			],
			chance: 150
		},
		cost: {
			stat: 'MP',
			amount: 60
		},
		power: {
			amount: 100,
			display: 'Weak',
			type: 'Magic'
		},
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Golden Apple',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		target: 'All Allies',
		cost: 180,
		amount: 'Moderate',
		buffs: {
			Attack: BuffValue.Increase,
			Defense: BuffValue.Increase,
			'Accuracy/Evasion': BuffValue.Increase
		}
	},
	{
		name: 'Good Cheer',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		target: 'All Allies',
		cost: 20,
		ailments: 'All',
		amount: null,
		buffs: {
			Attack: BuffValue.NegateDebuffs,
			Defense: BuffValue.NegateDebuffs,
			'Accuracy/Evasion': BuffValue.NegateDebuffs
		}
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Grand Tack',
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 11
		},
		power: {
			amount: 225,
			display: 'Heavy',
			type: 'Physical'
		},
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'smt',
		unique: true,
		flags: [
			'Afflicted Boost'
		]
	},
	{
		name: 'Great Logos',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 100
		},
		power: {
			amount: 190,
			display: 'Severe',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
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
		aliases: [
			'Watchful'
		],
		affinity: 'Passive',
		type: 'POSTBATTLE',
		amount: 100,
		inactive: true,
		stat: 'EXP'
	},
	{
		name: 'Guardian\'s Eye',
		affinity: 'Special',
		type: 'MISC',
		target: 'All Allies',
		unique: true,
		cost: 255,
		description: 'Adds 3 Blinking Press Turn Icons.'
	},
	{
		name: 'Guiding Tendril',
		affinity: 'Almighty',
		type: 'MISC',
		target: 'All Foes',
		cost: 20,
		description: 'Knockdown attack on all foes (only usable during an Ambush).'
	},
	{
		name: 'Gun Accuracy +5%',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		name: 'Gun Pierce',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Gun attacks ignore affinity resistance except repel.'
	},
	{
		name: 'Gun Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 20,
		element: 'Gun',
		stacks: '+'
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Haggle',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Requests the target to lower bribe cost.'
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Hard Worker',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Obtain more EXP after battles.'
	},
	{
		name: 'Harvest Dance',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		target: 'One Ally',
		cost: 30,
		amount: 'Slight',
		buffs: {
			Defense: BuffValue.GreatlyIncrease
		}
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
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Haunting Rhapsody',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		target: 'All Foes',
		cost: 100,
		ailments: [
			'Confusion'
		],
		chance: 70,
		debuffs: {
			Attack: BuffValue.Decrease,
			Defense: BuffValue.Decrease,
			'Accuracy/Evasion': BuffValue.Decrease
		}
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Headcrush',
		aliases: [
			'Head Crush',
			'Skull Cleave'
		],
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Healing Knowhow',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Enables use of healing/support items.'
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
		target: 'One Ally',
		cost: 30,
		buffs: {
			Attack: BuffValue.Increase,
			Defense: BuffValue.Increase,
			'Accuracy/Evasion': BuffValue.Increase
		},
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Heaven\'s Bow',
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 26
		},
		power: {
			amount: 180,
			display: 'Heavy',
			type: 'Physical'
		},
		target: 'All Foes',
		series: 'smt'
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
		target: 'One Foe',
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
		target: 'All Foes',
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
			type: 'Physical'
		},
		target: 'All Foes',
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
		debuffs: {
			Attack: BuffValue.NegateBuffs,
			Defense: BuffValue.NegateBuffs,
			'Accuracy/Evasion': BuffValue.NegateBuffs
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		target: 'All Foes',
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
		target: 'One Foe',
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
		debuffs: {
			Attack: BuffValue.NegateBuffs,
			Defense: BuffValue.NegateBuffs,
			'Accuracy/Evasion': BuffValue.NegateBuffs
		},
		power: {
			amount: 160,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Hellish Mask',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Hide',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'All Allies',
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
		name: 'High Gun Pleroma',
		affinity: 'Passive',
		type: 'BOOST',
		amount: 35,
		element: 'Gun',
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
		name: 'Hitokoto Storm',
		affinity: 'Force',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Holy Benevolence',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		target: 'All Allies and Stock',
		cost: 27,
		amount: 'Full',
		flags: [
			'Revive'
		]
	},
	{
		name: 'Holy Crucifixion',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		target: 'One Foe',
		cost: 0,
		buffs: {
			Attack: BuffValue.Minimize,
			Defense: BuffValue.Minimize,
			'Accuracy/Evasion': BuffValue.Minimize
		},
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
		name: 'Holy Star',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		target: 'All Allies',
		cost: 10,
		buffs: {
			Attack: BuffValue.NegateDebuffs,
			Defense: BuffValue.NegateDebuffs,
			'Accuracy/Evasion': BuffValue.NegateDebuffs
		},
		auto: []
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
		name: 'Holy Wrath',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Chaos Target Boost'
		],
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Hot Dark Matter',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		target: 'Self',
		cost: 0,
		buffs: {
			Attack: BuffValue.Maximize
		},
		auto: []
	},
	{
		name: 'Humble Blessing',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		target: 'All Allies',
		cost: 15,
		amount: 'Slight'
	},
	{
		name: 'Hyakka Ryouran',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		target: 'All Allies',
		cost: 90,
		buffs: {
			Attack: BuffValue.Increase,
			Defense: BuffValue.Increase,
			'Accuracy/Evasion': BuffValue.Increase
		},
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Allies',
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
		target: 'Random Foes',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Ice Pierce',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Ice attacks ignore affinity resistance except repel.'
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
		target: 'Self',
		cost: 50,
		charge: 'Pierce Charge'
	},
	{
		name: 'Impaler\'s Revenge',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Imposing Stance',
		affinity: 'Special',
		type: 'MISC',
		target: 'Self',
		cost: 48,
		description: 'Remove Press Turn Icon on enemy\'s next turn.'
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Inflaming Divinity',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		target: 'One Ally',
		cost: 50,
		buffs: {
			Attack: BuffValue.GreatlyIncrease,
			Defense: BuffValue.GreatlyIncrease,
			'Accuracy/Evasion': BuffValue.GreatlyIncrease
		},
		auto: []
	},
	{
		name: 'Inspiring Leader',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'Self',
		cost: null,
		description: 'After evading an attack, adds 1 Press Turn Icon at the start of the user\'s next turn.',
		unique: null
	},
	{
		name: 'Intimidate',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Urges a demon lower level or younger than the user to accept the deal.'
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
		name: 'Invitation',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Stocked Ally',
		cost: 65,
		amount: 'Full',
		flags: [
			'Revive',
			'Summon'
		]
	},
	{
		name: 'Iron Judgement',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 8
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
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
		debuffs: {
			Attack: BuffValue.Decrease
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		target: 'One Foe',
		series: 'smt'
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
		debuffs: {
			Defense: BuffValue.Decrease
		},
		power: {
			amount: 160,
			display: 'Medium',
			type: 'Magic'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Jack Tempest',
		affinity: 'Ice',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 70
		},
		flags: [
			'Crit Damage Boost'
		],
		max: 10,
		min: 10,
		power: {
			amount: 28,
			display: 'Weak',
			type: 'Physical'
		},
		target: 'Random Foes',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Jiraiya Dance',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		power: {
			amount: 170,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Judgement',
		affinity: 'Light',
		type: 'SET',
		target: 'One Foe',
		amount: 1,
		cost: null
	},
	{
		name: 'Judgement Light',
		affinity: 'Light',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 56
		},
		flags: [
			'Weakness Instakill'
		],
		power: {
			amount: 160,
			display: 'Severe',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Judgment Light',
		affinity: 'Light',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 60
		},
		flags: [
			'Pierce'
		],
		min: 2,
		max: 5,
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Magic'
		},
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Kamikaze',
		affinity: 'Almighty',
		type: 'MISC',
		unique: null,
		target: 'One Foe',
		cost: 0,
		description: 'Medium Almighty damage to 1 foe. User dies.'
	},
	{
		name: 'Kamui Miracle',
		affinity: 'Recovery',
		type: 'MISC',
		unique: null,
		target: 'All',
		cost: 25,
		description: 'Anything could happen...'
	},
	{
		name: 'Kannabi Veil',
		affinity: 'Support',
		type: 'BARRIER',
		unique: null,
		target: 'All Allies',
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
		target: 'All Foes',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Kidnap',
		affinity: 'Special',
		type: 'MISC',
		target: 'One Foe',
		cost: 0,
		description: 'Recruits a demon younger than the user.'
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		debuffs: {
			Defense: BuffValue.Decrease
		},
		power: {
			amount: 110,
			display: 'Medium',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'King of Tales',
		affinity: 'Support',
		type: 'TAUNT',
		unique: true,
		buffs: {
			Attack: BuffValue.GreatlyIncrease
		},
		cost: 20
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		aliases: [
			'Deathtouch'
		],
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Allies',
		cost: 95,
		barriers: [
			'Repel Phys',
			'Repel Magic'
		]
	},
	{
		name: 'Liftoma',
		affinity: 'Special',
		type: 'MISC',
		target: 'All Allies',
		cost: 10,
		description: 'Levitates party to avoid damage surfaces until next new Kagutsuchi phase.'
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Lightoma',
		affinity: 'Special',
		type: 'MISC',
		target: 'All Allies',
		cost: 10,
		description: 'Illuminates dark areas until next new Kagutsuchi phase.'
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
		target: 'All Allies',
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
		name: 'Light Devourer',
		affinity: 'Dark',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 33
		},
		flags: [
			'Drain HP'
		],
		power: {
			amount: 120,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
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
		target: 'All Allies',
		cost: 150,
		amount: 'Moderate',
		buffs: {
			Attack: BuffValue.NegateDebuffsAndIncrease,
			Defense: BuffValue.NegateDebuffsAndIncrease,
			'Accuracy/Evasion': BuffValue.NegateDebuffsAndIncrease
		}
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Lost Hit',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: {
			names: [
				'Death'
			],
			chance: 60
		},
		cost: {
			stat: 'MP',
			amount: 65
		},
		power: {
			amount: 340,
			display: 'Severe',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Loyalty Slash',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 20
		},
		flags: [
			'Smirk Instakill'
		],
		power: {
			amount: 270,
			display: 'Heavy',
			type: 'Physical'
		},
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Lullaby',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
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
		target: 'Self',
		cost: 100,
		barriers: [
			'Absolute Evasion'
		]
	},
	{
		name: 'Lunar Hurricane',
		affinity: 'Force',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		flags: [
			'Agility Dependent Hits'
		],
		min: 3,
		max: 3,
		power: {
			amount: 70,
			display: 'Weak',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Lunation Flux',
		affinity: 'Recovery',
		type: 'MISC',
		unique: null,
		target: 'Self',
		cost: 10,
		description: 'Slight MP recovery to self. Does not consume a Press Turn Icon.'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Luster Candy',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Allies',
		cost: 150,
		buffs: {
			Attack: BuffValue.Increase,
			Defense: BuffValue.Increase,
			'Accuracy/Evasion': BuffValue.Increase
		},
		auto: []
	},
	{
		name: 'Mabaisudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'All Allies',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'Random Foes',
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
		target: 'Random Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Magaon',
		affinity: 'Support',
		type: 'MISC',
		target: 'One Foe',
		cost: 10,
		description: 'Removes smirk from one foe.'
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Magatsuhi Plunder',
		affinity: 'Special',
		type: 'MISC',
		unique: null,
		target: 'One Ally',
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
		name: 'Magic Torrent',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		max: 6,
		min: 4,
		power: {
			amount: 40,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'Random Foes',
		series: 'smt'
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
		target: 'Random Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
		cost: 25,
		ailments: [
			'Seal'
		],
		chance: 40
	},
	{
		name: 'Makakaja',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Allies',
		cost: 18,
		buffs: {
			Magic: 1
		},
		auto: []
	},
	{
		name: 'Makara Break',
		affinity: 'Support',
		type: 'BARRIERBREAK',
		cost: 18,
		barrier: 'Repel Magic'
	},
	{
		name: 'Makarakarn',
		affinity: 'Support',
		type: 'BARRIER',
		target: 'One Ally',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		name: 'Mana Gain',
		affinity: 'Passive',
		type: 'SPRING',
		amount: '20%',
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
		name: 'Mana Surge',
		affinity: 'Passive',
		type: 'SPRING',
		amount: '30%',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Marakukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Allies',
		cost: 30,
		buffs: {
			Defense: BuffValue.Increase
		},
		auto: []
	},
	{
		name: 'Marakunda',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Foes',
		cost: 30,
		buffs: {
			Defense: BuffValue.Decrease
		},
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Marin Karin',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Masukukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Allies',
		cost: 30,
		buffs: {
			'Accuracy/Evasion': BuffValue.Increase
		},
		auto: []
	},
	{
		name: 'Masukunda',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Foes',
		cost: 30,
		buffs: {
			'Accuracy/Evasion': BuffValue.Decrease
		},
		auto: []
	},
	{
		name: 'Matarukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Allies',
		cost: 30,
		buffs: {
			Attack: BuffValue.Increase
		},
		auto: []
	},
	{
		name: 'Matarunda',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Foes',
		cost: 30,
		buffs: {
			Attack: BuffValue.Decrease
		},
		auto: []
	},
	{
		name: 'Matriarch\'s Love',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		target: 'All Allies',
		cost: 140,
		ailments: 'All',
		amount: 'Moderate',
		buffs: {
			Attack: BuffValue.NegateDebuffs,
			Defense: BuffValue.NegateDebuffs,
			'Accuracy/Evasion': BuffValue.NegateDebuffs
		}
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Media',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'All Allies',
		cost: 30,
		amount: 'Slight'
	},
	{
		name: 'Mediarahan',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'All Allies',
		cost: 150,
		amount: 'Full'
	},
	{
		name: 'Mediarama',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'All Allies',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Megidoplasma',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 41
		},
		power: {
			amount: 160,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Allies',
		cost: 30,
		ailments: 'All',
		amount: null
	},
	{
		name: 'Might',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Triples Critical Rate of user\'s basic attack.'
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Miracle Water',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: null,
		target: 'All Allies',
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
		target: 'All Foes',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Mishaguji Raiden',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: {
			names: [
				'Shock'
			],
			chance: 15
		},
		cost: {
			stat: 'MP',
			amount: 25
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
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
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Mokoi Boomerang',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 108,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 30
		},
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Mother Earth',
		affinity: 'Support',
		type: 'BARRIER',
		unique: true,
		target: 'All Allies',
		cost: 40,
		barriers: [
			'Phys Nullify'
		],
		revertDebuffs: true
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Murderous Glee',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Mute Gaze',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'One Foe',
		cost: 5,
		ailments: [
			'Seal'
		],
		chance: 40
	},
	{
		name: 'Mutudi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Ally',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Needle Rush',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'HP',
			amount: 10
		},
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Needle Shot',
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 4
		},
		power: {
			amount: 75,
			display: 'Weak',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Neo Cadenza',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		target: 'All Allies',
		cost: 24,
		amount: 'Half',
		buffs: {
			Attack: BuffValue.Increase,
			Defense: BuffValue.Increase,
			'Accuracy/Evasion': BuffValue.Increase
		}
	},
	{
		name: 'Nervundi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Ally',
		cost: 3,
		ailments: [
			'Exhaust',
			'Enervate'
		],
		amount: null
	},
	{
		name: 'Never Yield',
		affinity: 'Passive',
		type: 'ENDURE',
		unique: true,
		amount: 1,
		criteria: null
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Nocturnal Flash',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
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
		ailments: [
			'Burn'
		],
		resistance: 'Null'
	},
	{
		name: 'Null Charm',
		aliases: [
			'Null Brainwash'
		],
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Charm'
		],
		resistance: 'Null'
	},
	{
		name: 'Null Confuse',
		aliases: [
			'Null Dizzy'
		],
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Confusion'
		],
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
		ailments: [
			'Despair'
		],
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
		ailments: [
			'Enervate'
		],
		resistance: 'Null'
	},
	{
		name: 'Null Exhaust',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Exhaust'
		],
		resistance: 'Null'
	},
	{
		name: 'Null Fear',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Fear'
		],
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
		ailments: [
			'Freeze'
		],
		resistance: 'Null'
	},
	{
		name: 'Null Gun',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Gun',
		newResistance: 'Null'
	},
	{
		name: 'Null Hunger',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Hunger'
		],
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
		name: 'Null Mind',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Sleep',
			'Confusion',
			'Charm',
			'Seal'
		],
		resistance: 'Null'
	},
	{
		name: 'Null Mirage',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Mirage'
		],
		resistance: 'Null'
	},
	{
		name: 'Null Nerve',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Poison',
			'Bind',
			'Sick',
			'Daze'
		],
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
		ailments: [
			'Poison'
		],
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
		ailments: [
			'Rage'
		],
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
		ailments: [
			'Seal'
		],
		resistance: 'Null'
	},
	{
		name: 'Null Shock',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Shock'
		],
		resistance: 'Null'
	},
	{
		name: 'Null Sleep',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Sleep'
		],
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'All Allies',
		cost: 38,
		amount: 'Full',
		buffs: {
			Attack: BuffValue.NegateDebuffs,
			Defense: BuffValue.NegateDebuffs,
			'Accuracy/Evasion': BuffValue.NegateDebuffs
		}
	},
	{
		name: 'Pandemic Bomb',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
		cost: 15,
		ailments: [
			'Sick'
		],
		chance: 70
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
		debuffs: {
			Defense: BuffValue.Decrease
		},
		power: {
			amount: 170,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Panic Voice',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
		cost: 20,
		ailments: [
			'Confusion'
		],
		chance: 70
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
		target: 'One Foe',
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
		debuffs: {
			Attack: BuffValue.Decrease,
			Defense: BuffValue.Decrease
		},
		power: {
			amount: 180,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Paraselene Blur',
		affinity: 'Light',
		type: 'ATTACK',
		unique: null,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 45
		},
		flags: [
			'After Evading Only'
		],
		min: 4,
		max: 4,
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Patra',
		aliases: [
			'Amrita Drop'
		],
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Ally',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Petradi',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Ally',
		cost: 10,
		ailments: [
			'Stone'
		],
		amount: null
	},
	{
		name: 'Phantom Show',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		target: 'All Foes',
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
		target: 'All Allies',
		cost: 70,
		barriers: [
			'Phys Nullify'
		]
	},
	{
		name: 'Phys Pierce',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Phys attacks ignore affinity resistance except repel.'
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
		debuffs: {
			Defense: BuffValue.Decrease
		},
		power: {
			amount: 130,
			display: 'Weak',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Plasma Discharge',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 22
		},
		max: 1,
		min: 8,
		power: {
			amount: 30,
			display: 'Weak',
			type: 'Magic'
		},
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Poisma',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'One Foe',
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
		target: 'Self',
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
		target: 'One Foe',
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
		name: 'Poison Breath',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
		cost: 15,
		ailments: [
			'Confusion'
		],
		chance: 70
	},
	{
		name: 'Poison Claw',
		aliases: [
			'Venom Claw'
		],
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Poison'
			],
			chance: 70
		},
		cost: {
			stat: 'MP',
			amount: 9
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Poison Master',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Greatly increases effects of Poison.'
	},
	{
		name: 'Poison Mist',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Ally',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Pralaya',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 80,
		ailments: {
			names: [
				'Death'
			],
			chance: 50
		},
		cost: {
			stat: 'HP',
			amount: 25
		},
		power: {
			amount: 290,
			display: 'Severe',
			type: 'Physical'
		},
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Preach',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		target: 'All Foes',
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
		target: 'One Ally',
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
		target: 'One Foe',
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
		debuffs: {
			Attack: BuffValue.NegateBuffsAndDecrease,
			Defense: BuffValue.NegateBuffsAndDecrease,
			'Accuracy/Evasion': BuffValue.NegateBuffsAndDecrease
		},
		power: {
			amount: 210,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt',
		unique: true
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Provoke',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		target: 'All Foes',
		cost: 65,
		buffs: {
			Attack: BuffValue.GreatlyIncrease,
			Defense: BuffValue.GreatlyDecrease
		},
		flags: [
			'Restore MP'
		],
		auto: []
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'Random Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Raidou the Eternal',
		affinity: 'Passive',
		type: 'MISC',
		unique: true,
		target: 'Self',
		cost: null,
		description: 'Increases user\'s damage by 50%.'
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Rakukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'One Ally',
		cost: 8,
		buffs: {
			Defense: BuffValue.Increase
		},
		auto: []
	},
	{
		name: 'Rakunda',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'One Foe',
		cost: 8,
		buffs: {
			Defense: BuffValue.Decrease
		},
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
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Rapid Needle',
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 9
		},
		power: {
			amount: 60,
			display: 'Weak',
			type: 'Physical'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Raptor Guardian',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		target: 'All Allies',
		cost: 10,
		buffs: {
			Attack: BuffValue.NegateDebuffs,
			Defense: BuffValue.NegateDebuffs,
			'Accuracy/Evasion': BuffValue.NegateDebuffs
		},
		auto: []
	},
	{
		name: 'Rebellion',
		affinity: 'Support',
		type: 'CRIT',
		target: 'One Ally',
		cost: 5
	},
	{
		name: 'Rebellion - SMT',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 200,
		cost: {
			stat: 'HP',
			amount: 9
		},
		flags: [
			'+30% Crit Rate'
		],
		power: {
			amount: 200,
			display: 'Heavy',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Rebel Soul',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Showtime guage increases more quickly.'
	},
	{
		name: 'Recalcitrant Execution',
		aliases: [
			'Tenchu-Satsu'
		],
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 150
		},
		flags: [
			'Crit Damage Boost'
		],
		power: {
			amount: 230,
			display: 'Severe',
			type: 'Physical'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Recarm',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Dead Stocked Ally',
		cost: 20,
		amount: 'Half',
		flags: [
			'Revive'
		]
	},
	{
		name: 'Recarmdra',
		affinity: 'Recovery',
		type: 'MISC',
		unique: null,
		target: 'All Allies',
		cost: null,
		description: 'Fully revive and recover party but user\'s HP drops to 1.'
	},
	{
		name: 'Red Capote',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: true,
		target: 'One Ally',
		cost: 8,
		buffs: {
			'Accuracy/Evasion': BuffValue.GreatlyIncrease
		},
		auto: []
	},
	{
		name: 'Refrigerate',
		affinity: 'Ice',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 26
		},
		max: 1,
		min: 8,
		power: {
			amount: 45,
			display: 'Weak',
			type: 'Magic'
		},
		target: 'Random Foes',
		series: 'smt'
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
		target: 'One Ally',
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
		name: 'Repel Gun',
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Gun',
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
		ailments: [
			'Burn'
		],
		resistance: 'Resist'
	},
	{
		name: 'Resist Charm',
		aliases: [
			'Resist Brainwash'
		],
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Charm'
		],
		resistance: 'Resist'
	},
	{
		name: 'Resist Confuse',
		aliases: [
			'Resist Dizzy'
		],
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Confusion'
		],
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
		ailments: [
			'Despair'
		],
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
		ailments: [
			'Enervate'
		],
		resistance: 'Resist'
	},
	{
		name: 'Resist Exhaust',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Exhaust'
		],
		resistance: 'Resist'
	},
	{
		name: 'Resist Fear',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Fear'
		],
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
		aliases: [
			'Anti-Force'
		],
		affinity: 'Passive',
		type: 'DEFENSIVE',
		element: 'Force',
		newResistance: 'Resist'
	},
	{
		name: 'Resist Freeze',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Freeze'
		],
		resistance: 'Resist'
	},
	{
		name: 'Resist Hunger',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Hunger'
		],
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
		ailments: [
			'Mirage'
		],
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
			'Anti-Phys',
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
		ailments: [
			'Poison'
		],
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
		ailments: [
			'Rage'
		],
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
		ailments: [
			'Seal'
		],
		resistance: 'Resist'
	},
	{
		name: 'Resist Shock',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Shock'
		],
		resistance: 'Resist'
	},
	{
		name: 'Resist Sleep',
		affinity: 'Passive',
		type: 'AILDEFENSIVE',
		ailments: [
			'Sleep'
		],
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
		target: 'One Foe',
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
		target: 'One Stocked Ally',
		cost: 100,
		amount: 'Full',
		flags: [
			'Revive',
			'Summon'
		]
	},
	{
		name: 'Revolution',
		affinity: 'Support',
		type: 'CRIT',
		target: 'All',
		cost: 5
	},
	{
		name: 'Riberama',
		affinity: 'Support',
		type: 'MISC',
		target: 'All Allies',
		cost: 35,
		description: 'Prevents enemies from fleeing in the field and increases chance of consecutive encounters until the next new moon.'
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'smt',
		flags: [
			'Pierce'
		]
	},
	{
		name: 'Root of Evil',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 200
		},
		flags: [
			'Negate Charges/Barriers'
		],
		power: {
			amount: 200,
			display: 'Severe',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
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
		name: 'Roundtrip',
		affinity: 'Elec',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: {
			names: [
				'Shock'
			],
			chance: 15
		},
		cost: {
			stat: 'MP',
			amount: 25
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Sabbatma',
		affinity: 'Special',
		type: 'MISC',
		target: 'One Alive Stocked Ally',
		cost: 18,
		description: 'Summons an ally demon.'
	},
	{
		name: 'Sacrifice',
		affinity: 'Almighty',
		type: 'MISC',
		unique: null,
		target: 'Random Foes',
		cost: 0,
		description: 'Heavy strength-based Almighty damage to random foes. User dies.'
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
		debuffs: {
			Attack: BuffValue.Decrease,
			Defense: BuffValue.Decrease
		},
		power: {
			amount: 140,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Safeguard',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Sakuya Sakura',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: true,
		target: 'All Allies',
		cost: 180,
		amount: 'Slight',
		buffs: {
			Attack: BuffValue.Increase,
			Defense: BuffValue.Increase,
			'Accuracy/Evasion': BuffValue.Increase
		},
		flags: [
			'Recover HP/MP'
		]
	},
	{
		name: 'Salvation',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'All Allies',
		cost: 48,
		ailments: 'All',
		amount: 'Full'
	},
	{
		name: 'Samarecarm',
		affinity: 'Recovery',
		type: 'RECOVERY',
		target: 'One Dead Stocked Ally',
		cost: 60,
		amount: 'Full',
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
		debuffs: {
			Attack: BuffValue.Decrease
		},
		flags: [
			'Drain HP'
		],
		power: {
			amount: 120,
			display: 'Weak',
			type: 'Magic'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Scout',
		affinity: 'Special',
		type: 'MISC',
		target: 'One Foe',
		cost: 0,
		description: 'Recruits a female demon younger than the user.'
	},
	{
		name: 'Scratch Dance',
		aliases: [
			'Berserk'
		],
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
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Sea of Chaos',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Law Target Boost'
		],
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Magic'
		},
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
		cost: null,
		description: 'Medium Almighty damage to all foes. User dies.'
	},
	{
		name: 'Self-Righteous Vow',
		affinity: 'Passive',
		type: 'MISC',
		unique: true,
		target: 'Self',
		cost: null,
		description: 'Raises all stats by 1 stage every time own weak point is hit.'
	},
	{
		name: 'Severe Judgement',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 50
		},
		flags: [
			'Smirk Boost'
		],
		power: {
			amount: 28,
			display: 'Weak',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Sexy Dance',
		aliases: [
			'Brain Jack'
		],
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
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
		target: 'Self',
		cost: null,
		description: 'Decreases chance of being hit by a Critical.'
	},
	{
		name: 'Shibaboo',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'One Foe',
		cost: 5,
		ailments: [
			'Bind'
		],
		chance: 50
	},
	{
		name: 'Shield of Justice',
		affinity: 'Support',
		type: 'BARRIER',
		unique: null,
		target: 'All Allies',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Shivering Taboo',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		target: 'All Foes',
		cost: 40,
		ailments: [
			'Bind',
			'Confusion',
			'Sleep',
			'Sick',
			'Poison'
		],
		chance: 70
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
		aliases: [
			'Shock'
		],
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
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'Showtime',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		power: {
			amount: 170,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Silent Prayer',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All',
		cost: 25,
		buffs: {
			Attack: BuffValue.NegateAll,
			Defense: BuffValue.NegateAll,
			'Accuracy/Evasion': BuffValue.NegateAll
		},
		auto: []
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
		debuffs: {
			'Accuracy/Evasion': BuffValue.Decrease
		},
		power: {
			amount: 140,
			display: 'Medium',
			type: 'Magic'
		},
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'All Foes',
		cost: 35,
		ailments: [
			'Sleep',
			'Mirage'
		],
		chance: 40
	},
	{
		name: 'Smile Charge',
		affinity: 'Support',
		type: 'MISC',
		target: 'Self',
		cost: 50,
		description: 'Induces smirk on self. Cannot be used if inflicted with an ailment.'
	},
	{
		name: 'Snake\'s Fangs',
		affinity: 'Gun',
		type: 'ATTACK',
		unique: true,
		accuracy: 100,
		ailments: {
			names: [
				'Bind'
			],
			chance: 60
		},
		cost: {
			stat: 'MP',
			amount: 24
		},
		max: 3,
		min: 2,
		power: {
			amount: 90,
			display: 'Heavy',
			type: 'Physical'
		},
		target: 'Random Foes',
		series: 'smt'
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Son\'s Oath',
		affinity: 'Passive',
		type: 'MISC',
		unique: true,
		target: 'Self',
		cost: null,
		description: 'Increases user\'s damage by 50%.'
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Soul Break',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'Self',
		buff: 'Accuracy/Evasion'
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
		aliases: [
			'Mana Drain'
		],
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Spirit Focus',
		affinity: 'Support',
		type: 'CHARGE',
		target: 'Self',
		cost: 25,
		charge: 'Magic Charge - Spirit Focus'
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
		target: 'One Foe',
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
		target: 'All Foes',
		cost: 50,
		ailments: [
			'Mirage'
		],
		chance: 80,
		debuffs: {
			Defense: BuffValue.Decrease,
			'Accuracy/Evasion': BuffValue.Decrease
		}
	},
	{
		name: 'Stagnant Air - Persona',
		aliases: [
			'Stagnant Air'
		],
		affinity: 'Almighty',
		type: 'SUSCEPTIBILITY',
		target: 'All',
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
		name: 'Star Tarantella',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 70
		},
		cost: {
			stat: 'MP',
			amount: 36
		},
		power: {
			amount: 300,
			display: 'Heavy',
			type: 'Physical'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Stasis Blade',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 50,
		ailments: {
			names: [
				'Bind'
			],
			chance: 65
		},
		cost: {
			stat: 'HP',
			amount: 32
		},
		flags: [
			'+30% Crit Rate',
			'HP Dependent'
		],
		power: {
			amount: 200,
			display: 'Heavy',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Stigmatic Gleam',
		affinity: 'Almighty',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Brand'
			],
			chance: 70
		},
		cost: {
			stat: 'MP',
			amount: 75
		},
		power: {
			amount: 390,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Stinger',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 97,
		ailments: {
			names: [
				'Death'
			],
			chance: 'Level-Based'
		},
		cost: {
			stat: 'HP',
			amount: 12
		},
		power: {
			amount: 180,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Stone Hunt',
		affinity: 'Special',
		type: 'MISC',
		target: 'One Foe',
		cost: 0,
		description: 'Requests gem.'
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
		target: 'Random Foes',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Stun Gaze',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'One Foe',
		cost: 5,
		ailments: [
			'Bind'
		],
		chance: 40
	},
	{
		name: 'Stun Needles',
		aliases: [
			'Stun Needle'
		],
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Bind'
			],
			chance: 60
		},
		cost: {
			stat: 'MP',
			amount: 11
		},
		max: 3,
		min: 1,
		power: {
			amount: 75,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'Random Foes',
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
		target: 'One Ally',
		cost: 8,
		buffs: {
			'Accuracy/Evasion': BuffValue.Increase
		},
		auto: []
	},
	{
		name: 'Sukunda',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'One Foe',
		cost: 8,
		buffs: {
			'Accuracy/Evasion': BuffValue.Decrease
		},
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
		target: 'One Ally',
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Tarukaja',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'One Ally',
		cost: 8,
		buffs: {
			Attack: BuffValue.Increase
		},
		auto: []
	},
	{
		name: 'Tarunda',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'One Foe',
		cost: 8,
		buffs: {
			Attack: BuffValue.Decrease
		},
		auto: []
	},
	{
		name: 'Tathlum Shot',
		affinity: 'Gun',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 7
		},
		power: {
			amount: 135,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Taunt',
		affinity: 'Support',
		type: 'TAUNT',
		cost: 10
	},
	{
		name: 'Taunting Aura',
		affinity: 'Support',
		type: 'TAUNT',
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
		target: 'One Foe',
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
		target: 'Self',
		cost: null,
		description: 'Increases duration of Kaja-type buff skills when landing a Critical.'
	},
	{
		name: 'Tekisatsu',
		affinity: 'Phys',
		type: 'ATTACK',
		unique: true,
		accuracy: 97,
		ailments: {
			names: [
				'Death'
			],
			chance: 'Level-Based'
		},
		cost: {
			stat: 'HP',
			amount: 12
		},
		power: {
			amount: 180,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Tentarafoo',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
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
		target: 'Random Foes',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Tetanus Cut',
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 98,
		ailments: {
			names: [
				'Sick'
			],
			chance: 70
		},
		cost: {
			stat: 'MP',
			amount: 11
		},
		power: {
			amount: 120,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Tetra Break',
		aliases: [
			'Tetrabreak'
		],
		affinity: 'Support',
		type: 'BARRIERBREAK',
		cost: 18,
		barrier: 'Repel Phys'
	},
	{
		name: 'Tetraja',
		affinity: 'Support',
		type: 'BARRIER',
		target: 'One Ally',
		cost: 24,
		barriers: [
			'Tetraja'
		]
	},
	{
		name: 'Tetrakarn',
		affinity: 'Support',
		type: 'BARRIER',
		target: 'One Ally',
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
		target: 'Random Foes',
		series: 'smt'
	},
	{
		name: 'The Man\'s Way',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: null,
		target: 'All Foes',
		ailments: [
			'Dizzy',
			'Down'
		],
		chance: 80,
		cost: 30
	},
	{
		name: 'Thermopylae',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Allies',
		cost: 30,
		flags: [
			'Surrounded Only'
		],
		buffs: {
			Attack: BuffValue.Increase,
			Defense: BuffValue.Increase,
			'Accuracy/Evasion': BuffValue.Increase
		},
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
		name: 'Thunder Gods',
		affinity: 'Elec',
		type: 'ATTACK',
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 40
		},
		flags: [
			'Smirk Pierce'
		],
		power: {
			amount: 210,
			display: 'Severe',
			type: 'Magic'
		},
		target: 'One Foe',
		series: 'smt'
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
		target: 'Random Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Touch n\' Go',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Toxic Cloud',
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
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
		target: 'All Foes',
		cost: 15,
		ailments: [
			'Poison'
		],
		chance: 85,
		debuffs: {
			Defense: BuffValue.Decrease
		}
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Traesto',
		affinity: 'Support',
		type: 'MISC',
		target: 'All Allies',
		cost: 18,
		description: 'Instantly escape from a dungeon.'
	},
	{
		name: 'Trafuri',
		affinity: 'Special',
		type: 'MISC',
		target: 'All Allies',
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
		target: 'Self',
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
		target: 'All Foes',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'True Replication',
		affinity: 'Special',
		type: 'MISC',
		unique: null,
		target: 'Self',
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
		target: 'One Foe',
		series: 'persona'
	},
	{
		name: 'Twosome Time',
		aliases: [
			'Bullet Time'
		],
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 108,
		ailments: {
			names: [
				'Confusion'
			],
			chance: 30
		},
		cost: {
			stat: 'MP',
			amount: 10
		},
		power: {
			amount: 125,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'All Foes',
		series: 'smt'
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
		target: 'One Ally',
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
		ailments: [
			'Confusion',
			'Fear',
			'Rage',
			'Despair'
		],
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
		debuffs: {
			Attack: BuffValue.GreatlyDecrease,
			Defense: BuffValue.GreatlyDecrease,
			'Accuracy/Evasion': BuffValue.GreatlyDecrease
		},
		power: {
			amount: 150,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Vault Guardian',
		affinity: 'Support',
		type: 'SUPPORT',
		unique: null,
		target: 'All Allies',
		cost: 20,
		buffs: {
			Defense: BuffValue.Increase
		},
		auto: [
			'Repel Phys',
			'Repel Magic'
		]
	},
	{
		name: 'Venom Bite',
		aliases: [
			'Poisonous Bite'
		],
		affinity: 'Phys',
		type: 'ATTACK',
		accuracy: 75,
		ailments: {
			names: [
				'Poison'
			],
			chance: 40
		},
		cost: {
			stat: 'HP',
			amount: 18
		},
		flags: [
			'+20% Crit Rate'
		],
		power: {
			amount: 150,
			display: 'Medium',
			type: 'Physical'
		},
		target: 'One Foe',
		series: 'smt'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Venomous Raga',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: true,
		target: 'All Foes',
		cost: 65,
		ailments: [
			'Poison',
			'Sick',
			'Bind'
		],
		chance: 70,
		debuffs: {
			Attack: BuffValue.GreatlyDecrease
		}
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
		target: 'All Foes',
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
		target: 'One Foe',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
		series: 'persona'
	},
	{
		name: 'Wage War',
		aliases: [
			'Valiant Dance'
		],
		affinity: 'Ailment',
		type: 'AILMENT',
		target: 'All Foes',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'War Cry',
		affinity: 'Support',
		type: 'SUPPORT',
		target: 'All Foes',
		cost: 65,
		buffs: {
			Attack: BuffValue.Decrease,
			Defense: BuffValue.Decrease
		},
		auto: []
	},
	{
		name: 'Weakness Scan',
		affinity: 'Passive',
		type: 'NAVI',
		unique: null,
		description: 'Reveal an enemy\'s affinity at the start of battle.'
	},
	{
		name: 'What Comes After Four',
		affinity: 'Almighty',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		ailments: {
			names: [
				'Death'
			],
			chance: 60
		},
		cost: {
			stat: 'MP',
			amount: 20
		},
		power: {
			amount: 150,
			display: 'Weak',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Whirlwind',
		affinity: 'Force',
		type: 'ATTACK',
		unique: true,
		accuracy: 98,
		cost: {
			stat: 'MP',
			amount: 25
		},
		power: {
			amount: 155,
			display: 'Heavy',
			type: 'Magic'
		},
		target: 'All Foes',
		series: 'smt'
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Wild Dance',
		affinity: 'Ailment',
		type: 'AILMENT',
		unique: null,
		target: 'All Foes',
		cost: 0,
		ailments: [
			'Confusion'
		],
		chance: 65
	},
	{
		name: 'Will of Flame',
		affinity: 'Support',
		type: 'CHARGE',
		target: 'All Allies',
		cost: 30,
		charge: 'Fire Pierce'
	},
	{
		name: 'Will of Frost',
		affinity: 'Support',
		type: 'CHARGE',
		target: 'All Allies',
		cost: 30,
		charge: 'Ice Pierce'
	},
	{
		name: 'Will of Thunder',
		affinity: 'Support',
		type: 'CHARGE',
		target: 'All Allies',
		cost: 30,
		charge: 'Elec Pierce'
	},
	{
		name: 'Will of Wind',
		affinity: 'Support',
		type: 'CHARGE',
		target: 'All Allies',
		cost: 30,
		charge: 'Force Pierce'
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
		aliases: [
			'Wing Buffet',
			'Wing Flap',
			'Wingbeat'
		],
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
		target: 'Random Foes',
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
		target: 'One Foe',
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
		target: 'All Allies',
		cost: 10,
		flags: [
			'Cure Non-Special Ailments'
		],
		buffs: {},
		auto: [
			'Accuracy/Evasion'
		]
	},
	{
		name: 'Witness Me',
		affinity: 'Support',
		type: 'TAUNT',
		unique: true,
		buffs: {
			'Accuracy/Evasion': BuffValue.GreatlyIncrease
		},
		cost: 5
	},
	{
		name: 'Workaholic',
		affinity: 'Passive',
		type: 'MISC',
		target: 'Self',
		cost: null,
		description: 'Obtain much more EXP after battles.'
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
		target: 'Random Foes',
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
		target: 'All Foes',
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
		target: 'All Foes',
		series: 'smt'
	},
	{
		name: 'Youthful Wind',
		affinity: 'Recovery',
		type: 'RECOVERY',
		unique: null,
		target: 'All Allies',
		cost: 25,
		amount: 'Moderate',
		buffs: {
			'Accuracy/Evasion': BuffValue.Increase
		}
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Zanbarion',
		aliases: [
			'True Zandyne'
		],
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	},
	{
		name: 'Ziobarion',
		aliases: [
			'Thunder Reign',
			'True Ziodyne'
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
		target: 'One Foe',
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
		target: 'One Foe',
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
		target: 'One Foe',
		series: 'smt'
	}
];

export default skillData;