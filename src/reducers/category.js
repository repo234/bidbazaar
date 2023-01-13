const initState = {
  categories: [],
  category: [],
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "CATEGORIES_SUCCESS":
      state = {
        ...state,
        categories: action.payload.categories,
      };
      break;
    case "CATEGORIES_FOUND":
      state = {
        ...state,
        category: action.payload.category,
      };
      break;
    case "CATEGORIES_FAILURE":
      state = {
        ...state,
        error: action.payload.categories,
      };
  }
  return state;
};
