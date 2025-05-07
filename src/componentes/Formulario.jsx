import "./Formulario.css"
import { useState } from "react"

        
export function Formulario() {
    const [nombre, setNombre]= useState("")
    const [contraseña, setContraseña]= useState("")

    return(
        <section>
            <form className="formulario">
                <input type="text" placeholder="Correo Electronico o número de teléfono"/>
                <input type="password" placeholder="Contraseña"/>
                <button type="submit">Iniciar Sesión</button>
                <a href="#">¿Olvidaste tu contraseña?</a>
            </form>
        </section>
    )
}