'use strict';

//FIXED NAV
if ($(".fixme")[0]) {
  var fixmeTop = $('.fixme').offset().top - 70;
  $(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
      $('.fixme').addClass('fixed');
    } else {
      $('.fixme').removeClass('fixed');
    }
  });
}
//END FIXED NAV

//AOS Issue on IE
// function getOS() {
//   var OSName = "Unknown";
//   if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
//   if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
//   if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
//   if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
//   if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
//   if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
//   if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
//   if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
//   if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
//
//   console.log("in getOS");
//   console.log("OSName: ", OSName);
//   msieversion()
// }

//ref: https: //github.com/ michalsnik/aos/issues/57
//https: //stackoverflow.com/questions/19999388/ check-if-user-is-using-ie-with-jquery
//the class aos-animate (which appears on scroll and gives the delayed effect) is not getting added on chrome
function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0) // If Internet Explorer, return version number
    {
      $("[data-aos^=fade][data-aos^=fade]").css("opacity", "1");
      // console.log("***************", OSName);
    }
}
//END AOS Issue

//BEGIN YT Player
var ytPlayer;
var claytonVideo = "Ak4gBgXIXdk";

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('vehicleYT', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onYouTubePlayerStateChange
    }
  });
}

// ref: https://stackoverflow.com/questions/15090782/ youtube-autoplay-not-working-on-mobile-devices-with-embedded-html5-player
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  var id = ytPlayer.getVideoData()['video_id'];

  if (id == "IV2WQRkBVM8") {
    _satellite.setVar('videoname', "'Linda' – Honda Certified Pre-Owned Vehicles");
  } else if (id == "K5Q2ko-_EZ4") {
    _satellite.setVar('videoname', "'Joswin' – Honda Certified Pre-Owned Vehicles");
  } else if (id == "Ak4gBgXIXdk") {
    _satellite.setVar('videoname', "'Clayton & Amanda' – Honda Certified Pre-Owned Vehicles");
  }
  _satellite.track('torch_video_start');
}

function onYouTubePlayerStateChange(event) {

  if (event.data == YT.PlayerState.ENDED) {
    var id = ytPlayer.getVideoData()['video_id'];

    if (id == "IV2WQRkBVM8") {
      _satellite.setVar('videoname', "'Linda' – Honda Certified Pre-Owned Vehicles");
    } else if (id == "K5Q2ko-_EZ4") {
      _satellite.setVar('videoname', "'Joswin' – Honda Certified Pre-Owned Vehicles");
    } else if (id == "Ak4gBgXIXdk") {
      _satellite.setVar('videoname', "'Clayton & Amanda' – Honda Certified Pre-Owned Vehicles");
    }
    _satellite.track('torch_video_complete');
  }
}

$(document).ready(function () {
  msieversion();
  // getOS()
  // Video player Start   //   - Open video overlay //   - Close video overlay
  var $btn_video = $('.btn-video');
  var $video_overlay = $('.video-overlay');
  // Open video overlay onclick
  $btn_video.on('click', function (e) {
    //get video ID from bttn
    var videoid = $(this).attr("data-videoId");
    $(".video-wrapper").find("iframe").remove();
    $('<iframe width="100%" height="100%" frameborder="0" id="vehicleYT" allowfullscreen></iframe>').attr("src", "https://www.youtube.com/embed/" + videoid + "?autoplay=1&enablejsapi=1").appendTo(".video-wrapper");
    onYouTubeIframeAPIReady();
    $video_overlay.removeClass('hidden');
    // e.preventDefault();
  });

  // Close video overlay onclick
  $('.video-player-background, .video-close').on('click', function (e) {
    //close popup
    $video_overlay.addClass('hidden');
    //remove active video
    $('.video-wrapper').find("iframe").remove();
    // e.preventDefault();
  });
  /*    Video player END      */
});

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 30,
    nav: true,
    navText: ["<img src='/images/passing-the-torch/icons/left-arrow.png'>", "<img src='/images/passing-the-torch/icons/right-arrow.png'>"],
    navClass: ['owl-prev', 'owl-next'],
    dots: true,
    lazyLoad: true

  });
});
//# sourceMappingURL=passing-the-torch.js.map
