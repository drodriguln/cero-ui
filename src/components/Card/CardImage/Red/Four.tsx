import * as React from "react";

const SvgFour = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={777}
    height={1079}
    viewBox="0 0 582.75 809.25"
    {...props}
  >
    <defs>
      <clipPath id="four_svg__a">
        <path d="M.145 0h582.21v808.5H.145zm0 0" />
      </clipPath>
      <clipPath id="four_svg__b">
        <path d="M.145 0H325v358H.145zm0 0" />
      </clipPath>
      <clipPath id="four_svg__c">
        <path d="M283 450h299.355v358.5H283zm0 0" />
      </clipPath>
      <symbol overflow="visible" id="four_svg__d">
        <path d="M238.594-57.766h-32.86V0h-79.593v-57.766h-119v-59.187l124.093-181.438h74.5v180.422h32.86zM126.14-117.969v-34.703c0-6.531.234-15.336.703-26.422.476-11.094.851-16.91 1.125-17.453h-2.235c-4.636 10.48-9.875 20.277-15.718 29.39l-33.063 49.188zm0 0" />
      </symbol>
      <symbol overflow="visible" id="four_svg__e">
        <path d="M93.75-22.688H80.828V0H49.562v-22.688H2.813v-23.265l48.75-71.281h29.266v70.89H93.75zM49.562-46.343v-13.64c0-2.563.094-6.02.282-10.375.187-4.364.332-6.649.437-6.86h-.875c-1.824 4.117-3.886 7.965-6.187 11.547L30.234-46.344zm0 0" />
      </symbol>
    </defs>
    <g clipPath="url(#four_svg__a)">
      <path d="M.145 0h582.46v808.848H.145zm0 0" fill="#fff" />
      <path d="M.145 0h582.46v808.848H.145zm0 0" fill="#f66462" />
    </g>
    <g clipPath="url(#four_svg__b)">
      <path
        d="M87.352-241.719L324.82-25.785l-348.914 383.71-237.465-215.933zm0 0"
        fill="#fff"
      />
    </g>
    <g clipPath="url(#four_svg__c)">
      <path
        d="M632.434 450.648l237.468 215.93-348.91 383.711-237.469-215.93zm0 0"
        fill="#fff"
      />
    </g>
    <use xlinkHref="#four_svg__d" x={168.913} y={519.816} fill="#fff" />
    <use xlinkHref="#four_svg__e" x={18.792} y={137.464} fill="#f66462" />
    <use xlinkHref="#four_svg__e" x={467.724} y={787.215} fill="#f66462" />
  </svg>
);

const MemoSvgFour = React.memo(SvgFour);
export default MemoSvgFour;
