import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { token },
      }: PayloadAction<{ token: string }>
    ) => {
      state.token = token;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;
