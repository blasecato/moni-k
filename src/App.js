import React from 'react';
import 'antd/dist/antd.css';
import Home from '../src/scenes/Home/Home';
import RegLogin from '../src/scenes/RegLogin/RegLogin';
import LayoutHome from '../src/layouts/LayoutHome/LayoutHome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout,Row,Col,Button,Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Menu, Breadcrumb,Icon } from 'antd';

const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
            <Router>
            
            <Route path="/" exact component={Home} />
            <Route path="/home/" component={Home} />
            <Route path="/reglogin/" component={RegLogin} />
            </Router>
    
    
    
   
    </div>
  );
}

export default App;
