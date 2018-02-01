// REACT
import React, {Component} from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { objFilter } from '../functions.js';
import { styles } from '../styles.js';
import { Font } from 'expo';
import { reputationArray, fameArray, levelUpArray } from '../store/reducers/characters.js';


/////---- COMPONENT ----\\\\\

export class FameRep extends Component {
	constructor(){
	    super();
	    this.state ={
	      Arythea: require('../img/Characters/Arythea.jpg'),
	      Goldyx: require('../img/Characters/Goldyx.jpg'),
	      Tovak: require('../img/Characters/Tovak.jpg'),
	      Norowas: require('../img/Characters/Norowas.jpg'),
	      fontLoaded: false,
	      fameIcon1: require('../img/Misc/LevelUp1.jpg'),
	      fameIcon2: require('../img/Misc/LevelUp2.jpg')
	    }
	}

	async componentWillMount() {
		await Font.loadAsync({
	      'majalla': require('../assets/fonts/majalla.ttf'),
	      'Arial': require('../assets/fonts/arial.ttf')
	    });
	    this.setState({ fontLoaded: true });
	}

	render(){
		const builtList = this.props.characters.selected.map((char, index)=>{return({
			name: char,
			fame: this.props.characters[char].fame,
			reputation: this.props.characters[char].reputation
		})});
		

		return(
			!this.state.fontLoaded &&
			<View></View> ||
			this.state.fontLoaded &&
			<View style={styles.appContainer}>
				<Swiper style={styles.swipeWrapper}
					showsButtons={true}
					index={this.props.characters.selected.indexOf(this.props.characters.currentPlayer)}
				>
				  	{builtList.map((char,index)=>
			  			<View style={styles.fameBG} key={index}>
						  	<Image
							    source={this.state[char.name]}
							    style={styles.fameBG}
							    resizeMode={'cover'}
							/>
							<View style={styles.overlayFameRep} />
							<View style={styles.fameRepTextWrap}>
								<View style={styles.fameRepTop} />
								<Text style={styles.fameRepName}>
									{char.name}
								</Text>
								<View style={styles.infoWrapper}>
									<View style={styles.repWrapper}>
										<View style={styles.rep}>
											<Text style={styles.repSmall}>{char.reputation < 14 ? reputationArray[char.reputation-1] : ''}</Text>
											<Text style={styles.repLarge}>{reputationArray[char.reputation]}</Text>
											<Text style={styles.repSmall}>{char.reputation > 0 ? reputationArray[char.reputation+1] : ''}</Text>
										</View>
										<Text style={styles.repText}>Reputation</Text>
										<View style={styles.repBottom} />
									</View>
									<View style={styles.levelWrapper}>
										<Text style={styles.levelNum}>{this.props.characters[this.props.characters.currentPlayer].fame}</Text>
										<Text style={styles.fameLevel}>Level</Text>
										<View style={styles.levelCountWrapper}>
											<Text style={styles.levelCountText}>
											{(levelUpArray.filter(levelUp => levelUp > this.props.characters[this.props.characters.currentPlayer].fame)[0])-this.props.characters[this.props.characters.currentPlayer].fame} more until
											</Text>
											<View style={styles.levelCountSpaceB} />
											<Image
												source={fameArray.includes(this.props.characters[this.props.characters.currentPlayer].fame) ? this.state.fameIcon1 : this.state.fameIcon2}
												style={styles.levelCountImage}
												resizeMode={'contain'}
											/>
											<View style={styles.levelCountSpaceA} />
										</View>
									</View>
								</View>
								<View style={styles.fameRepBottom} />
							</View>
					  	</View>
				  	)}
			    </Swiper>
				<TouchableOpacity
			      style={styles.back}
			      onPress={ ()=> {
			        this.props.changePage('Tracker')
			      }}
			    >
			    </TouchableOpacity>
				<TouchableOpacity
			      style={styles.hamburger}
			      onPress={ ()=> {
			        this.props.changePage('Options')
			      }}
			    >
			    </TouchableOpacity>
			</View>
		)
	}
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

export default connect(mapStateToProps, actions)(FameRep);
