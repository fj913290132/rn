import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';
interface CounterState {
  value: number;
}

export const loginActions = createAsyncThunk<void, number, {state: RootState}>(
  'login',
  async data => {
    console.log('loginActions', data);
  },
);

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
