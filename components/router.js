// REACT
import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
  // components
  import Title from './title.js';
  import Tracker from './tracker.js';
  import Options from './options.js';
  import FameRep from './fameRep.js';
  import TurnOrder from './turnOrder.js';
  import MapTiles from './mapTiles.js';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { renderIf } from '../functions.js';
import { styles } from '../styles.js';


/////---- COMPONENT ----\\\\\

const { width, height } = Dimensions.get('window');

export class Router extends Component {

  render() {
    return(
      <View style={styles.appContainer}>
        {renderIf(this.props.tracker.page === 'Title')(<Title />)}
        {renderIf(this.props.tracker.page === 'Tracker')(<Tracker />)}
        {renderIf(this.props.tracker.page === 'Options')(<Options />)}
        {renderIf(this.props.tracker.page === 'FameRep')(<FameRep />)}
        {renderIf(this.props.tracker.page === 'Turn Order')(<TurnOrder />)}
        {renderIf(this.props.tracker.page === 'Map Tiles')(<MapTiles width={width} height={height} align="mid" />)}
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

export default connect(mapStateToProps, actions)(Router);
