import React from 'react';
import PropTypes from 'prop-types';


class MemeTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.updateMemeText = this.updateMemeText.bind(this);
  }

  updateMemeText() {
    let newText = document.querySelector(`[name="${this.props.name}"]`).value;

    this.props.updateMemeText(this.props.position, newText);
  }

  render() {
    return (
      <div>
        <label for={this.props.name}>Enter text for the {this.props.position}:</label>
        <input name={this.props.name} type="text" onChange={this.updateMemeText} />
      </div>
    );
  }
}

export default MemeTextInput;

MemeTextInput.propTypes = {
  position: PropTypes.string.isRequired,
  updateMemeText: PropTypes.func.isRequired,
};
