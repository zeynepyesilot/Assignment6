export const initialState = {
  posts: [],      // verileri burada tutucaz
  loading: false, 
  error: null     
};

export const postsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
        error: null,
        posts: [] // yeni istek başladığında listeyi temizlemek için
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload, // gelen veriyi kaydet
        error: null
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload, // hatayı kaydet
        posts: []
      };
    default:
      return state;
  }
};