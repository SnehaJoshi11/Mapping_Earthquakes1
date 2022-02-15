// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);
let map=L.map('mapid').setView([37.6213,-122.3790],4);
// streets-v11
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY,
    
// });

// Skill Drill
// Using the Leaflet documentation, create a light-yellow circle with black lines 
// indicating a 300-meter radius of Central Los Angeles on a dark map.
// Your map should look like the following:
// // mapbox/dark-v10
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY,
    
//  });


//  satellite-streets-v11
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY,
    
//  });

// light-v10
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
    
 });

// //  Add a marker to the map for Los Angeles, California.
// // let marker = L.marker([34.0522, -118.2437]).addTo(map);
// let marker=L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     fillOpacity: 0.5,
//     radius: 300
//  }).addTo(map);

//  circle marker
// let marker=L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     fillOpacity: 0.5,
//     radius: 100
//  }).addTo(map);

// Get data from cities.js
let cityData = cities;




// Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//    });  


// cityData.forEach(function(city) {
//     console.log(city)
// L.circleMarker(city.location,{
//     radius:city.population/100000
// })
// .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString()+ "</h3>")
// .addTo(map);
// });   
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// marker.addTo(map);

// Skill Drill
// Edit the logic.js file to create an orange circle popup marker for each city,
//  with a lineweight of 4, a radius where the population number is decreased by 200,000, 
//   that's on a dark map. When you click on the circle, the popup should display the city, state,
// and the population formatted with a thousands separator.

// Your map should look similar to the following:  
cityData.forEach(function(city) {
    console.log(city)
L.circleMarker(city.location,{
    radius:city.population/200000,
    color:"orange",
    fillColor: '#ffffa1',
    fillOpacity: 0.4,

})
.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString()+ "</h3>")
.addTo(map);
});   
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// Single Line
// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ];


//   Multiple_Line
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];
  // Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//     color: "yellow"
//  }).addTo(map);

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "red"
//   }).addTo(map);
// To change the map's style, change the map id using the list of Mapbox ids below:

// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11


// KILL DRILL
//Edit your logic.js to create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops,
//Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ).
//Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map.

// Hint: You'll need to find the coordinates for some of these airports.

// Bonus: Add your city or another city as a stopping point.

// Your map should look similar to the following:

// SFO=37.6213° N, 122.3790° W
// JFK=40.6413° N, 73.7781° W
// AUS=30.1975° N, 97.6664° W
// YYZ=43.6777° N, 79.6248° W
//st louis= 38.6270° N, 90.1994° W

let line=[
    [37.6213,-122.3790],
    [30.1975,-97.6664],
    
    [38.6270,-90.1994],
    [43.6777,-79.6248],
    [40.6413,-73.7781]
    
    

];
L.polyline(line, {
    color: "lightblue",
    dashArray: '7',
    fillOpacity: 0.5,
 }).addTo(map);