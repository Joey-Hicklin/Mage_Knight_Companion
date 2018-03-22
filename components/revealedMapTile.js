// REACT
import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
  // components
  import Title from './title.js';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { styles } from '../styles.js';
import { mapDefinitions } from '../Decks/mapTiles.js';


import Svg,{ G, Polygon, Circle, Defs, Image, ClipPath, Symbol, Use } from 'react-native-svg';

// Make a TileSpace component that handles clicking on spaces with content
// Make a MapTile component that displays the map tile image and provides an outline for new tiles to be created when clicked
// Make MapArea component to supply boundary zones for the map, also allowing for pinch-zoom and 2-finger dragging

/////---- COMPONENT ----\\\\\

export class RevealedMapTile extends Component {

  state = {
    PA: require('../img/Map_Tiles/PA.png'),
    PB: require('../img/Map_Tiles/PB.png'),
    G1: require('../img/Map_Tiles/G1.png'),
    G2: require('../img/Map_Tiles/G2.png'),
    G3: require('../img/Map_Tiles/G3.png'),
    G4: require('../img/Map_Tiles/G4.png'),
    G5: require('../img/Map_Tiles/G5.png'),
    G6: require('../img/Map_Tiles/G6.png'),
    G7: require('../img/Map_Tiles/G7.png'),
    G8: require('../img/Map_Tiles/G8.png'),
    G9: require('../img/Map_Tiles/G9.png'),
    G10: require('../img/Map_Tiles/G10.png'),
    G11: require('../img/Map_Tiles/G11.png'),
    G12: require('../img/Map_Tiles/G12.png'),
    G13: require('../img/Map_Tiles/G13.png'),
    G14: require('../img/Map_Tiles/G14.png'),
    B1: require('../img/Map_Tiles/B1.png'),
    B2: require('../img/Map_Tiles/B2.png'),
    B3: require('../img/Map_Tiles/B3.png'),
    B4: require('../img/Map_Tiles/B4.png'),
    B5: require('../img/Map_Tiles/B5.png'),
    B6: require('../img/Map_Tiles/B6.png'),
    B7: require('../img/Map_Tiles/B7.png'),
    B8: require('../img/Map_Tiles/B8.png'),
    B9: require('../img/Map_Tiles/B9.png'),
    B10: require('../img/Map_Tiles/B10.png'),
  }

  onSpacePress = (spaceType) => {

    if(typeof spaceType == 'string'){
      switch(spaceType){
        case 'MO':
          alert('Maurauding Orcs');
          break;
        case 'MG':
          alert('Magical Glade');
          break;
        case 'V':
          alert('Village');
          break;
        case 'CMW':
          alert('Crystal Mine White');
          break;
        case 'CMG':
          alert('Crystal Mine Green');
          break;
        case 'CMB':
          alert('Crystal Mine  Blue');
          break;
        case 'CMR':
          alert('Crystal Mine Red');
          break;
        case 'K':
          alert('Keep');
          break;
        case 'MT':
          alert('Mage Tower');
          break;
        case 'M':
          alert('Monastery');
          break;
        case 'MD':
          alert('Monster Den');
          break;
        case 'DUN':
          alert('Dungeon');
          break;
        case 'AR':
          alert('Ancient Ruins');
          break;
        case 'T':
          alert('Tomb');
          break;
        case 'SG':
          alert('Spawning Ground');
          break;
        case 'DRA':
          alert('Draconum');
          break;
        case 'CB':
          alert('City Blue');
          break;
        case 'CG':
          alert('City Green');
          break;
        case 'CW':
          alert('City White');
          break;
        case 'CR':
          alert('City Red');
          break;
        default:
          break;
      }
    }else if(typeof spaceType == 'object'){
      this.props.showToken(spaceType);
    }
  }

  _onPressIn = ({nativeEvent:{locationX,locationY, target}}) => {
    this.pressInfo = {
      startX: locationX,
      startY: locationY,
      lastX: locationX,
      lastY: locationY,
      target: target
    }
  }

  _onPressOut = (e, tileName, tileNum) => {
    const {locationX, locationY, target} = e.nativeEvent;
    if(this.pressInfo.startX - locationX > 6 || this.pressInfo.startX - locationX < -6 || this.pressInfo.startY - locationY > 6 || this.pressInfo.startY - locationY < -6){
      e.stopPropagation();
    }else{
      if (locationX == undefined || !this.pressInfo)
          return

      if (Math.abs(
            Math.sqrt(
              Math.pow((this.pressInfo.lastX - this.pressInfo.startX), 2) +
              Math.pow((this.pressInfo.lastY - this.pressInfo.startY), 2)
            )
          ) < 6)

        this.onSpacePress(mapDefinitions[tileName][tileNum]);
        return

       // emulated onPress happened - DO YOUR ONPRESS WORK HERE
    }

    
      
  }

  componentWillMount() {

  }

  render() {
    let mapSpace = mapDefinitions[this.props.tileName];

    return (
        <G
          x={this.props.xPos}
          y={this.props.yPos}
        >
          <Defs>
            <ClipPath id='map'>
              <Circle
                cx="100%"
                cy="100%"
              />
            </ClipPath>
          </Defs>
          <G clipPath='url(#map)'>
            <Image
              width='510'
              height='508'
              x='0'
              y='-4'
              href={this.state[this.props.tileName]}
            />
            <Image
              width='140'
              height='140'
              x='100'
              y='30'
              href={require('../img/Tokens/sampleToken.png')}
              opacity={this.props.tokenOpacity1}
            />
          </G>
          <Polygon
            points="170 492.5, 255 442.5, 340 491.5, 425 442.5, 425 344, 510 295, 510 196.5, 425 147.5, 425 49, 340 0, 255 49.5, 170 0, 85 49.5, 85 148.5, 0 197.5, 0 296, 85 345, 85 443.5"
            fill={"none"}
            stroke={"black"}
            strokeWidth="1"
          />
          <Polygon
            points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
            fill="rgba(0,0,0,0.1)"
            x="85"
            y="0"
            onPressIn={this._onPressIn}
            onPressOut={(e) => {this._onPressOut(e, this.props.tileName, 3)}}
          />
          <Polygon
            points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
            fill="rgba(0,0,0,0.1)"
            x="255"
            y="0"
            onPressIn={this._onPressIn}
            onPressOut={(e) => {this._onPressOut(e, this.props.tileName, 4)}}
          />
          <Polygon
            points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
            fill="rgba(0,0,0,0.1)"
            x="0"
            y="147.5"
            onPressIn={this._onPressIn}
            onPressOut={(e) => {this._onPressOut(e, this.props.tileName, 5)}}
          />
          <Polygon
            points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
            fill="rgba(0,0,0,0.1)"
            x="170"
            y="147.5"
            onPressIn={this._onPressIn}
            onPressOut={(e) => {this._onPressOut(e, this.props.tileName, 6)}}
          />
          <Polygon
            points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
            fill="rgba(0,0,0,0.1)"
            x="340"
            y="147.5"
            onPressIn={this._onPressIn}
            onPressOut={(e) => {this._onPressOut(e, this.props.tileName, 7)}}
          />
          <Polygon
            points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
            fill="rgba(0,0,0,0.1)"
            x="85"
            y="295"
            onPressIn={this._onPressIn}
            onPressOut={(e) => {this._onPressOut(e, this.props.tileName, 8)}}
          />
          <Polygon
            points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
            fill="rgba(0,0,0,0.1)"
            x="255"
            y="295"
            onPressIn={this._onPressIn}
            onPressOut={(e) => {this._onPressOut(e, this.props.tileName, 9)}}
          />
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
