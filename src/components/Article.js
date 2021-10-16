import React from 'react'
import marked from 'marked'
import sanitize from 'sanitize-html'

import ArticleMeta from './common/ArticleMeta'
import CommentContainer from './common/CommentContainer'
import Header from './common/Header'

const Article = props => {
  if (!props.article) {
    return null
  }

  const markup = { __html: sanitize(marked(props.article.body)) }
  const canModify =
    props.currentUser && props.currentUser.username === props.article.author.username
  return (
    <div className="article-page">
      <Header appName={props.appName} currentUser={props.currentUser} />
      <div className="banner">
        <div className="container">
          <h1>{props.article.title}</h1>
          <ArticleMeta article={props.article} canModify={canModify} />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <div dangerouslySetInnerHTML={markup} />

            <ul className="tag-list">
              {props.article.tagList.map(tag => {
                return (
                  <li className="tag-default tag-pill tag-outline" key={tag}>
                    {tag}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions" />

        <div className="row">
          <CommentContainer
            comments={props.comments || []}
            errors={props.commentErrors}
            slug={props.match.params.id}
            currentUser={props.currentUser}
          />
        </div>
      </div>
    </div>
  )
}

export default Article
