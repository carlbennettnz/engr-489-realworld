import React from 'react'

import ListErrors from './common/ListErrors'
import Header from './common/Header'

const SettingsForm = ({ currentUser }) => (
  <form method="post">
    <fieldset>
      <fieldset className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="URL of profile picture"
          defaultValue={currentUser.image}
          name="image"
        />
      </fieldset>

      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Username"
          defaultValue={currentUser.username}
          name="username"
        />
      </fieldset>

      <fieldset className="form-group">
        <textarea
          className="form-control form-control-lg"
          rows="8"
          placeholder="Short bio about you"
          defaultValue={currentUser.bio}
          name="bio"
        />
      </fieldset>

      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="email"
          placeholder="Email"
          defaultValue={currentUser.email}
          name="email"
        />
      </fieldset>

      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="New Password"
          name="password"
          defaultValue={currentUser.password}
        />
      </fieldset>

      <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
        Update Settings
      </button>
    </fieldset>
  </form>
)

const Settings = props => (
  <div className="settings-page">
    <Header appName={props.appName} currentUser={props.currentUser} />

    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Your Settings</h1>

          <ListErrors errors={props.errors} />
          <SettingsForm currentUser={props.currentUser} />

          <hr />

          <button
            className="btn btn-outline-danger"
            onClick={() => (window.location.pathname = '/logout')}
          >
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Settings
