// 1. Write a function that takes in a string representing an id and a string representing a url. The function should set the image with that ID to have that url as its image source.
function imageUrl(id, url){
    const grabId = document.querySelector(id)
    grabId.src = url;
}

// 2. Now use that function to set the three images in the Image Area section to show three other images of your choice. You'll need three separate calls to your function!
imageUrl("#image-1", 'https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png');
imageUrl("#image-2", 'https://www.webwise.ie/wp-content/uploads/2016/07/pokemon-go.png');
imageUrl("#image-3", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjE4WBkYuc9SjZQQcWy6VvdXsHXxu8UCx2JR1T6GoGDdlqiIfNWg')

// 3. Now write a function that puts a line through the text of the first `<li>` in the Arguments `<ul>`. (Look up "first child" if you don't know what query to use!). Since it always makes the same query, and changes it in the same way, this function requires no parameters!
function lineThroughFirstChildOfUl(){
    const child = document.querySelector("#arguments").firstChild.innerHTML;
    child.style.textDecoration = "line-through";
}
// 4. Now use it! The first list item should get what's known as a "strikethrough" style.
lineThroughFirstChildOfUl();
// 5. Write a function that always removes the last `<li>` from the Arguments `<ul>`  (try looking up "last child" and "remove node").
function removesLastChildOfUl(){
    const child = document.querySelector("#arguments").lastChild.innerHTML;
    child.removeChild();
}
// 6. Now use it to remove the last two items from that list. You'll need to call it twice!
removesLastChildOfUl();
removesLastChildOfUl();

// 1. Write a function that takes in a node element and appends it to the Arguments `<ul>`.
function appendUl(element){
    const ul = document.querySelector("ul");
    ul.appendChild(element);
}

// 2. Let's use it! Create an image element and pass it into your function. (Note that a <ul> doesn't HAVE to have an `<li>` as its only children! Though ideally it should...) You'll know you've succeeded when the image shows up under at the end of Arguments.
const image = document.createElement("IMG");
const imageUrl = image.src = "https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png";
appendUl(imageUrl);

// 3. Write a function that takes in an image element and makes its height 30 pixels.
function image30(imgElement){
    const image = document.querySelector(imgElement)
    image.height = '30px';
}
// 4. Let's use it. Query and then pass in to the function one of the images in the Image Area. It should become a small 30-pixel image.
image30("#image-1");

// 5. Write a function that takes in an element and gives it the class `invisible`.
function invisible(element) {
    const newElement = document.createElement(element);
    newElement.class.visibility = "hidden";
}

// 6. Now query an element on the page and pass it ino that function. You should see it disappear! (Feel free to check the CSS file to see how this class works.)
invisible('p');
// 7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
function sizeId(id, size){
    const element = document.querySelector(id);
    element.style.fontSize = size;
}

// 8. Try using it to change the size of some text! Up to you what.
sizeId('large', 'large')


// 1. Write function that takes in text and returns a new `<li>` with that text as its `innerText`.
// 2. Test it by placing the return value in a variable and passing it to your append function from Step 1 of Part 2.
// 3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., '3' should give you an `<h3>`) with that text in it.
// 4. Test it by placing the return value in a variable and passing it to your append function from Step 1 of Part 2.