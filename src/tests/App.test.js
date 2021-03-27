import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
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
          <App />
        </Provider>
      </Router>,
    );
  });
  test('Check out title is loaded', () => {
    const element = screen.getByText(/My PokeList/);
    expect(element).toBeInTheDocument();
  });
  test('Check out loading message appears', () => {
    const element = screen.getByText(/please wait, data loading/);
    expect(element).toBeInTheDocument();
  });
  test('Check out tittle in inner component appear', () => {
    const element = screen.getByText(/Welcome to my Pokedex/);
    expect(element).toBeInTheDocument();
  });
});
