import React from 'react';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

// component pode ser ou um componente/elemento do react ou uma função
export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      // Se a Rota está fechada e o usuario n está logado, então ele será redirecionado para /login, e dentro de login, state vai lembrar o caminho anterior que ele estava tentando acessar, pois quando ele fizer login ele será redirecionado pro caminho que ele estava tentando acessar
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }
  // As propriedades adicionais fornecidas em rest serão aplicadas à rota para determinar seu comportamento e renderização.
  return <Route {...rest} component={Component} />;
}

// Por padrão a rota sempre será aberta
MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
