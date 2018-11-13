import React, { Component } from 'react';
import axios from 'axios'
// import { Redirect } from 'react-router-dom';

class FavoritesCard extends Component{
  state = {
    venue_name: '',
    venue_address: '',
    reviews: '',
    rating: '',
    id: '',
    toggleEdit: false,
    fireRedirect: false
  }

  componentDidMount() {
    axios.get(`/favorites/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res)
        this.setState({
          venue_name: res.data.data[0].venue_name,
          venue_address: res.data.data[0].venue_address,
          reviews: res.data.data[0].reviews,
          rating: res.data.data[0].rating,
          id: res.data.data[0].id
        })
      }).catch(err => console.log(err));
  }

  handleEditSubmit(e) {
    e.preventDefault()
    axios.put(`/favorites/${this.state.id}`, {
      reviews: this.state.reviews,
      rating: this.state.rating,
      id: this.state.id
    }).then(res => {
      console.log(res);
      this.setState({
        fireRedirect: true
      });
    }).catch(err => console.log(err));
  }

  deleteVenue() {
    axios.delete(`/favorites/${this.state.id}`)
    .then(res => {
      console.log(res);
      this.setState({
        fireRedirect: true
      });
    }).catch(err => {
      console.log(err);
    });
  }

  toggleEditForm() {
    this.setState(prevState => ({
      toggleEdit: !prevState.toggleEdit
    }))
    console.log(this.state.toggleEdit)
  }

  handleInputChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
      [name]: value
    }))
  }

  render(){
    return(
      <div className="favorite-card">
        <div className="venue-info">
          <h3>{this.props.favorites.venue_name}</h3>
          <h3>Your Review</h3>
          <p>{this.props.favorites.reviews}</p>
          <h3>Your Rating</h3>
          <p>{this.props.favorites.rating}</p>
          <button onClick={() => this.toggleEditForm()}>EDIT</button>
        </div>
        <div className="edit-delete-buttons">
          {this.state.toggleEdit &&
          <form className='edit-delete-form'>
            <input
              type="text"
              name="reviews"
              value={this.state.reviews}
              placeholder="New Review?"
              onChange={(e) => this.handleInputChange(e)}
            />
            <input
              type="number"
              name="rating"
              value={this.state.rating}
              placeholder="New Rating?"
              onChange={(e) => this.handleInputChange(e)}
            />
            <button
              type="submit"
              onClick={(e) => this.handleEditSubmit(e)}>Update My Review!
            </button>
            <button onClick={() => this.deleteVenue()}>DELETE</button>
          </form>
          }
        </div>
      </div>
    )
  }
}

export default FavoritesCard;
// {this.state.fireRedirect ? <Redirect push to={`/places/${this.props.match.params.id}`} /> : ''}
