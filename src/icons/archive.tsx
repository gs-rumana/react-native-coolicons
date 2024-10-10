import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArchive = (props: SvgProps) => (
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
      d="M6.6 9h10.8M6.6 9c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437c-.11.214-.11.494-.11 1.054v5.2c0 1.12 0 1.68.219 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.117 0 1.676 0 2.104-.218.376-.192.683-.498.875-.874.218-.427.218-.986.218-2.104V10.59c0-.554 0-.832-.109-1.045a1 1 0 0 0-.437-.437C18.24 9 17.96 9 17.4 9M6.6 9H4.975c-.849 0-1.273 0-1.514-.148a1 1 0 0 1-.472-.938c.024-.282.277-.623.783-1.307.147-.197.22-.296.31-.372.119-.1.26-.172.413-.208C4.609 6 4.73 6 4.977 6h14.045c.246 0 .368 0 .482.027.152.036.294.108.414.208.09.076.163.174.31.372.506.683.759 1.025.783 1.307a1 1 0 0 1-.472.938C20.298 9 19.872 9 19.023 9H17.4M10 14h4"
    />
  </Svg>
);
export default SvgArchive;