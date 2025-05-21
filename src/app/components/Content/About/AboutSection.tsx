import Activities from "./Activities";
import Description from "./Description";

export const AboutSection: React.FC = () => {
    return (
        <>
            <p className="text-black text-3xl font-bold text-center p-4 bg-white">Sobre nosotros</p>
            <div className="description-section flex items-center justify-center p-4 bg-rose-600">
                <Description />
                <Activities />

            </div>
        </>

    );
};

export default AboutSection;
