import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Flex, Icon, Image } from '@chakra-ui/react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { BiUser,BiMessageSquareAdd } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { RiProductHuntLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { CgToday } from 'react-icons/cg';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const navigate=useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}

            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({key})=>{
                        if(key==="signout"){
                            
                        }
                        else{
                            navigate(key)
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <UserOutlined />,
                            label: 'Dashboard',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Products',
                            children: [{
                                key: 'allproducts',
                                icon: <VideoCameraOutlined />,
                                label: 'All Products'
                            },
                            {
                                key: 'addproducts',
                                icon: <VideoCameraOutlined />,
                                label: 'Add Products'
                            }
                            ]
                        },
                        {
                            key: 'orders',
                            icon: <UploadOutlined />,
                            label: 'Orders',
                            children: [{
                                key: 'allOrders',
                                icon: <VideoCameraOutlined />,
                                label: 'All Orders'
                            },
                            {
                                key: 'todaysorders',
                                icon: <VideoCameraOutlined />,
                                label: 'Todays Orders'
                            }
                            ]
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <Flex gap="10px" mr={3}>
                        <Icon
                            _hover={{
                                bg: 'blue.500',
                                borderRadius: "full",
                                color: "white",
                                cursor: "pointer",
                            }}
                            as={IoNotificationsOutline} boxSize={6} color="black" />
                        <Icon
                            _hover={{
                                bg: 'blue.500',
                                borderRadius: "full",
                                color: "white",
                                cursor: "pointer",

                            }}
                            as={RiLogoutCircleLine} boxSize={6} />
                        <Image
                            _hover={{
                                bg: 'blue.500',
                                borderRadius: "full",
                                color: "white",
                                cursor: "pointer",

                            }}
                            as={BiUser} boxSize={6} />
                    </Flex>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;