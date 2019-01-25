// Initialize Firebase
var config = {
    apiKey: "AIzaSyCBsImEhzdS6ukUkH6UaPtcQdMh6aEpfn4",
    authDomain: "drink-n-dine.firebaseapp.com",
    databaseURL: "https://drink-n-dine.firebaseio.com",
    projectId: "drink-n-dine",
    storageBucket: "drink-n-dine.appspot.com",
    messagingSenderId: "339528818297"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

var database = firebase.database();

$(document).ready(function () {

    $('#drink-submit-button').on('click', function () {

        $('#drink-row').empty();

        let userInput = $('#drink-input').val().trim();

        database.ref('/drink').set({
            lastSearch: userInput,
        });

        //     // Cocktail API with no ID/key required assignment with E6 template string for query
        //     // Search API by ingredient for cocktail drinks
        let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userInput}`

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(response => {
            console.log(response.drinks);

            // Grab name and thumbnail image of drinks from response
            for (let i = 0; i < response.drinks.length; i++) {
                createDrinkRow(response.drinks[i].strDrink, response.drinks[i].strDrinkThumb, i);
            }
        });
    });
    // Prepare to display results and a button for additional details
    createDrinkRow = (name, image, id) => {
        let drinkDiv = $('<div>');
        let thumb = $('<img>');
        let button = $('<button>');

        $(drinkDiv).attr('id', id);

        $(thumb).attr('src', image);
        $(button).attr('id', 'details');
        $(button).attr('name', name);

        $(drinkDiv).append(thumb);
        $(drinkDiv).append(name);
        $(drinkDiv).append(button);

        $('#drink-row').append(drinkDiv);

    }

    $(document).on('click', '#details', function () {

        let detailName = $(this).attr('name');
        let newDiv = $('<div>');
        $(this).append(newDiv)
        console.log('The name of this ' + 'drink is: ' + detailName);

        let detailDiv = $('<div>');
        $(this).append(detailDiv);

        //Search by cocktail drink name
        let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${detailName}`

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(response => {
            for (let i = 0; i < response.drinks.length; i++) {
                console.log(response);

                $(newDiv).append(response.drinks[i].strInstructions);

                let strIngredients = 'response.drinks[0].strIngredient';
                let strMeasure = 'response.drinks[0].strMeasure';

                // Create variables for ingredients & measurements 
                let arrIngredients = [];
                let arrMeasures = [];

                console.log(strIngredients);
                console.log(arrIngredients);

                for (let i = 1; i < 16; i++) {
                    let strIng = strIngredients + i;
                    console.log(eval(strIng));

                    let strMeas = strMeasure + i;
                    console.log(eval(strMeas));

                    arrIngredients.push(strIng);
                    arrMeasures.push(strMeas);

                    $(newDiv).append(eval(strIng));
                    $(newDiv).append(eval(strMeas));
                }
                // let arrMeasures = [];
                // getMeasures = () => {
                //     for (let i = 1; i < 16; i++) {
                //         let strMeasure = str + i
                //         arrMeasures.push(strMeasures);
                // getMeasures();
                // $(detailDiv).append(eval(strMeasures));

            }
        });
    });
});

database.ref('/drink').on("value", function (snapshot) {

    var sv = snapshot.val();

    $('#drink-last-search').text(sv.lastSearch);

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


/*        let detailsDiv = $('<div>');

        $(detailsDiv).attr(this);

        $(detailsDiv).append(this);

        $('#details-div').append(detailsDiv);*/

//------------------------------------------------------------------------
// Drink Image:
// https://www.thecocktaildb.com/images/ingredients/ice-Medium.png (350x350 pixels)
// 
// Filter searches:
// queryURL by drink ingredient:
// var drinkIn;
// let queryURl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkIngred}`
//------------------------------------------------------------------------
// queryURL non-alcoholic:
// var drinkNA;
// let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
//------------------------------------------------------------------------

