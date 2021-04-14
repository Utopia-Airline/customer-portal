import React from 'react';
import {cleanup, render, fireEvent, screen} from '@testing-library/react';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "../../store";
import thunk from "redux-thunk";
import BookingPage from "../../pages/BookingPage";
import bookings from "./bookings";


const mockResponse = bookings;
const mockFetchDefault = () => {
  jest.spyOn(global, 'fetch')
    // @ts-ignore default: getAllBookings
    .mockResolvedValue({ok: true, json: jest.fn().mockResolvedValue(mockResponse)})
    // @ts-ignore first: getAllBookings
    .mockResolvedValueOnce({ok: true, json: jest.fn().mockResolvedValue(mockResponse)})
    // @ts-ignore second: getBookingById
    .mockResolvedValueOnce({ok: true, json: jest.fn().mockResolvedValue(mockResponse.content[2])})
    // @ts-ignore third: deleteBookingById
    .mockResolvedValueOnce({ok: true, status: 204});
}
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
  mockFetchDefault();
  renderWithRedux(<BookingPage/>);
  const origins = await screen.findAllByText(/turbat/i);
  expect(origins.length).toEqual(13);
  expect(origins[0]).toBeInTheDocument();
  const destinations = await screen.findAllByText(/Zhaotong/i);
  expect(destinations.length).toEqual(13);
  expect(destinations[0]).toBeInTheDocument();
});
test('get all bookings failure', async () => {
  (() => {
    jest.spyOn(global, 'fetch')
      // @ts-ignore default: getAllBookings
      .mockResolvedValue({ok: false, json: null})
  })();
  renderWithRedux(<BookingPage/>);
  await expect(screen.findByText('turbat')).rejects.toThrow();
});

test('select booking by id', async () => {
  mockFetchDefault();
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  renderWithRedux(<BookingPage/>);
  const origins = await screen.findAllByText(/turbat/i);
  expect(origins.length).toEqual(13);
  expect(origins[2]).toBeInTheDocument();
  fireEvent.click(origins[0]);
  const el1 = await screen.findByText(/FLIGHTS INFORMATION/i);
  const el2 = await screen.findByText(/Turbat International Airport/i);
  const el3 = screen.getByTestId('test-f-0');
  expect(el1).toBeInTheDocument();
  expect(el2).toBeInTheDocument();
  expect(el3).toHaveTextContent('Turbate, Pakistan (TUK)');
});

test('select booking by id failure', async () => {
  (() => {
    jest.spyOn(global, 'fetch')
      // @ts-ignore first: getAllBookings
      .mockResolvedValueOnce({ok: false, json: null})
      // @ts-ignore second: getBookingById
      .mockResolvedValueOnce({ok: false, json: null})
  })();
  renderWithRedux(<BookingPage/>);
  await expect(screen.findByText('turbat')).rejects.toThrow();
  await expect(screen.findByTestId('test-f-0')).rejects.toThrow();
});

test('delete booking by id', async () => {
  mockFetchDefault();
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  renderWithRedux(<BookingPage/>);
  let origins = await screen.findAllByText(/Zhaotong/i);
  expect(origins.length).toEqual(13);
  fireEvent.click(origins[2]); // 1131
  let totalDiv = await screen.findByText(/Your total Bookings: 13/i);
  expect(totalDiv).toBeInTheDocument();
  const flightDiv = await screen.findByText(/FLIGHTS INFORMATION/i);
  expect(flightDiv).toBeInTheDocument();
  let depDiv = await screen.findByTestId('test-f-0');
  expect(depDiv).toHaveTextContent('Turbate, Pakistan (TUK)');

  const deleteButton = await screen.findByText(/CANCEL BOOKING/i);

  fireEvent.click(deleteButton);
  // deleted the booking from the list
  await expect(screen.findByTestId('test-f-0')).rejects.toThrow();
  totalDiv = await screen.findByText(/Your total Bookings: 12/i);
  expect(totalDiv).toBeInTheDocument();
});

test('delete booking by id fails', async () => {
  (() => {
    jest.spyOn(global, 'fetch')
      // @ts-ignore first: getAllBookings
      .mockResolvedValueOnce({ok: true, json: jest.fn().mockResolvedValue(mockResponse)})
      // @ts-ignore second: getBookingById
      .mockResolvedValueOnce({ok: true, json: jest.fn().mockResolvedValue(mockResponse.content[2])})
      // @ts-ignore third: deleteBookingById
      .mockResolvedValueOnce({ok: false, status: 400});
  })();
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  renderWithRedux(<BookingPage/>);
  let origins = await screen.findAllByText(/Zhaotong/i);
  expect(origins.length).toEqual(13);
  fireEvent.click(origins[2]); // 1131
  let totalDiv = await screen.findByText(/Your total Bookings: 13/i);
  expect(totalDiv).toBeInTheDocument();
  const flightDiv = await screen.findByText(/FLIGHTS INFORMATION/i);
  expect(flightDiv).toBeInTheDocument();
  let depDiv = await screen.findByTestId('test-f-0');
  expect(depDiv).toHaveTextContent('Turbate, Pakistan (TUK)');

  const deleteButton = await screen.findByText(/CANCEL BOOKING/i);

  fireEvent.click(deleteButton);
  // deleted the booking from the list
  depDiv = await screen.findByTestId('test-f-0');
  expect(depDiv).toHaveTextContent('Turbate, Pakistan (TUK)');
  totalDiv = await screen.findByText(/Your total Bookings: 13/i);
  expect(totalDiv).toBeInTheDocument();
});


