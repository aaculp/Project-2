# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| Pseudocode / actual code | Complete
|Day 5| Initial Clickable Model  | Complete
|Day 6| MVP | Complete
|Day 7| Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

This project is will be an further iteration of Aaron's Who's Time from P2. In this iteration we will be redesigning the entire visual depiction of the app. We will add multiple functionalities including user authentification, favoriting for each user, the ability to add data to favorited venues, ability to delete saved venues, and an API pull for map location. 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.
Whiteboard: https://imgur.com/a/Ha40BDf
Sketch: https://imgur.com/a/CiyREaR 

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` 
Matix.  

Key: https://imgur.com/8HJzQKw
Matrix: https://imgur.com/YzfNXpi

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

1. CSS
2. Favoriting
3. Notes
7. API Call
8. Model
9. Components (View)
10. Controller

#### PostMVP 

4. Uploading Images
5. User Authorization
6. Mapping Pin Drops
11. Pose NPM Package Implementation


## React Architectural Design

App Architecture: https://imgur.com/c0QuQQy

## Functional Components


| Component | Description | 
| --- | :---: |  
| NAV | This will render the NAV Bar which will include the logo, profile and home link. |
| Venue Container | This will render the venues component. |
| Venues| This will an image, or an icon. It will also render a Name, and address of each venue. It will also render a ‘Like’ Button. |
| Map| This will render a map of the area with pins on each location.|
|Footer| It will render a “About Us” Link.|
|Edit Notes Container| It will render a logo and a notes form.|
|Edit Notes Container| It will render the function component, which includes an Image or an Icon, Name, and Address.|


## Time Chart

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| CSS | H | 9hrs| 9hrs | 9hrs |
| Favoriting | H | 3hrs| 2hrs | 2hrs |
| API Call | H | 1hrs| 1hrs | 1hrs |
| Model | H | 15hrs| 12hrs | 12hrs |
| Component(View) | H | 12hrs| 7hrs | 7hrs |
| Controller| H | 10hrs| 9hrs | 9hrs |
| Uploading Images | L | 3hrs| 0hrs | 0hrs |
| User Authorization | L | 8hrs| 17hrs | 17hrs |
| Mapping Pin Drops | L | 7hrs| 0hrs | 0hrs |
| Pose NPM Package| L | 3hrs| 0hrs | 0hrs |
| Total | L | 71hrs| 58hrs | 58hrs |

## ERD

Database structure: https://imgur.com/gFYIyiu


## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 
| Input Change | This captures the input change on the search input |
| Toggle | Toggles Login / Register Form |


## Additional Libraries
We wanted to use React Pose.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/favorites', placesRoutes);
app.use('/login', loginRoutes);
```

## Change Log
We decided not to try to drop the locations on the Map, just didn't have time. Also didn't have time to use the React Pose API.

## Issues and Resolutions
The big issue was User Auth. Probably could of went without it and focused more on design and other things but we really wanted to learn it!

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
