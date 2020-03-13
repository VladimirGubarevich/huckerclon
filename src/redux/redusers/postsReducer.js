const initialState = {
  isLoading: false,
  error: false,
  newStories: [],
  topQuestions: [],
  topStories: [],
  newStoriesPagination: {
    countOfPosts: 0,
    postsOnPage: 5,
    currentPage: 1,
  },
  topQuestionsPagination: {
    countOfPosts: 0,
    postsOnPage: 5,
    currentPage: 1,
  },
  topStoriesPagination: {
    countOfPosts: 0,
    postsOnPage: 5,
    currentPage: 1,
  }
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_NEW_STORIES':
      return {
        ...state,
        newStories: action.payload,
        newStoriesPagination: {
          ...state.newStoriesPagination,
          countOfPosts: action.payload.length
        }
      }
    case 'FETCH_TOP_STORIES':
      return {
        ...state,
        topStories: action.payload,
        topStoriesPagination: {
          ...state.topStoriesPagination,
          countOfPosts: action.payload.length
        }
      }
    case 'FETCH_TOP_QUESTION':
      return {
        ...state,
        topQuestions: action.payload,
        topQuestionsPagination: {
          ...state.topQuestionsPagination,
          countOfPosts: action.payload.length,
        }
      }
    case 'LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'ERROR_FETCH_DATA':
      return {
        ...state,
        error: action.payload
      }
    case 'TOP_STORIES_SET_CURRENT_PAGE':
      return {
        ...state,
        topStoriesPagination: {
          ...state.topStoriesPagination,
          currentPage: action.payload,
        }
      }
    case 'NEW_STORIES_SET_CURRENT_PAGE':
      return {
        ...state,
        newStoriesPagination: {
          ...state.newStoriesPagination,
          currentPage: action.payload,
        }
      }
    case 'TOP_QUESTIONS_SET_CURRENT_PAGE':
      return {
        ...state,
        topQuestionsPagination: {
          ...state.topQuestionsPagination,
          currentPage: action.payload,
        }
      }
    default:
      return state;
  }
}