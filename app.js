$(function () {
  $(".card__container-information").slideUp();
  $(".card__container-heading").click(function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
  });
});
