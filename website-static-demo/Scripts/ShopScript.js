
let itemListing;
async function getListing() {
  const response = await fetch("/json test.json");
  itemListing = await response.json();
  showItems();
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


getListing();
function showItems() {
  const listing = document.getElementById("listing")
  for(var i = 0; i < itemListing.length; i++) {
    rnd = getRandomInt(10);
    listing.innerHTML += `  <div class="ItemCard  sketchBorder${rnd%2}" id="ItemCard-${i}" >
    <div class="ImgGraphic">
    <a href="${itemListing[i].ItemPhotos}">
    <img src="${itemListing[i].ItemPhotos}" class="Img${rnd%2}" loading="lazy">
    </a>
    </div>
    <h2 class="Name">
    ${itemListing[i].ItemName}
    </h2>
    <p class="Price">
    $${itemListing[i].ItemPrice}
    </p>
    <p class="Description">
    ${itemListing[i].ItemDescription}
    </p>
    </div>`
  }
}
