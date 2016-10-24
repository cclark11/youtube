var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search/';

function getDataFromApi(searchTerm, callback) {
	var query = {
		part: 'snippet',
		key: 'AIzaSyB3DzDxdUuCkTaC_CzC-qk8hsYcXpIjbuU',
		q: searchTerm
	}
	$.getJSON(YOUTUBE_BASE_URL, query, callback);
}

function displayYoutubeSearchData(data) {
	data.items.forEach(function(item) {
		$("#search-results").append('<p><h2>'+item.snippet.title+'</h2><a href="https://www.youtube.com/watch?v='+item.id.videoId+'"><img src="'+item.snippet.thumbnails.default.url+'"></a></p>');
	});

}

function watchSubmit() {
	$(".js-search-form").submit(function(e){
		e.preventDefault();
		var query = $("#query").val();
		getDataFromApi(query, displayYoutubeSearchData);
	});
}

$(function() {
	watchSubmit();
});	
