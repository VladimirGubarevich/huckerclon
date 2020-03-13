export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
export const NEW_STORIES = '/newstories.json';
export const TOP_STORIES = '/topstories.json';
export const TOP_QUESTION = '/askstories.json';

export function getNewStories() {
    return fetch(`${BASE_URL}${NEW_STORIES}`)
        .then(response => response.json());
}

export function getTopStories() {
    return fetch(`${BASE_URL}${TOP_STORIES}`)
        .then(response => response.json());
}

export function getTopQuestions() {
    return fetch(`${BASE_URL}${TOP_QUESTION}`)
        .then(response => response.json());
}

