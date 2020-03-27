import React from 'react';
import PropTypes from 'prop-types';
import MemeTextInput from './MemeTextInput';


class UserInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleVisible: false
    };

    this.toggleTitle = this.toggleTitle.bind(this);
  }

  toggleTitle() {
    let titleVisible = this.state.titleVisible;
    this.setState({titleVisible: !titleVisible});
  }

  render() {
    return (
      <fieldset>
        <legend>{this.props.legendText}</legend>
        <MemeTextInput position="top" name="textTop" updateMemeText={this.props.updateMemeText} />
        <MemeTextInput position="bottom" name="textBottom" updateMemeText={this.props.updateMemeText} />
      </fieldset>
    );
  }
}

export default UserInputs;

UserInputs.propTypes = {
  legendText: PropTypes.string.isRequired,
  updateMemeText: PropTypes.func.isRequired,
};
