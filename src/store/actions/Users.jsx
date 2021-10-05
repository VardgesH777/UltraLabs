import Http from "../../shared/utils/Https";
import store from "../../store/index"

import { handleChange } from "../reducers/Users";

export const getUsersAction = () => async dispatch => {
    const response = await Http("/users", "get")
    dispatch(handleChange({name: "usersList", value: response}))
}

export const addNewUserAction = (data) => async dispatch => {
    await Http("/users", "post", data)
}

export const deleteUserAction = (id) => async dispatch => {
    await Http(`/users/${id}`,"delete")
    const users = [ ...store.getState().users.usersList ]
    const newUsers = users.filter(i => i.id !== id)
    dispatch(handleChange({name: "usersList", value: newUsers}))
}

export const makeFavoriteItemAction = (user) => async dispatch => {
    await Http(`/users/${user.id}`,"put",user)
    const users = store.getState().users.usersList ? [ ...store.getState().users.usersList ] : null
    if (users) {
        dispatch(handleChange({name: "usersList", value: users.map(i =>
                i.id === user.id ? {...i, favorite: user.favorite} : i
            )}))
    }
    dispatch(handleChange({name: "user", value: {...user}}))
}

export const getUserAction = (id) => async dispatch => {
    const response = await Http(`/users/${id}`,"get")
    dispatch(handleChange({name: "user", value: response}))
}
