import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';

const TableColumn = (deleteAction,favoriteAction) => {
    const history = useHistory()
    return [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            render: (_,item) => {
                return (
                    <div className="item-name" onClick={() => history.push(`/users/${item.id}`)}>{item.firstName}</div>
                )
            }
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Employment type',
            dataIndex: 'employment',
            key: 'employment',
        },
        {
            title: 'Hourly rate(USD)',
            dataIndex: 'rate',
            key: 'rate',
        },
        {
            title: `Actions`,
            dataIndex: `action`,
            key: `action`,
            render: (_,item) => {
                return (
                    <>
                        <Button onClick={() => favoriteAction({...item})} className={`${item.favorite ? "favorite" : ""}`} ><HeartOutlined /></Button>
                        <Button onClick={() => deleteAction(item.id)}><DeleteOutlined /></Button>
                    </>
                )
            }
        }
    ]
}

export default TableColumn
