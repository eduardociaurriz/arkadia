import Image from "next/image";
import NavBar from "./NavBar";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {


  return (
    <>
      <div className="header-logo flex items-center justify-center bg-white p-1 pl-4">
        <Image src="/icono-negro.png" alt="Logo" width={250} height={250} />
      </div>
      <div className="header-text flex items-center justify-center bg-white p-1 pl-4">
        <p className="font-bold text-rose-800 font-sans text-2xl">ARKADIA DANCE STUDIO</p>
      </div>
    </>

  );
};

export default Header;
