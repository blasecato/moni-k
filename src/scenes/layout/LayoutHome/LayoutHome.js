import React from 'react';
import { Layout,Row,Col,Button,Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Menu, Breadcrumb,Icon } from 'antd';
import Home from '../../Home/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import './LayoutHome.css'

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
                <Link to="/register/" className="a">
                  Registrarse
                </Link>
                </Col>
                <Col span={5}>
                <Link to="/login/" className="a">
                  Iniciar Sesion
                </Link>
                </Col>
            </Row>
            </div>
        );
    }
    }
export default LayoutHome;


