import React from 'react';
import {Formulario, ContenedorBotonCentrado, BotonDestacados} from './Formulario'
import './estilos.css'

export const Historia = () => {
  return (
    <div>
      <ContenedorBotonCentrado>
        <BotonDestacados type="submit" style={{backgroundColor:'#e2bcb7'}} ><h2>HISTORIA DE LA USAC</h2></BotonDestacados>
      </ContenedorBotonCentrado>
      <h3>Celebración a San Carlos de Borromeo</h3>
      <div class="col-sm" className="p-3">
        La Universidad de San Carlos de Guatemala celebra cada 4 de noviembre a San Carlos de Borromeo, patrono de los catequistas, seminaristas y de San Juan Pablo II. Carlos de Borromeo nació en el seno de una familia noble, en Arona, actual Italia, en el año de 1538. Su madre era hermana del Papa Pío IV, Margarita de Mídicis. Asimismo, su hermano mayor, a quien correspondía la mayor parte de la herencia, murió al caer de un caballo. Sin embargo, el renunció a sus riquezas, fue ordenado sacerdote y posteriormente Arzobispo de Milín. La dignidad y seriedad de su conducta fueron modelo de los jóvenes universitarios, quienes tenían la reputación de ser muy dados a los vicios. A los veintidós años sus padres ya habían fallecido y obtuvo el grado de doctor. Fue llamado "padre de los pobres" porque siendo muy rico, vivía cerca del pueblo, privandose de lujos. Su escudo llevaba una sola palabra: "Hulmilitas", humildad. Como obispo decía que "a todo sacerdote y a todo apóstol deben sobrarle trabajos para hacer, en vez de tener tiempo de sobra para perder." Ocupó altos cargos eclesiísticos, entre ellos, Primer Secretario de Estado del Vaticano (como se conoce en la actualidad), Arzobispo de Milín y Cardenal. Fundó seminarios para formar sacerdotes y redactó reglamentos para dichos institutos. Fue uno de los grandes hombres del siglo XVI quien luchó por llevar a cabo la verdadera reforma de la Iglesia Católica tratando de suprimir los abusos y malas costumbres, tanto que destituyó a algunos presbíteros indignos y los reemplazó por personas restauradoras de fe. Su participación en el Concilio de Trento fue importante para aprobar decretos dogmáticos y disciplinarios. Tras varias disposiciones de San Carlos de Borromeo la orden religiosa de los Humiliati, que poseía varios monasterios, tierras y miembros corrompidos, intentaron desprestigiarlo para que el Papa anulara las disposiciones del Santo. Incluso, tres priores de la orden ingeniaron una estrategia para matarlo a través de un sacerdote quien le disparó cuando se encontraba orando en la capilla de su casa, pero la bala sólo tocó la ropa y el manto del Cardenal. San Carlos se consagró al cuidado de los enfermos cuando se propagó una peste en Milín y pidió ayuda a los superiores de las comunidades religiosas para asistir a los enfermos. Agotó sus recursos para ayudar los necesitados y contrajo fuertes deudas. San Carlos de Borromeo fue tan querido en Milín que durante la noche que el agonizaba casi nadie durmió orando por el. Fue oficialmente canonizado por Paulo V el 1ero. de noviembre de 1610.
      </div>
    </div>
  );
};