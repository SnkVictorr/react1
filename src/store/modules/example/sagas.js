// Configurações do sagas
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  // promise será resolvido em 2 segundos
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

// Função geradora
function* exampleRequest() {
  // Se a requisição for resolvida então disparará a acão de sucesso, caso contrario disparará a ação de erro
  try {
    // yield = colheita
    yield call(requisicao);
    yield put(actions.clicaBotaoSucess());
  } catch {
    toast.error('Deu erro');
    yield put(actions.clicaBotaoFailure());
  }
}

// O all é um efeito do Redux Saga que permite combinar vários efeitos em um único efeito
export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
