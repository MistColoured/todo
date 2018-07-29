import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './Swatch3';

// import 'semantic-ui-css/semantic.min.css';
import './Swatch3/styles/style.scss';

WebFont.load({
  google: {
    families: ['Poiret One:300,400,700', 'cursive'],
  },
});

ReactDOM.render(<App />, document.getElementById('app-root'));
