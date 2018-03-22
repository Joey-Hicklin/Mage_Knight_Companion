// REACT
import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
  // components
  import Title from './title.js';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { styles } from '../styles.js';


import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

/////---- COMPONENT ----\\\\\

export class EmptyMapTile extends Component {


  componentWillMount() {

  }

  render() {

  	const fillColor = this.props.tracker.mapTiles.includes("B") ? "rgba(139,69,19,0.1)" : "rgba(0,255,0,0.1)"

    return (
      <Polygon
         points="170 492.5, 255 442.5, 340 491.5, 425 442.5, 425 344, 510 295, 510 196.5, 425 147.5, 425 49, 340 0, 255 49.5, 170 0, 85 49.5, 85 148.5, 0 197.5, 0 296, 85 345, 85 443.5"
         fill={fillColor}
         stroke={this.props.tracker.mapTiles.includes("B") ? "brown" : "green"}
         strokeWidth="3"
         x={this.props.xPos ? this.props.xPos: "0"}
         y={this.props.yPos ? this.props.yPos: "0"} />
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

export default connect(mapStateToProps, actions)(EmptyMapTile);
