import * as React from "react";

const SvgSeven = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={3107}
    height={4315}
    viewBox="0 0 2330.25 3236.25"
    {...props}
  >
    <defs>
      <clipPath id="seven_svg__a">
        <path d="M0 .145h2329.5v3235.21H0zm0 0" />
      </clipPath>
      <clipPath id="seven_svg__b">
        <path d="M0 .145h1299V1432H0zm0 0" />
      </clipPath>
      <clipPath id="seven_svg__c">
        <path d="M1133 1802h1196.5v1433.355H1133zm0 0" />
      </clipPath>
      <symbol overflow="visible" id="seven_svg__d">
        <path d="M170.625 0l409.813-924.922H63.672v-266.953h861.265v190.203L504.517 0zm0 0" />
      </symbol>
      <symbol overflow="visible" id="seven_svg__e">
        <path d="M67.047 0l161.016-363.422H25.016v-104.89h338.406v74.734L198.234 0zm0 0" />
      </symbol>
    </defs>
    <g clipPath="url(#seven_svg__a)">
      <path d="M0 .145h2329.5v3235.21H0zm0 0" fill="#fff" />
      <path d="M0 .145h2329.5v3235.21H0zm0 0" fill="#01c4e6" />
    </g>
    <g clipPath="url(#seven_svg__b)">
      <path
        d="M348.71-966.68l949.813 863.676L-97.043 1431.75l-949.816-863.672zm0 0"
        fill="#fff"
      />
    </g>
    <g clipPath="url(#seven_svg__c)">
      <path
        d="M2528.922 1802.629l949.812 863.676-1395.566 1534.754-949.816-863.672zm0 0"
        fill="#fff"
      />
    </g>
    <use xlinkHref="#seven_svg__d" x={674.93} y={2079.293} fill="#fff" />
    <use xlinkHref="#seven_svg__e" x={40.494} y={575.22} fill="#01c4e6" />
    <use xlinkHref="#seven_svg__e" x={1904.094} y={3095.174} fill="#01c4e6" />
  </svg>
);

const MemoSvgSeven = React.memo(SvgSeven);
export default MemoSvgSeven;
