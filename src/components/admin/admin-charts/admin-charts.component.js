import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts'

function AdminChartsComponent(props) {

    const data = [{
        name: 'day 1',
        sales: 400,
        pv: 2400,
        amt: 2400
    },
        {
            name: 'day 2',
            sales: 800,
            pv: 2400,
            amt: 2400
        },
        {
            name: 'day 3',
            sales: 500,
            pv: 2400,
            amt: 2400
        },
        {
            name: 'day 4',
            sales: 280,
            pv: 2400,
            amt: 2400
        },
        {
            name: 'day 5',
            sales: 100,
            pv: 2400,
            amt: 2400
        },
        {
            name: 'day 6',
            sales: 680,
            pv: 2400,
            amt: 2400
        },
    ]

    return (
        <div>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
}

export default AdminChartsComponent;
