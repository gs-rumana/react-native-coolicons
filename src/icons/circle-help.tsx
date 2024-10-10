import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCircleHelp = (props: SvgProps) => (
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
      d="M9.146 9.074a2.998 2.998 0 0 1 5.28-.838A3 3 0 0 1 12 13v1m0 7a9 9 0 1 1 0-18 9 9 0 0 1 0 18m.05-4v.1h-.1V17z"
    />
  </Svg>
);
export default SvgCircleHelp;
