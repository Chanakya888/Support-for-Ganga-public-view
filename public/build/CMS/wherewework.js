mapboxgl.accessToken = "pk.eyJ1IjoiY2hhbmFreWE4ODgiLCJhIjoiY2tiZ3cyZm8zMGM4bTJycDMwZ2d5ZjQ4byJ9.sGyU0dgyyvXXxSq5sPNUPQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/chanakya888/ckbgwn5wy2kox1iryggn43a0n", // stylesheet location
  center: [77.209023, 28.613939], // starting position [lng, lat]
  zoom: 6, // starting zoom
  maxZoom: 9,
  minZoom: 6,
});
var marker1 = new mapboxgl.Marker().setLngLat([77.209023, 28.613939]).addTo(map); //Delhi
var marker2 = new mapboxgl.Marker().setLngLat([78.032188, 30.316496]).addTo(map); //Dehradun
var marker3 = new mapboxgl.Marker().setLngLat([80.946167, 26.846695]).addTo(map); //Lucknow
