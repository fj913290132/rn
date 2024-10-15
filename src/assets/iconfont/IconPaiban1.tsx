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

let IconPaiban1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M513.658 814.886L149.57 647.334l-84.179 35.857L513.68 889.476 958.5 683.192l-83.528-35.868z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M958.502 508.975l-83.53-35.86-361.314 167.558-364.086-167.548-84.182 35.848 448.29 206.29z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M958.501 328.138L513.678 137.156 65.393 328.138l448.291 206.286 444.817-206.286z m-737.996 2.567l292.662-124.7 290.427 124.7-290.428 134.69-292.66-134.69z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconPaiban1.defaultProps = {
  size: 18,
};

IconPaiban1 = React.memo ? React.memo(IconPaiban1) : IconPaiban1;

export default IconPaiban1;
