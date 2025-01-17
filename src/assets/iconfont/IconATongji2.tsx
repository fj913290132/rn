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

let IconATongji2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M488.96 960c74.24 0 145.92-17.92 209.92-53.76 10.24-5.12 17.92-15.36 17.92-28.16s-5.12-23.04-15.36-30.72c-10.24-5.12-23.04-5.12-33.28 0-53.76 30.72-115.2 46.08-179.2 46.08-202.24 0-366.08-163.84-366.08-366.08 0-192 145.92-348.16 332.8-366.08v366.08c0 17.92 15.36 33.28 33.28 33.28h401.92c17.92 0 33.28-15.36 33.28-33.28 0-238.08-194.56-432.64-432.64-432.64-238.08 0-435.2 194.56-435.2 432.64C53.76 765.44 248.32 960 488.96 960z m366.08-465.92h-332.8v-332.8c176.64 15.36 314.88 156.16 332.8 332.8z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M819.2 688.64c-7.68 17.92-17.92 35.84-30.72 51.2-10.24 15.36-7.68 35.84 7.68 46.08 15.36 10.24 35.84 7.68 46.08-7.68 12.8-20.48 25.6-38.4 35.84-61.44 7.68-15.36 2.56-35.84-15.36-43.52-15.36-7.68-35.84-2.56-43.52 15.36z m0 0"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconATongji2.defaultProps = {
  size: 18,
};

IconATongji2 = React.memo ? React.memo(IconATongji2) : IconATongji2;

export default IconATongji2;
