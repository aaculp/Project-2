import React, { Component } from 'react';
import VenueRow from './VenueRow.js'
import Mapbox from './Mapbox'
import VenueListingEditBox from './VenueListingEditBox'


class VenueListings extends Component {
  state = {
    current: []
  }

  handleChange(id){
    let current = this.props.venues.filter( d => d.id === id)
      this.setState(prevState => ({
        current: current[0]
      }))
      console.log(`this is current`, current)
  }

  render() {
  let allVenues = this.props.venues.map(d =>
    <VenueRow
    venueId2 = {this.props.venueId}
    venuePath={d}
    // key={d[0].id}
    onClick = {(id) => this.handleChange(id)}
    />)

  return(
    <div className="allvenues">
      <div className='venue-list'>
        <h1>Venues: {this.props.buttonInput.toUpperCase()}</h1>
      </div>
      <div className='venue-align'>
        <div className="venue-section">
          {allVenues}
        </div>
        <VenueListingEditBox current = {this.state.current} />
        <div className='venue-map'>
          <Mapbox />
        </div>
      </div>
    </div>
    )
  }
}

export default VenueListings;

   // onClick = {() => {
   //          console.log(this.props.venuePath.id)
   //          this.setState(prevState => ({
   //            venueId2: this.props.venuePath.id
   //          }))
   //          }}
