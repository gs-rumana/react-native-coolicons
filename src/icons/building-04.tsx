import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBuilding04 = (props: SvgProps) => (
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
      d="M2 20h2m0 0h10M4 20V6.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 3 6.08 3 7.2 3h3.6c1.12 0 1.68 0 2.107.218.377.192.684.497.875.874.218.427.218.987.218 2.105V12m0 8h6m-6 0v-8m6 8h2m-2 0v-8c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.082-1.083C18.398 9 17.932 9 17 9s-1.398 0-1.766.152a2 2 0 0 0-1.082 1.083C14 10.602 14 11.068 14 12m-7-2h4M7 7h4"
    />
  </Svg>
);
export default SvgBuilding04;
