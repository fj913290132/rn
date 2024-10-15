/* tslint:disable */
/* eslint-disable */

import React, {FunctionComponent} from 'react';
import {ViewProps} from 'react-native';
import {Svg, GProps, Path} from 'react-native-svg';
import {getIconColor} from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconFapiao: FunctionComponent<Props> = ({size = 18, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M942.848 100.557H90.47a30.72 30.72 0 0 0-30.72 30.72v291.481a30.72 30.72 0 0 0 30.72 30.72h100.096v425.933a45.005 45.005 0 0 0 69.632 37.632l105.984-69.273 126.106 79.206a45.26 45.26 0 0 0 48.077 0l124.774-79.155 108.237 69.734a45.056 45.056 0 0 0 69.376-37.837v-426.24h100.096a30.72 30.72 0 0 0 30.72-30.72V131.277a30.72 30.72 0 0 0-30.72-30.72zM781.312 849.459l-91.75-59.033a45.21 45.21 0 0 0-48.487 0l-124.877 79.257L389.94 790.17a44.749 44.749 0 0 0-23.961-6.81 45.21 45.21 0 0 0-24.628 7.322l-89.344 58.316V304.077h529.306z m130.816-457.42h-69.376v-87.962h7.731a30.72 30.72 0 0 0 0-61.44H182.835a30.72 30.72 0 1 0 0 61.44h7.731v87.961H121.19V161.997h790.938z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M371.968 448.46h288.46v61.44h-288.46z m0 155.956h288.46v61.44h-288.46z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconFapiao = React.memo ? React.memo(IconFapiao) : IconFapiao;

export default IconFapiao;
