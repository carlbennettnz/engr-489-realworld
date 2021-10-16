module.exports = handler => (req, res, next) => {
  const promise = handler(req, res)

  return Promise.resolve(promise).then(
    // If the request hasn't yet been handled, call next
    () => {
      if (!res.headersSent) {
        console.log('called next')
        next()
      }
    },

    err => next(err)
  )
}
