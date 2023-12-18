let blogListing;
var renderer = new marked.Renderer()

renderer.link = function(href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`
}
const markedRenderer = new marked.Marked(
  markedHighlight.markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      if ( ['nohighlight', 'plaintext'].includes(('' + lang).trim())) {
        return code;
      } else {
        const language = hljs.getLanguage(lang);
        if (typeof language === 'undefined') {
          return hljs.highlightAuto(code).value;
        } else {
          console.log("highlighting", lang, language);
          return hljs.highlight(code, {language: language.name, ignoreIllegals: true }).value;
        }
      }
    }
  })
);
/*marked.use({
  renderer,
  gfm: true,
  highlight: function(code) {
    return hljs.highlightAuto(code).value
  },
});*/
async function getListing() {
  const response = await fetch("Posts/posts.json");
  blogListing = await response.json();
  //loadPosts();
}
async function getPageSearch() {
  let params = new URL(document.location).searchParams;
  let name = params.get("page");
  await getListing();
  if (name == null) {
    loadPosts();
  } else {
    console.log(name);
    showPost(name);
  }
}
/*getListing();*/
getPageSearch();
function loadPosts() {
  for (var i = 0; i < blogListing.length; i=i+1) {
    var content = markedRenderer.parse(blogListing[i].description);
    document.getElementById( 'my-container' ).innerHTML += `
    <a href="Blog.html?page=${blogListing[i].ID}">
      <div id='blogPreview'>
        <h1>${blogListing[i].publDate}<span style="float: right">${blogListing[i].title}</span></h1>
        <img src="${blogListing[i].banner}" style='width: 100%' class='sketchBorder' loading="lazy">
      <div id='body'>
    ` + content + "</div></div></a>";
  }
}
function showPost(id) {
  var page;
  fetch( blogListing[id].postURL )
  .then( response => response.text() )
  .then( (result) => {
    var content = markedRenderer.parse(result);
    page = "<div id='post'>" + content + "</div>";
    document.getElementById('my-container').innerHTML += page;
  });
  document.getElementById('banner').src = blogListing[id].banner;
}