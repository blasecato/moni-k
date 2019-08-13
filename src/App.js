import React from 'react';
import 'antd/dist/antd.css';
import Home from '../src/scenes/Home/Home';
import Login from '../src/scenes/Login/Login';
import LayoutHome from '../src/layouts/LayoutHome/LayoutHome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout,Row,Col,Button,Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Menu, Breadcrumb,Icon } from 'antd';
import Register from '../src/scenes/Register/Register';

const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
            <Router>
            
            <Route path="/" exact component={Home} />
            <Route path="/home/" component={Home} />
            <Route path="/login/" component={Login} />
            <Route path="/register/" component={Register} />
            </Router>
    
    
    
   
    </div>
  );
}

export default App;
