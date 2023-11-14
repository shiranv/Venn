const initialState = {
  moviesList: [],
  title: "",
  page: 0,
  total_pages: 0,
};

const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.value,
      };
    case "UPDATE_MOVIES_LIST":
      return {
        ...state,
        moviesList: action.value.data,
        total_pages: action.value.total_pages,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.value,
      };
    case "SORT_BY_YEAR":
      return {
        ...state,
        moviesList: [
          ...state.moviesList.slice().sort((a: any, b: any) => a.Year - b.Year),
        ],
      };
    case "SORT_BY_NAME":
      return {
        ...state,
        moviesList: [
          ...state.moviesList
            .slice()
            .sort((a:any, b:any) => a.Title.localeCompare(b.Title)),
        ],
      };
    default:
      return state;
  }
};

export default moviesReducer;
