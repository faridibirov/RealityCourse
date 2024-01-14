import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HouseIndex from './HouseIndex/houseIndex.jsx';
import HouseRead from './HouseRead/houseRead.jsx';
import ApartmentIndex from './ApartmentIndex/apartmentIndex.jsx';
import ApartmentRead from './ApartmentRead/apartmentRead.jsx';

import { Layout } from 'antd';
import  Header  from './Header/header.jsx';
const { Content, Footer } = Layout;

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header />
                    <Layout className="site-layout">
                        <Content sytle={{margin:"0 16px"} }>
                    <Switch>
                        <Route path="/house/index" component={HouseIndex} />
                        <Route path="/house/read/1" component={HouseRead} />
                        <Route path="/apartment/index" component={ApartmentIndex} />
                        <Route path="/apartment/read/:id" component={ApartmentRead} />
                    </Switch>
                        </Content>
                        <Footer style={{textAlign:'center'} }>
                        Realty Course, 2024
                        </Footer>
                    </Layout>
                </Layout>
            </Router>

        );
    }
}