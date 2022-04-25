import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import weatherReducer from "./weatherSlice";

const middleware = [thunk];

export default configureStore({
    reducer: {
        weather: weatherReducer,
    },
    middleware,
});
