// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector(".expandButton");
    console.log(this.expandButton.parentNode);
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => { this.expandArticle() });
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.expandButton.parentNode.classList.toggle("article-open");
    
    this.expandButton.textContent == 'Click to Expand' ? this.expandButton.textContent = 'Click to Collapse' : this.expandButton.textContent = 'Click to Expand';
    this.expandButton.parentNode.classList.contains("article-open") ? TweenMax.fromTo(this.expandButton.parentNode, 1, {height:50}, {height:400}) : TweenMax.fromTo(this.expandButton.parentNode, 1, {height:400}, {height:50});
  }
}

// START HERE: 

// - Select all classes named ".article" and assign that value to the articles variable.  
const articles = document.querySelectorAll(".article");
// - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList 
// and create a new instance of Article by passing in each article as a parameter to the Article class.

articles.forEach(e => {
const articleInstance = new Article(e);
});

