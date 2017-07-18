// 1. First, find our UL Container
ul = document.querySelector('ul')

// 2. Create our Ajax Request
const promise = fetch ('http://swapi.co/api/people/')
  .then(response => response.json())
  .then(function (getIt) {
    for (var i = 0; i < getIt.results.length; i++) {
      (getIt.results[i].name)
      let character = document.createElement("li")
      character.textContent = getIt.results[i].name
      ul.appendChild(character)
    }
  })
