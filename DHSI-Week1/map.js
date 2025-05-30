document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([43.688010, -79.394099], 11);

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'jpg'
    }).addTo(map);

    console.log("Map initialized.");

    // Embed death data directly to avoid CORS issues
    const deathData = [
        {"Age": 45, "Coordinates": [43.713045, -79.411790], "Year": 2006, "Month": 4},
        {"Age": 15, "Coordinates": [43.763445, -79.490990], "Year": 2006, "Month": 4},
        {"Age": 45, "Coordniates": [43.715945, -79.353490], "Year": 2006, "Month": 9},
        {"Age": 45, "Coordniates": [43.760445, -79.386590], "Year": 2007, "Month": 6},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 40, "Coordinates": [43.751145 , -79.306490], "Year": 2007, "Month": 9},
        {"Age:": 55, "Coordinates": [43.704245, -79.410290], "Year": 2008, "Month": 5},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2008, "Month": 9},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2008, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},
        {"Age:": 5, "Coordinates": [43.782145, -79.303490], "Year": 2007, "Month": 8},

    ];
    
    console.log("Death data loaded:", deathData);
    
    // Loop through each entry in the data
    deathData.forEach(function(entry) {
        // Handle inconsistencies in the data
        let coordinates;
        if (entry.Coordinates) {
            coordinates = entry.Coordinates;
        } else if (entry.Coordniates) { // Handle typo in some entries
            coordinates = entry.Coordniates;
        }
        
        // Only create marker if coordinates are available
        if (coordinates && coordinates.length === 2) {
            // Get age (handle inconsistency with "Age:" vs "Age")
            let age = entry.Age || entry["Age:"] || "Unknown";
            
            // Create marker
            const marker = L.marker(coordinates).addTo(map);
            
            // Add popup with information
            marker.bindPopup(`
                <b>Traffic Death</b><br>
                Age: ${age}<br>
                Date: ${entry.Month}/${entry.Year}<br>
                Location: [${coordinates[0].toFixed(6)}, ${coordinates[1].toFixed(6)}]
            `);
        }
    });
});
