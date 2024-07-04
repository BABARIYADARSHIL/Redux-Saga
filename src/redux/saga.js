import { all } from "redux-saga/effects"
import { watchFetchUserData } from "./dataSaga"

export default function* rootSaga() {
    yield all([
        watchFetchUserData(),
    ])
}