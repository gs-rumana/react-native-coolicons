import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFolderRemove = (props: SvgProps) => (
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
      d="M9 13h6M3 6v10.8c0 1.12 0 1.68.218 2.107.192.377.497.683.874.875.427.218.987.218 2.105.218h11.607c1.118 0 1.677 0 2.104-.218.376-.192.682-.498.874-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.875-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"
    />
  </Svg>
);
export default SvgFolderRemove;
