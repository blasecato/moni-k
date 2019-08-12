import React from 'react';
import logo from '../../assets/images/cocinera.png';
import shef from '../../assets/images/shef.jpg';
import './Home.css';
import { Layout,Row,Col,Button,Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Menu, Breadcrumb,Icon } from 'antd';
import LayoutHome from '../layout/LayoutHome/LayoutHome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegLogin from '../RegLogin/RegLogin';


const { Meta } = Card;
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class Home  extends React.Component {
  state = {
    collapsed: false,
}
login(){
  this.props.history.push("/home");
}
render(){
  return (
    <div className="App">
          
      <Layout className="lay">
        
      <Content className="content">
        <img src={logo} className="App-logo" alt="logo" />
      <Header className="head">
      <LayoutHome></LayoutHome>
      </Header>
          <Row gutter={16}>
              <Col span={8} className="card2">
                <img src={shef} className="card2" alt="logo" />
              </Col>
              <Col span={8}>
                <Card  className="card1">
                  <h1 className="title">PRODUCTOS</h1>
                  <h5 className="tex">Visita nuestra tienda y reserva tu pedido.</h5>
                  <br/>
                  <Button className="Button" onClick={() =>this.login()}>Ver Tienda</Button>
                </Card>
              </Col>
          </Row>
        <Carousel autoplay className="ant-carousel">
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
        </Carousel>
        <br/>
      </Content>
      <Footer className="footer">

      </Footer>
      </Layout>
      
    </div>
  );
}
}
export default Home;