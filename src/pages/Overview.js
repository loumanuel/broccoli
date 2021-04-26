import React from 'react';
import {ContenedorBotonCentrado, BotonDestacados, Divide} from './Formulario'
import './estilos.css'
import userman from './userman.png';
import userwoman from './userwoman.png';
import nuevo from './nuevo.jpg';
import chat from './chat.png'


export const Overview = () => {
  return (
    <div>
      <div class="col-sm">
            <h1 style={{paddingTop:'10px'}}>SECIÓN DE NOTICIAS</h1>
            <div>
            <ContenedorBotonCentrado>
            <BotonDestacados type="submit" ><h2>Javier Cerón</h2></BotonDestacados>
            </ContenedorBotonCentrado>
            <div style={{paddingTop:'10px'}}>
              <h3>
                Estudiante egresado de la Universidad San Carlos de Guatemala 
              </h3>
              <div class="row">
                <div class="col-sm" className="cas">
                <div  style={{width:'50%', marginLeft:'5%'}}>
                  <p>
                    Estudiante de Ingeniería Industrial e Ingeniería Mecánica.
                  </p>
                  <p>
                    Evaluador de las Olimpiadas Nacional de Ciencias. (2018 y 2019)
                  </p>
                  <p>
                    Webmaster en EAG USAC (2018).
                  </p>
                  <p>
                    Miembro de la Junta Directiva de la EAG USAC de la rama estudiantil IEEE-USAC. (2018)
                  </p>
                  <p>
                    Curso de Marketing Digital (2017)
                  </p>
                    </div>
                    <div  style={{width:'50%', marginLeft:'5%'}}>
                  <p>
                    Fundador de la Orquesta de la Facultad de Ingeniería - OFI. (2017)
                  </p>
                  <p>
                  Voluntario IEEE-USAC (2018)
                  </p>
                  <p>
                    Diplomado técnico en integridad web (2016).
                  </p>
                  <p>
                    Diplomado en Diseño Gráfico (2017)
                  </p>
                  <p>
                    Miembro de la Junta Directiva de la Rama Estudiantil IEEE-USAC. (2020)
                  </p>
                    </div>
                </div>
              </div>
            </div>
            <ContenedorBotonCentrado>
            <BotonDestacados type="submit" ><h2>Javier Cerón</h2></BotonDestacados>
            </ContenedorBotonCentrado>
            <div style={{paddingTop:'10px'}}>
              <h3>
                Estudiante egresado de la Universidad San Carlos de Guatemala 
              </h3>
              <div class="row">
                <div class="col-sm" className="cas">
                <div  style={{width:'50%', marginLeft:'5%'}}>
                  <p>
                    Estudiante de Ingeniería Industrial e Ingeniería Mecánica.
                  </p>
                  <p>
                    Evaluador de las Olimpiadas Nacional de Ciencias. (2018 y 2019)
                  </p>
                  <p>
                    Webmaster en EAG USAC (2018).
                  </p>
                  <p>
                    Miembro de la Junta Directiva de la EAG USAC de la rama estudiantil IEEE-USAC. (2018)
                  </p>
                  <p>
                    Curso de Marketing Digital (2017)
                  </p>
                    </div>
                    <div  style={{width:'50%', marginLeft:'5%'}}>
                  <p>
                    Fundador de la Orquesta de la Facultad de Ingeniería - OFI. (2017)
                  </p>
                  <p>
                  Voluntario IEEE-USAC (2018)
                  </p>
                  <p>
                    Diplomado técnico en integridad web (2016).
                  </p>
                  <p>
                    Diplomado en Diseño Gráfico (2017)
                  </p>
                  <p>
                    Miembro de la Junta Directiva de la Rama Estudiantil IEEE-USAC. (2020)
                  </p>
                    </div>
                </div>
              </div>
            </div>
            <ContenedorBotonCentrado>
            <BotonDestacados type="submit" ><h2>Javier Cerón</h2></BotonDestacados>
            </ContenedorBotonCentrado>
            <div style={{paddingTop:'10px'}}>
              <h3>
                Estudiante egresado de la Universidad San Carlos de Guatemala 
              </h3>
              <div class="row">
                <div class="col-sm" className="cas">
                <div  style={{width:'50%', marginLeft:'5%'}}>
                  <p>
                    Estudiante de Ingeniería Industrial e Ingeniería Mecánica.
                  </p>
                  <p>
                    Evaluador de las Olimpiadas Nacional de Ciencias. (2018 y 2019)
                  </p>
                  <p>
                    Webmaster en EAG USAC (2018).
                  </p>
                  <p>
                    Miembro de la Junta Directiva de la EAG USAC de la rama estudiantil IEEE-USAC. (2018)
                  </p>
                  <p>
                    Curso de Marketing Digital (2017)
                  </p>
                    </div>
                    <div  style={{width:'50%', marginLeft:'5%'}}>
                  <p>
                    Fundador de la Orquesta de la Facultad de Ingeniería - OFI. (2017)
                  </p>
                  <p>
                  Voluntario IEEE-USAC (2018)
                  </p>
                  <p>
                    Diplomado técnico en integridad web (2016).
                  </p>
                  <p>
                    Diplomado en Diseño Gráfico (2017)
                  </p>
                  <p>
                    Miembro de la Junta Directiva de la Rama Estudiantil IEEE-USAC. (2020)
                  </p>
                    </div>
                </div>
              </div>
            </div>
            </div>
            
        </div>
      </div>
  );
};

export const MiPerfil = () => {
  return (
    <div>
      <ContenedorBotonCentrado>
        <BotonDestacados type="submit" style={{backgroundColor:'#bbbbbb'}} ><h2>MI PERFIL</h2></BotonDestacados>
        <Divide>
          <BotonDestacados type="submit" style={{backgroundColor:'#f7ea00', width: '80%'}} ><h2>¿EN QUÉ PIENSAS?</h2></BotonDestacados>
        </Divide>
      </ContenedorBotonCentrado>
      <div>
        <Divide>
          <div class="col-sm">
            <img src={nuevo} style={{width:'20%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '80%', color:'white'}} ><h2>AGREGAR NUEVA FOTO</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={chat} style={{width:'25%'}} />
          </div>
          <div className="col-sm p-3">
          </div>
          <BotonDestacados type="submit" style={{backgroundColor:'#1b262c', width: '80%', color:'white'}} ><h2>NUEVA CONVERSACIÓN</h2></BotonDestacados>
        </Divide>
      </div>
    </div>
  );
};

export const AmigosAgregar = () => {
  return (
      <div>
        <ContenedorBotonCentrado>
        <BotonDestacados type="submit" style={{backgroundColor:'#bbbbbb'}} ><h2>AMIGOS/AGREGAR</h2></BotonDestacados>
        </ContenedorBotonCentrado>
        <Divide>
          <div class="col-sm">
            <img src={userman} style={{width:'25%'}} />
          </div>
          <h4 className="col-sm p-2">
            STEVEN FACUNDO
          </h4>
        <BotonDestacados type="submit" style={{backgroundColor:'#f7ea00', width: '80%'}} ><h2>AGREGAR A AMIGOS</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={userwoman} style={{width:'25%'}} />
          </div>
          <h4 className="col-sm p-2">
            FAVIOLA RAMOS
          </h4>
          <BotonDestacados type="submit" style={{backgroundColor:'#f7ea00', width: '80%'}} ><h2>AGREGAR A AMIGOS</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={userman} style={{width:'25%'}} />
          </div>
          <h4 className="col-sm p-3">
            WALTER CASIA
          </h4>
          <BotonDestacados type="submit" style={{backgroundColor:'#f7ea00', width: '80%'}} ><h2>AGREGAR A AMIGOS</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={userman} style={{width:'25%'}} />
          </div>
          <h4 className="col-sm p-3">
            JONATHAN ALVAREZ
          </h4>
          <BotonDestacados type="submit" style={{backgroundColor:'#f7ea00', width: '80%'}} ><h2>AGREGAR A AMIGOS</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={userman} style={{width:'25%'}} />
          </div>
          <h4 className="col-sm p-3">
            LUIS CASTELLANOS
          </h4>
          <BotonDestacados type="submit" style={{backgroundColor:'#f7ea00', width: '80%'}} ><h2>AGREGAR A AMIGOS</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={userman} style={{width:'25%'}} />
          </div>
          <h4 className="col-sm p-3">
            JUSTY RODRÍGUEZ
          </h4>
          <BotonDestacados type="submit" style={{backgroundColor:'#f7ea00', width: '80%'}} ><h2>AGREGAR A AMIGOS</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={userman} style={{width:'25%'}} />
          </div>
          <h4 className="col-sm p-3">
            DENIS CORONADO
          </h4>
          <BotonDestacados type="submit" style={{backgroundColor:'#f7ea00', width: '80%'}} ><h2>AGREGAR A AMIGOS</h2></BotonDestacados>
        </Divide>
        <Divide>
          <div class="col-sm">
            <img src={userwoman} style={{width:'25%'}} />
          </div>
          <h4 className="col-sm p-3">
            LOURDES MANUEL
          </h4>
          <BotonDestacados type="submit" style={{backgroundColor:'#f7ea00', width: '80%'}} ><h2>AGREGAR A AMIGOS</h2></BotonDestacados>
        </Divide>
      </div>
  );
};
