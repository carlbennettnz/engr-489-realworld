import React from 'react'

import CommentInput from './CommentInput'
import CommentList from './CommentList'

const CommentContainer = props => {
  if (props.currentUser) {
    return (
      <div className="col-xs-12 col-md-8 offset-md-2">
        <div>
          <list-errors errors={props.errors} />
          <CommentInput slug={props.slug} currentUser={props.currentUser} />
        </div>

        <CommentList comments={props.comments} slug={props.slug} currentUser={props.currentUser} />
      </div>
    )
  } else {
    return (
      <div className="col-xs-12 col-md-8 offset-md-2">
        <p>
          <a href="/login">Sign in</a>
          &nbsp;or&nbsp;
          <a href="/register">sign up</a>
          &nbsp;to add comments on this article.
        </p>

        <CommentList comments={props.comments} slug={props.slug} currentUser={props.currentUser} />
      </div>
    )
  }
}

export default CommentContainer
