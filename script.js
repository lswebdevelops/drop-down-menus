

let lastClickedParaItem;

document.querySelectorAll('.items').forEach(paraItem => {
  paraItem.addEventListener('click', event => {
    // Get the parent ul element of the clicked paraItem element
    const parentUl = event.target.parentElement;

    // Select all the li elements that are children of the parent ul element
    const listItems = parentUl.querySelectorAll('li');

    // Loop through the list of li elements and toggle their class
    listItems.forEach(li => li.classList.toggle('close'));

    // Toggle the class of the last list of items clicked
    if (lastClickedParaItem) {
      const lastListItems = lastClickedParaItem.parentElement.querySelectorAll('li');
      lastListItems.forEach(li => li.classList.toggle('close'));
    }

    // Update the lastClickedParaItem variable
    lastClickedParaItem = event.target;
  });
});



















// giving the list items text content
const programmingLanguages = ['JavaScript', 'Java', 'Python', 'C++', 'C#', 'PHP' , 'Ruby'];

document.querySelectorAll('ul .sub-item').forEach((li, index) => {
  li.textContent = programmingLanguages[index];
});

const frameWorks = ['Bootstrap', 'Ruby on Rails', 'Torch', 'scss', 'saas#', 'Tailwind' , 'React'];
document.querySelectorAll('.items2 .sub-item').forEach((li, index) => {
  li.textContent = frameWorks[index];
});
// an array of types of elements in javascript
const typesOfElements = ['Array', 'Object', 'String', 'Number', 'Boolean', 'Undefined', 'Null'];
document.querySelectorAll('.items3 .sub-item').forEach((li, index) => {
  li.textContent = typesOfElements[index];
});

// an array of types of frameworks for css
const cssFrameworks = ['Bootstrap', 'Materialize', 'Foundation', 'Bulma', 'Semantic UI', 'Tailwind'];
document.querySelectorAll('.items4 .sub-item').forEach((li, index) => {
  li.textContent = cssFrameworks[index];
});

// an array of types of frameworks for js
const jsFrameworks = ['React', 'Angular', 'Vue', 'Ember', 'Meteor', 'Backbone'];
document.querySelectorAll('.items5 .sub-item').forEach((li, index) => {
  li.textContent = jsFrameworks[index];
});


