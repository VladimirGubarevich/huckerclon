export function errorFetchData(bool) {
    return {
        type: 'ERROR_FETCH_DATA',
        payload: bool
    }
}

export function loading(bool) {
    return {
        type: 'LOADING',
        payload: bool
    }
}

export function fetchNewStories() {
    return {
        type: 'FETCH_NEW_STORIES'
    }
}

export function fetchTopStories() {
    return {
        type: 'FETCH_TOP_STORIES'
    }
}

export function fetchTopQuestion() {
    return {
        type: 'FETCH_TOP_QUESTION'
    }
}

export function fetchNewStoriesSuccess(posts) {
    return {
        type: 'FETCH_NEW_STORIES_SUCCESS',
        payload: posts
    }
}

export function fetchTopStoriesSuccess(posts) {
    return {
        type: 'FETCH_TOP_STORIES_SUCCESS',
        payload: posts
    }
}

export function fetchTopQuestionSuccess(posts) {
    return {
        type: 'FETCH_TOP_QUESTION_SUCCESS',
        payload: posts
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