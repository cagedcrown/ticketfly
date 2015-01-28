// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

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
  for (var i=0; i < venues.length; i++) {
    $("#venues").append('<div class="displayName"><li>' + venues[i]['displayName'] + '</li></div>');
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