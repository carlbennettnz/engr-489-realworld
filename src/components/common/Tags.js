import React from 'react'

const Tags = ({ tags }) => (
  <div className="tag-list">
    {tags.map(tag => {
      return (
        <a
          href={`?tab=tag&tag=${encodeURIComponent(tag)}`}
          className="tag-default tag-pill"
          key={tag}
        >
          {tag}
        </a>
      )
    })}
  </div>
)

export default Tags
