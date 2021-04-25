import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';

/*--------------------------------*/

import React, { Component, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faUnlock, faTimesCircle, faExclamationTriangle, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import {Formulario, Input, LeyendaError, MensajeExito, MensajeError, Label, GrupoInput, IconoValidacion, ContenedorBotonCentrado, Boton, ContenedorTerminos} from "./elementos/Formulario";
import InputAll from './components/Input'


/*--------------------------------*/

const Formm = () => {
  // const [usuario, cambiarUsuario] = useState({campo:'', valido: null});
  // const [nombre, cambiarNombre] = useState({campo:'', valido: null});
  const [password, cambiarPassword] = useState({campo:'', valido: null});
  const [correo, cambiarCorreo] = useState({campo:'', valido: null});
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    // usuario: /^[a-zA-Z0-9\_\-]{4,10}$/, // Letras, numeros, guion y guion_bajo
    // nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{9}$/, // 4 a 12 digitos.
    correo: /^\d{13}@[i]+[n]+[g][e]+[n]+[i]+[e]+[r]+[i]+[a]+\.[u]+[s]+[a]+[c]+\.[e]+[d]+[u]+\.[g]+[t]+$/,
    // telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked)
  }

  const onSubmit = (e) =>{
    e.preventDefault();

    if(correo.valido === 'true' &&
    password.valido === 'true' &&
    terminos
    ){
      cambiarFormularioValido(true);
      cambiarCorreo({campo:'', valido:null});
      cambiarPassword({campo:'', valido:null});
      cambiarTerminos(false);
    } else{
      cambiarFormularioValido(false);
    }
  }

  return(
    <main>
          <Formulario action="" onSubmit={onSubmit}>
            <InputAll
              estado={correo}
              cambiarEstado={cambiarCorreo}
              tipo="email"
              label="Correo Electrónico"
              placeholder="@ingenieria.usac.edu.gt"
              name="correo"
              leyendaError="Debe introducir su Correo Electrónico Institucional"
              expresionRegular={expresiones.correo}
            />
            <InputAll
              estado={password}
              cambiarEstado={cambiarPassword}
              tipo="password"
              label="Contraseña"
              placeholder="Contraseña"
              name="contraseña"
              leyendaError="La contraseña debe ser su Número de Registro Académico"
              expresionRegular={expresiones.password}
            />
            <ContenedorTerminos>
              <Label>
                <input
                type="checkbox"
                name="terminos"
                id="terminos"
                checked={terminos}
                onChange={onChangeTerminos}
                />
                Acepto los Términos y Condiciones
              </Label>
            </ContenedorTerminos>
            {formularioValido === false &&<MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle}/>
                <b>Error:</b> Por favor rellena el formulario correctamente
              </p>
            </MensajeError>}
            <ContenedorBotonCentrado>
            <Boton type="submit" onClick="">Registrarse</Boton>
              {formularioValido === true &&<MensajeExito>
                <p style={{paddingTop:'10px'}}>
                  Formulario enviado exitosamente!
                </p>
              </MensajeExito>}
            </ContenedorBotonCentrado>
          </Formulario>
        </main>
  )

  }

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      hecho:false,
      usuario:'',
      errorMensaje:'',
      nombre:''
    }
  }

   
  logIn = () => {
    this.setState({
      hecho:true,
      usuario:this.usuario.value,
      nombre:this.nombre.value
    })
  }

  logOut = () => {
    this.setState({
      hecho:false,
      usuario:'',
      nombre:''
    })
  }

  render() {
    if (this.state.hecho)
      return(
        <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
      <div className='registro container border rounded p-3 mt-4'>
          <h3 className="perfil">Mi perfil</h3>
          <p>Muchas gracias por resgistrarte</p>
          <p>Tu nombre de usuario es: <b>{this.state.usuario}</b></p>
          <p>Tu Nombre es: <b>{this.state.nombre}</b></p>
          <footer>
          <ContenedorBotonCentrado>
          <Boton  onClick={this.logOut}>
          Cerrar sesión</Boton>
        </ContenedorBotonCentrado>
          </footer>
        </div>
    </Router>
      );
    return (
      <div className='registro container p-3 mt-4'>
      <h2>REGISTRATE E INICIA SESION</h2>
      <main>
          <Formm></Formm>
          <Formulario action="">
            <div>
            <Label htmlFor="user">Usuario</Label>
              <GrupoInput>
              <Input type="text" placeholder="Usuario" id="user" ref={input => this.usuario = input}></Input>
              <IconoValidacion icon={faUser}/>
              </GrupoInput>
              <LeyendaError>
                Lorem ipsum sit amet
              </LeyendaError>
            </div>
            <div>
            <Label htmlFor="nombre">Nombre</Label>
              <GrupoInput>
              <Input type="text" placeholder="Usuario" id="nombre" ref={input => this.nombre = input}></Input>
              <IconoValidacion icon={faUser}/>
              </GrupoInput>
              <LeyendaError>
                Lorem ipsum sit amet
              </LeyendaError>
            </div>
            <ContenedorBotonCentrado>
          <Boton  onClick={this.logIn}>
          Iniciar sesión</Boton>
        </ContenedorBotonCentrado>
          </Formulario>
        </main>
        <br/>
        <br/>
        <br/>
        <hr/>
        <footer>
          <div>
            <h6 style={{color:'#bb2929'}}>
              Terminos y condiciones:
            </h6>
            <div>
              Al registrarse usted, haciendo uso de su correo institucional proporcionado por la Facultad de Ingeniería de la Universidad de San carlos de Guatemala
              <div>
                Se compromete a:
              </div>
              · Proporcionar información verídica en cuanto a Aportes a los Administradores de la página
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;