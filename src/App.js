import React from 'react';
import UserInputs from './UserInputs';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memeImage: this.getMemeImage(),
      legendText: this.getLegendText(),
      memeTextTop: '',
      memeTextBottom: '',
    }

    this.updateMemeText = this.updateMemeText.bind(this);
  }

  getMemeImage() {
    let images = [
      "https://d26a57ydsghvgx.cloudfront.net/content/resources/Lifetime%20value.png",
      "https://d26a57ydsghvgx.cloudfront.net/content/680x360_Blog_ClarifyIntentions.png",
    ]

    return images[Math.floor(Math.random() * images.length)];
  }

  getLegendText() {
    let legends = [
      "Add your text - OR ELSE",
      "No meme is complete without its ALL CAPS TEXT",
      "I can haz caption?"
    ];

    return legends[Math.floor(Math.random() * legends.length)];
  }

  updateMemeText(position, newText) {
    switch (position) {
      case 'top':
        this.setState({
          memeTextTop: newText,
        });
        break;
      case 'bottom':
        this.setState({
          memeTextBottom: newText,
        });
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Memeus Oakley</h1>
          <img src="knife.png" className="App-logo" alt="Swiss army knife" />
        </header>
        <section className="grid">
          <div className="row">
            <div className="col image-col">
              <h2 class="meme-text meme-text-top js-meme-text-top">{this.state.memeTextTop}</h2>
              <img src={this.state.memeImage} className="meme-image" />
              <h2 class="meme-text meme-text-bottom js-meme-text-bottom">{this.state.memeTextBottom}</h2>
            </div>
            <div className="col form-col">
              <UserInputs legendText={this.state.legendText} updateMemeText={this.updateMemeText} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
