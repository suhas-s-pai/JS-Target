#Project related to DOM

## project link

[chick here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Suhas")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') body;
    body.style.backgroundColor = e.target.id;
    if (e.target.id === 'white') body;
    body.style.backgroundColor = e.target.id;
    if (e.target.id === 'blue') body;
    body.style.backgroundColor = e.target.id;
    if (e.target.id === 'yellow') body;
    body.style.backgroundColor = e.target.id;
  });
});


```