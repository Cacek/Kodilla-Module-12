$(document).ready(function () {
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries')
    var flag = 'https://restcountries.eu/data/col.svg'

    $('#search').click(searchCountries);
    
    $('#search').keyup(function(event){
        if(event.keyCode == 13){
            $('#search').click(searchCountries);
        }
    });

    function searchCountries() {
        var countryName = $('#country-name').val();
        if (!countryName.length) countryName = 'Poland';
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });

    }

    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function (item) {
            var countryName = $('.country-name')
            var countryCode = item.alpha3Code;
            var capital = $('.capital');
            var lang = $('.lang');
            var area = $('.area');
            var population = $('#population');
            var currencies = $('#currencies');
            $(countryName).text('Country: ' + item.name);
            $('img').attr({
                src: "https://restcountries.eu/data/" + countryCode.toLowerCase() + ".svg"
            }).appendTo('img').css("width", "100");
            $(capital).text('Capital: ' + item.capital).prepend(capital);
            $(lang).text('Languages: ' + item.languages).appendTo('.lang');
            $(area).text('Area: ' + item.area).appendTo('.area');
            $(population).text('Population: ' + item.population).appendTo('#population');
            $(currencies).text('Currencies: ' + item.currencies).appendTo('#currencies');
        });
    }

});
