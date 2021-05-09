import React, { useEffect, useState } from "react";
import { Statistic, Row, Col, Button, Card, DatePicker, Space } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "./adminTable.styles.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function AdminResultsTable(props) {
  const { RangePicker } = DatePicker;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    if (sessionStorage.getItem("userId") != null) {
      try {
        const response = await axios.get("http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/getStats");
        if (response.status == 200) {
          setData(response.data);
        } else {
          toast("Error fetching stats", {
            type: "error",
          });
        }
      } catch (err) {
        toast("Error fetching stats", {
          type: "error",
        });
      }
    }
  };

  const setDates = (date) => {
    if (date && date.length == 2 && date[1] !== null) {
      
      let  year1 = date[0]?.toDate().getFullYear();
      let month1 = date[0]?.toDate().getMonth() + 1;
      let dt1 = date[0]?.toDate().getDate();

      let  year2 = date[1]?.toDate().getFullYear();
      let month2 = date[1]?.toDate().getMonth() + 1;
      let dt2 = date[1]?.toDate().getDate();

      if (dt1 < 10) {
        dt1 = "0" + dt1;
      }
      if (month1 < 10) {
        month1 = "0" + month1;
      }

      if (dt2 < 10) {
        dt2 = "0" + dt2;
      }
      if (month2 < 10) {
        month2 = "0" + month2;
      }


      const startDate =year1 + "-" + month1 + "-" + dt1;
      const endDate =year2 + "-" + month2 + "-" + dt2;

      if(startDate && endDate)
      fetchStatsWithData(`${startDate},${endDate}`);

    }
  };

  const fetchStatsWithData = async (date) => {
    if (sessionStorage.getItem("userId") != null) {
      try {
        const response = await axios.get(
          `http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/getStats/${date}`
        );
        if (response.status == 200) {
          setData(response.data);
        } else {
          toast("Error fetching stats", {
            type: "error",
          });
        }
      } catch (err) {
        toast("Error fetching stats", {
          type: "error",
        });
      }
    }
  };

  return (
    <>
      <div className="center-results">
        <Row className="filter">
          <Button
            className="buttonAdminResults"
            onClick={fetchStats}
            style={{ marginTop: 16 }}
            type="primary"
          >
            All
          </Button>
          <Button
            className="buttonAdminResults"
            onClick={() => fetchStatsWithData("0")}
            style={{ marginTop: 16 }}
            type="primary"
          >
            Today
          </Button>
          <Button
            className="buttonAdminResults"
            onClick={() => fetchStatsWithData("7")}
            style={{ marginTop: 16 }}
            type="primary"
          >
            7 days
          </Button>
          <Button
            className="buttonAdminResults"
            onClick={() => fetchStatsWithData("1")}
            style={{ marginTop: 16 }}
            type="primary"
          >
            1 month
          </Button>
          <Space className="datePickerAdmin" direction="vertical" size={12}>
            <RangePicker onCalendarChange={setDates} />
          </Space>
        </Row>
        <Row className="numberResultsSection" gutter={27}>
          <Col className="col-background" span={7}>
            <Statistic title="Waiting List" value={data?.waitingList} />
          </Col>
          <Col className="col-background" span={7}>
            <Statistic title="Active Users" value={data?.users} />
          </Col>
          <Col className="col-background" span={7}>
            <Statistic
              title="Total Sales"
              value={data?.revenue || 0}
              precision={2}
            />
          </Col>
        </Row>
      </div>
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Waiting List"
                value={data?.waitingListPercentage || 0}
                precision={2}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Sales"
                value={data?.salesPercentage || 0}
                precision={2}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
        <ToastContainer />
      </div>
    </>
  );
}

export default AdminResultsTable;
