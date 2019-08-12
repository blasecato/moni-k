import React from 'react';
import { Layout,Row,Col,Button,Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Menu, Breadcrumb,Icon } from 'antd';
import RegLogin from '../../RegLogin/RegLogin';
import Home from '../../Home/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';

const { SubMenu } = Menu;

class LayoutHome  extends React.Component{
    
    state = {
        collapsed: false,
    }
    render(){
        return(
            <div>
                <Row gutter={4}>
                <Col span={4}>
                <Link to="/" className="a" >
                    Inicio
                </Link> 
                </Col>
                <Col span={4}>
                <a className="a" href="">
                    Tienda
                </a>
                </Col>
                <Col span={5}>
                <a className="a">
                    Contacto
                </a>
                </Col>
                <Col span={5}>
                <Link to="/reglogin" className="a">
                  Registrarse
                </Link>
                </Col>
                <Col span={5}>
                <a className="a">
                  Iniciar Sesion
                </a>
                </Col>
            </Row>
            </div>
        );
    }
    }
export default LayoutHome;


