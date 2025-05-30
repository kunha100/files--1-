document.addEventListener ('DOMContentLoaded', function() {
    const map = L.map('map').setView([43.688010 , -74.0060], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, // Max zoom level for these tiles
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); // Add the tile layer to our map instance

    console.log("Map initialized.");

    const timesSquareCoords = [40.7580, -73.9855];
    const timesSquareMarker = L.marker(timesSquareCoords).addTo(map);

    timesSquareMarker.bindPopup("<b>Times Square</b><br>Mentioned in Whitman's era context.");

    const gradCenterCoords = [40.7486, -73.9840];
    const gradCenterMarker = L.marker(gradCenterCoords).addTo(map)
        .bindPopup("The Graduate Center, CUNY"); 


        const circle = L.circle(timesSquareCoords, {
            color: 'red',       // Outline color
            fillColor: '#f03',   // Fill color
            fillOpacity: 0.3,  // Fill transparency (0-1)
            radius: 500        // Radius in meters
        }).addTo(map);
        circle.bindPopup("Approx. 500m radius around Times Square");



        const linePoints = [
            timesSquareCoords,  // Start point
            gradCenterCoords    // End point
        ];

        const polyline = L.polyline(linePoints, {
            color: 'blue'       // Line color
        }).addTo(map);
        polyline.bindPopup("Line from Times Square to Grad Center");

        const trianglePoints = [
            [40.7480, -73.9850],
            [40.7490, -73.9830],
            [40.7480, -73.9830],
            [40.7480, -73.9850]];

            const polygon = L.polygon(trianglePoints, {
                color: 'green',
                fillColor: '#0f0',
                fillOpacity: 0.4
            }).addTo(map);
            polygon.bindPopup("A sample polygon");
            
            map.on('click', function(e) { const coords = e.latlng;
                const popupContent = `You clicked at:<br>Lat: ${coords.lat.toFixed(4)}<br>Lng: ${coords.lng.toFixed(4)}`; L.popup()
                .setLatLng(coords) // Set its location
                .setContent(popupContent) // Set its content
                .openOn(map); // Open it on the map
            console.log(`Map clicked at: Lat ${coords.lat}, Lng ${coords.lng}`);
        });

        map.on('zoomend', function() {
            console.log("Current map zoom level:", map.getZoom());
        });

        var greenIcon = L.icon({
            iconUrl: 'leaf-green.png',
            shadowUrl: 'leaf-shadow.png',
        
            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        const momaCoords = [40.7615, -73.9782];
        const momaMarker = L.marker(momaCoords,{icon: greenIcon}).addTo(map).bindPopup("MOMA, New York"); 

        
    $("#zoomToNYC").on("click", function() {map.setView([40.7128, -74.0060], 13)})

    


})
