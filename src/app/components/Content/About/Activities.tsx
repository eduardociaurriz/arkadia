import React from "react";

interface ActivitiesProps { }

const Activities: React.FC<ActivitiesProps> = () => {
    const activities = [
        "House",
        "Comercial",
        "Popping",
        "Locking",
        "Grupos de competición",
        "Moderno",
        "Contemporáneo",
        "Premium",
    ];

    const middleIndex = Math.ceil(activities.length / 2);
    const leftColumn = activities.slice(0, middleIndex);
    const rightColumn = activities.slice(middleIndex);

    return (
        <div className="activities w-full h-full p-1 flex flex-col items-center">
            <h2 className="text-black text-3xl font-bold mb-6 text-center">¿Que hacemos?</h2>

            {/* Añadimos h-full para ocupar toda la altura del padre */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md bg-white text-gray-800 rounded-lg shadow-md p-6 h-full">
                {/* Cada columna también ocupa toda la altura */}
                <div className="flex flex-col h-full">
                    {leftColumn.map((activity, index) => (
                        <p key={index} className="py-2 border-b border-gray-200 flex-grow">
                            {activity}
                        </p>
                    ))}
                </div>
                <div className="flex flex-col h-full">
                    {rightColumn.map((activity, index) => (
                        <p key={index} className="py-2 border-b border-gray-200 flex-grow">
                            {activity}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Activities;
