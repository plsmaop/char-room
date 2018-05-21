import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from '@livechat/ui-kit';
import store from './redux/store';
import './index.css';
import App from './containers/App';

ReactDOM.render(
  <MuiThemeProvider>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
