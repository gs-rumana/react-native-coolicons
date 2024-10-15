import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCompass = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.fill}
    {...props}
  >
    <G
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
      <Path d="M10.5 10.5 16 8l-2.5 5.5L8 16z" />
    </G>
  </Svg>
);
export default SvgCompass;
