import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './provider/ThemeProvider';
import { store } from './store/store';
import './styles/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
);

