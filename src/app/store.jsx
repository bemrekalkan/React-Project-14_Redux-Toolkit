import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
  //! A DevTools extension 🔑 adds functionality to the Chrome DevTools. It can add new UI panels and sidebars, interact with the inspected page, get information about network requests, and more. DevTools extensions have access to an additional set of DevTools-specific extension APIs: devtools
  devTools: process.env.NODE_ENV !== "production",
  //? use devtool in phases (start, build, test, eject) OTHER THAN 👆 production
});

export default store;
