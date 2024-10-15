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

let IconA25PpWeiruanshichuangWindows: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M420 488.8H144a32 32 0 0 1-32-32V236a32 32 0 0 1 27.776-31.712l276-36.8A31.936 31.936 0 0 1 452 199.2v257.6a32 32 0 0 1-32 32z m-244-64h212V235.744L176 264v160.8z m704 64H530.4a32 32 0 0 1-32-32V188.672a32 32 0 0 1 27.936-31.744l349.6-44.672a31.264 31.264 0 0 1 25.216 7.712A32.118 32.118 0 0 1 912 144v312.8a32 32 0 0 1-32 32z m-317.6-64H848V180.352l-285.6 36.512V424.8zM880 912a31.072 31.072 0 0 1-5.152-0.416l-349.6-57.248a32 32 0 0 1-26.816-31.584V585.6a32 32 0 0 1 9.632-22.912c6.176-6.016 14.784-8.704 23.104-9.088l349.6 8.192a32 32 0 0 1 31.264 32V880A31.936 31.936 0 0 1 880 912zM562.4 795.552L848 842.336V625.024l-285.6-6.688v177.216zM420 838.4c-1.76 0-3.552-0.16-5.312-0.448l-276-46.496A32 32 0 0 1 112 759.904V567.2c0-8.64 3.488-16.864 9.632-22.912 6.176-6.016 14.464-9.088 23.136-9.088l276 6.656a32 32 0 0 1 31.232 32V806.4a32.032 32.032 0 0 1-32 32zM176 732.832l212 35.712V605.088l-212-5.12v132.864z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconA25PpWeiruanshichuangWindows.defaultProps = {
  size: 18,
};

IconA25PpWeiruanshichuangWindows = React.memo ? React.memo(IconA25PpWeiruanshichuangWindows) : IconA25PpWeiruanshichuangWindows;

export default IconA25PpWeiruanshichuangWindows;
