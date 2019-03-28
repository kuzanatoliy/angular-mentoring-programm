import { getAuthorList } from '../utils/courses';

import { authTreatment } from '../middlewares/authMiddlewares';

const authorList = getAuthorList(100);

export function setAuthorsRoutes(router) {
  router.route('/authors')
    .get(authTreatment, getAuthorListTreatment);
}

export function getAuthorListTreatment(req, res) {
  res.json(authorList);
}
