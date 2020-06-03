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
      images: this.props.images,
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
    let images = this.props.images.map(image => {
      image.isActive = image.key === newImage.id.replace('thumbnail-', '');
      return image;
    });

    this.setState({
      memeImage: newImage.src,
      images: images,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Memeus Oakley</h1>
        </header>
        <section className="grid">
          <div className="row">
            <div className="col image-col">
              <div className="meme">
                <h2 className="meme-text meme-text-top js-meme-text-top">{this.state.memeTextTop}</h2>
                <img src={this.state.memeImage} className="meme-image" />
                <h2 className="meme-text meme-text-bottom js-meme-text-bottom">{this.state.memeTextBottom}</h2>
              </div>
            </div>
            <div className="col form-col">
              <h3>Enter your caption</h3>
              <UserInputs legendText={this.state.legendText} updateMemeText={this.updateMemeText} />
              <h3>Select your image</h3>
              <div className="thumbnails">
                {this.state.images.map(image =>
                  <Thumbnail key={image.key} id={`thumbnail-${image.key}`} src={image.src} updateImage={this.updateImage} isActive={image.isActive} />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
