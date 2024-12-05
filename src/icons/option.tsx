import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOption = (props: SvgProps) => (
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
      d="M3 7h5.094c.33 0 .495 0 .643.047q.2.064.357.202c.117.103.202.245.372.528l5.068 8.446c.17.284.255.425.372.528q.156.137.356.202c.148.047.314.047.644.047H21M15 7h6"
    />
  </Svg>
);
export default SvgOption;
