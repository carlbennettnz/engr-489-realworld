import React, { useState, useRef, useEffect } from 'react'

const FAVORITED_CLASS = 'btn btn-sm btn-primary'
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary'

const ArticlePreview = props => {
  const article = props.article
  const [favoritesCount, favorited, toggleFavorited] = useFavorite(article)
  const favoriteButtonClass = favorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS

  const handleClick = ev => {
    ev.preventDefault()
    toggleFavorited()
  }

  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href={`/@${article.author.username}`}>
          <img src={article.author.image} alt={article.author.username} />
        </a>

        <div className="info">
          <a className="author" href={`/@${article.author.username}`}>
            {article.author.username}
          </a>
          <span className="date">{new Date(article.createdAt).toDateString()}</span>
        </div>

        <div className="pull-xs-right">
          <button className={favoriteButtonClass} onClick={handleClick}>
            <i className="ion-heart" /> {favoritesCount}
          </button>
        </div>
      </div>

      <a href={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map(tag => {
            return (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            )
          })}
        </ul>
      </a>
    </div>
  )
}

const useFavorite = article => {
  const didMountRef = useRef(false)

  const [{ favoritesCount, favorited }, setFavoritedState] = useState({
    favoritesCount: article.favoritesCount,
    favorited: article.favorited
  })

  useEffect(() => {
    if (didMountRef.current) {
      const action = favorited ? 'favorite' : 'unfavorite'
      fetch(`/article/${article.slug}/${action}`, { method: 'post', credentials: 'same-origin' })
    } else {
      didMountRef.current = true
    }
  }, [favorited])

  const toggleFavorited = () => {
    setFavoritedState({
      favoritesCount: favoritesCount + (favorited ? -1 : 1),
      favorited: !favorited
    })
  }

  return [favoritesCount, favorited, toggleFavorited]
}

export default ArticlePreview
