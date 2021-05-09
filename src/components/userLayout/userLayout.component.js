import React, {useEffect, useState} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import UserAdminTableComponent from "../userAdminTables/userAdminTable.component";
import UserHomePage from "../../pages/userPages/userHomePage";
import UserRankPage from "../../pages/userPages/userRankPage";
import UserProfilPage from "../../pages/userPages/userProfilPage";
import UserCoachContact from "../../pages/userPages/userCoachContact";
import UserFilesPage from "../../pages/userPages/userFilesPage";
import UserPasswordPage from "../../pages/userPages/userPasswordPage";
import UserAdminTransactionTableComponent from '../userAdminTables/UserAdminTransactionTableComponent';
import { useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";

function UserLayoutComponent(props) {

    const {Header, Content, Footer, Sider} = Layout;
    const {SubMenu} = Menu;

    const [collapsed, setCollapsed] = useState(false);
    const [section, setSection] = useState('home');
    const user = useSelector(state => state.userReducer?.user);

    let history = useHistory()

    useEffect(() => {
  
      if (sessionStorage.getItem("role") !== "Client") {
        history.push("/");
      }
    }, []);

    const renderElements = () => {
        switch (section) {
            case 'home' :
                return (
                    <>
                        <UserHomePage/>
                    </>
                );
                break;
            case 'orders' :
                return (
                    <>
                        <UserAdminTableComponent/>
                    </>
                );
                break;
            case 'transactions' :
                return (
                    <>
                        <UserAdminTransactionTableComponent/>
                    </>
                );
                break;
            case 'rank' :
                return (
                    <>
                        <UserRankPage/>
                    </>
                );
                break;
            case 'password' :
                return (
                    <>
                        <UserPasswordPage/>
                    </>
                );
                break;
            case 'editProfil' :
                return (
                    <>
                        <UserProfilPage/>
                    </>
                );
                break;
            case 'coach' :
                return (
                    <>
                        <UserCoachContact/>
                    </>
                );
                break;
            case 'files' :
                return (
                    <>
                        <UserFilesPage/>
                    </>
                );
                break;
        }

    }


    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} breakpoint="lg"
      collapsedWidth="0">
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined/>} onClick={() => setSection('home')}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>} onClick={() => setSection('orders')}>
                        My Orders
                    </Menu.Item>
                    <Menu.Item key="6" icon={<DesktopOutlined/>} onClick={() => setSection('transactions')}>
                        My Transactions
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                        <Menu.Item key="3" onClick={() => setSection('rank')}>
                            My rank
                        </Menu.Item>
                        <Menu.Item key="4" onClick={() => setSection('password')}>
                            Change Password
                        </Menu.Item>
                        <Menu.Item key="5" onClick={() => setSection('editProfil')}>
                            Update Profil
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined/>} title="My Coach" onClick={() => setSection('coach')}>
                        <Menu.Item key="6"> {user?.coachName || sessionStorage.getItem('coachName') || "Not Assigned"}</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined/>} onClick={() => setSection('files')}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}/>
                <Content style={{margin: '0 16px'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        {renderElements()}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>WASSIM SEYLI ©2021 Created by Hamza</Footer>
            </Layout>
        </Layout>
    );
}


export default UserLayoutComponent;