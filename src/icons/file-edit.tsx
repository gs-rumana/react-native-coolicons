import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileEdit = (props: SvgProps) => (
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
      d="M6 11V6.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C7.52 3 8.08 3 9.2 3H14m6 6v8.804c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.874.874C18.48 21 17.92 21 16.803 21H13m7-12c-.004-.285-.014-.466-.056-.639q-.074-.308-.24-.578c-.123-.202-.295-.374-.641-.72l-3.125-3.125c-.346-.346-.52-.52-.721-.643a2 2 0 0 0-.578-.24c-.173-.041-.353-.052-.639-.054M20 9zm0 0h-2.803c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C14 7.48 14 6.92 14 5.8V3M9 14l2 2m-7 5v-2.5l7.5-7.5 2.5 2.5L6.5 21z"
    />
  </Svg>
);
export default SvgFileEdit;
