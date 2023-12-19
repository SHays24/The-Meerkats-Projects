/*
<div class="margin item">
    <div class="paper">
    <img class="artImage" src="https://static.wikia.nocookie.net/villainsfanon/images/4/4e/Troll-Face-Meme-PNG.png">
    </div>
</div>
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let artListing;

async function getListing() {
    const response = await fetch("Art/ShowcaseArt.json");
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
        document.getElementById( 'ArtBoard' ).innerHTML += `
        <a href="art.html?photo=${artListing[i].ID}" style="">
        <div class="margin item">
            <div class="paper">
            <img class="artImage" src="Photos/${artListing[id].thumbnail}">
            </div>
        </div>
        </a>`;         //change /Photos to /Art later
    }
}