import React from 'react';

function Form (props) {
    return(
      <form
        className="input"
        onSubmit={(e) => props.onFormSubmit(e)}
      >
        <input
          placeholder="Whatcha Thinkin?"
          onChange={(e) => props.handleInputChange(e)}
          value={props.buttonInput.toUpperCase()}
         />
        <button>Abrah Kadavrah</button>
      </form>
      )
}

export default Form

