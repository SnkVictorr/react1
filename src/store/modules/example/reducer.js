import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCESS: {
      console.log('Sucesso');
      // O estado sempre deve ser passado pra um novo estado quando quiser modificar o estado
      const newState = { ...state };
      // Se botaoClicado for verdadeiro, ele se tornará falso, e vice-versa
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro =(');
      return state;
    }

    // Saga vai escutar
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
