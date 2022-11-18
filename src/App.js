import {collection,getDocs, query, doc, deleteDoc, where, onSnapshot, } from "firebase/fireeffstore";
import './App.css';
import React, { useEffect,useState } from 'react';
import  {db} from './componente/firebase2';
import  Appform from './componente/Appform';
//import { async } from "@firebase/util";
///////////////////READ/////////////////
function App() {
  const [docsBD, setDocsBD] = useState([]);
  const [orden, setOrden] = useState(0);
  const i=1;
///////////////LECTURA A BASE DE DATOS///////////
  const fnRead = () => {
    try{
      const xColeccionConQuery =query(collection(db, "persona"));
      //
      const unsubscribe = onSnapshot(xColeccionConQuery, (xDatosBD)=>{
      const xDoc =[];
      xDatosBD.forEach((doc)=> {
        xDoc.push({id: doc.id, ...doc.data()});
        //
      });
      setDocsBD(xDoc);
      //
    });
    }catch(error){

    }
  }
    fnRead();
  /*
  useEffect(() =>{
    fnRead();
  }, []);
*/
///
///
///
  const [idActual, setIdActual]=useState("");
  const fnDelete = ()=> {
      console.log("Se elimino...");
    };
    //
    //console.log("Eliminar registro")
  

  return (
    <div style={{background:"greenyellow",width:"350px", padding:"10px"}}>
      <h1>sitiocopia2 (App.js)</h1>
      <h1>READ / DELETE</h1>
    <Appform {...{idActual, setIdActual, fnRead}}/>
    {
      docsBD.map(   (p) =><p key={p.id}>{p.nombre}
      </p>)
    }
    </div>
  );
}
export default App;
