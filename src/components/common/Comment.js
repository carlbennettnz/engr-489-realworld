import React from 'react'

import DeleteButton from './DeleteButton'

const Comment = props => {
  const comment = props.comment
  const show = props.currentUser && props.currentUser.username === comment.author.username
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <a href={`/@${comment.author.username}`} className="comment-author">
          <img
            src={comment.author.image}
            className="comment-author-img"
            alt={comment.author.username}
          />
        </a>
        &nbsp;
        <a href={`/@${comment.author.username}`} className="comment-author">
          {comment.author.username}
        </a>
        <span className="date-posted">{new Date(comment.createdAt).toDateString()}</span>
        <DeleteButton show={show} slug={props.slug} commentId={comment.id} />
      </div>
    </div>
  )
}

export default Comment
