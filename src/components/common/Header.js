import React from 'react'

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a href="/login" className="nav-link">
            Sign in
          </a>
        </li>

        <li className="nav-item">
          <a href="/register" className="nav-link">
            Sign up
          </a>
        </li>
      </ul>
    )
  }
  return null
}

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a href="/editor" className="nav-link">
            <i className="ion-compose" />
            &nbsp;New Post
          </a>
        </li>

        <li className="nav-item">
          <a href="/settings" className="nav-link">
            <i className="ion-gear-a" />
            &nbsp;Settings
          </a>
        </li>

        <li className="nav-item">
          <a href={`/@${props.currentUser.username}`} className="nav-link">
            <img
              src={props.currentUser.image}
              className="user-pic"
              alt={props.currentUser.username}
            />
            {props.currentUser.username}
          </a>
        </li>
      </ul>
    )
  }

  return null
}

const Header = props => (
  <nav className="navbar navbar-light">
    <div className="container">
      <a href="/" className="navbar-brand">
        {props.appName.toLowerCase()}
      </a>

      <LoggedOutView currentUser={props.currentUser} />
      <LoggedInView currentUser={props.currentUser} />
    </div>
  </nav>
)

export default Header
