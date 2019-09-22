import React from 'react';
import '../../Sass/mein.scss';
import { withRouter } from 'react-router-dom';
import { Table, Divider, Tag } from 'antd';
import Tableu from "../../components/table/table";
import LayoutUser from "../../components/layout/LayoutUser/LayoutUser";
const { Column, ColumnGroup } = Table;


class List_usuario extends React.Component {
    state = {


    }

    grtPrueba(){
        fetch('http://localhost:3001/usuario')
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          
        });
    }

    getUser(prosp) {
        //servidor localhost de nest mon-backend
        fetch("http://localhost:3001/usuario")
            .then(async response => {
                //antes de obtener el header de la peticion
                const users = await response.json();
                this.setState({ users: users.data });
                console.log(users); 
                
            })
    }
    getUsers() {
        fetch('http://localhost:3001/usuario')
            .then((response) => response.json())
            .then(data => {
                debugger
            })
    }
    componentDidMount() {
        this.getUser();
    }

    render() {
        
        const { users } = this.props;
        return (
            <div className="users">
            
                <LayoutUser>
                </LayoutUser>
                
            </div>
        );
    }
}

List_usuario = withRouter(List_usuario);
export default List_usuario;