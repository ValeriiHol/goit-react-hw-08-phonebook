import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);



// npm install @reduxjs/toolkit
// npm install react-redux
// npm install @reduxjs/toolkit react-redux  ???
// npm i redux-persist
// npm i axios
// "react-router-dom": "^6.11.2",  в пэкэджджейсоне по совету в слаке или просто ввел правильно данные
