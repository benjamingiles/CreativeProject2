//const AxolotlURL = "https://axoltlapi.herokuapp.com/";//random each time?
//const BearURL = "https://placebear.com/"; //height/width of pixels
const CatURL = "https://aws.random.cat/meow";//Random each time;
const DogURL = "https://random.dog/woof.json"; //Random each time;
//const DuckURL = "https://random-d.uk/api/v2/random";//Random each time
const FoxURL = "https://randomfox.ca/floof/";//Random each time
//const ShibaURL = "http://shibe.online/api/shibes?count=";//[1-100]&urls=[true/false]&httpsUrls=[true/false]


const NumberOfAnimals = 3;
const SelectedAnimal = animalChooser();// 0 = cats, 1 = dogs, 2 = foxes
//animal = {name:"animal name", image:"somelink.png",cat:false, dog:false, fox:false} and other animals if we get them working
let mainAnimal = 0; // 0 = cats, 1 = dogs, 2 = foxes
let animalArray = [];

function animalChooser() {
  return Math.floor(Math.random() * NumberOfAnimals);
}

async function addCat() {
  let imageLink = "";
/* a cleaner aproach to the results
async function addCat() {
let imageLink = "";

let response = await fetch(CatURL);
console.log(response);

let json = await response.json();
console.log(json);

imageLink = json.file;
console.log(imageLink);

return cat = {name:"cat", image:imageLink, cat:true, dog:false, fox:false};
}
*/
  await fetch(CatURL)
    .then(function(response) {
      console.log(response);
      return response.json();
    }).then (function(json) {
      console.log(json);

      imageLink = json.file;
    });
    console.log(imageLink);
    return cat = {name:"cat", image:imageLink, cat:true, dog:false, fox:false};
}

async function addDog() {
  let imageLink = "";

  await fetch(DogURL)
    .then(function(response) {
      console.log(response);
      return response.json();
    }).then (function(json) {
      console.log(json);

      imageLink = json.url;
    });
    console.log(imageLink);
    return dog = {name:"dog", image:imageLink, cat:false, dog: true, fox:false};
}

async function addFox() {
  let imageLink = "";

  await fetch(FoxURL)
    .then(function(response) {
      console.log(response);
      return response.json();
    }).then (function(json) {
      console.log(json);

      imageLink = json.image;
    });
    console.log(imageLink);
    return fox = {name:"fox", image:imageLink, cat:false, dog: false, fox:true};
}


async function addAnimal(whichAnimal) {
    if (whichAnimal === 0) {
       animalArray.push(await addCat());
    }
    else if (whichAnimal === 1) {
       animalArray.push(await addDog());
    }
    else if (whichAnimal === 2) {
       animalArray.push(await addFox());
    }
}


async function buildArray() {
  let totalAnimals = 1;
  await addAnimal(SelectedAnimal);

  while (totalAnimals != 10) {
    await addAnimal(animalChooser());
    totalAnimals++;
  }
  let results = "";
  for (let i = 0; i < 9; i++) {
    results += '<p>' + animalArray[i].name + '</p>';
    results += '<img src="' + animalArray[i].image + '"/>';
  }
  document.getElementById("image").innerHTML = results;
}
buildArray();



function scrambleArray() {
  for (let i = 0; i < 8; i++) {
    let tempObject = animalArray[i];
    animalArray[i] = animalArray[i + 1];
    animalArray[i + 1] = tempObject;
  }
  for (let i = 0; i < 8; i++) {
    let tempObject = animalArray[i];
    animalArray[i] = animalArray[i + 1];
    animalArray[i + 1] = tempObject;
  }
  for (let i = 1; i < 7; i++) {
    let tempObject = animalArray[i];
    animalArray[i] = animalArray[i + 1];
    animalArray[i + 1] = tempObject;
  }
  for (let i = 1; i < 7; i++) {
    let tempObject = animalArray[i];
    animalArray[i] = animalArray[i + 1];
    animalArray[i + 1] = tempObject;
  }
  for (let i = 8; i >= 0; i--) {
    let tempObject = animalArray[i];
    animalArray[i] = animalArray[i - 1];
    animalArray[i - 1] = tempObject;
  }
}
