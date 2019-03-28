import { ActionsUnion, ActionTypes } from '../actions/course.actions';

import { ICourse } from 'src/app/interfaces/ICourse';
import { Course } from 'src/app/models/Course';

export interface ICourseState {
  course: ICourse;
  loading: boolean;
  error: boolean;
}

export const initialCourseState: ICourseState = {
  course: Course.createCourse({
    authors: [],
    creationDate: new Date(),
    description: '',
    duration: 0,
    title: '',
    topRated: false,
  }),
  error: false,
  loading: false,
};

export function courseReducer(
  state = initialCourseState,
  action: ActionsUnion,
) {
  switch (action.type) {
    case ActionTypes.courseInit: {
      return { ...state, loading: false, error: false, course: initialCourseState.course };
    }
    case ActionTypes.courseLoad: {
      return { ...state, loading: true, error: false, course: initialCourseState.course };
    }
    case ActionTypes.courseLoadSuccess: {
      return { ...state, loading: false, error: false, course: action.payload.course };
    }
    case ActionTypes.courseLoadFailed: {
      return { ...state, loading: false, error: true };
    }
    case ActionTypes.courseCreate: {
      return { ...state, loading: true, error: false };
    }
    case ActionTypes.courseCreateSuccess: {
      return { ...state, loading: false, error: false, course: action.payload.course };
    }
    case ActionTypes.courseCreateFailed: {
      return { ...state, loading: false, error: true };
    }
    case ActionTypes.courseUpdate: {
      return { ...state, loading: true, error: false };
    }
    case ActionTypes.courseUpdateSuccess: {
      return { ...state, loading: false, error: false, course: action.payload.course };
    }
    case ActionTypes.courseUpdateFailed: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return { ...state };
    }
  }
}
