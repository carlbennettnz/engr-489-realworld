module.exports = (req, res) => {
  res.clearCookie('jwt')
  res.redirect('/')
}
