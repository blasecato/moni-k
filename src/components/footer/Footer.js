import React from 'react';

class Footer extends React.Component{

    render(){
        return(
            <div className="footer">
                <div className="footer__title">
                <h1>Derechos Reservados</h1>
                <p>100% producto original y de calidad</p>
              </div>
              <br/>
              <div className="footer__img">
                <a>Busquenos en:</a>
                <a>Pitalito Huila</a>
                <a>Barrio Paraiso</a>
                <a>Cra 9E #2A.12 sur</a>
              </div>
            </div>
        );
    }
}

export default Footer;