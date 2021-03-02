import * as React from "react";

const SvgOne = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={3107}
    height={4315}
    viewBox="0 0 2330.25 3236.25"
    {...props}
  >
    <defs>
      <clipPath id="one_svg__a">
        <path d="M0 .145h2329.5v3235.21H0zm0 0" />
      </clipPath>
      <clipPath id="one_svg__b">
        <path d="M0 .145h1299V1432H0zm0 0" />
      </clipPath>
      <clipPath id="one_svg__c">
        <path d="M1133 1802h1196.5v1433.355H1133zm0 0" />
      </clipPath>
      <symbol overflow="visible" id="one_svg__d">
        <path d="M769.016 0h-327.36v-631.86c0-76.738 1.63-146.94 4.89-210.609-20.136 24.492-45.167 50.07-75.093 76.735L235.938-653.891 68.577-859.625l409.813-333.89h290.625zm0 0" />
      </symbol>
      <symbol overflow="visible" id="one_svg__e">
        <path d="M302.156 0H173.531v-248.266c0-30.156.64-57.742 1.922-82.765-7.906 9.625-17.742 19.68-29.5 30.156l-53.25 43.938-65.766-80.829L187.97-468.953h114.187zm0 0" />
      </symbol>
    </defs>
    <g clipPath="url(#one_svg__a)">
      <path d="M0 .145h2329.5v3235.21H0zm0 0" fill="#fff" />
      <path d="M0 .145h2329.5v3235.21H0zm0 0" fill="#f66462" />
    </g>
    <g clipPath="url(#one_svg__b)">
      <path
        d="M348.71-966.68l949.813 863.676L-97.043 1431.75l-949.816-863.672zm0 0"
        fill="#fff"
      />
    </g>
    <g clipPath="url(#one_svg__c)">
      <path
        d="M2528.922 1802.629l949.812 863.676-1395.566 1534.754-949.816-863.676zm0 0"
        fill="#fff"
      />
    </g>
    <use xlinkHref="#one_svg__d" x={674.93} y={2079.294} fill="#fff" />
    <use xlinkHref="#one_svg__e" x={40.494} y={575.221} fill="#f66462" />
    <use xlinkHref="#one_svg__e" x={1904.094} y={3095.175} fill="#f66462" />
  </svg>
);

const MemoSvgOne = React.memo(SvgOne);
export default MemoSvgOne;
