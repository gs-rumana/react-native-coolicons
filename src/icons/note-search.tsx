import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNoteSearch = (props: SvgProps) => (
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
      d="m19 19-3-3m-6 4H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105V10m-6.5 7a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7"
    />
  </Svg>
);
export default SvgNoteSearch;
