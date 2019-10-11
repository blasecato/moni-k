import React from 'react'
import { Modal, Button, Form, Radio, InputNumber } from 'antd';


function onChange(value) {
    console.log('changed', value);
}

class Order extends React.Component {
    state = { disabled: true,visible: false };
    toggle = () => {
        this.setState({
          disabled: !this.state.disabled,
        });
      };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div className="order">
                <Button className="btn" onClick={this.showModal}>
                    Comprar
                </Button>
                <Modal className="order__modal"
                    title="Efectue su pedido Aqui"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <label>Cantidad que desea Comprar</label>
                        <div className="order__modal__content">
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio value={1}>12</Radio>
                                <Radio value={2}>24</Radio>
                                <Radio value={3}>50</Radio>
                                <Radio value={4} onClick={this.toggle}>Otro</Radio>
                            </Radio.Group>
                            <InputNumber min={1} max={1000} disabled={this.state.disabled} defaultValue={12} />
                        </div>
                    </Form>

                </Modal>
            </div>
        );
    }
}

export default Order;
