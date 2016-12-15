console.log('linked');

// prevent page from running function until page is loaded
$(document).ready(function() {

  $('.places-search').click(function(e) {
    console.log('clicked');
    e.preventDefault();

    // user selects option from drop down menu
    var link = $('select').val();

    if (link === 'sharehouses') {
      $('form').attr('action', '/sharehouses');
      $('form').submit()
    } else {
      $('form').attr('action', '/longterm');
      $('form').submit()
    }
  });

})
