import { generateRandomCourseList } from '../utils/courses';

import { authTreatment } from '../middlewares/authMiddlewares';

let courseList = generateRandomCourseList(100);

export function setCoursesRoutes(router) {
  router.route('/courses')
    .get(authTreatment, getCourseListTreatment)
    .post(authTreatment, createCourseTreatment);

  router.route('/courses/:id')
    .get(authTreatment, getCourseTreatment)
    .post(authTreatment, updateCourseTreatment)
    .delete(authTreatment, removeCourseTreatment);
}

export function getCourseListTreatment(req, res) {
  const { page, count } = req.query;
  if (page && count) {
    const lastItem = page * count;
    const firstItem = lastItem - count;
    return res.json(courseList.slice(firstItem, lastItem));
  }
  res.json(courseList);
}

export function getCourseTreatment(req, res) {
  const { id } = req.params;
  const course = courseList.find((item) => item.id === id);
  res.json(course);
}

export function createCourseTreatment(req, res) {
  res.json({});
}

export function updateCourseTreatment(req, res) {
  res.json({});
}

export function removeCourseTreatment(req, res) {
  const { id } = req.params;
  courseList = courseList.filter((item) => item.id !== id);
  res.json({});
}
