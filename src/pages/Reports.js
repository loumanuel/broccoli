import React from 'react';
import {ContenedorBotonCentrado, BotonDestacados, Divide} from './Formulario'
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
      <br/>
      <div class="row">
      <div class="col-sm">
      <ContenedorBotonCentrado style={{paddingBottom:'0.1%'}}>
        <BotonDestacados type="submit" style={{backgroundColor:'#dddddd'}} ><h2>PROCESO DE INGRESO</h2></BotonDestacados>
      </ContenedorBotonCentrado>
      <Divide>
        <BotonDestacados type="submit" style={{backgroundColor:'#ffe8e8', width: '90%'}} ><h2>PASO 1</h2></BotonDestacados>
        <h5 className="col-sm p-3">
          Prueba de Orientación Vocacional
        </h5>
      </Divide>
      <Divide>
        <BotonDestacados type="submit" style={{backgroundColor:'#e8e8e8', width: '90%'}} ><h2>PASO 2</h2></BotonDestacados>
        <h5 className="col-sm p-3">
          Prueba de Conocimientos Básicos -PCB-
        </h5>
      </Divide>
      <Divide>
        <BotonDestacados type="submit" style={{backgroundColor:'#fcf8e8', width: '90%'}} ><h2>PASO 3</h2></BotonDestacados>
        <h5 className="col-sm p-3">
          Pruebas específicas
        </h5>
      </Divide>
      <Divide>
        <BotonDestacados type="submit" style={{backgroundColor:'#f4eeff', width: '90%'}} ><h2>PASO 4</h2></BotonDestacados>
        <h5 className="col-sm p-3">
          Iscripción
        </h5>
      </Divide>
      <Divide>
        <BotonDestacados type="submit" style={{backgroundColor:'#eeebdd', width: '90%'}} ><h2>PASO 5</h2></BotonDestacados>
        <h5 className="col-sm p-3">
          Programa Académico preparatorio -PAP-
        </h5>
      </Divide>
    </div>
      </div>
      </div>
  );
};

export const ReportsOne = () => {
  return (
    <div>
      <ContenedorBotonCentrado>
        <BotonDestacados type="submit" style={{backgroundColor:'#bbbbbb'}} ><h2>PRUEBAS DE ORIENTACION VOCACIONAL</h2></BotonDestacados>
      </ContenedorBotonCentrado>
      <p class="col-sm" className="p-3" style={{textAlign:'center'}}>
              Aún no se estipulan fechas, pero cuando eso suceda te mantendremos informado!
              </p>
    </div>
  );
};

export const ReportsTwo = () => {
  return (
    <div>
      <ContenedorBotonCentrado>
    <BotonDestacados type="submit" style={{backgroundColor:'#e2bcb7'}}><h2>PRUEBAS BÁSICAS</h2></BotonDestacados>
    <p class="col-sm" className="p-3" style={{textAlign:'center'}}>
              Aún no se estipulan fechas, pero cuando eso suceda te mantendremos informado!
              </p>
  </ContenedorBotonCentrado>
    </div>
  );
};

export const ReportsThree = () => {
  return (
    <div>
      <ContenedorBotonCentrado>
    <BotonDestacados type="submit" style={{backgroundColor:'#fbe0c4'}} ><h2>PRUEBAS ESPECÍFICAS</h2></BotonDestacados>
  </ContenedorBotonCentrado>
  <p class="col-sm" className="p-3" style={{textAlign:'center'}}>
              Aún no se estipulan fechas, pero cuando eso suceda te mantendremos informado!
              </p>
    </div>
  );
};
