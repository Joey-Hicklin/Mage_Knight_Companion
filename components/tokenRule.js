// REACT
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
  // components

// REDUX
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { styles } from '../styles.js';
import { mapDefinitions } from '../Decks/mapTiles.js';



/////---- COMPONENT ----\\\\\

export class TokenRule extends Component {

  state = {
    PA: require('../img/Map_Tiles/PA.png'),
    name: '',
    imageSource: '',
  }


  componentWillMount() {

    const ruleNameFormatted = this.props.ruleName
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function(str){
        return str.toUpperCase();
      });

    const ruleImageName = ruleNameFormatted.split(' ').join('_')

    switch(ruleImageName){

      case 'Poison':
        this.setState({imageSource: require('../img/Tokens/Poison.png')});
        break;
      case 'Brutal':
        this.setState({imageSource: require('../img/Tokens/Brutal.png')});
        break;
      case 'Defense':
        this.setState({imageSource: require('../img/Tokens/Defense.png')});
        break;
      case 'Fame':
        this.setState({imageSource: require('../img/Tokens/Fame.png')});
        break;
      case 'Fortified':
        this.setState({imageSource: require('../img/Tokens/Fortified.png')});
        break;
      case 'Physical_Attack':
        this.setState({imageSource: require('../img/Tokens/Physical_Attack.png')});
        break;
      case 'Physical_Resist':
        this.setState({imageSource: require('../img/Tokens/Physical_Resist.png')});
        break;
      case 'Summon_Attack':
        this.setState({imageSource: require('../img/Tokens/Summon_Attack.png')});
        break;
      case 'Swift':
        this.setState({imageSource: require('../img/Tokens/Swift.png')});
        break;
      
    }

    this.setState({
      name: ruleNameFormatted
    });

  }

  render() {

    return (
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'rgba(0,0,0,0.1)',
          }}
        >

          <Image
            source={this.state.imageSource}
            style={{
            }}
          />

          <Text
            style={{
              fontSize: 25,
            }}
          >{this.state.name}: {this.props.ruleValue}</Text>
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

export default connect(mapStateToProps, actions)(TokenRule);
