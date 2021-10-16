exports.get = async (req, res) => {
  const [profileRes, articlesRes] = await Promise.all([
    req.agent.Profile.get(req.params.username),
    req.agent.Articles.byAuthor(req.params.username)
  ])

  Object.assign(res.locals, profileRes, articlesRes)
}

exports.follow = async (req, res) => {
  await req.agent.Profile.follow(req.params.username)
  res.sendStatus(204)
}

exports.unfollow = async (req, res) => {
  await req.agent.Profile.unfollow(req.params.username)
  res.sendStatus(204)
}
