import React, { Component } from 'react';
import FavoritesCard from './FavoritesCard.js';
import axios from 'axios';

class Favorites extends Component{
state = {
  fav: []
}
  componentDidMount() {
    axios.get('/places')
    .then(res=> {
      this.setState(preState => ({
        fav: res.data.data
      }))
      console.log(this.state.fav)
    })
  }

  render(){
    const allFavorites = this.state.fav.map((favorites) => {
      return(
          <FavoritesCard
          favorites={favorites}
          key = {favorites.id}
          />
        )
    })
    return(
  <div>
    <h1>USERNAME HERE PLACES</h1>
  {allFavorites}
  </div>
      )
  }
}

export default Favorites;
