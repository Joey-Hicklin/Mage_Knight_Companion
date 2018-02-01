// REACT
import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
  // components
  import Title from './title.js';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { renderIf } from '../functions.js';
import { styles } from '../styles.js';




/////---- COMPONENT ----\\\\\

export class Tracker extends Component {

   constructor(){
    super();
    this.state ={
      Arythea: require('../img/Characters/Arythea.jpg'),
      Goldyx: require('../img/Characters/Goldyx.jpg'),
      Tovak: require('../img/Characters/Tovak.jpg'),
      Norowas: require('../img/Characters/Norowas.jpg'),
      ArytheaBW: require('../img/Characters/ArytheaBW.jpg'),
      GoldyxBW: require('../img/Characters/GoldyxBW.jpg'),
      TovakBW: require('../img/Characters/TovakBW.jpg'),
      NorowasBW: require('../img/Characters/NorowasBW.jpg'),
    }
  }

  componentWillMount() {

    if(this.props.characters[this.props.characters.selected[0]].turn == 'Waiting')this.props.takeTurn(this.props.characters.selected[0])
  }

  render() {

    const turnStyle = (character) => {
      if(this.props.characters[character].turn === 'Waiting'){
        return(styles.turnTokenWaiting)
      }
      else if(this.props.characters[character].turn === 'Taking'){
        return(styles.turnTokenTake)
      }
      else if(this.props.characters[character].turn === 'Ended'){
        return(styles.turnTokenTook)
      }
    }

    const turnSource = (character) => {
      if(this.props.characters[character].turn === 'Waiting'){
        return(this.state[character+'BW'])
      }
      else if(this.props.characters[character].turn === 'Taking' || this.props.characters[character].turn === 'Ended'){
        return(this.state[character])
      }
    }

    const turnPress = (character) => {
      this.props.endTurn(character);

      if(this.props.characters.selected.indexOf(character) !== this.props.characters.selected.length-1){
        this.props.takeTurn(this.props.characters.selected[this.props.characters.selected.indexOf(character)+1])
      }else{
        // TODO - Ask if round has ended
          // If round ends, prompt to reorder turns
        this.props.resetTurns()
        this.props.takeTurn(this.props.characters.selected[0])
      }
    }

    return(
      <View style={{flex:1}}>
        <View style={styles.trackerSmallRow}>
          <View style={{flex:2}} />
          <View style={styles.turnTokenBox}>
            {this.props.characters.selected.map(
              (character, index)=>
                {
                  return(
                    <TouchableOpacity
                      key={index}
                      onPress={()=>{turnPress(character)}}
                    >
                      <Image 
                        source={turnSource(character)}
                        style={turnStyle(character)}
                        resizeMode={'cover'}
                        onPress={()=>{turnPress(character)}}
                      />
                    </TouchableOpacity>
                  )
                }
              )
            }
          </View>
          <View style={{flex:1}} />
        </View>
        <View style={styles.trackerBigBox}>
          <View style={styles.trackerBigRow}>
            <View style={styles.trackerMapBox}>
              <TouchableOpacity
                onPress={()=>{
                  this.props.changePage('Map Tiles');
                }}
              >
                <Image
                  source={require('../img/Map_Tiles/PortalB.png')}
                  resize={'contain'}
                  style={{width: '100%', height: '100%'}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.trackerTradeBox}>
            <Image
                source={require('../img/Cards/icon.png')}
                resize={'contain'}
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </View>
          <View style={styles.trackerBigRow}>
            <View style={styles.trackerTokenBox}>
            <Image
                source={require('../img/Tokens/icon.png')}
                resize={'contain'}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={styles.trackerFameBox}>
            <TouchableOpacity
              onPress={ ()=> {
                this.props.changePage('FameRep')
              }}
            >
              <Image
                  source={require('../img/Misc/fameIcon.png')}
                  resize={'contain'}
                  style={{width: '100%', height: '100%'}}
                />
            </TouchableOpacity>
            </View>
          </View>
        </View>
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

export default connect(mapStateToProps, actions)(Tracker);
