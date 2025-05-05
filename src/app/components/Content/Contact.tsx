import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface ContactProps { }

const Contact: React.FC<ContactProps> = ({ }) => {
    return (
        <div className="contact w-full h-full flex justify-center items-center p-4">
            <ul className="flex flex-col gap-1 text-white text-lg items-center justify-center">
                <li className="flex items-center gap- text-center">
                    <FaPhoneAlt className="text-rose-400 gap-1" />
                    <span>+34 622 155 069</span>
                </li>
                <li className="flex items-center gap-3 text-center">
                    <FaEnvelope className="text-rose-400" />
                    <span>arkadiads@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 text-center">
                    <FaMapMarkerAlt className="text-rose-400" />
                    <span>Calle Falsa 123, Madrid</span>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
