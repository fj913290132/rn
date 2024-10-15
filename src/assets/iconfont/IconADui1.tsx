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

let IconADui1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M377.8 832.3c-12.5 0-25-4.8-34.5-14.3L76.5 551.2c-19.1-19.1-19.1-50 0-69.1 19.1-19.1 50-19.1 69.1 0L412.4 749c19.1 19.1 19.1 50 0 69.1-9.6 9.5-22.1 14.2-34.6 14.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M377.8 832.3c-12.5 0-25-4.8-34.5-14.3-19.1-19.1-19.1-50 0-69.1L877 215.3c19.1-19.1 50-19.1 69.1 0s19.1 50 0 69.1L412.4 818c-9.6 9.6-22.1 14.3-34.6 14.3z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconADui1.defaultProps = {
  size: 18,
};

IconADui1 = React.memo ? React.memo(IconADui1) : IconADui1;

export default IconADui1;
