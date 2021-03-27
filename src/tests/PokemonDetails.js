// import { render, screen } from '@testing-library/react';
// import {
//   BrowserRouter as Router, Route, Switch, Redirect,
// } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import App from '../components/App';
// import rootReducer from '../reducers/index';

// describe('Testing App component', () => {
//   beforeEach(() => {
//     const store = createStore(rootReducer, applyMiddleware(thunk));
//     render(
//       <Provider store={store}>
//         <Redirect to="/details/10" />
//         <App />
//       </Provider>,
//     );
//   });
//   test('The page shows abilities from the pokemon', async () => {
//     const element1 = await screen.findByText(/shed/);
//     expect(element1).toBeInTheDocument();
//   });
// });
