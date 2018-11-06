import React, { Component } from 'react';
import FavoritesCard from './FavoritesCard.js';
import axios from 'axios';

class Favorites extends Component{

  componentDidMount() {
    axios.get('/places')
    .then(res=> {
      console.log(res)
    })

  }

  render(){

    return(
  <div>
    <h1>USERNAME HERE PLACES</h1>
    <FavoritesCard />
  </div>
      )
  }
}

export default Favorites;
