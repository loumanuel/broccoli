import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Overview, MiPerfil, AmigosAgregar} from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import usr from './usr.png';

/*--------------------------------*/

import React, { Component, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import {Formulario, FooterAll, Input, MensajeExito, MensajeError, Label, GrupoInput, IconoValidacion, ContenedorBotonCentrado, Boton, ContenedorTerminos, Divide} from "./elementos/Formulario";
import InputAll from './components/Input'
import { Historia } from './pages/Historia';
import { Messages, MessagesTwo, MessaggesOne } from './pages/Messages';
import { Support } from './pages/Support';


/*--------------------------------*/

const Formm = () => {
  const [password, cambiarPassword] = useState({campo:'', valido: null});
  const [correo, cambiarCorreo] = useState({campo:'', valido: null});
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {

    password: /^.{9}$/, // 4 a 12 digitos.
    correo: /^\d{13}@[i]+[n]+[g][e]+[n]+[i]+[e]+[r]+[i]+[a]+\.[u]+[s]+[a]+[c]+\.[e]+[d]+[u]+\.[g]+[t]+$/,
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
            <Boton type="submit" onClick="">REGISTRARSE</Boton>
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
      <div class="col-sm">
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/overview/user' exact component={MiPerfil} />
        <Route path='/overview/agregar' exact component={AmigosAgregar} />
        <Route path='/historia' exact component={Historia} />
        <Route path='/messages' exact component={Messages} />
        <Route path='/messages/message1' exact component={MessaggesOne} />
        <Route path='/messages/message2' exact component={MessagesTwo} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/creditos' exact component={Support} />
        <Route path='/team' exact component={Team} />
      </Switch>
      </div>
      <FooterAll >
            <Divide>
            <div class="col-sm">
            <i><img src={usr}/></i>
          </div>
            </Divide>
            <div>
            <h3 className="perfil"><b>{this.state.nombre}</b></h3>
            <div className="p-3">
            @_{this.state.usuario} 
            </div>
            </div>
          <ContenedorBotonCentrado>
          <Boton  onClick={this.logOut}>
          CERRAR SESIÓN</Boton>
        </ContenedorBotonCentrado>
        <br/>
        </FooterAll>
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
              <Input type="text" placeholder="manuel_dm" id="user" ref={input => this.usuario = input}></Input>
              <IconoValidacion icon={faUser}/>
              </GrupoInput>
            </div>
            <div>
            <Label htmlFor="nombre">Nombre</Label>
              <GrupoInput>
              <Input type="text" placeholder="Pablo Nevarez" id="nombre" ref={input => this.nombre = input}></Input>
              <IconoValidacion icon={faUser}/>
              </GrupoInput>
            </div>
            <ContenedorBotonCentrado>
          <Boton  onClick={this.logIn}>
          INICIAR SESION</Boton>
        </ContenedorBotonCentrado>
          </Formulario>
        </main>
        <br/>
        <hr/>
          <div style={{color:'#bb2929'}}>Importante</div>
            <div className="terminosss">
                Si es usted estudiante de la Facultad de Ingeniería, regístrese e inicie sesión para obtener funciones exclusivas
              </div>
              <div className="terminosss">
              Si es usted Aspirante a la Facultad de Ingeniería solo inicie sesión \No tendrá funciones exclusivas\ 
              </div>
        <br/>
        <hr/>
        <footer>
          <div>
            <div style={{color:'#bb2929'}} className="terminospt">
              Términos y condiciones
            </div>
            <div className="terminosss">
              Al registrarse usted, haciendo uso de su correo institucional proporcionado por la Facultad de Ingeniería de la Universidad de San carlos de Guatemala
              <div className="terminosss">
                Se compromete a:
              </div>
                <div className="terminosss">
                · Proporcionar información verídica en cuanto a Aportes a los Administradores de la página
                </div>
                <div className="terminosss">
                · Ajustarse a Normas de convivencia que relacionen a los Aspirantes y resolución de dudas
                </div>
                <div className="terminosss">
                · No hacer uso de términos ofensivos, de lo contrario será excluido del uso de la red social
                </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;