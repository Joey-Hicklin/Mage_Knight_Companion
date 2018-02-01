// REACT
import React, { Component } from 'react';
import { View, Image, Text, Button, Alert, TouchableOpacity, Dimensions } from 'react-native';
import resolveAssetSource from 'resolveAssetSource';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { styles } from '../styles.js';
import { renderIf } from '../functions.js';
import { Font } from 'expo';




/////---- COMPONENT ----\\\\\

export class TurnOrder extends Component {

   constructor(){
    super();
    let {width, height} = Dimensions.get('window')
    this.state ={
      Arythea: require('../img/Characters/Arythea.jpg'),
      Goldyx: require('../img/Characters/Goldyx.jpg'),
      Tovak: require('../img/Characters/Tovak.jpg'),
      Norowas: require('../img/Characters/Norowas.jpg'),
      Day: require('../img/Misc/day.jpg'),
      fontLoaded: false,
      height,
      width,
      selectedChars: []
    }
  }

  async componentWillMount(){

    await Font.loadAsync({
        'majalla': require('../assets/fonts/majalla.ttf')
      });
    await this.setState({
      fontLoaded: true,
    });

    this.moveChar = (character) => {
      const tempSelectedChars = this.state.selectedChars;
      tempSelectedChars.includes(character) ? tempSelectedChars : tempSelectedChars.push(character);
      this.setState({
        ...this.state,
        selectedChars: tempSelectedChars
      });
    }
  }



  render() {

    return(
      !this.state.fontLoaded &&
        <View></View> ||
      this.state.fontLoaded &&
      <View style={{flex: 1}}>
        <Image
          style={styles.turnBG}
          height={this.state.height}
          width={this.state.width}
          source={this.state.Day}
          resizeMode='cover'
        />
        <View style={{flex: 1}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.turnTitleText}>
              Set Turn Order
            </Text>
          </View>
          <View style={styles.turnSelectedBox}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              {this.state.selectedChars.map((character, index)=>{
                return(<Image
                  key={index}
                  style={styles.turnSelectedChar}
                  source={this.state[character]}
                  resizeMode='contain'
                />)
              })}
            </View>
            <Button
                style={styles.turnSelectedCharButton}
                title='Reset'
                color='red'
                onPress={()=>{
                  this.setState({
                    ...this.state,
                    selectedChars: [],
                    availableChars: this.props.characters.selected.slice()
                  });
                }}
            />
          </View>
          <View style={styles.turnCharBox}>
            <View style={styles.turnCharRow}>
              <TouchableOpacity
                style={styles.turnCharButton}
                onPress={()=>{this.moveChar(this.props.characters.selected[0])}}
              >
                <Image
                  source={this.state[this.props.characters.selected[0]]}
                  style={styles.turnCharImage}
                  resizeMode='contain'
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.turnCharButton}
                onPress={()=>{this.moveChar(this.props.characters.selected[1])}}
              >
                <Image
                  source={this.state[this.props.characters.selected[1]]}
                  style={styles.turnCharImage}
                  resizeMode='contain'
                />
              </TouchableOpacity>
            </View>
            <View style={styles.turnCharRow}>
              <TouchableOpacity
                style={styles.turnCharButton}
                onPress={()=>{this.moveChar(this.props.characters.selected[2])}}
              >
                <Image
                  source={this.state[this.props.characters.selected[2]]}
                  style={styles.turnCharImage}
                  resizeMode='contain'
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={this.props.characters.selected.length == 3 ? {flex: 0}: styles.turnCharButton}
                onPress={()=>{this.moveChar(this.props.characters.selected[3])}}
              >
                <Image
                  source={this.state[this.props.characters.selected[3]]}
                  style={styles.turnCharImage}
                  resizeMode='contain'
                />
              </TouchableOpacity>
            </View>
          </View>
          <Button
            title='Confirm'
            color='blue'
            accessibilityLabel='Confirm the turn order'
            disabled={this.state.selectedChars.length == this.props.characters.selected.length ? false : true}
            onPress= {() => {
              this.props.setTurnOrder(this.state.selectedChars);
              this.props.changePage('Tracker');
            }}
          />
        </View>
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

export default connect(mapStateToProps, actions)(TurnOrder);
