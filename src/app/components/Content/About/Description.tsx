const Description: React.FC = () => {
    return (
        <div className="description w-full h-full p-1 flex flex-col items-center">
            <h2 className="text-black text-3xl font-bold mb-6 text-center">¿Quienes somos?</h2>
            <p className="text-white text-xl font-bold mb-4 text-center pt-4">
                Somos una escuela de danza ubicada en Barañáin, Navarra, especializada en estilos urbanos como hip hop, comercial, pop, locking, grupos de competición y premium. <br />
                Con un enfoque dinámico y creativo, ofrecemos clases para todas las edades y niveles, fomentando el crecimiento artístico, la expresión personal y el trabajo en equipo. <br />
                Nuestra pasión por la danza se refleja tanto en el aula como en los escenarios, donde nuestros alumnos destacan a nivel nacional e internacional.
            </p>
        </div>
    );
};

export default Description;
