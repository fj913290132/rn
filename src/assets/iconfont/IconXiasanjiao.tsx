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

let IconXiasanjiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M12.899 317.527l462.133 463.018c8.589 8.6 19.866 12.904 31.143 12.904s22.553-4.305 31.143-12.904l473.788-474.689c8.318-8.333 12.894-19.415 12.894-31.204 0-11.789-4.581-22.866-12.899-31.199-17.168-17.204-45.107-17.204-62.28 0l-442.646 443.49L75.179 255.124c-8.318-8.333-19.38-12.92-31.143-12.92s-22.825 4.586-31.143 12.92C4.581 263.457 0 274.54 0 286.328c0 11.783 4.581 22.866 12.899 31.199z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </Svg>
  );
};

IconXiasanjiao.defaultProps = {
  size: 18,
};

IconXiasanjiao = React.memo ? React.memo(IconXiasanjiao) : IconXiasanjiao;

export default IconXiasanjiao;
