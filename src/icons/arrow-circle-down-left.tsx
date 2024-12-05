import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowCircleDownLeft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill={props.fill}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 11v4m0 0h4m-4 0 6-6m6 3a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
    />
  </Svg>
);
export default SvgArrowCircleDownLeft;
