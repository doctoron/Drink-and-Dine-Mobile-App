
let toggle = true;

$('#drink-div').hide();

$('#switch').on("click", function () {

    if (toggle) {
        $('#recipe-div').hide();
        $('#drink-div').show();

        $('#switch').prop('checked', false).change()

        toggle = false;

    } else if (!toggle) {
        $('#recipe-div').show();
        $('#drink-div').hide();

        $('#switch').prop('checked', true).change()

        toggle = true;
    }

});

$("#recipe-submit-button").on("click", function () {

    let userInput = $('#recipe-input').val().trim();

    let YOUR_APP_ID = '13d7fa80';
    let YOUR_APP_KEY = '184c76885e08b40ef3ce55652516e374';
    let queryURL = `https://api.edamam.com/search?q=${userInput}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

    });

});

$("#drink-submit-button").on("click", function () {

    let userInput = $('#drink-input').val().trim();

    let queryURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

    });

});


