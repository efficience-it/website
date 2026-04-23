import * as React from "react";

type XIconProps = React.SVGProps<SVGSVGElement>;

const XIcon = (props: XIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2H21.5l-7.109 8.127L22.75 22h-6.544l-5.123-6.703L5.22 22H1.96l7.603-8.693L1.25 2h6.71l4.63 6.125zM17.1 20.026h1.803L6.986 3.87H5.05z" />
  </svg>
);

export default XIcon;
