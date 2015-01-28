// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
// http://songkick.com
//1. hide the dropdown menu
  $("#venue-select").hide();

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
        console.log(response);
      },
    });
  });
});

function createDropdown( response, keyword ){
  // populate the dropdown
  var dropdown = $("#venue-select");
  dropdown.empty();
  // make first option "Venues matching keyword"
  dropdown.append("<option>Venues matching "+ keyword +"</option>")
  for( var i = 0; i < response.Search.length; i++){
    var venue = response.Search[i];
    dropdown.append("<option value='"+ venue.displayName +"'></option>");
  }

  // show the dropdown
  dropdown.show();
}

// //3. When the user chooses a dropdown item
// $("#venue-select").on("change", function(){
//   var id = $(":selected").val();
//   var url = "http://api.songkick.com/api/3.0/search/venues.json?query=" + songkick_venue_id;
//   // ask the api for info about item
//   $.getJSON(url, function( response ){
//     console.log( response );
//     // populate the title
//     $("#venue-detail").html("<h2>"+ response.songkick_venue_name +"</h2>");
//     // populate the image
//     $("#venue-detail").append("<img src='"+ response.songkick_venue_img +"'>");
//   });
  
// });

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