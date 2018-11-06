import React, { Component } from 'react';

class FavoritesCard extends Component{

render(){
  return(
    <section>
      <div>
        <div className = "image_container">
          <img className="favorite_img" src="" alt="favorite image" />
        </div>
        <div className = "venue_info">
          <h3>FAV NAME HERE</h3>
          <p>FAV ADDRESS HERE</p>
        </div>
        <div className = "added_info">
          <h3>Your Review</h3>
          <p>FAV REVIEW HERE</p>
          <h3>Your Rating</h3>
          <p>FAV RATING HERE</p>
        </div>
        <div class="edit_delete_buttons">
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </div>
    </section>
    )
}

}

export default FavoritesCard;
