
$(document).ready(function () {

    $('#drink-submit-button').on('click', function () {

        $('#drink-row').empty();

        let userInput = $('#drink-input').val().trim();

        // Cocktail API with no ID/key required assignment with E6 template string for query
        // let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`

        let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userInput}`

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {

            // console.log(response.drinks);

            for (let i = 0; i < response.drinks.length; i++) {
                // console.log(response.drinks[i].strDrink, response.drinks[i].strDrinkThumb);
                createDrinkRow(response.drinks[i].strDrink, response.drinks[i].strDrinkThumb);
            }
        });
    });

    createDrinkRow = (name, image) => {
        let drinkDiv = $('<div>');
        let thumb = $('<img>');
        let button = $('<button>');

        $(thumb).attr('src', image);
        $(button).attr('id', 'details');
        $(button).attr('name', name)

        $(drinkDiv).append(thumb);
        $(drinkDiv).append(name);
        $(drinkDiv).append(button);

        $('#drink-row').append(drinkDiv);

    }

    $(document).on('click', '#details', function () {

        let detailName = $(this).attr('name');

        let detailDiv = $('<div>');
        $(this).append(detailDiv);

        let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${detailName}`

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {

            console.log(response.drinks)

            let strIngredients = 'response.drinks[0].strIngredient';
            let strMeasure = "response.drinks[0].strMeasure";
            let arrIngredients = [];

            for (let i = 1; i < 16; i++) {
                let ingredient = str + i;

                arr.push(ingredient);

                //$(detailDiv).append(eval(ingredient));
                
            }

            console.log(arr)
            

        });

    });

});



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
