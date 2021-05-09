import React from 'react';
import {Button, Space, Table} from "antd";

function AdminWaitingListComponent(props) {
    const columns = [
        {
            title: 'Rank',
            dataIndex: 'rank',
            key: 'rank',
            render: text => <a href='/'>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: text => <a href='/'>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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
            rank: 2990,
            email: 'il@live.fr',
            name: 'ilyes'

        },
        {
            key: '2',
            rank: 2989,
            email: 'il@caramail.com',
            name: 'makria'
        },

    ];
    return (
        <div>
            <Button type="primary">Add to the waiting list</Button>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default AdminWaitingListComponent;
