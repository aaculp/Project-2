import React, { Component } from 'react';

class VenueRow extends Component {
  state = {
  venueId: this.props.venuePath.id,
  size: '36x36',
  }

  // componentDidMount() {
  //   let url = `https://api.foursquare.com/v2/venues/${this.state.venueId}/photos?client_id=ST23AEQHHZXZSAVCBLBO4KZQZVA0KXNULNFPAVHFKMJLZ0OY&client_secret=NN3W2M14CHEJ2BCF21ORXCWWA5VYMXAWQYXTWG5414LU2RX0&v=20180323`
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(res => {
  //     this.setState({
  //       prefix: res.response.photos.items[0].prefix,
  //       suffix: res.response.photos.items[0].suffix
  //     })
  //     console.log(res)
  //     console.log(this.state.prefix)
  //     console.log(this.state.size)
  //     console.log(this.state.suffix)
  //     console.log(`${this.state.prefix}${this.state.size}${this.state.suffix}`)
  //   })
  // }


  render() {
    return(
      <div className="venue-container">

        <img />
        <div className="venue-container-footer">
          <p> Name:{this.props.venuePath.name}</p>
          <p className='venue-address'>Address: {this.props.venuePath.location.address}</p>
          <p className='venue-count'>People in Venue: {this.props.venuePath.hereNow.count}</p>
          <button
          className = 'venue-favorite'> Favoritre this</button>
        </div>
      </div>
      )
  }
}

export default VenueRow
// src={`${this.state.prefix}${this.state.size}${this.state.suffix}`}

