import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./store";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

function renderWithRedux(component, {
  // @ts-ignore
  initialState,
  store = createStore(rootReducer, applyMiddleware(thunk)), ...renderOptions
} = {}) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

test('Top flights', () => {
  renderWithRedux(<App/>);
  const linkElement = screen.getByText(/Top flights/i);
  expect(linkElement).toBeInTheDocument();
});
