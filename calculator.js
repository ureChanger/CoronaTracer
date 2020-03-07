function coronaCalculator(latCorona, lngCorona, latUser, lngUser){
    var distance;
    var radius = 6371; // 지구 반지름(km)
    var toRadian = Math.PI / 180;

    var deltaLatitude = Math.abs(latCorona - latUser) * toRadian;
    var deltaLongitude = Math.abs(lngCorona - lngUser) * toRadian;

    var sinDeltaLat = Math.sin(deltaLatitude / 2);
    var sinDeltaLng = Math.sin(deltaLongitude / 2);
    var squareRoot = Math.sqrt(
        sinDeltaLat * sinDeltaLat +
        Math.cos(latCorona * toRadian) * Math.cos(latUser * toRadian) * sinDeltaLng * sinDeltaLng);

    distance = 2 * radius * Math.asin(squareRoot);

    return distance;
}

function calculateAndDisplayRoute(directionsService, directionsRenderer, ptsDict, transportation){
    directionsService.route({
        origin: ptsDict.origin,
        destination: ptsDict.destination,
        waypoints:ptsDict.waypts,
        optimizeWaypoints: true,
        travelMode: transportation
    });
}