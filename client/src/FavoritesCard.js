import React, { Component } from 'react';


class FavoritesCard extends Component{



render(){

  return(
    <section>
      <div>
        <div className = "image_container">
          <img className="favorite_img" src="" alt="favorite" />
        </div>
        <div className = "venue_info">
          <h3>{this.props.favorites.venue_name}</h3>
          <p>{this.props.favorites.venue_address}</p>
        </div>
        <div className = "added_info">
          <h3>Your Review</h3>
          <p>{this.props.favorites.reviews}</p>
          <h3>Your Rating</h3>
          <p>{this.props.favorites.rating}</p>
        </div>
        <div className="edit_delete_buttons">
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </div>
    </section>
    )
}

}

export default FavoritesCard;
