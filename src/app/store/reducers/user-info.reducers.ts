import { ActionsUnion, ActionTypes } from '../actions/user-info.actions';

export interface IAuthState {
  id?: string;
  userName?: string;
  firstName?: string;
  isAuth: boolean;
  lastName?: string;
  loading: boolean;
  error: boolean;
}

export const initialAuthState: IAuthState = {
  isAuth: false,
  loading: false,
  error: false,
}

export function userInfoReducer(
  state = initialAuthState,
  action: ActionsUnion
) {
  switch(action.type) {
    case ActionTypes.login: {
      return state;
    }
    case ActionTypes.loginSuccess: {
      return state;
    }
    case ActionTypes.loginFailed: {
      return state;
    }
  }
}
