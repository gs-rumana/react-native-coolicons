import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperclipAttechmentHorizontal = (props: SvgProps) => (
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
      d="M7 6h9.75a5.25 5.25 0 1 1 0 10.5H5.5a3.5 3.5 0 1 1 0-7h11.25a1.75 1.75 0 1 1 0 3.5H7"
    />
  </Svg>
);
export default SvgPaperclipAttechmentHorizontal;
