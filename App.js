import React from 'react';

import {enableScreens} from 'react-native-screens'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'

import { init } from './helpers/db'
import PlacesNavigator from './navigation/PlacesNavigator';
import placesReducer from './store/places-reducer';

enableScreens();

init()
  .then(() => {})
  .catch(err => {
  console.log('Initialising Database failed');
  throw new Error('Initialising Database failed')
  })

const rootReducer = combineReducers({
  places: placesReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  )
}