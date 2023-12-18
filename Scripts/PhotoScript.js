let photoListing;

async function getListing() {
  const response = await fetch("Photos/photos.json");
  photoListing = await response.json();
  //loadPosts();
}
async function getPageSearch() {
  let params = new URL(document.location).searchParams;
  let name = params.get("photo");
  await getListing();
  if (name == null) {
    loadPhotos();
  } else {
    console.log(name);
    showPhoto(name);
  }
}
/*getListing();*/
getPageSearch();
function loadPhotos() {
  for (var i = 0; i < photoListing.length; i=i+1) {
    document.getElementById( 'grid' ).innerHTML += `
    <a href="Photo.html?photo=${photoListing[i].ID}" class="item">
      <img src="Photos/${photoListing[i].thumbnail}" class="photo" loading="lazy">
    </a>`;
  }
}
function showPhoto(id) {
  var photo;
    page = `<div id='photo'><img src="Photos/${photoListing[id].url}"></div>`;
    document.getElementById('grid').innerHTML += page;
  element = document.getElementById('banner');
  element.remove();
}