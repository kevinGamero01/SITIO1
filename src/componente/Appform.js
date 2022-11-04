import React, { useState } from 'react';

const Appform = (props) => {
    /////
    /////REGISTRAR Y ACTUALIZAR
    /////
    const camposRegistro = {nombre:"", edad:"", genero:""};
    const [objeto, setObjeto]=useState(camposRegistro);

    const handleStatusChange = (e) => {
    };
    const handleSubmit = async (e)=>{
    };
    const validarForm = () => {
         
    };
  return (
    <div style={{background:"orange"}}>
      Formulario Appform.js
    </div>
  )
}

export default Appform
