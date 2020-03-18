import React from 'react';
import UserInputs from './UserInputs';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="knife.png" className="App-logo" alt="Swiss army knife" />
      </header>
      <section className="grid">
        <div className="row">
          <div className="col image-col">
            <img src="https://d26a57ydsghvgx.cloudfront.net/content/680x360_Blog_ClarifyIntentions.png" className="meme-image" alt="Suicidal book" />
          </div>
          <div className="col form-col">
            <UserInputs />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
