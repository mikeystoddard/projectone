/* FOOD Pseudocode
    * Create an object of array including properties as follow:  src, id, 
    * Using JS to create new container that carry photo + description + title + Read More link.
    * Use JS to design the page after user click "Read More" (add click event)
    * Under the full article, add a comment box where user can insert text.
    * Triangle point to the right to indicate that user can find more article sliding to the left. 
*/

//===========================FOOD===========================
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
    textDiv.append(camping[i].text);

    
    campDiv.append([imageDiv, headLineDiv, textDiv]);
    $("#camp-content").append(campDiv)
}


//BACKPACKING DIV
var backpacking = [
    
    {
        src: "assets/images/food/pasta.jpg" ,
        headline: "",
        text: "A question that comes up often is how much food to bring along on a backpacking trip...<a href='food2.html'>Read More</a>"
    } ,
    
    {
        src: "assets/images/food/easyfood.jpg" ,
        headline:" ",
        text: "You can take most foods backpacking, but it’s best to stick with foods that are portable, lightweight and not too bulky...<a href='food2.html'>Read More</a>"
    }
]
for (var j = 0 ; j < backpacking.length ; j++) {

    var backpackDiv = $("<div>");
    backpackDiv.attr("id", "backpack");

    var imageDiv = $("<img>");
    imageDiv.attr("src", backpacking[j].src);
    imageDiv.addClass("easyfood")

    
    backpackDiv.append(imageDiv);
    $("#backpacking-content").append(backpackDiv)

}

//======================================================























































}) //end of document.ready