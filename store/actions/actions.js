import {andOrObjFilter, objFilter} from '../../functions.js';

import * as blitz from '../../Scenarios/blitz.js';
import * as druidnights from '../../Scenarios/druidNights.js';
import * as firstrecon from '../../Scenarios/firstRecon.js';
import * as full from '../../Scenarios/full.js';
import * as mines from '../../Scenarios/mines.js';

import {mapG} from '../../Decks/mapG.js';
import {mapB} from '../../Decks/mapB.js';
import {mapC} from '../../Decks/mapC.js';
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

export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const SORT_DECK = 'SORT_DECK';
export const DEAL_DECK = 'DEAL_DECK';
export const DESTROY_DECK = 'DESTROY_DECK';
export const INITIALIZE_GAME = 'INITIALIZE_GAME';
export const INITIALIZE_DECK = 'INITIALIZE_DECK';
export const SET_RULES = 'SET_RULES';
export const CLEAR_RULES = 'CLEAR_RULES';




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

	dispatch(resetRounds())
	dispatch(resetTurns());
	dispatch(shuffleGreen());
	dispatch(shufflePurple());
	dispatch(shuffleWhite());
	dispatch(shuffleYellow());
	dispatch(shuffleGray());
	dispatch(shuffleBrown());
	dispatch(shuffleRed());



	return('Success');
};
