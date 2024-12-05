import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBookOpen = (props: SvgProps) => (
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
      d="M12 9.8V20m0-10.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.31-1.311C14.28 5 15.12 5 16.8 5h2.6c.56 0 .84 0 1.054.109.188.096.34.249.437.437C21 5.76 21 6.04 21 6.6v8.8c0 .56 0 .84-.11 1.054a1 1 0 0 1-.436.437c-.213.109-.493.109-1.052.109h-2.833c-.939 0-1.41 0-1.836.13a3 3 0 0 0-1.032.552c-.344.283-.605.674-1.126 1.455L12 20m0-10.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C9.72 5 8.88 5 7.2 5H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 5.76 3 6.04 3 6.6v8.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 17 4.039 17 4.598 17h2.833c.939 0 1.408 0 1.835.13.377.114.73.302 1.034.552.343.282.602.67 1.118 1.446L12 20"
    />
  </Svg>
);
export default SvgBookOpen;
