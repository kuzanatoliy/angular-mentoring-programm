import { ActionsUnion, ActionTypes } from '../actions/user-info.actions';

export interface IUserInfoState {
  user: {
    id?: string;
    userName?: string;
    firstName?: string;
    lastName?: string;
  };
  loading: boolean;
  error: boolean;
}

export const initialUserInfoState: IUserInfoState = {
  error: false,
  loading: false,
  user: {},
};

export function userInfoReducer(
  state = initialUserInfoState,
  action: ActionsUnion,
) {
  switch (action.type) {
    case ActionTypes.login: {
      return { ...state, loading: true, error: false };
    }
    case ActionTypes.loginSuccess: {
      return { ...state, loading: false, user: action.payload.user };
    }
    case ActionTypes.loginFailed: {
      return { ...state, loading: false, error: true };
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
    case ActionTypes.checkUserInfo: {
      return { ...state, loading: true, error: false };
    }
    case ActionTypes.checkUserInfoSuccess: {
      return { ...state, loading: false, user: action.payload.user };
    }
    case ActionTypes.checkUserInfoFailed: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return { ...state };
    }
  }
}
