import React from 'react';
import logo from './assets/images/cocinera.png';
import shef from './assets/images/shef.jpg';
import './App.css';
import { Layout,Row,Col,Button,Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
          
      <Layout className="lay">
        
      <Content className="content">
        <img src={logo} className="App-logo" alt="logo" />
      <Header className="head">
      <center>
        <Row gutter={4}>
          <Col span={4}>
          <a className="a">
            Inicio
          </a>
          </Col>
          <Col span={4}>
          <a className="a" href="https://softwarecrafters.io/react/tutorial-react-js-introduccion">
            Tienda
          </a>
          </Col>
          <Col span={5}>
          <a className="a">
            Contacto
          </a>
          </Col>
          <Col span={5}>
          <a className="a">
            Registrarse
          </a>
          </Col>
          <Col span={5}>
          <a className="a">
            Iniciar Sesion
          </a>
          </Col>
        </Row>
      </center>
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
                  <Button className="Button">Ver Tienda</Button>
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

export default App;
