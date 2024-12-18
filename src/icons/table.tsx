import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTable = (props: SvgProps) => (
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
      d="M4 15v1.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H12m-8-5V9m0 6h8M4 9V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H12M4 9h8m0-5h4.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V9m-8-5v5m0 0v6m0-6h8m-8 6v5m0-5h8m-8 5h4.804c1.118 0 1.677 0 2.104-.218.376-.192.682-.498.874-.874.218-.428.218-.986.218-2.104V15m0 0V9"
    />
  </Svg>
);
export default SvgTable;
