import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMove = (props: SvgProps) => (
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
      d="M12 21v-9m0 9 3-3m-3 3-3-3m3-6V3m0 9H3m9 0h9m-9-9L9 6m3-3 3 3M3 12l3 3m-3-3 3-3m15 3-3-3m3 3-3 3"
    />
  </Svg>
);
export default SvgMove;
