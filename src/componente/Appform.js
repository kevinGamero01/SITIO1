//import { async } from "@firebase/util";
import {collection,getDocs, query, doc, deleteDoc, where, addDoc, } from "firebase/firestore";
///
import React, { useEffect, useState } from 'react';
import {db} from './firebase2';
//import Appform from './componente/Appform';

const Appform = (props) => {
    /////
    /////REGISTRAR Y ACTUALIZAR
    ////
    const camposRegistro = {nombre:"", edad:"", genero:""};
    const [objeto, setObjeto]=useState(camposRegistro);

    const handleStatusChange = (e) => {
      const {name,value}=e.target;
      setObjeto({...objeto, [name]:value});
      //
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      //
      if(props.idActual===""){
        //
        if(validarForm()){
          addDoc(collection(db, 'persona'), objeto);
          console.log('Se guardó...');
          props.fnRead();
        }else{
          console.log('NO se guardó...');
        }
      }else{
      
      }
      setObjeto(camposRegistro);
    }
    const validarForm = () => {
      if(objeto.nombre==="" || /^\s+$/.test(objeto.nombre)){
        alert("Escriba nombres...");
        return false;
      }
      return true;
    };

    useEffect(() => {
    },[props.idActual]);

    const obtenerDatosPorId = async(xId)=>{
    }
    if(props.idActual === ""){
      console.log("Guarda en BD");
    } else{
      console.log("Actualizo registro en BD");
    }
    
    
  return (
    <div style={{background:"orange",padding:"10px", textAlign:"center"}}>
    <h1>Appform.js</h1>
    <form onSubmit={handleSubmit}>

      <input type="text" name="nombre" placeholder="Nombres..."
      onChange={handleStatusChange} value={objeto.nombre} /> <br/>
      <input type="text" name="edad" placeholder="Edad..."
      onChange={handleStatusChange} value={objeto.edad} /> <br/>
      <input type="text" name="genero2" placeholder="Genero..."
      onChange={handleStatusChange} value={objeto.genero} /> <br/>
      <button>
        {props.idActual=== ""? "Guardar" : "Actualizar"}
      </button>
    </form>
    </div>
  )
}

export default Appform;
