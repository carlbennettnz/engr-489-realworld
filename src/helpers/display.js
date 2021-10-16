const React = require('react')
const ReactDOMServer = require('react-dom/server')

module.exports = componentName => (req, res) => {
  const Component = require(`../components/${componentName}`).default
  const componentUrl = `/components/react/${componentName}.js`

  const baseProps = {
    appName: 'Conduit',
    token: req.cookies.jwt,
    match: { params: req.params }
  }

  const props = Object.assign({}, baseProps, res.locals)

  res.send(render(Component, componentUrl, props))
}

const render = (Component, componentUrl, props) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="shortcut icon" href="/favicon.ico">
      <link rel="stylesheet" href="//demo.productionready.io/main.css">
      <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
      <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">
      <title>${props.appName}</title>
    </head>
    <body>
      <div id="app">${ReactDOMServer.renderToString(<Component {...props} />)}</div>

      <script>window.ROOT_PROPS = ${JSON.stringify(props)}</script>
      <script src="${componentUrl}"></script>
    </body>
  </html>
`
