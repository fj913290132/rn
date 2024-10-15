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

let IconAYuliaoku1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M532.025 57.913l4.38 3.413 365.511 342.3 82.432 74.411-36.522 48.015-21.789-12.971a32.768 32.768 0 0 1-5.29-2.788l-1.878-1.479-4.494-2.674 0.114 334.393a131.3 131.3 0 0 1-122.482 130.56l-8.988 0.285H240.185a131.413 131.413 0 0 1-131.129-121.913l-0.341-8.932V506.197l-6.827 4.153L76.8 525.483l-36.523-48.015 54.614-49.095 391.907-367.16a32.711 32.711 0 0 1 19.229-8.534l5.12 0.114a32.427 32.427 0 0 1 20.878 5.12z m-20.48 69.803L174.194 441.913v398.62c0 33.735 25.77 61.554 58.823 65.138l7.168 0.398h542.834c33.905 0 62.009-25.6 65.593-58.425l0.398-7.11-0.057-311.752 0.569 0.057 0.796-83.797-338.773-317.326z m229.603 554.95v58.255H399.531v-58.254h341.617z m-398.506 0v58.255h-56.89v-58.254h56.89zM741.148 512v58.254H399.531V512h341.617z m-398.506 0v58.254h-56.89V512h56.89z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconAYuliaoku1.defaultProps = {
  size: 18,
};

IconAYuliaoku1 = React.memo ? React.memo(IconAYuliaoku1) : IconAYuliaoku1;

export default IconAYuliaoku1;
