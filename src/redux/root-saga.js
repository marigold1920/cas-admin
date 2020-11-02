import { all, call } from "redux-saga/effects";

import { dataSagas } from "./data/data.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
    yield all([call(userSagas), call(dataSagas)]);
}
