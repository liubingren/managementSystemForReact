import React from 'react'
import Child from './Child'
import { Button,Input } from 'antd'
import './Life.less'

export default class Life extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    handleAdd = () => {
        this.setState({count:this.state.count+1})
    }
    render(){
        return (
            <div style={{padding:10}}>
                <p>生命周期函数例子</p>
                <Button onClick={this.handleAdd}>增加</Button>
                <Input />
                <p>{this.state.count}</p>
                <Child name={this.state.count}></Child>
            </div>
        )
    }
}