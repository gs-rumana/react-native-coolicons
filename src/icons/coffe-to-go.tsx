import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCoffeToGo = (props: SvgProps) => (
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
      d="M6.686 15h10.629m-10.8-2h10.971M7.743 7h8.514M7.743 7c-.605 0-.907 0-1.13.12-.196.107-.351.276-.44.48-.101.233-.076.534-.024 1.136l.8 9.337c.089 1.032.133 1.55.362 1.94a2 2 0 0 0 .863.792c.41.195.927.195 1.964.195h3.725c1.036 0 1.554 0 1.963-.195a2 2 0 0 0 .863-.792c.23-.39.274-.907.362-1.94l.8-9.338c.052-.602.078-.902-.023-1.134a1 1 0 0 0-.44-.48C17.165 7 16.862 7 16.258 7M7.742 7H6.75c-.9 0-1.35 0-1.611-.188a1 1 0 0 1-.41-.707c-.034-.32.19-.712.637-1.494V4.61c.334-.585.501-.877.736-1.09a2 2 0 0 1 .727-.422C7.129 3 7.467 3 8.14 3h7.72c.674 0 1.01 0 1.312.098.27.087.517.231.726.422.235.213.402.505.736 1.09.447.782.671 1.174.637 1.495a1 1 0 0 1-.41.707C18.602 7 18.15 7 17.252 7h-.994"
    />
  </Svg>
);
export default SvgCoffeToGo;
