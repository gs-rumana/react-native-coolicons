import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMovingDesk = (props: SvgProps) => (
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
      d="M16 12v3m0-3h1.803c1.118 0 1.677 0 2.104-.218.377-.191.683-.498.875-.875C21 10.48 21 9.921 21 8.803v-.606c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 5 18.92 5 17.8 5h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C11 6.52 11 7.08 11 8.2v.6c0 1.12 0 1.68.218 2.107.192.377.498.684.874.875.427.218.987.218 2.105.218zm-9-2-2 2-2-2m0-3 2-2 2 2M3 21v-1.8c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C4.52 16 5.08 16 6.2 16h11.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105V21"
    />
  </Svg>
);
export default SvgMovingDesk;
