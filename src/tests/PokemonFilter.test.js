import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from '../components/App';
import rootReducer from '../reducers/index';

describe('Testing PokemonFilter component', () => {
  beforeEach(() => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>,
    );
  }, 60000);
  test('expect electric type to be after load API data', async () => {
    const element1 = await screen.findByText(/electric/);
    expect(element1).toBeInTheDocument();
  }, 60000);
  test('show only two elements in the list after choosing ice in the select', async () => {
    await screen.findByText(/ice/);
    fireEvent.change(screen.getByTestId(/select/), {
      target: { value: 'ice' },
    });
    const element1 = await screen.findByText(/2 results/);
    expect(element1).toBeInTheDocument();
  }, 60000);
  test('show only 26 elements in the list after typing p in the input value in the select', async () => {
    await screen.findByText(/ice/);
    fireEvent.change(screen.getByTestId(/input/), {
      target: { value: 'p' },
    });
    const element1 = await screen.findByText(/26 results/);
    expect(element1).toBeInTheDocument();
  }, 60000);
  test('show only 13 elements in the list after typing p in the input value in the select and filtering by start of the name', async () => {
    await screen.findByText(/ice/);
    fireEvent.change(screen.getByTestId(/contains/), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByTestId(/input/), {
      target: { value: 'p' },
    });
    const element1 = await screen.findByText(/13 results/);
    expect(element1).toBeInTheDocument();
  }, 60000);
  test('show only 4 elements in the list after typing p in the input value in the select, filtering by start of the name and choose normal type', async () => {
    await screen.findByText(/ice/);
    fireEvent.change(screen.getByTestId(/select/), {
      target: { value: 'normal' },
    });
    fireEvent.change(screen.getByTestId(/contains/), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByTestId(/input/), {
      target: { value: 'p' },
    });
    const element1 = await screen.findByText(/4 results/);
    expect(element1).toBeInTheDocument();
  }, 60000);
  test('show 100 elements after choosing ice type and then click on Clear form', async () => {
    await screen.findByText(/ice/);
    fireEvent.change(screen.getByTestId(/select/), {
      target: { value: 'ice' },
    });
    fireEvent.click(screen.getByText(/Clear form/));
    const element1 = await screen.findByText(/100 results/);
    expect(element1).toBeInTheDocument();
  }, 60000);
});
