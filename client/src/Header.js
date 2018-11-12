import React from 'react';
import Form from './Form'

function Header(props) {

  return(
    <div className="header">
      <img src='https://res.cloudinary.com/dcqmhmmt5/image/upload/v1542060054/logo_simplified.png'  class='logo'/>
      <Form
        handleInputChange={props.handleInputChange}
        onFormSubmit={props.onFormSubmit}
        buttonInput={props.buttonInput}
      />
    </div>
  )
}

export default Header
