module.exports = async (req, res) => {
  const articles =
    req.query.tab === 'tag'
      ? req.agent.Articles.byTag(req.query.tag)
      : req.cookies.jwt && req.query.tab !== 'all'
      ? req.agent.Articles.feed()
      : req.agent.Articles.all()

  const tags = req.agent.Tags.getAll()

  const [articleRes, tagsRes] = await Promise.all([articles, tags])

  Object.assign(res.locals, {
    tab: req.query.tab || (req.cookies.jwt ? 'feed' : 'all'),
    tag: req.query.tag,
    ...articleRes,
    ...tagsRes
  })
}
