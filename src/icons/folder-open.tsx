import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFolderOpen = (props: SvgProps) => (
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
      d="M17.803 20h1.99c.433 0 .649 0 .83-.074.161-.066.302-.172.41-.308.12-.155.18-.362.299-.778l1.086-3.8c.198-.693.296-1.04.218-1.313a1 1 0 0 0-.435-.577c-.228-.141-.561-.15-1.2-.15m-3.198 7H6.197m11.606 0c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V13M6.197 20H5.12c-.72 0-1.08 0-1.322-.15a1 1 0 0 1-.436-.577.7.7 0 0 1-.025-.16M6.197 20c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.754-.67M21 13H5l-1.417 4.96-.002.007c-.16.56-.255.893-.243 1.145M21 13V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3.338 19.112a2 2 0 0 1-.12-.204C3 18.48 3 17.92 3 16.8V6m0 0h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055q.308.075.578.24c.202.124.375.297.72.643L12 6"
    />
  </Svg>
);
export default SvgFolderOpen;
