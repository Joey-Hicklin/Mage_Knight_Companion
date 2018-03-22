import {andOrObjFilter, objFilter} from '../../functions.js';

import * as blitz from '../../Scenarios/blitz.js';
import * as druidnights from '../../Scenarios/druidNights.js';
import * as firstrecon from '../../Scenarios/firstRecon.js';
import * as full from '../../Scenarios/full.js';
import * as mines from '../../Scenarios/mines.js';

import {mapDefinitions} from '../../Decks/mapTiles.js';
// import advancedActionDeck from '../../Decks/advancedAction.js';
// import spellDeck from '../../Decks/spell.js';
// import artifactDeck from '../../Decks/artifact.js';
// import unitDeck from '../../Decks/unit.js';
// import skillDeck from '../../Decks/skill.js';


export const SELECT_CHARACTER = 'SELECT_CHARACTER';
export const DESELECT_CHARACTER = 'DESELECT_CHARACTER';
export const SELECT_SCENARIO = 'SELECT_SCENARIO';

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const ENTER_APPLICATION = 'ENTER_APPLICATION';
export const EXIT_APPLICATION = 'EXIT_APPLICATION';

export const RESET_TURNS = 'RESET_TURNS';
export const TAKE_TURN = 'TAKE_TURN';
export const END_TURN = 'END_TURN';

export const CREATE_MAP_DECK_G = 'CREATE_MAP_DECK_G';
export const CREATE_MAP_DECK_B = 'CREATE_MAP_DECK_B';
export const CREATE_AA_DECK = 'CREATE_AA_DECK';
export const CREATE_UNIT_DECK = 'CREATE_UNIT_DECK';
export const CREATE_SPELL_DECK = 'CREATE_SPELL_DECK';
export const CREATE_ARTIFACT_DECK = 'CREATE_ARTIFACT_DECK';

export const SET_TURN_ORDER = 'SET_TURN_ORDER';
export const RESET_ROUNDS = 'RESET_ROUNDS';


//-------   FOR FUTURE CUSTOM TOKEN SELECTION OPTION   --------\\

// export const CREATE_MAURAUDING_ORCS = 'CREATE_MAURAUDING_ORCS';
// export const CREATE_MAGE_TOWER = 'CREATE_MAGE_TOWER';
// export const CREATE_DUNGEON = 'CREATE_DUNGEON';
// export const CREATE_DRACONUM = 'CREATE_DRACONUM';
// export const CREATE_KEEP = 'CREATE_KEEP';
// export const CREATE_ANCIENT_RUINS = 'CREATE_ANCIENT_RUINS';
// export const CREATE_CITY = 'CREATE_CITY';

export const SHUFFLE_MAURAUDING_ORCS = 'SHUFFLE_MAURAUDING_ORCS';
export const SHUFFLE_MAGE_TOWER = 'SHUFFLE_MAGE_TOWER';
export const SHUFFLE_DUNGEON = 'SHUFFLE_DUNGEON';
export const SHUFFLE_DRACONUM = 'SHUFFLE_DRACONUM';
export const SHUFFLE_KEEP = 'SHUFFLE_KEEP';
export const SHUFFLE_ANCIENT_RUINS = 'SHUFFLE_ANCIENT_RUINS';
export const SHUFFLE_CITY = 'SHUFFLE_CITY';
export const DRAW_TOKEN = 'DRAW_TOKEN';
export const SHOW_TOKEN = 'SHOW_TOKEN';
export const HIDE_TOKEN = 'HIDE_TOKEN';

export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const SORT_DECK = 'SORT_DECK';
export const DEAL_DECK = 'DEAL_DECK';
export const DESTROY_DECK = 'DESTROY_DECK';
export const INITIALIZE_GAME = 'INITIALIZE_GAME';
export const INITIALIZE_DECK = 'INITIALIZE_DECK';
export const SET_RULES = 'SET_RULES';
export const CLEAR_RULES = 'CLEAR_RULES';

export const START_MAP_GRID = 'START_MAP_GRID';
export const DRAW_MAP_TILE = 'DRAW_MAP_TILE';



const mapG = objFilter((val, key)=>{return(val[0] == 'G')}, mapDefinitions);
const mapB = objFilter((val, key)=>{return(val[0] == 'B')}, mapDefinitions);
const mapC = objFilter((val, key)=>{return(val[0] == 'C')}, mapDefinitions);


export const selectCharacter = (data) => ({
	type: SELECT_CHARACTER,
	payload: data
});

export const deselectCharacter = (data) => ({
	type: DESELECT_CHARACTER,
	payload: data
});

export const changePage = (data) => ({
	type: CHANGE_PAGE,
	payload: data
});

export const enterApplication = () => ({
	type: ENTER_APPLICATION
});

export const exitToTitle = () => ({
	type: EXIT_APPLICATION
});

export const selectScenario = (scenario) => ({
	type: SELECT_SCENARIO,
	payload: scenario
});

export const resetTurns = (data) => ({
	type: RESET_TURNS,
	payload: data
});

export const takeTurn = (data) => ({
	type: TAKE_TURN,
	payload: data
});

export const endTurn = (data) => {
	return({
		type: END_TURN,
		payload: data
	})
};

export const createMapDeckG = (data) => {
	return({
		type: CREATE_MAP_DECK_G,
		payload: data
	})
};

export const createMapDeckB = (data) => {
	return({
		type: CREATE_MAP_DECK_B,
		payload: data
	})
};

export const startMapGrid = (data) => {
	return({
		type: START_MAP_GRID,
		payload: data
	})
};

export const drawMapTile = (location, tile, spaces) => {
	return({
		type: DRAW_MAP_TILE,
		payload: {
			location,
			tile,
			spaces
		}
	})
};

export const createDeck = (data) => {
	return({
		type: CREATE_DECK,
		payload: data
	})
};

export const shuffleDeck = (data) => {
	return({
		type: SHUFFLE_DECK,
		payload: data
	})
};

export const sortDeck = (data) => {
	return({
		type: SORT_DECK,
		payload: data
	})
};

export const dealDeck = (data) => {
	return({
		type: DEAL_DECK,
		payload: data
	})
};

export const destroyDeck = (data) => {
	return({
		type: DESTROY_DECK,
		payload: data
	})
};

export const setRules = (data) => {
	return({
		type: SET_RULES,
		payload: data
	});
};

export const clearRules = () => {
	return({
		type: CLEAR_RULES
	});
};

export const drawToken = (type, location, spaceIndex, token) => {
	return({
		type: DRAW_TOKEN,
		payload: {
			type,
			location,
			spaceIndex,
			token
		}
	});
};

export const showToken = (token) => {
	return({
		type: SHOW_TOKEN,
		payload: token
	});
};

export const hideToken = (token) => {
	return({
		type: HIDE_TOKEN,
		payload: token
	});
};

export const shuffleGreen = () => {
	return({
		type: SHUFFLE_MAURAUDING_ORCS
	});
};

export const shufflePurple = () => {
	return({
		type: SHUFFLE_MAGE_TOWER
	});
};

export const shuffleWhite = () => {
	return({
		type: SHUFFLE_CITY
	});
};

export const shuffleYellow = () => {
	return({
		type: SHUFFLE_ANCIENT_RUINS
	});
};

export const shuffleGray = () => {
	return({
		type: SHUFFLE_KEEP
	});
};

export const shuffleBrown = () => {
	return({
		type: SHUFFLE_DUNGEON
	});
};

export const shuffleRed = () => {
	return({
		type: SHUFFLE_DRACONUM
	});
};

export const setTurnOrder = (data) => {
	return({
		type: SET_TURN_ORDER,
		payload: data
	})
}

export const resetRounds = () => {
	return({
		type: RESET_ROUNDS
	})
}

export const initiateDrawMapTile = (location, tile, space, tokens) => (dispatch) => {


	dispatch(drawMapTile(location, tile, space));

	for (var i = space.length - 1; i >= 3; i--) {

		switch(space[i]){

			case "MO":
				dispatch(drawToken("MO", location, i, tokens.mauraudingOrcs[0]));
				break;
			case "K":
				dispatch(drawToken("K", location, i, tokens.keep[0]));
				break;
			case "MT":
				dispatch(drawToken("MT", location, i, tokens.mageTower[0]));
				break;
			case "DUN":
				dispatch(drawToken("DUN", location, i, tokens.dungeon[0]));
				break;
			case "AR":
				dispatch(drawToken("AR", location, i, tokens.ancientRuin[0]));
				break;
			case "CB":
			case "CG":
			case "CW":
			case "CR":
				dispatch(drawToken("C", location, i, tokens.city[0]));
				break;
			case "DRA":
				dispatch(drawToken("DRA", location, i, tokens.draconum[0]));
				break;
			
		}
	}

	return('Success');
};

export const initGame = () => {
	return({
		type: INITIALIZE_GAME
	})
}

export const initializeGame = (data) => (dispatch) => {

	const regex = /[A-Z]/g.exec(data.scenario);
	const fileName = regex !== null ? eval(data.scenario.slice(0, regex.index)) : eval(data.scenario);
		// PURPOSE:  if camelCase is found, cut the Coop or Conquest option out of the filename

	const rules = fileName[data.scenario + data.charNum];
		// PURPOSE: load appropriate object with game setup instructions

	dispatch(setRules(rules));
		// PURPOSE: copy the rules to Redux state

	if(rules.filtering.mapG[1].length == 0){
			// IF there is no OR-based sorting, only AND-based
		dispatch(createMapDeckG({

			// TODO - destructure filtering into reducer
			deck: objFilter((value,key)=> {
		      return(rules.filtering.mapG[0].every(val=> value.indexOf(val) !== -1))
		    }, mapG),
			rules: rules.greenTiles,
			name: rules.name
		}));
	}else{
		dispatch(createMapDeckG({
			deck: andOrObjFilter(rules.filtering.mapG[0], mapG, rules.filtering.mapG[1]),
			rules: rules.greenTiles,
			name: rules.name
		}));
	}

	dispatch(createMapDeckB({
		deckB: objFilter((value,key)=> {
	      return(rules.filtering.mapB[0].every(val=> value.indexOf(val) !== -1))
	    }, mapB),
		deckC: objFilter((value,key)=> {
	      return(rules.filtering.mapC[0].every(val=> value.indexOf(val) !== -1))
	    }, mapC),
		rulesB: rules.brownTiles,
		rulesC: rules.cityTiles
	}));

	dispatch(startMapGrid(rules.mapShape));

	dispatch(resetRounds())
	dispatch(resetTurns());
	dispatch(shuffleGreen());
	dispatch(shufflePurple());
	dispatch(shuffleWhite());
	dispatch(shuffleYellow());
	dispatch(shuffleGray());
	dispatch(shuffleBrown());
	dispatch(shuffleRed());

	dispatch(initGame());


	return('Success');
};
