import * as React from "react";

const SvgFive = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={777}
    height={1079}
    viewBox="0 0 582.75 809.25"
    {...props}
  >
    <defs>
      <clipPath id="five_svg__a">
        <path d="M.145 0h582.21v808.5H.145zm0 0" />
      </clipPath>
      <clipPath id="five_svg__b">
        <path d="M.145 0H325v358H.145zm0 0" />
      </clipPath>
      <clipPath id="five_svg__c">
        <path d="M283 450h299.355v358.5H283zm0 0" />
      </clipPath>
      <symbol overflow="visible" id="five_svg__d">
        <path d="M135.531-195.531c17.133 0 32.61 3.98 46.422 11.937 13.813 7.961 24.563 19.219 32.25 33.781 7.688 14.563 11.531 31.372 11.531 50.422 0 33.336-10.039 58.914-30.109 76.735C175.562-4.832 145.187 4.078 104.5 4.078c-34.836 0-63.273-5.375-85.313-16.125v-66.125c11.833 5.45 25.196 9.945 40.094 13.484 14.907 3.532 27.735 5.297 38.485 5.297 14.968 0 26.46-3.16 34.484-9.484 8.031-6.332 12.047-15.691 12.047-28.078 0-11.426-4.086-20.336-12.25-26.734-8.156-6.395-20.54-9.594-37.14-9.594-12.657 0-26.329 2.383-41.016 7.14l-29.61-14.687 11.235-157.563h170.218v67.141h-101.64l-3.672 39.39c10.613-2.038 18.164-3.16 22.656-3.359 4.488-.207 8.64-.312 12.453-.312zm0 0" />
      </symbol>
      <symbol overflow="visible" id="five_svg__e">
        <path d="M53.25-76.828c6.738 0 12.816 1.57 18.234 4.703C76.91-69 81.133-64.578 84.156-58.859c3.02 5.718 4.531 12.324 4.531 19.812 0 13.094-3.945 23.149-11.828 30.156-7.886 7-19.82 10.5-35.796 10.5-13.688 0-24.868-2.113-33.532-6.343V-30.72c4.657 2.149 9.91 3.914 15.766 5.297 5.851 1.387 10.89 2.078 15.11 2.078 5.882 0 10.406-1.238 13.562-3.718 3.156-2.489 4.734-6.165 4.734-11.032 0-4.488-1.605-7.988-4.812-10.5-3.211-2.508-8.075-3.765-14.594-3.765-4.98 0-10.356.933-16.125 2.797L9.547-55.328l4.406-61.906h66.875v26.375H40.891l-1.438 15.484c4.164-.8 7.129-1.242 8.89-1.328 1.77-.082 3.407-.125 4.907-.125zm0 0" />
      </symbol>
    </defs>
    <g clipPath="url(#five_svg__a)">
      <path d="M.145 0h582.46v808.848H.145zm0 0" fill="#fff" />
      <path d="M.145 0h582.46v808.848H.145zm0 0" fill="#f66462" />
    </g>
    <g clipPath="url(#five_svg__b)">
      <path
        d="M87.352-241.719L324.82-25.785l-348.914 383.71-237.465-215.933zm0 0"
        fill="#fff"
      />
    </g>
    <g clipPath="url(#five_svg__c)">
      <path
        d="M632.434 450.648l237.468 215.93-348.91 383.711-237.469-215.93zm0 0"
        fill="#fff"
      />
    </g>
    <use xlinkHref="#five_svg__d" x={168.913} y={519.816} fill="#fff" />
    <use xlinkHref="#five_svg__e" x={18.792} y={136.674} fill="#f66462" />
    <use xlinkHref="#five_svg__e" x={467.724} y={788.004} fill="#f66462" />
  </svg>
);

const MemoSvgFive = React.memo(SvgFive);
export default MemoSvgFive;
