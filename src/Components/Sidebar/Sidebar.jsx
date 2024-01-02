import React, { useState } from 'react'
import { Button, Layout, theme } from 'antd'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import './Sidebar.css'
import Logo from '../Logo/Logo';
import MenuList from '../Menu/MenuList';
import TogglethemeBtn from '../ToggleThemeBtn/TogglethemeBtn';
import Abc from '../../Routing/Routing';

const {Header, Sider} = Layout;

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(false)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <>
    
    <Layout>
      
        <Sider collapsed={collapsed}
               className='Sidebar'
               collapsible
               trigger={null}
               theme={darkTheme ? 'dark' : 'light'}> 
            <Logo />
            <MenuList darkTheme={darkTheme}/>
            <TogglethemeBtn darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>

        <Layout>
          
          <Header style = {{padding: 0, background: colorBgContainer,  }}>
            <Button type="text" 
                    className='toggle'
                    onClick={()=> setCollapsed(!collapsed)}
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}>
            </Button>
          </Header>

          <Abc />

        </Layout>

    </Layout>

    </>
  )
}

export default Sidebar