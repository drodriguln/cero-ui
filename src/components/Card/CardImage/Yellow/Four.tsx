import * as React from "react";

const SvgFour = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={3107}
    height={4315}
    viewBox="0 0 2330.25 3236.25"
    {...props}
  >
    <defs>
      <clipPath id="four_svg__a">
        <path d="M0 .148h2329.5v3235.207H0zm0 0" />
      </clipPath>
      <clipPath id="four_svg__b">
        <path d="M0 .148h1299V1432H0zm0 0" />
      </clipPath>
      <clipPath id="four_svg__c">
        <path d="M1133 1802h1196.5v1433.355H1133zm0 0" />
      </clipPath>
      <symbol overflow="visible" id="four_svg__d">
        <path d="M954.328-231.031H822.906V0h-318.39v-231.031H28.578v-236.75l496.344-725.735h297.984v721.657h131.422zM504.516-471.86v-138.766c0-26.125.953-61.363 2.859-105.719 1.906-44.351 3.398-67.617 4.484-69.797h-8.984c-18.5 41.907-39.453 81.09-62.86 117.547l-132.25 196.735zm0 0" />
      </symbol>
      <symbol overflow="visible" id="four_svg__e">
        <path d="M374.969-90.781h-51.64V0H198.233v-90.781h-187v-93.016L206.25-468.953h117.078v283.547h51.64zm-176.735-94.625v-54.531c0-10.258.375-24.102 1.125-41.532.75-17.426 1.336-26.566 1.766-27.422h-3.531c-7.274 16.461-15.508 31.856-24.703 46.188l-51.97 77.297zm0 0" />
      </symbol>
    </defs>
    <g clipPath="url(#four_svg__a)">
      <path d="M0 .148h2329.5v3235.207H0zm0 0" fill="#fff" />
      <path d="M0 .148h2329.5v3235.207H0zm0 0" fill="#f8e459" />
    </g>
    <g clipPath="url(#four_svg__b)">
      <path
        d="M348.71-966.68l949.813 863.676L-97.043 1431.754l-949.816-863.676zm0 0"
        fill="#fff"
      />
    </g>
    <g clipPath="url(#four_svg__c)">
      <path
        d="M2528.922 1802.629l949.812 863.676-1395.566 1534.754-949.816-863.672zm0 0"
        fill="#fff"
      />
    </g>
    <use xlinkHref="#four_svg__d" x={674.93} y={2079.295} fill="#fff" />
    <use xlinkHref="#four_svg__e" x={40.494} y={575.222} fill="#f8e459" />
    <use xlinkHref="#four_svg__e" x={1904.094} y={3095.175} fill="#f8e459" />
  </svg>
);

const MemoSvgFour = React.memo(SvgFour);
export default MemoSvgFour;
