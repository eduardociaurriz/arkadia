import React from "react";

interface BotMenuProps {}

const TopMenu: React.FC<BotMenuProps> = ({}) => {
  return (
    <div className="bot-menu w-full fixed bottom-0 bg-gray-800 p-1 pl-4 h-[20px]"></div>
  );
};

export default TopMenu;
