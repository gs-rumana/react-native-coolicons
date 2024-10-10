import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserCardId = (props: SvgProps) => (
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
      d="M6 18h6m-6 0c-.988 0-1.507-.013-1.908-.218a2 2 0 0 1-.874-.875C3 16.48 3 15.92 3 14.8V9.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C4.52 6 5.08 6 6.2 6h11.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H12m-6 0c0-1.105 1.343-2 3-2s3 .895 3 2m-6 0q0 0 0 0m12-4h-4m4-3h-3m-6 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
    />
  </Svg>
);
export default SvgUserCardId;
