import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import dataReducer from "./data/data.reducers";
import userReducer from "./user/user.reducers";
import tableReducer from "./table/table.reducers";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
};

const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer,
    table: tableReducer
});

export default persistReducer(persistConfig, rootReducer);
