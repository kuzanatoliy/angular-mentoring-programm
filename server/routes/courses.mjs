import { COURSE_LIST } from '../utils/courses';

import { authTreatment } from '../middlewares/authMiddlewares';

export function setCoursesRoutes(router) {
  router.route('/courses')
    .get(authTreatment, getCourseListTreatment)
    .post(authTreatment, createCourseTreatment);

  router.route('/coures/:id')
    .get(authTreatment, getCourseTreatment)
    .post(authTreatment, updateCourseTreatment)
    .delete(authTreatment, removeCourseTreatment);
}

export function getCourseListTreatment(req, res) {
  res.json({});
}

export function getCourseTreatment(req, res) {
  res.json({});
}

export function createCourseTreatment(req, res) {
  res.json({});
}

export function updateCourseTreatment(req, res) {
  res.json({});
}

export function removeCourseTreatment(req, res) {
  res.json({});
}
