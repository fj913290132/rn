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

let IconGengduogongju: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M393.216 465.92H184.32c-41.472 0-75.264-33.792-75.264-75.264V182.272c0-40.96 33.792-74.752 75.264-74.752h208.896c41.472 0 75.264 33.792 75.264 75.264v208.384c-0.512 40.96-33.792 74.752-75.264 74.752z m-207.36-76.8h205.312v-204.8H185.856v204.8z m657.408 76.8H634.368c-41.472 0-75.264-33.792-75.264-75.264V182.272c0-41.472 33.792-75.264 75.264-75.264h208.896c41.472 0 75.264 33.792 75.264 75.264v208.384c-0.512 41.472-33.792 75.264-75.264 75.264z m-207.36-76.8h205.312v-204.8H635.904v204.8zM393.216 916.48H184.32c-41.472 0-75.264-33.792-75.264-75.264V632.832c0-41.472 33.792-75.264 75.264-75.264h208.896c41.472 0 75.264 33.792 75.264 75.264v208.384c-0.512 41.472-33.792 75.264-75.264 75.264z m-207.36-76.8h205.312v-204.8H185.856v204.8zM870.4 783.872H588.8c-20.992 0-38.4-17.408-38.4-38.4s17.408-38.4 38.4-38.4h281.6c20.992 0 38.4 17.408 38.4 38.4s-16.896 38.4-38.4 38.4z m0-132.096H588.8c-20.992 0-38.4-17.408-38.4-38.4s17.408-38.4 38.4-38.4h281.6c20.992 0 38.4 17.408 38.4 38.4s-16.896 38.4-38.4 38.4z m0 263.68H588.8c-20.992 0-38.4-17.408-38.4-38.4s17.408-38.4 38.4-38.4h281.6c20.992 0 38.4 17.408 38.4 38.4s-16.896 38.4-38.4 38.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGengduogongju.defaultProps = {
  size: 18,
};

IconGengduogongju = React.memo ? React.memo(IconGengduogongju) : IconGengduogongju;

export default IconGengduogongju;
