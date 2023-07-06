import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
// Todo componente do React Começa com letra maiuscula
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/header';
import Routes from './routes';
import history from './services/history';

function App() {
  // Retorna um componente react
  return (
    // As rotas devem ser envolvidas dentro de BrowserRouter ou um Router
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          {/* autoClose define a quantidade de segundos em que a mensagem aparecerá */}
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
