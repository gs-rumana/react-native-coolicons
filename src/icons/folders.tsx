import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFolders = (props: SvgProps) => (
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
      d="M3 11v8.4c0 .56 0 .84.109 1.053.096.189.249.342.437.438.214.109.493.109 1.052.109h10.803c.56 0 .84 0 1.053-.109a1 1 0 0 0 .437-.437C17 20.24 17 19.96 17 19.4L17 15M3 11h7m-7 0v-.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.76 9 4.04 9 4.6 9H7m3 2h5.4c.56 0 .842 0 1.056.109a1 1 0 0 1 .435.437C17 11.76 17 12.04 17 12.6L17 15M10 11 8.925 9.618c-.176-.227-.265-.34-.375-.422a1 1 0 0 0-.324-.159C8.094 9 7.949 9 7.662 9H7m0-4h12.4c.56 0 .842 0 1.056.109a1 1 0 0 1 .435.437C21 5.76 21 6.04 21 6.6v6.8c0 .56 0 .84-.11 1.054a1 1 0 0 1-.435.437c-.214.109-.494.109-1.053.109h-2.4M7 5v4m0-4v-.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C7.76 3 8.04 3 8.6 3h3.062c.287 0 .43 0 .562.037q.177.05.326.159c.11.081.199.195.375.422L14 5"
    />
  </Svg>
);
export default SvgFolders;