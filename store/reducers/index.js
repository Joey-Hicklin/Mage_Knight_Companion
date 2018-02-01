import {combineReducers} from "redux";

import {characters} from './characters.js';
import {tracker} from './tracker.js';

const allReducers = combineReducers({
	characters: characters(),
	tracker: tracker(),
});

export default allReducers;