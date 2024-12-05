import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagnifyingGlassMinus = (props: SvgProps) => (
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
      d="M7 10h6m2 5 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14"
    />
  </Svg>
);
export default SvgMagnifyingGlassMinus;
