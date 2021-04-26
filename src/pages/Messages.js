import React from 'react';
import {Formulario, ContenedorBotonCentrado, BotonDestacados} from './Formulario'
import './estilos.css'

export const Messages = () => {
    return (
      <ContenedorBotonCentrado>
          <BotonDestacados type="submit" style={{backgroundColor:'#bbbbbb'}} ><h2>PRUEBAS DE ORIENTACION VOCACIONAL</h2></BotonDestacados>
        </ContenedorBotonCentrado>
    );
  };
  
  export const MessaggesOne = () => {
    return (
      <ContenedorBotonCentrado>
      <BotonDestacados type="submit" style={{backgroundColor:'#e2bcb7'}}><h2>PRUEBAS BÁSICAS</h2></BotonDestacados>
    </ContenedorBotonCentrado>
    );
  };
  
  export const MessagesTwo = () => {
    return (
      <ContenedorBotonCentrado>
      <BotonDestacados type="submit" style={{backgroundColor:'#fbe0c4'}} ><h2>PRUEBAS ESPECÍFICAS</h2></BotonDestacados>
    </ContenedorBotonCentrado>
    );
  };
  