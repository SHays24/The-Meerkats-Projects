let artListing;

async function getListing() {
  const response = await fetch("Art/art.json");
  artListing = await response.json();
  //loadPosts();
}
async function getPageSearch() {
  let params = new URL(document.location).searchParams;
  let name = params.get("art");
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
  for (var i = 0; i < artListing.length; i=i+1) {
    document.getElementById( 'grid' ).innerHTML += `
    <a href="art.html?phoyo=${artListing[i].ID}" class="item">
      <img src="Art/${artListing[i].thumbnail}" class="photo" loading="lazy">
    </a>`;
  }
}
function showPhoto(id) {
  page = `<div id='photo'><img src="Art/${artListing[id].url}"></div>`;
  document.getElementById('grid').innerHTML += page;
  element = document.getElementById('banner');
  element.remove();
}