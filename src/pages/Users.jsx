import React,{ useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import UsersPresentational from "../components/UsersPresentational/UsersPresentational";
import { getUsersAction } from "../store/actions/Users";

import "../components/UsersPresentational/styles.scss"

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(store => store.users.usersList)

    useEffect(() => {
        !users && dispatch(getUsersAction())
    },[dispatch,users])

    return (
       <>
           { users && <UsersPresentational/> }
       </>
    )
};

export default Users
