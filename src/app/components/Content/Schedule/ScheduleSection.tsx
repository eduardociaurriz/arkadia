import Schedule from "./Schedule";


const ScheduleSection: React.FC = () => {
    return (
        <div className="schedule-section bg-rose-600">
            <p className="text-black text-3xl font-bold mb-4 p-4 bg-white text-center">Horario 24 - 25</p>
            <Schedule />
        </div>
    );
};

export default ScheduleSection;
