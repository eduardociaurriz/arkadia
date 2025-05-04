import React from 'react';
import { FaFilm, FaTv } from 'react-icons/fa';

interface TopMenuProps { }

const TopMenu: React.FC<TopMenuProps> = ({ }) => {
  return (
    <div
      className="top-menu flex items-center justify-between bg-gray-800 p-1 pl-4"
      style={{ backgroundColor: "#233a4f" }}
    >
      <nav>
        <ul className="flex space-x-4 text-white">
          <li>
            <a
              href="http://192.168.0.151:3000/media"
              className="flex items-center hover:text-gray-300"
            >
              <FaFilm className="mr-1" /> Media
            </a>
          </li>
          <li>
            <a
              href="http://192.168.0.151:3000/tv"
              className="flex items-center hover:text-gray-300"
            >
              <FaTv className="mr-1" /> TV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopMenu;
