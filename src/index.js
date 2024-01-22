import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContextProvider } from 'AppContextProvider';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider />
);
