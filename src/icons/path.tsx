import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPath = (props: SvgProps) => (
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
      d="M8.121 15.879a3 3 0 1 0-4.243 4.243 3 3 0 0 0 4.243-4.243m0 0L15.88 8.12m0 0a3 3 0 1 0 4.243-4.243 3 3 0 0 0-4.243 4.243m0 0 .004-.004"
    />
  </Svg>
);
export default SvgPath;
