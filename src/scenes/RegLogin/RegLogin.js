import React from 'react';
import 'antd/dist/antd.css';
import './RegLogin.css';
import {withRouter} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;


class RegLogin extends React.Component{
state = {
    collapsed: false,
}
render(){
    return(
        <div>
            <h1>hola</h1>
        </div>
    );
}
}
RegLogin = withRouter(RegLogin);
export default RegLogin;