# Project Overview

aaculp.surge.sh

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Monday| Project Outline & Wireframes | Complete
|Tuesday| Project Proposal / API Calls / Venue Container | Complete
|Wednesday| API Calls / Map | Complete
|Thursday| API Calls / Nav / Header / Venue Type  | Complete
|Friday| Footer  | Complete
|Saturday| Styling | Complete
|Sunday| Finishing Touches | Complete


## Project Description

My project will be called "" and the purpose of this web application is to save time. Students here at General Assembly usually average a 1 hour break for lunch but have hundreds of options to choose from because we're located in the city. '' would be used to see which venues have long/short lines so you know wether it's worth going across the street to the corner deli or to Wok-to-Walk down by Union Square. No more guessing which venue has the longer line, you just simply log-on and see whats near you. Another instance where this application comes in handy is if it's a weekend night and you really want to get some drinks but the weather is playing in your favor. You can login and see the count of users at a certain bar, the more users means the more populated the bar is. So it might be worth taking that $10 uber to your favorite late-night spot!

## Wireframes

[Wireframe Outline](https://res.cloudinary.com/aaronculp/image/upload/v1539633173/Project%202%20Wireframes/IMG_4340.jpg)
[Layout Wireframe] 'https://res.cloudinary.com/aaronculp/image/upload/v1539633176/Project%202%20Wireframes/IMG_4345.jpg'
[Venue Container Wireframe] 'https://res.cloudinary.com/aaronculp/image/upload/v1539633173/Project%202%20Wireframes/IMG_4344.jpg'
[MVP Outline] 'https://res.cloudinary.com/aaronculp/image/upload/v1539633173/Project%202%20Wireframes/IMG_4343.jpg'
[Post-MVP Outline] 'https://res.cloudinary.com/aaronculp/image/upload/v1539633173/Project%202%20Wireframes/IMG_4344.jpg'
[Components Outline] 'https://res.cloudinary.com/aaronculp/image/upload/v1539633176/Project%202%20Wireframes/IMG_4347.jpg'

## Priority Matrix

[Components Outline] 'https://res.cloudinary.com/aaronculp/image/upload/v1539633176/Project%202%20Wireframes/IMG_4346.jpg'
[Priority Matrix] 'https://res.cloudinary.com/aaronculp/image/upload/v1539633176/Project%202%20Wireframes/IMG_4348.jpg'

### MVP/PostMVP - 5min

The functionality has been divided into two separate lists: MVP and PostMVP.

#### MVP 

- Header
- API Calls
- 1 Venue Container
- 1 Venue Type
- 1 Like Button

#### PostMVP 

- Navbar
- Google Map
- Footer

## React Architectural Design

[Components Outline] 'https://res.cloudinary.com/aaronculp/image/upload/v1539633176/Project%202%20Wireframes/IMG_4347.jpg'

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | Stateless/Stateful
| --- | :---: |  :---: |
| Nav | Render Navbar with dropdown option to change Venue Type| Stateful |
| Header | Render Venue Type | Stateless |
| App | Render Nav / Header / VenueContainer / VenueType / Map / Footer | Stateful |
| VenueType | Render Venue Type. Either Food / Drinks | Stateful
| VenueContainer | Render Mutliple Venue Containers which will have Venue Name, Address, IMG, Like Button | Stateful |
| Map | Render Google Map | Stateful |
| Footer | Render Brand Name | Stateless |

#### Nav
---
Renders dropdown link option to switch from Food/Drink Venue Types

#### Header
---
Renders Venue Type that user is currently in.

#### APP
---
Renders all children components 

#### VenueType
---
Renders Venue Type by either: Food or Drink

#### VenueContainer
---
Renders a container with Venue Title, Venue IMG, Venue Address, and Like Button/User Counter

#### Map
---
Renders Google Map with Venue Location

#### Footer 
---
Renders Personal Brand Icon

## Functional Components
---

| Component | Priority | Estimated Time MVP | Estimated Time Post MVP | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: | :---:|
| Navbar | L | -- | 2hrs | 3hrs  | 3hrs |
| Header | H | 2hrs | -- | 1hrs | 1hrs |
| Map | L | -- | 2hrs | 1hrs | 1hrs |
| Venue Container | H | 5hrs | -- | 6hrs | 6hrs |
| Venue Type | H | 5hrs | -- | 1hr | 1hr |
| Footer | L | -- | 2hrs |  |  |
| API Calls | H | 7hrs | -- | 6hrs | 6hrs |
| Refactoring | H | -- | -- | 4hrs | -- |
| Total | -- |  19hrs | 6hrs | 22hrs |  |

## Helper Functions

| Function | Description | 
| --- | :---: |  
| Nav Component | Reusable Navbar Component | 
| Header | Reusable Header Component |
| Footer | Reusabe Footer Component |
| Venue Container | Reusable Single UI Component |
| Footer | Reusable Personal Brand Component |
| Map | Reusable Map API Call Component |

## Additional Libraries
API calls |
Foursquare API = 'https://developer.foursquare.com/docs' |
Google Maps API = 'https://cloud.google.com/maps-platform/'


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
  render() {
    return (
      <div className="App">
      <Header
      handleInputChange={this.handleInputChange}
      onFormSubmit={this.onFormSubmit}
      buttonInput={this.state.buttonInput}/>
      <VenueListings
      venues={this.state.venues}
      buttonInput={this.state.buttonInput}/>
      </div>
    );
  }

```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
So far: 
I couldn't get my API to change with the input, my setState was the error -- Fixed: I passed OnFormSubmit to my Form Component which would cause a re-render with the new input value.

### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
