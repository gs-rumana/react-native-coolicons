import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloseCircle = (props: SvgProps) => (
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
      d="m9 9 3 3m0 0 3 3m-3-3-3 3m3-3 3-3m-3 12a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
    />
  </Svg>
);
export default SvgCloseCircle;
