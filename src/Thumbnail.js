import React from 'react';
import PropTypes from 'prop-types';


class Thumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.updateImage = this.updateImage.bind(this);
  }

  updateImage() {
    let newImage = document.querySelector(`#${this.props.id}`).src;

    this.props.updateImage(newImage);
  }

  render() {
    return (
      <img className="thumbnail" id={this.props.id} src={this.props.src} onClick={this.updateImage} />
    );
  }
}

export default Thumbnail;

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
};
