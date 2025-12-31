import React from "react";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <SocialIconWrapper
        href="https://www.facebook.com/orangeballpestcontrol/"
        target="_blank"
      >
        <FacebookIcon />
      </SocialIconWrapper>
      <SocialIconWrapper href="https://x.com/orangeballpest" target="_blank">
        <TwitterIcon />
      </SocialIconWrapper>
      <SocialIconWrapper
        href="https://www.youtube.com/channel/UCc6AKeVUv6eHWd_aXWNdWmQ"
        target="_blank"
      >
        <YouTubeIcon />
      </SocialIconWrapper>
    </div>
  );
};

const SocialIconWrapper: React.FC<{
  href: string;
  children: React.ReactNode;
  target?: string;
}> = ({ href, children, target }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-white hover:bg-black hover:text-white hover:border-black transition-all duration-300"
    target={target}
  >
    {children}
  </a>
);

// Custom SVG Icons to match the thin stroke style in the image more closely than standard libraries might

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default SocialIcons;
