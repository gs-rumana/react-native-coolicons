import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWifiLow = (props: SvgProps) => (
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
      d="M8.343 14.59a5 5 0 0 1 7.29-.025M12 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
    />
  </Svg>
);
export default SvgWifiLow;
