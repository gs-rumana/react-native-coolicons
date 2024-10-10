import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBellOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17v1a3 3 0 1 0 6 0v-1m-6 0h6m-6 0H5a1 1 0 0 1-.993-.883L4 16v-.586a1 1 0 0 1 .293-.707l.51-.51A.67.67 0 0 0 5 13.722V10c0-1.842.711-3.517 1.874-4.767M15 17h4M5 3l16 16m-2-6.001V10a7 7 0 0 0-7-7l-.24.004a7 7 0 0 0-2.29.467"
    />
  </Svg>
);
export default SvgBellOff;
