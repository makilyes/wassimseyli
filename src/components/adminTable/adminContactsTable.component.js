import React, { useState,useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import { toast ,ToastContainer } from 'react-toastify';


function AdminContactTableComponent(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetchUserOrders();
    }, []);
  
    const fetchUserOrders = async () => {
      if (sessionStorage.getItem("userId") != null) {
        try {
          const response = await axios.get(
            'http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/getContactRequests'
          );
          if (response.status == 200) {
            const contacts = [];
            response.data.map((ord) => {
              const contact = {
                key: ord.id,
                id: ord.id,
                name: ord.name,
                email: ord.email,
                type: ord.type,
                message: ord.message,
              };
              contacts.push(contact);
            }); 
            setData(contacts);
          } else {
            toast("Error fetching contact requests", {
              type: "error",
            });
          }
        } catch (err) {
          toast("Error fetching contact requests", {
            type: "error",
          });
        }
      }
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Request Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
        },
    ];


    return (
        <div>
            <Table columns={columns} dataSource={data} />
            <ToastContainer />
        </div>
    );
}

export default AdminContactTableComponent;