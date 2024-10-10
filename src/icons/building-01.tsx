import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBuilding01 = (props: SvgProps) => (
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
      d="M2 20h2m0 0h5m-5 0V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h1.6c1.12 0 1.68 0 2.107.218.377.192.684.497.875.874.218.427.218.987.218 2.105V10M9 20h11M9 20v-5.632c0-.525 0-.788.063-1.033q.085-.328.272-.61c.14-.21.336-.387.726-.737l2.302-2.068c.755-.678 1.133-1.017 1.56-1.146a2 2 0 0 1 1.154 0c.428.129.806.468 1.562 1.147l2.3 2.067c.39.35.585.527.726.737.124.187.216.393.271.61.064.245.064.508.064 1.033V20m0 0h2"
    />
  </Svg>
);
export default SvgBuilding01;
