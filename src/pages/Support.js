import React from 'react';
import {ContenedorBotonCentrado, BotonDestacados, Divide} from './Formulario'
import './estilos.css'
import sebas from './sebas.jpg';
import facundo from './facundo.jpeg';
import josue from './josue.jpg';
import denis from './denis.jpeg';
import luis from './luis.jpg';
import walter from './walter.jpg';
import favi from './favi.jpg';
import mou from './mou.jpg';




export const Support = () => {
    return (
      <div>
        <ContenedorBotonCentrado>
          <BotonDestacados type="submit" style={{backgroundColor:'#e2bcb7'}} ><h2>CRÉDITOS SOBRE CREACIÓN DE LA RED SOCIAL OASIS</h2></BotonDestacados>
        </ContenedorBotonCentrado>
        <div>
        <Divide>
          <div class="col-sm">
            <img src={facundo} style={{width:'30%', paddingBottom: '3%'}} />
          </div>
        <BotonDestacados type="submit" style={{backgroundColor:'#eeeeee', width: '80%'}} ><h2>STEVEN FACUNDO</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={favi} style={{width:'30%', paddingBottom: '3%'}} />
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#eeeeee', width: '80%'}} ><h2>FAVIOLA RAMOS</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={walter} style={{width:'30%', paddingBottom: '3%'}} />
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#eeeeee', width: '80%'}} ><h2>WALTER CASIA</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={josue} style={{width:'30%', paddingBottom: '3%'}} />
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#eeeeee', width: '80%'}} ><h2>JONATHAN ALVAREZ</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={luis} style={{width:'30%', paddingBottom: '3%'}} />
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#eeeeee', width: '80%'}} ><h2>LUIS CASTELLANOS</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={sebas} style={{width:'30%', paddingBottom: '3%'}} />
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#eeeeee', width: '80%'}} ><h2>JUSTY RODRÍGUEZ</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={denis} style={{width:'30%', paddingBottom: '3%'}} />
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#eeeeee', width: '80%'}} ><h2>DENIS CORONADO</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={mou} style={{width:'30%', paddingBottom: '3%'}} />
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#eeeeee', width: '80%'}} ><h2>LOURDES MANUEL</h2></BotonDestacados>
        </Divide>
      </div>
      </div>
    );
  };