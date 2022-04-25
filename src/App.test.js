import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/data/store';
import App from './App';
import LocaleProvider from "./providers/LocaleProvider/LocaleProvider";

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </Provider>
  );
  expect(getByText(/learn/i)).toBeInTheDocument();
});
