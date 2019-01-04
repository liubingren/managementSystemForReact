import React from 'react'
import MenuConfig from './../../config/menuConfig'
import { Menu } from 'antd';
import './index.less'

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menuTreeNode:[]
        }
    }
    componentDidMount(){
        const menuTreeNode=this.renderMenu(MenuConfig)

        this.setState({
            menuTreeNode
        })

    }
    // 菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                ) 
            }
            return (
                <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
            )
        })
    }
    render(){
        return (
            <div className="nav-left">
                <div className="logo">
                    <img src="/assets/logo.jpg" alt=""/>
                    <h4>BING先生的后台系统</h4>
                </div>
                <Menu style={{ width: 200 }} mode="vertical" theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}