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

// Make a TileSpace component that handles clicking on spaces with content
// Make a MapTile component that displays the map tile image and provides an outline for new tiles to be created when clicked
// Make MapArea component to supply boundary zones for the map, also allowing for pinch-zoom and 2-finger dragging

/////---- COMPONENT ----\\\\\

export class RevealedMapTile extends Component {


  componentWillMount() {

  }

  render() {
    return (
         <G>
          <Polygon
             points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
             fill="rgba(0,0,0,0.1)"
             stroke="black"
             strokeWidth="0.5"
             x="85"
             y="0" />
           <Polygon
             points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
             fill="rgba(0,0,0,0.1)"
             stroke="black"
             strokeWidth="0.5"
             x="255"
             y="0" />
           <Polygon
             points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
             fill="rgba(0,0,0,0.1)"
             stroke="black"
             strokeWidth="0.5"
             x="0"
             y="147.5" />
           <Polygon
             points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
             fill="rgba(0,0,0,0.1)"
             stroke="black"
             strokeWidth="0.5"
             x="170"
             y="147.5" />
           <Polygon
             points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
             fill="rgba(0,0,0,0.1)"
             stroke="black"
             strokeWidth="0.5"
             x="340"
             y="147.5" />
           <Polygon
             points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
             fill="rgba(0,0,0,0.1)"
             stroke="black"
             strokeWidth="0.5"
             x="85"
             y="295" />
           <Polygon
             points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
             fill="rgba(0,0,0,0.1)"
             stroke="black"
             strokeWidth="0.5"
             x="255"
             y="295" />
           </G>
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

export default connect(mapStateToProps, actions)(RevealedMapTile);
