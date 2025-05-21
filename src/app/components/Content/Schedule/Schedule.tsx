import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface ScheduleProps { }

const Schedule: React.FC<ScheduleProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="schedule w-full flex flex-col p-1 items-center">
            <div className="w-full pb-4 items-center flex justify-center cursor-pointer" onClick={() => setIsOpen(true)}>
                <Image src="/horario25.png" alt="schedule" width={1024} height={500} />
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative w-full h-full max-w-full max-h-full p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-3xl z-50"
                            onClick={() => setIsOpen(false)}
                            aria-label="Cerrar"
                        >
                            <IoClose />
                        </button>

                        <div className="relative w-screen h-screen max-w-full max-h-full rounded-lg">
                            <Image
                                src="/horario25.png"
                                alt="schedule fullscreen"
                                layout="fill"
                                objectFit="contain"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Schedule;
