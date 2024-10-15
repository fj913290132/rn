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

let IconShuyutiquicon: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M650.944 640.448H415.808a32.64 32.64 0 0 1-32.64-32.832 32.64 32.64 0 0 1 32.64-32.768h235.136a32.64 32.64 0 0 1 32.64 32.768 32.64 32.64 0 0 1-32.64 32.832z m0-176.896H415.808a32.64 32.64 0 0 1-32.64-32.768 32.64 32.64 0 0 1 32.64-32.768h235.136a32.64 32.64 0 0 1 32.64 32.768 32.64 32.64 0 0 1-32.64 32.768z m0 334.144H415.808a32.64 32.64 0 0 1-32.64-32.768 32.64 32.64 0 0 1 32.64-32.768h235.136a32.64 32.64 0 0 1 32.64 32.768 32.64 32.64 0 0 1-32.64 32.768z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M731.136 974.592H339.2a111.36 111.36 0 0 1-111.104-111.36v-238.4H119.552a32.512 32.512 0 0 1-23.104-9.6A110.464 110.464 0 0 1 64 536.64c0-29.824 11.52-57.728 32.448-78.72L456.576 96.64a110.912 110.912 0 0 1 157.12 0l360.128 361.28c20.992 20.992 32.448 48.896 32.448 78.72 0 29.824-11.52 57.792-32.448 78.72a32.512 32.512 0 0 1-23.104 9.6H842.112v238.4c0 61.376-49.792 111.36-110.976 111.36zM135.296 559.36h125.44a32.64 32.64 0 0 1 32.704 32.768v271.04c0 25.28 20.608 45.888 45.76 45.888h391.936a45.888 45.888 0 0 0 45.76-45.888v-271.04c0-18.048 14.656-32.768 32.64-32.768h125.568a45.568 45.568 0 0 0 6.016-22.912A45.568 45.568 0 0 0 927.808 504l-360.32-361.216a45.632 45.632 0 0 0-64.64 0L142.528 504a46.208 46.208 0 0 0-7.232 55.36z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconShuyutiquicon.defaultProps = {
  size: 18,
};

IconShuyutiquicon = React.memo ? React.memo(IconShuyutiquicon) : IconShuyutiquicon;

export default IconShuyutiquicon;
