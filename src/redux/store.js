import { createStore } from "redux";
import galleryReducer from "./galleryReducer";

 const store = createStore(
  galleryReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
