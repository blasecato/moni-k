import React from 'react';
import logo from '../../assets/images/cocinera.png';
import shef from '../../assets/images/shef.jpg';
import { Icon, Card, Layout, Row, Col, Button, Carousel } from 'antd';
import LayoutHome from '../layout/LayoutHome/LayoutHome';
import '../../css/Home.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;



class Home extends React.Component {
  state = {
    collapsed: false,
  }

  render() {

    return (
      <div className="App">
        <Content className="content">
          <LayoutHome></LayoutHome>
          <div className="carrucel">
          <Carousel autoplay>
            <div className="carru-cards">
               <div className="img">
                  <img src={shef} className="shef" alt="logo" />
                  <img src={shef} className="shef" alt="logo" />
                  <img src={shef} className="shef" alt="logo" />
               </div>
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
          </div>
          <div className="cards">
            <Row gutter={16}>
              <Col span={8} className="card2">
                <img src={shef} className="shef" />
              </Col>
              <Col span={8}>
                <Card className="card1">
                  <h1 className="title">PRODUCTOS</h1>
                  <h5 className="tex">Visita nuestra tienda y reserva tu pedido.</h5>
                  <br />
                  <Button className="Button">Ver Tienda</Button>
                </Card>
              </Col>
            </Row>
          </div>

        </Content>
        <Footer className="footer">

        </Footer>


      </div>
    );
  }
}

export default Home;