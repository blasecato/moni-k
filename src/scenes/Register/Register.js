import React from 'react';
import './Register.css';
import {withRouter} from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { Card } from 'antd';
import LayoutHome from '../layout/LayoutHome/LayoutHome';
import {Form,Input,Select,Row,Col,AutoComplete,} from 'antd';
import * as moment from "moment";

moment.locale("es")
const ButtonGroup = Button.Group;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const { Meta } = Card; 
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class Register extends React.Component{
    state = {
        collapsed: false,
        confirmDirty: false,
        autoCompleteResult: [],
        users: []
    }
    getUsers(){
        fetch("http://localhost:3001/usuario/cuser")
        .then(async response=>{
          //antes de obtener el header de la peticion
          const users = await response.json();
          this.setState({ users : users.data });
          console.log(users);   
        })
    }
    componentDidMount(){
        console.log(moment().format('LLL'));
        console.log(moment().add(10,'days').format('LLL'));
        this.getUsers();
    }
    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Tus contraseñas no coinciden!');
        } else {
            callback();
        }
    };
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
            callback();
    };

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
    <div className="login-wrap">
	    <div className="login-html">
            <input id="tab-2" type="radio" name="taba" className="sign-up" checked/>
                <label for="tab-2" class="tab">Registrarse</label>
                    <div className="login-form">
                        <div className="sign-up-htm">
                            <div class="group">
                                <Row gutter={8}>
                                    <Col span={12}>
                                        <Form.Item >
                                            <label for="nomuser" className="label">Nombre</label>
                                            {getFieldDecorator('textNom', {
                                            rules: [{type: 'text',},
                                            {required: true,message: 'Porfavor ingrese su Nombre!',},],
                                            })(<Input className="input"/>)}
                                        </Form.Item> 
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item >
                                            <label for="apeuser" className="label">Apellidos</label>
                                            {getFieldDecorator('textApe', {
                                            rules: [{ type: 'text',},
                                            {required: true,message: 'Porfavor ingrese su Nombre!',},],})
                                            (<Input className="input"/>)}
                                        </Form.Item> 
                                    </Col>
                                </Row>
                            </div>
                            <div class="group">
                                <Row gutter={8}>
                                    <Col span={12}>
                                        <Form.Item>
                                            <label for="nomuser" className="label">Telefono</label>
                                            {getFieldDecorator('tel', {
                                            rules: [{type: 'number',},
                                            { required: true, message: 'Porfavor ingrese su Numero!',},],
                                            })(<Input className="input"/>)}
                                        </Form.Item> 
                                    </Col>
                                    <Col span={12}>
                                    <Form.Item >
                                        <label for="direc" className="label">Direccion</label>
                                        {getFieldDecorator('textDir', {
                                        rules: [{type: 'text',},
                                        {required: true,message: 'Porfavor ingrese su Direccion!',}],
                                        })(<Input className="input"/>)}
                                    </Form.Item> 
                                </Col>
                                </Row>
                            </div>
                            <div className="group">
                                <Row gutter={8}>
                                    <Col span={12}>
                                        <Form.Item>
                                            <label for="gen" className="label">Genero</label>
                                            <ButtonGroup className="radio">
                                            <Button className="radio">Femenino</Button>
                                            <Button className="radio">MAsculino</Button>
                                            <Button className="radio">Otro</Button>
                                            </ButtonGroup>
                                        </Form.Item> 
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item>
                                            <label for="user" className="label">Usuario</label>
                                            {getFieldDecorator('email', {
                                            rules:[{type:'email', message: 'El usuario ingresado no es valido!',},
                                            {required: true, message: 'Porfavor ingrese su usuario!',},],
                                            })(<Input className="input"/>)}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </div>
                            <div className="group">
                                <Row gutter={8}>
                                    <Col span={12}> 
                                        <Form.Item>
                                            <label for="pass" className="label">Contraseña</label>
                                            {getFieldDecorator('password', {
                                            rules: [
                                            {required: true, message: 'Por favor inserte su contraseña!',},
                                            {validator: this.validateToNextPassword,},],
                                            })(<Input type="password" className="input"/>)}
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item>
                                            <label for="pass" className="label">Confirme Contraseña</label>
                                            {getFieldDecorator('confirm', {
                                            rules: [{required: true,
                                            message: 'Porfavor confirme su Contraseña!',},
                                            { validator: this.compareToFirstPassword,},],
                                            })(<Input onBlur={this.handleConfirmBlur} type="password" className="input"/>)}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Registrarme"/>
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
Register = withRouter(Register);
export default Form.create({ name: 'formRegister' })(Register);