import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSwichtLeft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill={props.fill}
    {...props}
  >
    <G
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M8 18h8a6 6 0 0 0 0-12H8a6 6 0 1 0 0 12" />
      <Path d="M8 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </G>
  </Svg>
);
export default SvgSwichtLeft;
