$(document).ready(function () {

    $('#drink-submit-button').on('click', function () {

        $('#drink-row').empty();

        let userInput = $('#drink-input').val().trim();

        //     // Cocktail API with no ID/key required assignment with E6 template string for query
        //     // Search API by ingredient for cocktail drinks
        let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userInput}`

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(response => {
            console.log(response);

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
        let titleDiv = $('<div>');

        $(titleDiv).append(name);
        $(drinkDiv).attr('id', id);

        $(thumb).attr('src', image);
        $(button).attr('id', 'details');
        $(button).attr('name', name);

 
     
        $(titleDiv).attr('id', 'titleDiv');
        

        $(drinkDiv).append(thumb);
        $(drinkDiv).append(titleDiv);
        $(drinkDiv).append(button);
        

        $('#drink-row').append(drinkDiv);

    }

    $(document).on('click', '#details', function () {
        let detailName = $(this).attr('name');
        let newDiv = $('<div>');

        // Prevent reloading the div
        $(this).empty();
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

                let ul = $('<ul>');
                $(newDiv).append(ul);

                for (let i = 1; i < 16; i++) {
                    let strIng = strIngredients + i;
                    let strMeas = strMeasure + i;

                    console.log(eval(strMeas));
                    console.log(eval(strIng));

                    if (!eval(strIng) == "" || !eval(strMeas) == ' ' || !eval(strMeas) == '') {
                        let li = $('<li>');
                        
                        arrIngredients.push(strIng);
                        arrMeasures.push(strMeas);
                        $(ul).append(li);
                        $(li).append(eval(strIng)+" ");
                        $(li).append(eval(strMeas));
                    }
                }
                // let arrMeasures = [];
                // getMeasures = () => {
                //     for (let i = 1; i < 16; i++) {
                //         let strMeasure = str + i
                //         arrMeasures.push(strMeasures);
                // getMeasures();
                // $(detailDiv).append(eval(strMeasures));

            }
        })
    })
})


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
