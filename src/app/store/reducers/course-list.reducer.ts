import { ActionsUnion, ActionTypes } from '../actions/course-list.actions';

import { ICourse } from 'src/app/interfaces/ICourse';

export interface ICourseListState {
  items: Array<ICourse>
  loading: boolean;
  error: boolean;
}

export const initialCourseListState: ICourseListState = {
  items: [],
  loading: false,
  error: false,
}

export function courseListReducer(
  state = initialCourseListState,
  action: ActionsUnion
) {
  switch(action.type) {
    case ActionTypes.courseListLoadingStart: {
      return { ...state, loading: true, error: false };
    }
    case ActionTypes.courseListLoadingSuccess: {
      return { ...state, loading: false, error: false, items: action.payload.items };
    }
    case ActionTypes.courseListLoadingFailed: {
      return { ...state, loading: false, error: true };
    }
    case ActionTypes.courseListLoadMore: {
      return { ...state, loading: true, error: false };
    }
    case ActionTypes.courseListLoadMoreSuccess: {
      const items = state.items.concat(action.payload.items)

      return { ...state, loading: false, error: false, items };
    }
    case ActionTypes.courseListLoadMoreFailed: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
}
