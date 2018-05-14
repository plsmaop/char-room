import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import rootReducer from './redux/';
import './index.css';
import App from './containers/App';

/*eslint-disable */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => console.log(store.getState()));
/*eslint-disable */

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router basename="/#">
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
