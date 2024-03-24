import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../history";

const TOKEN = "token";

export const me = createAsyncThunk("/me", async (_, { getState }) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/login", {
      headers: {
        authorization: token,
      },
    });
    return res.data;
  }
});

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async ({ username, password, method }, { dispatch }) => {
    const res = await axios.post(`/${method}`, { username, password });
    window.localStorage.setItem(TOKEN, res.data.token);
    await dispatch(me());
  }
);

export const logout = () => async (dispatch) => {
  window.localStorage.removeItem(TOKEN);
  history.push("/login");
  dispatch(setAuth({}));
};

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    setAuth: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(me.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
