import React from 'react'

const ArticleActions = ({ article, canModify }) => {
  if (canModify) {
    return (
      <span>
        <a href={`/editor/${article.slug}`} className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit" /> Edit Article
        </a>

        <form
          method="post"
          action={`/article/${article.slug}/delete`}
          style={{ display: 'inline', marginLeft: '0.5em' }}
        >
          <button className="btn btn-outline-danger btn-sm" type="submit">
            <i className="ion-trash-a" /> Delete Article
          </button>
        </form>
      </span>
    )
  }

  return <span />
}

export default ArticleActions
