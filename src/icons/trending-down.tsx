import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTrendingDown = (props: SvgProps) => (
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
      d="m20 17-5.846-5.937a5 5 0 0 0-.205-.203 2 2 0 0 0-2.667 0c-.047.042-.1.096-.205.203-.105.106-.158.16-.205.202a2 2 0 0 1-2.667 0c-.047-.042-.1-.096-.205-.203L4 7m16 10v-6m0 6h-6"
    />
  </Svg>
);
export default SvgTrendingDown;
