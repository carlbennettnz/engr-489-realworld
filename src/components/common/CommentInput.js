import React from 'react'

const CommentInput = props => (
  <form className="card comment-form" method="post" action="comments">
    <div className="card-block">
      <textarea className="form-control" placeholder="Write a comment..." name="body" rows="3" />
    </div>
    <div className="card-footer">
      <img
        src={props.currentUser.image}
        className="comment-author-img"
        alt={props.currentUser.username}
      />
      <button className="btn btn-sm btn-primary" type="submit">
        Post Comment
      </button>
    </div>
  </form>
)

export default CommentInput
