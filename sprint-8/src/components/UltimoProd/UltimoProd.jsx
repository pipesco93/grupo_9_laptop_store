import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './UltimoProd.css';

export default function UltimoProd() {

  const [state, setState] = useState({});

  const apiInfo = async () => {
    const json = await axios.get('http://localhost:3001/api/products')
    const data = await json.data
    const id = data.products[data.products.length - 1].id
    const jsonDetail = await axios.get('http://localhost:3001/api/products/' + id)
    const dataDetail = await jsonDetail.data
    setState(dataDetail.data);
    console.log(state)
  };

  useEffect(() => {
    apiInfo();
  }, []);


  return (
    <div className="ultimo-prod-caja">
      <div>
        <h2 className='ultimo-prod-titulo'>Ultimo Producto creado</h2>
        <h3 className="ultimo-prod-marca">{state.marca + " " + state.nombre}</h3>
        <p className="ultimo-prod-specs">{state.caracteristicas}</p>
        <ul className="ultimo-prod-details">
          <li><h3>Pantalla:</h3> <p>{state.pantalla}</p></li>
          <li><h3>Procesador:</h3> <p>{state.procesador}</p></li>
          <li><h3>Memoria:</h3> <p>{state.memoria}</p></li>
          <li><h3>Almacenamiento:</h3> <p>{state.almacenamiento}</p></li>
        </ul>
      </div>

      <img className="img-ultimo-prod" src={state.imagenURL} alt="imagen" />

    </div>
  )
}
