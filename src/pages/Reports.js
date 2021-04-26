import React from 'react';
import {Formulario, ContenedorBotonCentrado, BotonDestacados} from './Formulario'
import './estilos.css'

export const Reports = () => {
  return (
    <div>
      <ContenedorBotonCentrado>
        <BotonDestacados type="submit" style={{backgroundColor:'#ca8a8b'}} ><h2>EN ESTE APARTADO OBTENDRÁ INFORMACIÓN ACERCA DE</h2></BotonDestacados>
      </ContenedorBotonCentrado>
      <ContenedorBotonCentrado>
        <BotonDestacados type="submit" style={{backgroundColor:'#bbbbbb'}} ><h2>PRUEBAS DE ORIENTACIÓN VOCACIONAL</h2></BotonDestacados>
      </ContenedorBotonCentrado>
      <ContenedorBotonCentrado>
        <BotonDestacados type="submit" style={{backgroundColor:'#e2bcb7'}}><h2>PRUEBAS BÁSICAS</h2></BotonDestacados>
      </ContenedorBotonCentrado>
      <ContenedorBotonCentrado>
        <BotonDestacados type="submit" style={{backgroundColor:'#fbe0c4'}} ><h2>PRUEBAS ESPECIFICAS</h2></BotonDestacados>
      </ContenedorBotonCentrado>
    </div>
  );
};

export const ReportsOne = () => {
  return (
    <ContenedorBotonCentrado>
        <BotonDestacados type="submit" style={{backgroundColor:'#bbbbbb'}} ><h2>PRUEBAS DE ORIENTACION VOCACIONAL</h2></BotonDestacados>
      </ContenedorBotonCentrado>
  );
};

export const ReportsTwo = () => {
  return (
    <ContenedorBotonCentrado>
    <BotonDestacados type="submit" style={{backgroundColor:'#e2bcb7'}}><h2>PRUEBAS BÁSICAS</h2></BotonDestacados>
  </ContenedorBotonCentrado>
  );
};

export const ReportsThree = () => {
  return (
    <ContenedorBotonCentrado>
    <BotonDestacados type="submit" style={{backgroundColor:'#fbe0c4'}} ><h2>PRUEBAS ESPECÍFICAS</h2></BotonDestacados>
  </ContenedorBotonCentrado>
  );
};
