import { Dispatch, PropsWithChildren, createContext, useContext, useReducer } from "react";
import { ModalsAction, ModalsState } from "./types";

const ModalsContext = createContext<ModalsState | null>(null);
const ModalsDispatchContext = createContext<Dispatch<ModalsAction> | null>(null);

export function useModals() {
  return useContext(ModalsContext) as ModalsState;
}

export function useModalsDispatch() {
  return useContext(ModalsDispatchContext) as Dispatch<ModalsAction>;
}

export function ModalsProvider({ children }: PropsWithChildren) {
  const [modals, dispatch] = useReducer(modalReducer, initialState);
  return (
    <ModalsContext.Provider value={modals}>
      <ModalsDispatchContext.Provider value={dispatch}>{children}</ModalsDispatchContext.Provider>
    </ModalsContext.Provider>
  );
}

const initialState: ModalsState = {
  ding: {
    isOpen: false,
  },
  eve: {
    isOpen: false,
  },
  mcm: {
    isOpen: false,
  },
  movier: {
    isOpen: false,
  },
  chichat: {
    isOpen: false,
  },
  qtalk: {
    isOpen: false,
  },
};

function modalReducer(state: ModalsState, action: ModalsAction): ModalsState {
  const key = action.payload;
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        [key]: {
          ...state[key],
          isOpen: true,
        },
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        [key]: {
          ...state[key],
          isOpen: false,
        },
      };
    default:
      return state;
  }
}
