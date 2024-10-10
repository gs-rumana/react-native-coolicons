import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSingleQuotesL = (props: SvgProps) => (
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
      d="M10 12v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.053.109h1.803c.559 0 .838 0 1.052-.109.188-.096.341-.25.437-.437C15 16.24 15 15.96 15 15.4v-1.803c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C14.24 12 13.96 12 13.4 12zm0 0v-2a3 3 0 0 1 3-3"
    />
  </Svg>
);
export default SvgSingleQuotesL;
