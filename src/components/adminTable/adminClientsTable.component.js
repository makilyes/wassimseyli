import React, { useState,useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import { toast ,ToastContainer } from 'react-toastify';


function AdminClientsTableComponent(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetchUserOrders();
    }, []);
  
    const fetchUserOrders = async () => {
      if (sessionStorage.getItem("userId") != null) {
        try {
          const response = await axios.get(
            'http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/ordersByAllUsers'
          );
          if (response.status == 200) {
            const orders = [];
            response.data.map((ord) => {
              const order = {
                key: ord[0],
                numberOfOrders: ord[3],
                userId: ord[0],
                total: `$${ord[4]}`,
                address: ord[2],
                name: ord[1],
              };
              orders.push(order);
            }); 
            setData(orders);
          } else {
            toast("Error fetching orders", {
              type: "error",
            });
          }
        } catch (err) {
          toast("Error fetching orders", {
            type: "error",
          });
        }
      }
    };

    const columns = [
        {
            title: 'UserId',
            dataIndex: 'userId',
            key: 'userId',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Number of Orders',
            dataIndex: 'numberOfOrders',
            key: 'numberOfOrders',
            responsive: ['md'],
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
    ];


    return (
        <div>
            <Table columns={columns} dataSource={data} />
            <ToastContainer />
        </div>
    );
}

export default AdminClientsTableComponent;