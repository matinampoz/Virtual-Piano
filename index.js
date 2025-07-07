$(".hide-names").click(function () {

    $(".note").toggle();
    if ($(".note").first().is(":visible")) {
      $(this).text("Hide note names");
      $(this).removeClass("pressed")
    } else {
      $(this).text("Show note names");
      $(this).addClass("pressed")
  
    }
  });
  
  $(".key").click(function () {
      var key = $(this).attr("id");
      makeSound(key);
      buttonAnimation(key);
  });
  
  function makeSound(key) {
    switch (key) {
      case "c":
        var c = new Audio("sounds/c.mp3");
        c.play();
        break;
  
      case "d":
        var c = new Audio("sounds/d.mp3");
        c.play();
        break;
  
      case "e":
        var e = new Audio("sounds/e.mp3");
        e.play();
        break;
  
      case "f":
        var f = new Audio("sounds/f.mp3");
        f.play();
        break;
  
      case "g":
        var g = new Audio("sounds/g.mp3");
        g.play();
        break;
  
      case "a":
        var a = new Audio("sounds/a.mp3");
        a.play();
        break;
  
      case "b":
        var b = new Audio("sounds/b.mp3");
        b.play();
        break;
    }
  }
  function buttonAnimation(currentKey) {
    $("#" + currentKey).addClass("pressed");
    setTimeout(function () {
      $("#" + currentKey).removeClass("pressed");
    }, 100);
  }