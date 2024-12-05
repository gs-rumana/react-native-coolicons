import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFiles = (props: SvgProps) => (
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
      d="M9 6h.337c.244 0 .367 0 .482.028q.154.037.29.12c.1.061.187.148.36.32l3.063 3.063c.172.173.258.26.32.36q.083.136.12.29c.028.114.028.235.028.474V18M9 6H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 6.76 3 7.04 3 7.6v11.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.039 21 4.598 21h7.803c.559 0 .84 0 1.053-.109a1 1 0 0 0 .437-.437C14 20.24 14 19.96 14 19.4V18M9 6v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.493.109 1.052.109H14m-4-5V4.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C10.76 3 11.04 3 11.6 3H16m0 0h.337c.244 0 .367 0 .482.028q.154.037.29.12c.1.061.187.148.36.32l3.063 3.063c.172.173.258.26.32.36q.083.136.12.29c.028.114.028.235.028.474V16.4c0 .56 0 .84-.11 1.054a1 1 0 0 1-.435.437C20.24 18 19.96 18 19.402 18H14m2-15v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C16.76 8 17.039 8 17.598 8H21"
    />
  </Svg>
);
export default SvgFiles;
