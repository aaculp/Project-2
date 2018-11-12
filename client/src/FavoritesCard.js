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
    <section>
      <div>
        <div className = "venue_info">
          <h3>{this.props.favorites.venue_name}</h3>
        </div>
        <div className = "added_info">
          <h3>Your Review</h3>
          <p>{this.props.favorites.reviews}</p>
          <h3>Your Rating</h3>
          <p>{this.props.favorites.rating}</p>
        </div>
        <div className="edit_delete_buttons">
          <button onClick={() => this.toggleEditForm()}>EDIT</button>
          {this.state.toggleEdit &&
        <form>
        <input
        type="text"
        name="reviews"
        value={this.state.reviews}
        placeholder="New Review?"
        onChange={(e) => this.handleInputChange(e)} />
        <input
        type="number"
        name="rating"
        value={this.state.rating}
        placeholder="New Rating?"
        onChange={(e) => this.handleInputChange(e)} />
        <button
        type="submit"
        onClick={(e) => this.handleEditSubmit(e)}>Update My Review!</button>
        </form>
    }
          <button onClick={() => this.deleteVenue()}>DELETE</button>
{/*        {this.state.fireRedirect
          ? <Redirect push to={`/places/${this.props.match.params.id}`} />
          : ''}*/}
        </div>
      </div>
    </section>
    )
}

}

export default FavoritesCard;
