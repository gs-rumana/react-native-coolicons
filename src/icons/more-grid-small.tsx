import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoreGridSmall = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <G
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M14 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </G>
  </Svg>
);
export default SvgMoreGridSmall;