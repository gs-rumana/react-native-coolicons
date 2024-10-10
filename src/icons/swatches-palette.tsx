import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSwatchesPalette = (props: SvgProps) => (
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
      d="M6.5 21h13.97a.53.53 0 0 0 .53-.53v-5.94M7.98 20.67l12.662-5.904a.53.53 0 0 0 .256-.703l-2.51-5.385a.53.53 0 0 0-.704-.256l-5.654 2.636m-2.148 7.346a3.5 3.5 0 0 1-6.762-1.812L6.736 3.1a.53.53 0 0 1 .648-.375l5.74 1.538a.53.53 0 0 1 .373.648zM6.5 17.6h.002v.002H6.5z"
    />
  </Svg>
);
export default SvgSwatchesPalette;
