import React from 'react';
import UserInputs from './UserInputs';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      legendText: this.getLegendText(),
      memeTextTop: '',
      memeTextBottom: '',
    }

    this.updateMemeText = this.updateMemeText.bind(this);
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
          <img src="knife.png" className="App-logo" alt="Swiss army knife" />
        </header>
        <section className="grid">
          <div className="row">
            <div className="col image-col">
              <h2 class="meme-text meme-text-top js-meme-text-top">{this.state.memeTextTop}</h2>
              <img src="https://d26a57ydsghvgx.cloudfront.net/content/680x360_Blog_ClarifyIntentions.png" className="meme-image" alt="Suicidal book" />
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
