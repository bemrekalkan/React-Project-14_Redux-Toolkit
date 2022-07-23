import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsList: [],
  loading: true,
};
//? States may need to be updated based on data from async sources such as API.
//? However, in such a case, the state should be updated after the async operation is completed.
//? It should not update the state directly with the sent api request.
//? Ensuring the state is updated according to the data received upon completion of the transaction
//? An interface is used.
//? This interface is called middleware. Redux-Toolkit uses Thunk by default.
//! Thunk's purpose is to allow delayed asynchronous names to be executed before sending processed results to reducers.
//!🚩 If we are going to use async structure with redux, it is necessary to use an extra software   👉 Middleware  (thunk 👇 / saga)
//!🏴 It sends the incoming request to the API first. It gets the response from the API. Converts to a format that the reducer can understand.

const API_KEY = "5045f801ea8344abafd645c0eacdfc90";

export const getNews = createAsyncThunk(
  "news/getNews",
  //! 👉 action type name
  //! async 👇 callback func:
  async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
    try {
      const { data } = await axios(url);
      return data.articles;
    } catch (error) {
      console.log(error);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: {
    [getNews.pending]: (state, action) => {
      state.loading = true;
    },
    [getNews.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.newsList = payload;
    },
    [getNews.rejected]: (state) => {
      state.loading = false;
    },
  },
});

//! 👆 ExtraReducers 👉 responding to defined actions in other slices, especially to actions created by createAsyncThunk used to reply. 💨 It is used here to respond to the actions of slices elsewhere, if there is createAsyncThunk we have to use it!!

export const { clearNewsList } = newsSlice.actions;

export default newsSlice.reducer;
