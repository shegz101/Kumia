// import the configure store
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";

const rootReducer = combineReducers({
    auth: authReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;