import React from "react";

interface FooterProps { }

const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <div className="bot-menu w-full fixed bottom-0 bg-rose-600 p-1 pl-4 h-[20px]"></div>
  );
};

export default Footer;
