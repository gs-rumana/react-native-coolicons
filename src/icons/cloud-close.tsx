import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudClose = (props: SvgProps) => (
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
      d="m10 15 2-2m0 0 2-2m-2 2-2-2m2 2 2 2m9 0a4 4 0 0 0-4.07-4A7.002 7.002 0 0 0 5.669 9.01 5 5 0 0 0 6 19h13a4 4 0 0 0 4-4"
    />
  </Svg>
);
export default SvgCloudClose;
