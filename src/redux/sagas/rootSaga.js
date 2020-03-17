import { all, fork } from 'redux-saga/effects';

import { watchFetchNewStories, watchFetchTopStories, watchfetchTopQuestion } from './postsSaga';

export default function* rootSaga() {
    yield all([
        fork(watchFetchNewStories),
        fork(watchFetchTopStories),
        fork(watchfetchTopQuestion)
    ]);
}