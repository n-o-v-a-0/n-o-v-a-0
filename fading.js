$(document).ready(function () {
    $("body").fadeIn();

    // Fade out body when any link is clicked
    $("a").on("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior
      var href = $(this).attr("href");
      $("body").fadeOut(function () {
        window.location.href = href; // Redirect to the link after fadeout
      });
    });
  });