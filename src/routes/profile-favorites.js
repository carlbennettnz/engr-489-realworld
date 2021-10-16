module.exports = async (req, res) => {
  const [profileRes, articlesRes] = await Promise.all([
    req.agent.Profile.get(req.params.username),
    req.agent.Articles.favoritedBy(req.params.username)
  ])

  Object.assign(res.locals, profileRes, articlesRes)
}
