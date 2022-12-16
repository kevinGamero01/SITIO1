import {collection,getDocs, query, doc, deleteDoc, where, onSnapshot, } from "firebase/firestore";
//import './App.css';
import React, { useEffect,useState } from 'react';
import  {db} from './componente/firebase';
import  AppForm from './componente/AppForm';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
//import 'bootswatch/dist/quartz/bootstrap.min.css';
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
    const fnDelete = async (xId) =>{
      if(window.confirm("Confirme para elimminar")){
        await deleteDoc(doc(db, 'persona', xId));
        toast("Documento ELIMINADO con exito",{
          type:'error',
          autoClose: 2000
        })
      }
    }
    //
    //console.log("Eliminar registro")
  
    return( 
      <div className="container text-center">
        <div className="card bs-secondary p-3 mt-3">
          <ToastContainer/>
          
          <div className="col-md-12 p-2">
            <div className="card mb-1">
              <h1>Sitiocopia 2(App.js)</h1>
            </div>
          </div>
  
          <div className="col-md-12 p-2">
            <AppForm {...{idActual,setIdActual}}/>
          </div>
  
          <div className="col-md-12 p-2">
            {
              docsBD.map((p) =>
                <div className="car mb-1" key={p.id}>
                  <div className="d-flex justify-content-between">
                    <h4>N     -{p.nombre}</h4>
                    <div>
                      <i className="material-icons text-danger"
                        onClick={() => fnDelete(p.id)}>close</i>
                        ....
                      <i className="material-icons text-warnig"
                        onClick={() => setIdActual(p.id)}>create</i>  
                    </div>
                  </div>
                  <div className="d-flex justify-content">
                    <span>Edad: {p.edad}</span>...
                    <a href="#">Genero:{p.genero}</a>
                  </div>
                </div>
                )
            }
          </div>
  
        </div> 
      </div>
    );
  };
  
  export default App;