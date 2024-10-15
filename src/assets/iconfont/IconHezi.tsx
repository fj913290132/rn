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

let IconHezi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M925.082 310.63a30.72 30.72 0 0 0-6.554-22.425L811.674 154.778a119.091 119.091 0 0 0-93.39-45.056H321.998a119.654 119.654 0 0 0-90.01 40.96L110.9 288.922a37.53 37.53 0 0 0-2.765 3.788 81.51 81.51 0 0 0-23.5 57.344V801.28a112.64 112.64 0 0 0 112.64 112.64h625.459a112.64 112.64 0 0 0 112.64-112.64V350.31a81.306 81.306 0 0 0-10.291-39.68zM278.22 191.18a58.368 58.368 0 0 1 43.776-20.018h396.288a58.06 58.06 0 0 1 45.465 22.016l60.16 75.212H210.74z m595.712 610.356a51.2 51.2 0 0 1-51.2 51.2h-625.46a51.2 51.2 0 0 1-51.2-51.2V350.31a20.48 20.48 0 0 1 20.48-20.48h686.9a20.48 20.48 0 0 1 20.48 20.48z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M662.374 503.654H357.632a30.72 30.72 0 1 0 0 61.44h304.742a30.72 30.72 0 0 0 0-61.44z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconHezi.defaultProps = {
  size: 18,
};

IconHezi = React.memo ? React.memo(IconHezi) : IconHezi;

export default IconHezi;
