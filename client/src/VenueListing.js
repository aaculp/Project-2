import React, { Component } from 'react';
import VenueRow from './VenueRow.js'
import Mapbox from './Mapbox'
import VenueListingEditBox from './VenueListingEditBox'


class VenueListings extends Component {
  state = {
    show: false
  }

   handleClick(e) {
    console.log(e.target)
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }


  render() {
  let allVenues = this.props.venues.map(venue => <VenueRow venuePath={venue} key={venue.id} />)
  return(
    <div className="allvenues">
      <div className='venue-list'>
        <h1>Venues: {this.props.buttonInput.toUpperCase()}</h1>
      </div>
      <div className='venue-align'>
        <div className="venue-section">
          {allVenues}
        </div>
        <VenueListingEditBox onClick = {(e) => this.handleClick(e)} />
        <div className='venue-map'>
          <Mapbox />
        </div>
      </div>
    </div>
    )
}

}

export default VenueListings
