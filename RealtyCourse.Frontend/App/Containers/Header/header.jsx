import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';

const { Sider } = Layout;

export default class Header extends React.Component {

    render() {

        return (
            <Sider>
                <div className="logo"></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1'] }>
                    <Menu.Item key="1">
                        <Link to={"/house/index"}>Browse houses list</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={"/house/read/1"}>Single house info</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to={"/apartment/index"}>Browse all apartments</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to={"/apartment/read/1"}>View single apartment</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

