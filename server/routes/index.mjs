import { setAuthRoutes } from './auth';
import { setAuthorsRoutes } from './authors';
import { setCoursesRoutes } from './courses';

const setters = [
  setAuthRoutes,
  setAuthorsRoutes,
  setCoursesRoutes,
];

export function setRoutes(router) {
  setters.forEach((item) => item(router));
}
