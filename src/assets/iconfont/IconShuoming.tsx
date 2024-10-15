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

let IconShuoming: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024c-281.6 0-512-230.4-512-512s230.4-512 512-512 512 230.4 512 512-230.4 512-512 512zM512 85.312c-234.688 0-426.688 192-426.688 426.688s192 426.688 426.688 426.688 426.688-192 426.688-426.688-192-426.688-426.688-426.688z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 307.2a38.72 38.72 0 0 1-12.8-29.888c0-12.8 4.288-21.312 12.8-29.824a38.72 38.72 0 0 1 29.888-12.8c12.8 0 21.312 4.224 29.824 12.8 8.576 8.512 12.8 17.024 12.8 29.824s-4.224 21.376-12.8 29.888a46.08 46.08 0 0 1-29.824 12.8A38.72 38.72 0 0 1 512 307.2z m98.112 409.6c-4.224 0-8.512 4.288-8.512 4.288-34.112 55.424-110.912 106.624-98.112 34.112 0-4.288 68.224-349.888 68.224-349.888C576 384 558.912 358.4 537.6 354.112c-21.312-4.224-38.4 8.576-46.912 29.888l-64 337.088c-21.376 153.6 132.224 128 192 12.8 4.224-4.288 4.224-8.576 4.224-12.8-4.224 0-8.512-4.288-12.8-4.288z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconShuoming.defaultProps = {
  size: 18,
};

IconShuoming = React.memo ? React.memo(IconShuoming) : IconShuoming;

export default IconShuoming;
