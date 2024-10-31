import React, { useState } from 'react'

const Ejercicio2 = () => {
    const [texto, setTexto] = useState("Hola Mundo")
  return (
    <div>
        <p>Ejercicio 2</p>
        <div className="hola">
            <p>{texto}</p>
            <button onClick={() => {setTexto("Adios Mundo")}}>adios</button>
        </div>
    </div>
  )
}

export default Ejercicio2
