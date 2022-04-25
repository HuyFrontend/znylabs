import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import weatherAPI from "../../api";

const sliceName = "weather";

export const fetchCurrentWeather = createAsyncThunk(
    `${sliceName}/fetchCurrentWeather`,
    ({ query }) => weatherAPI.fetchCurrentWeather({ query })
);

export const fetchWeatherForecast = createAsyncThunk(
    `${sliceName}/fetchWeatherForecast`,
    ({ lat, lon }) => weatherAPI.fetchWeatherForecast({ lat, lon })
);

export const weatherSlice = createSlice({
    name: sliceName,
    initialState: {
        current: null,
        loading: false,
        error: null,
        forecast: null
    },
    reducers: {
    },
    extraReducers: {
        [fetchCurrentWeather.pending]: (state, { payload, meta }) => {
            state.loading = true;
        },
        [fetchCurrentWeather.fulfilled]: (state, { payload, meta }) => {
            state.loading = false;
            state.current = payload.data;
            state.error = null;
        },
        [fetchCurrentWeather.rejected]: (state, { error, meta }) => {
            state.loading = false;
            state.error = error;
            state.current = null;
        },

        [fetchWeatherForecast.pending]: (state, { payload, meta }) => {
            state.loading = true;
        },
        [fetchWeatherForecast.fulfilled]: (state, { payload, meta }) => {
            state.loading = false;
            state.forecast = payload.data;
            state.error = null;
        },
        [fetchWeatherForecast.rejected]: (state, { error, meta }) => {
            state.loading = false;
            state.error = error;
            state.forecast = null;
        },
    },
});

const loading = (state) => state[sliceName].loading;
const currentWeather = (state) => state[sliceName].current;
const error = (state) => state[sliceName].error;
const forecastWeather = (state) => state[sliceName].forecast;
export { loading, currentWeather, error, forecastWeather }

// export const { getWeatherDetails } = weatherSlice.actions;

export default weatherSlice.reducer;
