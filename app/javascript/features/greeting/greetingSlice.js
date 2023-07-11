import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRandomGreeting } from './greetingApi';

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await getRandomGreeting();
    return response.data.text;
  }
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    randomGreeting: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.randomGreeting = action.payload;
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;