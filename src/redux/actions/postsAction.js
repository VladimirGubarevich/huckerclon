import { getNewStories } from '../../services/services';
import { getTopStories } from '../../services/services';
import { getTopQuestions } from '../../services/services';
import { conversionDate } from '../../utils/conversionDate';

function errorFetchData(bool) {
    return {
        type: 'ERROR_FETCH_DATA',
        payload: bool
    }
}

function loading(bool) {
    return {
        type: 'LOADING',
        payload: bool
    }
}

function fetchNewStoriesSuccess(posts) {
    return {
        type: 'FETCH_NEW_STORIES',
        payload: posts
    }
}

function fetchTopStoriesSuccess(posts) {
    return {
        type: 'FETCH_TOP_STORIES',
        payload: posts
    }
}

function fetchTopQuestionSuccess(posts) {
    return {
        type: 'FETCH_TOP_QUESTION',
        payload: posts
    }
}

export function fetchNewStories() {
    return dispatch => {
        dispatch(errorFetchData(false));
        dispatch(loading(true));
        getNewStories()
            .then(ids => dispatch(fetchPostDetails(ids)))
            .then(posts => {

                dispatch(fetchNewStoriesSuccess(posts))
            })
            .catch(() => dispatch(errorFetchData(true)))
    }
}

export function fetchTopStories() {
    return dispatch => {
        dispatch(errorFetchData(false));
        dispatch(loading(true));
        getTopStories()
            .then(ids => dispatch(fetchPostDetails(ids)))
            .then(posts => dispatch(fetchTopStoriesSuccess(posts)))
            .catch(() => dispatch(errorFetchData(true)))
    }
}

export function fetchTopQuestion() {
    return dispatch => {
        dispatch(errorFetchData(false));
        dispatch(loading(true));
        getTopQuestions()
            .then(ids => dispatch(fetchPostDetails(ids)))
            .then(posts => dispatch(fetchTopQuestionSuccess(posts)))
            .catch(() => dispatch(errorFetchData(true)))
    }
}

export function fetchPostDetails(ids) {
    return dispatch => {
        dispatch(errorFetchData(false));
        dispatch(loading(true));

        let arrayOfPromises = ids.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
        return Promise.all(arrayOfPromises)
            .then((response) => {
                let arr = response.map(post => post.json())
                return arr;
            })
            .then((posts) => {
                return Promise.all(posts)
                    .then(data => {
                        dispatch(loading(false));
                        return filterEmptyElem(data).map(post => {
                            return {
                                ...post,
                                time: conversionDate(post.time)
                            }
                        });
                    })
            })
            .catch(() => dispatch(errorFetchData(true)));
    }
}

export function topStoriesSetCurrentPage(page) {
    return {
        type: 'TOP_STORIES_SET_CURRENT_PAGE',
        payload: page
    }
}

export function newStoriesSetCurrentPage(page) {
    return {
        type: 'NEW_STORIES_SET_CURRENT_PAGE',
        payload: page
    }
}

export function topQuestionsSetCurrentPage(page) {
    return {
        type: 'TOP_QUESTIONS_SET_CURRENT_PAGE',
        payload: page
    }
}

function filterEmptyElem(array) {
    const filteredArray = array.filter(elem => elem != null);
    return filteredArray;
}