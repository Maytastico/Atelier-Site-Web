

$(document).foundation()

$(document).ready(function() {
    $("#lightSlider").lightSlider({
      item: 1,
      loop:true,
      slideMargin: 0,
      thumbItem: 9,
      auto: true,
      loop: true,
      pause: 12000,
      speed: 1000,
      pager: false,
      controls: false,
      enableTouch:true,
      enableDrag:true,
    });
});

