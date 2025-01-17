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

let IconAShujuanquan2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M830.848 210.752l0.832 11.008c0.32 0 0.256 0.512 0.128 0.96l0.128 0.64 0.064 0.64 0.064 173.376c-21.12-4.288-42.496-7.68-64-10.24L768 321.28c-92.672 56.128-259.328 62.336-313.6 62.72H448c-44.096 0-208.768-3.84-307.52-55.744l-12.48-7.04V512c0 38.272 127.616 96 320 96l-7.168-0.064v64c-113.792-0.768-227.2-21.248-299.52-60.16L128 604.16V800c0 38.272 127.616 96 320 96 15.36 0 30.336-0.384 44.8-1.088 18.56 20.928 42.24 40.32 70.72 58.24C526.08 957.696 486.976 960 448 960c-185.472 0-373.248-51.904-383.552-151.36L64 800V224l0.128-1.28-0.128-1.408c3.456-142.08 289.28-156.16 372.608-157.248h16.64c72.32 0.384 359.872 10.88 377.6 146.688zM732.416 448c74.304 5.76 147.136 23.04 215.36 51.2 5.888 2.176 10.24 6.848 11.648 12.416l0.576 4.352v250.688c0 75.712-72.192 138.56-220.8 192.128a19.968 19.968 0 0 1-13.568 0c-142.08-51.2-214.336-110.912-220.352-182.272l-0.384-9.856V515.968a17.92 17.92 0 0 1 12.16-16.704A706.816 706.816 0 0 1 732.48 448z m0 64.256l-20.352 1.984c-42.048 4.928-83.52 13.952-124.48 27.264l-18.752 6.464v216.064l0.256 7.04c3.008 35.712 47.872 75.84 147.008 115.648l16.32 6.336 1.088-0.384C842.688 851.2 891.52 809.6 895.68 772.032l0.32-5.376-0.064-218.752-19.84-6.848a644.928 644.928 0 0 0-123.328-26.816l-20.352-1.984zM448 128c-176.704 0-320 43.008-320 96s143.296 96 320 96 320-43.008 320-96-143.296-96-320-96z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconAShujuanquan2.defaultProps = {
  size: 18,
};

IconAShujuanquan2 = React.memo ? React.memo(IconAShujuanquan2) : IconAShujuanquan2;

export default IconAShujuanquan2;
