import React from 'react';
import { Row, Col } from 'antd';
import { BrowserRouter as Link } from "react-router-dom";
import '../../../css/LayoutHome.css'
import logo from '../../../assets/images/cocinera.png';
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

function handleClick(e) {
    console.log('click', e);
}

class LayoutHome extends React.Component {

    state = {
        collapsed: false,
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div>
                <div class="layout">
                    <a className="a" href="">
                        Tienda
                    </a>
                    <a className="a">
                        Contacto
                    </a>
                    <a href="../Home/" className="a" >
                        <img src={logo} className="App-logo" alt="logo" />
                    </a>
                    <a href="../register/" className="a">
                        Registrarse
                    </a>
                    <a href="../login/" className="a">
                        Iniciar Sesion
                    </a>
                    <img src={logo} className="logo" alt="logo" />
                    <div class="menu">
                     
                        <Menu onClick={handleClick} class="btom" mode="vertical">
                            <SubMenu key="sub1"  title={<span><Icon type="menu-unfold" /><span>Menu</span></span>}>
                                    <Menu.Item key="1">Tienda</Menu.Item>
                                    <Menu.Item key="2">Contacto</Menu.Item>
                                    <Menu.Item key="3">Registrarse</Menu.Item>
                                    <Menu.Item key="4">Iniciar sesion</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>

            </div>

        );
    }
}
export default LayoutHome;


