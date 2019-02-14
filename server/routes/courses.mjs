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
  const { page, count, searchStr } = req.query;
  let resCourseList = courseList;

  if (searchStr) {
    resCourseList = resCourseList.filter((item) => {
      return !(item.title.toLowerCase().indexOf(searchStr) < 0)
        || !(item.description.toLowerCase().indexOf(searchStr) < 0);
    });
  }

  if (page && count) {
    const lastItem = page * count;
    const firstItem = lastItem - count;
    resCourseList = resCourseList.slice(firstItem, lastItem);
  }

  res.json(resCourseList);
}

export function getCourseTreatment(req, res) {
  const { id } = req.params;
  const course = courseList.find((item) => item.id === id);
  res.json(course);
}

export function createCourseTreatment(req, res) {
  const {
    authors,
    creationDate,
    description,
    duration,
    title,
    topRated,
  } = req.body;
  const course = {
    authors,
    creationDate,
    description,
    duration,
    id: `${ courseList[courseList.length - 1].id + 1 }`,
    title,
    topRated,
  };
  courseList.push(course);
  res.json(course);
}

export function updateCourseTreatment(req, res) {
  const { id } = req.params;
  const {
    authors,
    creationDate,
    description,
    duration,
    title,
  } = req.body;
  const courses = [];
  courseList.forEach((item, index, arr) => {
      if (item.id === id) {
        item = {
          ...item,
          authors,
          creationDate,
          description,
          duration,
          title,
        };
        arr[index] = item;
        courses.push(item);
      }
    });
  res.json(courses);
}

export function removeCourseTreatment(req, res) {
  const { id } = req.params;
  courseList = courseList.filter((item) => item.id !== id);
  res.json({});
}
