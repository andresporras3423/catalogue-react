import { render, screen, fireEvent } from '@testing-library/react';
import {
  BrowserRouter as Router, Redirect,
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from '../components/App';
import rootReducer from '../reducers/index';

describe('Testing App component', () => {
  beforeEach(() => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Router>
        <Provider store={store}>
          <Redirect to="/details/4" />
          <App />
        </Provider>
      </Router>,
    );
  });
  test('Page shows pokemon abilities', async () => {
    const element1 = await screen.findByText(/blaze/);
    expect(element1).toBeInTheDocument();
  });
  test('Page shows pokemon types', async () => {
    const element1 = await screen.findByText(/fire/);
    expect(element1).toBeInTheDocument();
  });
  test('Page can redirect to the main page', async () => {
    fireEvent.click(screen.getByText(/Go back to filter page/));
    const element1 = screen.getByText(/Welcome to my Pokedex/);
    expect(element1).toBeInTheDocument();
  });
});
