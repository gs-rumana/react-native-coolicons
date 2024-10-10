import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartBarVertical01 = (props: SvgProps) => (
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
      d="M9 11v9m0-9H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 11.76 3 12.04 3 12.6V20h6m0-9V5.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 4 10.04 4 10.6 4h2.8c.56 0 .84 0 1.054.109.188.096.34.249.437.437C15 4.76 15 5.04 15 5.6V8M9 20h6m0 0h6V9.6c0-.56 0-.84-.11-1.054a1 1 0 0 0-.435-.437C20.24 8 19.96 8 19.4 8H15m0 12V8"
    />
  </Svg>
);
export default SvgChartBarVertical01;
