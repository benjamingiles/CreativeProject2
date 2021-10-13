



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

  fetch(CatURL)
    .then(function(response) {
      console.log(response);
      return response.json();
    }).then (function(json) {
      console.log(json);

      results = '<img src="' + json.file + '">';

      document.getElementById("image").innerHTML += results;
    });

    fetch(DogURL)
      .then(function(response) {
        console.log(response);
        return response.json();
      }).then (function(json) {
        console.log(json);

        results += '<img src="' + json.url + '">';

        document.getElementById("image").innerHTML += results;
      });

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

fetch(FoxURL)
  .then(function(response) {
    console.log(response);
    return response.json();
  }).then (function(json) {
    console.log(json);

    results += '<img src="' + json.image + '">';

    document.getElementById("image").innerHTML += results;
  });

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
