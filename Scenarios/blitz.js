export const blitz1 = {
	name: 'blitz',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'W',
	greenTiles: 5,
	brownTiles: 2,
	cityTiles: 1,
	cityLevels: [5],
	cityColors: null,
	dummy: 'standard solo',
	tactics: 'after2',
	ending: 'Last city conquered',
	scoring: 'fame + achievements + time + bonus + coop goal[cities]',
	special: ['Blitz Rules'],
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

export const blitzCoop2 = {
	name: 'blitz',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'O',
	greenTiles: 7,
	brownTiles: 3,
	cityTiles: 2,
	cityLevels: [5,8],
	cityColors: null,
	dummy: 'standard',
	tactics: 'first1',
	ending: 'Last city conquered',
	scoring: 'min fame + max achievements + time bonus + coop goal[cities] + Add 10 if all players are leaders of a city',
	special: ['Blitz Rules'],
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

export const blitzCoop3 = {
	name: 'blitz',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'O',
	greenTiles: 8,
	brownTiles: 5,
	cityTiles: 3,
	cityLevels: [5,8,11],
	cityColors: null,
	dummy: 'standard',
	tactics: 'first1',
	ending: 'Last city conquered',
	scoring: 'min fame + max achievements + time bonus + coop goal[cities] + Add 10 if all players are leaders of a city',
	special: ['Blitz Rules'],
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

export const blitzConquest2 = {
	name: 'blitz',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'W',
	greenTiles: 6,
	brownTiles: 3,
	cityTiles: 2,
	cityLevels: [3,3],
	cityColors: null,
	dummy: null,
	tactics: 'normal',
	ending: 'Last city conquered',
	scoring: 'fame + achievements + titles + goal[cities]',
	special: ['Blitz Rules'],
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

export const blitzConquest3 = {
	name: 'blitz',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'W',
	greenTiles: 7,
	brownTiles: 5,
	cityTiles: 3,
	cityLevels: [3,3,3],
	cityColors: null,
	dummy: null,
	tactics: 'normal',
	ending: 'Last city conquered',
	scoring: 'fame + achievements + titles + goal[cities]',
	special: ['Blitz Rules'],
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

export const blitzConquest4 = {
	name: 'blitz',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'O',
	greenTiles: 9,
	brownTiles: 7,
	cityTiles: 4,
	cityLevels: [3,3,3,3],
	cityColors: null,
	dummy: null,
	tactics: 'normal',
	ending: 'Last city conquered',
	scoring: 'fame + achievements + titles + goal[cities]',
	special: ['Blitz Rules'],
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
