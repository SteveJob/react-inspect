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
    inject('https://modecity-test.oss-cn-hangzhou.aliyuncs.com/backend.js', () => {
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
reactInspect.id = 'app';
document.body.appendChild(reactInspect);


// const inspectIFrame = document.createElement('iframe');
// document.body.appendChild(inspectIFrame);
// const reactInspect = inspectIFrame.contentDocument.createElement('div');
// inspectIFrame.contentDocument.body.appendChild(reactInspect);
// const link = inspectIFrame.contentDocument.createElement('link');
// link.href = './assets/index.css';
// inspectIFrame.contentDocument.body.appendChild(link);
// const script = inspectIFrame.contentDocument.createElement('script');
// script.src = './assets/index.js';
// inspectIFrame.contentDocument.body.appendChild(script);

ReactDOM.render(<App {...config} />, reactInspect);