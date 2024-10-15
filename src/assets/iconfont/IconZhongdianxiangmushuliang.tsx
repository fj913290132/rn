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

let IconZhongdianxiangmushuliang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M844.7 682.7h-664c-57.4-0.1-104-46.7-104.1-104.1V447.9c0.2-57.4 46.7-103.9 104.1-103.9h663.9c57.4 0 104 46.5 104.1 103.9v131.4c-0.4 57.1-46.8 103.3-104 103.4zM180.7 409c-21.5 0-39 17.4-39.2 39v131.4c0.4 21.4 17.8 38.5 39.2 38.5h663.9c21.6 0 39.2-17.5 39.2-39.2V447.9c-0.1-21.5-17.6-39-39.2-39H180.7z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M844.7 957.5h-664c-57.4 0-104-46.5-104.1-103.9V722.3c-0.1-27.7 10.8-54.3 30.3-73.9 19.5-19.6 46.1-30.6 73.8-30.6h663.9c57.4 0 104 46.5 104.1 103.9v132c0 57.4-46.6 103.8-104 103.8z m-664-274.8c-10.4-0.1-20.3 4-27.7 11.3-7.3 7.3-11.5 17.2-11.5 27.6v132c0.1 21.5 17.6 39 39.2 39h663.9c21.5 0 39.1-17.4 39.2-39V722.3c0.2-10.5-3.9-20.6-11.3-28-7.4-7.4-17.4-11.6-27.9-11.6H180.7z m0 0M844.7 406.6h-664c-57.4 0-104-46.5-104.1-103.9V171.3c0.1-57.4 46.7-103.9 104.1-103.9h663.9c57.4 0 104 46.5 104.1 103.9v131.4c0 57.4-46.6 103.9-104 103.9z m-664-274.2c-21.5 0-39 17.4-39.2 39v131.4c0 10.4 4.1 20.3 11.5 27.6 7.4 7.3 17.3 11.4 27.7 11.3h663.9c10.4 0.1 20.3-4 27.7-11.3 7.4-7.3 11.5-17.2 11.5-27.6V171.3c-0.1-21.5-17.6-39-39.2-39H180.7z m0 0"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M208.5 234.1c0 15.9 8.5 30.5 22.2 38.4 13.7 7.9 30.6 7.9 44.4 0 13.7-7.9 22.2-22.6 22.2-38.4 0-24.5-19.9-44.4-44.4-44.4-24.6 0-44.4 19.9-44.4 44.4z m-7.4 279.6c0 24.5 19.9 44.4 44.4 44.4s44.4-19.9 44.4-44.4-19.9-44.4-44.4-44.4-44.4 19.9-44.4 44.4zM195 793.1c0 24.5 19.9 44.4 44.4 44.4s44.4-19.9 44.4-44.4-19.9-44.4-44.4-44.4-44.4 19.9-44.4 44.4z m0 0"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconZhongdianxiangmushuliang.defaultProps = {
  size: 18,
};

IconZhongdianxiangmushuliang = React.memo ? React.memo(IconZhongdianxiangmushuliang) : IconZhongdianxiangmushuliang;

export default IconZhongdianxiangmushuliang;
