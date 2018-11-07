import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import VenueListings from './VenueListing'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import Favorites from './Favorites'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      venues: [],
      buttonInput: '',
      venueId: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault()
    let url = `https://api.foursquare.com/v2/venues/search?client_id=ST23AEQHHZXZSAVCBLBO4KZQZVA0KXNULNFPAVHFKMJLZ0OY&client_secret=NN3W2M14CHEJ2BCF21ORXCWWA5VYMXAWQYXTWG5414LU2RX0&v=20180323&ll=40.740,-73.991&query=${this.state.buttonInput}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        venues: data.response.venues,
        venueId: data.response.venues.id
      })
    })
  }

  handleInputChange(e) {
    this.setState({
      buttonInput: e.target.value,
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            handleInputChange={this.handleInputChange}
            onFormSubmit={this.onFormSubmit}
            buttonInput={this.state.buttonInput}
          />
          <Switch>
          <Route path='/favorites' component={Favorites} />
          <Route path ='/places' render = {() => <VenueListings
            venues={this.state.venues}
            buttonInput={this.state.buttonInput}
            venueId={this.state.venueId}
          />} />
          <Route path='/' component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
