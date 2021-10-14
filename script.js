



const AxolotlURL = "https://axoltlapi.herokuapp.com/";//random each time?
//const BearURL = "https://placebear.com/"; //height/width of pixels
const CatURL = "https://aws.random.cat/meow";//Random each time;
const DogURL = "https://random.dog/woof.json"; //Random each time;
const DuckURL = "https://random-d.uk/api/v2/random";//Random each time
const FoxURL = "https://randomfox.ca/floof/";//Random each time
const ShibaURL = "http://shibe.online/api/shibes?count=";//[1-100]&urls=[true/false]&httpsUrls=[true/false]

let results = "";

/*  I don't have the knowledge to know if this server is broken or if I don't have the
    knowledge to know that it is broken.
*/
/*
fetch(AxolotlURL, {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
  })
  .then(function(response) {
    console.log(response);
    return response.json();
  }).then (function(json) {
    console.log(json);

    let results = "";
    results += '<img src="' + json.url + '">"';

    document.getElementById("image").innerHTML = results;
  });
  */





//Doesn't work Maybe, not sure;
/*
      fetch(DuckURL)
        .then(function(response) {
          console.log(response);
          return response.json();
        }).then (function(json) {
          console.log(json);

          results += '<img src="' + json.url + '">';

          document.getElementById("image").innerHTML += results;
        });
*/



// has access control allow origin issues
/*
  fetch(ShibaURL + "count=1&urls=true")
    .then(function(response) {
      console.log(response);
      return response.json();
    }).then (function(json) {
      console.log(json);

      results += '<img src="' + json[0] + '">';

      document.getElementById("image").innerHTML += results;
    });
*/
function animalChooser() {
  return Math.random() * NumberOfAnimals;
}

const NumberOfAnimals = 3;
const SelectedAnimal = animalChooser();// 0 = cats, 1 = dogs, 2 = foxes
//animal = {image:"somelink.png",cat:false, dog:false, fox:false} and other animals if we get them working
let mainAnimal = 0; // 0 = cats, 1 = dogs, 2 = foxes
let animalArray;

function addCat() {
  let imageLink = "";

  fetch(CatURL)
    .then(function(response) {
      console.log(response);
      return response.json();
    }).then (function(json) {
      console.log(json);

      imageLink = json.file;
    });

    return cat = {image:imageLink, cat:true, dog:false, fox:false};
}

function addDog() {
  let imageLink = "";

  fetch(DogURL)
    .then(function(response) {
      console.log(response);
      return response.json();
    }).then (function(json) {
      console.log(json);

      imageLink = json.url;
    });

    return dog = {image:imageLink, cat:false, dog: true, fox:false};
}

function addFox() {
  let imageLink = "";

  fetch(FoxURL)
    .then(function(response) {
      console.log(response);
      return response.json();
    }).then (function(json) {
      console.log(json);

      imageLink = json.image;
    });

    return fox = {image:imageLink, cat:false, dog: false, fox:true};
}

function addAnimal(whichAnimal, amountOfAnimal) {
  for (let i = 0; i < totalAnimals; i++) {
    if (whichAnimal === 0) {
      await animalArray.push(addCat());
    }
    else if (whichAnimal === 1) {
      await animalArray.push(addDog());
    }
    else if (whichAnimal === 2) {
      await animalArray.push(addFox());
    }
  }
}


function setMainAnimal() {
  mainAnimal = animalChooser();
}

function pickAnimalAmount(animalNum) {
  let amount = (Math.random() * animalNum) + 1;
  return amount;
}

function buildArray() {
  let totalAnimals = 0;
  setMainAnimal();
  totalAnimals = pickAnimalAmount(9);

  addAnimal(mainAnimal, totalAnimals);

  while (totalAnimals != 9) {
    //todo: add have chose which animal to use then set a number of how much of that via a for loop untill the array has 9 objects.
    let currentAnimal = animalChooser();
    while (currentAnimal === mainAnimal) {
      currentAnimal = animalChooser();
    }
    addAnimal(currentAnimal, pickAnimalAmount(9 - totalAnimals));

  }
}
