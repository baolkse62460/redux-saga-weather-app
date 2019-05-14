import React from 'react';
import './App.css';
import Weather from './containers/weather';
import configureStore from './store';
import { Provider } from 'react-redux';

const { store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Weather />
      </div>
    </Provider>

  );
}

export default App;
