import React from 'react'
import LayoutUser from "../../components/layout/LayoutUser/LayoutUser";
import Order from "../../components/modals/Order";
import { Card, Icon, Button, Affix } from 'antd';

class Store extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="store">
                <div className="users__layout">
                    <LayoutUser></LayoutUser>
                </div>
                <Affix offsetTop={this.state.top}>
                    <Button
                        className="bton"
                        onClick={() => {
                            this.setState({
                                top: this.state.top + 10,
                            });
                        }}
                    >
                        Ver <Icon type="shopping-cart" />
                    </Button>
                </Affix>
                <div className="store__content">
                    <Card title={<div className="store__content__title"><h1 className="store__content__h1">Canela </h1> *100gr</div>}
                        extra={<a className="store__content__a" href="#"><Icon type="shopping-cart" /></a>} className="store__content__card">
                        <div className="store__content__card__content">
                            <div className="store__content__card__content__img">
                                <img className="store__content__card__content__img--img" src="http://covemexusa.com/wp-content/uploads/2018/09/M2649hd.jpg"></img>
                            </div>
                            <div className="store__content__card__content__obj">
                                <div className="store__content__card__content__obj--description">
                                    <p>Aqui va una brebe descripcion del producto a ofreser que enlasaremos de la base dedatos
                                        para facilitar el codigo
                                    </p>
                                </div>
                                <div className="store__content__card__content__obj--valor">
                                    <h1>$ 950/unidad</h1>
                                    <Order></Order>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card title={<div className="store__content__title"><h1 className="store__content__h1">Clavo </h1> *60gr</div>}
                        extra={<a className="store__content__a" href="#"><Icon type="shopping-cart" /></a>} className="store__content__card">
                        <div className="store__content__card__content">
                            <div className="store__content__card__content__img">
                                <img className="store__content__card__content__img--img" src="https://images-na.ssl-images-amazon.com/images/I/910ZrhXXeTL._SX679_.jpg"></img>
                            </div>
                            <div className="store__content__card__content__obj">
                                <div className="store__content__card__content__obj--description">
                                    <p>Aqui va una brebe descripcion del producto a ofreser que enlasaremos de la base dedatos
                                        para facilitar el codigo
                                    </p>
                                </div>
                                <div className="store__content__card__content__obj--valor">
                                    <h1>$ 950/unidad</h1>
                                    <Order></Order>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card title={<div className="store__content__title"><h1 className="store__content__h1">Levadura </h1> *80gr</div>}
                        extra={<a className="store__content__a" href="#"><Icon type="shopping-cart" /></a>} className="store__content__card">
                        <div className="store__content__card__content">
                            <div className="store__content__card__content__img">
                                <img className="store__content__card__content__img--img" src="https://www.ecestaticos.com/imagestatic/clipping/33c/255/33c2559891cee6fd473c915dcf9c98d9/levadura-de-cerveza-la-aliada-en-la-cocina-con-grandes-propiedades.jpg?mtime=1548688640"></img>
                            </div>
                            <div className="store__content__card__content__obj">
                                <div className="store__content__card__content__obj--description">
                                    <p>Aqui va una brebe descripcion del producto a ofreser que enlasaremos de la base dedatos
                                        para facilitar el codigo
                                    </p>
                                </div>
                                <div className="store__content__card__content__obj--valor">
                                    <h1>$ 950/unidad</h1>
                                    <Order></Order>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card title={<div className="store__content__title"><h1 className="store__content__h1">Clolor </h1> *110gr</div>}
                        extra={<a className="store__content__a" href="#"><Icon type="shopping-cart" /></a>} className="store__content__card">
                        <div className="store__content__card__content">
                            <div className="store__content__card__content__img">
                                <img className="store__content__card__content__img--img" src="https://www.ecestaticos.com/imagestatic/clipping/5ea/3e7/5ea3e7d42f818222caa04af9df11b7b4/todos-los-beneficios-para-la-salud-del-condimento-de-moda.jpg?mtime=1502702051"></img>
                            </div>
                            <div className="store__content__card__content__obj">
                                <div className="store__content__card__content__obj--description">
                                    <p>Aqui va una brebe descripcion del producto a ofreser que enlasaremos de la base dedatos
                                        para facilitar el codigo
                                    </p>
                                </div>
                                <div className="store__content__card__content__obj--valor">
                                    <h1>$ 950/unidad</h1>
                                    <Order></Order>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>
        );
    }
}

export default Store;