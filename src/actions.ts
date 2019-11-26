import { EReduxActionTypes, IReduxBaseAction } from './reducer';

export interface IReduxLoginAction extends IReduxBaseAction {
  type: EReduxActionTypes.LOGIN;
  email: string;
  password: string;
}

export interface IReduxLoggedInAction extends IReduxBaseAction {
  type: EReduxActionTypes.LOGGED_IN;
  jwt: string;
}

export interface IReduxLogoutAction extends IReduxBaseAction {
  type: EReduxActionTypes.LOGOUT;
}

export interface IReduxLoggedOutAction extends IReduxBaseAction {
  type: EReduxActionTypes.LOGGED_OUT;
}

export interface IReduxGetCalcAction extends IReduxBaseAction {
  type: EReduxActionTypes.GET_CALCULATION;
}

export interface IReduxCalcReadyAction extends IReduxBaseAction {
  type: EReduxActionTypes.CALCULATION_READY;
  data: [];
}

export interface IReduxChangeRowStateAction extends IReduxBaseAction {
  type: EReduxActionTypes.CHANGE_ROW_STATE;
  rowIndex: number;
}
