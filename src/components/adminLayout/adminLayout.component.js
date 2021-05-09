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
import AdminOrderTableComponent from "../adminTable/adminOrderTable.component";
import AdminClientsTableComponent from "../adminTable/adminClientsTable.component";
import AdminStudentsTableComponent from "../adminTable/adminStudentsTable.component";
import AdminWaitingListTableComponent from "../adminTable/adminWaitingListTable.component";
import AdminResultsTable from "../adminTable/adminResultsTable";
import {useHistory} from "react-router-dom";
import AdminContactTableComponent from '../adminTable/adminContactsTable.component';
import AdminTransactionsTableComponent from '../adminTable/adminTransactionsTable.component';

function AdminLayoutComponent(props) {

    const {Header, Content, Footer, Sider} = Layout;
    const {SubMenu} = Menu;

    const [collapsed, setCollapsed] = useState(false);
    const [section, setSection] = useState('home');

    let history = useHistory()
    useEffect(() => {
  
      if (sessionStorage.getItem("role") !== "Admin") {
        history.push("/");
      }
    }, []);
  

    const renderElements = () => {
        switch (section) {
            case 'home' :
                return (
                    <>
                        <AdminResultsTable/>
                    </>
                );
                break;
            case 'orders' :
                return (
                    <>
                        <AdminOrderTableComponent/>
                    </>
                );
                break;
            case 'clients' :
                return (
                    <>
                        <AdminClientsTableComponent/>
                    </>
                );
                break;
            case 'students' :
                return (
                    <>
                        <AdminStudentsTableComponent/>
                    </>
                );
                break;
            case 'waitingList' :
                return (
                    <>
                        <AdminWaitingListTableComponent/>
                    </>
                );
                break;
            case 'contactList' :
                return (
                    <>
                        < AdminContactTableComponent/>
                    </>
                );
                    break;

            case 'transactions' :
                return (
                    <>
                        < AdminTransactionsTableComponent/>
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
                        Orders
                    </Menu.Item>
                    <Menu.Item key="10" icon={<DesktopOutlined/>} onClick={() => setSection('contactList')}>
                        Contact Requests
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="Leads">
                        <Menu.Item key="3" onClick={() => setSection('clients')}>
                            Clients
                        </Menu.Item>
                        <Menu.Item key="4" onClick={() => setSection('students')}>
                            Students
                        </Menu.Item>
                        <Menu.Item key="5" onClick={() => setSection('waitingList')}>
                            Waiting List
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="9" icon={<FileOutlined/>} onClick={() => setSection('files')}>
                        Files
                    </Menu.Item>
                    <Menu.Item key="11" icon={<FileOutlined/>} onClick={() => setSection('transactions')}>
                        Transactions
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


export default AdminLayoutComponent;