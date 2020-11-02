import { combineReducers } from "redux";

import dataReducer from "./data/data.reducers";
import userReducer from "./user/user.reducers";

const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer
});

export default rootReducer;
