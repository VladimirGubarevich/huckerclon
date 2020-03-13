export function filterOfPost(value) {
    return {
        type: 'FILTER_OF_POSTS',
        payload: value
    }
}

// export function titleFiltering(title) {
//     return {
//         type: 'TITLE_FILTER',
//         payload: title
//     }
// }

// export function authorFiltering(author) {
//     return {
//         type: 'AUTHOR_FILTER',
//         payload: author
//     }
// }

// export function dateFiltering(date) {
//     return {
//         type: 'DATE_FILTER',
//         payload: date
//     }
// }