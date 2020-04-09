import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let images = [];

for (let i = 1; i <= 36; i++) {
  images.push({
    key: i.toString(),
    src: `https://d1eipm3vz40hy0.cloudfront.net/images/p-webinars/Webinar_${i}.png`,
    isActive: false,
  });
}


ReactDOM.render(<App images={images} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
