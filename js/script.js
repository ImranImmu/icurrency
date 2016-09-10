$('document').ready(function(){
    getData();
});


function getData() {

        endpoint = 'live'
        access_key = '229c405abc823014522eca2d536e0f7e';

    $.ajax({
        url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {
            if(json['success'] === false){
                var trHTML = '<div class="text-vertical-center-container"><div  class="text-vertical-center"><h3>Sorry! Something Wrong Happened</h3><br>';
                trHTML+= '<button type="button" onclick="window.location.reload();"><div class="reloadButton"></div></button></div></div>';
            } else {
                var trHTML = '<tr><th>Currency</th><th>Value</th></tr>';
                $.each(json['quotes'], function (key, item) {
                    trHTML += '<tr><td>' + key.slice(3) + '</td><td>' + json['quotes'][key] + '</td></tr>';
                });
            }
            $('#currencyTable').append(trHTML);

        }
    });
}
