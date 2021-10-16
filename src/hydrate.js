import React from 'react'
import { hydrate } from 'react-dom'
import Page from '__webpack_entry__'

hydrate(<Page {...window.ROOT_PROPS} />, document.getElementById('app'))
