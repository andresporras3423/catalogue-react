import { render, screen, fireEvent } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from '../components/App';
import rootReducer from '../reducers/index';

describe('Testing PokemonRow component', () => {
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
  test('direct to the page with pikachu details where click over pikachu link', async () => {
    fireEvent.click(await screen.findByText(/pikachu/));
    const element1 = await screen.findByText(/static/);
    expect(element1).toBeInTheDocument();
  }, 60000);
  test('link to redirect back appears when change to pokemon page details', async () => {
    fireEvent.click(await screen.findByText(/pikachu/));
    const element1 = screen.getByText(/Go back to filter page/);
    expect(element1).toBeInTheDocument();
  }, 60000);
  test('link to redirect back is working', async () => {
    fireEvent.click(await screen.findByText(/pikachu/));
    fireEvent.click(screen.getByText(/Go back to filter page/));
    const element1 = screen.getByText(/Welcome to my Pokedex/);
    expect(element1).toBeInTheDocument();
  }, 60000);
});
