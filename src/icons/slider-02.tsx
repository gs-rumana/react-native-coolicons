import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSlider02 = (props: SvgProps) => (
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
      d="M14 18h7M3 18h2m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m15-6h1M3 12h7m3-6h8m-8 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0M3 6h1m12.5 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
    />
  </Svg>
);
export default SvgSlider02;
