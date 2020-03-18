import React from 'react';

function UserInputs() {
  return (
    <fieldset>
      <legend>Enter your text</legend>
      <label for="textTop">Enter text for the top:</label>
      <input name="textTop" type="text" />
      <label for="textTop">Enter text for the bottom:</label>
      <input name="textBottom" type="text" />
    </fieldset>
  );
}

export default UserInputs;
