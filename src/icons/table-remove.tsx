import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTableRemove = (props: SvgProps) => (
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
      d="M11 4h4.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V9h-8m0-5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2V9m8-5v5M3 9v6m0-6h8m-8 6v1.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H11V9m-8 6h8m4 1h6"
    />
  </Svg>
);
export default SvgTableRemove;
