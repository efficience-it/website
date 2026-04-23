import * as React from "react";

type CopyLinkIconProps = React.SVGProps<SVGSVGElement>;

const CopyLinkIcon = (props: CopyLinkIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10z" />
    <path d="M18 5H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H10V7h8z" />
  </svg>
);

export default CopyLinkIcon;
