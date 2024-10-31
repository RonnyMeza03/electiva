import React, { useState } from 'react'

const Ejercicio3 = () => {
    const [texto, setTexto] = useState("Hola Mundo")
  return (
    <div>
        <p>Ejercicio 3</p>
        <div className="hola">
            <p>{texto}</p>
            <button onClick={() => {setTexto("Adios Mundo")}}>adios</button>
            <button onClick={() => {setTexto("Bienvenido nuevamente")}}>bienvenido</button>
        </div>
    </div>
    
  )
}

export default Ejercicio3
