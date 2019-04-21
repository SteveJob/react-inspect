import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import installGlobalHook from './app/backend/installGlobalHook';

installGlobalHook(window);

function inject(src, done) {
  if (!src || src === 'false') {
    done();
    return;
  }

  var script = document.createElement('script');
  script.src = src;
  script.onload = done;
  document.body.appendChild(script);
}

const config = {
  alreadyFoundReact: true,
  showHiddenThemes: true,
  inject(done) {
    inject('./assets/backend.js', () => {
      var wall = {
        listen(fn) {
          window.addEventListener('message', evt => {
            if (evt.source === window) {
              fn(evt.data);
            }
          });
        },
        send(data) {
          window.postMessage(data, '*');
        },
      };
      done(wall);
    });
  },
};

const reactInspect = document.createElement('div');
reactInspect.className = 'react-inspect-menu';
document.body.appendChild(reactInspect);

ReactDOM.render(<App {...config} />, reactInspect);