# react-movie-template

A simple template to watch firebase stored video files, built in react-native.

## Requirements

Firebase cloud storage (cloud firestore) with the following structure,
* You will need two collections :
  * series  (each document will have 'coverArt' & 'title' as thier fields)
  * seriesLinks (each document will contain 2 lists called 'links', and 'names' to contain all video links, and names of each episode)
* Every series must have a document in each collection, with its documentID being the same in both collections.

## TODO
* add your firebase details to /config/firebase.js
* add your cover photos to /assets
* add and re-name your loading gif to /assets/loading.gif
* change whatever you would like, and personalize your template!

## Developer Mode
`npm start`
