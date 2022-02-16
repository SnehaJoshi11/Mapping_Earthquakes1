// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);
// streets-v11
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
    
});
streets.addTo(map);
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/SnehaJoshi11/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

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

//mapbox/night-v1

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY,
    
//  });
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
// let cityData = cities;




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
// Grabbing our GeoJSON data.

//streets.addTo(map);
// marker.addTo(map);

// Skill Drill
// Edit the logic.js file to create an orange circle popup marker for each city,
//  with a lineweight of 4, a radius where the population number is decreased by 200,000, 
//   that's on a dark map. When you click on the circle, the popup should display the city, state,
// and the population formatted with a thousands separator.

// Your map should look similar to the following:  
// cityData.forEach(function(city) {
//     console.log(city)
// L.circleMarker(city.location,{
//     radius:city.population/200000,
//     color:"orange",
//     fillColor: '#ffffa1',
//     fillOpacity: 0.4,

// })
// .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString()+ "</h3>")
// .addTo(map);
// });   

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};


// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);
// For the pointToLayer callback function, 
// the basic syntax for adding functionality to a marker is as follows:
// L.geoJson(sanFranAirport, {
//     pointToLayer: function(feature, latlng) {
//       return L.marker(latlng);
//      }
// });

//Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2> "+ feature.properties.city +"</h2>");
//     }
//     }).addTo(map);

L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
     console.log(layer);
      layer.bindPopup();
     }
}).addTo(map);

// Skill Drill
//Edit your logic.js to create a popup marker for San Francisco Airport on a night preview navigation map. When you click on the popup, it will display the city, state, and the name of the airport.
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(feature);
      return L.marker(latlng)
      .bindPopup("<h2> "+ feature.properties.name +" ------------------------------------------------"+ feature.properties.city + "," + feature.properties.country + "</h2>");
    }
    }).addTo(map);
//Your map should look like the following:





// To change the map's style, change the map id using the list of Mapbox ids below:

// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11
// mapbox://styles/mapbox/streets-v11
// mapbox://styles/mapbox/outdoors-v11
// mapbox://styles/mapbox/light-v10
// mapbox://styles/mapbox/dark-v10
// mapbox://styles/mapbox/satellite-v9
// mapbox://styles/mapbox/satellite-streets-v11
// mapbox://styles/mapbox/navigation-day-v1
// mapbox://styles/mapbox/navigation-night-v1.