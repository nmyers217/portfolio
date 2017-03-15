import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

const scriptsToMount = [
  '/js/animations.js'
]

const mountOldScripts = (scriptsToMount) => {
  const makeScript = (path) => {
    let script = document.createElement('script'); script.src = path;
    return script;
  }

  scriptsToMount
    .map(makeScript)
    .forEach(script => document.body.append(script))
}

ReactDom.render(
  <App />,
  document.getElementById('root'),
  () => mountOldScripts(scriptsToMount)
);