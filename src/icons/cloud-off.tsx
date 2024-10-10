import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 19H6a5 5 0 0 1-.332-9.99 7 7 0 0 1 1.333-1.909M19 19 5 5m14 14 2 2M10 5.29A7.002 7.002 0 0 1 18.93 11H19a3.999 3.999 0 0 1 3.122 6.5"
    />
  </Svg>
);
export default SvgCloudOff;
