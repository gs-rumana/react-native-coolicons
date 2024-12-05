import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserVoice = (props: SvgProps) => (
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
      d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4M16.828 5.172a4 4 0 0 1 0 5.657M19 3a7.07 7.07 0 0 1 0 10M9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8"
    />
  </Svg>
);
export default SvgUserVoice;
