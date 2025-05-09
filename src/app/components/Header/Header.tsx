import Image from "next/image";
import NavBar from "./NavBar";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {


  return (
    <>
      <div className="header flex items-center justify-center p-1 pl-4 ">
        <p className="font-bold text-white font-sans text-6xl">ARKADIA DANCE STUDIO</p>

      </div>
      <div className="header flex items-center justify-center p-1 pl-4 h-[200px]">
        <p className="font-bold text-white font-sans text-6xl">Especializado en danzas Urbanas</p>
      </div>
    </>

  );
};

export default Header;
