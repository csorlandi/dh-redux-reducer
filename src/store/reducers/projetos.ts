type Action = {
  type: string;
  payload?: any;
}

type Projeto = {
  id: string;
  name: string;
  codador: string;
}

const initialState: Projeto[] = [];

export const projetos = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'ADICIONAR_PROJETO':
      return {
        ...state,
        projetos: [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            codador: action.payload.codador
          }
        ],
      };
    case 'REMOVER_PROJETO':
      return {
        ...state,
        projetos: state.filter(projeto => projeto.id === action.payload.id),
      };
    default:
      return state;
  }
}