
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
        }).then(function (response) {
            console.log(response.drinks);

            for (let i = 0; i < response.drinks.length; i++) {
                createDrinkRow(response.drinks[i].strDrink, response.drinks[i].strDrinkThumb, i);
            }
        });
    });

    createDrinkRow = (name, image, id) => {
        let drinkDiv = $('<div>');
        let thumb = $('<img>');
        let button = $('<button>');

        $(drinkDiv).attr('id', id);

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
        }).then(function (response) {
            for (let i = 0; i < response.drinks.length; i++) {
                console.log(response);
                console.log('full array: ' + response.drinks[0].strIngredient1);
                console.log('loop through instructions to find this: ' + response.drinks[i].strInstructions);
                console.log(response.drinks[0].strIngredient+i);

                let str = response.drinks[0].strIngredient1;
                console.log(str);
                str = str.substring(0, str.length -1);

                $(newDiv).append(response.drinks[i].strInstructions);
                console.log(str);
                for (let i = 1; i < 16; i++) {
                    // let strIngredients = 'response.drinks[0].strIngredient';
                    // let strMeasure = 'response.drinks[0].strMeasure';
                    let arrIngredients = [];
                    // let arrMeasures = [];
                    ingredient = str + i;
                    arrIngredients.push(ingredient[i]);
                    // let measure = strMeasure + i;
                    // arrMeasure.push(measure[i]);

                    console.log(strIngredients);
                    console.log(arrIngredients);
                    // console.log(strMeasure);

                    getIngredients = () => {
                        for (let i = 1; i < 16; i++) {
                            let strIngredient = str + i
                            console.log(strIngredient);
                            arrIngredients.push(strIngredient);
                            getIngredients();
                            $(detailDiv).append(eval(strIngredient));
                        }
                        // let arrMeasures = [];
                        // getMeasures = () => {
                        //     for (let i = 1; i < 16; i++) {
                        //         let strMeasure = str + i
                        //         arrMeasures.push(strMeasures);
                        // getMeasures();
                        // $(detailDiv).append(eval(strMeasures));
                    }
                }
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
