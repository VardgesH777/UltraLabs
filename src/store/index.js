import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import users from './reducers/Users';

const reducers = combineReducers({
     users
})

export default configureStore({
     reducer: reducers,
     middleware: [thunk],
     devTools: process.env.NODE_ENV !== 'production',
});
