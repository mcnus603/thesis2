
var sourceNames = [];
var sourceColors = [];
var sourceIds = [];
var aylienKey = "2ad6a3d3b013e440ad7b76a4f6605e52";
var aylienId = " 348b50d1";

var jsonArray = [];
console.log('hello')


//load and parse JSON
$.getJSON("sources.json", function(json){
  jsonArray = json.content.sources
  console.log(jsonArray);

  for (var i = 0; i < jsonArray.length; i++) {
  	var hex = jsonArray[i].hex;
  	var id = jsonArray[i].NewsAPI_id;
  	var name = jsonArray[i].name;

  	sourceNames.push(name);
  	sourceColors.push(hex);
  	sourceIds.push(id);

  	var el = document.createElement('h1');
  	el.innerHTML = name;
  	el.style.color = "#" + hex;
  	document.body.appendChild(el);

  }
});

//FACEBOOK API

//posts from public pages
//get each facebook page id
//python 


//on a post:
// Actions on page
// Page views
// Page likes
// Reach
// Post engagements



//call News API

// var searchTopic = "immigration";

// var url = "https://api.newsapi.aylien.com/api/v1/stories?X-AYLIEN-NewsAPI-Application-ID=" + aylienId +"?X-AYLIEN-NewsAPI-Application-Key" + aylienKey + "?title=immigration&published_at.start=NOW-60DAYS%2FDAY&published_at.end=NOW&sort_by=source.rankings.alexa.rank&sort_direction=asc";
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })