// REACT
import React, { Component } from 'react';
import { Alert, View, TouchableOpacity, Image, PanResponder, Button, Text} from 'react-native';
  // components
  import Title from './title.js';
  import EmptyMapTile from './emptyMapTile.js';
  import RevealedMapTile from './revealedMapTile.js';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { styles } from '../styles.js';
import { mapDefinitions } from '../Decks/mapTiles.js';
import { renderIf } from '../functions.js';

function calcDistance(x1, y1, x2, y2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

function middle(p1, p2) {
  return (p1 + p2) / 2;
}

function calcCenter(x1, y1, x2, y2) {
  return {
    x: middle(x1, x2),
    y: middle(y1, y2),
  };
}

function getAlignment(align) {
  switch (align) {
    case 'start':
      return 0;

    default:
    case 'mid':
      return 1;

    case 'end':
      return 2;
  }
}

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
    Use,
    Defs,
    Stop
} from 'react-native-svg';


/////---- COMPONENT ----\\\\\

export class MapTiles extends Component {

  state = {
    zoom: 0.5,
    left: 0,
    top: 0,
  }

  processPinch(x1, y1, x2, y2) {
    const distance = calcDistance(x1, y1, x2, y2);
    const { x, y } = calcCenter(x1, y1, x2, y2);

    if (!this.state.isZooming) {
      const { top, left, zoom } = this.state;
      this.setState({
        isZooming: true,
        initialX: x,
        initialY: y,
        initialTop: top,
        initialLeft: left,
        initialZoom: zoom,
        initialDistance: distance,
      });
    } else {
      const {
        initialX,
        initialY,
        initialTop,
        initialLeft,
        initialZoom,
        initialDistance,
      } = this.state;

      const touchZoom = distance / initialDistance;
      const dx = x - initialX;
      const dy = y - initialY;

      const left = (initialLeft + dx - x) * touchZoom + x;
      const top = (initialTop + dy - y) * touchZoom + y;
      const zoom = initialZoom * touchZoom;

      this.setState({
        zoom,
        left,
        top,
      });
    }
  }

  processTouch(x, y) {
    if (!this.state.isMoving || this.state.isZooming) {
      const { top, left } = this.state;
      this.setState({
        isMoving: true,
        isZooming: false,
        initialLeft: left,
        initialTop: top,
        initialX: x,
        initialY: y,
      });
    } else {
      const { initialX, initialY, initialLeft, initialTop } = this.state;
      const dx = x - initialX;
      const dy = y - initialY;
      this.setState({
        left: initialLeft + dx,
        top: initialTop + dy,
      });
    }
  }


  componentWillMount() {

    // TEMPORARY INITIALIZATION

    this.props.enterApplication();
    this.props.selectCharacter('Arythea');
    this.props.selectCharacter('Goldyx');
    this.props.setTurnOrder(['Goldyx', 'Arythea']);

    this.props.initializeGame({
      scenario: 'firstrecon',
      charNum: 2
    })

    // END TEMP SECTION

    this._panResponder = PanResponder.create({
      onPanResponderGrant: (evt, gestureState) => {},
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => gestureState.numberActiveTouches > 1 || gestureState.dx < -5 || gestureState.dy < -5 || gestureState.dx > 5 || gestureState.dy > 5 ? true : false,
      onPanResponderTerminate: (evt, gestureState) => {},
      onShouldBlockNativeResponder: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      
      onPanResponderMove: evt => {
        const touches = evt.nativeEvent.touches;
        const length = touches.length;
        if (length === 1) {
          const [{ locationX, locationY }] = touches;
          this.processTouch(locationX, locationY);
        } else if (length === 2) {
          const [touch1, touch2] = touches;
          this.processPinch(
            touch1.locationX,
            touch1.locationY,
            touch2.locationX,
            touch2.locationY
          );
        }
      },
      onPanResponderRelease: (evt, gs) => {
        this.setState({
          isZooming: false,
          isMoving: false,
        });
      },
    });
  }


// run only on initial load
  componentWillReceiveProps(newProps){

    // TEMP INIT

    if(newProps.tracker.gameStarted && !newProps.tracker.mapInitialized){

      const { mauraudingOrcs, ancientRuins, city, draconum, keep, mageTower } = newProps.tracker;
      const tokens = { mauraudingOrcs, ancientRuins, city, draconum, keep, mageTower };

      if(newProps.tracker.rules.mapShape.includes('W')){
        newProps.initiateDrawMapTile(
          {row: 1, column: 0 },
          newProps.tracker.mapTiles[0],
          mapDefinitions[newProps.tracker.mapTiles[0]],
          tokens
        );
        newProps.initiateDrawMapTile(
          {row: 0, column: 1 },
          newProps.tracker.mapTiles[0],
          mapDefinitions[newProps.tracker.mapTiles[0]],
          tokens
        );

      }else if(newProps.tracker.rules.mapShape.includes('O')){
        newProps.initiateDrawMapTile(
          {row: 0, column: 0 },
          newProps.tracker.mapTiles[0],
          mapDefinitions[newProps.tracker.mapTiles[0]],
          tokens
        );
            newProps.initiateDrawMapTile(
              {row: 1, column: 1 },
              newProps.tracker.mapTiles[0],
              mapDefinitions[newProps.tracker.mapTiles[0]],
              tokens
          );
            newProps.initiateDrawMapTile(
              {row: 2, column: 0 },
              newProps.tracker.mapTiles[0],
              mapDefinitions[newProps.tracker.mapTiles[0]],
              tokens
          );
      }
    }

    // END OF TEMP INIT

    // TODO: check for possible blank spaces, add into grid
  }

  render() {

    const viewBoxSize = 500;
    const { height, width, align } = this.props;
    const minDimension = Math.min(height, width);
    const resolution = viewBoxSize / minDimension;
    const { left, top, zoom } = this.state;
    const alignmentAmount = getAlignment(align);
    const offsetX = alignmentAmount * zoom * (width - minDimension) / 2;
    const offsetY = alignmentAmount * zoom * (height - minDimension) / 2;

    // BUILDING GRID

    let grid = [];
    let gridE = [];
    let imagePath;
    let xPos,yPos;

    for (var i = this.props.tracker.mapGrid.length - 1; i >= 0; i--) {
      for (var j = this.props.tracker.mapGrid[i].length - 1; j >= 0; j--) {

        xPos = i == 0 ? 0 : i%2 > 0 ? -85 : -170;
        xPos = xPos+(j*340);
        yPos = -(i*439);
        yPos = yPos - (j*293.3);

        if(this.props.tracker.mapGrid[i][j] == "OP"){

          gridE.push(<EmptyMapTile
            key={'Map_Tile_'+i.toString()+j.toString()}
            xPos={xPos}
            yPos={yPos}
          />);

        }
        else if(this.props.tracker.mapGrid[i][j] != "OP" && this.props.tracker.mapGrid[i][j].tile){

          // TODO: Pull data about tile and populate props

          imagePath = '../img/Map_Tiles/' + this.props.tracker.mapGrid[i][j].tile + '.png';

          grid.push(<RevealedMapTile
            key={'Map_Tile_'+i.toString()+j.toString()}
            tileName={this.props.tracker.mapGrid[i][j].tile}
            xPos={xPos}
            yPos={yPos}
            tokenOpacity1={0}
          />);
        }else{
          alert('Something went wrong');
        }
      }
    }

    // END BUILD AREA

    return (
      <View style={{flex:1}} >
        <View style={{flex:1}} >

          <Svg
            width={width}
            height={height}
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
            {...this._panResponder.panHandlers}
           >
           <G
            transform={{
              translateX: (left + offsetX) * resolution,
              translateY: (top + offsetY) * resolution,
              scale: zoom,
            }}
           >
           {gridE}
           {grid}
          </G>
          </Svg>

        </View>
        <TouchableOpacity
        style={styles.hamburger}
        onPress={ ()=> {
          this.props.changePage('Tracker')
        }}
        >
        </TouchableOpacity>
        {renderIf(this.props.tracker.showToken)(
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
                justifyContent: 'center'
              }}>

                <Image
                  source={require('../img/Tokens/sampleToken.png')}
                  style={{resizeMode: 'contain', alignSelf: 'center',}}
                />

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
                      alert('Here are the rules!');
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
        )}
      </View>
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

export default connect(mapStateToProps, actions)(MapTiles);
