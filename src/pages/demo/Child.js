import React from 'react'

export default class Child extends React.Component{
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
                <p>子组件</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}