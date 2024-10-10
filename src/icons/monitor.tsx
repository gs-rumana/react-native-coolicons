import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMonitor = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 20H9m-5-6.2V8.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 5 6.08 5 7.2 5h9.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C4 15.48 4 14.92 4 13.8"
    />
  </Svg>
);
export default SvgMonitor;