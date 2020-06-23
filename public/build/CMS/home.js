var client = contentful.createClient({
  space: "xdern2gecb8o",
  accessToken: "NDGVP3ijwxMNC41LHKELruiEgnqYFIYFABJNwX3_ut0",
});

client
  .getEntry("46AfaQIefwQY8P5iFvGepb")
  .then((entry) => {
    HomepageCMS(entry);
    const landingDescription = documentToHtmlString(entry.fields.landingDescription);
    const homePageDescription = documentToHtmlString(entry.fields.homePageDescription);
    document.getElementById("landingDescription").innerHTML = landingDescription;
    document.getElementById("homePageDescription").innerHTML = homePageDescription;
  })

  .catch((error) => console.log(error));

const HomepageCMS = (entry) => {
  document.getElementById("landing-title").innerHTML = entry.fields.landingTitle;
  document.getElementById("landingImage").innerHTML = `
            <div class="c-image__1__container">
              <picture>
                <source srcset="${entry.fields.landingImage.fields.file.url}?fit=fill&fm=webp" type="image/webp" alt="News item">
                <img class="c-image__source" src="${entry.fields.landingImage.fields.file.url}?fit=fill" alt="News item">
              </picture>
            </div>
  `;
  document.getElementById("landingImage2").innerHTML = `
            <div class="c-image__1__container">
              <picture>
                <source srcset="${entry.fields.landingImage2.fields.file.url}?fit=fill&fm=webp" type="image/webp" alt="News item">
                <img class="c-image__source" src="${entry.fields.landingImage2.fields.file.url}?fit=fill" alt="News item">
              </picture>
            </div>
  `;
  document.getElementById("fullScreenImage").innerHTML = `
  <div class="c-image__2__container">
    <picture>
      <source srcset="${entry.fields.fullScreenImage.fields.file.url}?fit=fill&fm=webp" type="image/webp" alt="News item">
      <img class="c-image__source" src="${entry.fields.fullScreenImage.fields.file.url}?fit=fill" alt="News item">
    </picture>
  </div>
`;
};

// Content for news and updates
client
  .getEntries({
    content_type: "newsAndUpdates",
  })
  .then(function (entries) {
    let x = 0;
    entries.items.forEach(function (entry) {
      x = x + 1;
      const newsDescription = documentToHtmlString(entry.fields.newsDescription);
      document.getElementById("news-and-updates").innerHTML += `
      <div class="c-gallery__container__item cursor-pointer">
      <div class="c-gallery__container__item__container">
        <p class="s-text s-description s-text--light">
          0${x}
        </p>
        <p class="s-text s-paragraph s-text--light s-text--prominent mt-6">
          ${entry.fields.newsTitle}
        </p>
        <div class="s-text s-description s-text--light mt-3">
          ${newsDescription}
        </div>
      </div>
      <div class="c-image__3__container">   
      <picture>
        <source srcset="${entry.fields.newsImage.fields.file.url}?w=600&h=500&fit=fill&fm=webp" type="image/webp" alt="News item">
        <img class="c-image__source" src="${entry.fields.newsImage.fields.file.url}?w=600&h=500fit=fill" alt="News item">
      </picture>
      </div>
    </div>`;
    });
  });

// Content for Resources
client
  .getEntries({
    content_type: "resources",
  })
  .then(function (entries) {
    console.log(JSON.stringify(entries));
    let x = 0;
    entries.items.forEach(function (entry) {
      x = x + 1;
      const newsDescription = documentToHtmlString(entry.fields.resourceDescription);
      document.getElementById("resources").innerHTML += `
        <div class="c-gallery__container__item">
        <div class="c-gallery__container__item__container">
          <p class="s-text s-description">
            0${x}
          </p>
          <p class="s-text s-paragraph s-text--prominent mt-6">
            ${entry.fields.resourceTitle}
          </p>
          <p class="s-text s-description mt-3">
            ${newsDescription}
          </p>
        </div>
        <div class="c-image__3__container">
          <picture>
          <source srcset="${entry.fields.resourcesImage.fields.file.url}?w=600&h=500&fit=fill&fm=webp" type="image/webp" alt="Resources Item">
          <img class="c-image__source" src="${entry.fields.resourcesImage.fields.file.url}?w=600&h=500fit=fill" alt="Resources Item">
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
