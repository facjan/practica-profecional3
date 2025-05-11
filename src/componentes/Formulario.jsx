import "./Formulario.css"
import { useState } from "react"

export function Formulario() {
    const [dni, setDni] = useState('');
    const [error, setError] = useState('');
    const [contraseña, setContraseña] = useState("");

    const handleChange = (e) => {
        const valor = e.target.value;

        if (/^\d{0,8}$/.test(valor)) {
            setDni(valor);
            setError('');
        } else {
            setError('DNI Incorrecto');
        }
    };

    const validarDNI = () => {
        if (/^\d{7,8}$/.test(dni)) {
            console.log("DNI válido:", dni);
            setError('');
        } else {
            setError('El DNI debe tener entre 7 y 8 dígitos');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validarDNI();
        if (contraseña.trim() === '') {
            setError('La contraseña no puede estar vacía');
            return;}
    };

    const [loading, setLoading] = useState(false);
    <button type="submit" disabled={loading}>
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>


    return (
        <section>
            <form className="formulario" onSubmit={handleSubmit}>
                <input
                    type="number"    
                    placeholder="Número de DNI"
                    value={dni}
                    step="1"
                    min="1000000"
                    max="99999999"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                />

                <button type="submit">Iniciar Sesión</button>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <a href="#">¿Olvidaste tu contraseña?</a>
            </form>
        </section>
    );
}

export default Formulario;
