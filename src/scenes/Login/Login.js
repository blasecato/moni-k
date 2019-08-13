import React from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import {withRouter} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { Card } from 'antd';
import LayoutHome from '../layout/LayoutHome/LayoutHome';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    AutoComplete,
  } from 'antd';

const ButtonGroup = Button.Group;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const { Meta } = Card;
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class Login extends React.Component{
state = {
    collapsed: false,
    confirmDirty: false,
    autoCompleteResult: [],
}
render(){
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>,
      );
    return(
        <div className="content">
            <Header className="head">
                <LayoutHome></LayoutHome>
            </Header>
            <br/>
        <div className="login-wrap-log">
	        <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                    <label for="tab-1" class="tab">Iniciar Sesion</label>
                    <input id="tab-2" type="radio" name="taba" className="sign-up"/>
                    <label for="tab-2" class="tab"></label>
                    <div className="login-form">
                        <div class="sign-in-htm">
                            <div class="group">
                            <Form.Item>
                            <label for="user" className="label">Usuario</label>
                                {getFieldDecorator('email', {
                                    rules: [
                                    {
                                        type: 'email',
                                        message: 'El usuario ingresado no es valido!',
                                    },
                                    {
                                        required: true,
                                        message: 'Porfavor ingrese su usuario!',
                                    },
                                    ],
                                })(<Input className="input"/>)}
                            </Form.Item>
                            </div>
                            <div className="group">
                            <Form.Item >
                            <label for="pass" className="label">Contraseña</label>
                                {getFieldDecorator('password', {
                                    rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                    ],
                                })(<Input type="password" className="input"/>)}
                            </Form.Item>
                            
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check"/>
                                <label for="check"><span className="icon"></span> Mantenerme Conectado</label>
                            </div>
                            <div className="group">
                                <Button type="submit" className="button">Iniciar Sesion</Button>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">¿Olvide mi Contraseña?</a>
                            </div> 
                        </div> 
                    </div>
            </div>
        </div>
        <br/>
        </div>
    );
}
}
Login = withRouter(Login);
export default Form.create({ name: 'formLogin' })(Login);