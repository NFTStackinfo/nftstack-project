import { createContext, useContext, useReducer } from 'react';

//#region reducer
const CREATE_CONTRACT = 'CREATE_CONTRACT';
const CLEAR_CONTRACT = 'CLEAR_USER';

export const ContractContext = createContext(null);
export const ContractDispatchContext = createContext(null);

export const contractActions = {
  createContract: (payload) => ({
    type: CREATE_CONTRACT,
    payload
  }),
  clearContract: () => ({
    type: CLEAR_CONTRACT,
  }),
};

export const ContractProvider = (props) => {
  const initialState = {
    contract: {}
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_CONTRACT: {
        return {
          ...state,
          contract: action.payload,
        };
      }
      case CLEAR_CONTRACT: {
        return {
          ...state,
          contract: {}
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContractDispatchContext.Provider value={dispatch}>
      <ContractContext.Provider value={state}>{props.children}</ContractContext.Provider>
    </ContractDispatchContext.Provider>
  );
};

const useContractState = () => {
  const context = useContext(ContractContext);
  if (context === undefined) {
    throw new Error('useContractUserState must be used within a ContractProvider');
  }
  return context;
}

const useContractDispatch = () => {
  const context = useContext(ContractDispatchContext);
  if (context === undefined) {
    throw new Error('useContractUserDispatch must be used within a ContractProvider');
  }
  return context;
}

export  {useContractDispatch, useContractState};
