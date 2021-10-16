import React from 'react'

import ArticleActions from './ArticleActions'

const ArticleMeta = ({ article, canModify }) => {
  return (
    <div className="article-meta">
      <a href={`/@${article.author.username}`}>
        <img src={article.author.image} alt={article.author.username} />
      </a>

      <div className="info">
        <a href={`/@${article.author.username}`} className="author">
          {article.author.username}
        </a>
        <span className="date">{new Date(article.createdAt).toDateString()}</span>
      </div>

      <ArticleActions canModify={canModify} article={article} />
    </div>
  )
}

export default ArticleMeta
