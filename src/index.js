import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './redux/store';
import './index.css';
import App from './containers/App';

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router basename="/#">
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
