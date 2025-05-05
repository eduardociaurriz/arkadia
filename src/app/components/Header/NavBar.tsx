import React from "react";

interface NavBarProps { }

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <nav className="bg-rose-800 p-4">
            <ul className="flex gap-6 text-white">
                <li>
                    <a
                        href="/"
                        className="hover:text-gray-300 transition-colors duration-200"
                    >
                        Inicio
                    </a>
                </li>
                <li>
                    <a
                        href="/horario"
                        className="hover:text-gray-300 transition-colors duration-200"
                    >
                        Horario
                    </a>
                </li>
                <li>
                    <a
                        href="/contacto"
                        className="hover:text-gray-300 transition-colors duration-200"
                    >
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
