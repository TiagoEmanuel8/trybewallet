import { BOTAO_EDITAR_SALVAR } from './actionTypes';

const editMode = (bool, expense) => ({
  type: BOTAO_EDITAR_SALVAR,
  bool,
  expense,
});

export default editMode;
