// WINDOW OBJECT => the window object represents an open window in a browser . it is global object with lots of properties and methods.

// DOM => When a web page is loaded , the browser creates a document object model(dom - it is tree like structure) of the page.

// DOM MANIPULATION
// 1) SELECTING WITH ID => document.getElementByid("myid" - #)
// 2) SELECTING WITH CLASS => document.getElemntByClassName("myclass" - .)
// 3) SELECTING WITH TAG => document.getElementByTagName("p")

// QUERY SELECTOR
// 1) document.querySelector("myid/.myclass/tag") // returns first element.
// 2) document.querySelectorAll("myid/.myclass/tag")// returns a node list.

//PROPERTIES
// .tagName => return tag elemnrts of the node.
// .innerText => returns the text content of the  element and all its children.
// .innerHtml => returns the plain text or html contents in the element.(html element ke sath text bhi aayega)
// .textContent => returns textual content even the hidden elements.

// ATTRIBUTES
//1) getAttribute(attr) // to get attribute value
// 2) setAttribute(attr,value) // to set the attribute val th

// STYLE
// 1) node.style

// INSERT ELEMENT
// 1)node.append(el) => adds at the end of the node(inside)
// 2)node.prepend(el) => adds at the satrt of node (inside)
// 3)node.before(el) =>adds before the node (outside)
// 4)node.after(el) => adds after the node (outside)

// DELETE ELEMENT
// 1)node.remove() => removes the node

// CREATE A ELEMENT => let new btn  = document.createElement("button");


// EVENTS IN JAVASCRIPT
// The change in the state of an object is known as an event. events are fired to notify code of "interesting changes" that may affect code execution.

// 1) MOUSE EVENTS => (click ,double click etc).
// 2) KEYBOARDS EVENTS => (keypress , keyup, keydown).
// 3) FORM EVENTS => (submit etc).
// 4) print event and many more.

//EVENT HANDLING
node.event = () => {
    // handle here
}

//EVENT LISTENERS
// 1) node.addEventListner(event ,callback)
// 2) node.removeEventListner(event ,callback)
btn1.addEventListber("click",() =>{
    console.log("button was clicked")
});

// *NOTE : the callback refernce should be same to remove(same function use variable).