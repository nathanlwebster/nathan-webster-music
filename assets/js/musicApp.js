//window.musicList = "jeremy is wrong";

var app = angular.module("musicApp", []); 

 app.factory('songList', function() {

	var songs =[];
	var mySongService = {};

	mySongService.song = function(item) {
		var index = songs.indexOf(item);
		return songs[index];
	};

	mySongService.addItem = function(item) {
		songs.push(item);
	};

	mySongService.removeItem = function(item) {
		var index = songs.indexOf(item);
		items.splice(index, 1);
	};

	mySongService.songs = function() {
		return songs;
	};

	return mySongService;
});

function musicCtrl($scope, songList) {
	$scope.newItem = {};
	$scope.songList = songList;
} 