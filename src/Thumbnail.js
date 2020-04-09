import React from 'react';
import PropTypes from 'prop-types';


class Thumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.updateImage = this.updateImage.bind(this);
  }

  updateImage() {
    this.props.updateImage(this.props);
  }

  renderClassNames() {
    let classNames = ['thumbnail'];

    if (this.props.isActive) {
      classNames.push('selected');
    }

    return classNames.join(" ");
  }

  render() {
    return (
      <img className={this.renderClassNames()} id={this.props.id} src={this.props.src} onClick={this.updateImage} />
    );
  }
}

export default Thumbnail;

Thumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  updateImage: PropTypes.func.isRequired,
};
