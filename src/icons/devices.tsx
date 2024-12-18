import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDevices = (props: SvgProps) => (
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
      d="M6 7.5v-.3c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C7.52 4 8.08 4 9.2 4h8.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v6.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.874.875C19.48 17 18.92 17 17.803 17H10.5M3 16.8v-5.6c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C4.52 8 5.08 8 6.2 8h.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875C8.48 20 7.921 20 6.803 20h-.606c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C3 18.48 3 17.92 3 16.8"
    />
  </Svg>
);
export default SvgDevices;
