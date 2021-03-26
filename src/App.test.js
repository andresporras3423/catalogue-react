import { render, screen } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers/index';

describe('Testting my App component', () => {
  test('renders learn react link', () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const element = screen.getByText(/My PokeList/);
    expect(element).toBeInTheDocument();
  });
});
