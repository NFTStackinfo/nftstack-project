import { createContext, useContext, useReducer } from 'react';


//#region reducer
const ADD_USER = 'ADD_USER';
const CLEAR_USER = 'CLEAR_USER';
const IS_LOGGED_IN = 'IS_LOGGED_IN';

export const UserContext = createContext(null);
export const UserDispatchContext = createContext(null);

export const userActions = {
    addUser: (payload) => ({
        type: ADD_USER,
        payload
    }),
    isLoggedIn: (payload) => ({
        type: IS_LOGGED_IN,
        payload
    }),
    clearUser: () => ({
        type: CLEAR_USER,
    }),
};

export const UserProvider = (props) => {
    const initialState = {
        user: null,
        address: '',
        isLoggedIn: false,
    };

    const reducer = (state = initialState, action: action, address) => {
        switch (action.type) {
            case ADD_USER: {
                return {
                    ...state,
                  address: action.payload,
                  // address: address
                };
            }
            case IS_LOGGED_IN: {
                return {
                    ...state,
                    isLoggedIn: !!action.payload,
                };
            }
            case CLEAR_USER: {
                return {
                    ...state,
                  isLoggedIn: false,
                };
            }
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserDispatchContext.Provider value={dispatch}>
          <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
        </UserDispatchContext.Provider>
    );
};

const useUserState = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserState must be used within a UserProvider');
    }
    return context;
}

const useUserDispatch = () => {
    const context = useContext(UserDispatchContext);
    if (context === undefined) {
        throw new Error('useUserDispatch must be used within a UserProvider');
    }
    return context;
}

export  {useUserDispatch, useUserState};
