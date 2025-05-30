document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([43.688010, -79.394099], 11);

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'jpg'
    }).addTo(map);

    console.log("Map initialized.");

    const cycleDeathData = [
        { "Age": 45, "Coordinates": [43.713045, -79.411790], "Year": 2006, "Month": 4 },
        { "Age": 15, "Coordinates": [43.763445, -79.490990], "Year": 2006, "Month": 4 },
        { "Age": 45, "Coordinates": [43.715945, -79.353490], "Year": 2006, "Month": 9 },
        { "Age": 45, "Coordinates": [43.760445, -79.386590], "Year": 2007, "Month": 6 },
        { "Age": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8 },
        { "Age": 40, "Coordinates": [43.751145, -79.306490], "Year": 2007, "Month": 9 },
        { "Age": 55, "Coordinates": [43.704245, -79.410290], "Year": 2008, "Month": 5 },
        { "Age": 50, "Coordinates": [43.697345, -79.498990], "Year": 2008, "Month": 9 },
        { "Age": 65, "Coordinates": [43.655845, -79.399190], "Year": 2009, "Month": 9 },
        { "Age": 25, "Coordinates": [43.637945, -79.458990], "Year": 2010, "Month": 9 },
        { "Age": 60, "Coordinates": [43.638445, -79.392190], "Year": 2010, "Month": 11 },
        { "Age": 80, "Coordinates": [43.693845, -79.338490], "Year": 2011, "Month": 8 },
        { "Age": 35, "Coordinates": [43.650645, -79.442990], "Year": 2011, "Month": 11 },
        { "Age": 15, "Coordinates": [43.767646, -79.189586], "Year": 2012, "Month": 7 },
        { "Age": 55, "Coordinates": [43.650045, -79.386290], "Year": 2012, "Month": 11 }

    ];

    console.log("Death data loaded:", cycleDeathData);

    cycleDeathData.forEach(function (entry) {const marker = L.marker(entry.Coordinates).addTo(map);
            marker.bindPopup(`
                <b>Cyclist Death</b><br>
                Age: ${entry.Age}<br>
                Date: ${entry.Month}/${entry.Year}<br>
            `)});
            })