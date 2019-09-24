import React from 'react';
import { Menu, Icon, Avatar, Drawer, Button,Input } from 'antd';

const { SubMenu } = Menu;
const { Search } = Input;

class LayoutUsers extends React.Component {

    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    handleClick = e => {
        console.log('click ', e);
    };

    render() {

        return (
            <div className="layoutuser">
                <nav className="layoutuser__nav">
                    <div className="layoutuser__nav__menu">
                        <div>
                            <Button className="layoutuser__nav__menu--btn-menu" onClick={this.showDrawer}>
                                Menu
                            </Button>
                            <Drawer
                                title={
                                    <div className="layoutuser__nav__menu--head">
                                        <h1>Menu</h1>
                                        <Button className="layoutuser__nav__menu--btn-menu" onClick={this.onClose} >
                                            X
                                        </Button>
                                    </div>}
                                placement="left"
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                            >
                                <div className="layoutuser__nav__menu__Drawer">
                                    <div>
                                        <Menu className="layoutuser__nav__menu__Drawer__menu-2"
                                            onClick={this.handleClick}
                                            mode="inline"
                                        >
                                            <SubMenu key="sub1"
                                                title={
                                                    <span>
                                                        <Icon type="mail" />
                                                        <span>Navigation One</span>
                                                    </span>
                                                }
                                            >
                                                <Menu.ItemGroup key="g1" title="Item 1">
                                                    <Menu.Item key="1">Option 1</Menu.Item>
                                                    <Menu.Item key="2">Option 2</Menu.Item>
                                                </Menu.ItemGroup>
                                                <Menu.ItemGroup key="g2" title="Item 2">
                                                    <Menu.Item key="3">Option 3</Menu.Item>
                                                    <Menu.Item key="4">Option 4</Menu.Item>
                                                </Menu.ItemGroup>
                                            </SubMenu>
                                            <SubMenu
                                                key="sub2"
                                                title={
                                                    <span>
                                                        <Icon type="appstore" />
                                                        <span>Navigation Two</span>
                                                    </span>
                                                }
                                            >
                                                <Menu.Item key="5">Option 5</Menu.Item>
                                                <Menu.Item key="6">Option 6</Menu.Item>
                                                <SubMenu key="sub3" title="Submenu">
                                                    <Menu.Item key="7">Option 7</Menu.Item>
                                                    <Menu.Item key="8">Option 8</Menu.Item>
                                                </SubMenu>
                                            </SubMenu>
                                            <SubMenu
                                                key="sub4"
                                                title={
                                                    <span>
                                                        <Icon type="setting" />
                                                        <span>Navigation Three</span>
                                                    </span>
                                                }
                                            >
                                                <Menu.Item key="9">Option 9</Menu.Item>
                                                <Menu.Item key="10">Option 10</Menu.Item>
                                                <Menu.Item key="11">Option 11</Menu.Item>
                                                <Menu.Item key="12">Option 12</Menu.Item>
                                            </SubMenu>
                                        </Menu>
                                    </div>
                                </div>
                            </Drawer>
                        </div>
                    </div>
                    <div className="layoutuser__nav__prof">
                        <a href="#"><img className="layoutuser__nav__prof__profile" src="data:image/png;base64,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"></img></a>
                        <Search placeholder="Buscar..." onSearch={value => console.log(value)} enterButton />                       
                    </div>

                </nav>

            </div>
        );
    }
}

export default LayoutUsers;


{/* <ul className="layoutuser__nav__list">
                            <li className="layoutuser__nav__list__item">
                                <a>hola</a>
                            </li>
                            <li className="layoutuser__nav__list__item">
                                <a>hola</a>
                            </li>
                            <li className="layoutuser__nav__list__item">
                                <a>hola</a>
                            </li>
                            <li className="layoutuser__nav__list__item">
                                <a>hola</a>
                            </li>
                        </ul> */}