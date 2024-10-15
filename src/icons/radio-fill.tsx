import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadioFill = (props: SvgProps) => (
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
      <Path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16" />
      <Path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </G>
  </Svg>
);
export default SvgRadioFill;
