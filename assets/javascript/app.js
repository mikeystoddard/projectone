
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





//=============SIGN IN - SIGn UP===============================================================================================












































}) //end of document.ready