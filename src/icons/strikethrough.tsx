import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStrikethrough = (props: SvgProps) => (
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
      d="M12 12c.896 0 1.775.193 2.546.557q.524.248.955.587c.347.272.645.585.881.93.432.627.644 1.336.616 2.052s-.296 1.412-.776 2.017-1.154 1.096-1.952 1.42a6.1 6.1 0 0 1-2.583.43 5.9 5.9 0 0 1-2.497-.685c-.74-.402-1.332-.957-1.713-1.605M12 12H4m8 0h8m-3.476-5.703c-.381-.648-.973-1.202-1.714-1.605a5.9 5.9 0 0 0-2.496-.684 6.1 6.1 0 0 0-2.584.428c-.798.325-1.472.816-1.952 1.42-.48.606-.747 1.303-.776 2.019q-.011.315.037.625"
    />
  </Svg>
);
export default SvgStrikethrough;
