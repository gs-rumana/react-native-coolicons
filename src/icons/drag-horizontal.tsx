import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDragHorizontal = (props: SvgProps) => (
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
      <Path d="M18 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2M18 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </G>
  </Svg>
);
export default SvgDragHorizontal;
