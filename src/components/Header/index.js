import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Utils from './../../utils/utils'
export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName:'',
            sysTime:''
        }
    }
    componentDidMount(){
        this.setState({
            userName:'mr.bing'
        })
        setInterval(()=>{
            let sysTime=Utils.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
    }
    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎,mr.bing</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="date">
                        <span className="date-detail">{this.state.sysTime}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}