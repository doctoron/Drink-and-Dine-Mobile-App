$(document).ready(function () {

    let toggle = true;

    $('#recipe-div').hide();

    $('#switch').on('click', function () {

        if (toggle) {
            $('#recipe-div').show();
            $('#drink-div').hide();

            $('#switch').prop('checked', false).change()

            toggle = !toggle;

        } else if (!toggle) {
            $('#drink-div').show();
            $('#recipe-div').hide();

            $('#switch').prop('checked', true).change();

            toggle = !toggle;
        }

    });


    /*$('#recipe-submit-button').on('click', function () {

        let userInput = $('#recipe-input').val().trim();

        let YOUR_APP_ID = '13d7fa80';
        let YOUR_APP_KEY = '184c76885e08b40ef3ce55652516e374';

        let queryURL = `https://api.edamam.com/search?q=${userInput}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {

            // get whole response object
            // console.log(response);

            // get specific object within whole response object
            // console.log(response.hits[0].recipe.source);

            // loop through recipes and put them into an object of a function
            for (let i = 0; i < response.hits.length; i++) {
                createRow(response.hits[i].recipe.label, response.hits[i].recipe.ingredients);

            }
        });
    });

    createRow = (name, ingredients) => {

        let newDiv = $('<div>');

        $(newDiv).append(name)

        for (let i = 0; i < ingredients.length; i++) {

            let ingredientsDiv = $('<div>');

            $(ingredientsDiv).append(ingredients[i].text);

            $(newDiv).append(ingredientsDiv);

        }

        $('#row-div').append(newDiv);
    }*/

    $('#drink-submit-button').on('click', function () {

        let userInput = $('#drink-input').val().trim();

        // Cocktail API with no ID/key required assignment with E6 template string for query
        // let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`

        let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userInput}`

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {

            console.log(response.drinks);

            for (let i = 0; i < response.drinks.length; i++) {
                console.log(response.drinks[i].strDrink, response.drinks[i].strDrinkThumb);
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

        let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${detailName}`

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {

            console.log(response.drinks);
            
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
