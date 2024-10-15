import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatCircleCheck = (props: SvgProps) => (
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
      d="m15 10-4 4-2-2m3 9a8.96 8.96 0 0 1-4.49-1.198c-.13-.075-.196-.113-.257-.13a.5.5 0 0 0-.167-.017 1 1 0 0 0-.258.07l-2.31.769h-.002c-.487.163-.731.245-.893.187a.5.5 0 0 1-.304-.304c-.057-.162.024-.405.186-.892v-.003l.77-2.306.002-.005c.042-.129.064-.194.068-.256a.5.5 0 0 0-.017-.168 1.2 1.2 0 0 0-.127-.252l-.003-.005A9 9 0 1 1 12 21"
    />
  </Svg>
);
export default SvgChatCircleCheck;
