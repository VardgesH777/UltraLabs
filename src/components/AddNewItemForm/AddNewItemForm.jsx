import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Select,Modal, InputNumber } from "antd";

import { addNewUserAction, getUsersAction } from "../../store/actions/Users";

const AddNewItemForm = ({setState,isModalVisibleUserAdd}) => {
    const dispatch = useDispatch()
    const [ form ] = Form.useForm();
    const { Option } = Select;

    const users = useSelector(store => store.users.usersList)

    const addItem = async (values) => {
        await dispatch(addNewUserAction(values,[...users]))
        await dispatch(getUsersAction())
        setState(prevState => ({
            ...prevState,
            isModalVisibleUserAdd: false
        }))
        return form.resetFields()
    }

    return (
        <Modal title="Add new item"
               visible={isModalVisibleUserAdd}
               onCancel={() => {
                   setState(prevState => ({
                       ...prevState,
                       isModalVisibleUserAdd: false
                   }));
                   form.resetFields()
               }}
               okButtonProps={{form:'add-item-form', key: 'submit', htmlType: 'submit'}}
               okText="Save">
            <div className="modal-title_item">
                Add a new item
            </div>
            <Form name="add-item-form" onFinish={addItem} form={form}>
                <Form.Item className="form-input" name="firstName" label="First Name" rules={[{
                    required: true,
                    message: "First name is required"
                }]}>
                    <Input type="text" placeholder="First Name"/>
                </Form.Item>
                <Form.Item className="form-input" name="lastName" label="Last name" rules={[{
                    required: true,
                    message: "Last name is required"
                }]}>
                    <Input type="text" placeholder="Last Name"/>
                </Form.Item>
                <Form.Item className="form-input" name="jobTitle" label="Job title" rules={[{
                    required: true,
                    message: "Job title is required"
                }]}>
                    <Select placeholder="Gender">
                        <Option value="developer">Developer</Option>
                        <Option value="architect">Architect</Option>
                    </Select>
                </Form.Item>
                <Form.Item className="form-input" name="location" label="Location" rules={[{
                    required: true,
                    message: "Location is required"
                }]}>
                    <Input type="text" placeholder="Location"/>
                </Form.Item>

                <Form.Item className="form-input" name="employment" label="Employment type" rules={[{
                    required: true,
                    message: "Employment type is required"
                }]}>
                    <Select placeholder="Gender">
                        <Option value="project">Project Based</Option>
                        <Option value="contract">Contract based</Option>
                    </Select>
                </Form.Item>
                <Form.Item className="form-input" name="rate" label="Hourly rate" rules={[{
                    required: true,
                    message: "Hourly rate is required"
                }]}>
                    <InputNumber min={1} controls={false} type="text" placeholder="Rate"/>
                </Form.Item>
            </Form>
        </Modal>

    )
}

export default AddNewItemForm
