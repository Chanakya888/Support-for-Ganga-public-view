var client = contentful.createClient({
  space: "xdern2gecb8o",
  accessToken: "NDGVP3ijwxMNC41LHKELruiEgnqYFIYFABJNwX3_ut0",
});

client.getEntry("2IUXvHDY1Cl5zuZ2Qzo0tN").then((entry) => {
  console.log("whoweare entry", entry);
  document.getElementById("whoWeAreLandingDescription").innerHTML = documentToHtmlString(entry.fields.whoWeAreLandingDescription);
  document.getElementById("whoWeAreLandingImage").innerHTML = `
  <div class="c-image__1__container">
    <picture>
      <source srcset="${entry.fields.whoWeAreLandingImage.fields.file.url}?fit=fill&fm=webp" type="image/webp" alt="whoWeAreLandingImage">
      <img class="c-image__source" src="${entry.fields.whoWeAreLandingImage.fields.file.url}?fit=fill" alt="whoWeAreLandingImage">
    </picture>
  </div>
`;
  document.getElementById("GizIndiaQuote").innerHTML = entry.fields.GizIndiaQuote;
  document.getElementById("gizIndiaDescription").innerHTML = documentToHtmlString(entry.fields.gizIndiaDescription);
  document.getElementById("gizImage").innerHTML = `
  <div class="c-image__1__container">
    <picture>
      <source srcset="${entry.fields.gizImage.fields.file.url}?fit=fill&fm=webp" type="image/webp" alt="gizImage">
      <img class="c-image__source" src="${entry.fields.gizImage.fields.file.url}?fit=fill" alt="gizImage">
    </picture>
  </div>
`;
  document.getElementById("partnerToTheLeftTitle").innerHTML = entry.fields.partnerToTheLeftTitle;
  document.getElementById("partnerToTheLeftDescription").innerHTML = documentToHtmlString(entry.fields.partnerToTheLeftDescription);
  document.getElementById("partnerToTheRightTitle").innerHTML = entry.fields.partnerToTheRightTitle;
  document.getElementById("partnerToTheRightDescription").innerHTML = documentToHtmlString(entry.fields.partnerToTheRightDescription);
  document.getElementById("commissioningMinistriesDescription").innerHTML = documentToHtmlString(entry.fields.commissioningMinistriesDescription);
  document.getElementById("commissioningMinistriesImage").innerHTML = `
  <div class="c-image__1__container">
    <picture>
      <source srcset="${entry.fields.commissioningMinistriesImage.fields.file.url}?fit=fill&fm=webp" type="image/webp" alt="gizImage">
      <img class="c-image__source" src="${entry.fields.commissioningMinistriesImage.fields.file.url}?fit=fill" alt="gizImage">
    </picture>
  </div>
`;
  document.getElementById("ministryToTheLeftTitle").innerHTML = entry.fields.ministryToTheLeftTitle;
  document.getElementById("ministryToTheLeftDescription").innerHTML = documentToHtmlString(entry.fields.ministryToTheLeftDescription);
  document.getElementById("ministryToTheLeftWebsiteLinkTitle").innerHTML = entry.fields.ministryToTheLeftWebsiteLinkTitle;
  document.getElementById("ministryToTheRightTitle").innerHTML = entry.fields.ministryToTheRightTitle;
  document.getElementById("ministryToTheRightDescription").innerHTML = documentToHtmlString(entry.fields.ministryToTheRightDescription);
  document.getElementById("ministryToTheRightWebsiteTitle").innerHTML = entry.fields.ministryToTheRightWebsiteTitle;
});

// Content for Landing points
client
  .getEntries({
    content_type: "whoWeAreLandingPoints",
  })
  .then(function (entries) {
    let x = 0;
    entries.items.forEach(function (entry) {
      x = x + 1;
      document.getElementById("whoWeAreLandingPoints").innerHTML += `
        <li><div class="c-container-justify pt-4"><span class="s-text--notprominent">0${x}</span><div class="c-container-align s-list-item-text"><p>${entry.fields.individualPoint}</p><div class="c-hr c-hr__medium"></div></div></li>
        `;
    });
  });

client
  .getEntries({
    content_type: "ourTeam",
  })
  .then(function (entries) {
    console.log(entries);
    entries.items.forEach(function (entry) {
      document.getElementById("ourTeam").innerHTML += `
      <div class="c-gallery__container__item">
      <div class="c-gallery__container__item__container">
        <p class="s-text s-paragraph s-text--prominent mt-6">
          ${entry.fields.nameOfThePerson}
        </p>
        <p class="s-text s-description mt-3">
          ${entry.fields.positionInTheCompany}
        </p>
      </div>
      <div class="c-image__3__container">
      <picture>
            <source srcset="${entry.fields.imageOfThePerson.fields.file.url}?w=600&h=500&fit=fill&fm=webp" type="image/webp" alt="Team member">
            <img class="c-image__source" src="${entry.fields.imageOfThePerson.fields.file.url}?w=600&h=500fit=fill" alt="Team member">
      </picture>
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
