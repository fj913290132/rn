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

let IconBiaoqian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M920.529 444.496L580.418 104.381a135.932 135.932 0 0 0-96.156-39.758l-283.844 0.04h-0.018c-75.124 0-136.099 60.746-136.099 135.885v283.674a136.091 136.091 0 0 0 39.882 96.2l340.23 340.24a136.023 136.023 0 0 0 192.37 0l283.746-283.76c53.128-53.132 53.128-139.278 0-192.406z m-45.21 147.193l-283.746 283.76a72.065 72.065 0 0 1-101.925 0L149.436 535.21a72.187 72.187 0 0 1-21.194-50.99v-283.67a72.021 72.021 0 0 1 72.154-71.946l283.844-0.04a71.888 71.888 0 0 1 50.936 21.053L875.29 489.72a72.104 72.104 0 0 1 0.03 101.969z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M384.002 256C313.307 256 256 313.306 256 384.001s57.308 127.996 128.003 127.996 128-57.308 128-128S454.69 256 384.002 256zM429.3 429.294a64.06 64.06 0 1 1 18.759-45.293 63.64 63.64 0 0 1-18.763 45.293z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBiaoqian.defaultProps = {
  size: 18,
};

IconBiaoqian = React.memo ? React.memo(IconBiaoqian) : IconBiaoqian;

export default IconBiaoqian;
