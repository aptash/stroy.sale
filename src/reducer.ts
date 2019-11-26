import {
  IReduxLoginAction,
  IReduxLoggedInAction,
  IReduxLogoutAction,
  IReduxLoggedOutAction,
  IReduxGetCalcAction,
  IReduxCalcReadyAction,
  IReduxChangeRowStateAction,
} from './actions';

export enum EReduxActionTypes {
  LOGIN = 'LOGIN',
  LOGGED_IN = 'LOGGED_IN',
  LOGOUT = 'LOGOUT',
  LOGGED_OUT = 'LOGGED_OUT',
  GET_CALCULATION = 'GET_CALCULATION',
  CALCULATION_READY = 'CALCULATION_READY',
  CHANGE_ROW_STATE = 'CHANGE_ROW_STATE',
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}

interface rowData {
  count: string;
  img: string;
  name: string;
  price: string;
  total: string;
  isRowActive: boolean;
}

export interface IReduxState {
  isAuthenticated: boolean;
  jwt: string;
  data: rowData[];
}

const initialState: IReduxState = {
  isAuthenticated: false,
  jwt: '',
  data: [],
};

type TAuthReducerActions =
  | IReduxLoginAction
  | IReduxLoggedInAction
  | IReduxLogoutAction
  | IReduxLoggedOutAction
  | IReduxGetCalcAction
  | IReduxChangeRowStateAction
  | IReduxCalcReadyAction;

export default function(
  state: IReduxState = initialState,
  action: TAuthReducerActions
): IReduxState {
  switch (action.type) {
    case EReduxActionTypes.LOGGED_IN:
      return {
        ...state,
        isAuthenticated: true,
        jwt: action.jwt,
      };
    case EReduxActionTypes.LOGGED_OUT:
      return {
        ...state,
        isAuthenticated: false,
        jwt: '',
        data: [],
      };
    case EReduxActionTypes.CALCULATION_READY:
      return {
        ...state,
        data: action.data,
      };
    case EReduxActionTypes.CHANGE_ROW_STATE:
      return {
        ...state,
        data: state.data.map((e, index) => {
          if (index === action.rowIndex) {
            return {
              ...e,
              isRowActive: !e.isRowActive,
            };
          }
          return e;
        }),
      };
    default:
      return state;
  }
}
