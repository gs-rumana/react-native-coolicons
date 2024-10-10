import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgData = (props: SvgProps) => (
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
      d="M18 12v5c0 1.657-2.686 3-6 3s-6-1.343-6-3v-5m12 0V7m0 5c0 1.657-2.686 3-6 3s-6-1.343-6-3m12-5c0-1.657-2.686-3-6-3S6 5.343 6 7m12 0c0 1.657-2.686 3-6 3S6 8.657 6 7m0 5V7"
    />
  </Svg>
);
export default SvgData;
