var itemList=document.querySelector('#items');
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement)

//child nodes
//console.log(itemList.childnodes);

//children nodes
//console.log(itemList.children)
//console.log(itemList.children[1])
//itemlist.children[1].style.backgroundColor='yellow';

//FirstChild
//console.log(itemList.firstChild);
//FirstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='Hello 1';
//LastChild
//console.log(itemList.lastChild);
//LastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='Hello 4';
//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);
//previousSibling
//console.log(itemList.previousSibling);
//PreviousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//Create Div

var newDiv=document.createElement('div');
newDiv.ClassName='hello ';
newDiv.id='hello 1';
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontsize='30px';
container,insertBefore(newDiv,h1);



