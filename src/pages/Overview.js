import React from 'react';
import usac from './images/javier.png';
import {Formulario, ContenedorBotonCentrado, BotonDestacados} from './Formulario'

const Overview = () => {
  return (
    <div className='home'>
      <div class="col-sm border rounded">
            <ContenedorBotonCentrado>
            <BotonDestacados type="submit" >Javier Cerón</BotonDestacados>
            </ContenedorBotonCentrado>
            <hr/>
            <ContenedorBotonCentrado>
            <BotonDestacados type="submit">otro</BotonDestacados>
            </ContenedorBotonCentrado>
            <hr/>
            <ContenedorBotonCentrado>
            <BotonDestacados type="submit">otro</BotonDestacados>
            </ContenedorBotonCentrado>
            <hr/>
            <ContenedorBotonCentrado>
            <BotonDestacados type="submit">otro</BotonDestacados>
            </ContenedorBotonCentrado>
        </div>
      </div>
  );
};

export default Overview;
