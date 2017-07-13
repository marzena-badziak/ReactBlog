const initialState = {
  postsCollection: [],
  postToShowId: ""
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        postsCollection: [...state.postsCollection, action.post]
      };
    case "REMOVE_POST":
      return { ...state, postsCollection: action.posts };
    case "SHOW_POST_DETAILS":
      return { ...state, postToShowId: action.postToShowId };
    case "FETCH_POSTS":
      return { ...state, postsCollection: action.getPosts };
    default:
      return state;
  }
};

export default posts;
