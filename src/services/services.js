import { conversionDate } from '../utils/conversionDate';
import { filterEmptyElem } from '../utils/filterEmptyElem';

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

export function fetchPostDetails(ids) {
    let arrayOfPromises = ids.map(id => fetch(`${BASE_URL}/item/${id}.json`));
    return Promise.all(arrayOfPromises)
        .then((response) => {
            let arr = response.map(post => post.json())
            return arr;
        })
        .then((posts) => {
            return Promise.all(posts)
                .then(data => {
                    return filterEmptyElem(data).map(post => {
                        return {
                            ...post,
                            time: conversionDate(post.time)
                        }
                    });
                })
        })
        .catch(error => console.error(error));
}