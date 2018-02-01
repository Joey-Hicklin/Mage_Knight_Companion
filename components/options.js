// REACT
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
  // components
  import Title from './title.js';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { styles } from '../styles.js';


/////---- COMPONENT ----\\\\\

export class Tracker extends Component {

  render() {
    return(
      <View style={{
        flex: 1,
        paddingTop: 50,
      }}>
        <TouchableOpacity 
          style={styles.optionsItem}>
          <Text
            style={styles.optionsTitle}
            onPress={ ()=> {
              this.props.exitToTitle()
              this.props.changePage('Title')
            }}
          >
            Exit to Title
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.hamburger}
        onPress={ ()=> {
          this.props.changePage('Tracker')
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
