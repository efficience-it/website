import * as React from "react";

type LinkedInIconProps = React.SVGProps<SVGSVGElement>;

const LinkedInIcon = (props: LinkedInIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <circle cx="5" cy="5.1" r="1.4" />
    <path d="M3.8 8.5h2.4v11H3.8z" />
    <path d="M9 8.5h2.3V10c.6-1.1 1.9-1.8 3.5-1.8 2.8 0 4.6 1.9 4.6 5V19h-2.4v-5.2c0-1.9-.9-3.1-2.6-3.1-1.8 0-3 1.3-3 3.4V19H9z" />
  </svg>
);

export default LinkedInIcon;
