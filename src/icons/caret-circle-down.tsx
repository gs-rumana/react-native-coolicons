import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCaretCircleDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.fill}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 11-3 3-3-3m12 1a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
    />
  </Svg>
);
export default SvgCaretCircleDown;
