import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import UserPresentational from "../components/UserPresentatonal/UserPresentational";
import { getUserAction } from "../store/actions/Users";

const IndividualItem = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let { id } = useParams();
    const user = useSelector(store => store.users.user)
    const error = useSelector(store => store.users.error)

    useEffect(() => {
        dispatch(getUserAction(id))
    },[dispatch,id])

    useEffect(() => {
        if (error) {
            history.push("/")
        }
    },[error])

    return (
        <div className="individual-item">
            <h2 className="title-h2">
                User Info
            </h2>
            <div className="route-link" onClick={() => history.push("/")}>
                Home
            </div>
            { user && <UserPresentational/> }
        </div>
    )
}

export default IndividualItem