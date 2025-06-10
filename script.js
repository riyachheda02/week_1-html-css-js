//by id
 const imgElement = document.getElementById('I1');

console.log('By ID:', imgElement);
//by class
const paraElements = document.getElementsByClassName('b1');

console.log('By Class:', paraElements[0]);
//by tagName
const pTags = document.getElementsByTagName('p');

console.log('By Tag Name:', pTags);

//by selector
const myTitle = document.querySelector('.hi');

console.log('querySelector:', myTitle);

//selector
const allListItems = document.querySelectorAll('ul li');

console.log('querySelectorAll:', allListItems);


myTitle.innerHTML = 'Learning <h6>DOM</h6>';

myTitle.textContent += ' (textContent added)';

myTitle.innerText += ' <h1></h1>[innerText added]';

myTitle.style.color = 'green';

imgElement.style.border = '5px solid blue';

myTitle.classList.add('highlight');

myTitle.classList.remove('hi');

myTitle.classList.toggle('new-class');

console.log('Contains class highlight:', myTitle.classList.contains('highlight'));

console.log('Image src:', imgElement.getAttribute('src'));

imgElement.setAttribute('alt', 'New Alt Text');

imgElement.removeAttribute('height');

console.log('Has alt attribute:', imgElement.hasAttribute('alt'));
//create and inspect new element
const newPara = document.createElement('p');

newPara.textContent = 'This is a dynamically created paragraph.';

document.body.appendChild(newPara);

const hr = document.createElement('hr');

document.body.insertBefore(hr, newPara);

const liTags = document.getElementsByTagName('li');

const newLi = document.createElement('li');

newLi.textContent = 'python';

liTags[0].parentNode.insertBefore(newLi, liTags[1]);


// 11. Removing and Replacing

const listItemToRemove = liTags[0];

listItemToRemove.remove();



newLi.textContent = 'Replaced Item';


const parentList = document.querySelector('ul');

parentList.replaceChild(newLi, parentList.children[1]);



















































































