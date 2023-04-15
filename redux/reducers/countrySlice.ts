import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Country, Countries } from "./types";

interface KnownError {
  errMessage: string;
}

interface CountryProps {
  // name: string;
}

interface CountryState {
  error: boolean;
  loading: boolean;
  countries: Countries | [];
  country: Country | [];
  countryBorders: string[];
  success: boolean;
  errMsg: string | undefined;
  input: string;
  region: string;
} 

const initialState: CountryState = {
  error: false,
  loading: false,
  countries: [],
  country: [],
  countryBorders: [],
  success: false,
  errMsg: "" as string | undefined,
  input: "",
  region: "",
};

export const getDefaultCountries = createAsyncThunk(
  "country/getDefaultCountries",
  async (args, { rejectWithValue }: any) => {
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

export const searchCountries = createAsyncThunk(
  "country/searchCountries",
  async ({ search }: { search: string }, { rejectWithValue }: any) => {
    try {
      let { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${search}`
      );
      const countryDetails = await data;
      return countryDetails;
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCountriesByRegion = createAsyncThunk(
  "country/getCountriesByRegion",
  async ({ region }: { region: string }, { rejectWithValue }: any) => {
    try {
      let { data } = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
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

export const getCountry = createAsyncThunk(
  "country/getCountry",
  async ({ name }: { name: string }, { rejectWithValue }: any) => {
    try {
      let { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      const country = await data;
      const borders = await data[0].borders;
      // let allBorders: string[] | undefined;

      let borderDetails = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`
      );

      let allBorders = await borderDetails.data.map(
        (border: any) => border.name.common
      );

      console.log(allBorders);
      return { country, allBorders };
      // return allBorders;
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// export const getBorderCountry = createAsyncThunk(
//   "country/getBorderCountry",
//   async (name, { rejectWithValue }: any) => {
//     try {
//       let { data } = await axios.get(
//         `https://restcountries.com/v3.1/name/${name}?fullText=true`
//       );
//       const countries = await data;
//       return countries;
//     } catch (err) {
//       const error: AxiosError<KnownError> = err as any;
//       if (!error.response) {
//         throw err;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    emptyInput: (state, { payload }) => {
      state.input = "";
    },
    searchInput: (state, { payload }) => {
      state.input = payload;
    },
    filterByRegion: (state, { payload }) => {},
  },
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
    builder.addCase(searchCountries.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(searchCountries.fulfilled, (state, action) => {
      state.loading = false;
      state.countries = action.payload;
      state.errMsg = "";
    });
    builder.addCase(searchCountries.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errMsg = action.error.message;
    });
    builder.addCase(getCountriesByRegion.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getCountriesByRegion.fulfilled, (state, action) => {
      state.loading = false;
      state.countries = action.payload;
      state.errMsg = "";
    });
    builder.addCase(getCountriesByRegion.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errMsg = action.error.message;
    });
    builder.addCase(getCountry.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.loading = false;
      state.country = action.payload.country;
      state.countryBorders = action.payload.allBorders;
      state.errMsg = "";
    });
    builder.addCase(getCountry.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errMsg = action.error.message;
    });
  },
});

export const { searchInput, filterByRegion } = countrySlice.actions;
export default countrySlice.reducer;
