import {combineReducers} from 'redux';
import {shuffle} from '../../functions.js';

import mauraudingOrcsStock from '../../Tokens/mauraudingOrcs.js';
import mageTowerStock from '../../Tokens/mageTower.js';
import keepStock from '../../Tokens/keep.js';
import dungeonStock from '../../Tokens/dungeon.js';
import draconumStock from '../../Tokens/draconum.js';
import cityStock from '../../Tokens/city.js';
import ancientRuinsStock from '../../Tokens/ancientRuins.js';


export const tracker = () => {

	const page = (state='Map Tiles', action) => {
		switch(action.type) {
			case 'CHANGE_PAGE':
				return action.payload;
				break;
			default:
				return state;
				break;
		}
	}

	const entered = (state=false, action) => {
		switch(action.type) {
			case 'ENTER_APPLICATION':
				return true;
				break;
			case 'EXIT_APPLICATION':
				return false;
				break;
			default:
				return state;
				break;
		}
	}

	const continueGame = (state=false, action) => {
		switch(action.type) {
			case 'CREATE_MAP_DECK_G':
				return (!state ? !state : state);
				break;
			default:
				return state;
				break;
		}
	}

	const roundStarted = (state=false, action) => {
		switch(action.type) {
			case 'SET_TURN_ORDER':
				return true;
				break;
			case 'END_ROUND':
				return false;
				break;
			case 'RESET_ROUNDS':
				return false;
				break;
			default:
				return state;
				break;
		}
	}

	const scenario = (state='firstrecon', action) => {
		switch(action.type) {
			case 'SELECT_SCENARIO':
				return action.payload;
				break;
			default:
				return state;
				break;
		}
	}

	const rules = (state={}, action) => {
		switch(action.type) {
			case 'SET_RULES':
				return action.payload;
				break;
			case 'CLEAR_RULES':
				return {};
				break;
			default:
				return state;
				break;
		}
	}

	const mapTiles = (state=[], action) => {
		switch(action.type) {

			case 'CREATE_MAP_DECK_G':

				if (action.payload.name !== 'firstRecon'){
					const shuffled = shuffle(Object.keys(action.payload.deck));

					shuffled.length - action.payload.rules <= 0 ? shuffled : shuffled.splice(0, shuffled.length - action.payload.rules);
					return shuffled;
					break;
				} else{
					return Object.keys(action.payload.deck);
					break;
				}
				
			case 'CREATE_MAP_DECK_B':

				const shuffledB = shuffle(Object.keys(action.payload.deckB));
				shuffledB.length - (action.payload.rulesB - action.payload.rulesC) <= 0 ? shuffledB : shuffledB.splice(0, shuffledB.length - (action.payload.rulesB - action.payload.rulesC));

				const shuffledC = shuffle(Object.keys(action.payload.deckC));
				shuffledC.length - action.payload.rulesC <= 0 ? shuffledC : shuffledC.splice(0, shuffledC.length - action.payload.rulesC);

				const combined = shuffledB.concat(shuffledC);
				const final = shuffle(combined);

				return state.concat(final);
				break;

			case 'SHUFFLE_MAP_TILES':
				return shuffle(state);
				break;
			case 'SORT_MAP_TILES':
				return state;
				break;
			case 'DRAW_MAP_TILE':
				state.splice(0,1);
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	const advancedActions = (state=[], action) => {
		switch(action.type) {

			case 'SHUFFLE_ADVANCED_ACTIONS':
				return shuffle(state);
				break;
			case 'DEAL_ADVANCED_ACTIONS':
				return state;
				break;
			case 'PURCHASE_ADVANCED_ACTIONS':
				return state;
				break;
			case 'DISCARD_ADVANCED_ACTIONS':
				return state;
				break;
			case 'REVEAL_ADVANCED_ACTIONS':
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	const spells = (state=[], action) => {
		switch(action.type) {

			case 'SHUFFLE_SPELLS':
				return shuffle(state);
				break;
			case 'DEAL_SPELLS':
				return state;
				break;
			case 'PURCHASE_SPELLS':
				return state;
				break;
			case 'DISCARD_SPELLS':
				return state;
				break;
			case 'REVEAL_SPELLS':
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	const artifacts = (state=[], action) => {
		switch(action.type) {

			case 'SHUFFLE_ARTIFACTS':
				return shuffle(state);
				break;
			case 'OBTAIN_ARTIFACTS':
				return state;
				break;
			case 'DISCARD_ARTIFACTS':
				return state;
				break;
			case 'REVEAL_ARTIFACTS':
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	const units = (state=[], action) => {
		switch(action.type) {

			case 'SHUFFLE_UNITS':
				return shuffle(state);
				break;
			case 'DEAL_UNITS':
				return state;
				break;
			case 'PURCHASE_UNITS':
				return state;
				break;
			case 'DISCARD_UNITS':
				return state;
				break;
			case 'REVEAL_UNITS':
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	const mauraudingOrcs = (state=mauraudingOrcsStock, action) => {
		switch(action.type) {

			case 'SHUFFLE_MAURAUDING_ORCS':
				return shuffle(state);
				break;
			case 'DEAL_MAURAUDING_ORCS':
				return state;
				break;
			case 'DESTROY_MAURAUDING_ORCS':
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	const ancientRuins = (state=ancientRuinsStock, action) => {
		switch(action.type) {

			case 'SHUFFLE_ANCIENT_RUINS':
				return shuffle(state);
				break;
			case 'DEAL_ANCIENT_RUINS':
				return state;
				break;
			case 'DESTROY_ANCIENT_RUINS':
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	const city = (state=cityStock, action) => {
		switch(action.type) {

			case 'SHUFFLE_CITY':
				return shuffle(state);
				break;
			case 'DEAL_CITY':
				return state;
				break;
			case 'DESTROY_CITY':
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	const draconum = (state=draconumStock, action) => {
		switch(action.type) {

			case 'SHUFFLE_DRACONUM':
				return shuffle(state);
				break;
			case 'DEAL_DRACONUM':
				return state;
				break;
			case 'DESTROY_DRACONUM':
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	const dungeon = (state=dungeonStock, action) => {
		switch(action.type) {

			case 'SHUFFLE_DUNGEON':
				return shuffle(state);
				break;
			case 'DEAL_DUNGEON':
				return state;
				break;
			case 'DESTROY_DUNGEON':
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	const keep = (state=keepStock, action) => {
		switch(action.type) {

			case 'SHUFFLE_KEEP':
				return shuffle(state);
				break;
			case 'DEAL_KEEP':
				return state;
				break;
			case 'DESTROY_KEEP':
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	const mageTower = (state=mageTowerStock, action) => {
		switch(action.type) {

			case 'SHUFFLE_MAGE_TOWER':
				return shuffle(state);
				break;
			case 'DEAL_MAGE_TOWER':
				return state;
				break;
			case 'DESTROY_MAGE_TOWER':
				return state;
				break;
			default:
				return state;
				break;
		}
	}

	return combineReducers({
		page,
		entered,
		roundStarted,
		continueGame,
		scenario,
		rules,
		mapTiles,
		advancedActions,
		spells,
		artifacts,
		units,
		mauraudingOrcs,
		ancientRuins,
		city,
		draconum,
		dungeon,
		keep,
		mageTower
	});
}

export default tracker;
