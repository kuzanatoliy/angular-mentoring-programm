export function setAuthMiddlewares(router) {
  router.use(authTreatment);
}

export function authTreatment(req, res, next) {
  console.log(req.session);
  const { token } = req.headers;
  if (token && token === req.session.userData.token) {
    next();
  }

  res.status(403).json({ message: 'Forbidden Access' });
}
