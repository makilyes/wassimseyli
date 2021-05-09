import React, { useState,useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import { toast ,ToastContainer } from 'react-toastify';


function AdminTransactionsTableComponent(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetchUserTransactions();
    }, []);
  
    const fetchUserTransactions = async () => {
      if (sessionStorage.getItem("userId") != null) {
        try {
          const response = await axios.get(
            'http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/allTransactions'
          );
          if (response.status == 200) {
            const transactions = [];
            response.data.map((ord) => {
              const transaction = {
                key: ord.key,
                id: ord.id,
                transactionId: ord.transactionId,
                time: ord.time,
                userId : ord.userId,
                price: `$${ord.price}`,
                orderId: ord?.orderId,
                orderLink  : ord.orderLink
              };
              transactions.push(transaction);
            }); 
            setData(transactions);
          } else {
            toast("Error fetching transactions", {
              type: "error",
            });
          }
        } catch (err) {
          toast("Error fetching transactions", {
            type: "error",
          });
        }
      }
    };

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Order Id',
            dataIndex: 'orderId',
            key: 'orderId',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'User Id',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'Transaction Id',
            dataIndex: 'transactionId',
            key: 'transactionId',
        },
        {
            title: 'Date',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Amount',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Reciept Link',
            dataIndex: 'orderLink',
            key: 'orderLink',
            render: text => <a href={text} target="__blank">{text}</a>,
        },
    ];


    return (
        <div>
            <Table columns={columns} dataSource={data} />
            <ToastContainer />
        </div>
    );
}

export default AdminTransactionsTableComponent;