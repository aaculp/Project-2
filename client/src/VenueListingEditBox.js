import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class VenueListingEditBox extends Component{
  state = {
    users_id: '',
    venue_name: '',
    venue_address: '',
    reviews: '',
    rating: '',
    fireRedirect: false,
  }

  handleInputChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      [name]: value,
    }));
  }

  handleFormSubmit(e) {
  e.preventDefault();
    axios.post('/favorites', {
      users_id: this.props.match.params.id,
      venue_name: this.props.current.name,
      venue_address: this.props.current.id,
      reviews: this.state.reviews,
      rating: this.state.rating,
    }).then(res => {
      console.log(res);
      this.setState({
        newId: res.data.data.id,
        fireRedirect: true,
      });
    }).catch(err => console.log(err));
    e.target.reset();
  }

  render(){
      return(
        <div className='edit-box-container'>
          <form
          onSubmit ={(e) => this.handleFormSubmit(e)} >
          <h3>{this.props.current.name}</h3>
          <p className='venue-address'>{this.props.current.id}</p>
          <label>Review</label>
          <input
          type="text"
          placeholder="Review"
          name = "reviews"
          value={this.state.reviews}
          onChange={(e) => this.handleInputChange(e)}
          />
          <label>Rating</label>
          <input
          type="number"
          placeholder="Rating"
          name = "rating"
          value = {this.state.rating}
          onChange={(e) => this.handleInputChange(e)}
          />
          <input type = "submit" value="submit"/>
          </form>
          {this.state.fireRedirect
            ? <Redirect push to ={`/places/${this.props.match.params.id}/favorites`} />
          : ''}
        </div>
        )
  }
}

export default VenueListingEditBox;

// {props.current[0].location.address}
