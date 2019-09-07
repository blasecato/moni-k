import React from 'react';
import '../../css/Register.css';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import { Form, Input, Row, Col, AutoComplete, } from 'antd';
import * as moment from "moment";

moment.locale("es")
const ButtonGroup = Button.Group;

class Register extends React.Component {
    state = {
        collapsed: false,
        confirmDirty: false,
        autoCompleteResult: [],
        users: [],
        id:'',
        dni:'',
        nombres: '',
        apeliidos:'',
        email:'',
        contrasenia:'',
        telefoto:'',
        direccion:'',
        nombre_em:'',
        id_genero:'',
        id_cargo:'',

    }
    //consultar usuario

    changeHandler = (e)=>{
        this.setState({[e.target.nombres]: e.target.value})
    }
    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
        .post('url',this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)  
        })
    }

    getUser() {
        //servidor localhost de nest mon-backend
        fetch("http://localhost:3001/usuario")
            .then(async response => {
                //antes de obtener el header de la peticion
                const users = await response.json();
                this.setState({ users: users.data });
                console.log(users);
            })
    }
    getUsers(){
        fetch('http://localhost:3001/usuario')
        .then((response)=>response.json())
        .then(data=>{
            debugger
        })
    }
    componentDidMount() {       
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

    render() {
        const { getFieldDecorator } = this.props.form;
        const {id, dni,nombres, apeliidos,email,contrasenia,telefoto, direccion,nombre_em,id_genero, id_cargo}=this.state;
        return (
            <div className="content">
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-2" type="radio" name="taba" className="sign-up" checked />
                        <label for="tab-2" class="tab">Registrarse</label>
                        <div className="login-form">
                            <div className="sign-up-htm">
                            <Form onSubmit={this.submitHandler}>
                                <div class="group">
                                    <Row gutter={8}>
                                        <Col span={12}>
                                            <Form.Item>
                                                <label for="dni" className="label">Numero de identidad</label>
                                                {getFieldDecorator('dni', {
                                                    rules: [{ type: 'number', },
                                                    { required: true, message: 'Porfavor ingrese su Identificacion!', },],
                                                })(<Input className="input" value={dni} onChange={this.changeHandler}/>)} 
                                            </Form.Item>
                                        </Col>  
                                    </Row>
                                    <Row gutter={8}>
                                        <Col span={12}>
                                            <Form.Item >
                                                <label for="nomuser" className="label">Nombre</label>
                                                {getFieldDecorator('textNom', {
                                                    rules: [{ type: 'text', },
                                                    { required: true, message: 'Porfavor ingrese su Nombre!', },],
                                                })(<Input value={nombres} id="nombre" className="input"  onChange={this.changeHandler} />)}
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item >
                                                <label for="apeuser" className="label">Apellidos</label>
                                                {getFieldDecorator('textApe', {
                                                    rules: [{ type: 'text', },
                                                    { required: true, message: 'Porfavor ingrese su Nombre!', },],
                                                })
                                                    (<Input className="input" value={apeliidos}  onChange={this.changeHandler} />)}
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
                                                    rules: [{ type: 'number', },
                                                    { required: true, message: 'Porfavor ingrese su Numero!', },],
                                                })(<Input className="input" value={telefoto}  onChange={this.changeHandler}/>)}
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item >
                                                <label for="direc" className="label">Direccion</label>
                                                {getFieldDecorator('textDir', {
                                                    rules: [{ type: 'text', },
                                                    { required: true, message: 'Porfavor ingrese su Direccion!', }],
                                                })(<Input className="input" value={direccion}  onChange={this.changeHandler}/>)}
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
                                                    <Button value={id_genero}   onChange={this.changeHandler} className="radio">Femenino</Button>
                                                    <Button value={id_genero}  onChange={this.changeHandler} className="radio">MAsculino</Button>
                                                    <Button value={id_genero}  onChange={this.changeHandler} className="radio">Otro</Button>
                                                </ButtonGroup>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item>
                                                <label for="user" className="label">Usuario</label>
                                                {getFieldDecorator('email', {
                                                    rules: [{ type: 'email', message: 'El usuario ingresado no es valido!', },
                                                    { required: true, message: 'Porfavor ingrese su usuario!', },],
                                                })(<Input className="input" value={email}  onChange={this.changeHandler}/>)}
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
                                                        { required: true, message: 'Por favor inserte su contraseña!', },
                                                        { validator: this.validateToNextPassword, },],
                                                })(<Input type="password" value={contrasenia}  onChange={this.changeHandler} className="input" />)}
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item>
                                                <label for="pass" className="label">Confirme Contraseña</label>
                                                {getFieldDecorator('confirm', {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Porfavor confirme su Contraseña!',
                                                    },
                                                    { validator: this.compareToFirstPassword, },],
                                                })(<Input onBlur={this.handleConfirmBlur} type="password" className="input" />)}
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="group">
                                    <button type="submit" className="button">Registrarme</button>
                                </div>
                                <div className="foot-lnk">
                                    <a href="../Home">Volver</a>
                                </div>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}
Register = withRouter(Register);
export default Form.create({ name: 'formRegister' })(Register);