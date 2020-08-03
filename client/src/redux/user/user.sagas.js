import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import userActionTypes from './user.action-types';
import { 
    signInSuccess, signInFailure, 
    signOutFailure, signOutSuccess,
    signUpFailure, signUpSuccess
} from './user.actions';

export function* signInWithEmail({ payload: { username, password } }) {
    try{
        const user  = yield axios({
            url: '/api/login',
            method: 'post',
            data: {
                username: username,
                password: password,
            }
        }).then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
        yield put(signInSuccess({id: user._id, ...user}));
    } catch(error) {
       yield  put(signInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try{
        const user = yield axios({
            url:'/api/session',
            method: 'get',
            withCredentials: true
        }).then(response => (
            response.data
        )).catch(error => {
            throw error;
        });
        if(!user) return;
        yield put(signInSuccess({...user}));
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* signOut() {
    try {
        yield axios({
            url: '/api/logout',
            method: 'get',
        }).catch(error => {
            throw error
        });
        yield put(signOutSuccess());
    }  catch(error) {
        yield put(signOutFailure(error));
    }
}

export function* signUp({ payload: { email, password, name, phoneNo, username }}) {
    try {
        const user = yield axios({
            url: '/api/register',
            method: 'post',
            data: {
                email: email,
                password: password,
                name: name,
                username: username,
                phoneNo: phoneNo,
            }
        }).then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
            throw error;
        });
        yield put(signUpSuccess({id: user._id, ...user}));
    } catch(error) {
        yield put(signUpFailure(error));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* userSaga() {
    yield all([
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ]);
}