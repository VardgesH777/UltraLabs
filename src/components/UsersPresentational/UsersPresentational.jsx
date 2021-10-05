import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Modal, Table } from "antd";

import AddNewItemForm from "../AddNewItemForm/AddNewItemForm";
import tableColumn from "../Reusable/TableColumn/TableColumn";
import { deleteUserAction, makeFavoriteItemAction } from "../../store/actions/Users";

import "./styles.scss"

const UsersPresentational = () => {
    const dispatch = useDispatch();
    const users = useSelector(store => store.users.usersList)
    const [ state, setState ] = useState({
        isModalVisibleUserAdd: false,
        isModalVisible: false,
        modalText: ""
    })
    const { isModalVisibleUserAdd, isModalVisible, modalText } = state

    const deleteItem = async (id) => {
        await dispatch(deleteUserAction(id,[...users]))
        return setState(prevState => ({
                ...prevState,
                isModalVisible: true,
                modalText: "You have successfully delete item"
            }
        ))
    }

    const makeFavoriteItem = async (user) => {
        user.favorite = !user.favorite
        await dispatch(makeFavoriteItemAction(user))
    }

    const columns = tableColumn(deleteItem,makeFavoriteItem);

    const handleOk = () => {
        return setState(prevState => ({
                ...prevState,
                isModalVisible: false,
                modalText: ""
            }
        ))
    }

    return (
        <div className="users">
            <h2 className="title-h2">Expert list</h2>
            <Table
                dataSource={users || []}
                bordered
                className="tickets-table-container"
                columns={columns}
                pagination={false}
                rowKey={record => record.id}
            />
            <div className="add-new-item">
                <button onClick={() => setState(prevState => ({
                    ...prevState,
                    isModalVisibleUserAdd: true
                }))}>Add a new item</button>
            </div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk}>
                <div>{ modalText }</div>
            </Modal>
            <AddNewItemForm setState={setState} isModalVisibleUserAdd={isModalVisibleUserAdd}/>
        </div>
    )
}

export default UsersPresentational
