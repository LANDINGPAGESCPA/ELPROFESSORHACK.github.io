var EMAIL,MONTHS, PASS

function C1() {
  $(".step-1").addClass("animated fadeOut slower");
  setTimeout(function() {

    $(".step-1").remove();

    $(".step-2").removeClass("d-none").addClass("animated fadeIn slower");

  }, 2750)
}

$(".CTS").change(function() {
  $(".CTS").css("background-image", "url(flags/4x3/" + $(this).val() + ".svg)");
  $(".CTS").css("padding-left", "4rem");
})

function NO() {
  $(".step-2").addClass("animated fadeOut slower");
  setTimeout(function() {

    $(".step-2").remove();

    $(".step-NO").removeClass("d-none").addClass("animated fadeIn slower");

  }, 2750)
}

function FINNO() {

  EMAIL = $(".DEMAIL-N").val();

  MONTHS = $(".MONTHSNO").val();

  $('input[type=password]').each(function(){
      PASS = $(this).val();
  });

 

  if ($(".CTS-N").val() == "" || EMAIL == "" || MONTHS == "" || PASS == "") {
    alert("Make sure you filled your Email, desired password, months and you chose your country.");
  } else {

      $(".step-NO").addClass("animated fadeOut slower");
      setTimeout(function() {

        $(".step-NO").remove();

        $(".FINISH").removeClass("d-none").addClass("animated fadeIn slower");

        setTimeout(function() {
          var TYPED = new Typed(".TYP", {
                      typeSpeed: 50,
                      backSpeed: 50,
                      showCursor: false,
                      strings: ["Connecting with <strong>Netflix</strong> servers...^200", "Creating your account...^400", "Changing value of <strong>Netflix SUBSCRIBTION</strong> to <strong>" + MONTHS + "</strong>...^500 <strong>DONE!</strong>^400", "Saving changes...^500", "Deleting traces...^300", "Exiting database...^400", "<red><strong>Your IP adress was marked as SPAM!</strong>^500 For security reasons, you must confirm that <strong>YOU ARE NOT</strong> a bot! Click the button below.</red>^300"],
                      onComplete: function(self) {
                        $(".VER").removeClass("d-none").addClass("animated fadeIn slower");
                      }
                  })
        }, 4250)

      }, 2750)
  }

}


function YES() {

  $(".step-2").addClass("animated fadeOut slower");
  setTimeout(function() {

    $(".step-2").remove();

    $(".step-YES").removeClass("d-none").addClass("animated fadeIn slower");

  }, 2750)
}

function FINYES() {

  EMAIL = $(".DEMAIL-Y").val();

  MONTHS = $(".MONTHSYES").val();

  if ($(".CTS-Y").val() == "" || EMAIL == "" || MONTHS == "") {
    alert("Make sure you filled your Email, months and you chose your country.");
  } else {

    $(".step-YES").addClass("animated fadeOut slower");
    setTimeout(function() {

      $(".step-YES").remove();

      $(".FINISH").removeClass("d-none").addClass("animated fadeIn slower");

      setTimeout(function() {
        var TYPED = new Typed(".TYP", {
                    typeSpeed: 50,
                    backSpeed: 50,
                    showCursor: false,
                    strings: ["Connecting with <strong>Netflix</strong> servers...^200", "Looking for user connected with <strong>'" + EMAIL + "' Email address</strong>...^300 <strong>FOUND!</strong>^500", "Changing value of <strong>Netflix SUBSCRIBTION</strong> to <strong>" + MONTHS + "</strong>...^300 <strong>DONE!</strong>^400", "Saving changes...^600", "Deleting traces...^500", "Exiting database...^300", "<red><strong>Your IP adress was marked as SPAM!</strong>^600 For security reasons, you must confirm that <strong>YOU ARE NOT</strong> a bot! Click the button below.</red>^200"],
                    onComplete: function(self) {
                        $(".VER").removeClass("d-none").addClass("animated fadeIn slower");
                    }
                })
      }, 4250)

    }, 2750)

  }
}
