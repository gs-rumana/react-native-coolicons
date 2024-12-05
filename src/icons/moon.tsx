import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoon = (props: SvgProps) => (
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
      d="M9 6a9 9 0 0 0 9 9c.91 0 1.787-.134 2.614-.385A9 9 0 0 1 12 21 9 9 0 0 1 9.386 3.386 9 9 0 0 0 9 6"
    />
  </Svg>
);
export default SvgMoon;
