import React, { useState, useRef, useEffect } from 'react'

import Header from './common/Header'
import ArticleList from './common/ArticleList'

const EditProfileSettings = props => {
  if (props.isUser) {
    return (
      <a href="/settings" className="btn btn-sm btn-outline-secondary action-btn">
        <i className="ion-gear-a" /> Edit Profile Settings
      </a>
    )
  }
  return null
}

const FollowUserButton = props => {
  const [isFollowing, toggleIsFollowing] = useFollow(props.user)

  if (props.isUser) {
    return null
  }

  let classes = 'btn btn-sm action-btn'
  if (isFollowing) {
    classes += ' btn-secondary'
  } else {
    classes += ' btn-outline-secondary'
  }

  const handleClick = ev => {
    ev.preventDefault()
    toggleIsFollowing()
  }

  return (
    <button className={classes} onClick={handleClick}>
      <i className="ion-plus-round" />
      &nbsp;
      {isFollowing ? 'Unfollow' : 'Follow'} {props.user.username}
    </button>
  )
}

const ProfileTabs = ({ profile }) => (
  <ul className="nav nav-pills outline-active">
    <li className="nav-item">
      <a className="nav-link active" href={`/@${profile.username}`}>
        My Articles
      </a>
    </li>

    <li className="nav-item">
      <a className="nav-link" href={`/@${profile.username}/favorites`}>
        Favorited Articles
      </a>
    </li>
  </ul>
)

export const ProfileFactory = Tabs => props => {
  console.log("hey, it's the profile factory")
  const profile = props.profile
  if (!profile) {
    return null
  }

  const isUser = props.currentUser && props.profile.username === props.currentUser.username

  return (
    <div className="profile-page">
      <Header appName={props.appName} currentUser={props.currentUser} />

      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={profile.image} className="user-img" alt={profile.username} />
              <h4>{profile.username}</h4>
              <p>{profile.bio}</p>

              <EditProfileSettings isUser={isUser} />
              <FollowUserButton
                isUser={isUser}
                user={profile}
                follow={props.onFollow}
                unfollow={props.onUnfollow}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <Tabs profile={profile} />
            </div>

            <ArticleList
              pager={props.pager}
              articles={props.articles}
              articlesCount={props.articlesCount}
              state={props.currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const useFollow = user => {
  const didMountRef = useRef(false)

  const [isFollowing, setIsFollowing] = useState(user && user.following)

  useEffect(() => {
    if (didMountRef.current) {
      const action = isFollowing ? 'follow' : 'unfollow'
      fetch(`/@${user.username}/${action}`, { method: 'post', credentials: 'same-origin' })
    } else {
      didMountRef.current = true
    }
  }, [isFollowing])

  const toggleIsFollowing = () => {
    if (user) setIsFollowing(!isFollowing)
  }

  return [isFollowing, toggleIsFollowing]
}

const Profile = ProfileFactory(ProfileTabs)
export default Profile
