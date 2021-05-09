import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function AdminOrderTableComponent(props) {
  const [data, setData] = useState([]);

  const fetchUserOrders = async () => {
    if (sessionStorage.getItem("userId") != null) {
      try {
        const response = await axios.get("http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/allOrders");
        if (response.status == 200) {
          const ordersF = response.data.filter((x) => x[7] !== "");
          const orders = [];
          let cartDetail = {};
          const s = ordersF.map(async (ord, i) => {
            cartDetail = await axios.get(
              `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/getCartById/${ord[7]}`
            );
            const order = {
              key: ord[0] + i,
              orderId: ord[0],
              date: ord[2],
              userId: ord[6],
              price: `$${cartDetail?.data?.price}`,
              details: `Project Name : ${cartDetail?.data?.projectName} \n Detail : ${cartDetail?.data?.projectDetail} \n Order Type :  ${cartDetail?.orderType}  \n
                            Website Type :  ${cartDetail?.data?.websiteType} \n
                            Package Type :  ${cartDetail?.data?.packageType} \n
                            Pages :  ${cartDetail?.data?.pages} \n
                            Products :  ${cartDetail?.data?.products} \n
                            Wordpress :  ${cartDetail?.data?.useWordpress} \n
                            Type Of Branding :  ${cartDetail?.data?.typeOfBranding} \n,
                            Url :  ${cartDetail?.data?.url}
                          `,
              status: ord[5],
              file: cartDetail?.data?.file,
            };
            orders.push(order);

            return orders;
          });

          const results = await Promise.all(s);
          setData(results[0]);
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

  const completeOrder = async (id) => {
    if (sessionStorage.getItem("userId") != null) {
      try {
        const response = await axios.get(
          `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/acceptOrder/${id}`
        );
        if (response.status == 200) {
            fetchUserOrders();
            toast("Completed Successfully", {
                type: "success",
              });
        } else {
          toast("Error updating order", {
            type: "error",
          });
        }
      } catch (err) {
        toast("Error updating order", {
          type: "error",
        });
      }
    }
  };


  useEffect(() => {
    fetchUserOrders();
  }, []);

  useEffect(() => {}, [data, setData]);

  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderId",
      key: "orderNumber",
      // render: text => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },

    {
      title: "Total",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "File",
      key: "file",
      render: (text, record) => (
        <Space size="middle">
          {<a href={`http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com//files/${record.file}`} target="__blank">{record.file}</a>}
        </Space>
      ),
    },

    {
      title: "Details",
      key: "details",
      dataIndex: "details",
    },
    

    {
      title: 'Mark As Complete',
      key: 'action',
      render: (text, record) => (
          <Space size="middle">
               <FontAwesomeIcon icon={faCheck}
                         onClick={()=>completeOrder(record.orderId)}/>
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

export default AdminOrderTableComponent;
