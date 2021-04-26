import React from 'react';
import {ContenedorBotonCentrado, BotonDestacados} from './Formulario'
import './estilos.css'




export const Support = () => {
    return (
      <div>
        <ContenedorBotonCentrado>
          <BotonDestacados type="submit" style={{backgroundColor:'#e2bcb7'}} ><h2>Support</h2></BotonDestacados>
        </ContenedorBotonCentrado>
      </div>
    );
  };