# project1
UCF Coding Bootcamp Project #1



Assignment to groups for projects today.  

Goal: Build Something Awesome ...
• The Idea Machine: http://www.ideamachine.io/#view-ideas-top 
• Ideas Watch: https://www.ideaswatch.com/startup-ideas/app
• Web Based Project Ideas & Topics: http://nevonprojects.com/web-based-project-ideas-topics/

First, how do we build a git repo that branches to all the members in the group?
Done

Requirements:
☐ Must uses at least two APIs
1. TBD: https://developers.zomato.com/documentation#!/common/collections
2. TBD: https://developer.edamam.com/edamam-recipe-api
☐ Must use AJAX to pull data:
i.e.
$.ajax( {
url: queryURL,
method: “GET”  } )
.done(function(response) {
for (var i = 0; i < response.data.length; i++) {
var aDiv = $(“ <div> ”;
var pTag = $(“ <p></p> ”);
var anImage = $('');
anImage.attr("src",response.data[i].images.fixed_height.url);
aFoodDiv.append(pTag);
aFoodDiv.append(anImage);
$("#gifs-appear-here").append(aFoodDiv);

☐ Must utilize at least one new library or technology that we haven’t discussed: 
	A collective list of APISs, Go Build something...(Awesome)
	https://apilist.fun/
	Traitify - Capture Employee Personalities  https://app.traitify.com/developer
	
☐ Must have a polished frontend / UI
	https://www.w3schools.com/bootstrap/bootstrap_templates.asp

☐ Must meet good quality coding standards (indentation, scoping, naming)

☐ Must NOT use alerts, confirms, or prompts (look into modals!) 

☐ Must have some sort of repeating element (table, columns, etc)

☐ Must use Bootstrap or Alternative CSS Framework

☐ Must be Deployed (GitHub Pages or Firebase)

☐ Must have User Input Validation

☐ Presentation Date:  January 29, 2019
	(possibly earlier TBD)
	Two Weeks from Today 

Nice to have:
☐ Utilize firebase for Persistent Data Storage (consider this basically a requirement).

☐ Mobile Responsivness

☐ Use an alternative CSS framework

#UCF #Bootcamp #group #project1 #Bootstrap #API #CSS #ajax  #Muktiar.Luna.Christian.Ronald
## Project & Features
## SuperFood: SmartList
1. Determine if user is going to []Eat out or []Cook
2. Determine location by zip
3. Perform search by cuisine []Chinese    []Italian    []Fast Food  
   Cooking:
   Request Ingredients: (user input)
   Search for recipies using ingredients
   Display meal choices from ajax call
   [] 'Surpise Me' Button will bypass user input and return random recipies
4. Eat out choice provides a list ordered by zip code distance.

