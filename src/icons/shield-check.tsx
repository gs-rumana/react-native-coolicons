import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShieldCheck = (props: SvgProps) => (
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
      d="m15 9-4 4-2-2m11-.835c0 6.568-4.968 9.513-7.074 10.466l-.003.002c-.221.1-.332.15-.584.193-.16.028-.518.028-.677 0a2 2 0 0 1-.588-.195C8.968 19.678 4 16.733 4 10.165V6.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 3 6.08 3 7.2 3h9.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105z"
    />
  </Svg>
);
export default SvgShieldCheck;
