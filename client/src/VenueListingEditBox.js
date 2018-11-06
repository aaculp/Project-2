import React, { Component } from 'react';


class VenueListingEditBox extends Component{
  render(){
    return(
      <div className='edit-box-container'>
        <form>
            <input
            placeholder="notes" />
            <input
            placeholder="Ratings" />
            <button type="button"> Submit </button>
        </form>

      </div>

      )
  }

}

export default VenueListingEditBox;
