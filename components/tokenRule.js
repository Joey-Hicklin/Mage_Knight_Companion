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
  }


  componentWillMount() {


    const ruleNameFormatted = this.props.ruleName
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function(str){
        return str.toUpperCase();
      });

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
