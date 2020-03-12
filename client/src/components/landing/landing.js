import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="Landing">
        <img src="./landingimg.jpg" alt="landing-img" className="Landing-img" />
        <h1>¡Bienvenido a Savit!</h1>
        <div className="Landing__container">
          <div className="Landing__container__whatsSavit">
            <img src="./dog2.jpg" alt="dog-banner" />
            <h3>¿Qué es Savit?</h3>
            <p>
              Savit es una plataforma que pone en contacto a particulares con
              intención de adoptar o acoger una mascota, y asociaciones de
              animales, las cuales pueden registrar y gestionar las mascotas que
              actualemente necesitan un hogar.
              <br />
              <br />
              Esta aplicación es simplemente un prototipo, una idea la cual
              nació por el deseo de proporcionar a las diferentes entidades
              protectoras de animales un espacio propio, donde se viese de forma
              sencilla las diferentes mascotas que estaban bajo su cuidado, de
              forma complementaria a las diferentes redes sociales, tan
              necesarias hoy en día para obtener visibilidad.
            </p>
          </div>

          <div className="Landing__container__howWorks">
            <img src="./dog1.jpg" alt="dog-banner" />
            <h3>¿Cómo se usa Savit?</h3>
            <p>
              Registrarse, y hará login automáticamente.
              <br />
              La navegación será fundamentalmente mediante la barra de
              navegación, en la pestaña Mascotas y Asociaciones
            </p>

            <h5>Mascotas:</h5>
            <ul>
              <li>Ver todas las mascotas existentes en la aplicación.</li>
              <li>
                Al hacer click en una en concreto, veremos su lista completa de
                detalles, y un botón el cual nos llevará al perfil de la
                asociación que creó la publicación, para ponernos en contacto
                con ella.
              </li>
            </ul>

            <h5>Asociaciones:</h5>
            <ul>
              <li>
                Podremos registrar una asociación, desde la cual crear
                publicaciones.
              </li>
              <li>
                Ver todas las Asociaciones registradas en la aplicación, y su
                perfil, con todas las mascotas que están bajo su cuidado en la
                actualidad.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
