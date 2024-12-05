import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoreGridBig = (props: SvgProps) => (
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
      <Path d="M17 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M17 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M17 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </G>
  </Svg>
);
export default SvgMoreGridBig;
