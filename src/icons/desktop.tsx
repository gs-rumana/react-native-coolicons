import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDesktop = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.fill}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 20H9m-1.803-3c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875c-.121-.237-.175-.515-.199-.907m3.178 2h9.606m-9.606 0H5.6c-.56 0-.84 0-1.054-.11a1 1 0 0 1-.437-.435C4 16.24 4 15.96 4 15.4V15h.02m0 0C4 14.686 4 14.299 4 13.8V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v6.606c0 .497 0 .883-.02 1.197M4.02 15h15.96m0 0c-.023.392-.077.67-.198.907a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218m3.178-2H20v.4c0 .56 0 .84-.11 1.055a1 1 0 0 1-.436.436C19.24 17 18.96 17 18.4 17h-1.597"
    />
  </Svg>
);
export default SvgDesktop;
