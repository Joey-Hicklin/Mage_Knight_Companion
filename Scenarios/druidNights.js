export const druidnights1 = {
	name: 'druidNights',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'W',
	greenTiles: 7,
	brownTiles: 2,
	cityTiles: 1,
	cityLevels: ['Friendly Shield1 noLeader'],
	cityColors: ['green'],
	dummy: 'standard solo',
	tactics: 'after2',
	ending: 'All players have performed incantation during second night, or end of time',
	scoring: 'fame + achievements',
	special: [
		'Remove map tiles without magical glades',
		'When ending movement on glade, may activate: Mark with shield (each player may have 1 shield)',
		'Once during night, may perform incantation as action: --Summon 1 brown/red (1st/2nd night) for each glade with your shield.  --Fight; undefeated disappear (but with no fame).  --Double fame for defeated enemies.  --Get 1/2 (1st/2nd night) random crystals for each summoned (even if not defeated).',
		'At end of night, remove all shields from glades'
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

export const druidnights2 = {
	name: 'druidNights',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'W',
	greenTiles: 8,
	brownTiles: 2,
	cityTiles: 1,
	cityLevels: ['Friendly Shield1 noLeader'],
	cityColors: ['green'],
	dummy: null,
	tactics: 'normal',
	ending: 'All players have performed incantation during second night, or end of time',
	scoring: 'fame + achievements + titles',
	special: [
		'Remove map tiles without magical glades',
		'When ending movement on glade, may activate: Mark with shield (each player may have 1 shield)',
		'Once during night, may perform incantation as action: --Summon 1 brown/red (1st/2nd night) for each glade with your shield.  --Fight; undefeated disappear (but with no fame).  --Double fame for defeated enemies.  --Get 1/2 (1st/2nd night) random crystals for each summoned (even if not defeated).',
		'At end of night, remove all shields from glades'
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

export const druidnights3 = {
	name: 'druidNights',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'W',
	greenTiles: 9,
	brownTiles: 3,
	cityTiles: 1,
	cityLevels: ['Friendly Shield1 noLeader'],
	cityColors: ['green'],
	dummy: null,
	tactics: 'normal',
	ending: 'All players have performed incantation during second night, or end of time',
	scoring: 'fame + achievements + titles',
	special: [
		'Remove map tiles without magical glades',
		'When ending movement on glade, may activate: Mark with shield (each player may have 1 shield)',
		'Once during night, may perform incantation as action: --Summon 1 brown/red (1st/2nd night) for each glade with your shield.  --Fight; undefeated disappear (but with no fame).  --Double fame for defeated enemies.  --Get 1/2 (1st/2nd night) random crystals for each summoned (even if not defeated).',
		'At end of night, remove all shields from glades'
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

export const druidnights4 = {
	name: 'druidNights',
	rounds: 4,
	roundStart: 'D',
	mapShape: 'O4',
	greenTiles: 11,
	brownTiles: 4,
	cityTiles: 1,
	cityLevels: ['Friendly Shield1 noLeader'],
	cityColors: ['green'],
	dummy: null,
	tactics: 'normal',
	ending: 'All players have performed incantation during second night, or end of time',
	scoring: 'fame + achievements + titles',
	special: [
		'Remove map tiles without magical glades',
		'When ending movement on glade, may activate: Mark with shield (each player may have 1 shield)',
		'Once during night, may perform incantation as action: --Summon 1 brown/red (1st/2nd night) for each glade with your shield.  --Fight; undefeated disappear (but with no fame).  --Double fame for defeated enemies.  --Get 1/2 (1st/2nd night) random crystals for each summoned (even if not defeated).',
		'At end of night, remove all shields from glades'
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
