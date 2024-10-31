import React from "react";
import { Link } from "react-router-dom";

const Ejercicios = () => {
  return (
    <div>
        
      <p>
        Resolver los siguientes ejercicios usando JavaScript en entorno React.
      </p>
      <ul>
        <li>
            <h1>Nombres: Ronny Meza, Juan Miranda</h1>
        </li>
        <li>
          <Link to="/ejercicios/1">
            1. Modifica el código del contador básico para que, además de
            incrementar el valor al hacer clic en el botón, también se pueda
            decrementar el valor del contador con otro botón.
          </Link>
        </li>
        <li>
          <Link to="/ejercicios/2">
            2. Crea un componente que muestre un texto (por ejemplo, "¡Hola,
            mundo!") y un botón que, al hacer clic, cambie el texto por uno
            nuevo (por ejemplo, "¡Adiós, mundo!").
          </Link>
        </li>
        <li>
          <Link to="/ejercicios/3">
            3. Crea un botón que, al hacer clic, muestre un mensaje en la
            pantalla (por ejemplo, "¡Bienvenido!"). Si vuelves a hacer clic, el
            mensaje debe desaparecer.
          </Link>
        </li>
        <li>
          <Link to="/ejercicios/4">
            4. Crea un formulario simple con dos campos de entrada de números y
            un botón que, al hacer clic, sume los valores de los dos campos y
            muestre el resultado en la pantalla.
          </Link>
        </li>
        <li>
          <Link to="/ejercicios/5">
            5. Crea un botón que cambie el color de fondo de la página cada vez
            que el usuario haga clic en él. El color debe cambiar entre al menos
            tres colores diferentes.
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Ejercicios;
