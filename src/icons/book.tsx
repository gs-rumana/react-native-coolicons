import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBook = (props: SvgProps) => (
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
      d="M5 19.5V6.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C6.52 3 7.08 3 8.2 3h9.2c.56 0 .84 0 1.055.109.188.096.34.249.436.437C19 3.76 19 4.04 19 4.6v11.8c0 .56 0 .84-.11 1.054a1 1 0 0 1-.435.437C18.24 18 17.96 18 17.402 18H7.25A2.25 2.25 0 0 0 5 20.25c0 .414.336.75.75.75h10.652c.559 0 .84 0 1.053-.109a1 1 0 0 0 .436-.437C18 20.24 18 19.96 18 19.4V18"
    />
  </Svg>
);
export default SvgBook;
