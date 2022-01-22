import { combineReducers } from 'redux';

import weather from './weather/weather.reducer';

const rootReducer = combineReducers({
  weather,
});

export default rootReducer;

// export interface ReduxState {}

export type RootState = ReturnType<typeof rootReducer>;
