// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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



// To change the map's style, change the map id using the list of Mapbox ids below:

// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11