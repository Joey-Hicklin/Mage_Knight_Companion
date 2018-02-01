// REACT
import React, {Component} from 'react';
import { TouchableOpacity, Image } from 'react-native';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions/actions.js';

// STYLE
import { styles } from '../styles.js';


/////---- COMPONENT ----\\\\\

export class CharacterSelect extends Component {


	render(){
	return(
		<TouchableOpacity
			style={styles.characterSelectButton}
			onPress={()=>{
				if(this.props.characters.selected.indexOf(this.props.name) <= -1 ){
					this.props.selectCharacter(this.props.name)
				}else{
					this.props.deselectCharacter(this.props.name)
				}
			}}
		>
		  <Image
		    source={this.props.characters.selected.indexOf(this.props.name) > -1 ? this.props.imgColor : this.props.imgBW}
		    style={styles.characterSelect}
		    resizeMode={'cover'}
		  />
		</TouchableOpacity>
	)}
}



/////---- REDUX CONNECTION ----\\\\\

function mapStateToProps(state){
	const { characters } = state;

	return Object.assign({},
		{
			...state
		}
	);
};

export default connect(mapStateToProps, actions)(CharacterSelect);
