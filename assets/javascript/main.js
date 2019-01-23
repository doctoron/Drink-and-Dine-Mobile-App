$(document).ready(function () {

    let toggle = true;

    $('#recipe-div').hide();

    $('#switch').on('click', function () {

        if (toggle) {
            $('#recipe-div').show();
            $('#drink-div').hide();

            $('#switch').prop('checked', false).change()

<<<<<<< HEAD
        // make opposite of what bool it currently is
        toggle = !toggle
=======
            toggle = !toggle;
>>>>>>> 0559b5cfb70ed286ab4f848f24eef30cb7694a3d

        } else if (!toggle) {
            $('#drink-div').show();
            $('#recipe-div').hide();

<<<<<<< HEAD
        // check the box
        $('#switch').prop('checked', true).change();

        // make opposite of what bool it currently is
        toggle = !toggle;
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
=======
            $('#switch').prop('checked', true).change();
>>>>>>> 0559b5cfb70ed286ab4f848f24eef30cb7694a3d

            toggle = !toggle;
        }

    });
});