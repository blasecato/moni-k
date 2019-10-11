import React from 'react';
import { Icon, Card, Layout, Row, Col, Button } from 'antd';
import LayoutHome from '../../components/layout/LayoutHome/LayoutHome';
import '../../Sass/mein.scss';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";

const { Content } = Layout;

class Home extends React.Component {
  state = {
    collapsed: false,

  }
  items = ["https://www.animalgourmet.com/wp-content/uploads/2016/10/india-2-e1475631035477.jpg",
    "https://s2.best-wallpaper.net/wallpaper/2560x1600/1110/Five-colors-of-seasonings_2560x1600.jpg",
    "https://s2.best-wallpaper.net/wallpaper/2560x1600/1110/Five-colors-of-seasonings_2560x1600.jpg",
    "https://s2.best-wallpaper.net/wallpaper/2560x1600/1110/Five-colors-of-seasonings_2560x1600.jpg",
    "https://s2.best-wallpaper.net/wallpaper/2560x1600/1110/Five-colors-of-seasonings_2560x1600.jpg"]

  state = {
    galleryItems: this.items.map((i) => (<img className="imagen" src={i} key={i}></img>))
  }

  thumbItem = (item, i) => (
    <span key={item} onClick={() => this.Carousel.slideTo(i)}></span>
  )
  render() {
    return (
      <div className="App">
        <Content className="content">
          <LayoutHome></LayoutHome>

          <div className="card-home">
            <div className="card-img">
              <Card className="card1">
                <h1 className="title">PRODUCTOS</h1>
                <h5 className="tex">Visita nuestra tienda y reserva tu pedido.</h5>
                <br />
                <Button className="Button">Ver Tienda</Button>
              </Card>
            </div>
            <div className="card-img">
              <Card className="card1">
                <h1 className="title">PRODUCTOS</h1>
                <h5 className="tex">Visita nuestra tienda y reserva tu pedido.</h5>
                <br />
                <Button className="Button">Ver Tienda</Button>
              </Card>
            </div>
            <div className="card-img">
              <Card className="card1">
                <h1 className="title">PRODUCTOS</h1>
                <h5 className="tex">Visita nuestra tienda y reserva tu pedido.</h5>
                <br />
                <Button className="Button">Ver Tienda</Button>
              </Card>
            </div>
            <div className="card-img">
              <Card className="card1">
                <h1 className="title">PRODUCTOS</h1>
                <h5 className="tex">Visita nuestra tienda y reserva tu pedido.</h5>
                <br />
                <Button className="Button">Ver Tienda</Button>
              </Card>
            </div>
          </div>
          <div className="carousel-movie">
            <AliceCarousel
              dotsDisabled={true}
              buttonsDisabled={true}
              items={this.state.galleryItems}
              ref={(el) => (this.Carousel = el)}
            />
            <nav>{this.items.map(this.thumbItem)}</nav>
            <button onClick={() => this.Carousel.slidePrev()} className="btn-angle btn-angle--left"><Icon type="left" /></button>
            <button onClick={() => this.Carousel.slideNext()} className="btn-angle btn-angle--right"><Icon type="right" /></button>

          </div>
          <div className="contact">
            <div className="contact__cards">
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Atencion al Cliente" className="contact__cards--card" bordered={false}>
                    <img className="contact__cards--img" src="https://thumbs.dreamstime.com/thumb_2072/20720874.jpg"></img>
                </Card>
                </Col>
                <Col span={8}>
                  <Card title="Entrega a Domicilio" className="contact__cards--card" bordered={false}>
                  <img className="contact__cards--img" src="https://revistadiners.com.co/wp-content/uploads/2018/07/domicilios_800x669.jpg"></img>
                </Card>
                </Col>
                <Col span={8}>
                  <Card title="Productos frescos" className="contact__cards--card" bordered={false}>
                  <img className="contact__cards--img" src="https://blog.oxfamintermon.org/wp-content/uploads/2019/01/especias-y-condimentos-1.jpg"></img>
                </Card>
                </Col>
              </Row>
            </div>

          </div>
          <div className="contacto">
              <div className="contacto__title">
                <h1>Contacto</h1>
                <p>Contactanos y obten un buen descuento%</p>
              </div>
              <br/>
              <div className="contacto__img">
                <a><img className="contacto__img--btn" src="http://www.dacoromania.org/upload/o/131/1317479_icono-de-whatsapp-png.png"></img></a>
                <a><img className="contacto__img--btn" src="https://images.vexels.com/media/users/3/137253/isolated/preview/90dd9f12fdd1eefb8c8976903944c026-icono-de-facebook-logo-by-vexels.png"></img></a>
                <a><img className="contacto__img--btn" src="https://image.flaticon.com/icons/png/512/355/355992.png"></img></a>
              </div>
              <div className="contacto__img">
                <a>+57 321 921 9363</a>
                <a>@Monicondimentos</a>
                <a>Monicondimentos@gmail.com</a>
              </div>
          </div>
         <Footer></Footer>
        </Content>


      </div>
    );
  }
}

export default Home;