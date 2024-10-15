import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUser02 = (props: SvgProps) => (
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
      d="M20 21c0-2.761-3.582-5-8-5s-8 2.239-8 5m8-8a5 5 0 1 1 0-10 5 5 0 0 1 0 10"
    />
  </Svg>
);
export default SvgUser02;
