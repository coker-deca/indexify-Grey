import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type AuthState = {
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { token } }: PayloadAction<{ token: string }>
    ) => {
      state.token = token;
    },
    clearResults(state) {
      // Note that this should be left intentionally empty.
      // Clearing redux state and localForage happens in rootReducer.ts.
      state = {token: null};
    },
  },
});

export const { setCredentials, clearResults } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.token;
