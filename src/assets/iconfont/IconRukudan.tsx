/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconRukudan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M526.272 99.392l5.184 3.2 416.896 320a32 32 0 0 1-34.112 53.888l-4.864-3.072-41.6-32v115.584a32 32 0 0 1-63.488 5.76l-0.512-5.76v-159.36l0.384-4.992L512 168.32 224.448 390.144l0.384 1.792 0.512 5.76v469.632h608a32 32 0 0 1 31.488 26.24l0.512 5.76a32 32 0 0 1-26.24 31.488l-5.76 0.512h-640a32 32 0 0 1-31.488-26.24l-0.512-5.76V438.72l-44.8 34.624a32 32 0 0 1-40.96-1.536l-3.968-4.288a32 32 0 0 1 1.6-40.96l4.224-3.904 415.04-320a32 32 0 0 1 33.792-3.264zM499.712 620.8v51.52h364.224a32 32 0 0 1 5.76 63.552l-5.76 0.512-364.288-0.064 0.064 50.88-128-84.096 128-82.304zM624.704 448a32 32 0 0 1 5.76 63.488l-5.824 0.512h-224a32 32 0 0 1-5.76-63.488l5.824-0.512h224z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRukudan.defaultProps = {
  size: 18,
};

IconRukudan = React.memo ? React.memo(IconRukudan) : IconRukudan;

export default IconRukudan;
