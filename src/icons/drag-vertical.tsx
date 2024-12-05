import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDragVertical = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill={props.fill}
    {...props}
  >
    <G
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M14 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </G>
  </Svg>
);
export default SvgDragVertical;
