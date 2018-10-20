import React from 'react';
import ReactDOM from 'react-dom';
// import WebFont from 'webfontloader';
import App from './ToDo';

// import 'semantic-ui-css/semantic.min.css';
import './ToDo/styles/style.scss';

// WebFont.load({
//   google: {
//     families: ['Poiret One:300,400,700', 'cursive'],
//   },
// });

ReactDOM.render(<App />, document.getElementById('app-root'));
