import {call, put, takeEvery} from 'redux-saga/effects';
import { dataApi } from '../api/dataApi';
import { FETCH_USER_DATA, FETCH_USER_DATA_FAILED, FETCH_USER_DATA_SUCCESS } from './type';

export function* fetchUserData(){
    try{
        const response = yield call(dataApi);
        yield put({type: FETCH_USER_DATA_SUCCESS, payload: response.data.data});
        // console.log("APi", response.data.data)
    }catch (e){
        yield put({type: FETCH_USER_DATA_FAILED, payload: e.message})
    }
}

export function* watchFetchUserData(){
    yield takeEvery(FETCH_USER_DATA, fetchUserData);
}

