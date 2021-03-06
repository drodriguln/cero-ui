import * as React from "react";

const SvgSeven = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={777}
    height={1079}
    viewBox="0 0 582.75 809.25"
    {...props}
  >
    <defs>
      <clipPath id="seven_svg__a">
        <path d="M.145 0h582.21v808.5H.145zm0 0" />
      </clipPath>
      <clipPath id="seven_svg__b">
        <path d="M.145 0H325v358H.145zm0 0" />
      </clipPath>
      <clipPath id="seven_svg__c">
        <path d="M283 450h299.355v358.5H283zm0 0" />
      </clipPath>
      <symbol overflow="visible" id="seven_svg__d">
        <path d="M42.656 0L145.11-231.25H15.922v-66.734H231.25v47.546L126.14 0zm0 0" />
      </symbol>
      <symbol overflow="visible" id="seven_svg__e">
        <path d="M16.766 0l40.25-90.86H6.25v-26.218h84.61v18.687L49.562 0zm0 0" />
      </symbol>
    </defs>
    <g clipPath="url(#seven_svg__a)">
      <path d="M.145 0h582.46v3255.629H.145zm0 0" fill="#fff" />
      <path d="M.145 0h582.46v808.848H.145zm0 0" fill="#fff" />
      <path d="M.145 0h582.46v808.848H.145zm0 0" fill="#2fe39b" />
    </g>
    <g clipPath="url(#seven_svg__b)">
      <path
        d="M87.352-241.715L324.82-25.785l-348.914 383.71-237.465-215.933zm0 0"
        fill="#fff"
      />
    </g>
    <g clipPath="url(#seven_svg__c)">
      <path
        d="M632.434 450.648l237.468 215.934-348.91 383.707-237.469-215.93zm0 0"
        fill="#fff"
      />
    </g>
    <use xlinkHref="#seven_svg__d" x={168.913} y={519.816} fill="#fff" />
    <use xlinkHref="#seven_svg__e" x={18.792} y={137.464} fill="#2fe39b" />
    <use xlinkHref="#seven_svg__e" x={467.724} y={787.215} fill="#2fe39b" />
  </svg>
);

const MemoSvgSeven = React.memo(SvgSeven);
export default MemoSvgSeven;
