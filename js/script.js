$('#modal').on('shown.bs.modal', function () {
  $('#previous-members').trigger('focus')
});

jQuery(document).ready(function ($) {
  $(".nav-link").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 800);
  });
});