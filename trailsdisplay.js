
    var countryLat = [{'name': 'ireland', 'lat': '53.1424'},{'name': 'italy', 'lat': '41.8719'}];
    var selectedCountryLat = $.grep(countryLat, function(e){ return e.name == 'ireland'; });
    console.log(selectedCountryLat);