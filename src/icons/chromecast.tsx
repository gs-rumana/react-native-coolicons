import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChromecast = (props: SvgProps) => (
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
      d="M3 8.25V8.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v7.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.874.875C19.48 19 18.92 19 17.803 19H14m-9 0a2 2 0 0 0-2-2m5 2a5 5 0 0 0-5-5m8 5a8 8 0 0 0-8-8"
    />
  </Svg>
);
export default SvgChromecast;
