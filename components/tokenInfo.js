// REACT
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, NativeModules, LayoutAnimation } from 'react-native';
  // components
  import TokenRule from './tokenRule.js';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { styles } from '../styles.js';
import { mapDefinitions } from '../Decks/mapTiles.js';
import { renderIf } from '../functions.js';


const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const springAnimationProperties = {
  type: 'spring',
  springDamping: 0.4,
  property: 'opacity',
}

const animationConfig = {
  duration: 700,
  create: springAnimationProperties,
  update: springAnimationProperties,
  delete: springAnimationProperties,
};


/////---- COMPONENT ----\\\\\

export class TokenInfo extends Component {



  state = {
    PA: require('../img/Map_Tiles/PA.png'),
    tokenRuleFlex: 0,
    tokenRuleOpacity: 0,
    imageSource: '',
  }


  componentWillMount() {

    switch(this.props.tracker.shownToken.name.split(' ').join('_')){

      case 'Orc_Summoners':
        this.setState({imageSource : require('../img/Tokens/Orc_Summoners.png')});
        break;
      case 'Cursed_Hags':
        this.setState({imageSource : require('../img/Tokens/Cursed_Hags.png')});
        break;
      case 'Diggers':
        this.setState({imageSource : require('../img/Tokens/Diggers.png')});
        break;
      case 'Ironclads':
        this.setState({imageSource : require('../img/Tokens/Ironclads.png')});
        break;
      case 'Prowlers':
        this.setState({imageSource : require('../img/Tokens/Prowlers.png')});
        break;
      case 'Wolf_Riders':
        this.setState({imageSource : require('../img/Tokens/Wolf_Riders.png')});
        break;
      
    }
  }

  componentWillUpdate() {         
    LayoutAnimation.configureNext(animationConfig);  
  }

  render() {

    const {shownToken} = this.props.tracker;

    let tokenRules = [];

    for (var i = Object.keys(shownToken).length - 1; i >= 0; i--) {

      if(shownToken[Object.keys(shownToken)[i]] != 0 && shownToken[Object.keys(shownToken)[i]] != false && typeof shownToken[Object.keys(shownToken)[i]] != 'string'){

        tokenRules.push(
          <TokenRule
            key={Object.keys(shownToken)[i]}
            ruleName={Object.keys(shownToken)[i]}
            ruleValue={shownToken[Object.keys(shownToken)[i]]}
          />
        );
      }
    }

    return (

      <View style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        borderWidth: 3,
        borderColor: 'white',
      }} >


          <View style={{
            flex: 1,
            borderWidth: 3,
            borderColor: 'green'
          }}>

            <Text style={{
              flex:1,
              color: 'white',
              fontSize: 40,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
              {this.props.tracker.shownToken.name}
            </Text>

          </View>


          <View style={{
            flex: 5,
            borderWidth: 3,
            borderColor: 'yellow',
            justifyContent: 'space-between'
          }}>

            <Image
              source={this.state.imageSource}
              style={{
                flex: 1,
                resizeMode: 'contain',
                alignSelf: 'center',
                borderColor: 'red',
                borderWidth: 3
              }}
            />
            <View
              style={{
                flex: this.state.tokenRuleFlex,
                opacity: this.state.tokenRuleOpacity,
                backgroundColor: 'white'
              }}
            >
              {tokenRules}
            </View>

          </View>


          <View
            style={{
              flex: 1,
              borderWidth: 3,
              borderColor: 'green',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TouchableOpacity
              
              style={{
                flex: 1,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={ () => {
                this.setState({
                  tokenRuleFlex: 0,
                  tokenRuleOpacity: 0,
                });
                this.props.hideToken();
              }}
            >
              <Text style={{
                fontSize: 40,
                color: 'white',
                fontWeight: 'bold'
              }}>Exit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              
              style={{
                flex: 1,
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={ () => {
                if(this.state.tokenRuleFlex !== 1){
                  this.setState({
                    tokenRuleFlex: 1,
                    tokenRuleOpacity: 1,
                  });
                } else {
                  this.setState({
                    tokenRuleFlex: 0,
                    tokenRuleOpacity: 0,
                  });
                }
                  
              }}
            >
              <Text style={{
                fontSize: 40,
                color: 'white',
                fontWeight: 'bold'
              }}>Rules</Text>
            </TouchableOpacity>

            <TouchableOpacity
              
              style={{
                flex: 1,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={ () => {
                  alert('STAB IT NOW!!');
              }}
            >
              <Text style={{
                fontSize: 40,
                color: 'white',
                fontWeight: 'bold'
              }}>Attack</Text>
            </TouchableOpacity>

          </View>
        </View>
    );
  }
}

/////---- REDUX CONNECTION ----\\\\\

function mapStateToProps(state){

  return Object.assign({},
    {
      ...state
    }
  );
};

export default connect(mapStateToProps, actions)(TokenInfo);
