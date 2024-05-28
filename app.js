$(function () {
  $(".card__container-information").slideUp();
  $(".card__container-heading").click(function () {
    // reset($(this));
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
  });
});
/* for only one is active */

// const reset = (selectingElement) => {
//   $(".khung").not(selectingElement.parent()).removeClass("active");
//   $(".khung-info").not(selectingElement.next()).slideUp();
// };
