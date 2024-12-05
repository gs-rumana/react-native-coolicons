import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCaretDownMd = (props: SvgProps) => (
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
      d="m16 10-4 4-4-4"
    />
  </Svg>
);
export default SvgCaretDownMd;
