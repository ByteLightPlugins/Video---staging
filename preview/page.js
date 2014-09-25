if(BL.isTablet()){
  $('.overlay').addClass('tablet')
}
else{
  $('.overlay').addClass('phone')
  $('.headline').addClass('phone-headline')
  $('.subheadline').addClass('phone-subheadline')
  $('.play-icon').addClass('phone-play-icon')
  $('.preview').addClass('phone-preview')
}

$('.play-icon').on('click', function(){
  if(BL.isTablet()){
    $('video').addClass('tablet')
  }
  else{
    $('video').addClass('phone')
  }
  
  $('#demoVideo2').removeClass('hidden');
  $('.background').addClass('hidden');
  
  var video = $('#demoVideo2 video')[0]
  var playVideo = function(){
    video.play();
    $('video').off('pause').on('pause', function(){
      $('#demoVideo2').addClass('hidden');
      $('.background').removeClass('hidden');
    });
  }
  
  if(video.readyState > 0){
    setTimeout(function(){
      $('#demoVideo2 video')[0].load()
    }, 300);
    setTimeout(playVideo, 600);
  }
  else{
    playVideo();
  }
})
