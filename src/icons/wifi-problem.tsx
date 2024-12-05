import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWifiProblem = (props: SvgProps) => (
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
      d="M8.343 14.59a5 5 0 0 1 7.29-.025m-9.484-3.021A8 8 0 0 1 11.96 9m-8.735-.184A12 12 0 0 1 11.959 5M16 9l2-2m0 0 2-2m-2 2-2-2m2 2 2 2m-8 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
    />
  </Svg>
);
export default SvgWifiProblem;
