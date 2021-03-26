import { render, screen } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from '../components/App';
import rootReducer from '../reducers/index';

describe('Testting my App component', () => {
  beforeEach(() => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
  test('Check out first pokemon of the list is found', async () => {
    const element = await screen.findByText(/bulbasaur/);
    expect(element).toBeInTheDocument();
  });
  test('Check out last pokemon of the list is found', async () => {
    const element1 = await screen.findByText(/voltorb/);
    expect(element1).toBeInTheDocument();
  });
  test('Check out the components shows that api search found 100 results', async () => {
    const element1 = await screen.findByText(/100 results/);
    expect(element1).toBeInTheDocument();
  });
});
