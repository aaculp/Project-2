import React from 'react';
import VenueRow from './VenueRow.js'
import Mapbox from './Mapbox'



function VenueListings (props) {
  let allVenues = props.venues.map(venue => <VenueRow venuePath={venue} key={venue.id} />)
  return(
    <div className="allvenues">
      <div className='venue-list'>
        <h1>Venues: {props.buttonInput.toUpperCase()}</h1>
      </div>
      <div className='venue-align'>
        <div className="venue-section">
          {allVenues}
        </div>
        <div className='venue-map'>
          <Mapbox />
        </div>
      </div>
    </div>
    )
}

export default VenueListings
