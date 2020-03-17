import { takeEvery, call, put } from 'redux-saga/effects';

import { getNewStories, getTopStories, getTopQuestions, fetchPostDetails } from '../../services/services';
import {
    fetchNewStoriesSuccess
    , fetchTopStoriesSuccess
    , fetchTopQuestionSuccess
    , errorFetchData
    , loading
}
    from '../actions/postsAction';

function* workerFetchNewStories() {
    try {
        yield put(errorFetchData(false));
        yield put(loading(true));
        const postsIds = yield call(getNewStories);
        const posts = yield call(fetchPostDetails, postsIds);
        yield put(loading(false));
        yield put(fetchNewStoriesSuccess(posts))
    } catch (error) {
        yield put(errorFetchData(true));
        yield put(loading(false));
    }
}

function* workerFetchTopStories() {
    try {
        yield put(errorFetchData(false));
        yield put(loading(true));
        const postsIds = yield call(getTopStories);
        const posts = yield call(fetchPostDetails, postsIds);
        yield put(loading(false));
        yield put(fetchTopStoriesSuccess(posts))
    } catch (error) {
        yield put(errorFetchData(true));
        yield put(loading(false));
    }
}

function* workerfetchTopQuestion() {
    try {
        yield put(errorFetchData(false));
        yield put(loading(true));
        const postsIds = yield call(getTopQuestions);
        const posts = yield call(fetchPostDetails, postsIds);
        yield put(loading(false));
        yield put(fetchTopQuestionSuccess(posts))
    } catch (error) {
        yield put(errorFetchData(true));
        yield put(loading(false));
    }
}

export function* watchFetchNewStories() {
    yield takeEvery('FETCH_NEW_STORIES', workerFetchNewStories)
}

export function* watchFetchTopStories() {
    yield takeEvery('FETCH_TOP_STORIES', workerFetchTopStories)
}

export function* watchfetchTopQuestion() {
    yield takeEvery('FETCH_TOP_QUESTION', workerfetchTopQuestion)
}