// Function to fetch food items from an external API
export async function fetchFoodItems() {
    // Define headers for the API request
    const headers = {
        'X-RapidAPI-Key': '986b21f7b7msh82c4501b9def4bbp1226f9jsn3ae4a161f101',
        'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
    };

    // Make the API request to fetch food items
    const response = await fetch('https://the-mexican-food-db.p.rapidapi.com/', {
        headers: headers,
    });

    // Check if the response is not OK (status code 200-299)
    if (!response.ok) {
        // Throw an error if the network response was not ok
        throw new Error('Network response was not ok ' + response.statusText);
    }

    // Parse the response JSON data
    const result = await response.json();

    // Return the result data
    return result;
}
