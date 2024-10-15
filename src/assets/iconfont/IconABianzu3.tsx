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

let IconABianzu3: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m0 64a448 448 0 1 0 0 896A448 448 0 0 0 512 64z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M298.688 373.312a32 32 0 0 1 31.488 26.24l0.512 5.76v213.376a32 32 0 0 1-63.488 5.76l-0.512-5.76V405.312a32 32 0 0 1 32-32zM512 266.688a32 32 0 0 1 31.488 26.24l0.512 5.76V704a32 32 0 0 1-63.488 5.76L480 704V298.688a32 32 0 0 1 32-32zM725.312 373.312a32 32 0 0 1 31.488 26.24l0.512 5.76v213.376a32 32 0 0 1-63.488 5.76l-0.512-5.76V405.312a32 32 0 0 1 32-32z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconABianzu3.defaultProps = {
  size: 18,
};

IconABianzu3 = React.memo ? React.memo(IconABianzu3) : IconABianzu3;

export default IconABianzu3;
