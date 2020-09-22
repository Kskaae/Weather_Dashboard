$(document).ready(function () {
    const apiKey = "d34d2fad2189d0cb0405954862d69d92"
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Boise&appid=" + apiKey;
    console.log(queryURL)

    let location = "";
    // AS A traveler
    // I WANT to see the weather outlook for multiple cities
    // SO THAT I can plan a trip accordingly
    // 
    // ## Acceptance Criteria

    // 
    // GIVEN a weather dashboard with form inputs
    let formEL = document.getElementById("")




    // WHEN I search for a city
    $(".btn-submit").click(function () {
        console.log("here")
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
const data = response
$("#boise .temp").text("temperature " + data.main.temp )
        })
    })

    // THEN I am presented with current and future conditions for that city and that city is added to the search history
    //Ajax call

    // WHEN I view current weather conditions for that city
    //     $("#city").html("<card>" + response.name + "<card>");
    //     $("#temp").text("temperature:" + temp);
    //     $("#humidity").text("Humidity: " + response.main.humidity + "%");
    //     $("#wind") 
});
// THEN I am presented with the city name, the icon re-date, ane presentation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// Create UV index ajax call 
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast