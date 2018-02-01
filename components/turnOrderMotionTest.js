// REACT
import React, { Component } from 'react';
import { View, Image, PanResponder, Animated, Text, Button, Alert } from 'react-native';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { styles } from '../styles.js';
import { Font } from 'expo';




/////---- COMPONENT ----\\\\\

export class TurnOrder extends Component {

   constructor(){
    super();
    this.state ={
      Arythea: require('../img/Characters/Arythea.jpg'),
      Goldyx: require('../img/Characters/Goldyx.jpg'),
      Tovak: require('../img/Characters/Tovak.jpg'),
      Norowas: require('../img/Characters/Norowas.jpg'),
      pan0: new Animated.ValueXY(),
      pan1: new Animated.ValueXY(),
      pan2: new Animated.ValueXY(),
      pan3: new Animated.ValueXY(),
      fontLoaded: false,
    }
  }

  async componentWillMount(){

    this._val = { x:0, y:0 }
    this.state.pan0.addListener((value) => this._val = value);
    this.state.pan1.addListener((value) => this._val = value);
    this.state.pan2.addListener((value) => this._val = value);
    this.state.pan3.addListener((value) => this._val = value);

    this.panResponder0 = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan0.x, dy: this.state.pan0.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        Animated.spring(this.state.pan0, {
          toValue: { x: 0, y: 0 },
          friction: 5
        }).start();
      }
    },
      this.state.pan0.setValue({ x:0, y:0})
    );
    this.panResponder1 = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan1.x, dy: this.state.pan1.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        Animated.spring(this.state.pan1, {
          toValue: { x: 0, y: 0 },
          friction: 5
        }).start();
      }
    },
      this.state.pan1.setValue({ x:0, y:0})
    );
    this.panResponder2 = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan2.x, dy: this.state.pan2.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        Animated.spring(this.state.pan2, {
          toValue: { x: 0, y: 0 },
          friction: 5
        }).start();
      }
    },
      this.state.pan2.setValue({ x:0, y:0})
    );
    this.panResponder3 = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan3.x, dy: this.state.pan3.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        Animated.spring(this.state.pan3, {
          toValue: { x: 0, y: 0 },
          friction: 5
        }).start();
      }
    },
      this.state.pan3.setValue({ x:0, y:0})
    );

    await Font.loadAsync({
        'majalla': require('../assets/fonts/majalla.ttf')
      });
    this.setState({ fontLoaded: true });
  }

  render() {

    const panStyle0 = {
      transform: this.state.pan0.getTranslateTransform()
    }
    const panStyle1 = {
      transform: this.state.pan1.getTranslateTransform()
    }
    const panStyle2 = {
      transform: this.state.pan2.getTranslateTransform()
    }
    const panStyle3 = {
      transform: this.state.pan3.getTranslateTransform()
    }

    return(
      !this.state.fontLoaded &&
        <View></View> ||
      this.state.fontLoaded &&
        <View style={{flex: 1}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.turnTitleText}>
              Set Turn Order
            </Text>
          </View>
          <View style={{flex: 10}}>
            <View style={styles.turnBGWrapper}>
              <View style={styles.turnBGL}>
                {this.props.characters.selected.map((character, index) =>
                  <View style={styles.turnBGNumBox} key={index}>
                    <Text style={styles.turnBGNum}>
                      {index+1}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.turnBGR}>
                {this.props.characters.selected.map((character, index) =>
                  <View style={styles.turnBGSpace} key={index} />
                )}
              </View>
            </View>

            <View style={styles.turnTilesWrapper}>
              <View style={styles.turnBGL} />
              <View style={[styles.turnBGR, styles.turnBGRToken]}>
                {this.props.characters.selected.map(
                  (character, index)=>
                    {
                      return(
                        <Animated.View
                          {...this['panResponder'+index].panHandlers}
                          style={[
                            {
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                            },
                            eval('panStyle'+index)
                          ]}
                          key={index}
                        >
                          <Image 
                            source={this.state[character]}
                            style={styles.turnChars}
                            resizeMode={'cover'}
                          />
                        </Animated.View>
                      )
                    }
                  )
                }
              </View>
            </View>
          </View>
          <Button
            title='Confirm'
            color='blue'
            accessibilityLabel='Confirm the turn order'
            onPress= {() => {
              Alert.alert(
              null,
              'Are you sure?',
              [
                {text: 'No', onPress: () => null, style: 'cancel'},
                {text: 'Yes', onPress: () => this.props.changePage('Tracker')},
              ],
              { cancelable: true }
            )
            }}
          />
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
