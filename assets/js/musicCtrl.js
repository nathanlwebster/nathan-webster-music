
app.controller('musicCtrl', function($scope, $http) {
    
    	    var url = "json/music.json";
               $http.get(url).success( function(response) {
               $scope.musicList = response;
            });
         






    	/*
		$scope.newSong = {};
		$scope.songList = songList;


    	$scope.musicList = musicList;
    	$scope.newItem = {};
		

    	$window.musicList;

    	console.log($scope.musicList);*/
     
});




    
