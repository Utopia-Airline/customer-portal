import React from 'react';
import {cleanup, render, fireEvent, screen} from '@testing-library/react';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "../../store";
import thunk from "redux-thunk";
import BookingPage from "../../pages/BookingPage";
import bookings from "./bookings";


const mockResponse = bookings;
beforeEach(() => {
  jest.spyOn(global, 'fetch')
    // @ts-ignore default: getAllBookings
    .mockResolvedValue({ok: true, json: jest.fn().mockResolvedValue(mockResponse)})
    // @ts-ignore first: getAllBookings
    .mockResolvedValueOnce({ok: true, json: jest.fn().mockResolvedValue(mockResponse)})
    // @ts-ignore second: getBookingById
    .mockResolvedValueOnce({ok: true, json: jest.fn().mockResolvedValue(mockResponse.content[0])})
    // @ts-ignore third: deleteBookingById
    .mockResolvedValueOnce({ok: true, status: 204, json: jest.fn().mockResolvedValue(mockResponse.content[0])});
});
afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

function renderWithRedux(component, {
  // @ts-ignore
  initialState,
  store = createStore(rootReducer, applyMiddleware(thunk)), ...renderOptions
} = {}) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

test('components mounted', () => {
  const {getByTestId} = renderWithRedux(<BookingPage/>);
  const tab1 = screen.getByText("Active Bookings");
  const tab2 = screen.getByText("Booking History");
  expect(tab1).toBeInTheDocument();
  expect(tab2).toBeInTheDocument();
});

test('get all bookings', async () => {
  renderWithRedux(<BookingPage/>);
  const origins = await screen.findAllByText(/turbat/i);
  expect(origins.length).toEqual(13);
  expect(origins[0]).toBeInTheDocument();
  const destinations = await screen.findAllByText(/Zhaotong/i);
  expect(destinations.length).toEqual(13);
  expect(destinations[0]).toBeInTheDocument();
});

test('select booking by id', async () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  renderWithRedux(<BookingPage/>);
  const origins = await screen.findAllByText(/turbat/i);
  expect(origins.length).toEqual(13);
  expect(origins[0]).toBeInTheDocument();
  fireEvent.click(origins[0]);
  const el1 = await screen.findByText(/FLIGHTS INFORMATION/i);
  const el2 = await screen.findByText(/Turbat International Airport/i);
  const el3 = screen.getByTestId('test-f-0');
  expect(el1).toBeInTheDocument();
  expect(el2).toBeInTheDocument();
  expect(el3).toHaveTextContent('Turbat, Pakistan (TUK)');
});



