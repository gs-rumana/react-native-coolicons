import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgListChecklist = (props: SvgProps) => (
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
      d="M11 17h9M8 15l-2.5 3L4 17m7-5h9M8 10l-2.5 3L4 12m7-5h9M8 5 5.5 8 4 7"
    />
  </Svg>
);
export default SvgListChecklist;
