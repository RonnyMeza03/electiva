import React, { useState } from 'react';

const Ejercicio5 = () => {
  const [fondo1, setFondo1] = useState("#ff5733");

  return (
    <div style={{ backgroundColor: fondo1, width: "100%", height: "100vh", padding: "20px" }}>
      Ejercicio 5
      <button 
        onClick={() => setFondo1("#ff5733")} 
        style={{ backgroundColor: "#ff5733", color: "#fff", margin: "10px", padding: "10px 20px", border: "none", cursor: "pointer" }}
      >
        #ff5733
      </button>
      <button 
        onClick={() => setFondo1("#7733ff")} 
        style={{ backgroundColor: "#7733ff", color: "#fff", margin: "10px", padding: "10px 20px", border: "none", cursor: "pointer" }}
      >
        #7733ff
      </button>
      <button 
        onClick={() => setFondo1("#ff33e3")} 
        style={{ backgroundColor: "#ff33e3", color: "#fff", margin: "10px", padding: "10px 20px", border: "none", cursor: "pointer" }}
      >
        #ff33e3
      </button>
    </div>
  );
};

export default Ejercicio5;
