import { ActionsUnion, ActionTypes } from '../actions/author-list.actions';

import { IUser } from 'src/app/interfaces/IUser';

export interface IAuthorListState {
  items: Array<IUser>;
  loading: boolean;
  error: boolean;
}

export const initialCourseListState: IAuthorListState = {
  error: false,
  items: [],
  loading: false,
};

export function authorListReducer(
  state = initialCourseListState,
  action: ActionsUnion,
) {
  switch (action.type) {
    case ActionTypes.authorListLoad: {
      return { ...state, loading: true, error: false };
    }
    case ActionTypes.authorListLoadSuccess: {
      return { ...state, loading: false, error: false, items: action.payload.items };
    }
    case ActionTypes.authorListLoadFailed: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return { ...state };
    }
  }
}
