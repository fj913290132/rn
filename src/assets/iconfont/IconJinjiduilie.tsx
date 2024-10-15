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

let IconJinjiduilie: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M376.866676 595.688727H176.907404a37.236364 37.236364 0 0 1-34.862546-50.501818L340.840495 23.970909A37.236364 37.236364 0 0 1 375.516858 0h335.127273a37.236364 37.236364 0 0 1 34.443636 51.293091l-115.618909 283.741091H847.161949a37.236364 37.236364 0 0 1 28.020364 61.812363L341.492131 1004.916364c-25.925818 29.556364-74.007273 3.956364-64-34.117819l99.374545-375.109818zM401.209949 74.472727l-170.170182 446.743273h194.094546a37.236364 37.236364 0 0 1 36.072727 46.778182l-71.214545 268.613818 374.830545-427.147636H574.126313a37.236364 37.236364 0 0 1-34.443637-51.246546l115.618909-283.834182h-254.138181V74.472727z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJinjiduilie.defaultProps = {
  size: 18,
};

IconJinjiduilie = React.memo ? React.memo(IconJinjiduilie) : IconJinjiduilie;

export default IconJinjiduilie;
