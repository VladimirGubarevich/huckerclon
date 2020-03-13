const initialState = {
  title: '',
  author: '',
  date: ''
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'TITLE_FILTER':
      return {
        ...state,
        title: action.payload
      }
      case 'AUTHOR_FILTER':
      return {
        ...state,
        author: action.payload
      }
      case 'DATE_FILTER':
      return {
        ...state,
        date: action.payload
      }
    case 'FILTER_OF_POSTS':
      return {
        ...state,
        title: action.payload.title,
        author: action.payload.author,
        date: action.payload.date
      }
    default:
      return state;
  }
}