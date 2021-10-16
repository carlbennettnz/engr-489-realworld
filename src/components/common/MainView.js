import React from 'react'

import ArticleList from './ArticleList'

const YourFeedTab = props => {
  if (props.token) {
    return (
      <li className="nav-item">
        <a href="?tab=feed" className={props.tab === 'feed' ? 'nav-link active' : 'nav-link'}>
          Your Feed
        </a>
      </li>
    )
  }
  return null
}

const GlobalFeedTab = props => {
  return (
    <li className="nav-item">
      <a href="?tab=all" className={props.tab === 'all' ? 'nav-link active' : 'nav-link'}>
        Global Feed
      </a>
    </li>
  )
}

const TagFilterTab = props => {
  if (!props.tag) {
    return null
  }

  return (
    <li className="nav-item">
      <a href={`?tab=tag&tag=${encodeURIComponent(props.tag)}`} className="nav-link active">
        <i className="ion-pound" /> {props.tag}
      </a>
    </li>
  )
}

const MainView = props => (
  <div className="col-md-9">
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <YourFeedTab token={props.token} tab={props.tab} />
        <GlobalFeedTab tab={props.tab} />
        <TagFilterTab tag={props.tag} />
      </ul>
    </div>

    <ArticleList
      pager={props.pager}
      articles={props.articles}
      loading={props.loading}
      articlesCount={props.articlesCount}
      currentPage={props.currentPage}
    />
  </div>
)

export default MainView
