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

let IconFuwudingjia: FunctionComponent<Props> = ({
  size = 18,
  color,
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M463.232 61.696a373.333 373.333 0 0 1 371.755 407.723h51.242a32 32 0 0 1 32 32V793.77a32 32 0 0 1-32 32H692.224l-164.352 93.738a32 32 0 0 1-11.733 3.968l-4.139 0.256H229.077a32 32 0 0 1-10.837-1.877c-52.48-18.859-81.877-55.637-81.877-106.112 0-49.579 28.245-87.637 79.402-111.019l-7.082 3.456A373.333 373.333 0 0 1 463.232 61.696z m390.997 471.68H665.173l-243.072 224a32 32 0 0 1-16.896 8.107l-4.778 0.384H236.373l-7.125 3.925c-18.432 11.093-27.221 24.277-28.672 40.832l-0.256 5.12c0 18.432 7.979 31.19 27.605 40.875l7.083 3.072h268.501l164.31-93.739a32 32 0 0 1 11.733-3.925l4.139-0.256h170.496V533.333z m-390.997-407.68a309.333 309.333 0 0 0-156.587 576.213l81.238-0.085 243.072-223.957a32 32 0 0 1 16.938-8.107l4.779-0.341h117.973A309.333 309.333 0 0 0 463.19 125.696z m36.907 140.885a32.853 32.853 0 0 1 42.581-18.517 31.147 31.147 0 0 1 17.579 40.405l-24.022 60.8 23.51 0.043a32 32 0 1 1 0 64h-64v21.333h64a32 32 0 0 1 0 64h-64v41.387a32 32 0 0 1-64 0v-41.387h-64a32 32 0 1 1 0-64h64v-21.333h-64a32 32 0 1 1 0-64h14.506l-23.68-60.032a31.147 31.147 0 0 1 18.347-40.747 32.853 32.853 0 0 1 41.813 18.816l32.299 81.92h16.427z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFuwudingjia = React.memo ? React.memo(IconFuwudingjia) : IconFuwudingjia;

export default IconFuwudingjia;
