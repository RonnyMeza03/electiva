import React, { useState } from 'react'


const Ejercicio1 = () => {
    const [contador , setContador] = useState(0)

  return (
    <div>
        <p>Ejercicio 1</p>
        <div className="contador">
            <p>Contador de clicks: {contador}</p>
            <button onClick={() => {setContador(contador  + 1)}}>aumentar</button>
            <button onClick={() => {setContador(contador  - 1)}}>disminuir</button>
        </div>
    </div>
  )
}

export default Ejercicio1