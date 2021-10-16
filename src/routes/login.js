module.exports = async (req, res) => {
  const { email, password } = req.body

  try {
    const { user } = await req.agent.Auth.login(email, password)

    res.cookie('jwt', user.token)
    res.redirect('/')
  } catch (err) {
    if (!err.response || !err.response.body || !err.response.body.errors) throw err

    res.locals.errors = err.response.body.errors
  }
}
