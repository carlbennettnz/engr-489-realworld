import React from 'react'

import { ProfileFactory } from '../Profile'

const ProfileFavoritesTabs = props => (
  <ul className="nav nav-pills outline-active">
    <li className="nav-item">
      <a className="nav-link" href={`/@${props.profile.username}`}>
        My Articles
      </a>
    </li>

    <li className="nav-item">
      <a className="nav-link active" href={`/@${props.profile.username}/favorites`}>
        Favorited Articles
      </a>
    </li>
  </ul>
)

const ProfileFavorites = ProfileFactory(ProfileFavoritesTabs)
export default ProfileFavorites
