import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/home'
import './style/admin.less'

export default class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    render(){
        return (
            <div>
                 <Row className="container">
                    <Col className="nav-left">
                        <NavLeft></NavLeft>
                    </Col>
                    <Col className="main">
                        <Header></Header>
                        <Row className="content">
                            <Home/>
                        </Row>
                        <Footer></Footer>
                    </Col>
                </Row>
            </div>
        )
    }
}