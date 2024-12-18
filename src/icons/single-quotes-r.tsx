import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSingleQuotesR = (props: SvgProps) => (
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
      d="M12 17a3 3 0 0 0 3-3v-2m0 0V8.598c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C14.24 7 13.96 7 13.4 7h-1.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C10 7.76 10 8.04 10 8.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.053.109z"
    />
  </Svg>
);
export default SvgSingleQuotesR;
