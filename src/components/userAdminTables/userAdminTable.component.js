import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function UserAdminTableComponent(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const fetchUserOrders = async () => {
    if (sessionStorage.getItem("userId") != null) {
      try {
        const response = await axios.get(
          `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/ordersByUserId/${sessionStorage.getItem("userId")}`
        );
        if (response.status == 200) {
          const orders = [];
          response.data.map((ord) => {
            const order = {
              key: ord.id,
              orderNumber: ord.id,
              date: ord?.completionDate,
              total: `$${ord?.price}`,
              orderStatus: [ord?.status],
              details: ord?.description,
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
      title: "Order Number",
      dataIndex: "orderNumber",
      key: "orderNumber",
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
      title: "Order Status",
      key: "orderStatus",
      dataIndex: "orderStatus",
      responsive: ['md'],
      render: (tags) => (
        <>
          {tags.length > 0
            ? tags?.map((tag) => {
                let color = tag?.length > 7 ? "red" : "green";
                // if (tag === 'loser') {
                //     color = 'volcano';
                // }
                return (
                  <Tag color={color} key={tag}>
                    {tag?.toUpperCase()}
                  </Tag>
                );
              })
            : ""}
        </>
      ),
    },
    {
      title: "Details",
      key: "details",
      render: (text, record) => (
        <Space size="middle">
          <a>{record? record.details : ''}</a>
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

export default UserAdminTableComponent;
