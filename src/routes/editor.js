exports.get = async (req, res) => {
  if (req.params.id) {
    Object.assign(
      res.locals,
      await req.agent.Articles.get(req.params.id).then(res => res.article)
    )
  }
}

exports.post = async (req, res) => {
  const { title, description, body, tagList } = req.body
  const record = { title, description, body, tagList }
  const isEdit = !!req.params.id

  if (isEdit) {
    record.slug = req.params.id
  }

  try {
    const { article } = await req.agent.Articles[isEdit ? 'update' : 'create'](record)
    res.redirect(`/article/${article.slug}`)
  } catch (err) {
    if (!err.response || !err.response.body || !err.response.body.errors) throw err

    res.locals.content = { title, description, body, tagList }
    res.locals.errors = err.response.body.errors
  }
}
