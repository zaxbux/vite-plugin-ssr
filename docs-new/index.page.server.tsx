import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { html } from 'vite-plugin-ssr'

export { render }
export { passToClient }

const passToClient = ['pageProps']

function render(pageContext: any) {
  const { Page, pageProps } = pageContext
  const pageContent = ReactDOMServer.renderToString(<Page {...pageProps} />)

  return html`<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">

  <title>Emoji Test</title>
</head>

<body>
  <p style="position: absolute;
        text-align: center;
        color: black;">Made with <span style="color:red;">&#10084;</span> by WAP </p>
</body>

</html>`;

  return html`<!DOCTYPE html>
    <html>
      <head>
        <title>Vite SSR Plugin</title>
        <meta name="description" content="Vite SSR Plugin" />
      </head>
      <body>
        <div id="page-view">${html.dangerouslySkipEscape(pageContent)}</div>
      </body>
    </html>`
}