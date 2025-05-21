import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface ContactProps { }

const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="contact-info bg-white p-8 text-white max-w-6xl mx-auto rounded-lg justify-center">
            <div className="flex flex-col justify-center space-y-8">
                <div className="flex flex-col items-center  text-center">
                    <FaPhoneAlt className="text-black mb-2" size={28} />
                    <span className="text-black text-3xl">+34 622 155 069</span>
                </div>

                <div className="flex flex-col items-center text-center">
                    <FaEnvelope className="text-black mb-2" size={28} />
                    <span className="text-black text-3xl">arkadiads@gmail.com</span>
                </div>

                <div className="flex flex-col items-center text-center">
                    <FaMapMarkerAlt className="text-black mb-2" size={28} />
                    <span className="text-black text-3xl">
                        Plaza los Fueros 7, 31010 Barañáin
                    </span>
                    <a
                        href="https://www.google.com/maps?q=Arkadia+dance+studio+Barañáin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-3xl font-semibold underline hover:text-blue-800 transition duration-300 mt-1"
                    >
                        Ir al mapa
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
