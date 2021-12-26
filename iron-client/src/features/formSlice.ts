import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  age: number;
  appRating: number;
  categories: string[];
  isLoading: boolean;
  isError: string;
  isValid: boolean;
}

const initialState: FormState = {
  age: 0,
  appRating: 3,
  categories: [],
  isLoading: false,
  isError: "",
  isValid: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setAppRating: (state, action: PayloadAction<number>) => {
      state.appRating = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action: PayloadAction<string>) => {
      state.isError = action.payload;
    },
    setIsValid: (state, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
    resetForm: (state) => {
      state = initialState;
    },
  },
});

export const {
  setAge,
  setAppRating,
  setCategories,
  setIsError,
  setIsLoading,
  setIsValid,
  resetForm,
} = formSlice.actions;
export default formSlice.reducer;
