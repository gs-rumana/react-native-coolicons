import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserSquare = (props: SvgProps) => (
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
      d="M17 21a5 5 0 0 0-10 0m10 0h.803c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.875.218-.427.218-.986.218-2.104V6.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 3 18.92 3 17.8 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2v11.6c0 1.12 0 1.68.218 2.107.192.377.497.683.874.875.427.218.987.218 2.105.218H7m10 0H7m5-8a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
    />
  </Svg>
);
export default SvgUserSquare;
