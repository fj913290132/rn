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

let IconRenwufenpei: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1092 1024" width={size} height={size} {...rest}>
      <Path
        d="M998.179912 510.64288L521.481406 66.233991a38.092191 38.092191 0 0 1-1.638374-54.134601 38.092191 38.092191 0 0 1 54.066335-1.638373l506.189234 472.397775c15.223223 14.130974 16.383738 38.228722 2.184498 53.998069l-2.184498 2.184498-506.735359 470.691136a38.092191 38.092191 0 0 1-54.066335-2.184498 38.092191 38.092191 0 0 1 2.184499-54.066335c0 0.546125 476.698506-442.838781 476.698506-442.838782zM219.474504 38.313371a37.955659 37.955659 0 0 1 63.896578-27.852354l506.189234 472.397775c15.291489 14.130974 16.383738 38.228722 2.184499 53.998069l-2.184499 2.184498-506.189234 470.691136a38.57005 38.57005 0 0 1-54.066335-1.638374 38.638315 38.638315 0 0 1-10.376367-26.21398v-252.241298H38.229404a37.955659 37.955659 0 0 1-38.228721-38.228722V335.88301c0-21.298859 16.929862-38.228722 38.228721-38.228722h181.2451V38.245105zM295.385823 126.307696v209.711845c0 21.298859-16.929862 38.228722-38.228722 38.228722H76.458126v279.001402h181.2451c21.298859 0 38.228722 16.929862 38.228722 38.228722v203.090084l412.324069-383.857325-412.870194-384.335184z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRenwufenpei.defaultProps = {
  size: 18,
};

IconRenwufenpei = React.memo ? React.memo(IconRenwufenpei) : IconRenwufenpei;

export default IconRenwufenpei;