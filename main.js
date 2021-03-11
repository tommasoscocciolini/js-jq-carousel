$(document).ready(function(){
  var iconNext = $(".fa-angle-right");
  var iconPrev = $(".fa-angle-left");


  iconNext.click(function(){
    nextImg();
    })

  iconPrev.click(function(){
    prevImg()
  })
})

$(document).keydown(function(e){
  if (e.keyCode==37) {
    prevImg();
  } else if (e.keyCode==39) {
    nextImg();
  }
})


function nextImg(){
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

function prevImg(){
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
}
