import React from 'react';
import {Space, Table} from "antd";

function AdminOrdersComponent(props) {
    const columns = [
        {
            title: 'Order',
            dataIndex: 'order',
            key: 'order',
            render: text => <a href='/'>{text}</a>,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
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
            title: 'Payment',
            key: 'payment',
            dataIndex: 'payment',
        },
        {
            title: 'Order processing',
            key: 'orderProcessing',
            dataIndex: 'orderProcessing',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Contact {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            order: '45643',
            client: 'John Brown',
            date: 'Aujourd\'hui à 13:16',
            total: '990$',
            payment: 'authorized',
            orderProcessing: 'not treated',
        },
        {
            key: '2',
            order: '23643',
            client: 'Jim Green',
            date: '04/04/2020',
            total: '2990$',
            payment: 'paid',
            orderProcessing: 'treated',

        },
        {
            key: '3',
            order: '643',
            client: 'Joe Black',
            date: '01/04/2020',
            total: '5990$',
            payment: 'paid',
            orderProcessing: 'treated',

        },
    ];
    return (
        <div className='admin-orders'>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default AdminOrdersComponent;
