exports.get = async (req, res) => {
  const [articleRes, commentsRes] = await Promise.all([
    req.agent.Articles.get(req.params.id),
    req.agent.Comments.forArticle(req.params.id)
  ])

  Object.assign(res.locals, articleRes, commentsRes)
}

exports.delete = async (req, res) => {
  await req.agent.Articles.del(req.params.id)
  res.redirect('/')
}

exports.favorite = async (req, res) => {
  await req.agent.Articles.favorite(req.params.id)
  res.send(204)
}

exports.unfavorite = async (req, res) => {
  await req.agent.Articles.unfavorite(req.params.id)
  res.send(204)
}

exports.postComment = async (req, res) => {
  await req.agent.Comments.create(req.params.id, req.body)
  res.redirect(`/article/${req.params.id}`)
}

exports.deleteComment = async (req, res) => {
  await req.agent.Comments.delete(req.params.articleId, req.params.commentId)
  res.redirect(`/article/${req.params.articleId}`)
}
