export function setCoursesRoutes(router) {
  router.route('/courses')
    .get(getCourseListTreatment)
    .post(createCourseTreatment);

  router.route('/coures/:id')
    .get(getCourseTreatment)
    .post(updateCourseTreatment)
    .delete(removeCourseTreatment);

  router.route();
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
