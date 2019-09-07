import React from 'react';
import { Row,Col  } from 'antd';
import { BrowserRouter as Link } from "react-router-dom";
import '../../../css/LayoutHome.css' 


class LayoutHome  extends React.Component{
    
    state = {
        collapsed: false,
    }
    render(){
        return(
            <div class="layout">
                <a href="../Home/" className="a" >
                    Inicio
                </a> 
                <a className="a" href="">
                    Tienda
                </a>
                <a className="a">
                    Contacto
                </a>
                <a href="../register/" className="a">
                  Registrarse
                </a>
                <a href="../login/" className="a">
                  Iniciar Sesion
                </a>
            </div>
        );
    }
    }
export default LayoutHome;


