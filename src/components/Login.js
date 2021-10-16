import React from 'react'

import Header from './common/Header'
import ListErrors from './common/ListErrors'

const Login = ({ email, appName, currentUser, errors }) => (
  <div className="auth-page">
    <Header appName={appName} currentUser={currentUser} />

    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign In</h1>
          <p className="text-xs-center">
            <a href="/register">Need an account?</a>
          </p>

          <ListErrors errors={errors} />

          <form method="post">
            <fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  name="email"
                  defaultValue={email}
                />
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </fieldset>

              <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                Sign in
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default Login
