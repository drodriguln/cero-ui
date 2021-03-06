import * as React from "react";

const SvgOne = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={777}
    height={1079}
    viewBox="0 0 582.75 809.25"
    {...props}
  >
    <defs>
      <clipPath id="one_svg__a">
        <path d="M.145 0h582.21v808.5H.145zm0 0" />
      </clipPath>
      <clipPath id="one_svg__b">
        <path d="M.145 0H325v358H.145zm0 0" />
      </clipPath>
      <clipPath id="one_svg__c">
        <path d="M283 450h299.355v358.5H283zm0 0" />
      </clipPath>
      <symbol overflow="visible" id="one_svg__d">
        <path d="M192.266 0h-81.844v-157.969c0-19.187.406-36.742 1.219-52.672-5.032 6.125-11.293 12.524-18.782 19.188l-33.875 27.969-41.843-51.438 102.468-83.469h72.657zm0 0" />
      </symbol>
      <symbol overflow="visible" id="one_svg__e">
        <path d="M75.547 0H43.39v-62.063c0-7.539.156-14.44.468-20.703-1.98 2.407-4.437 4.922-7.375 7.547L23.172-64.234 6.734-84.438 47-117.233h28.547zm0 0" />
      </symbol>
    </defs>
    <g clipPath="url(#one_svg__a)">
      <path d="M.145 0h582.46v808.848H.145zm0 0" fill="#fff" />
      <path d="M.145 0h582.46v808.848H.145zm0 0" fill="#f8e459" />
    </g>
    <g clipPath="url(#one_svg__b)">
      <path
        d="M87.352-241.719L324.82-25.785l-348.914 383.71-237.465-215.933zm0 0"
        fill="#fff"
      />
    </g>
    <g clipPath="url(#one_svg__c)">
      <path
        d="M632.434 450.648l237.468 215.93-348.91 383.711-237.469-215.93zm0 0"
        fill="#fff"
      />
    </g>
    <use xlinkHref="#one_svg__d" x={168.913} y={519.816} fill="#fff" />
    <use xlinkHref="#one_svg__e" x={18.792} y={137.464} fill="#f8e459" />
    <use xlinkHref="#one_svg__e" x={467.724} y={788.793} fill="#f8e459" />
  </svg>
);

const MemoSvgOne = React.memo(SvgOne);
export default MemoSvgOne;
