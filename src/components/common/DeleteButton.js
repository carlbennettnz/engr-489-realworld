import React from 'react'

const DeleteButton = props => {
  if (props.show) {
    return (
      <form
        className="mod-options"
        method="post"
        action={`/article/${props.slug}/comments/${props.commentId}/delete`}
      >
        <input type="hidden" name="method" value="DELETE" />
        <button type="submit" style={{ border: 'none', background: 'none' }}>
          <i className="ion-trash-a" />
        </button>
      </form>
    )
  }
  return null
}

export default DeleteButton
