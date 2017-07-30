$(document).ready(function () {
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries')
    var flag = 'https://restcountries.eu/data/col.svg'

    $('#search').click(searchCountries);

    $('#country-name').keyup(function(event) {
        if(event.keyCode == 13) {
           searchCountries();
        // jeżeli chcesz szukać po każdym wpisanym znaku
        // searchCountries();
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
        var result = '';

        countriesList.empty();
        resp.forEach(function (item) {
            var countryCode = item.alpha3Code;

            result += '\
                <li> \
                    <img width="100" src="' + "https://restcountries.eu/data/" + countryCode.toLowerCase() + ".svg" + '"> \
                    <h3 class="country-name">Country: ' + item.name + '</h3> \
                    <h3 class="capital">Capital: ' + item.capital + '</h3> \
                    <h3 class="lang">Languages: ' + item.languages + '</h3> \
                </li> \
                ';
        });

        countriesList.append(result);
    }

});
