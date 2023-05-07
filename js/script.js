/*================================
    1. slicknav Mobile Menu
  ==================================*/
$(function () {
  $("#menu_two").slicknav({
    closeOnClick: true, //Close menu when a link is clicked.
    appendTo: ".mobile_menu_load", //mobile menu show
  });
});

/*  ================================
      2. OnePageNave
    ==================================*/
jQuery(".scroll").onePgaeNav({
  wrapper: ".onepage-nav",
});
/*================================
      3. Magnific Popup
  ==================================*/
$(".gallery-item").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
  },
});
/*================================
      4. CounterUP
  ==================================*/

$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

/*================================
      5. owlCarousel
  ==================================*/
$(".owl-carousel").owlCarousel({
  loop: true,
  items: 2,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplaySpeed: 800,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

/*================================
  6. Ajax Contact Form
  ==================================*/
$(".screen-reader-response").hide();
$("form#cf button#cnt_submit").on("click", function () {
  var name = $("#name").val();
  var email = $("#email").val();
  var msg = $("#msg").val();
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!regex.test(email)) {
    alert("Please enter valid email");
    return false;
  }

  name = $.trim(name);
  email = $.trim(email);
  msg = $.trim(msg);

  if (name != "" && email != "" && msg != "") {
    var values = "name=" + name + "&email=" + email + " &msg=" + msg;
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: values,
      success: function () {
        $("#name").val("");
        $("#email").val("");
        $("#msg").val("");

        $(".screen-reader-response")
          .fadeIn()
          .html(
            '<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>'
          );
        setTimeout(function () {
          $(".screen-reader-response").fadeOut("slow");
        }, 4000);
      },
    });
  } else {
    console.log(name, email, msg);
    $(".screen-reader-response")
      .fadeIn()
      .html(
        '<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>'
      );
  }
  return false;
});
