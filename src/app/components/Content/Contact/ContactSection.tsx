import Info from "./Info";
import ContactForm from "./Form";

const ContactSection: React.FC = () => {
    return (
        <>
            <div className="title-section w-full flex-col items-center justify-center bg-rose-600">
                <p className="text-black bg-white text-3xl font-bold text-center p-4">Contacta con nosotros</p>
            </div>

            <div className="contact-section bg-rose-600 flex p-4 pb-4">
                <div className="w-1/2 flex items-center justify-center">
                    <Info />
                </div>
                <div className="w-1/2">
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default ContactSection;
