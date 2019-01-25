$(document).ready(function () {

    $('#recipe-submit-button').on('click', function () {

        $('#food-row').empty();

        let userInput = $('#recipe-input').val().trim();
        // API key and ID
        let YOUR_APP_ID = '13d7fa80';
        let YOUR_APP_KEY = '184c76885e08b40ef3ce55652516e374';
        // ES6 Template string
        let queryURL = `https://api.edamam.com/search?q=${userInput}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {

            for (let i = 0; i < response.hits.length; i++) {
    
              //  console.log(response.hits[i])
            
                let hits = response.hits[i].recipe ;
                createRecipeRow(hits.label, hits.image, hits.ingredientLines)

            }

        });
    });

    //how to set dynamic image source jquery

    createRecipeRow = (name, image, ingredients) => {

        console.log(name, image, ingredients)

        

        let recipeDiv = $('<div>');
        let recipeImage = $('<img>');
        $(recipeImage).attr('src', image)

        $(recipeDiv).append(name)


        $(recipeDiv).append(recipeImage)

        $("#food-row").append(recipeDiv)

        for (let i = 0; i < ingredients.length; i++) {
            
            let ingredientLinesdiv = $('<div>');
           
            $(ingredientLinesdiv).append(ingredients[i])

            $(recipeDiv).append(ingredientLinesdiv)
    
        
            
        }
 
        


    }


});

