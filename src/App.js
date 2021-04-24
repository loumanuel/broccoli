import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';

/*--------------------------------*/

import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faUnlock, faTimesCircle, faExclamationTriangle, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import {Formulario, Input, LeyendaError, MensajeExito, MensajeError, Label, GrupoInput, IconoValidacion} from "./Formulario";

/*--------------------------------*/

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      hecho:false,
      usuario:'',
      errorMensaje:'',
      pestanas:''
    }
  }
  
  logIn = () => {
    this.setState({
      hecho:true,
      usuario:this.usuario.value,
      correo:this.correo.value
    })
  }

  logOut = () => {
    this.setState({
      hecho:false,
      usuario:''
    })
  }

  render() {
    let perfil, historia, vocacionales, destacados
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
          <p>Tu correo electrónico es: <b>{this.state.correo}</b></p>
          <footer>
            <div className='btn-group pb-3'>
              <a className="btn btn-outline-dark" onClick={this.logOut}>
              <i className="fa fa-user fa-fw"></i>Cerrar sesión</a>
            </div>
          </footer>
        </div>
    </Router>
      );
    return (
      <div className='registro container border rounded p-3 mt-4'>
      <h2>REGISTRO</h2>
      <form>

        <main>
          <Formulario action="">
            <div>
            <Label htmlFor="nombre">Usuario</Label>
              <GrupoInput>
              <Input type="text" placeholder="Usuario" id="nombre"></Input>
              <IconoValidacion icon={faCheckCircle}/>
              </GrupoInput>
              <p>
                Lorem ipsum sit amet
              </p>
            </div>
          </Formulario>
        </main>

      <LeyendaError className="textoleyenda">
          Nombre de usuario inválido
        </LeyendaError>
        <div className="input-group pb-3">
          <div className="input-group-prepend icon">
            <span className="input-group-text">
            <i  className= "fa-fw"><FontAwesomeIcon icon={faUser}/></i></span>
          </div>
          <Input id='usuario' className="form-control" 
          type="text" placeholder="Usuario"
          ref={input => this.usuario = input}/>
        </div>
        <LeyendaError className="textoleyenda">
        Dirección de correo inválida
        </LeyendaError>
        <div className="input-group pb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
            <i className= "fa-fw"><FontAwesomeIcon icon={faEnvelope}/></i></span>
          </div>
          <Input id='correo' className="form-control" 
          type="text" placeholder="Correo Electrónico Institucional"
          ref={input => this.correo = input}/>
        </div>
        <LeyendaError className="textoleyenda">
        La contraseña debe contener 7 caracteres
        </LeyendaError>
        <div className="input-group pb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
            <i className="fa-fw"><FontAwesomeIcon icon={faUnlock}/></i></span>
          </div>
          <Input id='clave'className="form-control" 
          type="password" placeholder="Contraseña"
          ref={input => this.clave = input}/>
        </div>
        <div className="btn-group pb-3 registroinicio">
          <a className="btn btn-outline-dark"  onClick={this.logIn}>
          <i></i>Iniciar sesión</a>
        </div>
        <div className='btn-group pb-3 alerta'>
          <a className="btn btn-outline-warning" onClick={this.AlertaAspirantes}>
          <i></i>Crear una nueva cuenta</a>
        </div>
        {false &&<MensajeError className="border rounded p-6 mt-8">
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error:</b> Por favor rellena el formulario correctamente
          </p>
        </MensajeError>}
        <MensajeExito className="border rounded p-6 mt-8">
          <p>
            Formulario enviado exitosamente!
          </p>
        </MensajeExito>
      </form>
      </div>
    );
  }
}

export default App;