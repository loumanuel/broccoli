import React from 'react';
import {ContenedorBotonCentrado, BotonDestacados, Divide} from './Formulario'
import './estilos.css'
import chat from './chat.png';
import addcoment from './addcoment.png'

export const Messages = () => {
    return (
      <div>
        <ContenedorBotonCentrado>
          <BotonDestacados type="submit" style={{backgroundColor:'#bbbbbb'}} ><h2>ALL MESSAGES</h2></BotonDestacados>
        </ContenedorBotonCentrado>
        <div>
        <Divide>
          <div class="col-sm">
            <img src={chat} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '90%', color:'white'}} ><h2>CHAT Y CONVERSASIONES</h2></BotonDestacados>
        </Divide>
        </div>
      </div>
    );
  };
  
  export const MessaggesOne = () => {
    return (
      <div>
        <ContenedorBotonCentrado>
      <BotonDestacados type="submit" style={{backgroundColor:'#e2bcb7'}}><h2>MESSAGE USERS</h2></BotonDestacados>
    </ContenedorBotonCentrado>
        <div>
        <Divide>
          <div class="col-sm">
            <img src={addcoment} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '90%', color:'white'}} ><h2>NUEVA CONVERSACIÓN</h2></BotonDestacados>
        </Divide>
        </div>
        <Divide>
          <div class="col-sm">
            <img src={addcoment} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '90%', color:'white'}} ><h2>ADMINISTRADORA LOURDES</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={addcoment} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '90%', color:'white'}} ><h2>ADMINISTRADOR FACUNDO</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={addcoment} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '90%', color:'white'}} ><h2>ADMINISTRADOR WALTER</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={addcoment} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '90%', color:'white'}} ><h2>ADMINISTRADOR LUIS</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={addcoment} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '90%', color:'white'}} ><h2>ADMINISTRADORA FAVIOLA</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={addcoment} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '90%', color:'white'}} ><h2>ADMINISTRADOR JUSTY</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={addcoment} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '90%', color:'white'}} ><h2>ADMINISTRADOR JOSUE</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={addcoment} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '90%', color:'white'}} ><h2>ADMINISTRADOR DENIS</h2></BotonDestacados>
        </Divide>
      </div>
    );
  };
  
  export const MessagesTwo = () => {
    return (
      <div>
        <ContenedorBotonCentrado>
      <BotonDestacados type="submit" style={{backgroundColor:'#fbe0c4'}} ><h2>MESSAGE GROUPS</h2></BotonDestacados>
    </ContenedorBotonCentrado>
    <Divide>
          <div class="col-sm">
            <img src={chat} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '80%', color:'white'}} ><h2>NUEVO CHAT GRUPAL</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={chat} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '80%', color:'white'}} ><h2>CHAT ADMINISTRACIÓN</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={chat} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '80%', color:'white'}} ><h2>CHAT ASPIRANTES</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={chat} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '80%', color:'white'}} ><h2>CHAT GENERAL</h2></BotonDestacados>
        </Divide>
      </div>
    );
  };
  