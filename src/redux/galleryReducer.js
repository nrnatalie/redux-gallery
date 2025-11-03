const initialState = {
  filter: "All",
  images: [
    { id: 1, url: "https://picsum.photos/id/1018/300/200", category: "Nature" },
    {
      id: 2,
      url: "https://picsum.photos/id/1025/300/200",
      category: "Animals",
    },
    { id: 3, url: "https://picsum.photos/id/1035/300/200", category: "Cities" },
    { id: 4, url: "https://picsum.photos/id/1040/300/200", category: "Nature" },
    { id: 5, url: "https://picsum.photos/id/1084/300/200", category: "Cities" },
    { id: 6, url: "https://picsum.photos/id/106/300/200", category: "Animals" },
  ],
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
	  default:
      return state;
  }
};

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

export default galleryReducer;
