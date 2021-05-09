import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function UserAdminTransactionTableComponent(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUserTransactions();
  }, []);

  const fetchUserTransactions = async () => {
    if (sessionStorage.getItem("userId") != null) {
      try {
        const response = await axios.get(
          `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/transactionsByUserId/${sessionStorage.getItem(
            "userId"
          )}`
        );
        if (response.status == 200) {
          const transactions = [];
          response.data.map((ord) => {
            const transaction = {
              key: ord.id,
              transactionNumber: ord.transactionId,
              date: ord?.time,
              total: `$${ord?.price}`,
              transactionStatus: [ord?.orderLink],
              orderId: ord?.orderId,
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
      title: "Transaction Number",
      dataIndex: "transactionNumber",
      key: "transactionNumber",
      // render: text => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      responsive: ['md'],
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Transaction Status",
      key: "transactionStatus",
      dataIndex: "transactionStatus",
      render: (tags) => (
        <>
          {tags.length > 0
            ? tags?.map((tag) => {
                return (
                  <Tag color={"green"} key={tag}>
                    {tag}
                  </Tag>
                );
              })
            : ""}
        </>
      ),
    },
    {
      title: "Order Id",
      key: "orderId",
      responsive: ['md'],
      render: (text, record) => (
        <Space size="middle">
          <a>{record? record.orderId : ''}</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <ToastContainer />
    </div>
  );
}

export default UserAdminTransactionTableComponent;
