
import Ejercicio1 from './Ejercicio1';
import Ejercicio2 from './Ejercicio2';
import Ejercicio3 from './Ejercicio3';
import Ejercicio4 from './Ejercicio4';
import Ejercicio5 from './Ejercicio5';
import Ejercicios from './ejercicios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ejercicios />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/ejercicios/1" element={<Ejercicio1 />} />
        <Route path="/ejercicios/2" element={<Ejercicio2 />} />
        <Route path="/ejercicios/3" element={<Ejercicio3 />} />
        <Route path="/ejercicios/4" element={<Ejercicio4 />} />
        <Route path="/ejercicios/5" element={<Ejercicio5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
