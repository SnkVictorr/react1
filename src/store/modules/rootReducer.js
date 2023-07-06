// rootReducer tem a função de combinar todos os reducers
import { combineReducers } from 'redux';
import exampleReducer from './example/reducer';

export default combineReducers({
  // Muda o nome da chave
  example: exampleReducer,
});
