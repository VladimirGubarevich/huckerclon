const initialState = {
  title: '',
  author: '',
  date: ''
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
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