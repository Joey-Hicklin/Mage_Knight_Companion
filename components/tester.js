          <Svg
            width={width}
            height={height}
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
           >
           <G
            transform={{
              translateX: (left + offsetX) * resolution,
              translateY: (top + offsetY) * resolution,
              scale: zoom,
            }}
           >
           {grid}
           {gridE}
          </G>
          </Svg>




            <Polygon
             points="170 492.5, 255 442.5, 340 491.5, 425 442.5, 425 344, 510 295, 510 196.5, 425 147.5, 425 49, 340 0, 255 49.5, 170 0, 85 49.5, 85 148.5, 0 197.5, 0 296, 85 345, 85 443.5"
             fill="none"
             stroke="black"
             strokeWidth="0.1" />
            <Polygon
               points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
               fill="rgba(0,0,0,0.1)"
               stroke="red"
               strokeWidth="3"
               x="85"
               y="0"
               onPress={this.onSpacePress(mapSpace[3])}
                />
             <Polygon
               points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
               fill="rgba(0,0,0,0.1)"
               stroke="orange"
               strokeWidth="3"
               x="255"
               y="0"
               onPress={this.onSpacePress(mapSpace[4])}
                />
             <Polygon
               points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
               fill="rgba(0,0,0,0.1)"
               stroke="yellow"
               strokeWidth="3"
               x="0"
               y="147.5"
               onPress={this.onSpacePress(mapSpace[5])}
                />
             <Polygon
               points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
               fill="rgba(0,0,0,0.1)"
               stroke="green"
               strokeWidth="3"
               x="170"
               y="147.5"
               onPress={this.onSpacePress(mapSpace[6])}
                />
             <Polygon
               points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
               fill="rgba(0,0,0,0.1)"
               stroke="blue"
               strokeWidth="3"
               x="340"
               y="147.5"
               onPress={this.onSpacePress(mapSpace[7])}
                />
             <Polygon
               points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
               fill="rgba(0,0,0,0.1)"
               stroke="purple"
               strokeWidth="3"
               x="85"
               y="295"
               onPress={this.onSpacePress(mapSpace[8])}
                />
             <Polygon
               points="85 197, 170 148, 170 49.5, 85 0, 0 49.5, 0 148"
               fill="rgba(0,0,0,0.1)"
               stroke="brown"
               strokeWidth="3"
               x="255"
               y="295"
               onPress={this.onSpacePress(mapSpace[9])}
                />