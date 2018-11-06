import React from 'react';
import Form from './Form'

function Header(props) {

  return(
    <div className="header">
      <h1>Who Has Time?</h1>
      <Form
        handleInputChange={props.handleInputChange}
        onFormSubmit={props.onFormSubmit}
        buttonInput={props.buttonInput}
      />
    </div>
  )
}

export default Header
