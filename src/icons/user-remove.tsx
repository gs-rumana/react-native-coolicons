import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserRemove = (props: SvgProps) => (
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
      d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-6h6M9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8"
    />
  </Svg>
);
export default SvgUserRemove;
