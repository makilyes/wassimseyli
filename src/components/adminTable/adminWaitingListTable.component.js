import { Table, Tag, Space } from 'antd';
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faBan} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';



function AdminWaitingListTableComponent(props) {


    const [data, setData] = useState([]);

    useEffect(() => {
      fetchStudents();
    }, []);
  
    const fetchStudents = async () => {
      if (sessionStorage.getItem("userId") != null) {
        try {
          const response = await axios.get(
            'http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/getWaitingListUsers'
          );
          if (response.status == 200) {
            const students = [];
            response.data.map((ord) => {
              const student = {
                key: ord.id,
                name: ord.name,
                rank:ord.id,
                userId: ord.id,
                status: ord.waitingList,
                address: ord.address,
                email : ord.email,
                // status : ord.waitingListStatus,
                phone: ord.phone,
                date : ord.dateUpdated
              };
              students.push(student);
            });
            setData(students);
          } else {
            toast("Error fetching students", {
              type: "error",
            });
          }
        } catch (err) {
          toast("Error fetching students", {
            type: "error",
          });
        }
      }
    };

    const addToList = async (id) => {
        if (sessionStorage.getItem("userId") != null) {
          try {
            const response = await axios.get(
              `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/acceptStudent/${id}`
            );
            if (response.status == 200) {
                fetchStudents();
                toast("Accepted Successfully", {
                    type: "success",
                  });
            } else {
              toast("Error updating student", {
                type: "error",
              });
            }
          } catch (err) {
            toast("Error updating student", {
              type: "error",
            });
          }
        }
      };
      const rejectFromList = async (id) => {
        if (sessionStorage.getItem("userId") != null) {
          try {
            const response = await axios.get(
              `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/rejectStudent/${id}`
            );
            if (response.status == 200) {
                fetchStudents();
                toast("Rejected Successfully", {
                    type: "success",
                  });
            } else {
              toast("Error updating student", {
                type: "error",
              });
            }
          } catch (err) {
            toast("Error updating student", {
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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Rank',
            dataIndex: 'rank',
            key: 'rank',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Date Entry',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <FontAwesomeIcon icon={faCheck}
                               onClick={()=>addToList(record.userId)
                                 }/>
                      <FontAwesomeIcon icon={faBan}
                               onClick={()=>rejectFromList(record.userId)}/>
                </Space>
            ),
        },
    ];



    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default AdminWaitingListTableComponent;