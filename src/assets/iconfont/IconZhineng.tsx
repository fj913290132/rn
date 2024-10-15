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

let IconZhineng: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M382.78 850.17c-185.97 0-337.29-151.32-337.29-337.29S196.81 175.6 382.78 175.6s337.25 151.32 337.25 337.29-151.28 337.28-337.25 337.28z m0-599.63c-144.66 0-262.34 117.69-262.34 262.34s117.69 262.34 262.34 262.34c144.62 0 262.3-117.69 262.3-262.34S527.4 250.54 382.78 250.54z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M648.09 175.6h-0.62c-20.42 0-37.14 16.39-37.47 36.85-0.33 20.71 16.17 37.76 36.85 38.09 142.31 2.31 258.1 119.95 258.1 262.2 0 142.02-115.67 259.67-257.18 262.23h-0.29c-20.71 0-37.47 16.76-37.47 37.47 0 20.71 16.76 37.47 37.47 37.47h0.29c0.23 0 0.46-0.01 0.69-0.02v0.02c182.75-3.33 331.43-154.57 331.43-337.18 0-182.89-148.87-334.13-331.8-337.13z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconZhineng.defaultProps = {
  size: 18,
};

IconZhineng = React.memo ? React.memo(IconZhineng) : IconZhineng;

export default IconZhineng;
