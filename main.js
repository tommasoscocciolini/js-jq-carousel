$(document).ready(function(){
  var iconNext = $(".fa-angle-right");
  var iconPrev = $(".fa-angle-left");
  // var imagesBox = $(".images")

  iconNext.click(function(){
    var imageEl = $("img.active");
    var dotEl = $("i.active")
    if (imageEl.hasClass("last")) {
      $(".images").children(":first").addClass("active");
      imageEl.removeClass("active");

      $(".nav").children(":first").addClass("active");
      dotEl.removeClass("active");
    } else {
      imageEl.next().addClass("active");
      imageEl.removeClass("active");

      dotEl.next().addClass("active");
      dotEl.removeClass("active");
    }
  })

  iconPrev.click(function(){
    var imageEl = $("img.active");
    var dotEl = $("i.active");
    if (imageEl.hasClass("first")) {
      $(".images").children(":last").addClass("active");
      imageEl.removeClass("active");

      $(".nav").children(":last").addClass("active");
      dotEl.removeClass("active");
    } else {
      imageEl.prev().addClass("active");
      imageEl.removeClass("active");

      dotEl.prev().addClass("active");
      dotEl.removeClass("active");
    }
  })

})

$(document).keydown(function(e){
  if (e.keyCode==37) {
    var imageEl = $("img.active");
    var dotEl = $("i.active");
    if (imageEl.hasClass("first")) {
      $(".images").children(":last").addClass("active");
      imageEl.removeClass("active");

      $(".nav").children(":last").addClass("active");
      dotEl.removeClass("active");
    } else {
      imageEl.prev().addClass("active");
      imageEl.removeClass("active");

      dotEl.prev().addClass("active");
      dotEl.removeClass("active");
    }
  } else if (e.keyCode==39) {
    var imageEl = $("img.active");
    var dotEl = $("i.active")
    if (imageEl.hasClass("last")) {
      $(".images").children(":first").addClass("active");
      imageEl.removeClass("active");

      $(".nav").children(":first").addClass("active");
      dotEl.removeClass("active");
    } else {
      imageEl.next().addClass("active");
      imageEl.removeClass("active");

      dotEl.next().addClass("active");
      dotEl.removeClass("active");
    }
  }
})
