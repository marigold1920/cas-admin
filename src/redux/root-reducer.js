import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import dataReducer from "./data/data.reducers";
import userReducer from "./user/user.reducers";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
};

const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer
});

export default persistReducer(persistConfig, rootReducer);
