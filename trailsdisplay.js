
    var countryLat = [{'name': 'ireland', 'lat': '53.1424'},{'name': 'italy', 'lat': '41.8719'}];
    var selectedCountryLat = countryLat.find(selectedCountryLat => selectedCountryLat.name === 'ireland');
    console.log(selectedCountryLat.lat);