import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserType {
  username: string | undefined;
  token: string | undefined;
}

interface AuthState {
  isAuthenticated: boolean;
  user: UserType | null;
}

const userObj = {
  username: "",
  token: "",
};

const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: userObj,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
