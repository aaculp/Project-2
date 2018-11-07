import React from 'react';


function VenueListingEditBox(props){
    return(
      <div className='edit-box-container'>
          <h3>{props.current.name}</h3>
          <p className='venue-address'>{props.current.id}</p>
        <form>
            <input
            type = "text"
            placeholder="notes" />
            <input
            type = "number"
            placeholder="Ratings" />
            <button
            > Submit </button>
        </form>
      </div>

      )
}

export default VenueListingEditBox;

// {props.current[0].location.address}
