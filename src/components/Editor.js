import React, { useState } from 'react'

import Header from './common/Header'
import ListErrors from './common/ListErrors'

const Editor = props => {
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState(props.tagList || [])

  const watchForEnter = event => {
    if (event.which !== 13 || tagInput.trim() === '') {
      return
    }

    event.preventDefault()
    setTags([...tags, tagInput.trim()])
    setTagInput('')
  }

  const removeTag = tag => setTags(tags.filter(t => t !== tag))

  return (
    <div className="editor-page">
      <Header appName={props.appName} currentUser={props.currentUser} />

      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ListErrors errors={props.errors} />

            <form method="post">
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Article Title"
                    name="title"
                    defaultValue={props.title}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What's this article about?"
                    name="description"
                    defaultValue={props.description}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    name="body"
                    defaultValue={props.body}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter tags"
                    value={tagInput}
                    onChange={event => setTagInput(event.target.value)}
                    onKeyPress={watchForEnter}
                  />

                  <div className="tag-list">
                    {tags.map(tag => {
                      return (
                        <span className="tag-default tag-pill" key={tag}>
                          <i className="ion-close-round" onClick={() => removeTag(tag)} />
                          {tag}
                          <input type="hidden" name="tagList[]" value={tag} />
                        </span>
                      )
                    })}
                  </div>
                </fieldset>

                <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor
