# 1st Blog Post

So I guess I have a blog now, so, this post is about the infrastructure that makes the blog run. Before I get started lets get this comic out of the way.

![graph of blog post frequency on number of posts about blog infrastructure](https://rakhim.org/images/honestly-undefined/blogging.jpg)

This blog will hopefully lie on a reasonable medium, however this post may offset the balance for now. I'm seeking to write this blog post from a non technical level and this should be evident with the information provided. For this website I have used JavaScript for all "dynamic" elements (more on that later), HTML for formatting and obviously all design, CSS for styling and my custom font is used for headings. These blog posts are written in markdown and converted using the marked.js libary.

***

> Blog is a shortening of the phrase web log -> we blog -> blog

***

## Onto the technology

### Store front/shop 
The storefront is, in my opinion, one of the more clever implementations on this site, some key technologies used are:
 - JSON -- an indexed data storage format that I use as a plaintext database, the basic format is ```"key":"value"``` pairs, with the value for any key being retrievable from any index through this. The basic format for a store entry for my store is:
```JSON
{
"ID": 0,
"ItemName": "Silly Socks",
"ItemPrice": 10,
"ItemPhotos": "link to a photo of the item",
"ItemDescription": "description of the item"
}
```
 - JavaScript(JS) -- a script programming language, this runs in your browser and is what enables blog post loading, interactivity, and the shop.
 - HTML -- HyperText Markup Language, the source of the things you see, the MarkDown is translated into this by marked.js
 - CSS -- Cascading Style Sheet, makes stuff look good, the sketched lines, scrollbar, and most stylistic effects are CSS

#### Breakdown of code

 > tldr: the reason this works at all, is templating, templating is when a predermined scaffold is used to hold values determined by code.

```javascript
  function showItems() {
    const listing = document.getElementById("listing")
    for(var i = 0; i < itemListing.length; i++) { 
```

This code is the first part of the function that shows items, a function is a way you can run many lines of code without copying and pasting them.