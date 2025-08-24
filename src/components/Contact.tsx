"use client";

import React, { useState } from 'react';
import AnimatedReveal from './ui/AnimatedReveal';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
    nombre: z
        .string()
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(50, 'El nombre no debe exceder los 50 caracteres'),
    email: z
        .string()
        .email('Email inválido')
        .max(100, 'El email no debe exceder los 100 caracteres'),
    asunto: z
        .string()
        .min(5, 'El asunto debe tener al menos 5 caracteres')
        .max(100, 'El asunto no debe exceder los 100 caracteres'),
    mensaje: z
        .string()
        .min(10, 'El mensaje debe tener al menos 10 caracteres')
        .max(500, 'El mensaje no debe exceder los 500 caracteres'),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_3nvib4x',      
    TEMPLATE_ID: 'template_t1f9u12',    
    PUBLIC_KEY: 'vP3xp4FycQ9y7qGIH'    
};

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });
    const [statusMensaje, setStatusMensaje] = useState<'success' | 'error' | ''>('');
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const validateField = (field: keyof FormData, value: string) => {
        try {
            const fieldSchema = contactSchema.shape[field];
            fieldSchema.parse(value);
            setErrors(prev => ({ ...prev, [field]: undefined }));
        } catch (error) {
            if (error instanceof z.ZodError) {
                setErrors(prev => ({ ...prev, [field]: error.issues[0].message }));
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        try {
            const validatedData = contactSchema.parse(formData);
            
            const templateParams = {
                from_name: validatedData.nombre,
                from_email: validatedData.email,
                subject: validatedData.asunto,
                message: validatedData.mensaje,
                to_name: 'Tu Nombre',
            };

            const result = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            console.log('Email enviado exitosamente:', result.text);
        
            setStatusMensaje('success');
            setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
            
        } catch (error) {
            console.error('Error al enviar email:', error);
            
            if (error instanceof z.ZodError) {
                const fieldErrors: FormErrors = {};
                error.issues.forEach((issue) => {
                    const fieldName = issue.path[0] as keyof FormData;
                    if (!fieldErrors[fieldName]) {
                        fieldErrors[fieldName] = issue.message;
                    }
                });
                setErrors(fieldErrors);
            }
            setStatusMensaje('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatusMensaje(''), 4000);
        }
    };

    return (
        <section id="contacto" className="py-10 px-4">
            <div className="mx-auto">
                <AnimatedReveal direction='left'>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Contacto
                        </h2>
                        <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
                    </div>
                    
                    <form 
                        className="max-w-6xl mx-auto space-y-4 bg-black/70 border border-cyan-400/20 backdrop-blur-sm p-6 rounded-lg shadow-lg"
                        onSubmit={handleSubmit}
                    >
                        
                        {/* Mensaje de estado */}
                        <div className="h-12 flex items-center justify-center">
                            {statusMensaje && (
                                <div className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    statusMensaje === 'error'
                                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                                }`}>
                                    {statusMensaje === 'error' 
                                        ? 'Error al enviar el mensaje. Intentá de nuevo.' 
                                        : '¡Mensaje enviado correctamente! Te responderé pronto.'
                                    }
                                </div>
                            )}
                        </div>

                        {/* Campos del formulario */}
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <div className="flex-1 mb-4 md:mb-0">
                                <label htmlFor="nombre" className="block text-white mb-2">
                                    Nombre *
                                </label>
                                <input 
                                    id="nombre"
                                    type="text"
                                    value={formData.nombre}
                                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                                    onBlur={(e) => validateField('nombre', e.target.value)}
                                    className={`w-full p-3 rounded bg-gray-800 text-white border transition-colors duration-300 focus:outline-none focus:ring-2 ${
                                        errors.nombre 
                                            ? 'border-red-500 focus:border-red-400 focus:ring-red-400/20' 
                                            : 'border-gray-700 focus:border-cyan-400 focus:ring-cyan-400/20'
                                    }`}
                                    placeholder="Tu nombre"
                                    disabled={isSubmitting}
                                />
                                <div className="h-6 mt-1">
                                    {errors.nombre && (
                                        <p className="text-red-400 text-sm transition-opacity duration-200">{errors.nombre}</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className="flex-1">
                                <label htmlFor="email" className="block text-white mb-2">
                                    Email *
                                </label>
                                <input 
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    onBlur={(e) => validateField('email', e.target.value)}
                                    className={`w-full p-3 rounded bg-gray-800 text-white border transition-colors duration-300 focus:outline-none focus:ring-2 ${
                                        errors.email 
                                            ? 'border-red-500 focus:border-red-400 focus:ring-red-400/20' 
                                            : 'border-gray-700 focus:border-cyan-400 focus:ring-cyan-400/20'
                                    }`}
                                    placeholder="tu@email.com"
                                    disabled={isSubmitting}
                                />
                                <div className="h-6 mt-1">
                                    {errors.email && (
                                        <p className="text-red-400 text-sm transition-opacity duration-200">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="asunto" className="block text-white mb-2">
                                Asunto *
                            </label>
                            <input 
                                id="asunto"
                                type="text"
                                value={formData.asunto}
                                onChange={(e) => handleInputChange('asunto', e.target.value)}
                                onBlur={(e) => validateField('asunto', e.target.value)}
                                className={`w-full p-3 rounded bg-gray-800 text-white border transition-colors duration-300 focus:outline-none focus:ring-2 ${
                                    errors.asunto 
                                        ? 'border-red-500 focus:border-red-400 focus:ring-red-400/20' 
                                        : 'border-gray-700 focus:border-cyan-400 focus:ring-cyan-400/20'
                                }`}
                                placeholder="¿De qué querés hablar?"
                                disabled={isSubmitting}
                            />
                            <div className="h-6 mt-1">
                                {errors.asunto && (
                                    <p className="text-red-400 text-sm transition-opacity duration-200">{errors.asunto}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="mensaje" className='block text-white mb-2'>
                                Mensaje *
                            </label>
                            <textarea
                                id="mensaje"
                                value={formData.mensaje}
                                onChange={(e) => handleInputChange('mensaje', e.target.value)}
                                onBlur={(e) => validateField('mensaje', e.target.value)}
                                className={`w-full p-3 rounded bg-gray-800 text-white border transition-colors duration-300 focus:outline-none focus:ring-2 resize-none ${
                                    errors.mensaje 
                                        ? 'border-red-500 focus:border-red-400 focus:ring-red-400/20' 
                                        : 'border-gray-700 focus:border-cyan-400 focus:ring-cyan-400/20'
                                }`}
                                placeholder='Contame más...'
                                rows={4}
                                disabled={isSubmitting}
                            />
                            <div className="h-6 mt-1">
                                {errors.mensaje && (
                                    <p className="text-red-400 text-sm transition-opacity duration-200">{errors.mensaje}</p>
                                )}
                            </div>
                        </div>

                        <div className='text-center pt-4'>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    isSubmitting
                                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                                        : 'bg-cyan-500 text-white hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20'
                                }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Enviando...
                                    </span>
                                ) : (
                                    'Enviar mensaje'
                                )}
                            </button>
                        </div>
                    </form>
                </AnimatedReveal>
            </div>
        </section>
    )
}

export default Contact;