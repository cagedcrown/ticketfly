// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

<<<<<<< HEAD
$(document).ready(function(){
// http://songkick.com
  //2. when the user submits a form
  $("#search").on("submit", function( event ){
    event.preventDefault(); 
    // get the user input and save it
    var input = $("#venue-search").val();
    var apikey = "UuzY21WjoBgBxDEK";
    var url = "http://api.songkick.com/api/3.0/search/venues.json?query=" + input + "&apikey=" + apikey + "&jsoncallback=?";
    // ask the api for data
    $.ajax({
      url: url,
      dataType: "jsonp",
      method: "GET",
      success: function(response){
        // console.log(response);
        displayResults(response, input);
      },
    });
  });
});
function displayResults( response, input ){
  var apikey = "UuzY21WjoBgBxDEK";
  $.getJSON("http://api.songkick.com/api/3.0/search/venues.json?query=" + input + "&apikey=" + apikey + "&jsoncallback=?", function(data){
  var venues = data['resultsPage']['results']['venue'];
  var results = $(".content").append($("<ul></ul>").addClass("results-list"));
  for (var i=0; i < venues.length; i++) {
    var displayName = venues[i]['displayName'];
    var website = venues[i]['website'];
    var city = venues[i]['city']['uri', 'displayName'];
    var state = venues[i]['metroArea']['state']['displayName'];
    var street = venues[i]['metroArea', 'street'];
    var metroArea = venues[i]['metroArea', 'phone'];
=======
var apikey = "UuzY21WjoBgBxDEK";
var baseUrl = "http://api.songkick.com/api/3.0/search/venues.json?query=";
var form = $('#search');
var query = $('#search-venue');
// var result = $("#results");
>>>>>>> bada965c4d634aa3dd7293c290b2d2853058b123

    var resultContainer = $("<li></li>");
    resultContainer.append($("<h2></h2>").addClass("displayName").html(displayName));
    resultContainer.append($("<p></p>").addClass("city").html(city));
    resultContainer.append($("<p></p>").addClass("state").html(state));
    resultContainer.append($("<p></p>").addClass("street").html(street));
    resultContainer.append($("<p></p>").addClass("metroArea").html(metroArea));
    resultContainer.append($("<a></a>").addClass("website").attr('href', website).html(website));

    $(".results-list").append(resultContainer);
 }
});
}

//___________________________________________________________________________


// $.getJSON("http://api.songkick.com/api/3.0/search/venues.json?query=" + query + "&apikey=" + apikey + "&jsoncallback=?", function(data){
//  var venues = data['resultsPage']['results']['venue'];
//  for (var i=0;i < venues.length; i++) {
//    $("#venues").append('<div class="displayName"><li>' + venues[i]['displayName']+'</li></div>');
//  }
// });

// function searchCallback(data) {
//  // result.append('Found ' + data.total + ' results for ' + query);
//  var venues = data.resultsPage;
//  $.each(venues, function(index, venue) {
//   result.append(venue.results.venue.displayName);
// });

//  $(".submit_buttons").on("submit",function(event){
//   event.preventDefault();
//   // var img_src = this.nextSibling.nextSibling.getAttribute('src');
//   // var movie_id = this.firstChild.getAttribute("id");
//   // var img_id = $(this).closest("img");
//   // $.ajax({
//   //   type: "POST",
//   //   url: "/venues/",
//   //   data: {venue_id: venue_id,
//   //     img_src: img_src
//   //   }
// });
// };