type OPEN_MODAL = "OPEN_MODAL";
type CLOSE_MODAL = "CLOSE_MODAL";

type ModalsActionType = OPEN_MODAL | CLOSE_MODAL;

interface ModalState {
  isOpen: boolean;
}

export interface ModalsState {
  ding: ModalState;
  eve: ModalState;
  mcm: ModalState;
  movier: ModalState;
  chichat: ModalState;
  qtalk: ModalState;
}

export type ModalId = keyof ModalsState;

export interface ModalsAction {
  type: ModalsActionType;
  payload: ModalId;
}
