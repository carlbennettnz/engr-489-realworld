import React from 'react'

import Banner from './common/Banner'
import MainView from './common/MainView'
import Header from './common/Header'
import Tags from './common/Tags'

const Home = props => (
  <div className="home-page">
    <Header appName={props.appName} currentUser={props.currentUser} />
    <Banner token={props.token} appName={props.appName} />

    <div className="container page">
      <div className="row">
        <MainView {...props} />

        <div className="col-md-3">
          <div className="sidebar">
            <p>Popular Tags</p>

            <Tags tags={props.tags} onClickTag={() => console.log('navigate to tag')} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
