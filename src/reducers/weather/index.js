export const WEATHER_FETCH_BEGIN = 'weather/FETCH_BEGIN';
export const WEATHER_FETCH_SUCCESS = 'weather/FETCH_SUCCESS';
export const WEATHER_FETCH_FAILED = 'weather/FETCH_FAILED';

export const startFetchWeather = () => ({
  type: WEATHER_FETCH_BEGIN,
});

export const fetchWeatherSuccess = (items) => ({
  type: WEATHER_FETCH_SUCCESS,
  payload: {
    items,
  }
});

export const fetchWeatherFailed = (errorMessage) => ({
  type: WEATHER_FETCH_FAILED,
  payload: {
    errorMessage,
  }
});

const initialState = {
  items: [],
  isLoading: true,
  errorMessage: null,
}

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case WEATHER_FETCH_BEGIN: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case WEATHER_FETCH_SUCCESS: {
      const { items } = action.payload;
      return {
        ...state,
        items,
        isLoading: false,
      }
    }
    case WEATHER_FETCH_FAILED: {
      const { errorMessage } = action.payload;
      return {
        ...state,
        errorMessage,
        isLoading: false,
      }
    }
    default: return state;
  }
}

export const getWeather = (state) => {
  const { weather } = state;
  return weather.items;
}

export const getIsLoading = (state) => {
  const { weather } = state;
  return weather.isLoading;
}

export const getErrorMessage = (state) => {
  const { weather } = state;
  return weather.errorMessage;
}

export default weatherReducer;