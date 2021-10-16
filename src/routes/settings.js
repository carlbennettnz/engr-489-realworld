module.exports = async (req, res) => {
  const user = req.body

  if (!user.password) {
    delete user.password
  }

  try {
    await req.agent.Auth.save(user)
  } catch (err) {
    if (!err.response || !err.response.body || !err.response.body.errors) throw err

    res.locals.errors = err.response.body.errors
  }
}
