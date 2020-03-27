import React from 'react';
import Thumbnail from './Thumbnail';
import UserInputs from './UserInputs';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memeImage: this.props.images[0].src,
      legendText: this.getLegendText(),
      memeTextTop: '',
      memeTextBottom: '',
    }

    this.updateMemeText = this.updateMemeText.bind(this);
    this.updateImage = this.updateImage.bind(this);
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

  updateImage(newImage) {
    this.setState({
      memeImage: newImage,
    });
  }

  render() {
    let renderThumbnails = this.props.images.map((image) =>
      <Thumbnail key={image.key} id={`thumbnail-${image.key}`} src={image.src} updateImage={this.updateImage} />
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Memeus Oakley</h1>
          <img src="knife.png" className="App-logo" alt="Swiss army knife" />
        </header>
        <section className="grid">
          <div className="row">
            <div className="col image-col">
              <div className="thumbnails">
                {renderThumbnails}
              </div>
              <div className="meme">
                <h2 class="meme-text meme-text-top js-meme-text-top">{this.state.memeTextTop}</h2>
                <img src={this.state.memeImage} className="meme-image" />
                <h2 class="meme-text meme-text-bottom js-meme-text-bottom">{this.state.memeTextBottom}</h2>
              </div>
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
