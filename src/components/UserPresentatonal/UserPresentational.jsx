import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeartOutlined } from "@ant-design/icons";

import { makeFavoriteItemAction } from "../../store/actions/Users";

import "./styles.scss"

const UserPresentational = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.users.user)
    const { firstName, lastName, location, rate, employment } = user

    return (<div className="user">
        <div className="individual-info"><span>First Name</span> - {firstName}</div>
        <div className="individual-info"><span>Last Name</span> - {lastName}</div>
        <div className="individual-info"><span>Location</span> - {location}</div>
        <div className="individual-info"><span>Rate</span> - {rate}</div>
        <div className="individual-info"><span>Employment</span> - {employment}</div>
        <div className={`make-favorite ${user.favorite ? "favorite" : ""}`} onClick={() => dispatch(makeFavoriteItemAction({...user,favorite: !user.favorite}))}><HeartOutlined/></div>
    </div>)
}

export default UserPresentational
