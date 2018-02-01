// REACT
import React, { Component } from 'react';
import { View, TouchableOpacity, Image, PanResponder } from 'react-native';
  // components
  import Title from './title.js';
  import EmptyMapTile from './emptyMapTile.js';
  import RevealedMapTile from './revealedMapTile.js';

// REDUX
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions.js';

// STYLES AND FUNCTIONS
import { styles } from '../styles.js';

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
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

// Make a TileSpace component that handles clicking on spaces with content
// Make a MapTile component that displays the map tile image and provides an outline for new tiles to be created when clicked
// Make MapArea component to supply boundary zones for the map, also allowing for pinch-zoom and 2-finger dragging

/////---- COMPONENT ----\\\\\

export class MapTiles extends Component {

  state = {
    zoom: 1,
    left: 0,
    top: 0,
  };

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
    this._panResponder = PanResponder.create({
      onPanResponderGrant: () => {},
      onPanResponderTerminate: () => {},
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponder: () => true,
      onShouldBlockNativeResponder: () => true,
      onPanResponderTerminationRequest: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onStartShouldSetPanResponderCapture: () => true,
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
      onPanResponderRelease: () => {
        this.setState({
          isZooming: false,
          isMoving: false,
        });
      },
    });
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

    return (
      <View style={{flex:1}} {...this._panResponder.panHandlers}>
        <Svg
          width={width}
          height={height}
          viewBox="0 0 500 500"
          preserveAspectRatio="xMinYMin meet">
         >
         <G
          transform={{
            translateX: (left + offsetX) * resolution,
            translateY: (top + offsetY) * resolution,
            scale: zoom,
          }}
         >
          <EmptyMapTile />
          <RevealedMapTile />
        </G>
        </Svg>
        <TouchableOpacity
        style={styles.hamburger}
        onPress={ ()=> {
          this.props.changePage('Tracker')
        }}
        >
        </TouchableOpacity>
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
