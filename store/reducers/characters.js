import {combineReducers} from "redux";

export const reputationArray = [-6,-5,-3,-2,-1,-1,0,0,0,1,1,2,2,3,5];
export let fameArray = [];
for (var i = 119 - 1; i >= 0; i--) {
	if( i<3 || i>7 && i<15 || i>23 && i<35 || i>47 && i<53 || i>79 && i<99 ){
		fameArray.push(i);
	}
}
export const levelUpArray = [3,8,15,24,35,48,63,80,99];

export const characters = () => {

	const selected = (state=[], action) => {
		switch(action.type) {
			case 'SELECT_CHARACTER':
				return state.concat(action.payload);
				break;
			case 'DESELECT_CHARACTER':
				  return state.filter((el) =>
				    el.toLowerCase().indexOf(action.payload.toLowerCase()) <= -1
				  );
				break;
			case 'SET_TURN_ORDER':
				  return action.payload;
				break;
			default:
				return state;
				break;
		}
	}
	const currentPlayer = (state='', action) => {
		switch(action.type) {
			case 'TAKE_TURN':
				return action.payload;
				break;
			default:
				return state;
				break;
		}
	}

	const Arythea = () => {

		const selected = (state=false, action) => {
			if(action.payload === 'Arythea'){
				switch(action.type) {
					case 'SELECT_CHARACTER':
						return true;
						break;
					case 'DESELECT_CHARACTER':
						  return false;
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}
		const turn = (state='Waiting', action) => {
			if(action.payload === 'Arythea'){
				switch(action.type) {
					case 'TAKE_TURN':
						  return 'Taking';
						break;
					case 'END_TURN':
						  return 'Ended';
						break;
					default:
						return state;
						break;
				}
			}else if(action.type === 'RESET_TURNS'){
				return 'Waiting';
			}else{
				return state;
			}
		}
		const fame = (state=0, action) => {
			if(action.payload === 'Arythea'){
				switch(action.type) {
					case 'GAIN_FAME':
						  return state + action.payload;
						break;
					case 'LOSE_FAME':
						  return state - action.payload;
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}
		const reputation = (state=7, action) => {
			if(action.payload === 'Arythea'){
				switch(action.type) {
					case 'GAIN_REPUTATION':
						  return (state == 14 ? state : state + action.payload);
						break;
					case 'LOSE_REPUTATION':
						  return (state == 0 ? state : state - action.payload);
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}

		return combineReducers({
			selected,
			turn,
			fame,
			reputation
		});
	}

	const Goldyx = () => {

		const selected = (state=false, action) => {
			if(action.payload === 'Goldyx'){
				switch(action.type) {
					case 'SELECT_CHARACTER':
						return true;
						break;
					case 'DESELECT_CHARACTER':
						  return false;
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}
		const turn = (state='Waiting', action) => {
			if(action.payload === 'Goldyx'){
				switch(action.type) {
					case 'TAKE_TURN':
						  return 'Taking';
						break;
					case 'END_TURN':
						  return 'Ended';
						break;
					default:
						return state;
						break;
				}
			}else if(action.type === 'RESET_TURNS'){
				return 'Waiting';
			}else{
				return state;
			}
		}
		const fame = (state=0, action) => {
			if(action.payload === 'Goldyx'){
				switch(action.type) {
					case 'GAIN_FAME':
						  return state + action.payload;
						break;
					case 'LOSE_FAME':
						  return state - action.payload;
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}
		const reputation = (state=7, action) => {
			if(action.payload === 'Goldyx'){
				switch(action.type) {
					case 'GAIN_REPUTATION':
						  return (state == 14 ? state : state + action.payload);
						break;
					case 'LOSE_REPUTATION':
						  return (state == 0 ? state : state - action.payload);
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}

		return combineReducers({
			selected,
			turn,
			fame,
			reputation
		});
	}

	const Tovak = () => {

		const selected = (state=false, action) => {
			if(action.payload === 'Tovak'){
				switch(action.type) {
					case 'SELECT_CHARACTER':
						return true;
						break;
					case 'DESELECT_CHARACTER':
						  return false;
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}
		const turn = (state='Waiting', action) => {
			if(action.payload === 'Tovak'){
				switch(action.type) {
					case 'TAKE_TURN':
						  return 'Taking';
						break;
					case 'END_TURN':
						  return 'Ended';
						break;
					default:
						return state;
						break;
				}
			}else if(action.type === 'RESET_TURNS'){
				return 'Waiting';
			}else{
				return state;
			}
		}
		const fame = (state=0, action) => {
			if(action.payload === 'Tovak'){
				switch(action.type) {
					case 'GAIN_FAME':
						  return state + action.payload;
						break;
					case 'LOSE_FAME':
						  return state - action.payload;
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}
		const reputation = (state=7, action) => {
			if(action.payload === 'Tovak'){
				switch(action.type) {
					case 'GAIN_REPUTATION':
						  return (state == 14 ? state : state + action.payload);
						break;
					case 'LOSE_REPUTATION':
						  return (state == 0 ? state : state - action.payload);
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}

		return combineReducers({
			selected,
			turn,
			fame,
			reputation
		});
	}

	const Norowas = () => {

		const selected = (state=false, action) => {
			if(action.payload === 'Norowas'){
				switch(action.type) {
					case 'SELECT_CHARACTER':
						return true;
						break;
					case 'DESELECT_CHARACTER':
						  return false;
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}
		const turn = (state='Waiting', action) => {
			if(action.payload === 'Norowas'){
				switch(action.type) {
					case 'TAKE_TURN':
						  return 'Taking';
						break;
					case 'END_TURN':
						  return 'Ended';
						break;
					default:
						return state;
						break;
				}
			}else if(action.type === 'RESET_TURNS'){
				return 'Waiting';
			}else{
				return state;
			}
		}
		const fame = (state=0, action) => {
			if(action.payload === 'Norowas'){
				switch(action.type) {
					case 'GAIN_FAME':
						  return state + action.payload;
						break;
					case 'LOSE_FAME':
						  return state - action.payload;
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}
		const reputation = (state=7, action) => {
			if(action.payload === 'Norowas'){
				switch(action.type) {
					case 'GAIN_REPUTATION':
						  return (state == 14 ? state : state + action.payload);
						break;
					case 'LOSE_REPUTATION':
						  return (state == 0 ? state : state - action.payload);
						break;
					default:
						return state;
						break;
				}
			}else{
				return state;
			}
		}

		return combineReducers({
			selected,
			turn,
			fame,
			reputation
		});
	}

	return combineReducers({
		selected,
		currentPlayer,
		Arythea: Arythea(),
		Goldyx: Goldyx(),
		Tovak: Tovak(),
		Norowas: Norowas(),
	});
}

export default characters;
