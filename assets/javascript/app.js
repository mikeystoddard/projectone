
/* FOOD Pseudocode
    * Create an object of array including properties as follow:  src, id, 
    * Using JS to create new container that carry photo + description + title + Read More link.
    * Use JS to design the page after user click "Read More" (add click event)
    * Under the full article, add a comment box where user can insert text.
    * Triangle point to the right to indicate that user can find more article sliding to the left. 
*/

//===========================FIREBASE===========================
var firebaseConfig = {
    apiKey: "AIzaSyBLCk9PcjvcBnG_SW7pIXwsx8OOHb2S8YE",
    authDomain: "outdoor-ready-project.firebaseapp.com",
    databaseURL: "https://outdoor-ready-project.firebaseio.com",
    projectId: "outdoor-ready-project",
    storageBucket: "outdoor-ready-project.appspot.com",
    messagingSenderId: "474332632525",
    appId: "1:474332632525:web:cf4c108953e7583896e084"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//============= FOOD ===============================================================================================

$(document).ready(function(){

//CAMPING DIV 
var camping = [
    
    {
        src: "assets/images/food/camping.JPG" ,
        headline: "Good morning With The Crackling Fire",
        text: "Summer is here, and so is one of the most adventurous times of the entire year...<a href='food2.html'>Read More</a>"
    } ,
    
    {
        src: "assets/images/food/campingpic.jpg" ,
        headline: "Family Bonding Time Over The Firepit" ,
        text: "You will be pleasantly surprised by the variety of recipes that can be made at the campfire...<a href='food2.html'>Read More</a>"
    } ,

    {
        src: "assets/images/food/grillfood.jpg" ,
        headline: "Chorizo On The Cast Iron" ,
        text: "You will be pleasantly surprised by the variety of recipes that can be made at the campfire...<a href='food2.html'>Read More</a>"

    },

    {
        src: "assets/images/food/easycampfood.jpg" ,
        headline: "Stew On The Grill" ,
        text: "You will be pleasantly surprised by the variety of recipes that can be made at the campfire...<a href='food2.html'>Read More</a>"

    }
]

for (var i = 0 ; i < camping.length ; i++) {

    // Content Div
    var campDiv = $("<div>");
    campDiv.attr("id", "camp");

    // Image Div
    var imageDiv = $("<img>");
    imageDiv.attr("src", camping[i].src);
    imageDiv.addClass("payson")

    // Headline Div
    var headLineDiv = $("<h4>");
    headLineDiv.append(camping[i].headline);

    // Text Div
    var textDiv = $("<div>")
    textDiv.attr("id" , "text")
    textDiv.append(camping[i].text);

    
    campDiv.append([imageDiv, headLineDiv, textDiv]);
    $("#camp-content").append(campDiv)
}


//BACKPACKING DIV
var backpacking = [
    
    {
        src: "assets/images/food/pasta.jpg" ,
        headline: "Quick Easy Food On The Go",
        text: "A question that comes up often is how much food to bring along on a backpacking trip...<a href='food2.html'>Read More</a>"
    } ,
    
    {
        src: "assets/images/food/easyfood.jpg" ,
        headline:"Nourish Youself On A Long Hike",
        text: "You can take most foods backpacking, but it’s best to stick with foods that are portable, lightweight and not too bulky...<a href='food2.html'>Read More</a>"
    } ,

    {
        src: "assets/images/food/macaroni.jpg" ,
        headline:"Lightweight Versions Of Your Favorite Food",
        text: "Macaroni and cheese is a comfort food staple; and boxed versions cook up well in the backcountry....<a href='food2.html'>Read More</a>"
    } ,

    {
        src: "assets/images/food/dehydate.jpg" ,
        headline:"Dehydrate Your Own Meals",
        text: "While it does take more time and preparation, dehydrating your own backpacking meals can save you money...<a href='food2.html'>Read More</a>"
    }
]
for (var j = 0 ; j < backpacking.length ; j++) {

     // Content Div
    var backpackDiv = $("<div>");
    backpackDiv.attr("id", "backpack");

     // Image Div
    var imageDiv = $("<img>");
    imageDiv.attr("src", backpacking[j].src);
    imageDiv.addClass("easyfood")

    // Headline Div
    var headlineDiv = $("<h4>");
    headlineDiv.append(backpacking[j].headline);
    
    // Text Div
    var textDiv = $("<div>");
    textDiv.attr("id", "text")
    textDiv.append(backpacking[j].text);


    backpackDiv.append([imageDiv, headlineDiv, textDiv]);
    $("#backpacking-content").append(backpackDiv)

}

//=============SIGN IN - SIGn UP===============================================================================================
/*Add an event listener to sign up button 
    *Save the data into firebase database 
    *When user click signup, populate user's own info on the page
    */

    var database = firebase.database();

    $("#signup-btn").on("click" , function(){

        event.preventDefault();

        // RETRIEVE INPUT VALUE FROM THE USER
        var email = $("#email").val().trim();
        var userName = $("#username").val().trim();
        var passWord = $("#password").val().trim();

        //CREATE A OBJECT that contain user data 

        var userInfo = {
            enterEmail : email ,
            enterUserName : userName ,
            enterPassword : passWord
        };


        //SAVE those data TO FIREBASE DATABASE
        database.ref().push(userInfo);

        //EMPTY the text-boxes for next input
        $("#email").val("");
        $("#username").val("");
        $("#password").val("");

    });

        // LISTEN for changes in value and use CALLBACK to retrieve the data 
        database.ref().on("child_added" , function(childSnapshot) {

            var userUserName = childSnapshot.val().enterUserName;
            //var userPassword = childSnapshot.val().enterPassword;

            $("#login-btn").on("click" , function() {
                $("#signup-btn").text(enterUserName);
            })

        })





//============= TRAILS - Weather ===============================================================================================
$("#search-btn").on("click" , function () {

var userDestination = $("#name").val().trim();
console.log(userDestination)

$("#name").val("");

//const icon = new Skycons ( { color: '#222'})

// This is our API key. Add your own API key between the ""
var APIKeyWeather = "81770ad1513f8ecb899a3460a5199238";

// Here we are building the URL we need to query the database
var queryURLWeather= "https://api.openweathermap.org/data/2.5/weather?q=" + userDestination + "&appid=" + APIKeyWeather;

// We then created an AJAX call
$.ajax({
    url: queryURLWeather,
    method: "GET"
  }).then(function(response) {

      // Create CODE HERE to Log the queryURL
      console.log(queryURLWeather);

      // Create CODE HERE to log the resulting object
      console.log(response);

       // Create CODE HERE to transfer content to HTML
       var wind = $("#wind").text("Wind speed:" + response.wind.speed);
       var temperature = $("#temperature").text("Temperature:" + response.main.temp);
        var maxTemp = $("#maxtemp").text("Max Temp:" + response.main.temp_max);
        var minTemp = $("#mintemp").text("Min Temp:" + response.main.temp_min);
       var humidity = $("#humidity").text("Humidity:" + response.main.humidity);

       var iconcode = response.weather[0].icon; //Display the icon from openweathermap 
       var iconURL = "http://openweathermap.org/img/w/" + iconcode + '.png'
            var icon = $("#wicon").attr('src', iconURL);

       var description = $("#description").text(response.weather[0].description);


      // Create CODE HERE to calculate the temperature (converted from Kelvin)
      var temp = response.main.temp;
      var maxtemp = response.main.temp_max;
      var mintemp = response.main.temp_min;

        // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
        var farenheit = Math.round(((temp - 273) * 1.80 + 32));
        var maxfarenheit = Math.round(((maxtemp - 273) * 1.80 + 32));
        var minfarenheit = Math.round(((mintemp - 273) * 1.80 + 32));
      
        $("#temperature").text("Temperature:" + " " + farenheit + "F");
        $("#maxtemp").text("Max Temp" + " " + maxfarenheit + "F");
        $("#mintemp").text("Min Temp:" + " " + minfarenheit + "F");

      // Latitude and Longitude
      var latitude = response.coord.lat;
      var longtitude = response.coord.lon;
      var lat = $("#lat").text("Lat:" + response.coord.lat);
      var lon = $("#lon").text("Lon:" + response.coord.lon);

      getTrails(latitude , longtitude);
        }) 

    })


    

 //============= TRAILS - Hiking Trails ===============================================================================================



    //============= GeoLocation - tracking current location ==========================

    function getTrails (lat , lon){
        console.log(lat);
        console.log(lon);

    
    if (navigator.geolocation) //Check if Geolocation is avalaible 
    navigator.geolocation.getCurrentPosition(function(position) { //access to user position using getCurrentPosition and use the callback function to process the returned position object.
        console.log(position);


        var APIKeyTrail = "200707737-a8a73974523ce2a5c9e369f971f9a23e";

        var queryURLTrail = "https://www.hikingproject.com/data/get-trails?lat="+ lat + "&lon=" + lon + "&key=" + APIKeyTrail;
    
        
        $.ajax({
            url: queryURLTrail,
            method: "GET"
          }).then(function(response) {
        
              console.log(queryURLTrail);
        
              console.log(response)
        
            }) 

    }) 
        else ("Location is not supported");
    
}

        //============= Leaflet.js - interactive map ==========================
            // initialize the map on the "map" div with a given center and zoom

            
            var map = L.map('mapid').setView([51.505, -0.09],13);

            var marker = L.marker([0,0]).addTo(map); // Add Marker (DropIn)

            var attribution = '&copy; <a href ="http://www.openstreetmap.org/copyright"> Open Street Map </a> contributors' ;

            var tileURL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
            var tiles =L.tileLayer(tileURL, {attribution});
            tiles.addTo(map);

   
    
    


        









//============= TRAILS - Hiking Trails ===============================================================================================






































})