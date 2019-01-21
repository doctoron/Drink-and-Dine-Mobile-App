$(document).ready(function() {

    // var that switches between drinks and food div
    let toggle = true;
    
    // hide drink div first
    $('#drink-div').hide();
    
    // click for toggling drink/food div
    $('.slider').on("click", function () {
        console.log("I've been switched!")
        // toggle between default and recipe
        if (toggle) {
            $('#recipe-div').hide();
            $('#drink-div').show();
    
            // slide the toggle to switch
            $('#switch').prop('checked', false).change()
            // make opposite of current boolean value
            !toggle;
    
        } else if (!toggle) {
            $('#recipe-div').show();
            $('#drink-div').hide();
    
            // check the box
            $('#switch').prop('checked', true).change();
    
            // make opposite of what bool it currently is
            !toggle;
        }
    
    });
    
    
    // onclick for recipe submit 
    $("#recipe-submit-button").on("click", function () {
    
        // get user input
        let userInput = $('#recipe-input').val().trim();
    
        // API key and ID
        let YOUR_APP_ID = '13d7fa80';
        let YOUR_APP_KEY = '184c76885e08b40ef3ce55652516e374';
    
        // ES6 Template string
        let queryURL = `https://api.edamam.com/search?q=${userInput}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
    
            // get whole response object
            console.log(response);
    
            // get specific object within whole response object
            console.log(response.hits[0].recipe.source);
    
            // loop through recipes and put them into an object of a function
            for (let i = 0; i < response.hits.length; i++) {
                createRow(response.hits[i].recipe.label, response.hits[i].recipe.ingredients);
    
            }
        });
    });
    
    // create row function that accepts 
    createRow = (name, ingredients) => {
    
        // create new div
        let newDiv = $('<div>');
    
        // append name of recipe to new div
        $(newDiv).append(name)
    
        // loop through ingredients
        for (let i = 0; i < ingredients.length; i++) {
    
            // create new div
            let ingredientsDiv = $('<div>');
    
            // append ingredients to div
            $(ingredientsDiv).append(ingredients[i].text);
    
            // append ingredients div to main div
            $(newDiv).append(ingredientsDiv);
    
            console.log(ingredients[i])
        }
    
        // append main div to html div
        $('#row-div').append(newDiv);
    }
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
    // queryURL by drink name:
    $("#drink-submit-button").on("click", function () {
    
        let userInput = $('#drink-input').val().trim();
        let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {        
            // console.log(response);
            // get specific object within whole response object
            // get ingredients:
    console.log(response.drinks[0].strIngredient1);
    
        // Extremely wet console.log test !!!
            // console.log(response.drinks[0].strIngredient2);
            // console.log(response.drinks[0].strIngredient3);
            // console.log(response.drinks[0].strIngredient4);
            // console.log(response.drinks[0].strIngredient5);
            // console.log(response.drinks[0].strMeasure1);
            // console.log(response.drinks[0].strMeasure2);
            // console.log(response.drinks[0].strMeasure3);
            // console.log(response.drinks[0].strMeasure4);
            // console.log(response.drinks[0].strMeasure5);
            // console.log(response.drinks[1].strIngredient1);
            // console.log(response.drinks[1].strIngredient2);
            // console.log(response.drinks[1].strIngredient3);
            // console.log(response.drinks[1].strIngredient4);
            // console.log(response.drinks[1].strIngredient5);
            // console.log(response.drinks[1].strMeasure1);
            // console.log(response.drinks[1].strMeasure2);
            // console.log(response.drinks[1].strMeasure3);
            // console.log(response.drinks[1].strMeasure4);
            // console.log(response.drinks[1].strMeasure5);
                
        /* Will need a function to loop through the results and add 
        results until there is a NULL entry */
        for (let i = 0; i < response.drinks.length; i++) {
            console.log(str.truncate,13(response.drinks[i]));
            //console.log(`Ingredients: ${response.drinks[0].strIngredient1} ${response.drinks[0].strMeasure1}`);        
        
    //Need to shorten the ingredients response string;
    
    // console.log(str.truncate(13,response.drinks[0]strIngredient));        
    //     createRow(response.drinks[i].str.slice(strIngredien.label, response.hits[i].recipe.ingredients);
    
            }
    
        });
    });
    })