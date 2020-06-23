var client = contentful.createClient({
  space: "xdern2gecb8o",
  accessToken: "NDGVP3ijwxMNC41LHKELruiEgnqYFIYFABJNwX3_ut0",
});

client.getEntries({ content_type: "whatWeDoBox" }).then(function (entries) {
  entries.items.forEach(function (entry) {
    const whatWeDoBoxDescription = documentToHtmlString(entry.fields.whatWeDoBoxDescription);
    document.getElementById("whatWeDoBox").innerHTML += `
    <div class="c-section--dark c-grid-individual-container">
    <h2 class="s-h3 s-text s-text--light s-text--prominent">${entry.fields.whatWeDoBoxTitle}</h2>
    <div class="s-text s-paragraph s-text--light mt-6">
      ${whatWeDoBoxDescription}
    </div>
  </div>
    `;
  });
});

//footer map
mapboxgl.accessToken = "pk.eyJ1IjoiY2hhbmFreWE4ODgiLCJhIjoiY2tiZ3cyZm8zMGM4bTJycDMwZ2d5ZjQ4byJ9.sGyU0dgyyvXXxSq5sPNUPQ";
var map = new mapboxgl.Map({
  container: "footer-map",
  style: "mapbox://styles/chanakya888/ckbgwn5wy2kox1iryggn43a0n", // stylesheet location
  center: [77.200325, 28.564718], // starting position [lng, lat]
  zoom: 9, // starting zoom
  maxZoom: 10,
  minZoom: 8,
});
var marker1 = new mapboxgl.Marker().setLngLat([77.209023, 28.613939]).addTo(map); //Delhi
