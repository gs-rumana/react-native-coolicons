import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKeyboard = (props: SvgProps) => (
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
      d="M18 15h1M9 15h6m-9 0H5m0-3h14M5 9h14M2 14.8V9.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C3.52 6 4.08 6 5.2 6h13.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H5.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C2 16.48 2 15.92 2 14.8"
    />
  </Svg>
);
export default SvgKeyboard;
