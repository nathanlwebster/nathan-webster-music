$(function() {
  $("button.navbar-toggle").click(function() {
    if ($('header').hasClass("showing")) {  
    $('header.content').animate({height:60},500);
    $('header.content').removeClass("showing");
    } else {
    $('header.content').animate({height:250},500);
    $('header.content').addClass("showing");
    } 
  });
});


window.songList=[];
$(function(){
	
  var model = {

    song: function(title, fileName) {

      this.title = title;
      this.fileName = fileName;
    },
    songList: []
  }

	var currentWidth = $(window).width();
	$(window).resize(function() {
		currentWidth = $(window).width();
		});


	if (currentWidth > 1000) {
		$(".bigIcons").hover(function(){
    	$(this).next().fadeTo(500, 1);
    	}, function(){
    	$(this).next().fadeTo(400, 0);
		 });  
	} 

/*json query to get music list */

/*
$.ajax("json/music.json"
  , {
    async: true,
    type: "GET",
    dataType: "jsonp"
  }
  ).always(function() {
    $scope.apply(function() {
      $scope.musicList = $scope.myMusicList;
      alert($scope.musicList);
    })
  });
*/




/*
    var urll = 'json/music.json';
      $.ajax({
      url:urll,
      dataType:"jsonp",
      crossDomain: true, 
      complete: function(response){
      $rootScope.$apply(function() {
      musicList = myMusicList;          
        });
      }

}); 
*/

/*
          for (i=0; i<musicList.length; i++) {
            var s = musicList[i];
            var sng = new model.song(s.title, s.fileName);
            model.songList.push(sng);
            songList.addItem(sng);
            console.log(songList[i]);


      }     */ 

/*
window.musicList= model.songList; 
*/


/*slide the menu in and out*/

	$(".icon").click(function(){
		$("#myTopnav").slideDown("slow");
	});
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    var x = document.getElementById("navContainer");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}






/*

var waitForFinalEvent = (function () {
  	var timers = {};
  	return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  	};
	})();



*/