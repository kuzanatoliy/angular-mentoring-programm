import { ActionsUnion, ActionTypes } from '../actions/user-info.actions';

export interface IUserInfoState {
  user: {
  id?: string;
    userName?: string;
    firstName?: string;
    lastName?: string;
  }
  loading: boolean;
  error: boolean;
}

export const initialUserInfoState: IUserInfoState = {
  user: {},
  loading: false,
  error: false,
}

export function userInfoReducer(
  state = initialUserInfoState,
  action: ActionsUnion
) {
  console.log(state);
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
    case ActionTypes.logout: {
      return { ...state, loading: true, error: false };
    }
    case ActionTypes.logoutSuccess: {
      return { ...initialUserInfoState };
    }
    case ActionTypes.logoutFailed: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return { ...state };
    }
  }
}
