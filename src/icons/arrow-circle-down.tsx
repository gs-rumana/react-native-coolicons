import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowCircleDown = (props: SvgProps) => (
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
      d="m9 13 3 3m0 0 3-3m-3 3V8m9 4a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
    />
  </Svg>
);
export default SvgArrowCircleDown;
