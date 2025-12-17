import React from "react";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <SocialIconWrapper href="https://www.facebook.com/" target="_blank">
        <FacebookIcon />
      </SocialIconWrapper>
      <SocialIconWrapper href="https://www.tiktok.com/" target="_blank">
        <TikTokIcon />
      </SocialIconWrapper>
      <SocialIconWrapper
        href="https://www.linkedin.com/company/x-infin-consultants/"
        target="_blank"
      >
        <LinkedInIcon />
      </SocialIconWrapper>
      <SocialIconWrapper href="https://www.instagram.com/" target="_blank">
        <InstagramIcon />
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

const TikTokIcon = () => (
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
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const LinkedInIcon = () => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
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
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default SocialIcons;
