import Image from "next/image";

export const Logo: React.FC = () => {
    return (
        <Image
            className="drop-shadow-[4px_4px_0_white] drop-shadow-[-4px_-4px_0_white] w-64 h-auto"
            src="/icono-negro.png"
            alt="logo"
            width={300}
            height={250}
        />
    );
};

export default Logo;
