import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let images = [
  {
    key: "hands",
    src: "https://d26a57ydsghvgx.cloudfront.net/content/resources/Lifetime%20value.png",
  },
  {
    key: "book",
    src: "https://d26a57ydsghvgx.cloudfront.net/content/680x360_Blog_ClarifyIntentions.png",
  },
  {
    key: "buddies",
    src: "https://zen-marketing-content.s3.amazonaws.com/content/employeeex.jpg",
  },
  {
    key: "mic",
    src: "https://d26a57ydsghvgx.cloudfront.net/content/Blog-PR016541_design_R2_ae-126.jpg",
  },
  {
    key: "fleurs",
    src: "https://d26a57ydsghvgx.cloudfront.net/content/blog_croptest-PR016541_design_R2_ae-142.jpg",
  },
  {
    key: "charts",
    src: "https://d26a57ydsghvgx.cloudfront.net/content/resources/Zendesk_guide_customer_service_metrics_that_matter.png",
  },
  {
    key: "bicep",
    src: "https://zen-marketing-content.s3.amazonaws.com/content/bicep.png",
  },
  {
    key: "hug",
    src: "https://d26a57ydsghvgx.cloudfront.net/content/omnichannel%20support1.png",
  }
]


ReactDOM.render(<App images={images} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
