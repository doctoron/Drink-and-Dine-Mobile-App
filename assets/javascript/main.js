$(document).ready(function () {

    let toggleDrink = true;
    let toggleFood = true;

    $('#recipe-div').hide();
    $('#drink-div').hide();

    $('#switch-drink').on('change', function () {

        console.log('DRINK PRESSED')

        if (toggleDrink) {
            $('#drink-div').show();

            toggleDrink = !toggleDrink;

        } else if (!toggleDrink) {
            $('#drink-div').hide();

            toggleDrink = !toggleDrink;
        }

    });

    $('#switch-food').on('change', function () {

        console.log('FOOD PRESSED')

        if (toggleFood) {
            $('#recipe-div').show();

            toggleFood = !toggleFood;

        } else if (!toggleFood) {
            $('#recipe-div').hide();

            toggleFood = !toggleFood;
        }

    });
});
