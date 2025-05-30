$(document).ready(function() {
    console.log("Poem page ready.");

    // Use jQuery's getJSON method to fetch data from poem.json
    $.getJSON("poem.json", function(data) {
        console.log("Poem data loaded:", data);

        let poemHtml = "<blockquote>"; // Start the blockquote for the poem

        // Iterate through each line in the data (data.lines is the array of lines)
        data.lines.forEach(function(lineArray) {
            poemHtml += "<p>"; // Start a paragraph for the line

            // Iterate through each word object in the current lineArray
            lineArray.forEach(function(wordObject) {
                // Check if the word has an 'info' property
                if (wordObject.info) {
                    // If yes, wrap the word in an <a> tag, store info in data-info attribute
                    // Use template literals for easier string construction
                    poemHtml += `<a href="#" class="info-term" data-info="${wordObject.info}">${wordObject.text}</a> `;
                } else {
                    // If no info, just add the word text
                    poemHtml += wordObject.text + " ";
                }
            }); // End word loop

            poemHtml += "</p>"; // End the paragraph for the line
        }); // End line loop

        poemHtml += "</blockquote>"; // End the blockquote

        // Replace the content of the #poem div with the generated HTML
        $("#poem").html(poemHtml);

        // --- Add Event Listener AFTER poem is loaded ---
        // Select all elements with class 'info-term' INSIDE #poem
        // Use .on() for event delegation - handles elements added dynamically
        $("#poem").on("click", ".info-term", function(event) {
            event.preventDefault(); // Prevent the default link behavior (jumping to '#')

            // Get the info text stored in the data-info attribute of the clicked element
            const infoText = $(this).data("info"); // jQuery's .data() reads data-* attributes
            
            // Display the info text in the #info div
            $("#info").append(`<p><strong>${$(this).text()}:</strong> ${infoText}</p>`);
    

            // Optional: Add a class to highlight the info area
            $("#info").addClass("active-info");
        });

    }).fail(function(jqXHR, textStatus, errorThrown) {
        // Handle errors if poem.json cannot be loaded
        console.error("Error loading poem.json:", textStatus, errorThrown);
        $("#poem").html("<p style='color:red;'>Error loading poem data.</p>");
    }); // End of $.getJSON


}); // End of $(document).ready()