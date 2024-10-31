import React, { useState } from 'react'

const Ejercicio4 = () => {
    const[numero1, setNumero1] = useState(null)
    const[numero2, setNumero2] = useState(null)
    const[resultado, setResultado] = useState(0)


  return (
    <div>Ejercicio2
        <div>
            <input type='number' value={numero1} onChange={(e) => {setNumero1(e.target.value)}}></input>
            <input type='number' value={numero2} onChange={(e) => {setNumero2(e.target.value)}}></input>
            <button  onClick={() => {setResultado(parseInt(numero1)+ parseInt(numero2))}}>Sumar</button>
            <p>{resultado}</p>


        </div>
    </div>
  )
}

export default Ejercicio4
