// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var apikey = "UuzY21WjoBgBxDEK";
var baseUrl = "http://api.songkick.com/api/3.0/search/venues.json?query=";
var form = $('#search');
var query = $('#search-venue');
var result = $("#results");

form.on("submit", search);

function search(e){
  e.preventDefault();

  var venuesSearchUrl = baseUrl + query + apikey;

  $.ajax({
    url: venuesSearchUrl,
    dataType: "jsonp",
    success: searchCallback
  });
}

$.getJSON("http://api.songkick.com/api/3.0/search/venues.json?query=" + query + "&apikey=" + apikey + "&jsoncallback=?", function(data){
 var venues = data['resultsPage']['results']['venue'];
 for (var i=0;i < venues.length; i++) {
   $("#venues").append('<div class="displayName"><li>' + venues[i]['displayName']+'</li></div>');
 }
});

function searchCallback(data) {
 // result.append('Found ' + data.total + ' results for ' + query);
 var venues = data.resultsPage;
 $.each(venues, function(index, venue) {
  result.append(venue.results.venue.displayName);
});

 $(".submit_buttons").on("submit",function(event){
  event.preventDefault();
  // var img_src = this.nextSibling.nextSibling.getAttribute('src');
  // var movie_id = this.firstChild.getAttribute("id");
  // var img_id = $(this).closest("img");
  // $.ajax({
  //   type: "POST",
  //   url: "/venues/",
  //   data: {venue_id: venue_id,
  //     img_src: img_src
  //   }
});
};