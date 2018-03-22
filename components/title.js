// REACT
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Picker } from 'react-native';
  // components
  import CharacterSelect from './characterSelect';


// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { renderIf } from '../functions.js';
import { styles } from '../styles.js';
import { mapDefinitions } from '../Decks/mapTiles.js';



/////---- COMPONENT ----\\\\\

export class Title extends Component {
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

  componentWillReceiveProps(newProps){

    if(newProps.tracker.gameStarted && !newProps.tracker.mapInitialized){

      const { mauraudingOrcs, ancientRuins, city, draconum, keep, mageTower } = newProps.tracker;
      const tokens = { mauraudingOrcs, ancientRuins, city, draconum, keep, mageTower };

      if(newProps.tracker.rules.mapShape.includes('W')){
        newProps.initiateDrawMapTile(
          {row: 1, column: 0 },
          newProps.tracker.mapTiles[0],
          mapDefinitions[newProps.tracker.mapTiles[0]],
          tokens
        );
        newProps.initiateDrawMapTile(
          {row: 0, column: 1 },
          newProps.tracker.mapTiles[0],
          mapDefinitions[newProps.tracker.mapTiles[0]],
          tokens
        );

      }else if(newProps.tracker.rules.mapShape.includes('O')){
        newProps.initiateDrawMapTile(
          {row: 0, column: 0 },
          newProps.tracker.mapTiles[0],
          mapDefinitions[newProps.tracker.mapTiles[0]],
          tokens
        );
            newProps.initiateDrawMapTile(
              {row: 1, column: 1 },
              newProps.tracker.mapTiles[0],
              mapDefinitions[newProps.tracker.mapTiles[0]],
              tokens
          );
            newProps.initiateDrawMapTile(
              {row: 2, column: 0 },
              newProps.tracker.mapTiles[0],
              mapDefinitions[newProps.tracker.mapTiles[0]],
              tokens
          );
      }
      this.props.changePage('Turn Order');
    }
  }


  render() {
    return (
      <View style={styles.titleContainer}>

        <View style={styles.characterSelectWrapper}>
          <View style={styles.characterSelectRow}>
            <CharacterSelect
              imgBW={this.props.tracker.entered ? this.state.ArytheaBW : this.state.Arythea}
              imgColor={this.state.Arythea}
              name={'Arythea'}
              />
            <CharacterSelect
              imgBW={this.props.tracker.entered ? this.state.GoldyxBW : this.state.Goldyx}
              imgColor={this.state.Goldyx}
              name={'Goldyx'}
              />
          </View>
          <View style={styles.characterSelectRow}>
            <CharacterSelect
              imgBW={this.props.tracker.entered ? this.state.TovakBW : this.state.Tovak}
              imgColor={this.state.Tovak}
              name={'Tovak'}
              />
            <CharacterSelect
              imgBW={this.props.tracker.entered ? this.state.NorowasBW : this.state.Norowas}
              imgColor={this.state.Norowas}
              name={'Norowas'}
              />
          </View>
        </View>

      

        {renderIf(this.props.tracker.entered)(
          <View style={{flex:1, justifyContent: 'space-between'}}>

            <View style={{flex:6}} />
             <Picker
              style={styles.scenarioSelect}
              selectedValue={this.props.tracker.scenario}
              onValueChange={(itemValue, itemIndex) => this.props.selectScenario(itemValue)}>
              <Picker.Item label="Select Scenario:  First Reconnaissance" value="firstrecon" />
              <Picker.Item label="Full Conquest" value="fullConquest" />
              <Picker.Item label="Blitz Conquest" value="blitzConquest" />
              <Picker.Item label="Solo Conquest" value="soloConquest" />
              <Picker.Item label="Full Cooperation" value="fullCoop" />
              <Picker.Item label="Blitz Cooperation" value="blitzCoop" />
              <Picker.Item label="Mines Liberation" value="mines" />
              <Picker.Item label="Druid Nights" value="druidnights" />
              <Picker.Item label="Dungeon Lords" value="dungeonlords" />
              <Picker.Item label="Conquer and Hold" value="conquerandhold" />
              <Picker.Item label="One to Return" value="onetoreturn" />
            </Picker>
            <View style={styles.buttonCluster}>            

              <TouchableOpacity
                onPress={()=>{
                  this.props.exitToTitle()
                }}
                style={styles.goBack}
              >
                <Text style={styles.buttonText}>
                  Back
                </Text>
              </TouchableOpacity>


              {renderIf(this.props.characters.selected.length > 0)(
                <TouchableOpacity
                  onPress={()=>{
                    // TODO:
                      // Only change page after dummyPlayer is set to TRUE or FALSE
                    this.props.initializeGame({
                      scenario: this.props.tracker.scenario,
                      charNum: this.props.characters.selected.length,
                      mapTiles: this.props.tracker.mapTiles
                    });
                  }}
                  style={styles.continue}
                >
                  <Text style={styles.buttonText}>
                    Continue
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

        )}
        


        {renderIf(!this.props.tracker.entered)(
          <View style={{
            flex: 1,
            zIndex: 1
          }}>
            <Image
              style={styles.titleImage}
              source={require('../img/Misc/MageKnightLogo.png')}
              resizeMode={'contain'}
            />
            <View style={styles.buttonClusterTitle} >

              {renderIf(this.props.tracker.continueGame)(
                <TouchableOpacity
                  onPress={()=>{
                    this.props.changePage('Tracker')
                  }}
                  style={styles.titleButton}
                >
                  <Text style={styles.buttonText}>
                    Continue
                  </Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                onPress={()=>{
                  this.props.enterApplication()
                }}
                style={styles.titleButton}
              >
                <Text style={styles.buttonText}>
                  New Game
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.titleButton}>
                <Text style={styles.buttonText}>
                  App Guide
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
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

export default connect(mapStateToProps, actions)(Title);
