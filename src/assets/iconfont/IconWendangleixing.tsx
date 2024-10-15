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

let IconWendangleixing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 424c0 37.6-28 64-64 64H168c-36 0-64-28-64-64V176c0-36 28-64 64-64h248c36 0 64 28 64 64v248z m-64 0V176H168v248h248z m140-80.6c-26.7-26.7-26.7-68.1 0-94.8L680.6 124c26.7-26.7 68.1-26.7 94.8 0L900 248.6c26.7 26.7 26.7 68.1 0 94.8L775.4 468c-26.7 26.7-68.1 26.7-94.8 0L556 343.4z m47.4-47.4L728 420.6 852.6 296 728 171.4 603.4 296zM480 872c0 37.6-28 64-64 64H168c-36 0-64-28-64-64V624c0-36 28-64 64-64h248c36 0 64 28 64 64v248z m-64 0V624H168v248h248z m504 0c0 37.6-28 64-64 64H600c-36 0-64-28-64-64V624c0-36 28-64 64-64h256c36 0 64 28 64 64v248z m-64 0V624H600v248h256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWendangleixing.defaultProps = {
  size: 18,
};

IconWendangleixing = React.memo ? React.memo(IconWendangleixing) : IconWendangleixing;

export default IconWendangleixing;
