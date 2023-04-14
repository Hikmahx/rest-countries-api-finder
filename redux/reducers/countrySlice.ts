import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Country, Countries } from "./types";

interface KnownError {
  errMessage: string;
}

interface CountryProps {}

interface CountryState {
  error: boolean;
  loading: boolean;
  countries: Countries | [];
  country: Country | [];
  success: boolean;
  errMsg: string | undefined;
}

const initialState: CountryState = {
  error: false,
  loading: false,
  countries: [],
  country: [],
  success: false,
  errMsg: "" as string | undefined,
};


export const getDefaultCountries = createAsyncThunk(
  "country/getDefaultCountries",
  async ( args, { rejectWithValue }: any) => {
    try {
      let { data } = await axios.get(
        "https://restcountries.com/v3.1/alpha?codes=usa,afg,ala,br,is,alg,alb,de"
      );
      const countries = await data;
      return countries;
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDefaultCountries.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getDefaultCountries.fulfilled, (state, action) => {
      state.loading = false;
      state.countries = action.payload;
      state.errMsg = "";
    });
    builder.addCase(getDefaultCountries.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errMsg = action.error.message;
    });
  },
});

export const {  } = countrySlice.actions;
export default countrySlice.reducer;