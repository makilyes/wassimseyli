import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './drawerDashBoard.styles.scss'
import {useState} from "react";

const {Option} = Select;

function DrawerDashBoardComponent(props) {



    const [state, setState] = useState(false)

    const showDrawer = () => {
        setState(true);
    };

    const onClose = () => {
        setState(false);
    };

        return (
            <>
                <Button className={props.btnClassName} type="primary" onClick={showDrawer}>
                    <PlusOutlined /> {props.titleButton}
                </Button>
                <Drawer
                    title="Add a new Student"
                    width={720}
                    onClose={onClose}
                    visible={state}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={onClose} style={{ marginRight: 8 }}>
                                Cancel
                            </Button>
                            <Button onClick={onClose} type="primary">
                                Submit
                            </Button>
                        </div>
                    }
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[{ required: true, message: 'Please enter user name' }]}
                                >
                                    <Input placeholder="Please enter user name" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[{ required: true, message: 'Please enter user email' }]}
                                >
                                    <Input placeholder="Please enter user email" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="username"
                                    label="Username"
                                    rules={[{ required: true, message: 'Please enter user username' }]}
                                >
                                    <Input placeholder="Please enter user username" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="type"
                                    label="Type"
                                    rules={[{ required: true, message: 'Please choose the type' }]}
                                >
                                    <Select placeholder="Please choose the type">
                                        <Option value="client">Client</Option>
                                        <Option value="student">Student</Option>
                                        <Option value="waitingList">Waiting List</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[{ required: true, message: 'Please enter user password' }]}
                                >
                                    <Input placeholder="Please enter user password" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="description"
                                    label="Description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'please enter url description',
                                        },
                                    ]}
                                >
                                    <Input.TextArea rows={4} placeholder="please enter url description" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </>
        );
}

export default DrawerDashBoardComponent;
