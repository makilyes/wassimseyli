import React from 'react';
import {Button, Table} from "antd";

function AdminClientsComponent(props) {
    const columns = [
        {
            title: 'Client',
            dataIndex: 'client',
            key: 'client',
            render: text => <a href='/'>{text}</a>,
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Orders',
            dataIndex: 'orders',
            key: 'orders',
        },
    ];

    const data = [
        {
            key: '1',
            client: 'John Brown',
            total: '990$',
            orders: '1 order'

        },
        {
            key: '2',
            client: 'Jim Green',
            total: '2990$',
            orders: '2 orders'
        },
        {
            key: '3',
            client: 'Joe Black',
            total: '5990$',
            orders: '4 orders'
        },
    ];
    return (
        <div>
            <Button type="primary">Add client</Button>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default AdminClientsComponent;
