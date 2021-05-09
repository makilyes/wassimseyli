import React, {useState} from 'react';
import {Space, Table, Tag, Radio, Popconfirm} from "antd";

function UserFilesPage(props) {

    const [students, setStudents] = useState([]);


    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            responsive: ['md'],
        },
        {
            title: 'File Status',
            key: 'fileStatus',
            dataIndex: 'fileStatus',
            responsive: ['md'],
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 1 ? 'green' : 'blue';
                        // if (tag === 'loser') {
                        //     color = 'volcano';
                        // }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Object',
            dataIndex: 'object',
            key: 'object',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, student) =>
                <Radio.Group>
                    <Popconfirm
                        placement='topRight'
                        title={`Are you sure to delete ${student.name}`}
                        okText='Yes'
                        cancelText='No'>
                        <Radio.Button value="small">Delete</Radio.Button>
                    </Popconfirm>
                </Radio.Group>
        },
    ];

    const data = [
        {
            key: '1',
            date: '18/04/2021',
            name: 'competitor survey result',
            fileStatus: ['new'],
            object: 'Offer proposal',
            details: 'details'
        },
        {
            key: '2',
            date: '19/04/2021',
            name: 'first proposal',
            fileStatus: [''],
            object: 'Consulting',
            details: 'details'
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default UserFilesPage;