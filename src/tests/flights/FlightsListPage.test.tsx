import React from 'react';
import {cleanup, render, fireEvent, screen} from '@testing-library/react';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "../../store";
import thunk from "redux-thunk";
import FlightListPage from '../../pages/FlightsListPage';
import flights from './flights';
import FlightList from '../../components/flights/FlightList';

const mockResponse = flights;
const mockFetchDefault = () => {
    jest.spyOn(global, 'fetch')
    // @ts-ignore default: getAllFlights
    .mockResolvedValue({ok: true, json: jest.fn().mockResolvedValue(mockResponse)})
    
};
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

test('Components mounted', () => {
    const {getByTestId} = renderWithRedux(<FlightListPage/>);
    const testId = screen.getByTestId('testingFlightListPage');
    expect(testId).toBeTruthy();
});

test('getFlightsList', async () => {
    mockFetchDefault();
    renderWithRedux(<FlightList/>);
    const origins = await screen.findAllByText(/Termal/);
});