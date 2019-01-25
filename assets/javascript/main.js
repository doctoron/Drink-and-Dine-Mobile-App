$(document).ready(function () {

    let toggle = true;

    $('#recipe-div').hide();

    $('#switch').on('click', function () {

        console.log('triggered')

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
});