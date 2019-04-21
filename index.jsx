import React from 'react';
import ReactDOM from 'react-dom';

var reactInspect = document.createElement('div');
reactInspect.className = 'react-inspect-menu';
document.body.appendChild(reactInspect);

ReactDOM.render(<App />, reactInspect);