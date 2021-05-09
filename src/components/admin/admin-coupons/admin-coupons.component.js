import React from 'react';
import {Button, Table} from "antd";

function AdminCouponsComponent(props) {
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: text => <a href='/'>{text}</a>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Used',
            dataIndex: 'used',
            key: 'used',
        },
    ];

    const data = [
        {
            key: '1',
            title: 'thankyou30',
            status: 'live',
            used: '1 used'

        },
        {
            key: '2',
            title: 'welcome20',
            status: 'closed',
            used: '2 used'
        },
        {
            key: '3',
            title: 'Kim20',
            status: 'closed',
            used: '40 used'
        },
    ];
    return (
        <div>
            <Button type="primary">Add coupon</Button>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default AdminCouponsComponent;
