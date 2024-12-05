import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudRemove = (props: SvgProps) => (
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
      d="M9 13h6m8 2a4 4 0 0 0-4.07-4A7.002 7.002 0 0 0 5.669 9.01 5 5 0 0 0 6 19h13a4 4 0 0 0 4-4"
    />
  </Svg>
);
export default SvgCloudRemove;
