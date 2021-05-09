import React, { useEffect,useState } from 'react';
import { Table, Tag, Space } from 'antd';
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faBan} from "@fortawesome/free-solid-svg-icons";


function AdminStudentsTableComponent(props) {

    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetchStudents();
    }, []);

    useEffect(() => {
      
      }, [user,setUser]);
  
    const fetchStudents = async () => {
      if (sessionStorage.getItem("userId") != null) {
        try {
          const response = await axios.get(
            'http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/getStudents'
          );
          if (response.status == 200) {
            const students = [];
            response.data.map((ord) => {
              const student = {
                key: ord.id,
                name: ord.name,
                userId: ord.id,
                status: ord.waitingList,
                address: ord.address,
                email : ord.email,
                // status : ord.waitingListStatus,
                phone: ord.phone,
                coach : ord?.coachName,
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

      const selectCoach=async (e)=>{
        
          const values = e.target.value.split('-');

          if (sessionStorage.getItem("userId") != null) {
            try {
              const response = await axios.get(
                `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/assignCoach/${values[1]}/${values[0]}`
              );
              if (response.status == 200) {
                  fetchStudents();
                  toast("Coach Assigned Successfully", {
                      type: "success",
                    });
                    fetchStudents()
              } else {
                toast("Error assigning coach", {
                  type: "error",
                });
              }
            } catch (err) {
              toast("Error assigning coach", {
                type: "error",
              });
            }
          }
        


      }
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
            title: 'Assign Coach',
            dataIndex: 'coach',
            render: (text, record) => (
                <Space size="middle">
                     <select name="coach" onChange={selectCoach}>
                     <option defaultChecked value={`Hamza-${record.userId}`}>Hamza</option>
                     <option value={`Ilyes-${record.userId}`}>Ilyes</option>
                     </select>
                </Space>
            ),
        },
        {
            title: 'Assigned Coach',
            dataIndex: 'coach',
            key: 'coach',
        },

        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                      <FontAwesomeIcon icon={faBan}
                               onClick={()=>rejectFromList(record.userId)}/>
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

export default AdminStudentsTableComponent;