import React from 'react'

import Comment from './Comment'

const CommentList = props => (
  <div>
    {props.comments.map(comment => {
      return (
        <Comment
          comment={comment}
          currentUser={props.currentUser}
          slug={props.slug}
          key={comment.id}
        />
      )
    })}
  </div>
)

export default CommentList
