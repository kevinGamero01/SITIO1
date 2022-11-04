import logo from './logo.svg';
import './App.css';
import Appform from "./componente/Appform";
import { useEffect, useState } from 'react';


function App() {
  ///////////////////READ/////////////////
  ////
  ///
  const [idActual,setIdActual] = useState('');
  const [docsBD, setDocsBD] = useState([]);
  const [orden, setOrden] = useState(0);
  const i=1;
///////////////LECTURA A BASE DE DATOS///////////
  const fnRead = () => {
    console.log("Lectura a BD")
  }
  useEffect(() =>{
  }, [idActual])

  const fnDelete = ()=> {
    console.log("Eliminar registro")
  }

  return (
    <div style={{background:"greenyellow",width:"350px"}}>
      <h1>sitiocopia2 (App.js)</h1>
    <Appform {...{idActual, setIdActual, fnRead}}/>{
      docsBD.map(   (p) => j
      )
    }
    </div>
  );
}

export default App;
