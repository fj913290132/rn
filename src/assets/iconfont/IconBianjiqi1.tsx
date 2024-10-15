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

let IconBianjiqi1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M729.064 86.355h-30.099V41.043C698.965 18.387 680.578 0 657.922 0S616.88 18.387 616.88 41.043v45.312H407.121V41.043C407.121 18.387 388.734 0 366.078 0s-41.043 18.387-41.043 41.043v45.312h-30.099c-138.452 0-251.731 113.279-251.731 251.731v434.128c0 138.452 113.279 251.731 251.731 251.731h434.128c138.452 0 251.731-113.279 251.731-251.731V338.086c0-138.452-113.279-251.731-251.731-251.731zM125.29 772.268V338.086c0-93.523 76.122-169.645 169.645-169.645h30.099v11.602c0 22.656 18.387 41.043 41.043 41.043s41.043-18.387 41.043-41.043V168.44h209.758v11.602c0 22.656 18.387 41.043 41.043 41.043s41.043-18.387 41.043-41.043V168.44h30.099c93.523 0 169.645 76.122 169.645 169.645v293.979c-130.244 5.746-234.384 113.443-234.384 245.055 0 21.945 3.01 43.725 8.756 64.739H294.936c-93.523 0-169.645-76.122-169.645-169.645zM758.67 939.287a163.647 163.647 0 0 1-12.259-62.112c0-86.355 67.366-157.223 152.298-162.86v57.953c0 83.455-60.58 152.955-140.04 167.019z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M683.478 424.277c0-22.656-18.387-41.043-41.043-41.043h-260.87c-22.656 0-41.043 18.387-41.043 41.043s18.387 41.043 41.043 41.043h89.364v220.703c0 22.656 18.388 41.043 41.044 41.043s41.043-18.387 41.043-41.043V465.32h89.365c22.655 0 41.043-18.387 41.043-41.043z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBianjiqi1.defaultProps = {
  size: 18,
};

IconBianjiqi1 = React.memo ? React.memo(IconBianjiqi1) : IconBianjiqi1;

export default IconBianjiqi1;
