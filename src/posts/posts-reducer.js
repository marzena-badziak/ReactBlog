const initialState = {
  postsCollection: [
    { title: "jeden", timestamp: 1, content: "fdjojo" },
    { title: "dwa", timestamp: 2, content: "blablabla" },
    { title: "trzy", timestamp: 3, content: "fjpsdfd" },
    { title: "cztery", timestamp: 4, content: "blablabla" },
    { title: "title5", timestamp: 5, content: "dfcpxj" },
    { title: "title6", timestamp: 6, content: "blablabla" },
    { title: "siedem", timestamp: 7, content: "blablabla" }
  ],
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
    default:
      return state;
  }
};

export default posts;
