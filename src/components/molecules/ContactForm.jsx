import { useState } from "react";

function Label(props) {
    return (
        <label style={{
            display: 'block',
            color: '#cbd5e1',
            fontSize: '1.125rem',
            marginBottom: '0.75rem',
            fontWeight: 500
        }}>
            {props.children}
        </label>
    );
}

function Input({...rest}) {
    return (
        <input
            style={{
                display: 'block',
                width: '100%',
                padding: '1rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95), rgba(30, 30, 30, 0.95))',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                borderRadius: '12px',
                color: '#f8fafc',
                fontSize: '1rem',
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.05)',
                outline: 'none'
            }}
            onFocus={(e) => {
                e.target.style.borderColor = 'rgba(203, 213, 225, 0.6)';
                e.target.style.boxShadow = '0 0 20px rgba(148, 163, 184, 0.3)';
            }}
            onBlur={(e) => {
                e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.05)';
            }}
            {...rest}
        />
    );
}

function TextArea({...rest}) {
    return (
        <textarea
            style={{
                display: 'block',
                width: '100%',
                padding: '1rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95), rgba(30, 30, 30, 0.95))',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                borderRadius: '12px',
                color: '#f8fafc',
                fontSize: '1rem',
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.05)',
                resize: 'vertical',
                fontFamily: 'inherit',
                outline: 'none'
            }}
            onFocus={(e) => {
                e.target.style.borderColor = 'rgba(203, 213, 225, 0.6)';
                e.target.style.boxShadow = '0 0 20px rgba(148, 163, 184, 0.3)';
            }}
            onBlur={(e) => {
                e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.05)';
            }}
            {...rest}
        />
    );
}

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Presionado");
        setLoading(true);

        try {
            const url = 'https://script.google.com/macros/s/AKfycbwY2YvLVNAEK-YGRSkWO7mUGNk-A-CHWDy8otOCyUfjzQQTMCeNdVRb59UwfqB_I5Z0Kg/exec';
            const params = `?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&subject=${encodeURIComponent('Contacto desde formulario')}&contact=${encodeURIComponent(message)}`;
            
            // Usar un iframe oculto para enviar los datos
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url + params;
            document.body.appendChild(iframe);
            
            // Esperar un poco y luego remover el iframe
            setTimeout(() => {
                document.body.removeChild(iframe);
                setName("");
                setEmail("");
                setMessage("");
                setLoading(false);
                console.log("Datos enviados correctamente");
            }, 2000);
            
        } catch (error) {
            console.error("Error al enviar:", error);
            setLoading(false);
        }
    };

    return (
        <section style={{
            padding: '6rem 2rem',
            background: '#0a0a0a',
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Línea decorativa superior */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.4), transparent)'
            }} />

            <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    textAlign: 'center',
                    marginBottom: '4rem',
                    color: '#f8fafc',
                    position: 'relative',
                    fontWeight: 800,
                    textShadow: '0 0 30px rgba(148, 163, 184, 0.3)'
                }}>
                    Contacto
                </h2>

                {/* Línea decorativa debajo del título */}
                <div style={{
                    width: '100px',
                    height: '4px',
                    background: 'linear-gradient(135deg, #94a3b8, #cbd5e1, #f1f5f9)',
                    margin: '-2rem auto 4rem',
                    borderRadius: '2px',
                    boxShadow: '0 0 20px rgba(148, 163, 184, 0.5)'
                }} />

                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <Label>Nombre</Label>
                            <Input 
                                placeholder="Tu nombre" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <div>
                            <Label>Email</Label>
                            <Input 
                                type="email"
                                placeholder="tu@email.com" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <div>
                            <Label>Mensaje</Label>
                            <TextArea 
                                placeholder="Tu mensaje" 
                                rows={6}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                        
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '1.25rem 2rem',
                                background: loading 
                                    ? 'linear-gradient(135deg, rgba(100, 100, 100, 0.5), rgba(120, 120, 120, 0.5))'
                                    : 'linear-gradient(135deg, rgba(15, 15, 15, 0.95), rgba(30, 30, 30, 0.95))',
                                border: `1px solid ${loading ? 'rgba(148, 163, 184, 0.2)' : 'rgba(148, 163, 184, 0.3)'}`,
                                borderRadius: '12px',
                                color: '#f8fafc',
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                cursor: loading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s',
                                backdropFilter: 'blur(10px)',
                                boxShadow: loading 
                                    ? '0 4px 15px rgba(0, 0, 0, 0.3)'
                                    : '0 4px 15px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.05)',
                                textShadow: '0 0 20px rgba(148, 163, 184, 0.3)',
                                opacity: loading ? 0.6 : 1
                            }}
                            onMouseEnter={(e) => {
                                if (!loading) {
                                    e.target.style.transform = 'translateY(-4px)';
                                    e.target.style.borderColor = 'rgba(203, 213, 225, 0.6)';
                                    e.target.style.boxShadow = '0 12px 30px rgba(148, 163, 184, 0.4), 0 0 50px rgba(203, 213, 225, 0.2)';
                                    e.target.style.background = 'linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(40, 40, 40, 0.95))';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!loading) {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)';
                                    e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.05)';
                                    e.target.style.background = 'linear-gradient(135deg, rgba(15, 15, 15, 0.95), rgba(30, 30, 30, 0.95))';
                                }
                            }}
                        >
                            {loading ? (
                                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    <svg style={{ animation: 'spin 1s linear infinite', width: '20px', height: '20px' }} viewBox="0 0 24 24">
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="none"
                                            opacity="0.25"
                                        />
                                        <path
                                            fill="currentColor"
                                            opacity="0.75"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                    Enviando...
                                </span>
                            ) : (
                                'Enviar Mensaje'
                            )}
                        </button>

                        {loading && (
                            <p style={{
                                textAlign: 'center',
                                color: '#94a3b8',
                                fontSize: '0.875rem',
                                marginTop: '0.5rem'
                            }}>
                                Por favor espera...
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}