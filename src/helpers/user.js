module.exports = (req, res, next) => {
  if (req.cookies.jwt) {
    req.agent.Auth.current().then(({ user }) => {
      res.locals = { currentUser: user }
      next()
    })
  } else {
    next()
  }
}
