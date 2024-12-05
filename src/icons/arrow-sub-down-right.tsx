import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowSubDownRight = (props: SvgProps) => (
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
      d="m13 11 5 5m0 0-5 5m5-5h-7.803c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C7 14.48 7 13.92 7 12.8V3"
    />
  </Svg>
);
export default SvgArrowSubDownRight;
