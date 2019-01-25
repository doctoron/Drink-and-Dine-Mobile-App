$(document).ready(function () {

    let toggleDrink = true;
    let toggleFood = true;

    $('#recipe-div').hide();
    $('#drink-div').hide();

    $('#switch-drink').on('click', function () {

        console.log('triggered')

        if (toggleDrink) {
            $('#drink-div').show();

            $('#switch-drink').prop('checked', true).change()

            toggleDrink = !toggleDrink;

        } else if (!toggleDrink) {
            $('#drink-div').hide();

            $('#switch-drink').prop('checked', false).change();

            toggleDrink = !toggleDrink;
        }

    });

    $('#switch-food').on('click', function () {

        console.log('triggered')

        if (toggleFood) {
            $('#recipe-div').show();

            $('#switch-food').prop('checked', true).change()

            toggleFood = !toggleFood;

        } else if (!toggleFood) {
            $('#recipe-div').hide();

            $('#switch-food').prop('checked', false).change();

            toggleFood = !toggleFood;
        }

    });
});
