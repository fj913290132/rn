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

let IconAYulan1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M315.5 512c0 108.3 88.1 196.5 196.5 196.5S708.5 620.3 708.5 512 620.3 315.5 512 315.5 315.5 403.7 315.5 512zM512 651.5c-76.9 0-139.5-62.6-139.5-139.5S435.1 372.5 512 372.5 651.5 435.1 651.5 512 588.9 651.5 512 651.5z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M955.7 496.1c-64.9-96.7-135.1-170.4-208.6-219-73.9-48.9-152.9-73.6-235-73.6s-161.2 24.8-235 73.6c-73.5 48.6-143.7 122.3-208.6 219-6.5 9.7-6.5 22.1 0 31.8 64.9 96.7 135.1 170.4 208.6 219 73.9 48.9 152.9 73.6 235 73.6s161.2-24.8 235-73.6c73.5-48.6 143.7-122.3 208.6-219 6.4-9.7 6.4-22.1 0-31.8zM897.5 512C781.2 678.9 651.5 763.5 512 763.5S242.8 678.9 126.5 512c116.3-166.9 246-251.5 385.5-251.5S781.2 345.1 897.5 512z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconAYulan1.defaultProps = {
  size: 18,
};

IconAYulan1 = React.memo ? React.memo(IconAYulan1) : IconAYulan1;

export default IconAYulan1;
