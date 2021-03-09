$.ajax({
    url: 'https://api.thecatapi.com/v1/breeds',
    type: 'GET',
    dataType: 'json',
    headers: { 'x-api-key': '21a698bf-634b-4dea-a5f9-e40cb9f9cbd7' },
    success: function (data) {
        for (let i = 0; i < data.length; i++) {
            $('#breed_select').append('<option id="' + data[i].id + '">' + data[i].name + '</option>')
        }



        $('select').on('change', function () {
            var id = $('option:selected').attr('id')
            $('#catImg').html("");
            $('.jumbotron').html("");

            $.ajax({
                url: 'https://api.thecatapi.com/v1/images/search?include_breed=1&breed_id=' + id,
                type: 'GET',
                dataType: 'json',
                headers: { 'x-api-key': '21a698bf-634b-4dea-a5f9-e40cb9f9cbd7' },
                success: function (result) {
                    $('#catImg').append('<img src="' + result[0].url + '" class="img-fluid">')
                }
            })


            for (let i = 0; i < data.length; i++) {
                if (data[i].id === id) {
                    $('.jumbotron').append('<h3 class="display-4">' + data[i].name + '</h3>')
                    $('.jumbotron').append('<p class="lead">' + data[i].description + '</p>')
                    $('.jumbotron').append('<hr class="my-4">')
                    $('.jumbotron').append('<p><strong>Origin Country</strong>: ' + data[i].origin + '</p>')
                    $('.jumbotron').append('<p><strong>Life Span</strong>: ' + data[i].life_span + ' years</p>')
                    $('.jumbotron').append('<p><strong>Temprament</strong>: ' + data[i].temperament + '</p>')
                    $('.jumbotron').append('<p><strong>Average Weight</strong>: ' + data[i].weight.metric + ' kg</p>')
                    break;
                }
            }


        })

    }
})


