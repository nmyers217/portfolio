import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

const mountOldScripts = () => {
  let mainScript = document.createElement('script');
  mainScript.src = '/js/main.js';
  let particlesScript = document.createElement('script');
  particlesScript.src = '/js/particles.js';

  let body = document.body;
  body.append(mainScript);
  body.appendChild(particlesScript);
}

ReactDom.render(<App />, document.getElementById('root'), mountOldScripts);