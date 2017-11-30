function getBreeds(){
  fetch("https://dog.ceo/api/breeds/list").then(data => data.json()).then(object => displayAllBreeds(object))
}


function displayAllBreeds(object){
  let breedArray = object.message
  let breeds = document.querySelector("#dog-breeds")
  breedArray.map(function(breed){
    breeds.innerHTML += `<li><a href="#" class="breed-name">${breed}</a></li>`
  })
}

function getRandomDog(event){
  fetch(`https://dog.ceo/api/breed/${event.innerText}/images/random`).then(data => data.json()).then(object => displayRandomDog(object))
}

function displayRandomDog(object){
  let dogPic = document.querySelector(".dog-pic")
  let image = document.createElement("img")
  image.src = object.message
  dogPic.append(image) 
}

document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'breed-name' ) ) {
        getRandomDog(event.target)
    }
}, false);
