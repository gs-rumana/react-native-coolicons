import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFigma = (props: SvgProps) => (
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
      d="M9 15h3m-3 0a3 3 0 1 0 3 3v-3m-3 0a3 3 0 1 1 0-6m3 6v-3M9 9h3M9 9a3 3 0 0 1 0-6h3m0 6v3m0-3V3m0 6h3m-3 3a3 3 0 1 0 3-3m-3 3a3 3 0 0 1 3-3m-3-6h3a3 3 0 1 1 0 6"
    />
  </Svg>
);
export default SvgFigma;
