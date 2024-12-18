import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBuilding02 = (props: SvgProps) => (
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
      d="M2 20h2m0 0h8m-8 0V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h1.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105v3.05M12 20h8m-8 0v-9.754M20 20h2m-2 0v-5.632c0-.525 0-.788-.063-1.033a2 2 0 0 0-.272-.61c-.14-.21-.335-.386-.726-.737l-2.3-2.067c-.756-.679-1.134-1.018-1.562-1.147a2 2 0 0 0-1.154 0c-.428.129-.806.468-1.562 1.147l-.361.325"
    />
  </Svg>
);
export default SvgBuilding02;
