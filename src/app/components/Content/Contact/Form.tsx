import React, { useEffect, useRef, useState } from "react";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const turnstileRef = useRef<HTMLDivElement | null>(null);

    const siteKey = "0x4AAAAAABeIsYYaVl2VKmQZ"; // ← Reemplaza con tu clave pública

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!formData.email.trim()) {
            newErrors.email = "El email es obligatorio";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Email inválido";
        }
        if (!formData.subject.trim()) newErrors.subject = "El asunto es obligatorio";
        if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio";
        if (!turnstileToken) newErrors.turnstile = "Verifica que no eres un robot";
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Formulario enviado", { ...formData, turnstileToken });
            setSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
            setTurnstileToken(null);
            // También puedes reiniciar el widget si lo necesitas:
            if (window.turnstile) window.turnstile.reset();
        } else {
            setErrors(validationErrors);
            setSubmitted(false);
        }
    };

    useEffect(() => {
        if (window.turnstile && turnstileRef.current) {
            window.turnstile.render(turnstileRef.current, {
                sitekey: siteKey,
                callback: (token: string) => {
                    setTurnstileToken(token);
                },
            });
        }
    }, []);

    return (
        <div className="contact-form max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contacto</h2>

            {submitted && (
                <p className="mb-4 text-green-600 font-semibold text-center">
                    ¡Mensaje enviado correctamente!
                </p>
            )}

            <form onSubmit={handleSubmit} noValidate>
                {/* ... Inputs existentes ... */}

                {/* Input Nombre */}
                <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">
                    Nombre
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${errors.name ? "border-red-500 ring-red-300" : "border-gray-300"}`}
                    placeholder="Tu nombre"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

                {/* Input Email */}
                <label className="block mt-4 mb-2 font-semibold text-gray-700" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${errors.email ? "border-red-500 ring-red-300" : "border-gray-300"}`}
                    placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

                {/* Input Asunto */}
                <label className="block mt-4 mb-2 font-semibold text-gray-700" htmlFor="subject">
                    Asunto
                </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${errors.subject ? "border-red-500 ring-red-300" : "border-gray-300"}`}
                    placeholder="Asunto del mensaje"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}

                {/* Input Mensaje */}
                <label className="block mt-4 mb-2 font-semibold text-gray-700" htmlFor="message">
                    Mensaje
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring resize-none ${errors.message ? "border-red-500 ring-red-300" : "border-gray-300"}`}
                    placeholder="Escribe tu mensaje aquí..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}

                {/* Turnstile CAPTCHA */}
                <div className="mt-4" ref={turnstileRef}></div>
                {errors.turnstile && <p className="text-red-500 text-sm mt-2">{errors.turnstile}</p>}

                <button
                    type="submit"
                    className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
