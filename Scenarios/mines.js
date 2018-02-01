export const mines1 = {
	name: 'mines',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'W',
	greenTiles: 7,
	brownTiles: 2,
	cityTiles: 1,
	cityLevels: ['Friendly Shield1 noLeader'],
	cityColors: ['red'],
	dummy: 'standard solo',
	tactics: 'after2',
	ending: 'All mines conquered',
	scoring: 'fame + achievements + Add 4 per country mine + Add 7 per core mine',
	special: [
		'Remove map tiles without mines',
		'Revealed country mine: 1 green (face up) + 1 brown (face down)',
		'Revealed core mine: 1 red (face up) + 1 brown (face down)',
		'Liberate mine: Enter as action; fight w/ units; night rules; remaining tokens stay',
		'If mine liberated: Mark and +1 reputation (+2 for core)',
		'Mines only produce crystals once liberated',
		'Start of round, gain 1 crystal for each you\'ve marked'
	],
	filtering: {
		mapG: [['BG'],[]],
		mapB: [['BG'],[]],
		mapC: [['BG'],[]],
		advancedAction: [[],[]],
		spell: [[],[]],
		artifact: [[],[]],
		unit: [[],[]],
		skill: [[],[]],
	}
}

export const mines2 = {
	name: 'mines',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'W',
	greenTiles: 8,
	brownTiles: 2,
	cityTiles: 1,
	cityLevels: ['Friendly Shield1 noLeader'],
	cityColors: ['red'],
	dummy: null,
	tactics: 'normal',
	ending: 'All mines conquered',
	scoring: 'fame + achievements + titles + Add 4 per country mine + Add 7 per core mine + Add 5 for most pts from mines',
	special: [
		'Remove map tiles without mines',
		'Revealed country mine: 1 green (face up) + 1 brown (face down)',
		'Revealed core mine: 1 red (face up) + 1 brown (face down)',
		'Liberate mine: Enter as action; fight w/ units; night rules; remaining tokens stay',
		'If mine liberated: Mark and +1 reputation (+2 for core)',
		'Mines only produce crystals once liberated',
		'Start of round, gain 1 crystal for each you\'ve marked'
	],
	filtering: {
		mapG: [['BG'],[]],
		mapB: [['BG'],[]],
		mapC: [['BG'],[]],
		advancedAction: [[],[]],
		spell: [[],[]],
		artifact: [[],[]],
		unit: [[],[]],
		skill: [[],[]],
	}
}

export const mines3 = {
	name: 'mines',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'W',
	greenTiles: 9,
	brownTiles: 3,
	cityTiles: 1,
	cityLevels: ['Friendly Shield1 noLeader'],
	cityColors: ['red'],
	dummy: null,
	tactics: 'normal',
	ending: 'All mines conquered',
	scoring: 'fame + achievements + titles + Add 4 per country mine + Add 7 per core mine + Add 5 for most pts from mines',
	special: [
		'Remove map tiles without mines',
		'Revealed country mine: 1 green (face up) + 1 brown (face down)',
		'Revealed core mine: 1 red (face up) + 1 brown (face down)',
		'Liberate mine: Enter as action; fight w/ units; night rules; remaining tokens stay',
		'If mine liberated: Mark and +1 reputation (+2 for core)',
		'Mines only produce crystals once liberated',
		'Start of round, gain 1 crystal for each you\'ve marked'
	],
	filtering: {
		mapG: [['BG'],[]],
		mapB: [['BG'],[]],
		mapC: [['BG'],[]],
		advancedAction: [[],[]],
		spell: [[],[]],
		artifact: [[],[]],
		unit: [[],[]],
		skill: [[],[]],
	}
}

export const mines4 = {
	name: 'mines',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'O',
	greenTiles: 11,
	brownTiles: 4,
	cityTiles: 1,
	cityLevels: ['Friendly Shield1 noLeader'],
	cityColors: ['red'],
	dummy: null,
	tactics: 'normal',
	ending: 'All mines conquered',
	scoring: 'fame + achievements + titles + Add 4 per country mine + Add 7 per core mine + Add 5 for most pts from mines',
	special: [
		'Remove map tiles without mines',
		'Revealed country mine: 1 green (face up) + 1 brown (face down)',
		'Revealed core mine: 1 red (face up) + 1 brown (face down)',
		'Liberate mine: Enter as action; fight w/ units; night rules; remaining tokens stay',
		'If mine liberated: Mark and +1 reputation (+2 for core)',
		'Mines only produce crystals once liberated',
		'Start of round, gain 1 crystal for each you\'ve marked'
	],
	filtering: {
		mapG: [['BG'],[]],
		mapB: [['BG'],[]],
		mapC: [['BG'],[]],
		advancedAction: [[],[]],
		spell: [[],[]],
		artifact: [[],[]],
		unit: [[],[]],
		skill: [[],[]],
	}
}
