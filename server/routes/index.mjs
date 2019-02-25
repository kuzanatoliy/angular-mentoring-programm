import { setAuthRoutes } from './auth';
import { setCoursesRoutes } from './courses';

const setters = [
  setAuthRoutes,
  setCoursesRoutes,
];

export function setRoutes(router) {
  setters.forEach((item) => item(router));
}
